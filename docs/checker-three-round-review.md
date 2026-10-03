# Checker refinement and three browser test rounds

3 October 2026

## Method

The assistant generated 60 fresh short passages in three rounds of 20 (10 intended tells and 10 ordinary-use controls per round). Target pattern labels were selected before each round ran. Each case was pasted into the actual localhost site and submitted using Check text; the visible DOM supplied the results. Fixes followed each round, then cases were retested. The final version was checked against all 60 new passages and the original 20.

These are synthetic development cases with assistant-authored judgments. All 60 passages are AI-generated, including the ordinary-writing controls. No independent human annotation or authorship evaluation was performed. The final results are on examples used during development, so they are not a held-out accuracy score. The rounds test different examples against successive builds; their initial counts are not a trend estimate.

## Results

A tell counts as found only when its preselected target pattern appears, not merely any highlight. A control counts as flagged if it has any finding. Secondary findings on positive passages are retained below but not scored separately.

| Round | Target found before fixes | Controls flagged before fixes | Target found on final build | Controls flagged on final build |
|---|---:|---:|---:|---:|
| 1 | 8/10 | 3/10 | 10/10 | 0/10 |
| 2 | 6/10 | 3/10 | 10/10 | 0/10 |
| 3 | 5/10 | 2/10 | 10/10 | 0/10 |

After the immediate round 1 fixes, all targets were found and no controls were flagged. After the immediate round 2 fixes, all targets were found but one credit-note control remained flagged. Round 3 also exposed that issue; the final fix evaluates the full multi-sentence contrast span rather than trying to fit it inside one sentence.

Original 20-passage retest: all 12 intended tell passages received relevant findings, including the repeated claim in passage 6. All 8 controls were unflagged. Previously, only 7 tell passages received findings (one partially), and 3 controls were flagged.

## Changes

- Clustered figurative imagery and repeated abstract triads, without restoring individual common-word matching.
- More forms of qualification, process narration, staged revelations, and significance language.
- Repeated conclusions with introductory wording removed, plus nearby sentences that repeat the same words with a clause moved. Word order is preserved; different claims with the same bag of words are not equated.
- Clusters of vague abstractions flagged for review.
- Narrow exclusions for measurement reports, direct offers of personal support, literal weighing instructions, credit/refund corrections, survey questions, and literal uses of “the thing”.
- Checker labels describe observable wording (for example “Reassurance wording” and “Equal-weight framing”). Explanations state that matches may be appropriate. Reference entry titles remain unchanged.
- Fixed singular result-count grammar.

## Remaining limits

These checks still use phrase families and structural heuristics. Novel paraphrases can be missed. Context exclusions can suppress a real stylistic issue, and a literal match can still be appropriate. The checker cannot establish whether evidence supports a claim, whether competing arguments deserve equal weight, or whether reassurance is needed. Metaphor and triad vocabularies are finite. A single isolated contrast such as “It’s not Monday. It’s Tuesday.” can still be highlighted. Long-sentence thresholds cannot determine whether every clause is necessary.

## All 60 cases and final browser results

### R1-1 — tell

A tapestry of innovation becomes a symphony of possibility across the landscape of tomorrow.

Expected target: decorative-metaphor-and-adjective-overload.

Before this round’s fixes: Target found.

Final site status: 3 highlighted passages · 1 pattern to review

Final labels: Clustered figurative imagery.

### R1-2 — tell

Installing the new noticeboard marks a pivotal milestone, reflecting an unwavering commitment to staff wellbeing.

Expected target: inflated-significance-and-legacy.

Before this round’s fixes: Target found.

Final site status: 2 highlighted passages · 1 pattern to review

Final labels: Significance language.

### R1-3 — tell

Our approach brings trust, growth, and innovation. It creates clarity, confidence, and connection.

Expected target: forced-groups-of-three.

Before this round’s fixes: Target found.

Final site status: 2 highlighted passages · 1 pattern to review

Final labels: Repeated abstract triads.

### R1-4 — tell

I hesitate to put this too strongly. A definitive judgment would be premature; we should leave room for other readings.

Expected target: repeated-qualification-and-reassurance.

Before this round’s fixes: Target found.

Final site status: 3 highlighted passages · 1 pattern to review

Final labels: Repeated qualification and reassurance.

