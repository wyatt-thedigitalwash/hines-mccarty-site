# STATE: Content briefs, all 30 charge pages

Mission: content briefs for every charge page in
docs/build/CASES-WE-DEFEND-PLAN.md Section 7, plus one validated page template
they all inherit.

**Complete as of 2026-08-13. All 30 charges are briefed**, across two sessions:
waves 1 and 2 first (9 briefs plus the template and TOOLS.md), then the
remaining-20 programme in four workstreams (W1 conditional pairs, W2 federal and
white-collar, W3 state, W4 the sensitive charges).

The section headings below preserve that history rather than flattening it. The
original wave 1 and 2 deliverable table comes first; the remaining-20 programme
follows.

Last updated 2026-08-13. Committed locally. No push, no deploy.

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
the state silo as a Florida offence page.

**DECIDED 2026-08-13 as D14: moved to the state silo** at
`/criminal-defense/computer-crimes-defense`, labelled "Unauthorized Computer
Access". Applied to src/lib/site.ts, WEBSITE-PLAN.md Tier 2, REVIEW-QUEUE.md and
both silo hub charge indexes. FED-02's counterpart link is now wired, and the
Florida page was briefed in W2 as ST-01.

### Request budget

8 of 300 DataForSEO requests used in W1. Every call logged with endpoint and
purpose in the session log. The counter persists on disk between runs rather
than resetting per invocation, so the cap cannot be defeated by restarting.

---

## W2: remaining federal and white-collar briefs. DONE, 11 of 11.

Fanned out, one agent per brief, with the reconciliation barrier run before any
C9 was recorded. 370 to 504 lines each, zero em dashes, all 11 carrying
DONE-CRITERIA.

| Brief | Status | Notes |
|---|---|---|
| FED-03-drug-trafficking.md | **DONE** | Federal counterpart to W2-02. |
| FED-04-healthcare-fraud.md | **DONE** | Half of the C9 pair below, with WC-01. |
| FED-05-wire-mail-fraud.md | **DONE** | Escalated the USSG 2B1.1 failure out of per-brief retries. |
| FED-06-conspiracy-charges.md | **DONE** | C9 rests on 371 against 846 and 1349, the overt-act contrast. |
| FED-07-weapons-gun-offenses.md | **DONE** | Federal counterpart to W2-03. |
| FED-08-target-letter-defense.md | **DONE, one item ESCALATED** | Not a charge page. Its C9 rests on DOJ policy, not a statute. See below. |
| WC-01-healthcare-fraud.md | **DONE** | Other half of the C9 pair, on F.S. 409.920. |
| WC-02-bank-fraud.md | **DONE** | Kept distinct per D4. |
| WC-03-securities-fraud.md | **DONE** | Two subsections returned as summary, flagged reported not verified, re-fetch before quoting. |
| WC-04-tax-evasion.md | **DONE** | C9 spans 26 U.S.C. 7201 and F.S. 212.15(2). |
| ST-01-computer-crimes.md | **DONE** | Unblocked by D14. C9 anchor is **not** the 921.0022 offense-level table, which does not list 815.06. See below. |

### The C9 pair the plan required checking against each other

Federal and state healthcare fraud were the one pair the workstream spec singled
out: both had to populate a C9 and the two had to be compared before either was
recorded. They were, and they do not collide. FED-04 rests on 18 U.S.C. 1347 and
WC-01 on F.S. 409.920. Different statutes, so the same-statute rule never fires,
and their substance similarity is 0.148, well under the 0.34 threshold.

### The 815.06 anchor question, answered

REVIEW-QUEUE.md carried a standing instruction into this brief: F.S. 815.06 has
no row in the F.S. 921.0022 ranking chart, 815.04's rows must not be borrowed
for it, and the C9 anchor therefore had to come from somewhere other than the
offense-level table that anchors most pages in this set. **The anchor is the
non-monetary escalation ladder in 815.06 itself.** Every other Florida ladder
verified in this project counts something: dollars for theft, dollars over a
rolling window for money laundering, weight for trafficking. This one asks what
the access put at risk, reaching a first degree felony only through danger to
human life or disruption of medical equipment used in the direct administration
of care. That structure belongs to one statute in the set.

