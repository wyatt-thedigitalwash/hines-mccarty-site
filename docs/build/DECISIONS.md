# Decisions

Decisions made by the client or the project owner that change a plan, a page
list, or a standard. One entry per decision, with the date, what was decided,
why, and where it was applied.

This file exists so that a settled question stays settled. When a plan changes
because of a decision recorded here, the plan carries the change and this file
carries the reason. Do not restate plan content here, and do not make a decision
here that a plan already makes.

---

## 2026-08-13, D1 through D9: docs/research/briefs/STATE.md Q1 through Q7, plus two additions

Source: the seven human-only questions raised by the wave 1 and wave 2 content
briefs, answered 2026-08-13, plus two standards added at the same time.

---

### D1. The Middle District of Florida content lives on the silo hub

**Decided.** `/federal-criminal-defense` carries the Middle District of Florida
content. The Layer 2 guide at
`/resources/guides/middle-district-florida-federal-court` is **not built**.

**Why.** WEBSITE-PLAN.md Tier 3 and CASES-WE-DEFEND-PLAN.md Section 7 both
described a federal district hub, in two different places, and two pages cannot
own one query. The silo hub template already reserves a section for "what is
different about this forum," which is exactly the content in question, and the
competitors ranking on the query are hubs and homepages rather than guides.

**Applied to.** WEBSITE-PLAN.md Tier 3 guide list, duplicate removed with a
pointer to this decision. docs/research/briefs/W1-01 already assumed this answer
and needs no rework.

---

### D2. C12 allowlist amended, with a scope limit on justice.gov

**Decided.** Two additions to the CASES-WE-DEFEND-PLAN.md Section 10.3
verification allowlist:

- **uscode.house.gov**, for the text of the United States Code. It is published
  by the Office of the Law Revision Counsel and is the official publisher.
- **justice.gov**, for **procedure and DOJ policy only**. Explicitly **not** a
  source for what a statute says. The Justice Manual is internal policy, not
  law, and it does not bind a court.

**Why the original allowlist was defective.** Section 10.3 allowlisted
"uscourts.gov and ussc.gov" for "federal statutes and guidelines." ussc.gov
publishes the Guidelines Manual, so the guidelines half was sound. **Neither
site publishes the United States Code**, so the statutes half named no source
that could satisfy it. The effect was that C12 made it impossible to verify any
federal statutory claim, which blocked seven of the ten wave 1 and wave 2
briefs: every citation to 18 U.S.C. 1341, 1343, 1344, 922(g), 1028A, 1956, and
21 U.S.C. 841 and 846. The rule was not too strict, it was pointing at the wrong
door.

**Why the justice.gov scope limit.** Justice Manual sections are frequently
cited by firms as though they state law. They state charging policy. A page that
cites JM 9-11.151 for what a target letter is, is on solid ground; a page that
cites it for what a statute requires is not. The limit keeps the distinction
visible in the rule rather than leaving it to a drafter's judgment.

**Applied to.** CASES-WE-DEFEND-PLAN.md Section 10.3 and the C12 row in the
Section 13 done-criteria table. Verified in use the same day: 18 U.S.C. 1341,
1343, 1344, and 1028A were fetched from uscode.house.gov and the quoted text
recorded in the affected briefs.

---

### D3. Two new charge slugs

**Decided.** Add `/white-collar-defense/ppp-loan-fraud` and
`/white-collar-defense/identity-theft`. Neither is folded into a sibling.

**Why.** Both are wave 1 or wave 2 pages in CASES-WE-DEFEND-PLAN.md Section 7
that had no slug in src/lib/site.ts. Both carry substance that survives the C9
cover-the-name test on its own: PPP fraud on a programme-specific limitations
period and an audit-before-indictment posture, identity theft on a four-tier
offense-level ladder under F.S. 817.568 running from level 4 to level 9.
Folding either into a sibling would discard the substance that makes it pass.

**Applied to.** src/lib/site.ts `whiteCollarCharges`. WEBSITE-PLAN.md Tier 2
white-collar list.

---

### D4. Mail fraud fails C9 and becomes a section. Bank fraud passes and stays a page.

**Decided by applying the test, not by assumption.** The C9 cover-the-name test
was run against the wire fraud pages for both candidates, on statutory text
fetched from uscode.house.gov and on Tampa-geolocated SERPs, both 2026-08-13.

**Mail fraud: FAILS.** 18 U.S.C. 1341 and 1343 are the same statute with one
clause changed. Both open with "Whoever, having devised or intending to devise
any scheme or artifice to defraud, or for obtaining money or property by means
of false or fraudulent pretenses, representations, or promises." Both carry a
20-year maximum. Both carry a **word-for-word identical** enhancement sentence
raising it to $1,000,000 and 30 years where the offence relates to a
presidentially declared major disaster or emergency, or affects a financial
institution. The only difference is the jurisdictional means: the mails or a
commercial interstate carrier, against wire, radio, or television communication
in interstate or foreign commerce.

Cover the word "mail" on a mail fraud page and every section remains true of
wire fraud. That is the C9 failure condition exactly as Section 4.5 states it.

The market agrees. On `mail fraud attorney Tampa`, the #1 result is a combined
"Mail & Wire Fraud" page, Todd Foster ranks with "Mail & Wire Fraud Lawyer,"
Joffe ranks with "Tampa Wire Fraud Lawyer | Mail Fraud Defense," and LawInfo
serves its **wire fraud** directory page for the mail fraud query. The AI
Overview cites a `mail-wire-fraud.html` URL and a combined mail-and-wire slug.
Google is treating them as one entity, and the firms that rank have already
merged them.

**Bank fraud: PASSES.** 18 U.S.C. 1344 has different elements and a different
hook. It reaches whoever "knowingly executes, or attempts to execute, a scheme
or artifice" either "to defraud a financial institution" or "to obtain any of
the moneys, funds, credits, assets, securities, or other property owned by, or
under the custody or control of, a financial institution, by means of false or
fraudulent pretenses, representations, or promises." There is no mailing and no
wire element at all: the jurisdictional hook is the institution itself. Its
30-year maximum and $1,000,000 fine are the baseline rather than an enhancement.

Cover the word "bank" and the elements section is false, because no other page
in the silo requires a financial institution as the object of the scheme.

The SERP is separately distinct: `bank fraud attorney Tampa` shares no result in
its top three with the wire fraud query, LawInfo maintains a separate
"bank-fraud-and-embezzlement" directory category, mortgage fraud clusters under
it, and its People Also Ask set is different ("What qualifies as bank fraud?",
"How much money is considered fraud in Florida?"). No AI Overview.

**What happens.** `/white-collar-defense/mail-fraud` is removed from the page
list. The mail fraud query is targeted by an H2 within
`/federal-criminal-defense/wire-mail-fraud`, whose slug already names both and
which is the page built on the federal statutes. `/white-collar-defense/wire-fraud`
is unaffected: it is built on the Florida Communications Fraud Act, F.S. 817.034,
which is why it survives C9 against its own federal sibling.
`/white-collar-defense/bank-fraud` is unchanged and keeps its URL.

**Applied to.** src/lib/site.ts `whiteCollarCharges`. WEBSITE-PLAN.md Tier 2
white-collar list. CASES-WE-DEFEND-PLAN.md Section 4.6.

---

### D5. No federal identity theft page now

**Decided.** Do not build a federal identity theft page. 18 U.S.C. 1028A is a
companion count, not a standalone demand centre. The forum section on
`/white-collar-defense/identity-theft` links up to `/federal-criminal-defense`
rather than to a sibling, as W2-06 is already written.

**Why.** No brief evidence supports a standalone federal page. 1028A attaches to
an enumerated felony rather than standing alone, which is what makes it a
companion count as a matter of the statute's own structure and not only as a
matter of search demand.

**Revisit if.** Later brief evidence shows independent demand.

**Applied to.** Nothing changes. Recorded so the gap is a decision rather than
an oversight.

---

### D6. Reporting standard for waves 1 and 2

**Decided.** Wave 1 and wave 2 pages are measured on **statewide informational
capture and on conversion. Never on local charge-term position.**

**Why.** Google Ads reports no measurable Tampa DMA search volume for the
grand theft, drug trafficking, gun charge, money laundering, identity theft,
wire fraud, or PPP loan fraud attorney terms. Only domestic violence (90/month)
and embezzlement (10/month) register at all. Measuring a page on a term that has
no measurable local volume produces a number that means nothing and a report
that reads as failure. The volume that exists is statewide and informational:
`third degree felony Florida` 1,000/month, `grand theft Florida` 320,
`domestic violence Florida charges` 170, `10-20-life Florida` 170,
`grand theft third degree Florida` 140, `identity theft Florida statute` 70,
`Florida criminal punishment code scoresheet` 70. All verified 2026-08-13.

This extends a principle the plan already had. Section 7 already says wave 4
"should simply not be measured on rankings." The evidence says the same is true
of waves 1 and 2, for a different reason: not because the terms are unwinnable,
but because they are unmeasurable.

**Client communication requirement.** This revises the goal as originally
stated, so **it must be communicated to the client before any reporting begins,
not at the first report.** A reporting standard introduced alongside the first
set of numbers reads as an excuse for them. Introduced beforehand it is what it
actually is, which is the correct measurement for this market.

**Applied to.** CASES-WE-DEFEND-PLAN.md Section 7, as a reporting standard
attached to the build sequence. WEBSITE-PLAN.md Section 1, which is where
ranking expectation is set.

---

### D7. The Brandon Regional Service Center stays out of copy

**Decided.** Blocked on the attorneys. Do not refer to the Brandon Regional
Service Center in page copy until they confirm it is accurate for the case types
these pages cover.

**Why.** hillsclerk.com lists a Brandon Regional Service Center at 311 Pauls
Drive, Suite 110, Brandon FL 33511, among its clerk locations offering Criminal
Courts services, verified 2026-08-13. It is a clerk facility in the firm's own
town and no competitor page mentions it, which makes it attractive. **A clerk
service centre is not necessarily where a felony is heard**, and the difference
between where a document is filed and where a case is heard is exactly the kind
of fact Section 8.3 warns is easy to guess wrong and embarrassing to publish
wrong. The attractiveness is the reason to be careful, not the reason to use it.

**Applied to.** WEBSITE-PLAN.md Section 9 open questions. The seven state-side
briefs already label it verified as a clerk listing, which it is; what is
unverified is what it means for these case types.

---

### D8. Being named in the commercial AI Overview is an explicit objective

**Decided.** Add "named in the commercial AI Overview" as an objective with its
own measurement note, and record the current baseline.

**Why.** Four of the ten wave 1 and wave 2 primary queries carry an AI Overview,
and on commercial queries it does not summarise law, it **names firms and then
asks the searcher a qualifying question**. That is a referral surface sitting
above the organic results, it is not the featured snippet the template was
written for, and nothing in the plan currently names it as something to win.

**How it is measured.** Presence or absence of the firm in the citation set and
in the named-firms text, per query, recorded on the same cadence as the rest of
reporting. It is not a rank and should not be reported as one. It is also
volatile, so a single absence is not a regression.

**Baseline, verified 2026-08-13, Tampa-geolocated.**

| Query | AI Overview | Firms named in the text | Citation count |
|---|---|---|---|
| PPP loan fraud attorney Tampa | yes | Hoyer Law Group, Scriven Law, Trombley & Hanes | 5 |
| drug trafficking attorney Tampa | yes | Hanlon Law, The Rickman Law Firm | 12 |
| gun charge lawyer Tampa | yes | Hanlon Law, OA Law Firm, Fernandez Law Group, Goldman Wetzel | 8 |
| wire fraud attorney Tampa | yes | Michael J. Petro, Hanlon Law, O'Brien Hatfield | 6 |
| mail fraud attorney Tampa | yes | O'Brien Hatfield, Todd Foster Law Group, Hanlon Law, Michael J. Petro | 6 |
| grand theft attorney Tampa | no | -- | -- |
| embezzlement lawyer Tampa | no | -- | -- |
| domestic violence lawyer Tampa | no | -- | -- |
| money laundering defense attorney Tampa | no | -- | -- |
| identity theft defense lawyer Tampa | no | -- | -- |
| bank fraud attorney Tampa | no | -- | -- |

Hines & McCarty appears in none of them, which is expected and is the point of
recording a baseline.

**One compliance note that travels with this objective.** On the wire fraud
query the AI Overview's second citation is a competitor slug already recorded in
avoid.md item 14 as an unverifiable superiority claim. Google amplifying a
pattern does not make it lawful to copy. The objective is to be named, not to
adopt the phrasing of the firms that currently are.

**Applied to.** CASES-WE-DEFEND-PLAN.md, new Section 4.7.

---

### D15. The target letter page is c9Exempt, under a second exemption type

**Decided 2026-08-13.** Raised by
docs/research/briefs/FED-08-target-letter-defense.md, which escalated it rather
than resolving it, and correctly.

**Decided.** `/federal-criminal-defense/target-letter-defense` is `c9Exempt`
with a reason **distinct from corporate fraud's**, and the exemption model gains
a `type` field so the two cannot be reported as one state.

- `no-statute`: no offence exists, so no differentiator could be false about
  anything. Corporate fraud, D12.
- `policy-governed`: a real page with verified substance whose governing source
  is agency policy rather than statute, and whose differentiator is precisely
  that absence. The target letter page, resting on JM 9-11.151.

**Why not one exemption.** The same principle that already separates
excused-by-decision from not-yet-written: two states that mean different things
must not share a label. The moment they do, the narrow exemption widens to admit
whatever the broad one would, and nobody decides that it should.

**Why not the alternatives.** Substituting 18 U.S.C. 3282 or 1519 into the
statute field so it parses was rejected: the differentiator rests on neither,
and a field that says otherwise makes the checker pass by lying to it, which is
docs/research/HUNT-LIST.md defect 1. Widening `isStatuteCitation` to accept
Justice Manual citations was rejected because it would let any later page rest
on policy without a decision being made, which is the silence the check exists
to break. **The statute-parse flag on this page is correct and is excused, not
engineered away.**

**The exemption is checked, not trusted.** The two types carry opposite
obligations, and `findMisTypedExemptions` in src/lib/c9.ts enforces both:
`policy-governed` requires a **populated** C9, because the page claims verified
substance and is excused from the statute-parse check only; `no-statute`
requires the opposite. Without that invariant, `policy-governed` would be a
general escape hatch admitting any page that claimed policy governed it and then
said nothing. Both invariants have self-tests that show them firing.

**Applied to.** src/lib/c9.ts (`C9ExemptionType`, `findMisTypedExemptions`),
src/lib/site.ts (`CHARGE_C9_EXEMPT` typed, target letter C9 recorded and
populated), scripts/check-c9.mts (exemptions reported by type, invariants
enforced, four new self-tests).

---

### D16. Sex crimes is a category overview that is still C9-checked

**Decided 2026-08-13.** Raised by docs/research/briefs/W4-02-sex-crimes.md
Section 0.

**Decided.** `/criminal-defense/sex-crimes-defense` is modelled as a **third
state**: category overview, **C9-required**, distinct from both
charge-page-with-C9 and `c9Exempt`.

**Why not exempt.** D12's stated condition for exemption is that **no statute
exists**. Corporate fraud met it. This page does not: it rests on five statutes,
and Florida law enumerates the category itself twice, at F.S. 943.0435(1)(h)1.a
and F.S. 775.21(4)(a)1. Exempting it would also delete a 23-row penalties table
that is both the page's strongest asset and its referral asset.

**Why not a plain charge page.** It is not one charge. Recording it as one would
state something untrue about a page spanning three chapters.

**The field records what the page is, never permission to skip the check.**
`comparable()` deliberately does not filter on `c9Category`, and
`findCategoryConflicts` fails the build if a page is ever marked both category
and exempt, because a page cannot be both excused from the check and required to
pass it.

**Applied to.** src/lib/c9.ts (`C9Category`, `findCategoryConflicts`),
src/lib/site.ts (`CHARGE_C9_CATEGORY`), scripts/check-c9.mts.

---

### D17. D6 is amended, not carved out. Measurability is checked per charge.

**Decided 2026-08-13**, on the evidence in
docs/research/briefs/ST-04-dui.md Section 0.4.

**Amended.** D6 committed waves 1 and 2 to statewide informational capture and
**never** local charge-term position. Its replacement:

> Reporting defaults to **statewide informational capture**, except where **DMA
> volume is verified measurable for that charge**, in which case local position
> is a legitimate secondary measure reported alongside it. Measurability is
> **checked per charge, never assumed** in either direction, and re-derived from
> a volume pull each reporting cycle.

**Why amend rather than carve DUI out.** A case-by-case exception would
reproduce this error the next time a charge has volume. The defect in D6 was not
that it named the wrong charges; it was that it generalised a measurement from
the charges it happened to examine. An exception list inherits that defect. A
per-charge check does not.

**The evidence, stated the way it survives review.** `dui lawyer tampa` returns
**320/month at Tampa DMA** with CPC **$110.74**, the highest in the corpus,
against **no measurable DMA volume** for seven wave 1 and 2 charge terms. It is
**not** argued from Florida volume equalling DMA volume: that ratio is a
tautology satisfied by every city-named term in the same pull, including terms
at 10/month, and the brief rejected that framing when it was offered.

**Two charges qualify today**, DUI and domestic violence. The list is data, not
doctrine, and is re-derived each cycle.

**The foundational research has a hole, not a wrong grade.** docs/research/
keywords.md **never graded DUI at all**: zero word-boundary matches, the single
substring hit being a domain name in a rankers list. The file that graded
winnability for this project omits the charge carrying the highest measurable
local volume in it. That is an absence in the source material and it is recorded
as one, because a gap and an error need different remedies.

**D6's client-communication requirement carries over unchanged**: this is told
to the client **before** reporting begins.

**Applied to.** CASES-WE-DEFEND-PLAN.md Section 7.1, docs/research/briefs/
STATE.md.

---

### D18. flhsmv.gov is not added to the verification allowlist

**Decided 2026-08-13.** Raised by docs/research/briefs/ST-04-dui.md, which asked
the question and built the page without the source.

**Decided: no.** Two reasons, both recorded because either alone is weaker than
the pair.

1. **The page was built entirely without it and lost nothing.** The DUI brief's
   C9, its penalties material, and its administrative-suspension section all
   rest on F.S. 322.2615, 322.271 and 316.193 fetched from flsenate.gov and
   leg.state.fl.us. An allowlist addition that buys nothing is a widening with
   no return.
2. **It is currently publishing the superseded rule on the exact point the page
   corrects.** flhsmv.gov holds organic position 1 on `florida DUI penalties`
   and is the AI Overview's first cited source, and it still states "Second or
   subsequent refusal is a misdemeanor of the first degree" after ch. 2025-121
   made a **first** refusal a second degree misdemeanor effective 1 October
   2025. An agency page can lag the statute it administers.

The second reason is the general one and outlasts this instance: **the allowlist
prefers the source that publishes the law over the agency that applies it.**
That is the same line D2 already draws for justice.gov, which is allowlisted for
procedure and policy and never for what a statute says.

**Applied to.** CASES-WE-DEFEND-PLAN.md Section 10.3, docs/build/REVIEW-QUEUE.md.

---

### D14. Florida computer crime moves to the state silo

**Decided 2026-08-13**, resolving the question plan Section 4.6.2 left open, on
the SERP evidence it required rather than on reasoning from the statute.
Evidence in docs/research/briefs/FED-02-computer-internet-crimes.md Section 1.

**Moved.** `/white-collar-defense/computer-crime` becomes
`/criminal-defense/computer-crimes-defense`, relabelled **"Unauthorized Computer
Access"** with the description "Florida charges for accessing computers without
authorization". State silo 11 rows, white-collar 10, charge set still 30.

**The demand reasoning.** Federal-shaped demand outweighs Florida-shaped by
roughly nine to one at Florida level: `computer fraud and abuse act` 140/month
and `18 usc 1030` 40/month, against `florida computer crimes act` at 20/month.
Tampa DMA returns no data for any term in the cluster. Whatever the silo, the
federal page carries the searches.

**The substance reasoning.** Unauthorized access is not inherently financial.
The genuinely white-collar limb is fraud, and Florida treats fraud as an
**enhancement** to the base access offence at 815.06(3)(b)2, where 18 U.S.C.
1030(a)(4) makes it an offence in its own right. The federal page carries that
limb. What remains on the Florida side is access and damage, neither of which is
a financial crime, and neither of which belongs under a white-collar heading.

**The label was chosen against two failure modes, not just for accuracy.** It is
oriented to access rather than to fraud, because the fraud framing is the
federal page's. And it avoids "internet crimes", because in this market that
phrasing pulls child pornography defence into the same SERP: position 7 on
`computer crimes attorney Tampa` is a CSAM defence page. A page labelled to
invite that traffic would be the wrong page in the wrong silo.

**Applied to.** src/lib/site.ts, WEBSITE-PLAN.md Tier 2 both lists,
REVIEW-QUEUE.md, and FED-02's counterpart link, which was deliberately left
unwired until this decision and is now pointed at the new slug.

**Carried forward into the new page's brief, as a constraint.** F.S. 815.06 has
**no row in the F.S. 921.0022 ranking chart**; only 815.04 does. So this page
**cannot carry an offense-level column**, and 815.04's rows must not be borrowed
for it. Most pages in this set anchor their C9 on the offense-level table. This
one has to anchor somewhere else, and its brief must name where.

---

### D13. Healthcare fraud relabelled on both sides

**Decided 2026-08-13**, from docs/build/OVERLAP-AUDIT.md pair 4.

**The pair survives as two pages.** 18 U.S.C. 1347 reaches a scheme to defraud
**any health care benefit program**, which includes private insurers. F.S.
409.920 is **Medicaid specific** and is built around a false statement in a
claim submitted to the Agency for Health Care Administration, its fiscal agent,
or a managed care plan. Different objects, different conduct, so an element
difference rather than a jurisdictional one.

**The defect fixed.** Both entries were byte-identical in slug, label, and
description: `healthcare-fraud`, "Healthcare Fraud", "Billing charges involving
Medicare, Medicaid, or insurers". Two pages starting from an identical name and
an identical one-line description get written toward each other. The shared
description was also wrong on the Florida side, since 409.920 is not about
insurers generally.

