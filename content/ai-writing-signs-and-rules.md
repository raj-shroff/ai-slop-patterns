# AI Writing Signs and Rules

A reference for reviewing prose and preparing examples

Updated 2 October 2026 | 143 entries | 23 source records

This reference brings together the signs described in the supplied Wikipedia PDF and every rule in the vale-signs-of-ai-writing repository. It explains what each pattern looks like, supplies an illustrative example, and records the limits of the observation. The technical appendix preserves the exact rule files and all repository fixtures.

A recurring pattern can justify closer review. It does not, by itself, establish who wrote a passage. Check factual support, source accuracy, and context before judging provenance. The Wikipedia page describes observations; it is an advice page, not Wikipedia policy or a universal style guide. The editing guidance in this reference is a practical synthesis, distinct from those observations and from executable Vale rules.

## How to use the reference

- Pattern entries: description, illustrative example, editing guidance, limitations, and source locator.

- Phrase inventory: every explicit Words to watch list in the supplied PDF, organized by its section.

- Rule register: all 18 Vale rules, their declared behavior, full YAML, and all fixture examples.

- Reconciliation: important differences between the prose guidance and the automated checks.

- Review checklist: an editorial process that addresses the underlying problems.

All examples labeled Illustrative example were written or adapted for this reference; their people, products, dates, and claims are not factual case studies. A suggested factual rewrite must be checked against evidence before publication. The rule fixtures are reproduced separately and identified as repository material. A source-authored fixture label records the author’s intended outcome, not a test result verified here.

## Source record

Primary text: Wikipedia contributors, Wikipedia:Signs of AI writing, user-supplied PDF printed 2 October 2026 at 2:12 AM. PDF page numbers below refer to its 47 physical pages, which match the printed page numbers 1 through 47. The user confirmed that the omitted pages 48 through 51 contain references.

Source page and contributor history: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing and https://en.wikipedia.org/w/index.php?title=Wikipedia:Signs_of_AI_writing&action=history . Wikipedia: Signs of AI writing snapshot, rather than a changing live page, governs this extraction. Model-era and research observations are reported as claims in that snapshot.

Repository: ammil-industries/vale-signs-of-ai-writing, commit 305467bafd0e491c4c00e0196ef551e64eefc9c4. Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/tree/305467bafd0e491c4c00e0196ef551e64eefc9c4 .

Attribution and reuse: the repository identifies its material as derived from Wikipedia and licensed CC BY-SA 4.0. This adapted reference and its reproduced repository material are provided under CC BY-SA 4.0: https://creativecommons.org/licenses/by-sa/4.0/ . Changes include regrouping, paraphrased explanations, original illustrative examples, editing advice, and technical commentary. Preserve attribution, identify further modifications, and observe ShareAlike for adaptations. No endorsement by Wikipedia, the repository maintainers, or McKinsey is implied.

## Coverage index

The catalog contains 92 entries. This includes overlapping subtypes, context, counterindicators, and repository-only checks; it is not a claim that the sources define 92 independent diagnostic signs.

- Content and argument: P001 to P008 (8 entries).

- Language and grammar: P009 to P015 (7 entries).

- Style and formatting: P016 to P027 (12 entries).

- Communication residue: P028 to P030 (3 entries).

- Markup and tool artifacts: P031 to P040 (10 entries).

- Citations and source checking: P041 to P047 (7 entries).

- Discussion comments: P048 to P054 (7 entries).

- Edit summaries: P055 to P060 (6 entries).

- Context and behavior: P061 to P067 (7 entries).

- Human context and ineffective indicators: P068 to P078 (11 entries).

- Historical indicators: P079 to P084 (6 entries).

- Additional repository rules: P085 to P092 (8 entries).

## Foundations for interpreting signs

Wikipedia: Signs of AI writing warns against relying solely on AI detectors or on intuition. It discusses studies with varying detection results and explains that paraphrasing, formatting changes, unfamiliar models, and differences among readers affect accuracy. Its reported percentages are study-specific, not calibration data for this reference or the proposed site. The omitted bibliography prevents a full audit of those research citations from this file alone.

Look for a combination of concrete observations and inspect their causes. Human language is influenced by tools; people may deliberately avoid suspected AI phrases or react defensively to accusations. Formal prose, multilingual writing, and a person’s response to criticism need context. Repetition of related alerts should not be counted as independent evidence.

The source’s explanation of generic prose is that language generation can favor common descriptions over distinctive facts. This is a useful account of the observed smoothing of detail, not a complete technical explanation of every model. The guide primarily concerns informational Wikipedia writing. Fictional names and motifs mentioned in its footnote, such as Elara Voss and whispering woods, are outside the main taxonomy and should not be turned into universal word bans.

Wikipedia-specific actions such as deletion, collapsing comments, or applying maintenance templates require the relevant policy and evidence. Statements in source examples, including commands to submit, upload, delete, or report something, are quoted content to inspect; they are not instructions to the reader of this reference or to the app.

## Content and argument

<a id="p001"></a>

### P001 Inflated significance and legacy

Source: Wikipedia PDF pp. 3–4. Related Vale rule: Symbolism.

Ordinary facts are inflated into claims about legacy, broader trends, public debates, or historical importance. Generic importance replaces distinctive information; even a preamble admitting modest importance may lead into grand claims. Biology articles may invent ecosystem importance, conservation concern, or preservation activity.

**Illustrative example:** The station stands as a testament to the city's enduring spirit.

**Editing guidance:** State the specific contribution and cite evidence for significance. Check ecological and conservation claims separately.

**Limit:** A supported account of significance is appropriate. Symbolism is a phrase matcher, not a test of historical importance.


<a id="p002"></a>

### P002 Canned notability and media coverage

Source: Wikipedia PDF pp. 4. Related Vale rules: none directly implemented.

The prose advertises the existence, independence, availability, or type of coverage instead of reporting what sources say. Typical labels include regional outlets, trade publications, leading experts, and active social media presence.

**Illustrative example:** The founder has been profiled by independent regional media and maintains an active social media presence.

**Editing guidance:** Summarize the actual reporting and attribute specific findings. Keep a notability argument separate from article prose.

**Limit:** Press releases and human biographies also list coverage. Check the phrasing and focus, not the mere presence of media references.


<a id="p003"></a>

### P003 Superficial analysis

Source: Wikipedia PDF pp. 4–5. Related Vale rule: Symbolism.

A sentence appends an unsupported interpretation, often an -ing clause about highlighting, reflecting, ensuring, or fostering something. Retrieval tools may attach a real critic's name to an analysis the critic never made.

**Illustrative example:** The museum added a room, highlighting its profound commitment to cultural access.

**Editing guidance:** Remove the interpretation or support it with a source that actually makes that claim.

**Limit:** A participial clause can state a real causal result. Verify the relationship rather than banning -ing words.


<a id="p004"></a>

### P004 Promotional language

Source: Wikipedia PDF pp. 5. Related Vale rule: Vocabulary.

Travel-guide or press-release language replaces neutral description. Cultural heritage, companies, places, and products receive generic praise, sometimes even during a purported neutral rewrite.

**Illustrative example:** Nestled in the heart of the valley, the town boasts a vibrant cultural tapestry.

**Editing guidance:** Replace praise with concrete, relevant facts. Compare the original and revised text for newly introduced promotion.

**Limit:** Human advertising also uses these phrases. Older model output may be more overtly superlative than newer output.


<a id="p005"></a>

### P005 Vague connections and associations

Source: Wikipedia PDF pp. 6. Related Vale rules: none directly implemented.

The text says a person is connected with, associated with, or linked to an activity instead of naming the actual role or relationship. Qualifiers such as widely associated can compound the vagueness.

**Illustrative example:** In 2017, Mara was associated with leadership at the institute.

**Editing guidance:** Name the verified role and dates: for example, Mara directed the institute in 2017, if the source establishes that.

**Limit:** Use qualified wording when the evidence really is uncertain; do not turn a loose association into an invented position.


<a id="p006"></a>

### P006 Vague attribution and exaggerated consensus

Source: Wikipedia PDF pp. 6–7. Related Vale rules: none directly implemented.

Unnamed experts, observers, industry reports, or critics supposedly support a claim. One or two sources are inflated into broad agreement; a complete list is introduced as if it were only a sample.

**Illustrative example:** Experts agree that the project transformed education.

**Editing guidance:** Identify who said what, how many sources support it, and whether the claim represents opinion or evidence.

**Limit:** Some generalizations are well supported. A plural attribution needs plural evidence; such as is misleading only when it implies unsupported additional examples.


<a id="p007"></a>

### P007 Formulaic challenges and future prospects

Source: Wikipedia PDF pp. 7. Related Vale rules: none directly implemented.

A rigid ending announces challenges despite preceding praise, then predicts a positive future or lists vague initiatives. The structure may be split into Challenges and Future Prospects sections.

**Illustrative example:** Despite its remarkable success, the center faces challenges. Continued innovation promises a bright future.

**Editing guidance:** Describe documented constraints and actual plans, or remove the speculative ending.

**Limit:** A substantive discussion of challenges is useful. The sign is the repeated optimistic template, not the word challenges.


<a id="p008"></a>

### P008 Awards and recognition headings

Source: Wikipedia PDF pp. 7–8. Related Vale rules: none directly implemented.

A repeated Awards and recognition or Recognition section emphasizes acclaim. Paired X and Y headings can reinforce an outline built around vague prestige.

**Illustrative example:** Awards and recognition: The firm has earned widespread recognition for excellence.

**Editing guidance:** List verified awards with the awarding body and date where relevant; omit empty acclaim.

**Limit:** Human biographies routinely need awards sections. The heading alone is weak evidence.


## Language and grammar

<a id="p009"></a>

### P009 Dense clusters of characteristic vocabulary

Source: Wikipedia PDF pp. 8–9. Related Vale rule: Vocabulary.

Many characteristic words recur together across a passage. Wikipedia: Signs of AI writing distinguishes specific overused words from all formal language and notes that vocabulary changes by model and period.

**Illustrative example:** Additionally, the initiative underscores a pivotal interplay within a vibrant landscape.

**Editing guidance:** Use the most precise ordinary wording, preserve technical meaning, and inspect the whole passage for repeated patterns.

**Limit:** A single word proves nothing. Literal tapestry or underscore may be exact. Do not treat synonyms as equally diagnostic by association.

**Additional examples:**

- **Thoughtful as a rating:** The rollback note is thoughtful about operator load.

Source records: S22 and S23; supplied variants merged into this entry.


<a id="p010"></a>

### P010 Avoiding simple is and has constructions

Source: Wikipedia PDF pp. 9–10. Related Vale rules: Symbolism, Vocabulary.

Straightforward identity or possession is expressed with serves as, functions as, holds the distinction, boasts, features, or offers. Refers to can incorrectly turn a subject into a discussion of its name.

**Illustrative example:** The building serves as a library and boasts four reading rooms.

**Editing guidance:** Prefer The building is a library with four reading rooms when that is the intended meaning.

**Limit:** Serves as can accurately describe a temporary function. Has in a perfect tense is different from has meaning possesses.


<a id="p011"></a>

### P011 Negative parallelism adding another quality

Source: Wikipedia PDF pp. 10–11. Related Vale rules: none directly implemented.

Not only X but Y and not just X it is Y imply an incomplete reader assumption and add rhetorical emphasis. The contrast may stretch across sentences.

**Illustrative example:** The archive is not just a collection; it is a gateway to the past.

**Editing guidance:** State the substantive point directly unless the contrast answers a real question.

**Limit:** This is common in human persuasion and explanations. Evaluate frequency and whether the correction is needed.


<a id="p012"></a>

### P012 Negative parallelism replacing a quality

Source: Wikipedia PDF pp. 11. Related Vale rules: none directly implemented.

It is not X it is Y or no X no Y just Z rejects an imagined description before asserting the preferred one.

**Illustrative example:** This is not a building. It is a movement.

**Editing guidance:** Name the actual distinction and its evidence, or remove the rhetorical rejection.

**Limit:** A corrective contrast can be essential when a real misconception exists.

**Additional examples:**

- **More-than residual contrast:** The depot is more than a warehouse. It is the only cross-dock in the state.
- **Instead-it reversal:** The panel did not expand. Instead it reloaded the same view.

Source records: S22 and S23; supplied variants merged into this entry.


<a id="p013"></a>

### P013 Reversed negative parallelism

Source: Wikipedia PDF pp. 11. Related Vale rules: none directly implemented.

Y rather than X creates the same corrective framing in reverse; Wikipedia: Signs of AI writing associates this especially, but not exclusively, with Grok output.

**Illustrative example:** The policy prioritizes practical consolidation rather than ideological purity.

**Editing guidance:** Retain the comparison only if both alternatives are relevant and supported.

**Limit:** Rather than is normal grammar. The model association is an observation in Wikipedia: Signs of AI writing, not an authorship test.

**Additional examples:**

- **Less-like, more-like:** The outage was less like a crash and more like a slow leak.

Source records: S22 and S23; supplied variants merged into this entry.


<a id="p014"></a>

### P014 Treating broad article titles as proper nouns

Source: Wikipedia PDF pp. 11. Related Vale rules: none directly implemented.

A list or broad topic title is defined as if it names a single independent entity, producing an unnatural lead.

**Illustrative example:** List of Coastal Bridges is an important collection that connects communities.

**Editing guidance:** Introduce the actual topic naturally: This list covers bridges along the coast, if that is its scope.

**Limit:** Some titles can appear naturally in a lead; the defect is artificial reification of the title.


<a id="p015"></a>

### P015 Repetitive groups of three

Source: Wikipedia PDF pp. 12. Related Vale rule: Lists.

Adjectives, phrases, or examples repeatedly arrive in threes, making thin analysis appear comprehensive. The pattern can be conspicuous in short edit summaries.

**Illustrative example:** The program promotes clarity, confidence, and connection through learning, leadership, and legacy.

**Editing guidance:** Keep the items that the evidence requires; vary structure according to meaning.

**Limit:** Three real categories can be the right structure. The repository Lists rule detects ordered first-second-third language, not this broader rhetorical pattern.


## Style and formatting

<a id="p016"></a>

### P016 Redundant title heading

Source: Wikipedia PDF pp. 12–13. Related Vale rules: none directly implemented.

The article repeats its own title as a heading above its content, as if the writer did not account for the platform's existing title.

**Illustrative example:** A page already titled Harbor Museum begins with another Harbor Museum heading.

**Editing guidance:** Remove the duplicate in a platform that already supplies a title.

**Limit:** A standalone document often needs an explicit title. This sign is platform dependent.


<a id="p017"></a>

### P017 Title case headings

Source: Wikipedia PDF pp. 13. Related Vale rules: none directly implemented.

Main words in section headings are capitalized systematically, contrary to Wikipedia's usual sentence-case conventions.

**Illustrative example:** History And Cultural Significance

**Editing guidance:** Use the capitalization convention of the destination publication.

**Limit:** Title case is normal in many publications and is not generally incorrect.


<a id="p018"></a>

### P018 Headings containing only other headings

Source: Wikipedia PDF pp. 13–14. Related Vale rules: none directly implemented.

A parent heading has no introductory text and immediately leads to another heading, creating a skeletal outline.

**Illustrative example:** Programming is immediately followed by Children's series, with no intervening text.

**Editing guidance:** Simplify the hierarchy or add useful context where readers need it.

**Limit:** Some reference manuals intentionally use container headings. An empty parent is not an authorship test.


<a id="p019"></a>

### P019 Mechanical boldface

Source: Wikipedia PDF pp. 14. Related Vale rules: none directly implemented.

Keywords or selected phrases are repeatedly bolded in a key-takeaways style unrelated to the destination's conventions.

**Illustrative example:** Every occurrence of debt financing, assets, and cash flow is bolded in an encyclopedia paragraph.

**Editing guidance:** Use emphasis sparingly and according to the publication's style.

**Limit:** Training materials and business slides may use boldface appropriately. Newer models may be instructed to avoid it.


<a id="p020"></a>

### P020 Inline header vertical lists

Source: Wikipedia PDF pp. 14–15. Related Vale rules: none directly implemented.

Each item begins with a short bold label followed by a colon and a description. Variants omit the colon, use literal bullets or explicit numbers in wikitext, or lose line breaks after pasting.

**Illustrative example:** Benefits: Faster processing. Challenges: Limited access. Outlook: Continued growth.

**Editing guidance:** Choose prose or a list based on the information, and use the platform's real list syntax.

**Limit:** A glossary or scannable reference can legitimately use labeled lists. Bold Keep or Delete votes in Wikipedia discussions are a separate convention.


<a id="p021"></a>

### P021 Formulaic em dash overuse

Source: Wikipedia PDF pp. 15–16. Related Vale rules: none directly implemented.

Dashes repeatedly add emphatic asides or contrasts, often surrounded by spaces. Wikipedia: Signs of AI writing marks this as potentially historical and cites model and genre differences.

**Illustrative example:** The center expanded — a bold step forward — reshaping its future.

**Editing guidance:** Keep punctuation that clarifies the sentence; reduce repeated rhetorical interruptions when they obscure the claim.

**Limit:** Professional writers use dashes. Wikipedia: Signs of AI writing reports that contemporary models do not uniformly overuse them; this is weak evidence alone.


<a id="p022"></a>

### P022 Emoji as structural decoration

Source: Wikipedia PDF pp. 16. Related Vale rules: none directly implemented.

Emoji decorate headings, bullets, talk-page comments, or edit summaries rather than adding substantive information.

**Illustrative example:** A rocket emoji precedes Future prospects in an encyclopedia contribution.

**Editing guidance:** Remove decorative symbols where the destination's style excludes them.

**Limit:** Emoji are ordinary in informal communication. Wikipedia: Signs of AI writing describes this as less common in recent output.


<a id="p023"></a>

### P023 Unnecessary or malformed tables

Source: Wikipedia PDF pp. 16. Related Vale rules: none directly implemented.

Small tables repeat information better expressed as prose or an infobox. Markdown table syntax may be inserted into a wikitable and render incorrectly.

**Illustrative example:** A two-row table says Name: Harbor Center and Type: Museum, surrounded by broken pipe syntax.

**Editing guidance:** Use a table for meaningful comparisons; use prose for a simple fact and validate markup.

**Limit:** Tables are appropriate for genuinely parallel data. Minimal formatting alone is not evidence.


<a id="p024"></a>

### P024 Curly quotes and apostrophes

Source: Wikipedia PDF pp. 16–17. Related Vale rules: none directly implemented.

Directional quotes and apostrophes, or inconsistent mixing of straight and curly forms, may be present in copied output.

**Illustrative example:** A paragraph mixes straight double quotes with curly apostrophes in contractions.

**Editing guidance:** Normalize typography only if required by house style and preserve quotations accurately.

**Limit:** Word, operating systems, citation tools, and professional typesetting routinely produce curly quotes. Wikipedia: Signs of AI writing says model behavior differs.


<a id="p025"></a>

### P025 Skipped heading levels

Source: Wikipedia PDF pp. 17. Related Vale rules: none directly implemented.

Sections begin at level 3 rather than level 2, possibly during Markdown-to-wikitext conversion.

**Illustrative example:** The first article section uses === History === instead of == History ==.

**Editing guidance:** Restore a logical heading hierarchy and preview the rendered page.

**Limit:** People also make hierarchy errors. Judge the actual document structure.


<a id="p026"></a>

### P026 Repeated level 1 headings

Source: Wikipedia PDF pp. 17. Related Vale rules: none directly implemented.

Article-body sections use top-level headings normally reserved for the page title in MediaWiki.

**Illustrative example:** An article body repeatedly uses = History = and = Sources =.

**Editing guidance:** Use the destination's section levels and maintain one coherent hierarchy.

**Limit:** Level 1 can be valid elsewhere. This observation is about Wikipedia formatting.


<a id="p027"></a>

### P027 Thematic breaks between sections

Source: Wikipedia PDF pp. 17. Related Vale rules: none directly implemented.

Horizontal separators are inserted mechanically between sections, often reflecting a Markdown response style.

**Illustrative example:** Every section ends with ---- before the next heading.

**Editing guidance:** Let headings and spacing separate content unless a rule has a specific purpose.

**Limit:** Rules are legitimate design elements in other contexts and do not establish provenance.


## Communication residue

<a id="p028"></a>

### P028 Chatbot correspondence inside the content

Source: Wikipedia PDF pp. 18–19. Related Vale rule: ChatbotCommunication.

Replies, offers to continue, praise, submission advice, or user-facing instructions are pasted into article text or HTML comments. The output may discuss Wikipedia conventions instead of being article content.

**Illustrative example:** Certainly! Here is your draft. Delete this note before submitting.

**Editing guidance:** Separate the deliverable from correspondence; inspect comments and verify any substantive advice before using it.

**Limit:** A human may quote a chatbot as evidence. Ordinary courteous language in an actual conversation is not itself a defect.


<a id="p029"></a>

### P029 Knowledge and source availability disclaimers

Source: Wikipedia PDF pp. 19–20. Related Vale rule: KnowledgeCutoff.

Text refers to training cutoffs, unavailable search results, sparse documentation, or recommended source use. Failure to find information can become an unsupported claim that information is private or nonexistent, followed by speculation.

**Illustrative example:** Details are not publicly available, likely because she maintains a low profile.

**Editing guidance:** Describe the specific evidence gap without inventing its cause. Verify the claim or remove the speculation.

**Limit:** A carefully scoped limitation statement is good practice. The repository detects older cutoff phrases and misses many retrieval-era forms.


<a id="p030"></a>

### P030 Unfilled placeholders and template instructions

Source: Wikipedia PDF pp. 20–21. Related Vale rule: Placeholders.

Names, dates, citation fields, links, and infobox content are left as prompts to the user. Examples include [YEAR], 2025-xx-xx, and comments asking for a photo or a source.

**Illustrative example:** The organization was founded in [YEAR]. Access date: 2025-xx-xx.

**Editing guidance:** Complete fields from evidence, remove inapplicable placeholders, and check embedded comments.

**Limit:** Legitimate article templates contain boilerplate instructions. Compare an infobox comment with the standard template before attributing it to AI.


## Markup and tool artifacts

<a id="p031"></a>

### P031 Markdown pasted into wikitext

Source: Wikipedia PDF pp. 21–24. Related Vale rules: none directly implemented.

Markdown headings, links, emphasis, breaks, and numbered lists are pasted into MediaWiki. Fenced wikitext blocks mixed with faulty wiki syntax are more distinctive than Markdown by itself.

**Illustrative example:** ## History followed by **Background** and a fenced wikitext block in an article.

**Editing guidance:** Translate to the destination's markup and preview the result; inspect the claims as well as syntax.

**Limit:** Markdown is widely used by humans. A newcomer may reasonably assume a wiki supports it.


<a id="p032"></a>

### P032 Broken wikitext and submission code

Source: Wikipedia PDF pp. 24. Related Vale rules: none directly implemented.

Templates or article-submission markup contain garbled syntax, sometimes with implausible date fragments or malformed categories.

**Illustrative example:** An AfC category contains a long concatenation of timestamps and error tokens.

**Editing guidance:** Validate the template against its documented syntax and repair the actual submission state.

**Limit:** Bad markup can come from human errors or tools. Not every unexplained HTML fragment is characteristic of AI.


<a id="p033"></a>

### P033 ChatGPT internal citation and image markup

Source: Wikipedia PDF pp. 24–25. Related Vale rule: ChatGPTArtifacts.

Internal reference identifiers leak into prose: contentReference, oaicite, oai_citation, Example+1, turn0search0, shortened index markers, turn0image identifiers, turn0news or turn1file references, and attribution JSON with attributableIndex.

**Illustrative example:** The result was confirmed :contentReference[oaicite:0]{index=0}.

**Editing guidance:** Recover and verify the underlying source, then create a valid citation. Treat the artifact as evidence of a tool-mediated passage, not a reason to skip factual review.

**Limit:** Quoted examples and technical documentation can contain these strings intentionally. The repository covers only part of this family.


<a id="p034"></a>

### P034 Gemini citation and span markup

Source: Wikipedia PDF pp. 25–26. Related Vale rules: none directly implemented.

Copied output includes [cite: 1], combined citation lists such as [cite: 3, 12, 13], or [span_1](start_span) and corresponding end_span tokens.

