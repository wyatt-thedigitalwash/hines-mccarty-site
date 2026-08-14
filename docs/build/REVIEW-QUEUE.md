# Content Review Queue

The register for the currency policy in docs/build/CASES-WE-DEFEND-PLAN.md
Section 9. Every charge page, silo hub, market page, and tool appears here with
an owner and a review date.

Page data is the source of truth. The `owner` and `lastReviewed` fields live on
each page's data entry; this file is the human-readable view, the place off-cycle
triggers get logged, and the place verification sources get recorded. It lives in
the repo so that a review date versions alongside the page it describes.

Rows are added when a page is built, not when it is planned.

**On empty owner and lastReviewed.** Every row below carries
`[NEEDS: assign]` and `not reviewed` rather than a name and a date. No
attorney has been assigned and no review has happened, and this file's own
rule is that a date is never recorded without the review behind it. A false
review date is worse than a missing one, because it removes the signal that
the page needs looking at. Populate these as pages are assigned and read.

---

## Rules

- **No page ships without a populated `owner` and `lastReviewed` and a row here**
  (done-criterion C11).
- `lastReviewed` is the date a named person checked the page against its cited
  sources. It is not a publish date and is never bumped without an actual review.
- A page with no owner is not published.
- **Never bump a date without doing the review.** A false review date is worse
  than a stale one, because it removes the signal that the page needs looking at.

### Cadence (Section 9.2)

| Page type | Cadence |
|---|---|
| Sentencing calculator | 6 months, plus every Rule 3.992 revision |
| Pages citing penalties, thresholds, or dollar figures | 6 months |
| Other charge pages, silo hubs, market pages | 12 months |
| **Pages whose cited rule has demonstrably moved** | **3 months**, plus the off-cycle trigger. Currently: the 33-day rule correction guide. See the Guides section for the reasoning. |

**Annual sweep runs in July**, after Florida's regular session laws take effect
on July 1, so the year's statutory changes are caught in one pass.

### Off-cycle trigger (Section 9.3)

When a statute cited on a page is amended, that page enters review **within 30
days of the firm learning of the amendment**, regardless of its position in the
cadence. The trigger is the amendment, not the effective date. Log it in the
Off-Cycle Log below.

### Verification (Section 10.3, and 8.3 for jurisdictional facts)

Every statutory claim is verified by fetching an allowlisted official source,
never by recall (done-criterion C12).

- **Statutes and rules:** leg.state.fl.us, flsenate.gov, flcourts.gov, FDLE
  scoresheet forms, flmd.uscourts.gov, uscourts.gov, ussc.gov.
- **Jurisdictional facts for market pages:** flcourts.gov circuit information,
  the circuit court's official site, the county clerk of court, and the arresting
  agency's official site.
- **Not acceptable:** other firms' pages, aggregators, secondary summaries,
  mapping services, or model recall.
- **Considered and refused:** **flhsmv.gov** (DECISIONS.md D18). It administers
  the DUI administrative suspension and ranks first on the head informational
  term, and it is still publishing the pre-1-October-2025 refusal rule. The
  allowlist prefers the source that publishes the law over the agency that
  applies it.

#### RESOLVED 2026-08-13: the PPP limitations period

Carried as **reported, not verified** since the wave 1 work, and the publish
blocker on `/white-collar-defense/ppp-loan-fraud`. **Resolved from operative
text** at uscode.house.gov: 15 U.S.C. 636(a)(36)(W), 18 U.S.C. 3293, 18 U.S.C.
20, against the 18 U.S.C. 3282(a) default.

**The answer is conditional and the page must state it that way.** There is no
single limitations period for PPP loan fraud: one ten-year provision is keyed to
the loan and the borrower, the other to the offence charged and whether the
lender is a section 20 financial institution, and a defendant can sit outside
both. Full working in docs/research/briefs/OPP-01-ppp-loan-fraud.md Section 6A.

**A reviewer should treat any flat "ten years" statement on this page as an
error**, not as a detail to check. Two sub-questions remain UNMET by design,
second draw loans and non-borrower defendants, and neither may be asserted in
either direction.

#### Standing unverified source, escalated 2026-08-13

**USSG 2B1.1, the federal loss table.** Six fetch attempts across three briefs
have failed, returning 404s and one redirect loop. This is past the point where
it is a per-brief retry, so it is recorded here once rather than repeated in
every brief that wants it.

