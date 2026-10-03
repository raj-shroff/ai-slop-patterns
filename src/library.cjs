// Extract the full inventories and supplemental forms from the Markdown master.
module.exports=function buildLibrary(md,entries,clean,slug){
 const definitions=[['PDF phrase inventory','Phrase collections'],['Reconstructed word and phrase inventories','Vocabulary lists'],['Additions merged into the original catalog','Additional forms']];
 const maps=[[1],[2],[3],[4],[5],[6],[7],[9],[10],[28],[29],[56],[57],[58],[79],[80],[81],[66],[50,64]];
 const supplemental=[[1,4,9],[11,12,13],[15,17,19,94,130],[70,71,72,74,75],[80,84,118],[86,87,88]];
 const library=[];
 for(const [heading,group] of definitions){
  const section=md.split('## '+heading+'\n')[1]?.split('\n## ')[0];if(!section)throw Error('Missing inventory '+heading);
  // Split headings explicitly so end-of-input is unambiguous.
  const chunks=section.split(/^### /m).slice(1);
  chunks.forEach((chunk,index)=>{
   const [rawTitle,...rest]=chunk.split('\n');const paragraphs=rest.join('\n').trim().split(/\n\n+/).map(s=>s.trim()).filter(Boolean);
   const content=paragraphs.filter(s=>!s.startsWith('Source:'));
   const metadata=paragraphs.find(s=>s.startsWith('Source:'))||'';
   const title=group==='Additional forms'?rawTitle.replace(/^P\d{3}(?:-P\d{3}| and P\d{3})?: /,'').replace(/^./,c=>c.toUpperCase()):rawTitle;
   const vocabulary=group==='Vocabulary lists';
   const terms=vocabulary?content.flatMap(p=>p.replace(/\.$/,'').split(';').map(s=>s.trim()).filter(Boolean)):[];
   const expected=vocabulary?Number(metadata.match(/(\d+) terms or phrases/)[1]):null;
   if(vocabulary&&terms.length!==expected)throw Error(`${title}: expected ${expected}, got ${terms.length}`);
   const ids=group==='Additional forms'?supplemental[index]:group==='Phrase collections'?maps[index]:[9,137];
   const related=ids.map(id=>entries[id-1]?.slug).filter(Boolean);
   const note=vocabulary?metadata.replace(/^Source: S\d+\. \d+ terms or phrases\. /,'').replace(/Snapshot inspected [\d-]+\./,'').trim():'';
   const record={slug:slug(group+' '+title),title,group,paragraphs:content.map(clean),terms,note,related};
   library.push(record);
   for(const id of ids){const e=entries[id-1];if(e){(e.collections??=[]).push(record.slug);if(group==='Additional forms')(e.supplemental??=[]).push({title,paragraphs:record.paragraphs});}}
  });
 }
 if(library.length!==31)throw Error('Expected all 31 library sections');
 return library;
};