# STATE: Content briefs, wave 1 and wave 2

Mission: content briefs for the wave 1 and wave 2 charge pages in
docs/build/CASES-WE-DEFEND-PLAN.md Section 7, plus one validated page template
they all inherit. Wave 3 and wave 4 are out of scope for this session.

Last updated 2026-08-13. Nothing committed. No push, no deploy.

---

## Deliverable status

**Re-sequenced 2026-08-13 (CASES-WE-DEFEND-PLAN.md Section 7.2).** Grand theft
moved into wave 1 and PPP loan fraud moved out to opportunistic. Two files were
renamed with `git mv` so the filenames match the sequence:
`W2-01-grand-theft.md` became `W1-03-grand-theft.md`, and
`W1-03-ppp-loan-fraud.md` became `OPP-01-ppp-loan-fraud.md`. **The wave 2
numbering therefore starts at W2-02 with no W2-01**, which is deliberate: the
remaining files kept their numbers so that references to them elsewhere still
resolve.

| File | Status | Passes used | Notes |
|---|---|---|---|
| TEMPLATE-FINDINGS.md | **DONE** | 1 of 2 | 3 template changes recommended, 8 items confirmed unchanged. Two corrections to the standing research caveats recorded. |
| W1-01-middle-district-florida-hub.md | **DONE** | 1 of 2 | Not a level 3 charge page. Scope resolved by D1. |
| W1-02-embezzlement.md | **DONE, C9 revised** | 1 of 2 | Strongest source position in wave 1. C9 moved off the shared 812.014 table onto the position-of-trust fact pattern. |
| OPP-01-ppp-loan-fraud.md | **DONE, demoted out of wave 1** | 1 of 2 | Revised from NOW to 6-12mo. Publish-blocked on the limitations period. Deferred, not cancelled: Section 7.2. |
| W1-03-grand-theft.md | **DONE, promoted into wave 1** | 1 of 2 | Strongest single opportunity in the set. Keeps the 812.014 value ladder under the C9 collision ruling. |
| W2-02-drug-trafficking.md | **DONE** | 1 of 2 | Two publish blockers, both single fetches. |
| W2-03-gun-crimes.md | **DONE** | 1 of 2 | Carries the best verified C9 fact in the set. |
| W2-04-domestic-violence.md | **DONE** | 1 of 2 | Highest measurable local volume. Three publish blockers. |
| W2-05-money-laundering.md | **DONE** | 1 of 2 | Publish-blocked on 896.101(3). |
| W2-06-identity-theft.md | **DONE** | 1 of 2 | Slug added by D3. Two publish blockers. |
| W2-07-wire-fraud.md | **DONE** | 1 of 2 | Second-weakest source position. Publish-blocked on 817.034. |
| TOOLS.md | **DONE** | 1 of 1 | 6 recommendations ranked, 5 exclusions stated. |

**No brief was marked UNMET.** Every brief carries its unverified items
explicitly rather than being abandoned, which is the honest form of the
two-pass rule here: the outstanding items are single targeted fetches or are
blocked on a plan decision, not on further research.

---

## Remaining-20 brief programme, started 2026-08-13

30 charges, 9 briefed in waves 1 and 2, 20 remaining.
`/white-collar-defense/corporate-fraud` is excluded and needs no brief: D12
reclassified it as a category overview, it is `c9Exempt`, and its page is
written. Grouping and dependency order are in CASES-WE-DEFEND-PLAN.md Section
7.4.

**Filename convention changed for these 20.** The existing files are prefixed by
plan wave (`W1-`, `W2-`, `OPP-`). These 20 charges have no plan wave, because
Section 7's table only sequences the 6 that keywords.md graded. New briefs are
prefixed by silo instead: `FED-`, `WC-`, `ST-`. Mixing a wave prefix onto an
unwaved charge would imply a grade that does not exist.

### W1, conditional pairs: DONE. Neither page collapses.

Both carried binding constraints from plan Section 4.6.2, and W1 ran serially
because either could have changed the page list. Neither did.

| Brief | Status | Constraint verdict |
|---|---|---|
| FED-01-money-laundering.md | **DONE** | **SATISFIED.** Predicate list, threshold contrast, and federal sentencing all verified. The SERP asks for exactly the material the constraint points at: "List of specified unlawful activity money laundering" is a live related search. |
| FED-02-computer-internet-crimes.md | **DONE** | **SATISFIED, with a stated qualification.** 1030(a)(1) has no Florida analogue at all; (a)(4) and (a)(5) are structurally distinct rather than absolutely so, because Florida turns fraud and damage into enhancements where the federal statute makes each an offense. Real, but subtler than the drug or gun pairs. |

**The page list is unchanged by W1.** W2 through W4 may proceed.

### The one decision W1 produced