Four briefs would use it: FED-05 wire and mail fraud, WC-02 bank fraud, WC-03
securities fraud, and OPP-01 PPP loan fraud. All four currently stand on USSC
published statistics instead, and say so. **A search engine's synthesis of the
loss table is not a fetched source and must not be substituted for one.** The
loss-calculation primer at ussc.gov/guidelines/primers/loss-calculation did
return live and is the recommended retry target.

Until it is fetched, no page may state a loss-table offense-level figure. A
reviewer who sees one should treat it as an unverified claim.

#### RESOLVED 2026-08-13 by W4-04. The door was the wrong one, not the site.

W4-04 (federal CSAM) was told to expect the same failure on its own guideline,
**USSG 2G2.2**, and to record it UNMET if two passes failed. It attempted 2G2.2
first and reproduced the failure exactly, which is the seventh, eighth, and
ninth data points on this entry:

| Attempt | URL | Result |
|---|---|---|
| 7 | ussc.gov/guidelines/2024-guidelines-manual/2024-chapter-2-g | **404** |
| 8 | ussc.gov/guidelines/2023-guidelines-manual/2023-chapter-2-g | **404** |
| 9 | guidelines.ussc.gov/gl/%C2%A72G2.2 | **404** |
| 10 | ussc.gov/guidelines/primers/sexual-offenses | **404** |
| 11 | ussc.gov/guidelines/guidelines-manual/2024-chapter-2-g | **404** |
| 12 | ussc.gov/sites/default/files/pdf/guidelines-manual/2024/CHAPTER_2_G.pdf | **404** |

**The pattern is now characterised. Every per-chapter and per-guideline URL form
on ussc.gov returns 404, and has done so across four briefs.** Do not spend
another pass on one.

**What works, verified 2026-08-13:**

> `https://www.ussc.gov/sites/default/files/pdf/guidelines-manual/2025/GLMFull.pdf`
> HTTP 200, 3,845,451 bytes, PDF. The 2024 equivalent also returns 200.

That single file is the complete Guidelines Manual (November 1, 2025). It
contains **§2G2.2 in full** and it contains **§2B1.1 including the loss table in
full**, both extracted and quoted this session. W4-04 Section 7 carries the
2G2.2 quotations; the 2B1.1 loss table as it appears in that file reads
`$6,500 or less` no increase, `More than $6,500` add 2, rising in the published
steps to `More than $550,000,000` add 30, with base offense level 7 where the
offense of conviction carries a statutory maximum of 20 years or more and 6
otherwise.

**Consequence for the four blocked briefs.** FED-05, WC-02, WC-03, and OPP-01
are no longer blocked by an unfetchable source. They are blocked only by not
having fetched it yet, which is a scheduled task rather than a standing gap.
The instruction that no page may state a loss-table figure **stands until each
brief fetches GLMFull.pdf itself and quotes the rows it uses**, because a figure
relayed through this file is still a figure the citing brief did not fetch.

The retry target recorded above, the loss-calculation primer, is superseded. It
is a primer about the table; GLMFull.pdf is the table.

---

## Compliance: what the automated gates are and are not

**No gate in this repository is a compliance control.** The banned-term check in
`scripts/check-pages.mts` is a word list. Independent testing planted 16
realistic Fla. Bar R. 4-7 violations and it missed **all 16**, including
superiority phrased without the listed words, case results stated as a
percentage or an anecdote, outcome claims using the firm's name instead of "we",
and four dash characters that are not the em dash it looks for.

**Its PASS means "none of these specific strings appear". It does not mean the
page complies.** A reviewer who treats a green run as a compliance result has
been misled by it, which is why the gate now prints that caveat on every run.
This is docs/research/HUNT-LIST.md instance 8 in the present tense.

**Compliance rests on the attorney read**, which is the review this queue
exists to schedule.

---

## FAILING REVIEW, do not publish

Recorded 2026-08-13. These pages are written and are **not cleared**. They stay
`published: false`, which keeps them noindex and out of the sitemap, until an
adversarial pass returns PASS.

**Pair round 5, 2026-08-14.** A pair-level reviewer (grand theft and
embezzlement read together, sources fetched before copy) returned FAIL with 9
findings. 8 were applied; 1 was rejected with reasons. The two per-page
reviews of the same round were killed mid-run by an account spend limit and
were re-run afterwards against the fixed pages. The pair is still not cleared:
a pair passes when the pair-level review AND both page reviews return PASS on
the same text.

