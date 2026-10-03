# Passage checker architecture audit

3 October 2026

## Recommendation

Retire the current checker as a general comparison of writing against the reference. Preserve the reference site. A narrower, explicitly scoped style checker is feasible without models or services, but it cannot provide the contextual reading demonstrated in chat. Do not continue adding passage-specific patches under the existing broad promise.

No checker behavior was changed during this audit.

## Reproduced findings

The user's full baseball passage returns zero direct matches and zero suggestions in the current engine. This is reproducible without the browser; it is not explained by caching or UI rendering.

Nine diagnostic inputs and full outputs are saved in working/checker-audit/probes.json. These are engineering probes, not independent accuracy measurements.

| Probe | Actual outcome |
|---|---|
| Full baseball passage | No results |
| Short not-just/but construction | Direct match |
| Same construction with a longer second clause | No result |
| Not-just/but construction about a building | Direct match |
| Concrete shipment correction about bolts and washers | Direct match |
| Lasting-legacy wording absent from the phrase rules | No result |
| Council/desk paraphrase using profound commitment | Direct significance match, no superficial-analysis suggestion |
| Three sentences restating gradual development with different words | No result |
| Manager/editor/client roles swapped across two sentences | Possible passage repetition suggestion |

For the baseball contrast, the regex consumes up to 100 characters after `but`. It stops at the first letter of `something`, leaving `o` as the next character. The boundary guard then rejects the entire candidate. This is a genuine implementation bug, distinct from semantic limitations.

## Reference coverage

- 143 entries have metadata.
- 45 have direct rules; these offer partial wording coverage.
- 69 enable example similarity; these overlap with the direct-rule entries.
- 69 have neither direct rules nor example similarity. Some are intentionally historical, contextual, or unreliable indicators, so they should not all become automatic checks.
- Of the 45 direct-rule entries, 27 match their own primary illustrative example directly. Including similarity suggestions raises that to 42. This is a diagnostic only: some entries require repetition that a single example does not contain.
- 48 of the 69 similarity-enabled entries have just one example.
- All 45 direct-rule entries carry the same two generic counterexamples. These do not constitute pattern-specific negative training or validation.

Entry-level diagnostic results are in working/checker-audit/entry-coverage.json.

## Why the design fails to meet the intended scope

The Markdown is a data source, not a reasoning engine. The compiler extracts configured expressions and illustrative examples. The comparison algorithm does not interpret the entries' descriptions, editing guidance, or limits. Moving regex settings into Markdown improved maintainability, not understanding.

The example index uses stemmed word sets and weighted Jaccard overlap. It removes stopwords (including negation), discards word order and multiplicity, and requires shared content words before comparison. A passage can demonstrate the same rhetorical pattern on a different topic and share almost no indexed words. Conversely, two statements with different agent/action relationships can have identical word sets.

Direct checks depend on narrow vocabularies, fixed thresholds and hand-built constructions. The vague-writing rule, for example, requires three different phrases from a short inventory within 500 characters. It does not evaluate information density. Superficial analysis has no direct rule. Repetition checks include exact sentence equality, cyclic word rotations and lexical overlap; these do not establish repeated propositions.

The Facebook recap rule specifically expects ordinal paragraph openings followed by a topic and a help/helps explain frame, then a conclusion with a configured opening and three repeated topic strings. This explains why it works on the reported essay but is not a general conclusion-comparison system.

Segmentation also differs between layers: some checks group single-newline text into paragraphs while comparison treats every nonempty line as a paragraph. Punctuation-based sentence splitting mishandles abbreviations and quotation boundaries. Several regex limits are character counts rather than grammatical boundaries.

## Test limitations

The prior 157 passing tests are regression and content-integrity checks, not 157 independent assessments of detection quality. Expected labels were selected during implementation; the reported passages were added after fixes. Most legacy passage assertions and the benchmark evaluate direct matches only, excluding the suggestion layer. The new suggestion tests exercise a few selected behaviors and the reported essay.

Short literal controls do not measure false positives on legitimate essays, historical overviews, or technical explanations. Synthetic passages written to exhibit known phrases do not measure recall on new rhetorical variants. Test passage reuse in the example index further prevents interpreting these results as held-out validation.

## Feasible replacement scope

A conventional browser style checker could robustly identify observable constructions: contrast connectors, repeated openings, repeated exact phrases, configured stock phrases and punctuation patterns. It needs a shared sentence/token/paragraph representation, reusable token-level construction matchers, explicit per-entry capability status, and evidence labels describing the observable form.

Meaning-dependent entries should remain manual review prompts. In particular, unsupported significance, superficial reasoning, missing evidence and redundant propositions cannot be established by the present word-overlap system. Generic embeddings could retrieve related examples but would not by themselves establish those judgments; adding a local model would also change the user's no-extra-integration constraint.

Before releasing a replacement, freeze its supported scope and evaluate unseen passages across topics and genres, with independent pattern annotations where possible. Include valid uses of the same constructions, paraphrases, sentence-length variants, quotes, abbreviations and formatting changes. Report precision and recall per supported pattern, counting both highlights and suggestions. Keep tuning cases separate from evaluation cases. No aggregate accuracy claim is currently justified.

For the original requirement—an automatic counterpart to contextual Markdown-based analysis in chat—the recommendation is to abandon the checker under the current constraints, while retaining the catalog, examples, categories and search.