**Where does the Florida computer crime page belong?** Section 4.6.2 left this
open, to be resolved from SERP evidence. It is resolved, and the answer is that
it does not belong in the white-collar silo as currently labelled.

Evidence: federal-shaped demand outweighs Florida-shaped demand about nine to
one (`computer fraud and abuse act` 140/month and `18 usc 1030` 40/month, both
Florida level, against `florida computer crimes act` at 20/month), and the
commercial SERP for `computer crimes attorney Tampa` pulls three practice areas
at once, of which only internet fraud is white-collar. Position 7 on that SERP
is a child pornography defence page.

Recommendation, ranked, in FED-02 Section 1. Preferred option is to move it to
the state silo as a Florida offence page. **This changes the page list, so it
needs a D-series decision on the D12 precedent and is not actioned here.**

Two things wait on that decision: the counterpart link on FED-02 is deliberately
unwired, and the Florida page cannot be briefed until its silo is settled.

### Request budget

8 of 300 DataForSEO requests used in W1. Every call logged with endpoint and
purpose in the session log. The counter persists on disk between runs rather
than resetting per invocation, so the cap cannot be defeated by restarting.

---

## Questions only the human can answer

**ALL SEVEN ANSWERED 2026-08-13. Decisions recorded in docs/build/DECISIONS.md
(D1 through D7), plus two standards added at the same time (D8, D9). All applied
to the plans, to src/lib/site.ts, and back into the affected briefs.**

| Q | Decision | Where it landed |
|---|---|---|
| Q1 | Silo hub carries the MDFL content. Layer 2 guide not built. | D1. WEBSITE-PLAN.md Tier 3 duplicate removed. W1-01 updated. |
| Q2 | Allowlist amended: uscode.house.gov for U.S. Code text, justice.gov for procedure and policy only and never for what a statute says. | D2. CASES-WE-DEFEND-PLAN.md Section 10.3 and the C12 row. Used the same day: 18 U.S.C. 1341, 1343, 1344 and 1028A fetched and quoted into W1-03, W2-06 and W2-07. |
| Q3 | Both slugs added. Neither folded. | D3. src/lib/site.ts, WEBSITE-PLAN.md Tier 2. |
| Q4 | Test applied, not assumed. Mail fraud **fails**, removed, absorbed as an H2 in the federal page. Bank fraud **passes**, kept. | D4. New CASES-WE-DEFEND-PLAN.md Section 4.6.1 with the evidence and the generalisable rule. src/lib/site.ts. |
| Q5 | No federal identity theft page. 1028A is a companion count. | D5. W2-06 records it; nothing built. |
| Q6 | Waves 1 and 2 measured on statewide informational capture and conversion, never local charge-term position. Must be told to the client **before** reporting begins. | D6. New CASES-WE-DEFEND-PLAN.md Section 7.1, plus WEBSITE-PLAN.md Section 1. |
| Q7 | Brandon Regional Service Center stays out of copy pending the attorneys. | D7. WEBSITE-PLAN.md Section 9, new open question 10a. |
| A | "Named in the commercial AI Overview" is an explicit objective with a recorded baseline. | D8. New CASES-WE-DEFEND-PLAN.md Section 4.7. |
| B | Review velocity revised a third time against the observed pack. Local pack entry is a multi-year objective. | D9. New CASES-WE-DEFEND-PLAN.md Section 8.5.6. |

The original text of each question is kept below, because a decision is easier
to audit when the question it answered is still visible.

Ordered by what they block.

### Q1. Does the MDFL hub live at `/federal-criminal-defense` or at `/resources/guides/middle-district-florida-federal-court`?

**Blocks:** W1-01, which is wave 1 item 1.
CASES-WE-DEFEND-PLAN.md Section 7 puts a "Middle District of Florida federal
hub" in wave 1. WEBSITE-PLAN.md Section 3 Tier 3 puts a federal district hub
under `/resources/guides/`. `/federal-criminal-defense` already exists as the
level 2 silo hub. Two pages cannot own one query.
**Recommendation: the silo hub carries it, the Layer 2 guide is not built.**
The brief is written that way and would need reworking if the answer differs.

### Q2. Extend the verification allowlist to uscode.house.gov and justice.gov?

**Blocks:** every federal statutory claim in W1-01, W1-03, W2-02, W2-03, W2-05,
W2-06 and W2-07. Seven of ten briefs.
CASES-WE-DEFEND-PLAN.md Section 10.3 allowlists "uscourts.gov and ussc.gov" for
"federal statutes and guidelines." **Neither publishes the United States Code.**
As written the allowlist makes it impossible to verify 18 U.S.C. 1343, 1028A,
922(g), 1956, or 21 U.S.C. 841 and 846, all of which the wave 2 pages must cite.
uscode.house.gov is the Office of the Law Revision Counsel, the official
publisher of the U.S. Code, and justice.gov hosts the Justice Manual and the
USAO pages already ranking on these queries. Both are official government
sources of exactly the kind the allowlist was written to prefer.
This is a plan amendment, not a research finding.

