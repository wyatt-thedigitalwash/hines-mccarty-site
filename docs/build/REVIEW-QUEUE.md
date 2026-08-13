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
| `/criminal-defense/drug-trafficking-defense` (template preview) | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/criminal-defense/drug-possession-defense` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/criminal-defense/gun-crimes-defense` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/criminal-defense/sex-crimes-defense` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/criminal-defense/battery-defense` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/criminal-defense/domestic-violence-defense` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/criminal-defense/grand-theft-defense` | [NEEDS: assign] | not reviewed | 6mo | on publish | **draft** |
| `/criminal-defense/homicide-defense` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/criminal-defense/dui-defense` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |

**Federal Criminal Defense** (`/federal-criminal-defense`)

| Page | Owner | Last reviewed | Cadence | Next due | Status |
|---|---|---|---|---|---|
| `/federal-criminal-defense/drug-trafficking` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/federal-criminal-defense/white-collar-corporate-fraud` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/federal-criminal-defense/healthcare-fraud` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
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
| `/white-collar-defense/corporate-fraud` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/white-collar-defense/healthcare-fraud` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/white-collar-defense/bank-fraud` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/white-collar-defense/embezzlement` | [NEEDS: assign] | not reviewed | 6mo | on publish | **draft** |
| `/white-collar-defense/securities-fraud` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/white-collar-defense/computer-crime` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/white-collar-defense/wire-fraud` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/white-collar-defense/tax-evasion` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/white-collar-defense/ppp-loan-fraud` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |
| `/white-collar-defense/identity-theft` | [NEEDS: assign] | not reviewed | 6mo | on publish | stub |

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