**What the pair reviewer caught, and what it says about the pages.** Three of
the four blocking findings were on embezzlement, which had cleared its own
substantive findings in an earlier round. That is the argument for reviewing
pairs as pairs rather than pages as pages:

1. **A wrong statement of law.** The page said theft and organized fraud are
   "separately chargeable rather than alternatives, and a case can involve
   counts under both." Grand theft is a lesser included offense of organized
   fraud, so at conviction on the same conduct they are precisely
   alternatives. FIXED by removing the assertion rather than by citing the
   case: the case was not in the project record, and this project does not
   publish law it has not fetched. The page now says either statute can be the
   vehicle, both can appear on a charging document, and whether both stand at
   conviction is a double jeopardy question to raise with a lawyer.
2. **The page contradicted itself on appointed counsel**, telling a pre-arrest
   reader in the guidance section that counsel would be appointed, while the
   who section correctly explained that with no charge there is no hearing and
   no appointment. FIXED to match the who section.
3. **The banned-claim shape, in a new place.** The felony-threshold FAQ stated
   $750 flat. FAQ answers are extractable standalone under FAQPage schema, so
   the qualification cannot live in the surrounding page. FIXED to carry the
   dwelling route, the listed items, and the prior-conviction route.
4. **Grand theft's penalty note read as an exhaustive list** of second degree
   routes at other offense levels. The verified 921.0022 table has three more
   at level 7: cargo under (2)(b)2., emergency medical equipment under
   (2)(b)3., and law enforcement equipment under (2)(b)4. A reader charged
   under the cargo provision would have taken level 6 from this page and been
   wrong on the exact number the page holds out as its differentiator. FIXED.

