# AI Writing Patterns

A reference and planned website for browsing writing patterns, examples and editing guidance. Intended for client presentations and students.

## Content

- [Master Markdown](content/ai-writing-signs-and-rules.md): the content source for the future website, converted from the current Word document. Contains 138 entries, including contextual observations and ineffective indicators.
- [Word reference](docs/references/AI-Writing-Signs-and-Rules.docx): the document used for the conversion.
- [Source register](docs/references/AI-Writing-Source-Register.xlsx): 21 sources and 253 source-item mappings.
- [Content conventions](docs/content-conventions.md): structure, identifiers and conversion procedure.
- [Screen designs](docs/design/screen-review.md): the proposed category, pattern and example screens.

Edit the master Markdown for future content work. The Word file is a reference snapshot; it does not automatically receive Markdown changes.

## Project status

The content and screen designs are prepared. Website implementation and the Windows launcher await design/content approval. No site framework, dependencies or deployment service have been selected.

The intended interface is a minimal category browser with individual pattern pages and examples. Use navy and white, clear navigation and no source-notes sidebar. Retain qualifications and historical context; do not present this catalog as an authorship scoring system.

## Hosting

Keep the eventual site capable of producing static HTML, CSS and JavaScript. That will allow deployment to either GitHub Pages or Vercel.

- For GitHub Pages, account for a project path such as `/repository-name/`, including links and assets. Add a deployment workflow once the build command and output directory are known.
- For Vercel, connect the GitHub repository and configure the selected framework or static output. No Vercel-specific code is needed at this stage.

Prefer static routes that can be opened directly on either host. Avoid server-only dependencies unless a later requirement needs them. The requested Windows launcher can serve the same static build locally.

## Local repository

The default branch is `main`. Local research, earlier exports, temporary files, dependencies and credentials are excluded through `.gitignore`. Only the curated content, reference documents, current screen designs and project utilities belong in the repository.

After creating an empty repository on GitHub, connect and push it:

```sh
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

No remote is configured and no deployment has been published by this setup.

## Content provenance

See [NOTICE.md](NOTICE.md) and the source and attribution sections in the master Markdown. Preserve third-party source attribution when publishing. Source observations, editorial guidance and illustrative examples are distinguished in the content.
