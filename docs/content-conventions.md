# Content conventions

## Source of truth

`content/ai-writing-signs-and-rules.md` is the editable source for the website. It originally came from `docs/references/AI-Writing-Signs-and-Rules.docx`; the Word master is now regenerated from the Markdown.

The Word synchronization preserves paragraph order, heading levels, list items, emphasis, code paragraphs and tables. It verifies all paragraph and table-cell text against the Markdown.

## Structure

The file contains the initial catalog and Vale rule appendix, followed by the expanded catalog, merged observations, word inventories and source concordance. Keep this provenance structure while preparing the site. Source records and technical appendices can be presented separately from the pattern browser.

Pattern headings retain IDs `P001` through `P143`, with `P018` retired. Each has a stable HTML anchor, such as `<a id="p012"></a>`, so links can use `ai-writing-signs-and-rules.md#p012` independently of title changes. Preserve IDs when editing titles or merging future additions. Never treat an ID as an array position. Preserve existing public routes in `src/entry-slugs.json` when renaming a pattern. Do not turn contextual or ineffective indicators into positive detection rules.

The conversion adds no executable source instructions. Existing rule examples remain fenced reference text. If the future Markdown renderer accepts raw HTML, restrict it to the intentional anchors or sanitize the rendered output.

## Rebuilding from Word

The converter uses only Python's standard library. From the repository root:

```sh
python scripts/docx_to_markdown.py docs/references/AI-Writing-Signs-and-Rules.docx content/ai-writing-signs-and-rules.md
```

This overwrites the Markdown output. Use it only if Word is intentionally being promoted to the source of truth again; otherwise edit Markdown directly. The original converter checks paragraph text preservation and requires the original 138 unique catalog anchors. Do not use it to overwrite the expanded Markdown.

## Website build

`npm run build` extracts the 142 anchored entries and 23 source records into `dist/data.js`. It fails on missing fields, incorrect counts or duplicate URL slugs. The source-item concordance remains in the master reference for traceability. Other headings and rule fixtures do not become pattern pages. The app escapes source text and supports only bold emphasis and line breaks in examples.

Use `src/catalog.cjs` to adjust category assignments, display titles and search aliases. Keep explanations, examples, guidance and qualifications in the master Markdown. IDs are only internal mapping keys; visitors see readable titles and URL slugs. Run `npm test` after content changes, then rebuild. When adding or removing entries, update the explicit build and test coverage checks intentionally.

Every pattern has a `What to notice` field that explains its actual example in plain language. This appears under its own heading, separate from `Example text`. Optional `Example format: code` displays copied formatting or reference codes as literal text. Entries about ordinary human writing instead use `Example of ordinary writing` and `Why this is not a tell`.

Editing guidance, earlier example context and limitations remain in the master document, but are not included in the site's pattern data or search index. Do not reintroduce them as unlabeled notes. Source names such as Wikipedia belong only on Sources. Public collection terms and examples must follow this rule too.

## October 2026 additions

The supplied Graphite review contributes 47 labeled examples across 15 entries, including five new entries. The reconciliation table records every merge. `Additional examples` blocks use one `- **Label:** Example` per line. These appear on pattern pages and are indexed by search. The Word master is synchronized from the Markdown using `scripts/markdown_to_docx.py`. The script preserves the existing Word styles, creates pattern bookmarks and the reconciliation table, and checks the text and order of every paragraph and table cell.

## Library extraction

`src/library.cjs` imports phrase collections, vocabulary inventories and earlier merged-additions sections. Keep their level-three headings stable because they define collection routes. Optional `Title:` and `Description:` lines provide readable display text. Use tables with `Word or phrase` and `Example sentence` columns, one item per row. Examples must demonstrate the expression in use; put explanatory notes outside the example. Leave a cell empty when no useful example is supplied. Vocabulary counts are checked at build time. Library content stays in the Markdown and Word master; no duplicate prose file needs editing.

## Measured usage

The master Markdown's `Measured usage` section supplies research through `src/evidence.cjs`. Each finding names its source, target entries or collections, expression, measurement and model or corpus. Include the comparison group and methodological limits in the scope paragraph. Match exact word forms: a rate measured for `delves` does not establish a rate for `delve`. Do not turn historical word-frequency increases or changes between two models into AI-versus-human ratios. Keep all figures out of pages where the research does not support them.

The `Reader summary` table column supplies a complete, plain-language sentence for the site. It must preserve the measured model, rate and comparison. The page shows that sentence and a study link; detailed scope paragraphs stay in this reference. On collection pages, the words and examples come before research findings.
