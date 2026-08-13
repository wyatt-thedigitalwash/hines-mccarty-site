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
