# BRIEF: Federal wire and mail fraud

`/federal-criminal-defense/wire-mail-fraud`. Research date 2026-08-13. Outline
and source material only, no drafted page copy.

**This page absorbs mail fraud.** `/white-collar-defense/mail-fraud` was removed
under DECISIONS.md D4 after failing the C9 cover-the-name test against wire
fraud. The `mail fraud attorney Tampa` query is served by an H2 here rather than
by a URL. **Overlap sibling:** `/white-collar-defense/wire-fraud`, built on the
Florida Communications Fraud Act at F.S. 817.034 and briefed at
docs/research/briefs/W2-07-wire-fraud.md. C10 forum section and a single
cross-link required. Nothing from W2-07 is restated here.

---

## 0. THE OPEN QUESTION, AND THE VERDICT

**The question this brief had to answer first.** This page inherits a charge
that failed C9. If the page's substance is "wire fraud, and also mail fraud is
the same thing," it has no differentiator of its own, and the H2 that serves
`mail fraud attorney Tampa` is a keyword bolt-on rather than content. So: does
absorbing mail fraud give this page substance, or does it only give it a
heading?

**Verdict: it gives it substance, and the substance is better than D4 assumed.**

D4 and the comment now sitting in src/lib/site.ts both state that 18 U.S.C. 1341
and 1343 differ **only** in the jurisdictional means. Fetched against the source
this session, that is not quite right, and the imprecision is in this page's
favour.

| What D4 recorded | What the fetched text shows | Status |
|---|---|---|
| Both open with the same scheme-or-artifice clause | Confirmed, word for word | **verified** |
| Both carry a 20-year maximum | Confirmed | **verified** |
| Both carry a word-for-word identical 30-year, $1,000,000 enhancement | Confirmed, including the presidentially-declared-disaster trigger | **verified** |
| The only difference is the jurisdictional means | **Not exact.** 1341 also carries a second scheme limb with no counterpart in 1343: schemes to sell, dispose of, distribute, or procure for unlawful use "any counterfeit or spurious coin, obligation, security, or other article." And 1341's means clause is not one means but three: the Postal Service, **any private or commercial interstate carrier**, and knowingly causing delivery by either. | **verified, and a correction** |

**This does not reopen D4, and the brief does not ask for it to be reopened.**
Section 4.6.1's rule would, read strictly, treat the counterfeit-article limb as
an element difference pointing to two pages. Three things argue against acting
on that, and they are stated so the decision is on the record rather than
assumed:

1. D4 did not rest on the statutory text alone. It rested equally on SERP
   evidence that the market has merged the two, and this session's SERP confirms
   it again: two of the ten organic results are combined mail-and-wire pages and
   nothing in the PAA set asks about mail fraud as a separate thing.
2. The counterfeit-article limb is an alternative **object** of the same fraud
   offence, not a different offence, and no searcher in this market is looking
   for it.
3. Reversing D4 would rebuild a page that fails the cover-the-name test on every
   other section it would contain.

**What should change is the sentence, not the decision.** The words "differing
only in the jurisdictional means" appear in DECISIONS.md D4, in
OVERLAP-AUDIT.md, and in the removal comment in src/lib/site.ts. All three
should be footnoted to say the difference is the means **plus** 1341's
counterfeit-article limb. Logged for REVIEW-QUEUE.md.

**One limb of this page is blocked.** The USSG 2B1.1 loss table is UNVERIFIED
after two more fetch attempts this session, the fifth and sixth across three
briefs. See Section 6. The sentencing section stands on verified USSC statistics
instead, which turn out to be the more useful material anyway.

---

## 1. Queries and intent

### Primary

**`federal wire fraud lawyer Tampa`**

- **Grade: 6-12mo**, inferred. keywords.md grades `wire fraud attorney Florida`
  YEARS and says the city-scoped variant is "winnable in 6-12mo." It does not
  grade the federal-qualified variant separately. Nothing in this SERP argues
  for a harder grade, and two things argue for an easier one, below.