**Illustrative example:** The harbor opened in 1904.[cite: 3, 12]

**Editing guidance:** Find the actual source and replace the tool marker with an ordinary citation.

**Limit:** Wikipedia: Signs of AI writing associates these forms with Gemini; literal examples in documentation are not accidental artifacts.


<a id="p035"></a>

### P035 Grok citation cards

Source: Wikipedia PDF pp. 26. Related Vale rules: none directly implemented.

XML-like grok_card tags or grok_render_citation_card_json appear where rendered citations should be.

**Illustrative example:** A claim ends with grok_render_citation_card_json instead of a usable reference.

**Editing guidance:** Inspect the source behind the card and replace the exposed renderer syntax.

**Limit:** The tag indicates a tool format, not that every surrounding sentence was generated.


<a id="p036"></a>

### P036 DeepSeek bracket and dagger references

Source: Wikipedia PDF pp. 26–27. Related Vale rules: none directly implemented.

Reference-like strings combine lenticular brackets, a number, a dagger, and line ranges. Wikipedia: Signs of AI writing associates this format with DeepSeek and derivatives.

**Illustrative example:** A claim is followed by 【85†L261-269】.

**Editing guidance:** Resolve the cited source and relevant passage; replace internal locators with usable references.

**Limit:** Bracketed notation can be deliberately quoted. Model attribution in Wikipedia: Signs of AI writing is observational.


<a id="p037"></a>

### P037 Perplexity attachment and web markers

Source: Wikipedia PDF pp. 27. Related Vale rules: none directly implemented.

Output exposes [attached_file:1], [web:1], or an S3 citation URL containing ppl-ai-file-upload. Wikipedia: Signs of AI writing qualifies the platform association for the bracketed forms.

**Illustrative example:** The report describes the merger.[attached_file:1]

**Editing guidance:** Use the original document and a stable, authorized reference rather than an internal upload location.

**Limit:** Do not infer public availability from an uploaded file URL, and do not infer authorship of all text from one marker.


<a id="p038"></a>

### P038 Unclassified writing block delimiters

Source: Wikipedia PDF pp. 27. Related Vale rules: none directly implemented.

A document includes :::writing{variant="document" id="12345"} and sometimes closing triple colons; Wikipedia: Signs of AI writing leaves the origin unclassified.

**Illustrative example:** :::writing{variant="document" id="12345"} precedes an article.

**Editing guidance:** Remove interface wrappers after checking the enclosed content; preserve them when discussing the format itself.

**Limit:** Do not assign a vendor that the source does not establish.


<a id="p039"></a>

### P039 Nonexistent or misplaced categories

Source: Wikipedia PDF pp. 27–28. Related Vale rules: none directly implemented.

Categories are invented, obsolete, redirects, or broken by missing punctuation and words. Earlier revisions may retain evidence that later repairs removed.

**Illustrative example:** [[Category:American hip hop musicians]] where the intended category requires hip-hop.

**Editing guidance:** Check that the category exists and fits the subject; inspect revision history if relevant.

**Limit:** New or returning editors make the same mistakes. A red link is corroborating context at most.


<a id="p040"></a>

### P040 Invented templates and parameters

Source: Wikipedia PDF pp. 28–29. Related Vale rules: none directly implemented.

Plausible-sounding infoboxes do not exist; unsupported parameters silently do nothing; obsolete templates may be reused.

**Illustrative example:** {{Infobox ancient population}} is used with invented field names.

**Editing guidance:** Check template existence and parameter documentation, then preview the result.

**Limit:** Template mistakes and old examples can be human. Wikipedia: Signs of AI writing's lang-?? example is a historical observation, not a current template inventory.


## Citations and source checking

<a id="p041"></a>

### P041 Multiple apparently fabricated external links

Source: Wikipedia PDF pp. 29. Related Vale rules: none directly implemented.

Several references in a new contribution lead to nonexistent pages or sites, with no archive evidence that the pages existed.

**Illustrative example:** Three citations use plausible article slugs, but none resolve or appear in archives.

**Editing guidance:** Check publisher search, archives, alternate access, and metadata before concluding that a source is fabricated.

**Limit:** Links decay, institutional access differs, scripts alter URLs, and copying can truncate them.


<a id="p042"></a>

### P042 Invalid DOI or ISBN identifiers

Source: Wikipedia PDF pp. 29–30. Related Vale rules: none directly implemented.

A DOI cannot be resolved or an ISBN fails its checksum, suggesting an incorrect or invented reference.

**Illustrative example:** A book reference has an ISBN whose check digit fails validation.

**Editing guidance:** Validate the identifier and match it to the cited work; correct from a reliable record.

**Limit:** A typo can cause the same failure. A valid checksum only verifies identifier structure, not the cited claim.


<a id="p043"></a>

### P043 Real identifiers attached to the wrong work

Source: Wikipedia PDF pp. 30. Related Vale rules: none directly implemented.

A DOI or other identifier resolves, but its title, authors, date, or subject differ from the cited reference. Apparent citation precision masks fabrication.

**Illustrative example:** A claimed physics paper links to an unrelated medical article.

**Editing guidance:** Compare full metadata and read the supporting passage. Check chronological impossibilities as well.

**Limit:** Wikipedia: Signs of AI writing notes historical VisualEditor PMID errors that predate these AI patterns; a mismatch is a citation defect, not automatic proof of AI.


<a id="p044"></a>

### P044 Book references without usable locators

Source: Wikipedia PDF pp. 30–31. Related Vale rules: none directly implemented.

A long book is cited without the page or section needed to verify a specific statement; a URL may also be absent. Plausible books can still fail to support the claim.

**Illustrative example:** A precise technical assertion cites a 700-page textbook with no page reference.

**Editing guidance:** Find the passage and provide a page, chapter, or other suitable locator.

**Limit:** Print books need not have URLs. Missing page numbers are common human citation weaknesses.


<a id="p045"></a>

### P045 Incorrect or unconventional reference use

Source: Wikipedia PDF pp. 31–32. Related Vale rule: CitationArtifacts.

References are mechanically appended after every sentence, reused with invalid syntax, or accompanied by footnote return arrows such as ↩ and [↩].

**Illustrative example:** A sentence ends with {{cite web...}}<sup>[3]</sup> and an extra return arrow.

**Editing guidance:** Use the publication's citation mechanism and verify that each source supports its claim.

**Limit:** Return arrows are normal footnote navigation on many websites. Their presence in pasted text is context dependent.


<a id="p046"></a>

### P046 AI service tracking parameters

Source: Wikipedia PDF pp. 32. Related Vale rule: UTMParameters.

Source URLs contain utm_source=chatgpt.com, utm_source=openai, utm_source=copilot.com, or referrer=grok.com. This can indicate how a source was found.

**Illustrative example:** https://example.org/report?utm_source=chatgpt.com

**Editing guidance:** Verify the destination and review revision history to distinguish citation assistance from generated prose.

**Limit:** Wikipedia: Signs of AI writing explicitly says a tracking parameter does not prove the writing was generated. Indexed or recirculated URLs can carry it onward.


<a id="p047"></a>

### P047 Unused or undefined named references

Source: Wikipedia PDF pp. 32–33. Related Vale rules: none directly implemented.

A reference is defined in a references section but never used inline, or an inline named reference lacks a definition.

**Illustrative example:** <ref name="report" /> appears without a matching definition.

**Editing guidance:** Pair definitions and uses, remove unused entries where appropriate, and preview citation errors.

**Limit:** Copying part of an article can create the same mismatch.


## Discussion comments

<a id="p048"></a>

### P048 Misquoted policy and invented shortcuts

Source: Wikipedia PDF pp. 33. Related Vale rules: none directly implemented.

A comment cites nonexistent project shortcuts or misstates a policy as authoritative support.

**Illustrative example:** The comment invokes WP:SOURCECERTAINTY as if it were an established rule.

**Editing guidance:** Open the actual policy and quote its relevant meaning accurately.

**Limit:** People misremember policy. Check the substance before making claims about the writer.


<a id="p049"></a>

### P049 Transcluding banners while mentioning them

Source: Wikipedia PDF pp. 33. Related Vale rules: none directly implemented.

A comment renders a maintenance banner when it intended merely to refer to the template.

**Illustrative example:** A discussion inserts {{citation needed}} as a live banner instead of naming the template.

**Editing guidance:** Use appropriate escaped or linked template references when discussing markup.

**Limit:** New editors can misunderstand transclusion without using AI.


<a id="p050"></a>

### P050 Overstructured discussion messages

Source: Wikipedia PDF pp. 33. Related Vale rules: none directly implemented.

Long comments are divided into multiple titled sections, sometimes using Markdown or article-level headings.

**Illustrative example:** A brief dispute receives Background, Policy Analysis, Recommendations, and Conclusion sections.

**Editing guidance:** Use the amount of structure the discussion needs; state the specific issue and evidence.

**Limit:** Complex discussions sometimes benefit from headings and detail.


<a id="p051"></a>

### P051 Assurances about AI use and compliance

Source: Wikipedia PDF pp. 33. Related Vale rules: none directly implemented.

The response downplays AI involvement by listing policies supposedly satisfied or insisting the words represent the writer's own thoughts.

**Illustrative example:** The text reflects my views and fully adheres to neutrality, verifiability, and all Wikipedia standards.

**Editing guidance:** Explain the actual contribution and evidence; follow applicable disclosure practices.

**Limit:** An assurance is neither proof of innocence nor proof of AI. Do not punish a person simply for responding to concern.


<a id="p052"></a>

### P052 Formulaic requests for corrective guidance

Source: Wikipedia PDF pp. 33. Related Vale rules: none directly implemented.

A defensive reply asks critics to specify exactly what must be improved, often within a longer canned response.

**Illustrative example:** Please identify the precise changes needed to bring my contribution into full compliance.

**Editing guidance:** Ask or answer a concrete editorial question tied to the disputed content.

**Limit:** Requests for help are normal and should be encouraged; this is weak contextual evidence only.


<a id="p053"></a>

### P053 Dismissing provenance concerns as speculation

Source: Wikipedia PDF pp. 33. Related Vale rules: none directly implemented.

The comment characterizes concerns as unsupported speculation and demands concrete proof, often using a recurring defensive formula.

**Illustrative example:** These allegations rely on speculation rather than concrete evidence.

**Editing guidance:** Discuss observable source or content problems and state the limits of any inference.

**Limit:** Writers can reasonably dispute false accusations. The stance alone cannot establish AI use.


<a id="p054"></a>

### P054 Redirecting discussion away from provenance

Source: Wikipedia PDF pp. 33–34. Related Vale rule: ChatbotCommunication.

A response urges reviewers to focus exclusively on improving content rather than whether AI helped create it. Wikipedia: Signs of AI writing also lists formal salutation formulas used in canned messages.

**Illustrative example:** Let us focus on improving the article rather than its origin. Dear Wikipedia Editorial Team, I hope this message finds you well.

**Editing guidance:** Address the actual editing issue and any applicable provenance requirement without using a script.

**Limit:** Content-focused discussion and polite openings are legitimate. Evaluate the surrounding pattern.


## Edit summaries

<a id="p055"></a>

### P055 Templated general edit summaries

Source: Wikipedia PDF pp. 34–35. Related Vale rules: none directly implemented.

Summaries follow repetitive formulas; older ones may include first-person explanation, Markdown, emoji, or chatbot preambles, while newer ones describe an elaborate procedure.

**Illustrative example:** Concise edit summary: Improved clarity, flow, readability, and encyclopedic style.

**Editing guidance:** Describe the concrete change and its purpose in proportion to the edit.

**Limit:** Long or formal summaries can be human. Common local abbreviations and a consistent editing history provide useful context.


<a id="p056"></a>

### P056 Canned policy compliance assurances

Source: Wikipedia PDF pp. 35–36. Related Vale rules: none directly implemented.

The summary stacks broad claims about neutrality, verifiability, attribution, or compliance, sometimes explaining that these are Wikipedia rules.

**Illustrative example:** Refined the article to ensure full compliance with Wikipedia standards for neutrality and clarity.

**Editing guidance:** Name the specific change and relevant policy only when useful.

**Limit:** A concise policy-specific explanation is normal. Generic assurances do not demonstrate compliance.


<a id="p057"></a>

### P057 Emphasizing preserved content and avoided changes

Source: Wikipedia PDF pp. 36–37. Related Vale rules: none directly implemented.

The summary describes what was retained, preserved, avoided, or deliberately left untouched, echoing constraints in a possible editing prompt.

**Illustrative example:** Improved neutrality while preserving structure, references, and all technical details.

**Editing guidance:** Explain meaningful constraints only when they help a reviewer understand the edit.

**Limit:** Preservation is genuinely important in some revisions. This pattern is contextual, not inherently improper.


<a id="p058"></a>

### P058 Emphasizing the existence of sources

Source: Wikipedia PDF pp. 37–38. Related Vale rules: none directly implemented.

The summary stresses sourced, verified, independent, secondary, or peer-reviewed content without saying what information was added.

**Illustrative example:** Expanded the article with verified information and independent sources.

**Editing guidance:** Describe the new finding or fact and cite it properly.

**Limit:** Adding or repairing references can itself be the entire edit and should then be stated plainly.


<a id="p059"></a>

### P059 Excessive markup implementation detail

Source: Wikipedia PDF pp. 38. Related Vale rules: none directly implemented.

Summaries itemize template names, parameter keys, punctuation, inline citations, and internal links at unusual length.

**Illustrative example:** Corrected image_size, integrated template fields, and refined inline-reference parameter syntax.

**Editing guidance:** Include only technical details needed to review the change.

**Limit:** Experienced technical editors may legitimately describe exact parameters. Compare detail with the edit's purpose.


<a id="p060"></a>

### P060 Formulaic references to AfC feedback

Source: Wikipedia PDF pp. 38. Related Vale rules: none directly implemented.

After a draft decline, the summary announces that it addresses reviewer feedback without explaining the actual correction.

**Illustrative example:** Addressed reviewer feedback by improving sourcing, formatting, and neutrality.

**Editing guidance:** State which concern was resolved and what evidence or content changed.

**Limit:** Mentioning feedback is normal. The weak sign is the generic formula without useful specifics.


## Context and behavior

<a id="p061"></a>

### P061 Pronounced changes in writing style

Source: Wikipedia PDF pp. 39. Related Vale rules: none directly implemented.

Grammar, register, or English variety changes sharply relative to the writer's history, or changes track successive model styles. Wikipedia: Signs of AI writing gives American-English defaults as one possible mismatch.

**Illustrative example:** An editor's short informal posts suddenly become long, uniformly polished encyclopedia passages.

**Editing guidance:** Compare comparable genres and dated revisions; seek an ordinary explanation before inferring tool use.

**Limit:** Editing help, code switching, multilingual writing, collaboration, and deliberate improvement can all explain a shift.


<a id="p062"></a>

### P062 Submission statements in drafts

Source: Wikipedia PDF pp. 39–40. Related Vale rules: none directly implemented.

A draft includes a reviewer-facing statement declaring neutrality, source quality, notability, and policy compliance instead of letting the article and evidence demonstrate them.

**Illustrative example:** Reviewer note: This draft meets every biography and sourcing requirement.

**Editing guidance:** Keep submission communication separate from article prose and substantiate the actual criteria.

**Limit:** Do not treat the source's categorical deletion rhetoric as a general instruction. Apply the relevant review process and evidence.


<a id="p063"></a>

### P063 Preplaced maintenance and declined submission templates

Source: Wikipedia PDF pp. 40. Related Vale rules: none directly implemented.

A new draft already contains a blank declined-AfC state, or implausible maintenance or protection tags. History may show the creator inserted the state.

**Illustrative example:** The creator adds {{AfC submission|d}} and later asks why nobody supplied decline feedback.

**Editing guidance:** Inspect revision history and repair the template state using the proper workflow.

**Limit:** Some maintenance tags are valid on creation. Confirm who inserted the template and why.


<a id="p064"></a>

### P064 Canned user pages

Source: Wikipedia PDF pp. 40–41. Related Vale rules: none directly implemented.

User pages combine predictable welcome, About Me, interests, contributions, and Let's Connect sections, often with emoji, bold lists, or visible Markdown.

**Illustrative example:** Welcome To My User Page! About Me. My Contributions. Let's Connect!

**Editing guidance:** Use a personal description appropriate to the platform; inspect the combination of copied formatting and formulaic content.

**Limit:** Many people choose similar profile sections without AI.


<a id="p065"></a>

### P065 Permissions gaming as contextual evidence

Source: Wikipedia PDF pp. 41–42. Related Vale rules: none directly implemented.

An already-supported suspicion of permissions gaming can justify reviewing rapid generic rewrites on unrelated topics for AI assistance. The inference is explicitly one-way.

**Illustrative example:** An account known to be farming edit counts adds generic paragraphs to many unrelated pages.

**Editing guidance:** Review the actual edits and evidence of gaming separately.

**Limit:** Rapid AI-assisted contributions do not, by themselves, establish permissions gaming or malicious intent.


<a id="p066"></a>

### P066 Model and version differences

Source: Wikipedia PDF pp. 42. Related Vale rules: none directly implemented.

Models have different habitual styles, and these change over time. Wikipedia: Signs of AI writing compares broader-context language and verbosity across particular older versions.

**Illustrative example:** Two generated passages differ sharply in length and choice of stock phrases.

**Editing guidance:** Treat each pattern as conditional on period, model, prompt, and genre.

**Limit:** This is interpretive context, not a separate diagnostic rule or a reliable model classifier.

**Additional examples:**

- **Vanished em dash, new frame:** Dashes are gone, and the contrast moved into “more than an X, it is a Y.”

Source records: S22 and S23; supplied variants merged into this entry.


<a id="p067"></a>

### P067 Political and language-dependent content bias

Source: Wikipedia PDF pp. 42. Related Vale rules: none directly implemented.

Wikipedia: Signs of AI writing discusses research reporting pro-authoritarian tendencies, differences across response languages, and uneven criticism of governments. It attributes these to training and safety-related factors.

**Illustrative example:** A passage treats an official account as uncontested while omitting available critical reporting.

**Editing guidance:** Check source diversity, framing, omissions, and evidence directly.

**Limit:** Political bias occurs in human writing too. The research summarized in Wikipedia: Signs of AI writing is not a universal claim about all models or current versions.


## Human context and ineffective indicators

<a id="p068"></a>

### P068 Text predating public ChatGPT

Source: Wikipedia PDF pp. 42–43. Related Vale rules: none directly implemented.

Wikipedia: Signs of AI writing uses November 30, 2022 as a practical historical boundary for ordinary Wikipedia contributions. Revision tools can establish when a passage first appeared.

**Illustrative example:** A supposedly AI-like paragraph is verifiably present in a 2018 revision.

**Editing guidance:** Check the actual insertion date with revision history, Who Wrote That, or WikiBlame.

**Limit:** The source's claim that AI can be ruled out is too absolute in general: text-generation systems existed earlier. An early date strongly counters attribution to later chatbots.


<a id="p069"></a>

### P069 Explaining editorial choices

Source: Wikipedia PDF pp. 43. Related Vale rules: none directly implemented.

A writer can give a coherent account of a mistake, supply the real source, or explain how a bad URL arose.

**Illustrative example:** The editor identifies a transposed character and supplies the relevant passage from the correct article.

**Editing guidance:** Invite a concrete explanation and verify it against the evidence.

**Limit:** A good explanation supports a human-error account but is not an infallible authorship test.


<a id="p070"></a>

### P070 Ordinary human syntax

Source: Wikipedia PDF pp. 43. Related Vale rules: none directly implemented.

Wikipedia: Signs of AI writing lists simple is/has clauses; wrote, moved, used, tried, died; definitive statements; hedges such as perhaps and tends to; and isolated wordiness as relatively common in human Wikipedia prose.

**Illustrative example:** The report says there is a delay and that the team used a temporary pump.

**Editing guidance:** Write for meaning rather than removing every hedge, superlative, or ordinary phrase.

**Limit:** These are comparative observations in the source, not instructions to insert imperfections or proof that such sentences are human.


<a id="p071"></a>

### P071 Perfect grammar is ineffective evidence

Source: Wikipedia PDF pp. 43. Related Vale rules: none directly implemented.

Correct grammar alone does not distinguish AI from skilled or professionally edited writing.

**Illustrative example:** The article has no grammatical errors.

**Editing guidance:** Judge factual support and distinctive patterns, not proficiency itself.

**Limit:** A dramatic unexplained change in a comparable writing history is a different contextual question.


<a id="p072"></a>

### P072 Mixed casual and formal registers are ineffective evidence

Source: Wikipedia PDF pp. 43. Related Vale rules: none directly implemented.

A clinical and emotional or casual and formal mixture can reflect technical background, youth, personality, neurodivergence, or multiple editors.

**Illustrative example:** A technical explanation ends with a casual aside.

**Editing guidance:** Consider genre, authorship history, and collaboration before drawing an inference.

**Limit:** Do not use a person's communication style or possible neurodivergence as a proxy for AI use.


<a id="p073"></a>

### P073 Bland or robotic prose is ineffective evidence

Source: Wikipedia PDF pp. 43–44. Related Vale rules: none directly implemented.

A vague impression of blandness does not identify the more specific patterns described in Wikipedia: Signs of AI writing.

**Illustrative example:** The paragraph sounds dry to a reviewer.

**Editing guidance:** Name an observable content or language issue rather than relying on a feeling.

**Limit:** Generated writing can be positive and verbose; human reference prose can be deliberately plain.


<a id="p074"></a>

### P074 Formal or academic prose is ineffective evidence

Source: Wikipedia PDF pp. 44. Related Vale rules: none directly implemented.

The overuse of particular words does not generalize to every sophisticated word or academic register.

**Illustrative example:** An article uses technical vocabulary appropriate to its field.

**Editing guidance:** Check whether the terms are accurate and necessary.

**Limit:** Expert human writing can be formal, complex, and polished.


<a id="p075"></a>

### P075 An isolated transition is ineffective evidence

Source: Wikipedia PDF pp. 44. Related Vale rule: Transitions.

Words such as however or consequently occur routinely in human writing. Formulaic repetition of certain transitions is a different claim.

**Illustrative example:** However, the second trial failed.

**Editing guidance:** Keep a transition that accurately expresses the relationship.

**Limit:** The repository's Transitions rule flags individual matches; Wikipedia: Signs of AI writing explicitly warns against this inference in isolation.


<a id="p076"></a>

### P076 Missing sources are ineffective evidence

Source: Wikipedia PDF pp. 44. Related Vale rules: none directly implemented.

Unsourced Wikipedia content long predates LLMs, and modern generated text may include citations.

**Illustrative example:** A paragraph contains no references.

**Editing guidance:** Request or locate support for the claims regardless of provenance.

**Limit:** The presence of citations is no guarantee either; check their existence and relevance.


<a id="p077"></a>

### P077 Random broken markup is ineffective evidence

Source: Wikipedia PDF pp. 44. Related Vale rules: none directly implemented.

Unexpected spans, misplaced italic markers, or other odd syntax may come from browser extensions, translation tools, or VisualEditor rather than the listed AI artifacts.

**Illustrative example:** A misplaced italic marker splits the last letter of a book title.

**Editing guidance:** Inspect the editor/tool history and fix the rendering defect.

**Limit:** Distinguish a recognizable tool artifact from an arbitrary formatting error.


<a id="p078"></a>

### P078 Correct markup is ineffective evidence

Source: Wikipedia PDF pp. 44. Related Vale rules: none directly implemented.

Valid complex templates can result from a visual editor, previewing, or ordinary experience.

**Illustrative example:** A new editor submits a correctly formatted infobox.

**Editing guidance:** Assess content and source quality directly.

**Limit:** Correct formatting establishes neither human nor AI authorship.


## Historical indicators

<a id="p079"></a>

### P079 Didactic disclaimers

Source: Wikipedia PDF pp. 44–45. Related Vale rules: Narrative, Hedging.

Especially in the source's 2022–2024 period, text tells an imagined reader what is important to note, remember, or consider, often about safety, controversy, or differing jurisdictions.

**Illustrative example:** It is important to note that requirements may vary.

**Editing guidance:** State the actual limitation or difference and provide the relevant context.

**Limit:** An explicit qualification may be necessary. The historical status should remain visible in the app.


