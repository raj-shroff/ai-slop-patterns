const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const data=require('../scripts/build.cjs'),{searchLibrary}=require('../src/search.js');
test('removed entry stays out and collection links retain the right pattern after deletion',()=>{
 assert.ok(!data.entries.some(e=>e.id===18||e.slug==='headings-containing-only-other-headings'));
 assert.doesNotMatch(JSON.stringify(data),/Headings containing only other headings/);
 const c=data.library.find(c=>c.slug==='phrase-collections-collaborative-communication');
 assert.deepEqual(c.related,[data.entries.find(e=>e.id===28).slug]);
 for(const e of data.entries)for(const slug of e.collections||[])assert.ok(data.library.find(c=>c.slug===slug)?.related.includes(e.slug));
});
test('every collection has separate terms and original sentence examples',()=>{
 for(const c of data.library){
  assert.ok(c.items.length>0&&c.items.some(i=>i.example),c.title);
  assert.equal(c.items.length,c.terms.length);
  for(const i of c.items){assert.doesNotMatch(i.term,/;|<br>/);assert.equal(typeof i.example,'string');}
 }
 const c=data.library.find(c=>c.slug==='phrase-collections-significance-and-legacy');
 assert.equal(c.items.length,33);assert.ok(c.items.every(i=>i.example));
 assert.ok(searchLibrary([c],'footbridge')[0].matches.some(m=>m.item.example.includes('footbridge')));
});
test('measurements carry model, denominator, scope and source; no inference across word forms',()=>{
 const e=data.entries.find(e=>e.id===12);assert.equal(e.research[0].rows[0].finding,'157× human rate');
 assert.equal(e.research[0].rows[0].comparison,'GPT-6 Astra');
 for(const item of [...data.entries,...data.library])for(const study of item.research){
  assert.ok(study.scope&&study.source.title&&study.source.url.startsWith('https://'));
  assert.ok(study.rows.every(r=>r.finding&&r.expression&&r.comparison));
 }
 const c=data.library.find(c=>c.slug.includes('annotated-style'));
 const study=c.research.find(s=>s.source.url.includes('2406.07016'));
 assert.match(study.scope,/not AI-versus-human/);
 assert.deepEqual(study.rows.map(r=>r.expression),['delves','underscores','showcasing']);
 assert.ok(!data.library.find(c=>c.slug==='phrase-collections-characteristic-vocabulary').research.some(s=>s.rows.some(r=>r.expression==='delve')));
});
test('new examples show the behavior and keep explanatory context separate',()=>{
 for(const id of [16,19,23,25,27,94,120,123,130]){
  const e=data.entries.find(e=>e.id===id);assert.ok(e.notice);
  assert.doesNotMatch(e.example,/^A (?:page|report|paragraph)|^Each section has|^Every interviewee/);
 }
 assert.match(data.entries.find(e=>e.id===19).example,/\*\*strategy\*\*/);
 assert.match(data.entries.find(e=>e.id===25).example,/\n### Revenue/);
});
test('built HTML loads content-versioned assets',()=>{
 const html=fs.readFileSync('dist/index.html','utf8');
 for(const name of ['data','app','search','styles'])assert.match(html,new RegExp(name+'\\.[a-f0-9]{12}\\.(?:js|css)'));
});


test('public copy keeps source names and editing advice out of pattern pages and search',()=>{
 const publicText=JSON.stringify([data.entries,data.library]);
 assert.doesNotMatch(publicText,/wikipedia/i);
 assert.ok(data.sources.some(s=>/wikipedia/i.test(s.title)));
 for(const e of data.entries){
  assert.ok(e.notice.length>35,e.slug);
  assert.ok(!('guidance' in e)&&!('limit' in e)&&!('exampleContext' in e),e.slug);
 }
 const app=fs.readFileSync('src/app.js','utf8');
 assert.doesNotMatch(app,/study\.scope|study samples|Example written for this site|class="guidance"|class="context-note"/);
 assert.match(app,/What to notice/);
 assert.match(app,/Why this is not a tell/);
 assert.match(app,/code-example/);
 assert.ok(data.entries.find(e=>e.id===37).exampleFormat==='code');
 for(const e of data.entries)for(const study of e.research)for(const r of study.rows)assert.ok(r.summary.includes(r.expression)||r.expression==='em dashes');
});
