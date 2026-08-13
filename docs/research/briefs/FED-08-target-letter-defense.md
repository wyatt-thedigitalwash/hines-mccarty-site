# BRIEF: Federal target letter defense

`/federal-criminal-defense/target-letter-defense`. Research date 2026-08-13.
Outline and source material only, no drafted page copy.

Confidence labels used throughout: **verified** (fetched or observed directly
this session), **reported** (a source claims it, not independently confirmed),
**inferred** (judgment grounded in verified observation), **ESTIMATE** (a number
not directly observed, with basis stated).

---

## 0. THE CONSTRAINT, AND THE VERDICT

**This page is not a charge page and must not be written as one.** No statute in
the United States Code creates a "target letter," defines a "target," or
requires that anyone be notified they are one. The governing source is the DOJ
Justice Manual, which is **internal DOJ policy and not law**. That is not a
weakness in the page's foundation. It is the page's subject.

**Verified this session, and it is the single strongest finding in the brief:**
the phrase "target letter" appears **zero times** in the Justice Manual's entire
grand jury chapter, JM 9-11.000. The chapter instead publishes an **"Advice of
Rights"** form, in full, quotable text, at JM 9-11.151. Every page in the SERP
uses a phrase the primary source does not use, and no page in the SERP quotes
the text the primary source does publish.

**Three consequences, all binding on the outline in Section 4.**

| Limb | Status | Evidence |
|---|---|---|
| Justice Manual named as policy, not law, per D2's scope limit | **Satisfied, verified** | JM 1-1.200, quoted in Section 6. The disclaimer is DOJ's own, in DOJ's own words, and it is reader-useful rather than a compliance chore: it tells a person that the rules governing their letter are rules the government wrote for itself. |
| The annotated sample letter that content-gaps.md says exists nowhere | **Satisfied, and better sourced than expected** | content-gaps.md records "no page anywhere observed shows an annotated sample target letter." DOJ publishes the operative text itself at JM 9-11.151. The page does not need a redacted client letter, which would carry client-confidentiality and Rule 4-7.13 problems anyway. It annotates the government's own published form. |
| The level 3 template's statute, penalties, and elements sections | **Do not apply. Substitutions specified in Section 4.** | There is no offense, no degree, no statutory maximum, and no offense level. Forcing the template's penalties table onto this page would require inventing a referent. |

**One item is escalated rather than decided.** The C9 in Section 5 rests on a
Justice Manual citation, which `isStatuteCitation` in src/lib/c9.ts will not
parse, and `findUnparseableStatutes` will flag. That flag is **correct and is
the finding**, not a defect to route around. The recommended resolution and why
it should not be resolved by quietly substituting a statute is in Section 5.

---

## 1. Queries and intent

### Primary

**`federal target letter attorney Tampa`**

- **Grade: 6-12mo, confirmed, on different reasoning than keywords.md gave.**
  keywords.md line 142 grades the localised variant 6-12mo with the basis
  "Nationally fragmented, no FL/Tampa firm present; localized MDFL variant is
  the best asymmetric play," and line 169 calls it "the single best asymmetric
  play in this cluster."
- **CORRECTION, recorded rather than smoothed over. The "no FL/Tampa firm
  present" basis is no longer true on the localised query.** This session's
  Tampa SERP carries **three Florida-specific target letter pages**: Scriven Law
  at #2 with "Tampa Target Letters Lawyer," Jonathan Rose at #4 with "Florida
  Target Letter Defense Lawyer," and Hornsby at #9 with "Federal Target Letters
  in Florida." A fourth, criminaldefenseattorneytampa.com at #6, is a target
  letter page on a Tampa domain. **verified 2026-08-13.**
- **The grade survives anyway, on a basis the correction does not touch.** Five
  of the top ten are generic federal-defense hub pages ranking on a specific
  procedural query: Evergreen #1, tpatrialattorneys #3, Mark J. O'Brien #5,
  federal-lawyer.com #8, acquitter.com #10. **A hub outranking dedicated pages
  is the same supply-gap signal W2-05 recorded on money laundering**, and it
  says the dedicated pages that exist are not strong enough to displace generic
  authority. verified.
- **The AI Overview is the opposite of FED-01's, and that is the strategy.**
  FED-01 found a government wall: four of ten organic results were federal .gov
  sources and the AI Overview led with justice.gov. Here the AI Overview cites
  **nine sources and not one is a government site**: evergreenattorneys.com,
  scrivenlawfirm.com (twice), josephhollander.com, sobeldefense.com,
  acquitter.com, theadvocateforyou.com, youtube.com, daneckhartlaw.com.
  verified 2026-08-13.
- **What that means (inferred).** On money laundering the primary source was
  already holding the answer slot and a firm page could not displace it. Here
  **the primary source is absent from the SERP entirely** and the answer slot is
  held by firm pages summarising a document none of them quotes. justice.gov is
  the governing source, it is allowlisted for exactly this purpose, and nobody
  is using it. That is the asymmetry, and it is a different asymmetry than
  keywords.md described.
- **Volume:** `federal target letter attorney Tampa` returns **no data** at the
  Tampa DMA. verified 2026-08-13. "No data" means below Google's reporting
  threshold, not zero.