### Q3. Two wave 1 and wave 2 pages have no slug in src/lib/site.ts.

**Blocks:** W1-03 and W2-06.
- **PPP loan fraud** is in wave 1 but is not one of the nine white-collar slugs.
  Recommendation: add `/white-collar-defense/ppp-loan-fraud`, do not fold it
  into bank fraud, because the C9 substance is the programme-specific
  limitations period and the audit-before-indictment posture.
- **Identity theft** is in wave 2 but is not in either the white-collar or the
  federal list. Recommendation: add `/white-collar-defense/identity-theft`. The
  statute has its own four-tier offense-level ladder spanning levels 4 to 9,
  verified this session.

### Q4. Should the four-page wire fraud cluster be merged?

**Affects:** W2-07.
`/white-collar-defense/wire-fraud`, `/white-collar-defense/mail-fraud`,
`/white-collar-defense/bank-fraud` and `/federal-criminal-defense/wire-mail-fraud`
are four pages covering two statutes. The comment in src/lib/site.ts already
flags this as an unmade content decision. W2-07 shows the white-collar page can
be kept genuinely distinct by building it on the Florida Communications Fraud
Act rather than on the federal statute, but that argument does not extend to
mail fraud and bank fraud, which have no separate Florida analogue.

### Q5. Is there a federal identity theft page in the plan or not?

**Affects:** W2-06's forum section and C10 compliance.
18 U.S.C. 1028A is a routine companion count to Florida identity theft charges,
and there is no federal slug for it. Either the overlap pair is completed or the
white-collar page's forum section links up to the federal silo hub instead of
to a sibling. The brief currently assumes the latter.

### Q6. Should waves 1 and 2 be measured on local charge-term rankings at all?

**Affects:** how this work is reported on.
Google Ads reports **no measurable Tampa DMA volume** for grand theft, drug
trafficking, gun charge, money laundering, identity theft, wire fraud, or PPP
loan fraud attorney terms. verified 2026-08-13. Only domestic violence (90/month)
and embezzlement (10/month) register at all. The plan already says wave 4 should
not be measured on rankings; the evidence says waves 1 and 2 should be measured
on **statewide informational capture and on conversion**, not on local
charge-term position. This is a reporting-expectation decision, not a build
decision, and it should be settled before anyone is asked to report on it.

### Q7. Confirm the Brandon Regional Service Center is usable in copy.

**Affects:** all seven state-side briefs.
hillsclerk.com lists a **Brandon Regional Service Center at 311 Pauls Drive,
Suite 110, Brandon FL 33511** among its clerk locations offering Criminal Courts
services. verified 2026-08-13. That is a clerk facility in the firm's own town
and no competitor page mentions it. Confirm with the attorneys that referring to
it is accurate for the case types these pages cover, since a service centre is
not necessarily where a felony is heard.

---

## Corrections this session made to the existing research

Recorded here rather than edited into the dated research files, following the
convention in CASES-WE-DEFEND-PLAN.md Section 8.5.4.

1. **The standing "no local pack observable" caveat is retired.** It appears in
   keywords.md Section 7, content-gaps.md Section 1, and DOSSIER.md Section 9.
   This session observed Tampa-geolocated SERPs directly and local packs
   rendered on 10 of 10 primary queries, with live review counts. Details and
   the observed counts are in TEMPLATE-FINDINGS.md Section 0.
2. **The paid vacuum is narrower than paid-reality.md recorded.** A live Local
   Services Ads unit was observed on a charge query carrying Musca Law and
   Hagood & Hagood, plus a Google search ad from djfernandezlaw.com.
   TEMPLATE-FINDINGS.md Section 0.
3. **The first observed Tampa CPC datum in the corpus.**
   `criminal defense attorney Tampa`, 2,400/month, top-of-page bids $31.11 to
   $97.54. Every CPC figure in paid-reality.md and DOSSIER.md Section 6 is
   ESTIMATE; this one is not.
4. **PPP loan fraud is no longer a NOW-graded thin field.** Nine dedicated PPP
   or SBA pages now hold the top nine. Revised to 6-12mo. W1-03 Section 1.
5. **The LegalClarity publisher wall on the grand theft informational query is
   gone.** keywords.md recorded it holding four of eight positions; it appears
   nowhere in the top nine today. W2-01 Section 1.2.
6. **The money laundering SERP is softer than recorded.** keywords.md put
   LawInfo at #1; no directory now appears until Justia at #12. W2-05 Section 1.
