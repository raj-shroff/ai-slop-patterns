# AI Slop Signatures: editorial review and release checks

Three editorial passes covered all 143 retained catalogue entries, their 59 additional examples, all 31 collections, all vocabulary rows, 17 measurement summaries and 24 source labels. Two reviewers divided the catalogue, exchanged ranges for the second pass, and read the revised material again for the third. The main editor reviewed the navigation, reading layouts and checker interface. Existing public entry URLs were preserved.

## Round 1: make the example demonstrate the point

The first pass found descriptions that named a problem without explaining it, examples that required unstated context, and research vocabulary presented as though every word were suspect. Eighty entry revisions and 126 library replacements supplied concrete examples and clearer explanations. No frequency was invented for unmeasured words.

Lesson carried forward: a reader should be able to establish the stated problem from the example itself. A list of ordinary words needs an explanation of what the list measures.

## Round 2: check the variants, not just the headline example

The second pass found innocent sentences left among additional examples, explanations that confused a reported event with an actual event, and a human-associated word list reusing exaggerated examples. Twenty-four entry revisions and 17 library replacements corrected those problems. All 31 human-associated terms now have ordinary sentence examples. A contradictory policy example's internal context note was corrected too.

Lesson carried forward: read every example and its explanation together. Give enough context to show a tone mismatch, missing evidence or contradiction; do not infer it from the phrase alone.

## Round 3: make the displayed page agree with the copy

The final pass made ten entry revisions and one collection-description change. It corrected an ISBN explanation, removed titles that inferred a writer's intention, and made a message's audience explicit. It also found rendering mismatches: headings, bullets, horizontal rules and tables now display in their intended form. Code examples remain literal. The checker separates ordinary-writing cautions from patterns requiring human review and keeps development reports out of its help text.

Three unhelpful tokens were removed from the public vocabulary inventory and preserved in the source appendix. The six research lists now contain 2,221 rows, including overlap between lists.

Final lesson: title, example, explanation and presentation must describe the same observable thing. An automatic match can identify wording, but it cannot supply missing context or decide whether that wording is justified.

## New content and checker

The unnecessary-hyphens entry uses original sentences based on the user's examples. The supplied Medium article is recorded as commentary. It does not establish a measured prevalence or the proposed tokenization explanation. The entry distinguishes ordinary noun phrases and closed compounds from legitimate modifiers such as “a five-year plan.”

The new browser checker uses independently authored JavaScript. No code, rule files, statistical word lists or scoring formulas were imported from the cited checker repository. It has observable checks for facets of 93 entries; 39 remain manual and 11 explain ordinary writing that never becomes a positive finding. Its results describe what matched, not who wrote the passage.

The input accepts 1–10,000 words and at most 80,000 UTF-16 character units. The dropdown below the input explains both limits, word counting, code and quotation handling, short-passage thresholds, result caps and semantic limitations. It runs without a model, account, key, server-side analysis or text storage.

## Verification

- The full test command passed 72 test groups: 37 content/search, four library, six editorial, 17 checker and eight checker-interface groups.
- Checker fixtures include 286 original passages: a test passage and a control for every catalogue entry. Passing these fixtures is not a measure of real-world authorship accuracy.
- All 723 displayed example passages and 2,554 individual collection terms were run through the engine. Expected omissions and observed results are recorded in [the coverage report](live-checker-coverage.md).
- The three historical failure passages now return concrete observations: baseball four findings, the hedging paragraph three, and the Facebook essay three. No topic-specific rules were added.
- Interface tests cover live checking, stale-worker results, Clear, input limits, composition input, escaped HTML, temporary draft memory and versioned worker assets.
- Browser checks verified actual worker results, highlighting, selection, links back to examples, ordinary compound modifiers, narrow-screen layout and rendered lists/dividers/tables.
- The Word master contains all 8,017 paragraph and table-cell text blocks in Markdown order, with 143 entry bookmarks, 24 source records and 59 additional examples. A Word-generated 198-page preview was checked for layout; no empty pages were found.
- The source register contains 24 sources and 256 extraction mappings. Existing cell values and hyperlinks were preserved, and the new records and dates were verified.

These changes are local. The existing GitHub repository and Pages address remain unchanged; publishing requires committing, pushing and running the repository's deployment workflow.