- **Intent.** Pre-indictment, urgent, and high consequence per visit.
  keywords.md line 167: "recipient of a DOJ/USAO target letter searching within
  hours-days of receipt. Extremely high case value, low volume." The reader is
  holding a physical letter with a statute number on it and a prosecutor's phone
  number. **The page's job is to let them read their own letter**, not to sell
  urgency. content-gaps.md item 6 marks Evergreen's "last best chance" framing
  OBSERVED-NOT-RECOMMENDED. Hold that line.

### Secondary

| Query | Volume | Winnability | Note |
|---|---|---|---|
| `federal target letter` | **10/month, Florida** | **NOW**, inferred | The head informational term at state level. Nobody in the observed field quotes JM 9-11.151. |
| `grand jury target letter` | **10/month, Florida** | **NOW**, inferred | Same volume, and it is the more accurate phrase: the letter exists because of a grand jury investigation, and the Justice Manual files it under the grand jury chapter. Serve it as an H2, not a second URL. |
| `what happens after a federal target letter` | not pulled this session | 6-12mo (keywords.md line 318, localised) | Already carried in src/lib/site.ts as this page's recorded target question. |
| `witness vs subject vs target` | not pulled this session | 6-12mo (keywords.md line 176) | keywords.md attaches this to the grand jury subpoena asset. Section 3 of this page carries the definitions; the strategy question of which asset owns the query is flagged in Section 8. |

### Related searches, verbatim

`Tampa DUI lawyer`; `Hatfield attorney`; `O Brien Law Office`. The same three
returned twice. verified 2026-08-13.

**Zero of three are about target letters, and that absence is a finding.**
FED-01 recorded six of eight related searches as statute-shaped, which was
evidence of an informational tail. Here there is no tail at all: the block is
purely navigational and competitor-branded. **Consistent with 10/month volume
and a reader who searches once, urgently, and does not browse.** Do not build
this page expecting a long-tail cluster underneath it. Build it to be complete
on first read.

### Local pack, verbatim

StechLaw Criminal Defense Lawyer Tampa; Tampa Criminal Defense Attorneys; Brett
Metcalf, Criminal Defense Attorneys, P.A. verified 2026-08-13.

All three are general criminal defense listings. **No federal-specialist firm
holds a pack slot on a purely federal procedural query.** Recorded; it does not
change any decision on this page, since a charge page does not compete for the
pack.

### One compliance observation from the SERP

The #7 result is titled **"Expert Federal Target Letter Lawyer In Miami In
2026."** verified. A Florida-regulated firm cannot use that title: Rule
4-7.13(b)(3) and the specialisation rules put "expert" out of reach absent
certification. Recorded as **OBSERVED-NOT-RECOMMENDED** so that a drafter
benchmarking against the top ten does not copy the pattern that is ranking.

---

## 2. People Also Ask, verbatim, with disposition

Observed 2026-08-13, Tampa-geolocated, on the primary query.

| # | Question, verbatim | Disposition | Reasoning |
|---|---|---|---|
| 1 | "Do the feds send a target letter?" | **FAQ**, and also seeds body copy | The only on-topic question in the set, and it is unusually good. It is answerable in two sentences from verified JM text, and the honest answer is counterintuitive: JM 9-11.153 says notification is **"encouraged"** in appropriate cases and expressly not appropriate in others. So the answer is "sometimes, as a matter of policy, and never as a requirement." Passes C9: nonsensical on any charge page. |
| 2 | "What is the 33-day rule in Florida?" | **Neither. Link out.** | TEMPLATE-FINDINGS Change 3 and the resulting Section 11A.2 rule 5. This is now the ninth charge SERP it has appeared on. **Wrong twice over here**: it is a Florida state rule surfacing on a federal-procedure query, so it is off-charge and off-forum. Link to the Layer 2 correction guide with a line noting it is a state rule. |
| 3 | "How much does a federal prosecutor make in Florida?" | **Refused** | Salary question. Not a defense question, not answerable from any allowlisted source, and no reader holding a target letter is asking it. Off-topic noise, the category TEMPLATE-FINDINGS 4A counts at four across the corpus. |
| 4 | "Who is the current state attorney in Tampa?" | **Refused, on two independent grounds** | First, wrong forum: a target letter comes from a United States Attorney's Office, not a state attorney, and answering it on this page would reinforce the exact confusion the page exists to clear up. Second, **naming a current officeholder creates a currency liability** the Section 9 policy would have to service on every election cycle for no reader benefit. |

**PAA yield: 1 usable of 4, 1 FAQ-eligible.** That is at the corpus average
recorded in TEMPLATE-FINDINGS Section 4A (roughly one in four FAQ-eligible), and
it is worth noting that 4A's own caveat, that "the federal pre-indictment
cluster in wave 3 may well yield differently, because its searchers ask
procedural questions rather than superiority questions," **is not borne out
here**. The PAA set is procedural in only one of four slots. Recorded so the
caveat is not carried forward as though it were confirmed.

No superiority-shaped question appeared in this set. Had one appeared it would
be refused on the record: answering "who is the best target letter lawyer" is an
unverifiable superiority claim under Rule 4-7.13(b)(3).

---

## 3. The question set a person would ask an AI assistant

Phrased as a person holding the letter would actually phrase it.

