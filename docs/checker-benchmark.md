# Checker regression benchmark

45 reference patterns have at least one implemented rule. Coverage of an entry is partial: the matcher does not recognize every possible form.

## Scope and provenance

23 passages: 4 human-written public-domain excerpts and 18 synthetic AI passages authored by Codex for this suite, plus 1 user-supplied passage with unverified authorship. Text, source URLs, provenance, and expected pattern labels are in tests/fixtures/checker-passages.json. Individual common-vocabulary matching is not included.

This is a small, deliberately constructed development regression set, not an independent accuracy benchmark. Expectations were annotated by the implementing assistant. It is not representative of contemporary client or student writing. No human reviewer has independently validated the labels. Do not report these results as AI detection accuracy or general precision/recall. Future evaluation should use independently annotated, held-out passages across genres, including legitimate uses of the same patterns.

## Results

- Expected passage–pattern pairs found: 19
- Expected pairs missed: 0
- Additional pairs relative to fixture labels: 0
- Human excerpts with any highlights: 0

The plain-ai fixture intentionally contains no targeted pattern and receives no highlight. The legitimate-contrast fixture is a valid factual correction that still matches a contrast construction. A wording match cannot establish inappropriate use or authorship.

| Passage | Provenance | Expected patterns | Found | Missed | Additional |
|---|---|---:|---:|---:|---:|
| austen-opening | human-public-domain | 0 | 0 | 0 | 0 |
| austen-conversation | human-public-domain | 0 | 0 | 0 | 0 |
| carroll-opening | human-public-domain | 0 | 0 | 0 | 0 |
| carroll-tea | human-public-domain | 0 | 0 | 0 | 0 |
| transitions | ai-synthetic | 1 | 1 | 0 | 0 |
| summaries | ai-synthetic | 1 | 1 | 0 | 0 |
| restate | ai-synthetic | 1 | 1 | 0 | 0 |
| fragments | ai-synthetic | 1 | 1 | 0 | 0 |
| negatives | ai-synthetic | 2 | 2 | 0 | 0 |
| narration | ai-synthetic | 1 | 1 | 0 | 0 |
| promise | ai-synthetic | 1 | 1 | 0 | 0 |
| scene | ai-synthetic | 1 | 1 | 0 | 0 |
| slogan | ai-synthetic | 1 | 1 | 0 | 0 |
| helpfulness | ai-synthetic | 1 | 1 | 0 | 0 |
| bold | ai-synthetic | 1 | 1 | 0 | 0 |
| dash | ai-synthetic | 1 | 1 | 0 | 0 |
| plain-ai | ai-synthetic | 0 | 0 | 0 | 0 |
| ordinary-transitions | ai-synthetic | 0 | 0 | 0 | 0 |
| short-dialogue | ai-synthetic | 0 | 0 | 0 | 0 |
| ordinary-dash | ai-synthetic | 0 | 0 | 0 | 0 |
| ordinary-bold | ai-synthetic | 0 | 0 | 0 | 0 |
| legitimate-contrast | ai-synthetic | 1 | 1 | 0 | 0 |
| user-claude-passage | user-supplied-authorship-unverified | 5 | 5 | 0 | 0 |

## Reproduce

Run npm run benchmark:checker. Run npm test for thresholds, boundary behavior, Unicode offsets, overlapping matches and content integrity. No external calls are made.

## Rule coverage

- promotional-language
- vague-attribution-and-exaggerated-consensus
- formulaic-challenges-and-future-prospects
- inflating-one-point-into-the-whole-answer
- canned-verification-invitations
- formulaic-declarations-of-personal-trust
- routine-anecdotes-packaged-as-life-lessons
- stock-bodily-reactions-and-suspended-time
- generic-foreshadowing-and-unnamed-menace
- unnecessary-narration-of-the-document
- catch-all-audiences-and-stock-explanatory-analogies
- staged-revelations
- announcing-honesty-or-demanding-emphasis
- manufactured-intimacy-and-assumed-agreement
- therapeutic-reassurance-without-a-need
- repeated-throat-clearing-and-certainty-phrases
- generic-scene-setting-openings
- inflated-significance-and-legacy
- engagement-bait-and-vague-relatability
- stock-developer-product-promises
- unsupported-superlatives
- predictably-uplifting-endings
- stock-helpfulness-claims
- stock-transitions-and-linking-phrases
- obituary-and-replacement-slogans
- hedge-followed-by-automatic-affirmation
- promises-without-tradeoffs
- not-just-x-but-also-y
- scare-quotes-after-so-called
- colons-before-introductory-phrases
- self-answered-rhetorical-questions
- its-not-x-its-y
- information-poor-generalities
- decorative-metaphor-and-adjective-overload
- reflexive-balance-or-missing-point-of-view
- forced-groups-of-three
- repeated-qualification-and-reassurance
- sentences-too-long-for-their-content
- repeated-sentence-templates
- repetitive-section-summaries
- repeated-words-and-restated-conclusions
- negative-chains-before-a-reveal
- dramatic-fragments-and-slogan-endings
- formulaic-em-dash-overuse
- mechanical-boldface
