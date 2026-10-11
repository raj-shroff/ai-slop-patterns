// Public collections are readable Markdown tables in the master reference.
module.exports=function buildLibrary(md,entries,clean,slug){
 const definitions=[['Phrase collections','Phrase collections'],['Reconstructed word and phrase inventories','Vocabulary lists'],['Additions merged into the original catalog','Additional forms']];
 const maps=[[1],[2],[3],[4],[5],[6],[7],[9],[10],[28],[29],[56],[57],[58],[79],[80],[81],[66],[50,64]];
 const supplemental=[[1,4,9],[11,12,13],[15,17,19,94,130],[70,71,72,74,75],[80,84,118],[86,87,88]];
 const library=[];
 const byId=new Map(entries.map(e=>[e.id,e]));
 for(const [heading,group] of definitions){
  const section=md.split('## '+heading+'\n')[1]?.split('\n## ')[0];if(!section)throw Error('Missing inventory '+heading);
  // Split headings explicitly so end-of-input is unambiguous.
  const chunks=section.split(/^### /m).slice(1);
  chunks.forEach((chunk,index)=>{
   const [rawTitle,...rest]=chunk.split('\n'),body=rest.join('\n');
   const field=name=>body.match(new RegExp('^'+name+': (.+)$','m'))?.[1]||'';
   const title=field('Title')||(group==='Additional forms'?rawTitle.replace(/^P\d{3}(?:-P\d{3}| and P\d{3})?: /,'').replace(/^./,c=>c.toUpperCase()):rawTitle);
   const items=body.split('\n').filter(l=>l.startsWith('| ')&&!l.startsWith('| Word or phrase |')&&!/^\|[\s:|\-]+\|$/.test(l)).map(line=>{
    const [term,example]=line.slice(1,-1).split('|').map(s=>s.trim());
    return {term:clean(term),example:(example||'').replace(/<br>/g,'\n')};
   });
   if(!items.length)throw Error('Empty collection '+rawTitle);
   if(new Set(items.map(i=>i.term.toLowerCase())).size!==items.length)throw Error('Duplicate collection term in '+rawTitle);
   const ids=group==='Additional forms'?supplemental[index]:group==='Phrase collections'?maps[index]:[9,137];
   const related=ids.map(id=>byId.get(id)?.slug).filter(Boolean);
   const note=field('Description');
   const routeTitle=group==='Additional forms'?rawTitle.replace(/^P\d{3}(?:-P\d{3}| and P\d{3})?: /,''):rawTitle;
   const record={slug:slug(group+' '+routeTitle),title,group,items,terms:items.map(i=>i.term),note,related,paragraphs:items.map(i=>i.term+(i.example?': '+clean(i.example):''))};
   library.push(record);
   for(const id of ids){const e=byId.get(id);if(e){(e.collections??=[]).push(record.slug);if(group==='Additional forms')(e.supplemental??=[]).push({title,items,paragraphs:record.paragraphs});}}
  });
 }
 if(library.length!==31)throw Error('Expected all 31 library sections');
 return library;
};
