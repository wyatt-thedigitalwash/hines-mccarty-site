# Content Review Queue

The register for the currency policy in docs/build/CASES-WE-DEFEND-PLAN.md
Section 9. Every charge page, silo hub, market page, and tool appears here with
an owner and a review date.

Page data is the source of truth. The `owner` and `lastReviewed` fields live on
each page's data entry; this file is the human-readable view, the place off-cycle
triggers get logged, and the place verification sources get recorded. It lives in
the repo so that a review date versions alongside the page it describes.

**Nothing in this file is filled in yet. No pages have been built.** Rows are
added when a page is built, not when it is planned.

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

| Page | Owner | Last reviewed | Cadence | Next due | Status | Open [VERIFY] |
|---|---|---|---|---|---|---|
| _none built_ | | | | | | |

### Silo hubs

| Page | Owner | Last reviewed | Cadence | Next due | Status | Open [VERIFY] |
|---|---|---|---|---|---|---|
| `/cases-we-defend` | | | 12mo | | | |
| `/criminal-defense` | | | 12mo | | | |
| `/federal-criminal-defense` | | | 12mo | | | |
| `/white-collar-defense` | | | 12mo | | | |

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
