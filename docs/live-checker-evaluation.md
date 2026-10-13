# Checker rebuild: evaluation

These original passages were set aside before the construction-family rewrite and evaluated after it. They were written for this project, not sampled independently from humans or models. Passing them establishes behavior on these inputs, not AI-detection accuracy.

Engine version: 2.0.0. Fixture SHA-256: `fb43eca733cba33aeb6a0512cb0cbea74f6d1ea212600bbde84d7f44bc311e2a`. Engine SHA-256: `2462b5a35379418c772221ce1187ad3c44688f4023370221389352483039efee`.

- First frozen-rule run: 27/30 positive passages; 16/16 controls passed.
- After repairing the three observed gaps: 30/30 positive passages. This is now a regression result.
- Targeted false positive avoided: 16/16 control passages.
- Controls with no findings of any kind: 16/16.

The first run missed a contrast without an article, an importance phrase with an inserted noun, and a repeated two-word opening with a changing third word (E04, E14, E25). Those results prompted changes to the shared construction families. The first engine hash and results are preserved in `tests/fixtures/live-checker-evaluation-first-run.json`. The current perfect score, if any, must not be reported as unseen accuracy. Future claims about generalization need a new independent sample.

## Per-passage results

| Case | Intended behavior | Result | Returned entries |
|---|---|---|---|
| E01 | Find P011 | Pass | P011 |
| E02 | Find P011 | Pass | P011 |
| E03 | Find P012 | Pass | P012 |
| E04 | Find P012 | Pass | P012 |
| E05 | Find P013 | Pass | P013 |
| E06 | Find P096 | Pass | P096 |
| E07 | Find P096 | Pass | P096, P013 |
| E08 | Find P096 | Pass | P096 |
| E09 | Find P001 | Pass | P001 |
| E10 | Find P001 | Pass | P010, P001 |
| E11 | Find P004 | Pass | P004 |
| E12 | Find P079 | Pass | P079 |
| E13 | Find P088 | Pass | P088 |
| E14 | Find P139 | Pass | P139 |
| E15 | Find P140 | Pass | P140 |
| E16 | Find P141 | Pass | P141 |
| E17 | Find P138 | Pass | P138 |
| E18 | Find P009 | Pass | P009 |
| E19 | Find P144 | Pass | P144 |
| E20 | Find P144 | Pass | P144 |
| E21 | Find P144 | Pass | P144 |
| E22 | Find P028 | Pass | P028 |
| E23 | Find P134 | Pass | P134 |
| E24 | Find P143 | Pass | P143 |
| E25 | Find P093 | Pass | P093 |
| E26 | Find P098 | Pass | P098 |
| E27 | Find P011 | Pass | P011 |
| E28 | Find P079 | Pass | P079 |
| E29 | Find P137 | Pass | P137 |
| E30 | Find P021 | Pass | P021 |
| C01 | Avoid P011, P012 | Pass | None |
| C02 | Avoid P009, P137 | Pass | None |
| C03 | Avoid P144 | Pass | None |
| C04 | Avoid P144 | Pass | None |
| C05 | Avoid P096 | Pass | None |
| C06 | Avoid P088 | Pass | None |
| C07 | Avoid P138 | Pass | None |
| C08 | Avoid P139 | Pass | None |
| C09 | Avoid P140 | Pass | None |
| C10 | Avoid P028 | Pass | None |
| C11 | Avoid P093 | Pass | None |
| C12 | Avoid P079, P011 | Pass | None |
| C13 | Avoid P098 | Pass | None |
| C14 | Avoid P021 | Pass | None |
| C15 | Avoid P144 | Pass | None |
| C16 | Avoid P001, P004, P009, P088, P137 | Pass | None |

Full passages are in `tests/fixtures/live-checker-evaluation.json`. Run `node scripts/evaluate-checker.cjs` to reproduce this report. Every returned span is separately tested against the original input; the browser tests exercise the deployed worker and fallback.

## Scope and remaining gaps

- No external checker source, configuration, vocabulary weights or scoring formula was imported. The implementation uses original JavaScript and the site’s existing reference descriptions.
- Text extraction, source mapping and family checks now share one processing model. Case, soft line wrapping, inline markup and common HTML entities do not change the intended construction.
- Known split spellings and clear noun-phrase uses receive spelling advice. Adjacent hyphenated descriptions receive a separate readability observation; they may be grammatical. This is not a general hyphenation grammar.
- Vocabulary counts describe words repeated in the pasted passage. They do not estimate how likely the writer is to be human or AI. There is no independently calibrated authorship score.
- The catalogue still contains meaning-dependent entries. In particular, paraphrased repetition, factual support, relevance, tone and invented citations need information that these local rules do not have.
- The audit of all public examples is in `docs/live-checker-coverage.md`. Ordinary collection words are not expected to trigger findings individually.