1. "Does a target letter mean I am definitely going to be indicted?"
2. "What is the difference between being a target, a subject, and a witness?"
3. "What does a federal target letter actually say?"
4. "Should I call the prosecutor whose name is on the letter?"
5. "Am I allowed to tell my spouse or my business partner about this?"
6. "Can they take target status back once they have given it to me?"
7. "How long can they investigate before they have to charge me?"
8. "Do I have to keep the documents they are asking about, or can I clean up my files?"

**The FAQ block is questions 2, 3, and 6, plus PAA #1. Four questions.**

- **Question 2** is the C9 section stated as a question, and every word of the
  answer is verbatim DOJ policy.
- **Question 3** is the content-gaps.md open field. The answer is the Advice of
  Rights text, which DOJ publishes and no observed page quotes.
- **Question 6** is the one nobody in the field answers at all. JM 9-11.155
  exists, it describes a written notification that target status has ended, and
  it says the United States Attorney "may decline to issue such notification"
  and that "No explanation need be provided for declining such a request."
  verified. That is a genuinely useful and genuinely non-obvious fact.
- **PAA #1** is the reader's first question and the SERP confirms it.

**Question 8 does not go in the FAQ, deliberately.** It is answered in body copy
under Section 4 item 6, because a two-sentence FAQ answer to a question about
document destruction is the wrong container for material that touches 18 U.S.C.
1519. Question 4 is likewise body copy, framed as process and as a decision made
with counsel, never as instruction.

---

## 4. Section-by-section outline against the level 3 template

The level 3 template in CASES-WE-DEFEND-PLAN.md Section 4.3 assumes a charge.
Three of its items have no referent here. **Every substitution is stated, with
what replaces it and why.**

| # | Template item | Section on this page | What it must contain FOR THIS PAGE specifically |
|---|---|---|---|
| 1 | H1 and the direct answer | **Unchanged in form** | Per TEMPLATE-FINDINGS Change 1: one paragraph, first 40 words, standing alone with no dependence on the H1. It must say that a target letter is a notification and not a charge, and it must **name JM 9-11.151 in the same paragraph** and say the words "Justice Manual." This is the passage an assistant lifts, and the citation is the thing no competing page carries. |
| 2 | What the statute says | **SUBSTITUTED: "What the Justice Manual is, and what it is not"** | There is no statute. This section quotes **JM 1-1.200** verbatim: the Manual "is not intended to, does not, and may not be relied upon to create any rights, substantive or procedural, enforceable at law by any party in any matter, civil or criminal." Required by D2's scope limit, and it is reader-useful in its own right. The reader learns that the document governing their situation is policy DOJ wrote for itself and can revise. Note the revision dates observed on the sections quoted: 9-11.150 updated April 2018, 9-11.151 updated January 2020, 1-1.200 updated March 2024. |
| 3 | Degrees and penalties table | **SUBSTITUTED: the three-status table.** No penalties table on this page. | Three rows, columns: status, DOJ's definition verbatim, what the Advice of Rights policy attaches to it. Witness, subject, target. There is no degree, no statutory maximum, and no F.S. 921.0022 offense level to put in a penalties table, and inventing one would be worse than omitting it. **This table is the page's C9 artifact**, in the same structural position the value ladder holds on grand theft. |
| 4 | What the state has to prove | **SUBSTITUTED: "What has to happen before you can be charged"** | Fed. R. Crim. P. 7(a)(1): a felony must be prosecuted by indictment unless indictment is waived under 7(b). Fed. R. Crim. P. 6(f): "A grand jury may indict only if at least 12 jurors concur." JM 9-27.220: DOJ's own threshold, which is that the prosecutor believes the admissible evidence "will probably be sufficient to obtain and sustain a conviction," subject to three stated exceptions. All four quoted in Section 6. This is the section that reframes the reader's situation from settled to contested, which is the conversion function template item 4 serves on a charge page. |
| 5 | (new) **What the letter actually says** | **New section. The content-gaps.md open field.** | The Advice of Rights text from JM 9-11.151, quoted and then annotated line by line: the subject-matter line, the right to refuse to answer, the use warning, the right to step out and consult counsel, and the supplemental target warning. **This is the annotated sample letter, sourced from the government rather than from a client's mail.** |
| 6 | (new) **Three things that carry their own exposure now** | **New section. Highest sensitivity on the page.** | 18 U.S.C. 1519, destruction or alteration of records with intent to impede a federal investigation, fined or imprisoned not more than 20 years. 18 U.S.C. 1001, materially false statements, imprisoned not more than 5 years. Both quoted in Section 6. **Framed strictly factually: these are separate federal offenses with their own maximum terms, and conduct after the letter arrives can fall inside them.** Not framed as a threat, not framed as urgency, and never as "one mistake and it is over." Answers assistant-questions 4 and 8. |
| 7 | (new) **What the policy gives you, and what it only encourages** | **New section. The honest read of the Manual.** | JM 9-11.152: a subject or target request to testify "ordinarily should be given favorable consideration," but only on an explicit on-the-record waiver of the Fifth Amendment privilege and consent to full examination under oath. JM 9-11.153: notification is "encouraged," and is expressly inappropriate where there is a likelihood of flight, destruction or fabrication of evidence, or endangerment of witnesses. JM 9-11.155: target status can end in writing, at the United States Attorney's discretion, with no explanation owed for a refusal. JM 9-27.230 and 9-27.250: declination factors and non-criminal alternatives. **The verbs are the point.** Should, encouraged, ordinarily, discretion. Section 2 is what makes this section legible. |
| 8 | (new) **Grand jury secrecy, and who it binds** | **New section.** | Fed. R. Crim. P. 6(e)(2)(A) and (B), quoted in Section 6. The rule permits no obligation of secrecy except in accordance with 6(e)(2)(B), and the seven-item list in 6(e)(2)(B) names grand jurors, interpreters, court reporters, recording operators, transcribers, government attorneys, and certain persons receiving disclosure. **State the rule's text and the list. Do not characterise its legal effect on a witness**, which is a case-law question outside the C12 allowlist. Answers assistant-question 5, and explains why the reader cannot see the file. |
| 9 | (new) **The two clocks** | **New section.** | 18 U.S.C. 3282(a): five years, and the section's own opening qualifier, "Except as otherwise expressly provided by law," must be carried, because longer periods exist for particular offenses and this page has not verified which. Fed. R. Crim. P. 6(g): a grand jury serves until discharged and may serve more than 18 months only on a court finding of public interest, extendable by no more than 6 months. Answers assistant-question 7 with two verified numbers rather than a guess. |
| 10 | How the defense is approached | **Unchanged, and the strictest application of Section 12 on any page in the set** | Process only. What status the letter assigns, what the letter's subject-matter line names, whether counsel contacts the office, whether a request to testify is considered, what documents exist and their preservation. **No prediction, no likelihood language, no "we get letters withdrawn."** content-gaps.md item 6: "explicit contact counsel before responding guidance, no urgency-scare copy." |
| 11 | Where the case is heard | **Unchanged** | Middle District of Florida, Tampa Division, Sam M. Gibbons United States Courthouse, 801 North Florida Avenue, Tampa FL 33602, clerk (813) 301-5400. Division counties: Hardee, Hillsborough, Manatee, Pasco, Pinellas, Polk, Sarasota. **No Criminal Punishment Code artifact and no scoresheet reference of any kind.** The CPC does not apply to federal cases, and this page does not even have a federal offense to score. **No calculator link.** |
| 12 | Handled by | **Renders empty** | `HandledBy` is empty on every page pending the attorney mapping question. |
| 13 | FAQ block with FAQPage schema | **Unchanged** | Assistant-questions 2, 3, 6 plus PAA #1. Four questions. |
| 14 | Related guides | **Unchanged, and carries more weight here than on a charge page** | Section 8. This page sits at the head of the pre-indictment cluster and four Layer 2 assets sit under it. |
| 15 | Byline and last-reviewed date | **Unchanged, 6-month cadence, inferred** | Same cadence as FED-01 but for a different reason. FED-01 carries dollar figures and statistics. This page quotes **DOJ policy text that DOJ revises without notice**, and the observed revision stamps (April 2018, January 2020, March 2024) prove the sections move. A page that quotes a superseded JM section verbatim is worse than a page that paraphrases a current one. |

