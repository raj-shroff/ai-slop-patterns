const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const data=require('../scripts/build.cjs'),{searchLibrary}=require('../src/search.js');
test('all requested sections and inventory terms are present',()=>{
 assert.equal(data.library.length,31);
 assert.equal(data.library.filter(c=>c.group==='Phrase collections').length,19);
 assert.equal(data.library.filter(c=>c.group==='Additional forms').length,6);
 assert.deepEqual(data.library.filter(c=>c.terms.length).map(c=>c.terms.length),[1345,250,407,132,31,65]);
 for(const c of data.library){assert.ok(c.paragraphs.length);assert.ok(c.related.length);assert.ok(c.related.every(s=>data.entries.some(e=>e.slug===s)));assert.doesNotMatch(JSON.stringify(c),/\bP\d{3}\b/);}
});
test('every searchable inventory term can be found in its own collection',()=>{
 for(const c of data.library)for(const term of c.terms)assert.ok(searchLibrary([c],term).some(r=>r.matches.some(m=>m.text===term)),term);
});
test('supplemental variants and uncommon words are searchable',()=>{
 for(const q of ['feature not a bug','not because','top-notch','multi-pronged','ALL-CAPS','paragraph ends','at its core','long final recaps','ablation','underexplored','gonna'])assert.ok(searchLibrary(data.library,q).length,q);
 assert.equal(searchLibrary(data.library,'zzzzzzqqqqq').length,0);
 assert.equal(searchLibrary(data.library,'').length,0);
 assert.ok(searchLibrary(data.library,'tapesrty').length);
});

test('search explanations, highlights and suggested queries',()=>{
 const api=require('../src/search.js');
 const result=api.createSearch(data.entries,data.concepts)('feature not a bug')[0];
 const detail=api.explain(result,'feature not a bug',data.concepts);
 assert.equal(detail.reason,'Matched in additional form');assert.match(detail.snippet,/feature/);
 assert.ok(api.segments('A FEATURE, not a bug.','feature not a bug').filter(p=>p.match).some(p=>p.text==='FEATURE'));
 const unsafe='<img src=x onerror=alert(1)> feature';assert.equal(api.segments(unsafe,'feature').map(p=>p.text).join(''),unsafe);
 assert.deepEqual(api.suggestQueries('repitition',data.entries,data.concepts,data.library),['repetition']);
 assert.ok(api.suggestQueries('therapy',data.entries,data.concepts,data.library).includes('therapy speak'));
 assert.deepEqual(api.suggestQueries('zzqqrr123',data.entries,data.concepts,data.library),[]);
 assert.equal(api.segments('just','just')[0].match,true);
});