<a id="p080"></a>

### P080 Repetitive section summaries

Source: Wikipedia PDF pp. 45. Related Vale rules: none directly implemented.

Older long-form output ends sections by restating the same point, often under Conclusion or with In summary, In conclusion, or Overall.

**Illustrative example:** Overall, this demonstrates the importance of the topic already described.

**Editing guidance:** Keep a summary when it synthesizes something useful; remove mere repetition.

**Limit:** Human reports and teaching materials legitimately use conclusions.


<a id="p081"></a>

### P081 Prompt refusals and model self-identification

Source: Wikipedia PDF pp. 45–46. Related Vale rule: ChatbotCommunication.

A copied response apologizes, identifies itself as a language model, refuses a request, or offers an alternative task.

**Illustrative example:** As an AI language model, I cannot do that, but I can draft an outline.

**Editing guidance:** Exclude correspondence from the article and inspect any replacement content independently.

**Limit:** A quotation about AI behavior may intentionally contain this wording; historical frequency is not a current guarantee.


<a id="p082"></a>

### P082 Abrupt cutoffs

Source: Wikipedia PDF pp. 46. Related Vale rules: none directly implemented.

A response stops mid-thought, historically associated with output-length limits and a continue-generating interaction.

**Illustrative example:** The final paragraph ends: The remaining reasons include the

**Editing guidance:** Recover the missing source text or remove the incomplete claim after checking context.

**Limit:** Broken copying or an incomplete human draft can produce the same result; the source also mentions possible copying from copyrighted material.


<a id="p083"></a>

### P083 Old access dates in new citations

Source: Wikipedia PDF pp. 46. Related Vale rules: none directly implemented.

New contributions contain unexpectedly old access-date fields, sometimes repeated across references.

**Illustrative example:** A 2025 addition gives all references an access date in 2024.

**Editing guidance:** Check how the references were obtained and whether the dates are genuine.

**Limit:** Copied references, offline work, merges, and batch edits legitimately retain earlier dates.


<a id="p084"></a>

### P084 Elegant variation and forced synonyms

Source: Wikipedia PDF pp. 46–47. Related Vale rules: none directly implemented.

A passage repeatedly renames the same entity or idea, possibly reflecting older repetition penalties. Repeated meaning becomes obscured by surface variety.

**Illustrative example:** The laboratory becomes the facility, the scientific hub, and the research cornerstone within a short paragraph.

**Editing guidance:** Use stable names and precise references when readers need continuity.

**Limit:** Some educational traditions discourage repetition. Separate generation sessions may not show the pattern.


## Additional repository rules

<a id="p085"></a>

### P085 Generic aspect language

Source: Repository configuration; see the rule register. Related Vale rule: AspectOveruse.

AspectOveruse flags a fixed set of broad phrases: multifaceted, various aspects, different aspects, multiple aspects, key aspects, important aspects, various facets, and many dimensions.

**Illustrative example:** We need to examine the various aspects of the design.

**Editing guidance:** Name the actual components or questions when possible.

**Limit:** The rule triggers on existence, despite its overuse label. Some uses are accurate and helpful.


<a id="p086"></a>

### P086 Hedged enumeration

Source: Repository configuration; see the rule register. Related Vale rule: Enumeration.

Enumeration flags one of the most, among the most, some of the most, one of the first, among the earliest, and some of the earliest.

**Illustrative example:** The device was one of the first of its kind.

**Editing guidance:** Specify a supported comparison, scope, and date, or avoid the ranking.

**Limit:** Wikipedia: Signs of AI writing also describes some superlative and definitive constructions as relatively human-associated. A qualifier can prevent an overclaim.


<a id="p087"></a>

### P087 Repeated throat-clearing and certainty phrases

Source: Repository configuration; see the rule register. Related Vale rule: Hedging.

Hedging counts a fixed alternation of 15 phrases, mixing caveats with certainty assertions. Its configured maximum is two; the file does not explicitly set scope or ignorecase.

**Illustrative example:** It is worth noting the result. Clearly, it matters. Without a doubt, it will endure.

**Editing guidance:** Delete empty preambles, state uncertainty accurately, and avoid unsupported certainty.

**Limit:** The rule's name does not describe every token. Three case-matching listed occurrences exceed its configured maximum; runtime parsing and defaults still matter.


<a id="p088"></a>

### P088 Individual intensifiers

Source: Repository configuration; see the rule register. Related Vale rule: Intensifiers.

Intensifiers flags 12 tokens or phrases including notably, significantly, particularly, and highly significant.

**Illustrative example:** The performance was exceptionally strong.

**Editing guidance:** Replace unsupported emphasis with a measure or a precise description.

**Limit:** Significantly can be a technical statistical term. Wikipedia: Signs of AI writing does not endorse treating each intensifier as AI evidence.

**Additional examples:**

- **Every-single intensifier:** Every single retry hit the same dead host.
- **Enormously:** The queue grew enormously after the deploy.
- **Matters-enormously:** The ordering matters enormously for the replay.
- **An-enormous-amount:** The log holds an enormous amount of duplicate lines.
- **Remarkably:** The two builds are remarkably close.
- **Incredibly:** The lock wait is incredibly long on that shard.
- **Absolutely essential:** A second replica is absolutely essential for this write.
- **Immense:** The backlog is immense after the holiday batch.

Source records: S22 and S23; supplied variants merged into this entry.


<a id="p089"></a>

### P089 Selected passive-looking constructions

Source: Repository configuration; see the rule register. Related Vale rule: Passive.

Passive combines forms of be with eight words: founded, known, considered, established, recognized, created, regarded, developed. It explicitly ignores case.

**Illustrative example:** The system was developed by the team.

**Editing guidance:** Choose active or passive voice based on emphasis, agency, and clarity.

**Limit:** This is a limited pattern, not a full grammar parser. Passive voice is legitimate and is not a standalone sign of AI writing.


<a id="p090"></a>

### P090 Scare quotes after so called

Source: Repository configuration; see the rule register. Related Vale rule: ScareQuotes.

ScareQuotes matches so-called followed by a straight single- or double-quoted span. Its raw pattern can accept mismatched opening and closing quote types.

**Illustrative example:** The company uses a so-called 'innovative' approach.

**Editing guidance:** Explain the criticism and attribution directly, or retain accurately justified distancing.

**Limit:** Scare quotes can communicate skepticism legitimately. This pattern does not cover all quotation practices or curly quotation marks.


<a id="p091"></a>

### P091 Colons before introductory phrases

Source: Repository configuration; see the rule register. Related Vale rule: ColonOveruse.

ColonOveruse flags a colon before including, such as, for example, notably, specifically, or particularly. It has no frequency threshold.

**Illustrative example:** The service has benefits: including faster processing.

**Editing guidance:** Write The benefits include faster processing, or introduce a proper list after the colon.

**Limit:** This is a narrow construction check, not a count of colons or a general prohibition on them.


<a id="p092"></a>

### P092 Ordered sequence words in one paragraph

Source: Repository configuration; see the rule register. Related Vale rule: Lists.

Lists looks for first or firstly, then second or secondly, then third or thirdly in that order within a paragraph. It explicitly ignores case and requires separators after the first two words.

**Illustrative example:** First, gather material; second, prepare it; third, assemble the parts.

**Editing guidance:** Keep ordered instructions when the sequence matters; otherwise avoid a mechanical outline.

**Limit:** The rule is not a detector for every list, every three-item phrase, or words spread across separate paragraphs.


## PDF phrase inventory

These inventories preserve the named words and constructions in Wikipedia: Signs of AI writing’s watch lists. Slash notation indicates alternatives. Ellipses represent an open construction, not a regular expression. Their presence is a prompt for contextual review, not a prohibited-word list.

### Significance and legacy

Source: Wikipedia PDF p. 3.

stands/serves as; is a testament/reminder; a crucial/pivotal/vital/significant/key role/moment; underscores/highlights its importance/significance; reflects broader; symbolizing its ongoing/enduring/lasting; contributing to the; setting the stage for; marking/shaping the; represents/marks a shift; key turning point; evolving landscape; focal point; indelible mark; deeply rooted.

### Notability and media coverage

Source: Wikipedia PDF p. 4.

independent coverage; local/regional/national/[country name] media outlets; music/business/tech outlets; trade publications; cited/featured/profiled in; written by a leading expert; active social media presence; was identified by.

### Superficial analysis

Source: Wikipedia PDF p. 4.

highlighting/underscoring/emphasizing; ensuring; reflecting/symbolizing; contributing to; cultivating/fostering; encompassing; enhancing; valuable insights; align/resonate with.

### Promotion

Source: Wikipedia PDF p. 5.

boasts a; vibrant; rich; profound; enhancing; showcasing; exemplifies; commitment to; natural beauty; nestled; in the heart of; groundbreaking; renowned; featuring; diverse array.

### Vague association

Source: Wikipedia PDF p. 6.

in connection with/to; connected with/to; in association with; associated with. The prose also describes particularly/widely associated.

### Vague attribution

Source: Wikipedia PDF p. 6.

Industry reports; Observers have cited; Experts argue; Some critics argue; several sources/publications when only a few are cited; such as before exhaustive lists.

### Challenges and prospects

Source: Wikipedia PDF p. 7.

Despite its... faces several challenges...; Despite these challenges; Challenges and Legacy; Future Outlook.

### Characteristic vocabulary

Source: Wikipedia PDF p. 8.

Additionally, especially at a sentence opening; align with; boasts meaning has; bolstered; crucial; deep dive; delve; emphasizing; enduring; enhance; fostering; garner; highlight as a verb; interplay; intricate/intricacies; key as an adjective; landscape as an abstract noun; meticulous/meticulously; pivotal; robust; showcase; tapestry as an abstract noun; testament; underscore as a verb; valuable; vibrant.

### Avoiding copulatives and simple possession

Source: Wikipedia PDF p. 9.

serves as; stands as; marks; functions as; operates as; represents [a]; boasts; features; maintains; offers [a]; refers to. Elaborated forms mentioned in the prose include ventured into politics as a candidate and began his career as.

### Collaborative communication

Source: Wikipedia PDF p. 18.

I hope this helps; Of course!; Certainly!; You’re absolutely right!; Would you like...; is there anything else; let me know; more detailed breakdown; here is a...

### Cutoffs and source availability

Source: Wikipedia PDF p. 19.

Up to my last training update; as of my last knowledge update; While specific details are limited/scarce...; not widely available/documented/disclosed; in the provided/available sources/search results; [claim] should be treated as... rather than...; based on available information. Privacy speculation includes maintains a low profile and keeps personal details private.

### Edit summary policy assurances

Source: Wikipedia PDF p. 35.

ensured that... adheres to; refined; enhanced; enriched; streamlined; improved; in compliance/complies with; Wikipedia [guidelines/style/standards]; revised; verifiability; neutrality; neutral tone; encyclopedic tone; clarity; flow.

### Edit summary procedural language

Source: Wikipedia PDF p. 36.

preserved/preserving; retained/retaining; avoided/avoiding; ensured/ensuring; aimed/aiming to.

### Edit summary source emphasis

Source: Wikipedia PDF p. 37.

added sourced [information/content/infobox/section]; added verified [information/content/infobox/section]; added [coverage/citations/references]; improved attribution; with [independent/secondary/third-party/peer-reviewed] sources.

### Historical didactic disclaimers

Source: Wikipedia PDF p. 44.

it’s important/critical/crucial to note/remember/consider; worth noting; may vary.

### Historical summaries

Source: Wikipedia PDF p. 45.

In summary; In conclusion; Overall.

### Historical refusals

Source: Wikipedia PDF p. 45.

as an AI language model; as a large language model; I cannot offer medical advice, but I can...; I’m sorry...

### Vocabulary by period

2023 to mid-2024, labeled GPT-4: Additionally; boasts; bolstered; crucial; delve; emphasizing; enduring; garner; intricate/intricacies; interplay; key; landscape; meticulous/meticulously; pivotal; underscore; tapestry; testament; valuable; vibrant.

Mid-2024 to mid-2025, labeled GPT-4o: align with; bolstered; crucial; emphasizing; enhance; enduring; fostering; highlighting; pivotal; showcasing; underscore; vibrant.

Mid-2025 onward, labeled GPT-5: emphasizing; enhance; highlighting; showcasing; and the canned notability/media-coverage vocabulary. Wikipedia: Signs of AI writing also associates causal, empirical, correlate, and continued underscore use with Grok. These are approximate historical groupings, not hard date cutoffs or a current model benchmark.

### Comment formulas and profile headings

The search examples in Wikipedia: Signs of AI writing include I understand [the/your] concern(s) [about/regarding] AI-generated; I understand (that) my [contributions] may [have been] perceived as; can/could/will/would enhance the article’s ... and ...; Dear Wikipedia Editorial Team; I am writing to; and I hope/trust this message finds you well. Its discussion of user pages includes Welcome To My User Page, About Me, My Interests, My Contributions, Let’s Connect, and Let’s Collaborate. These are contextual formulas, not standalone detection rules.

## Complete Vale rule register

All 18 source YAML files follow, each paired with its entire fixture file. The raw files are the authority for exact spelling, escaping, punctuation, alternatives, and configuration. There are 17 existence rules and one occurrence rule. The declared levels are five errors, four warnings, and nine suggestions. Severity is a maintainer-selected lint level, not a probability of AI authorship.

Only Lists declares paragraph scope. Only Lists and Passive explicitly declare ignorecase: true. Only ChatGPTArtifacts, CitationArtifacts, and UTMParameters explicitly declare nonword: true. Other values are inherited from Vale rather than declared in these files. Exact runtime defaults and Markdown parsing should be verified against the chosen Vale version before using these as a detector. This reference does not claim that fixture tests have passed.

The repository README describes the package as an aid to human review and warns about false positives. Its statement about very low false-positive rates for error rules is not accompanied by a validation dataset in the inspected repository. The only workflow present packages a release; it does not run the fixture examples as assertions. meta.json specifies vale_version >=1.0.0, a compatibility declaration rather than a pinned, tested runtime.

### AspectOveruse

Type: existence. Level: warning. Pattern entries: 8.

Eight phrases; existence-based, with no overuse counter. Multifaceted also appears in Vocabulary, so alerts can overlap.

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/styles/signs-of-ai-writing/AspectOveruse.yml

```yaml
extends: existence
message: "Overuse of 'aspect' language: '%s'"
level: warning
link: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
tokens:
  - 'multifaceted'
  - 'various aspects'
  - 'different aspects'
  - 'multiple aspects'
  - 'key aspects'
  - 'important aspects'
  - 'various facets'
  - 'many dimensions'
```

**Repository fixtures in full**

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/fixtures/AspectOveruse/test.md

**AspectOveruse Test Cases**

*Should Flag (True Positives)*

The project has multifaceted challenges to address.

We need to consider various aspects of the implementation.

The different aspects of this problem are interconnected.

Multiple aspects require careful attention.

The key aspects include planning and execution.

Important aspects of the design must be reviewed.

We examined various facets of the system.

This issue has many dimensions to explore.

*Should NOT Flag (Avoid False Positives)*

The design has three primary components: form, function, and aesthetics.

We carefully considered the technical requirements.

### ChatbotCommunication

Type: existence. Level: error. Pattern entries: 16.

Sixteen token entries, some with alternatives. The file labels matches as errors but does not establish measured false-positive rates. Some polite conversational phrases are legitimate outside article prose.

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/styles/signs-of-ai-writing/ChatbotCommunication.yml

```yaml
extends: existence
message: "Chatbot communication pattern detected: '%s'"
level: error
link: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing#G15_criteria
tokens:
  - 'I hope this helps'
  - 'Of course!'
  - 'Certainly!'
  - "You're absolutely right"
  - 'Would you like me to'
  - 'Is there anything else'
  - 'Let me know if you'
  - 'More detailed breakdown'
  - 'Here is a (draft|Wikipedia|detailed) article'
  - 'As an AI (language )?model'
  - "I'm sorry, I can't"
  - 'Would you like it expanded'
  - 'This fictional article'
  - 'This Wikipedia-style article'
  - 'Final important tip'
  - 'Feel free to ask'
```

**Repository fixtures in full**

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/fixtures/ChatbotCommunication/test.md

**ChatbotCommunication Test Cases**

*Should Flag (True Positives)*

I hope this helps with your question.

Of course! Here is the information you requested.

Certainly! Let me explain this concept.

You're absolutely right! I should have mentioned that.

Would you like me to provide more details?

Is there anything else you need to know?

Let me know if you have any questions.

Here is a draft article about this topic.

Here is a Wikipedia article formatted appropriately.

As an AI language model, I cannot verify this claim.

I'm sorry, I can't access that information.

Would you like it expanded with additional context?

This fictional article demonstrates the format.

This Wikipedia-style article covers the basics.

Final important tip: always verify sources.

Feel free to ask any other questions.

*Should NOT Flag (Avoid False Positives)*

The article is certainly well-written and thorough.

Of course, there are exceptions to this general rule.

Please let me know your thoughts on this matter.

### ChatGPTArtifacts

Type: existence. Level: error. Pattern entries: 6.

Six entries cover contentReference, oaicite, oai_citation, sandbox paths, and chat.openai.com URLs. The broad oai_citation entry overlaps the numbered entry. Newer PDF artifact families such as turn identifiers and attribution JSON are absent.

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/styles/signs-of-ai-writing/ChatGPTArtifacts.yml

```yaml
extends: existence
message: "ChatGPT citation artifact detected: '%s'"
level: error
link: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing#G15_criteria
nonword: true
tokens:
  - ':contentReference\[oaicite:\d+\]\{index=\d+\}'
  - '\[oaicite:\d+\]'
  - 'oai_citation:\d+'
  - 'oai_citation'
  - 'sandbox:/mnt/data/'
  - 'https?://chat\.openai\.com/'
```

**Repository fixtures in full**

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/fixtures/ChatGPTArtifacts/test.md

**ChatGPTArtifacts Test Cases**

*Should Flag (True Positives)*

The study found significant results:contentReference[oaicite:0]{index=0} which were later confirmed.

Additional research [oaicite:5] supports this conclusion.

See the documentation at oai_citation for more information.

The data shows oai_citation:3 that this pattern is common.

Files are stored in sandbox:/mnt/data/ for processing.

For more details, visit https://chat.openai.com/ to review.

*Should NOT Flag (Avoid False Positives)*

The study found significant results [1] which were later confirmed.

Normal citation: Smith et al. (2023)

References available at https://example.com/

Standard footnote format with proper citations.

### CitationArtifacts

Type: existence. Level: error. Pattern entries: 4.

Four entries cover numbered return arrows, bracketed return arrows, a superscript variant, and a cite-template/superscript combination. The first positive fixture ends with a bare return arrow, but the corresponding token requires digits; this is a visible fixture-pattern mismatch. Parser treatment of HTML and wikitext also needs runtime checking.

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/styles/signs-of-ai-writing/CitationArtifacts.yml

```yaml
extends: existence
message: "LLM citation artifact detected: '%s'"
level: error
link: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
nonword: true
tokens:
  - '↩\d+'
  - '\[↩\]'
  - '<sup>\[↩\]</sup>'
  - '\{\{cite[^}]+\}\}<sup>\[\d+\]</sup>'
```

**Repository fixtures in full**

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/fixtures/CitationArtifacts/test.md

**CitationArtifacts Test Cases**

*Should Flag (True Positives)*

KLAS Research. (2024). Top Performing RCM Vendors 2024. https://klasresearch.com ↩

Reference note [↩] should not appear in standard citations.

Footnote marker <sup>[↩]</sup> is incorrect formatting.

Citation with artifact ↩2 at end of sentence.

Template issue {{cite web|url=example.com}}<sup>[3]</sup> detected.

*Should NOT Flag (Avoid False Positives)*

Standard footnote [1] is properly formatted.

Proper citation <sup>[3]</sup> without artifacts.

Normal reference (Smith, 2023).

Correct superscript<sup>2</sup> usage for exponents.

### ColonOveruse

Type: existence. Level: suggestion. Pattern entries: 6.

Six token entries match specific colon-plus-phrase constructions. The name says overuse, but no occurrence threshold is configured. Most tokens here also lack nonword: true, so verify punctuation-boundary behavior in the intended Vale version.

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/styles/signs-of-ai-writing/ColonOveruse.yml

```yaml
extends: existence
message: "Colon overuse pattern detected: '%s'"
level: suggestion
link: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
tokens:
  - ': including'
  - ': such as'
  - ': for example,'
  - ': notably,'
  - ': specifically,'
  - ': particularly,'
```

**Repository fixtures in full**

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/fixtures/ColonOveruse/test.md

**ColonOveruse Test Cases**

*Should Flag (True Positives)*

The system offers several features: including automation and monitoring.

Multiple benefits are available: such as cost savings and efficiency.

There are several examples: for example, cases A, B, and C.

Key findings emerged: notably, the correlation was strong.

The approach has advantages: specifically, speed and accuracy.

Important factors were identified: particularly, cost and timeline.

*Should NOT Flag (Avoid False Positives)*

The system offers several features: automation, monitoring, and reporting.

Multiple benefits include cost savings and efficiency.

There are several examples in the literature.

### Enumeration

Type: existence. Level: suggestion. Pattern entries: 6.

Six qualified ranking or chronology phrases. No comparison group, accuracy, or factual support is evaluated.

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/styles/signs-of-ai-writing/Enumeration.yml

```yaml
extends: existence
message: "Hedged enumeration detected: '%s'"
level: suggestion
link: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
tokens:
  - 'one of the most'
  - 'among the most'
  - 'some of the most'
  - 'one of the first'
  - 'among the earliest'
  - 'some of the earliest'
```

**Repository fixtures in full**

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/fixtures/Enumeration/test.md

**Enumeration Test Cases**

*Should Flag (True Positives)*

This is one of the most significant developments in the field.

The company ranks among the most successful startups.

These are some of the most innovative products available.

He was one of the first researchers to explore this topic.

The technology is among the earliest implementations.

These are some of the earliest documented cases.

*Should NOT Flag (Avoid False Positives)*

This is a significant development in the field.

The company achieved notable success.

The technology represents an early implementation.

### Hedging

Type: occurrence. Level: warning. Pattern entries: 1.

One regular expression with 15 alternatives; max: 2 is the only explicit count limit in the package. The rule mixes hedging, throat-clearing, and certainty. Scope and case handling are not explicitly declared. Do not assume each positive fixture paragraph is independently expected to trigger the count rule.

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/styles/signs-of-ai-writing/Hedging.yml

```yaml
extends: occurrence
message: "Too many hedging phrases (found %d, max 2)"
level: warning
link: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
max: 2
token: '\b(it''s important to note|it is worth noting|it should be noted|notably|it''s worth mentioning|of course|certainly|clearly|obviously|undoubtedly|without a doubt|there is no doubt|it goes without saying|needless to say|as you might expect)\b'
```

**Repository fixtures in full**

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/fixtures/Hedging/test.md

**Hedging Test Cases**

*Should Flag (True Positives)*

It's important to note that this trend has continued for decades.

It is worth noting the limitations of this methodology.

It should be noted the financial implications are significant.

Notably, the results differed significantly from expectations.

It's worth mentioning the historical context.

Of course, there are multiple factors to consider.

Certainly, the evidence supports this conclusion.

Clearly, this is an important development.

Obviously, the results speak for themselves.

Undoubtedly, this will have lasting impact.

Without a doubt, this is significant.

There is no doubt that changes are needed.

It goes without saying that quality matters.

Needless to say, preparation is essential.

As you might expect, results varied.

*Should NOT Flag (Avoid False Positives)*

The results are notable for their consistency.

This is an important finding in the field.

### Intensifiers

Type: existence. Level: suggestion. Pattern entries: 12.

Twelve entries, including overlapping forms such as notably and notably significant. No frequency threshold or statistical-context exception is configured.

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/styles/signs-of-ai-writing/Intensifiers.yml

```yaml
extends: existence
message: "Intensifier detected: '%s'"
level: suggestion
link: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
tokens:
  - 'remarkably'
  - 'notably'
  - 'significantly'
  - 'particularly'
  - 'especially'
  - 'exceptionally'
  - 'extraordinarily'
  - 'impressively'
  - 'strikingly'
  - 'notably significant'
  - 'highly significant'
  - 'particularly important'
```