ST-01 and FED-02 were also compared by hand, because `statuteKey` resolves them
to `fs 815.06` and `18 usc 1030` and the automated checker will therefore never
put them side by side. FED-02 anticipated this and left a standing instruction
for the check. Seven structural dimensions compared; no collision. The one point
they touch, damage at $5,000, they touch in opposite directions.

### How the reconciliation barrier was run, and what it compared

Parallel briefs each checking a new assertion against a snapshot of the
populated set can both pass and both be wrong, because neither sees the other.
The barrier exists to close that. It ran in three parts over the union of 11 new
and 8 already-populated assertions, 19 total, **after all 11 briefs returned and
before any assertion was written to src/lib/site.ts**.

| Part | What it compared | Result |
|---|---|---|
| 0 | Statute-parse check on the 11 new entries | **1 flag.** FED-08's `"JM 9-11.151"` does not parse as a statute citation. The flag is correct; see below. |
| A | Same-statute collisions across new plus populated | **None.** |
| B | Pairwise substance across **all** 171 pairs, statute ignored | **None.** Highest similarity 0.148 against a 0.34 threshold. |
| C | New-versus-new pairs specifically, 55 of them | **None.** Max 0.148. |

Part B is the half the barrier requirement added. `detectC9Collisions` only
compares assertions that share a statute key, so cross-statute duplication is
invisible to it by construction: two pages could make the same claim about
different statutes and the automated rule would never look. Part B ignores
statute entirely and compares every pair. Part C is a subset of B, reported
separately because new-versus-new is the specific case a stale snapshot misses,
and burying it inside an aggregate would let a clean overall number hide it.

**10 of 11 assertions recorded** into `CHARGE_C9`. `npm run check:c9` passes:
19 keys resolve, 18 compared, every compared C9 names a statute, no collision.

### The one item escalated rather than decided: FED-08's C9

`/federal-criminal-defense/target-letter-defense` is a procedure page in a
charge silo. No statute creates a target letter, no statute defines "target" or
"subject", and the phrase "target letter" appears nowhere in the Justice
Manual's grand jury chapter. Its differentiator is precisely that absence, so
its C9 cites JM 9-11.151, which is DOJ policy and not law.

`isStatuteCitation` flags it, and **the flag is right.** The check exists
because a C9 resting on no statute has no element that could be false if another
charge were swapped in. On this page there genuinely is no element, because
there is no offense.

Three options were weighed in FED-08 Section 5. Substituting a statute such as
18 U.S.C. 3282 or 1519 into the field was rejected, because the differentiator
does not rest on either and a field that says otherwise makes the checker pass
by lying to it, which is HUNT-LIST.md defect 1 exactly. Widening
`isStatuteCitation` to accept Justice Manual citations was rejected as a first
move, because it would let any future page rest on policy without anyone
deciding that it should. **Recommended: a `c9Exempt` entry with a reason
distinct from corporate-fraud's** -- corporate-fraud is exempt because it is a
category overview with no offense behind it, whereas this is a procedure page
with verified substance whose governing source is policy rather than an offense.

This changes what the checker treats as in scope, so it is a DECISIONS.md item.
**Not recorded in `CHARGE_C9` pending that decision.** The assertion is written
and verified in the brief either way.

### Escalated out of per-brief retries: USSG 2B1.1

The loss table has now failed **six fetch attempts across three briefs**
(404s and a redirect loop). That is past the point where it is a per-brief
retry. FED-05 stands on USSC statistics without it and says so. A search
engine's synthesis of the table is not a fetched source and was not used.
Logged in REVIEW-QUEUE.md as a single outstanding item rather than repeated
per brief.

### Request budget

**22 of 300** DataForSEO requests used through W1 and W2. Calls were batched per
brief and collected centrally rather than by the 11 agents, because a counter
incremented by parallel writers reads **lower** than reality, and a cap whose
reassuring result is available in the failure state is not a cap.

---

## W3: remaining state briefs. DONE, 3 of 3.

| Brief | Status | Notes |
|---|---|---|
| ST-02-drug-possession.md | **DONE** | Weakest volume in the set, roughly 120/month total measurable Florida. Reported as such rather than talked up. 8 UNMET recorded. |
| ST-03-battery.md | **DONE** | Rejected half the structural fact it was handed and rebuilt the C9 on what the text supports. |
| ST-04-dui.md | **DONE** | Carries the strongest single finding in the project and the D6 contradiction. |