- **Volume:** `federal wire fraud` 10/month at Florida level; `18 usc 1343`
  **70/month** at Florida level. verified 2026-08-13. No figure was pulled for
  `18 usc 1341` or for `mail fraud attorney Tampa`, and none is stated.
- **This session's SERP, verified 2026-08-13.** Petro's white-collar hub #1,
  Evergreen #2, Scriven's Tampa wire fraud page #3, StechLaw #4, O'Brien
  Hatfield #5, LawInfo #6, **Sammis with a dedicated "Tampa Mail Fraud Attorney"
  page at #7**, a **blog post** at #8 ("How a Federal Wire Fraud Case Is Built
  Against You in Tampa"), a **bank fraud** page at #9, and Todd Foster's "Mail &
  Wire Fraud Lawyer" at #10.
- **Adding the word "federal" changes seven of the ten results.** Against
  W2-07's SERP on `wire fraud attorney Tampa`: LawInfo falls from #2 to #6,
  Hanlon's mail-and-wire page drops out entirely, StechLaw and Sammis enter, and
  a blog post takes #8. verified by comparison of the two recorded SERPs. **The
  federal-qualified query is a softer, distinct SERP**, and a blog post holding
  #8 with an off-topic bank fraud page at #9 is the clearest supply signal in
  the federal silo so far.
- **A featured snippet is present and its content was not captured.** The item
  type was returned; the text was not. Recorded as an unknown rather than
  inferred from the two prior snippet observations. See Section 6.
- **No AI Overview appears in the captured item types**, where W2-07 recorded
  one on the unqualified query citing six sources. Recorded as an absence
  **within the captured item types**, which is weaker than an observed absence.
- **Local pack:** StechLaw Criminal Defense Lawyer Tampa, OA Law Firm, Sammis
  Law Firm. verified.
- **Intent, and it is the split that keeps this page distinct.** This searcher
  typed the word "federal" themselves. They are not asking which court has their
  case; they have been told, by a target letter, an agent, or an indictment. The
  sibling page's reader is asking whether the thing they were charged with even
  exists in Florida. **Same charge name, opposite starting knowledge.** This
  page never explains that wire fraud is federal as though it were news.

### Secondary

