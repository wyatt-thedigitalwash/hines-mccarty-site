# Page sources: every statutory claim on a written page, with its fetch

**Why this file exists.** The adversarial pass on W1 pair 1 found that the pages
carried roughly fifteen claims from F.S. 943.0584, F.S. 943.059, and Rules
3.130, 3.134 and 3.191, and that **nothing in the repository recorded a fetch of
any of them.** The claims happened to be correct, which is not the standard.
CASES-WE-DEFEND-PLAN.md Section 10.3 says every statutory claim is verified by
fetching the operative source, and a verification nobody can audit is not one.

The briefs record what was fetched **for the brief**. This file records what was
fetched **for the page**, which is a different and larger set, because the
redesigned template added a human layer that the briefs never had to source:
timelines, sealing eligibility, and release conditions.

Every entry below was fetched on the date shown and quoted into the page from
the fetch, not from recall or from a summary.

---

## Shared across every state charge page

These serve the timeline, guidance, and sealing sections on all state pages.
Fetched once, recorded once, reused with the citation on each page.

### Florida Rules of Criminal Procedure

Source: The Florida Bar's compilation, **updated 2026-07-13**, at
`https://www-media.floridabar.org/uploads/2026/07/2026_01-JUL-Criminal-Procedure-Rules-7-13-2026-1.pdf`

**Fetched 2026-08-13. Extracted locally with `pdftotext -layout` rather than
through a summariser**, because the fetcher returned the PDF as binary and a
summariser reading a 20,000 line document is exactly the truncation risk
HUNT-LIST instance 5 describes. The quotes below are from the extracted text.

**Rule 3.130(a), First Appearance:**
> "Except when previously released in a lawful manner, every arrested person
> must be taken before a judge, either in person or by audio-video communication
> technology in the discretion of the court, within 24 hours of arrest."

**Rule 3.130(b)(1)(B)**, advice only, not appointment:
> the judge must advise the defendant that "if unrepresented, that the defendant
> has a right to counsel, and, if financially unable to afford counsel, that
> counsel **will be appointed**"

**Rule 3.130(c)(1), Appointed Counsel**, which is where the duty actually sits:
> "When the judge determines that the defendant is entitled to court-appointed
> counsel and desires counsel, the judge **must immediately appoint counsel**."

**The pages previously cited 3.130(b) for the appointment duty three times.**
Advice is (b)(1)(B); appointment is (c)(1). Both are now recorded because both
are cited.

**Rule 3.130(c)(2)**, on retained counsel: the judge must "allow the defendant a
reasonable time to send for counsel and must, if necessary, postpone the first
appearance hearing for that purpose."

**Rule 3.130(d), Pretrial Detention or Release:**
> "The judge must proceed to determine pretrial detention or conditions of
> release under rule 3.132 or rule 3.131."

**Rule 3.134, Time for Filing Formal Charges.** Two tracks, and **custody
decides which**, which is the distinction the first draft of these pages got
wrong:

> "(a) Defendants in Custody. (1) The state must file formal charges on
> defendants in custody by information, or indictment ... within 30 days from the
> date on which defendants are arrested"
>
> "(2) If the defendants remain uncharged, the court on the 30th day and with
> notice to the state must: (A) Order that the defendants automatically be
> released on their own recognizance on the 33rd day unless the state files
> formal charges by that date; or (B) If good cause is shown by the state, order
> that the defendants automatically be released on their own recognizance on the
> 40th day"
>
> "(3) In no event may any defendants remain in custody beyond 40 days unless
> they have been formally charged with a crime."
>
> "(b) Defendants Not in Custody. (1) The state must file formal charges on
> defendants on pretrial release ... within 60 days ... (A) Order that the
> defendants automatically be released on their own recognizance on the 63rd day
> unless the state files formal charges by that date; or (B) If good cause is
> shown by the state, the Court may continue the defendant on pretrial release
> for up to an **additional 30 days** unless the state files formal charges."
>
> "(b)(2) On the expiration of the time period prescribed in subsection (1), and
> on motion with notice to the state, the court shall order that the defendant be
> released from all requirements of bail and all conditions of pretrial release
> unless the defendant has been formally charged with a crime."

**Both tracks carry a good-cause extension.** An earlier draft stated it for the
in-custody track and omitted it for the not-in-custody track, which is the same
defect as quoting a sentencing floor without its exception, on the rule the
pages foreground.

