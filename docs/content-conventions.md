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

## Before site implementation

Use the canonical entries for navigation and examples. Retain the source-item concordance for traceability. Do not treat all headings as user-facing patterns: source sections, rules, fixtures and evidence notes also have headings. Hosting configuration should follow the selected framework and deployment target.
