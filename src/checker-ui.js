/* Original browser interface for AI Slop Signatures. No text is sent or stored. */
(function () {
  'use strict';
  const workerURL = document.currentScript?.dataset.worker;
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const entryNumber = value => Number(String(value).replace(/^P/, ''));
  const session = {text: ''};
  const demo = 'The team-members reviewed the project-timeline before preparing the news-letter. This is not merely a plan; it is a transformative journey.\n\nIt is important to note that the launch marks a pivotal moment. It is important to note that the project stands as a testament to our unwavering commitment.\n\nIn conclusion, the launch marks a pivotal moment. Let me know if you would like me to expand on any of these points.';
  let dispose = () => {};

  function page() {
    return `<section class="checker-page">
      <section class="intro"><h1>Check for AI Slop</h1><p>This feature is in Beta and will get better. Do not rely on it to detect AI writing or human writing.</p></section>
      <div class="checker-input-heading"><label for="checker-text">Your text</label><button type="button" id="checker-example" class="text-button">Try an example</button></div>
      <textarea id="checker-text" rows="8" spellcheck="false" aria-describedby="checker-privacy checker-count" placeholder="Paste or type here. Results update after a short pause.">${escape(session.text)}</textarea>
      <div class="checker-controls"><span id="checker-count">0 words · 0 / 80,000 characters</span><div><button id="checker-run" type="button">Check now</button><button id="checker-clear" type="button" class="secondary">Clear</button></div></div>
      <p id="checker-privacy" class="checker-privacy">Your text stays in your browser. No account or API key needed.</p>
      <p id="checker-status" class="checker-status" role="status" aria-live="polite">Paste a passage to begin.</p>
      <div id="checker-results"></div>
    </section>`;
  }

  function highlighted(text, findings) {
    const points = new Map();
    for (const f of findings.flatMap(f => f.occurrences?.length ? f.occurrences : [f])) {
      if (!Number.isInteger(f.start) || !Number.isInteger(f.end) || f.start < 0 || f.end <= f.start || f.end > text.length) continue;
      points.set(f.start, (points.get(f.start) || 0) + 1);
      points.set(f.end, (points.get(f.end) || 0) - 1);
    }
    let count = 0, previous = 0, html = '';
    for (const [offset, change] of [...points].sort((a, b) => a[0] - b[0])) {
      const part = escape(text.slice(previous, offset));
      html += count > 0 ? `<mark>${part}</mark>` : part;
      count += change; previous = offset;
    }
    return html + escape(text.slice(previous));
  }

  function findingExcerpt(finding) {
    const parts = finding.occurrences?.length > 1 ? finding.occurrences.slice(0, 3).map(o => o.excerpt) : [finding.excerpt];
    const text = parts.filter(Boolean).map(p => p.length > 160 ? p.slice(0, 160) + '…' : p).join(' … ');
    return text + (finding.occurrences?.length > 3 ? ' …' : '');
  }

  function mount(entries) {
    dispose();
    const input = document.getElementById('checker-text');
    const status = document.getElementById('checker-status');
    const results = document.getElementById('checker-results');
    const count = document.getElementById('checker-count');
    const byID = new Map(entries.map(e => [e.id, e]));
    let revision = 0, timer, worker, timeout, alive = true, composing = false;

    function terminate() { worker?.terminate(); worker = null; clearTimeout(timeout); }
    function clearResult(message) { results.replaceChildren(); status.textContent = message; results.removeAttribute('aria-busy'); }
    function counts(words) {
      count.textContent = `${Number.isFinite(words) ? words.toLocaleString() : '—'} words · ${input.value.length.toLocaleString()} / 80,000 characters`;
    }
    function show(result, text) {
      counts(result.wordCount);
      if (result.status === 'empty') { clearResult('Paste at least one word to begin.'); return; }
      if (result.status === 'too-long') { clearResult('This passage is too long. Use no more than 10,000 words and 80,000 characters. Nothing has been checked or cut off.'); return; }
      if (result.status !== 'ok') { clearResult('The check could not finish. Your text is still here; try Check now.'); return; }
      const findings = result.findings.filter(f => byID.has(entryNumber(f.entryId)));
      const groups = new Map();
      for (const f of findings) { const id = entryNumber(f.entryId); if (!groups.has(id)) groups.set(id, []); groups.get(id).push(f); }
      status.textContent = findings.length ? `${findings.length} ${findings.length === 1 ? 'match' : 'matches'}` : 'No matches found by these checks. This does not tell you who wrote the text.';
      if (!findings.length && result.proseWordCount === 0) status.textContent = 'No prose to check. Code and web addresses are skipped.';
      if (result.findingLimitReached) status.textContent += ' A result limit was reached. Additional matches may be present; check a shorter section to see them.';
      results.removeAttribute('aria-busy');
      results.innerHTML = `${findings.length ? `<section class="checked-passage" aria-label="Highlighted text"><div class="highlighted-text" tabindex="0" aria-label="Your passage with matched text highlighted">${highlighted(text, findings)}</div></section><section class="checker-findings"><h2>What to review</h2>${[...groups].map(([id, matches]) => { const entry = byID.get(id); const titles = [...new Set(matches.map(f => f.title || entry.title))]; const title = titles.length === 1 ? titles[0] : entry.title; return `<article class="checker-finding"><div class="finding-heading"><h3>${escape(title)}</h3><a href="#/pattern/${escape(entry.slug)}">See the example</a></div>${matches.slice(0, 8).map(f => `<div class="finding-detail"><p class="finding-kind">Matched text</p>${f.excerpt ? `<blockquote>${escape(findingExcerpt(f))}</blockquote>` : ''}<p>${escape(f.explanation)}</p>${Number.isInteger(f.start) && f.end > f.start ? `<button type="button" class="text-button locate-finding" data-start="${f.start}" data-end="${f.end}">Show in my text</button>` : ''}</div>`).join('')}${matches.length > 8 ? `<p class="checker-note">${matches.length - 8} more matches for this pattern are highlighted above.</p>` : ''}</article>`; }).join('')}</section>` : ''}`;
      results.querySelectorAll('.locate-finding').forEach(button => button.addEventListener('click', () => {
        input.focus(); input.setSelectionRange(Number(button.dataset.start), Number(button.dataset.end)); input.scrollIntoView({block: 'center', behavior: 'instant'});
      }));
    }
    function fallback(text, job) {
      if (!alive || job !== revision) return;
      try { const result = window.SignatureChecker.analyze(text); if (alive && job === revision) show(result, text); }
      catch { clearResult('The check could not finish. Your text is still here; try a shorter passage.'); }
    }
    function run() {
      clearTimeout(timer); terminate();
      const text = input.value, job = ++revision;
      session.text = text;
      if (text.length > 80000) { counts(); clearResult('This passage exceeds 80,000 characters. Shorten it and check again. Nothing has been checked or cut off.'); return; }
      if (!text.trim()) { counts(0); clearResult('Paste a passage to begin.'); return; }
      status.textContent = 'Checking…'; results.setAttribute('aria-busy', 'true');
      if (workerURL && location.protocol !== 'file:' && typeof Worker !== 'undefined') {
        try {
          worker = new Worker(new URL(workerURL, document.baseURI));
          worker.onmessage = event => {
            if (!alive || job !== revision || event.data.revision !== job) return;
            terminate();
            if (event.data.result) show(event.data.result, text);
            else clearResult('The check could not finish. Your text is still here; try a shorter passage.');
          };
          worker.onerror = () => { if (!alive || job !== revision) return; terminate(); fallback(text, job); };
          worker.postMessage({revision: job, text});
          timeout = setTimeout(() => { if (job !== revision) return; terminate(); clearResult('This check took too long. Try a shorter passage. Your text has not changed.'); }, 10000);
          return;
        } catch { terminate(); }
      }
      fallback(text, job);
    }
    function changed() {
      ++revision; clearTimeout(timer); terminate(); session.text = input.value;
      const words = input.value.length <= 80000 ? window.SignatureChecker.countWords(input.value) : undefined;
      counts(words);
      if (input.value.length > 80000 || words > 10000) { clearResult('This passage is too long. Use no more than 10,000 words and 80,000 characters. Nothing has been checked or cut off.'); return; }
      clearResult(input.value.trim() ? 'Waiting for you to finish typing…' : 'Paste a passage to begin.');
      if (!composing && input.value.trim()) timer = setTimeout(run, 450);
    }
    input.addEventListener('input', changed);
    input.addEventListener('compositionstart', () => { composing = true; clearTimeout(timer); });
    input.addEventListener('compositionend', () => { composing = false; changed(); });
    document.getElementById('checker-run').addEventListener('click', run);
    document.getElementById('checker-clear').addEventListener('click', () => { input.value = ''; changed(); input.focus(); });
    document.getElementById('checker-example').addEventListener('click', () => { if (input.value.trim()) return; input.value = demo; changed(); run(); });
    const sample = document.getElementById('checker-example');
    input.addEventListener('input', () => { sample.disabled = Boolean(input.value.trim()); });
    document.getElementById('checker-clear').addEventListener('click', () => { sample.disabled = false; });
    sample.addEventListener('click', () => { sample.disabled = Boolean(input.value.trim()); });
    sample.disabled = Boolean(input.value.trim());
    dispose = () => { alive = false; ++revision; clearTimeout(timer); terminate(); };
    if (input.value) changed();
  }
  window.SignatureCheckerUI = {page, mount, unmount: () => dispose()};
})();