Barrier ran over 23 assertions, 3 new and 20 populated. Statute-parse: no flags.
Same-statute: only the ruled grand theft and embezzlement pair, at 0.000
substance similarity. Pairwise with statute ignored: 253 pairs, max 0.196
against the 0.34 threshold. New-versus-new: 3 pairs, max 0.063. All three
recorded.

### A gap this workstream found in its own prior work

**FED-01 and FED-02 were briefed in W1 and committed, but their C9 assertions
were never written into src/lib/site.ts.** They therefore sat outside the W2
barrier rather than inside it, and the W2 barrier's "8 already populated" was 8
because of that omission rather than by design. Both were folded in on
2026-08-13 and the full pairwise barrier was re-run over all 20 populated
assertions before W3's three were added. No collision either time.

The lesson is structural, not clerical: **the barrier's input set is only as
complete as the recording step that feeds it**, and a brief that is written and
committed without its assertion being recorded is invisible to every later
check. Recording must happen in the same workstream as the brief.

### The strongest finding in the project

**ST-04. A first refusal of a lawful breath or urine test became a crime in
Florida on 1 October 2025**, a second degree misdemeanor under F.S.
316.1939(1)(e), rising to first degree on a second or subsequent refusal.
Verified three ways: the 2025 operative text, the 2023 and 2024 editions of the
same subparagraph, which reach only a second-or-subsequent refusal, and the
effective date from the Legislature's own chapter report for ch. 2025-121
(CS/HB 687). **Independently re-fetched and confirmed by the orchestrator before
being recorded**, because a claim this strong that contradicts a state agency is
exactly the claim that should not rest on one path.

Five sources still state the superseded rule, **including flhsmv.gov**, which
holds organic position 1 on `florida DUI penalties` and is the AI Overview's
first cited source. It still says verbatim "Second or subsequent refusal is a
misdemeanor of the first degree."

`refusing breathalyzer florida` carries 210/month Florida and 50/month DMA at
LOW competition and $2.30 CPC. It is the one term on the DUI page graded **NOW**.

**Publish gate:** the amendment is verified, its *application* is not. Nothing
may be written about how first refusals are actually being charged in the
Thirteenth Circuit without attorney confirmation.

### DECISIONS.md D6 is contradicted, and how the contradiction must be argued

D6 committed waves 1 and 2 to statewide informational capture and **never** local
charge-term position, on the evidence that Tampa DMA volume for charge terms was
not measurable. That evidence was correct for the charges then examined and is
**false for DUI**: `dui lawyer tampa` returns **320/month at Tampa DMA** with CPC
**$110.74**, the highest in the corpus, previous high $97.54. `dui attorney
tampa` and `tampa dui attorney` both return 260/month DMA.

**The argument has to be made on the absolute number, not on a ratio.** The
orchestrator's first framing of this was that Florida volume equalling DMA
volume showed all state demand was Tampa demand. **That is a tautology and it
was rejected in the brief.** Every city-named term in the same pull shows 100%,
including `battery lawyer tampa` at 10/10 and `drug possession attorney tampa`
at 10/10. Real geographic share shows in the Florida-level informational terms
and runs 24 to 36 percent, roughly the DMA's population share. The finding is
320/month DMA against **no data at all** for seven wave 1 and 2 charge terms,
plus the CPC. Stated as a ratio it does not survive review.

**Proposed amendment, drafted in ST-04 Section 0.4, not applied:** waves 1
through 3 are measured on statewide informational capture **except** where a
charge term carries measurable DMA volume, in which case local position is a
legitimate secondary measure reported alongside. Exactly two charges qualify
today, DUI and domestic violence, and the qualifying list is re-derived from a
volume pull each reporting cycle. D6's requirement that this be told to the
client before reporting begins carries over.

**This needs a decision.** Leaving D6 unamended while reporting DUI on local
position is the one option that is not defensible.

### A second contradiction, by silence

**`docs/research/keywords.md` does not mention DUI.** A case-insensitive grep for
`\bdui\b` returns zero hits. The file that graded winnability for this project
omits the charge carrying the highest measurable local volume in it. Every DUI
grade is therefore marked **inferred** rather than checked against a prior grade.

### Measurability and winnability separated deliberately