### R1-5 — tell

In summary, the revised process assigns an owner to every ticket. To sum up, the revised process assigns an owner to every ticket.

Expected target: repeated-words-and-restated-conclusions.

Before this round’s fixes: Target found.

Final site status: 2 highlighted passages · 2 patterns to review

Final labels: Repeated words and restated conclusions; Repetitive section summaries.

### R1-6 — tell

The receipt proves the fee was paid. Nevertheless, both claims deserve equal weight.

Expected target: reflexive-balance-or-missing-point-of-view.

Before this round’s fixes: Target found.

Final site status: 1 highlighted passage · 1 pattern to review

Final labels: Equal-weight framing.

### R1-7 — tell

I will begin by exploring the question before considering how to frame a thoughtful response.

Expected target: unnecessary-narration-of-the-document.

Before this round’s fixes: Target found.

Final site status: 1 highlighted passage · 1 pattern to review

Final labels: Writing-process narration.

### R1-8 — tell

Here is the thing: ownership is everything. Read that again.

Expected target: staged-revelations.

Before this round’s fixes: Target missed.

Final site status: 2 highlighted passages · 2 patterns to review

Final labels: Staged revelations; Announcing honesty or demanding emphasis.

### R1-9 — tell

The mosaic of potential becomes a beacon of excellence on our journey into tomorrow.

Expected target: decorative-metaphor-and-adjective-overload.

Before this round’s fixes: Target found.

Final site status: 3 highlighted passages · 1 pattern to review

Final labels: Clustered figurative imagery.

### R1-10 — tell

I would not want to draw too firm a conclusion. This remains open to interpretation, and we should resist a definitive reading.

Expected target: repeated-qualification-and-reassurance.

Before this round’s fixes: Target missed.

Final site status: 3 highlighted passages · 1 pattern to review

Final labels: Repeated qualification and reassurance.

### R1-11 — control

The carpenter repaired a tapestry frame. The fabric was torn along the lower edge.

Expected target: No finding.

Before this round’s fixes: Unflagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R1-12 — control

The survey includes 34 households. The interval is wide, so we cannot establish a trend.

Expected target: No finding.

Before this round’s fixes: Unflagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R1-13 — control

Pack bread, cheese, and apples. Bring forks, plates, and napkins.

Expected target: No finding.

Before this round’s fixes: Unflagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R1-14 — control

The sculpture resembles a mosaic. A beacon guides boats past it. The journey takes an hour.

Expected target: No finding.

Before this round’s fixes: Unflagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R1-15 — control

The invoice is a refund, not a new charge. Match it to the September statement.

Expected target: No finding.

Before this round’s fixes: Unflagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R1-16 — control

You are not alone in this. I can bring dinner and stay with you tonight.

Expected target: No finding.

Before this round’s fixes: Flagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R1-17 — control

We tested steel at 10 degrees. We tested steel at 30 degrees. We tested steel at 50 degrees.

Expected target: No finding.

Before this round’s fixes: Flagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R1-18 — control

I will begin by opening the cabinet and photographing the serial number.

Expected target: No finding.

Before this round’s fixes: Unflagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R1-19 — control

Both sides deserve equal weight on the balance. Add five grams to each pan.

Expected target: No finding.

Before this round’s fixes: Flagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R1-20 — control

Clarity, confidence, and connection are the three labels printed on the survey.

Expected target: No finding.

Before this round’s fixes: Unflagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R2-1 — tell

The fabric of potential becomes a mosaic of purpose and a symphony of excellence.

Expected target: decorative-metaphor-and-adjective-overload.

Before this round’s fixes: Target found.

Final site status: 3 highlighted passages · 1 pattern to review

Final labels: Clustered figurative imagery.

### R2-2 — tell

The plan promises resilience, agility, and transformation. It delivers empowerment, inspiration, and opportunity.

Expected target: forced-groups-of-three.

Before this round’s fixes: Target missed.

Final site status: 2 highlighted passages · 1 pattern to review

Final labels: Repeated abstract triads.

### R2-3 — tell

Changing the printer cartridge signals an enduring dedication to innovation and represents a transformative milestone in our story.

Expected target: inflated-significance-and-legacy.

Before this round’s fixes: Target missed.

Final site status: 2 highlighted passages · 1 pattern to review