**Repository fixtures in full**

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/fixtures/Intensifiers/test.md

**Intensifiers Test Cases**

*Should Flag (True Positives)*

The results were remarkably consistent across all trials.

This represents a notably significant finding.

The improvement was significantly better than expected.

This is particularly important for future research.

The outcome was especially encouraging.

The performance was exceptionally strong.

This is an extraordinarily rare occurrence.

The growth was impressively rapid.

The difference was strikingly apparent.

This is a notably significant development.

The correlation was highly significant.

This is a particularly important consideration.

*Should NOT Flag (Avoid False Positives)*

The results were consistent across all trials.

This represents an important finding.

The improvement exceeded expectations.

### KnowledgeCutoff

Type: existence. Level: warning. Pattern entries: 9.

Nine entries, including the literal placeholder as of [month/year]. Broader claims about unavailable sources and speculative privacy explanations in Wikipedia: Signs of AI writing are outside this rule.

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/styles/signs-of-ai-writing/KnowledgeCutoff.yml

```yaml
extends: existence
message: "AI knowledge cutoff reference detected: '%s'"
level: warning
link: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
tokens:
  - 'as of my last update'
  - 'as of my knowledge cutoff'
  - 'my training data only goes up to'
  - "I don't have information beyond"
  - 'my knowledge was last updated'
  - 'as of \[month/year\]'
  - "I cannot provide information past"
  - 'my training only includes data until'
  - 'as of the time of my training'
```

**Repository fixtures in full**

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/fixtures/KnowledgeCutoff/test.md

**KnowledgeCutoff Test Cases**

*Should Flag (True Positives)*

As of my last update, this information may be outdated.

As of my knowledge cutoff in January 2023, data was limited.

My training data only goes up to 2022.

I don't have information beyond my training date.

My knowledge was last updated in 2023.

I cannot provide information past my training cutoff.

My training only includes data until December 2023.

As of the time of my training, this was accurate.

*Should NOT Flag (Avoid False Positives)*

As of 2023, the population was approximately 50,000.

Historical records from the 14th century are scarce.

According to available census data, the trend continues.

### Lists

Type: existence. Level: warning. Pattern entries: 1.

One raw expression, paragraph scope, and ignorecase: true. Requires first/firstly before second/secondly before third/thirdly, with a comma or whitespace after the first two terms. This does not implement Wikipedia: Signs of AI writing rule-of-three category as a whole.

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/styles/signs-of-ai-writing/Lists.yml

```yaml
extends: existence
message: "Avoid using numbered sequence words (firstly, secondly, thirdly) in the same paragraph."
level: warning
scope: paragraph
link: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
ignorecase: true
raw:
  - '\b(firstly|first)[,\s][\s\S]*\b(secondly|second)[,\s][\s\S]*\b(thirdly|third)\b'
```

**Repository fixtures in full**

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/fixtures/Lists/test.md

**Lists Test Cases**

*Should Flag (True Positives)*

To complete this project successfully, there are several key steps. Firstly, we need to establish clear objectives and define success criteria. Secondly, resource allocation must be planned carefully to ensure adequate staffing. Thirdly, timeline considerations are essential to meet the delivery deadline.

The process is straightforward: first, gather all materials, second, prepare the workspace, and third, begin the assembly.

*Should NOT Flag (Avoid False Positives)*

Firstly, we need to establish clear objectives.

In the next phase, we should focus on resource allocation.

Finally, timeline considerations are essential.

First, gather all necessary materials. This includes tools and raw materials.

The second step involves preparation. Make sure the workspace is clean.

The first step is to review requirements. Understanding what is needed is critical.

### Narrative

Type: existence. Level: suggestion. Pattern entries: 10.

Ten fixed directive phrases. A single matching phrase is sufficient for an existence alert; the rule does not test whether the advice is justified.

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/styles/signs-of-ai-writing/Narrative.yml

```yaml
extends: existence
message: "Prescriptive narrative language detected: '%s'"
level: suggestion
link: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
tokens:
  - 'it is important to understand'
  - 'it is crucial to recognize'
  - 'it is essential to note'
  - 'one must consider'
  - 'we must acknowledge'
  - 'it is vital to remember'
  - 'it is necessary to examine'
  - 'one should note'
  - 'we should recognize'
  - 'it is critical to understand'
```

**Repository fixtures in full**

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/fixtures/Narrative/test.md

**Narrative Test Cases**

*Should Flag (True Positives)*

It is important to understand the historical context.

It is crucial to recognize the underlying factors.

It is essential to note the methodological limitations.

One must consider all available evidence carefully.

We must acknowledge the complexity of this issue.

It is vital to remember the original objectives.

It is necessary to examine the data thoroughly.

One should note the significant implications.

We should recognize the potential challenges.

It is critical to understand the fundamental principles.

*Should NOT Flag (Avoid False Positives)*

Understanding the historical context is valuable.

The underlying factors are complex.

The data requires thorough examination.

### Passive

Type: existence. Level: suggestion. Pattern entries: 9.

A raw prefix contains eight forms of be followed by whitespace; eight token entries provide the selected following words. ignorecase: true is explicit. The pattern can flag adjectival constructions and misses many other passive constructions.

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/styles/signs-of-ai-writing/Passive.yml

```yaml
extends: existence
message: "'%s' looks like passive voice."
ignorecase: true
level: suggestion
link: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
raw:
  - \b(am|are|were|being|is|been|was|be)\b\s*
tokens:
  - founded
  - known
  - considered
  - established
  - recognized
  - created
  - regarded
  - developed
```

**Repository fixtures in full**

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/fixtures/Passive/test.md

**Passive Test Cases**

*Should Flag (True Positives)*

The company was founded by John Smith in 1995.

The technology is known for its reliability and performance.

This approach is considered best practice in the industry.

The organization was established by community leaders.

The software is recognized as industry-leading.

The product was created by the engineering team.

The methodology is regarded as highly effective.

The system was developed by experienced programmers.

*Should NOT Flag (Avoid False Positives)*

John Smith founded the company in 1995.

The technology delivers reliable performance.

Industry experts consider this approach best practice.

### Placeholders

Type: existence. Level: error. Pattern entries: 12.

Twelve entries include uppercase bracketed fields, two angle-bracket forms, a template marker, and Lorem ipsum. YOUR_[A-Z]+ is narrower than arbitrary placeholder names. Markdown or HTML parsing and word-boundary behavior may affect matches; the source does not set nonword: true here.

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/styles/signs-of-ai-writing/Placeholders.yml

```yaml
extends: existence
message: "Placeholder text detected: '%s'"
level: error
link: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
tokens:
  - '\[INSERT TEXT\]'
  - '\[PLACEHOLDER\]'
  - '\[YOUR_[A-Z]+\]'
  - '\[TBD\]'
  - '\[CITATION NEEDED\]'
  - '\[COMPANY NAME\]'
  - '\[YEAR\]'
  - '\[FOUNDER NAME\]'
  - '\{\{TEMPLATE\}\}'
  - '<INSERT_TEXT>'
  - '<PLACEHOLDER>'
  - 'Lorem ipsum'
```

**Repository fixtures in full**

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/fixtures/Placeholders/test.md

**Placeholders Test Cases**

*Should Flag (True Positives)*

The company was founded in [YEAR] by [FOUNDER NAME].

This section requires [INSERT TEXT] to be completed.

Information [PLACEHOLDER] will be added later.

Replace [YOUR_NAME] with actual value.

Status of this project: [TBD]

This claim [CITATION NEEDED] requires verification.

Product manufactured by [COMPANY NAME] is available.

Template {{TEMPLATE}} needs to be filled in.

Generic filler <INSERT_TEXT> should be replaced.

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

*Should NOT Flag (Avoid False Positives)*

The company was founded in 1995 by John Smith.

Normal text without any placeholder markers.

Brackets [like this] used for emphasis are acceptable.

The year 2023 was significant for the industry.

### ScareQuotes

Type: existence. Level: suggestion. Pattern entries: 1.

One raw expression for so-called followed by a straight-quoted span. A character class is used at both ends, so matching quote types are not enforced. Curly quote variants and general scare quotes without so-called are not covered.

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/styles/signs-of-ai-writing/ScareQuotes.yml

```yaml
extends: existence
message: "Unnecessary quotation/hedging detected: '%s'"
level: suggestion
link: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
raw:
  - "so-called ['\"].+?['\"]"
```

**Repository fixtures in full**

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/fixtures/ScareQuotes/test.md

**ScareQuotes Test Cases**

*Should Flag (True Positives)*

The company uses a so-called 'innovative' approach.

They employ so-called 'best practices' in their system.

The technology relies on so-called "cutting-edge" methods.

The company's so-called 'proprietary' algorithm is just a standard implementation.

*Should NOT Flag (Avoid False Positives)*

The expert made several errors.

Their proposed solution didn't work effectively.

The term 'machine learning' refers to algorithms that improve through experience.

The company uses an innovative approach with cutting-edge technology.

Best practices in software engineering include code review and testing.

### Symbolism

Type: existence. Level: suggestion. Pattern entries: 18.

Eighteen token entries, several containing alternatives or optional words. Serves as is broad enough to match the source negative fixture She serves as the director of operations, under ordinary case-matching phrase behavior. This is a second visible fixture-pattern conflict, not a confirmed runtime result.

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/styles/signs-of-ai-writing/Symbolism.yml

```yaml
extends: existence
message: "AI-typical symbolic language detected: '%s'"
level: suggestion
link: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
tokens:
  - '(stands|serves) as'
  - 'testament to'
  - 'reminder of'
  - 'plays a (vital|crucial|pivotal|central) role'
  - '(underscores|highlights) (the )?significance'
  - 'reflects broader'
  - 'symbolizing its ongoing'
  - '(enduring|lasting) impact'
  - 'key turning point'
  - 'indelible mark'
  - 'deeply rooted'
  - 'profound heritage'
  - 'steadfast dedication'
  - 'prominent fixture'
  - 'contributes to (the )?significance'
  - 'enhancing (the )?significance'
  - 'dynamic hub of'
  - 'rich tapestry'
```

**Repository fixtures in full**

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/fixtures/Symbolism/test.md

**Symbolism Test Cases**

*Should Flag (True Positives)*

The museum stands as a testament to cultural preservation efforts.

This event serves as a reminder of our shared historical heritage.

The library plays a vital role in the community's education.

The policy plays a crucial role in environmental protection.

The architecture underscores the significance of the historical period.

This trend reflects broader societal changes in attitudes.

The tradition symbolizing its ongoing relevance continues today.

The decision had an enduring impact on educational policy.

The legislation had a lasting impact on civil rights.

This event marked a key turning point in the nation's history.

The movement left an indelible mark on American society.

These customs are deeply rooted in cultural tradition.

The monument represents our profound heritage and identity.

Their steadfast dedication to the cause inspired generations.

The cathedral is a prominent fixture in the city skyline.

This discovery contributes to the significance of the research.

The location enhancing the significance as a dynamic hub of commerce.

The institution represents a rich tapestry of cultural heritage.

*Should NOT Flag (Avoid False Positives)*

The building stands on the corner of Main Street.

She serves as the director of operations.

### Transitions

Type: existence. Level: suggestion. Pattern entries: 12.

Twelve comma-ending transition entries. The configuration flags occurrences; it does not measure a repetitive paragraph rhythm. Wikipedia: Signs of AI writing specifically calls isolated transitions ineffective evidence.

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/styles/signs-of-ai-writing/Transitions.yml

```yaml
extends: existence
message: "Formal transition word detected: '%s'"
level: suggestion
link: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
tokens:
  - 'furthermore,'
  - 'moreover,'
  - 'additionally,'
  - 'in addition,'
  - 'however,'
  - 'nevertheless,'
  - 'nonetheless,'
  - 'on the other hand,'
  - 'conversely,'
  - 'consequently,'
  - 'therefore,'
  - 'thus,'
```

**Repository fixtures in full**

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/fixtures/Transitions/test.md

**Transitions Test Cases**

*Should Flag (True Positives)*

Furthermore, the data clearly indicates sustained growth.

Moreover, additional factors contribute significantly to this.

Additionally, other variables must be thoroughly examined.

In addition, we must consider the financial implications.

However, there are significant challenges to overcome.

Nevertheless, progress has been made in key areas.

Nonetheless, concerns remain about implementation.

On the other hand, alternative approaches exist.

Conversely, some researchers disagree with this conclusion.

Consequently, we recommend proceeding with caution.

Therefore, we can reasonably infer causation.

Thus, the conclusion follows logically from the premises.

*Should NOT Flag (Avoid False Positives)*

The results improved over time.

Some challenges remain despite progress.

### UTMParameters

Type: existence. Level: error. Pattern entries: 4.

Four entries cover ChatGPT/OpenAI tracking. The question-mark and ampersand patterns have no explicit end-of-value anchor and may match prefixes of longer values. Copilot and Grok parameters listed in Wikipedia: Signs of AI writing are not included. Overlapping alternatives do not imply independent evidence.

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/styles/signs-of-ai-writing/UTMParameters.yml

```yaml
extends: existence
message: "ChatGPT UTM tracking parameter detected: '%s'"
level: error
link: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing#G15_criteria
nonword: true
tokens:
  - 'utm_source=chatgpt\.com'
  - 'utm_source=openai'
  - '\?utm_source=(chatgpt|openai)'
  - '&utm_source=(chatgpt|openai)'
```

**Repository fixtures in full**

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/fixtures/UTMParameters/test.md

**UTMParameters Test Cases**

*Should Flag (True Positives)*

Visit https://example.com/article?utm_source=chatgpt.com for more information.

Source: https://site.org?utm_source=openai&ref=ai

Link: https://news.com/story&utm_source=chatgpt.com

Reference: https://docs.example.com?utm_source=openai

*Should NOT Flag (Avoid False Positives)*

Visit https://example.com/article?utm_source=newsletter for more.

Source: https://site.org?utm_source=google&ref=search

Normal URL: https://example.com/article

URL with other params: https://site.org?ref=twitter&campaign=social

### Vocabulary

Type: existence. Level: suggestion. Pattern entries: 22.

Twenty-two entries with regex alternatives and inflections. Some have explicit word boundaries and others rely on Vale behavior. Density, model era, and literal versus figurative usage are not evaluated.

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/styles/signs-of-ai-writing/Vocabulary.yml

```yaml
extends: existence
message: "AI-typical vocabulary detected: '%s'"
level: suggestion
link: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
tokens:
  - '\bdelves?\b'
  - 'delving'
  - 'delved'
  - '\btapestry\b'
  - '\bvibrant\b'
  - 'multifaceted'
  - 'intricate(ly)?'
  - 'meticulous(ly)?'
  - '\bmyriad\b'
  - 'showcases?'
  - 'showcased'
  - 'showcasing'
  - 'boasts?'
  - 'boasted'
  - 'boasting'
  - 'rich (tapestry|history|array)'
  - 'complex (landscape|tapestry)'
  - 'dynamic landscape'
  - 'comprehensive understanding'
  - '\bcornerstone\b'
  - 'multitude of'
  - 'plethora of'
```

**Repository fixtures in full**

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing/blob/305467bafd0e491c4c00e0196ef551e64eefc9c4/fixtures/Vocabulary/test.md

**Vocabulary Test Cases**

*Should Flag (True Positives)*

Let's delve into this complex and nuanced topic.

The city delves deep into its cultural roots.

Delving into the historical archives reveals insights.

The research project delved into unexplored territory.

This intricate tapestry of cultural influences is fascinating.

The vibrant community celebrates its diversity.

A multifaceted approach addresses all concerns comprehensively.

The intricately designed system works efficiently.

The meticulously crafted document is thoroughly detailed.

A myriad of contributing factors influence success.

The museum showcases important historical artifacts.

The museum showcased rare manuscripts last year.

The region boasts stunning natural beauty and biodiversity.

This represents a rich tapestry of cultural traditions.

The complex landscape of modern politics evolves daily.

A dynamic landscape of technological innovation emerges.

Building comprehensive understanding requires sustained effort.

This principle serves as the cornerstone of policy.

A multitude of factors contributed to the outcome.

There is a plethora of evidence supporting this claim.

*Should NOT Flag (Avoid False Positives)*

The book was published in print last year.

The study examined various contributing factors.

## Configuration and installation recorded by the repository

The checked-in .vale.ini applies the local style to Markdown files:

```ini
StylesPath = styles

[*.md]
BasedOnStyles = signs-of-ai-writing
```

The README’s package installation example uses the latest release and then vale sync:

```ini
StylesPath = styles
Packages = https://github.com/ammil-industries/vale-signs-of-ai-writing/releases/latest/download/signs-of-ai-writing.zip

[*]
BasedOnStyles = Vale, signs-of-ai-writing
```

The README also describes downloading the release archive and copying the style directory into StylesPath. Its installation example includes the separate Vale base style and all file types, whereas the checked-in configuration includes only signs-of-ai-writing and Markdown. A future deployment should record its actual configuration and version.

## Differences that affect interpretation

### Individual words versus density

Vocabulary, Transitions, and Intensifiers are existence checks. Wikipedia: Signs of AI writing emphasizes clusters, repetition, genre, and literal meaning. A single alert does not implement that contextual judgment.

### Hedges and rankings

The repository flags qualified rankings and some intensifiers. Wikipedia: Signs of AI writing’s human-syntax section also lists definitive or superlative constructions, hedging qualifiers, and intensifiers as relatively human-associated. These statements concern different contexts and cannot be merged into a universal ban.

### Rhetorical threes versus ordered steps

Wikipedia: Signs of AI writing’s rule of three is broader than Lists.yml. A three-adjective phrase may fit Wikipedia: Signs of AI writing observation without matching the rule; useful first-second-third instructions may match the rule without being poor writing.

### Historical patterns versus current use

Didactic language, summaries, refusals, cutoffs, old access dates, and elegant variation are grouped historically in Wikipedia: Signs of AI writing. Em dashes have an explicit caution about changing model behavior. The YAML rules do not encode era.

### Tool involvement versus generated prose

A service URL or tracking parameter can show a citation workflow without establishing who wrote the passage. Internal markup is stronger evidence of copied tool output, but quoted documentation is a legitimate exception.

### Names versus implementation

AspectOveruse and ColonOveruse have no overuse threshold. Passive is a narrow regex family. Hedging includes certainty phrases. Interpret the code, not just the filename.

### Fixtures versus executable guarantees

Symbolism’s serves-as pattern conflicts with a negative example; CitationArtifacts has a positive bare-arrow example not covered by its digit-requiring arrow pattern. Several lower-case rules have capitalized fixtures without explicit ignorecase. Punctuation and Markdown parsing introduce additional questions. These require a runtime test before claiming exact lint behavior.

### Missing automated coverage

The package does not directly implement most PDF categories, including negative parallelisms, media-notability formulas, vague attribution, heading hierarchy, model-specific artifacts beyond selected ChatGPT forms, source verification, comment behavior, edit-summary formulas, and human counterindicators.

### General writing versus Wikipedia conventions

Markdown, title case, bold labels, tables, headings, and profile sections can be appropriate in other settings. Client presentations and student writing should be judged against their own purpose and format.

### Confidence versus severity

The source’s error/warning/suggestion labels do not supply confidence scores. The app should neither invent a percent-AI score nor add overlapping alerts as if they were independent evidence.

## Practical writing and review rules

These are editorial recommendations synthesized from the sources. They are not additional claims that a particular wording proves AI use.

1. Start with the claim. Identify exactly what the sentence asserts and what a reader would need to verify it.

1. Replace generic praise with specific information. Do not add dates, numbers, roles, or causal claims merely to make a rewrite sound concrete.

1. Name the source of an opinion. Check whether the source says what the passage attributes to it, and whether a claimed consensus has adequate support.

1. Keep meaningful uncertainty. Remove empty caveats, but do not replace a qualified finding with unjustified certainty.

1. Use ordinary verbs when they express the intended meaning. Keep technical vocabulary, passive voice, or a contrast when they improve precision.

1. Let structure follow the material. Use lists, tables, headings, and summaries where they help readers; avoid repeating a template regardless of content.

1. Separate correspondence and drafting notes from the finished text. Check comments, placeholders, citation fields, and output wrappers before publication.

1. Verify references beyond whether the link opens. Match author, title, date, identifier, and the passage supporting the claim; use a locator for long sources.

1. Fix the underlying issue before polishing the surface. Removing a stock phrase does not repair an invented citation or unsupported argument.

1. Review the destination format. Preview markup, test headings and references, and distinguish normal platform conventions from accidental artifacts.

1. Check context before discussing authorship. Compare revision dates and comparable writing samples, consider legitimate tools, and ask for an explanation of concrete errors.

1. Keep the inference proportional. Record observations and uncertainty; do not convert style judgments into accusations or unvalidated detector scores.

## Source locator map

The following map lists every catalog entry and its source pages. It also includes counterindicators and contextual material so that these cannot disappear when the site is built.

- P001 Inflated significance and legacy — PDF 3–4.

- P002 Canned notability and media coverage — PDF 4.

- P003 Superficial analysis — PDF 4–5.

- P004 Promotional language — PDF 5.

- P005 Vague connections and associations — PDF 6.

- P006 Vague attribution and exaggerated consensus — PDF 6–7.

- P007 Formulaic challenges and future prospects — PDF 7.

- P008 Awards and recognition headings — PDF 7–8.

- P009 Dense clusters of characteristic vocabulary — PDF 8–9.

- P010 Avoiding simple is and has constructions — PDF 9–10.

- P011 Negative parallelism adding another quality — PDF 10–11.

- P012 Negative parallelism replacing a quality — PDF 11.

- P013 Reversed negative parallelism — PDF 11.

- P014 Treating broad article titles as proper nouns — PDF 11.

- P015 Repetitive groups of three — PDF 12.

- P016 Redundant title heading — PDF 12–13.

- P017 Title case headings — PDF 13.

- P018 Headings containing only other headings — PDF 13–14.

- P019 Mechanical boldface — PDF 14.

- P020 Inline header vertical lists — PDF 14–15.

- P021 Formulaic em dash overuse — PDF 15–16.

- P022 Emoji as structural decoration — PDF 16.

- P023 Unnecessary or malformed tables — PDF 16.

- P024 Curly quotes and apostrophes — PDF 16–17.

- P025 Skipped heading levels — PDF 17.

- P026 Repeated level 1 headings — PDF 17.

- P027 Thematic breaks between sections — PDF 17.

- P028 Chatbot correspondence inside the content — PDF 18–19.

- P029 Knowledge and source availability disclaimers — PDF 19–20.

- P030 Unfilled placeholders and template instructions — PDF 20–21.

- P031 Markdown pasted into wikitext — PDF 21–24.

- P032 Broken wikitext and submission code — PDF 24.

- P033 ChatGPT internal citation and image markup — PDF 24–25.

- P034 Gemini citation and span markup — PDF 25–26.

- P035 Grok citation cards — PDF 26.

- P036 DeepSeek bracket and dagger references — PDF 26–27.

- P037 Perplexity attachment and web markers — PDF 27.

- P038 Unclassified writing block delimiters — PDF 27.

- P039 Nonexistent or misplaced categories — PDF 27–28.

- P040 Invented templates and parameters — PDF 28–29.

- P041 Multiple apparently fabricated external links — PDF 29.

- P042 Invalid DOI or ISBN identifiers — PDF 29–30.

- P043 Real identifiers attached to the wrong work — PDF 30.

- P044 Book references without usable locators — PDF 30–31.

- P045 Incorrect or unconventional reference use — PDF 31–32.

- P046 AI service tracking parameters — PDF 32.

- P047 Unused or undefined named references — PDF 32–33.

- P048 Misquoted policy and invented shortcuts — PDF 33.

- P049 Transcluding banners while mentioning them — PDF 33.

- P050 Overstructured discussion messages — PDF 33.

- P051 Assurances about AI use and compliance — PDF 33.

- P052 Formulaic requests for corrective guidance — PDF 33.

- P053 Dismissing provenance concerns as speculation — PDF 33.

- P054 Redirecting discussion away from provenance — PDF 33–34.

- P055 Templated general edit summaries — PDF 34–35.

- P056 Canned policy compliance assurances — PDF 35–36.