ST-04 grades the DUI commercial term **YEARS despite it now being measurable**,
and the load-bearing reason is compliance rather than competition. Nine of
nineteen organic results carry "best", "top", "top-rated", "expert" or "highly
rated"; the first and seventh related searches contain "Best"; PAA asks who the
best DUI attorney in Tampa is. **Google's signals on this query are shaped by a
question a Rule 4-7.13(b)(3)-compliant page cannot answer**, and at $110.74 the
firm cannot buy parity either. The informational and procedural case for the
page is strong and entirely independent of the commercial one, and ST-04 asks
that the two be decided separately.

### Request budget

**40 of 300** through W1, W2, W3, and the W4 data pull. W4's SERP and volume
data was collected before W4 was launched, for the same counter reason.

---

## All seven decisions applied, 2026-08-13

Answers to the four blocking decisions in the final report, plus three
additions. Recorded here as an index; the reasoning lives in DECISIONS.md.

| # | Decision | Where it landed |
|---|---|---|
| 1 | **D6 amended, not carved out.** Reporting defaults to statewide informational capture except where DMA volume is verified measurable **per charge**. keywords.md's DUI omission recorded as a **hole in the foundational research**, not a wrong grade | **D17.** Plan Section 7.1, rewritten with the original text kept below the amendment |
| 2 | **Target letter `c9Exempt`, second exemption type** `policy-governed`, not collapsed into `no-statute` | **D15.** c9.ts, site.ts, check-c9.mts |
| 3 | **Sex crimes gets the third state**: category overview, C9-required, distinct from both | **D16.** c9.ts, site.ts, check-c9.mts |
| 4 | **flhsmv.gov refused**, on both reasons | **D18.** Plan Section 10.3, REVIEW-QUEUE.md |
| 5 | **HUNT-LIST instances 3 and 4** | HUNT-LIST.md |
| 6 | **DUI first, first-refusal substance leads.** Page is built; commercial term stays YEARS | Plan Section 7 |
| 7 | **Charging-document decoder ranked** in TOOLS.md, same storage gate | TOOLS.md item 3 |

**Drug possession left where it is.** Volume alone does not settle it and nothing
depends on it yet.

### What the two new states cost, and why it is worth it

The exemption model was one boolean. It is now a type plus a category flag, and
**both new states are enforced rather than trusted**, because a state that is
merely declared is a state that drifts.

`policy-governed` and `no-statute` carry **opposite** obligations, so each is
checkable against what the page actually holds. `policy-governed` **requires** a
populated C9: the page claims verified substance and is excused from the
statute-parse check only. Without that invariant the new type would be a general
escape hatch, admitting any page that claimed policy governed it and then said
nothing. `no-statute` requires the reverse. A category page cannot also be
exempt, because a page cannot be both excused from the check and required to
pass it.

Four self-tests show all three checks firing on the exact shapes they reject,
plus one showing they stay quiet on legitimate entries. Per this project's own
rule: a detector that cannot be shown to fire is not evidence.

**The checker now reports exemptions BY TYPE**, never as one count, for the same
reason it already refuses to collapse excused-by-decision into not-yet-written.

### Current C9 state

**29 of 30 charge pages resolved.** 27 compared (of which 1 category overview),
2 exempt by decision under 2 distinct types, and **1 genuinely outstanding**:
`/white-collar-defense/ppp-loan-fraud`, still blocked on identifying which
limitations statute governs PPP fraud prosecutions. That is a research gap with a
known shape, not an open question.

---

## W4: the sensitive charges. DONE, 4 of 4.

Graded YEARS by the plan and built for capability and referral conversion.
**The measured volume confirms that grading rather than challenging it**, and
every brief reports its search prospects as they are rather than talking them up.

| Brief | Status | Notes |
|---|---|---|
| W4-01-sexual-battery.md | **DONE** | Nil volume on all four terms, reported as nil in the first substantive paragraph. |
| W4-02-sex-crimes.md | **DONE** | Carries the one real commercial term in wave 4. Classification question open. |
| W4-03-homicide.md | **DONE** | The stand your ground question resolved in the page's favour. |
| W4-04-csam.md | **DONE** | Broke the USSG fetch problem open for the whole project. |

Barrier over 27 assertions, 4 new and 23 populated. No statute-parse flags. No
same-statute pair beyond the ruled 812.014 one at 0.000. Pairwise with statute
ignored: **351 pairs, max 0.196** against the 0.34 threshold. New-versus-new: 6
pairs, max 0.115. All four recorded.