**Applied.**

| Entry | Label | Description |
|---|---|---|
| `/federal-criminal-defense/healthcare-fraud` | Healthcare Fraud | Fraud against any health care benefit program |
| `/white-collar-defense/healthcare-fraud` | Medicaid Provider Fraud | Florida charges over claims submitted to AHCA |

The slugs stay identical, which is fine and is what the plan already
contemplates for genuine overlap pairs, as with money laundering.

**Still open.** Both C9 assertions are unpopulated, so the collision checker
cannot yet hold this line. Populate them when the briefs are written, and the
check enforces the separation instead of a reviewer having to notice it.

---

### D12. Corporate fraud collapses. The federal card goes, the white-collar one is reclassified.

**Decided 2026-08-13**, from docs/build/OVERLAP-AUDIT.md pair 7 and its
follow-up section.

**Neither side rested on a statute.** There is no corporate fraud offence in the
Florida Statutes or in the United States Code. The nearest federal statute is 18
U.S.C. 1348, securities and commodities fraud, and
`/white-collar-defense/securities-fraud` already covers that ground. A page with
no statute fails C9 by construction: there is no element that could be false if
another charge were swapped in, because there is no charge.

**Removed: `/federal-criminal-defense/white-collar-corporate-fraud`.** Three
problems compounded. It rested on no statute. Its name duplicated an entire
silo, so it read as a silo nested inside a silo. And every chargeable offence it
would have covered already had its own page, so there was no residue for it to
hold. The federal silo hub now carries **one cross-silo row** to
`/white-collar-defense`, which is the treatment mail fraud received under D4:
the query is served, no page rests on nothing, and coverage is one click away in
the silo that owns it.

A rename was considered and rejected. The only rename with a statute behind it
is 1348, which would have created a new overlap pair to solve an existing one.

**Kept and reclassified: `/white-collar-defense/corporate-fraud`.** This is the
modification to the audit's recommendation. It is **not a charge page**. It is a
category overview that links down to securities fraud, bank fraud, embezzlement,
and wire fraud.

**Recorded as an explicit C9 exception**, with the reason: no statute, kept
because the term carries client-side search value.

**Marked in the data, so the checker skips it by design rather than by
omission.** `ChargePage` gains `c9Exempt: { reason }`. The checker reports
exempt entries separately from entries carrying `[NEEDS]`, because
excused-by-decision and not-yet-written are different states and collapsing them
into one skipped count is precisely how a page with no statute went unnoticed in
the first place. The level 3 template also reads the flag and omits the statute,
penalties, and elements sections on an exempt entry, since those fields are not
missing there, they are inapplicable, and a `[NEEDS]` marker would promise work
that will never be done.

**Consequences.** The charge set goes from 31 to 30. The federal silo goes from
10 rows to 9. Applied to src/lib/site.ts, WEBSITE-PLAN.md Tier 2, and
REVIEW-QUEUE.md.

**The checker gap this exposed, now closed.** The collision checker compares
pages resting on the same statute, so a page resting on **no** statute was
invisible to it. `statuteKey` already fell back to the raw string and discarded
the signal. `findUnparseableStatutes` now fails the build when a compared C9's
statute field does not name a statute, and a self-test feeds it the corporate
fraud card as it actually stood and fails the build if the detector does not
fire on it.

---

### D11. Money laundering gets a white-collar slug

**Decided 2026-08-13.** Add `/white-collar-defense/money-laundering`. The
federal slug `/federal-criminal-defense/money-laundering` already existed and
stays. The two are an overlap pair under plan Section 4.6, not one page.

**Why.** W2-05 is written for the white-collar page and its substance is
entirely Florida law: the Florida Money Laundering Act at F.S. 896.101, a
threshold ladder that starts at **$300**, a **12-month aggregation window**, and
a third degree tier that is nonetheless ranked at **offense level 7**. None of
that belongs on a federal page, which rests on different statutes with different
elements and no Florida offense levels at all. Folding the brief into the
federal page would have discarded the substance that makes it pass C9, which is
the same reasoning as D3.

**How it surfaced.** Not by review. The C9 key check added in the same session
found it: the assertion was keyed to a slug that did not exist, so it governed
nothing while looking recorded. That is the failure shape in
docs/research/HUNT-LIST.md defect 1, caught by a check rather than by reading.

**Applied to.** src/lib/site.ts `whiteCollarCharges` and `CHARGE_C9`. The white
collar silo now carries 11 rows and the charge set totals 31. The C9 key check
reports 9 of 9 keys resolving.

**Precedent this sets, consistent with D4.** Two silos may carry the same slug
where the underlying statutes genuinely differ, as healthcare-fraud already
does. What is not permitted is two pages resting on statutes that differ only in
a jurisdictional element, which is why mail fraud was removed.

---

### D10. Wave 2 build order accepted. Not reordered for the white-collar pages.

**Decided 2026-08-13**, after the brief-review recommendation in
CASES-WE-DEFEND-PLAN.md Section 7.3.

**Accepted.** Wave 2 is not reordered to build the white-collar pages first,
despite the supply-gap evidence. The accepted build order is domestic violence,
drug trafficking, gun crimes, identity theft, wire fraud, money laundering.
Grand theft is absent because D-series decision 7.2 moved it to wave 1.

**Why, in one line:** ease of ranking is the cheap input, demand is the scarce
one, and you sequence against the scarce one.

**The distinction that carried it, and it is the part worth remembering.** The
briefs had treated all SERP padding as one signal. It is two, and they point
opposite ways:

- **Generic-hub and near-miss-offence padding** (a white-collar hub ranking on a
  money laundering query, a bank fraud page ranking on a wire fraud query) is a
  genuine relevance vacuum. Google is substituting the topical parent or the
  nearest sibling because no better document exists. A dedicated page can
  plausibly displace it. This is the real, exploitable half.