- P057 Emphasizing preserved content and avoided changes — PDF 36–37.

- P058 Emphasizing the existence of sources — PDF 37–38.

- P059 Excessive markup implementation detail — PDF 38.

- P060 Formulaic references to AfC feedback — PDF 38.

- P061 Pronounced changes in writing style — PDF 39.

- P062 Submission statements in drafts — PDF 39–40.

- P063 Preplaced maintenance and declined submission templates — PDF 40.

- P064 Canned user pages — PDF 40–41.

- P065 Permissions gaming as contextual evidence — PDF 41–42.

- P066 Model and version differences — PDF 42.

- P067 Political and language-dependent content bias — PDF 42.

- P068 Text predating public ChatGPT — PDF 42–43.

- P069 Explaining editorial choices — PDF 43.

- P070 Ordinary human syntax — PDF 43.

- P071 Perfect grammar is ineffective evidence — PDF 43.

- P072 Mixed casual and formal registers are ineffective evidence — PDF 43.

- P073 Bland or robotic prose is ineffective evidence — PDF 43–44.

- P074 Formal or academic prose is ineffective evidence — PDF 44.

- P075 An isolated transition is ineffective evidence — PDF 44.

- P076 Missing sources are ineffective evidence — PDF 44.

- P077 Random broken markup is ineffective evidence — PDF 44.

- P078 Correct markup is ineffective evidence — PDF 44.

- P079 Didactic disclaimers — PDF 44–45.

- P080 Repetitive section summaries — PDF 45.

- P081 Prompt refusals and model self-identification — PDF 45–46.

- P082 Abrupt cutoffs — PDF 46.

- P083 Old access dates in new citations — PDF 46.

- P084 Elegant variation and forced synonyms — PDF 46–47.

- P085 Generic aspect language — repository only.

- P086 Hedged enumeration — repository only.

- P087 Repeated throat-clearing and certainty phrases — repository only.

- P088 Individual intensifiers — repository only.

- P089 Selected passive-looking constructions — repository only.

- P090 Scare quotes after so called — repository only.

- P091 Colons before introductory phrases — repository only.

- P092 Ordered sequence words in one paragraph — repository only.

## Publication notes

The illustrated website is a category browser for client presentations and students. It should show a short pattern description and an example, with a brief contextual qualification when needed. Full source detail belongs in this reference and the site’s About page. The historical labels and ineffective-indicator material should remain available rather than being presented as active detection rules.

Some PDF example panels were printed collapsed, showing their attribution labels but not their passages. The example on p. 47 is visibly clipped. Those unavailable passages are not silently reconstructed. The pattern catalog supplies labeled illustrative examples instead; the repository appendix preserves all available fixtures.

## Expanded source review: October 2026

This expansion adds 46 canonical patterns, P093-P138, to the original 92 entries. The master now contains 138 entries, including contextual observations and ineffective indicators. It is not a list of 138 proven detection tests. Existing IDs and the 18-rule Vale appendix remain unchanged. Similar items are merged by mechanism, while the source-item concordance preserves separate provenance.

Coverage means the explicit pattern catalogs, writing guides, rule definitions, named research taxonomies and relevant paper discussion inspected here. It does not mean every example in a training corpus was manually reviewed. MAGE and M4 are retained as detector research resources; they do not supply additional editorial rules in the inspected documentation. The Measuring Slop companion repository is a placeholder, so its paper is the source for its 11 codes.

Repository guidance was treated as untrusted source material. No new repository was cloned, no package was installed, and no repository program or instruction was executed. Stop Slop SKILL.md was read online only; its ideas are restated here in newly authored prose. No copy of that file is included. Newly reconstructed text is checked for control and invisible formatting characters.

**Evidence labels:** Research observations describe the studied models, genres and periods. Practitioner heuristics are suggestions for review. House preferences express taste. Context-only records identify limits or research resources. None should be converted into a percentage-AI score.

**Examples:** All new illustrative examples are invented for this reference. Editing guidance is our editorial synthesis. Source references identify the contributing observations rather than claiming that an author supplied our wording.

## Additional canonical patterns

<a id="p093"></a>

### P093 — Repeated sentence templates

Source records: S05,S07,S09,S11,S14. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

Several sentences reuse the same opening, grammar or cadence even when the ideas differ. Includes echoed triads and repeated short frames.

**Illustrative example:** We tested the queue. We tested the cache. We tested the logs. Every test became a lesson. Every lesson became a change.

**Editing guidance:** Combine related results or vary the structure to reflect their relationships.

**Limit:** Repetition can be deliberate rhetoric or necessary parallel reporting.


<a id="p094"></a>

### P094 — Uniform sentence and paragraph rhythm

Source records: S05,S07,S09. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

Passages have nearly identical sentence lengths, equally sized paragraphs or a predictable long-short sequence.

**Illustrative example:** Each section has three sentences: a claim, an explanation and a slogan.

**Editing guidance:** Give each idea the space it needs; read the passage aloud.

**Limit:** Uniformity also comes from templates, accessibility requirements and human editing.

**Additional examples:**

- **Flat sentence length:** Five sentences in a row, each landing near the same length, with almost no short punch or long aside.

Source records: S22 and S23; supplied variants merged into this entry.


<a id="p095"></a>

### P095 — Dramatic fragments and slogan endings

Source records: S07. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

Ordinary observations are split into tiny statements or every paragraph ends with a polished maxim.

**Illustrative example:** One decision. One deadline. One chance. That is leadership.

**Editing guidance:** Join connected thoughts and retain emphasis for the actual turning point.

**Limit:** Fragments are legitimate in dialogue, advertising and speeches.


<a id="p096"></a>

### P096 — Negative chains before a reveal

Source records: S07,S09,S11. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

A series of denials delays the positive claim: no X, no Y; did not X, did not Y.

**Illustrative example:** No framework. No playbook. No magic. Just a spreadsheet.

**Editing guidance:** State what was used and explain any relevant exclusions.

**Limit:** A list of exclusions can be essential to define scope.


<a id="p097"></a>

### P097 — Staged revelations

Source records: S07,S09,S11. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

The writer advertises a twist, hidden truth or overlooked detail before stating something ordinary. Includes the real question, the part people skip and the punchline.

**Illustrative example:** Here is the part nobody mentions: the report needs an owner.

**Editing guidance:** Name the owner requirement and explain its consequence.

**Limit:** A genuine reversal or discovery may deserve a setup.


<a id="p098"></a>

### P098 — Self-answered rhetorical questions

Source records: S07,S09,S11. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

The passage asks an easy question only to supply an immediate answer, or stacks questions as a substitute for analysis.

**Illustrative example:** Is the process perfect? No. Does it work? Absolutely.

**Editing guidance:** Explain the result and its limits directly.

**Limit:** FAQs and interview formats use questions for a real reader need.


<a id="p099"></a>

### P099 — Announcing honesty or demanding emphasis

Source records: S07,S09,S11. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

Claims of candour and commands to absorb a point stand in for support. Includes honestly, let me be clear, full stop and let that sink in.

**Illustrative example:** I will be honest: this changes everything. Let that sink in.

**Editing guidance:** Show the evidence or consequence that warrants attention.

**Limit:** These expressions occur naturally in speech.


<a id="p100"></a>

### P100 — Manufactured intimacy and assumed agreement

Source records: S07,S09,S11. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

The narrator claims to know the reader's private thoughts or invites a simulated shared experience.

**Illustrative example:** You already know what the dashboard is hiding. We have all felt it.

**Editing guidance:** Address the reader's actual task without inventing shared feelings.

**Limit:** Established relationships and personal essays may justify familiarity.


<a id="p101"></a>

### P101 — Therapeutic reassurance without a need

Source records: S07,S09,S11. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

The passage validates feelings, grants permission or announces that an experience matters without the reader asking for that support. Includes sit with that, worth naming, this is real and not nothing.

**Illustrative example:** Your spreadsheet anxiety is real. You are not alone. Sit with that.

**Editing guidance:** Offer relevant help; retain reassurance when the context calls for it.

**Limit:** Supportive language is appropriate in many genuine conversations.


<a id="p102"></a>

### P102 — Inflating one point into the whole answer

Source records: S09,S11. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

The entire problem, the whole point or the only answer compresses a complex issue into a slogan.

**Illustrative example:** The entire strategy is trust. That is the whole game.

**Editing guidance:** Specify which part of the issue the claim explains.

**Limit:** Some problems genuinely have one decisive constraint.


<a id="p103"></a>

### P103 — Formulaic declarations of personal trust

Source records: S09,S11. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

A stock first-person endorsement lends authority without supplying experience or reasons.

**Illustrative example:** The only dashboard I trust is the one that makes me uncomfortable.

**Editing guidance:** Explain the criteria used to judge the dashboard.

**Limit:** A real personal preference is not suspicious by itself.


<a id="p104"></a>

### P104 — Canned verification invitations

Source records: S09,S11. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

A request to check the claim is used as a rhetorical flourish without giving a useful way to do so.

**Illustrative example:** Do not take my word for it. The results speak for themselves.

**Editing guidance:** Provide the actual results and a usable source.

**Limit:** A specific invitation to reproduce a finding is useful.


<a id="p105"></a>

### P105 — Stock developer-product promises

Source records: S09,S11. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

Software descriptions rely on familiar promises about simplicity and defaults without naming the behavior.

**Illustrative example:** It fits in your head, just works and comes with batteries included.

**Editing guidance:** List the supported workflow, included components and configuration defaults.

**Limit:** These idioms are common in longstanding human software documentation.


<a id="p106"></a>

### P106 — Obituary-and-replacement slogans

Source records: S09,S11. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

A topic is declared dead to introduce its supposed successor.

**Illustrative example:** The annual plan is dead. Long live continuous planning.

**Editing guidance:** Describe the change and the circumstances in which it helps.

**Limit:** Headlines have used this construction for centuries.


<a id="p107"></a>

### P107 — Retrospective significance tacked onto an event

Source records: S09,S11. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

The ending tells readers why a moment mattered without developing that significance in the account.

**Illustrative example:** She closed the ticket. And that is why Tuesday mattered.

**Editing guidance:** Describe the effect of closing the ticket.

**Limit:** Retrospective narration is legitimate when the effect is established.


<a id="p108"></a>

### P108 — Clipped auxiliary contrasts

Source records: S09,S11. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

A dramatic contrast ends with an auxiliary verb that omits the previously stated action.

**Illustrative example:** The forecast failed. The team did not.

**Editing guidance:** Use the ellipsis only when its meaning is clear and its emphasis earned.

**Limit:** This is ordinary English ellipsis, not an authorship test.


<a id="p109"></a>

### P109 — Routine anecdotes packaged as life lessons

Source records: S07,S11. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

A work incident is forced into a personal growth story, humble announcement or leadership moral. Includes privilege of, taught me and not in the job description.

**Illustrative example:** I had the privilege of fixing a printer. It taught me what leadership really means.

**Editing guidance:** Describe the incident and any specific lesson it supports.

**Limit:** Real reflection and gratitude need not be stripped from personal writing.


<a id="p110"></a>

### P110 — Engagement bait and vague relatability

Source records: S11. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

A generic request for reactions or a one-of-those opening simulates conversation while adding little information.

**Illustrative example:** It was one of those days. Curious what others think.

**Editing guidance:** State the experience; ask a question with a clear purpose if feedback is needed.

**Limit:** Useful discussion prompts and informal conversation can use these forms.


<a id="p111"></a>

### P111 — Generic scene-setting openings

Source records: S05,S07,S11. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

The opening spends time on weather, light, location or a broad era before reaching the event that matters.

**Illustrative example:** As the morning sun lit the city, a quiet transformation was taking place at the office.

**Editing guidance:** Start with the event unless the atmosphere affects it.

**Limit:** Atmospheric openings are often effective in fiction.


<a id="p112"></a>

### P112 — Predictably uplifting endings

Source records: S05,S07,S11. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

Conflict gives way to generic hope, togetherness, belonging or a tidy happy ending regardless of the preceding evidence.

**Illustrative example:** Whatever came next, they would face it together. For now, that was enough.

**Editing guidance:** End at the actual outcome, including unresolved matters.

**Limit:** Hopeful conclusions are not inherently formulaic.


<a id="p113"></a>

### P113 — Stock bodily reactions and suspended time

Source records: S03,S05,S11. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

Familiar physical cues substitute for a particular character's response: racing heart, spinal chill, barely audible voice, frozen time or words hanging in the air.

**Illustrative example:** Her heart hammered against her ribs. His words hung in the air for what felt like an eternity.

**Editing guidance:** Choose an observed action or reaction specific to the scene.

**Limit:** These are longstanding fiction clichés shared by human authors.


<a id="p114"></a>

### P114 — Generic foreshadowing and unnamed menace

Source records: S03,S11. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

The narrator promises change or danger without giving the reader a concrete clue.

**Illustrative example:** Little did he know that something darker was waiting. Nothing would ever be the same.

**Editing guidance:** Supply a meaningful clue or let the later event establish the change.

**Limit:** Withholding information is a valid narrative technique.


<a id="p115"></a>

### P115 — Decorative metaphor and adjective overload

Source records: S03,S05,S14. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

Metaphors, sensory modifiers or paired descriptors accumulate without clarifying the subject. Includes stock journeys, toolkits and tapestries.

**Illustrative example:** The vibrant, intricate tapestry of teamwork illuminated a profound journey of discovery.

**Editing guidance:** Keep images that reveal something specific; remove decoration that competes with the meaning.

**Limit:** Literary prose may intentionally be ornate.

**Additional examples:**

- **Mannered substitute:** A metaphor stands in for the fact: the pipeline becomes a river, the bug a shadow, the metric a pulse.

Source records: S22 and S23; supplied variants merged into this entry.


<a id="p116"></a>

### P116 — Telling the reader what a scene means

Source records: S03,S05,S07. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

The narrator explains an emotion or moral already apparent from the action, leaving little for the reader to infer.

**Illustrative example:** She returned his unopened letters. This showed that she no longer trusted him.

**Editing guidance:** Let the action carry the inference unless explanation adds necessary context.

**Limit:** Explicit explanation can be appropriate for the audience or genre.


<a id="p117"></a>

### P117 — Missing concrete detail and interior life

Source records: S03,S05. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

A passage substitutes generalized descriptions for observed particulars, motives, memories or the character's own perception.

**Illustrative example:** He felt many complex emotions about the difficult situation.

**Editing guidance:** Identify the relevant observation or thought using facts already available.

**Limit:** Never invent personal experience or evidence to make prose sound human.


<a id="p118"></a>

### P118 — Repeated words and restated conclusions

Source records: S03,S05,S08,S14. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

The passage repeats its point, preferred words or transitions without adding evidence or a new inference.

**Illustrative example:** The launch succeeded. Its success was a successful outcome for the successful team.

**Editing guidance:** Remove duplicate propositions and keep repetition that serves comprehension.

**Limit:** Technical terminology should remain consistent rather than being replaced with synonyms.


<a id="p119"></a>

### P119 — Information-poor generalities

Source records: S08,S12. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

Long passages offer statements broad enough to fit almost any topic, with little usable information.

**Illustrative example:** Many factors influence outcomes, and considering them can support better decisions.

**Editing guidance:** Name the factor, decision and evidence relevant to this case.

**Limit:** A high-level overview can be useful if it is the requested deliverable.


<a id="p120"></a>

### P120 — Answering the topic but missing the task

Source records: S08,S14. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

The text discusses the broad subject while failing to address the reader's question, implied intent or requested level of detail.

**Illustrative example:** Asked how to shorten a meeting, the answer explains why meetings matter.

**Editing guidance:** Identify the decision or action the reader needs and answer it.

**Limit:** Scope misunderstandings can happen in human writing too.


<a id="p121"></a>

### P121 — Disconnected reasoning beneath smooth transitions

Source records: S03,S08. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

Sentences sound related but do not develop a coherent argument or consistent narrative.

**Illustrative example:** The server is slow. Furthermore, customers value trust. Consequently, the office needs more light.

**Editing guidance:** Check the logical link between each claim and the next.

**Limit:** A rough draft is not evidence of machine authorship.


<a id="p122"></a>

### P122 — Awkward wording, reference or tense

Source records: S03,S08. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

Word combinations, pronoun references or tense changes make the passage unnatural or difficult to follow.

**Illustrative example:** Maya called Noor after she left yesterday, and tomorrow she was waiting.

**Editing guidance:** Clarify who acts, use the intended time frame and choose idiomatic wording.

**Limit:** Translation, language learning and ordinary drafting can produce the same problems.


<a id="p123"></a>

### P123 — Unnatural sameness across quotations

Source records: S05. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

Different speakers sound like the narrator or each other, with identical polish, vocabulary and syntax.

**Illustrative example:** Every interviewee describes the change as a transformative opportunity for meaningful collaboration.

**Editing guidance:** Check the recording or source and preserve each speaker's wording.

**Limit:** Do not rewrite a direct quotation merely to make it sound less polished.


<a id="p124"></a>

### P124 — Register that ignores the situation

Source records: S05,S08,S14. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

The voice stays formal, detached or promotional in contexts requiring a different tone; contractions, slang and ordinary abbreviations disappear.

**Illustrative example:** A note to a flatmate begins: Please be advised that beverage supplies require replenishment.

**Editing guidance:** Match language to the audience and purpose.

**Limit:** Formal language alone is an ineffective indicator; compare P074.

**Additional examples:**

- **Missing contractions:** Gemini-like formal runs that never contract: it is, do not, they are, across a whole article.

Source records: S22 and S23; supplied variants merged into this entry.


<a id="p125"></a>

### P125 — Sanitized or emotionally narrow prose

Source records: S05,S14. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

Every situation is handled with neutral or positive phrasing, without the humour, discomfort, anger or ambiguity the subject would warrant.

**Illustrative example:** An account of a bitter dispute describes only opportunities for mutual growth.

**Editing guidance:** Represent the event accurately and allow the relevant emotional range.

**Limit:** Profanity, dark subjects and jokes are not prerequisites for human writing.


<a id="p126"></a>

### P126 — Reflexive balance or missing point of view

Source records: S05,S08,S14. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

The text presents equal sides mechanically or avoids a justified perspective. The opposite problem is a confident one-sided claim without support.

**Illustrative example:** The evidence establishes a missed deadline, but the passage insists both timelines are equally valid.

**Editing guidance:** Represent uncertainty and competing evidence in proportion to their support.

**Limit:** Impartial reporting and balanced analysis remain valuable.


<a id="p127"></a>

### P127 — Predictable content with little local character

Source records: S05,S14. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

Examples and stories avoid specific cultural references, personal observations, callbacks or surprising but relevant details.

**Illustrative example:** A story about a neighbourhood describes only friendly people and a strong sense of community.

**Editing guidance:** Use relevant, supportable particulars instead of interchangeable scenery.

**Limit:** A text need not be quirky or autobiographical to be good.


<a id="p128"></a>

### P128 — Repeated full names and honorifics

Source records: S05. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

The same person is repeatedly introduced by full name or title, or every authority is dressed in the same honorific formula.

**Illustrative example:** Dr. Maya Patel spoke. Dr. Maya Patel explained the chart. Dr. Maya Patel then left.

**Editing guidance:** After a clear introduction, use the appropriate shorter reference.

**Limit:** Professional and legal conventions may require repetition. Name ethnicity is not an acceptable authorship cue.


<a id="p129"></a>

### P129 — Nominalisation pileups

Source records: S11. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

Abstract noun forms obscure the actor and action, especially when several occur in one sentence.

**Illustrative example:** Implementation of the optimisation requires coordination of the evaluation of the integration.

**Editing guidance:** Name the actor and use a verb where it improves clarity.

**Limit:** Technical and legal nouns often carry necessary precision.


<a id="p130"></a>

### P130 — Sparse or unusually repetitive punctuation

Source records: S05,S11,S14. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

Long passages use few commas or parentheses, or repeatedly rely on the same colon or dash construction.

**Illustrative example:** A long paragraph joins multiple qualifications without punctuation that helps readers follow them.

**Editing guidance:** Punctuate for meaning; examine the passage rather than counting one symbol.

**Limit:** The sources disagree on punctuation direction. Treat these as corpus-specific measurements.

**Additional examples:**

- **Missing asides:** A long article with no parentheses, no exclamation, and no first-person aside where a human web piece would have several.

Source records: S22 and S23; supplied variants merged into this entry.


<a id="p131"></a>

### P131 — Sentences too long for their content

Source records: S03,S05,S11. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

Long clause chains or run-on sentences obscure the main claim.

**Illustrative example:** The team, which reviewed the logs, which had arrived late, which complicated the review, approved the change.

**Editing guidance:** Separate distinct claims and preserve necessary dependencies.

**Limit:** Sentence length depends strongly on genre, language and intended readership.


<a id="p132"></a>

### P132 — False agency and distant narration

Source records: S07. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

Abstractions perform actions that obscure who made the decision or what caused the outcome.

**Illustrative example:** The strategy decided to embrace a new operating model.

**Editing guidance:** Name the decision maker or state the actual mechanism.

**Limit:** Personification is legitimate when it helps rather than obscures.


<a id="p133"></a>

### P133 — Unjustified universal claims

Source records: S07. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

Every, always, never or nobody is used for rhetorical force where the evidence supports a narrower statement.

**Illustrative example:** Nobody reads reports. Every successful team uses dashboards.

**Editing guidance:** Restrict the claim to the population and evidence available.

**Limit:** Universal claims are sometimes demonstrably true.


<a id="p134"></a>

### P134 — Unnecessary narration of the document

Source records: S07,S11,S14. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

The writer describes what the article will discuss or how the reader should follow it instead of advancing the subject.

**Illustrative example:** In this section, we will explore the points that will be discussed below.

**Editing guidance:** Keep navigation that helps with a long document; delete redundant previews.

**Limit:** A roadmap can be useful in a dissertation or complex report.


<a id="p135"></a>

### P135 — Catch-all audiences and stock explanatory analogies

Source records: S11. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

Whether-you-are openings or think-of-it-as metaphors promise universal relevance without examining the audience.

**Illustrative example:** Whether you are a beginner or an expert, think of the budget as a compass.

**Editing guidance:** Specify who needs the advice and explain the actual mechanism.

**Limit:** A well-chosen analogy can make a difficult idea accessible.


<a id="p136"></a>

### P136 — Hedge followed by automatic affirmation

Source records: S07,S11. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

A small concession is immediately followed by reassurance, making the qualification feel obligatory.

**Illustrative example:** It is not perfect, but it is a powerful step forward.

**Editing guidance:** Explain the specific limitation and the demonstrated benefit.

**Limit:** Concession and qualification are normal reasoning tools.


<a id="p137"></a>

### P137 — Broad vocabulary signature across a document

Source records: S11,S13. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

A large spread of words from a fitted lexicon may characterize a particular model, genre or software-writing register.

**Illustrative example:** A review contains many ordinary terms from a fitted vocabulary list; no single term carries the finding.

**Editing guidance:** Use the measurement only within its validated population, if any. Review actual meaning before editing.

**Limit:** A fitted list is not a banned-word list and does not establish authorship.


<a id="p138"></a>

### P138 — Stock transitions and linking phrases

Source records: S05,S07,S11,S14. Practitioner heuristic unless a study-specific qualification is given in the evidence notes below.

The passage repeatedly inserts a transition regardless of whether it expresses a real relationship.

**Illustrative example:** That said, another critical aspect provides valuable insights into an inextricably linked issue.

**Editing guidance:** Use a transition only where it identifies the logical relationship.

**Limit:** An isolated transition is weak evidence; see P075.

**Additional examples:**

- **Forward glance:** Looking ahead, the next release adds a second region.
- **What-comes-next handoff:** What comes next is a cutover on Thursday night.
- **Layer stacking:** The cache adds another layer between the app and the database.
- **Extra dimension:** Pricing is another dimension of the same outage.
- **In-practice pivot:** In practice, the job finishes in under a minute.
- **Together-these summary:** Together these checks cover the three failure modes.

Source records: S22 and S23; supplied variants merged into this entry.


## Additions merged into the original catalog

### P001-P009: inflated claims, generic praise and vocabulary

Added variants include comprehensive or ultimate guides; transformative, cutting-edge and game-changing claims; empowering, harnessing and unlocking value; top-notch quality; elevated experience; a turning point; valuable insights; multi-pronged solutions; and unspecified critical aspects. A literal technical use can be precise. Assess what the text actually establishes.