**The wave 4 hand-checks worked as designed and self-corrected.** W4-01 finished
before any sibling existed and could not run its check, so it listed the six
claims a later reader must re-check, in priority order. W4-02 finished last,
found all three siblings present, ran the check against their actual assertions,
and answered W4-01's two standing requests and W4-04's two questions. W4-01 and
W4-02 independently stated the same territory division in their own words.

### The USSG blockage is broken, and it was never the site

W4-04 was told to expect its guideline fetch to fail and to record it UNMET. It
reproduced the failure exactly, six more URL forms, and then found the door:

> `https://www.ussc.gov/sites/default/files/pdf/guidelines-manual/2025/GLMFull.pdf`

**Independently re-verified by the orchestrator: HTTP 200 for both the 2025 and
2024 editions, while the per-chapter form still returns 404.** One file carries
the complete Guidelines Manual, including **2G2.2 and 2B1.1 with the full loss
table**, which is the source FED-05, WC-02, WC-03 and OPP-01 have been standing
without across twelve failed attempts.

The rule recorded in REVIEW-QUEUE.md is the correct one rather than the
convenient one: **each of those four briefs fetches GLMFull.pdf itself and
quotes the rows it uses.** A figure relayed through REVIEW-QUEUE is still a
figure the citing brief did not fetch.

### Verified errors found in the ranking field

Every one of these was fetched and quoted, and the three federal ones were
re-verified independently by the orchestrator against uscode.house.gov.

| Page | Claim in the field | What the source says |
|---|---|---|
| Featured snippet, ringstromlaw.com | A 5-year mandatory minimum applies to possession | **18 U.S.C. 2252(b)(2) imposes none on a first offence**, up to 10 years |
| A Tampa firm, position 7 | "five to fifteen years" and "twenty to forty years" | **5 to 20 and 15 to 40.** Both wrong, in opposite directions |
| brancatolawfirm.com, homicide position 3 | Stand your ground immunity is decided on "preponderance of evidence at hearing" | **F.S. 776.032(4)** since ch. 2017-72: clear and convincing, on the party seeking to overcome immunity |
| flhsmv.gov, DUI position 1 | "Second or subsequent refusal is a misdemeanor of the first degree" | **A first refusal has been a second degree misdemeanor since 1 Oct 2025** |
| Most-cited firm page, drug possession | Judges "may revoke licenses for up to 1 year" | **F.S. 322.055(1)**: the court "shall direct" suspension, 6 months |

### Two corrections the agents made to the orchestrator's framing

Recorded because the same error class produced both, and it is worth naming.

1. **The Florida-equals-DMA ratio is a tautology.** Offered as evidence for the
   DUI finding, correctly rejected: every city-named term in the pull shows 100%,
   including terms at 10/month. The finding is the absolute number.
2. **A Florida-level CPC was attached to a DMA claim.** `sex crimes attorney
   tampa` is **$23.10 at DMA** and $48.87 at Florida level. The brief caught it
   and used the right one.

Both are the same mistake: **taking a state-level figure and asserting it of the
metro.** Any later brief quoting a CPC or a volume must name the geography the
figure came from in the same sentence.

W4-02 made a third correction, to competitor structure rather than to a number:
`tampasexcrimesattorney.com` is not an independent single-practice competitor
but **Hanlon Law's exact-match satellite**. Counted properly, Hanlon holds four
of nine AI Overview citations across two domains, two of the top five organic
slots, and the knowledge panel. Concentration in this SERP was understated.

### The open classification question

**W4-02 recommends `/criminal-defense/sex-crimes-defense` be classified a
category overview that is still C9-checked, and explicitly NOT `c9Exempt`.**
D12's stated condition for exemption is that no statute exists; corporate fraud
had none, and this page rests on five, with Florida law enumerating the category
twice at F.S. 943.0435(1)(h)1.a and F.S. 775.21(4)(a)1. Exempting it would
delete a 23-row penalties table that is both its strongest asset and its
referral asset.

**This needs a third state in src/lib/site.ts**, which today offers only
charge-page-with-C9 or c9Exempt. D12's own bookkeeping rationale, that
excused-by-decision and not-yet-written must not be collapsed, applies with
equal force to checked-but-a-category. The C9 is recorded and the classification
is pending a decision.

### Request budget

**40 of 300.** No further DataForSEO calls were made during W4 itself; the wave
ran entirely on the pre-collected pull.

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
