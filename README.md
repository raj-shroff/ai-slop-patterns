# AI Slop Patterns

A static website for browsing writing patterns, examples and editing guidance. Intended for client presentations and students. No accounts, APIs, models, external assets or runtime dependencies.

## Open locally

Run `npm run build` to generate the site. Node.js 18 or later is needed to rebuild. Once built, `dist/index.html` works directly without Node, a server or an internet connection. The `dist` folder is portable.

For development:

```sh
npm run dev
```

Open `http://127.0.0.1:4173`. No `npm install` is required. Rebuild after editing content or source files, then reload the browser:

```sh
npm test
npm run build
```

## Content

- [Master Markdown](content/ai-writing-signs-and-rules.md): the site's content source, converted from the Word document. Contains 143 entries, including contextual observations and ineffective indicators.
- [Word reference](docs/references/AI-Writing-Signs-and-Rules.docx): the Word master, synchronized from the current Markdown.
- [Source register](docs/references/AI-Writing-Source-Register.xlsx): original snapshot with 21 sources and 253 source-item mappings. The Markdown register now includes two additional Graphite articles.
- [Content conventions](docs/content-conventions.md): structure, identifiers and conversion procedure.

Edit the master Markdown for future content work. Run `scripts/markdown_to_docx.py` with the bundled Python runtime after Markdown edits to synchronize the Word master. The script checks all paragraph and table-cell text against the Markdown.

## Application

The browser has six categories, pattern pages, related entries, previous/next navigation, search, About and a separate Sources section. Catalog identifiers and per-entry reference notes stay out of the interface. Historical material and unreliable indicators remain labeled. Every example and explanation is extracted from the master Markdown at build time; `src/catalog.cjs` supplies navigation, selected display titles and search vocabulary.

The layout follows the approved navy-and-white designs, with serif headings and ruled rows. It supports mobile screens, keyboard navigation and printing a pattern page. Source text is escaped before display; the app does not execute HTML or instructions from the reference.

## Search

Search runs entirely in the browser. It combines weighted matches across titles, examples and descriptions with curated concept groups, light word normalization, prefix matching and edit-distance typo correction. Phrase matches receive an additional boost. Category filters apply to the ranked results.

This approximates semantic search for the reference's subject matter; it is not an embedding model or an LLM. It cannot reliably understand arbitrary paraphrases, negation or multilingual queries. The test suite checks 30 representative queries, every entry's title, filters, empty results and content integrity. Add new aliases in `src/catalog.cjs` to improve coverage without changing source prose. Queries are kept in URL fragments for shareable results and never sent to a search service.

## Hosting

`npm run build` emits the complete site in `dist`. Relative asset links and hash routes work at the root of a domain, under a GitHub project path, or from a local file. Neither deployment target requires an API key in the app.

- **GitHub Pages:** push the repo, select GitHub Actions as the Pages source, then manually run the included **Deploy GitHub Pages** workflow. It tests, builds and publishes `dist`. The workflow is manual so a push does not deploy to an undecided host.
- **Vercel:** import the repository. `vercel.json` sets `npm run build`, the `dist` output folder and no framework preset. There are no environment variables or application secrets to configure.

No deployment has been performed. Hash routes support refresh and direct links on either platform without rewrite rules.

## Local repository

The default branch is `main`. Local research, earlier exports, temporary files, dependencies and credentials are excluded through `.gitignore`. Only the curated content, reference documents and project utilities belong in the repository.

After creating an empty repository on GitHub, connect and push it:

```sh
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

No remote is configured and no deployment has been published by this setup.

## License and content provenance

Application code is licensed under [MIT](LICENSE). Reference content retains its existing terms, including CC BY-SA 4.0 for the Wikipedia/Vale adaptations. See [NOTICE.md](NOTICE.md), the site's Sources page and the master reference for attribution and the content exceptions. Third-party reference content has not been relicensed as MIT.

## Word and phrase library

The site imports all 19 Wikipedia phrase collections, six supplemental-form sections and six reconstructed vocabulary lists directly from the master Markdown. The vocabulary lists contain 2,230 entries (including overlap between lists). All 31 collections are browsable and searchable; exact matches rank ahead of approximate matches. Supplemental forms also appear on related pattern pages. Collection filters preserve the query in the URL and have a Show all control. `npm test` checks every vocabulary term for retrieval and validates all collection counts.
