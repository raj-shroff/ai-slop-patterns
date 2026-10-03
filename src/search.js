(function(root){
 'use strict';
 const stop=new Set('a an the of to and or in on for with is it its this that these those be are was were have has do does can could would should how why what when where me my i you your we our ai writing slop tell tells pattern patterns please find about looks like text uses use using show get very'.split(' '));
 function normalize(s){return s.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[’']/g,'').replace(/[^a-z0-9]+/g,' ').trim();}
 function stem(s){if(s.length>6&&s.endsWith('ing'))return s.slice(0,-3);if(s.length>5&&s.endsWith('ed'))return s.slice(0,-2);if(s.length>4&&s.endsWith('s')&&!s.endsWith('ss'))return s.slice(0,-1);return s;}
 const tokens=s=>normalize(s).split(' ').filter(w=>w&&!stop.has(w)).map(stem);
 function distance(a,b){if(Math.abs(a.length-b.length)>2)return 3;let prev=Array.from({length:b.length+1},(_,i)=>i);for(let i=1;i<=a.length;i++){let curr=[i];for(let j=1;j<=b.length;j++)curr[j]=Math.min(curr[j-1]+1,prev[j]+1,prev[j-1]+(a[i-1]!==b[j-1]));prev=curr;}return prev[b.length];}
 function createSearch(entries,concepts){
  const docs=entries.map(e=>{const aliases=concepts.filter(c=>e.concepts.includes(c.name)).flatMap(c=>c.phrases).join(' ');const extra=(e.additionalExamples||[]).map(v=>v.label+' '+v.example).join(' ')+' '+(e.supplemental||[]).flatMap(s=>s.paragraphs).join(' ');const fields=[[extra,3],[e.title,7],[e.example,3],[aliases,3.5],[e.description,1.4],[e.guidance,.5],[e.limit,.25]];const weights=new Map();for(const [value,w]of fields)for(const t of new Set(tokens(value)))weights.set(t,(weights.get(t)||0)+w);return {e,weights,length:tokens(e.description).length,title:normalize(e.title),example:normalize(e.example+' '+extra)};});
  const vocab=new Set(docs.flatMap(d=>[...d.weights.keys()]));
  const df=new Map();for(const d of docs)for(const t of d.weights.keys())df.set(t,(df.get(t)||0)+1);
  return function search(query,category='all'){
   const q=normalize(query.slice(0,300));const raw=[...new Set(tokens(q))].slice(0,24);
   if(!q)return [];
   const corrections=new Map();for(const t of raw)if(!vocab.has(t)&&t.length>=4){let best=3,word='';for(const v of vocab){const d=distance(t,v);if(d<best){best=d;word=v;}}if(best<=(t.length>=8?2:1))corrections.set(t,word);}
   const ts=raw.map(t=>corrections.get(t)||t);
   const matched=concepts.filter(c=>c.phrases.some(p=>{const pn=normalize(p);if(q.includes(pn)&&pn.length>=4)return true;const pt=tokens(p);return pt.length>=2&&pt.every(t=>ts.includes(t));})).map(c=>c.name);
   return docs.filter(d=>category==='all'||d.e.category===category).map(d=>{
    let score=0,hits=0;for(const t of ts){let w=d.weights.get(t)||0;if(!w&&t.length>=4){for(const [v,n]of d.weights)if(v.startsWith(t)){w=Math.max(w,n*.45);}}
     if(w){hits++;score+=Math.log(1+entries.length/((df.get(t)||0)+1))*w;}}
    const conceptHits=matched.filter(c=>d.e.concepts.includes(c));score+=conceptHits.length*30;
    if(q.length>=3&&d.title.includes(q))score+=65;if(q.length>=5&&d.example.includes(q))score+=55;
    score*=ts.length?(.3+.7*hits/ts.length):1;
    return {entry:d.e,score,reason:conceptHits.length?'Related concept':corrections.size&&hits?'Similar wording':'Matching wording',hits};
   }).filter(r=>r.score>=6&&(r.hits>0||r.reason==='Related concept')&&(!matched.length||r.reason==='Related concept'||r.hits===ts.length)).sort((a,b)=>b.score-a.score||a.entry.title.localeCompare(b.entry.title));
  };
 }
 function searchLibrary(library,query){
  const rawQuery=query.slice(0,300).trim(),q=normalize(rawQuery);if(!rawQuery)return [];
  if(!q)return library.map(c=>({collection:c,matches:(c.terms.length?c.terms:c.paragraphs).filter(t=>t===rawQuery).map(text=>({text,score:100})),score:100})).filter(r=>r.matches.length);
  const words=q.split(' ').filter(Boolean);
  return library.map(c=>{
   const units=c.terms.length?c.terms:c.paragraphs;
   const found=units.map(text=>{const n=normalize(text),ts=n.split(' ');const exact=n===q;const phrase=(' '+n+' ').includes(' '+q+' ');const all=words.every(w=>ts.some(t=>t===w||(w.length>=5&&distance(w,t)<=(w.length>=7?2:1))));return {text,score:exact?100:phrase?80:all?40:0};}).filter(x=>x.score).sort((a,b)=>b.score-a.score);
   const titleMatch=normalize(c.title).includes(q);
   return {collection:c,matches:found,score:(found[0]?.score||0)+(titleMatch?60:0)};
  }).filter(r=>r.score).sort((a,b)=>b.score-a.score||a.collection.title.localeCompare(b.collection.title));
 }
 function segments(text,query){
  const meaningful=tokens(query);const wanted=new Set(meaningful.length?meaningful:normalize(query).split(' ').filter(Boolean).map(stem));
  return String(text).split(/([\p{L}\p{N}]+(?:[’'][\p{L}\p{N}]+)*)/u).filter(Boolean).map(text=>({text,match:wanted.has(stem(normalize(text)))}));
 }
 function excerpt(text,query,max=220){
  if(text.length<=max)return text;
  const parts=segments(text,query);const longest=Math.max(0,...parts.filter(p=>p.match).map(p=>p.text.length));let offset=0,start=0;for(const p of parts){if(p.match&&p.text.length===longest){start=Math.max(0,offset-60);break;}offset+=p.text.length;}
  if(start){const space=text.indexOf(' ',start);if(space>=0)start=space+1;}
  return (start?'…':'')+text.slice(start,start+max)+(start+max<text.length?'…':'');
 }
 function explain(result,query,concepts){
  const e=result.entry;
  const fields=[['title',e.title],['example',e.example],...(e.additionalExamples||[]).map(v=>['additional example',v.label+': '+v.example]),...(e.supplemental||[]).flatMap(s=>s.paragraphs.map(p=>['additional form',p])),['description',e.description],['editing guidance',e.guidance],['context note',e.limit]];
  const scored=fields.map(([field,text])=>({field,text,count:segments(text,query).filter(p=>p.match).length,phrase:normalize(text).includes(normalize(query))})).sort((a,b)=>Number(b.phrase)-Number(a.phrase)||b.count-a.count);
  const best=scored[0];
  if(result.reason==='Related concept'){
   const words=tokens(query);const c=concepts.find(c=>e.concepts.includes(c.name)&&c.phrases.some(p=>normalize(query).includes(normalize(p))||tokens(p).length>=2&&tokens(p).every(t=>words.includes(t))));
   if(c)return {reason:'Related wording: '+c.phrases[0],snippet:excerpt(best.count&&best.field!=='title'?best.text:e.example,query)};
  }
  return {reason:best.count?'Matched in '+best.field:'Similar spelling or word form',snippet:excerpt(best.count&&best.field!=='title'?best.text:e.example,query)};
 }
 function suggestQueries(query,entries,concepts,library){
  const q=normalize(query);if(!q)return [];
  const phrases=concepts.flatMap(c=>c.phrases).concat(entries.map(e=>e.title));
  const vocabulary=[...new Set(phrases.concat(library.flatMap(c=>c.terms)).flatMap(s=>normalize(s).split(' ')).filter(w=>w.length>=4&&!stop.has(w)))];
  const words=q.split(' ');let changed=false;
  const corrected=words.map(w=>{if(w.length<4||stop.has(w)||vocabulary.includes(w))return w;let best=3,choice=w;for(const v of vocabulary){const d=distance(w,v);if(d<best){best=d;choice=v;}}if(best<=(w.length>=7?2:1)){changed=true;return choice;}return w;}).join(' ');
  const suggestions=changed?[corrected]:[];
  const wanted=new Set(tokens(changed?corrected:q).filter(t=>!['not','no','without'].includes(t)));
  const ranked=phrases.map(text=>({text,score:[...new Set(tokens(text))].filter(t=>wanted.has(t)).length})).filter(r=>r.score&&normalize(r.text)!==q).sort((a,b)=>b.score-a.score||a.text.length-b.text.length);
  for(const r of ranked){if(!suggestions.some(s=>normalize(s)===normalize(r.text)))suggestions.push(r.text);if(suggestions.length>=4)break;}
  return suggestions.slice(0,4);
 }
 const api={createSearch,searchLibrary,normalize,segments,excerpt,explain,suggestQueries};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.PatternSearch=api;
})(typeof window!=='undefined'?window:globalThis);
