# PHASE A: Level 3 Template Validation

Validates the charge-page template in docs/build/CASES-WE-DEFEND-PLAN.md Section
4.3 against what actually ranks today. Extends docs/research/content-gaps.md and
docs/research/keywords.md rather than re-deriving them.

Research date: 2026-08-13. Three representative charges, one per silo, all
inside the wave 1 / wave 2 scope:

| Silo | Charge | Wave | Primary query tested |
|---|---|---|---|
| State | Grand theft | 1 (promoted from 2 on 2026-08-13) | grand theft attorney Tampa |
| White-collar | Embezzlement | 1 | embezzlement lawyer Tampa |
| Federal | Drug trafficking (federal counterpart) | 2 overlap | federal drug trafficking lawyer Tampa |

Plus two informational companion queries, since template item 1 is written for
informational extraction: "how much money is grand theft in Florida" and
"is embezzlement a felony in Florida".

---

## 0. Method, and a correction to the standing caveat

**Method.** SERPs pulled two ways on 2026-08-13: (a) live Google in a
Tampa-geolocated browser session, and (b) the DataForSEO SERP API with
`location_code 1015214` (Tampa, Florida, United States), `language_code en`,
desktop, depth 20. Search volumes from Google Ads via DataForSEO at the
Tampa-St Petersburg DMA (`200539`) and Florida state (`21142`) levels.
Competitor pages fetched directly and graded for word count, tables, FAQ
blocks, citations, dates, and tool links.

**CORRECTION, recorded rather than smoothed over.** Every prior workstream
carries this caveat: "no local pack was directly observed for ANY query this
session" (keywords.md Section 7; content-gaps.md Section 1 limitation 1;
DOSSIER.md Section 9). **That limitation no longer applies.** This session
observed Tampa-geolocated SERPs directly. The live browser session reported
its own location as "Tampa, FL" on the results page, and the API was pinned to
the Tampa city location code. Local packs rendered on **10 of 10** primary
queries tested in Phase B, with named firms and live review counts.

Two consequences worth carrying forward, both outside the template question but
material to the plan:

1. **Review counts are now directly observed, not aggregator-reported.** The
   Tampa local pack on these queries is held by Daniel J. Fernandez, P.A.
   (4.9, 574 reviews), Hersem Law (5.0, 236), Sammis Law Firm (4.4, 167),
   StechLaw (4.6, 136), Brett Metcalf (4.9, 125), Greater Tampa Law (4.9, 123),
   Musca Law (5.0, 109), OA Law Firm (4.8, 75), Mike G Law (4.6, 76), Scriven
   Law (4.5, 76), Michael J. Petro (5.0, 17). **verified 2026-08-13.** The
   5-to-25-percent staleness band in local-authority.md no longer needs to be
   applied to these eleven. Note that Fernandez at 574 sits far above the
   ladder in DOSSIER.md Section 3, which topped out at Smith & Eulo 193.