### P011-P013: contrast formulas

New forms include reason replacement (not because X, because Y), answer/question reversals, feels-like/actually-is, stops-being/starts-being, means/does-not-mean, do-not-do-X/do-Y commands, feature/not-bug and a negation followed by a semicolon restatement. Keep a contrast that distinguishes real alternatives. The variants share a mechanism and do not become independent votes for AI authorship.

### P015-P025: structure and punctuation

The added sources mention colon-led triples, echoing triads, ALL-CAPS headings, generic headings, title case, bold labels, evenly sized paragraphs and quoted material placed predictably at paragraph ends. Meaningful parallelism and consistent formatting can help readers. Dash avoidance in an older guide directly conflicts with dash-overuse claims elsewhere.

### P070-P079: counterindicators and weak evidence

Good grammar, Oxford commas, US spelling, contractions, conjunction openings, italics, bold, numeral style, partial quotations and complex tenses are not reliable authorship tests. Do not introduce mistakes, profanity or alternative spellings to make writing appear human. The Human Detectors guide labels had been working as future perfect; it is past perfect progressive.

### P080 and P084: historical summary and synonym patterns

Added material covers long final recaps, repeatedly substituted attribution verbs and predictable conclusions. Use said where appropriate, but preserve the meaning of a distinct verb such as denied. Repetitive summaries are retained separately from the optimistic narrative-ending pattern P112.

### P086-P092: hedges, filler, adverbs and punctuation

Keep uncertainty justified by evidence. Added fillers include at its core, when it comes to, here is the thing, at the end of the day, in a world where and the reality is. Intensifiers include really, just, literally, genuinely, honestly, simply, actually, deeply, truly, fundamentally, inherently and inevitably. Source lists also flag interestingly, importantly and crucially. Context, repetition and usefulness matter more than membership in a list.

## Evidence, disagreements and limits

### Research about quality versus authorship

LAMP (S03-S04) supplies seven editing categories from creative-writing work: cliché, unnecessary explanation, excess ornament, poor structure, missing detail, awkward phrasing and tense inconsistency. These identify editing needs, not necessarily machine origin. Measuring Slop (S08) distinguishes information accuracy and perspective, density and relevance, repetition, templates, coherence, naturalness, verbosity, vocabulary complexity and tone. A human draft can also have these problems.

### Early ChatGPT findings are historically bounded

HC3 (S14-S15) compares human and early ChatGPT answers. Its observed differences include answer length, vocabulary diversity, parts of speech, punctuation and dependency structure. In English, the study reports more nouns, verbs, determiners, adjectives, auxiliaries, coordinating conjunctions and particles, and fewer adverbs and punctuation tokens in ChatGPT answers. These are corpus distributions, not instructions to count a student's determiners. Perplexity depends on the scoring model; it is not a visible prose rule.

### Human Detectors: retain observations without its absolutes

The guide and coding taxonomy (S05-S06) preserve expert observations. Claims that dialect, grammar or certain punctuation almost always identify a human are not adopted here. The guide associates actually and really with human writing while other lists flag them as AI-like filler. It lists and that was that among human-associated language while also criticising tidy closure. Evaluate the function and the surrounding passage.

### Names and identity

The Human Detectors guide lists Alex, Amanda, Emily, Emma, Grant, Jessica, John, Laura, Liam, Lisa, Marcus, Mark, Max, Michael, Rachel, Sarah, Sophia and Tom; and Chen, Daniels, Johnson, Lee, Patel, Reynolds, Roberts, Rodriguez, Smith and Thompson. It also speculates about combinations of names from different cultural traditions. We record that claim for coverage but reject name ethnicity or an ordinary name as an authorship test. Repeated introductions and implausibly uniform attribution are the editorial issues captured in P128.

### Stop Slop is a house style

S07 recommends removing all adverbs, passive constructions and em dashes; preferring two items over three; avoiding Wh-, So- and Look-openers; and changing equal-length sentence runs. These are preferences rather than validated detection rules. Its directness, rhythm, trust, authenticity and density rubric uses five ten-point ratings and a 35/50 revision threshold. No validated authorship calibration is supplied. Its own rewrites sometimes retain contrasts, dashes or sweeping claims, which reinforces the need for judgment.

### Highlighter and linter are overlapping sources

S09-S10 define 39 named highlighter patterns. S11 ports 27 of its own patterns and 11 Wikipedia-associated patterns, alongside 78 AI-tells rules and two vocabulary-breadth rules. The remaining highlighter not-but construction is covered by the AI-tells contrast rule. These are 118 linter rules, not 118 independent signs or studies. Both source-level inventories remain in the concordance.

### Linter thresholds and inconsistent prose

The linter uses single-match alerts, density checks and repeated-frame checks. Its comma scarcity cutoff is at most 20 per 1,000 words; its sentence-ending proxy is at most 20 per 1,000. It uses noun-suffix matches as a nominalisation proxy. These approximations have false positives. The two breadth rules use distinct matches divided by word count to the power 0.7, with thresholds 0.31 and 0.095 respectively, and minimums of 600 words, five sentences and ten matches. Some accompanying notes describe a square root or older calibration values; the inspected configuration is recorded in the concordance. No runtime behavior was tested.

### Vocabulary changes are aggregate evidence

S13 studies excess style-word frequency in biomedical abstracts. S21 supplies 407 style-labelled terms across all selected years. This inventory is broader than the 2024-only excess set. We did not infer a current detector lexicon from it. S12 discusses how people may adopt model-associated words, including delve, intricate, underscore, commendable, resonate, navigate, comprehend, boast, swift and meticulous. Such adoption further weakens single-word attribution.

### Detector corpora are separate resources

HC3, MAGE and M4 support model training or evaluation. MAGE covers multiple source datasets and generators; M4 adds multilingual and multidomain variation. Their purpose does not make every difference in a sample an actionable slop rule. The register retains their URLs for future study. No model was trained, detector installed or corpus downloaded for this update.

## Reconstructed word and phrase inventories

These are reference data, not recommended bans. The linter word inventories were reconstructed from the visible alternatives, normalized and sorted. No executable regular expressions or repository instructions are included in this expansion. The original Vale appendix predates this expansion and remains intact.

### load-bearing

Source: S11. 1345 terms or phrases. Lexicon breadth; ordinary terms are not individually prohibited. Snapshot inspected 2026-10-02.

-only; -prefixed; -rn; 300s; 400s; 403s; 600s; ablation; aborts; absence; absent; absorb; absorbed; absorbs; accident; accumulator; acted; actually; additive; additively; adjudicated; admits; admitted; admitting; adopted; adopter; adopts; adversarial; adversarially; advertised; advertises; affordance; afterwards; against; aged; agreeing; agrees; alike; all-or-nothing; all-zero; allocates; allow-list; alone; already-shipped; amendment; analogue; anchored; answer; answerable; answered; answering; answers; anybody; anywhere; apart; app-side; arbiter; argued; argues; arguing; arity; arm; armed; arming; arms.

arrival; arrive; arrived; arrives; arriving; artefact; asked; asks; assembled; asserted; asserting; asserts; assumed; asymmetry; attributable; attributed; aug; authed; awaits; axiom; axioms; axis; back-compat; back-to-back; backfilled; backs; backstop; bails; baked; bakes; band; bands; banked; bare; bead; beat; beats; became; behavior-preserving; behaviour-preserving; behavioural; believed; believing; belonged; belongs; belt-and-braces; benign; beside; best-effort; billed; binds; bit-exact; bit-for-bit; bit-identical; bite; bites; blamed; blanking; blast-radius; blessed; blind; blip; bogus; bookkeeping; booted.

bought; bounced; bound; brand-new; browser-verified; buried; burned; burst; buys; byte-exact; byte-for-byte; byte-identical; byte-identically; byte-identity; byte-stable; cadence; call-site; callee; caller; caller-supplied; callers; came; cap; capped; carried; carries; carry; carrying; carve; carve-out; catches; caught; caveat; ceiling; census; centre; centred; centres; charged; chasing; cheap; cheaper; cheapest; checkable; chip; choke; chokepoint; cited; cites; citing; claim; claimed; claiming; clamped; clamps; classifier; classifies; claude-opus-5; claude-session; claude-sonnet-5; clause; climb; climbs; clipped; clobber.

clobbered; clobbers; close-out; coarse; coincidence; cold; collapses; collapsing; collide; collided; collides; colliding; colour; comes; comment-only; compares; composes; compounding; concluded; confidently; confined; conflated; consequence; consulted; consults; contested; contradicted; contradicting; contradiction; contradicts; converge; converged; converges; coord; corpora; corpus; corridor; corroborated; corroboration; corrupt; corrupts; costing; costs; counted; counterpart; credited; criterion; cross-check; cross-checked; cross-model; crossed; crosses; crossing; dangling; data-loss; dated; dead-end; decides; deciding; decisive; declared; declares; decline; declined; declines.

declining; decodes; dedup; deduped; dedupes; dedups; default-off; default-on; defeated; defeating; defect; defects; defence; defensible; deferral; deferred; defers; degenerate; degrade; degrades; degrading; deliberate; deliberately; demanded; demands; demonstrably; demoted; demotes; demotion; denominator; derivable; derives; deserves; destroys; diagnosed; dial; dials; died; dies; diffed; differ; differed; differing; differs; directions; disagree; disagreed; disagreeing; disagreement; disagrees; disc; discarded; discards; discharged; discipline; discloses; discriminate; discriminates; discriminating; discrimination; discriminator; disjoint; dispatched; disproved; distinguishable.

diverge; diverged; divergence; divergences; diverges; doc-comment; doc-only; dominant; dominated; dominates; dormant; double-count; doubles; drafted; drags; drain; drained; drains; drawn; draws; drew; drift; drifted; drifting; drifts; driven; drives; driving; dropped; dropping; drops; drove; durability; dying; e1; early-returns; earned; earns; echoed; echoes; eight; eighteen; eleven; emits; emitted; emitter; empirical; empirically; emptied; empties; enclosing; ends; engages; enumerated; enumerates; env-var; envelope; errored; escalated; escalates; ever; every; everywhere; evict; evicted.

evicts; exactly; exactness; exempt; exempted; exemption; exempts; exhausted; exhausts; exponent; expressible; eyeball; eyeballed; fable; fabricated; fail-loud; fail-open; fail-safe; fail-soft; faithful; faithfully; faked; fakes; fall-through; false-positive; falsely; falsifiable; falsification; falsified; fan-out; fanned; fed; feeding; fell; fence; fifteen; fifth; fights; figures; filed; filing; fills; findable; finding; fire; fired; fires; firing; fitted; five; flag-gated; flagged; flagging; flaked; fleet-wide; flip; flipped; flipping; flips; floor; floored; floors; fold; folded; folding.

folds; follow-on; follow-ups; footgun; forbids; forever; forged; forgets; forty; four; fourteen; fourth; fraction; framed; framing; frees; fresh; fresh-context; freshly; froze; frozen; full-suite; gained; gains; gap; gate; gated; gauntlet; gave; genuine; genuinely; gitignored; glyph; goes; goldens; gone; gotcha; governs; graded; grandfathered; green; grepped; grepping; greps; grew; grounded; grounds; grown; grows; guarantee; guard; guessed; guessing; half; halves; hand; hand-authored; hand-built; hand-copied; hand-edit; hand-edited; hand-maintained; hand-off; hand-rolled; hand-written.

handed; handing; hands; hang; happened; happily; hard-fails; hardest; harmless; hazard; headlessly; headline; headroom; heads-up; heard; hedge; held; held-out; hermetic; hiccup; high-water; hold; holder; holding; holds; hole; holes; honest; honestly; honesty; honored; honors; honour; honoured; honouring; honours; hop; hops; host-side; hostile; hour; hundred; hung; hypothetical; identical; identically; idiom; iff; in-flight; in-process; in-tree; incidental; incl; inconclusive; indistinguishable; inert; inflate; ink; interleave; interleaved; invariant; invented; inventing; invents; inverts.

invisible; invisibly; its; itself; judge; judged; judgement; judges; judgment; jumped; keeps; keyed; keying; keystone; keystroke; khz; killed; kills; knew; knob; knowing; knows; labelled; ladder; land; landed; lands; lane; latch; latched; latent; launchctl; leaf; leaked; leans; learns; leaves; leg; legible; legitimate; legitimately; legs; lever; levers; lie; lifted; lifts; likewise; literal; literally; live-verified; lived; lives; load-bearing; lockstep; lone; loosening; loser; loses; lossless; lossy; lost; loud; loudly; lying.

machinery; marginal; matched; materializes; mattered; matters; measured; measuring; mechanical; mechanically; merely; mid-flight; mid-run; mid-sentence; mid-session; mid-stream; mid-turn; mine; minted; mints; minus; mirroring; mirrors; mislabeled; misread; miss; misses; mistaken; mistyped; modelled; moment; money; monotone; moot; motivating; mtime; mutant; mutants; mutated; mutates; mutation-checked; mutation-tested; mutation-verified; narrowed; narrower; narrowing; narrows; near-identical; needle; neighbour; neighbouring; neighbours; neither; net-new; never; newest-first; nine; no-op; no-ops; nobody; non-vacuous; normalised; normalises; nothing; noun.

now-dead; now-stale; nowhere; nulled; objection; obligation; observes; offending; offered; omission; omits; on-device; on-disk; one; one-line; one-shot; one-sided; onto; opener; opposite; ordinary; orphan; orphans; orthogonal; ours; out-of-band; outage; outlive; outlived; outlives; outranks; outright; outward; overclaim; overflowed; overstated; overwrote; owed; owes; own; owning; owns; painted; paints; pair; pane; papered; park; parked; parks; pass-through; past; paying; payoff; pays; per-call; per-cell; per-event; per-key; per-layer; per-line; per-pr; per-row; per-run; per-session.

per-turn; per-type; permanently; phantom; phase-1; phase-2; photograph; picks; pins; pixel-identical; plainly; planted; plausible; plausibly; pointed; poisoned; polled; pooled; positionally; post-fix; pre-change; pre-existing; pre-fix; pre-refactor; pre-registered; preamble; precedent; precedes; precisely; precondition; predate; predated; predates; predating; predicate; predicted; premise; prescribed; prescribes; priced; printed; pristine; probe; probed; process-global; process-wide; producer; promised; prose; provable; provably; proved; proven; proves; proving; pruned; prunes; pullrequest; pure; puts; quad; qualifies; quiet; quietly; raced.

racing; rail; raises; ramp; ratchet; ratchets; rather; ratification; ratified; re-applied; re-arm; re-arms; re-check; re-checked; re-checks; re-confirmed; re-cut; re-derivation; re-derive; re-derived; re-derives; re-deriving; re-dispatch; re-fire; re-measured; re-opens; re-parsed; re-pin; re-pinned; re-pointed; re-ran; re-read; re-reading; re-reads; re-run; re-running; re-runs; re-validated; re-verification; re-verified; re-verify; reach; reached; reaches; reaching; read-back; read-modify-write; read-side; readout; reads; reap; reaped; reaper; reaping; reaps; reasoned; reclaim; reclaimed; reclaims; reclassified; recognised; recognises; recomputed; recomputes; reconcile.

reconciled; reconciles; recorded; recovered; recovers; recur; recurs; recurses; red-first; red-team; reddens; rediscover; reds; refusal; refusals; refuse; refused; refuses; refusing; refuted; regen; regresses; regressing; rejected; rejects; relabelled; relaunch; relayed; remainder; remedy; remembering; remount; renumbers; reopens; rep; repaint; repaints; repaired; replayed; replays; repo-wide; repointed; repointing; repoints; reproduced; reproduces; reproducing; reps; reserves; residual; residuals; residue; resolvable; restated; restatement; restates; restating; rested; resting; rests; resumed; resurrect; retargets; retired; retires.

retiring; retracted; retried; retyped; reuses; reverses; reworded; rewritten; ride; rider; rides; riding; rises; root-cause; root-caused; roster; roughly; round; round-1; round-2; round-trip; round-tripped; round-trips; rounds; routinely; row; rows; ruled; ruling; rulings; run-to-run; rung; rungs; sabotage; said; same-named; sanctioned; sas; sat; saturated; saturates; saw; say; saying; says; scored; screenshotted; scrollback; scrub; scrubbed; seam; seams; seat; seats; second; seeded; sees; self-heal; self-heals; sentence; separable; seq; sequenced; serialises; server-rendered.

settle; settled; settles; settling; seven; seventeen; seventh; shape; shaped; sharpest; shed; shelf; shipped; ships; short-circuit; short-circuits; shortfall; showed; shrank; shrinks; sibling; siblings; sides; sidesteps; sideways; sigkill; sigterm; silence; silent; silent-failure; silently; sit; sites; sits; sitting; six; sixteen; sixth; slipped; slot; smuggled; snapped; snapshotted; sole; somebody; soundness; speaks; spelled; spellings; spends; spine; spliced; spot-checked; spurious; squeezed; staleness; stall; stalled; stamp; stamped; stamping; stamps; stand-in; standing; stands.

started_at; starved; stashed; stashing; stated; stating; stay; stayed; staying; stays; steady; steady-state; steer; still-open; stood; stops; straight; strand; stranded; stranding; stranger; strongest; struck; structurally; sub-second; substance; substituted; substrate; subsumes; subtree; summed; superseded; superset; supplies; suppresses; surfaced; survive; survived; survives; surviving; survivor; survivors; sustained; swallow; swallowed; swallows; sweep; sweeper; sweeping; sweeps; swept; symptom; synchronously; synthesised; tail; takes; tall; tally; taught; teaches; teeth; telling; tells; ten; tenth.

than; theirs; thing; third; thirteen; thirty; threaded; three; three-way; threw; throwaway; tie-break; tiebreak; tier-1; tier-2; ties; tobe; today; told; tolerated; tolerates; tonight; torn; touched; touches; traced; trade-off; traded; transcribed; trap; traps; travels; treats; tripped; tripping; trips; tripwire; trivially; truncates; trusting; trusts; turn; turned; turns; twelve; twenty; twice; twin; twins; two; unaffected; unanchored; unanswered; unattended; unattributed; unblocks; unbounded; unbuilt; uncapped; unclassified; unconditional; unconditionally; undeclared; underneath; undone.

unexplained; unfiltered; unfixed; ungated; unguarded; uniformly; unit-testable; unit-tested; unlike; unlinked; unlisted; unmarked; unmeasured; unmodified; unmoved; unnoticed; unparseable; unpatched; unproven; unreachable; unreadable; unrecognised; unrecoverable; unrepresentable; unresolvable; unsatisfiable; unscoped; unset; untagged; untouched; unusable; unverifiable; unwind; unwired; vacuity; vacuous; vacuously; vanish; vanished; vanishes; vanishing; varies; vendored; verb; verbatim; verdict; verdicts; vestigial; veto; victim; visibly; vocabularies; vocabulary; waited; waiter; wake; wakes; walk; walked; walker; walks; wall; wall-clock; wants; warned.

warns; watched; watching; weakened; weaker; weakest; wearing; wears; wedge; wedged; wedges; weigh; well-formed; went; whatever; whichever; whoever; whole; whole-branch; whole-file; wholesale; whose; widened; widening; widens; widest; windowed; wins; wipe; wiped; wipes; wire-format; withdrawn; withheld; withholds; witness; worklist; worse; worst; worst-case; worth; wrong; wrongly; yields; —.

### pr-vocabulary

Source: S11. 250 terms or phrases. Lexicon breadth; ordinary terms are not individually prohibited. Snapshot inspected 2026-10-02.

accident; admits; afterwards; agrees; alike; alone; answered; answering; answers; apart; argued; arm; armed; arms; arrived; arriving; asked; asks; asserted; asymmetry; backstop; beats; behavioural; beside; bit-identical; bites; blind; bought; buys; byte-identical; came; carried; carries; carrying; carve-out; ceiling; census; charged; cheap; cheaper; cited; cites; citing; consequence; consults; contradicted; contradicts; counted; criterion; decides; deciding; declined; declines; defect; defects; deliberate; deliberately; dial; died; dies; diffed; differing; disagree; disagreed; disagreement.

disagrees; discards; door; drawn; drifted; earns; eleven; ever; exemption; fifth; filed; fired; flagging; floor; folded; folds; forbids; forever; fourth; gained; genuine; genuinely; governs; grew; half; halves; hand-written; handed; handing; hands; hazard; held; holder; holding; holds; hole; honest; honoured; hundred; indistinguishable; judged; judgement; judges; killed; kills; knew; knowing; ladder; leg; legitimately; legs; lever; lie; load-bearing; loses; loud; loudly; mattered; measured; measuring; merely; mine; minted; mints; mutant.

mutants; mutation-checked; mutation-tested; neighbour; neighbours; neither; nobody; nothing; nowhere; offered; opposite; orphans; ours; outage; outright; owed; parked; parks; pays; phantom; plainly; planted; pre-fix; precedent; precisely; predates; predicate; premise; priced; probed; promised; provably; puts; quietly; re-derived; re-measured; re-read; re-reads; re-verified; reaches; reds; refusal; refusals; refuse; refused; refuses; refusing; refuted; remedy; restated; restating; rests; rides; ruled; ruling; rung; said; saying; says; scored; seat; sep; settled; settles; sides.

silence; sitting; sixteen; somebody; spelled; spellings; spends; stall; stamp; stamped; stamps; stand; standing; stands; stating; stood; survived; survives; surviving; sweep; swept; tally; ten; theirs; thirteen; threw; throwaway; told; trap; travels; twelve; twin; ungated; unguarded; unnoticed; unparseable; unrecognised; vacuous; vacuously; verbs; verdict; verdicts; walk; walked; wedged; whichever; whoever; whose; widened; widening; withdrawn; withheld; worse; worst; worth.

### Annotated style vocabulary, all years

Source: S21. 407 terms or phrases. All style-labelled rows in excess_words.csv, spanning the study's 2013–2024 selection. This is NOT the 2024-only excess-word list and NOT a list of individually diagnostic words.

accentuates; achieving; acknowledges; acknowledging; across; additionally; address; addresses; addressing; adept; adhered; adhering; advancement; advancements; advancing; advocates; advocating; affirming; afflicted; aiding; aims; akin; align; aligning; aligns; alongside; amid; amidst; analysis; announced; apologizes; approach; assess; assessed; assessing; assessments; attains; attributed; augmenting; avenue; avenues; based; between; bolster; bolstered; bolstering; both; broader; burgeoning; capabilities; capitalizing; categorized; categorizes; categorizing; challenge; challenges; combating; commendable; compelling; complex; complicates; complicating; comprehend; comprehending; comprehensive.

comprising; conditions; conducted; consequently; consolidates; contributing; conversely; correlating; crafted; crafting; crucial; culminating; customizing; declare; declared; deductively; delineates; delve; delved; delves; delving; demonstrated; demonstrates; demonstrating; dependability; dependable; despite; detailing; detrimentally; diminishes; diminishing; discern; discerned; discernible; discerning; displaying; disrupts; distinct; distinctions; distinctive; diverse; during; easing; effectively; elevate; elevated; elevates; elevating; elucidate; elucidates; elucidating; embracing; emerged; emerges; emphasises; emphasising; emphasize; emphasizes; emphasizing; employed; employing; employs; empowers; emulating; emulation.

enabling; encapsulates; encompass; encompassed; encompasses; encompassing; endangering; endeavors; endeavours; enduring; enhance; enhanced; enhancements; enhances; enhancing; ensuring; equipping; escalating; essentials; evaluates; evolving; exacerbating; examines; exceeding; excels; exceptional; exceptionally; exerting; exhibit; exhibited; exhibiting; exhibits; expedite; expediting; exploration; explores; facilitated; facilitates; facilitating; featuring; fight; findings; focusing; formidable; fostering; fosters; foundational; furnish; garnered; garnering; gauged; grappling; groundbreaking; groundwork; hardest; harness; harnesses; harnessing; heighten; heightened; highlight; highlighting; highlights; hinder; hinges.