| Query | Volume | Winnability | Note |
|---|---|---|---|
| `18 usc 1343` | **70/month, Florida** | **NOW**, inferred | The largest verified figure available to this page and the second largest in the whole federal cluster after tax evasion and bank fraud. Statute-shaped, exactly the demand TEMPLATE-FINDINGS Change 1 records. Serve it in the statutes section by number. |
| `mail fraud attorney Tampa` | **no figure pulled** | 6-12mo, inferred | Served by an H2 per D4. Two dedicated competitor pages hold it in this SERP (Sammis #7, Todd Foster #10), so the query has real supply and the H2 must be substantive, not a heading. |
| `wire fraud attorney Florida` | not pulled | **YEARS** (keywords.md; avoid.md item 5) | Do not target. |
| `wire fraud sentencing by loss amount` | not pulled | 6-12mo (keywords.md line 371) | **Blocked.** keywords.md's recommended angle for the sentencing variants is the loss table, and the loss table has now failed six fetch attempts across three briefs. Recorded in Section 6. |

### Related searches

**None returned in the captured item types.** Consistent with TEMPLATE-FINDINGS
Section 1.4, which found related searches on only two of ten primary queries.
Recorded as absence rather than omitted.

---

## 2. People Also Ask, verbatim, with disposition

Observed 2026-08-13, Tampa-geolocated, on the primary query. Four questions.

| # | Question, verbatim | Disposition | Reasoning |
|---|---|---|---|
| 1 | "How much does a lawyer cost for fraud?" | **Refused** | Fee question, out of scope for a charge page, and the second charge SERP it has appeared on. Rule 5 of Section 11A.2 applies independently. |
| 2 | "What evidence is needed to prove wire fraud?" | **Body copy**, elements section. **Cross-brief conflict, resolved below.** | Real demand. On this page the honest answer is the elements of 1343 plus the interstate wire, which is the jurisdictional hook, and the elements of 1341 plus the mailing or carrier. |
| 3 | "Is wire fraud a federal offense?" | **Direct-answer paragraph, not the FAQ** | Deliberate. W2-07 already places "Is wire fraud a state crime or a federal crime?" in the sibling page's FAQ, where the answer is a correction about Florida law. Answering the same question in this page's FAQ would put near-identical Q&A blocks on both halves of an overlap pair, which is precisely what C10 exists to stop. Here it is absorbed into the 40-word opening and never given its own heading. |
| 4 | "What is the 33 day rule in Florida?" | **Refused. Link out.** | TEMPLATE-FINDINGS Change 3, ninth charge SERP. Wrong here twice over: it belongs to no charge, and it is a Florida rule surfacing on a federal query. |

**PAA yield: 2 usable of 4, 0 FAQ-eligible.** Below the one-in-four
FAQ-eligibility rate recorded in TEMPLATE-FINDINGS Section 4A, and the reason is
structural rather than bad luck: the one genuinely good question on this SERP is
already owned by the sibling page. The FAQ block comes entirely from Section 3.

**Cross-brief conflict on PAA #2, and how it resolves.** W2-07 dispositions the
identical question to body copy on `/white-collar-defense/wire-fraud`. Both
pages cannot answer "what evidence is needed to prove wire fraud" from the same
material. **The split is by statute, and it is clean.** The sibling page's
elements section is F.S. 817.034: a scheme to defraud defined as a systematic,
ongoing course of conduct, plus obtaining property, plus an aggregate value.
This page's elements section is 1343 and 1341: a scheme or artifice to defraud,
plus a transmission or a mailing, with **no course-of-conduct requirement, no
aggregate value, and no threshold at all**. Same question, two statutes, two
answers that contradict each other on the face of the text. Neither page needs
to know the other exists to answer it.

---

## 3. The question set a person would ask an AI assistant

1. "Is mail fraud a different charge from wire fraud?"
2. "Does it still count as mail fraud if I used FedEx instead of the post
   office?"
3. "Can one email be enough for a wire fraud charge?"
4. "Why does my indictment have so many counts for one scheme?"
5. "What makes the maximum 30 years instead of 20?"
6. "How much time do people actually get in a federal fraud case?"
7. "How does the government come up with the loss amount?"
8. "I got a target letter about a fraud investigation. What happens next?"

**The FAQ block is questions 1, 2 and 5, plus the seeded question already in
src/lib/site.ts.** Four questions.

- Questions 1, 2 and 5 all sit on verified text and all three are nonsensical
  about any other charge on the site.
- **The seeded question, "How much time does a first wire fraud offense carry?"
  (source keywords.md, grade 6-12mo), is now unblocked and stays.** W2-07 flagged
  it for removal because no federal statutory maximum was citable. Both maxima
  and both enhancement clauses are now fetched and quoted in Section 6, and the
  USSC average is fetched too. The answer must distinguish the statutory maximum
  from what the sentencing data shows and must never present either as an
  expectation.
- Question 3 is the jurisdictional element in plain language and belongs in
  body copy, since answering it fully requires the statutory text.
- Question 4 is the multiplication problem and is **blocked**, Section 6.
- Question 7 is **blocked** on 2B1.1, Section 6. Do not answer it with a number.
- Question 8 is a Layer 2 link, not an FAQ.

---

## 4. Section-by-section outline

Against the level 3 template in CASES-WE-DEFEND-PLAN.md Section 4.3.

| # | Section | What it must contain for this charge specifically |
|---|---|---|
| 1 | H1 and direct answer | Per Change 1. Inside 40 words, standing alone, naming both 1343 and 1341. **Opening move is constrained**, see the note below this table. Absorbs PAA #3 without giving it a heading. |
| 2 | **Forum section, opens the body** | C10. One cross-link to `/white-collar-defense/wire-fraud`. Short, because this reader already knows the answer: they typed "federal." Its job is to send the small minority who are actually facing F.S. 817.034 to the page built for them, not to explain federal jurisdiction at length. |
| 3 | What the statutes say | 1343 and 1341, both quoted, both by number. Serves `18 usc 1343` at 70/month. The two texts are set side by side so the reader can see how much of them is identical. |
| 4 | **Mail fraud and wire fraud are one offence with two delivery methods** | **The C9 section, and the H2 that serves `mail fraud attorney Tampa`.** Three verified points, none of which any competitor page in this SERP makes. First, 1341 reaches **any private or commercial interstate carrier**, not only the Postal Service, so a courier shipment is inside the statute. Second, 1341 carries a **counterfeit-article limb** that 1343 has no counterpart to. Third, everything the reader actually fears, the 20-year term and the 30-year enhancement, is identical in both. This section is why the page absorbs the charge rather than merely naming it. |
| 5 | What the government has to prove | PAA #2 and assistant-question 3. Elements of both statutes from the fetched text: the scheme or artifice, the intent, and the means. **State plainly what is absent**, which is any dollar threshold, any minimum number of transmissions, and any requirement that the scheme succeed. That absence is the honest answer and it is verified on the face of the text. |
| 6 | How the defense is approached | Process only, per Section 12. What the documents show, whether intent to defraud can be established, whether the mailing or transmission relied on is the defendant's, and whether the loss figure the government proposes is supportable. **No characterisation of outcomes.** |
| 7 | **The enhancement, and the two things that trigger it** | Assistant-question 5. Quoted from both statutes: affecting a financial institution, **or** a presidentially declared major disaster or emergency. The second trigger is the one nobody expects, and it is the provision that connects this page to `/white-collar-defense/ppp-loan-fraud`. A reader who never touched a bank can still be in the 30-year band. |
| 8 | **What sentencing actually looks like** | Assistant-question 6 and the seeded FAQ. Verified USSC FY2025 figures in Section 6. The 20-year maximum against a 23-month average across all federal theft, property destruction and fraud sentences is the single most useful contrast on the page. Framed strictly as what the national data shows, never as a prediction, never as a result. |
| 9 | Where the case is heard | MDFL, Tampa Division, Sam M. Gibbons courthouse, division counties. Section 7. |
| 10 | Handled by | Renders empty. Attorney mapping unanswered. |
| 11 | FAQ block | Assistant-questions 1, 2, 5, plus the seeded question. Four. FAQPage schema on answered items only, per 11A.3. |
| 12 | Related guides | Layer 2. Section 8. |
| 13 | Byline and last-reviewed | 6-month cadence: the section carries a dollar figure, a statutory maximum, and annual statistics. |

**No degrees-and-penalties table in the state pages' shape.** There are no
degrees, no F.S. 921.0022 offense levels, and no Criminal Punishment Code
scoresheet here, because the CPC does not apply to federal cases. The table on
this page is the **two-statute means comparison** in section 4: columns for
statute, the means it reaches, the scheme limbs it covers, maximum term, and
enhanced term. Forcing the degree/maximum/level columns onto a federal charge
would produce three empty columns and one filled one.

**Opening-move constraint, from Section 4.3's copy-level variation
requirement.** Three pages already open on "this charge does not exist under
that name in Florida": embezzlement, identity theft, and **this page's own
overlap sibling**. This page must not make that move at all, and it does not
need to: its reader already knows the charge is federal. **It opens on the
delivery-means fact**, which is where its C9 lives. Recorded here rather than
left to drafting, because the sibling relationship makes it the single most
likely place in the whole set for two pages to open the same way.

---

## 5. The C9 differentiator

Ready to populate the `c9` field in src/lib/site.ts directly:

```
statute:   "18 U.S.C. 1341 and 1343"
section:   "Mail fraud and wire fraud are one offence with two delivery methods"
assertion: "1341 reaches any private or commercial interstate carrier and not only the Postal Service, and carries a counterfeit-article limb 1343 has no counterpart to, while both rise from 20 years to 30 where the scheme affects a financial institution or a presidentially declared disaster."
```

**Why it is false or nonsensical with another charge swapped in.**

| Swap in | Result |
|---|---|
| Bank fraud, 18 U.S.C. 1344 | **False on two counts.** 1344 has no delivery-means element at all, so there is nothing to reach by carrier, and its 30-year maximum is the baseline rather than an enhancement. D4 verified both. |
| Federal money laundering, 18 U.S.C. 1956 | **Nonsensical.** No scheme to defraud, no mailing, no transmission, and its differentiator is a predicate list, which this assertion does not mention. |
| The overlap sibling, F.S. 817.034 | **Nonsensical.** No federal statute number, no carrier, no 30-year enhancement. It has aggregate-value tiers and a systematic-course-of-conduct element instead, neither of which appears here. |
| Any state charge on the site | **Nonsensical.** No F.S. degree, no offense level, no scoresheet. |

**Collision check performed by hand across the brief set.** `statuteKey`
resolves this to `18 usc 1341`, which nothing else in `CHARGE_C9` claims, so the
automated checker will not compare it to anything, and that is exactly why the
manual check matters. Checked against all nine populated assertions in
src/lib/site.ts:

- `white-collar/wire-fraud` rests on F.S. 817.034 and on **no Florida offence
  carrying this name**. This one rests on two federal statutes and on the means
  of delivery. They are not restatements; neither sentence is true of the other
  page.
- `federal/money-laundering` rests on a predicate list and the absence of a
  threshold. Different mechanism entirely.
- No other assertion mentions a carrier, a mailing, a transmission, or an
  enhancement clause.

**No collision.**

---

## 6. Sources and verification status

### Verified this session, fetched 2026-08-13

**https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section1341&num=0&edition=prelim**
(allowlisted per DECISIONS.md D2). Currency notice on the page, quoted: "Text
contains those laws in effect on August 12, 2026."

**18 U.S.C. 1341, quoted in full:**

> "Whoever, having devised or intending to devise any scheme or artifice to defraud, or for obtaining money or property by means of false or fraudulent pretenses, representations, or promises, or to sell, dispose of, loan, exchange, alter, give away, distribute, supply, or furnish or procure for unlawful use any counterfeit or spurious coin, obligation, security, or other article, or anything represented to be or intimated or held out to be such counterfeit or spurious article, for the purpose of executing such scheme or artifice or attempting so to do, places in any post office or authorized depository for mail matter, any matter or thing whatever to be sent or delivered by the Postal Service, or deposits or causes to be deposited any matter or thing whatever to be sent or delivered by any private or commercial interstate carrier, or takes or receives therefrom, any such matter or thing, or knowingly causes to be delivered by mail or such carrier according to the direction thereon, or at the place at which it is directed to be delivered by the person to whom it is addressed, any such matter or thing, shall be fined under this title or imprisoned not more than 20 years, or both. If the violation occurs in relation to, or involving any benefit authorized, transported, transmitted, transferred, disbursed, or paid in connection with, a presidentially declared major disaster or emergency (as those terms are defined in section 102 of the Robert T. Stafford Disaster Relief and Emergency Assistance Act (42 U.S.C. 5122)), or affects a financial institution, such person shall be fined not more than $1,000,000 or imprisoned not more than 30 years, or both."

**https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section1343&num=0&edition=prelim**
(allowlisted). Same currency notice: laws in effect on August 12, 2026.

**18 U.S.C. 1343, quoted in full:**

> "Whoever, having devised or intending to devise any scheme or artifice to defraud, or for obtaining money or property by means of false or fraudulent pretenses, representations, or promises, transmits or causes to be transmitted by means of wire, radio, or television communication in interstate or foreign commerce, any writings, signs, signals, pictures, or sounds for the purpose of executing such scheme or artifice, shall be fined under this title or imprisoned not more than 20 years, or both. If the violation occurs in relation to, or involving any benefit authorized, transported, transmitted, transferred, disbursed, or paid in connection with, a presidentially declared major disaster or emergency (as those terms are defined in section 102 of the Robert T. Stafford Disaster Relief and Emergency Assistance Act (42 U.S.C. 5122)), or affects a financial institution, such person shall be fined not more than $1,000,000 or imprisoned not more than 30 years, or both."

**Cross-check finding.** W2-07 Section 6 quotes 1343 from the same source in an
earlier session. Re-fetched independently this session and compared: **identical,
word for word, including the enhancement sentence.** The instruction to verify
rather than copy was followed and the earlier quotation holds. The currency
notice has advanced from "2024 Main Ed. (1/6/2025)" to "laws in effect on August
12, 2026," which is a display change on the same operative text.

**What the side-by-side comparison establishes, all verified from the two texts
above:**

| | 18 U.S.C. 1341 | 18 U.S.C. 1343 |
|---|---|---|
| Opening scheme clause | Identical | Identical |
| Second scheme limb | **Counterfeit or spurious coin, obligation, security, or other article** | **None** |
| Means | Post office or authorized depository; **any private or commercial interstate carrier**; knowingly causing delivery by mail or such carrier | Wire, radio, or television communication in interstate or foreign commerce |
| What is transmitted or sent | "any matter or thing whatever" | "any writings, signs, signals, pictures, or sounds" |
| Attempt language on the face of the text | "or attempting so to do" | Absent |
| Maximum | 20 years | 20 years |
| Enhanced maximum | $1,000,000 and 30 years | $1,000,000 and 30 years, **word for word identical** |
| Enhancement triggers | Financial institution, or presidentially declared major disaster or emergency | Same two |
| Dollar threshold | **None** | **None** |
| Degrees or tiers | **None** | **None** |

**https://www.ussc.gov/research/quick-facts/theft-property-destruction-fraud**
(allowlisted). Fiscal year 2025 data. Quoted:

> "Of the 66,662 cases reported to the Commission in fiscal year 2025, 4,804 involved Theft, Property Destruction, and Fraud."
> "75% were sentenced to prison."
> "The average sentence length for individuals sentenced for theft, property destruction, and fraud offenses was 23 months."
> "The median loss for these offenses was $239,730."

Average guideline minimum reported as 33 months for the same fiscal year.

**Scope caveat, and it must survive into the copy.** This category is theft,
property destruction **and** fraud combined. It is not a wire fraud figure and
it is not a mail fraud figure. The page may cite it only as what the data shows
for the federal category these charges sit inside. Presenting it as a wire fraud
average would be a fabrication, and presenting it as what this reader will
receive would be an outcome claim under Rule 4-7.13.

**https://www.ussc.gov/guidelines/primers/loss-calculation** (allowlisted).
Landing page, publication date May 2026. Confirms the primer addresses "common
issues regarding economic loss and loss calculation" under 2B1.1(b)(1), and
quotes the definition:

> loss relies on "reasonably foreseeable pecuniary harm, including intended loss"

**The definition is citable. The table is not.** The landing page does not
reproduce the loss table, and the PDF behind it was not reachable, below.

**Reused without refetching**, per the standing verified-local-facts set: MDFL
Tampa Division venue facts from flmd.uscourts.gov; F.S. 775.082 maxima, which
appear on this page only if the forum section needs to name the state
alternative, and probably do not.

### UNVERIFIED, and what to check

| Claim | Status | What to check |
|---|---|---|
| USSG 2B1.1 base offense level and the loss table | **UNVERIFIED after two attempts this session.** `ussc.gov/guidelines/2025-guidelines-manual/2025-chapter-2-b` returned HTTP 404. A ussc.gov-restricted search returned only the **2015** manual PDF, which is a dated edition and must not be cited as current, plus `guidelines.ussc.gov`, which redirect-looped in earlier sessions. The 2026 primer PDF path returned 404. | **This is now six failed attempts across three briefs** (W2-07 two, this brief two, FED-01 two on the analogous 2S1.1). It is not a transient failure and should stop being retried by individual briefs. It needs one dedicated pass that finds the current Guidelines Manual landing path on ussc.gov and works down, or a decision that the loss table is out of reach and the pages are written without it. Logged for REVIEW-QUEUE.md. **Consequence for this page:** keywords.md's recommended angle for the sentencing variants is the loss table, so that angle is unavailable, and section 8 is built on the USSC statistics instead. |
| That each mailing or each wire may be charged as a separate count (assistant-question 4) | **UNVERIFIED, and outside the C12 allowlist** | The unit of prosecution is not stated on the face of either statute. This is a case-law proposition. Either attribute it to an attorney under their own byline or leave the section out. **Do not source it to a competitor page.** Same disposition W2-07 reached on the same point. |
| Whether a mailing must cross a state line under 1341 | **UNVERIFIED as to interpretation** | The fetched text qualifies the **private or commercial carrier** limb with "interstate" and does not attach that word to the Postal Service limb. That is an observation about the text, not a legal conclusion, and the page must not draw the conclusion. |
| Statute of limitations for mail and wire fraud, including any longer period where a financial institution is affected | **UNVERIFIED, not fetched** | Title 18 limitations provisions on uscode.house.gov. Do not state a period. |
| 18 U.S.C. 1349, attempt and conspiracy for fraud offences | **UNVERIFIED, not fetched** | Relevant because federal fraud indictments routinely add it, but nothing about it may be stated until fetched. |
| Featured snippet content and holder on the primary query | **UNVERIFIED.** Item type returned, text not captured. | Re-pull the SERP. Do not assume it follows the contact-line pattern recorded twice before, even though that is the likely shape. |
| Whether an AI Overview renders on this query | **UNVERIFIED.** Absent from the captured item types, which is not the same as observed absence. | Re-pull. W2-07 recorded one on the unqualified variant. |
| Volume for `18 usc 1341` and `mail fraud attorney Tampa` | **Not pulled, deliberately** | Outside the verified figure set supplied for this brief. No number is stated anywhere above. |
| Any count of mail or wire fraud prosecutions in the Middle District | **Do not state it** | Not fetched, and a district-level count edges toward a record characterisation. |
| Investigating agency identity, including USPIS for the mail limb | **UNVERIFIED** | Plausible and probably correct, which is exactly why it is dangerous. Do not name an agency or a field office without an official source. |

---

## 7. Local specificity

| Element | Detail | Source status |
|---|---|---|
| Court | Middle District of Florida, Tampa Division, Sam M. Gibbons United States Courthouse, 801 North Florida Avenue, Tampa FL 33602, clerk (813) 301-5400 | **verified**, flmd.uscourts.gov, quoted in W1-01 |
| Division counties | Hardee, Hillsborough, Manatee, Pasco, Pinellas, Polk, Sarasota | **verified**, flmd.uscourts.gov |
| Prosecuting office | United States Attorney's Office, Middle District of Florida | **verified as an entity**; no unit or section verified |
| Investigating agencies | USPIS on the mail limb, FBI, IRS-CI | **UNVERIFIED.** Do not name any of them, and do not name a field office. |
| State alternative forum | Thirteenth Judicial Circuit, Edgecomb Courthouse, 800 E. Twiggs Street Room 101 | **verified**, hillsclerk.com. Named in the forum section only if at all; this page's reader is federal. |
| Brandon | **BLOCKED** | DECISIONS.md D7. Not used. |
| Competitive note | Sammis holds #7 with a dedicated **mail fraud** page and Todd Foster #10 with a combined mail-and-wire page, while a **blog post** holds #8 and a **bank fraud** page holds #9 | **verified** in SERP. Two dedicated mail fraud competitors means the H2 must carry real content; two off-target results in the top ten means the field is thin enough to enter. |

---

## 8. Internal links

| Direction | Target |
|---|---|
| Up, silo hub | `/federal-criminal-defense` |
| **Overlap sibling** | `/white-collar-defense/wire-fraud`, **one link, from the forum section only**. C10. Body copy never shared. |
| Sideways, same silo | `/white-collar-defense/bank-fraud`, from the enhancement section, because "affects a financial institution" is the natural bridge and 1344 makes that the baseline rather than an enhancement |
| Sideways, same silo | `/white-collar-defense/ppp-loan-fraud`, from the enhancement section, because the presidentially-declared-disaster trigger is the provision that connects them |
| Sideways | Attorney bio via `HandledBy`. **Renders empty**, attorney mapping unanswered. |
| Layer 2, specific | `/resources/guides/federal-target-letter`, for assistant-question 8 |
| Layer 2, specific | `/resources/guides/federal-grand-jury-subpoena` |
| Layer 2, specific | The 33-day-rule correction guide, for PAA #4, noting it is a Florida rule and this is a federal page |
| Layer 2, hub | `/resources` |
| **Not linked** | Any Criminal Punishment Code artifact or scoresheet. The CPC does not apply to federal cases, so the link would be wrong on the merits independent of any ship gate. |
| **Not linked** | The sentencing calculator. It has not cleared its ship gate, and it would be wrong here regardless. |

---

## 9. DONE-CRITERIA

| # | Criterion | Status | Note |
|---|---|---|---|
| 1 | Open question stated and answered before the outline | **MET** | Section 0. The page has substance independent of its sibling, and D4 is not reopened. |
| 2 | 18 U.S.C. 1341 and 1343 fetched from uscode.house.gov and verified rather than copied | **MET** | Section 6. Both quoted in full from independent fetches; 1343 cross-checked against W2-07's earlier quotation and found identical. |
| 3 | Primary and secondary queries with winnability grade and volume | **MET** | Section 1. Grade 6-12mo inferred, reasoning stated. Only supplied figures used; no additional volume pulled. |
| 4 | Verbatim PAA with a disposition for every question | **MET** | Section 2. Four questions, two usable, none FAQ-eligible, with the structural reason stated. |
| 5 | Assistant-question set, 6 to 8, with FAQ mapping | **MET** | Section 3. Eight questions, four to the FAQ block including the now-unblocked seeded question. |
| 6 | Section-by-section outline against the level 3 template | **MET** | Section 4, with the penalties-table deviation and the opening-move constraint both stated and reasoned. |
| 7 | C9 in the c9 field's exact shape, with the swap test | **MET** | Section 5. Four swaps run; collision-checked by hand against all nine populated assertions. |
| 8 | Every statutory claim carries a fetched allowlisted URL and quoted text | **MET** | Section 6. Three allowlisted sources fetched and quoted; nothing stated from memory. |
| 9 | Local specificity with source status per element | **MET** | Section 7. Brandon excluded per D7. |
| 10 | Internal links including silo hub, overlap sibling, bio slot, Layer 2 | **MET** | Section 8. |
| 11 | Rule 4-7 compliance throughout | **MET** | No superiority language, no results, no guarantees. The USSC figures carry an explicit no-prediction instruction and a scope caveat in Section 6. |
| 12 | No em dashes, no eyebrow labels | **MET** | Commas, periods, and double hyphens only. |
| 13 | USSG 2B1.1 loss table verified | **UNMET** | Two attempts this session, six across three briefs. Escalated out of per-brief retries and logged for REVIEW-QUEUE.md. Section 8 of the outline stands on USSC statistics without it. |
| 14 | Unit of prosecution verified, so assistant-question 4 can be answered | **UNMET** | Not a statutory proposition. Outside the C12 allowlist. Either attorney-attributed or the section is dropped. |
| 15 | Featured snippet holder and content recorded | **UNMET** | Item type present in the pre-collected SERP, text not captured. Recorded as unknown rather than inferred from prior observations. |
| 16 | Whether an AI Overview renders on this query | **UNMET** | Absent from captured item types, which is weaker evidence than an observed absence. Recorded as such. |

**Research passes used: 1 of 2.** Pass 2, if spent, goes to the 2B1.1 loss table
first, and it should be spent once for the whole brief set rather than again for
this page.