**Two template items are dropped outright and that is recorded, not silent.**
Item 2's statute section and item 3's penalties table do not exist on this page.
`owner` and `lastReviewed` stay `[NEEDS]`.

---

## 5. The C9 differentiator

Ready to paste into the `c9` field in src/lib/site.ts:

```
statute:   "JM 9-11.151"
section:   "Witness, subject, target: the three statuses and the Advice of Rights text"
assertion: "No statute creates this letter or defines its terms: 'target' and 'subject' exist only in DOJ charging policy at JM 9-11.151, which also publishes verbatim the Advice of Rights text the letter carries, and the phrase 'target letter' appears nowhere in the Justice Manual's grand jury chapter."
```

### Why it is false or nonsensical if another charge is swapped in

Swap in any other page in the set and the assertion is **false on its face, not
merely inapplicable**. Every sibling rests on an enacted offense: money
laundering on 18 U.S.C. 1956 and 1957, wire and mail fraud on 1341 and 1343,
bank fraud on 1344, computer crimes on 1030, weapons on 922(g), grand theft on
F.S. 812.014, drug trafficking on F.S. 893.135. For each of those, "no statute
creates this or defines its terms" is a plain falsehood, and "the phrase appears
nowhere in the Justice Manual's grand jury chapter" is either false or
irrelevant. **This is the only page in the set whose differentiator is the
absence of a statute, and the absence is verified rather than assumed:** the JM
9-11.000 fetch was searched and returned zero occurrences of "target letter"
against four occurrences of "Advice of Rights."

### Manual collision check across the corpus

Performed by hand against every populated assertion in `CHARGE_C9`. No sibling
cites a Justice Manual section, so `statuteKey` produces no shared key, and no
sibling's substance is the definition of a pre-charge investigative status. **No
collision.** The nearest conceptual neighbour is the Layer 2 grand jury subpoena
asset in content-gaps.md item 7, which keywords.md pairs with "witness vs
subject vs target." That is an asset-boundary question, not a C9 collision, and
it is flagged in Section 8.

### ESCALATED, not resolved here: this C9 will trip the checker, correctly

`isStatuteCitation` in src/lib/c9.ts matches only a `N U.S.C. NNNN` pattern or a
`NNN.NNN` Florida pattern. `"JM 9-11.151"` matches neither, so
`findUnparseableStatutes` will flag this entry. **The flag is right and should
not be engineered away.** The checker's own comment states the rationale: "A C9
that rests on no statute cannot be false if another charge were swapped in,
because there is no element to be false." On this page there genuinely is no
element, because there is no offense.

