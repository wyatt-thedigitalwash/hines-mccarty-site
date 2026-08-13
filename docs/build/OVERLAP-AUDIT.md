# Overlap Pair Audit

Applies the rule in CASES-WE-DEFEND-PLAN.md Section 4.6.1 to the seven charge
pairs that appear in two silos.

> Where two pages would rest on statutes that differ only in a jurisdictional
> element, they are one page. Where they differ in an element of the offence,
> they are two.

Audit date 2026-08-13. **Recommendations only. Nothing was removed.**

**Method.** Every statute below was fetched from an allowlisted source and read
in its operative text, not from a summary or from recall. Florida statutes from
flsenate.gov, 2025 Florida Statutes. Federal statutes from uscode.house.gov,
Current 2024 Main Ed., which is allowlisted as of DECISIONS.md D2. That
discipline matters here specifically: the last two sessions produced three
errors that all came from reading abbreviated descriptions rather than operative
text, and this audit turns entirely on comparing elements.

---

## Summary

| # | Pair | Verdict |
|---|---|---|
| 1 | Drug trafficking | **Two pages.** Clear element difference |
| 2 | Gun crimes | **Two pages.** Clear element difference |
| 3 | Wire fraud | **Two pages.** Already settled by D4, re-confirmed |
| 4 | Healthcare fraud | **Two pages**, but with an urgent naming defect to fix first |
| 5 | Money laundering | **Two pages**, on the narrowest margin. Conditional |
| 6 | Computer crimes | **Two pages**, conditional and highest risk of collapse in practice |
| 7 | Corporate fraud | **Collapse.** Neither side rests on a statute at all |

Five survive outright or with conditions. One collapses. One survives but needs
a defect fixed before either page is written.

---

## 1. Drug trafficking: two pages

`/criminal-defense/drug-trafficking-defense` and
`/federal-criminal-defense/drug-trafficking`. Already built as a pair with a
cross-link.

**Florida, F.S. 893.135.** Trafficking is defined by weight. The statute reaches
knowing sale, purchase, manufacture, delivery, or bringing into the state, or
knowing actual or constructive possession, at a threshold quantity, and each
quantity band carries its own mandatory minimum and fixed fine.

**Federal, 21 U.S.C. 841(a).** "Except as authorized by this subchapter, it
shall be unlawful for any person knowingly or intentionally-(1) to manufacture,
distribute, or dispense, or possess with intent to manufacture, distribute, or
dispense, a controlled substance."

**The element that differs.** Florida reaches **knowing possession at a weight**.
Federal 841(a)(1) reaches possession **with intent to manufacture, distribute,
or dispense**. Intent to distribute is a federal element that Florida trafficking
does not require, which is exactly why a personal-use quantity above a Florida
threshold is still trafficking there and would not be an 841 offence on those
facts alone.

**Not merely jurisdictional.** 21 U.S.C. 841 contains no interstate commerce
element, so the federal statute is not the state statute plus a commerce hook.

**Verdict: two pages.** The distinction is also the most useful thing either page
can tell a reader.

---

## 2. Gun crimes: two pages

`/criminal-defense/gun-crimes-defense` and
`/federal-criminal-defense/weapons-gun-offenses`. Already built as a pair.

**Florida, F.S. 790.23(1).** Five categories of prohibited person: convicted of a
Florida felony; found to have committed a delinquent act that would be a felony
while under 24; convicted of a federal felony; found to have committed such a
delinquent act in another jurisdiction while under 24; or found guilty of an
out-of-state felony punishable by imprisonment exceeding one year. It reaches a
firearm, ammunition, or an electric weapon or device.

**Federal, 18 U.S.C. 922(g).** Nine categories, including a person convicted of
a crime punishable by more than one year, a fugitive, an unlawful user of or
person addicted to a controlled substance, a person adjudicated as a mental
defective or committed to a mental institution, certain aliens, a person
dishonorably discharged, a person who has renounced citizenship, a person
subject to a qualifying domestic restraining order, and a person convicted of a
misdemeanor crime of domestic violence.

