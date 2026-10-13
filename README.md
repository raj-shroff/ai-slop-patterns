# AI Slop Signatures

An evolving repository of common AI writing patterns with examples, word lists, and a text checker. The text checker is in beta and should not be used as an AI detector. It is purely for educational purposes.

**[Visit the site](https://raj-shroff.github.io/ai-slop-patterns/)**

The checker looks for familiar wording, repetition, and sentence structures. It runs entirely in your browser with no uploads, accounts, or API keys. It flags patterns, but cannot determine whether a person or AI wrote something.

Maximum input: **10,000 words or 80,000 characters, whichever comes first.** See [checker coverage and limits](docs/live-checker-coverage.md) for details.

## Run locally

Requires Node.js 18 or later. No `npm install` needed.

```sh
npm run dev
```

Open [localhost:4173](http://127.0.0.1:4173). After editing files, run `npm run build` and refresh the page. The server does not rebuild automatically.

## Edit the site

| What to change | File |
| --- | --- |
| Patterns, examples, and word lists | [Master Markdown](content/ai-writing-signs-and-rules.md) |
| Page text and navigation | [app.js](src/app.js), [index.html](src/index.html) |
| Checker page text | [checker-ui.js](src/checker-ui.js) |
| Checker behavior | [checker-rules.js](src/checker-rules.js), [checker-families.js](src/checker-families.js), [checker-engine.js](src/checker-engine.js) |
| Appearance | [styles.css](src/styles.css) |

Edit source files, then rebuild. Files in `dist/` are generated and will be overwritten. For content formatting, see [content conventions](docs/content-conventions.md).

Run `npm test` to check the project, or `npm run test:checker` for checker tests only.

## License

Application code: [MIT](LICENSE). Reference content has separate attribution and license terms in [NOTICE.md](NOTICE.md).