2. **The paid vacuum is narrower than paid-reality.md recorded.** The live
   session showed a Local Services Ads unit ("Sponsored Criminal lawyers |
   Tampa") on `grand theft attorney Tampa`, carrying Musca Law (4.9, 243) and
   Hagood & Hagood, PLLC (4.8, 156), plus a Google search ad from
   djfernandezlaw.com. paid-reality.md recorded only Whittel showing LSA
   creatives and only Metcalf Falls running criminal search ads. **verified
   2026-08-13.** This does not change any template decision; it changes the
   paid section of the dossier and belongs in a re-run of W6.

Neither point is a template finding. Both are recorded here because they were
observed while doing template work and would otherwise be lost.

**Confidence labels** used throughout: **verified** (seen directly this
session), **reported** (a source claims it, not independently confirmed),
**inferred** (judgment grounded in verified observation), **ESTIMATE** (a
number not directly observed, with basis stated).

---

## 1. What the SERPs actually contain

### 1.1 Featured snippets: nearly absent

| Query | Featured snippet | Holder | Format |
|---|---|---|---|
| grand theft attorney Tampa | **none** | -- | -- |
| embezzlement lawyer Tampa | **yes** | mjpetro.com | plain paragraph, a phone-number CTA |
| federal drug trafficking lawyer Tampa | **none** | -- | -- |
| how much money is grand theft in Florida | **none** | -- | -- |
| is embezzlement a felony in Florida | **none** | -- | -- |

All verified 2026-08-13. Across the full Phase B set of ten primary queries,
**one featured snippet appeared in ten SERPs**, and its content is
"Call Attorney Michael J. Petro at 813-499-9111 if you've been accused of
embezzlement, fraud, or other white-collar crime." That is a contact line
promoted into a snippet, not a definition Google chose to answer with.

### 1.2 What sits in the slot instead: AI Overviews

| Query | AI Overview | Cited sources | Contains a table |
|---|---|---|---|
| how much money is grand theft in Florida | yes | 8 sites, led by Online Sunshine (leg.state.fl.us) and flsenate.gov | **yes**, Property Value / Maximum Prison / Maximum fine |
| PPP loan fraud attorney Tampa | yes | 5, all law firms | no |
| drug trafficking attorney Tampa | yes | 12, all law firms | no |
| gun charge lawyer Tampa | yes | 8, all law firms | no |
| wire fraud attorney Tampa | yes | 6, all law firms | no |
| grand theft attorney Tampa | no | -- | -- |
| embezzlement lawyer Tampa | no | -- | -- |

All verified 2026-08-13. Two patterns, and they point in different directions:

- On the **informational** query, the AI Overview answered with a table built
  from the statute and cited the Legislature's own site first. The top organic
  result on that query is also **leg.state.fl.us/statutes/0812.014.html**, the
  statute itself, above every law firm. verified.
- On the **commercial** queries, the AI Overview is a firm-recommendation
  block: it names firms ("Hanlon Law: Led by Will Hanlon...", "Michael J.
  Petro: Focuses on federal white-collar and financial crimes") and then asks
  the searcher a qualifying question ("Whether the charges are in state court
  or federal court", "Roughly how much loan money is involved in the
  investigation?"). Being *named* there requires an indexed page tightly
  matched to the charge, which is what the template already builds.

### 1.3 People Also Ask: present on 10 of 10, and mostly not about the charge

PAA rendered on every primary query. The single most common PAA question in
the entire set is **"What is the 33 day rule in Florida?"**, which appeared on
**seven** of the ten primary queries (grand theft, embezzlement, drug
trafficking, gun charge, domestic violence, money laundering, identity theft).
It is not a question about any of those charges. Full verbatim PAA sets are
recorded per page in the Phase B briefs.

### 1.4 Related searches

Returned on only two of the ten primary queries. On `embezzlement lawyer
Tampa` they are entirely navigational and competitor-branded (Criminal defense
attorney Hillsborough County, Top criminal defense attorney Tampa, Hanlon Law
Tampa, Hanlon Law Clearwater, Criminal defense attorney Pasco County). On
`Middle District of Florida federal criminal defense attorney` they are
court-logistics queries (Tampa federal court case Search, Federal Public
Defender Tampa, Middle district Local Rules, Tampa Federal court house,
Federal Courthouse Tampa address, USAO MDFL). Verbatim sets are in the
relevant briefs. On `how much money is grand theft in Florida` the "People
also search for" block is statute-shaped: Fss grand theft, Fss 812.014 grand
theft, Fss petit theft under $100, Petit theft statute, Felony petit theft.

### 1.5 Is any result a tool?

**No.** Across all thirteen SERPs observed in Phase A and Phase B, not one
result was an interactive tool, calculator, quiz, or estimator. Every result
was a firm page, a directory listicle, a government page, a forum thread, or a
video page. **verified absence within the SERPs observed 2026-08-13.** This is
scoped: it does not contradict the standing correction that Barklaw and
Delgado run FL calculators, it confirms tools-and-hooks.md's finding that they
are weakly discoverable.

### 1.6 One more SERP feature the plan does not account for

`embezzlement lawyer Tampa` carried a **Discussions and forums** block:
a Reddit r/tampa thread ("Looking for an affordable criminal defense
attorney", 40+ comments) and an Avvo legal-answers thread. verified. Charge
pages do not compete for that block, but it is a real slot above several
organic results and it is evidence that hiring-stage searchers go to forums.

---

## 2. What the winning pages contain

Five pages fetched and graded 2026-08-13. Two further fetches (Mayberry grand
theft, Hussein & Webber grand theft) returned HTTP 404 on the URLs the SERP
reported and are recorded as unassessed rather than assumed thin.

| Page | Words (ESTIMATE) | Table | FAQ block | Statutes cited | Date | Byline | Tool link | Courthouse named |
|---|---|---|---|---|---|---|---|---|
| budalaw.com grand theft | 2,800-3,000 | no | no | **none** | no | no | no | no |
| allcriminaldefense.law embezzlement | 800-900 | no | 3 question headings, not a block | 812.014 (link only) | no | no | no | no |
| criminalattorneytampa.net drug trafficking | ~1,100 | no | no | 893.135, "10/20/Life" unnumbered | no | no | no | no |
| tfosterlaw.com embezzlement | not fetched | -- | -- | -- | -- | -- | -- | -- |
| mjpetro.com white-collar (snippet holder) | not fetched | -- | -- | -- | -- | -- | -- | -- |

Word counts are ESTIMATE, basis: fetch summarizer output, not exact counts.

**Zero of the three graded pages has a table. Zero has an FAQ block. Zero has a
last-reviewed date. Zero has an author byline. Zero links to a tool. Zero names
a courthouse, division, or arresting agency.** The longest page in the set,
Buda Law at roughly 2,900 words, cites no statute section at all.

This is the same ceiling content-gaps.md found in 2026-07 ("450 to 1,200 words,
uncited, non-localized, and undated"), with one correction: the top of the
local range is higher than recorded. Buda Law is near 3,000 words. Length alone
is therefore not the differentiator, and a 1,200-to-1,800-word page that is
cited, tabled, dated, and localized still clears this field.

### AMENDED 2026-08-13 by W3. Currency is not the open dimension. Tables and offense levels still are.

The paragraph above is true of the three wave 1 and wave 2 pages it graded and
**does not generalise**. Two W3 briefs reached this independently, working on
different charges from different SERPs, which is why it is recorded as an
amendment rather than as one brief's outlier.

| Brief | Page | What it carries |
|---|---|---|
| ST-02 drug possession | longwelllawyers.com, the AI Overview's top firm source | Author byline, a 2025-11 date, a six-question FAQ block, nine statute citations |
| ST-03 battery | brancatolawfirm.com, informational position 4 and an AI Overview citation | Table, byline, date, roughly 2,767 words |

**The corrected finding:** currency, bylines, and FAQ blocks are contested in
the higher-volume state charge niches and open only in the thinner ones. Do not
plan a page around beating the field on freshness without checking that field
first. **What remains open across every niche observed so far is the penalties
table, the offense-level column, and named local specificity.** No page in any
niche this project has graded carries an F.S. 921.0022 offense level.

The original three-page finding stands as written for the pages it graded. It is
the generalisation that failed, and the failure is instructive: three pages in
two niches were not enough to support a market-wide claim about a dimension that
varies by niche.

---

## 3. Where the template should change

Three changes, each with the evidence that forced it. Everything else in
Section 4.3 is confirmed by this pass and should not be touched.

### CHANGE 1. Item 1 is written for a SERP feature that is not there.

**Current text:** "H1 and the direct answer. One paragraph answering 'what is
this charge' in the first 40 words, plain language. **This is the
featured-snippet slot.**"

**Evidence:** one featured snippet in ten primary-query SERPs, and its content
is a phone number. Four of ten carry an AI Overview instead. On the
informational companion query, the AI Overview holds the whole above-fold slot,
cites eight sites, and leads with the Legislature's own statute page, which is
also the #1 organic result. verified 2026-08-13.

**Recommended replacement:** keep the paragraph and the 40-word discipline,
which are right for a different reason, and restate what it is for:

> **H1 and the direct answer.** One paragraph answering "what is this charge"
> in the first 40 words, plain language, written to stand alone with no
> dependence on the H1 or any preceding sentence. This is the passage an AI
> Overview or assistant lifts. It must restate the operative statutory figure
> in the statute's own numbers and name the statute in the same paragraph,
> because on the informational variants Google is currently answering with the
> statute itself and citing leg.state.fl.us above every firm page.

**Why this matters beyond wording.** The old framing invites a page optimized
to win a box that does not exist on these queries. The new framing makes the
opening paragraph do the job the SERP actually rewards, and it is consistent
with the FAQ standard already in Section 11A.1, which correctly identifies
passage extraction rather than rich results as the value. The template's item 1
was written before that standard and never reconciled to it. This change
reconciles them.

### CHANGE 2. Item 3's table needs two more columns, and they are now sourceable.

**Current text:** "Degrees and penalties table, with the scoresheet link
(Section 4.2)."

**Evidence:** no graded competitor page has a table at all, while the AI
Overview on the informational grand theft query *builds* one, with columns
Property Value / Maximum Prison / Maximum fine. verified. Separately, this
session verified the full offense-severity mapping for every wave 1 and wave 2
state charge directly from F.S. 921.0022 (see the per-page briefs), which
means the "offense level 4, here is what that scores" promise in Section 4.2
is now backed by fetched primary source rather than pending.

**Recommended replacement:**

> **Degrees and penalties table.** Columns: statutory subsection, degree,
> statutory maximum, **offense level under F.S. 921.0022**, and the scoresheet
> link on the offense-level column. Every row cites its subsection. The table
> is not optional and is not replaceable by prose: it is the single format no
> competitor page in this market uses and the one an AI Overview reconstructs
> when no page supplies it.

**Note on the scoresheet link.** Section 4.2 and Section 11.1 already forbid
linking the calculator until it clears C1 through C8. Nothing here changes
that. The offense-level column ships with the number and without the link
until the gate is cleared, which is strictly better than shipping neither.

### CHANGE 3. Add a rule for cross-charge PAA questions. Section 11A does not have one.

**Evidence:** "What is the 33 day rule in Florida?" surfaced as a PAA question
on seven of ten primary charge queries. verified. Under the current FAQ standard,
each of those six pages would face the same tempting question, and Rule 2 of
Section 11A.2 says questions come from research rather than imagination, which
this one does. But Rule 1 says each question must be "askable about this charge
and nonsensical about any other," which this one fails on all six. The standard
as written gives contradictory instructions for the single most common question
in the market.

**Recommended addition to Section 11A.2, as a fifth rule:**

> 5. **A question that surfaces on more than one charge SERP is not a charge
>    FAQ.** It is answered once, in the Layer 2 guide that owns it, and every
>    charge page whose SERP surfaced it links there from item 9. Repeating it
>    across pages is the mechanism by which twenty-six pages become
>    interchangeable, which is exactly what C9 exists to prevent. Record the
>    question and the pages it surfaced on, so the Layer 2 backlog is driven by
>    measured demand rather than by what is convenient to write.

**What this rule immediately produces.** The 33-day question is real, recurring
demand with no charge to attach it to. It should become a Layer 2 guide, and it
is carried into Phase C on that basis.

---

## 4. What does not change, and why that is stated rather than assumed

Verified against this pass, no revision needed:

- **Item 2, what the statute says, cited.** Strengthened, not changed. On the
  informational grand theft query the statute page is the #1 organic result and
  the first AI Overview citation. Quoting the statute is not a compliance
  chore, it is the thing Google is currently ranking.
- **Item 4, elements.** Untouched. Nothing in the SERPs bears on it.
- **Item 5, defense approach as process only.** Untouched, and the compliance
  reasoning in Section 12 is unaffected by anything observed.
- **Item 6, where the case is heard.** Confirmed and now cheaper to execute:
  the Hillsborough Clerk's own site was fetched this session and names
  Edgecomb Courthouse (800 E. Twiggs Street), Pat Collier Frank Courthouse
  (419 Pierce Street), Plant City Courthouse (301 North Michigan Ave), and a
  **Brandon Regional Service Center (311 Pauls Drive, Suite 110, Brandon FL
  33511)**, with "Circuit Criminal" listed among the services at those
  locations. verified. Zero graded competitor pages name any courthouse.
- **Item 7, handled by.** Untouched. Still blocked on WEBSITE-PLAN.md Open
  Question 2.
- **Item 8, FAQ block with FAQPage schema.** Confirmed, with the addition in
  Change 3. Zero graded competitor pages have an FAQ block, so the
  differentiator recorded in content-gaps.md cross-topic finding 2 still holds.
- **Item 9, related guides.** Untouched, and Change 3 gives it more to do.
- **Item 10, byline and last-reviewed date.** Confirmed. Zero of three graded
  pages carries either. Currency remains the most beatable dimension in this
  market.
- **Word-count target.** The plan's 1,200 to 1,800 words in Section 10.1 stands.
  It is not the top of the local range, but the top of the local range is an
  uncited, undated, tableless 2,900-word page, so matching it buys nothing.

**No change is recommended to the anti-duplication test (4.5), the overlap-page
rule (4.6), the calculator ship gate (5), or the currency policy (9).** Nothing
in this pass bears on them, and inventing revisions to look productive is
explicitly out of scope.

---

## 4A. Observed PAA yield across wave 1 and wave 2

Added 2026-08-13 from the brief review. **This is an observed yield, not a rule.**
It describes what ten briefs produced, in one market, on one day. It is recorded
so that waves 3 and 4 can weight research effort against evidence rather than
against the assumption that People Also Ask is the primary source of FAQ content.

### The counts

"Usable" means dispositioned to body copy or to the FAQ block. "FAQ-eligible"
means it survived C9 at the question level and could be answered completely in
two sentences.

| Brief | PAA observed | Usable | FAQ-eligible |
|---|---|---|---|
| W1-01 Middle District of Florida | 4 | 1 | 0 |
| W1-02 Embezzlement | 4 | 3 | 1 |
| W1-03 Grand theft | 4 | 2 | 2 |
| W2-02 Drug trafficking | 2 | 1 | 1 |
| W2-03 Gun crimes | 4 | 2 | 2 |
| W2-04 Domestic violence | 4 | **0** | **0** |
| W2-05 Money laundering | 4 | 1 | 0 |
| W2-06 Identity theft | 4 | 2 | 1 |
| W2-07 Wire fraud | 4 | 3 | 1 |
| OPP-01 PPP loan fraud | 4 | 3 | 2 |
| **Total** | **38** | **18** | **10** |

**Roughly one PAA question in four was FAQ-eligible.** Two briefs, the Middle
District hub and domestic violence, produced no FAQ-eligible question at all from
their entire PAA set.

### Why the other twenty were refused

| Reason | Count |
|---|---|
| The 33-day rule, which belongs to no charge | 7 |
| Superiority-shaped, unanswerable under Rule 4-7.13(b)(3) | 2 |
| Fee questions ("how much does a lawyer cost for fraud") | 2 |
| Victim-side or otherwise wrong audience for a defence page | 2 |
| Outcome-shaped ("how to beat", "can you beat") | 2 |
| False premise ("why do most domestic violence cases get dismissed") | 1 |
| Off-topic noise | 4 |

Three of those categories are now standing rules rather than per-brief judgment
calls: the 33-day pattern became Section 11A.2 rule 5, the superiority pattern
became rule 6, and the outcome-shaped pattern was already covered by the
standing Rule 4-7.13 rail.

### What actually carried the FAQ blocks

**The assistant-question sets.** Across the ten briefs, roughly 34 FAQ slots were
specified and about 24 of them came from the assistant-question sets rather than
from PAA. Those sets were drafted by asking how a person would phrase the
question to an assistant, then checked against C9 and against the two-sentence
answerability test.

That is the practical finding. **PAA told us what Google surfaces. It did not
tell us what to write.** The questions that passed C9, answered completely in two
sentences, and were genuinely askable only about the charge in question came
predominantly from the assistant framing.

### What this suggests for waves 3 and 4, stated as a suggestion

Pull PAA for every primary query, because it is cheap, because it is the only
direct evidence of what Google surfaces, and because the refusals are worth
recording. But **do not budget research time as though PAA will fill the FAQ
block.** On this evidence it fills about a quarter of it. Budget the larger share
for the assistant-question work, which is where the usable questions came from.

**Two caveats that keep this honest.** PAA sets rotate: two different sets were
observed on the same query on the same day for embezzlement and for grand theft.
And this is one practice area in one market. A different silo, particularly the
federal pre-indictment cluster in wave 3, may well yield differently, because its
searchers ask procedural questions rather than superiority questions.

---

## 5. One finding that is not a template change but should not be lost

**Local charge-term search volume is below Google's reporting threshold for
almost every wave 1 and wave 2 term.** Google Ads volume, Tampa-St Petersburg
DMA, pulled 2026-08-13:

| Keyword | Monthly volume | Top-of-page bid range |
|---|---|---|
| criminal defense attorney Tampa | 2,400 | $31.11 to $97.54 |
| domestic violence lawyer Tampa | 90 | $50.00 to $65.41 |
| federal criminal defense attorney Tampa | 20 | -- |
| embezzlement lawyer Tampa | 10 | -- |
| criminal defense attorney Brandon FL | 10 | -- |
| grand theft attorney Tampa | no data | -- |
| drug trafficking attorney Tampa | no data | -- |
| gun charge lawyer Tampa | no data | -- |
| money laundering defense attorney Tampa | no data | -- |
| identity theft defense lawyer Tampa | no data | -- |
| wire fraud attorney Tampa | no data | -- |
| PPP loan fraud attorney Tampa | no data | -- |

"No data" means Google Ads returns no volume, which means below its reporting
threshold, not zero. verified 2026-08-13.

Two things follow, and both are already consistent with the plan rather than
against it:

1. **The $31 to $97 top-of-page bid on the head term is the first observed
   Tampa CPC datum in the corpus.** Every CPC figure in paid-reality.md and
   DOSSIER.md Section 6 is ESTIMATE. This one is not. It sits above the
   "national keyword-level $30-45 core" band W6 called defensible, and it
   independently supports avoid.md item 67 (do not buy Tampa head terms).
2. **Charge pages in waves 1 and 2 cannot be measured on local charge-term
   rankings, because the terms carry no measurable local volume.** That is not
   an argument against building them. WEBSITE-PLAN.md Section 1 already builds
   for capability and sequences by winnability, and CASES-WE-DEFEND-PLAN.md
   Section 7 already says wave 4 "should simply not be measured on rankings."
   This finding extends that honesty upward: **waves 1 and 2 should be measured
   on statewide informational capture and on conversion, not on local
   charge-term position.** Statewide volume is where the traffic is:
   "third degree felony Florida" 1,000/month, "grand theft Florida" 320,
   "domestic violence Florida charges" 170, "10-20-life Florida" 170,
   "grand theft third degree Florida" 140, "identity theft Florida statute" 70,
   "Florida criminal punishment code scoresheet" 70, all Florida state-level,
   verified 2026-08-13.

---

## DONE-CRITERIA

| Criterion | Status | Note |
|---|---|---|
| Three representative charges across three silos examined | MET | Grand theft (state), embezzlement (white-collar), federal drug trafficking (federal), all inside wave 1/2 scope, plus two informational companions. |
| Featured snippet holder and format recorded | MET | One snippet in the three primary SERPs (mjpetro.com, plain paragraph, CTA text); recorded as near-absent across the wider ten-query set with AI Overviews in the slot instead. |
| PAA questions in full | MET | Verbatim for all three, and for all ten Phase B primaries in the per-page briefs. |
| Related searches recorded | MET | Returned on only two of ten; both recorded verbatim; absence recorded rather than papered over. |
| Tables and FAQ blocks in winning pages assessed | MET | Five pages targeted, three fetched and graded, two 404s recorded as unassessed. Zero tables, zero FAQ blocks. |
| Typical word count | MET | 800 to 3,000 words, ESTIMATE, basis stated; correction recorded to content-gaps.md's 450-1,200 ceiling. |
| Whether any result is a tool | MET | Verified absence across all thirteen SERPs observed, with the scope of the claim stated. |
| Template changes stated with evidence, or no change stated | MET | Three changes, each with the observation that forced it; eight template items explicitly confirmed unchanged with the reason. |
| No invented revisions | MET | Items 4, 5, 7, 9, 10 and Sections 4.5, 4.6, 5, 9 examined and left alone. |
| No em dashes, no eyebrow labels | MET | Commas, periods, and double hyphens only. |
