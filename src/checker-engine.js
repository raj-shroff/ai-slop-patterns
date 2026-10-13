/* Independently authored text checks. No external code, model or word-list data. MIT. */
(function(root,factory){
  if(typeof module==='object'&&module.exports) module.exports=factory(require('./checker-rules.js'),require('./checker-text.js'),require('./checker-families.js'));
  else root.SignatureChecker=factory(root.SignatureCheckerRules,root.SignatureCheckerText,root.SignatureCheckerFamilies);
})(typeof globalThis!=='undefined'?globalThis:this,function(Rules,Text,Families){
  'use strict';
  if(!Rules) throw new Error('Checker rules are missing.');
  const emojiUnit='(?:\\p{Emoji_Presentation}|\\p{Extended_Pictographic}\\uFE0F)[\\uFE0F\\p{Emoji_Modifier}]*';
  const emojiSequence=new RegExp(`${emojiUnit}(?:\\u200D${emojiUnit})*`,'gu');
  const words=Text.words,model=Text.model;
  const isLetter=s=>Boolean(s&&/[\p{L}\p{N}\p{M}]/u.test(s));
  const rawRules=new Set(['chat-role-label','duplicate-title','title-case','heading-jump','many-main-headings','tiny-outline','dense-bold','bold-label-list','emoji-headings','many-dividers','isbn-checksum','undefined-reference']);
  const compiled=Rules.phrases.map(r=>({...r,re:new RegExp(r.pattern,'giu')}));
  function hits(re,text,offset=0){return [...text.matchAll(new RegExp(re.source,re.flags.includes('g')?re.flags:re.flags+'g'))].map(m=>({start:offset+m.index,end:offset+m.index+m[0].length,match:m}));}
  function occurrence(tokens){return{start:tokens[0].start,end:tokens[tokens.length-1].end};}
  function analyze(input){
    if(typeof input!=='string')throw new TypeError('Text must be a string.');
    const base={characterCount:input.length,limits:Rules.limits,coverage:Rules.coverage,findings:[],eligibility:{enabled:Rules.phrases.length+Rules.structural.length,eligible:0,skipped:[]},findingLimitReached:false};
    if(input.length>Rules.limits.maxCharacters)return{...base,status:'too-long',wordCount:null,reason:`Use at most ${Rules.limits.maxCharacters.toLocaleString('en')} characters.`};
    const inputWords=words(input).length;
    if(inputWords>Rules.limits.maxWords)return{...base,status:'too-long',wordCount:inputWords,reason:`Use at most ${Rules.limits.maxWords.toLocaleString('en')} words.`};
    const m=model(input);const output={...base,status:inputWords?'ok':'empty',wordCount:inputWords,proseWordCount:m.tokens.length,excludedCodeBlocks:m.ignored.length};
    if(!inputWords){output.reason='Enter at least one word.';return output;}
    const findings=[];const seen=new Set();const perRuleCounts=new Map();
    function add(rule,start,end,explanation,occurrences){
      if(rule.scope!=='raw'&&!rawRules.has(rule.ruleId)){
        const mapped=m.sourceSpan(start,end);start=mapped.start;end=mapped.end;
        if(occurrences)occurrences=occurrences.map(o=>m.sourceSpan(o.start,o.end));
      }
      start=Math.max(0,start);end=Math.min(input.length,end);if(start>=end)return;
      const key=`${rule.entryId}:${rule.ruleId}:${start}:${end}`;if(seen.has(key))return;seen.add(key);
      if((perRuleCounts.get(rule.ruleId)||0)>=Rules.limits.maxFindingsPerRule){output.findingLimitReached=true;return;}
      if(findings.length>=Rules.limits.maxFindings){output.findingLimitReached=true;return;}
      const entry={entryId:rule.entryId,ruleId:rule.ruleId,type:rule.type||'wording',start,end,excerpt:input.slice(start,end),explanation};
      if(rule.title)entry.title=rule.title;
      if(rule.measurement)entry.measurement=rule.measurement;
      if(occurrences){if(occurrences.length>Rules.limits.maxOccurrencesPerGroup)output.findingLimitReached=true;entry.occurrences=occurrences.slice(0,Rules.limits.maxOccurrencesPerGroup).map(o=>({start:o.start,end:o.end,excerpt:input.slice(o.start,o.end)}));}
      perRuleCounts.set(rule.ruleId,(perRuleCounts.get(rule.ruleId)||0)+1);
      findings.push(entry);
    }
    function eligible(rule){
      const minW=rule.minWords||1,minS=rule.minSentences||1;
      const rawCheck=rule.scope==='raw'||['P042','P047'].includes(rule.entryId);
      if((rawCheck?inputWords:m.tokens.length)<minW||(!rawCheck&&m.sentences.length<minS)){output.eligibility.skipped.push({entryId:rule.entryId,ruleId:rule.ruleId,reason:`Needs at least ${minW} ${minW===1?'word':'words'} and ${minS} ${minS===1?'sentence':'sentences'} of prose.`});return false;}
      output.eligibility.eligible++;return true;
    }
    for(const rule of compiled){
      // Raw artifact checks use code-masked input, before HTML/URL cleanup.
      if(!eligible(rule))continue;const source=rule.scope==='raw'?m.safe:m.prose;rule.re.lastIndex=0;let found;let count=0;
      while((found=rule.re.exec(source))&&count<Rules.limits.maxFindingsPerRule){
        if(!found[0].length){rule.re.lastIndex++;continue;}
        const start=found.index,end=start+found[0].length;
        if(isLetter(found[0][0])&&isLetter(source[start-1])||isLetter(found[0].slice(-1))&&isLetter(source[end]))continue;
        add(rule,start,end,rule.explanation);count++;
      }
      if(found&&count>=Rules.limits.maxFindingsPerRule)output.findingLimitReached=true;
    }
    function grouped(rule,parts,explanation){if(!parts.length)return;add(rule,parts[0].start,parts[parts.length-1].end,explanation,parts);}
    for(const rule of Rules.structural){
      if(!eligible(rule))continue;const name=rule.ruleId;
      if(Families.run(name,m,(parts,explanation,detail={})=>grouped({...rule,...detail},parts,explanation)))continue;
      if(name==='challenge-hope'){
        for(const p of m.paragraphs){const a=hits(/(?:faces? (?:new |many |several )?challenges|despite (?:its |their )?(?:success|progress|achievements))/giu,p.text,p.start),b=hits(/(?:bright future|promising future|continued innovation|renewed hope)/giu,p.text,p.start);if(a.length&&b.length)grouped(rule,[a[0],b[b.length-1]].sort((x,y)=>x.start-y.start),'Challenges and an optimistic future appear together. Check whether the ending names the actual problem and what will address it.');}
      }else if(name==='assertion-then-rejection'){
        // Recognize the contrast, not a dash by itself or the subject matter.
        for(const s of m.sentences){
          for(const h of hits(/(?:[,;—–]|--)[ \t\r\n]*not\s+(?!only\b|just\b|because\b|until\b|unless\b|if\b|when\b|even\b|necessarily\b|yet\b)([^,;.!?\r\n]+)/giu,s.text,s.start)){
            const before=s.tokens.filter(t=>t.end<=h.start),alternative=words(h.match[1]);
            if(before.length<3||!alternative.length||!/^\p{L}/u.test(alternative[0].value))continue;
            if(/^(?:knowing|realizing|expecting|wanting|having|being|to|all|always|far|long|much)$/.test(alternative[0].value))continue;
            const end=h.end-h.match[0].length+h.match[0].trimEnd().length;
            add(rule,h.start,end,'The sentence states one thing, then rejects an alternative with “not.” Check whether that alternative answers a real question.');
          }
        }
      }else if(name==='chat-role-label'){
        // Line anchoring avoids treating an ordinary mention of a chatbot as a label.
        const labels=hits(/^[ \t]*(?:#{1,6}[ \t]+|>[ \t]*)?(?:\*\*)?(?:Chat[ \t]*GPT|Claude|Gemini|Grok|Copilot|Perplexity|AI[ \t]+assistant|Assistant)(?:[ \t]+(?:said|replied|answered|wrote|response))?:(?:\*\*)?/gimu,m.safe);
        for(const h of labels){
          // Ambiguous speaker names need a standalone label, not ordinary narration.
          const rest=m.safe.slice(h.end).split(/\r?\n/,1)[0];
          if(!/Chat[ \t]*GPT|AI[ \t]+assistant/i.test(h.match[0])&&rest.trim())continue;
          if(!words(m.safe.slice(h.end)).length)continue;
          add(rule,h.start,h.end,'A chat speaker label has been copied into the passage. Keep it only if you are presenting the conversation itself.');
        }
      }else if(name==='repeated-triads'){
        const triples=hits(/\b[\p{L}][\p{L}’'-]*,\s+[\p{L}][\p{L}’'-]*,?\s+and\s+[\p{L}][\p{L}’'-]*/gu,m.prose);
        if(triples.length>=2)grouped(rule,triples,'Several short lists contain three items. Repeating this shape can make unrelated points sound interchangeable.');
      }else if(name==='duplicate-title'){
        const lines=hits(/[^\r\n]+/g,m.safe).filter(l=>l.match[0].trim());
        if(lines.length>=3){const clean=s=>s.replace(/^\s*#+\s*/,'').trim().toLocaleLowerCase('en');if(words(lines[0].match[0]).length<=12&&clean(lines[0].match[0])===clean(lines[1].match[0]))grouped(rule,lines.slice(0,2),'The first two non-empty lines repeat the same short title.');}
      }else if(['title-case','heading-jump','many-main-headings','tiny-outline'].includes(name)){
        const hs=hits(name==='tiny-outline'?/^(?: {0,3}#{1,6}\s+[^\r\n]+|(?:Background|Introduction|Analysis|Recommendation|Conclusion|Summary|Overview|Next steps|Key considerations|Challenges and opportunities))\s*$/gim:/^ {0,3}#{1,6}\s+[^\r\n]+/gm,m.safe).map(h=>({...h,level:(h.match[0].trimStart().match(/^#+/)?.[0]||'#').length}));
        if(name==='title-case'){
          const minor=new Set(['a','an','the','and','or','but','nor','of','to','in','on','at','by','for','as']);
          const styled=hs.map(h=>{const ts=words(h.match[0]),major=ts.filter((t,i)=>i===0||!minor.has(t.value));return{...h,count:ts.length,capitalShare:major.filter(t=>/\p{Lu}/u.test(m.safe[t.start+h.start])).length/major.length};}).filter(h=>h.count>=2);
          for(let level=1;level<=6;level++){const title=styled.find(h=>h.level===level&&h.capitalShare>=0.8&&h.count>=4),sentence=styled.find(h=>h.level===level&&h.capitalShare<=0.5);if(title&&sentence)grouped(rule,[title,sentence].sort((a,b)=>a.start-b.start),'Headings at the same level use different capitalization styles. Check whether the change is deliberate.');}
        }
        if(name==='heading-jump')for(let i=1;i<hs.length;i++)if(hs[i].level>hs[i-1].level+1)grouped(rule,[hs[i-1],hs[i]],'The heading level jumps over an intermediate level. Check the document hierarchy.');
        if(name==='many-main-headings'){const main=hs.filter(h=>h.level===1);if(main.length>=3)grouped(rule,main,'Several sections use the top heading level. Check which heading is the document title.');}
        if(name==='tiny-outline'&&hs.length>=4&&m.tokens.length<120)grouped(rule,hs,'This short passage has at least four headings. Check whether the headings make it easier to read.');
      }else if(name==='dense-bold'){
        const bold=hits(/\*\*[^*\r\n]+\*\*|__[^_\r\n]+__/g,m.safe);
        for(const p of m.paragraphs){const source=m.sourceSpan(p.start,p.end),b=bold.filter(h=>h.end>source.start&&h.start<source.end);if(b.length>=4&&p.tokens.length<=100)grouped(rule,b,'Four or more pieces of bold text compete for attention in this short paragraph.');}
      }else if(name==='bold-label-list'){
        const labels=hits(/^\s*(?:[-*+]\s+)?\*\*[^*\r\n]+:\*\*/gm,m.safe);if(labels.length>=3)grouped(rule,labels,'At least three lines begin with a bold label and colon. Check whether the repeated labels help distinguish the points.');
      }else if(name==='dash-run'){
        for(const p of m.paragraphs){const d=hits(/—/g,p.text,p.start);if(d.length>=4)grouped(rule,d,`${d.length} em dashes occur in one paragraph. Read whether the interruptions help the sentences.`);}
      }else if(name==='emoji-headings'){
        const e=hits(/^[ \t]*(?:[\p{Extended_Pictographic}]\uFE0F?)/gmu,m.safe);if(e.length>=2)grouped(rule,e,'Emoji decorate at least two separate line openings. Check whether they serve a purpose for this audience.');
      }else if(name==='emoji-after-prose'){
        const sentencesByParagraph=m.paragraphs.map(()=>[]);
        for(const s of m.sentences)sentencesByParagraph[s.paragraph].push(s);
        for(const [paragraph,p] of m.paragraphs.entries()){
          const emojis=hits(emojiSequence,p.text,p.start),appendages=[];
          const sentences=sentencesByParagraph[paragraph];let previousIndex=-1;
          for(const h of emojis){
            while(previousIndex+1<sentences.length&&sentences[previousIndex+1].start<h.start)previousIndex++;
            const before=p.text.slice(0,h.start-p.start),after=p.text.slice(h.end-p.start);
            const line=before.slice(before.lastIndexOf('\n')+1);
            // Only sentence/line endings, not emoji used in place of a noun.
            if(!/[.!?]["”’']?\s*$/.test(before)&&after.replace(emojiSequence,'').replace(/^[.!?]+\s*/, '').trim())continue;
            const previous=sentences[previousIndex];
            if(!previous||previous.tokens.filter(t=>t.end<=h.start).length<6||!words(line).length)continue;
            const context=words(line).slice(-12).map(t=>t.value);
            if(context.some(w=>['emoji','emojis','emoticon','symbol','symbols','icon','unicode','character','characters'].includes(w)))continue;
            appendages.push(h);
          }
          if(appendages.length)grouped(rule,appendages,'An emoji is appended to a prose sentence. Check whether it adds useful information or just decoration.');
        }
      }else if(name==='mixed-quotes'){
        const a=hits(/"[^"\r\n]+"/g,m.prose),b=hits(/“[^”\r\n]+”/g,m.prose);if(a.length&&b.length)grouped(rule,[a[0],b[0]].sort((x,y)=>x.start-y.start),'Straight and curly double quotation marks are mixed. This is a formatting observation, not evidence of authorship.');
      }else if(name==='many-dividers'){
        const d=hits(/^\s*(?:-{3,}|\*\s*\*\s*\*(?:\s*\*)*|_{3,})\s*$/gm,m.safe);if(d.length>=3||(d.length>=2&&m.tokens.length<150))grouped(rule,d,`${d.length} horizontal dividers appear in this passage. Check whether they add useful separation.`);
      }else if(name==='isbn-checksum'){
        for(const h of hits(/\bISBN(?:-1[03])?:?\s*([0-9][0-9Xx -]{8,24}[0-9Xx])\b/giu,m.safe)){
          const digits=h.match[1].replace(/[ -]/g,'').toUpperCase();let valid=true;
          if(digits.length===13&&/^\d+$/.test(digits))valid=[...digits].reduce((sum,d,i)=>sum+Number(d)*(i%2?3:1),0)%10===0;
          else if(digits.length===10&&/^\d{9}[\dX]$/.test(digits))valid=[...digits].reduce((sum,d,i)=>sum+(d==='X'?10:Number(d))*(10-i),0)%11===0;
          else continue;
          if(!valid)add(rule,h.start,h.end,'This ISBN fails its checksum. It may be a typing error; the checker has not looked up the book.');
        }
      }else if(name==='undefined-reference'){
        const defs=new Set(hits(/<ref\b[^>]*\bname\s*=\s*["']([^"']+)["'][^>]*>[\s\S]*?<\/ref>/gi,m.safe).map(h=>h.match[1]));
        for(const h of hits(/<ref\b[^>]*\bname\s*=\s*["']([^"']+)["'][^>]*\/>/gi,m.safe))if(!defs.has(h.match[1]))add(rule,h.start,h.end,'This named reference has no definition in the pasted text. The definition may exist elsewhere in the full document.');
      }else if(name==='generic-revision'){
        for(const p of m.paragraphs){const a=hits(/\b(?:improved|improving|enhanced|enhancing)\b/gi,p.text,p.start),b=hits(/\b(?:clarity|flow|readability|quality|neutrality|coherence)\b/gi,p.text,p.start);if(a.length&&new Set(b.map(h=>h.match[0].toLowerCase())).size>=3)grouped(rule,[a[0],...b].sort((x,y)=>x.start-y.start),'The revision note lists broad improvements. A concrete before-and-after change would be easier to verify.');}
      }else if(name==='repeated-summary'){
        const markers=m.sentences.map(s=>({s,h:hits(/^(?:in summary|to sum up|in conclusion|overall),?/i,s.text,s.start)[0]})).filter(v=>v.h);
        if(markers.length>=2)grouped(rule,markers.map(v=>v.h),'The passage introduces more than one summary or conclusion. Check whether the later one adds anything.');
        else for(const {s,h} of markers){const value=s.tokens.filter(t=>t.start>=h.end).map(t=>t.value).join(' ');if(value.split(' ').length>=5&&m.sentences.some(other=>other.start<s.start&&other.tokens.map(t=>t.value).join(' ')===value))add(rule,h.start,s.end,'The summary repeats an earlier sentence word for word.');}
      }else if(name==='intensifier-cluster'){
        for(const p of m.paragraphs){if(p.tokens.length<20)continue;const h=hits(/\b(?:exceptionally|incredibly|remarkably|truly|extremely|utterly|unquestionably)\b/gi,p.text,p.start);if(new Set(h.map(x=>x.match[0].toLowerCase())).size>=3)grouped(rule,h,'Several different intensifiers add emphasis in this paragraph. Check what each contributes.');}
      }else if(name==='ordered-openings'){
        const os=m.sentences.map(s=>hits(/^(?:first|second|third|fourth|lastly|finally)(?:ly)?[, :]/i,s.text,s.start)[0]).filter(Boolean);
        if(os.length>=3)grouped(rule,os,'At least three sentences announce their position in a sequence. This is useful for actual steps; check whether these points need an order.');
      }else if(name==='short-run'){
        for(let i=0;i+2<m.sentences.length;i++){const run=m.sentences.slice(i,i+3);if(run.every(s=>s.tokens.length<=4)&&run.every(s=>s.paragraph===run[0].paragraph)&&run.every(s=>/[.!]["”’']?$/.test(s.text))){grouped(rule,run,'Three short sentences appear consecutively. They may create emphasis, or make the passage choppy.');i+=2;}}
      }else if(name==='question-answer-pairs'){
        const h=hits(/[^.!?\r\n]+\?\s+(?:Yes|No|Absolutely|Exactly|Certainly)[.!](?=\s|$)/g,m.prose);if(h.length>=2)grouped(rule,h,'The writer asks and immediately answers several questions. This can be useful in a FAQ; elsewhere, direct statements may be clearer.');
      }else if(name==='software-promises'){
        for(const p of m.paragraphs){const h=hits(/(?:fits in your head|just works|batteries included|zero configuration)/gi,p.text,p.start);if(h.length&&(h.length>=2||/\b(?:software|app|API|library|framework|tool|package)\b/i.test(p.text)))grouped(rule,h,'The software is described through a broad promise of ease. Check whether the passage explains what the user actually needs to do.');}
      }else if(name==='routine-lesson'){
        for(const p of m.paragraphs){const a=hits(/(?:I had the (?:privilege|honor)|I was humbled)/gi,p.text,p.start),b=hits(/(?:taught me what leadership|what leadership really means|a lesson in leadership)/gi,p.text,p.start);if(a.length&&b.length)grouped(rule,[a[0],b[0]].sort((x,y)=>x.start-y.start),'A personal event is framed as a leadership lesson. Check whether the connection is explained.');}
      }else if(name==='repeated-phrase'){
        const groups=new Map();for(let i=0;i+4<m.tokens.length;i++){const seq=m.tokens.slice(i,i+5);if(/[.!?]/.test(m.prose.slice(seq[0].end,seq[4].start)))continue;const key=seq.map(x=>x.value).join(' ');if(!groups.has(key))groups.set(key,[]);const arr=groups.get(key);if(!arr.length||arr[arr.length-1].end<=seq[0].start)arr.push(occurrence(seq));}
        const covered=[];for(const [phrase,list]of groups){if(list.length<3||covered.some(span=>list[0].start>=span.start&&list[0].start<span.end))continue;covered.push({start:list[0].start,end:list[0].end});grouped(rule,list,'The same five-word sequence appears at least three times. Check whether each repetition is needed.');}
        const exact=new Map();for(const s of m.sentences){if(s.tokens.length<6)continue;const key=s.tokens.map(t=>t.value).join(' ');if(!exact.has(key))exact.set(key,[]);exact.get(key).push(s);}for(const list of exact.values())if(list.length>=2)grouped(rule,list,'This sentence is repeated word for word.');
      }else if(name==='similar-quotes'){
        const groups=new Map();for(const h of hits(/“[^”\r\n]+”|"[^"\r\n]+"/g,m.prose)){const ts=words(h.match[0],h.start);if(ts.length<5)continue;const key=ts.slice(0,4).map(x=>x.value).join(' ');if(!groups.has(key))groups.set(key,[]);groups.get(key).push(occurrence(ts.slice(0,4)));}for(const list of groups.values())if(list.length>=3)grouped(rule,list,'At least three quotations begin with the same four words. Check whether the quotations preserve the speakers\' actual language.');
      }else if(name==='repeated-name'){
        const groups=new Map();for(const h of hits(/\b(?:Dr|Prof|Mr|Mrs|Ms)\.\s+\p{Lu}[\p{L}’'-]+\s+\p{Lu}[\p{L}’'-]+/gu,m.prose)){if(!groups.has(h.match[0]))groups.set(h.match[0],[]);groups.get(h.match[0]).push(h);}for(const list of groups.values())if(list.length>=3)grouped(rule,list,'The same title and full name recur at least three times. Check whether a shorter reference would remain clear.');
      }else if(name==='noun-chain'){
        for(const s of m.sentences){const ns=s.tokens.filter(t=>/(?:tion|sion|ment|isation|ization|ity)$/.test(t.value)&&t.value.length>=7);if(ns.length>=4&&(s.text.match(/\bof (?:the |an? )?/gi)||[]).length>=2)grouped(rule,ns,'Several abstract nouns are linked together. Naming an actor and an action may make the sentence easier to follow.');}
      }else if(name==='nested-clauses'){
        for(const s of m.sentences){const cs=hits(/,\s*(?:which|who|that)\b/gi,s.text,s.start);if(cs.length>=3||s.tokens.length>=55)add(rule,s.start,s.end,cs.length>=3?'Several relative clauses are nested in this sentence. Check which details can stand on their own.':`This sentence contains ${s.tokens.length} words. Check whether a sentence break would make it easier to follow.`);}
      }else if(name==='automatic-reassurance'){
        for(const s of m.sentences){const a=hits(/not perfect/gi,s.text,s.start),b=hits(/but (?:it(?: is|'s) )?(?:a |an )?(?:powerful|promising|important|meaningful) (?:step|start)/gi,s.text,s.start);if(a.length&&b.length)grouped(rule,[a[0],b[0]].sort((x,y)=>x.start-y.start),'A concession is immediately followed by general reassurance. Check whether the reassurance explains the actual benefit.');}
      }else if(name==='transition-run'){
        const openings=m.sentences.map(s=>hits(/^(?:furthermore|additionally|moreover|consequently|ultimately|however|nevertheless|therefore|in addition|that said)[,:]?/i,s.text,s.start)[0]);
        const selected=new Map();for(let i=0;i<openings.length;i++){const nearby=openings.slice(i,i+6).filter(Boolean);if(nearby.length>=3)for(const h of nearby)selected.set(h.start,h);}
        const h=[...selected.values()].sort((a,b)=>a.start-b.start);if(h.length)grouped(rule,h,'At least three sentences in a group of six begin with linking phrases. Check whether each phrase expresses a real connection.');
      }else if(name==='helpfulness-run'){
        for(const p of m.paragraphs){if(p.tokens.length<20)continue;const h=hits(/(?:helpful tool|useful features|makes? it easier|helps? you|helping you|better results|greater ease)/gi,p.text,p.start);if(h.length>=3)grouped(rule,h,'The paragraph repeatedly says something helps. Check whether it explains the specific task or improvement.');}
      }
    }
    findings.sort((a,b)=>a.start-b.start||a.end-b.end||a.entryId.localeCompare(b.entryId));
    output.findings=findings;return output;
  }
  return{analyze,countWords:text=>words(String(text)).length,coverage:Rules.coverage,limits:Rules.limits,version:'2.0.0',segment:model};
});
