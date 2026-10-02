const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const data=require('../scripts/build.cjs');
const {createSearch}=require('../src/search.js');
const search=createSearch(data.entries,data.concepts);
test('all Markdown entries are complete, unique and have valid navigation categories',()=>{
 assert.equal(data.entries.length,138);assert.equal(new Set(data.entries.map(e=>e.slug)).size,138);
 for(const e of data.entries){for(const key of ['title','description','example','guidance','limit'])assert.ok(e[key]?.length>0,`${e.slug}: ${key}`);assert.ok(data.categories.some(c=>c.slug===e.category));assert.doesNotMatch(JSON.stringify(e),/\b[PS]\d{3}\b/);assert.doesNotMatch(e.description,/Source records:|Source:|Related Vale rule/);}
 assert.equal(data.sources.length,21);assert.ok(data.sources.every(s=>new URL(s.url).protocol==='https:'));
 assert.equal(data.entries.filter(e=>e.kind==='Unreliable indicator').length,11);
 assert.equal(data.entries.filter(e=>e.kind==='Historical pattern').length,6);
});
const queries=[
 ['not x its y','its-not-x-its-y'],['not this but that','its-not-x-its-y'],['negative parallelism','its-not-x-its-y'],
 ['says a lot but nothing','information-poor-generalities'],['word salad','information-poor-generalities'],['lots of words no substance','information-poor-generalities'],
 ['therapy speak','therapeutic-reassurance-without-a-need'],['your feelings are valid','therapeutic-reassurance-without-a-need'],
 ['same structure over and over','repeated-sentence-templates'],['cookie cutter','repeated-sentence-templates'],['repitition','repeated-words-and-restated-conclusions'],
 ['over the top adjectives','decorative-metaphor-and-adjective-overload'],['purple prose','decorative-metaphor-and-adjective-overload'],['delve tapestry','repeated-stock-vocabulary'],
 ['three things','forced-groups-of-three'],['heart pounding','stock-bodily-reactions-and-suspended-time'],['fake citations','multiple-apparently-fabricated-external-links'],
 ['sweeping generalization','unjustified-universal-claims'],['asks then answers','self-answered-rhetorical-questions'],['no specifics','missing-concrete-detail-and-interior-life'],
 ['both sides','reflexive-balance-or-missing-point-of-view'],['announces the essay','unnecessary-narration-of-the-document'],['everyone sounds the same','unnatural-sameness-across-quotations'],
 ['misses the point','answering-the-topic-but-missing-the-task'],['no logical connection','disconnected-reasoning-beneath-smooth-transitions'],['just works','stock-developer-product-promises'],
 ['forced optimism','predictably-uplifting-endings'],['pretending to know me','manufactured-intimacy-and-assumed-agreement'],['em dash','formulaic-em-dash-overuse'],
 ['not X, it’s Y','its-not-x-its-y']
];
for(const [query,target] of queries)test(`related-language retrieval: ${query}`,()=>assert.ok(search(query).slice(0,3).some(r=>r.entry.slug===target),JSON.stringify(search(query).slice(0,3).map(r=>r.entry.slug))));
test('empty, irrelevant, punctuation and adversarial queries stay safe',()=>{
 for(const q of ['','   ','🤖','zzqqrr123'])assert.equal(search(q).length,0);
 for(const q of ['<script>alert(1)</script>','" onmouseover="alert(1)',"' OR 1=1",'a'.repeat(40000)])assert.ok(Array.isArray(search(q)));
});
test('category filters and deterministic ranking',()=>{
 const a=search('repetition','language');assert.ok(a.length>0);assert.ok(a.every(r=>r.entry.category==='language'));assert.deepEqual(a,search('repetition','language'));
});
test('each title finds its own entry',()=>{for(const e of data.entries)assert.ok(search(e.title).slice(0,3).some(r=>r.entry.slug===e.slug),e.slug);});
test('build is self-contained and works without module fetches',()=>{
 const ctx={window:{}};vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../dist/data.js'),'utf8'),ctx);assert.equal(ctx.window.PATTERNS.entries.length,138);
 for(const file of ['index.html','app.js','search.js','styles.css']){const s=fs.readFileSync(path.join(__dirname,'../dist',file),'utf8');assert.doesNotMatch(s,/\bfetch\(|XMLHttpRequest|@import|https:\/\/.*(?:\.css|\.js)/);}
});
