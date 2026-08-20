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
