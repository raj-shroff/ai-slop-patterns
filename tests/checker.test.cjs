const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const crypto=require('node:crypto');
const {performance}=require('node:perf_hooks');
const checker=require('../src/checker-engine.js');
const rules=require('../src/checker-rules.js');
const fixtureData=require('./fixtures/live-checker-cases.json');
const fixtures=fixtureData.cases;
const regressions=fixtureData.regressions;
const root=path.resolve(__dirname,'..');
const md=fs.readFileSync(path.join(root,'content/ai-writing-signs-and-rules.md'),'utf8').replace(/\r\n/g,'\n');
const blocks=[...md.matchAll(/<a id="p(\d{3})"><\/a>\s*\n### P\d{3}\s+(?:—\s+)?([^\n]+)\n([\s\S]*?)(?=\n<a id=|\n## |$)/g)];
const coverageById=new Map(checker.coverage.map(c=>[c.entryId,c]));
const entryId=n=>`P${String(n).padStart(3,'0')}`;
const has=(text,id)=>checker.analyze(text).findings.some(f=>f.entryId===id);
function validateResult(text,result){
  assert.ok(['ok','empty','too-long'].includes(result.status));
  for(const f of result.findings){
    assert.ok(coverageById.has(f.entryId),f.entryId);
    assert.equal(coverageById.get(f.entryId).status,'partial');
    assert.ok(Number.isInteger(f.start)&&Number.isInteger(f.end)&&f.start>=0&&f.end>f.start&&f.end<=text.length,f.ruleId);
    assert.equal(f.excerpt,text.slice(f.start,f.end),f.ruleId);
    for(const o of f.occurrences||[]){assert.equal(o.excerpt,text.slice(o.start,o.end));assert.ok(o.start>=f.start&&o.end<=f.end);}
    assert.ok(f.explanation.length>25);
  }
}

test('coverage and original fixtures account for every catalog entry, with eleven cautions excluded',()=>{
  const ids=Array.from({length:144},(_,i)=>i+1).filter(n=>n!==18).map(entryId);
  assert.deepEqual(checker.coverage.map(c=>c.entryId),ids);
  assert.deepEqual(fixtures.map(c=>c.entryId),ids);
  assert.deepEqual(blocks.map(b=>'P'+b[1]).sort(),ids);
  for(const c of checker.coverage){assert.ok(c.rationale.length>20);assert.ok(['partial','manual','excluded'].includes(c.status));assert.equal(c.ruleIds.length>0,c.status==='partial');}
  assert.deepEqual(checker.coverage.filter(c=>c.status==='excluded').map(c=>c.entryId),Array.from({length:11},(_,i)=>entryId(i+68)));
  assert.equal(new Set([...rules.phrases,...rules.structural].map(r=>r.ruleId)).size,rules.phrases.length+rules.structural.length);
});

test('all supported original examples exercise their declared observable facet',()=>{
  for(const f of fixtures.filter(x=>x.expectation==='match')){
    const result=checker.analyze(f.example);validateResult(f.example,result);
    assert.ok(result.findings.some(r=>r.entryId===f.entryId),`${f.entryId}: ${f.example}`);
  }
});

test('every entry has a realistic control that avoids its own signal',()=>{
  for(const f of fixtures){const result=checker.analyze(f.control);validateResult(f.control,result);assert.ok(!result.findings.some(r=>r.entryId===f.entryId),`${f.entryId}: ${f.control}`);}
});

test('manual cases and cautions are accounted for without pretending to detect meaning',()=>{
  for(const f of fixtures.filter(x=>x.expectation!=='match')){
    const result=checker.analyze(f.example);validateResult(f.example,result);
    assert.equal(coverageById.get(f.entryId).status,f.expectation);
    assert.ok(!result.findings.some(r=>r.entryId===f.entryId));
  }
});

test('construction families work across subjects, clause lengths, apostrophes and line breaks',()=>{
  const contrasts=[
    ['P011','The mural is not merely decoration; it is a record of the flood.'],
    ['P011','This keyboard is not only a tool, but also a keepsake.'],
    ['P011','The festival was more than simply a celebration. It was a promise to the next generation.'],
    ['P011','The course is not just a weekly meeting with the people who signed up in January and stayed through the difficult exercises and the many practical discussions that followed, but a chance to build lasting friendships.'],
    ['P012',"It's not a schedule. It's a philosophy."],
    ['P012','It’s not a habit. It’s an identity.'],
    ['P012','The campaign is not a plan; it is a movement.'],
    ['P011','The lecture is not\njust an explanation, but an invitation.'],
    ['P135',"Whether you're a total novice or an experienced professional, the handbook has everything you need."],
    ['P093','Uneven rainfall helps explain the harvest. Different soils help to explain the roots. The planting date helps explain the height.']
  ];
  for(const [id,text] of contrasts){assert.ok(has(text,id),`${id}: ${text}`);validateResult(text,checker.analyze(text));}
  for(const text of ['It is not open on Sunday.','The parcel has only books.','The bowl contains more than three cups of rice.'])assert.ok(!checker.analyze(text).findings.some(f=>['P011','P012'].includes(f.entryId)));
});

test('Unicode offsets and formatting preserve the original text',()=>{
  const passages=[
    '😀 Zoë said: It is **not just** a café, but a gathering place.',
    'Émile wrote:\r\nIt is not just a route, but an invitation.',
    'The proposal is <strong>not just</strong> a rule, but an opportunity.',
    'A \u0065\u0301lan note: It is not merely a door, but a promise.',
    'The conference‑room is open. Our team‐members arrived.'
  ];
  for(const text of passages){const result=checker.analyze(text);validateResult(text,result);assert.ok(result.findings.length>0,text);}
  assert.equal(checker.countWords("Zoë can't accept a twenty-year-old claim."),6);
  assert.equal(checker.countWords('e\u0301lan élève'),2);
  const paragraphs=checker.segment('One useful sentence.\r\n\r\nAnother useful sentence.');assert.equal(paragraphs.paragraphs.length,2);
});

test('code, URLs and scripts do not produce prose findings or execute',()=>{
  const signature='It is not just a package, but a movement.';
  for(const text of ['```text\n'+signature+'\n```','`'+signature+'`','<script>'+signature+'</script>','<pre>'+signature+'</pre>','~~~~\n'+signature+'\n~~~~'])assert.ok(!has(text,'P011'),text);
  assert.ok(has('Example follows.\n```\n'+signature+'\n```\n\nOutside the code, '+signature,'P011'));
  assert.ok(!has('See https://example.org/not-just-a-package-but-a-movement for instructions.','P011'));
  assert.ok(has('Source: https://example.org/a?utm_source=chatgpt.com','P046'));
  // Quotations deliberately remain readable prose; they may quote a signature.
  assert.ok(has('She wrote, “'+signature+'”','P011'));
});

test('short passages do not silently qualify for long-form checks',()=>{
  const r=checker.analyze('A single clear sentence.');
  assert.ok(r.eligibility.skipped.some(s=>s.entryId==='P094'));
  assert.ok(r.eligibility.skipped.some(s=>s.entryId==='P142'));
  assert.ok(!r.findings.some(f=>['P009','P088','P094','P142'].includes(f.entryId)));
  assert.equal(checker.analyze('   ').status,'empty');
  assert.equal(checker.analyze('newsletter').status,'ok');
  assert.ok(!has('However, the experiment failed.','P138'));
  assert.ok(!has('The room — painted blue — opened today.','P021'));
});

test('hyphen advice distinguishes split words, noun phrases, and possible modifiers',()=>{
  for(const text of ['Read the news-letter.','Our brain-storming session ended at noon.','The project-timeline is final.','We met in the conference-room.','The team-members approved it.','The customer-base grew last month.','The team-members checked the project-timeline before writing the news-letter.'])assert.ok(has(text,'P144'),text);
  for(const text of ['A project-timeline update arrived.','A conference-room booking was canceled.','Use the blog-post editor.','A well-known author wrote it.','The twenty-year-old pump failed.','Please turn-around.','We should turn around.'])assert.ok(!has(text,'P144'),text);
});

test('heading capitalization accepts minor title words and consistent styles',()=>{
  assert.ok(has('## History and Cultural Significance\nThe building opened in May.\n## Student life\nThe choir rehearses on Tuesday.','P017'));
  assert.ok(!has('## History and Cultural Significance\nThe building opened in May.\n## Student Life and Activities\nThe choir rehearses on Tuesday.','P017'));
  assert.ok(!has('# The History of River Transport\n## Ferry routes\nThe ferry stops here.','P017'));
});

test('reported failure passages return specific observations without topic-specific rules',()=>{
  for(const example of regressions){const result=checker.analyze(example.text);validateResult(example.text,result);assert.equal(result.status,'ok');for(const id of example.expectedEntries)assert.ok(result.findings.some(f=>f.entryId===id),`${example.key}: ${id}`);}
  const source=fs.readFileSync(path.join(root,'src/checker-engine.js'),'utf8')+fs.readFileSync(path.join(root,'src/checker-rules.js'),'utf8');
  assert.doesNotMatch(source,/Facebook|Knickerbocker|Ethical Breakdowns|slippery slope|Sabrett|hot dogs|mystery meats/i);
  // Linking words spaced through a long passage are not a local transition run.
  const spaced='However, the valve was intact. The pipe was dry. Water entered through the roof. We replaced a tile. The room dried overnight. The owner checked it on Friday. ';
  assert.ok(!has(spaced.repeat(3),'P138'));
});

test('copied chat labels are found without treating every mention of a chatbot as residue',()=>{
  for(const text of [
    'ChatGPT said:\nThe station closes at eight.',
    'Chat GPT replied: The station closes at eight.',
    '**ChatGPT said:**\nThe station closes at eight.',
    '## Assistant:\nThe station closes at eight.',
    'Claude answered:\nThe station closes at eight.',
    '> Gemini:\nThe station closes at eight.',
    'AI assistant: The station closes at eight.'
  ]){const r=checker.analyze(text);validateResult(text,r);assert.ok(r.findings.some(f=>f.ruleId==='chat-role-label'),text);}
  for(const text of [
    'The article describes what ChatGPT said about the timetable.',
    'I asked what ChatGPT said: it described the timetable.',
    'Claude said: “I will take the next train.”',
    'ChatGPT said:',
    '```text\nChatGPT said:\nThe station closes at eight.\n```',
    '`ChatGPT said:` is the label in this interface.'
  ])assert.ok(!checker.analyze(text).findings.some(f=>f.ruleId==='chat-role-label'),text);
});

test('assertion-first contrasts work across punctuation without flagging an ordinary dash aside',()=>{
  for(const text of [
    'The answer is clarity — not more jargon.',
    'The goal is progress, not perfection.',
    'The answer is clarity – not more jargon.',
    'The answer is clarity -- not more jargon.',
    'The answer is clarity; not more jargon.',
    'The goal is progress —\nnot perfection.'
  ]){const r=checker.analyze(text);validateResult(text,r);assert.ok(r.findings.some(f=>f.ruleId==='assertion-then-rejection'),text);}
  for(const text of [
    'The room — painted blue — opened today.',
    'The bus left — not because it was full, but because it was late.',
    'We ate lunch — not knowing the kitchen was closing.',
    'The tickets cost five pounds, not 50.',
    'The bowls contain beef, water, and seasonings.',
    'The dog is not sleeping.',
    '`The goal is progress, not perfection.`'
  ])assert.ok(!checker.analyze(text).findings.some(f=>f.ruleId==='assertion-then-rejection'),text);
});

test('sentence-ending emoji retain full Unicode spans while brief reactions and symbol discussions are skipped',()=>{
  for(const emoji of ['🌭','👍🏽','👨‍👩‍👧‍👦','🏳️‍🌈','✅']){
    for(const text of [`The new guide explains each stage of the repair. ${emoji}`,`The new guide explains each stage of the repair ${emoji}.`]){
      const r=checker.analyze(text);validateResult(text,r);
      const finding=r.findings.find(f=>f.ruleId==='emoji-after-prose');assert.ok(finding,text);assert.equal(finding.excerpt,emoji);
    }
  }
  for(const text of [
    'Thanks! 😊',
    'See you at six 👍🏽',
    'The emoji used for a hot dog is 🌭.',
    'The guide uses the symbol “✅” for a completed step.',
    'The guide places a 🐢 beside the slower route.',
    'This guide belongs to the local repair club. ©',
    '```text\nThe new guide explains each stage of the repair. 🌭\n```'
  ])assert.ok(!checker.analyze(text).findings.some(f=>f.ruleId==='emoji-after-prose'),text);
});

test('the reported food answer has three specific findings; its prose is checked even without the chat label',()=>{
  const text=regressions.find(r=>r.key==='copied-food-answer').text;
  const r=checker.analyze(text);validateResult(text,r);
  assert.equal(r.findings.length,3);
  assert.deepEqual(r.findings.map(f=>f.excerpt),['ChatGPT said:','— not pork or a mixture of mystery meats','🌭']);
  assert.ok(r.findings.every(f=>f.title));
  const prose=text.split('ChatGPT said:\n')[1];
  assert.deepEqual(checker.analyze(prose).findings.map(f=>f.entryId),['P013','P022']);
  const control='Those street-cart hot dogs contain beef, water, and seasonings. They are sold under blue-and-yellow umbrellas. Check the package for the full ingredient list.';
  assert.deepEqual(checker.analyze(control).findings,[]);
});

test('a legitimate rhetorical form is described without an automatic deletion instruction',()=>{
  const text='The package contains not just the lamp, but also a spare bulb.';
  const hit=checker.analyze(text).findings.find(f=>f.entryId==='P011');assert.ok(hit);
  assert.match(hit.explanation,/can be useful/);
  assert.doesNotMatch(hit.explanation,/delete|remove|AI.generated|probably AI|proof/i);
});

test('rejects oversize input instead of checking a truncated passage; bounds displayed findings',()=>{
  assert.equal(checker.analyze('word '.repeat(10001)).status,'too-long');
  const huge=checker.analyze('a'.repeat(80001));assert.equal(huge.status,'too-long');assert.equal(huge.wordCount,null);
  assert.equal(checker.analyze('word '.repeat(10000)).status,'ok');
  const many=checker.analyze('It is important to note the deadline. '.repeat(80));assert.ok(many.findingLimitReached);assert.ok(many.findings.length<=300);
  const hyphens=checker.analyze('Read the news-letter. '.repeat(35));assert.equal(hyphens.findings.filter(f=>f.entryId==='P144').length,30);assert.ok(hyphens.findingLimitReached);
  assert.throws(()=>checker.analyze({text:'hello'}),TypeError);
});

test('keeps independent overlapping findings with valid occurrence ranges',()=>{
  const text='The framework is not just a tool, but a beacon of innovation.';
  const r=checker.analyze(text);validateResult(text,r);
  assert.ok(r.findings.some(f=>f.entryId==='P011'));assert.ok(r.findings.some(f=>f.entryId==='P004'));
});

test('worker compiles once and echoes revisions for successful and failed requests',()=>{
  const posted=[];const context={self:{postMessage:x=>posted.push(x)},Intl,Set,Map,console};context.globalThis=context;context.importScripts=(...files)=>{for(const file of files)vm.runInContext(fs.readFileSync(path.join(root,'src',file),'utf8'),ctx);context.self.SignatureChecker=context.SignatureChecker;};
  const ctx=vm.createContext(context);vm.runInContext(fs.readFileSync(path.join(root,'src/checker-worker.js'),'utf8'),ctx);
  context.self.onmessage({data:{revision:17,text:'The news-letter arrived.'}});context.self.onmessage({data:{revision:18,text:null}});
  assert.equal(posted[0].revision,17);assert.ok(posted[0].result.findings.some(f=>f.entryId==='P144'));assert.equal(posted[1].revision,18);assert.match(posted[1].error,/string/);
});

test('maximum accepted prose runs within a practical local processing budget',()=>{
  const long='Residents checked the meter and recorded the reading before breakfast. '.repeat(850);
  const start=performance.now();const result=checker.analyze(long);const ms=performance.now()-start;validateResult(long,result);
  assert.equal(result.status,'ok');assert.ok(ms<7000,`Processing took ${Math.round(ms)} ms`);
});

function sourceCases(){
  const records=[],entries=[];
  for(const b of blocks){
    const id='P'+b[1],body=b[3],primary=body.match(/\*\*Illustrative example:\*\* ([\s\S]*?)(?=\n\n|$)/)?.[1];
    assert.ok(primary,`${id} has an illustrative example`);
    records.push({key:`${id}-primary`,kind:'Primary example',label:b[2],related:[id],text:primary.replace(/<br\s*\/?\s*>/gi,'\n')});
    let index=0;for(const a of body.matchAll(/^- \*\*([^\n]+?):\*\* (.+)$/gm))records.push({key:`${id}-additional-${++index}`,kind:'Additional example',label:a[1],related:[id],text:a[2].replace(/<br\s*\/?\s*>/gi,'\n')});
    entries.push({id:Number(b[1]),title:b[2],slug:id.toLowerCase()});
  }
  const clean=s=>s.replace(/\*\*/g,'').replace(/\s+/g,' ').trim();const slug=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-');
  const library=require('../src/library.cjs')(md,entries,clean,slug);
  for(const collection of library){let index=0;for(const item of collection.items){index++;const related=collection.related.map(s=>s.toUpperCase());records.push({key:`${collection.slug}-term-${index}`,kind:'Collection term',label:`${collection.title}: ${item.term}`,related,text:item.term});if(item.example)records.push({key:`${collection.slug}-example-${index}`,kind:'Collection example',label:`${collection.title}: ${item.term}`,related,text:item.example});}}
  return records;
}
const observations=sourceCases().map(record=>{
  const result=checker.analyze(record.text);validateResult(record.text,result);
  return {...record,matched:[...new Set(result.findings.map(f=>f.entryId))],coverage:record.related.map(id=>({entryId:id,status:coverageById.get(id)?.status||'missing'})),eligibleRelated:record.related.filter(id=>!result.eligibility.skipped.some(s=>s.entryId===id)),status:result.status};
});

test('every public primary, additional, collection example and collection term was actually checked',()=>{
  assert.equal(observations.filter(o=>o.kind==='Primary example').length,blocks.length);
  assert.ok(observations.some(o=>o.kind==='Additional example'));assert.ok(observations.filter(o=>o.kind==='Collection example').length>400);
  assert.ok(observations.filter(o=>o.kind==='Collection term').length>2000);
  for(const observation of observations){assert.ok(observation.related.length>0,observation.key);assert.ok(observation.coverage.every(c=>c.status!=='missing'),observation.key);assert.ok(['ok','empty'].includes(observation.status));}
  // These are observations, not fabricated pass claims for semantic examples.
  assert.ok(observations.some(o=>o.coverage.some(c=>c.status==='manual')&&!o.matched.some(id=>o.related.includes(id))));
});

function writeAudit(){
  const esc=s=>String(s).replace(/\|/g,'\\|').replace(/\r?\n/g,'<br>').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const hash=crypto.createHash('sha256').update(md).digest('hex');
  const groups=[...new Set(observations.map(o=>o.kind))];
  const primary=observations.filter(o=>o.kind==='Primary example');
  const regressionResults=regressions.map(r=>({key:r.key,label:r.label,manualLimits:r.manualLimits,...checker.analyze(r.text)}));
  const stats=groups.map(kind=>{const xs=observations.filter(o=>o.kind===kind);return{kind,checked:xs.length,any:xs.filter(x=>x.matched.length).length,related:xs.filter(x=>x.matched.some(id=>x.related.includes(id))).length};});
  const lines=[
    '# Check for AI Slop: coverage and verification',
    '',
    'This report records what the original local checker actually recognizes. A matching construction can be legitimate human writing. The checker does not estimate authorship or evaluate the truth, usefulness or tone of a passage.',
    '',
    `Master content SHA-256: \`${hash}\`. Regenerate after content changes with \`node tests/checker.test.cjs --audit\`.`,
    '',
    '## Implementation and limits',
    '',
    '- Original JavaScript text extraction, construction families and rules. No upstream checker source, imported vocabulary scores, machine-learning model or external service is used.',
    '- Text is checked in a same-origin worker. Requests carry a revision number so the page can discard stale results.',
    '- At least one word; at most 10,000 words and 80,000 UTF-16 character units. Oversize passages are rejected, never silently shortened.',
    '- A contraction or hyphenated compound counts as one word. Numbers count as words. English patterns are supported; token positions also support Unicode text.',
    '- Raw input counts toward the input limits. Code fences, inline code and script/style/pre/code blocks are excluded from prose checks. Ordinary quoted prose stays eligible.',
    '- Readable prose is extracted with a map back to the original text. Common and numeric HTML entities are decoded, inline markup is removed, and whitespace is normalized. Rich documents and hidden formatting are not inspected.',
    '- The page displays up to 300 findings and up to 30 occurrences of one phrase rule. A flag is returned if that display cap is reached. Grouped findings retain up to 40 example occurrences.',
    '- Sentence and paragraph thresholds vary by rule. The engine records skipped checks for diagnostics; the page displays only findings anchored to the submitted text. A no-match result does not identify the author.',
    '- Meaning-dependent entries are manual. Source verification, hallucination, audience fit, unsupported significance, missing detail and paraphrased repetition are not determined automatically.',
    '- Reference markers and an ISBN checksum can expose visible defects. A valid citation or checksum is not proof that a source exists or supports a claim.',
    '- Hyphen checks distinguish known closed spellings, open noun phrases with grammatical cues, and stacked hyphenated descriptions. A stacked description may be grammatical. Unknown compounds and ambiguous modifier uses receive no spelling correction.',
    '',
    '## Original test cases',
    '',
    `${fixtures.length} entries each have an original illustrative passage and a realistic control: ${fixtures.length*2} passages. ${fixtures.filter(f=>f.expectation==='match').length} positives exercise supported observable facets; ${checker.coverage.filter(c=>c.status==='manual').length} cases remain manual and 11 are explicitly excluded cautions. Controls are tested against their own entry, not asserted to be free of every other construction. These are regression cases, not an independent accuracy study.`,
    '',
    'Additional tests cover subject substitutions, long contrasts, contraction and punctuation variants, Unicode offsets, Markdown and HTML masking, valid compound modifiers, brief texts, input caps, overlapping findings, worker revision messages and processing time.',
    '',
    '## Earlier failure passages from the conversation',
    '',
    'These passages are separate from the independently authored examples. Their expected observations are tested without including topic names or passages in the engine rules.',
    '',
    '| Passage | Words | Findings | Returned patterns | Meaning still requiring a reader |',
    '|---|---:|---:|---|---|',
    ...regressionResults.map(r=>`| ${r.label} | ${r.wordCount} | ${r.findings.length} | ${[...new Set(r.findings.map(f=>`${f.entryId}: ${f.ruleId}`))].join('; ')} | ${r.manualLimits} |`),
    '',
    '## Existing site examples: observed results',
    '',
    'Every public example and collection term was submitted to the engine. No assertion forces a semantic example or ordinary vocabulary term to return a finding.',
    '',
    '| Case type | Checked | Any finding | Finding linked to its own page |',
    '|---|---:|---:|---:|',
    ...stats.map(s=>`| ${s.kind} | ${s.checked} | ${s.any} | ${s.related} |`),
    '',
    'These counts describe examples, not people or authorship. Many collection items are ordinary words. Recognizing each word by itself would make the checker worse.',
    '',
    '### Supported pages whose primary example did not trigger their own check',
    '',
    ...primary.filter(o=>coverageById.get(o.related[0]).status==='partial'&&!o.matched.includes(o.related[0])).map(o=>`- **${o.related[0]} ${o.label}:** ${coverageById.get(o.related[0]).rationale} ${o.eligibleRelated.includes(o.related[0])?'The example does not meet the implemented form or repetition threshold.':'The passage is below this check’s eligibility threshold.'}`),
    '',
    '## Coverage register',
    '',
    'Partial means a specified observable facet is supported. Manual means the underlying judgment is not automated. Excluded entries teach why a proposed indicator is unreliable and can never produce a positive finding.',
    '',
    '| Entry | Status | What is covered |',
    '|---|---|---|',
    ...checker.coverage.map(c=>`| ${c.entryId} | ${c.status} | ${esc(c.rationale)} |`),
    '',
    '## Original passage and control for every entry',
    '',
    '| Entry | Expected treatment | Original passage | Control |',
    '|---|---|---|---|',
    ...fixtures.map(f=>`| ${f.entryId} | ${f.expectation} | ${esc(f.example)} | ${esc(f.control)} |`),
    '',
    '## Complete observation log',
    '',
    'The coverage column describes the related catalog pages. Returned findings may concern another page. A dash means no finding was returned; it does not mean the writing was human or free of every catalog pattern.',
    '',
    '| Case | Related coverage | Text checked | Returned entry IDs |',
    '|---|---|---|---|',
    ...observations.map(o=>`| ${esc(o.key)} | ${o.coverage.map(c=>`${c.entryId} ${c.status}`).join(', ')} | ${esc(o.text)} | ${o.matched.join(', ')||'—'} |`),
    ''
  ];
  fs.writeFileSync(path.join(root,'docs/live-checker-coverage.md'),lines.join('\n'),'utf8');
  const folder=path.join(root,'working','live-checker');fs.mkdirSync(folder,{recursive:true});
  fs.writeFileSync(path.join(folder,'coverage-observations.json'),JSON.stringify({sourceHash:hash,limits:checker.limits,coverageCounts:checker.coverage.reduce((out,c)=>(out[c.status]=(out[c.status]||0)+1,out),{}),originalCaseCount:fixtures.length*2,stats,regressions:regressionResults,observations},null,2),'utf8');
  console.log('Wrote checker coverage audit:',JSON.stringify({originalCases:fixtures.length*2,sourceHash:hash,observations:stats}));
}
if(process.argv.includes('--audit'))writeAudit();