**The element that differs.** The prohibited-person lists are not the same list
with a commerce hook added. Federal reaches drug users, people adjudicated
mentally defective, domestic violence misdemeanants, renunciants, and certain
aliens, none of which appear in the Florida categories. Florida reaches
juveniles under 24 adjudicated delinquent, which does not appear federally.
**Who is covered is an element, and the two statutes cover different people.**

The commerce language in 922(g) is jurisdictional, but it is not the only
difference, so the rule's collapse condition is not met.

**Verdict: two pages.**

---

## 3. Wire fraud: two pages

`/white-collar-defense/wire-fraud` and `/federal-criminal-defense/wire-mail-fraud`.
Settled by DECISIONS.md D4 and re-confirmed here.

**Florida, F.S. 817.034.** Organized fraud requires engaging in a **scheme to
defraud**, defined as a **systematic, ongoing course of conduct**, and obtaining
property thereby. Degree is set by aggregate value at less than $20,000,
$20,000, and $50,000.

**Federal, 18 U.S.C. 1343.** A scheme or artifice to defraud, plus transmission
by wire, radio, or television communication in interstate or foreign commerce
for the purpose of executing it. No course-of-conduct requirement and no value
threshold.

**The element that differs.** Florida requires a systematic, ongoing course of
conduct and an aggregate value; federal requires neither, and a single wire
suffices.

**Verdict: two pages.** This is the pair with the clearest separation of the
three fraud pairs, which is why the white-collar page was kept when mail fraud
was removed.

---

## 4. Healthcare fraud: two pages, but fix the naming defect first

`/white-collar-defense/healthcare-fraud` and
`/federal-criminal-defense/healthcare-fraud`.

**Federal, 18 U.S.C. 1347.** A scheme or artifice to defraud any **health care
benefit program**, or to obtain by false or fraudulent pretenses any money or
property owned by or under the custody or control of any health care benefit
program, **in connection with the delivery of or payment for health care
benefits, items, or services**.

**Florida, F.S. 409.920.** Medicaid provider fraud. It reaches knowingly making
a false statement or representation of material fact in **any claim submitted to
the Agency for Health Care Administration, its fiscal agent, or a managed care
plan for payment**, claims for items or services not authorized for Medicaid
reimbursement, and knowingly charging or accepting value beyond the amount
legally payable.

**The element that differs.** Federal 1347 reaches **any** health care benefit
program, which includes private insurers. Florida 409.920 is **Medicaid
specific** and is built around claim submission to a named state agency. The
object of the fraud and the conduct described are different, not the same
conduct with a federal hook.

**Verdict: two pages.**

### The defect that has to be fixed first

**These two entries are currently byte-identical in slug, label, and
description.** Both are `healthcare-fraud`, both are labelled "Healthcare
Fraud", and both carry the description "Billing charges involving Medicare,
Medicaid, or insurers".

That is not a routing problem, since the silo prefix distinguishes the URLs. It
is a C9 problem waiting to happen: two pages that begin from an identical name
and an identical one-line description will be written toward each other unless
something forces them apart. It is also inaccurate on the Florida side, since
409.920 is about Medicaid rather than about insurers generally.

**Recommended before either page is written:**

- Give the white-collar entry a Florida-accurate label and description, oriented
  to Medicaid provider fraud and the Agency for Health Care Administration.
- Give the federal entry a description oriented to health care benefit programs
  generally, which is what 1347 actually covers.
- Populate both C9 assertions at that point, so the collision checker can hold
  the line rather than relying on a reviewer noticing.

Whether the slugs should also differ is a separate call. They can stay identical
without harm, in the way the plan already contemplates for genuine overlap pairs.

---

## 5. Money laundering: two pages, on the narrowest margin

`/white-collar-defense/money-laundering` and
`/federal-criminal-defense/money-laundering`. The white-collar page is written;
the federal one is not.

**This is the closest of the five that survive, and the reason is worth stating
plainly.** The operative language is nearly word for word the same.

**Federal, 18 U.S.C. 1956(a)(1):** "Whoever, knowing that the property involved
in a financial transaction represents the proceeds of some form of unlawful
activity, conducts or attempts to conduct such a financial transaction which in
fact involves the proceeds of specified unlawful activity."

