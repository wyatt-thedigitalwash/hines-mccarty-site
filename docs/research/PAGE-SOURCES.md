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
`https://www-media.floridabar.org/uploads/2026/08/2026_01-JUL-Criminal-Procedure-Rules-7-13-2026-2.pdf`

**URL CORRECTED 2026-08-14.** The address this block originally recorded,
`.../uploads/2026/07/...-7-13-2026-1.pdf`, now returns HTTP 403 with an S3
AccessDenied body and is dead. The Bar re-uploaded the SAME July 13, 2026
edition under `/uploads/2026/08/...-2.pdf`, and the live link was recovered
from the Bar's rules index at `https://www.floridabar.org/rules/ctproc/`. A
bare request to either address 403s; a browser user agent gets HTTP 200 and
2,035,359 bytes. Two agents on different tasks re-fetched and confirmed the
edition is unchanged, so every quotation recorded below still stands. Noted
here because a dead URL in a source record is the failure D26 is about: the
record is consulted precisely by writers who have not opened the source, and a
link that does not resolve invites re-deriving a rule from memory.

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

**F.S. 812.014 subsection (2) IN FULL, and subsection (3)**, fetched
**2026-08-13** as a completeness request rather than paragraph by paragraph.

**Why the whole subsection.** This page's ladder was corrected twice and was
wrong both times, each time in the same way: a band was patched, and the patch
asserted a clean floor beneath it that another paragraph of the same subsection
contradicted. First (2)(f) was missing, so $100 to $749 was called second
degree. Then (2)(e)1. was missing, so "only below $100 does (3)(a) apply" was
asserted, which is false for a dwelling. **Patching one band at a time is what
produced both errors**, because subsection (2) grades on four different axes at
once and any partial reading leaves a false remainder.

The complete grading structure, verified:

| Paragraph | Trigger | Offense |
|---|---|---|
| F.S. 812.014(2)(a) | $100,000 or more | Grand theft 1st degree, first degree felony |
| F.S. 812.014(2)(b) | $20,000 to $99,999 | Grand theft 2nd degree, second degree felony |
| F.S. 812.014(2)(c)1.-3. | $750 to $19,999, in three tiers | Grand theft 3rd degree |
| F.S. 812.014(2)(c)4.-13. | The item list, no value floor | Grand theft 3rd degree |
| F.S. 812.014(2)(d)1. | $40 to $749 **from a dwelling** | Grand theft 3rd degree, a FELONY |
| F.S. 812.014(2)(d)2. | $750 or more from a dwelling | Grand theft 3rd degree |
| F.S. 812.014(2)(d)3. | From more than 20 dwellings | Grand theft 2nd degree |
| F.S. 812.014(2)(e)1. | **Less than $40 from a dwelling** | **Petit theft 1st degree** |
| F.S. 812.014(2)(e)2. | (e)1. with one prior theft conviction | **Third degree FELONY** |
| F.S. 812.014(2)(e)3. | (e)1. with two or more priors | Third degree felony |
| F.S. 812.014(2)(f) | $100 to $749, "except as provided in paragraph (d)" | Petit theft 1st degree |
| F.S. 812.014(2)(g) | Firearm, with a prior grand theft of a firearm | Grand theft 2nd degree |
| F.S. 812.014(3)(a) | "Theft of any property **not specified in subsection (2)**" | Petit theft 2nd degree |
| F.S. 812.014(3)(b) | Petit theft, one prior theft conviction | First degree misdemeanor |
| F.S. 812.014(3)(c) | Petit theft, two or more priors | Third degree felony |

Verbatim on the two that were missed:

> F.S. 812.014(2)(e)1.: "It is petit theft of the first degree and a misdemeanor of the first
> degree ... if the property stolen is valued at less than $40 and is taken from
> a dwelling as defined in s. 810.011(2) or from the unenclosed curtilage of a
> dwelling pursuant to s. 810.09(1)."
>
> F.S. 812.014(2)(f): "**Except as provided in paragraph (d)**, if the property stolen is
> valued at $100 or more, but less than $750, the offender commits petit theft of
> the first degree, punishable as a misdemeanor of the first degree, as provided
> in s. 775.082 or s. 775.083."

**Two consequences the page now carries.** The opening words of (2)(f) are part
of the rule: from a dwelling, $100 to $749 is a felony under (d)1., not a
misdemeanor. And (3)(a) never applies to a dwelling at any value, because (d)
and (e) between them cover the whole range.

> F.S. 812.014(3)(a): "Theft of any property not specified in subsection (2) is petit theft
> of the second degree and a misdemeanor of the second degree"
>
> F.S. 812.014(3)(b): "A person who commits petit theft and who has previously been convicted
> of any theft commits a misdemeanor of the first degree"
>
> F.S. 812.014(3)(c): "A person who commits petit theft and who has previously been convicted
> two or more times of any theft commits a felony of the third degree"

**F.S. 775.082(4)**, fetched 2026-08-13, so the misdemeanor rows state numbers
rather than pointing elsewhere:
> "(a) For a misdemeanor of the first degree, by a definite term of imprisonment
> not exceeding 1 year; (b) For a misdemeanor of the second degree, by a definite
> term of imprisonment not exceeding 60 days."

**A negative that was withdrawn.** An earlier entry here recorded that a fetch
"asserted that paragraph (2)(e) does not exist" and concluded that nothing would
be claimed about it. That was the wrong response to a bad fetch. The page went
on to make two claims that were only true if (2)(e) had no content below $100,
which is an implicit claim about the paragraph. **Declining to mention a
provision is not the same as declining to rely on it**, and W1-03 had carried a
verified (2)(e)2. ranking-chart row the whole time.

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

---

## Cleared retroactively by the unverified-claim gate, 2026-08-13

`scripts/check-unverified.mts` was added after W1 pair 1 hit the run's cap. On
its first run it flagged **six more citations across four pages written in
earlier sessions**: the same defect class, previously invisible, on pages nobody
had questioned. Each is now fetched and recorded. This is the gate paying for
itself on the day it was written.

**F.S. 893.135(4)**, substantial assistance, fetched 2026-08-13. Cited by
`/criminal-defense/drug-trafficking-defense`, flagged UNVERIFIED by W2-02.
> "The state attorney may move the sentencing court to reduce or suspend the
> sentence of any person who is convicted of a violation of this section and who
> provides substantial assistance in the identification, arrest, or conviction of
> any of that person's accomplices, accessories, coconspirators, or principals or
> of any other person engaged in trafficking in controlled substances. The
> arresting agency shall be given an opportunity to be heard in aggravation or
> mitigation in reference to any such motion. Upon good cause shown, the motion
> may be filed and heard in camera. The judge hearing the motion may reduce or
> suspend the sentence if the judge finds that the defendant rendered such
> substantial assistance."

**Note the mechanism, because the page must not overstate it.** The motion is the
state attorney's to file, and the reduction is the judge's to grant. Nothing in
the text gives a defendant a right to either.

**F.S. 775.087(1)**, weapon reclassification, fetched 2026-08-13. Cited by
`/criminal-defense/gun-crimes-defense`, flagged UNVERIFIED by W2-03.
> "Unless otherwise provided by law, whenever a person is charged with a felony,
> except a felony in which the use of a weapon or firearm is an essential
> element, and during the commission of such felony the defendant carries,
> displays, uses, threatens to use, or attempts to use any weapon or firearm, or
> during the commission of such felony the defendant commits an aggravated
> battery, the felony for which the person is charged shall be reclassified as
> follows:"

Reclassification: first degree to a life felony, second degree to first degree,
third degree to second degree. **The essential-element exception is part of the
rule and must travel with it.**

**F.S. 817.568(2)(a) and (2)(b)**, fetched 2026-08-13. Cited by
`/white-collar-defense/identity-theft`, flagged UNVERIFIED by W2-06.
> F.S. 817.568(2)(a): "Any person who willfully and without authorization fraudulently uses,
> or possesses with intent to fraudulently use, personal identification
> information concerning another person without first obtaining that person's
> consent, commits the offense of fraudulent use of personal identification
> information, which is a felony of the third degree"
>
> F.S. 817.568(2)(b): second degree felony where "the pecuniary benefit, the value of the
> services received, the payment sought to be avoided, or the amount of the
> injury or fraud perpetrated is $5,000 or more or if the person fraudulently
> uses the personal identification information of 10 or more persons, but fewer
> than 20 persons, without their consent."

**18 U.S.C. 1961(1)**, fetched 2026-08-13 from uscode.house.gov. Cited by
`/federal-criminal-defense/money-laundering`, flagged UNVERIFIED by FED-01 and
WC-03. The federal money laundering page describes 1956(c)(7)(A) as
incorporating this list, which is verified, and **does not enumerate its
contents**, which the brief said not to do. The seven categories open:

| | Opening words |
|---|---|
| (A) | "any act or threat involving murder, kidnapping, gambling..." |
| (B) | "any act which is indictable under any of the following provisions of title 18..." |
| (C) | "any act which is indictable under title 29, United States Code..." |
| (D) | "any offense involving fraud connected with a case under title 11..." |
| (E) | "any act which is indictable under the Currency and Foreign Transactions Reporting Act..." |
| (F) | "any act which is indictable under the Immigration and Nationality Act..." |
| (G) | "any act that is indictable under any provision listed in section 2332b(g)(5)(B)" |

---

## Pair 2, fetched BEFORE writing, 2026-08-13

The first use of the pre-write rule as intended. `npm run prewrite -- W2-02-drug-trafficking.md W2-03-gun-crimes.md` named two subsections the briefs had flagged and no fetch covered. Both were fetched before a word of either page was touched, which is the discipline the previous four review rounds existed to force.

**F.S. 790.23(1)**, `https://www.flsenate.gov/Laws/Statutes/2025/790.23`, fetched 2026-08-13.

Fetched in full at F.S. 790.23(1)(a), F.S. 790.23(1)(b), F.S. 790.23(1)(c), F.S. 790.23(1)(d) and F.S. 790.23(1)(e). W2-03 had read the subsection as containing criteria (a) to (e) without reading the criteria.

> "It is unlawful for any person to own or to have in his or her care, custody, possession, or control any firearm, ammunition, or electric weapon or device, or to carry a concealed weapon, including a tear gas gun or chemical weapon or device, if that person has been:
> (a) Convicted of a felony in the courts of this state;
> (b) Found, in the courts of this state, to have committed a delinquent act that would be a felony if committed by an adult and such person is under 24 years of age;
> (c) Convicted of or found to have committed a crime against the United States which is designated as a felony;
> (d) Found to have committed a delinquent act in another state, territory, or country that would be a felony if committed by an adult and which was punishable by imprisonment for a term exceeding 1 year and such person is under 24 years of age; or
> (e) Found guilty of an offense that is a felony in another state, territory, or country and which was punishable by imprisonment for a term exceeding 1 year."

**Two things the page must carry, both of which a partial reading would have missed.** The prohibition is not limited to firearms: it reaches ammunition, electric weapons, and carrying a concealed weapon. And paragraphs (b) and (d) are age-limited to people under 24, so a juvenile adjudication does not disqualify indefinitely.

**18 U.S.C. 922(g)**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section922`, fetched 2026-08-13.

W2-03 had recorded this as blocked by an allowlist gap; D2 resolved that gap and the fetch is now routine. Nine categories: a conviction punishable by more than one year; fugitive from justice; unlawful user of or addicted to a controlled substance; adjudicated as a mental defective or committed; certain aliens; dishonourable discharge; renounced citizenship; subject to a qualifying domestic violence restraining order; and a misdemeanour crime of domestic violence.

**Two constraints that travel with it.** The federal predicate is "punishable by imprisonment for a term exceeding one year", which is not the same test as Florida's "convicted of a felony", so the two prohibitions do not cover identical populations. And the controlled-substance limb at paragraph (3) is the subject of live constitutional litigation, which is a C12-B byline-class matter: the subsection text is quotable, its application to a state-authorised medical marijuana patient is not, and that stays off the page.


## Pair 1 round 6, fetched BEFORE the fixes were written, 2026-08-14

The second use of the pre-write rule as intended, and the one that proves it.
A round-6 adversarial review of grand theft and embezzlement returned 13
blocking findings. Six of them rested on statutes the fact layer does not
cover, because the statute tables record provisions that ASSIGN A DEGREE and
these are eligibility rules, limitations periods, and a procedural rule. So
they were fetched first, and the fetches changed the fixes: they confirmed the
reviewer's conclusion in every case and corrected its stated MECHANISM in two,
which is exactly the outcome that would have been written into the pages as
error had the fixes been drafted from the review alone.

### F.S. 775.15, criminal statute of limitations

Source: `https://www.flsenate.gov/Laws/Statutes/2025/775.15`. Fetched 2026-08-14 via curl (raw HTML, tags stripped locally to plain text; no summariser in the loop). Whole section read start to finish: subsections (1) through (22) plus the History and Note lines. Cross-checked s. 817.5695 (also by curl) to identify what subsection (10)(a) covers, since (10)(b) piggybacks on it.

**F.S. 775.15(2), intro and (a)-(b)**

> (2)  Except as otherwise provided in this section, prosecutions for other offenses are subject to the following periods of limitation: (a)  A prosecution for a felony of the first degree must be commenced within 4 years after it is committed. (b)  A prosecution for any other felony must be commenced within 3 years after it is committed.

**F.S. 775.15(2)(c)-(d)**

> (c)  A prosecution for a misdemeanor of the first degree must be commenced within 2 years after it is committed. (d)  A prosecution for a misdemeanor of the second degree or a noncriminal violation must be commenced within 1 year after it is committed.

**F.S. 775.15(3)**

> (3)  An offense is committed either when every element has occurred or, if a legislative purpose to prohibit a continuing course of conduct plainly appears, at the time when the course of conduct or the defendant's complicity therein is terminated. Time starts to run on the day after the offense is committed.

**F.S. 775.15(4)(a)**

> (4)(a)  Prosecution on a charge on which the defendant has previously been arrested or served with a summons is commenced by the filing of an indictment, information, or other charging document.

**F.S. 775.15(4)(b)**

> (b)  A prosecution on a charge on which the defendant has not previously been arrested or served with a summons is commenced when either an indictment or information is filed, provided the capias, summons, or other process issued on such indictment or information is executed without unreasonable delay. In determining what is reasonable, inability to locate the defendant after diligent search or the defendant's absence from the state shall be considered. The failure to execute process on or extradite a defendant in another state who has been charged by information or indictment with a crime in this state shall not constitute an unreasonable delay.

**F.S. 775.15(4)(c)**

> (c)  If, however, an indictment or information has been filed within the time period prescribed in this section and the indictment or information is dismissed or set aside because of a defect in its content or form after the time period has elapsed, the period for commencing prosecution shall be extended 3 months from the time the indictment or information is dismissed or set aside.

**What it establishes.**

- The reviewer is right and the page sentence is wrong as written. Under (2), the clock runs from commission (4 years first-degree felony, 3 years any other felony), and (3) says "Time starts to run on the day after the offense is committed." Under (4)(a)-(b), prosecution is only "commenced" when the indictment, information, or other charging document is filed. So the pre-charge investigative period is precisely the window during which the limitations period is running. A deadline runs during it -- indeed the only thing that stops it is the act that ends that stage.

- The page can keep the Rules half only if it is sourced elsewhere. 775.15 says nothing about the Rules of Criminal Procedure; it is a substantive time bar. Do not cite 775.15 for the proposition that no rule governs the pre-charge stage. Note also that (4)(b) does impose one statutory timing duty even after filing: process must be "executed without unreasonable delay," so it is not accurate to say nothing at all constrains the state's pace.

- There is no employer-specific and no theft-specific trigger, tolling, or discovery rule anywhere in the section. Nothing keys off the employment relationship, the employer's audit, the internal investigation, or the date the employer noticed the loss, as such. An embezzlement page must not imply the clock starts when the employer discovers the shortfall. The only discovery-based relief is (12)(a), and it is conditional (see below).