Final labels: Significance language.

### R2-4 — tell

Without overstating the answer, I am not saying it is settled. Multiple possible interpretations remain available.

Expected target: repeated-qualification-and-reassurance.

Before this round’s fixes: Target found.

Final site status: 3 highlighted passages · 1 pattern to review

Final labels: Repeated qualification and reassurance.

### R2-5 — tell

Here is the kicker: the meeting could have been an email.

Expected target: staged-revelations.

Before this round’s fixes: Target found.

Final site status: 1 highlighted passage · 1 pattern to review

Final labels: Staged revelations.

### R2-6 — tell

In short, every proposal requires a named reviewer before submission. To summarize, every proposal requires a named reviewer before submission.

Expected target: repeated-words-and-restated-conclusions.

Before this round’s fixes: Target missed.

Final site status: 2 highlighted passages · 1 pattern to review

Final labels: Repeated words and restated conclusions.

### R2-7 — tell

We should first acknowledge the complexity of the question before attempting to formulate a nuanced response.

Expected target: unnecessary-narration-of-the-document.

Before this round’s fixes: Target missed.

Final site status: 1 highlighted passage · 1 pattern to review

Final labels: Writing-process narration.

### R2-8 — tell

The log records an outage at noon. Both perspectives deserve equal consideration, including the claim that the system never failed.

Expected target: reflexive-balance-or-missing-point-of-view.

Before this round’s fixes: Target found.

Final site status: 1 highlighted passage · 1 pattern to review

Final labels: Equal-weight framing.

### R2-9 — tell

No dashboard. No workshop. No manifesto. Just delivery.

Expected target: negative-chains-before-a-reveal.

Before this round’s fixes: Target found.

Final site status: 4 highlighted passages · 2 patterns to review

Final labels: Negative chains before a reveal; Dramatic fragments and slogan endings.

### R2-10 — tell

We need trust from customers. We need trust from colleagues. We need trust from investors.

Expected target: repeated-sentence-templates.

Before this round’s fixes: Target found.

Final site status: 3 highlighted passages · 1 pattern to review

Final labels: Repeated sentence openings.

### R2-11 — control

Copper weighs twelve grams. Both sides deserve equal weight on the scales before the measurement begins.

Expected target: No finding.

Before this round’s fixes: Flagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R2-12 — control

We recorded latency at 10 milliseconds. We recorded latency at 20 milliseconds. We recorded latency at 30 milliseconds.

Expected target: No finding.

Before this round’s fixes: Unflagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R2-13 — control

The woven fabric depicts a landscape beside a tapestry. All three pieces are on display in the textile gallery.

Expected target: No finding.

Before this round’s fixes: Unflagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R2-14 — control

This is not an overdue bill. It is a credit note correcting an invoice issued twice.

Expected target: No finding.

Before this round’s fixes: Flagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R2-15 — control

You are not alone. I will call you after work and help book the appointment.

Expected target: No finding.

Before this round’s fixes: Unflagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R2-16 — control

The report says that it is unclear whether the policy affected demand. The sample is too small to separate seasonal effects.

Expected target: No finding.

Before this round’s fixes: Unflagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R2-17 — control

Our packing list includes rice, beans, and lentils. The equipment list includes bowls, spoons, and plates.

Expected target: No finding.

Before this round’s fixes: Unflagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R2-18 — control

Here is the thing you ordered: a replacement handle for the blue suitcase.

Expected target: No finding.

Before this round’s fixes: Flagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R2-19 — control

She said the answer was probably twelve, checked her notes, and corrected it to thirteen.

Expected target: No finding.

Before this round’s fixes: Unflagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R2-20 — control

The renovation represents a milestone in the preservation project: the final roof beam is now secure.

Expected target: No finding.

Before this round’s fixes: Unflagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R3-1 — tell

The platform delivers creativity, courage and commitment. Our team offers integrity, accountability and adaptability.

Expected target: forced-groups-of-three.

Before this round’s fixes: Target found.

Final site status: 2 highlighted passages · 1 pattern to review

Final labels: Repeated abstract triads.

### R3-2 — tell

To put it briefly, each department needs one owner for the monthly report. In essence, each department needs one owner for the monthly report.

Expected target: repeated-words-and-restated-conclusions.

