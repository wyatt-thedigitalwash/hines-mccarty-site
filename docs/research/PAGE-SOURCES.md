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
