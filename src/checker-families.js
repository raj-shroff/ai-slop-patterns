/* Independently authored construction checks. No upstream rules or scoring formulas. MIT. */
(function(root,factory){
  if(typeof module==='object'&&module.exports)module.exports=factory(require('./checker-text.js'));
  else root.SignatureCheckerFamilies=factory(root.SignatureCheckerText);
})(typeof globalThis!=='undefined'?globalThis:this,function(Text){
  'use strict';
  const hits=(re,text,offset=0)=>[...text.matchAll(new RegExp(re.source,re.flags.includes('g')?re.flags:re.flags+'g'))].map(m=>({start:offset+m.index,end:offset+m.index+m[0].length,match:m}));
  const span=ts=>({start:ts[0].start,end:ts.at(-1).end});
  // Small editorial vocabulary from our reference, not either upstream research
  // inventory. Inflections share a label; no word receives an authorship weight.
  const stock={
    additionally:'additionally',pivotal:'pivotal',vibrant:'vibrant',landscape:'landscape',landscapes:'landscape',
    tapestry:'tapestry',tapestries:'tapestry',comprehensive:'comprehensive',seamless:'seamless',seamlessly:'seamless',
    transformative:'transformative',multifaceted:'multifaceted',thoughtful:'thoughtful',thoughtfully:'thoughtful',
    meaningful:'meaningful',meaningfully:'meaningful',dependable:'dependable',steady:'steady',holistic:'holistic',robust:'robust',
    delve:'delve',delves:'delve',delved:'delve',delving:'delve',
    underscore:'underscore',underscores:'underscore',underscored:'underscore',underscoring:'underscore',
    foster:'foster',fosters:'foster',fostered:'foster',fostering:'foster',interplay:'interplay'
  };
  function vocabulary(m,report,across){
    const ps=m.paragraphs.map(p=>({...p,matches:p.tokens.filter(t=>stock[t.value])}));
    if(across){
      const used=ps.filter(p=>p.matches.length>=2);if(used.length<3)return;
      const appearances=new Map();for(const p of used)for(const term of new Set(p.matches.map(t=>stock[t.value])))appearances.set(term,(appearances.get(term)||0)+1);
      const recurring=new Set([...appearances].filter(([,n])=>n>=2).map(([term])=>term));
      const found=used.flatMap(p=>p.matches.filter(t=>recurring.has(stock[t.value])));
      if(recurring.size>=3&&found.length>=6)report(found,`${found.length} uses of ${recurring.size} recurring stock words across ${used.length} paragraphs. The repetition is what this check measures; individual words can be useful.`,{measurement:{count:found.length,words:m.tokens.length,per1000Words:Math.round(found.length/m.tokens.length*10000)/10}});
      return;
    }
    for(const p of ps){
      if(p.tokens.length<10)continue;
      const counts=new Map();for(const t of p.matches)counts.set(stock[t.value],(counts.get(stock[t.value])||0)+1);
      if(counts.size>=4||(p.matches.length>=4&&Math.max(0,...counts.values())>=3))report(p.matches,`${p.matches.length} uses of ${counts.size} stock words in this paragraph. Look for repeated praise that could be replaced with the actual action or result.`);
    }
  }
  const speechStart=/^(?:instead[, ]+|rather[, ]+)?(?:it|this|that|they|these|those|we)\b|^(?:instead|rather)\b/i;
  function contrasts(name,m,report){
    const additive=/\b(?:not (?:just|only|merely|simply)|(?:isn't|aren't|wasn't|weren't|didn't|doesn't|don't) (?:just|only|merely|simply)|more than (?:just|merely|simply))\b/gi;
    const replacement=/\b(?:(?:is|are|was|were|'s) not (?!just\b|only\b|merely\b|simply\b)|(?:isn't|aren't|wasn't|weren't) (?!just\b|only\b|merely\b|simply\b)|(?:is|are|was|were|became|becomes) more than (?!\d|one\b|two\b|three\b|four\b|five\b|six\b|seven\b|eight\b|nine\b|ten\b|half\b|twice\b)|(?:did|does|do) not merely\b)/gi;
    const re=name==='additive-contrast'?additive:replacement;
    for(let i=0;i<m.sentences.length;i++){
      const s=m.sentences[i],next=m.sentences[i+1];
      for(const left of hits(re,s.text,s.start)){
        const tail=m.prose.slice(left.end,s.end);
        const right=hits(/\bbut\b|[;:—–]\s*(?:instead[, ]+)?(?:it|this|that|they|we)(?:\s+(?:is|are|was|were)|'s)|\binstead\b/gi,tail,left.end)[0];
        let end=right&&Text.words(m.prose.slice(left.end,right.start)).length&&Text.words(m.prose.slice(right.end,s.end)).length?s.end:null;
        if(!end&&next&&next.paragraph===s.paragraph&&speechStart.test(next.text)&&next.tokens.length>=3){
          // A second assertion must actually replace the description; unrelated
          // consecutive sentences beginning with a pronoun do not qualify.
          if(/^(?:it|this|that|they|these|those|we)(?:'s|\s+(?:is|are|was|were))\b|^(?:instead|rather)\b/i.test(next.text))end=next.end;
        }
        if(end)report([{start:left.start,end}],name==='additive-contrast'?'“Not just” introduces a second, bigger description. This can be useful when it adds a fact; check whether it only makes the subject sound grander.':'One description is replaced with another. The contrast works when it explains a real distinction.');
      }
    }
  }
  function negativeRun(m,report){
    // Separate clauses first, then recognize the opening. Casing, Oxford commas,
    // line wrapping and conjunctions do not change the construction.
    for(const p of m.paragraphs){
      const parts=hits(/[^.!?;,:—–]+/g,p.text,p.start),runs=[];let run=[];
      for(const part of parts){
        const marker=part.match[0].match(/^\s*["“'‘(]?(?:(?:and|or|but)\s+)?(?:(?:no|not|never|neither)\b|(?:(?:(?:it|they|we|he|she|this|that|the\s+[\p{L}-]+)\s+)?(?:did|does|do|is|are|was|were|will|would|can|could|has|have|had)\s+not)\b|(?:(?:it|they|we)\s+)?(?:didn't|doesn't|don't|isn't|aren't|wasn't|weren't|won't|wouldn't|can't|couldn't|hasn't|haven't|hadn't)\b)/iu);
        if(marker&&Text.words(part.match[0]).length>=2){
          const lead=part.match[0].length-part.match[0].trimStart().length;
          run.push({start:part.start+lead,end:part.end-part.match[0].length+part.match[0].trimEnd().length});
        }else{if(run.length>=3)runs.push(run);run=[];}
      }
      if(run.length>=3)runs.push(run);
      for(const sequence of runs)report(sequence,'Three or more consecutive clauses say what something is not or does not do. Read whether each negative adds a separate point.');
    }
  }
  function repeatedFrames(m,report){
    const groups=new Map();const trivial=new Set(['the','a','an','of','to','in','on','and','or','but','it','is','are','was','were','this','that']);
    const root=w=>({helps:'help',explains:'explain',shows:'show'}[w]||w);
    for(const [index,s]of m.sentences.entries()){
      const ts=s.tokens.slice(0,9).filter((t,i,list)=>!(t.value==='to'&&['help','helps'].includes(list[i-1]?.value))).slice(0,8),seen=new Set();
      for(let j=0;j+1<ts.length;j++)for(const take of j===0&&ts.length>=3?[3,2]:[2]){
        const piece=ts.slice(j,j+take);
        if(piece.every(t=>trivial.has(t.value)))continue;
        const key=piece.map(t=>root(t.value)).join(' ');if(seen.has(key))continue;seen.add(key);
        if(!groups.has(key))groups.set(key,[]);groups.get(key).push({...span(piece),sentence:index,paragraph:s.paragraph});
      }
    }
    const reported=new Set();
    for(const list of groups.values())for(let i=0;i<list.length;i++){
      let local=list.filter(x=>x.sentence>=list[i].sentence&&x.sentence<list[i].sentence+6);
      const openings=list.filter(x=>x.sentence>=list[i].sentence&&x.paragraph>=list[i].paragraph&&x.paragraph<list[i].paragraph+3);
      if(openings.length>local.length)local=openings;
      if(local.length<3)continue;const key=local.map(x=>x.sentence).join(',');if(reported.has(key))continue;reported.add(key);
      report(local,'Several nearby sentences use the same opening or early phrase. Keep the repetition if it helps the reader follow the point.');i+=local.length-1;
    }
  }
  function qualifications(m,report){
    const re=/\b(?:not necessarily|(?:does|do|did) not (?:necessarily )?(?:establish|prove|mean|show)|this is not to say|only that|that said|(?:may|might|could|can) (?:not )?(?:still )?(?:be|provide|offer|suggest|depend|vary)|need not|without necessarily|perhaps|probably|remains? uncertain|remain to be (?:seen|understood)|not yet clear|careful not to|not saying|appropriately caveated|if you meant)\b/gi;
    for(const p of m.paragraphs){
      if(p.tokens.length<25)continue;const found=hits(re,p.text,p.start);
      if(found.length>=3)report(found,`${found.length} qualifications appear in this paragraph. Check that each names a different uncertainty, rather than repeating the same caution.`);
    }
  }
  function clauseBreaks(m,report){
    const subjectVerb=/\b(?:(?:the|a|an)\s+(?:[\p{L}-]+\s+){1,2}|(?:we|they|he|she|it|everyone|everybody|nobody|somebody|someone|everything)\s+)(?:is|are|was|were|has|have|had|can|will|would|should|must|[\p{L}]{3,}ed)\b/giu;
    for(const s of m.sentences){
      const clauses=hits(subjectVerb,s.text,s.start);
      if(s.tokens.length>=20&&clauses.length>=4&&!/[;:—]/.test(s.text))report([s],`This sentence contains several subject-and-verb clauses ${s.text.includes(',')?'joined by commas':'without a punctuation break'}. Check where a full stop or conjunction is needed.`);
      else if(s.tokens.length>=45&&!/[,;:—]/.test(s.text)&&(s.text.match(/\b(?:which|that|because|while|if)\b/gi)||[]).length>=3)report([s],'Several clauses run together without an internal punctuation break. Check where the reader needs a pause.');
    }
    for(let i=0;i+3<m.sentences.length;i++){
      const run=m.sentences.slice(i,i+8).filter(s=>s.paragraph===m.sentences[i].paragraph);
      const fragments=run.filter(s=>s.tokens.length<=7&&/^(?:which|that|since|because|although|without|to|on|after|before)\b/i.test(s.text));
      if(fragments.length>=3){report(fragments,'Several short sentences begin as dependent phrases. Read them with the preceding sentences to check whether the breaks help.');i+=run.length-1;}
    }
  }
  function rhythm(m,report){
    for(let i=0;i+2<m.sentences.length;i++){
      let found=null;
      for(const size of [6,4,3]){
        const run=m.sentences.slice(i,i+size);if(run.length!==size)continue;
        const lengths=run.map(s=>s.tokens.length),min=Math.min(...lengths),max=Math.max(...lengths);
        // Three sentences need both equal lengths and a shared opening. Four or
        // more can qualify by length alone; isolated pairs are never reported.
        const parallel=size>3||run.every(s=>s.tokens[0].value===run[0].tokens[0].value)&&max===min;
        if(min>=8&&max<=30&&max-min<=2&&parallel){found={run,min,max};break;}
      }
      if(found){report(found.run,`${found.run.length} consecutive sentences have nearly the same length (${found.min}–${found.max} words). Read them aloud to check whether the rhythm feels repetitive.`);i+=found.run.length-1;}
    }
  }
  // Correct familiar closed spellings; do not invent a dictionary by joining
  // every compound. Open noun phrases additionally need grammatical evidence.
  const closed=new Map([
    ['news-letter','newsletter'],['news-letters','newsletters'],['brain-storm','brainstorm'],['brain-storming','brainstorming'],['brain-stormed','brainstormed'],
    ['work-flow','workflow'],['work-flows','workflows'],['note-book','notebook'],['note-books','notebooks'],['hand-book','handbook'],['hand-books','handbooks'],
    ['web-site','website'],['web-sites','websites'],['data-base','database'],['data-bases','databases'],['time-line','timeline'],['time-lines','timelines'],['class-room','classroom'],['class-rooms','classrooms']
  ]);
  const openNouns=/^(?:blog-posts?|(?:project|production|event)-timelines?|(?:team|staff|committee|family)-members?|customer-base|(?:conference|meeting)-room)$/;
  const finite=/^(?:is|are|was|were|has|have|had|can|could|will|would|should|must|may|might|do|does|did|said|says|saw|met|grew|rose|fell|wrote|sent|took|went|came|began|left|gave|found|made|bought|brought|read)$/;
  function hyphens(m,report,stacked){
    if(stacked){
      for(const s of m.sentences){
        let run=[];const flush=()=>{if(run.length>=2)report(run,'These hyphenated descriptions are stacked together. They may be grammatical, but spelling out the relationship can make this easier to read.',{title:'Stacked hyphenated descriptions'});run=[];};
        for(const t of s.tokens){
          const parts=t.value.split('-');
          if(parts.length>=2&&parts.every(p=>/^[\p{L}]+$/u.test(p))&&(!run.length||/^\s+$/.test(m.prose.slice(run.at(-1).end,t.start))))run.push(t);
          else flush();
        }
        flush();
      }
      return;
    }
    for(const s of m.sentences)for(let i=0;i<s.tokens.length;i++){
      const t=s.tokens[i];if(!t.value.includes('-'))continue;
      const joined=closed.get(t.value);if(joined){report([t],`“${joined}” is normally written as one word.`);continue;}
      if(!openNouns.test(t.value))continue;
      const next=s.tokens[i+1],tail=m.prose.slice(t.end,next?.start??s.end);
      const boundary=!next||/[,;.!?]/.test(tail);
      const relation=next&&/^(?:of|with|in|on|at|for|from|to|before|after|until|during|while|because|then|when|and|or|but)$/.test(next.value);
      // Regular past-tense verbs are productive, unlike a hand-picked list of
      // example verbs. A following noun remains ambiguous and is left alone.
      const predicate=next&&(finite.test(next.value)||/^[a-z]{3,}ed$/.test(next.value)||/^(?:looks?|seems?|needs?|includes?|appreciates?)$/.test(next.value));
      if(boundary||relation||predicate)report([t],`Write “${t.value.replace(/-/g,' ')}” as separate words here.`);
    }
  }
  const handlers={
    'word-cluster':(m,r)=>vocabulary(m,r,false),
    'vocabulary-recurrence':(m,r)=>vocabulary(m,r,true),
    'additive-contrast':(m,r)=>contrasts('additive-contrast',m,r),
    'replacement-contrast':(m,r)=>contrasts('replacement-contrast',m,r),
    'negative-run':negativeRun,
    'repeated-openings':repeatedFrames,
    'qualification-run':qualifications,
    'unpunctuated-clauses':clauseBreaks,
    'even-lengths':rhythm,
    'unnecessary-hyphens':(m,r)=>hyphens(m,r,false),
    'stacked-hyphens':(m,r)=>hyphens(m,r,true)
  };
  return{run(name,m,report){if(!handlers[name])return false;handlers[name](m,report);return true;}};
});