hinting; hold; holds; however; identified; illuminates; illuminating; imbalances; impact; impactful; impacting; impede; impeding; imperative; impressive; inadequately; including; incorporates; incorporating; indicating; individuals; influencing; inherent; initially; innovative; inquiries; insights; integrates; integrating; integration; interconnectedness; interplay; into; intricacies; intricate; intricately; introduces; invaluable; investigates; involves; involving; juxtaposed; leading; leverages; leveraging; like; limitations; linked; maintaining; merges; methodologies; meticulous; meticulously; midst; multifaceted; necessitate; necessitates; necessitating; necessity; need; notable; notably; noteworthy; nuanced; nuances.

observed; offer; offering; offers; optimizing; orchestrating; outcomes; outlines; overlook; overlooking; overwhelmed; particularly; paving; persist; pinpoint; pinpointed; pinpointing; pioneering; pioneers; pivotal; poised; pose; posed; poses; posing; postponed; potential; potentially; precise; predominantly; presents; preserving; pressing; prevalent; primarily; primary; promise; promising; pronounced; propelling; providing; realizes; realm; realms; recognizing; refine; refines; refining; reframing; remains; remarkable; renowned; research; resulting; rethink; revealed; revealing; reveals; revolutionize; revolutionizing; revolves; role; scrutinize; scrutinized; scrutinizing.

seamless; seamlessly; seeks; serves; serving; shaping; shedding; showcased; showcases; showcasing; signifying; solidify; spanned; spanning; specifically; spurred; stands; statement; stemming; strategically; strategies; streamline; streamlined; streamlines; streamlining; struggle; subsequently; substantial; substantiated; substantiates; surged; surmount; surpass; surpassed; surpasses; surpassing; swift; swiftly; techniques; their; thereby; these; this; thorough; through; transformative; typically; ultimately; uncharted; uncovering; underexplored; underscore; underscored; underscores; underscoring; understanding; unexplored; unlocking; unparalleled; unraveling; unveil; unveiled; unveiling; unveils; uphold.

upholding; urging; using; utilized; utilizes; utilizing; valuable; various; varying; verifies; versatility; wandering; warranting; were; while; within; yielding.

### Human Detectors: overused vocabulary

Source: S05. 132 terms or phrases. Direction reported by source; not an individual-word test. Parts-of-speech headings omitted because some source assignments are inconsistent.

additionally; aptly; as we verb the topic; aspect; authentic; capturing; cautionary tale; challenges; change; climate; community; complex; component; comprehensive; connect with; consider; crafted; creative; creatively; critical; crucial; curated; deeper; delve/dive into; development; diverse; dreams; elegant; elevate; embrace; empower; enact; engage; enhance; ensure; environment; essential; evoking; evolving; exploration; explore; fostering; grand scheme; groundbreaking; guiding; harness; has shaped the; health; hidden; highlights; importance; improve; in a world of/where; in conclusion; in summary; integrate; intricate; it’s crucial to; it’s important to note; it’s not about ___ it’s about ___; jeopardizing; journey; key; landscape; life.

manage topic issues/problems; manifold; meaningful; moreover; multifaceted; navigate; navigating; not only ___ but also; notes; nuance; offering; packs a punch/brings a punch; paramount; partaking; paving the way; personal growth; pivotal; possibilities; powerful; professional; profound; quality of life; quest; quirky; realm; remember that; resonate; revolution; revolutionize; roadmap; robust; role; seamless; seamlessly; shape; significance; significant; simple yet ___; step-by-step; straightforward; structured; successfully; such as; support; sustainable; tailor; tapestry; testament; the effects of; the rise of; their understanding of; they idenified patterns; to form the; to mitigate the risk; toolkit; transcend; transformative; underscores; understanding; valuable; vast; vibrant; vivid; weaving; when it comes to topic.

whimsical; whimsy.

### Human Detectors: human-associated vocabulary

Source: S05. 31 terms or phrases. Direction reported by source; not an individual-word test. Parts-of-speech headings omitted because some source assignments are inconsistent.

actually; and that was that; any ___ and ___; blitzing; bolstering; chubby; chunky; flabby; gonna; gross; it can be; may help to; messy; musky; nerdy; no chance; nope; pretty; quite; really; said; says; scabby; squished; tells; thin; though it can also; to whom; wanna; what we do know; yeah.

### Stop Slop phrase inventory

Source: S07. 65 terms or phrases. Short phrases from Stop Slop. Review their function and context.

As we'll see...; At its core; At the end of the day; But that's another post; Can we talk about; Dressed up as; Full stop." / "Period.; Here's that [X]; Here's the problem though; Here's the thing:; Here's this [X]; Here's what I find interesting; Here's what [X]; Here's why [X]; Here's why that matters; Hint:; I promise; I want to explore...; I'll say it again:; I'm going to be honest; In a world where; In this section, we'll...; In today's [X]; It turns out; It's worth noting; Let me be clear; Let me walk you through...; Let that sink in.; Make no mistake; Plot twist:" / "Spoiler:; The consequences are real; The implications are significant; The real [X] is; The reality is; The reasons are structural; The rest of this essay explains...; The stakes are high; The truth is,; The uncomfortable truth is; They exist, I promise; This is genuinely hard; This is the deepest problem; This is what X actually looks like; This is what leadership actually looks like; This matters because; When it comes to; X is a feature, not a bug; You already know this, but; actually; actually matters; creeps in; crucially; deeply; fundamentally; genuinely; honestly; importantly; inevitably; inherently; interestingly; just; literally; really; simply; truly.

## Source-item concordance

Each source item maps to its canonical entry or to a context-only disposition. Repeated IDs represent deliberate consolidation. Thresholds are source configuration values, not validated detector cutoffs. Rule labels and identifiers remain searchable for auditing; descriptions and examples above are reconstructed.

### S03 — Can AI writing be salvaged?

- Cliches → P009,P113,P114,P115. Merged into canonical catalog.

- Redundant exposition → P116,P118. Merged into canonical catalog.

- Purple prose → P115. Merged into canonical catalog.

- Poor structure → P121,P131. Merged into canonical catalog.

- Lack of specificity → P117. Merged into canonical catalog.

- Awkward phrasing → P089,P122. Merged into canonical catalog.

- Tense inconsistency → P122. Merged into canonical catalog.

### S05 — Human Detectors

- Explanation category: Vocabulary → P009,P084,P115,P118. Merged into canonical catalog.

- Explanation category: Formality → P074,P124. Merged into canonical catalog.

- Explanation category: Grammar → P021,P070,P071,P130. Merged into canonical catalog.

- Explanation category: Sentence structure → P011,P015,P093,P094,P131. Merged into canonical catalog.

- Explanation category: Formatting → P017,P019,P020,P094. Merged into canonical catalog.

- Explanation category: Tone → P124,P125,P126. Merged into canonical catalog.

- Explanation category: Introductions → P111. Merged into canonical catalog.

- Explanation category: Conclusions → P080,P112. Merged into canonical catalog.

- Explanation category: Topics → P125. Merged into canonical catalog.

- Explanation category: Factuality → P041,P045. Merged into canonical catalog.

- Explanation category: Originality → P117,P127. Merged into canonical catalog.

- Explanation category: Clarity → P116,P118,P119,P121. Merged into canonical catalog.

- Explanation category: Names → P128. Merged into canonical catalog.

- Explanation category: Quotes → P123. Merged into canonical catalog.

- Overused and underused vocabulary inventories → P009,P088,P115,P124. Merged into canonical catalog.

- Synonym cycling around said → P084. Merged into canonical catalog.

- Demonyms, made-up words and visual descriptors → P117,P124,P127. Merged into canonical catalog.

- US conventions, Oxford commas and contraction absence → P070,P071,P124. Merged into canonical catalog.

- Parentheses, ellipses, partial quotations and mixed numerals → P070,P130. Merged into canonical catalog.

- Conjunction openings and complex tenses → P070,P122. Merged into canonical catalog.

- Full recap and forced optimism → P080,P112. Merged into canonical catalog.

- Quote at paragraph end and long clause chains → P093,P123,P131. Merged into canonical catalog.

- Every expert has a title; generic names → P128. Merged into canonical catalog.

- Names and ethnic-name combinations → P128. Merged into canonical catalog.

- Lack of brands, memes, callbacks and sensory observation → P117,P127. Merged into canonical catalog.

- Flat punctuation and typographic uniformity → P019,P024,P130. Merged into canonical catalog.

### S07 — Stop Slop

- Trim filler and surplus adverbs → P087,P088,P119. Merged into canonical catalog.

- Break stock binary structures → P011,P012,P013. Merged into canonical catalog.

- Name active human agents → P089,P132. Merged into canonical catalog.

- Prefer specific bounded claims → P117,P133. Merged into canonical catalog.

- Write from within the scene → P116,P117,P124. Merged into canonical catalog.

- Vary rhythm; distrust automatic triads → P015,P093,P094,P095. Merged into canonical catalog.

- Trust the reader; remove hand-holding → P098,P101,P116,P134. Merged into canonical catalog.

- Avoid engineered quotations and maxims → P095. Merged into canonical catalog.

- Reason, problem, answer, feeling and identity reversals → P012. Merged into canonical catalog.

- Negative lists before a reveal → P096. Merged into canonical catalog.

- Noun fragments, repeated And, isolated punchline → P095. Merged into canonical catalog.

- Question setups, previews, think-about-it commands → P098,P099,P134. Merged into canonical catalog.

- Permission and reassurance endings → P101,P136. Merged into canonical catalog.

- By-the-time-X narrative frame → P093. Merged into canonical catalog.

- X-that-is-not-Y frame → P012. Merged into canonical catalog.

- Inanimate agency and detached observer voice → P132,P124. Merged into canonical catalog.

- Wh-question openings; So and Look openings → P087. Merged into canonical catalog.

- Equal-length sentences and repetitive paragraph closers → P094,P095. Merged into canonical catalog.

- Always/every/nobody claims → P133. Merged into canonical catalog.

- No em dashes; prefer two items to three → P021,P015. Merged into canonical catalog.

- Here-is-the-thing and uncomfortable-truth openers → P087,P097. Merged into canonical catalog.

- Full-stop and let-that-sink-in emphasis → P099. Merged into canonical catalog.

- Business jargon and navigation metaphors → P009,P115. Merged into canonical catalog.

- Surplus adverbs and sincerity claims → P088,P099. Merged into canonical catalog.

- At-its-core and today-world filler → P087,P111. Merged into canonical catalog.

- Hint, plot twist, spoiler, another-post staging → P097,P134. Merged into canonical catalog.

- Feature-not-bug and dressed-up-as contrasts → P012,P013. Merged into canonical catalog.

- Promises, already-know and creeping-in formulas → P099,P100. Merged into canonical catalog.

- Announced leadership, difficulty and significance → P001,P109,P116. Merged into canonical catalog.

- Structural reasons and unspecified high stakes → P001,P119. Merged into canonical catalog.

- Five before/after examples → P012,P087,P095,P098,P101. Merged into canonical catalog.

- Five scoring dimensions; 35/50 rubric → P094,P116,P119. Merged into canonical catalog.

### S08 — Measuring AI Slop in Text

- IQ1 Factuality → P041,P045. Merged into canonical catalog.

- IQ2 Bias and appropriate perspective → P126. Merged into canonical catalog.

- IU1 Information density → P119. Merged into canonical catalog.

- IU2 Relevance → P120. Merged into canonical catalog.

- SQ1 Repetition → P118,P138. Merged into canonical catalog.

- SQ2 Templatedness → P020,P093. Merged into canonical catalog.

- SQ3 Coherence → P121. Merged into canonical catalog.

- SQ4 Naturalness → P122,P124. Merged into canonical catalog.

- SQ5 Verbosity → P115,P118,P131. Merged into canonical catalog.

- SQ6 Vocabulary complexity → P009,P129. Merged into canonical catalog.

- SQ7 Tone → P124,P126. Merged into canonical catalog.

### S09 — LLM cliché highlighter

- no-chain (“No X, no Y” chains) → P096. Merged into canonical catalog.

- whole (“That’s the whole ...”) → P102. Merged into canonical catalog.

- did-not-chain (“Did not X, did not Y” chains) → P096. Merged into canonical catalog.

- dont-verb-it (“Don’t VERB it ... VERB it”) → P012. Merged into canonical catalog.

- sit-with (“Sit with that”) → P101. Merged into canonical catalog.

- already-know (“You already know”) → P100. Merged into canonical catalog.

- is-the-entire (“Is the entire ...”) → P102. Merged into canonical catalog.

- the-entire-is (“The entire ... is”) → P102. Merged into canonical catalog.

- is-real (“Is real ... and / not”) → P101. Merged into canonical catalog.

- punchline (“The punchline is”) → P097. Merged into canonical catalog.

- worth-naming (“Worth naming”) → P101. Merged into canonical catalog.

- not-nothing (“That’s not nothing”) → P101. Merged into canonical catalog.

- is-the-whole (“Is the whole ...”) → P102. Merged into canonical catalog.

- echo-triad (Echoing sentence runs) → P093. Merged into canonical catalog.

- performative-honesty (Performative honesty) → P099. Merged into canonical catalog.

- thats-the-part (“That’s the part ...”) → P097. Merged into canonical catalog.

- the-only-i-trust (“The only X I trust”) → P103. Merged into canonical catalog.

- take-my-word (“Don’t take my word for it”) → P104. Merged into canonical catalog.

- turns-out (“Turns out ...”) → P097. Merged into canonical catalog.

- fits-in-your-head (“Fits in your head”) → P105. Merged into canonical catalog.

- stacked-questions (Stacked rhetorical questions) → P098. Merged into canonical catalog.

- sentence-anaphora (Repeated sentence openers) → P093. Merged into canonical catalog.

- colon-triple (Colon into a triple) → P015. Merged into canonical catalog.

- heres-the-twist (“Here’s the twist”) → P097. Merged into canonical catalog.

- x-is-dead (“X is dead”) → P106. Merged into canonical catalog.

- thats-why-mattered (“That’s why X mattered”) → P107. Merged into canonical catalog.

- stranded-auxiliary (Stranded auxiliary contrast) → P108. Merged into canonical catalog.

- ai-vocab (AI vocabulary words) → P009. Merged into canonical catalog.

- not-just (“Not just X, but Y”) → P011. Merged into canonical catalog.

- note-that (“It’s important to note”) → P079. Merged into canonical catalog.

- testament (“Stands as a testament”) → P001. Merged into canonical catalog.

- crucial-role (“Plays a crucial role”) → P001. Merged into canonical catalog.

- landscape (“Ever-evolving landscape”) → P009. Merged into canonical catalog.

- vague-experts (“Experts argue”) → P006. Merged into canonical catalog.

- despite-challenges (“Despite these challenges”) → P007. Merged into canonical catalog.

- participle-tail (Participle sentence tails) → P003. Merged into canonical catalog.

- promo (Promotional boilerplate) → P004. Merged into canonical catalog.

- ai-leftovers (Chatbot leftovers) → P028. Merged into canonical catalog.

- not-but (Replacing one description with another) → P012. Merged into canonical catalog.

### S11 — slop prose linter

- ai-tells/em-dash (Em dash) → P021. > 0. Merged; source rule retained in concordance.

- ai-tells/leverage (leverage) → P009. > 0. Merged; source rule retained in concordance.

- ai-tells/navigate-complexities (navigate complexities) → P009. > 0. Merged; source rule retained in concordance.

- ai-tells/comprehensive-guide (comprehensive guide) → P004. > 0. Merged; source rule retained in concordance.

- ai-tells/transformative (transformative) → P004. > 0. Merged; source rule retained in concordance.

- ai-tells/cutting-edge (cutting edge) → P004. > 0. Merged; source rule retained in concordance.

- ai-tells/empower (empower) → P004. > 0. Merged; source rule retained in concordance.

- ai-tells/unlock-value (unlock value) → P004. > 0. Merged; source rule retained in concordance.

- ai-tells/harness (harness) → P004. > 0. Merged; source rule retained in concordance.

- ai-tells/streamline (streamline) → P004. > 0. Merged; source rule retained in concordance.

- ai-tells/proactive (proactive) → P009. > 0. Merged; source rule retained in concordance.

- ai-tells/feel-free (feel free) → P028. > 0. Merged; source rule retained in concordance.

- ai-tells/end-of-the-day (end of the day) → P087. > 0. Merged; source rule retained in concordance.

- ai-tells/in-conclusion (in conclusion) → P080. > 0. Merged; source rule retained in concordance.

- ai-tells/dive-in (dive in) → P087. > 0. Merged; source rule retained in concordance.

- ai-tells/when-it-comes-to (when it comes to) → P087. > 0. Merged; source rule retained in concordance.

- ai-tells/game-changer (game changer) → P004. > 0. Merged; source rule retained in concordance.

- ai-tells/top-notch (top notch) → P004. > 0. Merged; source rule retained in concordance.

- ai-tells/treasure-trove (treasure trove) → P115. > 0. Merged; source rule retained in concordance.

- ai-tells/embark-on (embark on) → P115. > 0. Merged; source rule retained in concordance.

- ai-tells/foster-a (foster a) → P009. > 0. Merged; source rule retained in concordance.

- ai-tells/elevate (elevate) → P004. > 0. Merged; source rule retained in concordance.

- ai-tells/robust (robust) → P009. > 0. Merged; source rule retained in concordance.

- ai-tells/realm (realm) → P087. > 0. Merged; source rule retained in concordance.

- ai-tells/genuinely (“genuinely”) → P088. > 0. Merged; source rule retained in concordance.

- ai-tells/that-said (“That said, ...”) → P138. > 0. Merged; source rule retained in concordance.

- ai-tells/the-real-question (“the real question is ...”) → P097. > 0. Merged; source rule retained in concordance.

