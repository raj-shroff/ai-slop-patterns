/* Original rules for AI Slop Signatures. Application code: MIT. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.SignatureCheckerRules = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const limits = Object.freeze({
    minWords: 1, maxWords: 10000, maxCharacters: 80000,
    maxFindings: 300, maxFindingsPerRule: 30, maxOccurrencesPerGroup: 40,
    language: 'English',
    counting: 'Words include numbers and contractions. A hyphenated compound counts as one word. Characters are counted as JavaScript UTF-16 units.',
    structural: [
      'Repeated openings: at least three sentences.',
      'Similar sentence lengths: four to six sentences of eight to thirty words, or three equal-length sentences sharing an opening.',
      'Vocabulary clusters: at least four different stock words, or four uses including one word repeated three times, in a paragraph of ten words or more.',
      'Vocabulary across paragraphs: at least three stock words recur across three paragraphs; counts describe this passage, not authorship.',
      'Hyphens: known split spellings, open noun phrases in clear noun positions, and two or more adjacent hyphenated descriptions.',
      'Repeated qualifications: at least three qualifying phrases in a paragraph of twenty-five words or more.',
      'Repeated phrases: at least three copies of a five-word sequence.',
      'Linking phrases: at least three sentence openings within six sentences.'
    ]
  });

  // These are authored checks for observable wording. They do not infer intent,
  // factual support, authorship, or whether a rhetorical device is appropriate.
  const phrases = [
    [1, 'grand-significance', '(?:(?:stands?|serves?) as (?:a |an )?(?:(?:lasting|powerful|enduring|living) )?(?:testament|reminder)|(?:enduring|lasting) (?:spirit|legacy|impact)|indelible mark|(?:profound|enormous|immense|lasting) (?:cultural |historical )?significance|(?:a |an )?(?:crucial|pivotal|vital|significant|key) (?:role|moment|turning point)|(?:underscor(?:e|es|ed|ing)|highlight(?:s|ed|ing)?) (?:its|their|the) (?:importance|significance)|(?:laying|lays?|laid) the (?:groundwork|foundation) for)', 'This wording gives the subject special or lasting importance. Look for the event, action, or result that earns the claim.'],
    [2, 'unnamed-coverage', '(?:independent (?:regional|national) media|(?:leading|major|numerous) (?:publications|media outlets)|(?:garnered|attracted|received) (?:widespread|significant|considerable) media attention|(?:local|regional|national) media outlets)', 'The phrase refers to coverage without naming a publication or explaining what it reported.'],
    [3, 'added-interpretation', '(?:(?:highlighting|underscoring|reflecting|demonstrating|symbolizing|emphasizing) (?:its |their |a |an |the )?(?:profound|unwavering|enduring|deep|continued|ongoing|broader) (?:commitment|significance|importance|dedication|impact)|(?:reflecting|symbolizing) (?:its |their |the )?(?:broader|enduring|lasting) (?:influence|legacy|impact))', 'The sentence attaches an interpretation to an event. Check whether the event actually supports that description.'],
    [4, 'promotional-phrases', '(?:nestled (?:in|within)|in the heart of|(?:vibrant|rich) (?:cultural )?tapestry|unparalleled (?:excellence|experience|quality|performance)|a beacon of (?:innovation|excellence|hope)|(?:cutting-edge|game-changing|groundbreaking|revolutionary) (?:solution|platform|approach|technology|tool)|unlock(?:s|ed|ing)? (?:your |the )?(?:full )?potential|world of possibilities)', 'This is a familiar promotional description. A concrete detail may tell the reader more.'],
    [5, 'vague-role', '(?:associated with leadership|play(?:s|ed|ing)? (?:a |an )?(?:instrumental|significant|pivotal|key) role|(?:made|makes?|making) significant contributions)', 'The phrase describes involvement without saying what the person did.'],
    [6, 'unnamed-authority', '(?:(?:experts|observers|critics) (?:agree|say|believe|argue|suggest)|(?:many|some|several) (?:experts|observers|critics) (?:agree|say|believe|argue|suggest)|widely regarded as)', 'The phrase invokes other people\'s judgment. Check whether the passage identifies them and explains their evidence.'],
    [10, 'elaborate-copula', '(?:serves? as|stands? as|boasts? (?:a|an|the|one|two|three|four|five|six))', 'This wording may be doing the work of “is” or “has.” Sometimes it conveys a real distinction.'],
    [13, 'rather-than-contrast', 'rather than', 'The sentence contrasts one option with another. Decide whether the contrast adds information.'],
    [13, 'paired-comparison', 'less like(?: [\\p{L}’\x27-]+){1,18} (?:and|but) more like|not because[^.!?]{1,160}but because', 'The sentence contrasts two descriptions or explanations. Keep it when the distinction helps the reader understand what happened.'],
    [28, 'assistant-reply', '(?:certainly[!,.]?\\s+(?:here|I can)|here (?:is|are) your (?:requested )?(?:draft|revised|updated)|I hope this helps|let me know if you(?: would like| want) me to|I(?: would|[’\x27]d) be happy to (?:adjust|revise|expand|rework))', 'This sounds like a reply to the person who requested the draft. Check whether it belongs in the finished text.'],
    [30, 'unfinished-placeholder', '\\[(?:YEAR|NAME|DATE|TITLE|INSERT[^\\]\\r\\n]{0,60})\\]|\\b\\d{4}-[xX]{2}-[xX]{2}\\b', 'A placeholder is still present. It may be intentional in a template.', 'raw'],
    [33, 'reference-residue', '(?::contentReference\\[[^\\]\\r\\n]{1,80}\\]\\{[^}\\r\\n]{1,80}\\}|\\bturn\\d+(?:search|view|fetch)\\d+\\b)', 'A reference code is visible where a readable citation would normally appear.', 'raw'],
    [34, 'numeric-cite-residue', '\\[cite:\\s*\\d+(?:\\s*,\\s*\\d+)*\\]', 'A citation marker remains in the text. Check whether the final document provides the corresponding source.', 'raw'],
    [35, 'citation-command', 'grok_render_citation_card_json', 'A citation-rendering command remains in the text.', 'raw'],
    [36, 'bracket-citation', '【[^】\\r\\n]{1,100}†[^】\\r\\n]{1,100}】', 'A source marker remains in a form that readers may not be able to use.', 'raw'],
    [37, 'file-label', '\\[(?:attached_file|web):\\d+\\]', 'A file or web reference label has been left in the sentence.', 'raw'],
    [38, 'writing-wrapper', ':::writing\\{[^}\\r\\n]{0,160}\\}', 'A writing-tool wrapper surrounds the prose. It is a formatting artifact, not a prose judgment.', 'raw'],
    [45, 'unfinished-citation-template', '\\{\\{cite (?:web|book|journal)[^}\\r\\n]{0,100}\\.\\.\\.\\}\\}', 'An unfinished citation template remains in the document.', 'raw'],
    [46, 'ai-link-tracking', '(?:[?&])utm_source=(?:chatgpt(?:\\.com)?|perplexity(?:\\.ai)?|claude(?:\\.ai)?)(?=[&#\\s]|$)', 'The link contains a writing-service tracking label. This does not establish who wrote the surrounding text.', 'raw'],
    [51, 'universal-compliance', '(?:fully complies with|meets) (?:every|all) (?:requirement|requirements)', 'This claims that every requirement was met. The checker cannot verify the requirements or the work.'],
    [52, 'formal-feedback-request', '(?:precise|specific) changes (?:needed|required) to (?:bring|ensure)[^.?!\\r\\n]{0,100}full compliance', 'The request asks about compliance in broad terms. A concrete question may be easier for the reader to answer.'],
    [56, 'compliance-assurance', '(?:ensure|ensures|ensuring) full compliance with all (?:relevant |applicable )?(?:standards|requirements)', 'The revision note promises full compliance without identifying a particular standard in this phrase.'],
    [57, 'preservation-list', '(?:while preserving|without altering) (?:the )?(?:structure|format)[^.?!\\r\\n]{0,80}(?:references|citations)[^.?!\\r\\n]{0,80}(?:details|content)', 'The note lists features that stayed the same. Check whether it also explains the useful change.'],
    [60, 'generic-feedback-summary', 'addressed (?:all )?(?:reviewer |review |the )?feedback by improving', 'The note says feedback was addressed. A specific change would make that statement easier to assess.'],
    [62, 'reviewer-assurance', 'reviewer note:\\s*(?:this |the )?(?:report|draft|document) (?:meets|satisfies)', 'A reviewer-facing note remains in the text. Check whether readers need to see it.'],
    [79, 'what-to-note', '(?:(?:it is|it[’\x27]s) (?:important|critical|crucial|essential) to (?:note|remember|consider|recognize)|(?:it is|it[’\x27]s) worth (?:noting|remembering)|what is (?:especially|particularly) interesting is that)', 'The phrase announces that something deserves attention. Read the sentence without it and decide whether anything is lost.'],
    [81, 'explicit-assistant-identity', '(?:as an AI(?: language model| assistant)?|as a large language model|I do not have personal experiences)', 'The text explicitly describes a chatbot or language model speaking. A quotation or discussion of AI may use this deliberately.'],
    [85, 'vague-aspects', '(?:various aspects|multiple dimensions|different facets) of', 'The phrase groups details under a broad label. Naming those details may be more useful.'],
    [86, 'among-first-best', 'one of the (?:first|best|finest|foremost) (?:of its kind|in (?:the|its) (?:field|industry|class))', 'The phrase ranks the subject without identifying the comparison here. Check the evidence before accepting the ranking.'],
    [87, 'announcing-certainty', '(?:without a doubt|it goes without saying|cannot be overstated|there is no denying)', 'This phrase adds emphasis or certainty. It does not supply supporting evidence.'],
    [88, 'emphatic-description', '(?:(?:exceptionally|incredibly|remarkably|truly|extremely|genuinely|deeply) (?:strong|effective|valuable|important|powerful|meaningful|remarkable|transformative|significant)|absolutely essential|every single|(?:an )?enormous amount|(?:benefit(?:s|ed|ing)?|matters?) enormously|immense potential)', 'The wording adds strong emphasis. A number, comparison, or concrete detail would make that emphasis easier to judge.'],
    [89, 'unnamed-decision-maker', 'it was (?:decided|determined|concluded|agreed) that', 'The construction leaves the decision-maker unnamed. That may be acceptable if the surrounding text identifies them.'],
    [90, 'double-skepticism', 'so-called\\s+[\x22“\x27‘][^\x22”\x27’\\r\\n]+[\x22”\x27’]', '“So-called” and quotation marks both signal skepticism about the same term.'],
    [91, 'colon-before-continuation', ':\\s*(?:including|such as)\\b', 'The words after this colon continue the preceding grammar. Check whether the colon interrupts the sentence.'],
    [97, 'staged-reveal', '(?:here(?: is|[’\x27]s) (?:the thing|the twist|the part (?:nobody|no one) (?:mentions|talks about))|what (?:nobody|no one) tells you)', 'The phrase stages a revelation before giving the point. Decide whether the point needs that introduction.'],
    [99, 'announced-honesty', '(?:let(?: us|[’\x27]s) be honest|I(?: will|[’\x27]ll) be honest|let that sink in|full stop\\.)', 'The phrase asks the reader to treat the statement as frank or conclusive. The substance still has to earn that emphasis.'],
    [100, 'assumed-reader-agreement', '(?:you already know|we have all felt|we[’\x27]ve all felt|we all know deep down)', 'The wording assumes what readers know or feel. Consider whether that assumption fits the audience.'],
    [101, 'reassurance-script', '(?:you(?: are|[’\x27]re) not alone|your feelings are valid|sit with that|it(?: is|[’\x27]s) okay to feel)', 'This is a familiar reassurance phrase. The checker cannot tell whether the reader asked for reassurance.'],
    [102, 'whole-answer', '(?:that(?: is|[’\x27]s) the whole game|that(?: is|[’\x27]s) all there is to it|the entire (?:strategy|answer|solution) is)', 'The phrase presents one idea as a complete explanation. Check whether it leaves out a necessary qualification.'],
    [103, 'unsupported-endorsement', 'the only(?:\\s+[\\p{L}’\x27-]+){1,12}\\s+I (?:trust|recommend|use)', 'This is a personal endorsement. Look for an explanation of why the speaker recommends it.'],
    [104, 'invitation-without-evidence', '(?:do not take my word for it|don[’\x27]t take my word for it|the results speak for themselves)', 'The phrase invites agreement without supplying evidence itself. A source or concrete result should do that work.'],
    [106, 'dead-long-live', 'is dead[.!]\\s+Long live', 'The sentence announces the death of one approach to introduce another. This is a rhetorical contrast.'],
    [107, 'tacked-on-importance', 'and that(?: is|[’\x27]s) why(?:\\s+[\\p{L}’\x27-]+){1,8}\\s+mattered', 'The ending tells the reader that the event mattered. Check whether the passage has explained why.'],
    [108, 'short-negative-ending', '(?:the|our|their|your)\\s+[\\p{L}-]+\\s+(?:did|was|were|could|would) not[.!](?=\\s|$)', 'This short negative ending relies on the preceding sentence for its meaning. It can create a deliberate punchline.'],
    [110, 'engagement-prompt', '(?:curious (?:to hear )?what (?:(?:others|you) think|everyone thinks)|agree or disagree\\?|what are your thoughts\\?)', 'This is a broad invitation to react. A specific question may lead to a more useful reply.'],
    [112, 'tidy-ending', '(?:for now,? that was enough|they would face it together|whatever (?:came|happened) next)', 'The phrase gives the ending a familiar note of reassurance. Decide whether the story has earned it.'],
    [113, 'fiction-cliche', '(?:words hung in the air|heart (?:hammered|pounded|raced) (?:against|in)|for what felt like an eternity|a shiver (?:ran|went) down (?:his|her|their) spine)', 'This is a familiar description of emotion or suspense. A scene-specific detail may be more vivid.'],
    [114, 'vague-foreshadowing', '(?:little did (?:he|she|they|anyone) know|nothing would ever be the same|something darker was waiting)', 'The phrase promises a change or danger without identifying it here.'],
    [132, 'abstract-actor', '(?:the |a |this |our )?(?:strategy|framework|approach|initiative) (?:decided|wanted|hoped|believed|dreamed)', 'An abstract idea is described as making a human decision. Check whether naming the people involved would be clearer.'],
    [133, 'blanket-claim', '(?:everyone knows|nobody (?:reads|cares|wants|understands)|every successful (?:team|company|person|business))', 'The wording makes a claim about everyone or nobody. The checker does not know whether the claim is justified.'],
    [134, 'document-roadmap', '(?:in this (?:article|section|essay|document),? we will (?:explore|examine|discuss|look at)|this (?:article|section|essay) will (?:explore|examine|discuss))', 'The sentence announces what the document will discuss. It may be removable when the next sentence already makes that clear.'],
    [135, 'everyone-at-once', 'whether you(?: are|[’\x27]re) (?:a |an )?(?:(?:complete|absolute|total) )?(?:beginner|novice)(?:\\s+[\\p{L}’\x27-]+){0,6}\\s+(?:expert|professional)', 'The phrase addresses the least and most experienced readers together. Check whether the advice actually serves both.'],
    [138, 'stock-transition', '(?:looking ahead,? (?:the|this|we)|what comes next|adds? another (?:layer|dimension)|in practice,? (?:this|the) (?:approach|framework|strategy)|together,? these (?:ideas|efforts|changes|steps))', 'This phrase introduces a transition or a summary. Check whether the sentence explains the connection it announces.'],
    [139, 'importance-announcement', '(?:this matters|why(?: [\\p{L}’\x27-]+){1,6} matters|what matters most|just as important|(?:that|the|this) distinction matters)', 'The phrase announces importance. The useful part is the explanation of what changes and who is affected.'],
    [140, 'cost-free-promise', 'without (?:sacrificing|compromising|losing|requiring|giving up)(?: [\\p{L}’\x27-]+){1,10}', 'The sentence promises a benefit without a cost or loss. Check whether it explains how that tradeoff is avoided.'],
    [141, 'vague-helpfulness', '(?:(?:especially |particularly )?helpful (?:tool|guide|resource|framework)|(?:makes?|making) it easier to (?:navigate|achieve|succeed|work more effectively)|helps? you (?:avoid common|navigate|achieve your)|helpful for navigating)', 'This describes something as helpful in broad terms. Naming the task or result would give the reader more to work with.'],
    [143, 'superlative-qualifier', '(?:the single most|arguably the most|perhaps the most|unquestionably the (?:best|most)|by far the (?:best|most)|the most (?:powerful|popular) (?:tool|approach|solution|platform|way)|one of the best [\\p{L}-]+ about)', 'The phrase makes an especially strong ranking claim. Its truth depends on the comparison and evidence.']
  ].map(([n,ruleId,pattern,explanation,scope]) => ({entryId: `P${String(n).padStart(3,'0')}`, ruleId, pattern, explanation, scope:scope || 'prose', type:'wording', minWords:1}));

  const findingTitles = {
    'assertion-then-rejection': 'A claim followed by a rejected alternative',
    'chat-role-label': 'Chat speaker label left in the text',
    'emoji-after-prose': 'Emoji appended to prose'
  };
  const structural = [
    [7,'challenge-hope',1,1], [9,'word-cluster',10,1], [11,'additive-contrast',1,1], [12,'replacement-contrast',1,1],
    [13,'assertion-then-rejection',1,1], [28,'chat-role-label',1,1],
    [15,'repeated-triads',1,1], [16,'duplicate-title',1,1], [17,'title-case',1,1], [19,'dense-bold',1,1],
    [20,'bold-label-list',1,1], [21,'dash-run',1,1], [22,'emoji-headings',1,1], [22,'emoji-after-prose',1,1], [24,'mixed-quotes',1,1],
    [25,'heading-jump',1,1], [26,'many-main-headings',1,1], [27,'many-dividers',1,1], [42,'isbn-checksum',1,1],
    [47,'undefined-reference',1,1], [50,'tiny-outline',1,1], [55,'generic-revision',1,1], [80,'repeated-summary',1,3],
    [88,'intensifier-cluster',20,1], [92,'ordered-openings',1,3], [93,'repeated-openings',1,3],
    [94,'even-lengths',24,3], [95,'short-run',1,3], [96,'negative-run',1,1], [98,'question-answer-pairs',1,1],
    [105,'software-promises',1,1], [109,'routine-lesson',1,1], [118,'repeated-phrase',15,1], [123,'similar-quotes',1,1],
    [128,'repeated-name',1,1], [129,'noun-chain',1,1], [130,'unpunctuated-clauses',20,1], [131,'nested-clauses',1,1],
    [136,'automatic-reassurance',1,1], [137,'vocabulary-recurrence',6,3], [138,'transition-run',1,3],
    [141,'helpfulness-run',20,1], [142,'qualification-run',25,1], [144,'unnecessary-hyphens',1,1], [144,'stacked-hyphens',1,1]
  ].map(([n,ruleId,minWords,minSentences]) => ({entryId:`P${String(n).padStart(3,'0')}`,ruleId,minWords,minSentences,type:'structure',title:findingTitles[ruleId]}));

  const manualReasons = {
    8:'Whether an awards section contains a real award depends on what the named recognition means.',
    14:'Confusing a title with its subject requires knowledge of the page and what it describes.',
    23:'A table can be useful or unnecessary depending on the reader\'s task.',
    29:'An explanation for missing information needs to be checked against actual available sources.',
    31:'Formatting syntax is valid in Markdown; the destination format determines whether it is residue.',
    32:'Broken template or document code has many forms. The checker does not run a document validator.',
    39:'The correct category depends on the subject and the destination\'s category system.',
    40:'A field can only be verified against the actual application or form.',
    41:'Determining whether sources exist requires source access.',
    43:'A source must be read to establish whether it supports the claim.',
    44:'Whether a page reference is needed depends on the claim and the cited work.',
    48:'Policy wording must be checked against the actual policy.',
    49:'An editor\'s warning may be intentionally quoted or displayed.',
    53:'A response to an AI accusation cannot establish authorship or dishonesty.',
    54:'Deflection depends on the preceding conversation; disagreement is not a writing tell.',
    58:'Source quality and the changes made are not available in the pasted revision note.',
    59:'Formatting detail may be exactly what a reviewer needs.',
    61:'A change in personal style requires comparable earlier writing.',
    63:'Approval status needs to be checked against the review process.',
    64:'Comparing profiles requires multiple documents and their context.',
    65:'Unrelated pages must be compared to establish repeated filler across pages.',
    66:'Model-era changes require evidence about models and dates.',
    67:'Judging whether a political claim is presented uncritically requires sources and context.',
    82:'An unfinished-looking ending may be an excerpt, heading or deliberate fragment.',
    83:'An access date is not evidence of when a reference was added.',
    84:'Determining whether different descriptions refer to the same subject requires meaning.',
    111:'A scene-setting opening can be specific or generic; sunlight alone is not a useful trigger.',
    115:'Deciding whether metaphors work together requires reading their meaning.',
    116:'Whether an explanation merely repeats a scene depends on the scene.',
    117:'Missing detail is a judgment about what readers need to understand.',
    119:'Information value cannot be inferred from the presence of general words alone.',
    120:'A response must be compared with the actual task or question.',
    121:'Logical connections cannot be verified by counting transitions.',
    122:'Pronoun reference and time relationships need grammatical and contextual judgment.',
    124:'Tone must be judged against audience and situation.',
    125:'Whether a positive framing fits an experience requires its meaning.',
    126:'Whether two claims deserve equal weight requires evidence about both.',
    127:'Place-specific detail requires knowledge of the place or the intended description.',
    // Vocabulary recurrence is measured separately from the meaning of a word.
  };
  const facets = {
    1:'Recognizes selected significance phrases; does not judge historical significance.',
    3:'Recognizes selected interpretive attachments; does not evaluate factual support.',
    7:'Recognizes challenge-and-hope wording together, not the quality of an ending.',
    9:'Groups inflections of a small editorial vocabulary; checks four distinct stock words or three repeats plus another stock word in a paragraph of ten or more words.',
    13:'Recognizes “rather than” and an assertion followed by a punctuated “not” alternative; does not decide whether the distinction is useful.',
    15:'Recognizes repeated short comma-separated triads, not every three-part argument.',
    17:'Checks inconsistent capitalization in explicit Markdown headings at the same level; consistent title case is allowed.',
    21:'Reports four or more em dashes in a paragraph, not a single aside.',
    22:'Reports repeated emoji at line openings or an emoji appended to a prose sentence of at least six words. Brief reactions and explanations of emoji symbols are skipped; audience fit still needs a reader.',
    24:'Reports paired straight and curly double quotes; apostrophes do not count.',
    28:'Recognizes assistant replies and chat speaker labels. A label or a quoted conversation does not establish the origin of the surrounding prose.',
    42:'Checks ISBN-10/ISBN-13 arithmetic only. A valid checksum does not prove that a book exists. DOIs are not verified.',
    47:'Checks named ref tags against definitions within this paste only.',
    50:'Checks four or more Markdown headings or standalone outline labels in fewer than 120 words.',
    51:'Recognizes a compliance claim; does not verify it.',
    80:'Finds repeated summary markers or an exact restatement after a summary marker, not paraphrased conclusions.',
    88:'Recognizes emphatic descriptions such as “remarkably effective” and clusters of three different intensifiers. Does not decide whether emphasis is justified.',
    89:'Recognizes unnamed decision-maker constructions, not all passive voice.',
    93:'Finds shared two- or three-word openings or early phrases across six nearby sentences or three nearby paragraphs.',
    94:'Measures four to six similar-length sentences, or three equal-length sentences with a shared opening; not their quality or authorship.',
    95:'Finds runs of three short sentences; it does not parse grammatical fragments.',
    98:'Requires two short question-and-answer pairs.',
    105:'Requires software context or two stock promises together.',
    118:'Finds literal repeated sequences and sentences, not synonymous restatements.',
    123:'Finds an identical four-word opening in at least three quotations.',
    129:'Finds dense chains of common abstract-noun endings, not all nominalizations.',
    130:'Finds runs of dependent fragments or sentences containing several subject-and-verb clauses with inadequate breaks. This uses local grammatical cues, not a full parser.',
    131:'Finds nested relative-clause markers or very long sentences; does not assess how much content a sentence carries.',
    132:'Recognizes selected abstract nouns followed by human intention verbs.',
    133:'Recognizes selected sweeping claims; does not test their truth.',
    137:'Counts at least three stock words that recur in three paragraphs, with at least six total uses. Reports passage counts, never an AI probability or an imported vocabulary score.',
    139:'Recognizes importance-announcing constructions. Does not require repetition to find the wording or decide whether the claim is important.',
    140:'Recognizes a no-tradeoff promise with a stated object; does not assess whether the promise is true.',
    141:'Recognizes broad helpfulness descriptions and repeated helpfulness claims; specific task instructions may contain the same wording.',
    142:'Requires three qualifying phrases in a paragraph of twenty-five words or more; does not judge whether caution is warranted.',
    143:'Recognizes selected strong rankings; does not verify them.',
    144:'Checks known closed spellings and open noun phrases in noun positions using grammatical cues. Separately reports adjacent hyphenated descriptions as a readability observation, not a spelling error. It is not a full grammatical parser.'
  };
  const supported = new Set([...phrases,...structural].map(r=>r.entryId));
  const coverage = [];
  for (let n=1;n<=144;n++) {
    if(n===18) continue;
    const entryId=`P${String(n).padStart(3,'0')}`;
    const excluded=n>=68&&n<=78;
    const supportedHere=supported.has(entryId);
    coverage.push({entryId,status:excluded?'excluded':supportedHere?'partial':'manual',rationale:excluded?'This entry explains unreliable evidence. It is never used as a positive finding.':supportedHere?(facets[n]||'Recognizes the stated wording or visible formatting only; deciding whether it is appropriate requires the reader.'):(manualReasons[n]||'Requires human reading of the meaning and context.'),ruleIds:[...phrases,...structural].filter(r=>r.entryId===entryId).map(r=>r.ruleId)});
  }
  return {limits,phrases,structural,coverage};
});