**Three options, with a recommendation.**

1. **Substitute a statute in the field**, for example 18 U.S.C. 3282 or 1519, so
   the field parses. **Rejected.** The differentiator does not rest on either
   one, and a field that says otherwise makes the checker pass by lying to it.
   That is the failure mode HUNT-LIST.md defect 1 describes.
2. **Add a `c9Exempt` entry** alongside the populated `c9`, on the model of
   `white-collar/corporate-fraud`, with a **different reason**: this is a
   procedure page sitting in a charge silo, whose governing source is DOJ policy
   rather than an offense, so the statute-parse check does not apply to it.
   `comparable()` already skips exempt entries regardless of whether `c9` is
   populated, so the differentiator stays documented and simply stops being
   compared. **Recommended.**
3. Amend `isStatuteCitation` to accept Justice Manual citations. **Rejected as
   the first move.** It would let any future page rest on policy without anyone
   deciding that it should, which is the exact silence the check was built to
   break.

**This is a DECISIONS.md item, not a brief decision.** Recorded as UNMET in
Section 9 rather than resolved unilaterally.

---

## 6. Sources and verification status

### Verified this session, fetched 2026-08-13

**https://www.justice.gov/jm/jm-1-1000-introduction** (allowlisted per D2, for
DOJ policy only). JM 1-1.100 and 1-1.200, both stamped "[updated March 2024]".

> "The Justice Manual publicly sets forth internal Department of Justice (DOJ) policies and procedures."

> "The Justice Manual provides internal DOJ guidance. It is not intended to, does not, and may not be relied upon to create any rights, substantive or procedural, enforceable at law by any party in any matter, civil or criminal. Nor are any limitations hereby placed on otherwise lawful litigation prerogatives of DOJ."

**https://www.justice.gov/jm/jm-9-11000-grand-jury** (allowlisted per D2).
Title 9, chapter 9-11.000, Grand Jury.

JM 9-11.151, "Advice of 'Rights' of Grand Jury Witnesses", stamped "[updated
January 2020]". Definitions, quoted:

> "It is the policy of the Department of Justice to advise a grand jury witness of his or her rights if such witness is a 'target' or 'subject' of a grand jury investigation."

> "A 'target' is a person as to whom the prosecutor or the grand jury has substantial evidence linking him or her to the commission of a crime and who, in the judgment of the prosecutor, is a putative defendant. An officer or employee of an organization which is a target is not automatically considered a target even if such officer's or employee's conduct contributed to the commission of the crime by the target organization. The same lack of automatic target status holds true for organizations which employ, or employed, an officer or employee who is a target."

> "A 'subject' of an investigation is a person whose conduct is within the scope of the grand jury's investigation."

Delivery mechanism, quoted:

> "Notwithstanding the lack of a clear constitutional imperative, it is the policy of the Department that an 'Advice of Rights' form be appended to all grand jury subpoenas to be served on any 'target' or 'subject' of an investigation."

> "When a district court insists that the notice of rights not be appended to a grand jury subpoena, the advice of rights may be set forth in a separate letter and mailed to or handed to the witness when the subpoena is served."

The published Advice of Rights text, quoted in full:

> "The grand jury is conducting an investigation of possible violations of Federal criminal laws involving: (State here the general subject matter of inquiry, e.g., conducting an illegal gambling business in violation of 18 U.S.C. § 1955).
> You may refuse to answer any question if a truthful answer to the question would tend to incriminate you.
> Anything that you do say may be used against you by the grand jury or in a subsequent legal proceeding.
> If you have retained counsel, the grand jury will permit you a reasonable opportunity to step outside the grand jury room to consult with counsel if you so desire."

> "Additional Advice to be Given to Targets: If the witness is a target, the above advice should also contain a supplemental warning that the witness's conduct is being investigated for possible violation of federal criminal law."

JM 9-11.150, "Subpoenaing Targets of the Investigation", stamped "[updated April
2018]", quoted in part:

> "Because the potential for misunderstanding is great, before a known 'target' (as defined in JM 9-11.151) is subpoenaed to testify before the grand jury about his or her involvement in the crime under investigation, an effort should be made to secure the target's voluntary appearance."

JM 9-11.152, "Requests by Subjects and Targets to Testify Before the Grand
Jury", quoted in part:

> "It is not altogether uncommon for subjects or targets of the grand jury's investigation, particularly in white-collar cases, to request or demand the opportunity to tell the grand jury their side of the story."

> "under normal circumstances, where no burden upon the grand jury or delay of its proceedings is involved, reasonable requests by a 'subject' or 'target' of an investigation, as defined above, to testify personally before the grand jury ordinarily should be given favorable consideration, provided that such witness explicitly waives his or her privilege against self-incrimination, on the record before the grand jury, and is represented by counsel or voluntarily and knowingly appears without counsel and consents to full examination under oath."

JM 9-11.153, "Notification of Targets", quoted in full:

> "When a target is not called to testify pursuant to JM 9-11.150, and does not request to testify on his or her own motion (see JM 9-11.152), the prosecutor, in appropriate cases, is encouraged to notify such person a reasonable time before seeking an indictment in order to afford him or her an opportunity to testify before the grand jury, subject to the conditions set forth in JM 9-11.152. Notification would not be appropriate in routine clear cases or when such action might jeopardize the investigation or prosecution because of the likelihood of flight, destruction or fabrication of evidence, endangerment of other witnesses, undue delay or otherwise would be inconsistent with the ends of justice."

JM 9-11.155, "Notification to Targets when Target Status Ends", quoted in part:

> "The United States Attorney has the discretion to notify an individual, who has been the target of a grand jury investigation, that the individual is no longer considered to be a target by the United States Attorney's Office."

> "The United States Attorney may decline to issue such notification if the notification would adversely affect the integrity of the investigation or the grand jury process, or for other appropriate reasons. No explanation need be provided for declining such a request."

> "In a particular case, for example, the language of the notification may be drafted to preclude the target from using the notification as a 'clean bill of health' or testimonial."

**Negative finding, verified by search of the fetched chapter text:** the string
"target letter" occurs **0 times** in JM 9-11.000. "Advice of Rights" occurs 4
times.

**https://www.justice.gov/jm/jm-9-27000-principles-federal-prosecution**
(allowlisted per D2). JM 9-27.220, quoted:

> "The attorney for the government should commence or recommend federal prosecution if he/she believes that the person's conduct constitutes a federal offense, and that the admissible evidence will probably be sufficient to obtain and sustain a conviction, unless (1) the prosecution would serve no substantial federal interest; (2) the person is subject to effective prosecution in another jurisdiction; or (3) there exists an adequate non-criminal alternative to prosecution."

JM 9-27.230, substantial federal interest factors, quoted in part:

> "Federal law enforcement priorities ...; The nature and seriousness of the offense; The deterrent effect of prosecution; The person's culpability in connection with the offense; The person's history with respect to criminal activity; The person's willingness to cooperate in the investigation or prosecution of others; The person's personal circumstances; The interests of any victims; and The probable sentence or other consequences if the person is convicted."

JM 9-27.250, non-criminal alternatives, quoted in part:

> "Examples of such non-criminal approaches include civil tax proceedings; civil actions under the False Claims Act or other statutory causes of action for false or fraudulent claims; civil actions under the securities, customs, antitrust, or other regulatory laws; administrative suspension and debarment or exclusion proceedings; civil judicial and administrative forfeiture; and reference of complaints to licensing authorities or to professional organizations such as bar associations."

**https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section3282**
(allowlisted per D2). 18 U.S.C. 3282(a), quoted:

> "(a) In General.-Except as otherwise expressly provided by law, no person shall be prosecuted, tried, or punished for any offense, not capital, unless the indictment is found or the information is instituted within five years next after such offense shall have been committed."

**https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section1519**
(allowlisted). 18 U.S.C. 1519, "Destruction, alteration, or falsification of
records in Federal investigations and bankruptcy", quoted in full:

> "Whoever knowingly alters, destroys, mutilates, conceals, covers up, falsifies, or makes a false entry in any record, document, or tangible object with the intent to impede, obstruct, or influence the investigation or proper administration of any matter within the jurisdiction of any department or agency of the United States or any case filed under title 11, or in relation to or contemplation of any such matter or case, shall be fined under this title, imprisoned not more than 20 years, or both."

**https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section1001**
(allowlisted). 18 U.S.C. 1001(a), quoted in part:

> "(a) Except as otherwise provided in this section, whoever, in any matter within the jurisdiction of the executive, legislative, or judicial branch of the Government of the United States, knowingly and willfully-(1) falsifies, conceals, or covers up by any trick, scheme, or device a material fact; (2) makes any materially false, fictitious, or fraudulent statement or representation; or (3) makes or uses any false writing or document knowing the same to contain any materially false, fictitious, or fraudulent statement or entry; shall be fined under this title, imprisoned not more than 5 years or, if the offense involves international or domestic terrorism (as defined in section 2331), imprisoned not more than 8 years, or both."

**https://www.uscourts.gov/sites/default/files/2025-02/federal-rules-of-criminal-procedure-dec-1-2024.pdf**
(allowlisted). Federal Rules of Criminal Procedure, edition dated **December 1,
2024** as printed on the document.

Rule 6(e)(2), quoted:

> "(A) No obligation of secrecy may be imposed on any person except in accordance with Rule 6(e)(2)(B).
> (B) Unless these rules provide otherwise, the following persons must not disclose a matter occurring before the grand jury: (i) a grand juror; (ii) an interpreter; (iii) a court reporter; (iv) an operator of a recording device; (v) a person who transcribes recorded testimony; (vi) an attorney for the government; or (vii) a person to whom disclosure is made under Rule 6(e)(3)(A)(ii) or (iii)."

Rule 6(f), quoted in part:

> "A grand jury may indict only if at least 12 jurors concur."

Rule 6(g), quoted in full:

> "A grand jury must serve until the court discharges it, but it may serve more than 18 months only if the court, having determined that an extension is in the public interest, extends the grand jury's service. An extension may be granted for no more than 6 months, except as otherwise provided by statute."

Rule 7(a)(1) and 7(b), quoted:

> "(a) When Used. (1) Felony. An offense (other than criminal contempt) must be prosecuted by an indictment if it is punishable: (A) by death; or (B) by imprisonment for more than one year."