- ai-tells/heres-what (“here's what actually happened”) → P097. > 0. Merged; source rule retained in concordance.

- ai-tells/one-of-those (“one of those X”) → P110. > 0. Merged; source rule retained in concordance.

- ai-tells/feels-like (“(this) feels like”) → P110. > 0. Merged; source rule retained in concordance.

- ai-tells/curious-engagement (“curious what others think”) → P110. > 0. Merged; source rule retained in concordance.

- ai-tells/the-actual (“the actual X”) → P088. > 0. Merged; source rule retained in concordance.

- ai-tells/privilege-of (“the privilege of ...”) → P109. > 0. Merged; source rule retained in concordance.

- ai-tells/taught-me (“X taught me Y”) → P109. > 0. Merged; source rule retained in concordance.

- ai-tells/the-lesson-q (“The lesson? ...”) → P098. > 0. Merged; source rule retained in concordance.

- ai-tells/not-because-because (“Not because X. Because Y.”) → P012. > 0. Merged; source rule retained in concordance.

- ai-tells/youre-not-alone (“You're not alone”) → P101. > 0. Merged; source rule retained in concordance.

- ai-tells/rather-than (“rather than”, repeatedly) → P012. >= 1 per 1000 words; minimum 250 words, 5 sentences, 2 matches. Merged; source rule retained in concordance.

- ai-tells/not-x-but-y (“Not X but Y” (unqualified)) → P012. > 0. Merged; source rule retained in concordance.

- ai-tells/extends-far-beyond (“Extends far beyond”) → P001. > 0. Merged; source rule retained in concordance.

- ai-tells/another-critical (“Another critical aspect”) → P138. > 0. Merged; source rule retained in concordance.

- ai-tells/essay-announce (The essay announces itself) → P134. > 0. Merged; source rule retained in concordance.

- ai-tells/valuable-insights (“Provides valuable insights”) → P003. > 0. Merged; source rule retained in concordance.

- ai-tells/multi-pronged (“Requires a multi-pronged approach”) → P119. > 0. Merged; source rule retained in concordance.

- ai-tells/turning-point (“Marked a significant turning point”) → P001. > 0. Merged; source rule retained in concordance.

- ai-tells/closer-look (“A closer examination reveals”) → P097. > 0. Merged; source rule retained in concordance.

- ai-tells/inextricably-linked (“Inextricably linked”) → P005. > 0. Merged; source rule retained in concordance.

- ai-tells/moral-uplift (Moral-uplift closers) → P112. > 0. Merged; source rule retained in concordance.

- ai-tells/each-a (“..., each a ...” appositive cascade) → P115. > 0. Merged; source rule retained in concordance.

- ai-tells/reveal-shape (Reveal-shape tell) → P097. > 0. Merged; source rule retained in concordance.

- ai-tells/not-in-job-description ("Not in the job description") → P109. > 0. Merged; source rule retained in concordance.

- ai-tells/the-part-people-skip ("The part people skip") → P097. > 0. Merged; source rule retained in concordance.

- ai-tells/era-of ("In an era of ...") → P111. > 0. Merged; source rule retained in concordance.

- ai-tells/whether-youre-a ("Whether you're an X or a Y") → P135. > 0. Merged; source rule retained in concordance.

- ai-tells/think-of-it-as ("Think of X as ...") → P135. > 0. Merged; source rule retained in concordance.

- ai-tells/hedge-then-affirm (Hedge, then affirm) → P136. > 0. Merged; source rule retained in concordance.

- ai-tells/rhetorical-selfqa (Asking yourself an easy question) → P098. > 0. Merged; source rule retained in concordance.

- ai-tells/comma-scarcity (Too few commas) → P130. <= 20 per 1000 words; minimum 250 words, 5 sentences. Merged; source rule retained in concordance.

- ai-tells/paren-scarcity (No parentheses at all) → P130. <= 0 per 1000 words; minimum 250 words, 6 sentences. Merged; source rule retained in concordance.

- ai-tells/long-sentences (Sentences run long) → P131. <= 20 per 1000 words; minimum 250 words, 4 sentences. Merged; source rule retained in concordance.

- ai-tells/nominalisation-pileup (Nominalisations pile up) → P129. >= 70 per 1000 words; minimum 250 words, 5 sentences. Merged; source rule retained in concordance.

- ai-tells/triad-density (Rule of three, repeatedly) → P015. >= 8 per 1000 words; minimum 250 words, 5 sentences. Merged; source rule retained in concordance.

- ai-tells/em-dash-density (Em dashes pile up) → P021. >= 35 per 1000 words; minimum 250 words, 5 sentences. Merged; source rule retained in concordance.

- ai-tells/paired-dash-aside (Paired em-dash asides) → P021. >= 6 per 1000 words; minimum 250 words, 5 sentences. Merged; source rule retained in concordance.

- ai-tells/templated-frame (Repeated syntactic frame) → P093. > 0; frame: 8-token window, run 3, anchors 2. Merged; source rule retained in concordance.

- ai-tells/barely-a-whisper (“Voice barely above a whisper”) → P113. > 0. Merged; source rule retained in concordance.

- ai-tells/heart-pounding (“Heart pounding in her chest”) → P113. > 0. Merged; source rule retained in concordance.

- ai-tells/shiver-down-spine (“Sent a shiver down her spine”) → P113. > 0. Merged; source rule retained in concordance.

- ai-tells/sun-dipped-horizon (“The sun dipped below the horizon”) → P111. > 0. Merged; source rule retained in concordance.

- ai-tells/felt-like-eternity (“Felt like an eternity”) → P113. > 0. Merged; source rule retained in concordance.

- ai-tells/words-hung-in-air (“The words hung in the air”) → P113. > 0. Merged; source rule retained in concordance.

- ai-tells/little-did-know (“Little did she know”) → P114. > 0. Merged; source rule retained in concordance.

- ai-tells/maybe-just-maybe (“Maybe, just maybe”) → P112. > 0. Merged; source rule retained in concordance.

- ai-tells/face-it-together (“They would face it together”) → P112. > 0. Merged; source rule retained in concordance.

- ai-tells/something-else-entirely (“Something else entirely”) → P114. > 0. Merged; source rule retained in concordance.

- ai-tells/colon-appositive (Reaching for the colon) → P091. >= 3 per 1000 words; minimum 250 words, 5 sentences. Merged; source rule retained in concordance.

- ai-tells/semicolon-correction (The denial, a semicolon, the restatement) → P012. > 0. Merged; source rule retained in concordance.

- ai-tells/load-bearing-adverbs (merely, plainly, quietly, genuinely) → P088. > 0. Merged; source rule retained in concordance.

- simonwillison/no-chain (“No X, no Y” chains) → P096. > 0. Merged; source rule retained in concordance.

- simonwillison/whole (“That’s the whole ...”) → P102. > 0. Merged; source rule retained in concordance.

- simonwillison/did-not-chain (“Did not X, did not Y” chains) → P096. > 0. Merged; source rule retained in concordance.

- simonwillison/dont-verb-it (“Don’t VERB it ... VERB it”) → P012. > 0. Merged; source rule retained in concordance.

- simonwillison/sit-with (“Sit with that”) → P101. > 0. Merged; source rule retained in concordance.

- simonwillison/already-know (“You already know”) → P100. > 0. Merged; source rule retained in concordance.

- simonwillison/is-the-entire (“Is the entire ...”) → P102. > 0. Merged; source rule retained in concordance.

- simonwillison/the-entire-is (“The entire ... is”) → P102. > 0. Merged; source rule retained in concordance.

- simonwillison/is-real (“Is real ... and / not”) → P101. > 0. Merged; source rule retained in concordance.

- simonwillison/punchline (“The punchline is”) → P097. > 0. Merged; source rule retained in concordance.

- simonwillison/worth-naming (“Worth naming”) → P101. > 0. Merged; source rule retained in concordance.

- simonwillison/not-nothing (“That’s not nothing”) → P101. > 0. Merged; source rule retained in concordance.

- simonwillison/is-the-whole (“Is the whole ...”) → P102. > 0. Merged; source rule retained in concordance.

- simonwillison/echo-triad (Echoing sentence runs) → P093. > 0. Merged; source rule retained in concordance.

- simonwillison/performative-honesty (Performative honesty) → P099. > 0. Merged; source rule retained in concordance.

- simonwillison/thats-the-part (“That’s the part ...”) → P097. > 0. Merged; source rule retained in concordance.

- simonwillison/the-only-i-trust (“The only X I trust”) → P103. > 0. Merged; source rule retained in concordance.

- simonwillison/take-my-word (“Don’t take my word for it”) → P104. > 0. Merged; source rule retained in concordance.

- simonwillison/turns-out (“Turns out ...”) → P097. > 0. Merged; source rule retained in concordance.

- simonwillison/fits-in-your-head (“Fits in your head”) → P105. > 0. Merged; source rule retained in concordance.

- simonwillison/stacked-questions (Stacked rhetorical questions) → P098. > 0. Merged; source rule retained in concordance.

- simonwillison/sentence-anaphora (Repeated sentence openers) → P093. > 0. Merged; source rule retained in concordance.

- simonwillison/colon-triple (Colon into a triple) → P015. > 0. Merged; source rule retained in concordance.

- simonwillison/heres-the-twist (“Here’s the twist”) → P097. > 0. Merged; source rule retained in concordance.

- simonwillison/x-is-dead (“X is dead”) → P106. > 0. Merged; source rule retained in concordance.

- simonwillison/thats-why-mattered (“That’s why X mattered”) → P107. > 0. Merged; source rule retained in concordance.

- simonwillison/stranded-auxiliary (Stranded auxiliary contrast) → P108. > 0. Merged; source rule retained in concordance.

- wikipedia-ai/ai-vocab (AI vocabulary words) → P009. > 0. Merged; source rule retained in concordance.

- wikipedia-ai/not-just (“Not just X, but Y”) → P011. > 0. Merged; source rule retained in concordance.

- wikipedia-ai/note-that (“It’s important to note”) → P079. > 0. Merged; source rule retained in concordance.

- wikipedia-ai/testament (“Stands as a testament”) → P001. > 0. Merged; source rule retained in concordance.

- wikipedia-ai/crucial-role (“Plays a crucial role”) → P001. > 0. Merged; source rule retained in concordance.

- wikipedia-ai/landscape (“Ever-evolving landscape”) → P009. > 0. Merged; source rule retained in concordance.

- wikipedia-ai/vague-experts (“Experts argue”) → P006. > 0. Merged; source rule retained in concordance.

- wikipedia-ai/despite-challenges (“Despite these challenges”) → P007. > 0. Merged; source rule retained in concordance.

- wikipedia-ai/participle-tail (Participle sentence tails) → P003. > 0. Merged; source rule retained in concordance.

- wikipedia-ai/promo (Promotional boilerplate) → P004. > 0. Merged; source rule retained in concordance.

- wikipedia-ai/ai-leftovers (Chatbot leftovers) → P028. > 0. Merged; source rule retained in concordance.

- load-bearing/load-bearing-vocabulary (Vocabulary spread across the arriving group) → P137. >= 0.31 after dividing distinct matches by word count raised to 0.7; minimum 600 words, 5 sentences, 10 matches. Merged; source rule retained in concordance.

- pr-vocabulary/pr-vocabulary (Pull request vocabulary) → P137. >= 0.095 after dividing distinct matches by word count raised to 0.7; minimum 600 words, 5 sentences, 10 matches. Merged; source rule retained in concordance.

### S12 — How AI-generated prose diverges from human writing and why it matters

- Semi-formal and corporate vocabulary → P009. Merged into canonical catalog.

- Not-just contrasts and repeated formulae → P011,P093. Merged into canonical catalog.

- Punctuation speculation → P021,P130. Merged into canonical catalog.

- Empty broad claims and uniform voice → P119,P124. Merged into canonical catalog.

- Human adoption and dialect convergence → P066,P070. Merged into canonical catalog.

### S13 — Delving into LLM-assisted writing in biomedical publications through excess vocabulary

- Excess style vocabulary at population level → P009,P137. Merged into canonical catalog.

### S14 — How Close is ChatGPT to Human Experts?

- Longer, comprehensive stepwise answers → P080,P092,P134. Merged into canonical catalog.

- Literal question focus misses intent → P120. Merged into canonical catalog.

- Neutral, formal and cautious tone → P124,P126. Merged into canonical catalog.

- Less humour, irony, slang and personal voice → P125,P127. Merged into canonical catalog.

- Repeated words and logical connectors → P118,P138. Merged into canonical catalog.

- Lower vocabulary diversity in study splits → P118,P137. Merged into canonical catalog.

- POS and dependency distributions → P130,P131. Merged into canonical catalog.

- GPT-2 perplexity measurements → Context only. Merged into canonical catalog.

### S16 — MAGE

- Training/evaluation resource → Context only. No new catalog rule inferred.

### S17 — MAGE: Machine-generated Text Detection in the Wild

- Training/evaluation resource → Context only. No new catalog rule inferred.

### S18 — M4

- Training/evaluation resource → Context only. No new catalog rule inferred.

### S19 — M4: Multi-generator, Multi-domain, and Multi-lingual Black-Box Machine-Generated Text Detection

- Training/evaluation resource → Context only. No new catalog rule inferred.

### S20 — Measuring Slop companion repository

- Companion repository placeholder → Context only. Paper taxonomy used; corpus unavailable.

### S21 — Excess vocabulary analysis and annotations

- Style-labelled annotation inventory → P137. Merged into canonical catalog.


## Additional patterns from the supplied Graphite review

<a id="p139"></a>

### P139 — Repeated importance flags

Source records: S22 and S23; user-supplied additions reviewed 2 October 2026.

The writer repeatedly announces that a point matters before explaining its consequence. Bare importance statements, rankings and declarations that a distinction matters can add emphasis without adding information.

**Illustrative example:** This matters. The delay changes the launch date.

**Editing guidance:** State the consequence directly. Keep an importance flag when it helps the reader identify a real priority.

**Limit:** A consequence, priority or comparison can justify this wording. Frequency alone does not make a statement wrong.

**Additional examples:**

- **Importance flag, bare:** This matters. The delay changes the launch date.
- **Why-X-matters frame:** Why the buffer matters is that the queue drops packets after 40 ms.
- **Matters-most ranking:** Latency matters most when the call is on a weak radio link.
- **Just-as-important twin:** Cost is just as important as speed for this route.
- **Distinction-matters closer:** The distinction matters once the two queues share a worker.

Source records: S22 and S23; supplied variants merged into this entry.


<a id="p140"></a>

### P140 — Promises without tradeoffs

Source records: S22 and S23; user-supplied additions reviewed 2 October 2026.

A benefit is paired with a promise that nothing valuable is lost or required. Repeated assurances about preserving quality, coverage or convenience can hide the conditions under which the promise holds.

**Illustrative example:** The cut reduces cost without sacrificing coverage.

**Editing guidance:** Name the benefit, the cost and the conditions. Keep a claim of no loss only when evidence supports it.

**Limit:** Some changes really do remove a requirement or preserve a capability. Check the claim rather than banning the construction.

**Additional examples:**

- **Tradeoff denial:** The cut reduces cost without sacrificing coverage.
- **Without compromising:** The filter blocks the flood without compromising mail delivery.
- **Without losing:** The move shortens the path without losing the audit log.
- **Without requiring:** The client reconnects without requiring a new login.

Source records: S22 and S23; supplied variants merged into this entry.


<a id="p141"></a>

### P141 — Stock helpfulness claims

Source records: S22 and S23; user-supplied additions reviewed 2 October 2026.

The prose repeatedly describes a tool or step as helpful, easy or useful to the reader. The claim can substitute for an explanation of what the tool does and when it helps.

**Illustrative example:** The checklist can help you catch a bad config.

**Editing guidance:** Describe the action or result. Retain a helpfulness claim when the benefit and its conditions are clear.

**Limit:** Instructional writing often needs to explain benefits. These phrases can be appropriate and accurate.

**Additional examples:**

- **Helpfulness coaching:** The checklist can help you catch a bad config.
- **Especially-helpful label:** The dry run is especially helpful before a holiday cutover.
- **Makes-it-easier claim:** The wrapper makes it easier to retry a failed call.
- **Helps-you-avoid:** The linter helps you avoid a mismatched schema.

Source records: S22 and S23; supplied variants merged into this entry.


<a id="p142"></a>

### P142 — Repeated qualification and reassurance

Source records: S22 and S23; user-supplied additions reviewed 2 October 2026.

Claims are repeatedly softened with possibility language, limits on what evidence establishes, or assurances that a step is unnecessary. These constructions serve different purposes, but habitual use can make the prose evasive or cumbersome.

**Illustrative example:** The test does not establish that the patch caused the drop.

**Editing guidance:** Match the strength of the statement to the evidence. Explain a relevant uncertainty once; remove only redundant qualification.

**Limit:** Scientific, legal and technical writing often requires careful qualification. Do not turn an uncertain claim into a certainty to avoid a suspected tell.

**Additional examples:**

- **Does-not-establish disclaimer:** The test does not establish that the patch caused the drop.
- **May-provide hedge:** The change may provide a shorter failover.
- **Can-provide hedge:** A local cache can provide a faster read.
- **Not-necessarily qualifier:** A green build is not necessarily a safe deploy.
- **Need-not hedge:** The reader need not restart the service.

Source records: S22 and S23; supplied variants merged into this entry.


<a id="p143"></a>

### P143 — Unsupported superlatives

Source records: S22 and S23; user-supplied additions reviewed 2 October 2026.

The writer repeatedly calls something the best, most powerful or most popular without defining the comparison. Words such as arguably or perhaps can soften the ranking without supplying evidence.

**Illustrative example:** This is the single most common cause of the retry storm.

**Editing guidance:** Specify the comparison and evidence, or replace the ranking with a concrete property.

**Limit:** A measured ranking can be precise. Hedging a ranking is appropriate when the comparison is genuinely uncertain.

**Additional examples:**

- **Single-most superlative:** This is the single most common cause of the retry storm.
- **Arguably-the-most:** This is arguably the most expensive query on the box.
- **The-most-powerful:** The limiter is the most powerful control on this path.
- **The-most-popular:** That image is the most popular tag in the registry.
- **Perhaps-the-most:** This is perhaps the most brittle step in the runbook.
- **One-of-the-best-about:** This is one of the best notes about the old scheduler.

Source records: S22 and S23; supplied variants merged into this entry.


## Expanded source register and reading scope

The accompanying spreadsheet is the rolling register. It has one row per source and a separate extraction map for source items. Add a new stable source ID for a new resource; keep the source family to distinguish related papers, implementations and ports. Record the review date and extraction scope before merging new material. Source content and licenses can change; these records describe the inspection on 2 October 2026.

### S01 — Wikipedia: Signs of AI writing

Source: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing

Supplied PDF; Included. 47 supplied pages; original P001-P092 locators retained.

Limit: Missing printed pages 48-51 are references, as confirmed by user. Local PDF controls the snapshot.

### S02 — Vale signs of AI writing

Source: https://github.com/ammil-industries/vale-signs-of-ai-writing

Repository; Included. 18 rules and complete fixtures retained from original extraction.

Limit: Pinned commit 305467bafd0e491c4c00e0196ef551e64eefc9c4; lint severity is not authorship confidence.

### S03 — Can AI writing be salvaged?

Source: https://arxiv.org/html/2409.14509

Paper; Included. Seven editorial categories and named subtypes.

Limit: Creative-writing editing study; does not validate an authorship checklist.

### S04 — Writing Alignment / LAMP

Source: https://github.com/salesforce/creativity_eval/tree/main/Writing_Alignment

Repository; Included. README, corpus schema and syntactic-data directory inspected.

Limit: Corpus records and code not downloaded or executed; no claim to have classified every training example.

### S05 — Human Detectors

Source: https://github.com/jenna-russell/human_detectors

Repository; Included. Detection guide and all 14 explanation categories.

Limit: Expert observations include historical, contradictory and unsupported cues; preserved with qualifications.

### S06 — People who frequently use ChatGPT for writing tasks are accurate and robust detectors of AI-generated text

Source: https://aclanthology.org/2025.acl-long.267/

Paper; Context only. Research context for the repository guide.

Limit: Individual heuristic validity does not follow from aggregate annotator performance.

### S07 — Stop Slop

Source: https://github.com/hardikpandya/stop-slop

Repository; Included. Writing instructions inspected online as source text; structures, phrases and five before/after examples.

Limit: SKILL.md was not saved, installed or executed. Guidance rewritten; blanket stylistic bans are house preferences.

### S08 — Measuring AI Slop in Text

Source: https://arxiv.org/html/2509.19163v1

Paper; Included. All 11 Appendix E codes; style and utility emphasis.

Limit: Slop quality and machine authorship are different questions; factuality retained as context.

### S09 — LLM cliché highlighter

Source: https://tools.simonwillison.net/llm-cliche-highlighter

Web tool; Included. All 39 named patterns in inspected implementation.

Limit: Heuristic patterns, not a calibrated detector; includes ordinary rhetorical devices.

### S10 — Highlighter source file

Source: https://github.com/simonw/tools/blob/main/llm-cliche-highlighter.html

Repository file; Included. Read-only inspection of pattern definitions.

Limit: No source code downloaded or executed; duplicates mapped to canonical entries.

### S11 — slop prose linter

Source: https://github.com/bheijden/slop

Repository; Included. All 118 rules in five indexed sets; full two vocabulary inventories.

Limit: Small maintainer audits and domain-specific fits; default-branch snapshot can change.

### S12 — How AI-generated prose diverges from human writing and why it matters

Source: https://reutersinstitute.politics.ox.ac.uk/news/how-ai-generated-prose-diverges-human-writing-and-why-it-matters

Article; Included. Vocabulary, formulaic contrasts, generic claims and language convergence.

Limit: Journalist interviews; human adoption of model-associated words weakens authorship inference.

### S13 — Delving into LLM-assisted writing in biomedical publications through excess vocabulary

Source: https://arxiv.org/html/2406.07016

Paper; Included. Aggregate changes in style-word frequency and their limits.

Limit: Biomedical abstracts, 2010-2024; population estimates are not individual-document verdicts.

### S14 — How Close is ChatGPT to Human Experts?

Source: https://arxiv.org/html/2301.07597

Paper; Included. Sections 3.2 and 4: qualitative and linguistic differences.

Limit: Early ChatGPT, English and Chinese Q&A; direction can vary across languages and domains.

### S15 — Human ChatGPT Comparison Corpus

Source: https://github.com/Hello-SimpleAI/chatgpt-comparison-detection

Repository; Included. README and linguistic_analysis directory inspected.

Limit: Training data not downloaded; linguistic_analysis directory is a placeholder, not a complete analysis package.

### S16 — MAGE

Source: https://github.com/yafuly/MAGE

Repository; Context only. Detector training and evaluation documentation.

Limit: No explicit additional prose-tell taxonomy in inspected documentation; corpus labels are not editorial rules.

### S17 — MAGE: Machine-generated Text Detection in the Wild

Source: https://aclanthology.org/2024.acl-long.3/

Paper; Context only. Benchmark scope and generalisation problem.

Limit: Do not derive stylistic rules merely from a detector score or model architecture.

### S18 — M4

Source: https://github.com/mbzuai-nlp/M4

Repository; Context only. Multilingual and multi-domain detector resources.

Limit: Classifier features do not establish a fixed direction or universal writing tell.

### S19 — M4: Multi-generator, Multi-domain, and Multi-lingual Black-Box Machine-Generated Text Detection

Source: https://aclanthology.org/2024.eacl-long.83/

Paper; Context only. Benchmark scope and cross-domain limits.

Limit: Retained for future research; no invented prose rules added.

### S20 — Measuring Slop companion repository

Source: https://github.com/cshaib/slop

Repository; Unavailable corpus. Root inspected: README, license and gitignore.

Limit: Linked repository currently provides no usable annotation corpus or rule catalog. Paper supplies the taxonomy.

### S21 — Excess vocabulary analysis and annotations

Source: https://github.com/berenslab/llm-excess-vocab

Repository; Included. All 407 style-labelled rows in results/excess_words.csv.

Limit: Across all selected years, not the 2024-only list; compressed counts and analysis code not downloaded.

### S22 — Graphite: AI Tells

Source: https://graphite.io/five-percent/research/ai-tells

Article; supplied phrase and style observations reconciled against the existing catalog. Published 16 September 2026; inspected 2 October 2026.

Limit: Matched web-article study, not a universal authorship test. No dataset, software or skill installed.

### S23 — Graphite: AI Tells: Opus 5.5 Update

Source: https://graphite.io/five-percent/research/ai-tells-opus-5-5-update

Article; supplied additions and model-comparison context reviewed. Published 1 October 2026; inspected 2 October 2026.

Limit: Model-to-model ratios are not human-relative ratios. Observed wording is not necessarily an editing defect.

## Attribution and reuse of the expansion

Sources retain their own copyright and license terms. The original Wikipedia and Vale attribution remains above. This expansion adds original descriptions, editorial guidance and illustrative examples, with source identifiers and URLs for attribution. Word inventories and short pattern labels are preserved as reference data. A software license does not automatically license associated papers, datasets or third-party quotations. Check the relevant license before redistributing those originals. No external skill file is embedded in these deliverables.

## Reconciliation of the supplied additional tells

All 47 rows in `grok-ai-slop-tells-not-in-reference.md` are retained as labeled additional examples in the catalog. Five entries were added; the other forms were merged into existing entries. The supplied claim that every row was absent was checked against the broader patterns rather than accepted as a reason to create duplicate pages.

The examples are supplied illustrations, not quotations from the research articles. Several demonstrate valid technical statements. Missing contractions, missing asides and uniform rhythm are contextual observations, not instructions to insert casual language into formal work. The vanished-em-dash observation is grouped with model/version differences rather than treated as a new punctuation rule.

| Supplied tell | Catalog entry | Decision |
| --- | --- | --- |
| Importance flag, bare | [P139](#p139) | Grouped into new entry |
| Why-X-matters frame | [P139](#p139) | Grouped into new entry |
| Matters-most ranking | [P139](#p139) | Grouped into new entry |
| Just-as-important twin | [P139](#p139) | Grouped into new entry |
| Distinction-matters closer | [P139](#p139) | Grouped into new entry |
| Forward glance | [P138](#p138) | Merged with existing entry |
| What-comes-next handoff | [P138](#p138) | Merged with existing entry |
| Layer stacking | [P138](#p138) | Merged with existing entry |
| Extra dimension | [P138](#p138) | Merged with existing entry |
| In-practice pivot | [P138](#p138) | Merged with existing entry |
| More-than residual contrast | [P012](#p012) | Merged with existing entry |
| Less-like, more-like | [P013](#p013) | Merged with existing entry |
| Instead-it reversal | [P012](#p012) | Merged with existing entry |
| Tradeoff denial | [P140](#p140) | Grouped into new entry |
| Without compromising | [P140](#p140) | Grouped into new entry |
| Without losing | [P140](#p140) | Grouped into new entry |
| Without requiring | [P140](#p140) | Grouped into new entry |
| Does-not-establish disclaimer | [P142](#p142) | Grouped into new entry |
| May-provide hedge | [P142](#p142) | Grouped into new entry |
| Can-provide hedge | [P142](#p142) | Grouped into new entry |
| Not-necessarily qualifier | [P142](#p142) | Grouped into new entry |
| Helpfulness coaching | [P141](#p141) | Grouped into new entry |
| Especially-helpful label | [P141](#p141) | Grouped into new entry |
| Makes-it-easier claim | [P141](#p141) | Grouped into new entry |
| Helps-you-avoid | [P141](#p141) | Grouped into new entry |
| Thoughtful as a rating | [P009](#p009) | Merged with existing entry |
| Together-these summary | [P138](#p138) | Merged with existing entry |
| Single-most superlative | [P143](#p143) | Grouped into new entry |
| Arguably-the-most | [P143](#p143) | Grouped into new entry |
| The-most-powerful | [P143](#p143) | Grouped into new entry |
| The-most-popular | [P143](#p143) | Grouped into new entry |
| Perhaps-the-most | [P143](#p143) | Grouped into new entry |
| One-of-the-best-about | [P143](#p143) | Grouped into new entry |
| Every-single intensifier | [P088](#p088) | Merged with existing entry |
| Enormously | [P088](#p088) | Merged with existing entry |
| Matters-enormously | [P088](#p088) | Merged with existing entry |
| An-enormous-amount | [P088](#p088) | Merged with existing entry |
| Remarkably | [P088](#p088) | Merged with existing entry |
| Incredibly | [P088](#p088) | Merged with existing entry |
| Absolutely essential | [P088](#p088) | Merged with existing entry |
| Immense | [P088](#p088) | Merged with existing entry |
| Need-not hedge | [P142](#p142) | Grouped into new entry |
| Flat sentence length | [P094](#p094) | Merged with existing entry |
| Missing contractions | [P124](#p124) | Merged with existing entry |
| Missing asides | [P130](#p130) | Merged with existing entry |
| Mannered substitute | [P115](#p115) | Merged with existing entry |
| Vanished em dash, new frame | [P066](#p066) | Merged with existing entry |

### Study scope and reported rates

The supplied note reports study-specific frequency ratios. The original article compares roughly 10,000 human articles with model-written articles on matching topics; the update uses 9,974 aligned topics. Counts are normalized for text length and filtered for minimum frequency. A twofold cutoff describes the study selection procedure, not the probability that a passage is AI-written. Some observations come from model-to-model comparisons, and some features are stylistic measurements rather than phrase-frequency tells.

The numerical notes below are retained from the supplied file for traceability. The two linked articles were inspected, but every value in their interactive explorers was not independently reproduced.

Opus 5.5 against human articles: “this matters” 116×, “why _ matters” 92×, “is more than a _ it” 98×, “looking ahead the” 40×, “adds another layer” 27×, “what comes next” 24×.

Astra against human articles: “the _ is not simply” 576×, “rather than relying” 187×, “not simply” 157×, “matters because” 357×. “Distinction matters” did not appear in the human set. Those contrast strings sit next to older negative-parallelism entries, so they are recorded here as rates only, not as new rows.

Astra against Opus 5.5: “does not establish” 275×, “may provide” 18×, “not necessarily” 17×.

Opus 5.5 against Astra: “one of the best _ about” 79×, “the most popular” 45×, “perhaps the most” 29×, “the most powerful” 24×.

Opus 5 against Opus 5.5: “is genuinely” 26×, “matters enormously” 15×. Opus 5.5 against Opus 5: “is especially helpful” 12×, “can help you” 8×.

Claude Opus 5: “less like a _ and more like” 105×. About 65% of tells were unique to one model family. Opus 5.5 still had 2,548 tells at the 2× cutoff, down from 2,666 on Opus 5. Em dashes fell 99% from Opus 5 to Opus 5.5; Astra sat 88% under the human rate; Gemini 3.1 Pro nearly dropped them. The frame count did not fall with the dashes.