Before this round’s fixes: Target missed.

Final site status: 2 highlighted passages · 1 pattern to review

Final labels: Repeated words and restated conclusions.

### R3-3 — tell

Here’s the thing—the roadmap needs an owner.

Expected target: staged-revelations.

Before this round’s fixes: Target found.

Final site status: 1 highlighted passage · 1 pattern to review

Final labels: Staged revelations.

### R3-4 — tell

Our collaboration is a tapestry of possibility, a symphony of purpose, a beacon of innovation.

Expected target: decorative-metaphor-and-adjective-overload.

Before this round’s fixes: Target found.

Final site status: 3 highlighted passages · 1 pattern to review

Final labels: Clustered figurative imagery.

### R3-5 — tell

The intern renamed the folder, demonstrating a profound commitment to operational excellence.

Expected target: inflated-significance-and-legacy.

Before this round’s fixes: Target missed.

Final site status: 1 highlighted passage · 1 pattern to review

Final labels: Significance language.

### R3-6 — tell

We ought not to overinterpret this. More than one reading is possible, and it would be rash to reach a settled conclusion.

Expected target: repeated-qualification-and-reassurance.

Before this round’s fixes: Target missed.

Final site status: 3 highlighted passages · 1 pattern to review

Final labels: Repeated qualification and reassurance.

### R3-7 — tell

The rollout needs a named owner before it can begin. Before it can begin, the rollout needs a named owner.

Expected target: repeated-words-and-restated-conclusions.

Before this round’s fixes: Target missed.

Final site status: 2 highlighted passages · 1 pattern to review

Final labels: Repeated words and restated conclusions.

### R3-8 — tell

We must first consider the nuance before we attempt to answer the question.

Expected target: unnecessary-narration-of-the-document.

Before this round’s fixes: Target found.

Final site status: 1 highlighted passage · 1 pattern to review

Final labels: Writing-process narration.

### R3-9 — tell

The meter reading establishes the volume. Both sides offer equally valid accounts, including an estimate ten times higher.

Expected target: reflexive-balance-or-missing-point-of-view.

Before this round’s fixes: Target found.

Final site status: 1 highlighted passage · 1 pattern to review

Final labels: Equal-weight framing.

### R3-10 — tell

Success depends on addressing the relevant factors in a suitable manner. By taking appropriate steps, organizations can achieve better outcomes in a range of situations.

Expected target: information-poor-generalities.

Before this round’s fixes: Target missed.

Final site status: 5 highlighted passages · 1 pattern to review

Final labels: Broad, unspecific phrasing.

### R3-11 — control

The gallery has a tapestry, a mosaic, and a fabric sample. A label explains how each was made.

Expected target: No finding.

Before this round’s fixes: Unflagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R3-12 — control

We measured voltage at 2 volts. We measured voltage at 4 volts. We measured voltage at 6 volts.

Expected target: No finding.

Before this round’s fixes: Unflagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R3-13 — control

You’re not alone. I can listen whenever you are ready, and I will bring your prescription tomorrow.

Expected target: No finding.

Before this round’s fixes: Unflagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R3-14 — control

This is not an additional charge. It is a reversal of the duplicate payment shown on your invoice.

Expected target: No finding.

Before this round’s fixes: Flagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R3-15 — control

Both sides deserve equal weight on the weighing scale. Use the same brass masses.

Expected target: No finding.

Before this round’s fixes: Unflagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R3-16 — control

We must first consider the pressure before opening the vessel.

Expected target: No finding.

Before this round’s fixes: Unflagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R3-17 — control

Here’s the thing she found under the chair: a small red button.

Expected target: No finding.

Before this round’s fixes: Unflagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R3-18 — control

Some participants left before the final assessment. That limits the comparison, so we report the dropout count alongside the estimate.

Expected target: No finding.

Before this round’s fixes: Unflagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R3-19 — control

The final audit requires a named owner and a signed report. The monthly report requires an owner and a final signed audit.

Expected target: No finding.

Before this round’s fixes: Unflagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

### R3-20 — control

The survey asks about trust, growth, and innovation. A second question asks about clarity, confidence, and connection.

Expected target: No finding.

Before this round’s fixes: Flagged.

Final site status: No matches in the checked phrases and constructions. Other patterns may still be present.

Final labels: None.

