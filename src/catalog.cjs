// Editorial navigation and search aliases; the prose itself comes from Markdown.
const categories = [
  ['language','Language','Phrasing, word choice, and repetition'],
  ['content','Content','Claims, narrative, and generalizations'],
  ['formatting','Formatting','Headings, lists, and emphasis'],
  ['citations','Citations and markup','Reference errors and tool artifacts'],
  ['context','Context','Comments, writing history, and unreliable indicators'],
  ['historical','Historical patterns','Patterns associated with earlier models']
].map(([slug,title,description])=>({slug,title,description}));
function category(n) {
  if([139,140,141,143].includes(n)) return 'content';
  if(n<=8) return 'content';
  if(n<=15) return 'language';
  if(n<=27) return 'formatting';
  if(n<=47) return 'citations';
  if(n<=78) return 'context';
  if(n<=84) return 'historical';
  if(n<=92) return [90,91,92].includes(n)?'formatting':'language';
  if([94,130].includes(n)) return 'formatting';
  if([107,109,111,112,114,116,117,119,120,121,125,126,127,133,134].includes(n)) return 'content';
  return 'language';
}
const overrides = {
  9:'Repeated stock vocabulary',10:'Avoiding “is” and “has”',11:'Not just X, but also Y',
  12:'It’s not X. It’s Y.',13:'Y rather than X',15:'Forced groups of three',
  85:'Vague aspect language',84:'Forced synonyms'
};
// Concept groups bridge everyday descriptions to the terminology in the reference.
const concepts = [
  ['importance',['this matters','why it matters','matters most','just as important','distinction matters','importance flags'],[139]],
  ['tradeoffs',['without sacrificing','without compromising','without losing','without requiring','tradeoff denial','no tradeoffs','no downsides'],[140]],
  ['helpfulness',['can help you','especially helpful','makes it easier','helps you avoid','helpfulness coaching'],[141]],
  ['qualification',['does not establish','may provide','can provide','not necessarily','need not','too many caveats','repeated qualification'],[142]],
  ['superlatives',['single most','arguably the most','the most powerful','the most popular','perhaps the most','one of the best','unsupported superlatives'],[143]],
  ['contrast',['not x its y','not x it is y','not this but that','negative parallelism','false contrast','binary contrast','not because because','rather than'],[11,12,13,136]],
  ['empty',['says a lot but nothing','lots of words no substance','word salad','waffle','fluff','vague generic','empty claims','all filler','low information'],[119,117,3,134]],
  ['repetition',['same sentence structure','same structure over and over','repetitive wording','repeating itself','repetition','cookie cutter','formulaic','templated','copy paste cadence'],[93,94,118,138]],
  ['vocabulary',['delve','tapestry','buzzwords','corporate jargon','ai vocabulary','fancy words','overused words','inflated vocabulary'],[9,115,129,137]],
  ['ornament',['flowery language','purple prose','over the top adjectives','too many adjectives','decorative metaphors','overwritten','poetic descriptions'],[115,4,113]],
  ['threes',['rule of three','three items','groups of three','triads','three adjectives','three things'],[15,92]],
  ['reveal',['fake profundity','fake wisdom','deep sounding','staged revelation','plot twist','punchline','heres the thing','nobody talks about','real question'],[97,102,99,109]],
  ['reassurance',['therapy speak','therapist voice','you are not alone','your feelings are valid','reassurance','sit with that','validation'],[101,100]],
  ['intimacy',['pretending to know me','you already know','forced intimacy','manufactured intimacy','assumed agreement','fake empathy'],[100,101]],
  ['engagement',['linkedin post','humble brag','leadership lesson','engagement bait','curious what others think','life lesson'],[109,110,97]],
  ['hype',['hype','promotional','salesy','marketing speak','exaggerated importance','grand claims','game changer','revolutionary'],[4,1,102,106]],
  ['citation',['made up references','fake citations','fabricated sources','invented citations','broken links','fake doi','fake isbn','hallucinated references'],[41,42,43,45]],
  ['authority',['experts say','unnamed experts','vague attribution','false consensus','everyone agrees'],[6,2,126]],
  ['dash',['em dash','emdash','long dashes','too many dashes','dash overuse'],[21,130]],
  ['format',['bold headings','bullet points','too much bold','list headings','overformatted','markdown formatting'],[19,20,17,25]],
  ['residue',['chatbot leftovers','as an ai','hope this helps','let me know','chatgpt artifacts','copy pasted ai response'],[28,33,81]],
  ['ending',['happy ending','forced optimism','neat ending','uplifting ending','face it together','tidy conclusion'],[112,80,7]],
  ['summary',['repeats the conclusion','in conclusion','summarizes everything again','recap','repetitive summary'],[80,118]],
  ['fiction',['heart racing','heart pounding','shiver down spine','time stood still','words hung in air','stock emotions','fiction cliches'],[113,114,111]],
  ['detail',['no specifics','lacks detail','no sensory detail','no personal experience','generic examples','interchangeable descriptions'],[117,127,119]],
  ['agency',['passive voice','who did it','abstract nouns','nominalizations','nominalisations','false agency'],[89,129,132]],
  ['rhythm',['choppy sentences','short fragments','one word sentences','dramatic fragments','slogan endings','staccato'],[95,94]],
  ['questions',['rhetorical question','asks then answers','answers its own questions','self answered questions','stacked questions'],[98]],
  ['tone',['robotic voice','too formal','stiff writing','no personality','flat tone','sanitized language'],[124,125,73,74]],
  ['unreliable',['false positives','not proof','does not prove ai','unreliable indicators','perfect grammar','human writing','accusing students'],[71,70,73,74,68]],
  ['intent',['misses the point','doesnt answer question','off topic','answers the wrong question','irrelevant answer'],[120]],
  ['coherence',['doesnt follow','no logical connection','incoherent','disconnected argument','contradictory narrative'],[121,122]],
  ['balance',['both sides','too balanced','false balance','neutral about everything','no opinion'],[126]],
  ['quotes',['everyone sounds the same','fake sounding quotes','unnatural quotes','polished dialogue'],[123]],
  ['honesty',['let that sink in','full stop','lets be honest','performative honesty','i promise'],[99,104]],
  ['universal',['always and never','everyone nobody','blanket statement','sweeping generalization'],[133]],
  ['roadmap',['this article will explore','announces the essay','meta commentary','unnecessary introduction'],[134,87]],
  ['copula',['serves as','boasts','stands as','avoids is','avoids has'],[10]],
  ['synonyms',['elegant variation','keeps changing names','same thing different names','synonym cycling'],[84,128]],
  ['code',['fits in your head','batteries included','zero config','just works','developer promises'],[105]]
].map(([name,phrases,ids])=>({name,phrases,ids}));
module.exports={categories,category,overrides,concepts};