> "(b) Waiving Indictment. An offense punishable by imprisonment for more than one year may be prosecuted by information if the defendant-in open court and after being advised of the nature of the charge and of the defendant's rights-waives prosecution by indictment."

### UNVERIFIED, and what to check

| Claim | Status | What to check |
|---|---|---|
| Whether USAO-MDFL issues a document it calls a "target letter," and what a Tampa letter actually contains | **UNVERIFIED after two attempts.** justice.gov/usao-mdfl/divisions returned HTTP 404; the office home page carries no template or procedural detail. | justice.gov/usao-mdfl subpages. **The page must not describe a Tampa-specific letter format.** It describes the Justice Manual's published form, which is verified, and says so. |
| Which AUSA sections or units in the Middle District send them | **UNVERIFIED** | Same source. **Do not name a unit.** Same rule FED-01 applied to field offices. |
| Whether the Tampa Division grand jury sits on a published schedule, and where | **UNVERIFIED** | flmd.uscourts.gov. Not fetched this session for grand jury. The courthouse facts in Section 7 are the reused verified set and do not cover grand jury sittings. |
| Longer limitation periods for particular offenses | **UNVERIFIED, and this is a live risk** | 3282(a) opens "Except as otherwise expressly provided by law." Longer periods exist for some offense categories and none were fetched. **The page must carry the qualifier and must not state five years flat.** Check uscode.house.gov title 18 chapter 213 before the section ships. |
| The legal effect of Rule 6(e)(2)(B) omitting witnesses from the list | **UNVERIFIED and likely unverifiable within C12** | This is a case-law question and case law is outside the allowlist. **State the rule's text and its list. Do not draw the conclusion for the reader.** |
| Immunity mechanics under 18 U.S.C. 6002 and 6003 | **UNVERIFIED** | JM 9-11.154 references 6003; the statutes were not fetched. Belongs to the Layer 2 grand jury subpoena asset, not here. |
| Proffer agreement mechanics | **UNVERIFIED, and deliberately out of scope** | content-gaps.md item 8 is a separate Layer 2 asset. This page links to it and does not absorb it. |
| Whether a target letter tolls, extends, or affects any deadline | **UNVERIFIED. Do not state anything.** | Nothing fetched supports any tolling claim. |
| Whether a December 1, 2025 edition of the Federal Rules supersedes the December 1, 2024 edition fetched | **UNVERIFIED** | uscourts.gov. Recorded because the currency policy in Section 9 will need it, and because quoting a superseded rule text verbatim is the specific failure this page is most exposed to. |
| Any count, rate, or proportion of MDFL target letters that lead to indictment | **Do not state it, at all** | Not fetched, not fetchable from an allowlisted source, and any such figure on a defense page reads as an outcome claim under Rule 4-7.13. |

---

## 7. Local specificity

