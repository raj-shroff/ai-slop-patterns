/* Reproducible construction evaluation. No authorship labels or probabilities. */
const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const checker=require('../src/checker-engine.js');
const root=path.resolve(__dirname,'..');
const fixturePath=path.join(root,'tests/fixtures/live-checker-evaluation.json');
const bytes=fs.readFileSync(fixturePath);
const fixtures=JSON.parse(bytes);
const firstRun=require('../tests/fixtures/live-checker-evaluation-first-run.json');
const results=fixtures.cases.map(c=>{
  const result=checker.analyze(c.text),matched=[...new Set(result.findings.map(f=>f.entryId))];
  return{...c,matched,pass:c.entry?matched.includes(c.entry):c.absent.every(id=>!matched.includes(id)),findings:result.findings.map(f=>({entry:f.entryId,rule:f.ruleId,text:f.excerpt}))};
});
const positives=results.filter(r=>r.entry),controls=results.filter(r=>r.absent);
const report={
  version:checker.version,fixtureHash:crypto.createHash('sha256').update(bytes).digest('hex'),
  engineHash:crypto.createHash('sha256').update(['checker-text.js','checker-families.js','checker-rules.js','checker-engine.js'].map(f=>fs.readFileSync(path.join(root,'src',f))).join('\n')).digest('hex'),
  positive:{matched:positives.filter(r=>r.pass).length,total:positives.length},
  control:{passed:controls.filter(r=>r.pass).length,total:controls.length,zeroFindings:controls.filter(r=>!r.matched.length).length},
  description:fixtures.description,firstRun,results
};
const dir=path.join(root,'working/live-checker');fs.mkdirSync(dir,{recursive:true});
fs.writeFileSync(path.join(dir,'family-evaluation.json'),JSON.stringify(report,null,2)+'\n');
const lines=[
  '# Checker rebuild: evaluation', '',
  'These original passages were set aside before the construction-family rewrite and evaluated after it. They were written for this project, not sampled independently from humans or models. Passing them establishes behavior on these inputs, not AI-detection accuracy.', '',
  `Engine version: ${report.version}. Fixture SHA-256: \`${report.fixtureHash}\`. Engine SHA-256: \`${report.engineHash}\`.`, '',
  `- First frozen-rule run: ${firstRun.positive.matched}/${firstRun.positive.total} positive passages; ${firstRun.control.passed}/${firstRun.control.total} controls passed.`,
  `- After repairing the three observed gaps: ${report.positive.matched}/${report.positive.total} positive passages. This is now a regression result.`,
  `- Targeted false positive avoided: ${report.control.passed}/${report.control.total} control passages.`,
  `- Controls with no findings of any kind: ${report.control.zeroFindings}/${report.control.total}.`, '',
  'The first run missed a contrast without an article, an importance phrase with an inserted noun, and a repeated two-word opening with a changing third word (E04, E14, E25). Those results prompted changes to the shared construction families. The first engine hash and results are preserved in `tests/fixtures/live-checker-evaluation-first-run.json`. The current perfect score, if any, must not be reported as unseen accuracy. Future claims about generalization need a new independent sample.', '',
  '## Per-passage results', '',
  '| Case | Intended behavior | Result | Returned entries |', '|---|---|---|---|',
  ...results.map(r=>`| ${r.id} | ${r.entry?'Find '+r.entry:'Avoid '+r.absent.join(', ')} | ${r.pass?'Pass':'Miss'} | ${r.matched.join(', ')||'None'} |`), '',
  'Full passages are in `tests/fixtures/live-checker-evaluation.json`. Run `node scripts/evaluate-checker.cjs` to reproduce this report. Every returned span is separately tested against the original input; the browser tests exercise the deployed worker and fallback.', '',
  '## Scope and remaining gaps', '',
  '- No external checker source, configuration, vocabulary weights or scoring formula was imported. The implementation uses original JavaScript and the site’s existing reference descriptions.',
  '- Text extraction, source mapping and family checks now share one processing model. Case, soft line wrapping, inline markup and common HTML entities do not change the intended construction.',
  '- Known split spellings and clear noun-phrase uses receive spelling advice. Adjacent hyphenated descriptions receive a separate readability observation; they may be grammatical. This is not a general hyphenation grammar.',
  '- Vocabulary counts describe words repeated in the pasted passage. They do not estimate how likely the writer is to be human or AI. There is no independently calibrated authorship score.',
  '- The catalogue still contains meaning-dependent entries. In particular, paraphrased repetition, factual support, relevance, tone and invented citations need information that these local rules do not have.',
  '- The audit of all public examples is in `docs/live-checker-coverage.md`. Ordinary collection words are not expected to trigger findings individually.', ''
];
fs.writeFileSync(path.join(root,'docs/live-checker-evaluation.md'),lines.join('\n'));
console.log(JSON.stringify({positive:report.positive,control:report.control,misses:results.filter(r=>!r.pass).map(r=>r.id)},null,2));