- **Out-of-market padding** (a St. Petersburg page at #5 on a Tampa query, a
  `/naples/` URL at #11) is worse news, not better. It means the "Tampa" token
  is doing almost no ranking work, so Google is falling back on domain
  authority. **That removes the exact advantage the page was going to be built
  on.** You wanted to win by being the Tampa-specific document; the SERP is
  saying Tampa-specific is not the axis of competition on that query.

Treating the second as evidence of opportunity was the error in the
build-white-collar-first case.

A third signal inverts the intuition: an AI Overview citing twelve dedicated firm
pages, as on drug trafficking, indicates a **harder** field than homepage
padding, and a better one. Google does not synthesise an overview for a query
nobody asks.

**Supersedes** the ordering implied by the wave 2 rows in the Section 7 table,
which grouped pages without ranking them.

**What reopens it:** the firm's own case-mix and fee data, which is the strongest
counterargument and is not a SERP question; Search Console impressions once wave
1 is indexed; non-geo volume checks; and domain-authority reality. All four are
recorded in Section 7.3.

**One part of the underlying analysis expressly not adopted:** it suggested
folding embezzlement into grand theft, since Florida charges embezzlement as
theft. Legally correct, structurally wrong here. Embezzlement passes C9 on the
position-of-trust fact pattern, which is a different page in everything except
the charging statute, and it is already a wave 1 page. It stays.

---

### D9. Review velocity revised again, and the pattern named

**Decided.** The Google Business Profile review-velocity section is revised
against the directly observed Tampa local pack. **Local pack entry is a
multi-year objective under honest, unincentivized asks.**

**Why.** Every previous number rested on aggregator-reported counts with a
5-to-25-percent staleness band, because no local pack had ever been directly
observed. On 2026-08-13 the pack was observed directly, Tampa-geolocated, on ten
of ten primary queries. The counts are: **Daniel J. Fernandez 574, Hersem Law
236, Sammis 167, StechLaw 136, Brett Metcalf 125, Greater Tampa Law 123, Musca
Law 109**, with OA Law Firm 75, Mike G Law 76, Scriven 76, and Michael J. Petro
17 also appearing.

DOSSIER.md Section 3 built its ladder to a top of Smith & Eulo at 193. The firm
actually holding pack position 1 across most of these queries has **three times
that**. The 4-to-8-per-month target was selected to clear a ladder that
understated the real field by a factor of three, and it does not clear it.

**This is the third upward revision, and naming that is the point of this
entry.**

| Revision | Where | What changed |
|---|---|---|
| 1 | DOSSIER.md Section 3 | Original target: 50 to 100 reviews at 4.9-plus in 12 months, via 4 to 8 per month, sized against a single profile and an aggregator-reported ladder topping at 193. |
| 2 | CASES-WE-DEFEND-PLAN.md Section 8.5.4 | Two offices means two profiles and nothing pools, so holding the same position needs 4 to 8 per month **per profile**, 8 to 16 firm-wide. That section already said plainly that this is a position-holding requirement and not an achievable target. |
| 3 | This decision | The ladder itself was wrong. The observed leader is at 574, not 193. |

Each revision moved the number up and each was triggered by better information
rather than by a change in ambition. The honest conclusion is not a fourth
number. **It is that review count is the wrong lever to plan the local strategy
around on a twelve-month horizon.** Criminal defense has a structurally low
review rate, many clients rationally decline to be publicly associated with the
firm that defended them, and no ask script overcomes that. Section 8.5.4 already
said the gap could not be closed and listed the honest responses; this revision
says the gap is roughly three times wider than that section knew.

**What this does not change.** The review programme still starts week one, still
asks every eligible party, still offers no incentive of any kind, and still
never drafts wording (Rules 4-7.13(b)(9), 4-7.17(b), 4-7.18; avoid.md items 34
through 37). A slow-compounding asset with a distant payoff is still worth
starting first. What changes is what anyone is told to expect from it.

**Applied to.** CASES-WE-DEFEND-PLAN.md Section 8.5.4, which gains a subsection
8.5.6 rather than being rewritten, so the revision history stays visible.

## 2026-08-14, D19 through D22: the statute-table apply step

**On the numbering.** These were first written as D10 through D12, which
collided with the existing D10, D11 and D12. Renumbered to follow D18. The
collision is worth a line rather than a silent fix: the decision log is
referenced by number from four other documents, so a duplicate number is a
broken reference, not a cosmetic problem.

Context: the 2026-08-13 session died mid-run (its batch-2 workflow was killed
with 4 of 68 agents unfinished). The journals survived; a new session finished
the 4 audits from cached builds, and these decisions govern how verified
tables now land in the codebase.

**D19. Verified tables live in `src/lib/statute-tables/`, one file per
statute, merged into `STATUTES` by `src/lib/statutes.ts`.** The DoD says
"an AUDITED table in src/lib/statutes.ts"; with ~72 tables coming, one file
would pass 15,000 lines and become unreviewable, so statutes.ts stays the
single import surface (types, helpers, the record) and the data files sit in a
directory it aggregates. A table reaches that directory only with a PASS
verdict from the independent audit; FAILed tables never land, so presence in
the directory IS the verification claim. Generated files carry a do-not-hand-
edit header because the claim checker treats rows as ground truth.

**D20. Statute keys are the bare section number as prose cites it.** FS
"893.135", USC "1956". check-claims.mts matches keys literally against
sentences (`s.includes(statute)`), and "18 U.S.C. § 1956" contains "1956", so
bare sections keep the exhaustive-claim gate live for both jurisdictions.
Full citation stays in `cite`. The GradingRow scope union gained "victim" and
"place", the two values batch-2 builders were already instructed to use.

**D21. A materiality rule was added to the re-audit prompt.** Batch 2 re-
failed 6 of 7 repaired tables, several rounds on progressively smaller
findings (an unmarked ellipsis, a spliced heading). Unbounded re-audit does
not converge: every fresh auditor finds a fresh nit, and a gate that can
never be satisfied gets routed around, which is the theatre failure this
project keeps refusing. The rule: report every defect, but verdict FAIL is
reserved for defects in penalty data a page could repeat (wrong degree, wrong
bound, missing penalty provision, wrong level, misused scope, meaning-
changing quote). A cosmetic formatting nit alone is PASS with the nit in
notes. What this does NOT relax: completeness is still set by the auditor,
still on coverage alone, and any typed-field error still fails.


**D22. min and max must declare what they count, and there is no default.**
The schema stores dollars, drug weights, pill counts, person counts, and blood
alcohol levels in the same two numeric fields. `check-claims.mts` compares a
sentence's dollar figures against those fields, so it was one written page away
from answering a question about money with a row about grams. Probed and
confirmed before it shipped: `degreesAt("893.13", 1000)` returns two felony
degrees off a weight ladder, and F.S. 817.568 carries dollar prongs and
person-count prongs in the SAME paragraph with overlapping ranges, so a $15
claim would meet the 10-to-20-persons row.

`amountUnit` in `scripts/statute-table-annotations.json` declares the unit per
statute. Only `"usd"` enables the amount rules. Everything else disables them
and the gate prints which statutes it is not checking, on every run.

**The absence of a default is the decision.** Defaulting to dollars would be
correct for most statutes and silently wrong for the drug pages, which is the
shape of every failure this project has had: a mechanism that appears to run
while checking nothing. A page whose primary statute has bounded rows and no
declared unit now FAILS the gate and names the file to edit. Four statutes are
declared non-dollar today: 893.13 (grams), 817.568 (mixed dollars and person
counts), 1956 (dollar thresholds that are predicate and jurisdictional rather
than grading), and 322.2615 (blood alcohol levels).

**A second thing this surfaced.** F.S. 896.101(5)(a) reads "exceeding $300".
Its audited row recorded that as inclusive because the table was built before
`minExclusive` existed, with the exclusivity noted only in trigger prose. The
annotation file now carries the flag, on the same footing as `residual`: prose
inside a row does not arm a guard, and $300 exactly is a boundary a money
laundering page could state wrongly.
---

### D23. A repair is a fresh writing act, and gets the same verification as writing

**Decided 2026-08-14, from measurement rather than from principle.**

The verification discipline was built around WRITING. Facts are verified first
by agents who write no prose; writers may only assert a verified row. The
REPAIR step never got the same treatment: a reviewer fetched the statute and
reported, and the repair was then applied from that report plus a table
lookup, in the main session, at speed.

Round 7's regression check measured what that produced:

| Round | Fixes applied | New errors those fixes introduced |
|---|---|---|
| 5 | 8 | 2, found in round 6 |
| 6 | 13 | 3, found in round 7 |

**Both round-6 errors were the project's signature shape**, committed by the
repairer rather than the writer:

1. A grep of the F.S. 921.0022 chart for the string `812.014(2)(a)3` returned
   nothing, and the page was given the sentence "the ranking chart lists no
   level for either". The chart row **keyed** `812.014(2)(a)1.` reads
   "... ; property stolen while causing other property damage; 1st degree
   grand theft", and that clause IS the (2)(a)3. conduct. **A cite-keyed
   lookup is not a coverage test**, because a row's subject matter lives in
   its text, not in its key.
2. "The listed items are level 4 whatever they were worth" reached ten
   subparagraphs. The chart ranks `(2)(c)4. & 6.-10.` at level 4; (2)(c)11.,
   12. and 13. appear in no chart row at all.

Reading part of a source and inferring the rest, which is the failure the
whole fact layer exists to prevent.

**The rule.** Repairs are applied by an agent that RE-FETCHES every provision
it touches and returns, per edit, the verbatim words the new sentence rests
on. A second agent then verifies only the new sentences against text it
fetches itself, asking specifically whether the new text generalises beyond
what the basis supports, which is where every recent failure sat. Edits are
returned as exact old/new pairs and applied programmatically, so the main
session composes no legal prose.

**Evidence it works, gathered the same day, three times.** Every re-fetching
agent beat a findings-list repair. The pre-write fetch block corrected the
round-6 reviewer twice, on the 943.059 sealing mechanism and on the phrasing
of Rule 3.111(a). The gun-page rewrite, told to verify rather than to trust a
heading, found that five of the thirteen misdemeanors in 943.059(1)(b) are
chapter 790 offenses, so the charging statute and the sealing statute read the
same juvenile history for opposite purposes. No review round had that.

**What this does not change.** The reviewer still reviews and still fetches
first. The point is not that reviewers were wrong; it is that a finding is a
diagnosis and the sentence written to answer it is a new claim, and this
project does not publish claims nobody read a source for.

**Applied to.** The pair-1 repair run of 2026-08-14 and every repair after it,
including the legacy sweep and the remaining 21 pages.

---

### D24. A gate must read the page, not the data behind it

**Found 2026-08-14 by an adversarial reviewer who read the React component.**

`SectionBody` in `ChargeTemplate.tsx` was a switch returning exactly one
payload, so a section of kind `statute` rendered its statute and silently
dropped its `prose`. Three sections on the DUI page carried **1,489 words no
reader could ever see**: the effective date of the 2025 refusal amendment, the
pre-amendment comparison, the breath-and-urine scope limit, the 0.15 and
minor-passenger enhancement, and the whole injury and death block. Two headings
promised material their rendered bodies did not contain.

**Every gate passed for as long as it existed.** `pageCopy` extracts every
field regardless of kind, so the banned-term, duplication, claim and
unverified-claim checks were reading text that was not on the page. The
reader-question coverage check was worse than blind: it credited those sections
for `answers` a reader never received.

`page-copy.ts` already carried the warning in the other direction, that a field
which renders but is not extracted is a hole in every gate at once. **This is
the same hole inverted, and it is the more dangerous orientation**, because a
gate reading invisible text reports a page in better shape than it is, and
nothing about the output looks wrong.

**Two rules follow.**

1. **The renderer is total.** `kind` decides ORDER and emphasis, never what
   survives. `ChargeSection` makes every payload optional on every kind, so the
   type system cannot prevent the combination and the component must handle it.
2. **The gates own the gap they cannot see.** `check-pages.mts` now asserts
   that every payload field on every section is one the template renders, so
   adding a field to the schema without teaching `SectionBody` about it fails
   the build rather than deleting content in silence.

**The verification that mattered was against the built HTML**, not against the
gate: after the fix, `chapter 2025-121`, the breath-and-urine limit, `0.15` and
"including the driver" were grepped out of
`.next/server/app/criminal-defense/dui-defense.html`. A gate confirming its own
premise is not evidence.

**The generalisable point.** Every gate on this project reads `src/lib`. None
of them reads the rendered output, and the one defect none of them could see
was the one where the data and the page disagreed. When a check and the artifact
it protects are built from the same source, the check cannot see a fault in the
path between them.

### D25. Naming a failure mode in the instructions does not prevent it

**Decided 2026-08-14.** Measured on the batch B repair round, and recorded
because the result was the opposite of what the prompt design assumed.

**What was tested, without meaning to test it.** The batch B repair prompt
opened with the defect that had produced five of the batch's seven failures:
quoting a provision and stopping one sentence short. It named the shape, gave
five worked examples from the pages being repaired, and said in capitals to
read to the end of the subsection and then read the sentence after it. Every
repair agent received it. An independent verifier then checked only the new
sentences.

**Result: four of seven repairs committed the named defect while fixing it.**
The Rule 3.111(a) fix dropped the rule's own entitlement limiter. The
securities repair dropped a carve-out at the end of the sentence it quoted.
The tax repair introduced a fresh sentence-after-the-quote error on 18 U.S.C.
3559(a). And the drug possession repair quoted Rule 3.191(a) out of the
findings list, having opened no source at all, disclosing this in its own
`basis` field while the prompt in front of it said the basis must quote words
read in a source opened that session.

**What follows.** Instructions are not a control. They set intent, and intent
is what fails under load: an agent fixing a named defect is concentrating on
the sentence it was sent to fix, which is exactly when the sentence after it
goes unread. The only thing that caught all four was a second agent that
opened the provisions itself and had no stake in the repair. Budget for the
verifier as a required stage, never as a safety margin to be cut when a round
looks small, and do not let a well-written prompt substitute for it.

**Corollary, and the reason this is a decision rather than a note.** The
inverse temptation is to answer a defect by writing a longer prompt. That was
tried here and it is what produced this data. Where a defect can be caught
mechanically, write the gate (D24). Where it cannot, spend the tokens on an
independent reader rather than on more instruction.

**The reviewers are not exempt.** The same round's review reported four hrefs
to an unwritten page. There were three, they were prose URLs, and there was no
counterpart field. A reviewer hunting closed sets closed one. Verify a finding
before repairing to it; a repair aimed at a miscounted finding is a fresh
error with a citation attached.

### D26. A source record is checked as strictly as copy, because it is read by pages that do not exist yet

**Decided 2026-08-14.** Prompted by a verifier finding in the batch B round 2
repair that concerned no page at all.

**What happened.** A repair agent recorded three F.S. 921.0022 rows in
`docs/research/PAGE-SOURCES.md` as verbatim. Two carried pre-amendment dollar
figures: 509.151(1) as "value greater than $300" and 713.69 as "value $50 or
more". The chart reads $1,000 for each, and the audited fs-921-0022.ts table
carries min 1000 for both, so two fetches a day apart agreed against the
record. The securities fraud page relied on neither row. Nothing rendered
wrong. Every gate was green.

**Why it was still a failure.** PAGE-SOURCES.md is not a filing cabinet. It is
consulted as authority: this project's own instructions tell writers to use the
recorded verbatim text of a court rule rather than re-deriving it, and in the
same round a page put Rule 3.134 in front of a reader on that basis. The file
held no other record of those two thresholds. The first page written about
defrauding an innkeeper or about a landlord's lien would have taken a figure
wrong by 3x and by 20x, from a record labelled verbatim, and would have been
right to trust it.

**The rule.** A source record gets the same treatment as page copy: fetched,
read whole, and independently re-verified before it is written down. Trim a
record to what was actually verified rather than padding it with surrounding
text that looks like free context; the padding is where this one failed. Where
an excerpt starts part-way into a provision, mark it, because an excerpt that
does not say it is an excerpt reads as the whole thing.

**And the asymmetry that makes this worth a decision.** A wrong sentence on a
page is read by that page's readers and can be caught by anyone who reads it
against the statute. A wrong source record is read by future writers who are
consulting it precisely BECAUSE they have not opened the statute, and it will
be copied forward with the project's own authority behind it. The sentence is
read once. The record is trusted repeatedly.

### D27. A workflow's return value is the deliverable. The working tree is not.

**Decided 2026-08-14.** After unverified text reached a live page.

**What happened.** De-duplication agents were asked to return edits as old/new
pairs so a verifier could check them before they were applied. They returned
them. They also wrote them into `src/lib/site.ts`. The verifier then FAILED
both pages, for misquoting rules it presented as verbatim. The failed text was
already on disk by then, and a `git add -A` in the next commit swept it in,
because the review being done was of the edits applied rather than of the file
being committed.

**No gate caught it, and no gate could have.** The text was well formed, cited
real provisions, and typechecked. Every gate was green. What exposed it was an
improvement nobody had applied: the duplication measure went from 8.5% and 5.2%
to a passing 4.7% with none of the fix in place. A number that gets better on
its own is not good news. It is a question, and the answer is always that
something changed that you did not change.

**The diagnosis is worth keeping, because the obvious explanation was wrong.**
The plausible cause was that 32 new source blockquotes had widened the
compelled-text exclusion set, which is a documented mechanism in this project
and would have been benign. Reverting PAGE-SOURCES.md changed the number by
nothing. Ruling that out first is what pointed at site.ts, which `git status`
reported clean, against a commit that already contained the problem.

**The rule.** What a workflow returns is what gets reviewed and applied.
Anything an agent wrote to the tree is a side effect and is presumed
unreviewed. Two practices follow:

1. **Never `git add -A` after a workflow** without reading the diff for text
   nobody applied. Review the file being committed, not the edit list you
   worked from.
2. **Where a workflow's agents touch a file, rebuild that file** from a
   known-good commit plus the vetted edit list, rather than trusting the tree.
   That is deterministic, and it was how this was undone: 2b492ac plus 42
   vetted edits, after which the failures reappeared, which is the proof the
   revert worked rather than a second silent change.

**Say so in the prompt too**, but do not rely on it. D25 is the measured
finding that instructions do not prevent the behaviour they forbid. The
rebuild is the control; the instruction is a courtesy.

## 2026-08-20, D28: the concept documents got the adversarial round before the decisions they drive

### D28. A document that will drive a build-or-kill decision gets adversarial verification before the decision, and corrections are marked in place, never applied silently

The three tool concept documents (docs/build/tools/GUIDES-CONCEPT.md,
SEAL-EXPUNGE-CONCEPT.md, SENTENCING-BOND-CONCEPT.md, all written 2026-08-19 by
separate agents) each prescribe adversarial review for the artifacts they
specify. None had received one itself, and each carries verdicts that would
reverse parts of WEBSITE-PLAN.md. This round applied their own standard to
them: five independent auditors (per-document citation audits, an independent
reproduction of every measurement, and a cross-document consistency read on a
different model family than the writers'), then refute-by-default verification
of each surviving finding by a fresh agent that opened the sources itself.
Full record: docs/build/tools/REVIEW-2026-08-20.md.

**Results.** 434 claims checked, 31 findings, 10 verified: 8 confirmed, 2
refuted. The refuted pair is the reason the verification layer exists; both
were plausible and both were wrong, which is D25's finding operating in the
other direction.

**What was wrong, in one paragraph.** GUIDES-CONCEPT overstated both of its
verdict foundations in opposite directions: guide 2's "vacancy" table claimed
18 U.S.C. 3161(h) and (c)(2) appear on zero pages when (h) is treated on six
and (c)(2) on one (the copy landed in site.ts five days before the document was
written), and guide 1's "everything is already on the charge pages" inventory
fails per-page probing (Rule 3.111 absent from three pages, the Public Defender
from four). Meanwhile its duplication measurement UNDERSTATED its own strongest
evidence: 24 page pairs sit at or above the 5% limit on procedure-only
comparison, not ten, and the 39.8%/1,796 assembled-guide figure did not
reproduce (33.4%/1,509 on the same definition). Neither verdict flips, but the
provision-ownership strategy in B.3/A.5 needed real revision, not just new
numbers. SEAL-EXPUNGE had one error in 105 checked claims (a misdemeanor degree
in a hostile fact pattern, violating its own traceability rule).
SENTENCING-BOND survived with zero confirmed errors in 124 checked claims.

**Standing items this round did NOT resolve.**

1. **The gate-architecture conflict.** The three documents propose three
   overlapping gate designs for the same hole (tool and guide routes invisible
   to all five existing gates): SEAL's `check:tool-rendered`, SENTENCING's
   three-layer `check:tools`, GUIDES' `measuredPages` registry plus
   `check:provenance`. They disagree on missing-artifact semantics (SEAL: FAIL;
   GUIDES: skip-with-notice after a route-existence assertion). This is a
   design decision for the Phase 0 pass that all three documents already
   require, and the four medium consistency findings in the round record are
   its input. Leaning: one registry (GUIDES' shape) with SEAL's
   missing-artifact-FAIL semantics, decided properly when Phase 0 runs.
2. **17 low-severity findings** in the round record, unverified, mostly
   measurement-detail and citation-precision items. Anyone relying on a
   specific number in these documents checks the round record first.
3. **External-source claims were out of scope by design**: no auditor fetched
   flsenate.gov, the Bar Handbook, or barklaw.com, so verbatim statute fidelity
   and the Bark-page claims remain checked only against repository records.

**The rule going forward.** Concept documents that cite repository line numbers
get the citation audit; concept documents that claim measurements get the
independent reproduction; documents written by agents get a reader from a
different model family; and every correction lands marked in place, because a
silently corrected document destroys the review trail that makes the next
round's diffs readable. A number that could not be reproduced is treated as
wrong even when the conclusion it supports is right, which all three of this
round's measurement corrections turned out to be.

## 2026-08-20, D29 through D32: rulings on the adversarial round's standing items

Four decisions ruled by the client on the D28 round's record. D28 left the
gate-architecture conflict, the TOOLS.md-bar question, and the bond estimator
open; these entries close them.

### D29. One measured-surface registry, one gate architecture

There is a single registry of measured surfaces, and every gate iterates it.
The registry contains **every renderable page**: charges, guides, and tools.
Its own premise governs membership, because it is the premise all three concept
documents independently proved: a page outside the registry is invisible to
every gate, silently, so nothing renderable stays outside it.

The three per-document mechanisms are reconciled into one design against that
registry rather than built separately:

- GUIDES' `measuredPages` shape is the registry, widened from charges-plus-
  guides to charges-plus-guides-plus-tools. Each entry carries a copy surface
  (`pageCopy`, `guideCopy`, or a tool-copy extractor; one interface, three
  implementations), so the banned-term, duplication, and heading rails have
  exactly one iteration source.
- SEAL's `check:tool-rendered` assertions (T1 through T10) and SENTENCING's
  `check:tools` layers 1 and 2 become per-page assertion sets within the one
  rendered-artifact gate that enumerates the registry, not separate gates with
  separate iteration sources.
- GUIDES' `check:provenance` (G2 through G4) runs against every registry entry
  whose copy cites a provision, tools included.
- SENTENCING's layer 3, the headless DOM render, survives as the extension for
  registry entries with client islands, because a static grep cannot see a
  hydrated number. It runs only for entries that declare an island.
- `check:c9` keeps iterating charges alone, and prints that it skips guides
  and tools by design. Cover-the-name is a between-charge-pages test.

The consistency finding that forced this (three uncoordinated designs, the
banned-term rail acquiring three iteration sources, tool routes outside the
registry whose premise is that nothing stays outside it) is recorded in
docs/build/tools/REVIEW-2026-08-20.md.

### D30. A missing artifact FAILS the rendered gate. Never skip-with-notice.

SEAL E.3's reversal is adopted for every rendered-artifact check that guards a
registry entry: when the built HTML a gate exists to read is absent, the gate
fails. GUIDES G5's skip-with-notice is rejected, and not as a preference: its
stated condition was unsatisfiable as written, because the route-existence
check it deferred to (G1) is itself postbuild and has asserted nothing in the
state where the skip triggers. "The page is not built" and "the page contains
none of its traps" must never produce the same green run. That sentence is the
whole rule, it appears in both documents with opposite conclusions drawn from
it, and this entry settles which conclusion follows.

The existing `check-rendered.mts` skip-with-notice behaviour for the charge
channel predates this entry and is brought under the same rule when the
registry lands.

### D31. The TOOLS.md not-recommended bar is not self-executing against planned assets

TOOLS.md line 7 exempts assets already in the plan from re-argument by name.
Its not-recommended table is a design prohibition whose reasoning may reach a
planned asset, but **applying it to one requires a recorded decision**, per
SEAL A.1's reading: a live conflict between two plan documents needs a
decision, not an interpretation. SENTENCING B.2's application of the bar to
the bond estimator is reclassified accordingly: it was a recommendation that
needed the human entry it did not have. D32 is that entry. The same applies
prospectively: any future application of the bar to the seal-and-expunge
checker, the calculator, or any other planned asset lands here first.

### D32. The bond estimator is not built

The decision both concept documents required and neither could make. The Bond
& Bail Estimator is removed from the plan:

- **The tool is not built.** Its only real source, AO S-2025-063, binds the
  booking officer and no judge, excludes every capital, life, first degree and
  second degree felony by its own section 2, and expires 2026-12-31.
- **The bond schedule folds into the after-an-arrest guide** as a reference
  section: limitation first, exclusions second, amounts third with no charge
  mapped onto any row, what-happens-instead fourth, expiry stated.
- **The cash versus surety cost comparison survives** as the only interactive
  element inside that guide, after its premium figures are verified. It is
  arithmetic on the reader's own paper, maps to no charge, and predicts
  nothing.
- **The `tools` row is removed** from `src/lib/site.ts` in its own commit with
  this reason, per GUIDES D.1's sequencing rule. Removal also resolves
  SENTENCING open question 9 (delete, not dormant) and the URL disagreement it
  flagged.
- WEBSITE-PLAN.md Section 5's estimator entry and the Tier 3 "links to the
  bond estimator" clause at lines 190-191 are superseded on this point.

For the record, because the round surfaced it: the concept documents' claim
that the research had already answered this was unsupported. Both documents
quoted "absorbs the state bond walkthrough" while omitting the same sentence's
continuation, "and links to the bond estimator". The plan had the guide and the
estimator coexisting; the research never said the guide absorbs the estimator.
This entry is therefore a fresh decision made with that elision on the record,
not a ratification of a consensus that did not exist. GUIDES open question 1
and SEAL's Phase 0 posture asked for exactly this, and the D31 rule made it
mandatory rather than optional.

### D33. The decoder's output shape treats an absent field as absent, and a federal term is a verbatim span of the row's own quote

The decision CHARGING-DOCUMENT-DECODER-CONCEPT.md Section 12 open question 1
required, and the one its Section 8 item 3 names as a machine blocker. It is
made before any decoder code was written, because the shape decides the data
layer rather than the presentation.

**The problem, restated from the data rather than from the document.** TOOLS.md
item 3 requires the decoder to return "the offence name, **the degree**, and the
plain-English description", and adds that "degree and statutory maximum are
facts and belong". A census of the 74 audited tables this session says that
requirement cannot be met as written:

- **275 of 275 USC rows record `degree: "no degree assigned"`**, across all 21
  USC-keyed tables. That is correct law: federal offenses are not graded in
  degrees. It is also the half of the tool where the measured demand is,
  `18 usc 2252` at 70/month and `21 usc 841` at 140/month.
- **419 Florida rows record it too**, out of 1,387. So this is not a federal
  special case. `784.03(1)(a)` carries no degree because the degree attaches at
  a different paragraph, which is the concept document's finding 3.
- 968 rows of 1,662 carry a real degree. The other 694 do not.

**The decision, in three parts.**

1. **An absent field is absent.** Where a row records `no degree assigned`, the
   result object carries no `degree` key at all. Not an empty string, not a
   zero, not the literal words "no degree assigned" rendered at a reader. A
   blank in a degree column is read as "we do not know"; the truth is "this
   paragraph assigns none", and those are different statements. The renderer
   cannot show a field that is not there, which is why this is enforced in the
   type rather than in the template.

2. **Where the row's quote states a term of imprisonment, that term is shown as
   a VERBATIM SPAN OF THE QUOTE.** Not paraphrased, not recomputed into "5 to 20
   years", and specifically **not read out of the row's `trigger` field**. The
   trigger on `2252(b)(1)` says "Term: 5 to 20 years, a mandatory minimum of 5
   years", which is an auditor's summary. Summaries are prose, and this
   project's founding rule is that a claim written in prose cannot be checked
   against a source. The span is located inside `quote` by pattern and the
   located span is asserted to be a substring of the quote it came from, so the
   words a reader sees are the statute's words and a gate can prove it.

3. **Where the quote states no term, the tool shows no term and says so.** The
   same absent-is-absent rule. It does not fall back to the section, to a
   sibling paragraph, or to `DEGREE_MAXIMUM`.

**What this rejects.** The obvious alternative was a federal-only branch: a
`degree` field for Florida and a `term` field for USC, switched on the table
key. It was rejected because the switch would be wrong for 419 Florida rows,
which is the concept document's finding 3 and the reason that finding is in the
document. One rule, keyed on what the row actually records rather than on which
jurisdiction it came from, is both smaller and correct in the case the
jurisdiction switch gets wrong.

**Consequence for C6 and for the reader.** The decoder's own version note must
state that federal paragraphs carry no degree because federal offenses are not
graded in degrees. Without that sentence, a reader who resolves `18 usc 2252`
and sees no degree learns that the tool is incomplete rather than that the law
is different. The absence has to be explained where it appears or it reads as a
defect.

### D34. A paragraph from one of the five partial tables is shown, marked partial, never silently

CHARGING-DOCUMENT-DECODER-CONCEPT.md Section 12 open question 2, taking the
recommendation the document itself records, and Section 8 item 4.

Five tables are recorded `completeness: "partial"`: 1030, 2251, 741.28, 775.084,
784.08. A string resolving into one of them **is answered from what the record
holds and is marked partial at the result**, rather than refused.

**Why show rather than refuse.** The document's own reasoning: "a refusal on a
paragraph the project demonstrably has text for teaches readers the tool is
broken." The refusal default exists for the case where the tool cannot tell
which paragraph is meant. That is not this case. Here the paragraph is
identified and its verbatim text is in hand; what is unknown is whether the
section holds OTHER paragraphs that were never read.

**What the mark must therefore say.** Not "this may be incomplete", which is
vague enough to be ignored. It states the actual limit: the text shown for this
paragraph is verified, and the list of paragraphs in this section is not known
to be complete, and it names the table's own `unread` field where one is
recorded. This is `check-claims.mts` rule 2 applied to a tool: a partial record
may state what it holds and may never support a claim about what it does not.

**The gate is T5**, and it is a real one rather than a promise: a resolution
from a partial table that renders without the mark fails the build.

### D35. F.S. 921.0023(4) is recorded as a first degree felony punishable by life, and an ambiguity flag is a dated claim rather than a standing note

Named 2026-08-24, from the re-audit that preceded the offense-level instrument
build.

`src/lib/statute-tables/fs-921-0023.ts` row (4) recorded `degree: "first degree
felony"` for a subsection whose own quoted text reads "A felony of the first
degree punishable by life within offense level 9." The row carried an AMBIGUITY
FLAG explaining the choice, and the explanation rested on one stated ground:
that the permitted degree list had no separate value for the tier.

**That ground was false, and had already been false for some time.** The
`Degree` union in `src/lib/statutes.ts` gained `"first degree felony punishable
by life"` when the s. 921.0022 ranking chart was recorded, and more than twenty
chart rows now carry it. The flag was written before that landed and was never
re-read afterwards. The row is corrected, and the trigger text now records the
correction and its date rather than being quietly rewritten.

**What the stale flag actually cost.** Two things, and the second is worse than
the first. It understated exposure, recording a plain first degree felony where
the statute names a tier punishable by life. And it made subsections (3) and (4)
**indistinguishable by degree**: both read "first degree felony", differing only
in level. Collapsing those two tiers is precisely what the union was extended to
prevent, so the flag defeated the fix that had been made for it. The ladder now
reads five distinct degrees across five subsections, which is a property worth
checking rather than a fact worth remembering.

**The general rule this sets.** An ambiguity flag is a claim about the state of
the codebase at the moment it was written, and claims about a codebase go stale
in a way that claims about a statute do not. So a flag whose reasoning depends
on a repository fact ("the type has no value for this", "no table records that",
"nothing consumes this field") states the dependency explicitly and is re-read
whenever that fact changes. Where the dependency can be expressed as an
assertion, it is better as an assertion than as prose: prose that is wrong looks
exactly like prose that is right.

**Not gated today, and named as such.** No check asserts that the 921.0023
default ladder carries five distinct degrees, and none asserts that a row whose
quote contains "punishable by life" carries a degree that says so. Both are
cheap and neither exists yet. HUNT-LIST defect 1 is the reason to say that here
rather than leave the correction looking finished.
### D36. A criterion that fails on the words of the statute is split by shape, following the existing precedent, and the split is recorded as a departure

CHARGING-DOCUMENT-DECODER-CONCEPT.md assertion T3 says no string from its
Section 4 forbidden list may appear "in the rendered HTML **or in the shipped
dataset**". The decoder's shipped dataset is 987 verbatim quotations of Florida
and federal statutes, and C12 requires them verbatim. Applied literally, T3 and
C12 cannot both be satisfied.

**Measured before deciding.** Across the 987 rows the resolver can emit:

| Forbidden string | Occurrences in the dataset |
|---|---|
| `your charge`, `you are charged with`, `you are facing`, `worse than`, `better than`, `good news`, `bad news` | **0** |
| `serious` | 25 |
| `minor` | 21 |
| `likely` | 5 |
| `severe` | 2 |

All 53 are the statute's own words doing legal work: "serious bodily injury" in
21 U.S.C. 841(b)(1)(A), "any minor" in 18 U.S.C. 2251(a), "actual physical
force likely to cause serious personal injury" in F.S. 794.011(3), "more severe
than a fine" in F.S. 775.082(5).

**The decision.** The seven claim-shaped phrases are forbidden everywhere,
copy and dataset alike. The four bare adjectives are forbidden in **authored
copy only**. `FORBIDDEN_ANYWHERE` and `FORBIDDEN_IN_COPY` in the tool's copy
module are the two lists, exported so the gate reads them rather than keeping a
second copy.

**Why this is not an exemption granted to convenience.** It applies the rule
`check-pages.mts` already records at length: a rule must sit with a CLAIM, not
with a bare word. That file's own false positives were F.S. 784.07(1)'s
"parking enforcement specialist" and F.S. 409.913(16)(c)'s "each false or
erroneous Medicaid claim", and its stated reasoning is that a gate firing on
quoted statutory text asks the writer to choose which rule to break. Same
defect, same fix, one surface further out. **Where no such precedent exists,
the correct move is to raise the conflict and stop rather than decide it inside
a build**, and this entry exists so that the difference between the two is on
the record.

**Evidence it did not become theatre.** The copy half failed this build, on the
sentence "this page does not say how serious a charge is", written by the same
session that wrote the rule. The dataset half is enforced at zero occurrences,
which is the state in which a rule is kept rather than dropped.

**To reverse it, C12 is what changes.** The departure exists only because
verbatim quotation is mandatory. If the tool ever stops quoting operative text,
the literal T3 becomes satisfiable and is restored.

### D37. Where matching folds information away, matching and display are separate assertions, in both directions

Named from a defect a browser found and twelve green gates could not, recorded
in full as HUNT-LIST Instance 17.

The decoder folds citation case on purpose: the U.S. Code nests `(a)(2)(A)(i)`,
a reader types `1030 a2a`, and treating those as different citations would fail
the query the tool exists to serve. Every assertion then compared **through that
same fold**, so `18 U.S.C. 1030(a)(2)(a)` and the Code's own
`1030(a)(2)(A)` were, to every gate, one string. The tool rendered the wrong
one. The corpus could not object, because its expected values had been read off
the resolver's output.

**The decision, as a standing rule for this repository:**

1. **A normalization is a deliberate loss of information, and no assertion
   written on the normalized side can see what was discarded.** Adding more
   gates on that side never helps. `ParsedCite` therefore carries `path`, the
   folded match key, and `displayPath`, the written form, as **two fields**
   rather than one field plus a formatting rule, because a formatting rule is
   something a later change forgets to apply and a missing field is a type
   error.
2. **Both directions, literally.** A rule that lower-cased every citation would
   produce Florida's correct `(6)(b)` and the Code's wrong `(a)(2)(A)`. The
   corpus carries `893.13 6B` and `18 usc 1030 (a)(2)(A)` as a matched pair,
   each of which fails a rule that satisfies the other. One-sided fixtures pass
   while the tool is half wrong.
3. **The displayed form is asserted byte-identical to the authority it claims to
   reproduce**, not to the normalized form of it.
4. **An expected value read off the implementation tests determinism, not
   correctness.** Where a fixture's correct answer exists in an external
   authority, the fixture cites the authority and the value is copied from it.
   The decoder's corpus was written before its resolver precisely to avoid this
   and still absorbed the defect at the single point where a value was filled in
   afterwards.

---

### D38. The sentencing tool's registry row is rewritten, not added, and "Calculator" was part of the defect

**2026-08-24. SENTENCING-WORKSHEET-CONCEPT.md, built.** D31 makes a decision
entry mandatory for a change to `tools[]` rather than optional, and this is one:
the row was not added, it was **rewritten in place**, and the row it replaced was
the most predictive copy on the site.

It read:

> label "Sentencing Calculator", kind `Calculator`, title "Florida Sentencing
> Scoresheet Calculator", description "Estimate the lowest permissible sentence
> under Florida's Criminal Punishment Code by charge, level, and prior record."

Every clause of that is wrong for the asset that now exists, and the card is
where it does the most damage: it renders on the home carousel and the Resources
hub with none of the page's disclosure anywhere near it. A reader who never
clicks through still receives the promise.

- **"Estimate"** invites a forecast. The tool computes nothing at all.
- **"the lowest permissible sentence"** names an output it does not produce.
  There is no total on the page and `check:worksheet` T2 asserts there never
  will be, exhaustively over all 623 selectable rows.
- **"by charge, level, and prior record"** promises an input it does not take,
  and prior record is precisely the fact whose ABSENCE the tool exists to show.
  A card advertising prior record as an input describes the opposite of the
  artifact.
- **`kind: "Calculator"`** is the same defect in one word, and it is the first
  word a reader sees on the card. A new `Worksheet` kind was added to the union
  rather than reusing a near-enough label, because the kind is a claim about what
  the asset does.

The replacement describes a worksheet: it shows the form the court uses and
fills only the cells the charge determines.

**Route moved** from `/sentencing/florida-criminal-punishment-code` to
`/resources/tools/sentencing-worksheet`, under the same Section 9 rule the
offense-level instrument resolved on the same day: a tool that is the hub of a
topical silo lives at that silo's root, otherwise under `/resources/tools/`. The
`/sentencing/` silo does not exist and whether it gets built is the client's open
question. **Nothing linked the old href**, so no redirect is owed; if the silo is
later built, moving costs a redirect and a decision entry.

**What did NOT change.** `published: false`. Two of the C1 through C8 criteria
are human-only and neither has happened: the attorney accuracy review (C7), and
an independent read of whether a partly filled form reads as a forecast to a
frightened person, which D25 says is exactly the judgment an independent reader
should test. The route is built so `check:routes` sweep A resolves the href, and
sweep B fails if an unpublished card ever renders a link to it.

### D39. Charge pages are ordered by the reader's question, and the order-similarity trigger is retired to allow it

**2026-08-27. Client direction, after reading a charge page as a reader.**

Charge pages were ordered by legal significance. `ChargePage.sections` says so:
"the body, ordered by significance rather than by a fixed sequence." On
`/criminal-defense/dui-defense` that put a statutory amendment first, because
the October 2025 refusal provision is the most consequential change in Florida
DUI law in years, and nobody's first question after an arrest.

The site already declares six reader questions in `READER_QUESTIONS`, and every
section already records which ones it answers. The page scattered them:

| answers | sections |
| --- | --- |
| facing | 0, 3, 4 |
| now | 1, 2, 6 |
| next | 1, 5 |

A reader asking what they are facing had to read section 0, skip two dense
sections about licence deadlines, reach the penalty ladder at 3, and continue to
4. Nobody does that.

**The order was not only editorial. A gate was pushing the pages apart.**
`check:pages` failed any two pages whose section-*kind* sequences were 80% or
more similar by edit distance, on the reasoning that the same blocks doing the
same jobs in the same succession is what a form with the nouns swapped looks
like. Measured across the 28 written pages before this change:

```
order as written                worst pair 0.78    0 of 378 over the limit
reordered by reader question    worst pair 0.91   24 of 378 over
```

0.78 against a limit of 0.80. The section order was being chosen, in part, to
stay two points under a gate. That is the gate deciding the page.

**The decision.** Order every charge page by the reader's question, in the order
a person in trouble actually asks them: what am I facing, what do I do right
now, what happens next and when, what this does to my record, whether it can
ever be sealed, who to call. Note this is NOT the order `READER_QUESTIONS`
declares, which puts `next` before `now`. With a hard 10-day deadline on a DUI
licence case, what to do now outranks what happens later.

Retire the order-similarity trigger. It was right while nothing else determined
the order. Once the sequence is the intended shape of every charge page, two
pages sharing it is the design working rather than evidence of a copy.

**What still catches a clone, none of it relaxed:** an identical section id
sequence, an IDENTICAL kind sequence, heading overlap, and prose duplication.
Identity is a different claim from similarity and it survives reader-ordering:
the reordered corpus reaches 0.91 at worst, so no pair is identical, and any
pair that ever becomes identical still fails. A new self-test asserts that
backstop directly rather than assuming it.

**The self-test that relied on order alone is now a CONTROL.** Two pages sharing
a block succession with different ids and different headings must PASS, because
that is the shape two honestly reader-ordered pages take. If it starts failing,
something restored the trigger rather than found a real clone.

**Applied to DUI only so far.** The remaining 27 follow once the shape is
confirmed on screen.

### D40. Charge pages are built on a spine of seven reader questions, with exactly one flexible piece whose placement is a test

**2026-08-27. Client direction, recording a rule rather than an ordering.**
**Supersedes the order-by-significance rule** recorded in the `ChargePage.sections`
doc comment in src/lib/site.ts, and **restates D39** in a form that can be
checked by someone who did not write the page.

**Two failures, one cause.** The template has swung between them:

- **A fixed order**, hardcoded as JSX in ChargeTemplate.tsx. Eight written pages,
  one section sequence, one set of headings. Every page was the same document
  with the nouns swapped, and the schema rewrite that produced `sections` exists
  because that order could not be expressed any other way.
- **Order by significance**, which replaced it. `ChargePage.sections` said "the
  body, ordered by significance rather than by a fixed sequence". D39 recorded
  what that produced on the DUI page: a statutory amendment first, because the
  October 2025 refusal provision is the most consequential change in Florida DUI
  law in years, and nobody's first question after an arrest.

**The cause is the same in both, and it is not the order.** Neither version
stated a REASON for the order, so neither could be argued with. A fixed order has
no reason by construction. "Significance" names a judgment and not a criterion,
so a writer could defend any sequence and a reviewer could refute none of them.
D39 fixed the DUI page by ordering it around the reader's question, which was
right, but it left the rule as a list of six questions rather than as a rule
about what each position is for, and it still did not say where a page's own
material goes.

**THE SPINE.** Every charge page answers these seven questions, in this order,
because it is the order a person in trouble asks them:

1. **What am I actually charged with?** Plain language, first 40 words.
2. **How bad is it?** Degree, penalties, offense level.
3. **What has to be proven?**
4. **What happens next, and when?**
5. **How is a case like this defended?** Process only.
6. **What does this do to my job, license, record, immigration status?**
7. **Can it ever come off my record, or plainly no.**

Then the FAQ, then the close.

**The spine never varies. Headings do.** The question at each position is fixed;
the words that head it are charge-specific and are still failed by
check:pages for reuse and for genericness. Question 2 is "The theft ladder, from
60 days to thirty years" on grand theft and "Weight, minimums, and fines" on
trafficking. Those are the same question wearing different charges, which is the
point: the reader gets the same seven answers everywhere and never the same page.

**THE FLEXIBLE PIECE.** Each page has exactly one section placed by what it
answers rather than by the spine: the charge's C9 differentiator. **Placement is
a test, not a judgment call.**

- It sits **inside whichever spine question it answers**.
- It goes **above the spine only if it carries a deadline the reader can miss**.

Worked, for the record:

| page | differentiator | placement | why |
| --- | --- | --- | --- |
| grand theft | the value ladder | inside Q2 | it is the answer to how bad it is |
| embezzlement | the position-of-trust element | inside Q3 | it is an element |
| money laundering | the $300 floor | inside Q2 | it is what sets the degree |
| PPP loan fraud | the conditional limitations answer | near the top | the reader's real question is whether they are still exposed |
| DUI | the 10 day administrative review period | **above the spine** | it expires, and most people do not know it exists |

**DUI is currently the only charge in the set where the above-the-spine branch is
true**, and the test is what makes that a finding rather than a preference. If a
second charge turns out to carry a missable deadline, it takes the same
placement, and if the DUI deadline were ever repealed the section would move
down into Q4 without anyone relitigating the shape of the page.

**Why this is a real constraint and not a restatement of D39.** It changes three
things about D39's ordering. D39's list was six questions ending in "who to
call"; the spine ends at expungement and puts who-to-call in the close, which the
template already renders on every page. D39 had no position for what has to be
proven or for how a case is defended, so those sections floated. And D39 said
nothing about where a page's differentiator goes, which is the only part of a
charge page that is genuinely the page's own.

**What is NOT relaxed.** Everything D39 left standing stays standing. An
identical section id sequence, an identical kind sequence, heading reuse, generic
headings, and verbatim prose duplication all still fail the build. The
order-similarity trigger stays retired for the reason D39 gave, and now with a
stronger one: under the spine, two charge pages sharing a section order is not
evidence of a copy, it is the rule being followed. The CONTROL self-test in
check-pages.mts that asserts a shared block succession must PASS is the test that
keeps this buildable, and it is now load-bearing for D40 as well as D39.

**Applied to.** `/criminal-defense/dui` only, 2026-08-27. The
`ChargePage.sections` doc comment carries the change. The remaining 27 pages are
still ordered as D39 left them and follow one at a time.

**Recorded limits, so a later reader does not take the spine for more than it
is.**

- **Nothing enforces the spine.** There is no gate that reads a section's
  position and asks which spine question it answers, because the schema records
  `answers` against the six `READER_QUESTIONS`, which are not the spine's seven.
  The spine is a review requirement today, exactly like the coverage check's own
  printed limit that it reads declarations and never inspects the prose.
- **Question 6 names immigration and no page in the set answers it.** That is not
  an oversight and it is not a gap to be filled by research. What a Florida
  conviction does to immigration status is a byline-class claim under
  CASES-WE-DEFEND-PLAN.md C12-B, so it appears under an attorney's byline with
  their own citation, or it does not appear. On the DUI page it does not appear.

### D41. The statute lives in the source layer, not the sentence layer, and readability is gated

**2026-08-27. Client direction, after reading a charge page as a reader.**
Supersedes nothing; it adds a layer the template never had and a gate the
project never had.

**What went wrong, and it was not anyone writing badly.** C12 requires every
statutory claim to rest on a fetched official source. Nothing said where the
citation had to APPEAR, so writers made traceability visible in the sentence
itself, which is the obvious way to make a claim checkable by eye. Repeated a
few hundred times per page it produces this, from the DUI page the day before
this decision:

> Statute 322.2615(1)(b)3. provides that the driver may request a formal or
> informal review of the suspension by the department within 10 days after the
> date of issuance of the notice of suspension...

Measured across that page's body copy: **grade 13.2, average sentence 26.7
words, 217 statute numbers, one paragraph of 11 sentences, one unbroken run of
873 words.** Every gate was green. Eleven gates checked whether the page was
true and whether it was compliant, and not one asked whether a frightened person
could read it, so the pages got harder to read in the direction the rails
pushed and nothing registered it.

**The two properties were never in tension.** They were being asked to live in
the same sentence. D41 separates them by LAYER.

**THE RULE.**

- **Body copy states the fact in plain words.** No subsection numbers, no
  "Statute X provides that", no statutory phrasing quoted inside a sentence.
- **Each section ends with a compact sources line** naming the provisions it
  rests on. Citations live there. New field, `ChargeSection.sources`.
- **Verified statutory text stays available in a collapsed block per section**,
  for the reader who wants it and for the provenance gates.
- **Provenance is unchanged.** Every claim still traces to a fetched record.
  Only its presentation moves.

**THE READABILITY STANDARD**, enforced by `check:readability` over `bodyCopy`,
which excludes the sources line and the statute block by construction:

| | limit |
| --- | --- |
| R1 | Flesch-Kincaid grade 8.0 or lower per page, 9.5 per section |
| R2 | average sentence under 20 words |
| R3 | second person: every section addresses the reader as "you" |
| R4 | no run of prose over 300 words before a heading, table, or list |
| R5 | no block over 4 sentences |
| R6 | zero subsection numbers and zero statute-voice constructions in body copy |

**Applied to `/criminal-defense/dui` only.** Grade 13.2 to 3.9, average sentence
26.7 words to 11.3, 217 statute numbers to zero. Section order, the
above-the-spine placement of the 10 day differentiator (D40), every verified
fact and every source record are unchanged. The prose is entirely new.

**THE BASELINE, and why the gate is not simply on.** Twenty-seven written pages
do not meet this standard and converting them is a page at a time. A gate that
failed all 28 on the day it shipped would have been switched off on the same
day, which is D21's rule about a gate that cannot be satisfied getting routed
around. So `docs/build/readability-baseline.json` records which pages are
converted and, for the rest, the scores they had when the gate was built. Those
scores may only improve. **A page in neither list FAILS**, so a new page is
written to the standard or it is not written. Same ratchet and the same
fail-closed handling of a missing file as the legacy baseline in
check-pages.mts.

**Two defects this turned up, both fixed here.**

- **The renderer dropped statute blocks on eight of eleven kinds.** `SectionRest`
  showed the `statute` payload only when it was the section's primary, so a
  block on a prose, penalties, timeline or guidance section rendered NOWHERE
  while every gate read it. That is D24's failure inside the file whose header
  says the renderer is total, and check-pages' payload gate could not see it: it
  asserts a payload KEY is one the module renders, not that it renders for the
  kind it sits on. It went unnoticed because no section outside the two
  `statute`-kind ones carried a block. D41 puts one on every section, so the
  hole would have swallowed nine of eleven blocks on the first page converted.
- **R5 read "paragraph" too narrowly at first.** Scoped to prose, it would have
  missed the pre-D41 page's longest single block of text, an eleven-sentence
  BULLET, and its nine-sentence FAQ answers. A list item is a paragraph wearing
  different markup, so the rule now reaches every block.

**Recorded limits, so a later reader does not take the gate for more than it
is.**

- **A formula cannot read.** Flesch-Kincaid rewards short sentences and short
  words and cannot tell whether a sentence means anything, so copy can be
  chopped into fragments that pass. The syllable count is a heuristic, so the
  grade is a proxy rather than an authority on what an eighth grader can read.
  The human read is still the check; this gate stops the page from drifting
  back.
- **R3 is weak on purpose.** It asserts that "you" appears in a section, not
  that the section is written in second person throughout. A stronger version
  would need to parse voice, and a gate that guesses is worse than one whose
  limit is stated.
- **R6's voice half is a word list**, defeatable by ordinary paraphrase, exactly
  as check-pages says of its own banned-term rail. Its citation half is
  mechanical and is the half that does real work.
- **Three provisions had no verified text to collapse.** F.S. 316.656,
  316.1932(1)(f)3. and 316.1933(1)(b) assign no degree, so the statute-table
  workflow never covered them and the project held no verbatim record. They were
  fetched from flsenate.gov and recorded before the blocks were written; the two
  1932 and 1933 records are marked PARTIAL, which under D26 supports a claim
  about what they contain and nothing about the rest of those sections.

### D42. The charge-page hero is a per-page opt-in, and the DUI hero states its own phone number

**2026-08-28. Client direction, given as exact copy.** The DUI page's top
section was specified word for word: an H1, three sentences of body, one primary
call to action, and a visual break before the rest of the page.

**Why this is a schema change rather than an edit.** ChargeTemplate.tsx renders
all 28 charge pages from one hero. Editing that hero in place would have applied
the new copy's SHAPE to every charge page in the set, which the instruction
excluded. So the hero is now a branch on a new optional field,
`ChargePage.heroCta`. A page that sets it gets the stripped hero. A page that
does not is rendered by the identical markup it had before, and 27 pages are
byte-identical in the build output.

**What the stripped hero drops, and it is not nothing.** The default hero
carries a secondary "Send a message" link to /contact and a line reading
"Consultations are confidential. You do not have to know what you are charged
with to call." Both were removed from the DUI hero, because the brief was that
the top section is exactly the four named elements. The confidentiality line in
particular was added deliberately: it is a statement about the conversation
rather than a claim about the firm, and it addresses the reason a person
hesitates to call. It is still on the other 27 pages. Restoring it here is one
field away and is the client's call.

**The padding is load-bearing.** The stripped hero uses pt-28/pb-10 against the
default pt-36/pb-20. At 390px under the 77px fixed header, the default padding
pushed the call to action below the fold, which would have defeated the point of
the section. Verified by rendering at 390px rather than by arithmetic.

**THE PHONE NUMBER IS NOT `firm.phone`, AND NOTHING CHECKS IT.** The hero states
813-333-8886. `firm.phone` in src/lib/site.ts is (813) 738-8650, and every other
call-to-action on the site, including the one at the foot of this same page,
renders that number. Two different numbers now ship on one page. This was
recorded rather than reconciled because the number was given as exact copy and
changing either one is a client decision, not a build decision.

[NEEDS: the client to confirm which number is correct. If 813-333-8886 is the
right one, `firm.phone` and `firm.phoneHref` should carry it and `heroCta`
should derive from them, at which point the two cannot drift. If it is wrong, a
wrong phone number is live on the charge page most likely to be read by someone
who needs to call immediately.]

[NEEDS: a gate asserting that every tel: href on a rendered page resolves to a
number the site declares. There is none. check:routes sweeps internal hrefs and
explicitly does not check external or tel: links, so nothing in the pipeline can
see that a page publishes an undeclared number. This is the same shape as
HUNT-LIST instance 19: every rail checks what is wired, and nothing checked what
is not.]

### D43. The charge page is three visual tiers, and two heading rules bend to make Tier 2 possible

**2026-08-28. Client direction, given as a layout brief.** Layout and hierarchy
only: no prose was rewritten and no fact changed. Every sentence on the page is
the sentence D41 left there.

**The tiers.**

- **Tier 1**, the hero: H1, the 10 days paragraph, one CTA. No sources line, no
  disclosure, no accordion. Opt-in per page via `heroCta` (D42).
- **Tier 2**, three sections, always open, largest headings after the H1: the
  penalty table, the timeline, and a four-item action list. Then the CTA repeats.
- **Tier 3**, ONE accordion, every item closed, headings a size class smaller
  and tighter spacing: seven items over nine sections plus the FAQ.
- **Bottom**: one sources block for the whole page, then the final CTA.

**Three schema additions**, all layout: `ChargeSection.tier`, `.group` (the
accordion label a section renders under), and `.statutes` (plural).

**Why `group` is separate from `heading`.** Seven accordion labels have to cover
nine sections. Collapsing them into seven headings would have deleted two
charge-specific headings and the differentiation they carry, so a group is a
label ABOVE one or more sections, each of which keeps its own heading as a
smaller heading inside the item.

**Why `statutes` is plural.** Tier 2 renders no collapsed blocks, and its two
sections had one each. Rather than drop them, they are re-homed onto the Tier 3
section whose subject covers them: the plea bar to "What a conviction costs
you", the 8-hour custody hold to "How a DUI case gets defended". Nothing was
dropped to make the tiers fit.

**TWO HEADING RULES BEND HERE, and both are recorded as weakenings.**

1. **Tier 2 headings are exempt from the generic-heading rule.** "What happens
   next." is on the generic list by construction, because that list was built to
   stop exactly this phrasing. The rule was right for a page whose headings were
   its only differentiation; it is wrong for Tier 2, where the heading is
   navigation to a table and the charge-specific claim is the payload under it.
2. **Tier 3 accordion labels are exempt too.** Two of the seven the client
   specified are generic. An accordion label's job is wayfinding: a reader
   scanning seven closed rows needs to know which one holds the elements.

Both exemptions are PRINTED on every run (D22), and neither reaches the section
headings inside an item, which are unchanged and still checked.

**What still catches a clone:** heading reuse across pages, which does NOT
exempt these; identical section id and kind sequences; and prose duplication.

[NEEDS: the heading-reuse gate will FAIL the moment a second charge page adopts
Tier 2, because "What you're facing." and the other two are identical on every
tiered page by design. That is correct behaviour today and a blocker tomorrow.
The fix is to scope heading-reuse to Tier 3 and section headings, leaving Tier 2
labels out of it, and it should be made when the second page is converted rather
than pre-emptively, so the change is made against a real second page.]

[NEEDS: the mid-page "None of this is a substitute for asking about your own
case" block does not render on a tiered page. It was a deliberate second way out
for a reader part way down a long scroll. Tier 2 ends in a CTA, which covers the
same ground, but the reassurance copy is gone and that was a considered piece of
writing. Restore or retire it by decision rather than by omission.]

### D44. Every charge page moves to the DUI layout, and Tier 2 is exempt from the clone gates

**2026-09-28. Client direction.** The client read the subservice pages as a
visitor would and found none of them readable: the information was right and
the order and wording were a statute treatise. The DUI page (D40, D41, D43) is
the model, and every charge page is converted to it.

**What each converted page has.** A stripped hero with a plain-language lead
and one call button. Tier 2: "What you're facing." (penalty table),
"What happens next." (timeline), "What to do right now." (four actions). Tier 3:
one closed accordion with plain labels. Body copy meets check:readability (D41),
and each converted page moves from `pending` to `converted` in
readability-baseline.json. No fact is added or dropped in conversion; statute
numbers move to `sources` lines and verbatim law to collapsed statute blocks.

**Gate changes.** This resolves the [NEEDS] in D43. Tier 2 headings and Tier 2
sections are left out of the heading-reuse gate and the structural-signature
comparison, because they are the shared spine and repeat on every converted
page by design. Tier 3 section headings, id and kind sequences, and prose
duplication are still compared.

**Kind-sequence identity no longer fails between two tiered pages.** With
all 28 pages converted, five pairs shared a Tier 3 kind sequence (for example
prose>bullets>prose>guidance>prose>prose>prose) while sharing no section id, no
heading, and no prose. D39 retired order-similarity for the same reason: once
the reader-first spine is the design, two pages sharing its shape is the rule
being followed. Section-id containment, heading reuse and prose duplication
still fail, so a page cloned with the nouns swapped is still caught. The
identity is printed, not hidden.

**Bug fixed in passing.** The id-sequence containment test guarded the length
of its first argument instead of the shorter sequence, so a one-section legacy
stub (corporate-fraud, `defense`) "matched" any page with a section of that id.
The minimum of 3 now applies to the shorter sequence.

**Applied to.** `/criminal-defense/drug-possession-defense` first, as the pilot,
then on 2026-10-07 to every charge page with content: all 28 (11 state, 9
federal, 8 white-collar). The corporate-fraud and PPP loan fraud signposts are
not charge pages and keep their own shape.

**How the rollout was done, and what it does NOT establish.** Each page was
converted by an agent working only from that page's own existing content, then
reviewed three times by independent agents against the pre-conversion text
(git HEAD): a general review, a second accuracy review, and a sweep for changes
in legal meaning only. Each finding was fixed and the fix independently
confirmed. Counts of real errors found and fixed: 74 high-severity in round 1,
56 in round 2, 163 legal-meaning changes in round 3. The third count rose
because that reviewer was narrower and stricter, which is the finding worth
recording: plain-English conversion at grade 8 keeps dropping qualifiers that
carry legal meaning ("intentional", "or threat of force", "adjudicated" vs
"found guilty", "shall" vs "may"), and more automated rounds did not converge.
A fourth, MECHANICAL pass followed: a scan counted legal qualifier words
(adjudicated, withheld, intentional, knowingly, willfully, unless/except,
shall/must, may, otherwise qualified, regardless, prior conviction, at
least/more than, automatically, during/in furtherance, and others) in each
page's reading text before and after conversion, and listed every original
sentence behind each drop. Agents judged about 1,400 flagged sentences: 50 were
real lost qualifiers and were restored (for example "willfully" on computer
crimes, "when you know or should know" on paraphernalia delivery, "unless you
were already lawfully released" on first appearance), each confirmed by a
second agent; the rest were noise, mostly because the old pages quoted statute
text inline. The scan still flags pages after repair for that same reason;
its count is a candidate list, not an error count.
Automated review is therefore NOT a substitute for the C11 attorney review.
Every converted page stays `published: false` until an attorney has read it
against its sources. The pre-conversion text is in git for that comparison.

### D45. The penalty table leads with the reader's situation, not the degree

**2026-09-29. Client direction.** Asked whether the degree-first table was the
easiest to grasp, the answer was no: the row a visitor recognizes ("I had some
pills") was the small grey note, the first column was a legal degree, the
offense-level column meant nothing outside the sentencing worksheet, and rows
were in no order.

**The change.** `PenaltyRow.situation` is new and optional. When every row of a
table carries it, `PenaltyTable` renders "What you had" / "Penalty" /
"Charged as", with the note as fine print under the situation, and leaves the
offense level out (the data keeps it; the prose under the table explains the
points in words). Rows on converted pages run lightest to heaviest. Tables
without `situation` render the old layout unchanged, so unconverted pages are
untouched.

`situation` is body copy: it is measured by check:readability and joined into
the penalty row that check:claims reads.

**Applied to.** DUI and drug possession.

### D46. The details and the common questions look different, and the page footer goes

**2026-09-29. Client direction.** The two closing sections of a tiered page were
styled identically, so they read as two FAQs in a row, and the page ended in a
related-guides list and a reviewer line the client called useless and random.

- **The details** are not numbered (a numbered first version was rejected),
  and their prose spans the full column rather than a 68ch measure. Each topic
  shows a one-line summary while closed (`ChargeSection.groupSummary`, on the first section of a group). The
  summary is body copy and is measured by check:readability.
- **Common questions** have a header row (heading and intro on the left,
  "Don't see yours?" and the call button on the right) with the questions full
  width below, each opening its own answer. (First version: heading and button
  in a left column, questions in a right column; replaced 2026-10-08 on client
  direction.)
  Stacked on a phone. White background and a static (not sticky) left column,
  on client direction after a first version on linen with a sticky column.
- **The page footer is removed on tiered pages.** A link a section points to
  now sits inside that section (`ChargeSection.link`, resolved by check:routes).
  Generic "Tools and guides" links are dropped.
- **The sources block and the attorney review line are removed on tiered
  pages**, on client direction. Nothing is deleted from the data: `sources`
  stay on each section, the verbatim law stays in each topic's collapsed
  statute block, and `owner` / `lastReviewed` stay on the page. The C11
  review requirement is unchanged; it is no longer displayed.
- **Section gaps: one unit.** Every section on a tiered page pads 96px on a
  phone and 128px on desktop, and Tier 2 sections sharing a band are spaced by
  the same unit. White-on-white joins read as one unit (the Section Spacing
  Rule drops the second's top padding); a navy/white edge gets one unit on each
  side. No dividing rules, on client direction. A first attempt enlarged only
  the white-on-white gaps to 160px and made the page inconsistent.
- **Container width stays 1120px.** Moving the tiered body to the site's
  1400px container, so its left edge would align with the hero and
  CallToAction, was tried and rejected by the client on sight.
  Common questions briefly used the 1400px container to line up with the
  CallToAction below it; after its header-row redesign the client moved it back
  to 1120px to match the sections above, so the whole body is one width.
- The 4px gold band under the stripped hero (D43's "visual break") is
  removed, on client direction. The hero's navy meets the white body directly.
- The CTA button that followed the sources block is removed: the FAQ carries
  one, and the CallToAction section follows immediately.

**Applied to.** DUI and drug possession. Unconverted pages render the old footer.

### D47. "The details" as a grid of boxes, trialled on sexual battery

**2026-10-08. Client direction.** On `/criminal-defense/sexual-battery-defense`
the client asked for the nine detail topics as a 3x3 grid of boxes instead of
the accordion, and chose, of three options, a full-width panel that opens under
the clicked box's row (over a pop-up window, and over boxes that jump to
sections written out below). Scope: this page only, until the client has seen
it.

- `ChargePage.detailsLayout: "grid"` opts a page in. Every other page keeps the
  accordion, unchanged.
- `DetailsGrid` is a client component (it holds which box is open). The topic
  content is still rendered on the server and passed in, and every panel is in
  the HTML with only the open one shown, so crawlers and check:rendered see all
  of it, exactly as with the closed accordion.
- Each panel sits after its own box in the DOM and is moved by CSS `order` to
  after the last box of its row from md up, so nothing renders twice. One
  column on a phone, where the panel opens directly under the tapped box.
- On this page the topic labels are the reader's questions ("Can it ever come
  off my record?") and each `groupSummary` describes what the topic covers
  rather than stating its conclusion; the box shows it under the title, and the
  panel does not repeat it. A conclusion-style summary had read oddly and risked
  oversimplifying the law in one line.
- Box: the topic label in the display serif, balanced wrapping, and a navy
  "Read more" with a bronze chevron ("Close" when open). Every box has the same
  minimum height so "Read more" lines up across rows; titles wrapping to one
  line in some rows and two in others had made the rows uneven. The one-line summary is NOT in the box; the client found it crowded
  the box, and a bare plus read as odd. The open box and its panel share a linen
  background so they read as one piece. Panel: the topic label as a heading, a
  Close button, the summary as a one-line lead, then the same section headings,
  bodies and links the accordion shows.

**Revised the same day: one box per row.** After seeing the 3x3 grid the client
moved it to a single column of full-width boxes: the question and its
description on the left, "Read more" on the right, and the topic opening
directly under its box on the same linen, with no repeated heading, no separate
close button, and no dividing rule. With one column the CSS `order` placement
above is no longer needed and was removed. `detailsLayout: "grid"` keeps its
name so the page flag does not churn.
"Read more" is medium weight in a softer navy so the question, not the action,
is what the eye lands on first, and a closed box takes a faint linen tint on
hover so the whole box reads as clickable.
The open box uses `bg-linen/25`, the penalty table's striped-row shade, on
client direction; the hover tint is lighter (`bg-linen/15`) so hovering never
looks more active than open.

### D48. "What to do right now" as a 2x2 grid of filled cards, CTA in the header

**2026-10-08. Client direction ("drastically improve this section").** The
navy action band had four full-width outlined rows, each with a small boxed
numeral, and the call button trailing under the list. It read as a form.

- The four steps are a 2x2 grid of filled cards (`bg-linen/[0.06]` on the navy,
  no outline). Each card leads with a large serif numeral in bronze ("01" to
  "04"), then the step's first sentence as a serif headline in linen, then the
  reason in softer linen. One column on a phone.
- The grid's reading order is carried by the numerals and the `<ol>`. An
  earlier version moved this list OFF a 2x2 grid because a grid gives no
  reliable reading order for numbers; with large "01" to "04" numerals and a
  left-to-right, top-to-bottom flow that concern is met on the page itself.
- When the navy band holds one section, its heading and the call button share
  a header row (heading left, button right), matching Common questions, and the
  trailing button is gone. A band with several sections keeps the old shape.
- A one-line description sits under the heading: "These steps protect your
  rights in the first days of a case, while it is still taking shape." It is
  template copy, so it is worded to hold for every charge, including a target
  letter where no one has been arrested, and it makes no outcome claim.
- Applies to every tiered page (all 28 converted charge pages).

### D49. "What happens next" as a staged timeline, trialled on sexual battery

**2026-10-08. Client direction:** make it feel like a timeline that helps.

The plain rail listed intervals counted from different starting points (the
arrest, the charge, the offense, a notice), with nothing saying where the
reader is, and nothing separating the State's deadlines, which protect the
reader, from the reader's own, which they can miss.

- `TimelineStep.stage` groups consecutive steps under a stage marker on the
  rail, in the reader's terms ("Arrest and first day", "Charging",
  "Before trial"). `TimelineStep.actor` tags who acts: "you" (shown as
  "Your move"), "judge", "prosecutor", or "court". "Prosecutor" rather than
  "the State" so the tag holds on federal pages.
- Data-driven: a timeline switches to the staged version only when its steps
  carry a stage or an actor, so untagged pages are unchanged. Tags classify the
  existing steps; no step's `when` or `what` text changed. `stage` is body copy
  and is measured by check:readability.
- Applied to sexual battery: 24 hours (judge), 30/60 days (prosecutor), 45 days
  after arraignment (prosecutor), 175 days (court), 60 day demand (you).

**Revised the same day: the first version was rejected as much harder to read.**
It gave every row a marker, a serif time column, a who-acts tag and the text,
under serif stage headings, and split time from text into two columns. The
shipped version is the plain rail, row for row (time above text, one column,
same type, same spacing, bronze time label), plus only two things: a small
stage label above each group of steps, and a "Your move" tag beside the time
on the reader's own steps. Judge, prosecutor and court steps carry no tag; the
`actor` stays in the data. The navy time label went with the first version, so
the bronze contrast flag for the ADA audit stands.

**Reverted the same day.** The pared-back version (plain rail plus small stage
labels and a "Your move" tag) split the steps into per-stage groups, and with
most stages holding one step, each group had no rail: it read as a bulleted
list, not a timeline. Both versions were removed: `StagedTimeline`, the
`stage` and `actor` fields, and the sexual battery tags. The timeline is the
plain rail again, as before D49. What the two attempts showed is that the
styling was not the main problem: the step text is. Several steps carry
four-sentence paragraphs of day counts and conditions, which no layout makes
easy to scan.

### D50. "What you're facing" as a severity ladder, trialled on sexual battery

**2026-10-08. Client direction:** is the table really the clearest way?

On sexual battery it was not. 17 rows covered 6 penalty levels, so the same
penalty and degree repeated down the page; sorted lightest first, the first row
was a different offense written into the same statute (its own note said "This
is not a sexual battery charge"); and the "What you had" header, written for
drug possession, made no sense for most charges.

- `PenaltyLadder` groups the rows by degree in the data's order (lightest
  first) and shows each level's penalty once, large, with the situations that
  reach it listed under it on the linen tint. A row whose maximum differs from
  its level's usual one shows its own maximum on the row, so no figure is lost.
  No column headers.
- `PenaltyRow.related` marks a different offense in the same statute; the ladder
  lists those in a closing "Related charges in the same law" block. On sexual
  battery only the false-accusation row is marked, because its own note says it
  is not a sexual battery charge.
- `ChargeSection.display: "ladder"` opts a penalties section in. Every other
  page keeps the situation table. Offense levels stay in the data, unshown, as
  in the table.

**Revised the same day.** The penalty is a header across the top of each level
(it was a left column that left a tall empty space and squeezed the
situations); situations are one size smaller and notes lighter, so each block
reads penalty, then situation, then detail. The attempt row ("Set by the
general attempt law") is marked `related` and moves to the closing block,
renamed "Attempts and related charges": it is not a penalty a reader can read
off and it sat between 30 years and life. Its note's "the under 12 rows below"
became "above" to match its new position; no other legal wording changed. A
stale cross-reference to the renamed topic ("Which charge you actually have")
was corrected to "Which charge am I facing?".

**Tried and rejected the same day:** grouping the ladder by penalty instead of
degree (so the two "Up to life" levels became one, with each row labelled with
its own degree), and showing each row's conditions as tags ("You: under 18",
"No consent") instead of a sentence. Both were removed; the ladder is back to
grouping by degree with the situation sentences.

The degree and penalty are stacked, degree first as a small label and the
penalty below it in the display serif, on client direction.
The penalty line uses lining figures (`lining-nums`): Cormorant Garamond's
default old-style digits sit below the baseline and read small, and the
numbers are the point of that line. The font's Latin file carries `lnum`
(checked with fontTools against the built woff2).

### D51. No "State charge or federal charge?" block on tiered pages; an intro under "What you're facing"

**2026-10-08. Client direction.**

- The forum cross-link block (Plan Sec. 4.6) is not rendered on tiered pages.
  Sitting between the hero and "What you're facing", it read as an
  interruption, in statute language ("This page covers the offense at Statute
  794.011..."). The `counterpart` data is unchanged and still checked by
  check:routes; untiered pages still render the block. This removes the
  visible one-cross-link-per-overlap-page that C10 asked for on the 28
  converted pages; if that link is wanted, it belongs in a Tier 3 topic as a
  section `link`.
- "What you're facing." gets a one-line intro on every page: "What you face
  depends on the facts in the charge. Find the situation closest to yours to
  see the penalty the law sets for it." Worded to hold on state and federal
  pages and on rows that are mandatory minimums, so it never says "maximum".

### D52. "On this page" links in the charge-page hero

**2026-10-08. Client direction.** Every converted page has the same five
sections, and different readers want different ones first (someone arrested
last night wants "What to do right now"; a family member wants "What happens
next"). The hero's right half was empty on desktop.

- `QuickNav` lists the Tier 2 sections by their own headings (closing period
  dropped), then "The details" and "Common questions" when the page has them.
  A full-width band closing the hero, a shade lighter than the navy (a
  background, not a rule), with the five links spread evenly across the 1400px
  container and a bronze chevron on each. No visible label; the nav keeps
  aria-label="On this page". Below lg the band is one collapsed row, "Jump to a
  section", that slides open to the five links, each indented with a down arrow;
  choosing a link closes it. Weights: all three (the desktop links, the phone
  "Jump to a section" row in full linen, and the phone links) are regular (400),
  on client direction; they had inherited the body's light 300, which read thin
  on the navy. It is a button driving a grid-rows height
  transition rather than a native <details>, which cannot animate its opening in
  every browser; closed, the list is `inert`; reduced motion opens instantly. Two always-open phone versions, a sideways-scrolling row and a
  two-column grid, were rejected first: five links after the call button cost
  about as much space as the hero text. (Earlier the same day: a column in the hero's
  right half, then a loose row under the button with an "On this page" label
  and text arrows; the client moved it and then asked for it to feel less
  loose.)
- Plain in-page anchors, so they work without JavaScript. With it, the click
  scrolls smoothly and updates the hash. Smoothness is scoped to these links,
  not set globally, for the reason globals.css records (a global smooth scroll
  animated every route change); reduced-motion users get an instant jump.
- New anchors: `id="details"` on "The details." and `id="common-questions"` on
  "Common questions.", each with `scroll-mt-28` so it lands below the fixed
  header. Verified on the built HTML of all 28 pages: every link has exactly
  one target.
- Not sticky. On a page this long a following bar gets in the way, especially
  on a phone.

### D53. Section headings on tiered pages: weight 500, larger on phones

**2026-10-08. Client direction.** The five section H2s ("What you're facing."
through "Common questions.") set no weight and inherited the body's light 300,
and were 30px on a phone. They are now weight 600 and 34px on a phone
(`text-[2.125rem]`), unchanged at 36px from sm and 48px from lg. Cormorant
Garamond ships as one variable file (wght 300 to 700) that every weight's
@font-face points to, so 600 is rendered from the axis, not synthesized. 500
was tried first and, though real, barely read heavier than 300 in this
high-contrast hairline face; 600 is the first step that visibly thickens.
The closing CallToAction heading is a separate shared component and is not
part of this change.

On a phone the ladder's penalty lines (30px serif) sat within 4px of the 34px
section heading in the same face, so heading and content read as one level.
Penalty lines are now 24px below md (30px from md) and the level blocks pad
20px below md, so the heading clearly outranks them and the situations wrap
less. (D50 ladder, adjusted alongside D53.)

**Correction, same day.** The weight utilities (`font-medium`, then
`font-semibold`) never took effect. globals.css has an unlayered
`h1, h2 { font-weight: 400 }` ("overriding any bold utility"), and unlayered
CSS beats every Tailwind utility, so every H1 and H2 on the site renders at 400
whatever its class. The font check above was right about the files and wrong
to conclude the headings rendered at 500: the cascade decides the weight, not
the font. The fix keeps the site-wide rule and adds one narrower exception,
`h2.section-heading { font-weight: 600 }`, for these five headings only. The
CallToAction heading's `font-extrabold` is likewise inert under that rule.

**Settled weights, same day, on client direction.** The five section headings
are 500 (`h2.section-heading`), and every H1 on the site is 500: the global
rule is split into `h1 { font-weight: 500 }` and `h2 { font-weight: 400 }`.
That makes the H1 change site-wide (every page's main heading), not only
charge pages. All other H2s stay at 400.

### D54. A callout for the must-not-miss fact; the penalty section's side material moves to the details

**2026-10-08. Client direction, on sexual battery.** Under the ladder, three
paragraphs of very different weight sat in plain body text, and below them an
"Attempts and related charges" block.

- `ChargeSection.callout` renders one short passage as a navy callout between a
  Tier 2 section's intro and its payload. On sexual battery it holds the
  mandatory minimum paragraph, verbatim: the single most consequential fact in
  the section had been the second of three paragraphs under the ladder.
  It is body copy, measured by check:readability, and registered as a rendered
  payload in check-pages.
- The "Level 8" paragraph moved to a new Tier 3 section, `sbat-related`, in the
  "Which charge am I facing?" topic. Its reference to "the two no-force rows"
  pointed at offense levels the ladder no longer shows, so it now names the
  situations those rows described; no figure changed.
- The two `related` penalty rows (false accusation; attempt on a child under
  12) left the ladder and became two paragraphs in that section, same facts.
  The attempt note's "graded with the under 12 rows above" became "carries the
  same penalties as a completed sexual battery on a child under 12, shown under
  What you're facing", which is what the statute provides for an attempt that
  injures the child's sexual organs.
- The "more than one person / fines" paragraph stays as the only note under
  the ladder.

### D55. "What happens next" gets an intro and the call button in its header row

**2026-10-08. Client direction.** The timeline heading had nothing under it
and no way to reach a person. Its header row now matches the action band and
Common questions: heading and a one-line intro on the left, the call button on
the right (stacked on a phone). The intro, "These are the deadlines that shape
a case, in the order they usually come. A lawyer can tell you which ones are
already running for you.", is template copy, worded to hold on a target letter
page where no one has been charged yet, and makes no outcome claim. Tier 2
intros now live in one map by section kind (penalties, D51; timeline, D55).
The action band directly after it also carries the button, so the page shows
two call buttons one section apart; accepted on client direction.

**Revised the same day:** the timeline's call button was removed on client
direction, and its code removed rather than left switched off; the intro
stays. The action band directly after it keeps its
button, so there is one call button between the two sections.

### D56. Sexual battery page cleanup: type hierarchy, cards, and a content audit

**2026-10-08. Client direction: clean up the whole page and check its flow and
truth.**

Visual, template-wide where the component is shared:
- Inside an open topic the hierarchy was inverted: the topic's section heading
  was 16px grey sans and the guidance card headings under it 20px serif. Section
  headings in topics are now 18px semibold navy; guidance card headings 16px
  semibold navy sans.
- Guidance cards: as many columns as cards (up to three), so two cards no longer
  sit beside an empty column; white with a hairline instead of linen boxes inside
  the linen topic. Shared by the 26 pages that use guidance.
- Penalty-ladder penalties are real `<h3>` headings (unchanged appearance).
- Statute citation labels from navy/50 to navy/65 for contrast.
- The stripped hero's H1 is 40px on a phone (was 36px, only 2px above the 34px
  section headings).
- Checked and unchanged: one spacing unit throughout, stacking on phones, body
  charcoal / headings navy. The bronze timeline labels still fail contrast and
  stay flagged for the ADA audit by prior client decision.

Content (sexual battery only). An independent review read the page against its
pre-conversion text and found no compliance issues, six medium and about ten
low accuracy issues (all qualifiers), and several consistency, flow and clarity
problems. 36 fixes were applied by an agent that checked each against the
original wording, then reviewed by hand before merging. Among them: the
life-sentence hearing covers "punishable by up to life"; conspiracy is
"agreeing with someone else", not "a plan"; the DNA rule keeps "or should have
identified them with reasonable effort"; "permanent", not "lasting"; the
callout leads with the 50-year minimum (25 for offenses before October 1,
2014); the lead no longer says only three facts decide the charge; the arrest
papers are "a starting point" and the formal charge sets the degree; "Level 8"
is explained once; "listed circumstance" is glossed where first used; the
defense topic is renamed "What are my rights, and what will my lawyer look
at?". Not applied: a "time off for good behavior" gloss for basic gain-time
(the original text does not define it), and trimming facts repeated across
the callout, topics and FAQ (an editorial call left to the client).

### D57. A lede paragraph for Tier 2 sections; the offense definition moves up

**2026-10-08. Client direction.** On sexual battery the plain definition of the
offense ("covers oral, anal, or female genital penetration by, or union with...
so penetration is not always required") sat in the notes under the penalty
ladder, so a reader met every penalty before learning what the offense is.
`ChargeSection.lede` renders a short paragraph directly under a Tier 2 section's
intro, before any callout or payload; the definition moved there, word for
word, and out of the ladder notes. Body copy, measured by check:readability,
and registered as a rendered payload in check-pages. Order is now: heading,
intro, definition, mandatory-minimum callout, ladder, notes.

### D58. One set of design tokens for the charge-page layout

**2026-10-08. Client direction:** the page read as random, especially fonts and
spacing. An audit of the five components that render it (ChargeTemplate's
tiered body and hero, sections.tsx, PenaltyLadder, DetailsGrid, QuickNav) found
17 font sizes, 16 text colours, 12 top margins and 34 padding values: each
section had been styled when it was asked for, and nothing made them agree.

`src/components/cases/ui.ts` now names every style once, and the components
use the names:
- Type roles: page title (H1), section heading (H2), subheading (serif 24 to
  28px: penalty lines, topic box titles, action-card headlines), item heading
  (sans 18px semibold: timeline times, FAQ questions, headings inside topics),
  lead (18px: intros, lede, callout, hero lead), body (16px: everything else),
  label (14px medium: degree, "Read more", citations), small (14px notes),
  numeral.
- Colours: navy headings, charcoal body, one muted shade (navy/60); linen,
  linen/75, linen/60 on navy. Bronze for markers and numerals only.
- Spacing: heading to intro 16px, intro to content 40px, item heading to text
  8px, stacked items 16px, paragraphs 16px, list items 12px; every card and box
  pads 24px on a phone and 32px from md.

Effects worth knowing: Tier 2 content text is 16px (it had been 18px, the same
as the intros above it); the timeline's time labels are navy, not bronze,
which resolves the contrast failure flagged for the ADA audit (bronze stays on
the dots and rail); FAQ questions and accordion labels are one size at every
width. Sizes outside the tokens remain only in the breadcrumbs, the hero nav
(set separately by the client), the FAQ plus icon, and the shared
CallToAction component.

### D59. Looking at the page: fact rows, a lighter callout, real headings, and a header collision

**2026-10-08. Client direction, after D58 shipped looking worse than it read in
code.** D58 was verified against markup and CSS only, never against the
rendered page; the client's screenshots showed what that missed. The page is
now screenshotted headless at 1440px (Chrome) and at a true 390px viewport
(Playwright 1.60, which matches the cached browser build; plain headless
Chrome cannot go narrower than about 500px and produced a false overflow).

- "What you're facing" opening: the lede (offense definition) is a labelled
  fact row, "What the law covers" beside the text, in body size, instead of a
  second unlabelled lead paragraph. The callout is the same two-column row in
  a warm tinted box (`bg-bronze/10`), its title (`calloutTitle`, "Mandatory
  minimum") on the left in the subheading serif and the text filling the
  right; it was a navy slab with its text in the left 60%. From md the lede
  row is padded like the box so their columns line up; on a phone it is not.
- Common questions: "Don't see yours?" removed; the button stays.
- Item headings (timeline times, FAQ questions, headings inside topics) are
  medium (500), not semibold: at 18px semibold sans the questions read loud
  beside the serif topic titles.
- Heading outline fixed. "The details." jumped from h2 to h4 because the topic
  box titles were spans inside a button; each title is now an h3 holding its
  button (WAI accordion pattern, hit area stretched over the box). Timeline
  times and action-card headlines are h3 (were paragraphs, leaving those
  sections with no headings); guidance card headings are h5 (were h4 inside an
  h4 section). Outline now: 1 h1, 6 h2, 29 h3, 11 h4, 2 h5, no skipped level.
- Site-wide header: at 390px the logo ran into the phone number (the row had
  justify-between and no gap). It now has gap-4, and the logo is text-xl below
  sm.

### D60. Single-column lede and callout; serif for everything a reader scans for

**2026-10-08. Client direction, from screenshots.** Verified by full-page
screenshots at 1440px before reporting.

- The D59 fact rows (a 14rem label column beside the text) left a wide gap,
  floated the label, and wrapped "Mandatory minimum" over two lines of large
  serif: it read as a form. Both are now single-column in the text measure
  (max-w-2xl): the lede is one paragraph with a bold run-in "What the law
  covers.", and the callout is a tinted box the width of the text with a bold
  run-in title. `factRow` is removed from ui.ts.
- Serif subheading for every heading a reader scans for: penalty lines, topic
  titles, action-card headlines, and now FAQ questions and timeline times too.
  FAQ questions were sans while the topic titles right above them (also
  questions) were serif; timeline times ("Within 24 hours of arrest") were sans
  while penalty lines ("Up to 15 years") were serif. The sans item heading is
  kept only for headings inside an open topic and guidance cards. Accordion
  topic labels on the other pages follow the topic titles.
- Action card 4 on sexual battery is three lines at desktop width:
  "It happens within 24 hours of arrest. The State is already choosing the
  charge, which sets the degree, the maximum sentence, and any mandatory
  minimum." Same facts; the added factor the State alleges is part of the
  charge it chooses.

### D61. The mandatory minimum is the first card of the ladder; the definition stays in the details; FAQ questions back to sans

**2026-10-08. Client direction ("you are making it much worse").** D57, D59
and D60 each put a different visual treatment above the penalty ladder (an
unlabelled second paragraph, a label column, a narrow run-in box), so the
section opened with three text styles at two widths before the full-width
cards. Root cause: the definition did not belong there (it already sits in the
"What does the State have to prove?" topic), and the mandatory minimum is a
penalty, so it belongs in the ladder's own visual language.

- The callout renders as the first ladder card: same width, padding and type
  (label "Mandatory minimum", serif headline from the new
  `calloutHeadline` field, "50 years up to life", then the text), tinted
  `bg-bronze/10` to stand out; the ladder follows at its usual 16px card gap.
- The `lede` on sexual battery is removed (the field stays for other pages);
  the same definition remains in sbat-proof. This reverses D57's placement.
- FAQ questions are back to the sans item heading. The D60 serif version read
  as decorative and was harder to scan in long questions. Timeline times and
  topic titles stay serif.

### D62. No callout, no lede: "What you're facing" is the intro and the ladder

**2026-10-08. Client direction ("why is this even there?").** The mandatory
minimum callout began as a response to a content review that called the fact
buried (D54) and was restyled three times (D59 to D61) without anyone asking
whether it belonged in the section. It did not: the page already states the
mandatory minimum in the "Is there a mandatory minimum sentence?" topic and in
FAQ 5, and drawn as a ladder card it read as a penalty level when it is a
condition that applies across levels, and broke the lightest-to-heaviest order
by sitting above "Up to 5 years". It is removed.

No page uses `callout`, `calloutTitle`, `calloutHeadline` or `lede` any more, so
the fields, their rendering, their page-copy entries and their check-pages
registration are removed outright rather than left unused (D54 and D57 are
superseded). "What you're facing" is the heading, its one-line intro, the
ladder, and the notes under it.

### D63. Sexual battery audit: schema citations, keyboard traps, skip link, contrast

**2026-10-08. Client direction: audit structure, truth, SEO, ADA, schema and
semantics.** Run in a real browser: axe-core (WCAG 2.0/2.1/2.2 A and AA plus
best practice) at 1440px and 390px with every topic panel and FAQ open, a
40-step keyboard pass recording focus visibility, and the served JSON-LD
parsed and compared with the visible page.

Fixed:
- Schema: `Article.citation` was built from `statute` only, so sexual battery
  (whose quotes are in `statutes`) emitted none, and every page omitted the
  provisions it cites only in `sources`. `sectionCitations()` now feeds
  statute, statutes and sources into the charge, guide and injury Article
  schema; sexual battery cites 10 provisions. `about` names the charge
  ("Sexual Battery") and the silo moves to `isPartOf`.
- Keyboard: Tab walked into the closed site menu (its scrollable panel and
  field) and the closed search overlay (its field). Both overlays are `inert`
  while closed (WCAG 2.4.3, 2.4.7).
- A "Skip to main content" link is the first Tab stop on every page; `<main>`
  carries `id="main"`.
- Search field: an accessible name (`aria-label`) and a visible focus state
  (the underline turns bronze) in place of a bare `focus:outline-none`.
- Footer disclaimer contrast: linen/40 (about 3.3:1) to linen/60 (about 6:1).

Verified, unchanged: axe reports zero violations at both widths; one main, one
h1, lang="en", no unnamed buttons or links, no images without alt, heading
outline without skipped levels (D59), FAQPage text matches the visible
questions and answers 5/5, BreadcrumbList valid.

Open, not fixed here: the header search submits nowhere (it prevents default
and searches nothing); internal links from the page body are thin (one related
page); Article has no author or dateModified until the C11 attorney review; the
page is noindex and canonical/OG URLs use the placeholder domain until launch.

### D64. Sexual battery: internal links and a 60-character title

**2026-10-08. Client direction, from the D63 audit.** The page body linked to
one related page. Five section `link`s were added, each to a live page that
answers what that topic raises: the Charge Lookup tool (Which charge am I
facing?), the offense-level comparison tool (the section that explains
"Level 8"), the battery page (non-sexual battery, the offense readers confuse
with this one), the "First 24 Hours After a Hillsborough Arrest" guide (rights
from arrest), and the Florida sealing checker (record). Labels say what the
target does; the sealing tool is labelled for sealing only because it does not
cover expunction. The meta title is "Sexual Battery Lawyer, Hillsborough County
| Hines & McCarty", 60 characters (was 63), adding the term readers search with.

### D65. Launch settings, attorney credit, and the sexual battery trim

**2026-10-08. Client direction.** Recorded together because they shipped in one
pass.

- **Phone.** Every call button uses `firm.phone` / `firm.phoneHref`, (813)
  738-8650. The three home hero variants and the DUI hero carried an old
  hardcoded 813-333-8886; it no longer appears anywhere in `src`.
- **Domain.** The `siteUrl` fallback is https://tampa-litigation.com, so
  canonical, Open Graph, sitemap and schema URLs use the real domain.
- **Who handles the case.** Lily McCarty and Maria Pavlidis are listed on every
  state, federal and white-collar charge page; David Hines on state charge pages
  only; Colton Trina on personal injury. On charge pages `HandledBy` renders as
  its own white section, "Who handles these cases.", in the page's design
  tokens; hubs and injury pages keep the existing block. The mapping is its
  own field, `handlesChargeHrefs`, not `leadsPracticeHrefs`: that one also feeds
  the hub "Handled by" block (the hubs stay unchanged) and the bio's practice
  areas, where a charge href renders as nothing (check:routes A2).
- **Reviewer and review date.** First recorded as done, then corrected by the
  client the same day: no attorney has reviewed any page yet. The reviewer
  credits (an alternating reviewer per state and federal page, Colton Trina on
  injury) were removed, because `owner` becomes the Article `author` in the
  schema and would claim a review that did not happen. A request to invent
  alternating review dates "so it seems real" was declined for the same reason:
  a misleading statement to readers and search engines, and a Florida Bar
  advertising concern. When reviews happen, set `owner` and `lastReviewed` per
  page from the real reviewer and date; the visible "Reviewed by" line renders
  only when both are set.
- **Sexual battery, repeated facts.** The parent or caretaker topic no longer
  repeats the penalties by age that the ladder lists; it points to them. FAQ 3
  gives the range (third degree up to capital) instead of each level, and FAQ 5
  drops the gain-time sentence that the mandatory minimum topic carries. The
  FAQs on force and time limits stay as written: they are the short answer, and
  the topics hold the full rules.

Still open: `published` stays false (noindex) until each page is reviewed;
site search is deferred until the remaining service pages are rebuilt.

### D66. A search map, and gates for titles, sibling links and repeated text

**2026-10-08. Client direction.** Before the remaining service pages are built
to the sexual battery standard, the client asked for the checks that keep
every page, and every blog post, insight or case result written later, from
competing with another page or reading like a copy of one.

- **The search map** (`src/lib/search-map.ts`). One row per page meant to be
  found in search: the one search it targets (`primary`, copied from its
  research brief, never invented), the intent behind that search (hire,
  answer, process, tool, proof, navigate), the words naming its subject
  (`topic`), and the pages that share its subject on purpose (`siblings`).
  Pages not meant to win a search are listed in `NOT_TARGETED` with a reason.
  Fourteen rows have no primary because no brief recorded one: the home page,
  the criminal and injury hubs, corporate fraud, the tools, the guides and
  the bios. The nine injury pages are in the same position, because the
  client's injury keyword architecture is not in the repo.
- **check:search-map** (before the build). No two rows go after the same
  search with the same intent; hire words ("lawyer", "attorney") only on hire
  pages, so a blog post cannot target a service page's search; case results
  are proof and need no primary; siblings are declared on both rows; every
  charge page names its topic in its H1 and meta title.
- **check:seo** (after the build, on the HTML). Every built page is mapped;
  titles 60 characters or fewer and unique; descriptions 70 to 160 and unique;
  one H1; the topic in the title and the H1; siblings link to each other; and
  repeated text, measured as shared 8-word runs with the site template set
  aside: a content page needs 60% of its text found on no other page, and no
  two pages may share more than 30%. Charge pages measure 81% to 94% unique.
- **The baseline** (`docs/build/seo-baseline.json`), the same ratchet as the
  readability baseline: 48 problems on 31 pages were recorded on the day the
  gate was built (mostly long titles and descriptions; nine missing sibling
  links; the home and injury hub H1s name no subject; the car accidents page
  and its insurance claims page share over 30% of their text). Each may stay
  until fixed and leaves the file when it is; any new problem fails the build.
- **audit:pages** (on demand, needs a browser). axe-core at desktop and phone
  width on every mapped page, failing on any violation, plus full-page
  screenshots in `.audit/` for a person to look at. Not part of the build.
  Adds `playwright` (pinned to 1.60.0, the cached browser) and `axe-core` as
  dev dependencies.

Siblings are the reciprocal pairs from the briefs and OVERLAP-AUDIT.md. DUI and
homicide are not paired: ST-04 assigns "dui manslaughter florida" to homicide
and W4-03 assigns it to DUI, so neither page targets it. That needs a decision.

### D67. The service page standard, and the rollout to every service page

**2026-10-08. Client direction.** Every service page is to be finished to the
standard set by the sexual battery page: easy to read, efficient, and correct
on SEO and accessibility, with structure free to flex by charge as long as the
content and flow make sense and the design stays on brand. The client approved
the plan and delegated five open questions to the recommendations below.

- **The standard is written down**, in `docs/build/PAGE-STANDARD.md`: the
  reading order, what flexes by charge type (degree ladder, federal ranges,
  investigation-stage pages, DUI's two clocks, overview pages), the rules for
  topics, FAQs, writing, accuracy, search, design and accessibility, and what
  "done" means. The parts a script can measure are a new section of
  check:pages that applies to every page listed in `STANDARD_PAGES`; pages
  join the list as they are rebuilt, so the rollout can go batch by batch.
- **Name offices, not office holders.** Five office holders were named across
  three pages. Names go stale when people leave office, and the page is then
  wrong. Sexual battery now names the offices only; the rule is enforced for
  pages on the standard.
- **DUI manslaughter belongs to the DUI page.** It is defined in the DUI
  statute and its searchers have been arrested for DUI. The homicide page
  links to it. (ST-04 and W4-03 had each assigned it to the other page.)
- **Corporate fraud stays a short overview** (D12), routing to the specific
  fraud pages.
- **PPP loan fraud is written from its brief (OPP-01)** with new statute
  research, recorded through the existing source gates.
- **Personal injury runs last.** Its layout is a separate design decision, and
  the client's injury keyword architecture is still needed.
- **Commits** go to this branch after each approved batch. Nothing is pushed.
- **Template fixes made once:** the penalty table header moved from navy/55
  to navy/70 (an axe contrast failure on 26 pages), and the four tool pages
  render a div instead of a second `<main>` inside the layout's `<main>`
  (WCAG landmark rules).

Not changed: the ladder and the box layout stay opt-in per page
(`display: "ladder"`, `detailsLayout: "grid"`) rather than becoming defaults.
The ladder only fits penalties that step by Florida degree, so making it the
default would have reshaped federal pages before anyone decided their shape.
The standard requires the grid on every page and the ladder where it fits.

### D68. What the pilot changed: one penalty design, and the rollout setup

**2026-10-08. Client direction, from reviewing the pilot** (gun crimes,
federal drug trafficking, tax evasion, rebuilt to D67).

- **The ladder on every page.** The client noticed "What you're facing" was
  the only section that looked different between pages: the ladder on degree
  charges, the older three-column table on federal and mixed pages. The ladder
  groups rows by each row's `degree` label, so it works for federal rows too
  (one card per tier or class). Every page on the standard now uses it, the
  check enforces it, and the table is retired from those pages. Federal drug
  trafficking and tax evasion were switched and reviewed in screenshots.
- **Outlined cards.** The ladder cards were a linen/25 tint, 1.03:1 against
  the white page, and did not read. Of two options shown (solid linen, or a
  white card with a navy/15 outline), the client chose the outline: the same
  frame as the detail boxes and attorney cards on the same page.
- **Plain penalty headings**: "5 to 40 years", "10 years to life", not "not
  less than 5 years and not more than 40 years". Same law, plainer words.
- **Do-now card headlines.** A card's first sentence is its headline only when
  it is 64 characters or fewer, so four cards rendered without one. The
  standard and the check now require a short opening instruction.
- **Phone tables** (pages not yet rebuilt): each row's note now follows the
  penalty it qualifies instead of preceding it.
- **Rollout setup, from the pilot's blind comparison.** Opus and Fable each
  drafted all three pages; two judges scored them blind. Opus won federal drug
  trafficking and tax evasion on both judges' votes with far fewer serious
  accuracy issues (1 against 6, 1 against 4); Fable narrowly won gun crimes
  (2 against 1). The rollout uses Opus to write, Fable to check accuracy, and
  a fresh final accuracy check after fixes, because that final check still
  found dropped "if death or serious injury results" and "no probation"
  conditions in penalty rows after two earlier rounds. The accuracy guard now
  counts those conditions row by row and flags any that disappear.

### D69. The firm is Hines McCarty Pavlidis, and how page titles carry it

**2026-10-08. Client direction.** The firm's name is changing to Hines McCarty
Pavlidis; the registered entity is Hines McCarty Pavlidis, PLLC.

- **The name** is replaced everywhere it appeared in the source (94 places in
  36 files). `firm.name` is "Hines McCarty Pavlidis" and `firm.legalName` is
  "Hines McCarty Pavlidis, PLLC". The domain (tampa-litigation.com) and the
  intake email are unchanged until the client says otherwise. Image file names
  keep "HinesMcCarty" (not visible to readers).
- **Wordmark.** Header, footer and the social share image read "Hines ·
  McCarty · Pavlidis" with bronze dots, echoing the bullets in the firm's
  logo as the bronze ampersand did before (`src/components/Wordmark.tsx`; the
  dots are hidden from screen readers). To be replaced by the logo artwork
  when supplied.
- **Titles (client chose option A of three).** The longer name took 25 of a
  title's 60 characters and pushed 20 titles over. Charge pages now read
  "[Charge] Lawyer in Tampa | Hines McCarty Pavlidis"; where that is over 60,
  the firm name is dropped ("Federal Health Care Fraud Lawyer in Tampa,
  Florida"). The search words always win. 21 of 29 charge titles keep the
  firm name. This also puts "Tampa", the word in every target search, into
  the state page titles, which said only "Hillsborough County". Bios read
  "[Name], Attorney in Tampa | Hines McCarty Pavlidis", which also stops
  calling Colton Trina, who handles injury cases, a criminal defense attorney.
  Not chosen: the firm name on every title (long charge names lose "Lawyer"
  or "Tampa"), or the firm name on the home page only.
- **Site name in search results.** The home page now carries WebSite markup
  naming the site "Hines McCarty Pavlidis", the way Google sets the site name
  it shows above every result, so a title without the firm name is still
  branded there. The LegalService markup's `name` is the firm name, with the
  registered entity as `legalName`.
- **Descriptions** on pages built to the standard name Tampa (D67 section 9).

Before launch, the firm should confirm the new name meets the Florida Bar's
rules on firm names.

### D70. The rollout: 24 more pages on the standard

**2026-10-08.** The remaining charge pages were rebuilt to D67 and D68: 8
state, 8 federal, 7 white-collar, and DUI. Each was written by Opus, checked
for accuracy against its original by Fable, fixed, and checked again by a
fresh Fable reviewer. The 8 pages whose final check still found accuracy
problems (homicide, domestic violence, bank fraud, both money laundering
pages, both computer crime pages, DUI) had their fixes checked a third time;
that pass found and fixed, among others, a DUI lead that implied leaving the
scene of any DUI crash carries 30 years, a federal money laundering FAQ that
invented a contrast in what the government must prove, a white-collar money
laundering timeline that gave a fixed start to a filing deadline the original
deliberately leaves open, and a dropped definition of "dating partner".
28 of 29 charge pages are now on the standard; corporate fraud stays a short
overview (D12, D67), and PPP loan fraud is still to be written (OPP-01).

Calls made in review:
- **DUI**: the refusal penalties stay in "related charges" (a separate
  statute), with the 1 October 2025 change in its own topic. The sentencing
  worksheet link was removed: brief ST-04 says not to link it from this page.
- **Federal gun charges**: "cannot run at the same time as any other prison
  term" was repeated in six card headings; it now appears once, in the
  original's words, in the paragraph under the cards.
- **Five-step action bands** (domestic violence, conspiracy, CSAM): an odd
  last card spans the row instead of sitting alone at half width.

Writer flags that need an attorney, not an edit, are collected for the review
packet: for example, battery's 8-year firearm minimum on a 5-year felony, the
riot minimum on the officer row, computer crimes' "exceeding authorization"
limb (brief ST-01 records it as unverified), and battery's bond schedule
expiring 31 December 2026.

### D71. PPP loan fraud written new, and the attorney question list

**2026-10-08.** PPP loan fraud had no content (a placeholder from the brief
OPP-01). It was written new to the standard, with a stricter source rule than
the rebuilt pages: every fact had to come from the brief's verified items, its
recorded C9 assertion, the recorded fetches in PAGE-SOURCES.md, or (for shared
federal procedure) the already-checked bank fraud and wire fraud pages, and
the accuracy guard checked every number against those files. Everything the
brief marks UNVERIFIED is left out: the loss table, the investigating
agencies, the text and maxima of 18 U.S.C. 1014, 1957 and 371, EIDL timing,
and prosecution counts. The filing deadline is stated as the brief records it,
conditionally (the Small Business Act rule for borrowers on covered loans;
18 U.S.C. 3293 by charge, with wire and mail fraud only when the offense
affects a listed financial institution; 5 years otherwise), with the two
questions the text does not settle named as open. Three review rounds; the
third caught the timeline turning the wire fraud condition on the lender's
identity rather than on whether the offense affects a financial institution.
New PAGE-SOURCES.md entries point each cited provision to its recorded fetch.
Lily McCarty and Maria Pavlidis are listed under "Who handles these cases".
The brief's own gate stands: no publication before an attorney has read the
limitations wording.

**Attorney questions.** The writers' flags across the rebuilt pages (140)
were triaged into `docs/build/ATTORNEY-FLAGS.md`: 57 questions only an
attorney can settle, by page, with the current page text quoted; 83
informational notes are counted, not listed. Two are dated: the CSAM page's
reference to the 1 November 2025 sentencing rules (check after 1 November
2026) and battery's bond schedule (expires 31 December 2026).

### D72. Personal injury pages on the service page standard

**2026-10-08. Client direction.** The nine injury pages move to the same
standard as the charge pages, with two choices the client made from options:

- **Full pillars, focused spokes.** Car accidents and truck accidents carry
  the full spine (Who pays, What happens next, What to do right now). The
  seven spokes open on "The short answer." and go straight to their topics,
  linking back to their pillar for the deadlines and steps, so the same
  content is not repeated on nine pages. Not chosen: the full spine on every
  page (repetitive, and the duplicate-text gate would catch it), or restyling
  the existing articles (statute-first, unlike the charge pages).
- **The hero keeps its photo**, rather than matching the plain charge hero.

Built for it: the tiered body is now a shared component (`TieredBody`, out of
ChargeTemplate) with the template sentences that name the kind of page passed
in, so injury pages say "claim" where charge pages say "charge";
`InjuryTemplate` renders tiered injury pages and falls back to
`InjuryLegacy` (the old template) for any page not yet rebuilt; Colton Trina
is mapped to every injury page for "Who handles these cases"; and
`check:injury` holds rebuilt injury pages to PAGE-STANDARD section 13.

### D73. Resources hidden at launch

**2026-10-08. Client direction.** The site launches without tools, guides or
articles; they come later. The articles page had none, so with tools and
guides gone the Resources section would have been empty. It is hidden as a
whole, not deleted.

- **One switch**, `RESOURCES_LIVE` in site.ts, off. It hides the Resources
  menu item (header and footer read the same nav), the home page's tools
  carousel and insights section, the "Browse the resources" row on the
  criminal defense hub, the sitemap entries for guides, and every
  `/resources` link inside page content (`isLiveHref`): section links on the
  tiered pages and the old "Related guides" list. Those links stay in the
  data and reappear when the switch is turned on.
- **The routes return a real 404.** A layout for the `/resources` segment
  calls `notFound()` while the switch is off, so every tool, guide and hub
  page is built as the not-found page with status 404, and nothing under
  `/resources` can be crawled or reached.
- **Internal links on the service pages (client chose option A).** 29 of the
  30 charge pages linked a tool or guide, and hiding them left 22 below the
  standard's 3 links (grand theft and identity theft with none). Rather than
  accept that, each such page gets links to related service pages where a
  reader would want them; the hidden links stay in the data. The standard's
  link count now counts only links a reader can see.
- **Checks** that read built tool and guide pages, or that expect guide
  routes to be built, report the hidden state instead of failing.

**Outcome (D72, same day).** All nine injury pages are on the standard. Each
was written by Opus and checked by Fable up to four times; the last round
caught, among others, PIP's sixty percent losing "of gross income" (so a
reader would assume take-home pay), a rideshare FAQ implying the company's
insurance cannot pay on the lower tier, and two verbatim statute passages
on the semi-truck page altered character by character. The car accidents
page and its insurance claims spoke shared 59% of their text; the pillar now
summarizes uninsured motorist coverage and links to the spoke, which keeps
the full statute (P7 passes). check:seo now treats text on six or more pages
as template, because the injury pages share an attorney block, a call band
and a FAQ intro that a quarter of the whole site never reached. The firm's
fee terms, an unfinished placeholder on the old pages, are on the attorney
list (ATTORNEY-FLAGS.md) rather than on the site.

### D74. Articles visible at launch, and the site-wide cleanup

**2026-10-08. Client direction.** Articles and Results stay visible at launch
(content follows soon after); tools and guides stay hidden (D73).

- **The switch is now `TOOLS_LIVE`** and covers tools and guides only. The 404
  moved from the whole `/resources` segment to `/resources/tools`,
  `/resources/guides`, `/resources/tools-and-guides` and the `/resources`
  hub; `/resources/articles` is live. With Resources holding only Articles,
  the menu shows **Articles** as its own item instead of a one-entry
  dropdown. Results stays in the menu.
- **Headlines that name the subject.** The home page and the injury hub had
  taglines as their H1. Each now has a short bronze H1 above the tagline
  ("Criminal Defense and Personal Injury Attorneys in Tampa Bay"; "Personal
  Injury Attorneys in Tampa"); the tagline keeps its look as a paragraph.
  `PageHero` takes an optional `eyebrow` for this.
- **Titles and descriptions** (D69 rule): "Criminal Defense Lawyer in Tampa |
  Hines McCarty Pavlidis", "Federal Criminal Defense Lawyer in Tampa,
  Florida", "Cases We Defend | Hines McCarty Pavlidis"; About's description
  trimmed to 137 characters.
- **Contrast.** Navy text at 30 to 60 percent opacity used for labels, tabs,
  hints and table headers, and bronze labels on white, fail WCAG AA; they are
  navy at 70 percent now.
- **Nothing unfinished reaches a visitor.** `Needs` placeholders render only
  in development; the review byline renders only with a real reviewer and
  date (D65); hub FAQs show only answered questions; the map panel shows no
  setup note without its token; About's internal notes are development only,
  its unopened Tampa office card is gone, and its note that the attorney to
  practice question was unanswered is removed (answered in D65). The
  attorneys page shows "Handled by" from the D65 mapping.

Content still owed by the firm, now hidden rather than shown as placeholders:
David Hines's bio overview; written permission from each organisation whose
mark appears in the credential strip (the marks still display); a
substantiated firm-wide trial count if wanted; Tampa office details; hub FAQ
answers; the Mapbox token for the map.

### D75. Placeholder testimonials hidden

**2026-10-08.** The home page's "What clients say" showed two invented
quotes attributed to "Google Review"; the data was marked as placeholders to
replace before launch. Published as written, they would be fabricated
testimonials in attorney advertising (Florida Bar rules 4-7.13 and 4-7.14
require testimonials to be real and properly qualified) and fake reviews
under FTC guidance. The section now renders only when `TESTIMONIALS_REAL` is
set in site.ts, after the quotes are replaced with real reviews the clients
have consented to publish, with the disclaimer the rules require.

### D76. Site search, preview pages removed, credential marks cleared, Articles hero

**2026-10-08. Client direction.**

- **Site search** (requested: "very efficient, simple, true value to a
  visitor"). The header search box now searches the site as you type.
  - The index is built from the site's own data at build time
    (`src/lib/search-index.ts`, served as `/search-index.json`, about 500
    entries): every live page, every detail topic (linking into the page
    with that topic opened), every common question (opened on arrival),
    the attorneys, and the main site pages. Hidden tools and guides are
    left out; published articles join automatically.
  - Matching (`src/lib/search-engine.ts`, no dependency) finds word starts
    as you type, maps everyday words to the site's ("weed", "drunk
    driving", "uber", "18 wheeler"), finds statute numbers ("893.13"),
    forgives one typo in a longer word, and drops filler words so a typed
    question still finds the topic that answers it. It ranks the page
    about the subject first, drops results far weaker than the best, and
    shows a near-identical question from many charge pages at most twice,
    suggesting the reader add their charge.
  - The box follows the WAI-ARIA combobox pattern (arrow keys, Enter,
    Escape, results announced), shows popular searches when empty, and
    offers the charge list and the phone number when nothing matches.
  - `check:search` runs in the build: twenty real queries must find the
    right page near the top, a nonsense query must return nothing, hidden
    pages must stay out, and the index must stay small.
- **Preview pages deleted**: /hero-preview-2, /home-preview-2 and
  /illustration-preview, the robots rule that excluded them, and three
  components only they used.
- **Credential marks**: the client confirmed permission to display them.
- **Articles hero**: the Results page's photo hero, with the image the
  Resources hub used; its breadcrumb data no longer passes through the
  hidden /resources.

### D77. Taglines restored, plain injury heroes, search easier to close

**2026-10-08. Client direction.**

- **The bronze subject lines added in D74 are removed.** The home page's
  "Aggressive Representation / Defending Your Future" and the injury hub's
  "If someone else caused it..." are the H1s again, as the client prefers.
  Their subject is carried by the title, description and intro. The search
  map marks both as `h1Tagline`, so check:seo still requires the topic in
  the title but not in the H1. `PageHero` no longer takes an eyebrow.
- **The injury pages use the charge pages' plain navy hero**, without the
  photo (reverses the D72 choice to keep it), with the jump links closing
  the hero as on the charge pages.
- **Search closes more easily:** a large "Close ×" in the panel's top
  corner, where the header's buttons sit, on every screen size; tapping the
  darkened page below still closes it, and so does Escape.

### D78. Photo hero on the two injury pillars only

**2026-10-08. Client direction.** Car accidents and truck accidents keep the
photo hero they had before D77; the seven spokes keep the plain navy hero.
The pillars' jump links follow the photo hero as their own strip, so the
image is not cut by them.

### D79. "Who handles what" covers all four practice areas

**2026-10-08. Client direction.** The attorneys page's "Who handles what" listed
the three criminal areas in a row of three. It now lists all four practice
areas from `practiceAreaIndex` (personal injury included, handled by Colton
Trina through his existing mapping) as a 2x2 grid, and its intro says "see
what it covers" rather than "the charges it covers".

### D80. David Hines handles federal cases too

**2026-10-08. Client direction.** David Hines is added to the federal charge
pages (`handlesChargeHrefs` now state and federal), so he appears under
"Who handles these cases" on all nine federal pages and on the Federal
Criminal Defense card in "Who handles what"; his bio's practice areas list
Federal Criminal Defense as well. Updates the D65 mapping (state only).

### D81. Every criminal defense page lives under /criminal-defense

**2026-10-08. Client direction.** The criminal defense addresses now mirror
the menu, as /personal-injury/... already did:

| Was | Now |
|---|---|
| /cases-we-defend (the charge list) | /criminal-defense (the criminal defense overview) |
| /criminal-defense (state hub) | /criminal-defense/state |
| /criminal-defense/dui-defense | /criminal-defense/state/dui |
| /federal-criminal-defense/... | /criminal-defense/federal/... |
| /white-collar-defense/... | /criminal-defense/white-collar/... |

- **Shorter page names**, client approved: the "-defense" suffix is dropped
  where the folder already says it (eleven state pages, plus federal
  `csam-defense` to `csam` and `target-letter-defense` to `target-letter`).
  Data keys follow (`state/dui-defense` to `state/dui`), in the code, the
  checks, PAGE-SOURCES.md and the baselines. DECISIONS.md and the research
  briefs keep the old names as the historical record.
- **Done before launch on purpose**: nothing was indexed at the old
  addresses, so no ranking is lost. One old-to-new map was applied in a
  single pass across every file, so nothing was renamed by hand or twice.
- **The overview is the criminal defense page now**: H1 "Criminal defense.",
  title "Criminal Defense Lawyer in Tampa | Hines McCarty Pavlidis", and the
  search map's primary query "criminal defense attorney Tampa" (keywords.md,
  never assigned to a page before). The state hub's title is "State Criminal
  Defense Lawyer in Tampa, Florida". Breadcrumbs read Home > Criminal
  Defense > State Criminal Defense > the charge.
- **Redirects** from every old address to its new one, as a safety net for
  links made during development. Redirects from the previous website are
  added before launch (CLAUDE.md audit 6).

### D82. Local focus, and a line for readers elsewhere in Florida

**2026-10-08. Client direction.** The service pages name Tampa and
Hillsborough County in titles and H1s on purpose: the firm has one office, in
Brandon; local searches rank by proximity and the business profile; the Tampa
terms are the winnable ones in keywords.md; and the state pages carry
Hillsborough-specific procedure. The client takes cases across Florida, mostly
in nearby counties, so:

- **State, white-collar and injury pages** add one line under the hero's call
  button: "Charged outside Hillsborough County? We also take cases elsewhere
  in Florida, most often in the counties around Tampa Bay." (injury: "Hurt
  ... claims"). No county names are listed, because the client did not name
  them. Federal pages are left alone: their H1 names the Middle District,
  and no claim is made about Florida's other federal districts, since the
  attorneys' admissions there are not on record.
- **Schema**: the LegalService's `areaServed` adds Florida as a whole.
- **Not done, on purpose**: one page per city or county that swaps the place
  name (doorway pages). County pages are for later, each with real
  county-specific content, once the firm has cases there.

### D83. Contact form settings, spam checks, and white-collar on two bios

**2026-10-08. Client direction.**

- **Sending without the firm's DNS.** The form sends through Resend from
  `website@thedigitalwash.com`, a domain already verified in Resend, so the
  firm's domain needs no records. The display name reads "Hines McCarty
  Pavlidis Website"; replies go to the visitor's address.
- **The inbox is a setting**, `CONTACT_TO_EMAIL`, instead of the placeholder
  `firm.email`. The form sends only when `RESEND_API_KEY`,
  `CONTACT_FROM_EMAIL` and `CONTACT_TO_EMAIL` are all set; until then it
  tells visitors to call, and the contact page stays noindex and out of the
  sitemap. `.env.example` (committed) documents the three; `.env.local`
  (ignored) holds the real values.
- **Spam**, beyond the existing honeypot: a submission under three seconds
  after the form was shown is dropped quietly, and one visitor may send at
  most five in ten minutes (in memory, so a brake rather than a guarantee on
  serverless), after which they are asked to call.
- The form already carried the notice that sending it does not create an
  attorney-client relationship; nothing added.
- **Lily McCarty's and Maria Pavlidis's bios list White-Collar Defense**,
  matching the D65 mapping that already shows them on every white-collar
  page. David Hines's bio is unchanged pending the client's answer on
  whether he takes white-collar cases.

### D84. The firm's logo across the site

**2026-10-08. Client supplied** the logo (`public/branding/`: a temple
monogram over HINES • MCCARTY • PAVLIDIS, in black, gold and white, as SVG,
PDF and raster). Web versions are cut from the SVG into
`public/brand/`: the monogram, the name line, and the full logo without its
background, each in linen, the logo's gold (#937c3e) and navy.

- **Header** (client chose among mockups): at the top of the page, the full
  gold logo with the names below, 64px tall on phones, 72px on tablets and
  96px on desktop, sized to clear every hero's top padding; once the visitor
  scrolls, the logo shrinks to the monogram alone, since the names would be
  unreadable that small. See D85 for how.
- **Footer**: the full logo in linen (client choice).
- **Browser tab and home screen**: the gold monogram on navy (`icon.svg`,
  `favicon.ico`, `apple-icon.png`).
- **Social share image**: the full logo in linen with the firm's tagline,
  replacing the typed name and the outdated "Criminal Defense, State and
  Federal".
- **Schema**: the LegalService carries the logo (`/brand/hmp-logo.png`).
- The text wordmark (D69) is retired.

### D85. Header motion on scroll

**2026-10-08. Client direction.** The header keeps one height (68px phone,
76px from tablet up) and no bottom border, scrolled or not. The border had
shown as a thin white line mid-scroll.

- **Logo**: one inline SVG (`Logo.tsx`) rather than two images swapped. At
  the top of the page it is the full logo hanging below the bar; on scroll it
  scales down from its top-left corner to the monogram, centred in the bar,
  while the rule and the names fade out. Opening the menu does the same.
- **Menu, phone number and icons**: sit 7px lower at the top of the page and
  settle into place with the logo, a small follow-through the client asked
  for. Their horizontal position never changes.
- **Photo heroes**: from desktop width the photo runs up behind the
  transparent header, and a bright sky made the phone number and icons hard
  to read. A navy wash down the top 160px of the photo (`HeroPhotoLayer`)
  gives the header the same ground as a plain navy hero. Phones are
  unaffected: there the photo sits below the copy.
- Reduced motion: every transition is off.


### D86. A call button in the main page heroes

**2026-10-08. Client direction.** Attorneys, Criminal Defense, Personal
Injury, Results and Articles carry a "Call (813) 738-8650" button under the
hero copy, the same button as the charge pages' hero (D67): full width on a
phone, its own width from 640px. `PageHero` takes it as a `cta` prop, so a
page without one is unchanged (About, Contact).

### D87. Main page heroes the same height again

**2026-10-08. Client approved.** The call button (D86) made the heroes
uneven on desktop: 556px to 643px. `PageHero`'s content floor goes from
380px to 467px, the tallest (Personal Injury), so Attorneys, Personal
Injury, Results, Articles, About and Contact all measure 643px from 1024px
up. Headings still start at the same height on every page; the shorter
heroes take the extra room at the bottom. Criminal Defense is taller, as
before, for its credential strip. Phones are unchanged.

### D88. Shorter home hero copy

**2026-10-08. Client chose** the shorter of two drafts. The paragraph under
the home headline went from about 70 words over six lines to 35 over three:
what the firm does, where, and that every case is prepared for trial. The
opening line about who the reader is, and the "other side of the same
courthouse" line, are gone. The place names stay for local search.

### D89. Call buttons in two home sections

**2026-10-08. Client direction.** "What we handle." has the gold call button
on the right of its intro from desktop width, level with the intro's last
line; on smaller screens it sits under the intro, full width on a phone.
"Where we appear." has the same button beside "Talk to the firm"; on a phone
the two stack, full width.

### D90. Closing call-to-action card on phones, and its light map

**2026-10-08. Client direction.** In the closing card (`CallToAction`),
"Request a consultation" and the call button stack full width on a phone,
like every other call button on the site; from 640px they sit side by side
at their own width. In the light card on the charge, injury and bio pages,
the Florida watermark goes from 6% to 11% navy: at 6% it was barely darker
than the card's gradient and read as a smudge rather than as the state the
navy card shows plainly.

### D91. The locations map is drawn, not rented

**2026-10-09. Client direction:** no Mapbox token, an exact outline of the
state, styled like the reference (light gray land and water, city names,
pins).

- **Base maps** are static SVGs in `public/maps/` (desktop, mobile, circuit),
  generated by `npm run build:maps -- <data dir>`
  (`scripts/build-locations-map.mts`) from public-domain sources: Census
  cartographic boundaries 1:500,000 (states, counties), Census TIGER primary
  roads, and Natural Earth 1:10m lakes. The script header says where to get
  each file. Tampa Bay, Charlotte Harbor and the barrier islands are real
  water and real islands. 27 to 41 KB each.
- **Pins and labels** are drawn over the base map in the site's own type,
  through the same projection (`src/lib/map-view.ts`), so they land on the
  coastline and crop with it. Desktop names gray context cities (Gainesville,
  Ocala, Daytona Beach, Palm Bay, Sebring, Port St. Lucie) and "FLORIDA";
  Lakeland was left off because it collided with Brandon. The phone map
  names only the service areas and the office.
- **Brandon** is the same dot as the service areas, in the firm's gold
  (client choice), so the office is marked and the service areas are not
  (Rule 4-7.12).
- **Framing**: both home maps are drawn wider than any panel they fill, so a
  wide screen shows more water rather than cropping off Gainesville and
  Naples.
- **State hub** (`CircuitMap`): the same component at Tampa Bay, with county
  lines and the five county names. It had shown the Mapbox placeholder too.
- `/api/map` and the `MAPBOX_TOKEN` setting are gone.

### D92. The phone map leads the section

**2026-10-09. Client direction.** Below desktop width the "Where we appear."
map now comes first, above the heading, edge to edge, starting at the navy
section above it and fading into the page at the bottom, instead of a boxed
square under the buttons. The phone view is taller and centred further
south (27.15, 760x480) so Naples sits clear of the fade.

### D93. Full-width buttons in every CTA box; Core Values in one row

**2026-10-09. Client direction.**
- The home page's closing card ("Talk to a defense attorney today.") and
  About's "Talk to the firm." box stack their two buttons full width on a
  phone, like `CallToAction` (D90). The charge pages' mid-page box already
  did.
- Home "Core values.": the placeholder team photo is gone. The four values
  sit in one row of filled cards, the same card as the charge pages' steps
  (serif title, `bg-linen/[0.06]`) without the numerals, since the values
  have no order; two by two on a tablet, stacked on a phone. "More about the
  firm" sits opposite the heading and intro from desktop width, level with
  the intro's last line.

### D94. The Florida watermark on phones

**2026-10-09. Client direction.** On a phone the closing cards' Florida
watermark was small and cut off at the top, so the light cards showed only a
sliver of the peninsula. The home card's watermark is a little larger and
higher (360px, 420px on tablets), and `CallToAction` is sized to match it
(400px wide, 460px on tablets, since its Census outline carries more margin
than the home card's mask), bleeding off the card's top and right edges
(-top-14, -right-16) like the home card rather than floating inside it. A
first pass set it lower and showed the whole state inside the card, which
the client rejected.
Desktop is unchanged.

### D95. A "Call" button in the phone header

**2026-10-09. Client choice** among four options. Below 640px the header's
bare phone icon, which read as one more icon beside search and menu, is a
filled gold button with the icon and the word "Call" (navy text, named
"Call (813) 738-8650" for screen readers). It clears the logo by 71px on a
360px phone. From 640px the full number shows as before.

### D96. The three hub maps, drawn

**2026-10-09. Client choices.** The forum illustrations on the state,
federal and white-collar hubs are all the drawn map (D91), with their edges
faded into the page rather than boxed:

- **State**: unchanged Tampa Bay view, now with soft edges.
- **Federal**: the whole state with the Middle District's 35 counties shaded
  and its five division courthouses marked (Jacksonville, Ocala, Orlando,
  Tampa, Fort Myers), Brandon in gold, and a small key. Replaces the US
  outline drawing.
- **White-collar**: the whole state with the Middle District shaded lightly
  (federal court) and Hillsborough County darker (state court), Brandon in
  gold, and a key. Replaces the document drawing; the old objection that
  Hillsborough is unreadable on a statewide map no longer holds at this
  drawing's detail.

The divisions and counties now live in one list, `src/lib/middle-district.ts`,
taken from M.D. Fla. Local Rule 1.04(a) as amended effective November 1, 2025
(checked 2026-10-09). The federal hub's division table and the map build both
read it. Hernando is in the Ocala Division, as the table already said.
The old `ForumMaps.tsx` and `spec.ts` are removed. Map files: 82 KB each for
the two statewide views.

### D97. The hub maps fill their half of the section

**2026-10-09. Client direction.** From desktop width the state, federal and
white-collar maps are no longer a box beside the copy: each fills the right
half of the section, to the window's edge and top to bottom, dissolving into
the copy on its left and fading at top and bottom against the white sections
around it, the way the home map fills its side. The copy sets the section's
height; the map covers whatever shape that makes.

- The views are framed tight on their subject at 760 by 720 and anchored to
  the panel's right edge (`xMaxYMid slice`), so a narrow panel crops only the
  side that dissolves.
- The federal and white-collar keys are HTML, a small card in the panel's
  bottom-right corner (under the map on a phone), so no crop can cut them.
- Markers within about 60 units of an edge are left off, so none sits half
  hidden in a fade (Sarasota on the state map).
- Phones keep the boxed map under the copy, now the whole view.

### D98. No sea on the hub maps

**2026-10-09. Client direction.** The state, federal and white-collar maps
drop their gray water: the sea is the white page. To hold its shape on white
the land is a shade grayer (#eff1f4) with a thin coastline (#cdd2db), and
lakes and bays (Tampa Bay) are white. The home map keeps its gray sea.

### D99. The hub maps edge to edge on phones and tablets

**2026-10-09. Client direction.** Below desktop width the state, federal and
white-collar maps follow the copy, edge to edge (26rem tall on a phone, 44rem
from 640px so a tablet's wide box does not crop Jacksonville), fading into
the page above and below, with the key under the map. The client first asked
for the map above the copy, then reversed it; the edge-to-edge treatment
stayed.

### D100. Desktop dropdowns on three menu items

**2026-10-09. Client choice** (short lists, among three options). From
desktop width, Attorneys, Criminal Defense and Personal Injury open a small
dropdown on hover or keyboard focus: the four attorneys; State, Federal and
White-Collar plus "All charges"; Car Accidents and Truck Accidents. The top
labels still link to their pages. Short open and close delays keep a passing
pointer from flashing them; Escape closes one from the keyboard; a closed
menu's links are out of the tab order. The hamburger menu and phones are
unchanged. `NavChild` gains an optional `short` label for the injury pages,
whose menu titles are questions. The dropdown lives in `NavDropdown.tsx`;
`Header.tsx` was already over the 300-line guide (397) before this.

### D101. Tampa in gold on every map

**2026-10-09. Client direction.** Tampa's dot is gold, like Brandon's, on the
home, state, federal and white-collar maps; the white-collar map marks Tampa
alone instead of Brandon. Gold means an office: the client confirmed
(2026-10-09) that the firm has a Tampa office, so a gold Tampa is accurate.
Its street address is still owed for the office block and schema.

### D102. Dropdown styling, "Our Firm", and "Call Now"

**2026-10-09. Client choices.**
- The desktop dropdowns (D100) are navy, continuing the header bar instead
  of a white box under it: flush with the bar's bottom edge, a thin gold
  line on top, linen text that turns gold on hover with a small arrow.
- The Attorneys dropdown ends with "Our Firm" (/about), set apart at the
  foot like "All charges" in Criminal Defense.
- The phone header's call link (D95) is the gold phone icon with "Call Now"
  beside it, no button box. It clears the logo by 55px on a 360px phone.
  Its accessible name starts with the visible words ("Call Now, (813)
  738-8650") so voice-control users can say what they see.


### D103. An arrow on the home practice switcher

**2026-10-09. Client direction.** On desktop the State / Federal /
White-Collar / Injury switcher keeps its large serif words (a row-and-count
version was tried and rejected) and gains an arrow after each: navy and
nudged right on the active one, faint on the others and darkening with a
nudge on hover, so they read as things to pick. The column is 19rem and the
items do not wrap, so "White-Collar" stays on one line with its arrow.
Phones keep the accordion.

### D104. The call is the gold button in the closing cards

**2026-10-09. Client direction.** In the closing cards (the home card and
`CallToAction`, navy and light) the buttons swap: "Call (813) 738-8650" is the
gold button and comes first; "Request a consultation" is the outlined one.
On a phone the call is the top full-width button.

### D105. No areas note under the home map list

**2026-10-09. Client direction.** The line "These are the areas the firm
practices in. The office is in Brandon." under the "Where we appear." city
list is removed.

### D106. Side menu injury labels without "in Tampa"

**2026-10-09. Client direction.** In the hamburger menu the injury pages read
"Hurt in a car accident?" and "Hurt in a truck accident?". The pages' own
titles and meta descriptions keep "in Tampa" for local search; only the menu
labels drop it.

### D107. Dropdowns close on navigation; side menu order

**2026-10-09. Client reports.**
- A desktop dropdown stayed open after one of its links was used: the page
  changes without a reload, so the pointer still over it and the focus left
  on the clicked link both held it open. Clicking a link now drops focus and
  holds that dropdown shut until the pointer leaves it.
- The side (hamburger) menu lists Criminal Defense and Personal Injury
  first, then Attorneys, then the rest. The top bar keeps its order.

### D108. The Our Firm page, rebuilt

**2026-10-09. Client choice** (rebuild in the site's newer style). /about now
runs: hero with the call button; the intro ("Four attorneys, four different
concentrations.") beside two linked practice cards; "How a case is handled
here." as four filled navy cards; the attorneys (the /attorneys card on
white, board certifications where held); "Where we practice." with the
courts and the offices beside the drawn map (D91), filling the right half on
desktop and edge to edge under the copy on a phone; the credential strip; and
the standard closing card. Removed: the two cream sections, the repeat of
the home page's core values, and the one-off closing box. The copy names
both offices, Brandon and Tampa (D101), and the meta description and JSON-LD
say so. Each section is a component in `src/components/about/`; the page file
went from 479 lines to 162.
Revised the same day (client direction): the credential strip comes before
"Where we practice.", directly after the attorneys.

### D109. Dropdown polish; About map first on phones

**2026-10-09. Client direction.**
- Clicking a dropdown's own label (Attorneys, Criminal Defense, Personal
  Injury) now closes it too, as a link inside it already did (D107).
- The dropdown fades in while settling down 8px (200ms, ease-out) and closes
  faster (120ms) with no drift. A short open delay keeps a passing pointer
  from triggering it; a short close delay forgives one that slips off.
- On the Our Firm page, "Where we practice." puts the map first below
  desktop width, edge to edge above the copy.
- After a dropdown link is used, the dropdown fades out over 200ms while
  lifting slightly toward the bar, instead of cutting out as the page changes.
- Our Firm order: the attorneys now come before "How a case is handled here."

### D110. No trial-count note on Our Firm

**2026-10-12. Client direction.** The development-only "[NEEDS: firm-wide
trial count]" note is removed from /about. The trial count itself stays off
the site until it is substantiated; it is still on the owed-content list.

### D111. No planned-pages count on Criminal Defense

**2026-10-12. Client direction.** The line "30 charge pages are planned
across the three areas above." is removed from /criminal-defense.

### D112. The three criminal hubs in the site's current form

**2026-10-12. Client direction** ("redo with the new branding"). The state,
federal and white-collar hubs stay short and keep their copy; their styling
catches up with the rest of the site:

- **Hero** (`HubHero`): the main pages' hero form with the gold call button
  (full width on a phone), the D82 "outside Hillsborough" line on state and
  white-collar, the 380px content floor, and a photo slot,
  `SILO_HERO_PHOTOS` in hero-photos.ts, empty until the client sends the
  courthouse images.
- **Charges** (`HubCharges`): the home practice card (label, one-line
  description, arrow) in two columns with a count, replacing the dense text
  index.
- **Federal court facts** (`ForumFactsSection`): the last cream section on
  the site becomes white. The five divisions are cards, Tampa's in gold and
  marked "Hillsborough is here"; the courthouse is a navy card with its
  details; the two offices are cards.
- The white-collar pointer on the federal hub is one linked card.
- The forum map section and the closing card are unchanged.

`SiloHub.tsx` went from 332 lines to 179.

### D113. No eyebrow on the division cards

**2026-10-12. Client direction.** The federal hub's division cards drop their
"Division" / "Hillsborough is here" label; Tampa's card keeps its gold border
and tint.

### D114. Labels in serif italic, not all-caps

**2026-10-12. Client direction** ("so obviously AI"; chose serif italic among
three options). Every small label on the site (card labels such as
"Prosecution", attorney titles such as "Partner", section labels such as
"State" and "Federal", courthouse details, footer column titles, office
labels, search result kinds) is now the `.eyebrow` class: Lora italic,
sentence case, no letter spacing, 15px. The all-caps, wide-tracked
`font-heading text-xs uppercase tracking-wide` pattern is gone from labels.
Kept as they were: the top navigation, buttons, table headers in the
(hidden) tools, the dev-only [NEEDS] marker, and the two uppercase text links
("More about the firm", "All attorneys").

### D115. Hours: 24/7

**2026-10-12. Client direction.** The firm is available 24 hours a day, 7
days a week. The office hours line (closing cards, contact page, office
blocks) reads "Available 24 hours a day, 7 days a week", replacing "Monday
to Friday, 9 AM to 5 PM"; the Tampa entry carries the same hours for when its
address is added. The JSON-LD carries no opening hours, so nothing there
changes.

### D116. Business litigation, the firm's third practice

**2026-10-12. Client direction.** Business litigation is one of the firm's
main services. Client choices: one page at launch (subpages later); four
dispute types (contracts; partner, shareholder and LLC member disputes;
non-competes and trade secrets; business fraud and unfair trade practices);
handled by David Hines and Colton Trina.

- **/business-litigation**: hero with the call button; "The disputes we
  handle." as four cards, each with the Florida rule that most shapes it and
  its citation; "Where a business case is heard." (the 13th Circuit's
  Business Court under AO S-2013-021, assigned by case type with no dollar
  threshold; circuit court over $50,000 and for injunctions; county court at
  $50,000 or less); "What to do first."; Handled by; closing card. noindex
  until an attorney reads it, like the other unreviewed practice pages.
- **Verification** (2026-10-12, statute text at leg.state.fl.us and the 13th
  Circuit's orders): 95.11(2)(b), (3)(i), (3)(j); 95.031(2)(a); 542.335;
  the CHOICE Act, ch. 2025-213, ss. 542.41 to 542.45, effective July 1, 2025;
  688.007; 605.04091, 605.0802; 501.211, 501.2105; 34.01; 26.012. Two
  assumptions were wrong and were not used: the Business Court has no dollar
  threshold, and a Florida corporate derivative suit has no strict demand
  requirement. Points that rest on case law (the period for fiduciary duty
  claims, FDUTPA's limitations period) are left off the page.
- **Wiring**: primaryNav, side menu (third practice), practiceAreaIndex
  ("Who handles what" now has five cards; the odd last one spans the row),
  both attorneys' `practiceAreaHrefs` and `leadsPracticeHrefs`, Colton
  Trina's concentration line, the home "What we handle." cards and intro,
  the About practice cards and copy, the footer blurb, site search, the
  search map. `attorneyJsonLd` now reads practiceAreaIndex, so personal
  injury and business litigation reach `knowsAbout` (personal injury was
  silently dropped before).
- Not changed, for the client to decide: the home page's meta title
  ("Criminal Defense and Personal Injury Attorneys in Tampa Bay"), the home
  hero paragraph (D88), and `firm.tagline` on the share image.

### D117. "Practice Areas" groups the practices in the top bar

**2026-10-12. Client choice** (among three options). With a third practice
the desktop bar no longer fit below 1440px and ran into the logo. The top bar
now reads Attorneys, Practice Areas, Results, Articles, Contact Us. Practice
Areas is a button (it is not a page) whose dropdown lists Criminal Defense
with its three areas, Personal Injury with its two, and Business Litigation;
it is gold on any page under them. Item spacing is tighter below 1280px. The
side menu and footer keep every practice as its own item. Measured clearance
from the logo: 35px at 1024, 231px at 1280.

### D118. One background for every headshot

**2026-10-13. Client direction.** Lily McCarty, Maria Pavlidis and Colton
Trina's portraits are put on a background recreated from David Hines's (navy
blue, darker at the top, slightly darker at the sides), so the four read as
one set.

- The person is cut out with Apple's Vision person segmentation, run
  locally; the old background is subtracted from the edge pixels so hair
  carries no light rim; Colton's source, already cut out onto white, has its
  speckled rim removed.
- Lily and Colton were three-quarter length with a chair and their hands in
  front, which cannot survive a cutout cleanly. Both are re-cropped to David's
  head-and-shoulders framing (head about 10% from the top). Maria's photo was
  already a close crop with her shoulders at the frame's edges, so it keeps
  its framing.
- New files: `public/headshots/*_Headshot_navy.jpg`, 960x1200 (4:5). The
  originals stay beside them. Lily's `portraitPosition` override is removed.
  The scripts are in `scripts/headshots/` (not part of the build).
- Lily's and Colton's sources are small (512 and 608px wide), so their
  re-crops are upscaled; they read fine at card and bio size. Higher
  resolution originals would sharpen them.

### D119. Cleaner headshot edges

**2026-10-13. Client report:** the D118 cutouts looked obviously cut out.
Causes: the person mask was made at low resolution and scaled up, so edges
stair-stepped; edge pixels kept the old background (a gray haze on Maria, a
dark outline on Colton from an earlier cutout of his photo); and the person
sat on the new background with no light or texture in common.

Redone (`scripts/headshots/`): the crop is scaled to 960x1200 first and the
mask made at that size with Apple's subject cutout; the matte is refined
with a guided filter so it follows the photo's own edges and keeps hair
strands; edge colour comes from just inside the person; a little blurred
background light wraps the outer edge; one grain covers the whole frame.
Maria's old light-gray background is removed from between her hair strands
by colour (it is neutral, her hair is warm), and Colton's dark rim by pulling
his edge in 5px. Files renamed `*_Portrait.jpg` so no cached image survives.

### D120. Switcher marks in one column

**2026-10-13. Client choice.** The D103 arrows trailed each word at a
different distance and were small for the serif, which looked off. They now
sit in one column at the right edge of a 21rem switcher, sized to the type:
an arrow on the active item pointing at the grid, faint chevrons on the
others that darken and nudge on hover.

### D121. Home hero: sentence case, straight edge, ready for video

**2026-10-13. Client approved.**
- Headline in the display serif, sentence case: "Aggressive representation."
  in linen, "Defending your future." in gold italic, replacing the all-caps
  two-tone lines.
- The ellipse bottom edge, the only curve on the site, is now straight.
- Left aligned, like every other hero; the navy fade is solid under the copy
  and opens toward the right for the footage.
- The paragraph names all three practices (D116): state and federal
  criminal cases, injury claims, and business disputes. Replaces D88's text.
- The call button is full width on a phone, like every other hero.
- Video: the old Cloudinary clip returned 401, so it is removed. The slot is
  `HOME_HERO_VIDEO` in hero-photos.ts (`src`, optional `poster`), muted,
  inline, looping, `preload="metadata"`, hidden for reduced motion. Empty
  until the client's clip is ready; the hero is the navy gradient until then.

### D122. Home hero proportions

**2026-10-13. Client approved.** From desktop width the home hero is 85% of
the screen height (at least 640px) with the copy centred vertically, clear of
the header, to give the coming video room. The H1's lines get 1.1 line
height so the descenders of the first line clear the italic second line, and
the H1 steps up one size from 1536px. Measured space above the H1 (below the
header) and below the button: 79/107px at 1280x720, 141/169px at 1440x900,
192/220px at 1920x1080. Phones are unchanged.

### D123. The home hero video

**2026-10-13. Client-supplied.** `HOME_HERO_VIDEO` plays the agency-hosted
clip (media.thedigitalwash.com/hines-mccarty/HinesLaw_Hero.m4v): an aerial of
downtown Tampa and the waterfront, 10 s, 854x642, H.264, 5.4 MB, which
Chromium plays muted and inline on desktop and phone. Its first frame is the
poster (`public/backgrounds/home-hero-poster.jpg`, 99 KB), shown while it
loads and kept for reduced motion. The footage is bright daytime, so below
desktop width the wash is an even navy at 80% (the copy spans the width
there); from desktop the left-to-right fade stays. The clip is 854px wide,
so it is soft at full width on large screens; a 1920px export would sharpen
it.

### D124. No empty Overview on a bio

**2026-10-13. Client direction.** A bio with no overview renders no Overview
section, instead of a [NEEDS] marker. Only David Hines's lacks one, so only
his page changes; his overview stays on the owed-content list.

### D125. No Tampa office; Tampa back to navy

**2026-10-13. Client correction.** The firm does not have a Tampa office,
reversing the 2026-10-09 note in D101. Brandon is the only office (Rule
4-7.12: no office may be implied that is not bona fide).

- Maps: Tampa's dot is navy again, like every other service area; only
  Brandon is gold. The white-collar map marks Tampa (navy) and the Brandon
  office (gold), instead of a gold Tampa alone.
- Copy: the About page's "Offices: Brandon and Tampa." is now "Office:
  Brandon, in Hillsborough County."; its meta description and JSON-LD, and
  the footer blurb, name Brandon only.
- The unpublished Tampa entry in `offices` stays, marked as not an office.

### D126. Old-site redirects and the disavow file

**2026-10-13.** The new site launches on tampa-litigation.com, the domain the
firm's four-page GoDaddy site uses now. That site's URLs redirect: /about-us
to /about, /practice-areas to /criminal-defense, /contact-us to /contact, and
its two sitemaps to /sitemap.xml. hinesmccarty.com and hines-lawfirm.com
already 301 to tampa-litigation.com; keep both registered.

The domain's 1,138 linking domains are almost all an automated "SEO checker"
spam network. `docs/seo/disavow-tampa-litigation.txt` lists 1,134 of them for
Search Console's disavow tool (URL-prefix property only). Kept off it: the
Central Hillsborough Chamber listing, Juridipedia (a Facebook mirror), and
the firm's two redirecting domains.

### D127. The firm's to-do list at an unlisted address

**2026-10-13. Client direction.** The listings-and-links checklist (also
published as a claude.ai artifact) is on the site at /hmp-tasks-k7x2: linked
from nowhere, absent from the sitemap and site search, noindex and nofollow,
and listed in `NOT_TARGETED`. Ticks are saved in each viewer's browser
(localStorage), so progress is per device, not shared. Unlisted is not
private: anyone given the address can read it.

### D128. First production deploy, and no indexing on vercel.app

**2026-10-13. Client direction:** push to main so the site can be shown to the
firm. Production deploys from `main` on Vercel; the public review address is
https://hines-mccarty-site-seven.vercel.app (the per-deployment URLs sit
behind Vercel Authentication). No custom domain is attached and
tampa-litigation.com still points at GoDaddy, so the live firm site is
untouched. Every response on a `*.vercel.app` host carries
`X-Robots-Tag: noindex, nofollow`, so the review copy is never indexed; the
real domain is unaffected.

### D129. Solid header with a gold rule; white call button; footer contact

**2026-10-20. Client revisions.** The client asked for a white bar between
the header and the page because the video hid the header. A white header was
rejected; instead:
- The header is solid navy on every page with a gold rule on its bottom
  edge. At the top of the page it is tall enough for the full logo (129px at
  desktop, 97px on a phone) and shrinks to the slim bar on scroll; the
  controls row keeps one height, so the menu does not move. The dropdowns
  hang from whichever bottom edge is showing.
- The header's call button is white (linen) with navy text, with
  "Available 24/7 · Free consultation" under the number from 1280px. Below
  1280px the nav text is a size smaller so the bar still clears the logo
  (89px at 1024).
- The footer is a deeper navy with a gold rule on top, so it reads apart from
  the navy section above. Its contact is a clear call button with
  "Available 24/7 · Free consultation", and its blurb says "A Florida firm".
- The closing cards carry the same 24/7 line under their buttons.
- Every call button (and the buttons paired with them) uses the sans, so the
  phone number's figures line up; the serif drew them old-style.
- Phone hero tops are 144px (were 112px) to clear the taller header.
- "Free consultation": the client confirmed (2026-10-20) it is offered for
  every practice, which Rule 4-7 requires of an advertised term. This
  reverses the earlier "no fee terms" choice for this one statement.

### D130. Bolder headings; counties on the Attorneys page

**2026-10-20. Client revisions.** Home and hub headings (H1, H2) and the hub
and home charge-card titles are semibold. "Where the bench practices" on
/attorneys lists only the ten counties the client named
(`practiceCounties` in site.ts): Hillsborough, Pinellas, Polk, Pasco, Orange,
Manatee, Sarasota, Lee, Sumter, Osceola. The bar admissions list there is
removed (each bio still has the attorney's admission).

### D131. State and Federal flyouts in Practice Areas

**2026-10-20. Client revision.** In the desktop Practice Areas dropdown,
State Criminal Defense and Federal Criminal Defense open a second panel to
the right listing their charges, on hover or keyboard focus. It stays on
screen at 1024px.

### D132. A contact form in the five practice heroes

**2026-10-20. Client request.** The State, Federal and White-Collar hubs and
the Car and Truck Accident pages carry a short form on the right of the hero
(under the copy on a phone): name, phone, email, "Briefly, what happened?".
It posts to the same server action as /contact (validation, honeypot,
fill-time and rate checks) and the email names the page it came from. The
Rule 4-1.18 notice sits above the message field and asks for a brief note,
details by phone. It sends only once RESEND_API_KEY, CONTACT_FROM_EMAIL and
CONTACT_TO_EMAIL are set in Vercel; until then it tells the visitor to call.

### D133. See-through header again; white menu items

**2026-10-20. Client direction.** D129's solid navy bar and gold rule are
withdrawn: the header is see-through at the top of the page and navy once
scrolled, with no rule, and the logo hangs below the bar as in D85. The menu
items and icons are white (were 80% linen) so they stand out; the white call
button stays. To keep the nav readable over footage, the home video carries a
solid navy band at its top fading out by 192px (224px from desktop), and the
hero photos' top wash (D85) is now solid navy fading over 192px. Hero spacing
returns to D122 (home) and pt-28 on phones. The footer keeps its gold rule.

### D134. The hero video is served from the site

**2026-10-20.** The agency media host delivered the hero clip at about 15 KB/s
(5.6 MB, roughly six minutes), so visitors never saw it play and page-load
tests timed out. The full 10-second clip is re-encoded to H.264, 1.5 MB, with
the index at the front (`-movflags +faststart`), and served from
`public/videos/home-hero.mp4` on Vercel's CDN. The header call button keeps
no border (a gold border was tried and reverted, client direction), and the
gold buttons keep navy text: white on that gold measured 2.5:1, under the
4.5:1 minimum.
