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