Also fixed: the missing forum question on embezzlement (answered structurally,
no federal statute numbers or maxima, per the brief's allowlist block); a
claim that the page links to a comparison instrument that has no route yet;
the $500 FAQ's missing prior-conviction qualifier; and a sweep of British
spellings to American across all page copy.

**REJECTED, finding 7: add the Brandon Regional Service Center to both pages.**
The reviewer read both briefs, which do mandate it, but not DECISIONS.md D7,
which blocks it from copy pending attorney confirmation. The reason in the
open question is substantive rather than procedural: a clerk service center is
not necessarily where a felony is heard, so putting it in a "where your case
is heard" section could be wrong on the facts. The block stands. This is the
second reviewer finding this project has examined and rejected with reasons,
and the pattern in both is the same: a finding correct against one document
and wrong against the decision that supersedes it.

## STOPPED AT THREE FAILURES, 2026-08-14. Human decision needed.

**Grand theft and embezzlement have now failed rounds 5, 6 and 7.** The
programme rule is that three failures stops the run rather than starting a
fourth, so the run is stopped here and the findings are recorded rather than
applied.

**The reason to stop is not the count. It is what the round-7 regression check
found: the FIXES are introducing errors at a steady rate.**

| Round | Verdict | New errors introduced BY THAT ROUND'S FIXES, found in the next round |
|---|---|---|
| 5, pair-level | FAIL, 9 findings | 2, both caught in round 6 |
| 6, per page | FAIL, 13 blocking | 3, all caught in round 7 |
| 7, per page and pair | FAIL, 13 blocking + 9 pair | not yet measured |

**The two round-6 errors, both mine, both the same shape.** They are worth
stating exactly, because the shape is the one this project was built to stop
and it reappeared in the repair step rather than in the writing step.

1. I wrote "the ranking chart lists no level for either" about the two
   812.014(2)(a)3. routes. I had grepped the chart for the string
   "812.014(2)(a)3" and found nothing. But the chart's level 7 row, keyed
   `812.014(2)(a)1.`, reads in full: "Property stolen, valued at $100,000 or
   more or a semitrailer deployed by a law enforcement officer; **property
   stolen while causing other property damage**; 1st degree grand theft." The
   last clause IS the (2)(a)3. conduct. A cite-keyed lookup is not a coverage
   test, because a chart row's subject matter is in its text, not in its key.
2. I wrote "the listed items are level 4 whatever they were worth". The chart
   ranks `812.014(2)(c)4. & 6.-10.` at level 4. Subparagraphs (2)(c)11., 12.
   and 13. (a stop sign, anhydrous ammonia, any amount of a controlled
   substance) appear in NO chart row. Four of the ten listed items are not
   level 4, and the sentence reached them all.

Both are reading part of a source and inferring the rest. Identical to the
four errors that shipped originally. The difference is only that the reader
was the repairer rather than the writer.

**What this says about the process, and it is the finding that matters.** The
verification discipline was built around WRITING: facts are verified by agents
who write no prose, and writers may only assert a verified row. The REPAIR
step never got the same treatment. A reviewer fetches the statute and reports;
the repairer then works from the report plus a table lookup, at speed, under
the impression that the hard verification already happened. It did not happen
for the new sentence the repair introduces. Each repair is a fresh writing
act and it has been getting less verification than the writing it corrects.

**Also found by round 7, and independently important:** two round-6 fixes were
applied to embezzlement and NOT to grand theft, although both pages carried the
identical defective sentence. The 943.0595 automatic-sealing correction and
the two dropped F.S. 772.11(1) release limits are both still wrong on grand
theft. A pair is reviewed as a pair and must be REPAIRED as a pair.

**Still outstanding on grand theft**, from round 7, in addition to the two
above: the flush-language riot and state-of-emergency reclassifications are
missing from a ladder the page calls "the whole theft ladder"; the threshold
section still opens "Below it the offense is petit theft", which is on the
banned-claims list in this file; and the (2)(b)3. and (2)(b)4. rows drop the
taking-location element, stating the rule more broadly than the statute.

**Still outstanding on embezzlement**: three separate misreadings of F.S.
775.15 in the one timeline step round 6 wrote, including citing (4)(a) to a
reader who has not been arrested when (4)(b) governs; the omission of F.S.
817.034(4)(f)'s five-year period on a page whose co-equal charging route is
817.034; the two express disqualifiers in 943.0595(2)(a)2 and 3 dropped from
the automatic-sealing paragraph, which the pre-write fetch had specifically
warned about; an unsourced rule of federal jurisdiction in the forum FAQ; and
a value-ladder FAQ that reproduces grand theft's C9 subject matter, contrary
to the Section 4.5 ruling that the ladder lives on one page.

---

| Page | Rounds failed | Why it is here |
|---|---|---|
| `/criminal-defense/grand-theft-defense` | 4 | Its value ladder was wrong three times in a row, each time in the band beneath the one just corrected. Now rebuilt from the complete text of F.S. 812.014 subsection (2) rather than patched paragraph by paragraph. |
| `/white-collar-defense/embezzlement` | 3 | Reviewed as a pair with grand theft. Its own substantive findings are cleared; it is held because the pair has not passed together. |

**The pattern worth recording, because it is the reason for the pre-write gate.**
Every one of the three ladder errors was a claim the project had already
verified somewhere. (2)(f) and (2)(e) were both sitting in W1-03's ranking-chart
table, verified, while the page asserted the opposite. The failure was never a
missing source. It was writing before reading what had already been fetched.

**Not to be published on any of these:** a flat statement that theft under $750
is petit theft of the second degree; any statement that F.S. 812.014(3)(a)
applies below a particular dollar figure without excluding a dwelling; any petit
theft claim that does not account for F.S. 812.014(2)(d) and (2)(e).

---

## Queue

Status values: `draft`, `in-review`, `published`, `overdue`, `off-cycle`.

### Charge pages

29 routes built, all stubs. The template renders a visible [NEEDS] marker for
every unwritten field, and each page is noindex and excluded from the sitemap
until `published` flips. Cadence is 6mo because every one of these will cite
penalties or thresholds (Section 9.2).

Gated on C9 (cover-the-name test), C10 (overlap pages), C11 (owner and review
date), C12 (allowlisted verification), and C13.

**State Criminal Defense** (`/criminal-defense`)

| Page | Owner | Last reviewed | Cadence | Next due | Status |
|---|---|---|---|---|---|
| `/criminal-defense/sexual-battery-defense` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/criminal-defense/drug-trafficking-defense` | [NEEDS: assign] | not reviewed | 6mo | on publish | **draft** |
| `/criminal-defense/drug-possession-defense` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/criminal-defense/gun-crimes-defense` | [NEEDS: assign] | not reviewed | 6mo | on publish | **draft** |
| `/criminal-defense/sex-crimes-defense` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/criminal-defense/battery-defense` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/criminal-defense/domestic-violence-defense` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/criminal-defense/computer-crimes-defense` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/criminal-defense/grand-theft-defense` | [NEEDS: assign] | not reviewed | 6mo | on publish | **draft** |
| `/criminal-defense/homicide-defense` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/criminal-defense/dui-defense` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |

**Federal Criminal Defense** (`/federal-criminal-defense`)

| Page | Owner | Last reviewed | Cadence | Next due | Status |
|---|---|---|---|---|---|
| `/federal-criminal-defense/drug-trafficking` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/federal-criminal-defense/healthcare-fraud` (any health care benefit program, 18 U.S.C. 1347) | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/federal-criminal-defense/wire-mail-fraud` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/federal-criminal-defense/conspiracy-charges` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/federal-criminal-defense/weapons-gun-offenses` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/federal-criminal-defense/csam-defense` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/federal-criminal-defense/money-laundering` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/federal-criminal-defense/computer-internet-crimes` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/federal-criminal-defense/target-letter-defense` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |

**White-Collar Defense** (`/white-collar-defense`)

| Page | Owner | Last reviewed | Cadence | Next due | Status |
|---|---|---|---|---|---|
| `/white-collar-defense/corporate-fraud` (category overview, not a charge page) | [NEEDS: assign] | not reviewed | 12mo | on publish | **draft** |
| `/white-collar-defense/healthcare-fraud` (Medicaid Provider Fraud, F.S. 409.920) | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/white-collar-defense/bank-fraud` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/white-collar-defense/embezzlement` | [NEEDS: assign] | not reviewed | 6mo | on publish | **draft** |
| `/white-collar-defense/securities-fraud` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/white-collar-defense/wire-fraud` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/white-collar-defense/tax-evasion` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/white-collar-defense/ppp-loan-fraud` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/white-collar-defense/identity-theft` | [NEEDS: assign] | not reviewed | 6mo | on publish | **draft** |
| `/white-collar-defense/money-laundering` | [NEEDS: assign] | not reviewed | 6mo | on publish | **draft** |

**Computer crime moved silos 2026-08-13** (DECISIONS.md D14).
`/white-collar-defense/computer-crime` became
`/criminal-defense/computer-crimes-defense`, relabelled "Unauthorized Computer
Access" and oriented to F.S. 815.06 rather than to fraud. State silo 11 rows,
white-collar 10, charge set still 30.

**Carried into its brief:** this page **cannot use an offense-level column**.
F.S. 815.06 has no row in the F.S. 921.0022 ranking chart, and 815.04's rows
must not be borrowed for it. Its C9 anchor has to come from somewhere other than
the offense-level table that anchors most pages in this set.

**ANSWERED 2026-08-13 in docs/research/briefs/ST-01-computer-crimes.md.** The
anchor is the non-monetary escalation ladder inside 815.06 itself. Every other
Florida ladder verified in this project counts something, dollars or weight;
this one escalates on the kind of harm, reaching a first degree felony only
through danger to human life or disruption of medical equipment used in the
direct administration of care. The no-offense-level-column instruction stands
and must survive into the written page: reviewers should treat any offense-level
figure appearing on this page as an error, not as a detail to check.

**Charge list changed 2026-08-13 by the overlap audit** (DECISIONS.md D12 and
D13, docs/build/OVERLAP-AUDIT.md).

- **Removed `/federal-criminal-defense/white-collar-corporate-fraud`.** It
  rested on no statute, its name duplicated a silo, and its coverage already
  existed elsewhere. The federal silo hub carries one cross-silo row to
  `/white-collar-defense` instead. The federal silo is 9 rows and the charge set
  is 30.
- **`/white-collar-defense/corporate-fraud` reclassified** as a category
  overview rather than a charge page. It is `c9Exempt` in the data, the template
  omits its statute, penalties and elements sections, and its cadence is 12
  months rather than 6 because it cites no figures. It is not gated on C9 and
  must not be written as a charge page.
- **Healthcare fraud relabelled on both sides.** The two entries were
  byte-identical in label and description, and the shared description was wrong
  on the Florida side. The white-collar entry is now Medicaid Provider Fraud
  under F.S. 409.920; the federal entry covers any health care benefit program
  under 18 U.S.C. 1347.

**Two binding constraints were recorded for briefs not yet written**, in
CASES-WE-DEFEND-PLAN.md Section 4.6.2. The federal money laundering page must be
built on the predicate list, the absence of thresholds, and federal sentencing,
and may not restate conduct language that is near-identical to Florida's. The
federal computer crimes page must be built on 18 U.S.C. 1030(a)(1), (a)(4) and
(a)(5), not on (a)(2) or (a)(3). Both are conditions of those pairs surviving,
not suggestions.

**Two more pages moved to draft 2026-08-13**, in a third pass.

`/criminal-defense/gun-crimes-defense` (brief W2-03) and
`/white-collar-defense/identity-theft` (brief W2-06). Six charge pages are now
written. Gun crimes is an overlap page and carries a forum section plus exactly
one cross-link to `/federal-criminal-defense/weapons-gun-offenses` (C10).
Identity theft has no federal sibling by DECISIONS.md D5, so its forum material
links up to the federal silo rather than sideways, and no cross-link block
renders.

Same posture as the four before them: `published: false`, noindex, held out of
the sitemap by the published gate, `owner` and `lastReviewed` still `[NEEDS]`.

**Statutory sources cleared 2026-08-13**, all flsenate.gov, 2025 Florida
Statutes:

| Statute | What it cleared |
|---|---|
| 790.23(1)(a) to (e) | The five categories of person the possession ban reaches, plus the (2) exceptions and the (3) second degree felony |
| 790.01 | The current permitless-carry scheme, and subsection (4), under which the state bears the burden of proving ineligibility for a license as an element of the offense |
| 775.087(1) | Reclassification as distinct from the (2) minimums, including that a reclassified offense is ranked one level above its 921.0022 ranking |
| 817.568(2)(b) and (2)(c) | The $5,000 and $50,000 thresholds, the person-count routes, and mandatory minimums of 3, 5, and 10 years |
| 817.568 definitions | Personal identification information in full, and counterfeit or fictitious personal identification information |
| 817.568(6) and (7) | The protected-person and custodial tiers |

**Two corrections to W2-06 came out of those fetches.** The brief inferred
subsections (6) and (7) from a truncated ranking-chart description and recorded
them as covering minors. The operative text covers a person younger than 18 **or
aged 60 or older** in both. The brief also recorded any mandatory minimum in
817.568 as UNVERIFIED; (2)(b) and (2)(c) carry them. The C9 assertion for that
page was corrected accordingly.

**Deliberately not written: firearm rights restoration.** 790.23(2)(a) is quoted
because it is statutory text, but how restoration is obtained is a clemency
question governed by the Rules of Executive Clemency, which are outside the C12
allowlist. The page states that the exception exists and stops there.

**Two further pages moved to draft 2026-08-13**, in a later pass.

`/white-collar-defense/money-laundering` (brief W2-05) and
`/criminal-defense/drug-trafficking-defense` (brief W2-02). Both are overlap
pages under plan Section 4.6: each opens its body with a forum section and
carries exactly one cross-link to its federal sibling, with no shared body copy
(done-criterion C10). The drug trafficking entry replaces the template preview
that previously occupied it.

**`/white-collar-defense/money-laundering` is a new slug**, added by
DECISIONS.md D11. The white-collar silo now carries 11 rows and the charge set
totals 31.

Same posture as the first two written pages: `published: false`, noindex, held
out of the sitemap by the gate in src/app/sitemap.ts, and `owner` and
`lastReviewed` still `[NEEDS]` because no attorney has been assigned or has
reviewed them.

**Statutory sources cleared for these two pages on 2026-08-13**, all from
flsenate.gov, the 2025 Florida Statutes:

| Statute | What it cleared |
|---|---|
| 896.101(2) and (3) | The prohibited conduct, and the definitions of conducts, financial transaction, and specified unlawful activity, which is defined by reference to racketeering activity under 895.02 |
| 896.104(1) and (4) | The definition of structuring, its three penalty tiers, and the additional fine of up to $250,000 or twice the value of the transactions |
| 893.135(1)(c) | The illegal drugs and hydrocodone quantity bands with their mandatory minimums and fines |
| 893.135(4) | Substantial assistance, quoted rather than paraphrased. Described on the page as a statutory mechanism belonging to the state attorney and the court, never as an outcome |
| 893.135(6) | That the weight of a controlled substance is the total weight of the mixture, and that multiple mixtures are aggregated. This closed an item the brief had recorded as UNVERIFIED |
| 921.0024(1)(b) | The drug trafficking multiplier: subtotal sentence points multiplied at the court's discretion by 1.5 for a level 7 or level 8 offense |

All five publish blockers recorded against these two briefs are now closed.

**Two pages moved from stub to draft 2026-08-13.**

`/criminal-defense/grand-theft-defense` (brief W1-03) and
`/white-collar-defense/embezzlement` (brief W1-02) now carry written content.
Both are `published: false`, so both are noindex and both are held out of the
sitemap by the gate in src/app/sitemap.ts. Neither has an owner and neither has
been reviewed.

**Their `owner` and `lastReviewed` are deliberately still `[NEEDS]`, and the
pages render visible markers for both.** No attorney has been assigned
(WEBSITE-PLAN.md Open Question 2), so naming one would be an invention, and no
attorney has checked the pages against their cited sources, so recording a
review date would break this file's own rule that a date is never written
without the review behind it. Populating either field would make the byline
assert something untrue, which is worse than an obvious gap.

**Statutory sources cleared for these two pages on 2026-08-13**, all from
flsenate.gov, the 2025 Florida Statutes:

| Statute | What it cleared |
|---|---|
| 812.014(3)(a) to (c) | Petit theft degrees, including that two or more prior theft convictions make a later petit theft a third degree felony |
| 772.11(1) | Civil theft: threefold damages, $200 minimum, the written demand, and the 30-day compliance release |
| 817.034(3)(b), (3)(d), (4)(a) | The definitions of obtain and of a scheme to defraud, and the three organized fraud value tiers |

Previously recorded as publish blockers for these pages and now closed. The
remaining [NEEDS] items on both pages are listed in the page data as code
comments beside the field they affect.

**Changed 2026-08-13 (DECISIONS.md D3 and D4).** `mail-fraud` removed after
failing the C9 cover-the-name test against wire fraud; its query is targeted by
an H2 within `/federal-criminal-defense/wire-mail-fraud`. `ppp-loan-fraud` and
`identity-theft` added, each passing C9 on its own substance. The white-collar
silo now carries 10 rows, and the charge set totals 30.

### Silo hubs

Built with draft copy. All four are noindex and out of the sitemap pending
the C12 verification pass and an attorney read.

| Page | Owner | Last reviewed | Cadence | Next due | Status | Open [VERIFY] |
|---|---|---|---|---|---|---|
| `/cases-we-defend` | [NEEDS: assign] | not reviewed | 12mo | on publish | draft | Charge count and silo overlaps, see below |
| `/criminal-defense` | [NEEDS: assign] | not reviewed | 12mo | on publish | draft | Forum section: first appearance timing, bond schedule reference |
| `/federal-criminal-defense` | [NEEDS: assign] | not reviewed | 12mo | on publish | draft | Forum section: detention hearing procedure, guideline sentencing description |
| `/white-collar-defense` | [NEEDS: assign] | not reviewed | 12mo | on publish | draft | Forum section: pre-charge investigative description |

**Open question on the charge set.** The index carries 29 entries from
WEBSITE-PLAN.md Tier 2. CASES-WE-DEFEND-PLAN.md says "~26" and the home
practice grid carries 23. The overlaps that account for the gap, each needing
a cross-link-or-merge decision before content is written:

| Federal entry | White-collar entry | Question |
|---|---|---|
| `healthcare-fraud` | `healthcare-fraud` | Same slug and label in both silos. Merge, or two pages with a `counterpart` cross-link? |
| `white-collar-corporate-fraud` | `corporate-fraud` | Near-duplicate scope |
| `wire-mail-fraud` | `wire-fraud` | **RESOLVED 2026-08-13 (DECISIONS.md D4).** `mail-fraud` failed C9 against wire fraud and was removed; the federal page absorbs its query via an H2. `wire-fraud` survives because it is built on the Florida Communications Fraud Act, F.S. 817.034, which the federal page never mentions. |
| `computer-internet-crimes` | `computer-crime` | Near-duplicate scope |

### Office and market pages

Market pages additionally record the verified differentiator and its source
(done-criterion C14). A market page with no verified differentiator does not
ship; it becomes a Layer 2 courthouse guide instead.

| Page | Type | Owner | Last reviewed | Cadence | Next due | Status | Differentiator | Source |
|---|---|---|---|---|---|---|---|---|
| `/brandon-criminal-defense-lawyer` | office | | | 12mo | | | n/a, office page | |
| `/tampa-criminal-defense-lawyer` | office | | | 12mo | | blocked | n/a, office page | [NEEDS: Tampa office address] |
| Plant City | market | | | 12mo | | unverified | [VERIFY: own municipal police department; courthouse or annex hearing criminal matters] | |
| Wesley Chapel | market | | | 12mo | | unverified | [VERIFY: different county, therefore possibly different judicial circuit; different arresting agency] | |
| Riverview | market | | | 12mo | | unverified | [VERIFY: no candidate identified; expected to fail C14] | |

### Tools

| Page | Owner | Last reviewed | Cadence | Next due | Status | Ship gate |
|---|---|---|---|---|---|---|
| Sentencing calculator | | | 6mo | | not built | C1-C8, C11-C12 unmet |
| Bond & bail estimator | | | 6mo | | not built | |
| Federal case timeline | | | 12mo | | not built | |
| Seal & expunge checker | | | 6mo | | not built | |

**Calculator additionally records** the Rule 3.992 revision implemented (by
date, including the January 2026 correction) and the attorney-reviewed accuracy
note: reviewing attorney, review date, and what was reviewed. That note attests
the math, separately from the prose byline.

### Guides

| Page | Owner | Last reviewed | Cadence | Next due | Status | Notes |
|---|---|---|---|---|---|---|
| The Florida "33 day rule" correction guide | [NEEDS: assign] | not reviewed | **3mo** | on publish | not built | Non-standard cadence, see below |

**Why this page is on a quarterly cadence rather than the standard six months.**
Added 2026-08-13.

The rule it explains **demonstrably moves**. Fla. R. Crim. P. 3.134 was amended
effective 2025-07-01 by In re: Amendments to Florida Rule of Criminal Procedure
3.191, No. SC2022-1123 (Fla. Mar. 13, 2025), 411 So. 3d 385. That amendment
added an entirely new subdivision (b) and **changed which numbers are operative
for most readers**: anyone out on pretrial release is now on a 60-day and
63rd-day track, not the 30-day and 33rd-day track the page's own title refers
to. Almost the entire competing corpus is stale on exactly that point, which is
half of why the page is worth building.

A page whose competitive advantage is currency, on a rule that changed thirteen
months ago in a way nobody else has caught up with, cannot sit on the same
cadence as a page about elements that have not moved in decades. Six months
would have meant publishing into a window where a further amendment could sit
undetected for most of it.

**The Section 9.3 off-cycle trigger applies in addition, not instead.** If Rule
3.134 or Rule 3.191 is amended, the page enters review within 30 days of the
firm learning of it, regardless of where it sits in the quarterly cycle. The
quarterly cadence is the floor, not the ceiling.

**Presentation requirement, on the calculator-gate reasoning.** This page
carries a **no-attorney-client-relationship notice adjacent to the content, not
footer-only**. The reasoning is the same as done-criteria C3 and C4 in
CASES-WE-DEFEND-PLAN.md Section 5.6, and it applies here for a page-specific
reason rather than by analogy: a reader arrives believing a deadline has passed
that ends their case, and the page tells them it does not. That is precisely the
moment someone forms a belief about what the firm has told them. Under Op. 24-1
and Bartholomew, 611 So. 2d 85, a relationship can arise from a user's
subjective reasonable belief regardless of the firm's intent, and a footer
notice does not reach a reader who stopped at the correction.

**Two further requirements carried from the research** (docs/research/briefs/TOOLS.md
item 2): the release-is-not-dismissal correction sits **above the fold**, not in
a footnote, because publishing the number without the consequence reproduces the
exact harm the page exists to fix; and the page states the rule version it
describes with a current-as-of date.

**One open verification before publish.** The consolidated Rules PDF hosted on
flcourts.gov carries a January 1, 2017 footer and does not contain the amended
(a)/(b) structure, so it is stale for this rule and must not be cited as
current. The controlling text is The Florida Bar's compilation updated
2026-07-13. A person opens that URL in a browser and eyeballs Rule 3.134 before
publish. See docs/research/HUNT-LIST.md defect 1 for why a second automated
pass against the same document does not satisfy this.

| Field | Value |
|---|---|
| Rule 3.992 revision implemented | _not built_ |
| Computation reviewed by | |
| Computation review date | |

---

## Off-Cycle Log

Every off-cycle review: what changed, which pages cite it, when the 30-day clock
started, and how it resolved.

| Date logged | Statute or rule amended | Pages affected | Due (30 days) | Resolved | Notes |
|---|---|---|---|---|---|
| _no entries_ | | | | | |

---

## Annual Sweep Log

| Sweep | Pages reviewed | Pages changed | Completed | Notes |
|---|---|---|---|---|
| July 2026 | | | not started | First sweep. Scope depends on what has shipped by then |