| Element | Detail | Source status |
|---|---|---|
| Court | Middle District of Florida, Tampa Division, Sam M. Gibbons United States Courthouse, 801 North Florida Avenue, Tampa FL 33602 | **verified**, flmd.uscourts.gov, reused per the known-facts set |
| Clerk | (813) 301-5400 | **verified**, flmd.uscourts.gov |
| Division counties | Hardee, Hillsborough, Manatee, Pasco, Pinellas, Polk, Sarasota | **verified**, flmd.uscourts.gov |
| Prosecuting office | United States Attorney's Office, Middle District of Florida | **verified as an entity**, justice.gov/usao-mdfl. **No unit, section, or named official verified.** |
| Grand jury sittings in the Tampa Division | schedule and location | **UNVERIFIED.** Do not state. |
| Investigating agencies | FBI, IRS-CI, HSI and others | **UNVERIFIED.** Do not name a field office, and do not assert which agency sends what. |
| State forum | **Not applicable and must not be implied.** A target letter is a federal instrument. PAA #4 shows readers confusing the United States Attorney with the state attorney; the page corrects that in one line and does not build a forum section around it. | reasoning, inferred from verified PAA |
| Brandon Regional Service Center | **BLOCKED from copy**, DECISIONS.md D7 | not used |
| Competitive note | Three Florida-specific target letter pages rank on this query (Scriven #2, Jonathan Rose #4, Hornsby #9), correcting keywords.md's "no FL/Tampa firm present" basis. Five of ten results are generic federal hubs. | **verified** in SERP 2026-08-13 |
| Compliance note | #7 result titled "Expert Federal Target Letter Lawyer In Miami In 2026" | **verified**, OBSERVED-NOT-RECOMMENDED under Rule 4-7.13(b)(3) |

---

## 8. Internal links

| Direction | Target | Note |
|---|---|---|
| Up, silo hub | `/federal-criminal-defense` | Required. |
| **Overlap sibling** | **None, and no forum section is required.** | CASES-WE-DEFEND-PLAN.md Section 4.6 applies to state and federal pairs. This page has no state counterpart slug and no state counterpart is possible: the Justice Manual is a DOJ document and the grand jury chapter governs federal grand juries. **Do not assert anything about Florida grand jury practice**, which was not fetched and is UNVERIFIED. |
| Sideways, same silo | The federal charge pages generally, and the white-collar silo hub | Supported by verified text rather than assumption: JM 9-11.152 says these requests arise "particularly in white-collar cases." That is the only sourced basis for choosing which siblings to link, and it is enough for one link to the white-collar hub. **Do not claim which specific offenses most often generate MDFL target letters.** UNVERIFIED. |
| Sideways | Attorney bio via `HandledBy` | Renders empty. Attorney mapping unanswered. |
| Layer 2, specific | content-gaps.md item 7, the MDFL grand jury subpoena guide | **The boundary needs deciding at build time.** keywords.md line 176 attaches "witness vs subject vs target" to the subpoena asset, and this page's C9 rests on those definitions. **Recommendation, inferred:** the definitions live here, because this page's whole substance is JM 9-11.151, and the subpoena asset links up to them rather than restating them. That is the same resolution Section 4.5 applied to the 812.014 table, applied in the opposite direction. |
| Layer 2, specific | content-gaps.md item 8, proffer agreements | Assistant-question 4's neighbour. Not absorbed here. |
| Layer 2, specific | content-gaps.md item 5, the MDFL federal process timeline | The natural next read. |
| Layer 2, specific | content-gaps.md item 10, agents contacting you before you say anything | Pairs directly with the 18 U.S.C. 1001 material in outline item 6. |
| Layer 2, specific | The 33-day-rule correction guide | For PAA #2, with a line noting it is a Florida state rule and this is a federal page. |
| Layer 2, hub | `/resources` | Required. |
| **Not linked** | Any Criminal Punishment Code artifact, scoresheet, or offense-level reference | Standing rule. The CPC does not apply to federal cases, and this page has no offense at all. |
| **Not linked** | The sentencing calculator | Has not cleared its ship gate. It would also be doubly wrong here, since there is no charge to calculate. |

---

## 9. DONE-CRITERIA

| # | Criterion | Status | Note |
|---|---|---|---|
| 1 | The procedure-page constraint tested and answered | **MET** | Section 0. The Justice Manual is named as policy, not law, with JM 1-1.200 quoted; the annotated sample gap is satisfied from the primary source; the three inapplicable template items are substituted with stated replacements. |
| 2 | Justice Manual sections on target letters fetched and the current section verified | **MET** | JM 9-11.150 through 9-11.155 fetched in full. **JM 9-11.151 confirmed as the operative section** for the target, subject, and witness definitions and for the Advice of Rights text, matching the citation the direction anticipated. |
| 3 | The policy-versus-law distinction made explicit, per D2's scope limit | **MET** | Outline item 2 carries it as a reader-facing section, not a footnote, quoting JM 1-1.200 verbatim. Outline item 7 is built entirely on the distinction. |
| 4 | Primary and secondary queries with winnability and volume | **MET** | Section 1. Grade 6-12mo confirmed, with keywords.md's stated basis corrected on the record and a replacement basis given. |
| 5 | Verbatim PAA with disposition | **MET** | Section 2. Four questions, one usable, two refused with reasons, one linked out. |
| 6 | Assistant-question set | **MET** | Section 3. Eight questions, four mapped to the FAQ block, two deliberately routed to body copy with the reason stated. |
| 7 | Section-by-section outline against the level 3 template | **MET** | Section 4. Fifteen rows, with every substitution and every dropped item stated. |
| 8 | C9 in the c9 field's exact shape, collision-checked | **MET** | Section 5. Checked by hand against every populated sibling assertion; no shared statute key and no shared substance. |
| 9 | Source URLs with quoted text for every claim | **MET** | Section 6. Eight allowlisted sources fetched and quoted: three justice.gov policy pages, three uscode.house.gov sections, one uscourts.gov rules edition, plus the negative search result on the chapter text. |
| 10 | Local specificity | **MET, with two blanks recorded as blanks** | Section 7. The AUSA unit and the grand jury sitting schedule are UNVERIFIED and marked do-not-state. |
| 11 | Internal links | **MET** | Section 8, including the asset-boundary recommendation against the Layer 2 subpoena guide. |
| 12 | The C9 `statute` field parses under `isStatuteCitation` | **UNMET** | It does not, and it should not be made to. Section 5 sets out three options and recommends a `c9Exempt` entry with a procedure-page reason distinct from corporate-fraud's. **This is a DECISIONS.md item and is deliberately not decided in a brief.** |
| 13 | MDFL-specific target letter practice verified | **UNMET** | Two fetch attempts, one 404. Section 6 records the retry target. The page can ship without it: it describes the Justice Manual's published form and says so, rather than describing a Tampa letter it has not seen. |
| 14 | Limitation periods longer than five years identified | **UNMET, and it gates outline item 9** | 3282(a)'s "Except as otherwise expressly provided by law" qualifier must be carried and no flat five-year statement made until title 18 chapter 213 is fetched. |
| 15 | Currency of the Federal Rules edition confirmed as the latest | **UNMET** | The December 1, 2024 edition was fetched and verified from uscourts.gov. Whether a December 1, 2025 edition supersedes it was not checked. |
| 16 | No em dashes, no eyebrow labels, no superiority or outcome language | **MET** | Commas, periods, and double hyphens only. One competitor title containing "Expert" is quoted as an observation and marked OBSERVED-NOT-RECOMMENDED. |

**Research passes used: 1 of 2.** Pass 2, if spent, goes to USAO-MDFL practice
first, then title 18 chapter 213, then the Federal Rules currency check, in that
order.
