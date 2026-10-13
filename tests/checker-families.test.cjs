const test=require('node:test');
const assert=require('node:assert/strict');
const checker=require('../src/checker-engine.js');
const Text=require('../src/checker-text.js');
const has=(text,id)=>checker.analyze(text).findings.some(f=>f.entryId===id);
function validSpans(text,result){
  for(const f of result.findings)for(const part of [f,...(f.occurrences||[])]){
    assert.equal(part.excerpt,text.slice(part.start,part.end));
    assert.ok(part.start>=0&&part.end<=text.length&&part.start<part.end);
  }
}
const specimens=[
  ['P001','This marks a pivotal moment and leaves an indelible mark.'],
  ['P004','The platform provides unparalleled quality through cutting-edge technology.'],
  ['P009','The thoughtful plan fosters meaningful progress through a robust and holistic approach.'],
  ['P011',"This isn't just a plan; it is a promise."],
  ['P012','This is more than a building. It is the heart of our community.'],
  ['P013','The festival feels less like an event and more like a movement.'],
  ['P079','It is important to note that the office opens at noon.'],
  ['P088','The approach is remarkably effective and absolutely essential.'],
  ['P096','No delays, no friction, no limits.'],
  ['P139','Why this matters is simple: it changes everything.'],
  ['P140','The system delivers more without sacrificing quality.'],
  ['P141','This is an especially helpful guide for navigating challenges.'],
  ['P143','This is arguably the most powerful tool available.'],
  ['P144','The team-members discussed the project-timeline.']
];
const transforms={
  plain:s=>s,
  capitals:s=>s.toUpperCase(),
  softWrap:s=>s.replace(/ /g,'\r\n'),
  whitespace:s=>s.replace(/ /g,' \t '),
  boldWords:s=>s.replace(/\b([A-Za-z]+)\b/g,'**$1**'),
  splitWordMarkup:s=>s.replace(/\b([A-Za-z]{2})([A-Za-z]{2,})\b/g,'$1<em>$2</em>'),
  entities:s=>s.replace(/ /g,'&nbsp;').replace(/'/g,'&#39;'),
  unicodeSpaces:s=>s.replace(/ /g,'\u2009').replace(/'/g,'’').replace(/-/g,'‑'),
  prefix:s=>'😀 Éloïse wrote:\n\n'+s
};
test('construction families survive 126 case, whitespace, markup and Unicode variations',()=>{
  for(const [id,plain]of specimens)for(const [variant,transform]of Object.entries(transforms)){
    const text=transform(plain),result=checker.analyze(text);validSpans(text,result);
    assert.ok(result.findings.some(f=>f.entryId===id),`${id} ${variant}: ${text}`);
  }
});
test('source mapping is exact through removed markup, entities and surrogate pairs',()=>{
  const text='😀 <b>Header</b>\n\nIt&nbsp;is im<strong>portant</strong> to note that the room is open.';
  const result=checker.analyze(text),f=result.findings.find(f=>f.entryId==='P079');
  assert.equal(f.excerpt,'It&nbsp;is im<strong>portant</strong> to note');validSpans(text,result);
  const raw='<p>It is important to note that this is useful.</p><ref name="missing"/>';
  const r=checker.analyze(raw);assert.equal(r.findings.find(f=>f.entryId==='P047').excerpt,'<ref name="missing"/>');validSpans(raw,r);
  assert.equal(Text.model('<p>First paragraph.</p><p>Second paragraph.</p>').paragraphs.length,2);
  assert.equal(Text.model('not [just](https://example.com) a rule').prose,'not just a rule');
});
test('negative constructions vary by separator, case, tense and conjunction',()=>{
  for(const text of [
    'No forms. No queues. No waiting.',
    'The promise: no forms; no queues; and no waiting.',
    '“No forms, no queues, no waiting.”',
    'It did not warn, did not log, and did not stop.',
    "It didn't warn; didn't log; didn't stop.",
    'Not a rule — not a habit — not a compromise.'
  ])assert.ok(has(text,'P096'),text);
  for(const text of ['No forms were available. We printed new copies.','No trains ran. Tickets were refunded. No one complained.'])assert.ok(!has(text,'P096'),text);
});
test('vocabulary uses inflection families and reports counts rather than authorship scores',()=>{
  for(const inflection of ['delve','delves','delved','delving'])assert.ok(has(`We ${inflection} into a vibrant tapestry of ideas, fostering meaningful connections and underscoring a pivotal shift.`,'P009'));
  const text='The thoughtful approach makes meaningful progress possible.\n\nA thoughtful plan offers dependable support for meaningful progress.\n\nThese dependable changes make the thoughtful process meaningful.';
  const f=checker.analyze(text).findings.find(f=>f.entryId==='P137');assert.ok(f);
  assert.equal(f.measurement.count,f.occurrences.length);assert.equal(f.measurement.words,checker.segment(text).tokens.length);
  assert.ok(!('probability' in f));
  for(const text of ['The tapestry is blue.','The technician underscored the figure in red.','A meaningful difference would be five degrees.'])assert.ok(!checker.analyze(text).findings.some(f=>['P009','P137'].includes(f.entryId)));
});
test('hyphen rules distinguish spelling advice, readable modifiers and stacked descriptions',()=>{
  for(const verb of ['discussed','rejected','considered','published','reviewed','approved'])assert.ok(has(`Our team-members ${verb} the report.`,'P144'));
  for(const compound of ['data-base','note-book','work-flow'])assert.ok(has(`Open the ${compound}.`,'P144'));
  assert.match(checker.analyze('The class-room is empty.').findings.find(f=>f.entryId==='P144').explanation,/“classroom”/);
  // Joining an ambiguous verb would turn one spelling mistake into another.
  assert.ok(!has('The readings feed-back into the display.','P144'));
  for(const text of ['Use the team-member portal.','Read the project-timeline summary.','A street-cart frank costs four dollars.','A well-known author wrote the book.','We should turn around.'])assert.ok(!has(text,'P144'),text);
  const text='The small-batch locally-sourced product is ready.',result=checker.analyze(text);
  const f=result.findings.find(f=>f.ruleId==='stacked-hyphens');assert.ok(f);assert.match(f.explanation,/may be grammatical/);assert.equal(f.occurrences.length,2);validSpans(text,result);
});
test('normalized prose never executes markup or scans excluded code',()=>{
  for(const [id,plain]of specimens){
    for(const text of ['```text\n'+plain+'\n```','`'+plain+'`','<script>'+plain+'</script>','<code>'+plain+'</code>'])assert.ok(!has(text,id),`${id}: ${text}`);
  }
});
test('short observable phrases do not inherit arbitrary paragraph-length requirements',()=>{
  for(const [id,text]of [['P088','This is remarkably effective.'],['P139','This matters.'],['P140','More speed without sacrificing accuracy.']])assert.ok(has(text,id),text);
  assert.ok(!has('This result does not establish causation.','P142'));
  assert.ok(!has('The guide can help you find the train times.','P142'));
});
