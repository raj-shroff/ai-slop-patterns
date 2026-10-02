(function(root){
 'use strict';
 const stop=new Set('a an the of to and or in on for with is it its this that these those be are was were have has do does can could would should how why what when where me my i you your we our ai writing slop tell tells pattern patterns please find about looks like text uses use using show get very'.split(' '));
 function normalize(s){return s.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[’']/g,'').replace(/[^a-z0-9]+/g,' ').trim();}
 function stem(s){if(s.length>6&&s.endsWith('ing'))return s.slice(0,-3);if(s.length>5&&s.endsWith('ed'))return s.slice(0,-2);if(s.length>4&&s.endsWith('s')&&!s.endsWith('ss'))return s.slice(0,-1);return s;}
 const tokens=s=>normalize(s).split(' ').filter(w=>w&&!stop.has(w)).map(stem);
 function distance(a,b){if(Math.abs(a.length-b.length)>2)return 3;let prev=Array.from({length:b.length+1},(_,i)=>i);for(let i=1;i<=a.length;i++){let curr=[i];for(let j=1;j<=b.length;j++)curr[j]=Math.min(curr[j-1]+1,prev[j]+1,prev[j-1]+(a[i-1]!==b[j-1]));prev=curr;}return prev[b.length];}
 function createSearch(entries,concepts){
  const docs=entries.map(e=>{const aliases=concepts.filter(c=>e.concepts.includes(c.name)).flatMap(c=>c.phrases).join(' ');const fields=[[e.title,7],[e.example,3],[aliases,3.5],[e.description,1.4],[e.guidance,.5],[e.limit,.25]];const weights=new Map();for(const [value,w]of fields)for(const t of new Set(tokens(value)))weights.set(t,(weights.get(t)||0)+w);return {e,weights,length:tokens(e.description).length,title:normalize(e.title),example:normalize(e.example)};});
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
 const api={createSearch,normalize};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.PatternSearch=api;
})(typeof window!=='undefined'?window:globalThis);
