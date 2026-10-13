const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const engine = require('../src/checker-engine.js');
const rules = require('../src/checker-rules.js');
const data = require('../scripts/build.cjs');

// A small event harness exercises asynchronous page state. Real rendering and
// selection are verified separately in the browser.
function page({worker=true}={}) {
  const jobs=[], timers=new Map(); let next=0;
  const nodes=new Map();
  for(const id of ['text','status','results','count','run','clear','example']) {
    nodes.set('checker-'+id, {value:'',textContent:'',innerHTML:'',disabled:false,attrs:{},listeners:{},
      addEventListener(name,fn){(this.listeners[name] ||= []).push(fn);},
      fire(name){for(const fn of this.listeners[name]||[])fn();},
      replaceChildren(){this.innerHTML='';},removeAttribute(name){delete this.attrs[name];},
      setAttribute(name,value){this.attrs[name]=value;},querySelectorAll(){return[];},focus(){}});
  }
  const window={SignatureChecker:engine,SignatureCheckerRules:rules};
  class Worker {
    constructor(){jobs.push(this);}
    postMessage(message){this.message=message;}
    terminate(){this.terminated=true;}
    complete(){this.onmessage({data:{revision:this.message.revision,result:engine.analyze(this.message.text)}});}
  }
  const context={window,document:{currentScript:{dataset:{worker:'./checker-worker.js'}},baseURI:'http://localhost/',getElementById:id=>nodes.get(id)},
    location:{protocol:'http:'},URL,Worker:worker?Worker:undefined,
    setTimeout(fn,delay){const id=++next;timers.set(id,{fn,delay});return id;},clearTimeout(id){timers.delete(id);}};
  vm.runInNewContext(fs.readFileSync('src/checker-ui.js','utf8'),context);
  window.SignatureCheckerUI.mount(data.entries);
  const get=id=>nodes.get('checker-'+id);
  return {get,jobs,window,
    fill(text){get('text').value=text;get('text').fire('input');},
    click(id){get(id).fire('click');},
    tick(delay){for(const [id,item] of [...timers])if(item.delay===delay){timers.delete(id);item.fn();}}};
}

test('live typing waits briefly, then shows results without a button click',()=>{
  const p=page();p.fill('Our news-letter arrives on Friday.');
  assert.match(p.get('status').textContent,/Waiting/);assert.equal(p.jobs.length,0);
  p.tick(450);assert.equal(p.jobs.length,1);p.jobs[0].complete();
  assert.equal(p.get('status').textContent,'1 match');
  assert.match(p.get('results').innerHTML,/Unnecessary hyphens/);
  assert.match(p.get('results').innerHTML,/<mark>news-letter<\/mark>/);
});
test('late results and errors cannot replace a newer draft or cancel its worker',()=>{
  const p=page();p.fill('Our news-letter arrives.');p.tick(450);const old=p.jobs[0];
  p.fill('The train left at six.');p.tick(450);const fresh=p.jobs[1];
  old.complete();old.onerror();assert.equal(fresh.terminated,undefined);
  assert.doesNotMatch(p.get('results').innerHTML,/news-letter/);
  fresh.complete();assert.match(p.get('status').textContent,/No matches/);
});
test('Clear cancels pending work and restores the example button',()=>{
  const p=page();p.fill('The news-letter is ready.');p.tick(450);const old=p.jobs[0];
  p.click('clear');old.complete();p.tick(450);
  assert.equal(p.get('text').value,'');assert.equal(p.get('results').innerHTML,'');
  assert.equal(p.get('example').disabled,false);assert.match(p.get('status').textContent,/Paste/);
});
test('a no-match result contains no catalogue checklist, unrelated entries, or old findings',()=>{
  for(const worker of [true,false]){
    const p=page({worker});
    p.fill('Our news-letter arrives on Friday.');p.tick(450);if(worker)p.jobs.at(-1).complete();
    assert.match(p.get('results').innerHTML,/Unnecessary hyphens/);
    p.fill('The train left at six.');p.tick(450);if(worker)p.jobs.at(-1).complete();
    assert.match(p.get('status').textContent,/No matches/);
    assert.equal(p.get('results').innerHTML,'');
  }
});
test('the reported passage displays only its actual findings and source spans',()=>{
  const text=require('./fixtures/live-checker-cases.json').regressions.find(r=>r.key==='copied-food-answer').text;
  const p=page();p.fill(text);p.tick(450);p.jobs.at(-1).complete();
  assert.equal(p.get('status').textContent,'3 matches');
  const html=p.get('results').innerHTML;
  assert.equal((html.match(/class="checker-finding"/g)||[]).length,3);
  assert.match(html,/<mark>ChatGPT said:<\/mark>/);
  assert.match(html,/<mark>— not pork or a mixture of mystery meats<\/mark>/);
  assert.match(html,/<mark>🌭<\/mark>/);
  assert.match(html,/Emoji appended to prose/);
  assert.doesNotMatch(html,/Checks and coverage|Entries to assess|checker-coverage|Awards sections|formal document/);
});
test('both input limits reject text without truncation or a clean result',()=>{
  for(const text of ['word '.repeat(10001),'a'.repeat(80001)]){
    const p=page();p.fill(text);p.tick(450);assert.equal(p.jobs.length,0);
    assert.equal(p.get('text').value,text);assert.match(p.get('status').textContent,/too long/);
    p.click('run');if(p.jobs.length)p.jobs.at(-1).complete();
    assert.match(p.get('status').textContent,/too long|exceeds/);
    assert.equal(p.get('results').innerHTML,'');
  }
});
test('IME input waits for composition to end; unmount discards pending results',()=>{
  const p=page();p.get('text').fire('compositionstart');p.fill('A news-letter.');p.tick(450);
  assert.equal(p.jobs.length,0);p.get('text').fire('compositionend');p.tick(450);
  assert.equal(p.jobs.length,1);p.window.SignatureCheckerUI.unmount();p.jobs[0].complete();
  assert.equal(p.get('results').innerHTML,'');
});
test('fallback keeps pasted HTML inert and labels code-only passages accurately',()=>{
  const p=page({worker:false});p.fill('<img src=x onerror=alert(1)> Our news-letter arrives.');p.click('run');
  assert.doesNotMatch(p.get('results').innerHTML,/<img/);
  assert.match(p.get('results').innerHTML,/&lt;img/);
  p.fill('```js\nconst newsletter = true;\n```');p.click('run');
  assert.match(p.get('status').textContent,/No prose to check/);
});
test('navigating away preserves the draft only in tab memory',()=>{
  const p=page();p.fill('A draft news-letter.');p.window.SignatureCheckerUI.unmount();
  assert.match(p.window.SignatureCheckerUI.page(),/A draft news-letter/);
  const fresh=page();assert.doesNotMatch(fresh.window.SignatureCheckerUI.page(),/A draft news-letter/);
});
test('deployed worker and its imports all use existing versioned local assets',()=>{
  const html=fs.readFileSync('dist/index.html','utf8');
  const worker=html.match(/data-worker="\.\/([^\"]+)"/)[1];
  assert.match(worker,/^checker-worker\.[a-f0-9]{12}\.js$/);
  const code=fs.readFileSync('dist/'+worker,'utf8');
  const imports=[...code.matchAll(/checker-(?:engine|rules|text|families)\.[a-f0-9]{12}\.js/g)];
  assert.equal(imports.length,4);for(const [name] of imports)assert.ok(fs.existsSync('dist/'+name));
  assert.doesNotMatch(html,/https?:\/\/.*<script/);
});
