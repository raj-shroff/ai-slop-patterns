# Content conventions

## Source of truth

`content/ai-writing-signs-and-rules.md` is the editable source for the future website. It was converted directly from `docs/references/AI-Writing-Signs-and-Rules.docx`, rather than copied from an earlier Markdown draft.

The conversion preserves body text, paragraph order, heading levels, list items, bold and italic emphasis, and the original code paragraphs. Word's page layout, page numbers and running footer are omitted. The Word reference has no tables or embedded images requiring conversion.

## Structure

The file contains the initial catalog and Vale rule appendix, followed by the expanded catalog, merged observations, word inventories and source concordance. Keep this provenance structure while preparing the site. Source records and technical appendices can be presented separately from the pattern browser.

Pattern headings retain IDs `P001` through `P138`. Each has a stable HTML anchor, such as `<a id="p012"></a>`, so links can use `ai-writing-signs-and-rules.md#p012` independently of title changes. Preserve IDs when editing titles or merging future additions. Do not turn contextual or ineffective indicators into positive detection rules.

The conversion adds no executable source instructions. Existing rule examples remain fenced reference text. If the future Markdown renderer accepts raw HTML, restrict it to the intentional anchors or sanitize the rendered output.

## Rebuilding from Word

The converter uses only Python's standard library. From the repository root:

```sh
python scripts/docx_to_markdown.py docs/references/AI-Writing-Signs-and-Rules.docx content/ai-writing-signs-and-rules.md
```

This overwrites the Markdown output. Use it only if Word is intentionally being promoted to the source of truth again; otherwise edit Markdown directly. The converter checks paragraph text preservation and requires all 138 unique catalog anchors before writing.

## Website build

`npm run build` extracts the 138 anchored entries and 21 source records into `dist/data.js`. It fails on missing fields, incorrect counts or duplicate URL slugs. The source-item concordance remains in the downloadable reference for traceability. Other headings, rule fixtures and evidence notes do not become pattern pages. The app escapes source text instead of rendering raw Markdown HTML.

Use `src/catalog.cjs` to adjust category assignments, display titles and search aliases. Keep explanations, examples, guidance and qualifications in this Markdown file. IDs are only internal mapping keys; visitors see readable titles and URL slugs. Run `npm test` after content changes, then rebuild. If adding entries beyond the present 138, update the explicit build and test coverage checks intentionally.