**Consequence for the pages.** Anyone who bonded out is on the **(b)** track at
60 and 63 days. TOOLS.md item 2 already recorded this: "For most arrestees,
meaning anyone who bonded out, the operative numbers are now 60 and 63, not 30
and 33." The pages lead with the track that applies to most readers.

**Rule 3.191(a), Speedy Trial without Demand:**
> "every person charged with a crime shall be brought to trial within 90 days if
> the crime charged is a misdemeanor, or within 175 days if the crime charged is
> a felony ... The time periods established by this subdivision shall commence
> when the person is formally charged with a crime as defined under subdivision
> (d)."

**Rule 3.191(d), Formally Charged:**
> "For the purposes of this rule, a person is formally charged with a crime by
> information, or by indictment, or in the case of alleged misdemeanors by
> whatever documents constitute a formal charge."

**The period runs from the formal charge, not from the arrest.** Rule 3.191(a)
also directs the reader to the remedy in subdivision (o), which is a recapture
procedure rather than automatic discharge, so the pages do not present 175 days
as a deadline that ends a case.

**Rule 3.191(b)**: a defendant may file a "Demand for Speedy Trial" and require
trial within 60 days.

### Sealing and expunction

**F.S. 943.0584**, `https://www.flsenate.gov/Laws/Statutes/2025/943.0584`,
fetched 2026-08-13.

Subsection (1), the definition that most readers get wrong:
> "conviction" means "a determination of guilt which is the result of a trial or
> the entry of a plea of guilty or nolo contendere, **regardless of whether
> adjudication is withheld**"

Subsection (2) opens:
> "A criminal history record is ineligible for a certificate of eligibility for
> expunction or a court-ordered expunction pursuant to s. 943.0585 or a
> certificate of eligibility for sealing or a court-ordered sealing pursuant to
> s. 943.059 **if the record is a conviction for** any of the following
> offenses:"

**The trigger is the conviction, not the charge.** Verified entries relevant to
the current page set, each confirmed by a targeted re-fetch naming the
subparagraph:

| Entry | Text | Page it governs |
|---|---|---|
| (v) | "A violation of the Florida Communications Fraud Act, as provided in s. 817.034" | embezzlement, white-collar wire fraud |
| (ff) | "Manufacturing a controlled substance in violation of chapter 893" | drug possession, drug trafficking |
| (gg) | "Drug trafficking, as defined in s. 893.135" | drug trafficking |
| **absent** | **s. 812.014 appears nowhere in subsection (2)** | grand theft, embezzlement |

**The chapter 893 entry is narrow.** It reaches manufacturing, not the chapter as
a whole, which was checked specifically because a whole-chapter reading would
have made simple possession permanently unsealable.

**F.S. 943.059**, `https://www.flsenate.gov/Laws/Statutes/2025/943.059`, fetched
2026-08-13. Subsection (1) sets cumulative conditions: the record is not
ineligible under s. 943.0584; the person has never been adjudicated guilty in
Florida of a criminal offense, or adjudicated delinquent for a felony or one of
**thirteen listed misdemeanors, of which petit theft is one**; the person has not
been adjudicated guilty of any of the acts stemming from the arrest; the person
is no longer under court supervision; and the person has never secured a prior
sealing or expunction. **Subsection (2) requires a certificate of eligibility
from the department before a petition is filed.**

---

## Grand theft and embezzlement

**F.S. 812.014**, `https://www.flsenate.gov/Laws/Statutes/2025/812.014`, fetched
2026-08-13.