- (12)(a) is an extension, not a start date, and it is doubly capped. It applies only after the ordinary period has already expired, gives only 1 year from discovery by an aggrieved party (or that party's non-complicit legal representative), and "in no case shall this provision extend the period of limitation otherwise applicable by more than 3 years." A common error is describing Florida as having a discovery rule for employee theft; the text gives a short backstop measured from the aggrieved party's discovery, not the state's, and caps the total add-on at 3 years.

- (12)(a) is also gated on the charged offense having fraud or breach of fiduciary obligation as a "material element." Plain theft/embezzlement under ch. 812 is not automatically within it -- whether fraud or fiduciary breach is a material element of the specific charge is a legal question, not a given. Copy should not assume every embezzlement charge gets the extension.

- There is a second, more generous fraud/fiduciary discovery provision that a partial read misses entirely: (10)(b) gives 5 years after discovery, with no 3-year cap, for "any offense, a material element of which is either fraud or a breach of fiduciary obligation." But its opening condition is "If the period prescribed in paragraph (a) has expired" -- and (10)(a) is the 5-year period for s. 817.5695 (exploitation of a person 65 or older), s. 825.102, and s. 825.103. Reading (10)(b)'s "any offense" language in isolation, without the paragraph (a) gate, would badly overstate the limitations period for an ordinary workplace embezzlement.


### F.S. 943.0595, automatic sealing

Source: `https://www.flsenate.gov/Laws/Statutes/2025/943.0595`. 2026-08-14, full section retrieved with curl (HTML stripped to text) rather than a summarizing fetcher; entire section read start to finish, plus the cross-referenced provisions F.S. 776.08, 943.0435(1)(h)1.a.(I), 943.059(6), 916.145(1), and 985.19 fetched the same way.

**F.S. 943.0595(1) (2025) — RULEMAKING**

> 943.0595 Automatic sealing of criminal history records; confidentiality of related court records.—(1) RULEMAKING.—Notwithstanding any law dealing generally with the preservation and destruction of public records, the department shall adopt rules addressing the automatic sealing of any criminal history record of a minor or an adult described in this section.

**F.S. 943.0595(2)(a) (2025) — ELIGIBILITY: the exclusion and the four triggering events**

> (2) ELIGIBILITY.—(a) The department shall automatically seal a criminal history record that does not result from an indictment, information, or other charging document for a forcible felony as defined in s. 776.08 or for an offense enumerated in s. 943.0435(1)(h)1.a.(I), if: 1. An indictment, information, or other charging document was not filed or issued in the case giving rise to the criminal history record. 2. An indictment, information, or other charging document was filed in the case giving rise to the criminal history record, but was dismissed or nolle prosequi by the state attorney or statewide prosecutor or was dismissed by a court of competent jurisdiction as to all counts. However, a person is not eligible for automatic sealing under this section if the dismissal was pursuant to s. 916.145 or s. 985.19. 3. A not guilty verdict was rendered by a judge or jury as to all counts. However, a person is not eligible for automatic sealing under this section if the defendant was found not guilty by reason of insanity. 4. A judgment of acquittal was rendered by a judge as to all counts.

**F.S. 943.0595(2)(b) (2025) — no numerical limit**

> (b) There is no limitation on the number of times a person may obtain an automatic sealing for a criminal history record described in paragraph (a).

**F.S. 943.0595(3)(a)-(b) (2025) — PROCESS: who acts, and the court record**

> (3) PROCESS FOR AND EFFECT OF AUTOMATIC SEALING.—(a) Upon the disposition of a criminal case resulting in a criminal history record eligible for automatic sealing under paragraph (2)(a), the clerk of the court shall transmit a certified copy of the disposition of the criminal history record to the department, which shall seal the criminal history record upon receipt of the certified copy. (b) The department shall notify the clerk of the court upon the sealing of the criminal history record as provided in paragraph (a). Upon such notification, the clerk of the court must automatically keep the related court record in the case giving rise to the department’s sealing of the criminal history record confidential and exempt from s. 119.071(1) and s. 24(a), Art. I of the State Constitution.

**F.S. 943.0595(3)(c)-(d) (2025) — the record is not destroyed, and effect equals 943.059 sealing**

> (c) Automatic sealing of a criminal history record and making the related court record confidential and exempt does not require sealing by other criminal justice agencies, or that such record be surrendered to the court, and such record shall continue to be maintained by the department and other criminal justice agencies. (d) Except as provided in this section, automatic sealing of a criminal history record and making the related court record confidential and exempt shall have the same effect, and the department and the clerk of the court may disclose such a record in the same manner, as a record sealed under s. 943.059.

**F.S. 776.08 (2025) — the forcible felony carve-out list**

> 776.08 Forcible felony.—“Forcible felony” means treason; murder; manslaughter; sexual battery; carjacking; home-invasion robbery; robbery; burglary; arson; kidnapping; aggravated assault; aggravated battery; aggravated stalking; aircraft piracy; unlawful throwing, placing, or discharging of a destructive device or bomb; and any other felony which involves the use or threat of physical force or violence against any individual.

**What it establishes.**

- The page's premise is wrong on its face. 943.0595 seals records WITHOUT any court order and WITHOUT any action by the person: the clerk transmits a certified copy of the disposition and FDLE 'shall seal the criminal history record upon receipt.' There is no petition, no certificate of eligibility, no $75 fee, and no judicial discretion, all of which the court-ordered route in 943.059(2)-(4) requires. Copy saying records are public 'unless a court seals or expunges them' omits the entire non-judicial route.

- The reviewer is also too broad. Automatic sealing is NOT triggered by every dismissal or acquittal. Buried in the subparagraphs, past the first sentence, are two disqualifiers a remembered reading loses: (2)(a)2 excludes dismissals 'pursuant to s. 916.145 or s. 985.19' (incompetency dismissals), and (2)(a)3 excludes a defendant 'found not guilty by reason of insanity.'

- 'As to all counts' is load-bearing and appears three times, in (2)(a)2, 3, and 4. A multi-count case where one count survives to conviction while the others are dropped gets nothing under this section. Only subparagraph 1 (no charging document filed or issued at all) has no all-counts qualifier.

- The forcible-felony carve-out is not a closed list. 776.08 ends with 'any other felony which involves the use or threat of physical force or violence against any individual,' so no page should present a finite roster of excluded charges as complete.

- The exclusion is keyed to the CHARGING DOCUMENT, not the arrest charge. The record must 'not result from an indictment, information, or other charging document for a forcible felony ... or for an offense enumerated in s. 943.0435(1)(h)1.a.(I).' Read literally, this creates real tension with (2)(a)1, which covers cases where no charging document was ever filed: in those cases there is no charging document 'for' anything. Do not let copy assert either that a no-file forcible-felony arrest is or is not auto-sealed; the text does not resolve it cleanly and the attorney should decide how to phrase it.

- The second carve-out points to 943.0435(1)(h)1.a.(I) only, which is the sexual-offender predicate OFFENSE LIST (794.011 sexual battery, 794.05, 800.04, 827.071, 787.01/787.02 and 787.025(2)(c) where the victim is a minor, 787.06 human trafficking subsections, 810.145(8), 825.1025, the 847.x series, 895.03 with a written finding, 916.1075(2), 985.701(1), and others). It does NOT import sub-sub-subparagraph (II), which carries the conviction-and-release-date conditions. The cross-reference borrows the list of offenses, nothing else.


### F.S. 943.059(1) eligibility conditions, and F.S. 943.0584(1)

Source: `https://www.flsenate.gov/Laws/Statutes/2025/943.059 and https://www.flsenate.gov/Laws/Statutes/2025/943.0584`. 2026-08-14, curl of both flsenate.gov 2025 statute pages, HTML stripped to text locally so no summariser sat between the statute and the quotes. Whole section read for both: 943.059 subsections (1) through (6) plus History; 943.0584 subsections (1) and (2)(a)-(hh) plus History. Verified 943.0584 has no subsection (3) and neither section has flush text after its final subparagraph.

**F.S. 943.059(1), opening flush words**

> 943.059 Court-ordered sealing of criminal history records.—(1) ELIGIBILITY.—A person is eligible to petition a court to seal a criminal history record when:

**F.S. 943.059(1)(a)**

> (a) The criminal history record is not ineligible for court-ordered sealing under s. 943.0584.

**F.S. 943.059(1)(b), lead-in and subparagraphs 1.-13. in full**

> (b) The person has never, before the date the application for a certificate of eligibility is filed, been adjudicated guilty in this state of a criminal offense, or been adjudicated delinquent in this state for committing any felony or any of the following misdemeanor offenses, unless the record of such adjudication of delinquency has been expunged pursuant to s. 943.0515: 1. Assault, as defined in s. 784.011; 2. Battery, as defined in s. 784.03; 3. Assault on a law enforcement officer, a firefighter, or other specified officers, as defined in s. 784.07(2)(a); 4. Carrying a concealed weapon, as defined in s. 790.01(2); 5. Open carrying of a weapon, as defined in s. 790.053; 6. Unlawful possession or discharge of a weapon or firearm at a school-sponsored event or on school property, as defined in s. 790.115; 7. Unlawful use of destructive devices or bombs, as defined in s. 790.1615(1); 8. Unlawful possession of a firearm by a minor, as defined in s. 790.22(5); 9. Exposure of sexual organs, as defined in s. 800.03; 10. Arson, as defined in s. 806.031(1); 11. Petit theft, as defined in s. 812.014(3); 12. Neglect of a child, as defined in s. 827.03(1)(e); or 13. Cruelty to animals, as defined in s. 828.12(1).

**F.S. 943.059(1)(c)**

> (c) The person has not been adjudicated guilty of, or adjudicated delinquent for committing, any of the acts stemming from the arrest or alleged criminal activity to which the petition to seal pertains.

**F.S. 943.059(1)(d) and (1)(e)**

> (d) The person is no longer under court supervision applicable to the disposition of arrest or alleged criminal activity to which the petition to seal pertains. (e) The person has never secured a prior sealing or expunction of a criminal history record under this section, s. 943.0585, former s. 893.14, former s. 901.33, or former s. 943.058.

**F.S. 943.059(2)(a)1. and (2)(b)**

> (a) The department shall issue a certificate of eligibility for sealing to a person who is the subject of a criminal history record if that person: 1. Satisfies the eligibility criteria in paragraphs (1)(a)-(e) and is not ineligible for court-ordered sealing under s. 943.0584. ... (b) A certificate of eligibility for sealing is valid for 12 months after the date stamped on the certificate when issued by the department. After that time, the petitioner must reapply to the department for a new certificate of eligibility. The status of the applicant and the law in effect at the time of the renewal application determine the petitioner's eligibility.

**What it establishes.**

- THE REVIEWER IS RIGHT ON THE OUTCOME AND WRONG ON THE MECHANISM. 943.059(1)(c) does disqualify on 'any of the acts stemming from the arrest or alleged criminal activity' -- but its trigger is being 'adjudicated guilty of, or adjudicated delinquent for committing,' not 'convicted of.' The expanded conviction definition in 943.0584(1) is expressly scoped 'As used in this section,' so it does not travel into 943.059(1)(c). A withheld adjudication therefore does NOT trip (1)(c). Any page or brief that says 'a withheld adjudication on a companion count trips 943.059(1)(c)' is wrong.

- THE 943.0584(1) DEFINITION CUTS THE OTHER WAY FROM WHAT IS USUALLY ASSUMED. Because 'conviction' there includes a plea 'regardless of whether adjudication is withheld,' an 817.034 count resolved by a withheld adjudication is STILL a conviction for 943.0584(2)(v) and still makes the record permanently ineligible. The definition is not a trap that pulls withheld adjudications into 943.059's eligibility conditions; it is a rail that stops a withheld adjudication from rescuing a listed offense.

- THE PAGE'S THEFT-VS-817.034 CONTRAST IS MISLEADING FOR A DIFFERENT REASON THAN THE REVIEWER GAVE: 943.059(4)(c) makes the unit of sealing 'one arrest or one incident of alleged criminal activity,' not one count. If the theft and the organized fraud arise from the same arrest, the record is a single ineligible record under 943.059(1)(a) plus 943.0584(2)(v); the theft count's own sealability never gets reached. Note 4(c)'s last sentence does allow sealing 'only a portion of a criminal history record pertaining to one arrest,' which is a partial-sealing power, but it does not cure the (1)(a) ineligibility of the record itself.

- 943.059(1)(b) IS TWO DIFFERENT BARS AND THE MISDEMEANOR LIST ATTACHES TO ONLY ONE OF THEM. The adult prong is 'never ... been adjudicated guilty in this state of a criminal offense' -- ANY criminal offense, felony or misdemeanor, with no list limiting it. The thirteen enumerated misdemeanors qualify only the juvenile prong, 'been adjudicated delinquent in this state for committing any felony or any of the following misdemeanor offenses.' A remembered reading that treats the thirteen-item list as the universe of disqualifying adult priors gets this backwards.

- 943.059(1)(b) IS ALSO STATE-LIMITED AND TIME-STAMPED: both prongs say 'in this state,' so an out-of-state adjudication of guilt does not trigger (1)(b); and the cutoff is 'before the date the application for a certificate of eligibility is filed,' not the petition date or the arrest date. The juvenile prong has an escape hatch (1)(b) does not give adults: 'unless the record of such adjudication of delinquency has been expunged pursuant to s. 943.0515.'

- THE TWO SECTIONS USE DIFFERENT STATUTORY CITES FOR THE SAME-SOUNDING OFFENSES AND MUST NOT BE MERGED INTO ONE TABLE. Arson in 943.059(1)(b)10. is 's. 806.031(1)'; arson in 943.0584(2)(p) is 's. 806.01'. Assault and battery in 943.059(1)(b)1.-2. are the bare offenses; in 943.0584(2)(f) they count only 'of one family or household member by another family or household member.' The lists do different jobs: (1)(b) is a prior-record bar, 943.0584(2) is an offense-of-record bar.


### F.S. 772.11(1), civil theft demand, and F.S. 817.034(4)(f)

Source: `https://www.flsenate.gov/Laws/Statutes/2025/772.11 (and https://www.flsenate.gov/Laws/Statutes/2025/817.034)`. 2026-08-14, via curl to flsenate.gov (2025 Florida Statutes), full HTML retrieved and tag-stripped locally so no summariser sat between the statute text and this report. Both sections read end to end, including History lines.

**F.S. 772.11(1) (2025), full text of the subsection**

> Any person who proves by clear and convincing evidence that he or she has been injured in any fashion by reason of any violation of ss. 812.012-812.037 or s. 825.103(1) has a cause of action for threefold the actual damages sustained and, in any such action, is entitled to minimum damages in the amount of $200, and reasonable attorney's fees and court costs in the trial and appellate courts. Before filing an action for damages under this section, the person claiming injury must make a written demand for $200 or the treble damage amount of the person liable for damages under this section. If the person to whom a written demand is made complies with such demand within 30 days after receipt of the demand, that person shall be given a written release from further civil liability for the specific act of theft or exploitation by the person making the written demand. Any person who has a cause of action under this section may recover the damages allowed under this section from the parents or legal guardian of any unemancipated minor who lives with his or her parents or legal guardian and who is liable for damages under this section. Punitive damages may not be awarded under this section. The defendant is entitled to recover reasonable attorney's fees and court costs in the trial and appellate courts upon a finding that the claimant raised a claim that was without substantial fact or legal support. In awarding attorney's fees and costs under this section, the court may not consider the ability of the opposing party to pay such fees and costs. This section does not limit any right to recover attorney's fees or costs provided under any other law.

**F.S. 772.11(1), the release sentence isolated**

> If the person to whom a written demand is made complies with such demand within 30 days after receipt of the demand, that person shall be given a written release from further civil liability for the specific act of theft or exploitation by the person making the written demand.

**F.S. 772.11(2)**

> For purposes of a cause of action arising under this section, the term "property" does not include the rights of a patient or a resident or a claim for a violation of such rights.

**F.S. 772.11(3)**

> This section does not impose civil liability regarding the provision of health care, residential care, long-term care, or custodial care at a licensed facility or care provided by appropriately licensed personnel in any setting in which such personnel are authorized to practice.

**F.S. 772.11(4)**

> The death of an elderly or disabled person does not cause the court to lose jurisdiction of any claim for relief for theft or exploitation when the victim of the theft or exploitation is an elderly or disabled person.

**F.S. 772.11(5)**

> In a civil action under this section in which an elderly or disabled person is a party, the elderly or disabled person may move the court to advance the trial on the docket. The presiding judge, after consideration of the age and health of the party, may advance the trial on the docket. The motion may be filed and served with the civil complaint or at any time thereafter.

**What it establishes.**

- The reviewer is correct: the release carries two limiting phrases the page dropped. It is a release "from further civil liability for the specific act of theft or exploitation" and it is given "by the person making the written demand." It is not a release from liability generally, not a release from criminal exposure, and not a release that binds anyone other than that one demanding claimant. A second victim, a co-owner, an insurer, or the State is unaffected by it.

- Scope limiter one, subject matter: "for the specific act of theft or exploitation." A course of conduct with multiple takings is not swept in by complying with a demand aimed at one of them. A page saying "a written release from further civil liability" full stop is materially broader than the statute.

- Scope limiter two, who it runs to: "by the person making the written demand." The release is given by the demanding party, so it can only extinguish that party's claim. Nothing in 772.11 makes it a release as to the world.

- The 30 days runs from RECEIPT, not from mailing or dating: "within 30 days after receipt of the demand." A page that says "within 30 days of the letter" gets the trigger wrong.

- "That is the whole of what the text gives" is false. Subsection (1) alone also sets a clear-and-convincing burden of proof, fixes the predicate offenses as ss. 812.012-812.037 or s. 825.103(1), creates parent/legal-guardian liability for damages caused by an unemancipated minor living with them, bars punitive damages outright, gives the DEFENDANT fees and costs on a finding the claim "was without substantial fact or legal support," forbids the court from considering ability to pay when awarding fees, and preserves other fee statutes. Any of these is as page-worthy as the release.

- The demand amount is a floor-or-treble choice, phrased oddly: "a written demand for $200 or the treble damage amount of the person liable for damages under this section." The statute does not say "treble your actual damages" in the way summaries usually render it; quote it rather than restate it.


### Fla. R. Crim. P. 3.111(a), appointment of counsel

Source: `https://www-media.floridabar.org/uploads/2026/08/2026_01-JUL-Criminal-Procedure-Rules-7-13-2026-2.pdf`. 2026-08-14. NOTE: the URL recorded in docs/research/PAGE-SOURCES.md (https://www-media.floridabar.org/uploads/2026/07/2026_01-JUL-Criminal-Procedure-Rules-7-13-2026-1.pdf) now returns HTTP 403 / S3 AccessDenied and is dead. The Bar re-uploaded the same edition under /uploads/2026/08/...-2.pdf; the live link was recovered from the Bar's rules index at https://www.floridabar.org/rules/ctproc/. Bare 

**Fla. R. Crim. P. 3.111(a), When Counsel Provided**

> (a) When Counsel Provided. A person entitled to appointment of counsel as provided herein shall have counsel appointed when the person is formally charged with an offense, or as soon as feasible after custodial restraint, or at the first appearance before a committing judge, whichever occurs earliest.

**Fla. R. Crim. P. 3.111(b)(1), Cases Applicable**

> (1) Counsel shall be provided to indigent persons in all prosecutions for offenses punishable by incarceration including appeals from the conviction thereof. In the discretion of the court, counsel does not have to be provided to an indigent person in a prosecution for a misdemeanor or violation of a municipal ordinance if the judge, at least 15 days prior to trial, files in the cause a written order of no incarceration certifying that the defendant will not be incarcerated in the case pending trial or probation violation hearing, or as part of a sentence after trial, guilty or nolo contendere plea, or probation revocation. This 15-day requirement may be waived by the defendant or defense counsel.

**Fla. R. Crim. P. 3.111(b)(1)(C)**

> (C) If the court withdraws its order of no incarceration, it shall immediately appoint counsel if the defendant is otherwise eligible for the services of the public defender. The court may not withdraw its order of no incarceration once the defendant has been found guilty or pled nolo contendere.

**Fla. R. Crim. P. 3.111(b)(2)**

> (2) Counsel may be provided to indigent persons in all proceedings arising from the initiation of a criminal action against a defendant, including postconviction proceedings and appeals therefrom, extradition proceedings, mental competency proceedings, and other proceedings that are adversary in nature, regardless of the designation of the court in which they occur or the classification of the proceedings as civil or criminal.

**Fla. R. Crim. P. 3.111(b)(4), definition of indigent**

> (4) "Indigent" shall mean a person who is unable to pay for the services of an attorney, including costs of investigation, without substantial hardship to the person or the person's family; "partially indigent" shall mean a person unable to pay more than a portion of the fee charged by an attorney, including costs of investigation, without substantial hardship to the person or the person's family.

**Fla. R. Crim. P. 3.111(b)(5), preconditions to appointment**

> (5) Before appointing a public defender, the court shall: (A) inform the accused that, if the public defender or other counsel is appointed, a lien for the services rendered by counsel may be imposed as provided by law; (B) make inquiry into the financial status of the accused in a manner not inconsistent with the guidelines established by section 27.52, Florida Statutes. The accused shall respond to the inquiry under oath; (C) require the accused to execute an affidavit of insolvency as required by section 27.52, Florida Statutes.

**What it establishes.**

- THE REVIEWER IS RIGHT; THE PAGE IS WRONG. 3.111(a) is an earliest-of-three rule: 'formally charged with an offense, or as soon as feasible after custodial restraint, or at the first appearance before a committing judge, whichever occurs earliest.' A page saying appointed counsel 'arrives at first appearance after an arrest' names the trigger that, after an arrest, is almost always the LAST of the three to occur, since custodial restraint precedes first appearance by up to 24 hours under 3.130(a).

- BUT THE REVIEWER'S PHRASING IS ALSO IMPRECISE, AND THE PAGE MUST NOT COPY IT. The custody trigger is 'as soon as feasible after custodial restraint,' not 'at custodial restraint.' 'As soon as feasible' is a qualified standard, not an instant. Copy in the reviewer's words would overpromise.

- 3.111(a) IS NOT SELF-EXECUTING. It opens 'A person entitled to appointment of counsel as provided herein,' which routes the reader to (b)(1): counsel is guaranteed only 'in all prosecutions for offenses punishable by incarceration,' and even then a judge may switch it off for a misdemeanor or municipal ordinance violation by filing a written order of no incarceration at least 15 days before trial. Any flat 'you will be given a lawyer' claim is wrong for that class of case.

- ON THE ACTUAL QUESTION THE PAGE ASKS -- a reader not in custody and not charged -- 3.111 DOES NOT DELIVER WHAT THE PAGE WANTS. Every operative provision says 'defendant.' The closest hook, (c)(4)(B), governs a defendant 'at liberty on bail or otherwise not in custody,' which presupposes an existing case; and (b)(2)'s discretionary grant is expressly limited to 'proceedings arising from the initiation of a criminal action against a defendant.' There is no provision in Rule 3.111 appointing counsel to a person who has been neither charged nor arrested. If the page tells a pre-charge reader they can get an appointed lawyer, that is unsupported by this rule and should be cut or reframed as retained counsel.

- (c)(4)(B) IS ALSO WEAKER THAN IT LOOKS ONE CLAUSE EARLIER. The gateway in (c)(4) is 'may interview' -- discretionary on the public defender. Only after the PD acts does the mandatory language kick in ('shall immediately seek a formal judicial determination of indigency ... it shall immediately appoint counsel'). The chain starts with a discretionary step, so the outcome cannot be stated as automatic.

- A WHOLE MECHANISM SITS BEFORE ANY JUDGE, WHICH THE PAGE APPARENTLY OMITS. 3.111(c)(1)-(2) puts a duty on the booking officer at the jail: 'immediately advise the defendant ... of the right to counsel' and that 'one will be provided immediately at no charge,' and on request 'immediately and effectively place the defendant in communication with the (office of) public defender.' This is the practically important early touchpoint after arrest and it independently refutes the page's first-appearance framing.


### Pair 2 writing, fetches performed by the writers, 2026-08-14

Both pair-2 pages were written by assembly from the audited statute tables.
Two gaps in the fact layer surfaced during writing and were fetched by the
writers rather than worked around. Recorded here so the pages rest on the
record instead of on an agent's note.

**F.S. 790.01**, `https://www.flsenate.gov/Laws/Statutes/2025/790.01`, fetched 2026-08-14.

Not in the statute-table set, and W2-03 Section 6 recorded it UNVERIFIED,
yet the legacy gun crimes page already asserted the permitless-carry scheme
and the 790.01(4) burden provision from no recorded fetch. Fetched in full.
Every 790.01 claim on the rewritten page comes from that text: (1)(a) and
(1)(b) authorization including the 790.06 criteria, (2) first degree
misdemeanor for a concealed weapon or electric weapon or device, (3) third
degree felony for a concealed firearm, (4) the state's burden to prove
non-licensure and ineligibility as elements of the offense, (5)(a) the
mandatory-evacuation exception with its 48 hour definition, (5)(b) the
self-defense chemical spray and nonlethal stun gun exception, and (6).

**F.S. 893.135(2), (3) and (6)**, `https://www.flsenate.gov/Laws/Statutes/2025/893.135`, fetched 2026-08-14.

The audited table records these subsections as read but produced no rows for
them, because they assign no degree. They carry three things the trafficking
page needs: (2), the knowingly definition, which reaches a person who intends
to possess any listed substance regardless of which one is in fact possessed;
(3), no suspension, deferral or withholding of adjudication or sentence, no
parole and no discretionary early release before the mandatory minimum is
served except pardon, executive clemency, or conditional medical release under
s. 947.149; and (6), the mixture rule, under which the weight of the
controlled substance is the total weight of the mixture and multiple mixtures
of the same substance are aggregated. The brief had flagged (6) UNVERIFIED and
an assistant question depended on it.

**A research claim was narrowed by the fetch, and this is the part worth
keeping.** W2-02 recorded the C9 as "no tier is ranked below offense level 7",
taken from a representative sample. Checked against the whole-section
921.0022 table, 48 chart entries cite 893.135, distributed 18 at level 7, 15
at level 8 and 15 at level 9, none lower. But several tiers appear in NO chart
entry at all: flunitrazepam at (1)(g)1.c., all three GBL tiers at (1)(i), and
all three LSD tiers at (1)(l). The page therefore does not claim the chart
ranks them. It rests the floor on F.S. 921.0023(3), which places an unlisted
first degree felony in level 7, a verified row in fs-921-0023.ts. The brief's
claim was true and its stated basis was incomplete.

## Legacy sweep, fetched BEFORE the pages shipped, 2026-08-14

The build gate stopped two of the four migrated pages: the DUI page cited
F.S. 322.271(2)(a) and the Florida money laundering page cited F.S.
896.101(3)(a), both flagged UNVERIFIED in their briefs, neither covered by a
row in an audited table. Neither could be: the tables record provisions that
ASSIGN A DEGREE, and these are a restricted-licence provision and a
prohibited-conduct definition. Both were fetched whole, and the agent that
fetched each then checked every sentence on the page that rests on it.

**Both pages came back CLEAN.** Recording that here matters as much as
recording a correction would: the gate fired on missing PROVENANCE rather than
on a wrong claim, which is what it is for.

### F.S. 322.271, hardship and restricted driving privilege

Source: `F.S. 322.271 (2025) via https://www.flsenate.gov/Laws/Statutes/2025/322.271, fetched with curl and de-tagged locally`.

Method: curl -sL to /tmp/fs322271.html, then a local python3 regex strip of script/style/tags with html.unescape to /tmp/fs322271.txt; read the whole section rather than the flagged paragraph alone, including subsection (1) flush text, all of (2)(a)-(e), and (7), plus the History and the delayed-effective-date note for (1)(b).

**F.S. 322.271(2), flush text introducing (a)-(e)**

> At such hearing, the person whose license has been suspended, canceled, or revoked may show that such suspension, cancellation, or revocation causes a serious hardship and precludes the person from carrying out his or her normal business occupation, trade, or employment and that the use of the person's license in the normal course of his or her business is necessary to the proper support of the person or his or her family.

**F.S. 322.271(2)(a), first sentence**

> Except as otherwise provided in this subsection, the department shall require proof of the successful completion of the applicable department-approved driver training course operating pursuant to s. 318.1451 or DUI program substance abuse education course and evaluation as provided in s. 316.193(5).

**F.S. 322.271(2)(a), second sentence**

> Letters of recommendation from respected business persons in the community, law enforcement officers, or judicial officers may also be required to determine whether the person should be permitted to operate a motor vehicle on a restricted basis for business or employment use only and in determining whether such person can be trusted to so operate a motor vehicle.

**F.S. 322.271(2)(a), third sentence (the 322.2615 carve-out: enrollment, not completion)**

> If a driver license has been suspended under the point system or under s. 322.2615, the department shall require proof of enrollment in the applicable department-approved driver training course or licensed DUI program substance abuse education course, including evaluation and treatment, if referred, and may require letters of recommendation described in this paragraph to determine if the driver should be reinstated on a restricted basis.

**F.S. 322.271(2)(a), fourth through sixth sentences (post-reinstatement conditions)**

> If the person fails to complete the approved course within 90 days after reinstatement or subsequently fails to complete treatment, the department shall cancel his or her driver license until the course and treatment, if applicable, is successfully completed, notwithstanding the terms of the court order or any suspension or revocation of the driving privilege. The department may temporarily reinstate the driving privilege on a restricted basis upon verification from the DUI program that the offender has reentered and is currently participating in treatment and has completed the DUI education course and evaluation requirement. If the DUI program notifies the department of the second failure to complete treatment, the department shall reinstate the driving privilege only after notice of completion of treatment from the DUI program.

**F.S. 322.271(2)(a), seventh sentence (bar tied to a 316.193 conviction)**

> The privilege of driving on a limited or restricted basis for business or employment use may not be granted to a person who has been convicted of a violation of s. 316.193 until completion of the DUI program substance abuse education course and evaluations as provided in s. 316.193(5).

**F.S. 322.271(2)(a), final sentence (the repeat-offender / repeat-refusal bar)**

> Except as provided in paragraph (c), the privilege of driving on a limited or restricted basis for business or employment use may not be granted to a person whose license is revoked pursuant to s. 322.28 or suspended pursuant to s. 322.2615 and who has been convicted of a violation of s. 316.193 two or more times or whose license has been suspended two or more times for refusal to submit to a test pursuant to s. 322.2615 or former s. 322.261.

**F.S. 322.271(1)(a)**

> Upon the suspension, cancellation, or revocation of the driver license of any person as authorized or required in this chapter, except a person whose license is revoked as a habitual traffic offender under s. 322.27(5) or a person who is ineligible to be granted the privilege of driving on a limited or restricted basis under subsection (2), the department shall immediately notify the licensee and, upon his or her request, shall afford him or her an opportunity for a hearing pursuant to chapter 120, as early as practicable within not more than 30 days after receipt of such request, in the county wherein the licensee resides, unless the department and the licensee agree that such hearing may be held in some other county.

**F.S. 322.271(1)(c)1. and 2., with the flush text that follows them**

> 1. "A driving privilege restricted to business purposes only" means a driving privilege that is limited to any driving necessary to maintain livelihood, including driving to and from work, necessary on-the-job driving, driving for educational purposes, and driving for church and for medical purposes. 2. "A driving privilege restricted to employment purposes only" means a driving privilege that is limited to driving to and from work and any necessary on-the-job driving required by an employer or occupation. ... Driving for any purpose other than as provided by this paragraph is not permitted by a person whose driving privilege has been restricted to employment or business purposes. In addition, a person whose driving privilege is restricted to employment or business purposes remains subject to any restriction that applied to the type of license which the person held at the time of the order of suspension, cancellation, or revocation.

**What it establishes.**

- The flagged subsection is fully covered by the fetch and the page's use of it is accurate; no page sentence needs fixing on account of 322.271(2)(a).

- Only one page location depends on 322.271(2)(a): src/lib/site.ts line 2390, inside CHARGE_CONTENT["state/dui-defense"], section id "ten-days"/"Formal review, informal review, or the business purposes trade". A grep of the whole repo for "322.271" turns up no other page assertion resting on (2)(a).

- ST-04-dui.md flagged (2)(a) UNVERIFIED but the brief itself only ever discusses 322.271(7) (see docs/research/briefs/ST-04-dui.md lines 493, 513, 516, 770, 807, 823). The (2)(a) citation appears to have entered at the drafting stage, after the brief, which is consistent with the gate firing on a subsection no brief had read.

- The load-bearing distinction in (2)(a) is completion versus enrollment. General rule: "the department shall require proof of the successful completion". Carve-out: "If a driver license has been suspended under the point system or under s. 322.2615, the department shall require proof of enrollment". A page that said DUI administrative suspensions require completed coursework for a hardship licence would be wrong; this page says enrollment, and is right.

- (2)(a) contains no waiting period. Any future page sentence putting a wait on (2)(a) would be unsupported. The waits are in (2)(c) (12/24 months, s. 322.28(2)(a) revocations), (1)(b) (12 months, HTO), and (4)/(5) (5 years, permanent revocations), and the 30/90-day DUI-suspension waits are in 322.2615(10), not here.

- Two things in (2)(a) the page does not mention, worth considering for coverage rather than correction: the bar on granting the restricted privilege to anyone convicted of s. 316.193 until the s. 316.193(5) course and evaluations are completed, and the rule that failure to complete the course within 90 days after reinstatement, or a subsequent failure to complete treatment, requires the department to cancel the licence notwithstanding the court order. The second is a real practical trap for a reader who obtains the restricted privilege on proof of enrollment alone.

**Page check.** VERDICT: CLEAN. Exactly one passage in CHARGE_CONTENT["state/dui-defense"] rests on 322.271(2)(a) -- the two sentences at /Users/wyattbensman/Library/Mobile Documents/com~apple~CloudDocs/The Digital Wash/client-sites/hines-mccarty-site/src/lib/site.ts line 2390, in the section headed "Formal review, informal review, or the business purposes trade" -- and both are supported by the fetched words. Sentence 1's (2)(a) limb ("where a license has been suspended under Statute 322.2615 the department shall require proof of enrollment in the applicable approved driver training course or licensed DUI program substance abuse education course, including evaluation and treatment if referred") tracks the

### F.S. 896.101(3), the prohibited-conduct provision of the Florida Money Laundering Act

Source: `F.S. 896.101 (2025 Florida Statutes), fetched with `curl -sL https://www.flsenate.gov/Laws/Statutes/2025/896.101` and de-tagged locally with a Python regex strip (no summariser in the loop). Full section text obtained, subsections (1) through (11) plus History line (last amended s. 12, ch. 2017-155). Local copies: /tmp/896101.html, /tmp/896101.txt.`.

Method: curl + local tag strip; read the whole of subsection (3) including paragraph (d) and the flanking subsections (2), (4) and (5). Then read CHARGE_CONTENT["white-collar/money-laundering"] in /Users/wyattbensman/Library/Mobile Documents/com~apple~CloudDocs/The Digital Wash/client-sites/hines-mccarty-site/src/lib/site.ts (lines 1981-2154) and grepped every sentence citing 896.101(3), "subsection (3)", or the paragraph (b)/(c) conduct.

**F.S. 896.101(3), introductory words**

> It is unlawful for a person:

**F.S. 896.101(3)(a), full text with subparagraphs**

> (a) Knowing that the property involved in a financial transaction represents the proceeds of some form of unlawful activity, to conduct or attempt to conduct such a financial transaction which in fact involves the proceeds of specified unlawful activity: 1. With the intent to promote the carrying on of specified unlawful activity; or 2. Knowing that the transaction is designed in whole or in part: a. To conceal or disguise the nature, the location, the source, the ownership, or the control of the proceeds of specified unlawful activity; or b. To avoid a transaction reporting requirement or money transmitters' registration requirement under state law.

**F.S. 896.101(3)(b)**

> (b) To transport or attempt to transport a monetary instrument or funds: 1. With the intent to promote the carrying on of specified unlawful activity; or 2. Knowing that the monetary instrument or funds involved in the transportation represent the proceeds of some form of unlawful activity and knowing that such transportation is designed in whole or in part: a. To conceal or disguise the nature, the location, the source, the ownership, or the control of the proceeds of specified unlawful activity; or b. To avoid a transaction reporting requirement or money transmitters' registration requirement under state law.

**F.S. 896.101(3)(c)**

> (c) To conduct or attempt to conduct a financial transaction which involves property or proceeds which an investigative or law enforcement officer, or someone acting under such officer's direction, represents as being derived from, or as being used to conduct or facilitate, specified unlawful activity, when the person's conduct or attempted conduct is undertaken with the intent: 1. To promote the carrying on of specified unlawful activity; or 2. To conceal or disguise the nature, the location, the source, the ownership, or the control of the proceeds or property believed to be the proceeds of specified unlawful activity; or 3. To avoid a transaction reporting requirement under state law.

**F.S. 896.101(3)(d)**

> (d) For the purposes of this subsection, "investigative or law enforcement officer" means any officer of the State of Florida or political subdivision thereof, of the United States, or of any other state or political subdivision thereof, who is empowered by law to conduct, on behalf of the government, investigations of, or to make arrests for, offenses enumerated in this subsection or similar federal offenses.

**F.S. 896.101(2), introductory words**

> As used in this section, the term:

**F.S. 896.101(2)(a)**

> "Conducts" includes initiating, concluding, or participating in initiating or concluding a transaction.

**F.S. 896.101(2)(c)**

> "Financial transaction" means a transaction involving the movement of funds by wire or other means or involving one or more monetary instruments, which in any way or degree affects commerce, or a transaction involving the transfer of title to any real property, vehicle, vessel, or aircraft, or a transaction involving the use of a financial institution which is engaged in, or the activities of which affect, commerce in any way or degree.

**F.S. 896.101(2)(d)**

> "Knowing" means that a person knew; or, with respect to any transaction or transportation involving more than $10,000 in U.S. currency or foreign equivalent, should have known after reasonable inquiry, unless the person has a duty to file a federal currency transaction report, IRS Form 8300, or a like report under state law and has complied with that reporting requirement in accordance with law.

**What it establishes.**

- 896.101(3)(a) reaches BOTH designs, not one: subparagraph 2.a is concealment or disguise of the nature, location, source, ownership or control of the proceeds, and 2.b is avoidance of a transaction reporting requirement OR a money transmitters' registration requirement under state law. The page names both, and keeps the 'under state law' limit.

- The mental element of (3)(a) is two-layered and the page carries both layers: an antecedent knowledge that the property represents the proceeds of some form of unlawful activity (defined loosely at (2)(e)), plus either intent to promote specified unlawful activity under 1., or knowledge that the transaction is designed to conceal or to avoid a reporting/registration requirement under 2. The objective 'which in fact involves the proceeds of specified unlawful activity' clause sits outside the mens rea and the page treats it separately at line 2149.

- (2)(d) makes 'knowing' reach constructive knowledge above $10,000: 'should have known after reasonable inquiry, unless the person has a duty to file a federal currency transaction report, IRS Form 8300, or a like report under state law and has complied with that reporting requirement.' The page quotes this accurately at line 2052 and again at line 2112.

- Subsection (3) carries no dollar figure anywhere, including (3)(d). The page's claim at line 2054 that the amount belongs to subsection (5) and not to the prohibition is correct.

- (3)(a) covers attempt on the face of the paragraph: 'to conduct or attempt to conduct such a financial transaction'. So does (3)(b) ('transport or attempt to transport') and (3)(c).

- (3)(d) is a definitional paragraph inside subsection (3) defining 'investigative or law enforcement officer' for that subsection. It is unused on the page and nothing on the page contradicts it.

**Page check.** VERDICT: CLEAN. Every sentence in CHARGE_CONTENT["white-collar/money-laundering"] that rests on 896.101(3)(a) is supported by the fetched text. Specifics, by sentence.

(1) src/lib/site.ts:2053, elements bullet: "One of the purposes the statute names. Under Statute 896.101(3)(a) the conduct is unlawful where it is done with the intent to promote the carrying on of specified unlawful activity, or knowing that the transaction is designed in whole or in part to conceal or disguise the nature, the location, the source, the ownership, or the control of the proceeds of specified unlawful activity, or to avoid a transaction reporting requirement or money transmitters' registration requirement under

---

## Federal health care fraud, fetched BEFORE writing, 2026-08-14

Writer's own fetches for `federal/healthcare-fraud`, from uscode.house.gov and
ussc.gov, both allowlisted per D2. The audited tables `usc-1347.ts` and
`usc-1349.ts` carry the punishment rows; everything below is a definition, a
procedure, or an eligibility rule, which is why it has no row and needed its own
fetch. Every section named here was read start to finish in the fetched text,
including each "except as provided in" clause.

### 18 U.S.C. 24, definitions relating to Federal health care offense

Read whole. Currency note on the page: text contains those laws in effect on
August 13, 2026. The audited table `usc-24.ts` records the section as assigning
no punishment, so it has zero rows and these words come from this fetch.

**18 U.S.C. 24(a)**

> (a) As used in this title, the term "Federal health care offense" means a violation of, or a criminal conspiracy to violate-
> (1) section 669, 1035, 1347, or 1518 of this title or section 1128B of the Social Security Act (42 U.S.C. 1320a-7b); or
> (2) section 287, 371, 664, 666, 1001, 1027, 1341, 1343, 1349, or 1954 of this title section 301 of the Federal Food, Drug, and Cosmetic Act (21 U.S.C. 331), or section 501 of the Employee Retirement Income Security Act of 1974 (29 U.S.C. 1131), or section 411, 518, or 511 of the Employee Retirement Income Security Act of 1974,, if the violation or conspiracy relates to a health care benefit program.

(The doubled comma and the missing "or" in (a)(2) are in the printed text; the
page's footnote 1 reads "So in original. The second comma probably should follow
'1954 of this title'.")

**18 U.S.C. 24(b)**

> (b) As used in this title, the term "health care benefit program" means any public or private plan or contract, affecting commerce, under which any medical benefit, item, or service is provided to any individual, and includes any individual or entity who is providing a medical benefit, item, or service for which payment may be made under the plan or contract.

### 18 U.S.C. 1347, read whole alongside the audited table

Subsections (a) and (b) are the whole of the section. Structural point the table
cannot record: the words "in connection with the delivery of or payment for
health care benefits, items, or services" sit in the FLUSH TEXT that follows
both numbered clauses (1) and (2), so they attach to both. Amendment note on the
page: "2010 - Pub. L. 111-148 designated existing provisions as subsec. (a) and
added subsec. (b)."

**Verified absence, from the whole fetched section:** 18 U.S.C. 1347 contains no
dollar amount, no threshold, no tier, and no minimum term.

### 18 U.S.C. 1365(h)(3), the definition 1347(a) cross-refers to

Definitions subsection read whole. It opens "As used in this section-", so it is
written for section 1365 and reaches 1347 by the express cross-reference in
1347(a).

> (3) the term "serious bodily injury" means bodily injury which involves-
> (A) a substantial risk of death;
> (B) extreme physical pain;
> (C) protracted and obvious disfigurement; or
> (D) protracted loss or impairment of the function of a bodily member, organ, or mental faculty;

### 18 U.S.C. 1035, false statements relating to health care matters

Read whole; (a) and (b) are the section.

> (a) Whoever, in any matter involving a health care benefit program, knowingly and willfully-(1) falsifies, conceals, or covers up by any trick, scheme, or device a material fact; or (2) makes any materially false, fictitious, or fraudulent statements or representations, or makes or uses any materially false writing or document knowing the same to contain any materially false, fictitious, or fraudulent statement or entry, in connection with the delivery of or payment for health care benefits, items, or services, shall be fined under this title or imprisoned not more than 5 years, or both.
> (b) As used in this section, the term "health care benefit program" has the meaning given such term in section 24(b) of this title.

### 18 U.S.C. 1518, obstruction of criminal investigations of health care offenses

Read whole; (a) and (b) are the section.

> (a) Whoever willfully prevents, obstructs, misleads, delays or attempts to prevent, obstruct, mislead, or delay the communication of information or records relating to a violation of a Federal health care offense to a criminal investigator shall be fined under this title or imprisoned not more than 5 years, or both.
> (b) As used in this section the term "criminal investigator" means any individual duly authorized by a department, agency, or armed force of the United States to conduct or engage in investigations for prosecutions for violations of health care offenses.

### 18 U.S.C. 3486, administrative subpoenas

Read whole, subsections (a) through (e), including the source credit. This is the
compulsory-process provision written for health care investigations.

> (a) Authorization.-(1)(A) In any investigation of-
> (i)(I) a Federal health care offense; or (II) a Federal offense involving the sexual exploitation or abuse of children, the Attorney General;
> (ii) an unregistered sex offender conducted by the United States Marshals Service, the Director of the United States Marshals Service; or
> (iii) an offense under section 871 or 879, or a threat against a person protected by the United States Secret Service under paragraph (5) or (6) of section 3056, if the Director of the Secret Service determines that the threat constituting the offense or the threat against the person protected is imminent, the Secretary of the Treasury,
> may issue in writing and cause to be served a subpoena requiring the production and testimony described in subparagraph (B).
> (B) Except as provided in subparagraph (C), a subpoena issued under subparagraph (A) may require-
> (i) the production of any records or other things relevant to the investigation; and
> (ii) testimony by the custodian of the things required to be produced concerning the production and authenticity of those things.

THE CARVE-OUT AT (C), read and recorded rather than skipped: it limits a
subpoena served on "a provider of electronic communication service or remote
computing service, in an investigation of a Federal offense involving the sexual
exploitation or abuse of children". It is written for the (a)(1)(A)(i)(II) route
and does not narrow the health care route.

> (2) A subpoena under this subsection shall describe the objects required to be produced and prescribe a return date within a reasonable period of time within which the objects can be assembled and made available.
> (3) The production of records relating to a Federal health care offense shall not be required under this section at any place more than 500 miles distant from the place where the subpoena for the production of such records is served.
> (5) At any time before the return date specified in the summons, the person or entity summoned may, in the United States district court for the district in which that person or entity does business or resides, petition for an order modifying or setting aside the summons, or a prohibition of disclosure ordered by a court under paragraph (6).
> (6)(A) A United States district court for the district in which the summons is or will be served, upon application of the United States, may issue an ex parte order that no person or entity disclose to any other person or entity (other than to an attorney in order to obtain legal advice) the existence of such summons for a period of up to 90 days.
> (6)(B) Such order may be issued on a showing that the things being sought may be relevant to the investigation and there is reason to believe that such disclosure may result in-(i) endangerment to the life or physical safety of any person; (ii) flight to avoid prosecution; (iii) destruction of or tampering with evidence; or (iv) intimidation of potential witnesses.
> (6)(C) An order under this paragraph may be renewed for additional periods of up to 90 days upon a showing that the circumstances described in subparagraph (B) continue to exist.
> (7) A summons issued under this section shall not require the production of anything that would be protected from production under the standards applicable to a subpoena duces tecum issued by a court of the United States.
> (8) If no case or proceeding arises from the production of records or other things pursuant to this section within a reasonable time after those records or things are produced, the agency to which those records or things were delivered shall, upon written demand made by the person producing those records or things, return them to that person, except where the production required was only of copies rather than originals.
> (9) A subpoena issued under paragraph (1)(A)(i)(II) or (1)(A)(iii) may require production as soon as possible, but in no event less than 24 hours after service of the subpoena.

**Reading recorded so the next writer does not have to redo it.** The 24-hour
floor in (a)(9) is keyed by its own words to paragraph (1)(A)(i)(II) and
(1)(A)(iii). The health care route is (1)(A)(i)(I), so the return-date rule that
governs it is the reasonable-period rule in (a)(2).

### 18 U.S.C. 982(a)(7), criminal forfeiture on a Federal health care offense

> (7) The court, in imposing sentence on a person convicted of a Federal health care offense, shall order the person to forfeit property, real or personal, that constitutes or is derived, directly or indirectly, from gross proceeds traceable to the commission of the offense.

The verb is "shall" and the measure is gross proceeds traceable to the offense.

### 18 U.S.C. 3161(b) and (c)(1), the Speedy Trial Act intervals

Quoted only to state the two intervals; they are identical for every federal
charge and the page spends one sentence on them.

> (b) Any information or indictment charging an individual with the commission of an offense shall be filed within thirty days from the date on which such individual was arrested or served with a summons in connection with such charges.
> (c)(1) In any case in which a plea of not guilty is entered, the trial of a defendant charged in an information or indictment with the commission of an offense shall commence within seventy days from the filing date (and making public) of the information or indictment, or from the date the defendant has appeared before a judicial officer of the court in which such charge is pending, whichever date last occurs.

### 18 U.S.C. 3006A(a)(1), appointment of counsel

Subsection (a) read whole, including all of the (a)(1) categories (A) through (J).

> (a) Choice of Plan.-Each United States district court, with the approval of the judicial council of the circuit, shall place in operation throughout the district a plan for furnishing representation for any person financially unable to obtain adequate representation in accordance with this section.
> (1) Representation shall be provided for any financially eligible person who-(A) is charged with a felony or a Class A misdemeanor;

The remaining categories at (a)(1)(B) through (J) were read; the page names only
(A) and says that the list carries others, because a person served with an
administrative subpoena has not been charged.

### 42 U.S.C. 1320a-7, exclusion from Federal health care programs

Subsections (a), (c)(3) and (i) read whole; (b) read whole as well, and the page
names it only as a separate permissive list.

> (a) Mandatory exclusion. The Secretary shall exclude the following individuals and entities from participation in any Federal health care program (as defined in section 1320a-7b(f) of this title):
> (3) Felony conviction relating to health care fraud. Any individual or entity that has been convicted for an offense which occurred after August 21, 1996, under Federal or State law, in connection with the delivery of a health care item or service or with respect to any act or omission in a health care program (other than those specifically described in paragraph (1)) operated by or financed in whole or in part by any Federal, State, or local government agency, of a criminal offense consisting of a felony relating to fraud, theft, embezzlement, breach of fiduciary responsibility, or other financial misconduct.
> (c)(3)(B) Subject to subparagraph (G), in the case of an exclusion under subsection (a), the minimum period of exclusion shall be not less than five years, except that, upon the request of the administrator of a Federal health care program (as defined in section 1320a-7b(f) of this title) who determines that the exclusion would impose a hardship on beneficiaries (as defined in section 1320a-7a(i)(5) of this title) of that program, the Secretary may, after consulting with the Inspector General of the Department of Health and Human Services, waive the exclusion under subsection (a)(1), (a)(3), or (a)(4) with respect to that program in the case of an individual or entity that is the sole community physician or sole source of essential specialized services in a community. The Secretary's decision whether to waive the exclusion shall not be reviewable.
> (c)(3)(G) In the case of an exclusion of an individual under subsection (a) based on a conviction occurring on or after August 5, 1997, if the individual has (before, on, or after August 5, 1997) been convicted-(i) on one previous occasion of one or more offenses for which an exclusion may be effected under such subsection, the period of the exclusion shall be not less than 10 years, or (ii) on 2 or more previous occasions of one or more offenses for which an exclusion may be effected under such subsection, the period of the exclusion shall be permanent.
> (i) "Convicted" defined. For purposes of subsections (a) and (b), an individual or entity is considered to have been "convicted" of a criminal offense-(1) when a judgment of conviction has been entered against the individual or entity by a Federal, State, or local court, regardless of whether there is an appeal pending or whether the judgment of conviction or other record relating to criminal conduct has been expunged; (2) when there has been a finding of guilt against the individual or entity by a Federal, State, or local court; (3) when a plea of guilty or nolo contendere by the individual or entity has been accepted by a Federal, State, or local court; or (4) when the individual or entity has entered into participation in a first offender, deferred adjudication, or other arrangement or program where judgment of conviction has been withheld.

### U.S. Sentencing Commission, Quick Facts: Health Care Fraud, fiscal year 2025

https://www.ussc.gov/research/quick-facts/health-care-fraud, re-fetched by the
writer 2026-08-14.

> Of the 66,662 cases reported to the Commission in fiscal year 2025, 340 involved health care fraud.
> 91% had little or no prior criminal history (Criminal History Category I).
> The median loss for these offenses was $1,279,436.
> Sentences were increased for: ... conviction of a federal health care offense and a loss of more than $1 million (46%)
> The average sentence for individuals sentenced for health care fraud was 21 months.
> 68% were sentenced to prison.

### U.S. Sentencing Commission, Primer on Loss Calculation Under sec. 2B1.1 (2024), page 22

https://www.ussc.gov/sites/default/files/pdf/training/primers/2024_Primer_Loss.pdf,
fetched as a PDF and read at Section IV.8, "Federal Health Care Offenses
Involving Government Health Care Programs".

> In federal health care fraud offenses involving a government health care program, "the aggregate dollar amount of fraudulent bills submitted to the Government health care program shall constitute prima facie evidence of the amount of the intended loss, i.e., is evidence sufficient to establish the amount of the intended loss, if not rebutted."
> However, objections to the loss amount alone do not constitute competent rebuttal evidence. A defendant instead must put forth evidence of legitimate services rendered or other specific evidence that a lower loss amount was intended.

Its footnote 152 attributes the quoted rule to USSG sec. 2B1.1, comment.
(n.3(F)(viii)). The primer carries the Commission's standard disclaimer, quoted
from page ii:

> The information in this document should not be considered definitive or comprehensive. In addition, the information in this document does not necessarily represent the official position of the Commission on any particular issue or case, and it is not binding on the Commission, the courts, or the parties in any case.

**Attribution rule for the page.** The primer is described on the page as
commentary set out in a Commission primer, with the disclaimer carried, and the
rule is stated only for a government health care program, which is the scope the
primer's own sentence gives it. The USSG 2B1.1 tiered enhancement and the
guideline definition of "Government health care program" stay off the page.

**One coarseness in the reference ledger, recorded rather than left to be
discovered.** `refs()` in scripts/check-unverified.mts reduces both
"42 U.S.C. 1320a-7" and "42 U.S.C. 1320a-7b" to the same key, so the exclusion
quotes above will also read as clearing FED-04's flag on the anti-kickback
section. They do not. The anti-kickback section itself has not been read and
nothing on the health care fraud page rests on it; the only place 1320a-7b
appears above is inside the parenthetical that 1320a-7(a) itself prints.

## Batch A, fetched BEFORE the pages shipped, 2026-08-14

The build gate stopped the federal drug trafficking page for citing 18
U.S.C. 3553(f) and (f)(5), flagged UNVERIFIED in FED-03 and covered by no
audited row. It could not be: the usc-3553 table is deliberately EMPTY,
because the section assigns no punishment and the tables record provisions
that do. The safety valve is nonetheless the provision by which a defendant
facing a mandatory minimum can be sentenced below it, so it was fetched whole
and the page checked against it sentence by sentence.

**The page came back CLEAN**, and on the two things most easily got wrong:

### 18 U.S.C. 3553(f), the safety valve

Source: `18 U.S.C. 3553(f) (and the definition at 3553(g)), fetched with curl from https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section3553&num=0&edition=prelim (Office of the Law Revision Counsel, prelim edition), tags stripped locally. Subsection (f) read in full: chapeau, paragraphs (1) through (5), subparagraphs (1)(A) through (1)(C), and the flush text following paragraph (5). `

Method: curl -sL to /tmp/3553.html (193,399 bytes), regex tag strip + HTML unescape to /tmp/3553.txt, subsection (f) read at lines 315-360. Page checked at /Users/wyattbensman/Library/Mobile Documents/com~apple~CloudDocs/The Digital Wash/client-sites/hines-mccarty-site/src/lib/site.ts, entry "federal/drug-trafficking" in CHARGE_CONTENT, lines 3368-3532. Every sentence in that entry resting on 3553(f) loca

**18 U.S.C. 3553(f), chapeau**

> (f) Limitation on Applicability of Statutory Minimums in Certain Cases.-Notwithstanding any other provision of law, in the case of an offense under section 401, 404, or 406 of the Controlled Substances Act (21 U.S.C. 841, 844, 846), section 1010 or 1013 of the Controlled Substances Import and Export Act (21 U.S.C. 960, 963), or section 70503 or 70506 of title 46, the court shall impose a sentence pursuant to guidelines promulgated by the United States Sentencing Commission under section 994 of title 28 without regard to any statutory minimum sentence, if the court finds at sentencing, after the Government has been afforded the opportunity to make a recommendation, that-

**18 U.S.C. 3553(f)(1)**

> (1) the defendant does not have- (A) more than 4 criminal history points, excluding any criminal history points resulting from a 1-point offense, as determined under the sentencing guidelines; (B) a prior 3-point offense, as determined under the sentencing guidelines; and (C) a prior 2-point violent offense, as determined under the sentencing guidelines;

**18 U.S.C. 3553(f)(2)**

> (2) the defendant did not use violence or credible threats of violence or possess a firearm or other dangerous weapon (or induce another participant to do so) in connection with the offense;

**18 U.S.C. 3553(f)(3)**

> (3) the offense did not result in death or serious bodily injury to any person;

**18 U.S.C. 3553(f)(4)**

> (4) the defendant was not an organizer, leader, manager, or supervisor of others in the offense, as determined under the sentencing guidelines and was not engaged in a continuing criminal enterprise, as defined in section 408 of the Controlled Substances Act; and

**18 U.S.C. 3553(f)(5)**

> (5) not later than the time of the sentencing hearing, the defendant has truthfully provided to the Government all information and evidence the defendant has concerning the offense or offenses that were part of the same course of conduct or of a common scheme or plan, but the fact that the defendant has no relevant or useful other information to provide or that the Government is already aware of the information shall not preclude a determination by the court that the defendant has complied with this requirement.

**18 U.S.C. 3553(f), flush text following paragraph (5)**

> Information disclosed by a defendant under this subsection may not be used to enhance the sentence of the defendant unless the information relates to a violent offense.

**18 U.S.C. 3553(g)**

> (g) Definition of Violent Offense.-As used in this section, the term "violent offense" means a crime of violence, as defined in section 16, that is punishable by imprisonment.

**Amendment notes on the same page, 2018**

> 2018-Subsec. (f). Pub. L. 115-391, §402(a)(1)(A), (C), in introductory provisions, substituted ", section 1010" for "or section 1010" and inserted ", or section 70503 or 70506 of title 46" after "963)", and inserted concluding provisions. ... Subsec. (f)(1). Pub. L. 115-391, §402(a)(1)(B), added par. (1) and struck out former par. (1) which read as follows: "the defendant does not have more than 1 criminal history point, as determined under the sentencing guidelines;".

**What it establishes.**

- CUMULATIVE, and the page gets this right. The criteria are stated as cumulative everywhere they appear and as alternatives nowhere. The section heading is "Five findings the court makes, and no motion from the government"; the chapeau bullet says the court must find "that five things are so"; each of the five bullets opens "Paragraph (N) requires that"; and the FAQ at site.ts:3529 introduces the list with "if the court finds ... that five things are so:" and joins the five items with semicolons and a closing "and", never with "or". The single most damaging error available here is not present.

- The one thing the page does not do explicitly is say in so many words that failing any one criterion defeats relief. Cumulativeness is carried by "requires" and by "five findings", which is correct but inferential. The statute itself supplies the explicit version: the chapeau is a single conditional ("if the court finds ... that-") and paragraphs (4) and (5) are joined by "and". If you want belt and braces on the most consequential provision on the page, one clause added to the chapeau bullet would do it, e.g. that the court must find all five and that a failure on any one of them ends the inquiry. This is a strengthening, not a correction.

- The (f)(1) conjunction is handled correctly, which is the trap on this provision. The page quotes the statute's "and" between (B) and (C) verbatim rather than silently converting it to "or", then explains the operative effect through the primer's account of Pulsifer v. United States, that any one of the three conditions disqualifies. Quoting "and" without that gloss would read to a lay reader as though all three were needed to disqualify, which is the opposite of how the paragraph operates. The page does not leave that gap open.

- The 2018 amendment is reflected, not remembered wrong. The page states the current "more than 4 criminal history points, excluding any criminal history points resulting from a 1-point offense" test, not the pre-First Step Act "more than 1 criminal history point". It also carries the 46 U.S.C. 70503/70506 offenses that the same amendment inserted into the chapeau, and it quotes the flush-text enhancement protection, which that amendment added as the concluding provisions. All three are on the fetched page.

- Optional precision, non-blocking. At site.ts:3506 the sentence reads "18 U.S.C. 3553(f)(5) sets the deadline ... and the closing sentence of that subsection provides ...". The enhancement protection is flush text following paragraph (5) and belongs to subsection (f) as a whole, not to paragraph (5); the statute's own words are "under this subsection". "That subsection" is defensible as pointing back to (f) within the cite, and site.ts:3470 states the structure correctly ("The subsection then closes with a protection"). If you want the two spots to read identically, change "that subsection" to "subsection (f)". No legal content changes either way.

- Available but unused: 18 U.S.C. 3553(g) defines "violent offense" for the whole section as "a crime of violence, as defined in section 16, that is punishable by imprisonment." The page uses the phrase twice, in the (f)(1)(C) "prior 2-point violent offense" criterion and in the enhancement carve-out, without noting that the section defines it. This is an omission rather than an error, and the statutory definition is quoted above if the page wants it.

**Page check.** Every sentence in the "federal/drug-trafficking" entry that rests on 3553(f) is supported by the fetched text. Nothing needs to be fixed for accuracy. Detail, sentence by sentence:

site.ts:3465 (safety-valve bullet 1) reproduces the chapeau word for word, including "section 401, 404, or 406", the comma-form "section 1010 or 1013", the 46 U.S.C. 70503/70506 clause added in 2018, "without regard to any statutory minimum sentence", and "after the Government has been afforded the opportunity to make a recommendation". Matches the fetched chapeau exactly. It renders "that-" as "that five things are so", which is a true count: paragraphs (1) through (5).

site.ts:3466 (paragraph (1)) is verbatim, including the two features most easily got wrong. It carries "more than 4 criminal history points, excluding any criminal history points resulting from a 1-point offense", not the pre-2018 "more than 1 criminal history point" that the amendment notes show was struck. And it keeps the statute's own conjunction, "; and (C) a prior 2-point violent offense", rather than substituting "or". The Pulsifer gloss that follows is expressly attributed to the Sentencing Commission primer, not to the statute, and it states the disqualifying direction correctly ("the presence of any of these conditions will disqualify"), which is what makes the statutory "and" safe to quote as written.

site.ts:3467 (paragraph (2)) matches, with the statute's parentheses "(or induce another participant to do so)" render

## Batch A repair, sources fetched and recorded, 2026-08-14

These are the provisions the batch A pages quote that the audited statute
tables do not cover, because the tables record only provisions that ASSIGN A
PUNISHMENT: amendment histories, forfeiture procedure, DOJ charging policy,
definitions, and the Federal Rules. Each was fetched by the repair agent that
used it and independently checked by a verifier, which caught two defective
entries before they reached this file: a pin cite naming a section and page
the PDF does not carry, and a URL for the Federal Rules that did not retrieve
the rule. A bad entry here is worse than a bad sentence on a page, because
later work trusts this file without re-reading the source.

### federal/computer-internet-crimes

**18 U.S.C. 1030(c)(4)(A)(i), subclauses (I) through (VI)**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section1030&num=0&edition=prelim`

> (4)(A) except as provided in subparagraphs (E) and (F), a fine under this title, imprisonment for not more than 5 years, or both, in the case of- (i) an offense under subsection (a)(5)(B), which does not occur after a conviction for another offense under this section, if the offense caused (or, in the case of an attempted offense, would, if completed, have caused)- (I) loss to 1 or more persons during any 1-year period (and, for purposes of an investigation, prosecution, or other proceeding brought by the United States only, loss resulting from a related course of conduct affecting 1 or more other protected computers) aggregating at least $5,000 in value; (II) the modification or impairment, or potential modification or impairment, of the medical examination, diagnosis, treatment, or care of 1 or more individuals; (III) physical injury to any person; (IV) a threat to public health or safety; (V) damage affecting a computer used by or for an entity of the United States Government in furtherance of the administration of justice, national defense, or national security; or (VI) damage affecting 10 or more protected computers during any 1-year period; or (ii) an attempt to commit an off

**18 U.S.C. 1030(i)(1)**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section1030&num=0&edition=prelim`

> (i)(1) The court, in imposing sentence on any person convicted of a violation of this section, or convicted of conspiracy to violate this section, shall order, in addition to any other sentence imposed and irrespective of any provision of State law, that such person forfeit to the United States- (A) such person's interest in any personal property that was used or intended to be used to commit or to facilitate the commission of such violation; and (B) any property, real or personal, constituting or derived from, any proceeds that such person obtained, directly or indirectly, as a result of such violation.

**18 U.S.C. 1030(i)(2)**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section1030&num=0&edition=prelim`

> (2) The criminal forfeiture of property under this subsection, any seizure and disposition thereof, and any judicial proceeding in relation thereto, shall be governed by the provisions of section 413 of the Comprehensive Drug Abuse Prevention and Control Act of 1970 (21 U.S.C. 853), except subsection (d) of that section.

**18 U.S.C. 1030(j)**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section1030&num=0&edition=prelim`

> (j) For purposes of subsection (i), the following shall be subject to forfeiture to the United States and no property right shall exist in them: (1) Any personal property used or intended to be used to commit or to facilitate the commission of any violation of this section, or a conspiracy to violate this section. (2) Any property, real or personal, which constitutes or is derived from proceeds traceable to any violation of this section, or a conspiracy to violate this section

**18 U.S.C. 1030, Amendments note, 2001, subsec. (e)(8)**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section1030&num=0&edition=prelim`

> Subsec. (e)(8). Pub. L. 107-56, Sec. 814(d)(3), added par. (8) and struck out former par. (8) which read as follows: "the term 'damage' means any impairment to the integrity or availability of data, a program, a system, or information, that- "(A) causes loss aggregating at least $5,000 in value during any 1-year period to one or more individuals; "(B) modifies or impairs, or potentially modifies or impairs, the medical examination, diagnosis, treatment, or care of one or more individuals; "(C) causes physical injury to any person; or "(D) threatens public health or safety; and".

**18 U.S.C. 1030, Amendments note, 2001, subsecs. (a)(5)(A) and (a)(5)(B)**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section1030&num=0&edition=prelim`

> 2001-Subsec. (a)(5)(A). Pub. L. 107-56, Sec. 814(a)(1)-(3), designated existing provisions as cl. (i), redesignated subpars. (B) and (C) as cls. (ii) and (iii), respectively, of subpar. (A), and inserted "and" at end of cl. (iii). Subsec. (a)(5)(B). Pub. L. 107-56, Sec. 814(a)(4), added subpar. (B). Former subpar. (B) redesignated cl. (ii) of subpar. (A).

**18 U.S.C. 1030, Amendments note, 2008, subsec. (a)(5)**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section1030&num=0&edition=prelim`

> Subsec. (a)(5). Pub. L. 110-326, Sec. 204(a)(1), redesignated cls. (i) to (iii) of subpar. (A) as subpars. (A) to (C), respectively, substituted "damage and loss." for "damage; and" in subpar. (C), and struck out former subpar. (B) which read as follows: "(B) by conduct described in clause (i), (ii), or (iii) of subparagraph (A), caused (or, in the case of an attempted offense, would, if completed, have caused)- "(i) loss to 1 or more persons during any 1-year period (and, for purposes of an investigation, prosecution, or other proceeding brought by the United States only, loss resulting from a related course of conduct affecting 1 or more other protected computers) aggregating at least $5,000 in value; "(ii) the modification or impairment, or potential modification or impairment, of the medical examination, diagnosis, treatment, or care of 1 or more individuals; "(iii) physical injury to any person; "(iv) a threat to public health or safety; or "(v) damage affecting a computer system used by or for a government entity in furtherance of the administration of justice, national defense, or national security;".

**18 U.S.C. 1030, Amendments note, 2008, subsec. (c)(4) and subsecs. (i), (j)**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section1030&num=0&edition=prelim`

> Subsec. (c)(4). Pub. L. 110-326, Sec. 204(a)(2)(C), amended par. (4) generally. Prior to amendment, par. (4) related to fines and imprisonment for intentionally or recklessly causing damage to a protected computer without authorization. ... Subsecs. (i), (j). Pub. L. 110-326, Sec. 208, added subsecs. (i) and (j).

**21 U.S.C. 853(c)**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title21-section853&num=0&edition=prelim`

> (c) Third party transfers All right, title, and interest in property described in subsection (a) vests in the United States upon the commission of the act giving rise to forfeiture under this section. Any such property that is subsequently transferred to a person other than the defendant may be the subject of a special verdict of forfeiture and thereafter shall be ordered forfeited to the United States, unless the transferee establishes in a hearing pursuant to subsection (n) that he is a bona fide purchaser for value of such property who at the time of purchase was reasonably without cause to believe that the property was subject to forfeiture under this section.

**21 U.S.C. 853(d), the presumption 1030(i)(2) withholds**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title21-section853&num=0&edition=prelim`

> (d) Rebuttable presumption There is a rebuttable presumption at trial that any property of a person convicted of a felony under this subchapter or subchapter II is subject to forfeiture under this section if the United States establishes by a preponderance of the evidence that- (1) such property was acquired by such person during the period of the violation of this subchapter or subchapter II or within a reasonable time after such period; and (2) there was no likely source for such property other than the violation of this subchapter or subchapter II.

**21 U.S.C. 853(n)(2)**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title21-section853&num=0&edition=prelim`

> (2) Any person, other than the defendant, asserting a legal interest in property which has been ordered forfeited to the United States pursuant to this section may, within thirty days of the final publication of notice or his receipt of notice under paragraph (1), whichever is earlier, petition the court for a hearing to adjudicate the validity of his alleged interest in the property. The hearing shall be held before the court alone, without a jury.

### federal/healthcare-fraud

**18 U.S.C. 1518, fetched whole 2026-08-14, for the contrast with 1519. Section heading: "Obstruction of criminal investigations of health care offenses".**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section1518&num=0&edition=prelim`

> (a) Whoever willfully prevents, obstructs, misleads, delays or attempts to prevent, obstruct, mislead, or delay the communication of information or records relating to a violation of a Federal health care offense to a criminal investigator shall be fined under this title or imprisoned not more than 5 years, or both. (b) As used in this section the term "criminal investigator" means any individual duly authorized by a department, agency, or armed force of the United States to conduct or engage in investigations for prosecutions for violations of health care offenses.

**18 U.S.C. 1519, fetched whole 2026-08-14. Section heading: "Destruction, alteration, or falsification of records in Federal investigations and bankruptcy". Added Pub. L. 107-204, title VIII, sec. 802(a), July 30, 2002.**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section1519&num=0&edition=prelim`

> Whoever knowingly alters, destroys, mutilates, conceals, covers up, falsifies, or makes a false entry in any record, document, or tangible object with the intent to impede, obstruct, or influence the investigation or proper administration of any matter within the jurisdiction of any department or agency of the United States or any case filed under title 11, or in relation to or contemplation of any such matter or case, shall be fined under this title, imprisoned not more than 20 years, or both.

**18 U.S.C. 3161(b), fetched 2026-08-14. Both sentences, the second of which the page had omitted.**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section3161&num=0&edition=prelim`

> Any information or indictment charging an individual with the commission of an offense shall be filed within thirty days from the date on which such individual was arrested or served with a summons in connection with such charges. If an individual has been charged with a felony in a district in which no grand jury has been in session during such thirty-day period, the period of time for filing of the indictment shall be extended an additional thirty days.

**42 U.S.C. 1320a-7(c)(3)(B), fetched 2026-08-14. Re-record in full: the entry at PAGE-SOURCES.md carries subparagraph (G) and the (i) definitions but the waiver clause in (B) is what the page quotes, and its "under subsection (a)(1), (a)(3), or (a)(4)" limit was not carried.**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title42-section1320a-7&num=0&edition=prelim`

> (B) Subject to subparagraph (G), in the case of an exclusion under subsection (a), the minimum period of exclusion shall be not less than five years, except that, upon the request of the administrator of a Federal health care program (as defined in section 1320a-7b(f) of this title) who determines that the exclusion would impose a hardship on beneficiaries (as defined in section 1320a-7a(i)(5) of this title) of that program, the Secretary may, after consulting with the Inspector General of the Department of Health and Human Services, waive the exclusion under subsection (a)(1), (a)(3), or (a)(4) with respect to that program in the case of an individual or entity that is the sole community physician or sole source of essential specialized services in a community. The Secretary's decision whether to waive the exclusion shall not be reviewable.

**U.S. Sentencing Commission, Primer on Loss Calculation Under sec. 2B1.1 (2026), DISCLAIMER page (PDF sheet 2, unnumbered, preceding the table of contents at page i). Recorded in full, including the closing sentence the earlier draft entry omitted without an ellipsis. The attribution rule recorded at PAGE-SOURCES.md lines 1015-1019 needs correcting in one direction only: the quoted prima facie sentence is material the primer quotes and footnotes at 148 to USSG sec. 2B1.1, comment. (n.3(E)(viii)), rather than the primer's own commentary. Do not record the converse proposition that the disclaimer therefore does not reach that sentence. The disclaimer is written to "the information in this document" and draws no distinction between quoted and staff-written material, and the Guidelines Manual is not in this project's record.**, `https://www.ussc.gov/sites/default/files/pdf/training/primers/2026_Primer_Loss.pdf`

> DISCLAIMER  The Commission's legal staff publishes this document to assist in understanding and applying the sentencing guidelines. The information in this document should not be considered definitive or comprehensive. In addition, the information in this document does not necessarily represent the official position of the Commission on any particular issue or case, and it is not binding on the Commission, the courts, or the parties in any case. To the extent this document includes unpublished cases, practitioners should be cognizant of Fed. R. App. P. 32.1, as well as any corresponding rules in their jurisdictions.

**U.S. Sentencing Commission, Primer on Loss Calculation Under sec. 2B1.1 (2026), DISCLAIMER page. The attribution rule recorded at PAGE-SOURCES.md lines 1015-1019 must be corrected: the disclaimer governs the primer's own explanation, and the quoted prima facie sentence is not the primer's commentary but material the primer quotes and footnotes to the guideline commentary.**, `https://www.ussc.gov/sites/default/files/pdf/training/primers/2026_Primer_Loss.pdf`

> The Commission's legal staff publishes this document to assist in understanding and applying the sentencing guidelines. The information in this document should not be considered definitive or comprehensive. In addition, the information in this document does not necessarily represent the official position of the Commission on any particular issue or case, and it is not binding on the Commission, the courts, or the parties in any case.

**U.S. Sentencing Commission, Primer on Loss Calculation Under sec. 2B1.1 (2026), section IV.8, "Federal Health Care Offenses Involving Government Health Care Programs", page 20, with its footnote 148. Fetched as a PDF 2026-08-14. This SUPERSEDES the 2024 edition recorded earlier at PAGE-SOURCES.md line 1000; the current index at https://www.ussc.gov/guidelines/primers links 2026_Primer_Loss.pdf and lists no 2024 loss primer.**, `https://www.ussc.gov/sites/default/files/pdf/training/primers/2026_Primer_Loss.pdf`

> In federal health care fraud offenses involving a government health care program, "the aggregate dollar amount of fraudulent bills submitted to the Government health care program shall constitute prima facie evidence of the amount of the intended loss, i.e., is evidence sufficient to establish the amount of the intended loss, if not rebutted."148 However, objections to the loss amount alone do not constitute competent rebuttal evidence.149 A defendant instead must put forth evidence of legitimate services rendered150 or other specific evidence that a lower loss amount was intended.151 [footnote] 148 USSG §2B1.1, comment. (n.3(E)(viii)).

**U.S. Sentencing Commission, Primer on Loss Calculation Under sec. 2B1.1 (2026), section IV.C.8 (subsection C, Special Rules, item 8), "Federal Health Care Offenses Involving Government Health Care Programs", printed pages 21 to 22, with footnote 148 at printed page 21. PDF downloaded and converted in full 2026-08-14; the passage sits on PDF sheet 25 (which ends with the printed number 21) and runs onto PDF sheet 26 (printed number 22), and the primer's table of contents at page i lists item 8 at page 21. This SUPERSEDES the 2024 edition recorded earlier at PAGE-SOURCES.md line 1000, which should be marked superseded rather than left standing beside this entry; note that the 2024 entry attributes the same sentence to footnote 152 and n.3(F)(viii), so the application note letter moved between editions although the sentence did not. The index at https://www.ussc.gov/guidelines/primers links /sites/default/files/pdf/training/primers/2026_Primer_Loss.pdf for Loss Calculation under 2B1.1, confirmed by fetching the index this session.**, `https://www.ussc.gov/sites/default/files/pdf/training/primers/2026_Primer_Loss.pdf`

> In federal health care fraud offenses involving a government health care program, "the aggregate dollar amount of fraudulent bills submitted to the Government health care program shall constitute prima facie evidence of the amount of the intended loss, i.e., is evidence sufficient to establish the amount of the intended loss, if not rebutted."148 However, objections to the loss amount alone do not constitute competent rebuttal evidence.149 A defendant instead must put forth evidence of legitimate services rendered150 or other specific evidence that a lower loss amount was intended.151 [footnote, page 21] 148 USSG §2B1.1, comment. (n.3(E)(viii)). [next sentence in the primer, page 22, recorded for context and not relied on by the page because it states what courts have done] Courts have discounted the loss amount by the services rendered only if those services are medically necessary and otherwise in compliance with regulations.152

### federal/target-letter-defense

**18 U.S.C. 1001(a), flush penalty text following paragraphs (1) through (3). Source of the term now printed in the penalties row.**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section1001&num=0&edition=prelim`

> shall be fined under this title, imprisoned not more than 5 years or, if the offense involves international or domestic terrorism (as defined in section 2331), imprisoned not more than 8 years, or both. If the matter relates to an offense under chapter 109A, 109B, 110, or 117, or section 1591, then the term of imprisonment imposed under this section shall be not more than 8 years.

**18 U.S.C. 1001(b), the judicial-proceeding carve-out that the "Except as otherwise provided in this section" chapeau points at.**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section1001&num=0&edition=prelim`

> (b) Subsection (a) does not apply to a party to a judicial proceeding, or that party's counsel, for statements, representations, writings or documents submitted by such party or counsel to a judge or magistrate in that proceeding.

**18 U.S.C. 1001(c), the legislative-branch limitation, the second thing the chapeau points at.**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section1001&num=0&edition=prelim`

> (c) With respect to any matter within the jurisdiction of the legislative branch, subsection (a) shall apply only to—(1) administrative matters, including a claim for payment, a matter related to the procurement of property or services, personnel or employment practices, or support services, or a document required by law, rule, or regulation to be submitted to the Congress or any office or officer within the legislative branch; or (2) any investigation or review, conducted pursuant to the authority of any committee, subcommittee, commission or office of the Congress, consistent with applicable rules of the House or Senate.

**18 U.S.C. 1519, whole section, one sentence. Source of the 20-year term now printed in the penalties row.**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section1519&num=0&edition=prelim`

> Whoever knowingly alters, destroys, mutilates, conceals, covers up, falsifies, or makes a false entry in any record, document, or tangible object with the intent to impede, obstruct, or influence the investigation or proper administration of any matter within the jurisdiction of any department or agency of the United States or any case filed under title 11, or in relation to or contemplation of any such matter or case, shall be fined under this title, imprisoned not more than 20 years, or both.

**Fed. R. Crim. P. 6(e)(1), Recording the Proceedings. Enacted law binding a court, quoted in the secrecy section.**, `https://uscode.house.gov/view.xhtml?path=/prelim@title18a/title18a-node21&edition=prelim`

> (1) Recording the Proceedings. Except while the grand jury is deliberating or voting, all proceedings must be recorded by a court reporter or by a suitable recording device. But the validity of a prosecution is not affected by the unintentional failure to make a recording. Unless the court orders otherwise, an attorney for the government will retain control of the recording, the reporter's notes, and any transcript prepared from those notes.

**Fed. R. Crim. P. 6(e)(2)(A) and (B), Secrecy. Quoted verbatim in the secrecy section, including the seven-person list.**, `https://uscode.house.gov/view.xhtml?path=/prelim@title18a/title18a-node21&edition=prelim`

> (A) No obligation of secrecy may be imposed on any person except in accordance with Rule 6(e)(2)(B). (B) Unless these rules provide otherwise, the following persons must not disclose a matter occurring before the grand jury: (i) a grand juror; (ii) an interpreter; (iii) a court reporter; (iv) an operator of a recording device; (v) a person who transcribes recorded testimony; (vi) an attorney for the government; or (vii) a person to whom disclosure is made under Rule 6(e)(3)(A)(ii) or (iii).

**Fed. R. Crim. P. 6(f), Indictment and Return. The whole subdivision, including the return sentence the page previously shortened.**, `https://uscode.house.gov/view.xhtml?path=/prelim@title18a/title18a-node21&edition=prelim`

> (f) Indictment and Return. A grand jury may indict only if at least 12 jurors concur. The grand jury—or its foreperson or deputy foreperson—must return the indictment to a magistrate judge in open court. To avoid unnecessary cost or delay, the magistrate judge may take the return by video teleconference from the court where the grand jury sits. If a complaint or information is pending against the defendant and 12 jurors do not concur in the indictment, the foreperson must promptly and in writing report the lack of concurrence to the magistrate judge.

**Fed. R. Crim. P. 6(g), Discharging the Grand Jury. Quoted in timeline step 1; the source of the corrected step label.**, `https://uscode.house.gov/view.xhtml?path=/prelim@title18a/title18a-node21&edition=prelim`

> (g) Discharging the Grand Jury. A grand jury must serve until the court discharges it, but it may serve more than 18 months only if the court, having determined that an extension is in the public interest, extends the grand jury's service. An extension may be granted for no more than 6 months, except as otherwise provided by statute.

**JM 1-1.200, Authority, updated March 2024. DOJ policy only; justice.gov is never a source for what a statute says (D2 scope note).**, `https://www.justice.gov/jm/jm-1-1000-introduction`

> When the Justice Manual conflicts with earlier DOJ statements of policy or procedure, the Justice Manual controls. Any questions about the controlling internal policy or procedure should be directed to the Office of the Deputy Attorney General.

**JM 9-11.150, the three considerations weighed before approving a subpoena for a target, updated April 2018. DOJ policy only, not law (D2).**, `https://www.justice.gov/jm/jm-9-11000-grand-jury`

> In determining whether to approve a subpoena for a "target," careful attention will be paid to the following considerations: The importance to the successful conduct of the grand jury's investigation of the testimony or other information sought; Whether the substance of the testimony or other information sought could be provided by other witnesses; and Whether the questions the prosecutor and the grand jurors intend to ask or the other information sought would be protected by a valid claim of privilege.

**JM 9-11.151, delivery of the Advice of Rights form. DOJ policy only, not law (D2). This is the provision the FAQ 3 repair rests on.**, `https://www.justice.gov/jm/jm-9-11000-grand-jury`

> Notwithstanding the lack of a clear constitutional imperative, it is the policy of the Department that an "Advice of Rights" form be appended to all grand jury subpoenas to be served on any "target" or "subject" of an investigation. See advice of rights below. [...] When a district court insists that the notice of rights not be appended to a grand jury subpoena, the advice of rights may be set forth in a separate letter and mailed to or handed to the witness when the subpoena is served.

**JM 9-11.151, the on-the-record paragraphs, quoted in the advice-of-rights section. DOJ policy only, not law (D2).**, `https://www.justice.gov/jm/jm-9-11000-grand-jury`

> In addition, these "warnings" should be given by the prosecutor on the record before the grand jury and the witness should be asked to affirm that the witness understands them. [...] This supplemental advice of status of the witness as a target should be repeated on the record when the target witness is advised of the matters discussed in the preceding paragraphs.

**JM 9-11.153, Notification of Targets, whole section. DOJ policy only, not law (D2). Recorded because the FAQ 3 repair states that this section sets out no form text, and the record must show the section was read whole.**, `https://www.justice.gov/jm/jm-9-11000-grand-jury`

> When a target is not called to testify pursuant to JM 9-11.150, and does not request to testify on his or her own motion (see JM 9-11.152), the prosecutor, in appropriate cases, is encouraged to notify such person a reasonable time before seeking an indictment in order to afford him or her an opportunity to testify before the grand jury, subject to the conditions set forth in JM 9-11.152. Notification would not be appropriate in routine clear cases or when such action might jeopardize the investigation or prosecution because of the likelihood of flight, destruction or fabrication of evidence, endangerment of other witnesses, undue delay or otherwise would be inconsistent with the ends of justice.

**JM 9-11.155, Notification to Targets when Target Status Ends, the three clauses the page relies on. DOJ policy only, not law (D2).**, `https://www.justice.gov/jm/jm-9-11000-grand-jury`

> The United States Attorney has the discretion to notify an individual, who has been the target of a grand jury investigation, that the individual is no longer considered to be a target by the United States Attorney's Office. Such a notification should be provided only by the United States Attorney having cognizance over the grand jury investigation. Discontinuation of target status may be appropriate when: The target previously has been notified by the government that he or she was a target of the investigation; and, The criminal investigation involving the target has been discontinued without an indictment being returned charging the target, or the government receives evidence in a continuing investigation that conclusively establishes that target status has ended as to this individual. [...] The delivering of such a notification to a target or the attorney for the target shall not preclude the United States Attorney's Office or the grand jury having cognizance over the investigation (or any other grand jury) from reinstituting such an investigation without notification to the target, or the attorney for the target, if, in the opinion of that or any other grand jury, or any United

**JM 9-27.230, Comment to the substantial-federal-interest list, updated June 2023. DOJ policy only, not law (D2).**, `https://www.justice.gov/jm/jm-9-27000-principles-federal-prosecution`

> Comment. The list of relevant considerations is not intended to be all-inclusive. Moreover, not all of the factors will be applicable to every case, and in any particular case one factor may deserve more weight than it might in another case.

**JM 9-27.250, Comment, the non-criminal alternatives the page lists. DOJ policy only, not law (D2).**, `https://www.justice.gov/jm/jm-9-27000-principles-federal-prosecution`

> Examples of such non-criminal approaches include civil tax proceedings; civil actions under the False Claims Act or other statutory causes of action for false or fraudulent claims; civil actions under the securities, customs, antitrust, or other regulatory laws; administrative suspension and debarment or exclusion proceedings; civil judicial and administrative forfeiture; and reference of complaints to licensing authorities or to professional organizations such as bar associations.

### federal/weapons-gun-offenses

**18 U.S.C. 3142(f), both numbered paragraphs**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section3142&num=0&edition=prelim`

> (f) Detention Hearing.-The judicial officer shall hold a hearing to determine whether any condition or combination of conditions set forth in subsection (c) of this section will reasonably assure the appearance of such person as required and the safety of any other person and the community- (1) upon motion of the attorney for the Government, in a case that involves- ... (E) any felony that is not otherwise a crime of violence that involves a minor victim or that involves the possession or use of a firearm or destructive device (as those terms are defined in section 921), or any other dangerous weapon, or involves a failure to register under section 2250 of title 18, United States Code; or (2) upon motion of the attorney for the Government or upon the judicial officer's own motion in a case, that involves- (A) a serious risk that such person will flee; or (B) a serious risk that such person will obstruct or attempt to obstruct justice, or threaten, injure, or intimidate, or attempt to threaten, injure, or intimidate, a prospective witness or juror.

**18 U.S.C. 3142(f), chapeau, (f)(1)(A) through (E), and (f)(2)(A) and (B)**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section3142&num=0&edition=prelim`

> (f) Detention Hearing.-The judicial officer shall hold a hearing to determine whether any condition or combination of conditions set forth in subsection (c) of this section will reasonably assure the appearance of such person as required and the safety of any other person and the community- (1) upon motion of the attorney for the Government, in a case that involves- (A) a crime of violence, a violation of section 1591, or an offense listed in section 2332b(g)(5)(B) for which a maximum term of imprisonment of 10 years or more is prescribed; (B) an offense for which the maximum sentence is life imprisonment or death; (C) an offense for which a maximum term of imprisonment of ten years or more is prescribed in the Controlled Substances Act (21 U.S.C. 801 et seq.), the Controlled Substances Import and Export Act (21 U.S.C. 951 et seq.), or chapter 705 of title 46; (D) any felony if such person has been convicted of two or more offenses described in subparagraphs (A) through (C) of this paragraph, or two or more State or local offenses that would have been offenses described in subparagraphs (A) through (C) of this paragraph if a circumstance giving rise to Federal jurisdiction had exis

**18 U.S.C. 921(a)(33)(B)(ii)**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section921&num=0&edition=prelim`

> (ii) A person shall not be considered to have been convicted of such an offense for purposes of this chapter if the conviction has been expunged or set aside, or is an offense for which the person has been pardoned or has had civil rights restored (if the law of the applicable jurisdiction provides for the loss of civil rights under such an offense) unless the pardon, expungement, or restoration of civil rights expressly provides that the person may not ship, transport, possess, or receive firearms.

**18 U.S.C. 921(a)(33)(C), including the proviso and its closing exclusion**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section921&num=0&edition=prelim`

> (C) A person shall not be considered to have been convicted of a misdemeanor crime of domestic violence against an individual in a dating relationship for purposes of this chapter if the conviction has been expunged or set aside, or is an offense for which the person has been pardoned or has had firearm rights restored unless the expungement, pardon, or restoration of rights expressly provides that the person may not ship, transport, possess, or receive firearms: Provided, That, in the case of a person who has not more than 1 conviction of a misdemeanor crime of domestic violence against an individual in a dating relationship, and is not otherwise prohibited under this chapter, the person shall not be disqualified from shipping, transport, possession, receipt, or purchase of a firearm under this chapter if 5 years have elapsed from the later of the judgment of conviction or the completion of the person's custodial or supervisory sentence, if any, and the person has not subsequently been convicted of another such offense, a misdemeanor under Federal, State, Tribal, or local law which has, as an element, the use or attempted use of physical force, or the threatened use of a deadly we

**18 U.S.C. 924(a)(8)**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section924&num=0&edition=prelim`

> (8) Whoever knowingly violates subsection (d) or (g) of section 922 shall be fined under this title, imprisoned for not more than 15 years, or both.

**18 U.S.C. 924(c)(1)(B)**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section924&num=0&edition=prelim`

> (B) If the firearm possessed by a person convicted of a violation of this subsection- (i) is a short-barreled rifle, short-barreled shotgun, or semiautomatic assault weapon, the person shall be sentenced to a term of imprisonment of not less than 10 years; or (ii) is a machinegun or a destructive device, or is equipped with a firearm silencer or firearm muffler, the person shall be sentenced to a term of imprisonment of not less than 30 years.

**18 U.S.C. 924(c)(1)(C)**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section924&num=0&edition=prelim`

> (C) In the case of a violation of this subsection that occurs after a prior conviction under this subsection has become final, the person shall- (i) be sentenced to a term of imprisonment of not less than 25 years; and (ii) if the firearm involved is a machinegun or a destructive device, or is equipped with a firearm silencer or firearm muffler, be sentenced to imprisonment for life.

**18 U.S.C. 924(e)(1)**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section924&num=0&edition=prelim`

> (e)(1) In the case of a person who violates section 922(g) of this title and has three previous convictions by any court referred to in section 922(g)(1) of this title for a violent felony or a serious drug offense, or both, committed on occasions different from one another, such person shall be fined under this title and imprisoned not less than fifteen years, and, notwithstanding any other provision of law, the court shall not suspend the sentence of, or grant a probationary sentence to, such person with respect to the conviction under section 922(g).

**18 U.S.C. 924(e)(2)(B)**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section924&num=0&edition=prelim`

> (B) the term "violent felony" means any crime punishable by imprisonment for a term exceeding one year, or any act of juvenile delinquency involving the use or carrying of a firearm, knife, or destructive device that would be punishable by imprisonment for such term if committed by an adult, that- (i) has as an element the use, attempted use, or threatened use of physical force against the person of another; or (ii) is burglary, arson, or extortion, involves use of explosives, or otherwise involves conduct that presents a serious potential risk of physical injury to another; and

### federal/wire-mail-fraud

**18 U.S.C. 1341, Frauds and swindles, whole section, text in effect on August 13, 2026**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section1341&num=0&edition=prelim`

> Whoever, having devised or intending to devise any scheme or artifice to defraud, or for obtaining money or property by means of false or fraudulent pretenses, representations, or promises, or to sell, dispose of, loan, exchange, alter, give away, distribute, supply, or furnish or procure for unlawful use any counterfeit or spurious coin, obligation, security, or other article, or anything represented to be or intimated or held out to be such counterfeit or spurious article, for the purpose of executing such scheme or artifice or attempting so to do, places in any post office or authorized depository for mail matter, any matter or thing whatever to be sent or delivered by the Postal Service, or deposits or causes to be deposited any matter or thing whatever to be sent or delivered by any private or commercial interstate carrier, or takes or receives therefrom, any such matter or thing, or knowingly causes to be delivered by mail or such carrier according to the direction thereon, or at the place at which it is directed to be delivered by the person to whom it is addressed, any such matter or thing, shall be fined under this title or imprisoned not more than 20 years, or both. If th

**18 U.S.C. 1343, Fraud by wire, radio, or television, whole section, text in effect on August 13, 2026**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section1343&num=0&edition=prelim`

> Whoever, having devised or intending to devise any scheme or artifice to defraud, or for obtaining money or property by means of false or fraudulent pretenses, representations, or promises, transmits or causes to be transmitted by means of wire, radio, or television communication in interstate or foreign commerce, any writings, signs, signals, pictures, or sounds for the purpose of executing such scheme or artifice, shall be fined under this title or imprisoned not more than 20 years, or both. If the violation occurs in relation to, or involving any benefit authorized, transported, transmitted, transferred, disbursed, or paid in connection with, a presidentially declared major disaster or emergency (as those terms are defined in section 102 of the Robert T. Stafford Disaster Relief and Emergency Assistance Act (42 U.S.C. 5122)), or affects a financial institution, such person shall be fined not more than $1,000,000 or imprisoned not more than 30 years, or both.

### federal/drug-trafficking, final pass 2026-08-14

The 21 U.S.C. 860 material proposed in an earlier repair round was DROPPED
rather than recorded. Keeping it would have made this page the place a whole
statute enters the project record, quoted at length, for a paragraph about a
protected-place enhancement that is not what a page on 841 and 846 is for. A
reader facing one is holding an indictment that says section 860 on its face,
and what it means for them is a lawyer's answer. The provisions below are
load-bearing for the sentences that remain, so they are recorded.

**21 U.S.C. 841(a) and (a)(1) (uscode.house.gov, prelim, fetched 2026-08-14, text in effect on August 13, 2026)**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title21-section841&num=0&edition=prelim`

> Except as authorized by this subchapter, it shall be unlawful for any person knowingly or intentionally- (1) to manufacture, distribute, or dispense, or possess with intent to manufacture, distribute, or dispense, a controlled substance; or (2) to create, distribute, or dispense, or possess with intent to distribute or dispense, a counterfeit substance.

**21 U.S.C. 841(b), introductory text (uscode.house.gov, prelim, fetched 2026-08-14)**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title21-section841&num=0&edition=prelim`

> Except as otherwise provided in section 849, 859, 860, or 861 of this title, any person who violates subsection (a) of this section shall be sentenced as follows:

**21 U.S.C. 841(b)(1)(C), opening clause and prior conviction sentence (uscode.house.gov, prelim, fetched 2026-08-14)**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title21-section841&num=0&edition=prelim`

> In the case of a controlled substance in schedule I or II, gamma hydroxybutyric acid (including when scheduled as an approved drug product for purposes of section 3(a)(1)(B) of the Hillory J. Farias and Samantha Reid Date-Rape Drug Prohibition Act of 2000), or 1 gram of flunitrazepam, except as provided in subparagraphs (A), (B), and (D), such person shall be sentenced to a term of imprisonment of not more than 20 years and if death or serious bodily injury results from the use of such substance shall be sentenced to a term of imprisonment of not less than twenty years or more than life, a fine not to exceed the greater of that authorized in accordance with the provisions of title 18 or $1,000,000 if the defendant is an individual or $5,000,000 if the defendant is other than an individual, or both. If any person commits such a violation after a prior conviction for a felony drug offense has become final, such person shall be sentenced to a term of imprisonment of not more than 30 years and if death or serious bodily injury results from the use of such substance shall be sentenced to 

**21 U.S.C. 841(b)(1)(D), first and second sentences (uscode.house.gov, prelim, fetched 2026-08-14)**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title21-section841&num=0&edition=prelim`

> In the case of less than 50 kilograms of marihuana, except in the case of 50 or more marihuana plants regardless of weight, 10 kilograms of hashish, or one kilogram of hashish oil, such person shall, except as provided in paragraphs (4) and (5) of this subsection, be sentenced to a term of imprisonment of not more than 5 years, a fine not to exceed the greater of that authorized in accordance with the provisions of title 18 or $250,000 if the defendant is an individual or $1,000,000 if the defendant is other than an individual, or both. If any person commits such a violation after a prior conviction for a felony drug offense has become final, such person shall be sentenced to a term of imprisonment of not more than 10 years, a fine not to exceed the greater of twice that authorized in accordance with the provisions of title 18 or $500,000 if the defendant is an individual or $2,000,000 if the defendant is other than an individual, or both.

**21 U.S.C. 841(b)(1)(A), prior conviction sentence (uscode.house.gov, prelim, fetched 2026-08-14), the language subparagraph (A) uses for a qualifying prior**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title21-section841&num=0&edition=prelim`

> If any person commits such a violation after a prior conviction for a serious drug felony or serious violent felony has become final, such person shall be sentenced to a term of imprisonment of not less than 15 years and not more than life imprisonment

**21 U.S.C. 841(b)(1)(B), prior conviction sentence (uscode.house.gov, prelim, fetched 2026-08-14), the language subparagraph (B) uses for a qualifying prior**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title21-section841&num=0&edition=prelim`

> If any person commits such a violation after a prior conviction for a serious drug felony or serious violent felony has become final, such person shall be sentenced to a term of imprisonment which may not be less than 10 years and not more than life imprisonment

**21 U.S.C. 802(44), felony drug offense (uscode.house.gov, prelim, fetched 2026-08-14, text in effect on August 13, 2026)**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title21-section802&num=0&edition=prelim`

> The term "felony drug offense" means an offense that is punishable by imprisonment for more than one year under any law of the United States or of a State or foreign country that prohibits or restricts conduct relating to narcotic drugs, marihuana, anabolic steroids, or depressant or stimulant substances.

**21 U.S.C. 802(58), serious drug felony (uscode.house.gov, prelim, fetched 2026-08-14; paragraph (57) on the current page is "suspicious order")**, `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title21-section802&num=0&edition=prelim`

> The term "serious drug felony" means an offense described in section 924(e)(2) of title 18 for which- (A) the offender served a term of imprisonment of more than 12 months; and (B) the offender's release from any term of imprisonment was within 15 years of the commencement of the instant offense.

## Batch B, provisions the tables cannot hold, fetched 2026-08-14

These are federal provisions the bank fraud page rests on that no audited
table covers, for two different reasons. 18 U.S.C. 20 HAS a whole-section
audited table with ZERO rows, correctly, because the section is purely
definitional and assigns no punishment; the tables record provisions that
assign one. 18 U.S.C. 3293, 18 U.S.C. 3282, 18 U.S.C. 1014 and 12 U.S.C. 1829
have no table at all, for the same reason.

**Recording them here is not only provenance, it repairs a measure.**
scripts/check-pages.mts builds its compelled-text exclusion set from three
places: the fixed institutional phrases, the `quote` and `trigger` fields of
audited table ROWS, and the blockquotes in this file. A zero-row table
contributes nothing to it. So verbatim quotation of a definitional statute,
which this project REQUIRES to be verbatim, was being counted against the
pages as chosen prose: 58 of the shared runs between bank fraud and federal
wire and mail fraud were the two pages quoting 18 U.S.C. 20, which is the
ELEMENT on one page and the ENHANCEMENT trigger on the other. The agent that
found this said the fix plainly: recording the provisions here removes those
runs without a word of either page changing.

### What the fetches established

FETCHED AND READ WHOLE THIS SESSION (uscode.house.gov, prelim, 2026-08-14; each page carries the note that the text contains those laws in effect on August 13, 2026), with what the page did not already know.

1. 18 U.S.C. 3293, read whole. The section is a chapeau, three numbered paragraphs, and a flush closing clause. Chapeau: "No person shall be prosecuted, tried, or punished for a violation of, or a conspiracy to violate-". Paragraph (1): "section 215, 656, 657, 1005, 1006, 1007, 1014, 1033, or 1344". Paragraph (2): "section 1341 or 1343, if the offense affects a financial institution". Paragraph (3): "section 1963, to the extent that the racketeering activity involves a violation of section 1344". Flush: "unless the indictment is returned or the information is filed within 10 years after the commission of the offense." Source credit added by Pub. L. 101-73 in 1989, amended 1990 and 1994; the 1994 note reads that Pub. L. 103-322 struck out "1008," after "1007," and inserted "1033," after "1014,". NEW TO THE PAGE: paragraph (3) exists and is keyed to section 1344 conduct inside a section 1963 racketeering charge; the page had never mentioned it. Also confirmed: the section carries no "except as provided in" clause, and the ten years is written to a conspiracy to violate as well as to a violation.

2. 18 U.S.C. 3282, read whole. NEW TO THE PAGE: the section is not one sentence. Subsection (a) is the general five year rule, opening "Except as otherwise expressly provided by law, no person shall be prosecuted, tried, or punished" and closing "unless the indictment is found or the information is instituted within five years next after such offense". Subsection (b) exists and has paragraphs (1) to (3), on DNA profile indictments for chapter 109A offenses, none of which touches this charge. The page's old FAQ quoted (a) as though it were the section.

3. 12 U.S.C. 1829, structure read whole. NEW TO THE PAGE: the section runs (a) through (g), and the page knew only (a), (c), (d) and (e). Subsection (b) sets a penalty for violating the prohibition. Paragraph (c)(3) deals with de minimis offenses on conditions the Corporation sets by rule, with confinement limits and a check fraud threshold. Subsection (f) creates a written consent application procedure, with regional and national office review and a rehabilitation consideration requirement, which means the "prior written consent of the Corporation" in (a)(1) is a process rather than a theoretical opening. Subsection (g) defines the terms subsection (a) uses, among them consent application, criminal offense involving dishonesty, and pretrial diversion or similar program, so the phrase the page leans on in (a)(1) has a definition elsewhere in the same section.

4. 18 U.S.C. 1014, operative sentence read and its roster verified. This closes brief WC-02 DONE-CRITERIA item 14, which the brief recorded as UNMET and which carried an express instruction that the page must not enumerate 1014's covered institutions until the text was in hand. The page was already enumerating them. The enumeration it carried checks out, and the roster is wider than the page showed: it also names the Farm Credit Administration, the Federal Crop Insurance Corporation or a company the Corporation reinsures, the Secretary of Agriculture acting through the Farmers Home Administration, the Rural Development Administration or successor agency, any Farm Credit Bank, production credit association, agricultural credit association, bank for cooperatives, any regional agricultural credit corporation established pursuant to law, a Federal land bank and a Federal land bank association, the Small Business Administration, any Federal home loan bank, the Federal Housing Finance Agency, the Federal Deposit Insurance Corporation, the Farm Credit System Insurance Corporation, and the National Credit Union Administration Board. The operative text carries no "except" clause and no proviso; a definitional statement about State chartered credit unions sits at the end. The agricultural limbs are what make the point worth stating: 1014's roster is written in its own words and is not the roster at 18 U.S.C. 20.

5. A MECHANICAL FINDING ABOUT THE GATE ITSELF, and it explains the largest block of "shared" runs on the page. scripts/check-pages.mts builds its compelled-shingle exclusion set from three places only: COMPELLED_PHRASES, the `quote` and `trigger` fields of rows in the audited statute tables, and every blockquote line in docs/research/PAGE-SOURCES.md. src/lib/statute-tables/usc-20.ts is a whole-section audited table with ZERO rows, by design, because section 20 is purely definitional and assigns no degree. Zero rows means no `quote` field, which means the text of 18 U.S.C. 20 is not in the exclusion set at all. The same is true of 18 U.S.C. 27, 18 U.S.C. 3293, 18 U.S.C. 3282 and 12 U.S.C. 1829, none of which has a table and none of which appears as a blockquote in PAGE-SOURCES.md. So the 58 runs the gate attributes to the "text" section, and a large share of what it attributes to "mortgage" and to the FAQ, are the project's own compelled quotation rule being counted as chosen prose. Recording those provisions as blockquotes in PAGE-SOURCES.md is the mechanism the file documents for exactly this case, and it removes those runs without a word of the pages changing.

---
## Batch B repair round 1, the three pages that cleared verification

Recorded 2026-08-14. Each entry below was fetched and read whole by a repair
agent and then independently re-fetched by a verifier before the edit resting
on it was applied. The three pages here are white-collar/healthcare-fraud,
white-collar/bank-fraud and state/battery-defense. The other four batch B pages
failed verification and are in a second round; nothing from them is recorded
yet, because a source record is trusted by later work and a record written from
an unverified repair would be worse than no record at all.

WHERE AN EXCERPT BEGINS PART-WAY INTO A SUBSECTION IT IS MARKED WITH AN
ELLIPSIS. A verifier caught two entries in this batch that began mid-subsection
with no marker, silently dropping the sentences before them. An excerpt that
does not say it is an excerpt reads as the whole provision.

### white-collar/bank-fraud

**18 U.S.C. 3161(b), (c)(1), (h)**  
https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section3161&num=0&edition=prelim

> Fetched 2026-08-14; page carries "Text contains those laws in effect on August 13, 2026". (b), both sentences: "Any information or indictment charging an individual with the commission of an offense shall be filed within thirty days from the date on which such individual was arrested or served with a summons in connection with such charges. If an individual has been charged with a felony in a district in which no grand jury has been in session during such thirty-day period, the period of time for filing of the indictment shall be extended an additional thirty days." (c)(1), first sentence: "In any case in which a plea of not guilty is entered, the trial of a defendant charged in an information or indictment with the commission of an offense shall commence within seventy days from the filing date (and making public) of the information or indictment, or from the date the defendant has appeared before a judicial officer of the court in which such charge is pending, whichever date last occurs." (h), opening clause: "The following periods of delay shall be excluded in computing the time within which an information or an indictment must be filed, or in computing the time within which the trial of any such offense must commence:" (paragraphs not reproduced here; (h)(1)(D) is "delay resulting from any pretrial motion, from the filing of the motion through the conclusion of the hearing on, or other prompt disposition of, such motion").

[SUPERSEDED for (h), 2026-08-20: the (h) excerpt above is replaced as the citable basis by the whole-section 18 U.S.C. 3161 record in the Phase 1 section at the end of this file, which carries the READ-WHOLE marker. The (b) and (c)(1) quotations in this record remain good.]

**12 U.S.C. 1829(a)(1), (a)(2)(A), (a)(2)(B), (b), (c)(1)(A)**  
https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title12-section1829&num=0&edition=prelim

> Fetched 2026-08-14. (a)(1) "In general": "Except with the prior written consent of the Corporation- (A) any person who has been convicted of any criminal offense involving dishonesty or a breach of trust or money laundering, or has agreed to enter into a pretrial diversion or similar program in connection with a prosecution for such offense, may not- (i) become, or continue as, an institution-affiliated party with respect to any insured depository institution; (ii) own or control, directly or indirectly, any insured depository institution; or (iii) otherwise participate, directly or indirectly, in the conduct of the affairs of any insured depository institution; and (B) any insured depository institution may not permit any person referred to in subparagraph (A) to engage in any conduct or continue any relationship prohibited under such subparagraph." No end date appears in (a)(1). (a)(2) is headed "Minimum 10-year prohibition period for certain offenses"; (a)(2)(A) lists "section 215, 656, 657, 1005, 1006, 1007, 1008, 1014, 1032, 1344, 1517, 1956, or 1957 of title 18" and "section 1341 or 1343 of such title which affects any financial institution (as defined in section 20 of such title)", and the offense of conspiring to commit any such offense, then provides that "the Corporation may not consent to any exception to the application of paragraph (1) to such person during the 10-year period beginning on the date the conviction or the agreement of the person becomes final." (a)(2)(B): the sentencing court "may grant an exception ... if granting the exception is in the interest of justice," on motion of the Corporation filed "at any time during the 10-year period described in subparagraph (A)." (b): "Whoever knowingly violates subsection (a) shall be fined not more than $1,000,000 for each day such prohibition is violated or imprisoned for not more than 5 years, or both." (c)(1)(A): subsection (a) does not apply to an offense if "(i) it has been 7 years or more since the offense occurred; or (ii) the individual was incarcerated with respect to the offense and it has been 5 years or more since the individual was released from incarceration."

**18 U.S.C. 1344**  
https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section1344&num=0&edition=prelim

> Fetched 2026-08-14, whole section: "Whoever knowingly executes, or attempts to execute, a scheme or artifice- (1) to defraud a financial institution; or (2) to obtain any of the moneys, funds, credits, assets, securities, or other property owned by, or under the custody or control of, a financial institution, by means of false or fraudulent pretenses, representations, or promises; shall be fined not more than $1,000,000 or imprisoned not more than 30 years, or both." Source credit: added Pub. L. 98-473, title II, sec. 1108(a), Oct. 12, 1984; amended Pub. L. 101-73, title IX, sec. 961(k), Aug. 9, 1989; Pub. L. 101-647, title XXV, sec. 2504(j), Nov. 29, 1990. Editorial notes: "1990 - Pub. L. 101-647 substituted '30' for '20' before 'years'"; "1989 - Pub. L. 101-73 amended section generally, restating former subsec. (a) and striking out former subsec. (b) which defined 'federally chartered or insured financial institution'." The section states no dollar threshold, no tier and no minimum term, and contains no "except as provided in" clause.

### white-collar/healthcare-fraud

**F.S. 409.913(12) (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/409.913

> The complaint and all information obtained pursuant to an investigation of a Medicaid provider, or the authorized representative or agent of a provider, relating to an allegation of fraud, abuse, or neglect are confidential and exempt from the provisions of s. 119.07(1): (a) Until the agency takes final agency action with respect to the provider and requires repayment of any overpayment, or imposes an administrative sanction; (b) Until the Attorney General refers the case for criminal prosecution; (c) Until 10 days after the complaint is determined without merit; or (d) At all times if the complaint or information is otherwise protected by law.

**F.S. 409.913(22) (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/409.913

> A provider may not present records to contest an overpayment or sanction unless such records are contemporaneous and, if requested during the audit process, were furnished to the agency or its agent upon request. This limitation does not apply to Medicaid cost report audits. This limitation does not preclude consideration by the agency of addenda or modifications to a note if the addenda or modifications are made before notification of the audit, the addenda or modifications are germane to the note, and the note was made contemporaneously with a patient care episode. Notwithstanding the applicable rules of discovery, all documentation to be offered as evidence at an administrative hearing on a Medicaid overpayment or an administrative sanction must be exchanged by all parties at least 14 days before the administrative hearing or be excluded from consideration.

**F.S. 409.913(24) (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/409.913

> If the agency imposes an administrative sanction pursuant to subsection (13), subsection (14), or subsection (15), except paragraphs (15)(e) and (o), upon any provider or any principal, officer, director, agent, managing employee, or affiliated person of the provider who is regulated by another state entity, the agency shall notify that other entity of the imposition of the sanction within 5 business days. Such notification must include the provider's or person's name and license number and the specific reasons for sanction.

**F.S. 409.913(4) (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/409.913

> Any suspected criminal violation identified by the agency must be referred to the Medicaid Fraud Control Unit of the Office of the Attorney General for investigation. The agency and the Attorney General shall enter into a memorandum of understanding, which must include, but need not be limited to, a protocol for regularly sharing information and coordinating casework.

**F.S. 409.920(2)(a)1. (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/409.920

> A person may not: 1. Knowingly make, cause to be made, or aid and abet in the making of any false statement or false representation of a material fact, by commission or omission, in any claim submitted to the agency or its fiscal agent or a managed care plan for payment.

**F.S. 409.920(1)(e) (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/409.920

> "Managed care plans" means a health insurer authorized under chapter 624, an exclusive provider organization authorized under chapter 627, a health maintenance organization authorized under chapter 641, a prepaid health plan authorized under this chapter, a provider service network authorized under this chapter, a minority physician network authorized under this chapter, and an emergency department diversion program authorized under this chapter or the General Appropriations Act, providing health care services pursuant to a contract with the Medicaid program.

**F.S. 409.920(2)(b)2. (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/409.920

> The value of separate funds, goods, or services that a person received or attempted to receive pursuant to a scheme or course of conduct may be aggregated in determining the degree of the offense.

### state/battery-defense

**F.S. 784.07(2) (2025), the carve-in conditions attached to two classes inside the protected-person list**  
https://www.flsenate.gov/Laws/Statutes/2025/784.07

> Whenever any person is charged with knowingly committing an assault or battery upon a law enforcement officer, a firefighter, an emergency medical care provider, hospital personnel, a railroad special officer, a traffic accident investigation officer as described in s. 316.640, a nonsworn law enforcement agency employee who is certified as an agency inspector, a blood alcohol analyst, or a breath test operator while such employee is in uniform and engaged in processing, testing, evaluating, analyzing, or transporting a person who is detained or under arrest for DUI, a law enforcement explorer, a traffic infraction enforcement officer as described in s. 316.640, a parking enforcement specialist as defined in s. 316.640, a person licensed as a security officer as defined in s. 493.6101 and wearing a uniform that bears at least one patch or emblem that is visible at all times that clearly identifies the employing agency and that clearly identifies the person as a licensed security officer, a security officer employed by the board of trustees of a community college, or a utility worker engaged in work on critical infrastructure as defined in s. 812.141(1), while the officer, firefighter, emergency medical care provider, hospital personnel, railroad special officer, traffic accident investigation officer, traffic infraction enforcement officer, inspector, analyst, operator, law enforcement explorer, parking enforcement specialist, public transit employee or agent, security officer, or utility worker is engaged in the lawful performance of his or her duties, the offense for which the person is charged shall be reclassified as follows: (a) In the case of assault, from a misdemeanor of the second degree to a misdemeanor of the first degree. (b) In the case of battery, from a misdemeanor of the first degree to a felony of the third degree. Notwithstanding any other provision of law, a person convicted of battery upon a law enforcement officer committed in furtherance of a riot or an aggravated riot prohibited under s. 870.01 shall be sentenced to a minimum term of imprisonment of 6 months. (c) In the case of aggravated assault, from a felony of the third degree to a felony of the second degree. Notwithstanding any other provision of law, any person convicted of aggravated assault upon a law enforcement officer shall be sentenced to a minimum term of imprisonment of 3 years. (d) In the case of aggravated battery, from a felony of the second degree to a felony of the first degree. Notwithstanding any other provision of law, any person convicted of aggravated battery of a law enforcement officer shall be sentenced to a minimum term of imprisonment of 5 years. [Fetched 2026-08-14 with curl, HTML stripped locally. Note two conditions that a compressed list drops: the uniform-and-DUI-processing words on the nonsworn inspector, blood alcohol analyst and breath test operator entries, and the visible patch or emblem words on the licensed security officer. Note also that public transit employees or agents, defined at 784.07(1)(f), appear in the closing lawful-performance list but not in the charging list.]

**F.S. 784.011 (2025), whole section**  
https://www.flsenate.gov/Laws/Statutes/2025/784.011

> 784.011 Assault.—(1) An "assault" is an intentional, unlawful threat by word or act to do violence to the person of another, coupled with an apparent ability to do so, and doing some act which creates a well-founded fear in such other person that such violence is imminent. (2) Except as provided in subsection (3), a person who assaults another person commits a misdemeanor of the second degree, punishable as provided in s. 775.082 or s. 775.083. (3) A person who assaults another person in furtherance of a riot or an aggravated riot prohibited under s. 870.01 commits a misdemeanor of the first degree, punishable as provided in s. 775.082 or s. 775.083. History.—s. 5, Feb. 10, 1832; RS 2400; GS 3226; RGS 5059; CGL 7161; s. 1, ch. 70-88; s. 729, ch 71-136; s. 17, ch. 74-383; s. 7, ch. 75-298; s. 171, ch. 91-224; s. 4, ch. 2021-6. Note.—Former s. 784.02. [Fetched 2026-08-14 with curl, HTML stripped locally, read whole. The 60-day figure for the second degree misdemeanor comes from F.S. 775.082(4)(b), "For a misdemeanor of the second degree, by a definite term of imprisonment not exceeding 60 days", fetched the same day. Any page stating the 60 days must carry the subsection (3) riot exception, which is inside the same section and raises the grade to a first degree misdemeanor.]

**F.S. 921.0024(1)(b) (2025), the sentencing multipliers block and where its statutory-maximum cap is actually written**  
https://www.flsenate.gov/Laws/Statutes/2025/921.0024

> Sentencing multipliers: ... [separate flush paragraph] Violent offenses committed against specified justice system personnel: If the primary offense is a violation of s. 775.0823(2), (3), or (4), the subtotal sentence points are multiplied by 2.5. If the primary offense is a violation of s. 775.0823(5), (6), (7), (8), or (9), the subtotal sentence points are multiplied by 2.0. If the primary offense is a violation of s. 784.07(3) or s. 775.0875(1), or s. 775.0823(10) or (11), the subtotal sentence points are multiplied by 1.5. ... [separate flush paragraph] Offense related to a criminal gang: If the offender is convicted of the primary offense and committed that offense for the purpose of benefiting, promoting, or furthering the interests of a criminal gang as defined in s. 874.03, the subtotal sentence points are multiplied by 1.5. If applying the multiplier results in the lowest permissible sentence exceeding the statutory maximum sentence for the primary offense under chapter 775, the court may not apply the multiplier and must sentence the defendant to the statutory maximum sentence. ... [final flush paragraph of (1)(b)] Adult-on-minor sex offense: ... the subtotal sentence points are multiplied by 2.0. If applying the multiplier results in the lowest permissible sentence exceeding the statutory maximum sentence for the primary offense under chapter 775, the court may not apply the multiplier and must sentence the defendant to the statutory maximum sentence. [Fetched 2026-08-14 with curl and read element by element in the source markup, because flowed text hides the paragraph boundaries. Each named multiplier is its own flush paragraph. The statutory-maximum cap sentence is written inside the criminal gang paragraph and again inside the adult-on-minor sex offense paragraph. It is NOT written into the paragraph that names s. 784.07(3), and its repetition in two paragraphs is evidence it attaches to those multipliers rather than to the block as a whole. A page may quote it and say where it sits; a page may not state that it caps the 784.07(3) multiplier.]

### state/sex-crimes-defense

**F.S. 800.03 (2025), read whole**  
https://www.flsenate.gov/Laws/Statutes/2025/800.03

Fetched 2026-08-14 because the unverified-claim gate stopped the build on
/criminal-defense/sex-crimes-defense citing 800.03(2)(b), which brief
W4-02-sex-crimes.md had flagged UNVERIFIED. The section has no audited table:
it is not among the five the brief built the page on, and it appears there as
the offense that sits inside how people speak about this subject and outside
both statutory enumerations. The page's account of it checks out against the
text, including subsection (3), which it carries.

> Exposure of sexual organs.-- (1) A person commits unlawful exposure of sexual organs by: (a) Exposing or exhibiting his or her sexual organs in public or on the private premises of another, or so near thereto as to be seen from such private premises, in a vulgar or indecent manner; or (b) Being naked in public in a vulgar or indecent manner.
> (2)(a) Except as provided in paragraph (b), a violation of this section is a misdemeanor of the first degree, punishable as provided in s. 775.082 or s. 775.083. (b) A second or subsequent violation of this section is a felony of the third degree, punishable as provided in s. 775.082, s. 775.083, or s. 775.084.
> (3) The exposure of sexual organs by any of the following does not violate this section: (a) A mother breastfeeding her baby; or (b) An individual who is merely naked at any place provided or set apart for that purpose.

The catchline printed above the section is "Lewdness; indecent exposure", which
is the catchline of the whole run of sections rather than of 800.03 alone. The
section's own heading is "Exposure of sexual organs." The em dashes the statute
prints after the heading and in the history line are rendered "--" here under
the project's no-em-dash rule; no words are altered.

---

## Batch B repair round 2

Recorded 2026-08-14. Wire fraud and drug possession cleared verification.
Securities fraud and tax evasion did not, and both were applied anyway with the
verified defect corrected by hand rather than by a fourth agent round, because
the programme rule stops a run at three failures and the reason for that rule
is regression: round 2's fixes on the tax page introduced three new errors of
their own. What was corrected by hand is recorded with each entry.

ONE RECORD FROM THIS ROUND WAS TRIMMED BEFORE BEING WRITTEN DOWN, and the catch
belongs to the verifier. The F.S. 921.0022 entry quoted three LEVEL 1 rows as
verbatim. Two carried PRE-AMENDMENT dollar figures: 509.151(1) as "value
greater than $300" and 713.69 as "value $50 or more", where the current chart
reads $1,000 for each. The page relies on neither. It was independently
confirmed against the audited fs-921-0022.ts table, whose rows carry min 1000
for both, so two sources fetched a day apart agree against the record. Nothing
on the page was affected; a later innkeeper or landlord-tenant page taking the
record as verbatim would have published a figure wrong by 3x and by 20x. The
entry below is trimmed to the row the page actually rests on. A wrong source
record is worse than a wrong sentence, because the sentence is read once and
the record is trusted repeatedly.

### state/drug-possession-defense

**Fla. R. Crim. P. 3.191(a), Speedy Trial without Demand, first three sentences**  
https://www-media.floridabar.org/uploads/2026/08/2026_01-JUL-Criminal-Procedure-Rules-7-13-2026-2.pdf

> (a) Speedy Trial without Demand. Except as otherwise provided by this rule, and subject to the limitations imposed under subdivisions (e) and (f), every person charged with a crime shall be brought to trial within 90 days if the crime charged is a misdemeanor, or within 175 days if the crime charged is a felony. If trial is not commenced within these time periods, the defendant shall be entitled to the appropriate remedy as set forth in subdivision (o). The time periods established by this subdivision shall commence when the person is formally charged with a crime as defined under subdivision (d). [Florida Bar compilation, Rules of Criminal Procedure, updated July 13, 2026, page 125. Retrieved 2026-08-14, HTTP 200 with a browser user agent and a floridabar.org referer; text extracted locally with pdftotext -layout. This supersedes the PAGE-SOURCES.md entry, whose 2026/07 '-1.pdf' URL is now dead and whose quotation of (a) begins only at 'every person charged with a crime', omitting the opening limitation.]

**Fla. R. Crim. P. 3.191(d), Formally Charged**  
https://www-media.floridabar.org/uploads/2026/08/2026_01-JUL-Criminal-Procedure-Rules-7-13-2026-2.pdf

> (d) Formally Charged. For the purposes of this rule, a person is formally charged with a crime by information, or by indictment, or in the case of alleged misdemeanors by whatever documents constitute a formal charge. [Page 126, same retrieval. Matches the PAGE-SOURCES.md record word for word.]

**Fla. R. Crim. P. 3.191(e) and (f)**  
https://www-media.floridabar.org/uploads/2026/08/2026_01-JUL-Criminal-Procedure-Rules-7-13-2026-2.pdf

> (e) Prisoners outside Jurisdiction. A person who is in federal custody or incarcerated in a jail or correctional institution outside the jurisdiction of this state or a subdivision thereof, and who is charged with a crime, is not entitled to the benefit of this rule until that person returns or is returned to the jurisdiction of the court within which the Florida charge is pending and until written notice of the person's return is filed with the court and served on the prosecutor. ... (f) Consolidation of Felony and Misdemeanor. When a felony and a misdemeanor are consolidated for disposition in circuit court, the misdemeanor shall be governed by the same time period applicable to the felony. [Page 126, same retrieval. Neither subdivision had ever been recorded in PAGE-SOURCES.md.]

**Fla. R. Crim. P. 3.191(b) opening, and 3.191(o)(3)**  
https://www-media.floridabar.org/uploads/2026/08/2026_01-JUL-Criminal-Procedure-Rules-7-13-2026-2.pdf

> (b) Speedy Trial upon Demand. Except as otherwise provided by this rule, and subject to the limitations imposed under subdivisions (e) and (g), every person charged with a crime by indictment or information shall have the right to demand a trial within 60 days, by filing with the court a separate pleading entitled "Demand for Speedy Trial," and serving a copy on the prosecuting authority. ... (o)(3) No later than 5 days from the date of the filing of a notice of expiration of speedy trial time, the court shall hold a hearing on the notice and, unless the court finds that one of the reasons set forth in subdivision (j) exists, shall order that the defendant be brought to trial within 30 days. This recapture period is mandatory before any remedy will be given under this rule. [Pages 125 and 129, same retrieval.]

**F.S. 893.13(6)(a), whole paragraph**  
https://www.flsenate.gov/Laws/Statutes/2025/893.13

> (6)(a) A person may not be in actual or constructive possession of a controlled substance unless such controlled substance was lawfully obtained from a practitioner or pursuant to a valid prescription or order of a practitioner while acting in the course of his or her professional practice or to be in actual or constructive possession of a controlled substance except as otherwise authorized by this chapter. A person who violates this provision commits a felony of the third degree, punishable as provided in s. 775.082, s. 775.083, or s. 775.084. [Recorded whole because the page truncated this sentence in three places. The trailing clause is part of the same sentence, not a separate proviso, and there is no period after 'professional practice'.]

**F.S. 893.13(1)(a) and 893.13(2)(a), opening sentences**  
https://www.flsenate.gov/Laws/Statutes/2025/893.13

> (1)(a) Except as authorized by this chapter and chapter 499, a person may not sell, manufacture, or deliver, or possess with intent to sell, manufacture, or deliver, a controlled substance. [Subparagraphs 1., 2. and 3. then assign second degree felony, third degree felony and first degree misdemeanor by which paragraph of s. 893.03 names the substance.] (2)(a) Except as authorized by this chapter and chapter 499, a person may not purchase, or possess with intent to purchase, a controlled substance. [Recorded so no later edit describes (1)(a) as possession plus a purpose: selling, manufacturing and delivering are standalone prohibited acts there.]

**F.S. 893.13(8)(d), the one place 893.13 refers to trafficking**  
https://www.flsenate.gov/Laws/Statutes/2025/893.13

> (8)(d) Notwithstanding paragraph (c), if a prescribing practitioner has violated paragraph (a) and received $1,000 or more in payment for writing one or more prescriptions or, in the case of a prescription written for a controlled substance described in s. 893.135, has written one or more prescriptions for a quantity of a controlled substance which, individually or in the aggregate, meets the threshold for the offense of trafficking in a controlled substance under s. 893.135, the violation is reclassified as a felony of the second degree and ranked in level 4 of the Criminal Punishment Code. [Recorded so no later edit writes that trafficking is absent from s. 893.13.]

**F.S. 893.135(1), opening words**  
https://www.flsenate.gov/Laws/Statutes/2025/893.135

> 893.135 Trafficking; mandatory sentences; suspension or reduction of sentences; conspiracy to engage in trafficking. [em dash in the source, rendered here as a break] (1) Except as authorized in this chapter or in chapter 499 and notwithstanding the provisions of s. 893.13: [Punctuation note: the statute prints an em dash after the catchline; it is described rather than reproduced here because the repository bans em dashes in copy. No words are changed.]

**F.S. 921.0022 (2025), the row this page rests on**  
https://www.flsenate.gov/Laws/Statutes/2025/921.0022

> 517.302(1) | LEVEL 1 | 3rd degree felony | Fraudulent sale of securities.

Verified against the audited chart: 517.302(1) is the only chapter 517 row at level 1, the other three (517.07(1), 517.07(2), 517.12(1)) sitting at levels 4, 2 and 4, and 517.302(2) appears at no level, which is why the page takes that level from F.S. 921.0023(3). Its neighbours in chart order are 509.151(1) and 713.69. The rest of the fetched block is deliberately NOT reproduced here; see the note above.

**F.S. 921.0024(1)(a) worksheet tables**  
https://www.flsenate.gov/Laws/Statutes/2025/921.0024

> Primary Offense table: level 10 = 116, 9 = 92, 8 = 74, 7 = 56, 6 = 36, 5 = 28, 4 = 22, 3 = 16, 2 = 10, 1 = 4. Additional Offenses table: level 10 = 58, 9 = 46, 8 = 37, 7 = 28, 6 = 18, 5 = 5.4, 4 = 3.6, 3 = 2.4, 2 = 1.2, 1 = 0.7, M = 0.2 per count. The Primary Offense table carries no M row.

**F.S. 943.059(2) flush text and (2)(b) in full**  
https://www.flsenate.gov/Laws/Statutes/2025/943.059

> (2) CERTIFICATE OF ELIGIBILITY. [em dash in the source] Before petitioning the court to seal a criminal history record, a person seeking to seal a criminal history record must apply to the department for a certificate of eligibility for sealing. The department shall adopt rules relating to the application for and issuance of certificates of eligibility for sealing. (a) The department shall issue a certificate of eligibility for sealing to a person who is the subject of a criminal history record if that person: 1. Satisfies the eligibility criteria in paragraphs (1)(a)-(e) and is not ineligible for court-ordered sealing under s. 943.0584. 2. Has submitted to the department a certified copy of the disposition of charge to which the petition pertains. 3. Remits a $75 processing fee ... (b) A certificate of eligibility for sealing is valid for 12 months after the date stamped on the certificate when issued by the department. After that time, the petitioner must reapply to the department for a new certificate of eligibility. The status of the applicant and the law in effect at the time of the renewal application determine the petitioner's eligibility. [Punctuation note: the subsection heading is followed by an em dash in the source, described rather than reproduced.]

**F.S. 943.0584(1), whole subsection**  
https://www.flsenate.gov/Laws/Statutes/2025/943.0584

> (1) As used in this section, the term "conviction" means a determination of guilt which is the result of a trial or the entry of a plea of guilty or nolo contendere, regardless of whether adjudication is withheld, or if the defendant was a minor, a finding that the defendant committed or pled guilty or nolo contendere to committing a delinquent act, regardless of whether adjudication of delinquency is withheld.

### white-collar/wire-fraud

**Fla. R. Crim. P. 3.111(a), (b)(1), (c)(1), (c)(2), (c)(3) and 3.130(a) first sentence, (b)(1)(B), (c)(1), Florida Rules of Criminal Procedure, July 13, 2026 compilation, fetched 2026-08-14**  
https://www-media.floridabar.org/uploads/2026/08/2026_01-JUL-Criminal-Procedure-Rules-7-13-2026-2.pdf

> 3.111(a) When Counsel Provided: "A person entitled to appointment of counsel as provided herein shall have counsel appointed when the person is formally charged with an offense, or as soon as feasible after custodial restraint, or at the first appearance before a committing judge, whichever occurs earliest." 3.111(b)(1): "Counsel shall be provided to indigent persons in all prosecutions for offenses punishable by incarceration including appeals from the conviction thereof. In the discretion of the court, counsel does not have to be provided to an indigent person in a prosecution for a misdemeanor or violation of a municipal ordinance if the judge, at least 15 days prior to trial, files in the cause a written order of no incarceration certifying that the defendant will not be incarcerated in the case pending trial or probation violation hearing, or as part of a sentence after trial, guilty or nolo contendere plea, or probation revocation. This 15-day requirement may be waived by the defendant or defense counsel." 3.111(c) Duty of Booking Officer: "In addition to any other duty, the officer who commits a defendant to custody has the following duties: (1) The officer shall immediately advise the defendant: (A) of the right to counsel; (B) that, if the defendant is unable to pay a lawyer, one will be provided immediately at no charge. (2) If the defendant requests counsel or advises the officer that he or she cannot afford counsel, the officer shall immediately and effectively place the defendant in communication with the (office of) public defender of the circuit in which the arrest was made. (3) If the defendant indicates that he or she has an attorney or is able to retain an attorney, the officer shall immediately and effectively place the defendant in communication with the attorney or the Lawyer Referral Service of the local bar association." Subdivision (c) continues into (4) and (4)(A)-(B), which are not quoted here and are not relied on by any page sentence. 3.130(a) first sentence: "Except when previously released in a lawful manner, every arrested person must be taken before a judge, either in person or by audio-video communication technology in the discretion of the court, within 24 hours of arrest." 3.130(b)(1)(B): "if unrepresented, that the defendant has a right to counsel, and, if financially unable to afford counsel, that counsel will be appointed." 3.130(c)(1) Appointed Counsel: "If practicable, the judge should determine before the first appearance whether the defendant is financially able to afford counsel and whether the defendant desires representation. When the judge determines that the defendant is entitled to court-appointed counsel and desires counsel, the judge must immediately appoint counsel. This determination must be made and, if required, counsel appointed no later than the time of the first appearance and before any other proceedings at the first appearance. If necessary, counsel may be appointed for the limited purpose of representing the defendant only at first appearance or at subsequent proceedings before the judge." WHAT IS NEW HERE relative to the existing PAGE-SOURCES entries: 3.111(c)(1)-(3) verbatim (PAGE-SOURCES paraphrases (c)(1)-(2) inside a finding note and does not carry (c)(3) at all), the full opening carve-out of 3.130(a), and the first sentence of 3.130(c)(1). 3.111(a), (b)(1) and 3.130(b)(1)(B) duplicate text already recorded and are included so this entry quotes every subdivision its cite line names. URL NOTE, confirmed again on 2026-08-14: the /uploads/2026/07/...-1.pdf address returns 403; the /uploads/2026/08/...-2.pdf address returns HTTP 200 at 2,035,359 bytes with a browser user agent and 403 to a bare curl.

**F.S. 775.083(1) (2025), Fines**  
https://www.flsenate.gov/Laws/Statutes/2025/775.083

> "(1) A person who has been convicted of an offense other than a capital felony may be sentenced to pay a fine in addition to any punishment described in s. 775.082; when specifically authorized by statute, he or she may be sentenced to pay a fine in lieu of any punishment described in s. 775.082. A person who has been convicted of a noncriminal violation may be sentenced to pay a fine. Fines for designated crimes and for noncriminal violations shall not exceed: (a) $15,000, when the conviction is of a life felony. (b) $10,000, when the conviction is of a felony of the first or second degree. (c) $5,000, when the conviction is of a felony of the third degree. (d) $1,000, when the conviction is of a misdemeanor of the first degree. (e) $500, when the conviction is of a misdemeanor of the second degree or a noncriminal violation. (f) Any higher amount equal to double the pecuniary gain derived from the offense by the offender or double the pecuniary loss suffered by the victim. (g) Any higher amount specifically authorized by statute. Fines imposed in this subsection shall be deposited by the clerk of the court in the fine and forfeiture fund established pursuant to s. 142.01. If a defendant is unable to pay a fine, the court may defer payment of the fine to a date certain. As used in this subsection, the term 'convicted' or 'conviction' means a determination of guilt which is the result of a trial or the entry of a plea of guilty or nolo contendere, regardless of whether adjudication is withheld." That is subsection (1) contiguous and complete, with no ellipsis: the fine and forfeiture fund sentence and the deferred payment sentence sit between paragraph (g) and the 'convicted' definition and are quoted in place. Read on: (2) assesses court costs of $50 for a felony and $20 for any other offense; (3) makes the clerk of the court responsible for collection; (4) states the section is a general reference under the doctrine of incorporation by reference.

**F.S. 921.0022(1) and (2) (2025) (2025), the row this page rests on**  
https://www.flsenate.gov/Laws/Statutes/2025/921.0022

> 517.302(1) | LEVEL 1 | 3rd degree felony | Fraudulent sale of securities.

Verified against the audited chart: 517.302(1) is the only chapter 517 row at level 1, the other three (517.07(1), 517.07(2), 517.12(1)) sitting at levels 4, 2 and 4, and 517.302(2) appears at no level, which is why the page takes that level from F.S. 921.0023(3). Its neighbours in chart order are 509.151(1) and 713.69. The rest of the fetched block is deliberately NOT reproduced here; see the note above.

**F.S. 921.0023 (2025), Criminal Punishment Code; ranking unlisted felony offenses**  
https://www.flsenate.gov/Laws/Statutes/2025/921.0023

> Quoted from the operative text, beginning after the section heading so that no dash inside the source is silently re-rendered: "A felony offense committed on or after October 1, 1998, that is not listed in s. 921.0022 is ranked with respect to offense severity level by the Legislature, commensurate with the harm or potential harm that is caused by the offense to the community. Until the Legislature specifically assigns an offense to a severity level in the offense severity ranking chart, the severity level is within the following parameters: (1) A felony of the third degree within offense level 1. (2) A felony of the second degree within offense level 4. (3) A felony of the first degree within offense level 7. (4) A felony of the first degree punishable by life within offense level 9. (5) A life felony within offense level 10." History follows immediately: "s. 6, ch. 97-194; s. 5, ch. 98-204." Note the two conditions in the lead-in, the commission date on or after October 1, 1998 and the offense not being listed in s. 921.0022, and the framing word "parameters" rather than "default."

**F.S. 817.034(4)(b) and (4)(c) (2025), Florida Communications Fraud Act, offenses and reclassification**  
https://www.flsenate.gov/Laws/Statutes/2025/817.034

> "(b) Any person who engages in a scheme to defraud and, in furtherance of that scheme, communicates with any person with intent to obtain property from that person commits, for each such act of communication, communications fraud, punishable as follows: 1. If the value of property obtained or endeavored to be obtained by the communication is valued at $300 or more, the person commits a third degree felony, punishable as set forth in s. 775.082, s. 775.083, or s. 775.084. 2. If the value of the property obtained or endeavored to be obtained by the communication is valued at less than $300, the person commits a misdemeanor of the first degree, punishable as set forth in s. 775.082 or s. 775.083. (c) The penalty for committing an offense specified in paragraph (a) or paragraph (b) against a person age 65 years or older, against a minor, or against a person with a mental or physical disability, as defined in s. 775.0863(1)(b), shall be reclassified as follows: 1. A misdemeanor of the first degree is reclassified to a felony of the third degree. 2. A felony of the third degree is reclassified to a felony of the second degree. 3. A felony of the second degree is reclassified to a felony of the first degree. 4. A felony of the first degree is reclassified to a life felony." Read against paragraph (a), whose subparagraphs 1., 2. and 3. produce a felony of the first, second and third degree respectively: the misdemeanor of the first degree that (4)(c)1. takes as its input arises at (4)(b)2., and the third degree felonies that (4)(c)2. can take as input arise at (4)(a)3. and (4)(b)1. Recorded because the repair's two penalties-row edits rest on these relationships rather than on the row text already on the page.

### white-collar/securities-fraud

**18 U.S.C. 1348, fetched whole 2026-08-14 from uscode.house.gov. Section heading: "Securities and commodities fraud". Added Pub. L. 107-204, title VIII, sec. 807(a), July 30, 2002, 116 Stat. 804; amended Pub. L. 111-21, sec. 2(e)(1), May 20, 2009, 123 Stat. 1618. Currency line: "Text contains those laws in effect on August 13, 2026". Recorded because the CHARGE_C9 assertion, the metaDescription and the forum heading all said the section reaches the securities of a registered or reporting issuer, which the text defeats: each paragraph states three independent objects and two of them carry no issuer element, no section 12 registration and no 15(d) reporting. The 2009 amendment note shows the commodities limbs were inserted into both paragraphs, which is the opposite direction from the narrowing those three fields described. Read through the penalty clause: the section states no dollar threshold, no mandatory minimum and no exception clause of its own.**  
https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section1348&num=0&edition=prelim

> Whoever knowingly executes, or attempts to execute, a scheme or artifice- (1) to defraud any person in connection with any commodity for future delivery, or any option on a commodity for future delivery, or any security of an issuer with a class of securities registered under section 12 of the Securities Exchange Act of 1934 (15 U.S.C. 78l) or that is required to file reports under section 15(d) of the Securities Exchange Act of 1934 (15 U.S.C. 78o(d)); or (2) to obtain, by means of false or fraudulent pretenses, representations, or promises, any money or property in connection with the purchase or sale of any commodity for future delivery, or any option on a commodity for future delivery, or any security of an issuer with a class of securities registered under section 12 of the Securities Exchange Act of 1934 (15 U.S.C. 78l) or that is required to file reports under section 15(d) of the Securities Exchange Act of 1934 (15 U.S.C. 78o(d)); shall be fined under this title, or imprisoned not more than 25 years, or both. (Added Pub. L. 107-204, title VIII, sec. 807(a), July 30, 2002, 116 Stat. 804; amended Pub. L. 111-21, sec. 2(e)(1), May 20, 2009, 123 Stat. 1618.) [Editorial Notes, Amendments] 2009 - Pub. L. 111-21, sec. 2(e)(1)(A), inserted "and commodities" before "fraud" in section catchline. Pars. (1), (2). Pub. L. 111-21, sec. 2(e)(1)(B), (C), inserted "any commodity for future delivery, or any option on a commodity for future delivery, or" before "any security".

**F.S. 517.302 (2025), fetched whole 2026-08-14 from flsenate.gov, subsections (1) through (5) plus History. Title: "Criminal penalties; alternative fine; Anti-Fraud Trust Fund; time limitation for criminal prosecution." Recorded for the two things the C9 assertion got wrong about subsection (2): the escalation is gated on a violation of s. 517.301 specifically, not on any chapter 517 violation, and it requires the aggregate value AND the person count together, not either one.**  
https://www.flsenate.gov/Laws/Statutes/2025/517.302

> 517.302 Criminal penalties; alternative fine; Anti-Fraud Trust Fund; time limitation for criminal prosecution.- (1) Whoever violates any of the provisions of this chapter is guilty of a felony of the third degree, punishable as provided in s. 775.082, s. 775.083, or s. 775.084. (2) Any person who violates s. 517.301 by obtaining money or property of an aggregate value exceeding $50,000 from five or more persons is guilty of a felony of the first degree, punishable as provided in s. 775.082, s. 775.083, or s. 775.084. (3) In lieu of a fine otherwise authorized by law, a person who has been convicted of or who has pleaded guilty or no contest to having engaged in conduct in violation of this chapter may be sentenced to pay a fine that does not exceed the greater of three times the gross value gained or three times the gross loss caused by such conduct, plus court costs and the costs of investigation and prosecution reasonably incurred. (4) There is created within the office a trust fund to be known as the Anti-Fraud Trust Fund. Any amounts assessed as costs of investigation and prosecution under this subsection shall be deposited in the trust fund. Funds deposited in the trust fund must be used, when authorized by appropriation, for investigation and prosecution of administrative, civil, and criminal actions arising under this chapter. Funds may also be used to improve the public's awareness and understanding of prudent investing. (5) Criminal prosecution for offenses under this chapter is subject to the time limitations in s. 775.15.

**F.S. 517.301 (2025), fetched whole 2026-08-14 from flsenate.gov, subsections (1) through (7) plus History. Title: "Fraudulent transactions; falsification or concealment of facts." Recorded for three points: subsection (1) has three paragraphs, (a), (b) and (c), and the page's elements bullets skipped (b) entirely; paragraph (1)(b)'s disclosure clause carries "whether past or prospective" inside it; and subsection (6) governs statements THAT a person or security IS registered, not registration statements. The section assigns no degree of offense anywhere in its text, which is why the degree comes from 517.302.**  
https://www.flsenate.gov/Laws/Statutes/2025/517.301

> 517.301 Fraudulent transactions; falsification or concealment of facts.- (1) It is unlawful and a violation of this chapter for a person: (a) In connection with the rendering of any investment advice or in connection with the offer, sale, or purchase of any investment or security, including any security exempted under s. 517.051 and including any security sold in a transaction exempted under s. 517.061, s. 517.0611, or s. 517.0612, directly or indirectly: 1. To employ any device, scheme, or artifice to defraud; 2. To obtain money or property by means of any untrue statement of a material fact or any omission to state a material fact necessary in order to make the statements made, in the light of the circumstances under which they were made, not misleading; or 3. To engage in any transaction, practice, or course of business which operates or would operate as a fraud or deceit upon a person. (b) By use of any means, to publish, give publicity to, or circulate any notice, circular, advertisement, newspaper, article, letter, investment service, communication, or broadcast that, although not purporting to offer a security for sale, describes such security for a consideration received or to be received directly or indirectly from an issuer, underwriter, or dealer, or from an agent or employee of an issuer, underwriter, or dealer, without fully disclosing the receipt, whether past or prospective, of such consideration and the amount of the consideration. (c) In any matter within the jurisdiction of the office, to knowingly and willfully falsify, conceal, or cover up, by any trick, scheme, or device, a material fact, make any false, fictitious, or fraudulent statement or representation, or make or use any false writing or document, knowing the same to contain any false, fictitious, or fraudulent statement or entry. (2) For purposes of this section, the term "investment" means any commitment of money or property principally induced by a representation that an economic benefit may be derived from such commitment, except that the term does not include a commitment of money or property for: (a) The purchase of a business opportunity, business enterprise, or real property through a person licensed under chapter 475 or registered under former chapter 498; or (b) The purchase of tangible personal property through a person not engaged in telephone solicitation, electronic mail, text messages, social media, or other electronic means where there are no specific representations or guarantees made by the offeror or seller as to the economic benefit to be derived from the purchase. [(3), (4) and (5) reach misrepresentations of guarantee, sponsorship, recommendation or approval by the state or the United States or an agency or officer of either.] (6)(a) Subsection (3) or subsection (4) may not be construed to prohibit a statement that a person or security is registered or has made a notice filing under this chapter if such statement is required by this chapter or rules promulgated thereunder and is true in fact and if the effect of such statement is not a misrepresentation. (b) A statement that a person is registered made in connection with the offer or sale of a security under this chapter must include the following disclaimer: "Registration does not imply that such person has been sponsored, recommended, or approved by the state or an agency or officer of the state or by the United States or an agency or officer of the United States." 1. If the statement of registration is made in writing, the disclaimer must immediately follow such statement and must be in the same size and style of print as the statement of registration. 2. If the statement of registration is made orally, the disclaimer must be made or broadcast with the same force and effect as the statement of registration. (7) It is unlawful and a violation of this chapter for a person to directly or indirectly manage, supervise, control, or own, either alone or in association with others, a boiler room in this state which sells or offers for sale a security or investment in violation of subsection (1), subsection (3), subsection (4), subsection (5), or subsection (6).

**F.S. 921.0022 (2025) (2025), the row this page rests on**  
https://www.flsenate.gov/Laws/Statutes/2025/921.0022

> 517.302(1) | LEVEL 1 | 3rd degree felony | Fraudulent sale of securities.

Verified against the audited chart: 517.302(1) is the only chapter 517 row at level 1, the other three (517.07(1), 517.07(2), 517.12(1)) sitting at levels 4, 2 and 4, and 517.302(2) appears at no level, which is why the page takes that level from F.S. 921.0023(3). Its neighbours in chart order are 509.151(1) and 713.69. The rest of the fetched block is deliberately NOT reproduced here; see the note above.

### white-collar/tax-evasion

**18 U.S.C. 3559(a) (uscode.house.gov, prelim edition, retrieved 2026-08-14)**  
https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section3559&num=0&edition=prelim

> (a) Classification.-An offense that is not specifically classified by a letter grade in the section defining it, is classified if the maximum term of imprisonment authorized is- (1) life imprisonment, or if the maximum penalty is death, as a Class A felony; (2) twenty-five years or more, as a Class B felony; (3) less than twenty-five years but ten or more years, as a Class C felony; (4) less than ten years but five or more years, as a Class D felony; (5) less than five years but more than one year, as a Class E felony; (6) one year or less but more than six months, as a Class A misdemeanor; (7) six months or less but more than thirty days, as a Class B misdemeanor; (8) thirty days or less but more than five days, as a Class C misdemeanor; or (9) five days or less, or if no imprisonment is authorized, as an infraction. (b) Effect of Classification.-Except as provided in subsection (c), an offense classified under subsection (a) carries all the incidents assigned to the applicable letter designation, except that the maximum term of imprisonment is the term authorized by the law describing the offense.

**18 U.S.C. 3571 (uscode.house.gov, prelim edition, retrieved 2026-08-14)**  
https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section3571&num=0&edition=prelim

> (b) Fines for Individuals.-Except as provided in subsection (e) of this section, an individual who has been found guilty of an offense may be fined not more than the greatest of- (1) the amount specified in the law setting forth the offense; (2) the applicable amount under subsection (d) of this section; (3) for a felony, not more than $250,000; (4) for a misdemeanor resulting in death, not more than $250,000; (5) for a Class A misdemeanor that does not result in death, not more than $100,000; (6) for a Class B or C misdemeanor that does not result in death, not more than $5,000; or (7) for an infraction, not more than $5,000. (c) Fines for Organizations.-Except as provided in subsection (e) of this section, an organization that has been found guilty of an offense may be fined not more than the greatest of- (1) the amount specified in the law setting forth the offense; (2) the applicable amount under subsection (d) of this section; (3) for a felony, not more than $500,000 ... (d) Alternative Fine Based on Gain or Loss.-If any person derives pecuniary gain from the offense, or if the offense results in pecuniary loss to a person other than the defendant, the defendant may be fined not more than the greater of twice the gross gain or twice the gross loss, unless imposition of a fine under this subsection would unduly complicate or prolong the sentencing process. (e) Special Rule for Lower Fine Specified in Substantive Provision.-If a law setting forth an offense specifies no fine or a fine that is lower than the fine otherwise applicable under this section and such law, by specific reference, exempts the offense from the applicability of the fine otherwise applicable under this section, the defendant may not be fined more than the amount specified in the law setting forth the offense.

**26 U.S.C. 7203 (uscode.house.gov, prelim edition, retrieved 2026-08-14)**  
https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section7203&num=0&edition=prelim

> Any person required under this title to pay any estimated tax or tax, or required by this title or by regulations made under authority thereof to make a return, keep any records, or supply any information, who willfully fails to pay such estimated tax or tax, make such return, keep such records, or supply such information, at the time or times required by law or regulations, shall, in addition to other penalties provided by law, be guilty of a misdemeanor and, upon conviction thereof, shall be fined not more than $25,000 ($100,000 in the case of a corporation), or imprisoned not more than 1 year, or both, together with the costs of prosecution. In the case of any person with respect to whom there is a failure to pay any estimated tax, this section shall not apply to such person with respect to such failure if there is no addition to tax under section 6654 or 6655 with respect to such failure. In the case of a willful violation of any provision of section 6050I, the first sentence of this section shall be applied by substituting "felony" for "misdemeanor" and "5 years" for "1 year". [Read to the end of the operative text: the section contains no reference exempting the offense from 18 U.S.C. 3571.]

**26 U.S.C. 7201 (uscode.house.gov, prelim edition, retrieved 2026-08-14)**  
https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section7201&num=0&edition=prelim

> Any person who willfully attempts in any manner to evade or defeat any tax imposed by this title or the payment thereof shall, in addition to other penalties provided by law, be guilty of a felony and, upon conviction thereof, shall be fined not more than $100,000 ($500,000 in the case of a corporation), or imprisoned not more than 5 years, or both, together with the costs of prosecution. [Read to the end: the section contains no reference exempting the offense from 18 U.S.C. 3571.]

**26 U.S.C. 7206 (uscode.house.gov, prelim edition, retrieved 2026-08-14)**  
https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section7206&num=0&edition=prelim

> Any person who- (1) Declaration under penalties of perjury Willfully makes and subscribes any return, statement, or other document, which contains or is verified by a written declaration that it is made under the penalties of perjury, and which he does not believe to be true and correct as to every material matter; or ... (4) Removal or concealment with intent to defraud Removes, deposits, or conceals, or is concerned in removing, depositing, or concealing, any goods or commodities for or in respect whereof any tax is or shall be imposed, or any property upon which levy is authorized by section 6331, with intent to evade or defeat the assessment or collection of any tax imposed by this title; or (5) ... shall be guilty of a felony and, upon conviction thereof, shall be fined not more than $100,000 ($500,000 in the case of a corporation), or imprisoned not more than 3 years, or both, together with the costs of prosecution. [Read to the end: the section contains no reference exempting the offense from 18 U.S.C. 3571.]

**F.S. 212.12(2)(c), (2)(d), (2)(e), (12) (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/212.12

> (2)(c) Any person who knowingly and with a willful intent to evade any tax imposed under this chapter fails to file six consecutive returns as required by law commits a felony of the third degree, punishable as provided in s. 775.082 or s. 775.083. (d) A person who makes a false or fraudulent return and who has a willful intent to evade payment of any tax or fee imposed under this chapter is liable for a specific penalty of 100 percent of any unreported tax or fee. This penalty is in addition to any other penalty provided by law. A person who makes a false or fraudulent return with a willful intent to evade payment of taxes or fees totaling: 1. Less than $300: a. For a first offense, commits a misdemeanor of the second degree, punishable as provided in s. 775.082 or s. 775.083. b. For a second offense, commits a misdemeanor of the first degree, punishable as provided in s. 775.082 or s. 775.083. c. For a third or subsequent offense, commits a felony of the third degree, punishable as provided in s. 775.082, s. 775.083, or s. 775.084. 2. An amount equal to $300 or more, but less than $20,000, commits a felony of the third degree, punishable as provided in s. 775.082, s. 775.083, or s. 775.084. 3. An amount equal to $20,000 or more, but less than $100,000, commits a felony of the second degree, punishable as provided in s. 775.082, s. 775.083, or s. 775.084. 4. An amount equal to $100,000 or more, commits a felony of the first degree, punishable as provided in s. 775.082, s. 775.083, or s. 775.084. (e) A person who willfully attempts in any manner to evade any tax, surcharge, or fee imposed under this chapter or the payment thereof is, in addition to any other penalties provided by law, liable for a specific penalty in the amount of 100 percent of the tax, surcharge, or fee, and commits a felony of the third degree, punishable as provided in s. 775.082, s. 775.083, or s. 775.084. ... (12) ... such owner; property manager; lessor; landlord; hotel, apartment house, roominghouse, tourist or trailer camp operator; receiver of rent or license fees; or real estate agent is guilty of a misdemeanor of the second degree, punishable as provided in s. 775.082 or s. 775.083, for the first offense; for subsequent offenses, they are each guilty of a misdemeanor of the first degree, punishable as provided in s. 775.082 or s. 775.083. If, however, any subsequent offense involves intentional destruction of such records with an intent to evade payment of or deprive the state of any tax revenues, such subsequent offense shall be a felony of the third degree, punishable as provided in s. 775.082 or s. 775.083. [Section heading: Dealer's credit for collecting tax; penalties for noncompliance; powers of Department of Revenue in dealing with delinquents; rounding; records required. Chapter 212 is titled Tax on sales, use, and other transactions.]

**F.S. 212.085 (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/212.085

> 212.085 Fraudulent claim of exemption; penalties.-When any person shall fraudulently, for the purpose of evading tax, issue to a vendor or to any agent of the state a certificate or statement in writing in which he or she claims exemption from sales tax, such person, in addition to being liable for payment of the tax plus a mandatory penalty of 200 percent of the tax, shall be liable for fine and punishment as provided by law for a conviction of a felony of the third degree, as provided in s. 775.082, s. 775.083, or s. 775.084.

**F.S. 212.15(1), (2), (3) (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/212.15

> (1) The taxes imposed by this chapter shall, except as provided in s. 212.06(5)(a)2.e., become state funds at the moment of collection and shall for each month be due to the department on the first day of the succeeding month and be delinquent on the 21st day of such month. All returns postmarked after the 20th day of such month are delinquent. (2) Any person who, with intent to unlawfully deprive or defraud the state of its moneys or the use or benefit thereof, fails to remit taxes collected or paid on behalf of a purchaser under this chapter commits theft of state funds, punishable as follows: (a) If the total amount of stolen revenue is less than $1,000, the offense is a misdemeanor of the second degree ... Upon a second conviction, the offender commits a misdemeanor of the first degree ... Upon a third or subsequent conviction, the offender commits a felony of the third degree ... (b) $1,000 or more, but less than $20,000, felony of the third degree. (c) $20,000 or more, but less than $100,000, felony of the second degree. (d) $100,000 or more, felony of the first degree ... The amount of stolen revenue may be aggregated in determining the grade of the offense. (3) Prosecution of a misdemeanor under this section shall commence no later than 2 years from the date of the offense. Prosecution of a felony under this section shall commence no later than 5 years from the date of the offense.

**F.S. 213.29 (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/213.29

> 213.29 Failure to collect and pay over tax or attempt to evade or defeat tax.-Any person who is required to collect, truthfully account for, and pay over any tax enumerated in chapter 201, chapter 206, or chapter 212 and who willfully fails to collect such tax or truthfully account for and pay over such tax or willfully attempts in any manner to evade or defeat such tax or the payment thereof; or any officer or director of a corporation who has administrative control over the collection and payment of such tax and who willfully directs any employee of the corporation to fail to collect or pay over, evade, defeat, or truthfully account for such tax shall, in addition to other penalties provided by law, be liable to a penalty equal to twice the total amount of the tax evaded or not accounted for or paid over. The filing of a protest based upon doubt as to liability or collection of a tax shall not be determined to be an attempt to evade tax under this section. The penalty imposed hereunder shall be in addition to any other penalty imposed or that should have been imposed under the revenue laws of this state, but shall be abated to the extent that the tax is paid. Any penalty may be compromised by the executive director of the Department of Revenue as set forth in s. 213.21. An assessment of penalty made pursuant to this section shall be deemed prima facie correct in any judicial or quasi-judicial proceeding brought to collect this penalty. [Read whole: the section states no offense degree, no term of imprisonment, and does not use the word civil.]

**F.S. 921.0022 offense severity ranking chart (2025) (2025), the row this page rests on**  
https://www.flsenate.gov/Laws/Statutes/2025/921.0022

> 517.302(1) | LEVEL 1 | 3rd degree felony | Fraudulent sale of securities.

Verified against the audited chart: 517.302(1) is the only chapter 517 row at level 1, the other three (517.07(1), 517.07(2), 517.12(1)) sitting at levels 4, 2 and 4, and 517.302(2) appears at no level, which is why the page takes that level from F.S. 921.0023(3). Its neighbours in chart order are 509.151(1) and 713.69. The rest of the fetched block is deliberately NOT reproduced here; see the note above.

**F.S. 921.0023 (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/921.0023

> 921.0023 Criminal Punishment Code; ranking unlisted felony offenses.-A felony offense committed on or after October 1, 1998, that is not listed in s. 921.0022 is ranked with respect to offense severity level by the Legislature, commensurate with the harm or potential harm that is caused by the offense to the community. Until the Legislature specifically assigns an offense to a severity level in the offense severity ranking chart, the severity level is within the following parameters: (1) A felony of the third degree within offense level 1. (2) A felony of the second degree within offense level 4. (3) A felony of the first degree within offense level 7. (4) A felony of the first degree punishable by life within offense level 9. (5) A life felony within offense level 10.

---

## De-duplication round 2, fetch records

Recorded 2026-08-14. These are FETCH RECORDS, not quotation records. Each names
what was opened, from where, and what it established. **No verbatim excerpt is
given below**, deliberately: the agents returned prose descriptions of what they
read rather than transcriptions, and inventing a blockquote from a description
is precisely the failure D26 was written about. A later writer who needs the
words of these provisions must open them. What these entries establish is that
the pages resting on them are resting on something that was read.

### state/domestic-violence-defense

**F.S. 741.29 (2025)** -- https://www.flsenate.gov/Laws/Statutes/2025/741.29
Fetched 2026-08-14, HTTP 200, 61,452 bytes, HTML stripped to text locally so no
summariser sat between the agent and the section. Read whole. Recorded because
the round 1 verifier found the page resting on a F.S. 741.29(3) duty that the
repository held no fetch of anywhere: no table in `src/lib/statute-tables/`, no
entry in this file, and a brief citing only 741.2901. That gap is now closed.

**F.S. 903.047 (2025)** -- https://www.flsenate.gov/Laws/Statutes/2025/903.047
Fetched 2026-08-14, HTTP 200, 48,410 bytes, stripped locally. Whole section
read, for the pretrial release conditions the page states.

### state/sex-crimes-defense

**Fla. R. Crim. P. 3.134 and 3.191**, from the Bar compilation at the corrected
URL recorded above, extracted with `pdftotext -layout`, cross-checked against an
independent reproduction at syfert.com.

This fetch is the reason round 2 succeeded where round 1 failed, and the reason
is worth keeping. The agent did NOT trust this file's existing Rule 3.134
blockquotes, because they carry ellipses at exactly the points where round 1's
rewrite closed the sentence with a comma. Going back to the compilation
recovered three operative clauses the page had been missing:

- 3.134(a)(1) also reaches alleged misdemeanors "by whatever documents
  constitute a formal charge", and runs the 30 days from arrest **or from
  service of a capias**. This page's own table carries a first degree
  misdemeanor at F.S. 800.03(2)(a), so the misdemeanor limb is live here, and a
  person served with a capias rather than arrested had been given the wrong
  start date.
- 3.134(a)(2)(B) ends "unless the state files formal charges by that date".
  Round 1 carried that condition in (A) and dropped it in (B), which told a
  reader whose charges were filed on day 39 that the court must release on day
  40.
- 3.134(b)(2) exists and was omitted entirely; it is the provision that
  releases a person from bail conditions on the not-in-custody track.

**A limit of the exclusion mechanism, recorded rather than worked around.**
Rule 3.130(c)(2), the "capiases on them" clauses, and the opening carve-out of
Rule 3.191(a) are recorded in this file as inline quotation rather than as
blockquotes, and `scripts/check-pages.mts` builds its compelled-text exclusion
set from blockquote lines only. So quoting them exactly is right and still does
not clear the run. Both agents were asked to say so rather than mangle a quote
to chase the number, and both did. Neither converted an inline line into a
blockquote to widen the set, because that would silently change the measurement
for the published sibling page as well.

---

## Batch C repair, source records

Recorded 2026-08-14, after the batch C adversarial review. Each entry was
fetched by a repair agent and independently re-fetched by a verifier before the
edit resting on it was applied.

ONE RECORD FROM THIS ROUND WAS REFUSED. A repair agent recorded F.S.
943.059(4)(c) under a heading announcing a SOURCE CONFLICT ON THE WORDING, with
a warning to later writers that a reviewer had rendered the paragraph
differently. Its verifier fetched the paragraph and found no conflict: the
paragraph has four sentences, the exception sits inside the first one directly
after the word "only", and what looked like a conflict was simply a truncated
quotation somewhere else. The wording was independently confirmed here a third
time. A warning about a disagreement that does not exist would send every later
writer to re-litigate a settled provision, so the record was dropped and the
correct text is recorded below without it. D26.

**F.S. 943.059(4)(c) (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/943.059

_Relied on by state/domestic-violence-defense._

> The court may order the sealing of a criminal history record pertaining to one arrest or one incident of alleged criminal activity only, except the court may order the sealing of a criminal history record pertaining to more than one arrest if the additional arrests directly relate to the original arrest. If the court intends to order the sealing of records pertaining to such additional arrests, such intent must be specified in the order. A criminal justice agency may not seal any record pertaining to such additional arrests if the order to seal does not articulate the intention of the court to seal a record pertaining to more than one arrest. This section does not prevent the court from ordering the sealing of only a portion of a criminal history record pertaining to one arrest or one incident of alleged criminal activity.

**F.S. 943.059(4)(e) (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/943.059

_Relied on by state/domestic-violence-defense._

> This section does not confer any right to the sealing of any criminal history record, and any request for sealing of a criminal history record may be denied at the sole discretion of the court.

**F.S. 943.059(2)(b) (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/943.059

_Relied on by state/domestic-violence-defense._

> A certificate of eligibility for sealing is valid for 12 months after the date stamped on the certificate when issued by the department. After that time, the petitioner must reapply to the department for a new certificate of eligibility. The status of the applicant and the law in effect at the time of the renewal application determine the petitioner's eligibility.

**F.S. 901.15(7) (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/901.15

_Relied on by state/domestic-violence-defense._

> There is probable cause to believe that the person has committed an act of domestic violence, as defined in s. 741.28, or dating violence, as provided in s. 784.046. The decision to arrest shall not require consent of the victim or consideration of the relationship of the parties. It is the public policy of this state to strongly discourage arrest and charges of both parties for domestic violence or dating violence on each other and to encourage training of law enforcement and prosecutors in these areas. A law enforcement officer who acts in good faith and exercises due care in making an arrest under this subsection, under s. 741.31(4) or s. 784.047, or pursuant to a foreign order of protection accorded full faith and credit pursuant to s. 741.315, is immune from civil liability that otherwise might result by reason of his or her action.

**F.S. 741.29(4) (2025), contrasted with 901.15(7)**  
https://www.flsenate.gov/Laws/Statutes/2025/741.29

_Relied on by state/domestic-violence-defense._

> Whenever a law enforcement officer determines upon probable cause that an act of domestic violence has been committed within the jurisdiction the officer may arrest the person or persons suspected of its commission and charge such person or persons with the appropriate crime. The decision to arrest and charge shall not require consent of the victim or consideration of the relationship of the parties. Note the two-word difference from 901.15(7), which omits 'and charge'; the two sentences are not identical and neither repeats the other.

**F.S. 903.047(1)(b) and (1)(b)1. (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/903.047

_Relied on by state/domestic-violence-defense._

> (1)(b) If the court issues an order of no contact, refrain from any contact of any type with the victim, except through pretrial discovery pursuant to the Florida Rules of Criminal Procedure. An order of no contact is effective immediately and enforceable for the duration of the pretrial release or until it is modified by the court. The defendant shall be informed in writing of the order of no contact, specifying the applicable prohibited acts, before the defendant is released from custody on pretrial release. As used in this section, unless otherwise specified by the court, the term 'no contact' includes the following prohibited acts: 1. Communicating orally or in any written form, either in person, telephonically, electronically, or in any other manner, either directly or indirectly through a third person, with the victim or any other person named in the order. If the victim and the defendant have children in common, at the request of the defendant, the court may designate an appropriate third person to contact the victim for the sole purpose of facilitating the defendant's contact with the children. However, this subparagraph does not prohibit an attorney for the defendant, consistent with rules regulating The Florida Bar, from communicating with any person protected by the no contact order for lawful purposes. Subparagraph 1. contains exactly two carve-outs; paragraph (1)(b) as a whole contains more, including the pretrial-discovery exception and 'unless otherwise specified by the court'.

**F.S. 943.0584(2) flush language and (2)(f) (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/943.0584

_Relied on by state/domestic-violence-defense._

> A criminal history record is ineligible for a certificate of eligibility for expunction or a court-ordered expunction pursuant to s. 943.0585 or a certificate of eligibility for sealing or a court-ordered sealing pursuant to s. 943.059 if the record is a conviction for any of the following offenses: ... (f) Assault or battery, as defined in ss. 784.011 and 784.03, respectively, of one family or household member by another family or household member, as defined in s. 741.28(3). The subsection names those two routes and speaks to no others.

**F.S. 943.0583(2) (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/943.0583

_Relied on by state/domestic-violence-defense._

> Notwithstanding any other provision of law, upon the filing of a petition as provided in this section, any court in the circuit in which the petitioner was arrested, so long as the court has jurisdiction over the class of offense or offenses sought to be expunged, may order a criminal justice agency to expunge the criminal history record of a victim of human trafficking who complies with the requirements of this section. A petition need not be filed in the court where the petitioner's criminal proceeding or proceedings originally occurred. This section does not confer any right to the expunction of any criminal history record, and any request for expunction of a criminal history record may be denied at the discretion of the court.

**Fla. R. Crim. P. 3.191(d), Florida Bar compilation updated July 13, 2026**  
https://www-media.floridabar.org/uploads/2026/08/2026_01-JUL-Criminal-Procedure-Rules-7-13-2026-2.pdf

_Relied on by state/computer-crimes-defense._

> "(d) Formally Charged. For the purposes of this rule, a person is formally charged with a crime by information, or by indictment, or in the case of alleged misdemeanors by whatever documents constitute a formal charge." Fetched 2026-08-14 with a browser user agent (a bare request 403s), HTTP 200, 2,035,359 bytes, which matches the size recorded in PAGE-SOURCES.md, so the edition is unchanged. Extracted with pdftotext -layout and read from the extracted text, not through a summarizer.

**Fla. R. Crim. P. 3.111(b)(1), same compilation**  
https://www-media.floridabar.org/uploads/2026/08/2026_01-JUL-Criminal-Procedure-Rules-7-13-2026-2.pdf

_Relied on by state/computer-crimes-defense._

> "Counsel shall be provided to indigent persons in all prosecutions for offenses punishable by incarceration including appeals from the conviction thereof. In the discretion of the court, counsel does not have to be provided to an indigent person in a prosecution for a misdemeanor or violation of a municipal ordinance if the judge, at least 15 days prior to trial, files in the cause a written order of no incarceration certifying that the defendant will not be incarcerated in the case pending trial or probation violation hearing, or as part of a sentence after trial, guilty or nolo contendere plea, or probation revocation. This 15-day requirement may be waived by the defendant or defense counsel." The third sentence is the one that is easy to lose: the 15-day requirement is waivable. Subparagraphs (A) through (C) then govern what happens if the order issues after counsel was appointed, or is withdrawn.

**Fla. R. Crim. P. 3.111(c)(1) and (c)(2), same compilation**  
https://www-media.floridabar.org/uploads/2026/08/2026_01-JUL-Criminal-Procedure-Rules-7-13-2026-2.pdf

_Relied on by state/computer-crimes-defense._

> "(c) Duty of Booking Officer. In addition to any other duty, the officer who commits a defendant to custody has the following duties: (1) The officer shall immediately advise the defendant: (A) of the right to counsel; (B) that, if the defendant is unable to pay a lawyer, one will be provided immediately at no charge. (2) If the defendant requests counsel or advises the officer that he or she cannot afford counsel, the officer shall immediately and effectively place the defendant in communication with the (office of) public defender of the circuit in which the arrest was made." The advice in (B) is conditional on inability to pay, and the trigger in (2) has two limbs, not one.

**F.S. 815.06(3)(b) (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/815.06

_Relied on by state/computer-crimes-defense._

> "(b) A person commits a felony of the second degree, punishable as provided in s. 775.082, s. 775.083, or s. 775.084, if he or she violates subsection (2) and: 1. Damages a computer, computer equipment or supplies, a computer system, or a computer network and the damage or loss is at least $5,000; 2. Commits the offense for the purpose of devising or executing any scheme or artifice to defraud or obtain property; 3. Interrupts or impairs a governmental operation or public communication, transportation, or supply of water, gas, or other public service; or 4. Intentionally interrupts the transmittal of data to or from, or gains unauthorized access to, a computer, computer system, computer network, or electronic device belonging to any mode of public or private transit, as defined in s. 341.031." Fetched as raw HTML and tag-stripped locally, because a summarizing fetch of this same URL has been observed to flatten the section's text.

**F.S. 943.0584(1) (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/943.0584

_Relied on by state/computer-crimes-defense._

> "As used in this section, the term 'conviction' means a determination of guilt which is the result of a trial or the entry of a plea of guilty or nolo contendere, regardless of whether adjudication is withheld, or if the defendant was a minor, a finding that the defendant committed or pled guilty or nolo contendere to committing a delinquent act, regardless of whether adjudication of delinquency is withheld." One sentence, two limbs. The juvenile limb is the half that gets dropped.

**F.S. 943.059(4)(e) (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/943.059

_Relied on by state/computer-crimes-defense._

> Subsection (4) is headed COURT AUTHORITY and ends at paragraph (e): "This section does not confer any right to the sealing of any criminal history record, and any request for sealing of a criminal history record may be denied at the sole discretion of the court." Any page that recites the subsection (1) eligibility conditions has to carry this, because (4)(e) is the provision that says eligibility is not entitlement. Note also (4)(b): the court may not order sealing until the person has applied for and received a certificate of eligibility under subsection (2).

**F.S. 26.012(2)(d) (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/26.012

_Relied on by state/computer-crimes-defense._

> "(2) Circuit courts shall have exclusive original jurisdiction: ... (d) Of all felonies and of all misdemeanors arising out of the same circumstances as a felony which is also charged;" Paragraph letter confirmed by reading (2)(a) through (2)(e) in order. The second limb matters: a misdemeanor is NOT automatically a county court case, only a standalone one is.

**F.S. 34.01(1)(a) (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/34.01

_Relied on by state/computer-crimes-defense._

> "(1) County courts shall have original jurisdiction: (a) In all misdemeanor cases not cognizable by the circuit courts." Read with 26.012(2)(d), which supplies what is cognizable by the circuit courts.

**18 U.S.C. 1030, section catchline**  
https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section1030&num=0&edition=prelim

_Relied on by state/computer-crimes-defense._

> The section is captioned "Fraud and related activity in connection with computers". It is not captioned, and nothing in Title 18 makes it, the federal computer statute or the federal unauthorized-access statute.

**18 U.S.C. 2701, section catchline and subsection (a)**  
https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section2701&num=0&edition=prelim

_Relied on by state/computer-crimes-defense._

> Captioned "Unlawful access to stored communications". Subsection (a): "Except as provided in subsection (c) of this section whoever - (1) intentionally accesses without authorization a facility through which an electronic communication service is provided; or (2) intentionally exceeds an authorization to access that facility; and thereby obtains, alters, or prevents authorized access to a wire or electronic communication while it is in electronic storage in such system shall be punished as provided in subsection (b) of this section." Recorded because it is the source that defeats BOTH "the federal computer statute" and the proposed replacement "the federal unauthorized-access statute": 2701 is a federal unauthorized-access offense too. Any future writer reaching for a definite article in front of 18 U.S.C. 1030 should read this first.

**F.S. 775.082(3)(c) (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/775.082

_Relied on by state/sexual-battery-defense._

> Read whole, to the end of the paragraph. "Notwithstanding paragraphs (a) and (b), a person convicted of an offense that is not included in s. 782.04 but that is an offense that is a life felony or is punishable by a term of imprisonment for life or by a term of years not exceeding life imprisonment, or an offense that was reclassified as a life felony or an offense punishable by a term of imprisonment for life or by a term of years not exceeding life imprisonment, which was committed before the person attained 18 years of age may be punished by a term of imprisonment for life or a term of years equal to life imprisonment if the judge conducts a sentencing hearing in accordance with s. 921.1401 and finds that life imprisonment or a term of years equal to life imprisonment is an appropriate sentence. A person who is sentenced to a term of imprisonment of more than 20 years is entitled to a review of his or her sentence in accordance with s. 921.1402(2)(d)." Also read from the same page: (3)(a)3. (life felony committed on or after July 1, 1995, term of imprisonment for life or imprisonment for a term of years not exceeding life imprisonment); (3)(b)1. (first degree felony, not exceeding 30 years, "or, when specifically provided by statute, by imprisonment for a term of years not exceeding life imprisonment"); (3)(d) (second degree, not exceeding 15 years); (3)(e) (third degree, not exceeding 5 years).

**F.S. 794.011(4)(a)-(d) and (5)(a)-(d) (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/794.011

_Relied on by state/sexual-battery-defense._

> (4)(a) "A person 18 years of age or older who commits sexual battery upon a person 12 years of age or older but younger than 18 years of age without that person's consent, under any of the circumstances listed in paragraph (e), commits a felony of the first degree, punishable by a term of years not exceeding life or as provided in s. 775.082, s. 775.083, s. 775.084, or s. 794.0115." (4)(c) "A person younger than 18 years of age who commits sexual battery upon a person 12 years of age or older without that person's consent, under any of the circumstances listed in paragraph (e), commits a felony of the first degree, punishable as provided in s. 775.082, s. 775.083, s. 775.084, or s. 794.0115." (4)(d) "A person commits a felony of the first degree, punishable by a term of years not exceeding life or as provided in s. 775.082, s. 775.083, s. 775.084, or s. 794.0115 if the person commits sexual battery upon a person 12 years of age or older without that person's consent, under any of the circumstances listed in paragraph (e), and such person was previously convicted of a violation of:" (5)(c) "A person younger than 18 years of age who commits sexual battery upon a person 12 years of age or older, without that person's consent, and in the process does not use physical force and violence likely to cause serious personal injury commits a felony of the second degree, punishable as provided in s. 775.082, s. 775.083, s. 775.084, or s. 794.0115." Note for later writers: (4)(a) requires the person charged to be 18 or older, so it can never be an offense committed before the person attained 18 and can never be reached by F.S. 775.082(3)(c). (4)(c) carries no term-of-years-not-exceeding-life language and (5)(c) is a second degree felony, so neither is inside 775.082(3)(c) on the degree the paragraph itself assigns.

**F.S. 794.011(2) and (8), and the section's History line (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/794.011

_Relied on by state/sexual-battery-defense._

> (2)(a) "A person 18 years of age or older who commits sexual battery upon, or in an attempt to commit sexual battery injures the sexual organs of, a person less than 12 years of age commits a capital felony, punishable as provided in ss. 775.082 and 921.1425. In all capital cases under this section, the procedure set forth in s. 921.1425 shall be followed in order to determine a sentence of death or life imprisonment. If the prosecutor intends to seek the death penalty, the prosecutor must give notice to the defendant and file the notice with the court within 45 days after arraignment. The notice must contain a list of the aggravating factors the state intends to prove and has reason to believe it can prove beyond a reasonable doubt. The court may allow the prosecutor to amend the notice upon a showing of good cause." (2)(b) "A person less than 18 years of age who commits sexual battery upon, or in an attempt to commit sexual battery injures the sexual organs of, a person less than 12 years of age commits a life felony, punishable as provided in s. 775.082, s. 775.083, s. 775.084, or s. 794.0115." (8)(c) "...commits a capital or life felony, punishable pursuant to subsection (2)." History: "s. 2, ch. 74-121; s. 17, ch. 75-298; s. 1, ch. 84-86; s. 1, ch. 89-216; s. 3, ch. 92-135; s. 1, ch. 92-310; s. 3, ch. 93-156; s. 2, ch. 95-348; s. 99, ch. 99-3; s. 8, ch. 99-188; s. 1, ch. 2002-211; s. 3, ch. 2014-4; s. 5, ch. 2016-13; s. 5, ch. 2017-1; s. 4, ch. 2022-165; s. 1, ch. 2023-25; s. 1, ch. 2023-146." Note: the 45-day notice sentence is in (2)(a) and follows the sentence about "all capital cases under this section," and (8)(c) routes punishment through subsection (2), so the interval is not confined to a charge pleaded as (2)(a).

**F.S. 794.005, History line (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/794.005

_Relied on by state/sexual-battery-defense._

> History: "s. 2, ch. 92-135." Read with the F.S. 794.011 History line ("s. 2, ch. 74-121; ... s. 3, ch. 92-135; ..."), so 794.011 was enacted in 1974 and 794.005 was added in 1992 by an act that amended 794.011 in the same chapter. Any statement that the two provisions were written thirteen years apart is wrong.

**F.S. 943.0435(1)(h)1. (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/943.0435

_Relied on by state/sexual-battery-defense._

> "'Sexual offender' means a person who meets the criteria in sub-subparagraph a., sub-subparagraph b., sub-subparagraph c., or sub-subparagraph d., as follows:" Sub-subparagraph a. is two-part: a.(I) conviction of committing, or attempting, soliciting, or conspiring to commit, an enumerated offense, the enumeration including "s. 794.011, excluding s. 794.011(10)"; and a.(II) "Has been released on or after October 1, 1997, from a sanction imposed for any conviction of an offense described in sub-sub-subparagraph (I) and does not otherwise meet the criteria for registration as a sexual offender under chapter 944 or chapter 985... If no sanction is imposed, the person is deemed to be released upon conviction." Sub-subparagraph b. reaches a person who establishes or maintains a residence in this state carrying a sexual predator, sexually violent predator, or other sexual offender designation from another state or jurisdiction. Sub-subparagraph c. reaches a person who establishes or maintains a residence in this state and is in the custody or control of, or under the supervision of, another state or jurisdiction as a result of a conviction for an enumerated offense, the list again including "s. 794.011, excluding s. 794.011(10)." Sub-subparagraph d.: "On or after July 1, 2007, has been adjudicated delinquent for committing, or attempting, soliciting, or conspiring to commit, any of the criminal offenses proscribed in the following statutes in this state or similar offenses in another jurisdiction when the juvenile was 14 years of age or older at the time of the offense: (I) Section 794.011, excluding s. 794.011(10); (II) Section 800.04(4)(a)2. where the victim is under 12 years of age or where the court finds sexual activity by the use of force or coercion; (III) Section 800.04(5)(c)1. where the court finds molestation involving unclothed genitals; (IV) Section 800.04(5)(d) where the court finds the use of force or coercion and unclothed genitals; or (V) Any similar offense committed in this state which has been redesignated from a former statute number to one of those listed in this sub-subparagraph." Route d. carries no conviction requirement and no October 1, 1997 release condition. Sub-subparagraph a. is NOT the definition; it is one of four alternative routes.

**F.S. 943.0435(5) and (9)(a) (2025)**  
https://www.flsenate.gov/Laws/Statutes/2025/943.0435

_Relied on by state/sexual-battery-defense._

> (5) "This section does not apply to a sexual offender who is also a sexual predator, as defined in s. 775.21. A sexual predator must register as required under s. 775.21." (9)(a) opens "Except as otherwise specifically provided, a sexual offender who fails to register; who fails, after registration, to maintain, acquire, or renew a driver license or an identification card; ... or who otherwise fails, by act or omission, to comply with the requirements of this section commits a felony of the third degree, punishable as provided in s. 775.082, s. 775.083, or s. 775.084. Each instance of a failure to register or report changes to the required information specified in this paragraph constitutes a separate offense." The opening "Except as otherwise specifically provided" governs the whole paragraph and must travel with any statement of the offense.

**USSG 2G2.2 and Commentary, Guidelines Manual (November 1, 2025), read at pages 202-206 of Chapter 2 Parts E-K. Base offense level (a): "(1) 18, if the defendant is convicted of 18 U.S.C. sec. 1466A(b), sec. 2252(a)(4), sec. 2252A(a)(5), or sec. 2252A(a)(7). (2) 22, otherwise." Subsection (b)(3) opens "(Apply the greatest):" and has SIX subdivisions: "(A) If the offense involved distribution for pecuniary gain, increase by the number of levels from the table in sec.2B1.1 (Theft, Property Destruction, and Fraud) corresponding to the retail value of the material, but by not less than 5 levels. (B) If the defendant distributed in exchange for any valuable consideration, but not for pecuniary gain, increase by 5 levels. (C) If the offense involved distribution to a minor, increase by 5 levels. (D) If the offense involved distribution to a minor that was intended to persuade, induce, entice, or coerce the minor to engage in any illegal activity, other than illegal activity covered under subdivision (E), increase by 6 levels. (E) If the offense involved distribution to a minor that was intended to persuade, induce, entice, coerce, or facilitate the travel of, the minor to engage in prohibited sexual conduct, increase by 7 levels. (F) If the defendant knowingly engaged in distribution, other than distribution described in subdivisions (A) through (E), increase by 2 levels." Commentary opens: "Statutory Provisions: 18 U.S.C. secs. 1466A, 2252, 2252A(a)-(b), 2260(b). For additional statutory provision(s), see Appendix A (Statutory Index)." Application Note 1 includes "'Distribution for pecuniary gain' means distribution for profit." and "'Distribution' means any act ... but does not include the mere solicitation of such material by a defendant." APPLICATION NOTE 6 IN FULL: "(A) Definition of 'Images'.-'Images' means any visual depiction, as defined in 18 U.S.C. sec. 2256(5), that constitutes child pornography, as defined in 18 U.S.C. sec. 2256(8). (B) Determining the Number of Images.-For purposes of determining the number of images under subsection (b)(7): (i) Each photograph, picture, computer or computer-generated image, or any similar visual depiction shall be considered to be one image. (ii) Each video, video-clip, movie, or similar visual depiction shall be considered to have 75 images." THE NOTE ENDS THERE; Application Note 7 follows immediately. There is NO sentence about a visual depiction substantially more than 5 minutes and NO upward-departure sentence anywhere in Note 6. Any writer who finds that sentence in a brief, a table, or an older manual must not carry it into copy attributed to this manual. Historical Note records: "... November 1, 2016 (amendment 801); November 1, 2025 (amendment 836)." What amendment 836 did is NOT stated in the manual and has not been fetched in this record; do not write that amendment 836 removed the departure language without opening the amendment.**  
https://www.ussc.gov/sites/default/files/pdf/guidelines-manual/2025/CHAPTER_2_E-K.pdf

_Relied on by federal/csam-defense._

> Retrieved 2026-08-14, 844225 bytes, PDF 1.7, extracted with pdftotext -layout and read at 2G2.2 in full including the Commentary, all eight Application Notes, the Background paragraph, and the Historical Note. The USSC also serves this chapter under the filename CHAPTER_2_E_K.pdf with an underscore; that URL 404s and returns an HTML error page with a 200-shaped body, so the hyphenated E-K filename is the live one.

**18 U.S.C. 2252A(e), read whole: "(e) Admissibility of Evidence.-On motion of the government, in any prosecution under this chapter or section 1466A, except for good cause shown, the name, address, social security number, or other nonphysical identifying information, other than the age or approximate age, of any minor who is depicted in any child pornography shall not be admissible and may be redacted from any otherwise admissible evidence, and the jury shall be instructed, upon request of the United States, that it can draw no inference from the absence of such evidence in deciding whether the child pornography depicts an actual minor." TWO TRAPS RECORDED: (1) the words "other than the age or approximate age" are an express carve-out sitting inside the identifying-information list; a writer quoting the list without them tells a reader the minor's age is inadmissible and redactable, which is the opposite of what the subsection provides. (2) The subsection is written to "any prosecution under this chapter or section 1466A", and chapter 110 contains section 2252 as well as 2252A, so this is NOT a 2252A-only rule and must not be described as one. Penalty subsection openings also read: (b)(1) "Whoever violates, or attempts or conspires to violate, paragraph (1), (2), (3), (4), or (6) of subsection (a) shall be fined under this title and imprisoned not less than 5 years and not more than 20 years"; (b)(2) "Whoever violates, or attempts or conspires to violate, subsection (a)(5) shall be fined under this title or imprisoned not more than 10 years"; (b)(3) "Whoever violates, or attempts or conspires to violate, subsection (a)(7) shall be fined under this title or imprisoned not more than 15 years, or both."**  
https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section2252A&num=0&edition=prelim

_Relied on by federal/csam-defense._

> Retrieved 2026-08-14 from the prelim edition. Subsection (e) read from its caption to its terminal period. Penalty subsection openings read for the paragraph-number map.

**18 U.S.C. 2258A(a)(2)(A), read whole: "(A) Apparent violations.-The facts or circumstances described in this subparagraph are any facts or circumstances from which there is an apparent violation of section 2251, 2251A, 2252, 2252A, 2252B, or 2260 that involves child pornography, of section 1591 (if the violation involves a minor), or of 2422(b)." TRAP RECORDED: the subparagraph does not stop at "child pornography". A quotation that ends there and closes with a period cuts two further triggers, section 1591 where the violation involves a minor and section 2422(b), and misstates what obliges a provider to file a CyberTipline report. 2258A(a)(2)(B), "Imminent violations", reads: "The facts or circumstances described in this subparagraph are any facts or circumstances which indicate a violation of any of the sections described in subparagraph (A) involving child pornography may be planned or imminent." 2258A(a)(1)(A)(i): "shall, as soon as reasonably possible after obtaining actual knowledge of any facts or circumstances described in paragraph (2)(A), take the actions described in subparagraph (B);" 2258A(a)(1)(B)(ii): "making a report of such facts or circumstances to the CyberTipline, or any successor to the CyberTipline operated by NCMEC."**  
https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section2258A&num=0&edition=prelim

_Relied on by federal/csam-defense._

> Retrieved 2026-08-14 from the prelim edition. Subsection (a)(2) read in full including both subparagraphs, plus (a)(1)(A)(i) and (a)(1)(B)(ii).

**18 U.S.C. 2256(9), read whole and character for character: "(9) 'identifiable minor'-(A) means a person-(i)(I) who was a minor at the time the visual depiction was created, adapted, or modified; or (II) whose image as a minor was used in creating, adapting, or modifying the visual depiction; and (ii) who is recognizable as an actual person by the person's face, likeness, or other distinguishing characteristic, such as a unique birthmark or other recognizable feature; and (B) shall not be construed to require proof of the actual identity of the identifiable minor." Note the label structure: the paragraph number carries the definiendum and the subparagraph letters begin at "(A) means a person"; writing "(9)(A) 'identifiable minor'- (A) means" prints the same letter twice for two different things. Note also the conjunctive "; and" joining (A) and (B); replacing it with a full stop turns one conjunctive definition into two free-standing statements. 2256(11): "the term 'indistinguishable' used with respect to a depiction, means virtually indistinguishable, in that the depiction is such that an ordinary person viewing the depiction would conclude that the depiction is of an actual minor engaged in sexually explicit conduct. This definition does not apply to depictions that are drawings, cartoons, sculptures, or paintings depicting minors or adults." The second sentence of (11) is a limit on the definition and must not be dropped.**  
https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section2256&num=0&edition=prelim

_Relied on by federal/csam-defense._

> Retrieved 2026-08-14 from the prelim edition. Paragraphs (9) and (11) read in full including all internal labels and connectors.

**18 U.S.C. 3142(f), the continuance sentence read to its end: "During a continuance, such person shall be detained, and the judicial officer, on motion of the attorney for the Government or sua sponte, may order that, while in custody, a person who appears to be a narcotics addict receive a medical examination to determine whether such person is an addict." TRAP RECORDED: the sentence does not end at "detained". Any quotation that stops there is a partial sentence and needs an ellipsis, not a period.**  
https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section3142&num=0&edition=prelim

_Relied on by federal/csam-defense._

> Retrieved 2026-08-14 from the prelim edition. The continuance sentence in subsection (f) read to its terminal period.

**18 U.S.C. 2252(c), read whole: "Affirmative Defense.-It shall be an affirmative defense to a charge of violating paragraph (4) of subsection (a) that the defendant-(1) possessed less than three matters containing any visual depiction proscribed by that paragraph; and (2) promptly and in good faith, and without retaining or allowing any person, other than a law enforcement agency, to access any visual depiction or copy thereof-(A) took reasonable steps to destroy each such visual depiction; or (B) reported the matter to a law enforcement agency and afforded that agency access to each such visual depiction." The structure is conjunctive into (1) AND (2), and (2) then branches disjunctively into (A) or (B). RECORDED FOR THE CLOSED-SET TRAP: section 2252 states a quantity in TWO places, the element at (a)(4) ("1 or more books, magazines, periodicals, films, video tapes, or other matter", in both the (A) and (B) limbs) and the three-matter threshold in this affirmative defense at (c)(1). Writing that "the quantity language in section 2252" sits at (a)(4) is a completeness claim and it is wrong.**  
https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section2252&num=0&edition=prelim

_Relied on by federal/csam-defense._

> Retrieved 2026-08-14 from the prelim edition. Subsections (a)(4) and (c) read in full.

**F.S. 943.0435(9)(a) (2025), opening words: "Except as otherwise specifically provided, a sexual offender who fails to register; who fails, after registration, to maintain, acquire, or renew a driver license or an identification card; ... or who otherwise fails, by act or omission, to comply with the requirements of this section commits a felony of the third degree, punishable as provided in s. 775.082, s. 775.083, or s. 775.084." Final sentence: "Each instance of a failure to register or report changes to the required information specified in this paragraph constitutes a separate offense." TRAP RECORDED: the third-degree grading is NOT unconditional; it opens with the carve-out "Except as otherwise specifically provided". The separate-offense sentence carries no such carve-out and can be stated flat.**  
https://www.flsenate.gov/Laws/Statutes/2025/943.0435

_Relied on by federal/csam-defense._

> Retrieved 2026-08-14 from flsenate.gov, 2025 statutes. Opening words and closing sentence of paragraph (9)(a) read and confirmed against the project's own statute table at src/lib/statute-tables/fs-943-0435.ts line 25, which carries the same opening limiter and additionally records that the two provisions that 'provide otherwise' are (4)(c) and (8), each a second degree felony. That table detail is a cross-check only and was not fetched from flsenate for this repair, so it is not stated on the page.

**Fla. Stat. 782.071 (2025), vehicular homicide, read whole**  
https://www.flsenate.gov/Laws/Statutes/2025/0782.071

_Relied on by state/homicide-defense._

> Definitional sentence: "'Vehicular homicide' is the killing of a human being, or the killing of an unborn child by any injury to the mother, caused by the operation of a motor vehicle by another in a reckless manner likely to cause the death of, or great bodily harm to, another." (1)(a) second degree felony. (1)(b) first degree felony if at the time of the accident the person knew, or should have known, that the accident occurred, AND the person failed to give information and render aid as required by s. 316.062; the paragraph adds that it does not require that the person knew that the accident resulted in injury or death. (1)(c): "A felony of the first degree, punishable as provided in s. 775.082, s. 775.083, or s. 775.084, if the person has a prior conviction under this section, s. 316.193(3)(c)3., s. 327.35(3)(a)3.c., or s. 782.072." (2) unborn child definition by reference to s. 775.021(5). (3) right of action for civil damages under s. 768.19. (4) discretionary 120 hours of community service at a trauma center or hospital. CRITICAL FOR LATER WRITERS: the words influence, impaired, impairment, alcohol, blood-alcohol, breath-alcohol, chemical substance and controlled substance appear NOWHERE in this section. There is no impairment carve-out, no exclusion of impaired drivers, and no clause stating which chapter a fatal-crash case must be charged under. Do not write an exclusivity rule between this section and s. 316.193; the page previously did and it was a blocking failure.

**Fla. Stat. 316.193(3) (2025), DUI causing death, and its prior-conviction cross-reference**  
https://www.flsenate.gov/Laws/Statutes/2025/0316.193

_Relied on by state/homicide-defense._

> Subsection (3): "Any person: (a) Who is in violation of subsection (1); (b) Who operates a vehicle; and (c) Who, by reason of such operation, causes or contributes to causing: 1. Damage to the property or person of another commits a misdemeanor of the first degree ... 2. Serious bodily injury to another, as defined in s. 316.1933, commits a felony of the third degree ... 3. The death of any human being or unborn child commits DUI manslaughter ..." Sub-subparagraph (3)(c)3.c. elevates to a felony of the first degree "if the person has a prior conviction under this subparagraph, s. 327.35(3)(a)3.c., s. 782.071, or s. 782.072." CRITICAL FOR LATER WRITERS: nothing in s. 316.193 displaces chapter 782 or says a DUI-caused death must be charged here rather than under s. 782.071. The cross-reference is reciprocal: 782.071(1)(c) counts a prior under 316.193(3)(c)3., and 316.193(3)(c)3.c. counts a prior under 782.071. Two sections that each count a conviction under the other are not mutually exclusive.

**Fla. Stat. 776.032(1) (2025), immunity, complete text of the subsection**  
https://www.flsenate.gov/Laws/Statutes/2025/0776.032

_Relied on by state/homicide-defense._

> (1): "A person who uses or threatens to use force as permitted in s. 776.012, s. 776.013, or s. 776.031 is justified in such conduct and is immune from criminal prosecution and civil action for the use or threatened use of such force by the person, personal representative, or heirs of the person against whom the force was used or threatened, unless the person against whom force was used or threatened is a law enforcement officer, as defined in s. 943.10(14), who was acting in the performance of his or her official duties and the officer identified himself or herself in accordance with any applicable law or the person using or threatening to use force knew or reasonably should have known that the person was a law enforcement officer. As used in this subsection, the term 'criminal prosecution' includes arresting, detaining in custody, and charging or prosecuting the defendant." The clause "by the person, personal representative, or heirs of the person against whom the force was used or threatened" is what identifies whose civil action the immunity bars, and it has been dropped from this page once already. (4): "In a criminal prosecution, once a prima facie claim of self-defense immunity from criminal prosecution has been raised by the defendant at a pretrial immunity hearing, the burden of proof by clear and convincing evidence is on the party seeking to overcome the immunity from criminal prosecution provided in subsection (1)." Note what (4) does NOT contain: no standard, quantum or characterization for the defendant's prima facie claim, and no procedural vehicle for raising it. Do not supply either.

**Fla. Stat. 776.013 (2025), stand-your-ground language outside 776.012**  
https://www.flsenate.gov/Laws/Statutes/2025/0776.013

_Relied on by state/homicide-defense._

> Subsection (1) opens "A person who is in a dwelling or residence in which the person has a right to be has no duty to retreat and has the right to" stand his or her ground and use or threaten to use force, running to paragraph (a) for nondeadly force where the person reasonably believes it necessary to defend himself or herself or another against imminent unlawful force, and paragraph (b) for deadly force where the person reasonably believes it necessary to prevent imminent death or great bodily harm or an imminent forcible felony. The phrase "stand his or her ground" is in subsection (1). The section has five subsections: (1) the right just described; (2) the presumption of reasonable fear on unlawful entry; (3) the exceptions to that presumption; (4) presumed criminal intent on unlawful forcible entry; (5) definitions of dwelling, residence and vehicle. CAUTION FOR LATER WRITERS: the stand-your-ground language is NOT confined to 776.012(2), and this page asserted that it was. Also, the retrieved rendering of the clause between "has the right to" and the colon did not match a second rendering I was shown character for character, so do not present 776.013(1) as a character-exact quotation without opening it yourself.

**Fla. Stat. 921.141(9) (2025), APPLICABILITY carve-out**  
https://www.flsenate.gov/Laws/Statutes/2025/0921.141

_Relied on by state/homicide-defense._

> (9), headed APPLICABILITY: "This section does not apply to a person convicted or adjudicated guilty of a capital sexual battery under s. 794.011, a capital human trafficking of vulnerable persons for sexual exploitation under s. 787.06(5), or a capital drug trafficking felony under s. 893.135." Any sentence saying 921.141 governs capital felonies generally must either be bounded to the capital felony under discussion or carry this carve-out.

**Fla. Stat. 775.082(1)(b) (2025), the juvenile capital track runs to subparagraph 3.**  
https://www.flsenate.gov/Laws/Statutes/2025/0775.082

_Relied on by state/homicide-defense._

> Paragraph (1)(b) has three subparagraphs and no fourth. 1. covers a person who actually killed, intended to kill, or attempted to kill the victim: life if, after a sentencing hearing under s. 921.1401, the court finds life an appropriate sentence, otherwise a term of at least 40 years. 2. covers a person who did not actually kill, intend to kill, or attempt to kill the victim: life or a term of years equal to life on the same finding. 3.: the court shall make a written finding as to whether the person is eligible for a sentence review hearing under s. 921.1402(2)(a) or (c), based upon whether the person actually killed, intended to kill, or attempted to kill the victim. A walkthrough of (1)(b) that stops after subparagraph 2. has stopped one subparagraph short of the review entitlement.

**Fla. Stat. 782.04 (2025), the subsection (4) exclusion list and the degree-assigning places**  
https://www.flsenate.gov/Laws/Statutes/2025/0782.04

_Relied on by state/homicide-defense._

> Subsection (4) exclusion list runs (a) through (s). Item (a) is a trafficking offense prohibited by s. 893.135(1). Item (l) is the unlawful distribution of a substance listed in sub-subparagraphs (1)(a)3.a.-j. by a person 18 years of age or older where the substance is proven to have caused, or to have been a substantial factor in producing, the death of the user, which is the predicate of subparagraph (1)(a)3., not of (1)(a)2. or (3). Item (s) is the terrorism felony. Human trafficking appears NOWHERE on the subsection (4) list. The subparagraph (1)(a)2. enumerated list runs a. through s. and human trafficking is item s. So the (4) list is not the mirror of (1)(a)2., and any sentence saying the (4) items are the ones that push conduct into (1)(a)2. or (3) is wrong in both directions. DEGREE-ASSIGNING PLACES: the grading language sits as flush text at the end of paragraph (1)(a) and attaches to subparagraphs 1., 2. and 3. alike, then at (2) murder in the second degree, (3) murder in the second degree, (4) murder in the third degree, and (5)(b) murder in the third degree. Do not write that the section assigns a degree at seven places; that count treats the three (1)(a) subparagraphs as separate assignments, which the flush grading clause contradicts. Write the set open and without a count.

**F.S. 775.21(10)(b), 2025 Florida Statutes, fetched 2026-08-14**  
https://www.flsenate.gov/Laws/Statutes/2025/775.21

_Relied on by state/sex-crimes-defense._

> "A sexual predator who has been convicted of or found to have committed, or has pled nolo contendere or guilty to, regardless of adjudication, any violation, or attempted violation, of s. 787.01, s. 787.02, or s. 787.025(2)(c), where the victim is a minor; s. 794.011, excluding s. 794.011(10); s. 794.05; former s. 796.03; former s. 796.035; s. 800.04; s. 827.071; s. 847.0133; s. 847.0135(5); s. 847.0145; or s. 985.701(1); or a violation of a similar law of another jurisdiction when the victim of the offense was a minor, and who works, whether for compensation or as a volunteer, at any business, school, child care facility, park, playground, or other place where children regularly congregate, commits a felony of the third degree, punishable as provided in s. 775.082, s. 775.083, or s. 775.084." The only minor-victim qualifiers in the paragraph are the one on the s. 787 group and the one on the similar-law prong. Same fetch: (10)(a) third degree felony with the 3-week address verification window and the separate-offense closer; (10)(c) mandatory minimum community control of 6 months, 1 year, 2 years with electronic monitoring, "For a felony violation of this section, excluding paragraph (g), committed on or after July 1, 2018"; (10)(g) third degree felony closing "This paragraph does not apply if the sexual predator is incarcerated in or is in the custody of a state correctional facility, a contractor-operated correctional facility, a local jail, or a federal correctional facility."

**F.S. 775.21(4)(a), 2025 Florida Statutes, fetched 2026-08-14**  
https://www.flsenate.gov/Laws/Statutes/2025/775.21

_Relied on by state/sex-crimes-defense._

> "SEXUAL PREDATOR CRITERIA.-(a) For a current offense committed on or after October 1, 1993, upon conviction, an offender shall be designated as a 'sexual predator' under subsection (5), and subject to registration under subsection (6) and community and public notification under subsection (7) if: 1. The felony is: a. A capital, life, or first degree felony violation, or any attempt thereof, of s. 787.01 or s. 787.02, where the victim is a minor, or s. 787.06(3)(f) or (g), where the victim is a minor, or (5); s. 794.011, s. 800.04, or s. 847.0145, or a violation of a similar law of another jurisdiction; or b. Any felony violation, or any attempt thereof, of s. 393.135(2); s. 394.4593(2); s. 787.01, s. 787.02, or s. 787.025(2)(c), where the victim is a minor; ... s. 800.04; s. 810.145(8)(b); s. 825.1025; s. 827.071; s. 847.0135, excluding s. 847.0135(6); s. 847.0145; ... and the offender has previously been convicted of or found to have committed, or has pled nolo contendere or guilty to, regardless of adjudication, any violation of [a comparable list]; 2. The offender has not received a pardon for any felony or similar law of another jurisdiction that is necessary for the operation of this paragraph; and 3. A conviction of a felony or similar law of another jurisdiction necessary to the operation of this paragraph has not been set aside in any postconviction proceeding." Checked for the page's boundary claim: the string s. 800.03 does not appear anywhere in F.S. 775.21.

**F.S. 943.0435(1)(h)1, 2025 Florida Statutes, fetched 2026-08-14**  
https://www.flsenate.gov/Laws/Statutes/2025/943.0435

_Relied on by state/sex-crimes-defense._

> "(h)1. 'Sexual offender' means a person who meets the criteria in sub-subparagraph a., sub-subparagraph b., sub-subparagraph c., or sub-subparagraph d., as follows: a.(I) Has been convicted of committing, or attempting, soliciting, or conspiring to commit, any of the criminal offenses proscribed in the following statutes in this state or similar offenses in another jurisdiction: s. 393.135(2); s. 394.4593(2); s. 787.01, s. 787.02, or s. 787.025(2)(c), where the victim is a minor; s. 787.06(3)(b), (d), (f), or (g), or (5); former s. 787.06(3)(h); s. 794.011, excluding s. 794.011(10); s. 794.05; former s. 796.03; former s. 796.035; s. 800.04; s. 810.145(8); s. 825.1025; s. 827.071; s. 847.0133; s. 847.0135, excluding s. 847.0135(6); s. 847.0137; s. 847.0138; s. 847.0145; s. 895.03, if the court makes a written finding that the racketeering activity involved at least one sexual offense listed in this sub-sub-subparagraph or at least one offense listed in this sub-sub-subparagraph with sexual intent or motive; s. 916.1075(2); or s. 985.701(1); or any similar offense committed in this state which has been redesignated from a former statute number to one of those listed in this sub-sub-subparagraph; and (II) Has been released on or after October 1, 1997, from a sanction imposed for any conviction of an offense described in sub-sub-subparagraph (I) and does not otherwise meet the criteria for registration as a sexual offender under chapter 944 or chapter 985. ... If no sanction is imposed, the person is deemed to be released upon conviction; b. Establishes or maintains a residence in this state and who has not been designated as a sexual predator by a court of this state but who has been designated as a sexual predator, as a sexually violent predator, or any other sexual offender designation in another state or jurisdiction and was, as a result of such designation, subjected to registration or community or public notification, or both, or would be if the person were a resident of that state or jurisdiction, without regard to whether the person otherwise meets the criteria for registration as a sexual offender; c. Establishes or maintains a residence in this state who is in the custody or control of, or under the supervision of, any other state or jurisdiction as a result of a conviction for [the same enumerated list]; or d. On or after July 1, 2007, has been adjudicated delinquent for committing, or attempting, soliciting, or conspiring to commit, any of the criminal offenses proscribed in the following statutes ... when the juvenile was 14 years of age or older at the time of the offense: (I) Section 794.011, excluding s. 794.011(10); (II) Section 800.04(4)(a)2. ...; (III) Section 800.04(5)(c)1. ...; (IV) Section 800.04(5)(d) ...; or (V) Any similar offense committed in this state which has been redesignated ..." Note for later writers: (I) is not self-standing, it ends '; and' and runs into (II), and s. 800.03 appears in none of a.(I), c. or d.

**F.S. 943.0435(11), 2025 Florida Statutes, fetched 2026-08-14**  
https://www.flsenate.gov/Laws/Statutes/2025/943.0435

_Relied on by state/sex-crimes-defense._

> "Except as provided in s. 943.04354, a sexual offender shall maintain registration with the department for the duration of his or her life unless the sexual offender has received a full pardon or has had a conviction set aside in a postconviction proceeding for any offense that meets the criteria for classifying the person as a sexual offender for purposes of registration. However, a sexual offender shall be considered for removal of the requirement to register as a sexual offender only if the person: (a)1. Has been lawfully released from confinement, supervision, or sanction, whichever is later, for at least 25 years and has not been arrested for any felony or misdemeanor offense since release, provided that the sexual offender's requirement to register was not based upon an adult conviction: a. For a violation of s. 787.01 or s. 787.02; b. For a violation of s. 794.011, excluding s. 794.011(10); c. For a violation of s. 800.04(4)(a)2. where the court finds the offense involved a victim under 12 years of age or sexual activity by the use of force or coercion; d. For a violation of s. 800.04(5)(b); e. For a violation of s. 800.04(5)(c)2. where the court finds the offense involved the use of force or coercion and unclothed genitals or genital area; f. For a violation of s. 825.1025(2)(a); g. For any attempt or conspiracy to commit any such offense; h. For a violation of similar law of another jurisdiction; or i. For a violation of a similar offense committed in this state which has been redesignated from a former statute number to one of those listed in this subparagraph." The condition is 'only if', a necessary one. Paragraph (b) is a second route: 'Maintains registration with the department as described in sub-subparagraph (1)(h)1.b. for the duration of his or her life until the person provides the department with an order issued by the court that designated the person ... which states that such designation has been removed or demonstrates to the department that such designation, if not imposed by a court, has been removed by operation of law or court order ... To qualify for removal of the registration requirements under this paragraph, a sexual offender described in sub-subparagraph (1)(h)1.b. must establish that his or her designation has been removed and establish that he or she does not meet the criteria for registration under any other sub-subparagraph under subparagraph (1)(h)1.'

**F.S. 943.0595(2)(a), 2025 Florida Statutes, fetched 2026-08-14**  
https://www.flsenate.gov/Laws/Statutes/2025/943.0595

_Relied on by state/sex-crimes-defense._

> "ELIGIBILITY.-(a) The department shall automatically seal a criminal history record that does not result from an indictment, information, or other charging document for a forcible felony as defined in s. 776.08 or for an offense enumerated in s. 943.0435(1)(h)1.a.(I), if: 1. An indictment, information, or other charging document was not filed or issued in the case giving rise to the criminal history record. 2. An indictment, information, or other charging document was filed ... but was dismissed or nolle prosequi by the state attorney or statewide prosecutor or was dismissed by a court of competent jurisdiction as to all counts. However, a person is not eligible for automatic sealing under this section if the dismissal was pursuant to s. 916.145 or s. 985.19. 3. A not guilty verdict was rendered by a judge or jury as to all counts. However, a person is not eligible for automatic sealing under this section if the defendant was found not guilty by reason of insanity. 4. A judgment of acquittal was rendered by a judge as to all counts." The gate on this project bans the phrase 'not guilty verdict' in page copy, so subparagraph 3. is written on the page as an acquittal by judge or jury; the statutory wording is recorded here for accuracy of the source, not for reuse in copy.

**F.S. 943.059(1)(b), 2025 Florida Statutes, fetched 2026-08-14**  
https://www.flsenate.gov/Laws/Statutes/2025/943.059

_Relied on by state/sex-crimes-defense._

> "(b) The person has never, before the date the application for a certificate of eligibility is filed, been adjudicated guilty in this state of a criminal offense, or been adjudicated delinquent in this state for committing any felony or any of the following misdemeanor offenses, unless the record of such adjudication of delinquency has been expunged pursuant to s. 943.0515: 1. Assault, as defined in s. 784.011; 2. Battery, as defined in s. 784.03; 3. Assault on a law enforcement officer, a firefighter, or other specified officers, as defined in s. 784.07(2)(a); 4. Carrying a concealed weapon, as defined in s. 790.01(2); 5. Open carrying of a weapon, as defined in s. 790.053; 6. Unlawful possession or discharge of a weapon or firearm at a school-sponsored event or on school property, as defined in s. 790.115; 7. Unlawful use of destructive devices or bombs, as defined in s. 790.1615(1); 8. Unlawful possession of a firearm by a minor, as defined in s. 790.22(5); 9. Exposure of sexual organs, as defined in s. 800.03; 10. Arson, as defined in s. 806.031(1); 11. Petit theft, as defined in s. 812.014(3); 12. Neglect of a child, as defined in s. 827.03(1)(e); or 13. Cruelty to animals, as defined in s. 828.12(1)." Thirteen misdemeanors, exposure of sexual organs at 9., and the expungement unless-clause attaches to the delinquency prong.

**F.S. 800.04(2) and (3), 2025 Florida Statutes, fetched 2026-08-14**  
https://www.flsenate.gov/Laws/Statutes/2025/800.04

_Relied on by state/sex-crimes-defense._

> "(2) PROHIBITED DEFENSES.-Neither the victim's lack of chastity nor the victim's consent is a defense to the crimes proscribed by this section. (3) IGNORANCE OR BELIEF OF VICTIM'S AGE.-The perpetrator's ignorance of the victim's age, the victim's misrepresentation of his or her age, or the perpetrator's bona fide belief of the victim's age cannot be raised as a defense in a prosecution under this section." Five arguments removed by name, two in (2) and three in (3), not three.

**F.S. 847.0135(2) and (6), 2025 Florida Statutes, fetched 2026-08-14**  
https://www.flsenate.gov/Laws/Statutes/2025/847.0135

_Relied on by state/sex-crimes-defense._

> "(2) COMPUTER PORNOGRAPHY.-A person who: (a) Knowingly compiles, enters into, or transmits by use of computer; (b) Makes, prints, publishes, or reproduces by other computerized means; (c) Knowingly causes or allows to be entered into or transmitted by use of computer; or (d) Buys, sells, receives, exchanges, or disseminates, any notice, statement, or advertisement of any minor's name, telephone number, place of residence, physical characteristics, or other descriptive or identifying information for purposes of facilitating, encouraging, offering, or soliciting sexual conduct of or with any minor, or the visual depiction of such conduct, commits a felony of the third degree, punishable as provided in s. 775.082, s. 775.083, or s. 775.084. The fact that an undercover operative or law enforcement officer was involved in the detection and investigation of an offense under this section shall not constitute a defense to a prosecution under this section." Three of the four limbs carry a computer element on their face; a summary that drops it describes publishing a minor's identifying information by any means. "(6) OWNERS OR OPERATORS OF COMPUTER SERVICES LIABLE.-It is unlawful for any owner or operator of a computer online service, Internet service, or local bulletin board service knowingly to permit a subscriber to use the service to commit a violation of this section. Any person who violates this section commits a misdemeanor of the first degree, punishable by a fine not exceeding $2,000."

**F.S. 775.082(3)(a)3. and 4., 2025 Florida Statutes, fetched 2026-08-14**  
https://www.flsenate.gov/Laws/Statutes/2025/775.082

_Relied on by state/sex-crimes-defense._

> "3. Except as provided in subparagraph 4., for a life felony committed on or after July 1, 1995, by a term of imprisonment for life or by imprisonment for a term of years not exceeding life imprisonment. 4.a. Except as provided in sub-subparagraph b., for a life felony committed on or after September 1, 2005, which is a violation of s. 800.04(5)(b), by: (I) A term of imprisonment for life; or (II) A split sentence that is a term of at least 25 years' imprisonment and not exceeding life imprisonment, followed by probation or community control for the remainder of the person's natural life, as provided in s. 948.012(4). b. For a life felony committed on or after July 1, 2008, which is a person's second or subsequent violation of s. 800.04(5)(b), by a term of imprisonment for life." Sub-subparagraph 4.a. is limited to violations of s. 800.04(5)(b); every other life felony committed on or after July 1, 1995 falls to subparagraph 3.

**F.S. 775.15(13)(a), 2025 Florida Statutes, fetched 2026-08-14**  
https://www.flsenate.gov/Laws/Statutes/2025/775.15

_Relied on by state/sex-crimes-defense._

> "(13)(a) If the victim of a violation of s. 794.011, former s. 794.05, Florida Statutes 1995, s. 800.04, s. 826.04, or s. 847.0135(5) is under the age of 18, the applicable period of limitation, if any, does not begin to run until the victim has reached the age of 18 or the violation is reported to a law enforcement agency or other governmental agency, whichever occurs earlier. Such law enforcement agency or other governmental agency shall promptly report such allegation to the state attorney for the judicial circuit in which the alleged violation occurred. If the offense is a first or second degree felony violation of s. 794.011, and the offense is reported within 72 hours after its commission, the prosecution for such offense may be commenced at any time. This paragraph applies to any such offense except an offense the prosecution of which would have been barred by subsection (2) on or before December 31, 1984." Four sentences, not two.

**Fla. R. Crim. P. 3.111(b)(1) and (b)(5), Florida Bar compilation of the Rules of Criminal Procedure, July 13, 2026 edition, page 22-23, retrieved 2026-08-14**  
https://www-media.floridabar.org/uploads/2026/08/2026_01-JUL-Criminal-Procedure-Rules-7-13-2026-2.pdf

_Relied on by state/sex-crimes-defense._

> "(b)(1) Counsel shall be provided to indigent persons in all prosecutions for offenses punishable by incarceration including appeals from the conviction thereof. In the discretion of the court, counsel does not have to be provided to an indigent person in a prosecution for a misdemeanor or violation of a municipal ordinance if the judge, at least 15 days prior to trial, files in the cause a written order of no incarceration certifying that the defendant will not be incarcerated in the case pending trial or probation violation hearing, or as part of a sentence after trial, guilty or nolo contendere plea, or probation revocation. This 15-day requirement may be waived by the defendant or defense counsel." (b)(1)(A)-(C) then govern discharge of appointed counsel after such an order and reappointment if the order is withdrawn. "(b)(5) Before appointing a public defender, the court shall: (A) inform the accused that, if the public defender or other counsel is appointed, a lien for the services rendered by counsel may be imposed as provided by law; (B) make inquiry into the financial status of the accused in a manner not inconsistent with the guidelines established by section 27.52, Florida Statutes. The accused shall respond to the inquiry under oath; (C) require the accused to execute an affidavit of insolvency..." ACCESS NOTE, confirmed again 2026-08-14: this URL returns 403 to a bare curl and to WebFetch. It returns HTTP 200 at 2,035,359 bytes with a browser user agent and an https://www.floridabar.org/rules/ctproc/ referer; text extracted locally with pdftotext -layout. The earlier /uploads/2026/05/2026_07-JAN-... and /uploads/2026/07/...-1.pdf addresses are dead.

---

## 2026-08-20: Phase 1 fact layer for guide 2 (GUIDES-CONCEPT.md Phase 1, D29/D30 rulings)

Eleven provisions the federal timeline guide rests on, none previously recorded
whole. Method for every record in this section: fetched whole from the primary
source with a browser user agent; independently re-verified the same day
against a second publisher (law.cornell.edu) by span containment over every
sentence-level span; recorded whole below, one blockquote line per paragraph so
the text joins the compelled duplication corpus. The READ-WHOLE line on each
record is the machine-readable marker GUIDES-CONCEPT F.3 G4 requires: it is the
auditor's claim that the provision was read start to finish, and
scripts/check-provenance.mts accepts it as read-whole evidence. A record
without that line was not read whole, whatever its prose says.

[REFLOWED 2026-08-20, same day: the five rule records below were first emitted
one blockquote line per WRAPPED PDF LINE, which made it impossible for the G3
truncation check to locate any rule span longer than a line inside a single
corpus entry. They are re-emitted one blockquote per logical paragraph. The
text is unchanged and was re-verified against the second publisher after the
reflow; the shingle stream the duplication gate builds is order-preserving, so
the compelled corpus is unchanged.]

Where the two publishers diverged, the divergence is recorded on the rule and
in every case inspected the defect was Cornell's (typos, a dropped word), which
is why the official source is primary and Cornell is verification only.

**18 U.S.C. 3161, whole section, (a) through (k)**  
READ-WHOLE: 18 U.S.C. 3161
https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section3161&num=0&edition=prelim

SUPERSEDES, for (h): the partial (h) record in the batch B bank-fraud entry above (the blockquote whose (h) parenthetical reads "paragraphs not reproduced here", near line 1420 at the time of writing). That record's (b) and (c)(1) quotations remain good; its (h) is an excerpt and this whole-section record replaces it as the citable basis for (h). This record also supplies (c)(2), which had NO record anywhere in this file before today (the GUIDES-CONCEPT C.2 table said "absent from the site", corrected 2026-08-20 to absent from this file only).

Fetched 2026-08-20; page carries "Text contains those laws in effect on August 19, 2026". Read whole, recorded whole. Independently re-verified against law.cornell.edu the same day: every sentence-level span of this record is contained in the second publisher's copy.

> §3161. Time limits and exclusions
> (a) In any case involving a defendant charged with an offense, the appropriate judicial officer, at the earliest practicable time, shall, after consultation with the counsel for the defendant and the attorney for the Government, set the case for trial on a day certain, or list it for trial on a weekly or other short-term trial calendar at a place within the judicial district, so as to assure a speedy trial.
> (b) Any information or indictment charging an individual with the commission of an offense shall be filed within thirty days from the date on which such individual was arrested or served with a summons in connection with such charges. If an individual has been charged with a felony in a district in which no grand jury has been in session during such thirty-day period, the period of time for filing of the indictment shall be extended an additional thirty days.
> (c)(1) In any case in which a plea of not guilty is entered, the trial of a defendant charged in an information or indictment with the commission of an offense shall commence within seventy days from the filing date (and making public) of the information or indictment, or from the date the defendant has appeared before a judicial officer of the court in which such charge is pending, whichever date last occurs. If a defendant consents in writing to be tried before a magistrate judge on a complaint, the trial shall commence within seventy days from the date of such consent.
> (2) Unless the defendant consents in writing to the contrary, the trial shall not commence less than thirty days from the date on which the defendant first appears through counsel or expressly waives counsel and elects to proceed pro se.
> (d)(1) If any indictment or information is dismissed upon motion of the defendant, or any charge contained in a complaint filed against an individual is dismissed or otherwise dropped, and thereafter a complaint is filed against such defendant or individual charging him with the same offense or an offense based on the same conduct or arising from the same criminal episode, or an information or indictment is filed charging such defendant with the same offense or an offense based on the same conduct or arising from the same criminal episode, the provisions of subsections (b) and (c) of this section shall be applicable with respect to such subsequent complaint, indictment, or information, as the case may be.
> (2) If the defendant is to be tried upon an indictment or information dismissed by a trial court and reinstated following an appeal, the trial shall commence within seventy days from the date the action occasioning the trial becomes final, except that the court retrying the case may extend the period for trial not to exceed one hundred and eighty days from the date the action occasioning the trial becomes final if the unavailability of witnesses or other factors resulting from the passage of time shall make trial within seventy days impractical. The periods of delay enumerated in section 3161(h) are excluded in computing the time limitations specified in this section. The sanctions of section 3162 apply to this subsection.
> (e) If the defendant is to be tried again following a declaration by the trial judge of a mistrial or following an order of such judge for a new trial, the trial shall commence within seventy days from the date the action occasioning the retrial becomes final. If the defendant is to be tried again following an appeal or a collateral attack, the trial shall commence within seventy days from the date the action occasioning the retrial becomes final, except that the court retrying the case may extend the period for retrial not to exceed one hundred and eighty days from the date the action occasioning the retrial becomes final if unavailability of witnesses or other factors resulting from passage of time shall make trial within seventy days impractical. The periods of delay enumerated in section 3161(h) are excluded in computing the time limitations specified in this section. The sanctions of section 3162 apply to this subsection.
> (f) Notwithstanding the provisions of subsection (b) of this section, for the first twelve-calendar-month period following the effective date of this section as set forth in section 3163(a) of this chapter the time limit imposed with respect to the period between arrest and indictment by subsection (b) of this section shall be sixty days, for the second such twelve-month period such time limit shall be forty-five days and for the third such period such time limit shall be thirty-five days.
> (g) Notwithstanding the provisions of subsection (c) of this section, for the first twelve-calendar-month period following the effective date of this section as set forth in section 3163(b) of this chapter, the time limit with respect to the period between arraignment and trial imposed by subsection (c) of this section shall be one hundred and eighty days, for the second such twelve-month period such time limit shall be one hundred and twenty days, and for the third such period such time limit with respect to the period between arraignment and trial shall be eighty days.
> (h) The following periods of delay shall be excluded in computing the time within which an information or an indictment must be filed, or in computing the time within which the trial of any such offense must commence:
> (1) Any period of delay resulting from other proceedings concerning the defendant, including but not limited to-
> (A) delay resulting from any proceeding, including any examinations, to determine the mental competency or physical capacity of the defendant;
> (B) delay resulting from trial with respect to other charges against the defendant;
> (C) delay resulting from any interlocutory appeal;
> (D) delay resulting from any pretrial motion, from the filing of the motion through the conclusion of the hearing on, or other prompt disposition of, such motion;
> (E) delay resulting from any proceeding relating to the transfer of a case or the removal of any defendant from another district under the Federal Rules of Criminal Procedure;
> (F) delay resulting from transportation of any defendant from another district, or to and from places of examination or hospitalization, except that any time consumed in excess of ten days from the date an order of removal or an order directing such transportation, and the defendant's arrival at the destination shall be presumed to be unreasonable;
> (G) delay resulting from consideration by the court of a proposed plea agreement to be entered into by the defendant and the attorney for the Government; and
> (H) delay reasonably attributable to any period, not to exceed thirty days, during which any proceeding concerning the defendant is actually under advisement by the court.
> (2) Any period of delay during which prosecution is deferred by the attorney for the Government pursuant to written agreement with the defendant, with the approval of the court, for the purpose of allowing the defendant to demonstrate his good conduct.
> (3)(A) Any period of delay resulting from the absence or unavailability of the defendant or an essential witness.
> (B) For purposes of subparagraph (A) of this paragraph, a defendant or an essential witness shall be considered absent when his whereabouts are unknown and, in addition, he is attempting to avoid apprehension or prosecution or his whereabouts cannot be determined by due diligence. For purposes of such subparagraph, a defendant or an essential witness shall be considered unavailable whenever his whereabouts are known but his presence for trial cannot be obtained by due diligence or he resists appearing at or being returned for trial.
> (4) Any period of delay resulting from the fact that the defendant is mentally incompetent or physically unable to stand trial.
> (5) If the information or indictment is dismissed upon motion of the attorney for the Government and thereafter a charge is filed against the defendant for the same offense, or any offense required to be joined with that offense, any period of delay from the date the charge was dismissed to the date the time limitation would commence to run as to the subsequent charge had there been no previous charge.
> (6) A reasonable period of delay when the defendant is joined for trial with a codefendant as to whom the time for trial has not run and no motion for severance has been granted.
> (7)(A) Any period of delay resulting from a continuance granted by any judge on his own motion or at the request of the defendant or his counsel or at the request of the attorney for the Government, if the judge granted such continuance on the basis of his findings that the ends of justice served by taking such action outweigh the best interest of the public and the defendant in a speedy trial. No such period of delay resulting from a continuance granted by the court in accordance with this paragraph shall be excludable under this subsection unless the court sets forth, in the record of the case, either orally or in writing, its reasons for finding that the ends of justice served by the granting of such continuance outweigh the best interests of the public and the defendant in a speedy trial.
> (B) The factors, among others, which a judge shall consider in determining whether to grant a continuance under subparagraph (A) of this paragraph in any case are as follows:
> (i) Whether the failure to grant such a continuance in the proceeding would be likely to make a continuation of such proceeding impossible, or result in a miscarriage of justice.
> (ii) Whether the case is so unusual or so complex, due to the number of defendants, the nature of the prosecution, or the existence of novel questions of fact or law, that it is unreasonable to expect adequate preparation for pretrial proceedings or for the trial itself within the time limits established by this section.
> (iii) Whether, in a case in which arrest precedes indictment, delay in the filing of the indictment is caused because the arrest occurs at a time such that it is unreasonable to expect return and filing of the indictment within the period specified in section 3161(b), or because the facts upon which the grand jury must base its determination are unusual or complex.
> (iv) Whether the failure to grant such a continuance in a case which, taken as a whole, is not so unusual or so complex as to fall within clause (ii), would deny the defendant reasonable time to obtain counsel, would unreasonably deny the defendant or the Government continuity of counsel, or would deny counsel for the defendant or the attorney for the Government the reasonable time necessary for effective preparation, taking into account the exercise of due diligence.
> (C) No continuance under subparagraph (A) of this paragraph shall be granted because of general congestion of the court's calendar, or lack of diligent preparation or failure to obtain available witnesses on the part of the attorney for the Government.
> (8) Any period of delay, not to exceed one year, ordered by a district court upon an application of a party and a finding by a preponderance of the evidence that an official request, as defined in section 3292 of this title, has been made for evidence of any such offense and that it reasonably appears, or reasonably appeared at the time the request was made, that such evidence is, or was, in such foreign country.
> (i) If trial did not commence within the time limitation specified in section 3161 because the defendant had entered a plea of guilty or nolo contendere subsequently withdrawn to any or all charges in an indictment or information, the defendant shall be deemed indicted with respect to all charges therein contained within the meaning of section 3161, on the day the order permitting withdrawal of the plea becomes final.
> (j)(1) If the attorney for the Government knows that a person charged with an offense is serving a term of imprisonment in any penal institution, he shall promptly-
> (A) undertake to obtain the presence of the prisoner for trial; or
> (B) cause a detainer to be filed with the person having custody of the prisoner and request him to so advise the prisoner and to advise the prisoner of his right to demand trial.
> (2) If the person having custody of such prisoner receives a detainer, he shall promptly advise the prisoner of the charge and of the prisoner's right to demand trial. If at any time thereafter the prisoner informs the person having custody that he does demand trial, such person shall cause notice to that effect to be sent promptly to the attorney for the Government who caused the detainer to be filed.
> (3) Upon receipt of such notice, the attorney for the Government shall promptly seek to obtain the presence of the prisoner for trial.
> (4) When the person having custody of the prisoner receives from the attorney for the Government a properly supported request for temporary custody of such prisoner for trial, the prisoner shall be made available to that attorney for the Government (subject, in cases of interjurisdictional transfer, to any right of the prisoner to contest the legality of his delivery).
> (k)(1) If the defendant is absent (as defined by subsection (h)(3)) on the day set for trial, and the defendant's subsequent appearance before the court on a bench warrant or other process or surrender to the court occurs more than 21 days after the day set for trial, the defendant shall be deemed to have first appeared before a judicial officer of the court in which the information or indictment is pending within the meaning of subsection (c) on the date of the defendant's subsequent appearance before the court.
> (2) If the defendant is absent (as defined by subsection (h)(3)) on the day set for trial, and the defendant's subsequent appearance before the court on a bench warrant or other process or surrender to the court occurs not more than 21 days after the day set for trial, the time limit required by subsection (c), as extended by subsection (h), shall be further extended by 21 days.

**18 U.S.C. 3162, whole section, (a) and (b)**  
READ-WHOLE: 18 U.S.C. 3162
https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section3162&num=0&edition=prelim

The sanction section. Recorded so no page states the 70-day interval as a case-ending deadline: dismissal under (a)(2) may be with or without prejudice, on stated factors, and (a)(2) makes failure to move for dismissal prior to trial or plea a waiver of the right to dismissal.

Fetched 2026-08-20; page carries "Text contains those laws in effect on August 19, 2026". Read whole, recorded whole. Independently re-verified against law.cornell.edu the same day: every sentence-level span of this record is contained in the second publisher's copy.

> §3162. Sanctions
> (a)(1) If, in the case of any individual against whom a complaint is filed charging such individual with an offense, no indictment or information is filed within the time limit required by section 3161(b) as extended by section 3161(h) of this chapter, such charge against that individual contained in such complaint shall be dismissed or otherwise dropped. In determining whether to dismiss the case with or without prejudice, the court shall consider, among others, each of the following factors: the seriousness of the offense; the facts and circumstances of the case which led to the dismissal; and the impact of a reprosecution on the administration of this chapter and on the administration of justice.
> (2) If a defendant is not brought to trial within the time limit required by section 3161(c) as extended by section 3161(h), the information or indictment shall be dismissed on motion of the defendant. The defendant shall have the burden of proof of supporting such motion but the Government shall have the burden of going forward with the evidence in connection with any exclusion of time under subparagraph 3161(h)(3). In determining whether to dismiss the case with or without prejudice, the court shall consider, among others, each of the following factors: the seriousness of the offense; the facts and circumstances of the case which led to the dismissal; and the impact of a reprosecution on the administration of this chapter and on the administration of justice. Failure of the defendant to move for dismissal prior to trial or entry of a plea of guilty or nolo contendere shall constitute a waiver of the right to dismissal under this section.
> (b) In any case in which counsel for the defendant or the attorney for the Government (1) knowingly allows the case to be set for trial without disclosing the fact that a necessary witness would be unavailable for trial; (2) files a motion solely for the purpose of delay which he knows is totally frivolous and without merit; (3) makes a statement for the purpose of obtaining a continuance which he knows to be false and which is material to the granting of a continuance; or (4) otherwise willfully fails to proceed to trial without justification consistent with section 3161 of this chapter, the court may punish any such counsel or attorney, as follows:
> (A) in the case of an appointed defense counsel, by reducing the amount of compensation that otherwise would have been paid to such counsel pursuant to section 3006A of this title in an amount not to exceed 25 per centum thereof;
> (B) in the case of a counsel retained in connection with the defense of a defendant, by imposing on such counsel a fine of not to exceed 25 per centum of the compensation to which he is entitled in connection with his defense of such defendant;
> (C) by imposing on any attorney for the Government a fine of not to exceed $250;
> (D) by denying any such counsel or attorney for the Government the right to practice before the court considering such case for a period of not to exceed ninety days; or
> (E) by filing a report with an appropriate disciplinary committee.
> The authority to punish provided for by this subsection shall be in addition to any other authority or power available to such court.
> (c) The court shall follow procedures established in the Federal Rules of Criminal Procedure in punishing any counsel or attorney for the Government pursuant to this section.

**18 U.S.C. 3142, whole section, (a) through (j)**  
READ-WHOLE: 18 U.S.C. 3142
https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section3142&num=0&edition=prelim

Recorded whole for (e) detention including both rebuttable presumptions, and (g) the factors list. The existing (f) records above (lines near 1277-1281 and 1985-1986 at the time of writing) remain good and are subsumed rather than superseded; the 1985 record's trap note about the continuance sentence still holds and is visible in the (f) paragraph below.

Fetched 2026-08-20; page carries "Text contains those laws in effect on August 19, 2026". Read whole, recorded whole. Independently re-verified against law.cornell.edu the same day: every sentence-level span of this record is contained in the second publisher's copy.

> §3142. Release or detention of a defendant pending trial
> (a) In General.-Upon the appearance before a judicial officer of a person charged with an offense, the judicial officer shall issue an order that, pending trial, the person be-
> (1) released on personal recognizance or upon execution of an unsecured appearance bond, under subsection (b) of this section;
> (2) released on a condition or combination of conditions under subsection (c) of this section;
> (3) temporarily detained to permit revocation of conditional release, deportation, or exclusion under subsection (d) of this section; or
> (4) detained under subsection (e) of this section.
> (b) Release on Personal Recognizance or Unsecured Appearance Bond.-The judicial officer shall order the pretrial release of the person on personal recognizance, or upon execution of an unsecured appearance bond in an amount specified by the court, subject to the condition that the person not commit a Federal, State, or local crime during the period of release and subject to the condition that the person cooperate in the collection of a DNA sample from the person if the collection of such a sample is authorized pursuant to section 3 of the DNA Analysis Backlog Elimination Act of 2000 (42 U.S.C. 14135a),1 unless the judicial officer determines that such release will not reasonably assure the appearance of the person as required or will endanger the safety of any other person or the community.
> (c) Release on Conditions.-(1) If the judicial officer determines that the release described in subsection (b) of this section will not reasonably assure the appearance of the person as required or will endanger the safety of any other person or the community, such judicial officer shall order the pretrial release of the person-
> (A) subject to the condition that the person not commit a Federal, State, or local crime during the period of release and subject to the condition that the person cooperate in the collection of a DNA sample from the person if the collection of such a sample is authorized pursuant to section 3 of the DNA Analysis Backlog Elimination Act of 2000 (42 U.S.C. 14135a); 1 and
> (B) subject to the least restrictive further condition, or combination of conditions, that such judicial officer determines will reasonably assure the appearance of the person as required and the safety of any other person and the community, which may include the condition that the person-
> (i) remain in the custody of a designated person, who agrees to assume supervision and to report any violation of a release condition to the court, if the designated person is able reasonably to assure the judicial officer that the person will appear as required and will not pose a danger to the safety of any other person or the community;
> (ii) maintain employment, or, if unemployed, actively seek employment;
> (iii) maintain or commence an educational program;
> (iv) abide by specified restrictions on personal associations, place of abode, or travel;
> (v) avoid all contact with an alleged victim of the crime and with a potential witness who may testify concerning the offense;
> (vi) report on a regular basis to a designated law enforcement agency, pretrial services agency, or other agency;
> (vii) comply with a specified curfew;
> (viii) refrain from possessing a firearm, destructive device, or other dangerous weapon;
> (ix) refrain from excessive use of alcohol, or any use of a narcotic drug or other controlled substance, as defined in section 102 of the Controlled Substances Act (21 U.S.C. 802), without a prescription by a licensed medical practitioner;
> (x) undergo available medical, psychological, or psychiatric treatment, including treatment for drug or alcohol dependency, and remain in a specified institution if required for that purpose;
> (xi) execute an agreement to forfeit upon failing to appear as required, property of a sufficient unencumbered value, including money, as is reasonably necessary to assure the appearance of the person as required, and shall provide the court with proof of ownership and the value of the property along with information regarding existing encumbrances as the judicial office may require;
> (xii) execute a bail bond with solvent sureties; who will execute an agreement to forfeit in such amount as is reasonably necessary to assure appearance of the person as required and shall provide the court with information regarding the value of the assets and liabilities of the surety if other than an approved surety and the nature and extent of encumbrances against the surety's property; such surety shall have a net worth which shall have sufficient unencumbered value to pay the amount of the bail bond;
> (xiii) return to custody for specified hours following release for employment, schooling, or other limited purposes; and
> (xiv) satisfy any other condition that is reasonably necessary to assure the appearance of the person as required and to assure the safety of any other person and the community.
> In any case that involves a minor victim under section 1201, 1591, 2241, 2242, 2244(a)(1), 2245, 2251, 2251A, 2252(a)(1), 2252(a)(2), 2252(a)(3), 2252A(a)(1), 2252A(a)(2), 2252A(a)(3), 2252A(a)(4), 2260, 2421, 2422, 2423, or 2425 of this title, or a failure to register offense under section 2250 of this title, any release order shall contain, at a minimum, a condition of electronic monitoring and each of the conditions specified at subparagraphs (iv), (v), (vi), (vii), and (viii).
> (2) The judicial officer may not impose a financial condition that results in the pretrial detention of the person.
> (3) The judicial officer may at any time amend the order to impose additional or different conditions of release.
> (d) Temporary Detention To Permit Revocation of Conditional Release, Deportation, or Exclusion.-If the judicial officer determines that-
> (1) such person-
> (A) is, and was at the time the offense was committed, on-
> (i) release pending trial for a felony under Federal, State, or local law;
> (ii) release pending imposition or execution of sentence, appeal of sentence or conviction, or completion of sentence, for any offense under Federal, State, or local law; or
> (iii) probation or parole for any offense under Federal, State, or local law; or
> (B) is not a citizen of the United States or lawfully admitted for permanent residence, as defined in section 101(a)(20) of the Immigration and Nationality Act (8 U.S.C. 1101(a)(20)); and
> (2) such person may flee or pose a danger to any other person or the community;
> such judicial officer shall order the detention of such person, for a period of not more than ten days, excluding Saturdays, Sundays, and holidays, and direct the attorney for the Government to notify the appropriate court, probation or parole official, or State or local law enforcement official, or the appropriate official of the Immigration and Naturalization Service. If the official fails or declines to take such person into custody during that period, such person shall be treated in accordance with the other provisions of this section, notwithstanding the applicability of other provisions of law governing release pending trial or deportation or exclusion proceedings. If temporary detention is sought under paragraph (1)(B) of this subsection, such person has the burden of proving to the court such person's United States citizenship or lawful admission for permanent residence.
> (e) Detention.-(1) If, after a hearing pursuant to the provisions of subsection (f) of this section, the judicial officer finds that no condition or combination of conditions will reasonably assure the appearance of the person as required and the safety of any other person and the community, such judicial officer shall order the detention of the person before trial.
> (2) In a case described in subsection (f)(1) of this section, a rebuttable presumption arises that no condition or combination of conditions will reasonably assure the safety of any other person and the community if such judicial officer finds that-
> (A) the person has been convicted of a Federal offense that is described in subsection (f)(1) of this section, or of a State or local offense that would have been an offense described in subsection (f)(1) of this section if a circumstance giving rise to Federal jurisdiction had existed;
> (B) the offense described in subparagraph (A) was committed while the person was on release pending trial for a Federal, State, or local offense; and
> (C) a period of not more than five years has elapsed since the date of conviction, or the release of the person from imprisonment, for the offense described in subparagraph (A), whichever is later.
> (3) Subject to rebuttal by the person, it shall be presumed that no condition or combination of conditions will reasonably assure the appearance of the person as required and the safety of the community if the judicial officer finds that there is probable cause to believe that the person committed-
> (A) an offense for which a maximum term of imprisonment of ten years or more is prescribed in the Controlled Substances Act (21 U.S.C. 801 et seq.), the Controlled Substances Import and Export Act (21 U.S.C. 951 et seq.), or chapter 705 of title 46;
> (B) an offense under section 924(c), 956(a), or 2332b of this title;
> (C) an offense listed in section 2332b(g)(5)(B) of title 18, United States Code, for which a maximum term of imprisonment of 10 years or more is prescribed;
> (D) an offense under chapter 77 of this title for which a maximum term of imprisonment of 20 years or more is prescribed; or
> (E) an offense involving a minor victim under section 1201, 1591, 2241, 2242, 2244(a)(1), 2245, 2251, 2251A, 2252(a)(1), 2252(a)(2), 2252(a)(3), 2252A(a)(1), 2252A(a)(2), 2252A(a)(3), 2252A(a)(4), 2260, 2421, 2422, 2423, or 2425 of this title.
> (f) Detention Hearing.-The judicial officer shall hold a hearing to determine whether any condition or combination of conditions set forth in subsection (c) of this section will reasonably assure the appearance of such person as required and the safety of any other person and the community-
> (1) upon motion of the attorney for the Government, in a case that involves-
> (A) a crime of violence, a violation of section 1591, or an offense listed in section 2332b(g)(5)(B) for which a maximum term of imprisonment of 10 years or more is prescribed;
> (B) an offense for which the maximum sentence is life imprisonment or death;
> (C) an offense for which a maximum term of imprisonment of ten years or more is prescribed in the Controlled Substances Act (21 U.S.C. 801 et seq.), the Controlled Substances Import and Export Act (21 U.S.C. 951 et seq.), or chapter 705 of title 46;
> (D) any felony if such person has been convicted of two or more offenses described in subparagraphs (A) through (C) of this paragraph, or two or more State or local offenses that would have been offenses described in subparagraphs (A) through (C) of this paragraph if a circumstance giving rise to Federal jurisdiction had existed, or a combination of such offenses; or
> (E) any felony that is not otherwise a crime of violence that involves a minor victim or that involves the possession or use of a firearm or destructive device (as those terms are defined in section 921), or any other dangerous weapon, or involves a failure to register under section 2250 of title 18, United States Code; or
> (2) upon motion of the attorney for the Government or upon the judicial officer's own motion in a case, that involves-
> (A) a serious risk that such person will flee; or
> (B) a serious risk that such person will obstruct or attempt to obstruct justice, or threaten, injure, or intimidate, or attempt to threaten, injure, or intimidate, a prospective witness or juror.
> The hearing shall be held immediately upon the person's first appearance before the judicial officer unless that person, or the attorney for the Government, seeks a continuance. Except for good cause, a continuance on motion of such person may not exceed five days (not including any intermediate Saturday, Sunday, or legal holiday), and a continuance on motion of the attorney for the Government may not exceed three days (not including any intermediate Saturday, Sunday, or legal holiday). During a continuance, such person shall be detained, and the judicial officer, on motion of the attorney for the Government or sua sponte, may order that, while in custody, a person who appears to be a narcotics addict receive a medical examination to determine whether such person is an addict. At the hearing, such person has the right to be represented by counsel, and, if financially unable to obtain adequate representation, to have counsel appointed. The person shall be afforded an opportunity to testify, to present witnesses, to cross-examine witnesses who appear at the hearing, and to present information by proffer or otherwise. The rules concerning admissibility of evidence in criminal trials do not apply to the presentation and consideration of information at the hearing. The facts the judicial officer uses to support a finding pursuant to subsection (e) that no condition or combination of conditions will reasonably assure the safety of any other person and the community shall be supported by clear and convincing evidence. The person may be detained pending completion of the hearing. The hearing may be reopened, before or after a determination by the judicial officer, at any time before trial if the judicial officer finds that information exists that was not known to the movant at the time of the hearing and that has a material bearing on the issue whether there are conditions of release that will reasonably assure the appearance of such person as required and the safety of any other person and the community.
> (g) Factors To Be Considered.-The judicial officer shall, in determining whether there are conditions of release that will reasonably assure the appearance of the person as required and the safety of any other person and the community, take into account the available information concerning-
> (1) the nature and circumstances of the offense charged, including whether the offense is a crime of violence, a violation of section 1591, a Federal crime of terrorism, or involves a minor victim or a controlled substance, firearm, explosive, or destructive device;
> (2) the weight of the evidence against the person;
> (3) the history and characteristics of the person, including-
> (A) the person's character, physical and mental condition, family ties, employment, financial resources, length of residence in the community, community ties, past conduct, history relating to drug or alcohol abuse, criminal history, and record concerning appearance at court proceedings; and
> (B) whether, at the time of the current offense or arrest, the person was on probation, on parole, or on other release pending trial, sentencing, appeal, or completion of sentence for an offense under Federal, State, or local law; and
> (4) the nature and seriousness of the danger to any person or the community that would be posed by the person's release. In considering the conditions of release described in subsection (c)(1)(B)(xi) or (c)(1)(B)(xii) of this section, the judicial officer may upon his own motion, or shall upon the motion of the Government, conduct an inquiry into the source of the property to be designated for potential forfeiture or offered as collateral to secure a bond, and shall decline to accept the designation, or the use as collateral, of property that, because of its source, will not reasonably assure the appearance of the person as required.
> (h) Contents of Release Order.-In a release order issued under subsection (b) or (c) of this section, the judicial officer shall-
> (1) include a written statement that sets forth all the conditions to which the release is subject, in a manner sufficiently clear and specific to serve as a guide for the person's conduct; and
> (2) advise the person of-
> (A) the penalties for violating a condition of release, including the penalties for committing an offense while on pretrial release;
> (B) the consequences of violating a condition of release, including the immediate issuance of a warrant for the person's arrest; and
> (C) sections 1503 of this title (relating to intimidation of witnesses, jurors, and officers of the court), 1510 (relating to obstruction of criminal investigations), 1512 (tampering with a witness, victim, or an informant), and 1513 (retaliating against a witness, victim, or an informant).
> (i) Contents of Detention Order.-In a detention order issued under subsection (e) of this section, the judicial officer shall-
> (1) include written findings of fact and a written statement of the reasons for the detention;
> (2) direct that the person be committed to the custody of the Attorney General for confinement in a corrections facility separate, to the extent practicable, from persons awaiting or serving sentences or being held in custody pending appeal;
> (3) direct that the person be afforded reasonable opportunity for private consultation with counsel; and
> (4) direct that, on order of a court of the United States or on request of an attorney for the Government, the person in charge of the corrections facility in which the person is confined deliver the person to a United States marshal for the purpose of an appearance in connection with a court proceeding.
> The judicial officer may, by subsequent order, permit the temporary release of the person, in the custody of a United States marshal or another appropriate person, to the extent that the judicial officer determines such release to be necessary for preparation of the person's defense or for another compelling reason.
> (j) Presumption of Innocence.-Nothing in this section shall be construed as modifying or limiting the presumption of innocence.

**18 U.S.C. 3143, whole section, (a) through (c)**  
READ-WHOLE: 18 U.S.C. 3143
https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section3143&num=0&edition=prelim

Fetched 2026-08-20; page carries "Text contains those laws in effect on August 19, 2026". Read whole, recorded whole. Independently re-verified against law.cornell.edu the same day: every sentence-level span of this record is contained in the second publisher's copy.

> §3143. Release or detention of a defendant pending sentence or appeal
> (a) Release or Detention Pending Sentence.-(1) Except as provided in paragraph (2), the judicial officer shall order that a person who has been found guilty of an offense and who is awaiting imposition or execution of sentence, other than a person for whom the applicable guideline promulgated pursuant to 28 U.S.C. 994 does not recommend a term of imprisonment, be detained, unless the judicial officer finds by clear and convincing evidence that the person is not likely to flee or pose a danger to the safety of any other person or the community if released under section 3142(b) or (c). If the judicial officer makes such a finding, such judicial officer shall order the release of the person in accordance with section 3142(b) or (c).
> (2) The judicial officer shall order that a person who has been found guilty of an offense in a case described in subparagraph (A), (B), or (C) of subsection (f)(1) of section 3142 and is awaiting imposition or execution of sentence be detained unless-
> (A)(i) the judicial officer finds there is a substantial likelihood that a motion for acquittal or new trial will be granted; or
> (ii) an attorney for the Government has recommended that no sentence of imprisonment be imposed on the person; and
> (B) the judicial officer finds by clear and convincing evidence that the person is not likely to flee or pose a danger to any other person or the community.
> (b) Release or Detention Pending Appeal by the Defendant.-(1) Except as provided in paragraph (2), the judicial officer shall order that a person who has been found guilty of an offense and sentenced to a term of imprisonment, and who has filed an appeal or a petition for a writ of certiorari, be detained, unless the judicial officer finds-
> (A) by clear and convincing evidence that the person is not likely to flee or pose a danger to the safety of any other person or the community if released under section 3142(b) or (c) of this title; and
> (B) that the appeal is not for the purpose of delay and raises a substantial question of law or fact likely to result in-
> (i) reversal,
> (ii) an order for a new trial,
> (iii) a sentence that does not include a term of imprisonment, or
> (iv) a reduced sentence to a term of imprisonment less than the total of the time already served plus the expected duration of the appeal process.
> If the judicial officer makes such findings, such judicial officer shall order the release of the person in accordance with section 3142(b) or (c) of this title, except that in the circumstance described in subparagraph (B)(iv) of this paragraph, the judicial officer shall order the detention terminated at the expiration of the likely reduced sentence.
> (2) The judicial officer shall order that a person who has been found guilty of an offense in a case described in subparagraph (A), (B), or (C) of subsection (f)(1) of section 3142 and sentenced to a term of imprisonment, and who has filed an appeal or a petition for a writ of certiorari, be detained.
> (c) Release or Detention Pending Appeal by the Government.-The judicial officer shall treat a defendant in a case in which an appeal has been taken by the United States under section 3731 of this title, in accordance with section 3142 of this title, unless the defendant is otherwise subject to a release or detention order. Except as provided in subsection (b) of this section, the judicial officer, in a case in which an appeal has been taken by the United States under section 3742, shall-
> (1) if the person has been sentenced to a term of imprisonment, order that person detained; and
> (2) in any other circumstance, release or detain the person under section 3142.

**Fed. R. Crim. P. 5, whole rule, (a) through (g)**  
READ-WHOLE: Fed. R. Crim. P. Rule 5
https://www.uscourts.gov/sites/default/files/document/federal-rules-of-criminal-procedure.pdf

DIVERGENCE NOTE: Cornell's copy of (d)(1)(F) carries two typos ("attoreny", "counsular office") against the official PDF's "attorney" and "consular officer". The official text is recorded.

Fetched 2026-08-20 from the OFFICIAL uscourts.gov PDF ("as amended to December 1, 2025"), extracted locally with pdftotext -layout, line-break hyphenation joined and each join arbitrated against the second publisher. Read whole, recorded whole. Independently re-verified against law.cornell.edu: every span contained in the second copy except where Cornell itself is defective, noted per rule below. Cornell is the SECONDARY path here, used for verification only; the text recorded is the official PDF's.

> Rule 5. Initial Appearance
> (a) In General.
> (1) Appearance Upon an Arrest.
> (A) A person making an arrest within the United States must take the defendant without unnecessary delay before a magistrate judge, or before a state or local judicial officer as Rule 5(c) provides, unless a statute provides otherwise.
> (B) A person making an arrest outside the United States must take the defendant without unnecessary delay before a magistrate judge, unless a statute provides otherwise.
> (2) Exceptions.
> (A) An officer making an arrest under a warrant issued upon a complaint charging solely a violation of 18 U.S.C. § 1073 need not comply with this rule if:
> (i) the person arrested is transferred without unnecessary delay to the custody of appropriate state or local authorities in the district of arrest; and
> (ii) an attorney for the government moves promptly, in the district where the warrant was issued, to dismiss the complaint.
> (B) If a defendant is arrested for violating probation or supervised release, Rule 32.1 applies.
> (C) If a defendant is arrested for failing to appear in another district, Rule 40 applies.
> (3) Appearance Upon a Summons. When a defendant appears in response to a summons under Rule 4, a magistrate judge must proceed under Rule 5(d) or (e), as applicable.
> (b) Arrest Without a Warrant. If a defendant is arrested without a warrant, a complaint meeting Rule 4(a)’s requirement of probable cause must be promptly filed in the district where the offense was allegedly committed.
> (c) Place of Initial Appearance; Transfer to Another District.
> (1) Arrest in the District Where the Offense Was Allegedly Committed. If the defendant is arrested in the district where the offense was allegedly committed:
> (A) the initial appearance must be in that district; and
> (B) if a magistrate judge is not reasonably available, the initial appearance may be before a state or local judicial officer.
> (2) Arrest in a District Other Than Where the Offense Was Allegedly Committed. If the defendant was arrested in a district other than where the offense was allegedly committed, the initial appearance must be:
> (A) in the district of arrest; or
> (B) in an adjacent district if:
> (i) the appearance can occur more promptly there; or
> (ii) the offense was allegedly committed there and the initial appearance will occur on the day of arrest.
> (3) Procedures in a District Other Than Where the Offense Was Allegedly Committed. If the initial appearance occurs in a district other than where the offense was allegedly committed, the following procedures apply:
> (A) the magistrate judge must inform the defendant about the provisions of Rule 20;
> (B) if the defendant was arrested without a warrant, the district court where the offense was allegedly committed must first issue a warrant before the magistrate judge transfers the defendant to that district;
> (C) the magistrate judge must conduct a preliminary hearing if required by Rule 5.1;
> (D) the magistrate judge must transfer the defendant to the district where the offense was allegedly committed if:
> (i) the government produces the warrant, a certified copy of the warrant, or a reliable electronic form of either; and
> (ii) the judge finds that the defendant is the same person named in the indictment, information, or warrant; and
> (E) when a defendant is transferred and discharged, the clerk must promptly transmit the papers and any bail to the clerk in the district where the offense was allegedly committed.
> (4) Procedure for Persons Extradited to the United States. If the defendant is surrendered to the United States in accordance with a request for the defendant’s extradition, the initial appearance must be in the district (or one of the districts) where the offense is charged.
> (d) Procedure in a Felony Case.
> (1) Advice. If the defendant is charged with a felony, the judge must inform the defendant of the following:
> (A) the complaint against the defendant, and any affidavit filed with it;
> (B) the defendant’s right to retain counsel or to request that counsel be appointed if the defendant cannot obtain counsel;
> (C) the circumstances, if any, under which the defendant may secure pretrial release;
> (D) any right to a preliminary hearing;
> (E) the defendant’s right not to make a statement, and that any statement made may be used against the defendant; and
> (F) that a defendant who is not a United States citizen may request that an attorney for the government or a federal law enforcement official notify a consular officer from the defendant’s country of nationality that the defendant has been arrested—but that even without the defendant’s request, a treaty or other international agreement may require consular notification.
> (2) Consulting with Counsel. The judge must allow the defendant reasonable opportunity to consult with counsel.
> (3) Detention or Release. The judge must detain or release the defendant as provided by statute or these rules.
> (4) Plea. A defendant may be asked to plead only under Rule 10.
> (e) Procedure in a Misdemeanor Case. If the defendant is charged with a misdemeanor only, the judge must inform the defendant in accordance with Rule 58(b)(2).
> (f) Reminder of Prosecutorial Obligation.
> (1) In General. In all criminal proceedings, on the first scheduled court date when both prosecutor and defense counsel are present, the judge shall issue an oral and written order to prosecution and defense counsel that confirms the disclosure obligation of the prosecutor under Brady v. Maryland, 373 U.S. 83 (1963) and its progeny, and the possible consequences of violating such order under applicable law.
> (2) Formation of Order. Each judicial council in which a district court is located shall promulgate a model order for the purpose of paragraph (1) that the court may use as it determines is appropriate.
> (g) Video Teleconferencing. Video teleconferencing may be used to conduct an appearance under this rule if the defendant consents.
> (As amended Feb. 28, 1966, eff. July 1, 1966; Apr. 24, 1972, eff. Oct. 1, 1972; Apr. 28, 1982, eff. Aug. 1, 1982; Pub. L. 98–473, title II, § 209(a), Oct. 12, 1984, 98 Stat. 1986; Mar. 9, 1987, eff. Aug. 1, 1987; May 1, 1990, eff. Dec. 1, 1990; Apr. 22, 1993, eff. Dec. 1, 1993; Apr. 27, 1995, eff. Dec. 1, 1995; Apr. 29, 2002, eff. Dec. 1, 2002; Apr. 12, 2006, eff. Dec. 1, 2006; Apr. 23, 2012, eff. Dec. 1, 2012; Apr. 25, 2014, eff. Dec. 1, 2014; Pub. L. 116–182, § 2, Oct. 21, 2020, 134 Stat. 894.)

**Fed. R. Crim. P. 5.1, whole rule, (a) through (h)**  
READ-WHOLE: Fed. R. Crim. P. Rule 5.1
https://www.uscourts.gov/sites/default/files/document/federal-rules-of-criminal-procedure.pdf

Fetched 2026-08-20 from the OFFICIAL uscourts.gov PDF ("as amended to December 1, 2025"), extracted locally with pdftotext -layout, line-break hyphenation joined and each join arbitrated against the second publisher. Read whole, recorded whole. Independently re-verified against law.cornell.edu: every span contained in the second copy except where Cornell itself is defective, noted per rule below. Cornell is the SECONDARY path here, used for verification only; the text recorded is the official PDF's.

> Rule 5.1. Preliminary Hearing
> (a) In General. If a defendant is charged with an offense other than a petty offense, a magistrate judge must conduct a preliminary hearing unless:
> (1) the defendant waives the hearing;
> (2) the defendant is indicted;
> (3) the government files an information under Rule 7(b) charging the defendant with a felony;
> (4) the government files an information charging the defendant with a misdemeanor; or
> (5) the defendant is charged with a misdemeanor and consents to trial before a magistrate judge.
> (b) Selecting a District. A defendant arrested in a district other than where the offense was allegedly committed may elect to have the preliminary hearing conducted in the district where the prosecution is pending.
> (c) Scheduling. The magistrate judge must hold the preliminary hearing within a reasonable time, but no later than 14 days after the initial appearance if the defendant is in custody and no later than 21 days if not in custody.
> (d) Extending the Time. With the defendant’s consent and upon a showing of good cause—taking into account the public interest in the prompt disposition of criminal cases—a magistrate judge may extend the time limits in Rule 5.1(c) one or more times. If the defendant does not consent, the magistrate judge may extend the time limits only on a showing that extraordinary circumstances exist and justice requires the delay.
> (e) Hearing and Finding. At the preliminary hearing, the defendant may cross-examine adverse witnesses and may introduce evidence but may not object to evidence on the ground that it was unlawfully acquired. If the magistrate judge finds probable cause to believe an offense has been committed and the defendant committed it, the magistrate judge must promptly require the defendant to appear for further proceedings.
> (f) Discharging the Defendant. If the magistrate judge finds no probable cause to believe an offense has been committed or the defendant committed it, the magistrate judge must dismiss the complaint and discharge the defendant. A discharge does not preclude the government from later prosecuting the defendant for the same offense.
> (g) Recording the Proceedings. The preliminary hearing must be recorded by a court reporter or by a suitable recording device. A recording of the proceeding may be made available to any party upon request. A copy of the recording and a transcript may be provided to any party upon request and upon any payment required by applicable Judicial Conference regulations.
> (h) Producing a Statement.
> (1) In General. Rule 26.2(a)–(d) and (f) applies at any hearing under this rule, unless the magistrate judge for good cause rules otherwise in a particular case.
> (2) Sanctions for Not Producing a Statement. If a party disobeys a Rule 26.2 order to deliver a statement to the moving party, the magistrate judge must not consider the testimony of a witness whose statement is withheld.
> (As added Apr. 24, 1972, eff. Oct. 1, 1972; amended Mar. 9, 1987, eff. Aug. 1, 1987; Apr. 22, 1993, eff. Dec. 1, 1993; Apr. 24, 1998, eff. Dec. 1, 1998; Apr. 29, 2002, eff. Dec. 1, 2002; Mar. 26, 2009, eff. Dec. 1, 2009.)
> TITLE III. THE GRAND JURY, THE INDICTMENT, AND THE INFORMATION

**Fed. R. Crim. P. 10, whole rule, (a) through (c)**  
READ-WHOLE: Fed. R. Crim. P. Rule 10
https://www.uscourts.gov/sites/default/files/document/federal-rules-of-criminal-procedure.pdf

Fetched 2026-08-20 from the OFFICIAL uscourts.gov PDF ("as amended to December 1, 2025"), extracted locally with pdftotext -layout, line-break hyphenation joined and each join arbitrated against the second publisher. Read whole, recorded whole. Independently re-verified against law.cornell.edu: every span contained in the second copy except where Cornell itself is defective, noted per rule below. Cornell is the SECONDARY path here, used for verification only; the text recorded is the official PDF's.

> Rule 10. Arraignment
> (a) In General. An arraignment must be conducted in open court and must consist of:
> (1) ensuring that the defendant has a copy of the indictment or information;
> (2) reading the indictment or information to the defendant or stating to the defendant the substance of the charge; and then
> (3) asking the defendant to plead to the indictment or information.
> (b) Waiving Appearance. A defendant need not be present for the arraignment if:
> (1) the defendant has been charged by indictment or misdemeanor information;
> (2) the defendant, in a written waiver signed by both the defendant and defense counsel, has waived appearance and has affirmed that the defendant received a copy of the indictment or information and that the plea is not guilty; and
> (3) the court accepts the waiver.
> (c) Video Teleconferencing. Video teleconferencing may be used to arraign a defendant if the defendant consents.
> (As amended Mar. 9, 1987, eff. Aug. 1, 1987; Apr. 29, 2002, eff. Dec. 1, 2002.)

**Fed. R. Crim. P. 11, whole rule, (a) through (h)**  
READ-WHOLE: Fed. R. Crim. P. Rule 11
https://www.uscourts.gov/sites/default/files/document/federal-rules-of-criminal-procedure.pdf

DIVERGENCE NOTE: Cornell's copy of (d)(2)(A) reads "under 11(c)(5)", dropping the word "Rule"; the official PDF reads "under Rule 11(c)(5)" and is recorded.

Fetched 2026-08-20 from the OFFICIAL uscourts.gov PDF ("as amended to December 1, 2025"), extracted locally with pdftotext -layout, line-break hyphenation joined and each join arbitrated against the second publisher. Read whole, recorded whole. Independently re-verified against law.cornell.edu: every span contained in the second copy except where Cornell itself is defective, noted per rule below. Cornell is the SECONDARY path here, used for verification only; the text recorded is the official PDF's.

> Rule 11. Pleas
> (a) Entering a Plea.
> (1) In General. A defendant may plead not guilty, guilty, or (with the court’s consent) nolo contendere.
> (2) Conditional Plea. With the consent of the court and the government, a defendant may enter a conditional plea of guilty or nolo contendere, reserving in writing the right to have an appellate court review an adverse determination of a specified pretrial motion. A defendant who prevails on appeal may then withdraw the plea.
> (3) Nolo Contendere Plea. Before accepting a plea of nolo contendere, the court must consider the parties’ views and the public interest in the effective administration of justice.
> (4) Failure to Enter a Plea. If a defendant refuses to enter a plea or if a defendant organization fails to appear, the court must enter a plea of not guilty.
> (b) Considering and Accepting a Guilty or Nolo Contendere Plea.
> (1) Advising and Questioning the Defendant. Before the court accepts a plea of guilty or nolo contendere, the defendant may be placed under oath, and the court must address the defendant personally in open court. During this address, the court must inform the defendant of, and determine that the defendant understands, the following:
> (A) the government’s right, in a prosecution for perjury or false statement, to use against the defendant any statement that the defendant gives under oath;
> (B) the right to plead not guilty, or having already so pleaded, to persist in that plea;
> (C) the right to a jury trial;
> (D) the right to be represented by counsel—and if necessary have the court appoint counsel—at trial and at every other stage of the proceeding;
> (E) the right at trial to confront and cross-examine adverse witnesses, to be protected from compelled self-incrimination, to testify and present evidence, and to compel the attendance of witnesses;
> (F) the defendant’s waiver of these trial rights if the court accepts a plea of guilty or nolo contendere;
> (G) the nature of each charge to which the defendant is pleading;
> (H) any maximum possible penalty, including imprisonment, fine, and term of supervised release;
> (I) any mandatory minimum penalty;
> (J) any applicable forfeiture;
> (K) the court’s authority to order restitution;
> (L) the court’s obligation to impose a special assessment;
> (M) in determining a sentence, the court’s obligation to calculate the applicable sentencing-guideline range and to consider that range, possible departures under the Sentencing Guidelines, and other sentencing factors under 18 U.S.C. § 3553(a);
> (N) the terms of any plea-agreement provision waiving the right to appeal or to collaterally attack the sentence; and
> (O) that, if convicted, a defendant who is not a United States citizen may be removed from the United States, denied citizenship, and denied admission to the United States in the future.
> (2) Ensuring That a Plea Is Voluntary. Before accepting a plea of guilty or nolo contendere, the court must address the defendant personally in open court and determine that the plea is voluntary and did not result from force, threats, or promises (other than promises in a plea agreement).
> (3) Determining the Factual Basis for a Plea. Before entering judgment on a guilty plea, the court must determine that there is a factual basis for the plea.
> (c) Plea Agreement Procedure.
> (1) In General. An attorney for the government and the defendant’s attorney, or the defendant when proceeding pro se, may discuss and reach a plea agreement. The court must not participate in these discussions. If the defendant pleads guilty or nolo contendere to either a charged offense or a lesser or related offense, the plea agreement may specify that an attorney for the government will:
> (A) not bring, or will move to dismiss, other charges;
> (B) recommend, or agree not to oppose the defendant’s request, that a particular sentence or sentencing range is appropriate or that a particular provision of the Sentencing Guidelines, or policy statement, or sentencing factor does or does not apply (such a recommendation or request does not bind the court); or
> (C) agree that a specific sentence or sentencing range is the appropriate disposition of the case, or that a particular provision of the Sentencing Guidelines, or policy statement, or sentencing factor does or does not apply (such a recommendation or request binds the court once the court accepts the plea agreement).
> (2) Disclosing a Plea Agreement. The parties must disclose the plea agreement in open court when the plea is offered, unless the court for good cause allows the parties to disclose the plea agreement in camera.
> (3) Judicial Consideration of a Plea Agreement.
> (A) To the extent the plea agreement is of the type specified in Rule 11(c)(1)(A) or (C), the court may accept the agreement, reject it, or defer a decision until the court has reviewed the presentence report.
> (B) To the extent the plea agreement is of the type specified in Rule 11(c)(1)(B), the court must advise the defendant that the defendant has no right to withdraw the plea if the court does not follow the recommendation or request.
> (4) Accepting a Plea Agreement. If the court accepts the plea agreement, it must inform the defendant that to the extent the plea agreement is of the type specified in Rule 11(c)(1)(A) or (C), the agreed disposition will be included in the judgment.
> (5) Rejecting a Plea Agreement. If the court rejects a plea agreement containing provisions of the type specified in Rule 11(c)(1)(A) or (C), the court must do the following on the record and in open court (or, for good cause, in camera):
> (A) inform the parties that the court rejects the plea agreement;
> (B) advise the defendant personally that the court is not required to follow the plea agreement and give the defendant an opportunity to withdraw the plea; and
> (C) advise the defendant personally that if the plea is not withdrawn, the court may dispose of the case less favorably toward the defendant than the plea agreement contemplated.
> (d) Withdrawing a Guilty or Nolo Contendere Plea. A defendant may withdraw a plea of guilty or nolo contendere:
> (1) before the court accepts the plea, for any reason or no reason; or
> (2) after the court accepts the plea, but before it imposes sentence if:
> (A) the court rejects a plea agreement under Rule 11(c)(5); or
> (B) the defendant can show a fair and just reason for requesting the withdrawal.
> (e) Finality of a Guilty or Nolo Contendere Plea. After the court imposes sentence, the defendant may not withdraw a plea of guilty or nolo contendere, and the plea may be set aside only on direct appeal or collateral attack.
> (f) Admissibility or Inadmissibility of a Plea, Plea Discussions, and Related Statements. The admissibility or inadmissibility of a plea, a plea discussion, and any related statement is governed by Federal Rule of Evidence 410.
> (g) Recording the Proceedings. The proceedings during which the defendant enters a plea must be recorded by a court reporter or by a suitable recording device. If there is a guilty plea or a nolo contendere plea, the record must include the inquiries and advice to the defendant required under Rule 11(b) and (c).
> (h) Harmless Error. A variance from the requirements of this rule is harmless error if it does not affect substantial rights.
> (As amended Feb. 28, 1966, eff. July 1, 1966; Apr. 22, 1974, eff. Dec. 1, 1975; Pub. L. 94–64, § 3(5)–(10), July 31, 1975, 89 Stat. 371, 372, eff. Aug. 1 and Dec. 1, 1975; Apr. 30, 1979, eff. Aug. 1, 1979, and Dec. 1, 1980; Apr. 28, 1982, eff. Aug. 1, 1982; Apr. 28, 1983, eff. Aug. 1, 1983; Apr. 29, 1985, eff. Aug. 1, 1985; Mar. 9, 1987, eff. Aug. 1, 1987; Pub. L. 100–690, title VII, § 7076, Nov. 18, 1988, 102 Stat. 4406; Apr. 25, 1989, eff. Dec. 1, 1989; Apr. 26, 1999, eff. Dec. 1, 1999; Apr. 29, 2002, eff. Dec. 1, 2002; Apr. 30, 2007, eff. Dec. 1, 2007; Apr. 16, 2013, eff. Dec. 1, 2013.)

**Fed. R. Crim. P. 32, whole rule, (a) through (k)**  
READ-WHOLE: Fed. R. Crim. P. Rule 32
https://www.uscourts.gov/sites/default/files/document/federal-rules-of-criminal-procedure.pdf

Fetched 2026-08-20 from the OFFICIAL uscourts.gov PDF ("as amended to December 1, 2025"), extracted locally with pdftotext -layout, line-break hyphenation joined and each join arbitrated against the second publisher. Read whole, recorded whole. Independently re-verified against law.cornell.edu: every span contained in the second copy except where Cornell itself is defective, noted per rule below. Cornell is the SECONDARY path here, used for verification only; the text recorded is the official PDF's.

> Rule 32. Sentencing and Judgment
> (a) [Reserved.]
> (b) Time of Sentencing.
> (1) In General. The court must impose sentence without unnecessary delay.
> (2) Changing Time Limits. The court may, for good cause, change any time limits prescribed in this rule.
> (c) Presentence Investigation.
> (1) Required Investigation.
> (A) In General. The probation officer must conduct a presentence investigation and submit a report to the court before it imposes sentence unless:
> (i) 18 U.S.C. § 3593(c) or another statute requires otherwise; or
> (ii) the court finds that the information in the record enables it to meaningfully exercise its sentencing authority under 18 U.S.C. § 3553, and the court explains its finding on the record.
> (B) Restitution. If the law permits restitution, the probation officer must conduct an investigation and submit a report that contains sufficient information for the court to order restitution.
> (2) Interviewing the Defendant. The probation officer who interviews a defendant as part of a presentence investigation must, on request, give the defendant’s attorney notice and a reasonable opportunity to attend the interview.
> (d) Presentence Report.
> (1) Applying the Advisory Sentencing Guidelines. The presentence report must:
> (A) identify all applicable guidelines and policy statements of the Sentencing Commission;
> (B) calculate the defendant’s offense level and criminal history category;
> (C) state the resulting sentencing range and kinds of sentences available;
> (D) identify any factor relevant to:
> (i) the appropriate kind of sentence, or
> (ii) the appropriate sentence within the applicable sentencing range; and
> (E) identify any basis for departing from the applicable sentencing range.
> (2) Additional Information. The presentence report must also contain the following:
> (A) the defendant’s history and characteristics, including:
> (i) any prior criminal record;
> (ii) the defendant’s financial condition; and
> (iii) any circumstances affecting the defendant’s behavior that may be helpful in imposing sentence or in correctional treatment;
> (B) information that assesses any financial, social, psychological, and medical impact on any victim;
> (C) when appropriate, the nature and extent of nonprison programs and resources available to the defendant;
> (D) when the law provides for restitution, information sufficient for a restitution order;
> (E) if the court orders a study under 18 U.S.C. § 3552(b), any resulting report and recommendation;
> (F) a statement of whether the government seeks forfeiture under Rule 32.2 and any other law; and
> (G) any other information that the court requires, including information relevant to the factors under 18 U.S.C. § 3553(a).
> (3) Exclusions. The presentence report must exclude the following:
> (A) any diagnoses that, if disclosed, might seriously disrupt a rehabilitation program;
> (B) any sources of information obtained upon a promise of confidentiality; and
> (C) any other information that, if disclosed, might result in physical or other harm to the defendant or others.
> (e) Disclosing the Report and Recommendation.
> (1) Time to Disclose. Unless the defendant has consented in writing, the probation officer must not submit a presentence report to the court or disclose its contents to anyone until the defendant has pleaded guilty or nolo contendere, or has been found guilty.
> (2) Minimum Required Notice. The probation officer must give the presentence report to the defendant, the defendant’s attorney, and an attorney for the government at least 35 days before sentencing unless the defendant waives this minimum period.
> (3) Sentence Recommendation. By local rule or by order in a case, the court may direct the probation officer not to disclose to anyone other than the court the officer’s recommendation on the sentence.
> (f) Objecting to the Report.
> (1) Time to Object. Within 14 days after receiving the presentence report, the parties must state in writing any objections, including objections to material information, sentencing guideline ranges, and policy statements contained in or omitted from the report.
> (2) Serving Objections. An objecting party must provide a copy of its objections to the opposing party and to the probation officer.
> (3) Action on Objections. After receiving objections, the probation officer may meet with the parties to discuss the objections. The probation officer may then investigate further and revise the presentence report as appropriate.
> (g) Submitting the Report. At least 7 days before sentencing, the probation officer must submit to the court and to the parties the presentence report and an addendum containing any unresolved objections, the grounds for those objections, and the probation officer’s comments on them.
> (h) Notice of Possible Departure from Sentencing Guidelines. Before the court may depart from the applicable sentencing range on a ground not identified for departure either in the presentence report or in a party’s prehearing submission, the court must give the parties reasonable notice that it is contemplating such a departure. The notice must specify any ground on which the court is contemplating a departure.
> (i) Sentencing.
> (1) In General. At sentencing, the court:
> (A) must verify that the defendant and the defendant’s attorney have read and discussed the presentence report and any addendum to the report;
> (B) must give to the defendant and an attorney for the government a written summary of—or summarize in camera—any information excluded from the presentence report under Rule 32(d)(3) on which the court will rely in sentencing, and give them a reasonable opportunity to comment on that information;
> (C) must allow the parties’ attorneys to comment on the probation officer’s determinations and other matters relating to an appropriate sentence; and
> (D) may, for good cause, allow a party to make a new objection at any time before sentence is imposed.
> (2) Introducing Evidence; Producing a Statement. The court may permit the parties to introduce evidence on the objections. If a witness testifies at sentencing, Rule 26.2(a)–(d) and
> (f) applies. If a party fails to comply with a Rule 26.2 order to produce a witness’s statement, the court must not consider that witness’s testimony.
> (3) Court Determinations. At sentencing, the court:
> (A) may accept any undisputed portion of the presentence report as a finding of fact;
> (B) must—for any disputed portion of the presentence report or other controverted matter—rule on the dispute or determine that a ruling is unnecessary either because the matter will not affect sentencing, or because the court will not consider the matter in sentencing; and
> (C) must append a copy of the court’s determinations under this rule to any copy of the presentence report made available to the Bureau of Prisons.
> (4) Opportunity to Speak.
> (A) By a Party. Before imposing sentence, the court must:
> (i) provide the defendant’s attorney an opportunity to speak on the defendant’s behalf;
> (ii) address the defendant personally in order to permit the defendant to speak or present any information to mitigate the sentence; and
> (iii) provide an attorney for the government an opportunity to speak equivalent to that of the defendant’s attorney.
> (B) By a Victim. Before imposing sentence, the court must address any victim of the crime who is present at sentencing and must permit the victim to be reasonably heard.
> (C) In Camera Proceedings. Upon a party’s motion and for good cause, the court may hear in camera any statement made under Rule 32(i)(4).
> (j) Defendant’s Right to Appeal.
> (1) Advice of a Right to Appeal.
> (A) Appealing a Conviction. If the defendant pleaded not guilty and was convicted, after sentencing the court must advise the defendant of the right to appeal the conviction.
> (B) Appealing a Sentence. After sentencing—regardless of the defendant’s plea—the court must advise the defendant of any right to appeal the sentence.
> (C) Appeal Costs. The court must advise a defendant who is unable to pay appeal costs of the right to ask for permission to appeal in forma pauperis.
> (2) Clerk’s Filing of Notice. If the defendant so requests, the clerk must immediately prepare and file a notice of appeal on the defendant’s behalf.
> (k) Judgment.
> (1) In General. In the judgment of conviction, the court must set forth the plea, the jury verdict or the court’s findings, the adjudication, and the sentence. If the defendant is found not guilty or is otherwise entitled to be discharged, the court must so order. The judge must sign the judgment, and the clerk must enter it.
> (2) Criminal Forfeiture. Forfeiture procedures are governed by Rule 32.2.
> (As amended Feb. 28, 1966, eff. July 1, 1966; Apr. 24, 1972, eff. Oct. 1, 1972; Apr. 22, 1974, eff. Dec. 1, 1975; Pub. L. 94–64, § 3(31)–(34), July 31, 1975, 89 Stat. 376, eff. Dec. 1, 1975; Apr. 30, 1979, eff. Aug. 1, 1979, and Dec. 1, 1980; Pub. L. 97–291, § 3, Oct. 12, 1982, 96 Stat. 1249; Apr. 28, 1983, eff. Aug. 1, 1983; Pub. L. 98–473, title II, § 215(a), Oct. 12, 1984, 98 Stat. 2014, eff. Nov. 1, 1987; Pub. L. 99–646, § 25(a), Nov. 10, 1986, 100 Stat. 3597, eff. Nov. 1, 1987; Mar. 9, 1987, eff. Aug. 1, 1987; Apr. 25, 1989, eff. Dec. 1, 1989; Apr. 30, 1991, eff. Dec. 1, 1991; Apr. 22, 1993, eff. Dec. 1, 1993; Apr. 29, 1994, eff. Dec. 1, 1994; Pub. L. 103–322, title XXIII, § 230101(b), Sept. 13, 1994, 108 Stat. 2078, eff. Dec. 1, 1994; Apr. 23, 1996, eff. Dec. 1, 1996; Pub. L. 104–132, title II, § 207(a), Apr. 24, 1996, 110 Stat. 1236; Apr. 17, 2000, eff. Dec. 1, 2000; Apr. 29, 2002, eff. Dec. 1, 2002; Apr. 30, 2007, eff. Dec. 1, 2007; Apr. 23, 2008, eff. Dec. 1, 2008; Mar. 26, 2009, eff. Dec. 1, 2009; Apr. 26, 2011, eff. Dec. 1, 2011.)

