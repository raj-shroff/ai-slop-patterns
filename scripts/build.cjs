const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const {categories,category,overrides,concepts}=require('../src/catalog.cjs');
const stableSlugs=require('../src/entry-slugs.json');
const root=path.resolve(__dirname,'..');
const md=fs.readFileSync(path.join(root,'content/ai-writing-signs-and-rules.md'),'utf8').replace(/\r\n/g,'\n');
const blocks=[...md.matchAll(/<a id="p(\d{3})"><\/a>\s*\n### P\d{3}\s+(?:—\s+)?([^\n]+)\n([\s\S]*?)(?=\n<a id=|\n## |$)/g)];
if(blocks.length!==143) throw Error(`Expected 143 entries, found ${blocks.length}`);
const titleMap=Object.fromEntries(blocks.map(m=>[Number(m[1]),overrides[Number(m[1])]||m[2]]));
function clean(s){return s.replace(/\*\*/g,'').replace(/\bP(\d{3})\b/g,(_,id)=>titleMap[Number(id)]||'the related pattern').replace(/\s+/g,' ').trim();}
const slug=s=>s.toLowerCase().normalize('NFKD').replace(/[’'“”]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const entries=blocks.map(m=>{
 const id=Number(m[1]),body=m[3];
 const field=(label)=>{const found=body.match(new RegExp('\\*\\*'+label+':\\*\\* ([\\s\\S]*?)(?=\\n\\n|$)'));if(!found)throw Error(`Missing ${label} in ${id}`);return clean(found[1]);};
 const description=clean(body.split('**Illustrative example:**')[0].split('\n\n').map(s=>s.trim()).filter(s=>s&&!s.startsWith('Source:')&&!s.startsWith('Source records:')).join(' '));
 const additionalExamples=[...body.matchAll(/^- \*\*([^\n]+?):\*\* (.+)$/gm)].map(m=>({label:clean(m[1]),example:clean(m[2])}));
 return {additionalExamples,slug:stableSlugs[id]||slug(titleMap[id]),title:titleMap[id],category:category(id),description,example:field('Illustrative example'),guidance:field('Editing guidance'),limit:field('Limit'),kind:id>=68&&id<=78?'Unreliable indicator':id>=79&&id<=84?'Historical pattern':category(id)==='context'?'Context matters':'',concepts:concepts.filter(c=>c.ids.includes(id)).map(c=>c.name)};
});
if(new Set(entries.map(e=>e.slug)).size!==143)throw Error('Duplicate slugs');
const sourceText=md.split('## Expanded source register and reading scope')[1]?.split('## Attribution')[0];
const sources=[...sourceText.matchAll(/### S\d+ — ([^\n]+)\s+Source: (https?:\/\/\S+)\s+([\s\S]*?)(?=\n### |$)/g)].map(m=>({title:clean(m[1]),url:m[2],description:clean(m[3].split('Limit:')[0]),limit:clean(m[3].split('Limit:')[1]||'')}));
if(sources.length!==23)throw Error(`Expected 23 sources, found ${sources.length}`);
const library=require('../src/library.cjs')(md,entries,clean,slug);
const data={library,categories,entries,sources:sources.map(({title,url})=>({title,url})),concepts:concepts.map(({name,phrases})=>({name,phrases})),sourceHash:crypto.createHash('sha256').update(md).digest('hex')};
const out=path.join(root,'dist');fs.mkdirSync(out,{recursive:true});
// Remove retired assets when rebuilding an existing output directory.
for(const name of ['checker.js','checker-ui.js','reference-compare.js'])fs.rmSync(path.join(out,name),{force:true});
for(const f of ['index.html','styles.css','app.js','search.js'])fs.copyFileSync(path.join(root,'src',f),path.join(out,f));
fs.writeFileSync(path.join(out,'data.js'),'/* Reference content: see Sources and NOTICE.md for attribution. */\nwindow.PATTERNS = '+JSON.stringify(data).replace(/</g,'\\u003c')+';\n');
fs.writeFileSync(path.join(out,'.nojekyll'),'');
for(const f of ['LICENSE','NOTICE.md'])fs.copyFileSync(path.join(root,f),path.join(out,f));
fs.mkdirSync(path.join(out,'downloads'),{recursive:true});
fs.copyFileSync(path.join(root,'content/ai-writing-signs-and-rules.md'),path.join(out,'downloads/ai-writing-signs-and-rules.md'));
fs.copyFileSync(path.join(root,'docs/references/AI-Writing-Source-Register.xlsx'),path.join(out,'downloads/source-register.xlsx'));
console.log(`Built ${entries.length} entries and ${sources.length} sources from Markdown. No dependencies.`);
module.exports=data;
