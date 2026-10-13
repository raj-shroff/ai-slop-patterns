/* Original readable-text extraction and source mapping for AI Slop Signatures. MIT. */
(function(root,factory){
  if(typeof module==='object'&&module.exports)module.exports=factory();
  else root.SignatureCheckerText=factory();
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const WORD=/[\p{L}\p{N}][\p{L}\p{N}\p{M}]*(?:['’][\p{L}\p{N}][\p{L}\p{N}\p{M}]*)*(?:[-‐‑][\p{L}\p{N}][\p{L}\p{N}\p{M}]*)*/gu;
  const sentenceSegmenter=typeof Intl!=='undefined'&&Intl.Segmenter?new Intl.Segmenter('en',{granularity:'sentence'}):null;
  const fold=s=>s.normalize('NFC').toLocaleLowerCase('en').replace(/’/g,"'").replace(/[‐‑]/g,'-');
  const words=(text,offset=0)=>[...text.matchAll(new RegExp(WORD.source,'gu'))].map(m=>({value:fold(m[0]),start:offset+m.index,end:offset+m.index+m[0].length}));
  const blank=s=>s.replace(/[^\r\n]/g,' ');
  function maskCode(text){
    const ranges=[];let open=null;
    for(const l of text.matchAll(/[^\n]*(?:\n|$)/g)){
      const fence=l[0].match(/^ {0,3}(`{3,}|~{3,})/);if(!fence)continue;
      if(!open)open={char:fence[1][0],length:fence[1].length,start:l.index};
      else if(fence[1][0]===open.char&&fence[1].length>=open.length){ranges.push({start:open.start,end:l.index+l[0].length});open=null;}
    }
    if(open)ranges.push({start:open.start,end:text.length});
    let safe=text;for(const r of ranges)safe=safe.slice(0,r.start)+blank(safe.slice(r.start,r.end))+safe.slice(r.end);
    safe=safe.replace(/<(script|style|pre|code)\b[^>]*>[\s\S]*?<\/\1\s*>/gi,(m,tag,start)=>{ranges.push({start,end:start+m.length});return blank(m);});
    safe=safe.replace(/(`+)([^`\r\n]*?)\1/g,(m,marks,body,start)=>{ranges.push({start,end:start+m.length});return blank(m);});
    return{safe,ranges:ranges.sort((a,b)=>a.start-b.start)};
  }
  function model(text){
    const {safe,ranges}=maskCode(text);
    let prose=safe,starts=Array.from({length:text.length},(_,i)=>i),ends=starts.map(i=>i+1);
    // Each replacement carries its source range. Checks read clean prose; the UI
    // always receives positions in the untouched input, including UTF-16 emoji.
    function rewrite(re,replace){
      let next='',a=[],b=[],last=0;
      function copy(start,end){next+=prose.slice(start,end);for(let i=start;i<end;i++){a.push(starts[i]);b.push(ends[i]);}}
      for(const m of prose.matchAll(re)){
        copy(last,m.index);const value=replace(m);
        next+=value;for(let i=0;i<value.length;i++){a.push(starts[m.index]);b.push(ends[m.index+m[0].length-1]);}
        last=m.index+m[0].length;
      }
      copy(last,prose.length);prose=next;starts=a;ends=b;
    }
    rewrite(/\r\n?/g,()=> '\n');
    rewrite(/^ {0,3}(?:#{1,6}[ \t]+|>[ \t]*|[-+*][ \t]+|\d+[.)][ \t]+)/gm,()=> '');
    // Keep link labels in place; remove only the link syntax and destination.
    rewrite(/\]\((?:[^()\n]|\([^()\n]*\))*\)/g,()=> '');
    rewrite(/[\[\]]/g,()=> '');
    rewrite(/https?:\/\/[^\s<>]+/gi,()=> ' ');
    rewrite(/<\/?(?:p|div|section|article|h[1-6]|li|ul|ol|blockquote)\b[^>]*>/gi,()=> '\n\n');
    rewrite(/<br\s*\/?\s*>/gi,()=> ' ');
    rewrite(/<[^>\n]+>/g,()=> '');
    rewrite(/[*_~]+/g,()=> '');
    const entities={amp:'&',lt:'<',gt:'>',quot:'"',apos:"'",nbsp:' ',ensp:' ',emsp:' ',thinsp:' ',rsquo:"'",lsquo:"'",rdquo:'”',ldquo:'“',mdash:'—',ndash:'–',hyphen:'-'};
    rewrite(/&(?:#[xX][\da-fA-F]+|#\d+|[a-zA-Z]+);/g,m=>{
      const key=m[0].slice(1,-1);if(entities[key])return entities[key];
      if(key[0]==='#'){const n=key[1]?.toLowerCase()==='x'?parseInt(key.slice(2),16):Number(key.slice(1));if(n>0&&n<=0x10ffff&&!(n>=0xd800&&n<=0xdfff))return String.fromCodePoint(n);}
      return m[0];
    });
    rewrite(/[\u200B\uFEFF\u00AD]/g,()=> '');
    rewrite(/[’]/g,()=> "'");
    rewrite(/[‐‑]/g,()=> '-');
    rewrite(/\s+/gu,m=>(m[0].match(/\n/g)||[]).length>=2?'\n\n':' ');
    function sourceSpan(start,end){
      if(start>=end||!starts.length)return{start:0,end:0};
      return{start:starts[Math.max(0,start)],end:ends[Math.min(end,ends.length)-1]};
    }
    const tokens=words(prose),paragraphs=[],sentences=[];
    for(const match of prose.matchAll(/[^\n]+/g)){
      const leading=match[0].length-match[0].trimStart().length,start=match.index+leading,end=match.index+match[0].trimEnd().length;
      if(start>=end)continue;
      const p={start,end,text:prose.slice(start,end)};p.tokens=words(p.text,start);if(!p.tokens.length)continue;
      paragraphs.push(p);
      const parts=sentenceSegmenter?[...sentenceSegmenter.segment(p.text)].map(x=>({text:x.segment,index:x.index})):[...p.text.matchAll(/[^.!?]+(?:[.!?]+["”’']*|$)/g)].map(x=>({text:x[0],index:x.index}));
      for(const part of parts){
        const start=p.start+part.index+part.text.length-part.text.trimStart().length,end=p.start+part.index+part.text.trimEnd().length;
        const st=words(prose.slice(start,end),start);if(st.length)sentences.push({start,end,text:prose.slice(start,end),tokens:st,paragraph:paragraphs.length-1});
      }
    }
    return{text,safe,prose,tokens,paragraphs,sentences,sourceSpan,ignored:ranges};
  }
  return{model,words,fold};
});
