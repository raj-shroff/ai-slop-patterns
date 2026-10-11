// Each measurement keeps its comparison population and source from the master.
module.exports=function attachEvidence(md,entries,library,sources){
 const section=md.split('## Measured usage\n')[1]?.split('\n## ')[0];
 if(!section)throw Error('Missing measured usage section');
 const studies=section.split(/^### /m).slice(1).map((chunk,index)=>{
  const [title,...rest]=chunk.split('\n'),body=rest.join('\n');
  const field=name=>body.match(new RegExp('^'+name+': (.+)$','m'))?.[1];
  const sourceId=Number(field('Source')?.replace('S','')),source=sources[sourceId-1];
  if(!source||!field('Scope')||!field('Applies to'))throw Error('Incomplete research record '+title);
  const rows=body.split('\n').filter(l=>l.startsWith('| ')&&!l.startsWith('| Expression |')&&!/^\|[\s:|\-]+\|$/.test(l)).map(line=>{
   const [expression,finding,comparison,summary]=line.slice(1,-1).split('|').map(s=>s.trim());
   if(!expression||!finding||!comparison||!summary)throw Error('Incomplete measurement '+title);
   return {expression,finding,comparison,summary};
  });
  return {key:'study-'+(index+1),title,scope:field('Scope'),source:{title:source.title,url:source.url},rows,targets:field('Applies to').split(',').map(s=>s.trim())};
 });
 for(const e of entries)e.research=studies.filter(s=>s.targets.includes('P'+String(e.id).padStart(3,'0'))).map(({targets,...s})=>s);
 for(const c of library){
  c.research=studies.filter(s=>s.targets.includes('vocabulary')||s.targets.includes('vocabulary-lists-biomedical')&&c.slug.includes('annotated-style')).map(({targets,...s})=>({...s,rows:s.rows.filter(r=>c.terms.some(t=>t.toLowerCase()===r.expression.toLowerCase()))})).filter(s=>s.rows.length);
 }
 return studies.map(({targets,...s})=>s);
};