7. **The content ceiling is higher than content-gaps.md's 450 to 1,200 words.**
   Buda Law's grand theft page runs roughly 2,900 words. It still has no table,
   no FAQ block, no date, no byline, and no statute citation.
   TEMPLATE-FINDINGS.md Section 2.

---

## Publish blockers, consolidated

Single targeted fetches from already-allowlisted sources. None needs a plan
decision.

**Cleared 2026-08-13 by the D2 allowlist amendment**, fetched from
uscode.house.gov, Current 2024 Main Ed.: 18 U.S.C. 1341, 1343, 1344 and 1028A.
Quoted text recorded in W1-03, W2-06 and W2-07. The remaining federal citations
(1014, 1957, 371, 3161, 3142, 922(g), 1956, 21 U.S.C. 841 and 846) are no longer
blocked, only not yet fetched.

| Brief | Fetch |
|---|---|
| W2-02 drug trafficking | F.S. 893.135(4) substantial assistance; F.S. 921.0024(1)(b) multiplier value |
| W2-04 domestic violence | F.S. 784.03; F.S. 784.041; F.S. 741.283; the remainder of F.S. 741.2901(2) |
| W2-05 money laundering | F.S. 896.101(3) and its definitions subsection |
| W2-06 identity theft | F.S. 817.568(2)(b) and the definition of "personal identification information" |
| W2-07 wire fraud | F.S. 817.034 operative text |
| W2-01 grand theft | F.S. 772.11 civil theft; F.S. 812.014(3) petit theft |
| ~~TOOLS.md item 2, the 33-day rule~~ | **RESOLVED 2026-08-13. Outcome: common misconception.** Fla. R. Crim. P. 3.134, verified from The Florida Bar's compilation updated 2026-07-13. The deadline is 30 days, not 33; day 33 is the automatic ROR release date; good cause moves it to day 40; release is not dismissal; and subdivision (b), new as of 2025-07-01, makes the number 60 and 63 for anyone out on pretrial release. Two adversarial verifiers failed to refute it. The guide becomes a **correction page**. The outbound links in the seven briefs that point at it **stay**. Full record in TOOLS.md item 2. |
| All briefs, one fetch serving four | USSG 2B1.1 loss table from ussc.gov. Two attempts failed this session, one 404 and one redirect loop; the loss-calculation primer at ussc.gov/guidelines/primers/loss-calculation was returned live and is the recommended retry target. |

Two items remain blocked on something other than a fetch:

- **The PPP limitations period** (W1-03). Still the page's publish blocker. The
  D2 amendment makes the statute fetchable, but which statute governs has to be
  identified first, and the ten-year figure in the corpus is reported rather
  than verified.
- **Whether each wire is a separate count** (W2-07). Now known to be a case-law
  proposition rather than a statutory one, since 18 U.S.C. 1343's text does not
  state its unit of prosecution. That places it outside the C12 allowlist
  entirely: it goes under an attorney's byline or it comes out.

---

## Method

SERPs pulled 2026-08-13 two ways: a Tampa-geolocated live browser session, and
the DataForSEO SERP API at `location_code 1015214` (Tampa, Florida), English,
desktop, depth 20. Search volume from Google Ads via DataForSEO at
`location_code 200539` (Tampa-St Petersburg DMA) and `21142` (Florida).
Statutes fetched from flsenate.gov and leg.state.fl.us; court facts from
flmd.uscourts.gov and hillsclerk.com. Competitor pages fetched and graded
individually.

Confidence labels used throughout the briefs: **verified**, **reported**,
**inferred**, **ESTIMATE**. Every number not directly observed carries ESTIMATE
with its basis.

**Standing limitation, replacing the retired one:** PAA sets rotate. Two
different PAA sets were observed on the same query on the same day for
embezzlement and for grand theft, and both are recorded in their briefs. No PAA
set should be treated as canonical, and none was used as the sole justification
for a content decision.

**Observed PAA yield, recorded in the method notes so later waves can budget
against it.** Across the ten briefs, **38 PAA questions were observed, 18 were
usable, and 10 were FAQ-eligible.** Two briefs produced no FAQ-eligible question
at all. The FAQ blocks were carried predominantly by the assistant-question
sets, roughly 24 of about 34 specified slots. The twenty refusals break down as:
the 33-day rule 7, superiority-shaped 2, fee questions 2, wrong-audience 2,
outcome-shaped 2, false premise 1, off-topic 4. Full table and the per-brief
counts are in TEMPLATE-FINDINGS.md Section 4A.

**This is an observed yield, not a rule.** It describes one practice area in one
market on one day. The practical consequence for waves 3 and 4: pull PAA for
every primary query because it is cheap and the refusals are worth recording,
but do not budget research time as though PAA will fill the FAQ block, because on
this evidence it fills about a quarter of it.