**Florida, F.S. 896.101(3)(a):** "Knowing that the property involved in a
financial transaction represents the proceeds of some form of unlawful activity,
to conduct or attempt to conduct such a financial transaction which in fact
involves the proceeds of specified unlawful activity."

The purpose limbs match too: promoting the carrying on of specified unlawful
activity, or knowing the transaction is designed to conceal or disguise the
nature, location, source, ownership, or control of the proceeds, or to avoid a
reporting requirement. Florida's statute was plainly modelled on the federal one.

**The elements that differ, and they are real:**

1. **Florida has a monetary element and the federal statute does not.** The
   Florida offence begins at financial transactions **exceeding $300**, and the
   degree is set at $20,000 and $100,000, each **measured across any 12-month
   period**. 18 U.S.C. 1956 sets no floor and no tiers.
2. **"Specified unlawful activity" means different things.** Florida defines it
   as any racketeering activity under F.S. 895.02. Federal defines it in
   1956(c)(7), a list of federal offences. The predicate sets differ, so the
   same money can be laundering under one statute and not the other.

**Verdict: two pages, conditionally.**

**The condition.** Because the prohibited conduct is nearly identical, these two
pages will be under more pressure to duplicate than any other pair on this list.
The federal page must be built on what is actually different, meaning the
predicate list, the absence of thresholds, and federal sentencing, and must not
be built as a restatement of the conduct language. If it is written as "the same
thing, but federal," the pair has collapsed in practice whatever this audit says
on paper.

The white-collar page as written leads on the $300 floor and the 12-month
window, which is the correct half of the split.

---

## 6. Computer crimes: two pages, conditional, highest risk

`/white-collar-defense/computer-crime` and
`/federal-criminal-defense/computer-internet-crimes`. Neither is written.

**Florida, F.S. 815.06(2).** An offence is committed by a person who willfully,
knowingly, and **without authorization or exceeding authorization** accesses or
causes access to a computer, computer system, network, or electronic device with
knowledge that the access is unauthorized or that the manner of use exceeds
authorization, or who disrupts or denies the ability to transmit data to or from
an authorized user.

**Federal, 18 U.S.C. 1030.** Also built on accessing **without authorization or
exceeding authorized access**, but attached to a **protected computer**, defined
at 1030(e)(2) to include a computer used by or for a financial institution or the
United States Government, **or which is used in or affecting interstate or
foreign commerce or communication**, or part of a federal voting system.

**Why this is the closest call.** The shared core, unauthorized access or
exceeding authorization, is the same on both sides, and the primary thing 1030
adds to it is the protected-computer requirement, whose main limb is an
interstate commerce hook. Read only that far, this pair is the rule's collapse
case: the same conduct plus a jurisdictional element.

**Why it survives anyway.** 1030 has limbs that add real elements rather than a
hook:

- **(a)(4)** requires acting **knowingly and with intent to defraud**, furthering
  the intended fraud, and **obtaining anything of value**.
- **(a)(5)** turns on **causing damage**, by transmission or by access.
- **(a)(1)** turns on national defence information and willful communication of
  it.

Florida's basic access offence requires none of those. Conversely, Florida's
denial-of-service limb is its own conduct.

**Verdict: two pages, conditionally, and this is the pair most likely to fail in
practice.**

**The condition.** The federal page must be built on (a)(1), (a)(4), and (a)(5),
which have their own elements. If it is built on (a)(2) or (a)(3), which are
substantially unauthorized access plus a federal-interest hook, it becomes the
Florida page with a commerce clause bolted on and should collapse into it.

### A separate question this audit surfaced

**Is computer crime a white-collar offence at all?** Unauthorized access is not
inherently financial. Of the two silos, the federal one carries the fraud limb
at 1030(a)(4), which is the genuinely white-collar part. The white-collar
placement of a Florida unauthorized-access page is worth questioning
independently of the overlap rule, and it is not something this audit resolves.

---

## 7. Corporate fraud: collapse

`/white-collar-defense/corporate-fraud` and
`/federal-criminal-defense/white-collar-corporate-fraud`.