**Paragraph (2)(c) is BOTH value tiers and an item list, and the split matters.**
Subparagraphs **1. to 3. are pure value tiers** ("Valued at $750 or more, but
less than $5,000", and so on). The items begin at **subparagraph 4.** An earlier
draft said the paragraph graded "by what was taken rather than by what it was
worth", which is false of the paragraph and contradicted the page's own table,
which cites (2)(c)1., 2. and 3. as the value rows.

**Paragraph (2)(g)**, verbatim:
> "It is grand theft of the second degree and a felony of the second degree ...
> if the property stolen is a firearm and the offender has previously been
> convicted of grand theft of a firearm under subparagraph (c)5."

So a firearm is not simply "third degree at any value": with a qualifying prior
it is **second degree**, and the 921.0022 chart ranks (2)(c)5. at **offense
level 6**, not at the level 2 to 4 band the value tiers occupy. The item list:
This is the correction that mattered most: the first draft of the grand theft
page said there were "two exceptions" to the $750 threshold and named two. The
verified list includes a will, codicil, or other testamentary instrument; a
firearm; a motor vehicle; a commercially farmed animal; a fire extinguisher
installed in a building at the time of the taking; any stop sign; anhydrous
ammonia; and "any amount of a controlled substance as defined in s. 893.02".

**Paragraph (2)(d)**, verified ranges. **(2)(d)1. is "$40 or more, but less than
$750"**, not "$40 or more". Property valued at $750 or more taken from a dwelling
falls under **(2)(d)2.** The first draft attached an unbounded "$40 or more" to a
level 2 row, which asserted a level the statute does not give for the upper part
of that range.

**F.S. 772.11(1)**, `https://www.flsenate.gov/Laws/Statutes/2025/772.11`, fetched
2026-08-13. The claimant must prove injury **"by clear and convincing
evidence"**, and then recovers "threefold the actual damages sustained ...
minimum damages in the amount of $200, and reasonable attorney's fees and court
costs." A written demand is required first, and a person who complies within 30
days "shall be given a written release from further civil liability."

**F.S. 817.034**, `https://www.flsenate.gov/Laws/Statutes/2025/817.034`, fetched
**2026-08-13**.

> 817.034(3)(d): "Scheme to defraud" means a systematic, ongoing course of
> conduct with intent to defraud one or more persons, or with intent to obtain
> property from one or more persons by false or fraudulent pretenses,
> representations, endorsements of nonconsenting parties, or promises or willful
> misrepresentations of a future act."
>
> 817.034(4)(a): "Any person who engages in a scheme to defraud and obtains
> property thereby commits organized fraud, punishable as follows: 1. If the
> amount of property obtained has an aggregate value of $50,000 or more, the
> person commits a felony of the first degree ... 2. ... $20,000 or more, but
> less than $50,000 ... felony of the second degree ... 3. ... less than
> $20,000 ... felony of the third degree"

**CORRECTION, and the reason this line is longer than the others.** This entry
previously read "carried from W1-02, fetched in the brief session." **That was
false.** W1-02 records the operative text of 817.034 as **UNVERIFIED**, noting
that only the ranking-chart rows were fetched, and the scheme-to-defraud
definition appears in no brief in the repository. The page nonetheless quoted it
in full.

The quotation turned out to be accurate, which is the exact defence this file
exists to refuse. **A verification record that asserts a fetch which did not
happen is worse than a missing record**, because a missing record leaves the
question open and a false one closes it. The adversarial pass caught it. It is
recorded here rather than quietly corrected, because the failure mode is the
file's own credibility and a silent fix would leave no trace that it can happen.

**F.S. 812.012(3)**, same source, fetched 2026-08-13. The definition that lets
chapter 812 reach this conduct without a separate offense:

> "'Obtains or uses' means any manner of: ... (d)1. Conduct previously known as
> stealing; larceny; purloining; abstracting; **embezzlement**; misapplication;
> misappropriation; conversion; or obtaining money or property by false
> pretenses, fraud, or deception"

The word is in the statute by name. The page previously said Florida had no
offense "under that name", which was both an unbounded negative and wrong.

### The two sentencing provisions, with the conditions the first draft dropped

**F.S. 921.0024(2)**, fetched 2026-08-13:
> "The lowest permissible sentence is any nonstate prison sanction in which the
> total sentence points equals or is less than 44 points, **unless the court
> determines within its discretion that a prison sentence, which may be up to the
> statutory maximums for the offenses committed, is appropriate.**"

**F.S. 775.082(10)**, fetched 2026-08-13. It applies to a **third degree felony
that is not a forcible felony** as defined in s. 776.08, and **excludes third
degree felony violations under chapter 810**. Where it applies and the total is
22 points or fewer the court must impose a nonstate prison sanction, and then:
> "**However, if the court makes written findings that a nonstate prison sanction
> could present a danger to the public, the court may sentence the offender to a
> state correctional facility pursuant to this section.**"

**Both are floors with express exceptions.** Quoting either without its
qualifier turns a rebuttable minimum into a promise about the outcome, which is
a compliance problem as well as an accuracy one. The pages carry the qualifiers.

---

## Standing rule for later pairs

A page may not state a statutory claim whose fetch is not recorded here or in
the brief it comes from. **"It turned out to be correct" is not verification**,
and the reason to write this down is that the first pair was in fact correct and
still failed the rail.
