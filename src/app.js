(function(){
 'use strict';
 const data=window.PATTERNS,main=document.getElementById('main');
 const search=window.PatternSearch.createSearch(data.entries,data.concepts);
 const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const cat=s=>data.categories.find(c=>c.slug===s);
 const categoryLink=s=>'#/category/'+s;
 const queryLink=(q,c='all',type='all')=>'#/search?'+new URLSearchParams({q,...(c==='all'?{}:{category:c}),...(type==='all'?{}:{type})});
 const patternLink=(e,q='',c='all',type='all')=>'#/pattern/'+e.slug+(q?'?'+new URLSearchParams({q,category:c,type}):'');
 const crumb=(parts)=>'<nav class="crumbs" aria-label="Breadcrumb">'+parts.map(p=>'<span>'+(p.href?`<a href="${escape(p.href)}">${escape(p.title)}</a>`:escape(p.title))+'</span>').join('')+'</nav>';
 const homeCrumb={title:'Slop Categories',href:'#/'};
 const collectionLink=(c,q='',back='')=>'#/collection/'+c.slug+(q||back?'?'+new URLSearchParams({q,...(back?{back}:{})}):'');
 function form(query='',home=false,showHint=true){return `<form class="search-box" role="search"><label class="sr-only" for="pattern-query">Search writing patterns</label><input id="pattern-query" name="q" type="search" maxlength="300" placeholder="Describe a pattern or paste a phrase" value="${escape(query)}" autocomplete="off"${showHint?' aria-describedby="search-help"':''}><button type="submit">Search</button></form>${showHint?`<p id="search-help" class="search-hint">${home?'Try “says a lot but nothing” or “not X, it’s Y”.':'Search descriptions, examples, and related concepts. Search includes the full word and phrase library.'}</p>`:''}`;}
 function suggestions(){return '<div class="suggestions" aria-label="Search suggestions">'+['Not X, it’s Y','Therapy speak','Too many adjectives','Same sentence structure','Says a lot but nothing'].map(q=>`<a href="${escape(queryLink(q))}">${escape(q)}</a>`).join('')+'</div>';}
 const marked=(text,q)=>window.PatternSearch.segments(text,q).map(p=>p.match?'<mark>'+escape(p.text)+'</mark>':escape(p.text)).join('');
 function row(e,{q='',category='all',type='all',reason='',snippet=''}={}){return `<a class="pattern-row ${reason?'result':''}" href="${escape(patternLink(e,q,category,type))}"><span class="row-title">${reason?`<span class="result-meta">${escape(cat(e.category).title)}${e.kind==='Unreliable indicator'?' · Not an AI tell':''} · ${escape(reason)}</span>`:e.kind==='Unreliable indicator'?'<span class="result-meta">Not an AI tell</span>':''}${marked(e.title,q)}</span><span class="row-description">${snippet?marked(snippet,q):marked(e.description,q)}</span><span class="row-action" aria-hidden="true">View</span></a>`;}
 function home(){return `<div class="home-heading"><section class="intro"><h1>Slop Categories</h1></section><div class="home-search">${form('',true)}</div></div><p class="site-intro">This site is a compilation of many popular 'AI writing' tells. Also known as 'AI Slop.'</p><p class="library-intro"><a href="#/phrases">Browse AI's Favorite Words</a> with sentence examples, or <a href="#/checker">check a passage</a> for wording and repetition.</p><section class="category-list" aria-label="Pattern categories">${data.categories.map(c=>`<a class="category-row" href="${categoryLink(c.slug)}"><span class="row-title">${escape(c.title)}</span><span class="row-description">${escape(c.description)}</span><span class="row-action" aria-hidden="true">View</span></a>`).join('')}</section>`;}
 function categoryEntries(slug){const entries=data.entries.filter(e=>e.category===slug);if(slug!=='language')return entries;const order=['its-not-x-its-y','repeated-stock-vocabulary','avoiding-is-and-has','forced-groups-of-three'];return [...order.map(s=>entries.find(e=>e.slug===s)).filter(Boolean),...entries.filter(e=>!order.includes(e.slug))];}
 function categoryPage(c){const entries=categoryEntries(c.slug); return `${crumb([homeCrumb,{title:c.title}])}<section class="intro"><h1>${escape(c.title)}</h1><p>${escape(c.description)}.</p></section><div class="pattern-list">${entries.map(e=>row(e)).join('')}</div><a class="back-link" href="#/">All categories</a>`;}
 // Render only the formatting used by our examples; all content is escaped first.
 function specimen(text,q=''){
  return marked(text,q).replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g,'$1<em>$2</em>').replace(/\n/g,'<br>');
 }
 function research(studies=[]){
  if(!studies.length)return '';
  return `<section class="research" aria-label="Reported frequency"><h2>Reported frequency</h2><ul class="research-findings">${studies.flatMap(study=>study.rows.map(r=>`<li><p>${escape(r.summary)} <a href="${escape(study.source.url)}" target="_blank" rel="noopener noreferrer" aria-label="Read the study for ${escape(r.expression)}">Study</a></p></li>`)).join('')}</ul></section>`;
 }
 function wordList(items,q=''){
  return `<ul class="word-list">${items.map(item=>`<li><h3>${marked(item.term,q)}</h3>${item.example?`<p class="word-example"><span class="example-caption">In a sentence</span>${specimen(item.example,q)}</p>`:''}</li>`).join('')}</ul>`;
 }
 function sampleHTML(e){
  if(e.exampleFormat==='code')return `<pre class="code-example"><code>${escape(e.example)}</code></pre>`;
  if(e.exampleFormat==='table'){
   const rows=e.example.split('\n').filter(line=>line.trim()&&!/^\|[\s|:-]+\|$/.test(line)).map(line=>line.replace(/^\||\|$/g,'').split('|').map(s=>s.trim()));
   return `<table class="sample-table"><thead><tr>${rows[0].map(cell=>`<th scope="col">${escape(cell)}</th>`).join('')}</tr></thead><tbody>${rows.slice(1).map(row=>`<tr>${row.map(cell=>`<td>${escape(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  }
  if(e.exampleFormat==='formatted'){
   let list=false,html='';
   for(const line of e.example.split('\n')){
    if(/^[-*] /.test(line)){if(!list){html+='<ul>';list=true;}html+=`<li>${specimen(line.slice(2))}</li>`;continue;}
    if(list){html+='</ul>';list=false;}
    html+=/^#{1,6} /.test(line)?`<h3>${specimen(line.replace(/^#{1,6} /,''))}</h3>`:/^-{3,}$/.test(line)?'<hr>':line?`<p>${specimen(line)}</p>`:'';
   }
   return `<div class="formatted-example">${html}${list?'</ul>':''}</div>`;
  }
  return `<blockquote>${specimen(e.example)}</blockquote>`;
 }

 function detail(e,params){
  const c=cat(e.category),siblings=categoryEntries(e.category),i=siblings.indexOf(e);
  const related=data.entries.filter(p=>p!==e&&e.concepts.some(x=>p.concepts.includes(x))).slice(0,3);
  const q=params.get('q')||'',scope=params.get('category')||'all',counter=e.kind==='Unreliable indicator';
  const sample=sampleHTML(e);
  return `<article class="detail">
    ${crumb([homeCrumb,{title:c.title,href:categoryLink(c.slug)},{title:e.title}])}
    ${q?`<div class="search-again"><a href="${escape(queryLink(q,scope,params.get('type')||'all'))}">Back to search results</a></div>`:''}
    <section class="intro">${counter?'<span class="badge">Not an AI tell</span>':''}<h1>${escape(e.title)}</h1><p>${escape(e.description)}</p></section>
    <section class="example" aria-labelledby="example-label">
      <h2 class="reading-label" id="example-label">${counter?'Example of ordinary writing':'Example text'}</h2>
      ${sample}
      <div class="example-reading"><h2 class="reading-label">${counter?'Why this is not a tell':'What to notice'}</h2><p>${escape(e.notice)}</p></div>
    </section>
    ${e.additionalExamples?.length?`<section class="additional-examples" aria-labelledby="additional-label"><h2 class="reading-label" id="additional-label">More examples</h2>${e.additionalExamples.filter(v=>v.example!==e.example).map(v=>`<div class="variant"><h3>${escape(v.label)}</h3><blockquote>${specimen(v.example)}</blockquote></div>`).join('')}</section>`:''}
    ${e.supplemental?.length?`<section class="additional-examples"><h2 class="reading-label">Related expressions</h2>${e.supplemental.map(v=>`<div class="variant"><h3>${escape(v.title)}</h3>${wordList(v.items)}</div>`).join('')}</section>`:''}
    ${research(e.research)}
    ${e.collections?.length?`<section class="related"><h2 class="reading-label">Words and phrases to explore</h2><div class="related-links">${e.collections.map(id=>data.library.find(v=>v.slug===id)).map(v=>`<a href="${collectionLink(v)}">${escape(v.title)}</a>`).join('')}</div></section>`:''}
    ${related.length?`<section class="related"><h2 class="reading-label">Related patterns</h2><div class="related-links">${related.map(v=>`<a href="${patternLink(v)}">${escape(v.title)}</a>`).join('')}</div></section>`:''}
    <nav class="detail-nav" aria-label="Pattern navigation">${i>0?`<a href="${patternLink(siblings[i-1])}" rel="prev">Previous: ${escape(siblings[i-1].title)}</a>`:`<a href="${categoryLink(c.slug)}">All ${escape(c.title.toLowerCase())} patterns</a>`}${i<siblings.length-1?`<a href="${patternLink(siblings[i+1])}" rel="next">Next: ${escape(siblings[i+1].title)}</a>`:`<a href="${categoryLink(c.slug)}">Back to ${escape(c.title.toLowerCase())}</a>`}</nav>
  </article>`;
 }
 function searchPage(params){const q=(params.get('q')||'').slice(0,300),scope=cat(params.get('category'))?params.get('category'):'all';return `<section class="search-page">${crumb([homeCrumb,{title:'Search'}])}<section class="intro"><h1>Find a pattern</h1><p>Use your own words, or a phrase you’ve noticed.</p></section>${form(q)}<div class="filters"><label for="category-filter">Category <select id="category-filter" aria-label="Category"><option value="all">All categories</option>${data.categories.map(c=>`<option value="${c.slug}" ${scope===c.slug?'selected':''}>${escape(c.title)}</option>`).join('')}</select></label><label for="type-filter">Show <select id="type-filter" aria-label="Result type">${[['all','Everything'],['patterns','Patterns'],['phrases','Phrases & forms'],['vocabulary','Vocabulary']].map(([value,label])=>`<option value="${value}" ${params.get('type')===value?'selected':''}>${label}</option>`).join('')}</select></label><span id="result-count" role="status" aria-live="polite"></span></div><div id="search-results"></div></section>`;}
 function libraryRows(results,q,scope,type){return results.map(r=>{const best=r.matches[0];const why=best?(best.score===100?'Exact term':best.score===80?'Phrase match':best.score===25?'Example sentence':'Related words or spelling'):'Collection title match';return `<a class="pattern-row result" href="${escape(collectionLink(r.collection,q,queryLink(q,scope,type)))}"><span class="row-title"><span class="result-meta">${escape(r.collection.group)} · ${why}</span>${marked(r.collection.title,q)}</span><span class="row-description">${r.matches.slice(0,3).map(m=>marked(window.PatternSearch.excerpt(m.score===25?m.item.example:m.text,q,200),q)).join(' · ')||'Browse the collection'}${r.matches.length>3?` · ${r.matches.length-3} more`:''}</span><span class="row-action" aria-hidden="true">View</span></a>`;}).join('');}
 function updateResults(){
  const input=document.getElementById('pattern-query'),filter=document.getElementById('category-filter');if(!filter)return;
  const q=input.value.trim().slice(0,300),scope=filter.value,type=document.getElementById('type-filter').value;
  const results=type==='all'||type==='patterns'?search(q,scope):[];
  const libraries=type==='patterns'?[]:window.PatternSearch.searchLibrary(data.library.filter(c=>(type==='all'||(type==='vocabulary'?c.group==='Vocabulary lists':c.group!=='Vocabulary lists'))&&(scope==='all'||c.related.some(slug=>data.entries.some(e=>e.slug===slug&&e.category===scope)))),q);
  document.getElementById('result-count').textContent=q?`${results.length} ${results.length===1?'pattern':'patterns'} · ${libraries.length} ${libraries.length===1?'collection':'collections'}`:'';
  const libraryHTML=libraries.length?`<h2 class="results-heading">AI's Favorite Words</h2><div class="pattern-list">${libraryRows(libraries,q,scope,type)}</div>`:'';
  const patternHTML=results.length?`<h2 class="results-heading">Patterns</h2><div class="pattern-list">${results.map(r=>row(r.entry,{q,category:scope,type,...window.PatternSearch.explain(r,q,data.concepts)})).join('')}</div>`:'';
  const alternatives=q?window.PatternSearch.suggestQueries(q,data.entries,data.concepts,data.library):[];
  const suggestionsHTML=alternatives.length?`<div class="query-alternatives"><p>Try another search</p><div class="suggestions">${alternatives.map(term=>`<a href="${escape(queryLink(term,scope,type))}">${escape(term)}</a>`).join('')}</div></div>`:'';
  const clearFilters=scope!=='all'||type!=='all'?`<a class="clear-filters" href="${escape(queryLink(q))}">Search all categories and content types</a>`:'';
  document.getElementById('search-results').innerHTML=!q?`<div class="empty"><h2>Start with something you’ve noticed.</h2><p>A description works as well as a name.</p>${suggestions()}</div>`:!results.length&&!libraries.length?`<div class="empty"><h2>No matches${scope!=='all'||type!=='all'?' with these filters':''}</h2><p>Try fewer words or a different description.</p>${clearFilters}${suggestionsHTML}<a href="#/phrases">Browse AI's Favorite Words</a></div>`:clearFilters+suggestionsHTML+(libraries.some(r=>r.matches.some(m=>m.score===100))?libraryHTML+patternHTML:patternHTML+libraryHTML);
  history.replaceState(null,'',queryLink(q,scope,type));
 }
 function libraryPage(){return `${crumb([homeCrumb,{title:"AI's Favorite Words"}])}<section class="intro"><h1>AI's Favorite Words</h1><p>Common words &amp; phrases used by LLMs.</p></section>${form('',false,false)}${['Phrase collections','Additional forms','Vocabulary lists'].map(group=>`<section><h2 class="results-heading">${group==='Vocabulary lists'?'Research vocabulary':group}</h2>${group==='Vocabulary lists'?'<p>These collections record vocabulary from studies and observations. They include ordinary words and technical terms. Read the collection description to understand why each list was gathered.</p>':''}<div class="pattern-list">${data.library.filter(c=>c.group===group).map(c=>`<a class="pattern-row" href="${collectionLink(c)}"><span class="row-title">${escape(c.title)}</span><span class="row-description">${escape(c.note)}<span class="collection-size">${c.terms.length.toLocaleString()} words and phrases</span></span><span class="row-action" aria-hidden="true">View</span></a>`).join('')}</div></section>`).join('')}`;}
 function collectionPage(c,params){const q=(params.get('q')||'').slice(0,300),back=params.get('back')||'';return `${back.startsWith('#/search?')?`<div class="search-again"><a href="${escape(back)}">Back to search results</a></div>`:''}${crumb([homeCrumb,{title:"AI's Favorite Words",href:'#/phrases'},{title:c.title}])}<section class="intro"><h1>${escape(c.title)}</h1>${c.note?`<p>${escape(c.note)}</p>`:''}</section><div class="collection-controls"><label for="collection-query">Find in this collection</label><input id="collection-query" type="search" maxlength="300" value="${escape(q)}" placeholder="Enter a word or phrase"><button id="clear-collection" type="button">Clear search</button><span id="collection-count" role="status" aria-live="polite"></span></div><div id="collection-content"></div><nav id="collection-pagination" class="collection-pagination" aria-label="Word list pages"></nav>${research(c.research)}<section class="related"><h2 class="eyebrow">Related patterns</h2><div class="related-links">${c.related.map(slug=>data.entries.find(e=>e.slug===slug)).map(e=>`<a href="${patternLink(e)}">${escape(e.title)}</a>`).join('')}</div><a class="back-link" href="#/phrases">Back to AI's Favorite Words</a></section>`;}
 function updateCollection(c,page=1){
  const q=document.getElementById('collection-query').value.trim();
  const matches=q?window.PatternSearch.searchLibrary([c],q)[0]?.matches||[]:c.items.map(item=>({text:item.term,item}));
  const size=60,pages=Math.max(1,Math.ceil(matches.length/size));page=Math.max(1,Math.min(pages,page));
  const offset=(page-1)*size,items=matches.slice(offset,offset+size).map(m=>m.item||c.items.find(i=>i.term===m.text));
  document.getElementById('collection-count').textContent=matches.length?`${offset+1}–${Math.min(offset+size,matches.length)} of ${matches.length.toLocaleString()} words and phrases${q?' matching':''}`:'No matches';
  document.getElementById('collection-content').innerHTML=items.length?wordList(items,q):'<p class="empty">No matches in this collection. Clear the search to browse the list.</p>';
  document.getElementById('collection-pagination').innerHTML=pages>1?`<button id="previous-words" type="button" ${page===1?'disabled':''}>Previous</button><span>Page ${page} of ${pages}</span><button id="next-words" type="button" ${page===pages?'disabled':''}>Next</button>`:'';
  for(const [id,next] of [['previous-words',page-1],['next-words',page+1]])document.getElementById(id)?.addEventListener('click',()=>{updateCollection(c,next);document.querySelector('.collection-controls').scrollIntoView();document.getElementById('collection-query').focus({preventScroll:true});});
  const back=new URLSearchParams(location.hash.split('?').slice(1).join('?')).get('back')||'';
  const params=new URLSearchParams({...(q?{q}:{}),...(back?{back}:{}),...(page>1?{page}: {})});
  history.replaceState(null,'','#/collection/'+c.slug+(params.size?'?'+params:''));
 }

 function sources(){return `${crumb([homeCrumb,{title:'Sources'}])}<section class="intro"><h1>Sources</h1></section><section aria-label="Source list">${data.sources.map(s=>`<article class="source-row"><h2><a href="${escape(s.url)}" target="_blank" rel="noopener noreferrer">${escape(s.title)}</a></h2></article>`).join('')}</section>`;}
 function about(){return `${crumb([homeCrumb,{title:'About'}])}<section class="intro"><h1>About</h1></section><div class="prose"><p>This site is a compilation of many popular 'AI writing' tells. Also known as 'AI Slop.'</p><p>This site is for educational purposes only. Seeing one of these writing techniques in someone's writing is not a guarantee that it was AI generated. AI did learn to write from humans, after all.</p><h2>Search</h2><p>Use the search feature to look for a specific type of AI writing, or browse the site by category.</p><h2>Check for AI Slop</h2><p><a href="#/checker">Check your text</a> for signs of AI writing. This feature is in beta, and only looks for AI writing patterns documented on this site. This checker is for education and experimentation. Do not rely on it to detect AI writing or to prove that something was written by a person.</p><h2>Sources</h2><p>The sources section includes links to primary sources and repos for all the AI writing tells shown on this site. I thank them for their service.</p><p>This site was last updated in October 2026.</p></div>`;}
 let timer;
 function render(){clearTimeout(timer);window.SignatureCheckerUI.unmount();let path,params;try{const [route,query='']=(location.hash.slice(1)||'/').split('?');path=decodeURIComponent(route);params=new URLSearchParams(query);}catch{path='/invalid';params=new URLSearchParams();}
 let title='Slop Categories',html;
 if(path==='/')html=home();else if(path==='/search'){html=searchPage(params);title='Search';}else if(path==='/phrases'){html=libraryPage();title="AI's Favorite Words";}else if(path.startsWith('/collection/')&&data.library.find(c=>c.slug===path.slice(12))){const c=data.library.find(c=>c.slug===path.slice(12));html=collectionPage(c,params);title=c.title;}else if(path==='/checker'){html=window.SignatureCheckerUI.page();title='Check for AI Slop';}else if(path==='/sources'){html=sources();title='Sources';}else if(path==='/about'){html=about();title='About';}else if(path.startsWith('/category/')&&cat(path.slice(10))){const c=cat(path.slice(10));html=categoryPage(c);title=c.title;}else if(path.startsWith('/pattern/')&&data.entries.find(e=>e.slug===path.slice(9))){const e=data.entries.find(e=>e.slug===path.slice(9));html=detail(e,params);title=e.title;}else{title='Page not found';html='<section class="intro"><h1>Page not found</h1><p>This link does not match a pattern in the reference.</p></section><a href="#/">Browse categories</a>';}
 main.innerHTML=html;document.title=title+' | AI Slop Signatures';document.querySelectorAll('.masthead nav a').forEach(a=>{if(a.getAttribute('href')==='#'+path)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 if(path==='/checker')window.SignatureCheckerUI.mount(data.entries);
 const f=main.querySelector('form');if(f)f.addEventListener('submit',event=>{event.preventDefault();const q=f.querySelector('input').value.trim().slice(0,300);if(path==='/search')updateResults();else location.hash=queryLink(q);});
 if(path==='/search'){updateResults();document.getElementById('pattern-query').addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(updateResults,120);});document.getElementById('category-filter').addEventListener('change',updateResults);document.getElementById('type-filter').addEventListener('change',updateResults);}
 if(path.startsWith('/collection/')&&document.getElementById('collection-query')){const c=data.library.find(c=>c.slug===path.slice(12));updateCollection(c,Number(params.get('page'))||1);document.getElementById('collection-query').addEventListener('input',()=>updateCollection(c));document.getElementById('clear-collection').addEventListener('click',()=>{document.getElementById('collection-query').value='';updateCollection(c);});}
 window.scrollTo(0,0);main.focus({preventScroll:true});
 }
 document.querySelector('.skip').addEventListener('click',event=>{event.preventDefault();main.focus();main.scrollIntoView();});
 window.addEventListener('hashchange',render);render();
})();