**This pair cannot be tested against the rule, because neither side rests on a
statute.** There is no offence called corporate fraud in the United States Code
and none in the Florida Statutes. The label describes a category of conduct, not
a charge.

The nearest federal statute is **18 U.S.C. 1348**, securities and commodities
fraud, which reaches a scheme to defraud any person in connection with a
commodity for future delivery or a security of an issuer registered under
section 12 of the Securities Exchange Act of 1934 or required to file reports
under section 15(d). That is a securities offence, and
`/white-collar-defense/securities-fraud` already exists to carry it.

**Verdict: collapse.** A page with no statute fails C9 by construction: there is
no element that could be false if a different charge were swapped in, because
there is no charge.

Details of the federal card are in the next section, which addresses it
specifically.

---

## The federal "White-Collar and Corporate Fraud" card

Asked as a separate question. Current entry:

| Field | Value |
|---|---|
| Slug | `/federal-criminal-defense/white-collar-corporate-fraud` |
| Label | "White-Collar and Corporate Fraud" |
| Description | "Fraud charges against a company or its officers" |

**Three problems, and they compound.**

1. **It rests on no statute.** As above, there is no federal corporate fraud
   offence. It cannot pass C9.
2. **Its name duplicates an entire silo.** The white-collar silo is labelled
   "White-Collar Defense" with the H1 "White-collar and fraud defense". A charge
   page inside the federal silo named "White-Collar and Corporate Fraud" reads
   as a silo nested inside another silo, which is a navigation problem
   independent of the statute problem.
3. **Everything chargeable it would cover already has a page.** The federal
   white-collar offences with their own statutes are already separate entries:
   healthcare fraud, wire and mail fraud, money laundering, and computer and
   internet crimes in the federal silo, plus bank fraud, securities fraud,
   embezzlement, tax evasion, PPP loan fraud, and identity theft in the
   white-collar silo. There is no residue for this card to hold.

**Determination: it is not a distinct page. It is a link to the white-collar
silo hub.**

**Recommended.** Remove `/federal-criminal-defense/white-collar-corporate-fraud`
from the charge list, and have the federal silo hub carry a single cross-silo
row pointing at `/white-collar-defense`. That is the same treatment mail fraud
received under D4: the query is served, no page rests on nothing, and the
storefront does not lose coverage because the coverage is one click away in the
silo that actually owns it.

**A rename was considered and rejected.** The only rename that would give it a
statute is to securities and commodities fraud under 1348, and
`/white-collar-defense/securities-fraud` already occupies that ground. Renaming
would create a new overlap pair to solve an existing one.

**On `/white-collar-defense/corporate-fraud`,** the other half of pair 7: the
same reasoning applies, since it also rests on no statute. The recommendation is
the same, to remove it, but it is a weaker call than the federal card because it
does not duplicate a silo name and because "corporate fraud" is a phrase clients
use. If it is kept, it should be kept deliberately as an overview that links
down to securities fraud, bank fraud, embezzlement, and wire fraud, and it should
be recorded as an exception to C9 rather than allowed to look like a charge page
that happens to lack a statute.

---

## Consequences if the recommendations are accepted

- The charge set goes from 31 to 29 or 30, depending on the call on
  `/white-collar-defense/corporate-fraud`.
- The federal silo goes from 10 rows to 9.
- WEBSITE-PLAN.md Tier 2, REVIEW-QUEUE.md, and src/lib/site.ts each need the
  removal, in the same shape as the mail fraud removal under D4.
- Two decisions should be recorded, in the D-series form: one for the corporate
  fraud collapse, one for the healthcare fraud naming fix.

## One structural gap this audit exposed

**The C9 collision checker could not have caught pair 7.** It compares pages that
rest on the same statute. A page resting on **no** statute is invisible to it,
which is how a card with no chargeable offence sat in the list unremarked.

**Recommended addition to scripts/check-c9.mts:** fail when a populated C9's
`statute` field does not parse as a statute citation. `statuteKey` already
falls back to returning the raw string when it matches neither the U.S. Code nor
the Florida pattern, so the signal is available and is currently discarded. That
is a check the current design can support without new machinery, and it is the
kind of check HUNT-LIST defect 1 asks for: one that can actually fail.
