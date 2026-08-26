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
[RESHAPED 2026-08-20: the blockquotes in this record were emitted as wrapped
~75-character lines, the shape HUNT-LIST Instance 13 records: textually
correct, and structurally invisible to the G3 truncation detector, which
locates spans inside single corpus entries. Joined to one blockquote per
quoted passage; text unchanged. Same day, each 3.134 quoted paragraph gained
its own subdivision header, because the combined header bound no subdivision
cite to any quote and the provenance gate could not clear "Rule 3.134(a)(2)"
against a record that demonstrably quotes it.]
> "Except when previously released in a lawful manner, every arrested person must be taken before a judge, either in person or by audio-video communication technology in the discretion of the court, within 24 hours of arrest."

**Rule 3.130(b)(1)(B)**, advice only, not appointment:
> the judge must advise the defendant that "if unrepresented, that the defendant has a right to counsel, and, if financially unable to afford counsel, that counsel **will be appointed**"

**Rule 3.130(c)(1), Appointed Counsel**, which is where the duty actually sits:
> "When the judge determines that the defendant is entitled to court-appointed counsel and desires counsel, the judge **must immediately appoint counsel**."

**The pages previously cited 3.130(b) for the appointment duty three times.**
Advice is (b)(1)(B); appointment is (c)(1). Both are now recorded because both
are cited.

**Rule 3.130(c)(2)**, on retained counsel: the judge must "allow the defendant a
reasonable time to send for counsel and must, if necessary, postpone the first
appearance hearing for that purpose."

**Rule 3.130(d), Pretrial Detention or Release:**
> "The judge must proceed to determine pretrial detention or conditions of release under rule 3.132 or rule 3.131."

**Rule 3.134, Time for Filing Formal Charges.** Two tracks, and **custody
decides which**, which is the distinction the first draft of these pages got
wrong:

**Rule 3.134(a)(1):**
> "(a) Defendants in Custody. (1) The state must file formal charges on defendants in custody by information, or indictment ... within 30 days from the date on which defendants are arrested"
>
**Rule 3.134(a)(2):**
> "(2) If the defendants remain uncharged, the court on the 30th day and with notice to the state must: (A) Order that the defendants automatically be released on their own recognizance on the 33rd day unless the state files formal charges by that date; or (B) If good cause is shown by the state, order that the defendants automatically be released on their own recognizance on the 40th day"
>
**Rule 3.134(a)(3):**
> "(3) In no event may any defendants remain in custody beyond 40 days unless they have been formally charged with a crime."
>
**Rule 3.134(b)(1):**
> "(b) Defendants Not in Custody. (1) The state must file formal charges on defendants on pretrial release ... within 60 days ... (A) Order that the defendants automatically be released on their own recognizance on the 63rd day unless the state files formal charges by that date; or (B) If good cause is shown by the state, the Court may continue the defendant on pretrial release for up to an **additional 30 days** unless the state files formal charges."
>
**Rule 3.134(b)(2):**
> "(b)(2) On the expiration of the time period prescribed in subsection (1), and on motion with notice to the state, the court shall order that the defendant be released from all requirements of bail and all conditions of pretrial release unless the defendant has been formally charged with a crime."

**Both tracks carry a good-cause extension.** An earlier draft stated it for the
in-custody track and omitted it for the not-in-custody track, which is the same
defect as quoting a sentencing floor without its exception, on the rule the
pages foreground.

**Consequence for the pages.** Anyone who bonded out is on the **(b)** track at
60 and 63 days. TOOLS.md item 2 already recorded this: "For most arrestees,
meaning anyone who bonded out, the operative numbers are now 60 and 63, not 30
and 33." The pages lead with the track that applies to most readers.

**Rule 3.191(a), Speedy Trial without Demand:**
> "every person charged with a crime shall be brought to trial within 90 days if the crime charged is a misdemeanor, or within 175 days if the crime charged is a felony ... The time periods established by this subdivision shall commence when the person is formally charged with a crime as defined under subdivision (d)."

**Rule 3.191(d), Formally Charged:**
> "For the purposes of this rule, a person is formally charged with a crime by information, or by indictment, or in the case of alleged misdemeanors by whatever documents constitute a formal charge."

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
PARTIAL: 49 CFR Parts 395, 396 and 391 (Federal Motor Carrier Safety Regulations)
https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B

Four provisions from three parts, recorded for the truck accident pages. MARKED PARTIAL BECAUSE THAT IS WHAT IT IS: parts 395, 396 and 391 run to hundreds of sections between them and only these four were read. Under D26 this record supports no claim about anything else in the FMCSRs.

WHY THESE FOUR. The truck pillar named the categories of record a commercial vehicle generates and deliberately stated no retention period, on the ground that a wrong number tells a reader they still have time when they do not. These are the numbers. Three of them are retention periods and the fourth is the hours-of-service limit those records are kept to prove.

WHAT THEY SETTLE:
  395.3(a)     10 consecutive hours off duty before driving; a 14-hour
               window after coming on duty; 11 hours of driving inside it;
               no driving after 8 hours without a 30-minute interruption
  395.8(k)(1)  the carrier retains records of duty status and supporting
               documents for NOT LESS THAN 6 MONTHS from receipt
  396.3(c)     inspection, repair and maintenance records for 1 YEAR, and
               6 MONTHS AFTER the vehicle leaves the carrier's control
  391.51(c)    the driver qualification file for as long as the driver is
               employed AND THREE YEARS after

A SIX-MONTH FLOOR IS NOT A GUARANTEE THE RECORD SURVIVES SIX MONTHS. The regulation sets a minimum the carrier must meet, not a maximum after which destruction begins, and it says nothing about the electronic data a vehicle holds, which is governed elsewhere and overwritten on its own schedule. Any page using these figures says what they are: the point past which a carrier is no longer required to have kept it.

Fetched 2026-08-26 from the eCFR renderer API, which serves the current text. INDEPENDENTLY RE-VERIFIED against a second publisher the same day: govinfo's CFR-2024 annual edition of part 395 (CFR-2024-title49-vol5-part395.xml) contains the 10-hour, 14-hour, 11-hour and six-month spans recorded here. Parts 396 and 391 were not second-sourced and that is stated rather than implied.

NOT RECORDED: everything else in these parts, including the short-haul exceptions at 395.1(e), the ELD requirements at 395.22 and 395.34, the sleeper-berth provisions, and the whole of parts 390 and 392.

> **49 CFR 395.3(a), maximum driving time for property-carrying vehicles**
> (a) Except as otherwise provided in § 395.1, no motor carrier shall permit or require any driver used by it to drive a property-carrying commercial motor vehicle, nor shall any such driver drive a property-carrying commercial motor vehicle, regardless of the number of motor carriers using the driver's services, unless the driver complies with the following requirements:
> (1) Start of work shift. A driver may not drive without first taking 10 consecutive hours off duty;
> (2) 14-hour period. A driver may not drive after a period of 14 consecutive hours after coming on-duty following 10 consecutive hours off-duty.
> (3) Driving time and interruptions of driving periods —
> (i) Driving time. A driver may drive a total of 11 hours during the period specified in paragraph (a)(2) of this section.
> (ii) Interruption of driving time. Except for drivers who qualify for either of the short-haul exceptions in § 395.1(e)(1) or (2), driving is not permitted if more than 8 hours of driving time have passed without at least a consecutive 30-minute interruption in driving status. A consecutive 30-minute interruption of driving status may be satisfied either by off-duty, sleeper berth or on-duty not driving time or by a combination of off-duty, sleeper berth and on-duty not driving time.
> **49 CFR 395.8(k), retention of the record of duty status**
> (k) Retention of driver's record of duty status and supporting documents.
> (1) A motor carrier shall retain records of duty status and supporting documents required under this part for each of its drivers for a period of not less than 6 months from the date of receipt.
> (2) The driver shall retain a copy of each record of duty status for the previous 7 consecutive days which shall be in his/her possession and available for inspection while on duty.
> **49 CFR 396.3(c), record retention for inspection, repair and maintenance**
> (c) Record retention. The records required by this section shall be retained where the vehicle is either housed or maintained for a period of 1 year and for 6 months after the motor vehicle leaves the motor carrier's control.
> **49 CFR 391.51(c), retention of the driver qualification file**
> (c) Except as provided in paragraph (d) of this section, each driver's qualification file shall be retained for as long as a driver is employed by that motor carrier and for three years thereafter.

PARTIAL: Chapter 2023-15, Laws of Florida (HB 837)
https://laws.flrules.org/2023/15

Recorded for ONE question and marked partial because that is what it is: sections 27 through 31 and the enactment lines are recorded verbatim below, and the other twenty-six sections of a thirty-nine page act were not read. Under D26 this record supports no claim about anything else in the act.

WHY. The F.S. 95.11 record carried a blocking caution: the two-year negligence limitations period arrived with this act, the section itself is silent on which claims it reaches, and a page stating "two years" flatly would be wrong for older claims. Section 28 answers it directly.

WHAT IT ANSWERS. The two-year period applies to causes of action ACCRUING after the act's effective date. The act took effect on becoming law, and it was approved by the Governor and filed with the Secretary of State on 24 March 2023. A negligence cause of action accruing on or before that date is governed by the prior four-year period, which the act struck from 95.11(3)(a).

THE DISTINCTION BETWEEN SECTIONS 28 AND 30 IS THE TRAP, and it is why this record exists rather than a note. Section 30 sets a general rule of causes of action FILED after the effective date. Section 28 expressly provides otherwise for 95.11 and keys it to ACCRUAL. Reading the general rule and applying it to the limitations amendment gives the wrong answer for any claim that accrued before March 2023 and was filed after it, which is a large population and precisely the one a limitations question is asked about.

STILL NOT A SUBSTITUTE FOR A LAWYER READING THE FILE. Accrual dates are contested, discovery rules exist, tolling exists, and none of that is in these five sections. What this record settles is which version of the statute governs, not when any particular clock started.

Fetched 2026-08-26 with curl from laws.flrules.org, the Secretary of State's session law publication, as a PDF and read as a rendered document. The enrolled bill at flsenate.gov was fetched alongside it and carries the same sections.

> Section 27. The Division of Law Revision is directed to replace the phrase "the effective date of this act" wherever it occurs in this act with the date this act becomes a law.
> Section 28. The amendments made by this act to s. 95.11, Florida Statutes, apply to causes of action accruing after the effective date of this act.
> Section 29. This act shall not be construed to impair any right under an insurance contract in effect on or before the effective date of this act. To the extent that this act affects a right under an insurance contract, this act applies to an insurance contract issued or renewed after the effective date of this act.
> Section 30. Except as otherwise expressly provided in this act, this act shall apply to causes of action filed after the effective date of this act.
> Section 31. This act shall take effect upon becoming a law.
> Approved by the Governor March 24, 2023.
> Filed in Office Secretary of State March 24, 2023.

READ-WHOLE: F.S. 95.11
https://www.flsenate.gov/Laws/Statutes/2025/95.11

Limitations other than for the recovery of real property. Recorded whole from the section body, 50 logical passages, one blockquote line each.

WHY. The limitations period, and the single most consequential fact on any personal injury page: get it wrong and a reader misses a deadline that cannot be reopened. Subsection (5)(a) reads WITHIN TWO YEARS, an action founded on negligence, and the History note carries ss. of ch. 2023-15.

APPLICABILITY IS NOT IN THIS TEXT, AND IS ANSWERED ABOVE. The two-year period arrived with ch. 2023-15 and this section is silent on which claims it reaches. Section 28 of that act, recorded immediately above this record, applies the 95.11 amendments to causes of action ACCRUING after the act's effective date, which was 24 March 2023. A claim accruing on or before that date keeps the prior four-year period. The caution that stood here is answered; what remains true is that no page may state a limitations period without saying which side of that date the claim falls on.

Fetched 2026-08-26 with curl from the Florida Senate's 2025 statutes, for the personal injury practice area. Method: the page's SectionBody div was cut at the History div and emitted programmatically rather than retyped. NOT independently re-verified against a second publisher: the Florida Senate is the publisher this project uses for the Florida Statutes, and no second path was run for this batch, which is stated rather than implied.

> Actions other than for recovery of real property shall be commenced as follows:
> (1) WITHIN TWENTY YEARS.—An action on a judgment or decree of a court of record in this state.
> (2) WITHIN FIVE YEARS.—
> (a) An action on a judgment or decree of any court, not of record, of this state or any court of the United States, any other state or territory in the United States, or a foreign country.
> (b) A legal or equitable action on a contract, obligation, or liability founded on a written instrument, except for an action to enforce a claim against a payment bond, which shall be governed by the applicable provisions of paragraph (6)(e), s. 255.05(10), s. 337.18(1), or s. 713.23(1)(e), and except for an action for a deficiency judgment governed by paragraph (6)(g).
> (c) An action to foreclose a mortgage.
> (d) An action alleging a willful violation of s. 448.110.
> (e) Notwithstanding paragraph (b), an action for breach of a property insurance contract, with the period running from the date of loss.
> (3) WITHIN FOUR YEARS.—
> (a) An action relating to the determination of paternity, with the time running from the date the child reaches the age of majority.
> (b) An action founded on the design, planning, or construction of an improvement to real property, with the time running from the date the authority having jurisdiction issues a temporary certificate of occupancy, a certificate of occupancy, or a certificate of completion, or the date of abandonment of construction if not completed, whichever date is earliest; except that, when the action involves a latent defect, the time runs from the time the defect is discovered or should have been discovered with the exercise of due diligence. In any event, the action must be commenced within 7 years after the date the authority having jurisdiction issues a temporary certificate of occupancy, a certificate of occupancy, or a certificate of completion, or the date of abandonment of construction if not completed, whichever date is earliest. However, counterclaims, cross-claims, and third-party claims that arise out of the conduct, transaction, or occurrence set out or attempted to be set out in a pleading may be commenced up to 1 year after the pleading to which such claims relate is served, even if such claims would otherwise be time barred. With respect to actions founded on the design, planning, or construction of an improvement to real property, if such construction is performed pursuant to a duly issued building permit and if the authority having jurisdiction has issued a temporary certificate of occupancy, a certificate of occupancy, or a certificate of completion, then as to the construction which is within the scope of such building permit and certificate, the correction of defects to completed work or repair of completed work, whether performed under warranty or otherwise, does not extend the period of time within which an action must be commenced. If a newly constructed single-dwelling residential building is used as a model home, the time begins to run from the date that a deed is recorded first transferring title to another party. Notwithstanding any provision of this section to the contrary, if the improvement to real property consists of the design, planning, or construction of multiple buildings, each building must be considered its own improvement for purposes of determining the limitations period set forth in this paragraph.
> (c) An action to recover public money or property held by a public officer or employee, or former public officer or employee, and obtained during, or as a result of, his or her public office or employment.
> (d) An action for injury to a person founded on the design, manufacture, distribution, or sale of personal property that is not permanently incorporated in an improvement to real property, including fixtures.
> (e) An action founded on a statutory liability.
> (f) An action for trespass on real property.
> (g) An action for taking, detaining, or injuring personal property.
> (h) An action to recover specific personal property.
> (i) A legal or equitable action founded on fraud.
> (j) A legal or equitable action on a contract, obligation, or liability not founded on a written instrument, including an action for the sale and delivery of goods, wares, and merchandise, and on store accounts.
> (k) An action to rescind a contract.
> (l) An action for money paid to any governmental authority by mistake or inadvertence.
> (m) An action for a statutory penalty or forfeiture.
> (n) An action for assault, battery, false arrest, malicious prosecution, malicious interference, false imprisonment, or any other intentional tort, except as provided in subsections (5), (6), and (8).
> (o) Any action not specifically provided for in these statutes.
> (p) An action alleging a violation, other than a willful violation, of s. 448.110.
> (4) WITHIN THREE YEARS.—An action to collect medical debt for services rendered by a facility licensed under chapter 395, provided that the period of limitations shall run from the date on which the facility refers the medical debt to a third party for collection.
> (5) WITHIN TWO YEARS.—
> (a) An action founded on negligence.
> (b) An action for professional malpractice, other than medical malpractice, whether founded on contract or tort; provided that the period of limitations shall run from the time the cause of action is discovered or should have been discovered with the exercise of due diligence. However, the limitation of actions herein for professional malpractice shall be limited to persons in privity with the professional.
> (c) An action for medical malpractice shall be commenced within 2 years from the time the incident giving rise to the action occurred or within 2 years from the time the incident is discovered, or should have been discovered with the exercise of due diligence; however, in no event shall the action be commenced later than 4 years from the date of the incident or occurrence out of which the cause of action accrued, except that this 4-year period shall not bar an action brought on behalf of a minor on or before the child’s eighth birthday. An “action for medical malpractice” is defined as a claim in tort or in contract for damages because of the death, injury, or monetary loss to any person arising out of any medical, dental, or surgical diagnosis, treatment, or care by any provider of health care. The limitation of actions within this subsection shall be limited to the health care provider and persons in privity with the provider of health care. In those actions covered by this paragraph in which it can be shown that fraud, concealment, or intentional misrepresentation of fact prevented the discovery of the injury the period of limitations is extended forward 2 years from the time that the injury is discovered or should have been discovered with the exercise of due diligence, but in no event to exceed 7 years from the date the incident giving rise to the injury occurred, except that this 7-year period shall not bar an action brought on behalf of a minor on or before the child’s eighth birthday. This paragraph shall not apply to actions for which ss. 766.301-766.316 provide the exclusive remedy.
> (d) An action to recover wages or overtime or damages or penalties concerning payment of wages and overtime.
> (e) An action for wrongful death.
> (f) An action founded upon a violation of any provision of chapter 517, with the period running from the time the facts giving rise to the cause of action were discovered or should have been discovered with the exercise of due diligence, but not more than 5 years from the date such violation occurred.
> (g) An action for personal injury caused by contact with or exposure to phenoxy herbicides while serving either as a civilian or as a member of the Armed Forces of the United States during the period January 1, 1962, through May 7, 1975; the period of limitations shall run from the time the cause of action is discovered or should have been discovered with the exercise of due diligence.
> (h) An action for libel or slander.
> (6) WITHIN ONE YEAR.—
> (a) An action for specific performance of a contract.
> (b) An action to enforce an equitable lien arising from the furnishing of labor, services, or material for the improvement of real property.
> (c) An action to enforce rights under the Uniform Commercial Code—Letters of Credit, chapter 675.
> (d) An action against any guaranty association and its insured, with the period running from the date of the deadline for filing claims in the order of liquidation.
> (e) Except for actions governed by s. 255.05(10), s. 337.18(1), or s. 713.23(1)(e), an action to enforce any claim against a payment bond on which the principal is a contractor, subcontractor, or sub-subcontractor as defined in s. 713.01, for private work as well as public work, from the last furnishing of labor, services, or materials or from the last furnishing of labor, services, or materials by the contractor if the contractor is the principal on a bond on the same construction project, whichever is later.
> (f) Except for actions described in subsection (9), or a petition challenging a criminal conviction, all petitions; extraordinary writs; tort actions, including those under s. 768.28(14); or other actions which concern any condition of confinement of a prisoner filed by or on behalf of a prisoner as defined in s. 57.085. Any petition, writ, or action brought under this paragraph must be commenced within 1 year after the time the incident, conduct, or conditions occurred or within 1 year after the time the incident, conduct, or conditions were discovered, or should have been discovered.
> (g) An action to enforce a claim of a deficiency related to a note secured by a mortgage against a residential property that is a one-family to four-family dwelling unit. The limitations period shall commence on the day after the certificate is issued by the clerk of court or the day after the mortgagee accepts a deed in lieu of foreclosure.
> (7) LACHES.—Laches shall bar any action unless it is commenced within the time provided for legal actions concerning the same subject matter regardless of lack of knowledge by the person sought to be held liable that the person alleging liability would assert his or her rights and whether the person sought to be held liable is injured or prejudiced by the delay. This subsection shall not affect application of laches at an earlier time in accordance with law.
> (8) FOR INTENTIONAL TORTS BASED ON ABUSE.—An action founded on alleged abuse, as defined in s. 39.01 or s. 415.102; incest, as defined in s. 826.04; or an action brought pursuant to s. 787.061 may be commenced at any time within 7 years after the age of majority, or within 4 years after the injured person leaves the dependency of the abuser, or within 4 years from the time of discovery by the injured party of both the injury and the causal relationship between the injury and the abuse, whichever occurs later.
> (9) WITHIN 30 DAYS FOR ACTIONS CHALLENGING CORRECTIONAL DISCIPLINARY PROCEEDINGS.—Any court action challenging prisoner disciplinary proceedings conducted by the Department of Corrections pursuant to s. 944.28(2) must be commenced within 30 days after final disposition of the prisoner disciplinary proceedings through the administrative grievance process under chapter 33, Florida Administrative Code. Any action challenging prisoner disciplinary proceedings shall be barred by the court unless it is commenced within the time period provided by this section.
> (10) SPECIFIED OFFENSES ON VICTIMS UNDER AGE 16.—An action related to an act constituting a violation of s. 794.011 or an action brought pursuant to s. 787.061 involving a victim who was under the age of 16 at the time of the act may be commenced at any time. This subsection applies to any such action other than one which would have been time barred on or before July 1, 2010.
> (11) FOR INTENTIONAL TORTS RESULTING IN DEATH FROM ACTS DESCRIBED IN S. 782.04 OR S. 782.07.—Notwithstanding paragraph (5)(e), an action for wrongful death seeking damages authorized under s. 768.21 brought against a natural person for an intentional tort resulting in death from acts described in s. 782.04 or s. 782.07 may be commenced at any time. This subsection shall not be construed to require an arrest, the filing of formal criminal charges, or a conviction for a violation of s. 782.04 or s. 782.07 as a condition for filing a civil action.
> (12) COURT COSTS AND FINES.—Notwithstanding subsection (1), an action to collect court costs, fees, or fines owed to the state may be commenced at any time.
> (13) FOR ACTIONS INVOLVING SERVICEMEMBERS.—Any action involving a servicemember as defined in s. 250.01, in which the servicemember is a party, is subject to s. 250.5201 and part IV of chapter 250, which includes the Servicemembers Civil Relief Act, 50 U.S.C. ss. 501 et seq., providing for protections to members of the United States Armed Forces, the United States Reserve Forces, or the National Guard during terms of federal or state active duty which materially affect the servicemember’s ability to appear.

READ-WHOLE: F.S. 768.81
https://www.flsenate.gov/Laws/Statutes/2025/768.81

Comparative fault. Recorded whole from the section body, 13 logical passages, one blockquote line each.

WHY. The modified comparative negligence bar. Subsection (6) reads that any party found to be greater than 50 percent at fault for his or her own harm may not recover any damages, with an express carve-out for medical negligence under chapter 766. History carries ch. 2023-15.

Fetched 2026-08-26 with curl from the Florida Senate's 2025 statutes, for the personal injury practice area. Method: the page's SectionBody div was cut at the History div and emitted programmatically rather than retyped. NOT independently re-verified against a second publisher: the Florida Senate is the publisher this project uses for the Florida Statutes, and no second path was run for this batch, which is stated rather than implied.

> (1) DEFINITIONS.—As used in this section, the term:
> (a) “Accident” means the events and actions that relate to the incident as well as those events and actions that relate to the alleged defect or injuries, including enhanced injuries.
> (b) “Economic damages” means past lost income and future lost income reduced to present value; medical and funeral expenses; lost support and services; replacement value of lost personal property; loss of appraised fair market value of real property; costs of construction repairs, including labor, overhead, and profit; and any other economic loss that would not have occurred but for the injury giving rise to the cause of action.
> (c) “Negligence action” means, without limitation, a civil action for damages based upon a theory of negligence, strict liability, products liability, professional malpractice whether couched in terms of contract or tort, or breach of warranty and like theories. The substance of an action, not conclusory terms used by a party, determines whether an action is a negligence action.
> (d) “Products liability action” means a civil action based upon a theory of strict liability, negligence, breach of warranty, nuisance, or similar theories for damages caused by the manufacture, construction, design, formulation, installation, preparation, or assembly of a product. The term includes an action alleging that injuries received by a claimant in an accident were greater than the injuries the claimant would have received but for a defective product. The substance of an action, not the conclusory terms used by a party, determines whether an action is a products liability action.
> (2) EFFECT OF CONTRIBUTORY FAULT.—In a negligence action, contributory fault chargeable to the claimant diminishes proportionately the amount awarded as economic and noneconomic damages for an injury attributable to the claimant’s contributory fault, but does not bar recovery, subject to subsection (6).
> (3) APPORTIONMENT OF DAMAGES.—In a negligence action, the court shall enter judgment against each party liable on the basis of such party’s percentage of fault and not on the basis of the doctrine of joint and several liability.
> (a)1. In order to allocate any or all fault to a nonparty, a defendant must affirmatively plead the fault of a nonparty and, absent a showing of good cause, identify the nonparty, if known, or describe the nonparty as specifically as practicable, either by motion or in the initial responsive pleading when defenses are first presented, subject to amendment any time before trial in accordance with the Florida Rules of Civil Procedure.
> 2. In order to allocate any or all fault to a nonparty and include the named or unnamed nonparty on the verdict form for purposes of apportioning damages, a defendant must prove at trial, by a preponderance of the evidence, the fault of the nonparty in causing the plaintiff’s injuries.
> (b) In a products liability action alleging that injuries received by a claimant in an accident were enhanced by a defective product, the trier of fact shall consider the fault of all persons who contributed to the accident when apportioning fault between or among them. The jury shall be appropriately instructed by the trial judge on the apportionment of fault in products liability actions where there are allegations that the injuries received by the claimant in an accident were enhanced by a defective product. The rules of evidence apply to these actions.
> (4) APPLICABILITY.—This section does not apply to any action brought by any person to recover actual economic damages resulting from pollution, to any action based upon an intentional tort, or to any cause of action as to which application of the doctrine of joint and several liability is specifically provided by chapter 403, chapter 498, chapter 517, chapter 542, or chapter 895.
> (5) MEDICAL MALPRACTICE.—Notwithstanding anything in law to the contrary, in an action for damages for personal injury or wrongful death arising out of medical malpractice, whether in contract or tort, if an apportionment of damages pursuant to this section is attributed to a teaching hospital as defined in s. 408.07, the court shall enter judgment against the teaching hospital on the basis of such party’s percentage of fault and not on the basis of the doctrine of joint and several liability.
> (6) GREATER PERCENTAGE OF FAULT.—In a negligence action to which this section applies, any party found to be greater than 50 percent at fault for his or her own harm may not recover any damages. This subsection does not apply to an action for damages for personal injury or wrongful death arising out of medical negligence pursuant to chapter 766.

READ-WHOLE: F.S. 627.736
https://www.flsenate.gov/Laws/Statutes/2025/627.736

Required personal injury protection benefits. Recorded whole from the section body, 153 logical passages, one blockquote line each.

WHY. Florida no-fault. Carries the $10,000 medical and disability limit and $5,000 death benefit, the requirement that initial services and care be received within 14 days of the accident, and the $2,500 reimbursement cap where no emergency medical condition has been determined.

Fetched 2026-08-26 with curl from the Florida Senate's 2025 statutes, for the personal injury practice area. Method: the page's SectionBody div was cut at the History div and emitted programmatically rather than retyped. NOT independently re-verified against a second publisher: the Florida Senate is the publisher this project uses for the Florida Statutes, and no second path was run for this batch, which is stated rather than implied.

> (1) REQUIRED BENEFITS.—An insurance policy complying with the security requirements of s. 627.733 must provide personal injury protection to the named insured, relatives residing in the same household unless excluded under s. 627.747, persons operating the insured motor vehicle, passengers in the motor vehicle, and other persons struck by the motor vehicle and suffering bodily injury while not an occupant of a self-propelled vehicle, subject to subsection (2) and paragraph (4)(e), to a limit of $10,000 in medical and disability benefits and $5,000 in death benefits resulting from bodily injury, sickness, disease, or death arising out of the ownership, maintenance, or use of a motor vehicle as follows:
> (a) Medical benefits.—Eighty percent of all reasonable expenses for medically necessary medical, surgical, X-ray, dental, and rehabilitative services, including prosthetic devices and medically necessary ambulance, hospital, and nursing services if the individual receives initial services and care pursuant to subparagraph 1. within 14 days after the motor vehicle accident. The medical benefits provide reimbursement only for:
> 1. Initial services and care that are lawfully provided, supervised, ordered, or prescribed by a physician licensed under chapter 458 or chapter 459, a dentist licensed under chapter 466, a chiropractic physician licensed under chapter 460, or an advanced practice registered nurse registered under s. 464.0123 or that are provided in a hospital or in a facility that owns, or is wholly owned by, a hospital. Initial services and care may also be provided by a person or entity licensed under part III of chapter 401 which provides emergency transportation and treatment.
> 2. Upon referral by a provider described in subparagraph 1., followup services and care consistent with the underlying medical diagnosis rendered pursuant to subparagraph 1. which may be provided, supervised, ordered, or prescribed only by a physician licensed under chapter 458 or chapter 459, a chiropractic physician licensed under chapter 460, a dentist licensed under chapter 466, or an advanced practice registered nurse registered under s. 464.0123, or, to the extent permitted by applicable law and under the supervision of such physician, osteopathic physician, chiropractic physician, or dentist, by a physician assistant licensed under chapter 458 or chapter 459 or an advanced practice registered nurse licensed under chapter 464. Followup services and care may also be provided by the following persons or entities:
> a. A hospital or ambulatory surgical center licensed under chapter 395.
> b. An entity wholly owned by one or more physicians licensed under chapter 458 or chapter 459, chiropractic physicians licensed under chapter 460, advanced practice registered nurses registered under s. 464.0123, or dentists licensed under chapter 466 or by such practitioners and the spouse, parent, child, or sibling of such practitioners.
> c. An entity that owns or is wholly owned, directly or indirectly, by a hospital or hospitals.
> d. A physical therapist licensed under chapter 486, based upon a referral by a provider described in this subparagraph.
> e. A health care clinic licensed under part X of chapter 400 which is accredited by an accrediting organization whose standards incorporate comparable regulations required by this state, or
> (I) Has a medical director licensed under chapter 458, chapter 459, or chapter 460;
> (II) Has been continuously licensed for more than 3 years or is a publicly traded corporation that issues securities traded on an exchange registered with the United States Securities and Exchange Commission as a national securities exchange; and
> (III) Provides at least four of the following medical specialties:
> (A) General medicine.
> (B) Radiography.
> (C) Orthopedic medicine.
> (D) Physical medicine.
> (E) Physical therapy.
> (F) Physical rehabilitation.
> (G) Prescribing or dispensing outpatient prescription medication.
> (H) Laboratory services.
> 3. Reimbursement for services and care provided in subparagraph 1. or subparagraph 2. up to $10,000 if a physician licensed under chapter 458 or chapter 459, a dentist licensed under chapter 466, a physician assistant licensed under chapter 458 or chapter 459, or an advanced practice registered nurse licensed under chapter 464 has determined that the injured person had an emergency medical condition.
> 4. Reimbursement for services and care provided in subparagraph 1. or subparagraph 2. is limited to $2,500 if a provider listed in subparagraph 1. or subparagraph 2. determines that the injured person did not have an emergency medical condition.
> 5. Medical benefits do not include massage therapy as defined in s. 480.033 or acupuncture as defined in s. 457.102, regardless of the person, entity, or licensee providing massage therapy or acupuncture, and a licensed massage therapist or licensed acupuncturist may not be reimbursed for medical benefits under this section.
> 6. The Financial Services Commission shall adopt by rule the form that must be used by an insurer and a health care provider specified in sub-subparagraph 2.b., sub-subparagraph 2.c., or sub-subparagraph 2.e. to document that the health care provider meets the criteria of this paragraph. Such rule must include a requirement for a sworn statement or affidavit.
> (b) Disability benefits.—Sixty percent of any loss of gross income and loss of earning capacity per individual from inability to work proximately caused by the injury sustained by the injured person, plus all expenses reasonably incurred in obtaining from others ordinary and necessary services in lieu of those that, but for the injury, the injured person would have performed without income for the benefit of his or her household. All disability benefits payable under this provision must be paid at least every 2 weeks.
> (c) Death benefits.—Death benefits of $5,000 per individual. Death benefits are in addition to the medical and disability benefits provided under the insurance policy. The insurer may pay death benefits to the executor or administrator of the deceased, to any of the deceased’s relatives by blood, legal adoption, or marriage, or to any person appearing to the insurer to be equitably entitled to such benefits.
> Only insurers writing motor vehicle liability insurance in this state may provide the required benefits of this section, and such insurer may not require the purchase of any other motor vehicle coverage other than the purchase of property damage liability coverage as required by s. 627.7275 as a condition for providing such benefits. Insurers may not require that property damage liability insurance in an amount greater than $10,000 be purchased in conjunction with personal injury protection. Such insurers shall make benefits and required property damage liability insurance coverage available through normal marketing channels. An insurer writing motor vehicle liability insurance in this state who fails to comply with such availability requirement as a general business practice violates part IX of chapter 626, and such violation constitutes an unfair method of competition or an unfair or deceptive act or practice involving the business of insurance. An insurer committing such violation is subject to the penalties provided under that part, as well as those provided elsewhere in the insurance code.
> (2) AUTHORIZED EXCLUSIONS.—Any insurer may exclude benefits:
> (a) For injury sustained by the named insured and relatives residing in the same household while occupying another motor vehicle owned by the named insured and not insured under the policy or for injury sustained by any person operating the insured motor vehicle without the express or implied consent of the insured.
> (b) To any injured person, if such person’s conduct contributed to his or her injury under any of the following circumstances:
> 1. Causing injury to himself or herself intentionally; or
> 2. Being injured while committing a felony.
> Whenever an insured is charged with conduct as set forth in subparagraph 2., the 30-day payment provision of paragraph (4)(b) shall be held in abeyance, and the insurer shall withhold payment of any personal injury protection benefits pending the outcome of the case at the trial level. If the charge is nolle prossed or dismissed or the insured is acquitted, the 30-day payment provision shall run from the date the insurer is notified of such action.
> (3) INSURED’S RIGHTS TO RECOVERY OF SPECIAL DAMAGES IN TORT CLAIMS.—No insurer shall have a lien on any recovery in tort by judgment, settlement, or otherwise for personal injury protection benefits, whether suit has been filed or settlement has been reached without suit. An injured party who is entitled to bring suit under the provisions of ss. 627.730-627.7405, or his or her legal representative, shall have no right to recover any damages for which personal injury protection benefits are paid or payable. The plaintiff may prove all of his or her special damages notwithstanding this limitation, but if special damages are introduced in evidence, the trier of facts, whether judge or jury, shall not award damages for personal injury protection benefits paid or payable. In all cases in which a jury is required to fix damages, the court shall instruct the jury that the plaintiff shall not recover such special damages for personal injury protection benefits paid or payable.
> (4) PAYMENT OF BENEFITS.—Benefits due from an insurer under ss. 627.730-627.7405 are primary, except that benefits received under any workers’ compensation law must be credited against the benefits provided by subsection (1) and are due and payable as loss accrues upon receipt of reasonable proof of such loss and the amount of expenses and loss incurred which are covered by the policy issued under ss. 627.730-627.7405. If the Agency for Health Care Administration provides, pays, or becomes liable for medical assistance under the Medicaid program related to injury, sickness, disease, or death arising out of the ownership, maintenance, or use of a motor vehicle, the benefits under ss. 627.730-627.7405 are subject to the Medicaid program. However, within 30 days after receiving notice that the Medicaid program paid such benefits, the insurer shall repay the full amount of the benefits to the Medicaid program.
> (a) An insurer may require written notice to be given as soon as practicable after an accident involving a motor vehicle with respect to which the policy affords the security required by ss. 627.730-627.7405.
> (b) Personal injury protection insurance benefits paid pursuant to this section are overdue if not paid within 30 days after the insurer is furnished written notice of the fact of a covered loss and of the amount of same. However:
> 1. If written notice of the entire claim is not furnished to the insurer, any partial amount supported by written notice is overdue if not paid within 30 days after written notice is furnished to the insurer. Any part or all of the remainder of the claim that is subsequently supported by written notice is overdue if not paid within 30 days after written notice is furnished to the insurer.
> 2. If an insurer pays only a portion of a claim or rejects a claim, the insurer shall provide at the time of the partial payment or rejection an itemized specification of each item that the insurer had reduced, omitted, or declined to pay and any information that the insurer desires the claimant to consider related to the medical necessity of the denied treatment or to explain the reasonableness of the reduced charge if this does not limit the introduction of evidence at trial. The insurer must also include the name and address of the person to whom the claimant should respond and a claim number to be referenced in future correspondence.
> 3. If an insurer pays only a portion of a claim or rejects a claim due to an alleged error in the claim, the insurer, at the time of the partial payment or rejection, shall provide an itemized specification or explanation of benefits due to the specified error. Upon receiving the specification or explanation, the person making the claim, at the person’s option and without waiving any other legal remedy for payment, has 15 days to submit a revised claim, which shall be considered a timely submission of written notice of a claim.
> 4. Notwithstanding the fact that written notice has been furnished to the insurer, payment is not overdue if the insurer has reasonable proof that the insurer is not responsible for the payment.
> 5. For the purpose of calculating the extent to which benefits are overdue, payment shall be treated as being made on the date a draft or other valid instrument that is equivalent to payment was placed in the United States mail in a properly addressed, postpaid envelope or, if not so posted, on the date of delivery.
> 6. This paragraph does not preclude or limit the ability of the insurer to assert that the claim was unrelated, was not medically necessary, or was unreasonable or that the amount of the charge was in excess of that permitted under, or in violation of, subsection (5). Such assertion may be made at any time, including after payment of the claim or after the 30-day period for payment set forth in this paragraph.
> (c) Upon receiving notice of an accident that is potentially covered by personal injury protection benefits, the insurer must reserve $5,000 of personal injury protection benefits for payment to physicians licensed under chapter 458 or chapter 459 or dentists licensed under chapter 466 who provide emergency services and care, as defined in s. 395.002, or who provide hospital inpatient care. The amount required to be held in reserve may be used only to pay claims from such physicians or dentists until 30 days after the date the insurer receives notice of the accident. After the 30-day period, any amount of the reserve for which the insurer has not received notice of such claims may be used by the insurer to pay other claims. The time periods specified in paragraph (b) for payment of personal injury protection benefits are tolled for the period of time that an insurer is required to hold payment of a claim that is not from such physician or dentist to the extent that the personal injury protection benefits not held in reserve are insufficient to pay the claim. This paragraph does not require an insurer to establish a claim reserve for insurance accounting purposes.
> (d) All overdue payments bear simple interest at the rate established under s. 55.03 or the rate established in the insurance contract, whichever is greater, for the quarter in which the payment became overdue, calculated from the date the insurer was furnished with written notice of the amount of covered loss. Interest is due at the time payment of the overdue claim is made.
> (e) The insurer of the owner of a motor vehicle shall pay personal injury protection benefits for:
> 1. Accidental bodily injury sustained in this state by the owner while occupying a motor vehicle, or while not an occupant of a self-propelled vehicle if the injury is caused by physical contact with a motor vehicle.
> 2. Accidental bodily injury sustained outside this state, but within the United States of America or its territories or possessions or Canada, by the owner while occupying the owner’s motor vehicle.
> 3. Accidental bodily injury sustained by a relative of the owner residing in the same household, under the circumstances described in subparagraph 1. or subparagraph 2., if the relative at the time of the accident is domiciled in the owner’s household and is not the owner of a motor vehicle with respect to which security is required under ss. 627.730-627.7405.
> 4. Accidental bodily injury sustained in this state by any other person while occupying the owner’s motor vehicle or, if a resident of this state, while not an occupant of a self-propelled vehicle if the injury is caused by physical contact with such motor vehicle, if the injured person is not:
> a. The owner of a motor vehicle with respect to which security is required under ss. 627.730-627.7405; or
> b. Entitled to personal injury benefits from the insurer of the owner of such a motor vehicle.
> (f) If two or more insurers are liable for paying personal injury protection benefits for the same injury to any one person, the maximum payable is as specified in subsection (1), and the insurer paying the benefits is entitled to recover from each of the other insurers an equitable pro rata share of the benefits paid and expenses incurred in processing the claim.
> (g) It is a violation of the insurance code for an insurer to fail to timely provide benefits as required by this section with such frequency as to constitute a general business practice.
> (h) Benefits are not due or payable to or on the behalf of an insured person if that person has committed, by a material act or omission, insurance fraud relating to personal injury protection coverage under his or her policy, if the fraud is admitted to in a sworn statement by the insured or established in a court of competent jurisdiction. Any insurance fraud voids all coverage arising from the claim related to such fraud under the personal injury protection coverage of the insured person who committed the fraud, irrespective of whether a portion of the insured person’s claim may be legitimate, and any benefits paid before the discovery of the fraud is recoverable by the insurer in its entirety from the person who committed insurance fraud. The prevailing party is entitled to its costs and attorney fees in any action in which it prevails in an insurer’s action to enforce its right of recovery under this paragraph.
> (i) If an insurer has a reasonable belief that a fraudulent insurance act, for the purposes of s. 626.989 or s. 817.234, has been committed, the insurer shall notify the claimant, in writing, within 30 days after submission of the claim that the claim is being investigated for suspected fraud. Beginning at the end of the initial 30-day period, the insurer has an additional 60 days to conduct its fraud investigation. Notwithstanding subsection (10), no later than 90 days after the submission of the claim, the insurer must deny the claim or pay the claim with simple interest as provided in paragraph (d). Interest shall be assessed from the day the claim was submitted until the day the claim is paid. All claims denied for suspected fraudulent insurance acts shall be reported to the Division of Criminal Investigations.
> (j) An insurer shall create and maintain for each insured a log of personal injury protection benefits paid by the insurer on behalf of the insured. If litigation is commenced, the insurer shall provide to the insured a copy of the log within 30 days after receiving a request for the log from the insured.
> (5) CHARGES FOR TREATMENT OF INJURED PERSONS.—
> (a) A physician, hospital, clinic, or other person or institution lawfully rendering treatment to an injured person for a bodily injury covered by personal injury protection insurance may charge the insurer and injured party only a reasonable amount pursuant to this section for the services and supplies rendered, and the insurer providing such coverage may pay for such charges directly to such person or institution lawfully rendering such treatment if the insured receiving such treatment or his or her guardian has countersigned the properly completed invoice, bill, or claim form approved by the office upon which such charges are to be paid for as having actually been rendered, to the best knowledge of the insured or his or her guardian. However, such a charge may not exceed the amount the person or institution customarily charges for like services or supplies. In determining whether a charge for a particular service, treatment, or otherwise is reasonable, consideration may be given to evidence of usual and customary charges and payments accepted by the provider involved in the dispute, reimbursement levels in the community and various federal and state medical fee schedules applicable to motor vehicle and other insurance coverages, and other information relevant to the reasonableness of the reimbursement for the service, treatment, or supply.
> 1. The insurer may limit reimbursement to 80 percent of the following schedule of maximum charges:
> a. For emergency transport and treatment by providers licensed under chapter 401, 200 percent of Medicare.
> b. For emergency services and care provided by a hospital licensed under chapter 395, 75 percent of the hospital’s usual and customary charges.
> c. For emergency services and care as defined by s. 395.002 provided in a facility licensed under chapter 395 rendered by a physician or dentist, and related hospital inpatient services rendered by a physician or dentist, the usual and customary charges in the community.
> d. For hospital inpatient services, other than emergency services and care, 200 percent of the Medicare Part A prospective payment applicable to the specific hospital providing the inpatient services.
> e. For hospital outpatient services, other than emergency services and care, 200 percent of the Medicare Part A Ambulatory Payment Classification for the specific hospital providing the outpatient services.
> f. For all other medical services, supplies, and care, 200 percent of the allowable amount under:
> (I) The participating physicians fee schedule of Medicare Part B, except as provided in sub-sub-subparagraphs (II) and (III).
> (II) Medicare Part B, in the case of services, supplies, and care provided by ambulatory surgical centers and clinical laboratories.
> (III) The Durable Medical Equipment Prosthetics/Orthotics and Supplies fee schedule of Medicare Part B, in the case of durable medical equipment.
> However, if such services, supplies, or care is not reimbursable under Medicare Part B, as provided in this sub-subparagraph, the insurer may limit reimbursement to 80 percent of the maximum reimbursable allowance under workers’ compensation, as determined under s. 440.13 and rules adopted thereunder which are in effect at the time such services, supplies, or care is provided. Services, supplies, or care that is not reimbursable under Medicare or workers’ compensation is not required to be reimbursed by the insurer.
> 2. For purposes of subparagraph 1., the applicable fee schedule or payment limitation under Medicare is the fee schedule or payment limitation in effect on March 1 of the service year in which the services, supplies, or care is rendered and for the area in which such services, supplies, or care is rendered, and the applicable fee schedule or payment limitation applies to services, supplies, or care rendered during that service year, notwithstanding any subsequent change made to the fee schedule or payment limitation, except that it may not be less than the allowable amount under the applicable schedule of Medicare Part B for 2007 for medical services, supplies, and care subject to Medicare Part B. For purposes of this subparagraph, the term “service year” means the period from March 1 through the end of February of the following year.
> 3. Subparagraph 1. does not allow the insurer to apply any limitation on the number of treatments or other utilization limits that apply under Medicare or workers’ compensation. An insurer that applies the allowable payment limitations of subparagraph 1. must reimburse a provider who lawfully provided care or treatment under the scope of his or her license, regardless of whether such provider is entitled to reimbursement under Medicare due to restrictions or limitations on the types or discipline of health care providers who may be reimbursed for particular procedures or procedure codes. However, subparagraph 1. does not prohibit an insurer from using the Medicare coding policies and payment methodologies of the federal Centers for Medicare and Medicaid Services, including applicable modifiers, to determine the appropriate amount of reimbursement for medical services, supplies, or care if the coding policy or payment methodology does not constitute a utilization limit.
> 4. If an insurer limits payment as authorized by subparagraph 1., the person providing such services, supplies, or care may not bill or attempt to collect from the insured any amount in excess of such limits, except for amounts that are not covered by the insured’s personal injury protection coverage due to the coinsurance amount or maximum policy limits.
> 5. An insurer may limit payment as authorized by this paragraph only if the insurance policy includes a notice at the time of issuance or renewal that the insurer may limit payment pursuant to the schedule of charges specified in this paragraph. A policy form approved by the office satisfies this requirement. If a provider submits a charge for an amount less than the amount allowed under subparagraph 1., the insurer may pay the amount of the charge submitted.
> (b)1. An insurer or insured is not required to pay a claim or charges:
> a. Made by a broker or by a person making a claim on behalf of a broker;
> b. For any service or treatment that was not lawful at the time rendered;
> c. To any person who knowingly submits a false or misleading statement relating to the claim or charges;
> d. With respect to a bill or statement that does not substantially meet the applicable requirements of paragraph (d);
> e. For any treatment or service that is upcoded, or that is unbundled when such treatment or services should be bundled, in accordance with paragraph (d). To facilitate prompt payment of lawful services, an insurer may change codes that it determines have been improperly or incorrectly upcoded or unbundled and may make payment based on the changed codes, without affecting the right of the provider to dispute the change by the insurer, if, before doing so, the insurer contacts the health care provider and discusses the reasons for the insurer’s change and the health care provider’s reason for the coding, or makes a reasonable good faith effort to do so, as documented in the insurer’s file; and
> f. For medical services or treatment billed by a physician and not provided in a hospital unless such services are rendered by the physician or are incident to his or her professional services and are included on the physician’s bill, including documentation verifying that the physician is responsible for the medical services that were rendered and billed.
> 2. The Department of Health, in consultation with the appropriate professional licensing boards, shall adopt, by rule, a list of diagnostic tests deemed not to be medically necessary for use in the treatment of persons sustaining bodily injury covered by personal injury protection benefits under this section. The list shall be revised from time to time as determined by the Department of Health, in consultation with the respective professional licensing boards. Inclusion of a test on the list shall be based on lack of demonstrated medical value and a level of general acceptance by the relevant provider community and may not be dependent for results entirely upon subjective patient response. Notwithstanding its inclusion on a fee schedule in this subsection, an insurer or insured is not required to pay any charges or reimburse claims for an invalid diagnostic test as determined by the Department of Health.
> (c) With respect to any treatment or service, other than medical services billed by a hospital or other provider for emergency services and care as defined in s. 395.002 or inpatient services rendered at a hospital-owned facility, the statement of charges must be furnished to the insurer by the provider and may not include, and the insurer is not required to pay, charges for treatment or services rendered more than 35 days before the postmark date or electronic transmission date of the statement, except for past due amounts previously billed on a timely basis under this paragraph, and except that, if the provider submits to the insurer a notice of initiation of treatment within 21 days after its first examination or treatment of the claimant, the statement may include charges for treatment or services rendered up to, but not more than, 75 days before the postmark date of the statement. The injured party is not liable for, and the provider may not bill the injured party for, charges that are unpaid because of the provider’s failure to comply with this paragraph. Any agreement requiring the injured person or insured to pay for such charges is unenforceable.
> 1. If the insured fails to furnish the provider with the correct name and address of the insured’s personal injury protection insurer, the provider has 35 days from the date the provider obtains the correct information to furnish the insurer with a statement of the charges. The insurer is not required to pay for such charges unless the provider includes with the statement documentary evidence that was provided by the insured during the 35-day period demonstrating that the provider reasonably relied on erroneous information from the insured and either:
> a. A denial letter from the incorrect insurer; or
> b. Proof of mailing, which may include an affidavit under penalty of perjury, reflecting timely mailing to the incorrect address or insurer.
> 2. For emergency services and care rendered in a hospital emergency department or for transport and treatment rendered by an ambulance provider licensed pursuant to part III of chapter 401, the provider is not required to furnish the statement of charges within the time periods established by this paragraph, and the insurer is not considered to have been furnished with notice of the amount of covered loss for purposes of paragraph (4)(b) until it receives a statement complying with paragraph (d), or copy thereof, which specifically identifies the place of service to be a hospital emergency department or an ambulance in accordance with billing standards recognized by the federal Centers for Medicare and Medicaid Services.
> 3. Each notice of the insured’s rights under s. 627.7401 must include the following statement in at least 12-point type:BILLING REQUIREMENTS.—Florida law provides that with respect to any treatment or services, other than certain hospital and emergency services, the statement of charges furnished to the insurer by the provider may not include, and the insurer and the injured party are not required to pay, charges for treatment or services rendered more than 35 days before the postmark date of the statement, except for past due amounts previously billed on a timely basis, and except that, if the provider submits to the insurer a notice of initiation of treatment within 21 days after its first examination or treatment of the claimant, the statement may include charges for treatment or services rendered up to, but not more than, 75 days before the postmark date of the statement.
> (d) All statements and bills for medical services rendered by a physician, hospital, clinic, or other person or institution shall be submitted to the insurer on a properly completed Centers for Medicare and Medicaid Services (CMS) 1500 form, UB 92 forms, or any other standard form approved by the office and adopted by the commission for purposes of this paragraph. All billings for such services rendered by providers must, to the extent applicable, comply with the CMS 1500 form instructions, the American Medical Association CPT Editorial Panel, and the Healthcare Common Procedure Coding System (HCPCS); and must follow the Physicians’ Current Procedural Terminology (CPT), the HCPCS in effect for the year in which services are rendered, and the International Classification of Diseases (ICD) adopted by the United States Department of Health and Human Services in effect for the year in which services are rendered. All providers, other than hospitals, must include on the applicable claim form the professional license number of the provider in the line or space provided for “Signature of Physician or Supplier, Including Degrees or Credentials.” In determining compliance with applicable CPT and HCPCS coding, guidance shall be provided by the CPT or the HCPCS in effect for the year in which services were rendered, the Office of the Inspector General, Physicians Compliance Guidelines, and other authoritative treatises designated by rule by the Agency for Health Care Administration. A statement of medical services may not include charges for medical services of a person or entity that performed such services without possessing the valid licenses required to perform such services. For purposes of paragraph (4)(b), an insurer is not considered to have been furnished with notice of the amount of covered loss or medical bills due unless the statements or bills comply with this paragraph and are properly completed in their entirety as to all material provisions, with all relevant information being provided therein.
> (e)1. At the initial treatment or service provided, each physician, other licensed professional, clinic, or other medical institution providing medical services upon which a claim for personal injury protection benefits is based shall require an insured person, or his or her guardian, to execute a disclosure and acknowledgment form, which reflects at a minimum that:
> a. The insured, or his or her guardian, must countersign the form attesting to the fact that the services set forth therein were actually rendered;
> b. The insured, or his or her guardian, has both the right and affirmative duty to confirm that the services were actually rendered;
> c. The insured, or his or her guardian, was not solicited by any person to seek any services from the medical provider;
> d. The physician, other licensed professional, clinic, or other medical institution rendering services for which payment is being claimed explained the services to the insured or his or her guardian; and
> e. If the insured notifies the insurer in writing of a billing error, the insured may be entitled to a certain percentage of a reduction in the amounts paid by the insured’s motor vehicle insurer.
> 2. The physician, other licensed professional, clinic, or other medical institution rendering services for which payment is being claimed has the affirmative duty to explain the services rendered to the insured, or his or her guardian, so that the insured, or his or her guardian, countersigns the form with informed consent.
> 3. Countersignature by the insured, or his or her guardian, is not required for the reading of diagnostic tests or other services that are of such a nature that they are not required to be performed in the presence of the insured.
> 4. The licensed medical professional rendering treatment for which payment is being claimed must sign, by his or her own hand, the form complying with this paragraph.
> 5. The original completed disclosure and acknowledgment form shall be furnished to the insurer pursuant to paragraph (4)(b) and may not be electronically furnished.
> 6. The disclosure and acknowledgment form is not required for services billed by a provider for emergency services and care as defined in s. 395.002 rendered in a hospital emergency department, or for transport and treatment rendered by an ambulance provider licensed pursuant to part III of chapter 401.
> 7. The Financial Services Commission shall adopt, by rule, a standard disclosure and acknowledgment form to be used to fulfill the requirements of this paragraph.
> 8. As used in this paragraph, the term “countersign” or “countersignature” means a second or verifying signature, as on a previously signed document, and is not satisfied by the statement “signature on file” or any similar statement.
> 9. The requirements of this paragraph apply only with respect to the initial treatment or service of the insured by a provider. For subsequent treatments or service, the provider must maintain a patient log signed by the patient, in chronological order by date of service, which is consistent with the services being rendered to the patient as claimed. The requirement to maintain a patient log signed by the patient may be met by a hospital that maintains medical records as required by s. 395.3025 and applicable rules and makes such records available to the insurer upon request.
> (f) Upon written notification by any person, an insurer shall investigate any claim of improper billing by a physician or other medical provider. The insurer shall determine if the insured was properly billed for only those services and treatments that the insured actually received. If the insurer determines that the insured has been improperly billed, the insurer shall notify the insured, the person making the written notification, and the provider of its findings and reduce the amount of payment to the provider by the amount determined to be improperly billed. If a reduction is made due to a written notification by any person, the insurer shall pay to the person 20 percent of the amount of the reduction, up to $500. If the provider is arrested due to the improper billing, the insurer shall pay to the person 40 percent of the amount of the reduction, up to $500.
> (g) An insurer may not systematically downcode with the intent to deny reimbursement otherwise due. Such action constitutes a material misrepresentation under s. 626.9541(1)(i)2.
> (h) As provided in s. 400.9905, an entity excluded from the definition of a clinic shall be deemed a clinic and must be licensed under part X of chapter 400 in order to receive reimbursement under ss. 627.730-627.7405. However, this licensing requirement does not apply to:
> 1. An entity wholly owned by a physician licensed under chapter 458 or chapter 459, or by the physician and the spouse, parent, child, or sibling of the physician;
> 2. An entity wholly owned by a dentist licensed under chapter 466, or by the dentist and the spouse, parent, child, or sibling of the dentist;
> 3. An entity wholly owned by a chiropractic physician licensed under chapter 460, or by the chiropractic physician and the spouse, parent, child, or sibling of the chiropractic physician;
> 4. A hospital or ambulatory surgical center licensed under chapter 395;
> 5. An entity that wholly owns or is wholly owned, directly or indirectly, by a hospital or hospitals licensed under chapter 395;
> 6. An entity that is a clinical facility affiliated with an accredited medical school at which training is provided for medical students, residents, or fellows;
> 7. An entity that is certified under 42 C.F.R. part 485, subpart H; or
> 8. An entity that is owned by a publicly traded corporation, either directly or indirectly through its subsidiaries, that has $250 million or more in total annual sales of health care services provided by licensed health care practitioners if one or more of the persons responsible for the operations of the entity are health care practitioners who are licensed in this state and who are responsible for supervising the business activities of the entity and the entity’s compliance with state law for purposes of this section.
> (6) DISCOVERY OF FACTS ABOUT AN INJURED PERSON; DISPUTES.—
> (a) If a request is made by an insurer providing personal injury protection benefits under ss. 627.730-627.7405 against whom a claim has been made, an employer must furnish, in a form approved by the office, a sworn statement of the earnings, since the time of the bodily injury and for a reasonable period before the injury, of the person upon whose injury the claim is based.
> (b) Every physician, hospital, clinic, or other medical institution providing, before or after bodily injury upon which a claim for personal injury protection insurance benefits is based, any products, services, or accommodations in relation to that or any other injury, or in relation to a condition claimed to be connected with that or any other injury, shall, if requested by the insurer against whom the claim has been made, furnish a written report of the history, condition, treatment, dates, and costs of such treatment of the injured person and why the items identified by the insurer were reasonable in amount and medically necessary, together with a sworn statement that the treatment or services rendered were reasonable and necessary with respect to the bodily injury sustained and identifying which portion of the expenses for such treatment or services was incurred as a result of such bodily injury, and produce, and allow the inspection and copying of, his or her or its records regarding such history, condition, treatment, dates, and costs of treatment if this does not limit the introduction of evidence at trial. Such sworn statement must read as follows: “Under penalty of perjury, I declare that I have read the foregoing, and the facts alleged are true, to the best of my knowledge and belief.” A cause of action for violation of the physician-patient privilege or invasion of the right of privacy may not be brought against any physician, hospital, clinic, or other medical institution complying with this section. The person requesting such records and such sworn statement shall pay all reasonable costs connected therewith. If an insurer makes a written request for documentation or information under this paragraph within 30 days after having received notice of the amount of a covered loss under paragraph (4)(a), the amount or the partial amount that is the subject of the insurer’s inquiry is overdue if the insurer does not pay in accordance with paragraph (4)(b) or within 10 days after the insurer’s receipt of the requested documentation or information, whichever occurs later. As used in this paragraph, the term “receipt” includes, but is not limited to, inspection and copying pursuant to this paragraph. An insurer that requests documentation or information pertaining to reasonableness of charges or medical necessity under this paragraph without a reasonable basis for such requests as a general business practice is engaging in an unfair trade practice under the insurance code.
> (c) In the event of a dispute regarding an insurer’s right to discovery of facts under this section, the insurer may petition a court of competent jurisdiction to enter an order permitting such discovery. The order may be made only on motion for good cause shown and upon notice to all persons having an interest, and must specify the time, place, manner, conditions, and scope of the discovery. In order to protect against annoyance, embarrassment, or oppression, as justice requires, the court may enter an order refusing discovery or specifying conditions of discovery and may order payments of costs and expenses of the proceeding, including reasonable fees for the appearance of attorneys at the proceedings, as justice requires.
> (d) The injured person shall be furnished, upon request, a copy of all information obtained by the insurer under this section, and pay a reasonable charge, if required by the insurer.
> (e) Notice to an insurer of the existence of a claim may not be unreasonably withheld by an insured.
> (f) In a dispute between the insured and the insurer, or between an assignee of the insured’s rights and the insurer, upon request, the insurer must notify the insured or the assignee that the policy limits under this section have been reached within 15 days after the limits have been reached.
> (g) An insured seeking benefits under ss. 627.730–627.7405, including an omnibus insured, must comply with the terms of the policy, which include, but are not limited to, submitting to an examination under oath. The scope of questioning during the examination under oath is limited to relevant information or information that could reasonably be expected to lead to relevant information. Compliance with this paragraph is a condition precedent to receiving benefits. An insurer that, as a general business practice as determined by the office, requests an examination under oath of an insured or an omnibus insured without a reasonable basis is subject to s. 626.9541.
> (7) MENTAL AND PHYSICAL EXAMINATION OF INJURED PERSON; REPORTS.—
> (a) Whenever the mental or physical condition of an injured person covered by personal injury protection is material to any claim that has been or may be made for past or future personal injury protection insurance benefits, such person shall, upon the request of an insurer, submit to mental or physical examination by a physician or physicians. The costs of any examinations requested by an insurer shall be borne entirely by the insurer. Such examination shall be conducted within the municipality where the insured is receiving treatment, or in a location reasonably accessible to the insured, which, for purposes of this paragraph, means any location within the municipality in which the insured resides, or any location within 10 miles by road of the insured’s residence, provided such location is within the county in which the insured resides. If the examination is to be conducted in a location reasonably accessible to the insured, and if there is no qualified physician to conduct the examination in a location reasonably accessible to the insured, such examination shall be conducted in an area of the closest proximity to the insured’s residence. Personal protection insurers are authorized to include reasonable provisions in personal injury protection insurance policies for mental and physical examination of those claiming personal injury protection insurance benefits. An insurer may not withdraw payment of a treating physician without the consent of the injured person covered by the personal injury protection, unless the insurer first obtains a valid report by a Florida physician licensed under the same chapter as the treating physician whose treatment authorization is sought to be withdrawn, stating that treatment was not reasonable, related, or necessary. A valid report is one that is prepared and signed by the physician examining the injured person or reviewing the treatment records of the injured person and is factually supported by the examination and treatment records if reviewed and that has not been modified by anyone other than the physician. The physician preparing the report must be in active practice, unless the physician is physically disabled. Active practice means that during the 3 years immediately preceding the date of the physical examination or review of the treatment records the physician must have devoted professional time to the active clinical practice of evaluation, diagnosis, or treatment of medical conditions or to the instruction of students in an accredited health professional school or accredited residency program or a clinical research program that is affiliated with an accredited health professional school or teaching hospital or accredited residency program. The physician preparing a report at the request of an insurer and physicians rendering expert opinions on behalf of persons claiming medical benefits for personal injury protection, or on behalf of an insured through an attorney or another entity, shall maintain, for at least 3 years, copies of all examination reports as medical records and shall maintain, for at least 3 years, records of all payments for the examinations and reports. Neither an insurer nor any person acting at the direction of or on behalf of an insurer may materially change an opinion in a report prepared under this paragraph or direct the physician preparing the report to change such opinion. The denial of a payment as the result of such a changed opinion constitutes a material misrepresentation under s. 626.9541(1)(i)2.; however, this provision does not preclude the insurer from calling to the attention of the physician errors of fact in the report based upon information in the claim file.
> (b) If requested by the person examined, a party causing an examination to be made shall deliver to him or her a copy of every written report concerning the examination rendered by an examining physician, at least one of which reports must set out the examining physician’s findings and conclusions in detail. After such request and delivery, the party causing the examination to be made is entitled, upon request, to receive from the person examined every written report available to him or her or his or her representative concerning any examination, previously or thereafter made, of the same mental or physical condition. By requesting and obtaining a report of the examination so ordered, or by taking the deposition of the examiner, the person examined waives any privilege he or she may have, in relation to the claim for benefits, regarding the testimony of every other person who has examined, or may thereafter examine, him or her in respect to the same mental or physical condition. If a person unreasonably refuses to submit to or fails to appear at an examination, the personal injury protection carrier is no longer liable for subsequent personal injury protection benefits. An insured’s refusal to submit to or failure to appear at two examinations raises a rebuttable presumption that the insured’s refusal or failure was unreasonable.
> (8) APPLICABILITY OF PROVISION REGULATING ATTORNEY FEES.—With respect to any dispute under the provisions of ss. 627.730-627.7405 between the insured and the insurer, or between an assignee of an insured’s rights and the insurer, the provisions of s. 768.79 apply, except as provided in subsections (10) and (15), and except that any attorney fees recovered must:
> (a) Comply with prevailing professional standards;
> (b) Not overstate or inflate the number of hours reasonably necessary for a case of comparable skill or complexity; and
> (c) Represent legal services that are reasonable and necessary to achieve the result obtained.
> Upon request by either party, a judge must make written findings, substantiated by evidence presented at trial or any hearings associated therewith, that any award of attorney fees complies with this subsection. Attorney fees recovered under ss. 627.730-627.7405 must be calculated without regard to a contingency risk multiplier.
> (9) PREFERRED PROVIDERS.—An insurer may negotiate and contract with preferred providers for the benefits described in this section, which include health care providers licensed under chapter 458, chapter 459, chapter 460, chapter 461, or chapter 463. The insurer may provide an option to an insured to use a preferred provider at the time of purchasing the policy for personal injury protection benefits, if the requirements of this subsection are met. If the insured elects to use a provider who is not a preferred provider, whether the insured purchased a preferred provider policy or a nonpreferred provider policy, the medical benefits provided by the insurer shall be as required by this section. If the insured elects to use a provider who is a preferred provider, the insurer may pay medical benefits in excess of the benefits required by this section and may waive or lower the amount of any deductible that applies to such medical benefits. If the insurer offers a preferred provider policy to a policyholder or applicant, it must also offer a nonpreferred provider policy. The insurer shall provide each insured with a current roster of preferred providers in the county in which the insured resides at the time of purchase of such policy, and shall make such list available for public inspection during regular business hours at the insurer’s principal office within the state.
> (10) DEMAND LETTER.—
> (a) As a condition precedent to filing any action for benefits under this section, written notice of an intent to initiate litigation must be provided to the insurer. Such notice may not be sent until the claim is overdue, including any additional time the insurer has to pay the claim pursuant to paragraph (4)(b).
> (b) The notice must state that it is a “demand letter under s. 627.736” and state with specificity:
> 1. The name of the insured upon which such benefits are being sought, including a copy of the assignment giving rights to the claimant if the claimant is not the insured.
> 2. The claim number or policy number upon which such claim was originally submitted to the insurer.
> 3. To the extent applicable, the name of any medical provider who rendered to an insured the treatment, services, accommodations, or supplies that form the basis of such claim; and an itemized statement specifying each exact amount, the date of treatment, service, or accommodation, and the type of benefit claimed to be due. A completed form satisfying the requirements of paragraph (5)(d) or the lost-wage statement previously submitted may be used as the itemized statement. To the extent that the demand involves an insurer’s withdrawal of payment under paragraph (7)(a) for future treatment not yet rendered, the claimant shall attach a copy of the insurer’s notice withdrawing such payment and an itemized statement of the type, frequency, and duration of future treatment claimed to be reasonable and medically necessary.
> (c) Each notice required by this subsection must be delivered to the insurer by United States certified or registered mail, return receipt requested. Such postal costs shall be reimbursed by the insurer if requested by the claimant in the notice, when the insurer pays the claim. Such notice must be sent to the person and address specified by the insurer for the purposes of receiving notices under this subsection. Each licensed insurer, whether domestic, foreign, or alien, shall file with the office the name and address of the designated person to whom notices must be sent which the office shall make available on its Internet website. The name and address on file with the office pursuant to s. 624.422 is deemed the authorized representative to accept notice pursuant to this subsection if no other designation has been made.
> (d) If, within 30 days after receipt of notice by the insurer, the overdue claim specified in the notice is paid by the insurer together with applicable interest and a penalty of 10 percent of the overdue amount paid by the insurer, subject to a maximum penalty of $250, no action may be brought against the insurer. If the demand involves an insurer’s withdrawal of payment under paragraph (7)(a) for future treatment not yet rendered, no action may be brought against the insurer if, within 30 days after its receipt of the notice, the insurer mails to the person filing the notice a written statement of the insurer’s agreement to pay for such treatment in accordance with the notice and to pay a penalty of 10 percent, subject to a maximum penalty of $250, when it pays for such future treatment in accordance with the requirements of this section. To the extent the insurer determines not to pay any amount demanded, the penalty is not payable in any subsequent action. For purposes of this subsection, payment or the insurer’s agreement shall be treated as being made on the date a draft or other valid instrument that is equivalent to payment, or the insurer’s written statement of agreement, is placed in the United States mail in a properly addressed, postpaid envelope, or if not so posted, on the date of delivery. The insurer is not obligated to pay any attorney fees if the insurer pays the claim or mails its agreement to pay for future treatment within the time prescribed by this subsection.
> (e) The applicable statute of limitation for an action under this section shall be tolled for 30 business days by the mailing of the notice required by this subsection.
> (11) FAILURE TO PAY VALID CLAIMS; UNFAIR OR DECEPTIVE PRACTICE.—
> (a) An insurer is engaging in a prohibited unfair or deceptive practice that is subject to the penalties provided in s. 626.9521 and the office has the powers and duties specified in ss. 626.9561-626.9601 if the insurer, with such frequency so as to indicate a general business practice:
> 1. Fails to pay valid claims for personal injury protection; or
> 2. Fails to pay valid claims until receipt of the notice required by subsection (10).
> (b) Notwithstanding s. 501.212, the Department of Legal Affairs may investigate and initiate actions for a violation of this subsection, including, but not limited to, the powers and duties specified in part II of chapter 501.
> (12) CIVIL ACTION FOR INSURANCE FRAUD.—An insurer shall have a cause of action against any person convicted of, or who, regardless of adjudication of guilt, pleads guilty or nolo contendere to insurance fraud under s. 817.234, patient brokering under s. 817.505, or kickbacks under s. 456.054, associated with a claim for personal injury protection benefits in accordance with this section. An insurer prevailing in an action brought under this subsection may recover compensatory, consequential, and punitive damages subject to the requirements and limitations of part II of chapter 768, and attorney’s fees and costs incurred in litigating a cause of action against any person convicted of, or who, regardless of adjudication of guilt, pleads guilty or nolo contendere to insurance fraud under s. 817.234, patient brokering under s. 817.505, or kickbacks under s. 456.054, associated with a claim for personal injury protection benefits in accordance with this section.
> (13) MINIMUM BENEFIT COVERAGE.—If the Financial Services Commission determines that the cost savings under personal injury protection insurance benefits paid by insurers have been realized due to the provisions of this act, prior legislative reforms, or other factors, the commission may increase the minimum $10,000 benefit coverage requirement. In establishing the amount of such increase, the commission must determine that the additional premium for such coverage is approximately equal to the premium cost savings that have been realized for the personal injury protection coverage with limits of $10,000.
> (14) FRAUD ADVISORY NOTICE.—Upon receiving notice of a claim under this section, an insurer shall provide a notice to the insured or to a person for whom a claim for reimbursement for diagnosis or treatment of injuries has been filed, advising that:
> (a) Pursuant to s. 626.9892, the Department of Financial Services may pay rewards of up to $25,000 to persons providing information leading to the arrest and conviction of persons committing crimes investigated by the Division of Criminal Investigations arising from violations of s. 440.105, s. 624.15, s. 626.9541, s. 626.989, or s. 817.234.
> (b) Solicitation of a person injured in a motor vehicle crash for purposes of filing personal injury protection or tort claims could be a violation of s. 817.234, s. 817.505, or the rules regulating The Florida Bar and should be immediately reported to the Division of Criminal Investigations if such conduct has taken place.
> (15) ALL CLAIMS BROUGHT IN A SINGLE ACTION.—In any civil action to recover personal injury protection benefits brought by a claimant pursuant to this section against an insurer, all claims related to the same health care provider for the same injured person shall be brought in one action, unless good cause is shown why such claims should be brought separately. If the court determines that a civil action is filed for a claim that should have been brought in a prior civil action, the court may not award attorney’s fees to the claimant.
> (16) SECURE ELECTRONIC DATA TRANSFER.—A notice, documentation, transmission, or communication of any kind required or authorized under ss. 627.730-627.7405 may be transmitted electronically if it is transmitted by secure electronic data transfer that is consistent with state and federal privacy and security laws.
> (17) NONREIMBURSABLE CLAIMS.—Claims generated as a result of activities that are unlawful pursuant to s. 817.505 are not reimbursable under the Florida Motor Vehicle No-Fault Law.

READ-WHOLE: F.S. 627.727
https://www.flsenate.gov/Laws/Statutes/2025/627.727

Motor vehicle insurance; uninsured and underinsured vehicle coverage. Recorded whole from the section body, 20 logical passages, one blockquote line each.

WHY. Uninsured and underinsured motorist coverage, which is the recovery route in a large share of Florida crashes because the at-fault driver carries no bodily injury liability coverage. Florida does not require BI coverage of most drivers, so UM is often the only real source.

Fetched 2026-08-26 with curl from the Florida Senate's 2025 statutes, for the personal injury practice area. Method: the page's SectionBody div was cut at the History div and emitted programmatically rather than retyped. NOT independently re-verified against a second publisher: the Florida Senate is the publisher this project uses for the Florida Statutes, and no second path was run for this batch, which is stated rather than implied.

> (1) No motor vehicle liability insurance policy which provides bodily injury liability coverage shall be delivered or issued for delivery in this state with respect to any specifically insured or identified motor vehicle registered or principally garaged in this state unless uninsured motor vehicle coverage is provided therein or supplemental thereto for the protection of persons insured thereunder who are legally entitled to recover damages from owners or operators of uninsured motor vehicles because of bodily injury, sickness, or disease, including death, resulting therefrom. However, the coverage required under this section is not applicable when, or to the extent that, an insured named in the policy makes a written rejection of the coverage on behalf of all insureds under the policy. When a motor vehicle is leased for a period of 1 year or longer and the lessor of such vehicle, by the terms of the lease contract, provides liability coverage on the leased vehicle, the lessee of such vehicle shall have the sole privilege to reject uninsured motorist coverage or to select lower limits than the bodily injury liability limits, regardless of whether the lessor is qualified as a self-insurer pursuant to s. 324.171. Unless an insured, or lessee having the privilege of rejecting uninsured motorist coverage, requests such coverage or requests higher uninsured motorist limits in writing, the coverage or such higher uninsured motorist limits need not be provided in or supplemental to any other policy which renews, extends, changes, supersedes, or replaces an existing policy with the same bodily injury liability limits when an insured or lessee had rejected the coverage. When an insured or lessee has initially selected limits of uninsured motorist coverage lower than her or his bodily injury liability limits, higher limits of uninsured motorist coverage need not be provided in or supplemental to any other policy which renews, extends, changes, supersedes, or replaces an existing policy with the same bodily injury liability limits unless an insured requests higher uninsured motorist coverage in writing. The rejection or selection of lower limits shall be made on a form approved by the office. The form shall fully advise the applicant of the nature of the coverage and shall state that the coverage is equal to bodily injury liability limits unless lower limits are requested or the coverage is rejected. The heading of the form shall be in 12-point bold type and shall state: “You are electing not to purchase certain valuable coverage which protects you and your family or you are purchasing uninsured motorist limits less than your bodily injury liability limits when you sign this form. Please read carefully.” If this form is signed by a named insured, it will be conclusively presumed that there was an informed, knowing rejection of coverage or election of lower limits on behalf of all insureds. The insurer shall notify the named insured at least annually of her or his options as to the coverage required by this section. Such notice shall be part of, and attached to, the notice of premium, shall provide for a means to allow the insured to request such coverage, and shall be given in a manner approved by the office. Receipt of this notice does not constitute an affirmative waiver of the insured’s right to uninsured motorist coverage where the insured has not signed a selection or rejection form. The coverage described under this section shall be over and above, but shall not duplicate, the benefits available to an insured under any workers’ compensation law, personal injury protection benefits, disability benefits law, or similar law; under any automobile medical expense coverage; under any motor vehicle liability insurance coverage; or from the owner or operator of the uninsured motor vehicle or any other person or organization jointly or severally liable together with such owner or operator for the accident; and such coverage shall cover the difference, if any, between the sum of such benefits and the damages sustained, up to the maximum amount of such coverage provided under this section. The amount of coverage available under this section shall not be reduced by a setoff against any coverage, including liability insurance. Such coverage shall not inure directly or indirectly to the benefit of any workers’ compensation or disability benefits carrier or any person or organization qualifying as a self-insurer under any workers’ compensation or disability benefits law or similar law.
> (2) The limits of uninsured motorist coverage shall be not less than the limits of bodily injury liability insurance purchased by the named insured, or such lower limit complying with the rating plan of the company as may be selected by the named insured. The limits set forth in this subsection, and the provisions of subsection (1) which require uninsured motorist coverage to be provided in every motor vehicle policy delivered or issued for delivery in this state, do not apply to any policy which does not provide primary liability insurance that includes coverage for liabilities arising from the maintenance, operation, or use of a specifically insured motor vehicle. However, an insurer issuing such a policy shall make available as a part of the application for such policy, and at the written request of an insured, limits up to the bodily injury liability limits contained in such policy or $1 million, whichever is less.
> (3) For the purpose of this coverage, the term “uninsured motor vehicle” shall, subject to the terms and conditions of such coverage, be deemed to include an insured motor vehicle when the liability insurer thereof:
> (a) Is unable to make payment with respect to the legal liability of its insured within the limits specified therein because of insolvency;
> (b) Has provided limits of bodily injury liability for its insured which are less than the total damages sustained by the person legally entitled to recover damages; or
> (c) Excludes liability coverage to a nonfamily member whose operation of an insured vehicle results in injuries to the named insured or to a relative of the named insured who is a member of the named insured’s household.
> (4) An insurer’s insolvency protection shall be applicable only to accidents occurring during a policy period in which its insured’s uninsured motorist coverage is in effect when the liability insurer of the tortfeasor becomes insolvent within 4 years after such an accident. Nothing herein contained shall be construed to prevent any insurer from affording insolvency protection under terms and conditions more favorable to its insureds than is provided hereunder.
> (5) Any person having a claim against an insolvent insurer as defined in s. 631.54 under this section shall present such claim for payment to the Florida Insurance Guaranty Association only. In the event of a payment to a person in settlement of a claim arising under this section, the association is not subrogated or entitled to recovery against the claimant’s insurer. The association, however, has the rights of recovery as set forth in chapter 631 in the proceeds recoverable from the assets of the insolvent insurer.
> (6)(a) If an injured person or, in the case of death, the personal representative agrees to settle a claim with a liability insurer and its insured, and such settlement would not fully satisfy the claim for personal injuries or wrongful death so as to create an underinsured motorist claim, then written notice of the proposed settlement must be submitted by certified or registered mail to all underinsured motorist insurers that provide coverage. The underinsured motorist insurer then has a period of 30 days after receipt thereof to consider authorization of the settlement or retention of subrogation rights. If an underinsured motorist insurer authorizes settlement or fails to respond as required by paragraph (b) to the settlement request within the 30-day period, the injured party may proceed to execute a full release in favor of the underinsured motorist’s liability insurer and its insured and finalize the proposed settlement without prejudice to any underinsured motorist claim.
> (b) If an underinsured motorist insurer chooses to preserve its subrogation rights by refusing permission to settle, the underinsured motorist insurer must, within 30 days after receipt of the notice of the proposed settlement, pay to the injured party the amount of the written offer from the underinsured motorist’s liability insurer. Thereafter, upon final resolution of the underinsured motorist claim, the underinsured motorist insurer is entitled to seek subrogation against the underinsured motorist and the liability insurer for the amounts paid to the injured party.
> (c) The underinsured motorist insurer is entitled to a credit against total damages in the amount of the limits of the underinsured motorist’s liability policy in all cases to which this subsection applies, even if the settlement with the underinsured motorist under paragraph (a) or the payment by the underinsured motorist insurer under paragraph (b) is for less than the underinsured motorist’s full liability policy limits. The term “total damages” as used in this section means the full amount of damages determined to have been sustained by the injured party, regardless of the amount of underinsured motorist coverage. Nothing in this subsection, including any payment or credit under this subsection, reduces or affects the total amount of underinsured motorist coverage available to the injured party.
> (7) The legal liability of an uninsured motorist coverage insurer does not include damages in tort for pain, suffering, mental anguish, and inconvenience unless the injury or disease is described in one or more of paragraphs (a)-(d) of s. 627.737(2).
> (8) Insurers may offer policies of uninsured motorist coverage containing policy provisions, in language approved by the office, establishing that if the insured accepts this offer:
> (a) The coverage provided as to two or more motor vehicles shall not be added together to determine the limit of insurance coverage available to an injured person for any one accident, except as provided in paragraph (c).
> (b) If at the time of the accident the injured person is occupying a motor vehicle, the uninsured motorist coverage available to her or him is the coverage available as to that motor vehicle.
> (c) If the injured person is occupying a motor vehicle which is not owned by her or him or by a family member residing with her or him, the injured person is entitled to the highest limits of uninsured motorist coverage afforded for any one vehicle as to which she or he is a named insured or insured family member. Such coverage shall be excess over the coverage on the vehicle the injured person is occupying.
> (d) The uninsured motorist coverage provided by the policy does not apply to the named insured or family members residing in her or his household who are injured while occupying any vehicle owned by such insureds for which uninsured motorist coverage was not purchased.
> (e) If, at the time of the accident the injured person is not occupying a motor vehicle, she or he is entitled to select any one limit of uninsured motorist coverage for any one vehicle afforded by a policy under which she or he is insured as a named insured or as an insured resident of the named insured’s household.
> In connection with the offer authorized by this subsection, insurers shall inform the named insured, applicant, or lessee, on a form approved by the office, of the limitations imposed under this subsection and that such coverage is an alternative to coverage without such limitations. If this form is signed by a named insured, applicant, or lessee, it shall be conclusively presumed that there was an informed, knowing acceptance of such limitations on behalf of all insureds. When the named insured, applicant, or lessee has initially accepted such limitations, such acceptance shall apply to any policy which renews, extends, changes, supersedes, or replaces an existing policy unless the named insured requests deletion of such limitations and pays the appropriate premium for such coverage. Any insurer who provides coverage which includes the limitations provided in this subsection shall file revised premium rates with the office for such uninsured motorist coverage to take effect prior to initially providing such coverage. The revised rates shall reflect the anticipated reduction in loss costs attributable to such limitations but shall in any event reflect a reduction in the uninsured motorist coverage premium of at least 20 percent for policies with such limitations. Such filing shall not increase the rates for coverage which does not contain the limitations authorized by this subsection, and such rates shall remain in effect until the insurer demonstrates the need for a change in uninsured motorist rates pursuant to s. 627.0651.
> (9) The damages recoverable from an uninsured motorist carrier in an action brought under s. 624.155 shall include the total amount of the claimant’s damages, including the amount in excess of the policy limits, any interest on unpaid benefits, reasonable attorney’s fees and costs, and any damages caused by a violation of a law of this state. The total amount of the claimant’s damages is recoverable whether caused by an insurer or by a third-party tortfeasor.

READ-WHOLE: F.S. 316.027
https://www.flsenate.gov/Laws/Statutes/2025/316.027

Crash involving death or personal injuries. Recorded whole from the section body, 28 logical passages, one blockquote line each.

WHY. Leaving the scene. Sits at the intersection of this firm's two practices: the same collision produces a criminal charge under this section and a civil claim, and the criminal side of the site already reaches chapter 316.

Fetched 2026-08-26 with curl from the Florida Senate's 2025 statutes, for the personal injury practice area. Method: the page's SectionBody div was cut at the History div and emitted programmatically rather than retyped. NOT independently re-verified against a second publisher: the Florida Senate is the publisher this project uses for the Florida Statutes, and no second path was run for this batch, which is stated rather than implied.

> (1) As used in this section, the term:
> (a) “Serious bodily injury” means an injury to a person, including the driver, which consists of a physical condition that creates a substantial risk of death, serious personal disfigurement, or protracted loss or impairment of the function of a bodily member or organ.
> (b) “Vulnerable road user” means:
> 1. A pedestrian, including a person actually engaged in work upon a highway, or in work upon utility facilities along a highway, or engaged in the provision of emergency services within the right-of-way;
> 2. A person operating a bicycle, an electric bicycle, a motorcycle, a scooter, or a moped lawfully on the roadway;
> 3. A person riding an animal; or
> 4. A person lawfully operating on a public right-of-way, crosswalk, or shoulder of the roadway:
> a. A farm tractor or similar vehicle designed primarily for farm use;
> b. A skateboard, roller skates, or in-line skates;
> c. A horse-drawn carriage;
> d. An electric personal assistive mobility device; or
> e. A wheelchair.
> (2)(a) The driver of a vehicle involved in a crash occurring on public or private property which results in injury to a person other than serious bodily injury shall immediately stop the vehicle at the scene of the crash, or as close thereto as possible, and shall remain at the scene of the crash until he or she has fulfilled the requirements of s. 316.062. A person who willfully violates this paragraph commits a felony of the third degree, punishable as provided in s. 775.082, s. 775.083, or s. 775.084.
> (b) The driver of a vehicle involved in a crash occurring on public or private property which results in serious bodily injury to a person shall immediately stop the vehicle at the scene of the crash, or as close thereto as possible, and shall remain at the scene of the crash until he or she has fulfilled the requirements of s. 316.062. A person who willfully violates this paragraph commits a felony of the second degree, punishable as provided in s. 775.082, s. 775.083, or s. 775.084.
> (c) The driver of a vehicle involved in a crash occurring on public or private property which results in the death of a person shall immediately stop the vehicle at the scene of the crash, or as close thereto as possible, and shall remain at the scene of the crash until he or she has fulfilled the requirements of s. 316.062. A person who is arrested for a violation of this paragraph and who has previously been convicted of a violation of this section, s. 316.061, s. 316.191, or s. 316.193, or a felony violation of s. 322.34, shall be held in custody until brought before the court for admittance to bail in accordance with chapter 903. A person who willfully violates this paragraph commits a felony of the first degree, punishable as provided in s. 775.082, s. 775.083, or s. 775.084, and shall be sentenced to a mandatory minimum term of imprisonment of 4 years. A person who willfully commits such a violation while driving under the influence as set forth in s. 316.193(1) shall be sentenced to a mandatory minimum term of imprisonment of 4 years.
> (d) Notwithstanding s. 775.089(1)(a), if the driver of a vehicle violates paragraph (a), paragraph (b), or paragraph (c), the court shall order the driver to make restitution to the victim for any damage or loss unless the court finds clear and compelling reasons not to order the restitution. Restitution may be monetary or nonmonetary restitution. The court shall make the payment of restitution a condition of probation in accordance with s. 948.03. An order requiring the defendant to make restitution to a victim does not remove or diminish the requirement that the court order payment to the Crimes Compensation Trust Fund under chapter 960. Payment of an award by the Crimes Compensation Trust Fund creates an order of restitution to the Crimes Compensation Trust Fund unless specifically waived in accordance with s. 775.089(1)(b).
> (e) A driver who violates paragraph (a), paragraph (b), or paragraph (c) shall have his or her driver license revoked for at least 3 years as provided in s. 322.28(4).
> 1. A person convicted of violating paragraph (a), paragraph (b), or paragraph (c) shall, before his or her driving privilege may be reinstated, present to the department proof of completion of a victim’s impact panel session in a judicial circuit if such a panel exists, or if such a panel does not exist, a department-approved driver improvement course relating to the rights of vulnerable road users relative to vehicles on the roadway as provided in s. 322.0261(2).
> 2. The department may reinstate an offender’s driving privilege after he or she satisfies the 3-year revocation period as provided in s. 322.28(4) and successfully completes either a victim’s impact panel session or a department-approved driver improvement course relating to the rights of vulnerable road users relative to vehicles on the roadway as provided in s. 322.0261(2).
> 3. For purposes of this paragraph, an offender’s driving privilege may be reinstated only after the department verifies that the offender participated in and successfully completed a victim’s impact panel session or a department-approved driver improvement course.
> (f) For purposes of sentencing under chapter 921 and determining incentive gain-time eligibility under chapter 944, an offense listed in this subsection is ranked one level above the ranking specified in s. 921.0022 or s. 921.0023 for the offense committed if the victim of the offense was a vulnerable road user.
> (g) The defendant may move to depart from the mandatory minimum term of imprisonment prescribed in paragraph (c) unless the violation was committed while the defendant was driving under the influence. The state may object to this departure. The court may grant the motion only if it finds that a factor, consideration, or circumstance clearly demonstrates that imposing a mandatory minimum term of imprisonment would constitute or result in an injustice. The court shall state in open court the basis for granting the motion.
> (3) The stops shall be made without unnecessarily obstructing traffic, and, if a damaged vehicle is obstructing traffic, the driver of the vehicle shall make every reasonable effort to move the vehicle or have it moved so as not to obstruct the regular flow of traffic. A person who fails to comply with this subsection shall be cited for a nonmoving violation, punishable as provided in chapter 318.
> (4)(a) In addition to any other civil, criminal, or administrative penalty imposed, a person whose commission of a noncriminal traffic infraction or a violation of this chapter or s. 1006.66 causes or results in the death of another person may be required by the court to serve 120 community service hours in a trauma center or hospital that regularly receives victims of vehicle accidents, under the supervision of a registered nurse, an emergency room physician, or an emergency medical technician pursuant to a voluntary community service program operated by the trauma center or hospital.
> (b) Notwithstanding paragraph (a), in addition to any other civil, criminal, or administrative penalty imposed, a person whose commission of a violation of s. 316.172(1)(a) or (b) causes or results in serious bodily injury to or death of another person shall be required by the court to:
> 1. Serve 120 community service hours in a trauma center or hospital that regularly receives victims of vehicle accidents, under the supervision of a registered nurse, an emergency room physician, or an emergency medical technician pursuant to a voluntary community service program operated by the trauma center or hospital.
> 2. Participate in a victim’s impact panel session in a judicial circuit if such a panel exists, or if such a panel does not exist, attend a department-approved driver improvement course relating to the rights of vulnerable road users relative to vehicles on the roadway as provided in s. 322.0261(2).
> (5) This section does not apply to crashes occurring during a motorsports event, as defined in s. 549.10(1), or at a closed-course motorsport facility, as defined in s. 549.09(1).

READ-WHOLE: F.S. 768.19
https://www.flsenate.gov/Laws/Statutes/2025/768.19

Wrongful death; right of action. Recorded whole from the section body, 1 logical passages, one blockquote line each.

WHY. The right of action for wrongful death.

Fetched 2026-08-26 with curl from the Florida Senate's 2025 statutes, for the personal injury practice area. Method: the page's SectionBody div was cut at the History div and emitted programmatically rather than retyped. NOT independently re-verified against a second publisher: the Florida Senate is the publisher this project uses for the Florida Statutes, and no second path was run for this batch, which is stated rather than implied.

> When the death of a person is caused by the wrongful act, negligence, default, or breach of contract or warranty of any person, including those occurring on navigable waters, and the event would have entitled the person injured to maintain an action and recover damages if death had not ensued, the person or watercraft that would have been liable in damages if death had not ensued shall be liable for damages as specified in this act notwithstanding the death of the person injured, although death was caused under circumstances constituting a felony.

READ-WHOLE: F.S. 768.21
https://www.flsenate.gov/Laws/Statutes/2025/768.21

Wrongful death; damages. Recorded whole from the section body, 14 logical passages, one blockquote line each.

WHY. Who may recover what in a wrongful death action, by class of survivor. The damages categories a page may describe.

Fetched 2026-08-26 with curl from the Florida Senate's 2025 statutes, for the personal injury practice area. Method: the page's SectionBody div was cut at the History div and emitted programmatically rather than retyped. NOT independently re-verified against a second publisher: the Florida Senate is the publisher this project uses for the Florida Statutes, and no second path was run for this batch, which is stated rather than implied.

> All potential beneficiaries of a recovery for wrongful death, including the decedent’s estate, shall be identified in the complaint, and their relationships to the decedent shall be alleged. Damages may be awarded as follows:
> (1) Each survivor may recover the value of lost support and services from the date of the decedent’s injury to her or his death, with interest, and future loss of support and services from the date of death and reduced to present value. In evaluating loss of support and services, the survivor’s relationship to the decedent, the amount of the decedent’s probable net income available for distribution to the particular survivor, and the replacement value of the decedent’s services to the survivor may be considered. In computing the duration of future losses, the joint life expectancies of the survivor and the decedent and the period of minority, in the case of healthy minor children, may be considered.
> (2) The surviving spouse may also recover for loss of the decedent’s companionship and protection and for mental pain and suffering from the date of injury.
> (3) Minor children of the decedent, and all children of the decedent if there is no surviving spouse, may also recover for lost parental companionship, instruction, and guidance and for mental pain and suffering from the date of injury. For the purposes of this subsection, if both spouses die within 30 days of one another as a result of the same wrongful act or series of acts arising out of the same incident, each spouse is considered to have been predeceased by the other.
> (4) Each parent of a deceased minor child may also recover for mental pain and suffering from the date of injury. Each parent of an adult child may also recover for mental pain and suffering if there are no other survivors.
> (5) Medical or funeral expenses due to the decedent’s injury or death may be recovered by a survivor who has paid them.
> (6) The decedent’s personal representative may recover for the decedent’s estate the following:
> (a) Loss of earnings of the deceased from the date of injury to the date of death, less lost support of survivors excluding contributions in kind, with interest. Loss of the prospective net accumulations of an estate, which might reasonably have been expected but for the wrongful death, reduced to present money value, may also be recovered:
> 1. If the decedent’s survivors include a surviving spouse or lineal descendants; or
> 2. If the decedent is not a minor child as defined in s. 768.18(2), there are no lost support and services recoverable under subsection (1), and there is a surviving parent.
> (b) Medical or funeral expenses due to the decedent’s injury or death that have become a charge against her or his estate or that were paid by or on behalf of decedent, excluding amounts recoverable under subsection (5).
> Evidence of remarriage of the decedent’s spouse is admissible.
> (7) All awards for the decedent’s estate are subject to the claims of creditors who have complied with the requirements of probate law concerning claims.
> (8) The damages specified in subsection (3) shall not be recoverable by adult children and the damages specified in subsection (4) shall not be recoverable by parents of an adult child with respect to claims for medical negligence as defined by s. 766.106(1).

READ-WHOLE: F.S. 768.0427
https://www.flsenate.gov/Laws/Statutes/2025/768.0427

Evidence of medical damages. Recorded whole from the section body, 43 logical passages, one blockquote line each.

WHY. How medical damages may be proven, a 2023 addition whose entire History is ss. 6, 27, ch. 2023-15. It governs what a claimant may put in front of a jury as the value of past and future medical treatment, which is the arithmetic behind any what-is-my-case-worth question.

Fetched 2026-08-26 with curl from the Florida Senate's 2025 statutes, for the personal injury practice area. Method: the page's SectionBody div was cut at the History div and emitted programmatically rather than retyped. NOT independently re-verified against a second publisher: the Florida Senate is the publisher this project uses for the Florida Statutes, and no second path was run for this batch, which is stated rather than implied.

> (1) DEFINITIONS.—As used in this section, the term:
> (a) “Factoring company” means a person who purchases a health care provider’s accounts receivable at a discount below the invoice value of such accounts.
> (b) “Health care coverage” means any third-party health care or disability services financing arrangement, including, but not limited to, arrangements with entities certified or authorized under federal law or under the Florida Insurance Code; state or federal health care benefit programs; workers’ compensation; and personal injury protection.
> (c) “Health care provider” means any of the following professionals and entities, and professionals and entities similarly licensed in another jurisdiction:
> 1. A provider as defined in s. 408.803.
> 2. A clinical laboratory providing services in this state or services to health care providers in this state, if the clinical laboratory is certified by the Centers for Medicare and Medicaid Services under the federal Clinical Laboratory Improvement Amendments and the federal rules adopted thereunder.
> 3. A federally qualified health center as defined in 42 U.S.C. s. 1396d(l)(2)(B), as that definition existed on March 24, 2023.
> 4. A health care practitioner as defined in s. 456.001.
> 5. A health care professional licensed under part IV of chapter 468.
> 6. A home health aide as defined in s. 400.462.
> 7. A provider licensed under chapter 394 or chapter 397 and its clinical and nonclinical staff providing inpatient or outpatient services.
> 8. A continuing care facility licensed under chapter 651.
> 9. A pharmacy permitted under chapter 465.
> (d) “Letter of protection” means any arrangement by which a health care provider renders treatment in exchange for a promise of payment for the claimant’s medical expenses from any judgment or settlement of a personal injury or wrongful death action. The term includes any such arrangement, regardless of whether referred to as a letter of protection.
> (2) ADMISSIBLE EVIDENCE OF MEDICAL TREATMENT OR SERVICE EXPENSES.—Evidence offered to prove the amount of damages for past or future medical treatment or services in a personal injury or wrongful death action is admissible as provided in this subsection.
> (a) Evidence offered to prove the amount of damages for past medical treatment or services that have been satisfied is limited to evidence of the amount actually paid, regardless of the source of payment.
> (b) Evidence offered to prove the amount necessary to satisfy unpaid charges for incurred medical treatment or services shall include, but is not limited to, evidence as provided in this paragraph.
> 1. If the claimant has health care coverage other than Medicare or Medicaid, evidence of the amount which such health care coverage is obligated to pay the health care provider to satisfy the charges for the claimant’s incurred medical treatment or services, plus the claimant’s share of medical expenses under the insurance contract or regulation.
> 2. If the claimant has health care coverage but obtains treatment under a letter of protection or otherwise does not submit charges for any health care provider’s medical treatment or services to health care coverage, evidence of the amount the claimant’s health care coverage would pay the health care provider to satisfy the past unpaid medical charges under the insurance contract or regulation, plus the claimant’s share of medical expenses under the insurance contract or regulation, had the claimant obtained medical services or treatment pursuant to the health care coverage.
> 3. If the claimant does not have health care coverage or has health care coverage through Medicare or Medicaid, evidence of 120 percent of the Medicare reimbursement rate in effect on the date of the claimant’s incurred medical treatment or services, or, if there is no applicable Medicare rate for a service, 170 percent of the applicable state Medicaid rate.
> 4. If the claimant obtains medical treatment or services under a letter of protection and the health care provider subsequently transfers the right to receive payment under the letter of protection to a third party, evidence of the amount the third party paid or agreed to pay the health care provider in exchange for the right to receive payment pursuant to the letter of protection.
> 5. Any evidence of reasonable amounts billed to the claimant for medically necessary treatment or medically necessary services provided to the claimant.
> (c) Evidence offered to prove the amount of damages for any future medical treatment or services the claimant will receive shall include, but is not limited to, evidence as provided in this paragraph.
> 1. If the claimant has health care coverage other than Medicare or Medicaid, or is eligible for any such health care coverage, evidence of the amount for which the future charges of health care providers could be satisfied if submitted to such health care coverage, plus the claimant’s share of medical expenses under the insurance contract or regulation.
> 2. If the claimant does not have health care coverage or has health care coverage through Medicare or Medicaid, or is eligible for such health care coverage, evidence of 120 percent of the Medicare reimbursement rate in effect at the time of trial for the medical treatment or services the claimant will receive, or, if there is no applicable Medicare rate for a service, 170 percent of the applicable state Medicaid rate.
> 3. Any evidence of reasonable future amounts to be billed to the claimant for medically necessary treatment or medically necessary services.
> (d) This subsection does not impose an affirmative duty upon any party to seek a reduction in billed charges to which the party is not contractually entitled.
> (e) Individual contracts between providers and authorized commercial insurers or authorized health maintenance organizations are not subject to discovery or disclosure and are not admissible into evidence.
> (3) LETTERS OF PROTECTION; REQUIRED DISCLOSURES.—In a personal injury or wrongful death action, as a condition precedent to asserting any claim for medical expenses for treatment rendered under a letter of protection, the claimant must disclose:
> (a) A copy of the letter of protection.
> (b) All billings for the claimant’s medical expenses, which must be itemized and, to the extent applicable, coded according to:
> 1. For health care providers billing at the provider level, the American Medical Association’s Current Procedural Terminology (CPT), or the Healthcare Common Procedure Coding System (HCPCS), in effect on the date the services were rendered.
> 2. For health care providers billing at the facility level for expenses incurred in a clinical or outpatient setting, including when billing through an Ambulatory Payment Classification (APC) or Enhanced Ambulatory Patient Grouping (EAPG), the International Classification of Diseases (ICD) diagnosis code and, if applicable, the American Medical Association’s Current Procedural Terminology (CPT), in effect on the date the services were rendered.
> 3. For health care providers billing at the facility level for expenses incurred in an inpatient setting, including when billing through a Diagnosis Related Group (DRG), the International Classification of Diseases (ICD) diagnosis and procedure codes in effect on the date in which the claimant is discharged.
> (c) If the health care provider sells the accounts receivable for the claimant’s medical expenses to a factoring company or other third party:
> 1. The name of the factoring company or other third party who purchased such accounts.
> 2. The dollar amount for which the factoring company or other third party purchased such accounts, including any discount provided below the invoice amount.
> (d) Whether the claimant, at the time medical treatment was rendered, had health care coverage and, if so, the identity of such coverage.
> (e) Whether the claimant was referred for treatment under a letter of protection and, if so, the identity of the person who made the referral. If the referral is made by the claimant’s attorney, disclosure of the referral is permitted, and evidence of such referral is admissible notwithstanding s. 90.502. Moreover, in such situation, the financial relationship between a law firm and a medical provider, including the number of referrals, frequency, and financial benefit obtained, is relevant to the issue of the bias of a testifying medical provider.
> (4) DAMAGES RECOVERABLE FOR MEDICAL TREATMENT OR SERVICE EXPENSES.—The damages that may be recovered by a claimant in a personal injury or wrongful death action for the reasonable and necessary cost or value of medical care rendered may not include any amount in excess of the evidence of medical treatment and services expenses admitted pursuant to subsection (2), and also may not exceed the sum of the following:
> (a) Amounts actually paid by or on behalf of the claimant to a health care provider who rendered medical treatment or services;
> (b) Amounts necessary to satisfy charges for medical treatment or services that are due and owing but at the time of trial are not yet satisfied; and
> (c) Amounts necessary to provide for any reasonable and necessary medical treatment or services the claimant will receive in the future.

READ-WHOLE: F.S. 943.059
https://www.flsenate.gov/Laws/Statutes/2025/0943.059

Court-ordered sealing of criminal history records. Recorded whole from the section body, 63 logical passages, one blockquote line each.

WHY. The sealing arm's operative section. Eligibility in (1), petition requirements in (2), processing in (3), and the effect of an order plus the disclosure exceptions in (4). Previously the audited table carried two penalty rows only, so nothing in this project could state what sealing requires or what it does.

Fetched 2026-08-25 with curl from the Florida Senate's 2025 statutes. Method: the page's SectionBody div was cut at the History div and emitted programmatically rather than retyped. A first extraction attempt truncated every section at its first closing div, producing bodies a third of their true length; the boundary was corrected and the recovered lengths are what is recorded here. NOT independently re-verified against a second publisher: the Florida Senate is the publisher this project uses for the Florida Statutes and no second path was run for this batch, which is stated rather than implied.

> (1) ELIGIBILITY.—A person is eligible to petition a court to seal a criminal history record when:
> (a) The criminal history record is not ineligible for court-ordered sealing under s. 943.0584.
> (b) The person has never, before the date the application for a certificate of eligibility is filed, been adjudicated guilty in this state of a criminal offense, or been adjudicated delinquent in this state for committing any felony or any of the following misdemeanor offenses, unless the record of such adjudication of delinquency has been expunged pursuant to s. 943.0515:
> 1. Assault, as defined in s. 784.011;
> 2. Battery, as defined in s. 784.03;
> 3. Assault on a law enforcement officer, a firefighter, or other specified officers, as defined in s. 784.07(2)(a);
> 4. Carrying a concealed weapon, as defined in s. 790.01(2);
> 5. Open carrying of a weapon, as defined in s. 790.053;
> 6. Unlawful possession or discharge of a weapon or firearm at a school-sponsored event or on school property, as defined in s. 790.115;
> 7. Unlawful use of destructive devices or bombs, as defined in s. 790.1615(1);
> 8. Unlawful possession of a firearm by a minor, as defined in s. 790.22(5);
> 9. Exposure of sexual organs, as defined in s. 800.03;
> 10. Arson, as defined in s. 806.031(1);
> 11. Petit theft, as defined in s. 812.014(3);
> 12. Neglect of a child, as defined in s. 827.03(1)(e); or
> 13. Cruelty to animals, as defined in s. 828.12(1).
> (c) The person has not been adjudicated guilty of, or adjudicated delinquent for committing, any of the acts stemming from the arrest or alleged criminal activity to which the petition to seal pertains.
> (d) The person is no longer under court supervision applicable to the disposition of arrest or alleged criminal activity to which the petition to seal pertains.
> (e) The person has never secured a prior sealing or expunction of a criminal history record under this section, s. 943.0585, former s. 893.14, former s. 901.33, or former s. 943.058.
> (2) CERTIFICATE OF ELIGIBILITY.—Before petitioning the court to seal a criminal history record, a person seeking to seal a criminal history record must apply to the department for a certificate of eligibility for sealing. The department shall adopt rules relating to the application for and issuance of certificates of eligibility for sealing.
> (a) The department shall issue a certificate of eligibility for sealing to a person who is the subject of a criminal history record if that person:
> 1. Satisfies the eligibility criteria in paragraphs (1)(a)-(e) and is not ineligible for court-ordered sealing under s. 943.0584.
> 2. Has submitted to the department a certified copy of the disposition of charge to which the petition pertains.
> 3. Remits a $75 processing fee to the department for placement in the Department of Law Enforcement Operating Trust Fund, unless the executive director waives such fee.
> (b) A certificate of eligibility for sealing is valid for 12 months after the date stamped on the certificate when issued by the department. After that time, the petitioner must reapply to the department for a new certificate of eligibility. The status of the applicant and the law in effect at the time of the renewal application determine the petitioner’s eligibility.
> (3) PETITION.—Each petition to a court to seal a criminal history record is complete only when accompanied by:
> (a) A valid certificate of eligibility issued by the department pursuant to this section.
> (b) The petitioner’s sworn statement that the petitioner:
> 1. Satisfies the eligibility requirements for sealing in subsection (1).
> 2. Is eligible for sealing to the best of his or her knowledge and does not have any other petition to seal or expunge a criminal history record pending before any court.
> Any person who knowingly provides false information on such sworn statement to the court commits a felony of the third degree, punishable as provided in s. 775.082, s. 775.083, or s. 775.084.
> (4) COURT AUTHORITY.—
> (a) The courts of this state have jurisdiction over their own procedures, including the maintenance, sealing, and correction of judicial records containing criminal history information to the extent that such procedures are not inconsistent with the conditions, responsibilities, and duties established by this section.
> (b) Any court of competent jurisdiction may order a criminal justice agency to seal the criminal history record of a minor or an adult who complies with the requirements of this section. The court may not order a criminal justice agency to seal a criminal history record until the person seeking to seal a criminal history record has applied for and received a certificate of eligibility pursuant to subsection (2).
> (c) The court may order the sealing of a criminal history record pertaining to one arrest or one incident of alleged criminal activity only, except the court may order the sealing of a criminal history record pertaining to more than one arrest if the additional arrests directly relate to the original arrest. If the court intends to order the sealing of records pertaining to such additional arrests, such intent must be specified in the order. A criminal justice agency may not seal any record pertaining to such additional arrests if the order to seal does not articulate the intention of the court to seal a record pertaining to more than one arrest. This section does not prevent the court from ordering the sealing of only a portion of a criminal history record pertaining to one arrest or one incident of alleged criminal activity.
> (d) Notwithstanding any law to the contrary, a criminal justice agency may comply with laws, court orders, and official requests of other jurisdictions relating to sealing, correction, or confidential handling of criminal history records or information derived therefrom.
> (e) This section does not confer any right to the sealing of any criminal history record, and any request for sealing of a criminal history record may be denied at the sole discretion of the court.
> (5) PROCESSING OF A PETITION OR ORDER.—
> (a) In judicial proceedings under this section, a copy of the completed petition to seal shall be served upon the appropriate state attorney or the statewide prosecutor and upon the arresting agency; however, it is not necessary to make any agency other than the state a party. The appropriate state attorney or the statewide prosecutor and the arresting agency may respond to the court regarding the completed petition to seal.
> (b) If relief is granted by the court, the clerk of the court shall certify copies of the order to the appropriate state attorney or the statewide prosecutor and the arresting agency. The arresting agency is responsible for forwarding the order to any other agency to which the arresting agency disseminated the criminal history record information to which the order pertains. The department shall forward the order to seal to the Federal Bureau of Investigation. The clerk of the court shall certify a copy of the order to any other agency that the records of the court reflect has received the criminal history record from the court.
> (c) The department or any other criminal justice agency is not required to act on an order to seal entered by a court when such order does not comply with the requirements of this section. Upon receipt of such an order, the department must notify the issuing court, the appropriate state attorney or statewide prosecutor, the petitioner or the petitioner’s attorney, and the arresting agency of the reason for noncompliance. The appropriate state attorney or statewide prosecutor shall take action within 60 days to correct the record and petition the court to void the order. No cause of action, including contempt of court, shall arise against any criminal justice agency for failure to comply with an order to seal when the petitioner for such order failed to obtain the certificate of eligibility as required by this section or such order does not otherwise comply with the requirements of this section.
> (6) EFFECT OF ORDER.—
> (a) A criminal history record of a minor or an adult which is ordered sealed by a court pursuant to this section is confidential and exempt from s. 119.07(1) and s. 24(a), Art. I of the State Constitution and is available only to the following persons:
> 1. The subject of the record;
> 2. The subject’s attorney;
> 3. Criminal justice agencies for their respective criminal justice purposes, which include conducting a criminal history background check for approval of firearms purchases or transfers as authorized by state or federal law;
> 4. Judges in the state courts system for the purpose of assisting them in their case-related decisionmaking responsibilities, as set forth in s. 943.053(5); or
> 5. To those entities set forth in subparagraphs (b)1., 4.-6., and 8.-10. for their respective licensing access authorization and employment purposes.
> (b) The subject of the criminal history record sealed under this section or under other provisions of law, including former ss. 893.14, 901.33, and 943.058, may lawfully deny or fail to acknowledge the arrests covered by the sealed record, except when the subject of the record:
> 1. Is a candidate for employment with a criminal justice agency;
> 2. Is a defendant in a criminal prosecution;
> 3. Concurrently or subsequently petitions for relief under this section, s. 943.0583, or s. 943.0585;
> 4. Is a candidate for admission to The Florida Bar;
> 5. Is seeking to be employed or licensed by or to contract with the Department of Children and Families, the Division of Vocational Rehabilitation within the Department of Education, the Agency for Health Care Administration, the Agency for Persons with Disabilities, the Department of Health, the Department of Elderly Affairs, or the Department of Juvenile Justice or to be employed or used by such contractor or licensee in a sensitive position having direct contact with children, the disabled, or the elderly;
> 6.a. Is seeking to be employed or licensed by, or contract with, the Department of Education, a district unit under s. 1001.30, a special district unit under s. 1011.24, the Florida School for the Deaf and the Blind under s. 1002.36, the Florida Virtual School under s. 1002.37, a virtual instruction program under s. 1002.45, a charter school under s. 1002.33, a hope operator under s. 1002.333, an alternative school under s. 1008.341, a private or parochial school, or a local governmental entity that licenses child care facilities;
> b. Is seeking to be employed or used by a contractor or licensee under sub-subparagraph a.; or
> c. Is a person screened under s. 1012.467;
> 7. Is attempting to purchase a firearm from a licensed importer, licensed manufacturer, or licensed dealer and is subject to a criminal history check under state or federal law;
> 8. Is seeking to be licensed by the Division of Insurance Agent and Agency Services within the Department of Financial Services;
> 9. Is seeking to be appointed as a guardian pursuant to s. 744.3125; or
> 10. Is seeking to be licensed by the Bureau of License Issuance of the Division of Licensing within the Department of Agriculture and Consumer Services to carry a concealed weapon or concealed firearm. This subparagraph applies only in the determination of an applicant’s eligibility under s. 790.06.
> (c) Subject to the exceptions in paragraph (b), a person who has been granted a sealing under this section, former s. 893.14, former s. 901.33, or former s. 943.058 may not be held under any provision of law of this state to commit perjury or to be otherwise liable for giving a false statement by reason of such person’s failure to recite or acknowledge a sealed criminal history record.
> (d) Information relating to the existence of a sealed criminal history record provided in accordance with paragraph (b) is confidential and exempt from s. 119.07(1) and s. 24(a), Art. I of the State Constitution, except that the department shall disclose the sealed criminal history record to the entities set forth in subparagraphs (b)1., 4.-6., and 8.-10. for their respective licensing, access authorization, and employment purposes. An employee of an entity set forth in subparagraph (b)1., subparagraph (b)4., subparagraph (b)5., subparagraph (b)6., subparagraph (b)8., subparagraph (b)9., or subparagraph (b)10. may not disclose information relating to the existence of a sealed criminal history record of a person seeking employment, access authorization, or licensure with such entity or contractor, except to the person to whom the criminal history record relates or to persons having direct responsibility for employment, access authorization, or licensure decisions. A person who violates this paragraph commits a misdemeanor of the first degree, punishable as provided in s. 775.082 or s. 775.083.

READ-WHOLE: F.S. 943.0584
https://www.flsenate.gov/Laws/Statutes/2025/0943.0584

Criminal history records ineligible for court-ordered expunction or court-ordered sealing. Recorded whole from the section body, 36 logical passages, one blockquote line each.

WHY. The disqualifying-offense list, re-fetched to close the currency question the concept document raised. The audited table's `unread` field warned that the 2025-156 session laws had not been checked. They have been now: the paragraph list runs (a) through (hh) with no gaps, and all 36 recorded quotes in `fs-943-0584.ts` match this fetch exactly. The table stands as recorded.

Fetched 2026-08-25 with curl from the Florida Senate's 2025 statutes. Method: the page's SectionBody div was cut at the History div and emitted programmatically rather than retyped. A first extraction attempt truncated every section at its first closing div, producing bodies a third of their true length; the boundary was corrected and the recovered lengths are what is recorded here. NOT independently re-verified against a second publisher: the Florida Senate is the publisher this project uses for the Florida Statutes and no second path was run for this batch, which is stated rather than implied.

> (1) As used in this section, the term “conviction” means a determination of guilt which is the result of a trial or the entry of a plea of guilty or nolo contendere, regardless of whether adjudication is withheld, or if the defendant was a minor, a finding that the defendant committed or pled guilty or nolo contendere to committing a delinquent act, regardless of whether adjudication of delinquency is withheld.
> (2) A criminal history record is ineligible for a certificate of eligibility for expunction or a court-ordered expunction pursuant to s. 943.0585 or a certificate of eligibility for sealing or a court-ordered sealing pursuant to s. 943.059 if the record is a conviction for any of the following offenses:
> (a) Sexual misconduct, as defined in s. 393.135, s. 394.4593, or s. 916.1075;
> (b) Illegal use of explosives, as defined in chapter 552;
> (c) Terrorism, as defined in s. 775.30;
> (d) Murder, as defined in s. 782.04, s. 782.065, or s. 782.09;
> (e) Manslaughter or homicide, as defined in s. 782.07, s. 782.071, or s. 782.072;
> (f) Assault or battery, as defined in ss. 784.011 and 784.03, respectively, of one family or household member by another family or household member, as defined in s. 741.28(3);
> (g) Aggravated assault, as defined in s. 784.021;
> (h) Felony battery, domestic battery by strangulation, or aggravated battery, as defined in ss. 784.03, 784.041, and 784.045, respectively;
> (i) Stalking or aggravated stalking, as defined in s. 784.048;
> (j) Luring or enticing a child, as defined in s. 787.025;
> (k) Human trafficking, as defined in s. 787.06;
> (l) Kidnapping or false imprisonment, as defined in s. 787.01 or s. 787.02;
> (m) Any offense defined in chapter 794;
> (n) Procuring a person less than 18 years of age for prostitution, as defined in former s. 796.03;
> (o) Lewd or lascivious offenses committed upon or in the presence of persons less than 16 years of age, as defined in s. 800.04;
> (p) Arson, as defined in s. 806.01;
> (q) Burglary of a dwelling, as defined in s. 810.02;
> (r) Voyeurism or digital voyeurism, as defined in ss. 810.14 and 810.145, respectively;
> (s) Robbery or robbery by sudden snatching, as defined in ss. 812.13 and 812.131, respectively;
> (t) Carjacking, as defined in s. 812.133;
> (u) Home-invasion robbery, as defined in s. 812.135;
> (v) A violation of the Florida Communications Fraud Act, as provided in s. 817.034;
> (w) Abuse of an elderly person or disabled adult, or aggravated abuse of an elderly person or disabled adult, as defined in s. 825.102;
> (x) Lewd or lascivious offenses committed upon or in the presence of an elderly person or disabled person, as defined in s. 825.1025;
> (y) Child abuse or aggravated child abuse, as defined in s. 827.03;
> (z) Sexual performance by a child, as defined in s. 827.071;
> (aa) Any offense defined in chapter 839;
> (bb) Certain acts in connection with obscenity, as defined in s. 847.0133;
> (cc) Any offense defined in s. 847.0135;
> (dd) Selling or buying of minors, as defined in s. 847.0145;
> (ee) Aircraft piracy, as defined in s. 860.16;
> (ff) Manufacturing a controlled substance in violation of chapter 893;
> (gg) Drug trafficking, as defined in s. 893.135; or
> (hh) Any violation specified as a predicate offense for registration as a sexual predator pursuant to s. 775.21, or sexual offender pursuant to s. 943.0435, without regard to whether that offense alone is sufficient to require such registration.

READ-WHOLE: F.S. 943.0515
https://www.flsenate.gov/Laws/Statutes/2025/0943.0515

Retention of criminal history records of minors. Recorded whole from the section body, 10 logical passages, one blockquote line each.

WHY. Cited inside 943.059(1)(b) as the unless-clause that can undo a disqualifying delinquency adjudication. The concept document states the consequence of not having it plainly: a tool that asks about juvenile adjudications without this gives a wrong answer to every reader whose delinquency record was expunged.

Fetched 2026-08-25 with curl from the Florida Senate's 2025 statutes. Method: the page's SectionBody div was cut at the History div and emitted programmatically rather than retyped. A first extraction attempt truncated every section at its first closing div, producing bodies a third of their true length; the boundary was corrected and the recovered lengths are what is recorded here. NOT independently re-verified against a second publisher: the Florida Senate is the publisher this project uses for the Florida Statutes and no second path was run for this batch, which is stated rather than implied.

> (1)(a) The Criminal Justice Information Program shall retain the criminal history record of a minor who is classified as a serious or habitual juvenile offender or committed to a maximum-risk residential facility under chapter 985 for 5 years after the date the offender reaches 21 years of age, at which time the record shall be expunged unless it meets the criteria of paragraph (2)(a) or paragraph (2)(b).
> (b)1. If the minor is not classified as a serious or habitual juvenile offender or committed to a maximum-risk residential facility under chapter 985, the program shall retain the minor’s criminal history record for 2 years after the date the minor reaches 19 years of age, at which time the record shall be expunged unless it meets the criteria of paragraph (2)(a) or paragraph (2)(b).
> 2. A minor described in subparagraph 1. may apply to the department to have his or her criminal history record expunged before the minor reaches 21 years of age. To be eligible for expunction under this subparagraph, the minor must be 18 years of age or older and less than 21 years of age and have not been charged by the state attorney with or found to have committed any criminal offense within the 5-year period before the application date. The only offenses eligible to be expunged under this subparagraph are those that the minor committed before the minor reached 18 years of age. A criminal history record expunged under this subparagraph requires the approval of the state attorney for each circuit in which an offense specified in the criminal history record occurred. A minor seeking to expunge a criminal history record under this subparagraph shall apply to the department for expunction in the manner prescribed by rule. An application for expunction under this subparagraph shall include:
> a. A processing fee of $75 to the department for placement in the Department of Law Enforcement Operating Trust Fund, unless such fee is waived by the executive director.
> b. A full set of fingerprints of the applicant taken by a law enforcement agency for purposes of identity verification.
> c. A sworn, written statement from the minor seeking relief that he or she is no longer under court supervision applicable to the disposition of the arrest or alleged criminal activity to which the application to expunge pertains and that he or she has not been charged with or found to have committed a criminal offense, in any jurisdiction of the state or within the United States, within the 5-year period before the application date. A person who knowingly provides false information on the sworn statement required by this sub-subparagraph commits a misdemeanor of the first degree, punishable as provided in s. 775.082 or s. 775.083.
> 3. A minor who applies, but who is not approved for early expunction in accordance with subparagraph 2., shall have his or her criminal history record expunged at age 21 if eligible under subparagraph 1.
> (2)(a) If a person 18 years of age or older is charged with or convicted of a forcible felony and the person’s criminal history record as a minor has not yet been destroyed, the person’s record as a minor must be merged with the person’s adult criminal history record and must be retained as a part of the person’s adult record.
> (b) If, at any time, a minor is adjudicated as an adult for a forcible felony, the minor’s criminal history record prior to the time of the minor’s adjudication as an adult must be merged with his or her record as an adjudicated adult.
> (3) Notwithstanding any other provision of this section, the Criminal Justice Information Program shall retain the criminal history record of a minor adjudicated delinquent for a violation committed on or after July 1, 2007, as provided in s. 943.0435(1)(h)1.d. Such records may not be destroyed and must be merged with the person’s adult criminal history record and retained as a part of the person’s adult record.

READ-WHOLE: F.S. 943.0583
https://www.flsenate.gov/Laws/Statutes/2025/0943.0583

Human trafficking victim expunction. Recorded whole from the section body, 35 logical passages, one blockquote line each.

WHY. A separate expunction route with its own eligibility. Only subsection (2) was recorded before, so a reader who qualifies under this route would have been told nothing by a tool that knows only 943.059.

Fetched 2026-08-25 with curl from the Florida Senate's 2025 statutes. Method: the page's SectionBody div was cut at the History div and emitted programmatically rather than retyped. A first extraction attempt truncated every section at its first closing div, producing bodies a third of their true length; the boundary was corrected and the recovered lengths are what is recorded here. NOT independently re-verified against a second publisher: the Florida Senate is the publisher this project uses for the Florida Statutes and no second path was run for this batch, which is stated rather than implied.

> (1) As used in this section, the term:
> (a) “Human trafficking” has the same meaning as provided in s. 787.06.
> (b) “Official documentation” means any documentation issued by a federal, state, or local agency tending to show a person’s status as a victim of human trafficking.
> (c) “Victim of human trafficking” means a person subjected to coercion, as defined in s. 787.06, for the purpose of being used in human trafficking, a child under 18 years of age subjected to human trafficking, or an individual subjected to human trafficking as defined by federal law.
> (2) Notwithstanding any other provision of law, upon the filing of a petition as provided in this section, any court in the circuit in which the petitioner was arrested, so long as the court has jurisdiction over the class of offense or offenses sought to be expunged, may order a criminal justice agency to expunge the criminal history record of a victim of human trafficking who complies with the requirements of this section. A petition need not be filed in the court where the petitioner’s criminal proceeding or proceedings originally occurred. This section does not confer any right to the expunction of any criminal history record, and any request for expunction of a criminal history record may be denied at the discretion of the court. The clerk of the court may not charge a filing fee, service charge, or copy fee or any other charge for a petition filed under this section. The clerk of the court shall treat a petition seeking to expunge more than one eligible case as a single petition.
> (3) A person who is a victim of human trafficking may petition for the expunction of a criminal history record resulting from the arrest or filing of charges for one or more offenses committed or reported to have been committed while the person was a victim of human trafficking, which offense was committed or reported to have been committed as a part of the human trafficking scheme of which the person was a victim or at the direction of an operator of the scheme, including, but not limited to, violations under chapters 796 and 847, without regard to the disposition of the arrest or of any charges. However, this section does not apply to any offense listed in s. 775.084(1)(b)1. Determination of the petition under this section should be by a preponderance of the evidence. A conviction expunged under this section is deemed to have been vacated due to a substantive defect in the underlying criminal proceedings. If a person is adjudicated not guilty by reason of insanity or is found to be incompetent to stand trial for any such charge, the expunction of the criminal history record may not prevent the entry of the judgment or finding in state and national databases for use in determining eligibility to purchase or possess a firearm or to carry a concealed firearm, as authorized in s. 790.065(2)(a)4.c. and 18 U.S.C. s. 922(t), nor shall it prevent any governmental agency that is authorized by state or federal law to determine eligibility to purchase or possess a firearm or to carry a concealed firearm from accessing or using the record of the judgment or finding in the course of such agency’s official duties.
> (4) A petition under this section must be initiated by the petitioner with due diligence after the victim has ceased to be a victim of human trafficking or has sought services for victims of human trafficking, subject to reasonable concerns for the safety of the victim, family members of the victim, or other victims of human trafficking that may be jeopardized by the bringing of such petition or for other reasons consistent with the purpose of this section.
> (5) Official documentation of the victim’s status creates a presumption that his or her participation in the offense was a result of having been a victim of human trafficking but is not required for granting a petition under this section. A determination made without such official documentation must be made by a showing of clear and convincing evidence.
> (6) Each petition to a court to expunge a criminal history record is complete only when accompanied by:
> (a) The petitioner’s sworn statement attesting that the petitioner is eligible for such an expunction to the best of his or her knowledge or belief.
> (b) Official documentation of the petitioner’s status as a victim of human trafficking, if any exists.
> Any person who knowingly provides false information on such sworn statement to the court commits a felony of the third degree, punishable as provided in s. 775.082, s. 775.083, or s. 775.084.
> (7)(a) In judicial proceedings under this section, a copy of the completed petition to expunge shall be served upon the appropriate state attorney or the statewide prosecutor and upon the arresting agency; however, it is not necessary to make any agency other than the state a party. The appropriate state attorney or the statewide prosecutor and the arresting agency may respond to the court regarding the completed petition to expunge.
> (b) The petitioner or the petitioner’s attorney may appear at any hearing under this section telephonically, via video conference, or by other electronic means.
> (c) The court shall allow an advocate from a state attorney’s office, law enforcement agency, safe house or safe foster home as defined in s. 409.1678(1), or a residential facility offering services to adult victims of human trafficking to be present with the petitioner during any court proceedings or hearings under this section, if the petitioner has made such a request and the advocate is able to be present.
> (d) If relief is granted by the court, the clerk of the court shall certify copies of the order to the appropriate state attorney or the statewide prosecutor and the arresting agency. The arresting agency is responsible for forwarding the order to any other agency listed in the court order to which the arresting agency disseminated the criminal history record information to which the order pertains. The department shall forward the order to expunge to the Federal Bureau of Investigation. The clerk of the court shall certify a copy of the order to any other agency that the records of the court reflect has received the criminal history record from the court.
> (8)(a) Any criminal history record of a minor or an adult that is ordered expunged pursuant to this section must be physically destroyed or obliterated by any criminal justice agency having custody of such record, except that any criminal history record in the custody of the department must be retained in all cases.
> (b) The person who is the subject of a criminal history record that is expunged under this section may lawfully deny or fail to acknowledge the arrests covered by the expunged record, except when the subject of the record is a candidate for employment with a criminal justice agency or is a defendant in a criminal prosecution.
> (c) Subject to the exceptions in paragraph (b), a person who has been granted an expunction under this section may not be held under any law of this state to commit perjury or to be otherwise liable for giving a false statement by reason of such person’s failure to recite or acknowledge an expunged criminal history record.
> (9) Any reference to any other chapter, section, or subdivision of the Florida Statutes in this section constitutes a general reference under the doctrine of incorporation by reference.
> (10)(a) A criminal history record ordered expunged under this section that is retained by the department is confidential and exempt from s. 119.07(1) and s. 24(a), Art. I of the State Constitution, except that the record shall be made available:
> 1. To criminal justice agencies for their respective criminal justice purposes.
> 2. To any governmental agency that is authorized by state or federal law to determine eligibility to purchase or possess a firearm or to carry a concealed firearm for use in the course of such agency’s official duties.
> 3. Upon order of a court of competent jurisdiction.
> (b) A criminal justice agency may retain a notation indicating compliance with an order to expunge.
> (11)(a) The following criminal intelligence information or criminal investigative information is confidential and exempt from s. 119.07(1) and s. 24(a), Art. I of the State Constitution:
> 1. Any information that reveals the identity of a person who is a victim of human trafficking whose criminal history record has been expunged under this section.
> 2. Any information that may reveal the identity of a person who is a victim of human trafficking whose criminal history record has been ordered expunged under this section.
> (b) Criminal investigative information and criminal intelligence information made confidential and exempt under this subsection may be disclosed by a law enforcement agency:
> 1. In the furtherance of its official duties and responsibilities.
> 2. For print, publication, or broadcast if the law enforcement agency determines that such release would assist in locating or identifying a person that the agency believes to be missing or endangered. The information provided should be limited to that needed to identify or locate the victim.
> 3. To another governmental agency in the furtherance of its official duties and responsibilities.
> (c) This exemption applies to such confidential and exempt criminal intelligence information or criminal investigative information held by a law enforcement agency before, on, or after the effective date of the exemption.
> (12)(a) A petition filed under this section and all pleadings and documents related to the petition are confidential and exempt from s. 119.07(1) and s. 24(a), Art. I of the State Constitution.
> (b) This subsection is subject to the Open Government Sunset Review Act in accordance with s. 119.15 and is repealed on October 2, 2028, unless reviewed and saved from repeal through reenactment by the Legislature.

READ-WHOLE: F.S. 943.0585
https://www.flsenate.gov/Laws/Statutes/2025/0943.0585

Court-ordered expunction of criminal history records. Recorded whole from the section body, 60 logical passages, one blockquote line each.

WHY. The expunction arm. Recorded now so the eligibility questions can distinguish sealing from expunction rather than conflating them; the tool's first release answers the sealing arm and says so.

Fetched 2026-08-25 with curl from the Florida Senate's 2025 statutes. Method: the page's SectionBody div was cut at the History div and emitted programmatically rather than retyped. A first extraction attempt truncated every section at its first closing div, producing bodies a third of their true length; the boundary was corrected and the recovered lengths are what is recorded here. NOT independently re-verified against a second publisher: the Florida Senate is the publisher this project uses for the Florida Statutes and no second path was run for this batch, which is stated rather than implied.

> (1) ELIGIBILITY.—A person is eligible to petition a court to expunge a criminal history record if:
> (a) An indictment, information, or other charging document was not filed or issued in the case giving rise to the criminal history record.
> (b) An indictment, information, or other charging document was filed or issued in the case giving rise to the criminal history record, was dismissed or nolle prosequi by the state attorney or statewide prosecutor, or was dismissed by a court of competent jurisdiction or a judgment of acquittal was rendered by a judge, or a verdict of not guilty was rendered by a judge or jury.
> (c) The person is not seeking to expunge a criminal history record that is ineligible for court-ordered expunction under s. 943.0584.
> (d) The person has never, as of the date the application for a certificate of expunction is filed, been adjudicated guilty in this state of a criminal offense or been adjudicated delinquent in this state for committing any felony or any of the following misdemeanors, unless the record of such adjudication of delinquency has been expunged pursuant to s. 943.0515:
> 1. Assault, as defined in s. 784.011;
> 2. Battery, as defined in s. 784.03;
> 3. Assault on a law enforcement officer, a firefighter, or other specified officers, as defined in s. 784.07(2)(a);
> 4. Carrying a concealed weapon, as defined in s. 790.01(2);
> 5. Open carrying of a weapon, as defined in s. 790.053;
> 6. Unlawful possession or discharge of a weapon or firearm at a school-sponsored event or on school property, as defined in s. 790.115;
> 7. Unlawful use of destructive devices or bombs, as defined in s. 790.1615(1);
> 8. Unlawful possession of a firearm, as defined in s. 790.22(5);
> 9. Exposure of sexual organs, as defined in s. 800.03;
> 10. Arson, as defined in s. 806.031(1);
> 11. Petit theft, as defined in s. 812.014(3);
> 12. Neglect of a child, as defined in s. 827.03(1)(e); or
> 13. Cruelty to animals, as defined in s. 828.12(1).
> (e) The person has not been adjudicated guilty of, or adjudicated delinquent for committing, any of the acts stemming from the arrest or alleged criminal activity to which the petition pertains.
> (f) The person is no longer under court supervision applicable to the disposition of arrest or alleged criminal activity to which the petition to expunge pertains.
> (g) The person has never secured a prior sealing or expunction of a criminal history record under this section, s. 943.059, former s. 893.14, former s. 901.33, or former s. 943.058, unless expunction is sought of a criminal history record previously sealed for 10 years pursuant to paragraph (h) and the record is otherwise eligible for expunction.
> (h) The person has previously obtained a court-ordered sealing the criminal history record under s. 943.059, former s. 893.14, former s. 901.33, or former s. 943.058 for a minimum of 10 years because adjudication was withheld or because all charges related to the arrest or alleged criminal activity to which the petition to expunge pertains were not dismissed before trial, without regard to whether the outcome of the trial was other than an adjudication of guilt. The requirement for the record to have previously been sealed for a minimum of 10 years does not apply if a plea was not entered or all charges related to the arrest or alleged criminal activity to which the petition to expunge pertains were dismissed before trial or a judgment of acquittal was rendered by a judge or a verdict of not guilty was rendered by a judge or jury.
> (2) CERTIFICATE OF ELIGIBILITY.—Before petitioning a court to expunge a criminal history record, a person seeking to expunge a criminal history record must apply to the department for a certificate of eligibility for expunction. The department shall adopt rules to establish procedures for applying for and issuing a certificate of eligibility for expunction.
> (a) The department shall issue a certificate of eligibility for expunction to a person who is the subject of a criminal history record if that person:
> 1. Satisfies the eligibility criteria in paragraphs (1)(a)-(h) and is not ineligible under s. 943.0584.
> 2. Has submitted to the department a written certified statement from the appropriate state attorney or statewide prosecutor which confirms the criminal history record complies with the criteria in paragraph (1)(a) or paragraphs (1)(b) and (c).
> 3. Has submitted to the department a certified copy of the disposition of the charge to which the petition to expunge pertains.
> 4. Remits a $75 processing fee to the department for placement in the Department of Law Enforcement Operating Trust Fund, unless the executive director waives such fee.
> (b) A certificate of eligibility for expunction is valid for 12 months after the date stamped on the certificate when issued by the department. After that time, the petitioner must reapply to the department for a new certificate of eligibility. The petitioner’s status and the law in effect at the time of the renewal application determine the petitioner’s eligibility.
> (3) PETITION.—Each petition to expunge a criminal history record must be accompanied by:
> (a) A valid certificate of eligibility issued by the department.
> (b) The petitioner’s sworn statement that he or she:
> 1. Satisfies the eligibility requirements for expunction in subsection (1).
> 2. Is eligible for expunction to the best of his or her knowledge and does not have any other petition to seal or expunge a criminal history record pending before any court.
> A person who knowingly provides false information on such sworn statement commits a felony of the third degree, punishable as provided in s. 775.082, s. 775.083, or s. 775.084.
> (4) COURT AUTHORITY.—
> (a) The courts of this state have jurisdiction over their own procedures, including the maintenance, expunction, and correction of judicial records containing criminal history information to the extent that such procedures are not inconsistent with the conditions, responsibilities, and duties established by this section.
> (b) A court of competent jurisdiction may order a criminal justice agency to expunge the criminal history record of a minor or an adult who complies with the requirements of this section. The court may not order a criminal justice agency to expunge a criminal history record until the person seeking to expunge a criminal history record has applied for and received a certificate of eligibility under subsection (2).
> (c) The court may order expunction of a criminal history record pertaining to one arrest or one incident of alleged criminal activity only, except that the court may order the expunction of a criminal history record pertaining to more than one arrest if the additional arrests directly relate to the original arrest. If the court intends to order the expunction of records pertaining to such additional arrests, such intent must be specified in the order. A criminal justice agency may not expunge any record pertaining to such additional arrests if the order to expunge does not articulate the intention of the court to expunge a record pertaining to more than one arrest. This section does not prevent the court from ordering the expunction of only a portion of a criminal history record pertaining to one arrest or one incident of alleged criminal activity.
> (d) Notwithstanding any law to the contrary, a criminal justice agency may comply with laws, court orders, and official requests of other jurisdictions relating to expunction, correction, or confidential handling of criminal history records or information derived therefrom.
> (e) This section does not confer any right to expunction of any criminal history record, and any request for expunction of a criminal history record may be denied at the sole discretion of the court.
> (5) PROCESSING OF A PETITION OR AN ORDER.—
> (a) In judicial proceedings under this section, a copy of the completed petition to expunge shall be served upon the appropriate state attorney or the statewide prosecutor and upon the arresting agency; however, it is not necessary to make any agency other than the state a party. The appropriate state attorney or the statewide prosecutor and the arresting agency may respond to the court regarding the completed petition to expunge.
> (b) If relief is granted by the court, the clerk of the court shall certify copies of the order to the appropriate state attorney or the statewide prosecutor and the arresting agency. The arresting agency shall forward the order to any other agency to which the arresting agency disseminated the criminal history record information to which the order pertains. The department shall forward the order to expunge to the Federal Bureau of Investigation. The clerk of the court shall certify a copy of the order to any other agency which the records of the court reflect has received the criminal history record from the court.
> (c) The department or any other criminal justice agency is not required to act on an order to expunge entered by a court when such order does not comply with the requirements of this section. Upon receipt of such an order, the department must notify the issuing court, the appropriate state attorney or statewide prosecutor, the petitioner or the petitioner’s attorney, and the arresting agency of the reason for noncompliance. The appropriate state attorney or statewide prosecutor shall take action within 60 days to correct the record and petition the court to void the order. No cause of action, including contempt of court, shall arise against any criminal justice agency for failure to comply with an order to expunge when the petitioner for such order failed to obtain the certificate of eligibility as required by this section or such order does not otherwise comply with the requirements of this section.
> (6) EFFECT OF EXPUNCTION ORDER.—
> (a) Any criminal history record of a minor or an adult which is ordered expunged by a court of competent jurisdiction pursuant to this section must be physically destroyed or obliterated by any criminal justice agency having custody of such record, except that any criminal history record in the custody of the department must be retained in all cases. A criminal history record ordered expunged which is retained by the department is confidential and exempt from s. 119.07(1) and s. 24(a), Art. I of the State Constitution and not available to any person or entity except upon order of a court of competent jurisdiction. A criminal justice agency may retain a notation indicating compliance with an order to expunge.
> (b) The person who is the subject of a criminal history record that is expunged under this section or under other provisions of law, including former ss. 893.14, 901.33, and 943.058, may lawfully deny or fail to acknowledge the arrests covered by the expunged record, except when the subject of the record:
> 1. Is a candidate for employment with a criminal justice agency;
> 2. Is a defendant in a criminal prosecution;
> 3. Concurrently or subsequently petitions for relief under this section, s. 943.0583, or s. 943.059;
> 4. Is a candidate for admission to The Florida Bar;
> 5. Is seeking to be employed or licensed by or to contract with the Department of Children and Families, the Division of Vocational Rehabilitation within the Department of Education, the Agency for Health Care Administration, the Agency for Persons with Disabilities, the Department of Health, the Department of Elderly Affairs, or the Department of Juvenile Justice or to be employed or used by such contractor or licensee in a sensitive position having direct contact with children, the disabled, or the elderly;
> 6.a. Is seeking to be employed or licensed by, or contract with, the Department of Education, any district unit under s. 1001.30, any special district unit under s. 1011.24, the Florida School for the Deaf and the Blind under s. 1002.36, the Florida Virtual School under s. 1002.37, any virtual instruction program under s. 1002.45, any charter school under s. 1002.33, any hope operator under s. 1002.333, any alternative school under s. 1008.341, any private or parochial school, or any local governmental entity that licenses child care facilities;
> b. Is seeking to be employed or used by a contractor or licensee under sub-subparagraph a.; or
> c. Is a person screened under s. 1012.467;
> 7. Is seeking to be licensed by the Division of Insurance Agent and Agency Services within the Department of Financial Services; or
> 8. Is seeking to be appointed as a guardian pursuant to s. 744.3125.
> (c) Subject to the exceptions in paragraph (b), a person who has been granted an expunction under this section, former s. 893.14, former s. 901.33, or former s. 943.058 may not be held under any provision of law of this state to commit perjury or to be otherwise liable for giving a false statement by reason of such person’s failure to recite or acknowledge an expunged criminal history record.
> (d) Information relating to the existence of an expunged criminal history record which is provided in accordance with paragraph (a) is confidential and exempt from s. 119.07(1) and s. 24(a), Art. I of the State Constitution, except that the department shall disclose the existence of a criminal history record ordered expunged to the entities set forth in subparagraphs (b)1. and 4.-8. for their respective licensing, access authorization, and employment purposes and to criminal justice agencies for their respective criminal justice purposes. It is unlawful for any employee of an entity set forth in subparagraph (b)1., subparagraph (b)4., subparagraph (b)5., subparagraph (b)6., subparagraph (b)7., or subparagraph (b)8. to disclose information relating to the existence of an expunged criminal history record of a person seeking employment, access authorization, or licensure with such entity or contractor, except to the person to whom the criminal history record relates or to persons having direct responsibility for employment, access authorization, or licensure decisions. A person who violates this paragraph commits a misdemeanor of the first degree, punishable as provided in s. 775.082 or s. 775.083.

READ-WHOLE: Administrative Order S-2025-063 (Thirteenth Judicial Circuit, Hillsborough County)
https://www.fljud13.org/Portals/0/AO/DOCS/S-2025-063.pdf

Recorded whole: the preamble, the adoption paragraph, sections 1 through 6, both footnotes, the fourteen crime categories under section 2.G, and the section 4 schedule with all nine rows and their amounts. Six pages, read as a rendered document.

WHY THIS RECORD EXISTS. The order was previously in this project only as excerpts inside one research brief (ST-03-battery.md Section 7.13), and under D26 a partial record supports no claim beyond what it quotes. The after-an-arrest guide therefore described release through the rules alone and stated nothing about which charges the schedule covers or what any amount is. This closes that marker. It does NOT revive the bond estimator: DECISIONS.md D32 killed that tool, and every reason it gives is visible in the text below.

Fetched 2026-08-24 with curl to ao.pdf (1,188,658 bytes, PDF 1.6). METHOD, and it matters here: `pdftotext -layout` produced a text layer whose roman-numeral labels are corrupt, rendering i as "1", ii as "11" and iii as "111", and splitting "944.4731" into "944.4 731". A verbatim record taken from that extraction would have been wrong in the enumeration, which is the part a reader counts. The passages below were therefore transcribed from a visual render of all six pages, and then every one of them was checked programmatically against the independent pdftotext extraction; 40 passages, all verified. The named extraction artifacts were corrected on the comparison side only.

TWO DEFECTS IN THE ORDER'S OWN ENUMERATION, recorded rather than repaired. Under section 2.G the label **viii. appears twice**, once for "Child abuse or aggravated child abuse" and again for "Arson; riot, aggravated riot...", and the label **xii. does not appear at all**, the list running xi. then xiii. There are fourteen items and fourteen labels, so the count coincidentally reconciles while two labels are wrong. This is the authority being defective rather than the record: both are preserved below exactly as published. Any page that cites an item by roman numeral is citing an ambiguous label, so cite the text.

NOT RECORDED HERE: nothing from this order. It is recorded whole. What is still missing for the after-an-arrest guide is the separate STATE.md Q14 item, the human-verified Hillsborough logistics, which this order does not contain.

> IN THE THIRTEENTH JUDICIAL CIRCUIT, HILLSBOROUGH COUNTY, FLORIDA
> ADMINISTRATIVE ORDER S-2025-063 (Supersedes Administrative Order S-2024-083)
> UNIFORM STATEWIDE BOND SCHEDULE
> Under Florida Statutes section 903.011, trial court chief judges may adopt the statewide bond schedule adopted by the Florida Supreme Court, may increase the monetary bond applicable to an offense that is included in the uniform statewide bond schedule, or may petition the Florida Supreme Court for approval of a local bond schedule that sets a lower bond amount than that required by the uniform statewide bond schedule.
> [footnote 1] Administrative Order AOSC25-69.
> By the power vested in the chief judge under article V, section 2(d), Florida Constitution; Florida Statutes sections 43.26 and 903.011; and Florida Rule of General Practice and Judicial Administration 2.215(b)(2), it is ORDERED that the uniform statewide bond schedule adopted by the Florida Supreme Court is hereby adopted for the Thirteenth Judicial Circuit without change effective January 1, 2026, through December 31, 2026.
> 1. General
> The following bail bond schedule is established so that persons arrested for certain criminal offenses may be released on a bail bond prior to the person's first appearance hearing. This bond schedule applies only to the booking officer, not to judges. This schedule does not bind any judge conducting first appearance hearings or bail bond hearings. All persons brought before a judge for a first appearance hearing or any future proceeding are entitled by law to an individualized inquiry, based on the specific circumstances of the arrestee, to determine whether the arrestee should be released and the conditions of release. When determining bail, judges should consider the criteria set out in Florida Statutes sections 903.011(6) and 903.046 as well as Florida Rule of Criminal Procedure 3.131.
> 2. First Appearance Hearing Required
> The following persons may not be released before his or her first appearance hearing, and the bond schedule enumerated in section 4 of this administrative order does not apply, if the person meets any of the following criteria:
> [footnote 2] Florida Statutes section 903.011(6).
> A. The person was, at the time of arrest for any felony, on pretrial release, probation, or community control in this state or any other state;
> B. The person was, at the time of arrest, designated as a sexual offender or sexual predator in this state or any other state;
> C. The person was arrested for violating a protective injunction;
> D. The person was, at the time of arrest, on release from supervision under s. 947.1405, s. 947.146, s. 947.149, or s. 944.4731;
> E. The person has, at any time before the current arrest, been sentenced pursuant to s. 775.082(9) or s. 775.084 as a prison releasee reoffender, habitual violent felony offender, three-time violent felony offender, or violent career criminal;
> F. The person has been arrested three or more times in the 6 months immediately preceding his or her arrest for the current offense; or
> G. The person's current offense of arrest is for one or more of the following crimes:
> i. A capital felony, life felony, felony of the first degree, or felony of the second degree;
> ii. A homicide under chapter 782; or any attempt, solicitation, or conspiracy to commit a homicide;
> iii. Assault in furtherance of a riot or an aggravated riot; felony battery; domestic battery by strangulation; domestic violence, as defined in section 741.28; stalking; mob intimidation; assault or battery on a law enforcement officer; assault or battery on juvenile probation officer, or other staff of a detention center or commitment facility, or a staff member of a commitment facility, or health services personnel; assault or battery on a person 65 years of age or older; robbery; burglary; carjacking; or resisting an officer with violence;
> iv. Kidnapping, false imprisonment, human trafficking, or human smuggling;
> v. Possession of a firearm or ammunition by a felon, violent career criminal, or person subject to an injunction against committing acts of domestic violence, stalking, or cyberstalking;
> vi. Sexual battery; indecent, lewd, or lascivious touching; exposure of sexual organs; incest; luring or enticing a child; or child pornography;
> vii. Abuse, neglect, or exploitation of an elderly person or disabled adult;
> viii. Child abuse or aggravated child abuse;
> viii. Arson; riot, aggravated riot, inciting a riot, or aggravated inciting a riot; or a burglary or theft during a riot;
> ix. Escape; tampering or retaliating against a witness, victim, or informant; destruction of evidence; or tampering with a jury;
> x. Any offense committed for the purpose of benefitting, promoting, or furthering the interests of a criminal gang;
> xi. Trafficking in a controlled substance, including conspiracy to engage in trafficking in a controlled substance;
> xiii. Racketeering; or
> xiv. Failure to appear at required court proceedings while on bail.
> Additionally, Florida Rule of Criminal Procedure 3.132(a) prohibits a person arrested for a dangerous crime listed in Florida Statutes section 907.041 from being released from jail prior to his or her first appearance.
> Furthermore, Florida Statutes section 907.041(6)(b) prohibits an unauthorized alien who is arrested for committing a forcible felony from being released until he or she appears for a first appearance hearing.
> In accordance with Florida Statutes section 903.047(1)(a) and Florida Rule of Criminal Procedure 3.131(a), an arrested person released from jail before trial must refrain from criminal activity of any kind and must refrain from any contact of any type with the victim, except through pretrial discovery in accordance with the Florida Rules of Criminal Procedure. A violation of either of these conditions of pretrial release subjects the arrestee to revocation of bond.
> Each crime of arrest requires a separate bond in accordance with Florida Statutes section 903.02(4) and Florida Rule of Criminal Procedure 3.131(b)(2).
> 3. Warrants
> Bail for persons arrested on a violation of probation warrant or a failure to appear warrant will be set in the amount provided for in the warrant itself. If the violation of probation warrant or failure to appear warrant is silent as to a bail bond amount, then there will be no bond, pending the arrested person's next appearance before the judge assigned to handle the violation of probation or failure to appear matter. Bail for arrest warrants will be set in the amount provided for in the warrant itself. If the arrest warrant is silent as to a bail bond amount, then the bail bond will be set in accordance with the provisions of this administrative order.
> 4. Schedule
> The bond schedule below is effective from January 1, 2026, through December 31, 2026.
> | CRIME FOR WHICH PERSON IS ARRESTED | BOND AMOUNT |
> | Third degree felony that involves any amount of force or threat of force against a person. | $5,000 |
> | Third degree felony that does not involve any force or threat of force against a person. | $2,500 |
> | First degree misdemeanor or an ordinance punishable like a first degree misdemeanor that involves any amount of force or threat of force against a person. | $1,000 |
> | First degree misdemeanor or an ordinance punishable like a first degree misdemeanor that does not involve any amount of force or threat of force against a person. | $500 |
> | Second degree misdemeanor or an ordinance punishable like a second degree misdemeanor that involves any amount of force or threat of force against a person. | $250 |
> | Second degree misdemeanor or an ordinance punishable like a second degree misdemeanor that does not involve any amount of force or threat of force against a person. | $150 |
> | Driving under the influence or boating under the influence - first degree misdemeanor offenses | $1,000 |
> | Driving under the influence or boating under the influence - second offense, second degree misdemeanor offenses | $750 |
> | Driving under the influence or boating under the influence - first offense, second degree misdemeanor offenses | $500 |
> 5. Previous Administrative Order Superseded
> This administrative order supersedes Administrative Order S-2024-083 (Statewide Uniform Bond Schedule).
> 6. Effective Date
> This administrative order is effective January 1, 2026, through December 31, 2026.
> ENTERED on December 29, 2025. Christopher C. Sabella, Chief Judge

READ-WHOLE: 18 U.S.C. 3553(a)
https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section3553&num=0&edition=prelim

Recorded whole for subsection (a), the sentencing factors: the chapeau, paragraphs (1) through (7), and every subparagraph beneath them, being (2)(A) through (2)(D), (4)(A) and (4)(B), (4)(A)(i) and (ii), and (5)(A) and (5)(B). Eighteen subdivisions, one blockquote line each.

WHY THIS RECORD EXISTS SEPARATELY FROM THE 3553(f) RECORD ABOVE. The safety-valve record near line 1038 covers subsection (f) only and says so. Subsection (a) was read whole for the audited tables but its text never entered this project's quotable record, so the federal-case-timeline guide named the provision and stopped rather than describing the factors from a reading nobody could check. This closes that marker and supersedes nothing: the (f) record stands.

Fetched 2026-08-24 with curl from the Office of the Law Revision Counsel prelim edition; page carries "Text contains those laws in effect on August 23, 2026". Method: curl -sL to 3553.html (193,379 bytes), local tag strip and HTML unescape to 3553.txt (28,845 bytes), subsection (a) cut at the "(b) Application of Guidelines" boundary and emitted programmatically rather than retyped. Independently re-verified the same day against law.cornell.edu: five sentence-level spans drawn from the chapeau, (1), (2)(B), (6) and (7) are each contained in the second publisher's copy.

ON THE TRAILING "1" IN (5)(B). It is a footnote reference in the source, not part of the statute. The OLRC footnote reads: "So in original. The period probably should be a semicolon." It is preserved in the quote below because this record is verbatim, and it is explained here so no page reproduces it as text or silently edits it away.

NOT RECORDED HERE: subsections (b) through (e) and (g) through (i) of 3553. This record is subsection (a) whole and makes no claim about the rest of the section.

> (a) Factors To Be Considered in Imposing a Sentence.-The court shall impose a sentence sufficient, but not greater than necessary, to comply with the purposes set forth in paragraph (2) of this subsection. The court, in determining the particular sentence to be imposed, shall consider-
> (1) the nature and circumstances of the offense and the history and characteristics of the defendant;
> (2) the need for the sentence imposed-
> (A) to reflect the seriousness of the offense, to promote respect for the law, and to provide just punishment for the offense;
> (B) to afford adequate deterrence to criminal conduct;
> (C) to protect the public from further crimes of the defendant; and
> (D) to provide the defendant with needed educational or vocational training, medical care, or other correctional treatment in the most effective manner;
> (3) the kinds of sentences available;
> (4) the kinds of sentence and the sentencing range established for-
> (A) the applicable category of offense committed by the applicable category of defendant as set forth in the guidelines-
> (i) issued by the Sentencing Commission pursuant to section 994(a)(1) of title 28, United States Code, subject to any amendments made to such guidelines by act of Congress (regardless of whether such amendments have yet to be incorporated by the Sentencing Commission into amendments issued under section 994(p) of title 28); and
> (ii) that, except as provided in section 3742(g), are in effect on the date the defendant is sentenced; or
> (B) in the case of a violation of probation or supervised release, the applicable guidelines or policy statements issued by the Sentencing Commission pursuant to section 994(a)(3) of title 28, United States Code, taking into account any amendments made to such guidelines or policy statements by act of Congress (regardless of whether such amendments have yet to be incorporated by the Sentencing Commission into amendments issued under section 994(p) of title 28);
> (5) any pertinent policy statement-
> (A) issued by the Sentencing Commission pursuant to section 994(a)(2) of title 28, United States Code, subject to any amendments made to such policy statement by act of Congress (regardless of whether such amendments have yet to be incorporated by the Sentencing Commission into amendments issued under section 994(p) of title 28); and
> (B) that, except as provided in section 3742(g), is in effect on the date the defendant is sentenced.1
> (6) the need to avoid unwarranted sentence disparities among defendants with similar records who have been found guilty of similar conduct; and
> (7) the need to provide restitution to any victims of the offense.

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

---

## 2026-08-20: the release-decision core (guide 1 [NEEDS] item 1)

Rules 3.131 and 3.132 whole from the Florida Bar's current Criminal Procedure
Rules compilation (the 2026_01-JUL edition dated 7-13-2026, the same official
compilation every Florida rule record in this file uses), fetched with a
browser user agent and extracted locally with pdftotext -layout; committee
notes excluded; line-break hyphenation joined. F.S. 903.046 whole from
flsenate.gov (2025 Florida Statutes). Both rules run (a) through (m) in this
compilation; anyone carrying an older mental model of a shorter 3.132 should
read the (f) custody provisions below, which is exactly why the project rule
is fetch, never recall.

VERIFICATION PATHS, per provision. F.S. 903.046 was independently re-verified
against Online Sunshine (leg.state.fl.us), a second publication system: all 24
sentence-level spans contained. For the two rules, an external second
publisher was attempted and is unavailable (law.justia.com 403s automated
fetches, casetext returns 410, Cornell does not host Florida rules); Rule
3.131(a) is corroborated instead by two prior INDEPENDENT fetches already in
this repository (the sexual battery page records of 2026-08-14, written by
different agents from their own fetches), which agree clause for clause,
including the entitlement sentence and the no-conditions detention sentence.
The remainder of 3.131 and all of 3.132 rest on the official compilation
alone, and this paragraph is the record of that limit.

Shape per HUNT-LIST Instance 13: one blockquote per logical paragraph, a
per-subdivision header binding every subdivision cite to its own quote
(nested list items (i) through (x) under 3.131(c)(1)(C) are bound to
(c)(1)(C), their parent), and the shape verified by planting a truncated span
the G3 detector must catch through these records before anything relied on
them.

**Fla. R. Crim. P. 3.131, whole rule, (a) through (m)**  
READ-WHOLE: Fla. R. Crim. P. 3.131
SINGLE-SOURCE: Fla. R. Crim. P. 3.131 (official compilation only; every external second publisher unavailable at record time; see the verification-paths paragraph of this section)
https://www-media.floridabar.org/uploads/2026/08/2026_01-JUL-Criminal-Procedure-Rules-7-13-2026-2.pdf

**Rule 3.131(a):**
> (a) Right to Pretrial Release. Unless charged with a capital offense or an offense punishable by life imprisonment and the proof of guilt is evident or the presumption is great, every person charged with a crime or violation of municipal or county ordinance is entitled to pretrial release on reasonable conditions. As a condition of pretrial release, whether such release is by surety bail bond or recognizance bond or in some other form, the defendant must refrain from any contact of any type with the victim, except through pretrial discovery under the Florida Rules of Criminal Procedure and must comply with all conditions of pretrial release as ordered by the court. On motion by the defendant when bail is set, or on later motion properly noticed under law, the court may modify the condition precluding victim contact if good cause is shown and the interests of justice so require. The victim is permitted to be heard at any proceeding in which such modification is considered, and the state attorney must notify the victim of the provisions of this subdivision and of the pendency of any such proceeding. If no conditions of release can reasonably protect the community from risk of physical harm to persons, assure the presence of the accused at trial, or assure the integrity of the judicial process, the accused may be detained.

**Rule 3.131(b):**
> (b)   Pretrial Release Before First Appearance.

**Rule 3.131(b)(1):**
> (1) A person may be released on bail before his or her first appearance or bail determination hearing under a local bond schedule established by the chief judge of the circuit or by the uniform bond schedule adopted by the Supreme Court in accordance with subsection 903.011(5), Florida Statutes, if no local bond schedule has been established, or as ordered by the issuing judge on an arrest warrant, if applicable.

**Rule 3.131(b)(2):**
> (2) A person may not be released on bail before his or her first appearance or bail determination hearing if the person meets the criteria set forth in subsection 903.011(6), Florida Statutes.

**Rule 3.131(c):**
> (c)   Hearing at First Appearance—Conditions of Release.

**Rule 3.131(c)(1):**
> (1) Unless the state has filed a motion for pretrial detention under rule 3.132, the court must conduct a hearing to determine pretrial release. For the purpose of this rule, bail is defined as any of the forms of release stated below. Except as otherwise provided by this rule, there is a presumption in favor of release on nonmonetary conditions for any person who is granted pretrial release. The judicial officer must impose the first of the following conditions of release that will reasonably protect the community from risk of physical harm to persons, assure the presence of the accused at trial, or assure the integrity of the judicial process; or, if no single condition gives that assurance, must impose any combination of the following conditions:

**Rule 3.131(c)(1)(A):**
> (A)   personal recognizance of the defendant;

**Rule 3.131(c)(1)(B):**
> (B) execution of an unsecured appearance bond in an amount specified by the judge;

**Rule 3.131(c)(1)(C):**
> (C) release on nonmonetary conditions, which may, if appropriate, include being required to:

**Rule 3.131(c)(1)(C):**
> (i)   maintain employment, or, if unemployed, actively seek employment; (ii)   maintain or commence an educational program; (iii) abide by specified restrictions on personal associations, place of residence, or travel; (iv) report on a regular basis to a designated law enforcement agency, pretrial services agency, or other agency;

**Rule 3.131(c)(1)(C):**
> (v)    comply with a specified curfew; (vi) refrain from possessing a firearm, destructive device, or other dangerous weapon; (vii) refrain from excessive use of alcohol, or any use of a narcotic drug or other controlled substance without a prescription from a licensed medical practitioner; (viii) undergo available medical, psychological, psychiatric, mental health, or substance abuse evaluation and follow all recommendations, including treatment for drug or alcohol dependency, and remain in a specified institution, if required for that purpose; (ix) return to custody for specified hours following release for employment, school, or other limited purposes; or

**Rule 3.131(c)(1)(C):**
> (x) any other condition that is reasonably necessary to assure the appearance of the defendant at subsequent proceedings and to protect the community against unreasonable danger of harm; or

**Rule 3.131(c)(1)(D):**
> (D) execution of a bail bond with sufficient solvent sureties, or the deposit of cash; provided, however, that any criminal defendant who is required to meet monetary bail or bail with any monetary component may satisfy the bail by providing an appearance bond.

**Rule 3.131(c)(2):**
> (2) The judge must at the defendant’s first appearance, consider all available relevant factors to determine what form of release is necessary to assure the defendant’s appearance. If a monetary bail is required, the judge must determine the amount. A judge conducting a first appearance hearing or bail determination is not bound by a bond schedule authorized by subsection 903.011(5), Florida Statutes. Any judge setting or granting monetary bond must set a separate and specific bail amount for each crime charged. When bail is posted each crime charged requires a separate bond.

**Rule 3.131(c)(3):**
> (3) In determining whether to release a defendant on bail or other conditions, and what that bail or those conditions may be, the court must consider the nature and circumstances of the offense charged and the penalty provided by law; the weight of the evidence against the defendant; the defendant’s family ties, length of residence in the community, employment history, financial resources, need for substance abuse evaluation or treatment, and mental condition; the defendant’s past and present conduct, including any record of convictions, previous flight to avoid prosecution, or failure to appear at court proceedings; the nature and probability of danger that the defendant’s release poses to the community; the source of funds used to post bail; whether the defendant is already on release pending resolution of another criminal proceeding or is on probation, community control, parole, or other release pending completion of sentence; and any other facts the court considers relevant.

**Rule 3.131(c)(4):**
> (4) All information provided by a defendant in connection with any application for or attempt to secure bail, to any court, court personnel, or individual soliciting or recording such information for the purpose of evaluating eligibility for or securing bail for the defendant, under circumstances such that the defendant knew or should have known that the information was to be used in connection with an application for bail, must be accurate, truthful, and complete, without omissions, to the best knowledge of the defendant. Failure to comply with the provisions of this subdivision may result in the revocation or modification of bail. However, no defendant may be compelled to provide information regarding his or her criminal record.

**Rule 3.131(c)(5):**
> (5) Information stated in, or offered in connection with, any order entered under this rule need not strictly conform to the rules of evidence.

**Rule 3.131(d):**
> (d)   Consequences of Failure to Appear.

**Rule 3.131(d)(1):**
> (1) Any defendant who willfully and knowingly fails to appear and breaches a bond as specified in section 903.26, Florida Statutes, and who voluntarily appears or surrenders is not eligible for a recognizance bond.

**Rule 3.131(d)(2):**
> (2) Any defendant who willfully and knowingly fails to appear and breaches a bond as specified in section 903.26, Florida Statutes, and who is arrested at any time following forfeiture is not eligible for a recognizance bond or any form of bond that does not require a monetary undertaking or commitment equal to or greater than $2,000 or twice the value of the monetary commitment or undertaking of the original bond, whichever is greater.

**Rule 3.131(e):**
> (e)   Subsequent Application for Setting or Modification of Bail.

**Rule 3.131(e)(1):**
> (1) When a judicial officer not possessing trial jurisdiction orders a defendant held to answer before a court having jurisdiction to try the defendant, and bail has been denied or sought to be modified, application by motion may be made to the court having jurisdiction to try the defendant or, in the absence of the judge of the trial court, to the circuit court. The motion must be determined promptly. No judge of a court of equal or inferior jurisdiction may remove a condition of bail or reduce the amount of bond required, unless the judge:

**Rule 3.131(e)(1)(A):**
> (A) imposed the conditions of bail or set the amount of bond required;

**Rule 3.131(e)(1)(B):**
> (B) is the chief judge of the circuit in which the defendant is to be tried;

**Rule 3.131(e)(1)(C):**
> (C) has been assigned to preside over the criminal trial of the defendant; or

**Rule 3.131(e)(1)(D):**
> (D) is the first appearance judge and was authorized by the judge initially setting or denying bail to modify or set conditions of release.

**Rule 3.131(e)(2):**
> (2) Applications by the defendant for modification of bail on any felony charge must be heard by a court in person at a hearing, with the defendant present and with at least 3 hours’ notice to the state attorney and county attorney, if bond forfeiture proceedings are handled by the county attorney. The state may apply for modification of bail by showing good cause and with at least 3 hours’ notice to the attorney for the defendant.

**Rule 3.131(e)(3):**
> (3) On motion by the defendant, or on the court’s own motion, a court may reconsider the monetary component of the defendant’s bail if he or she is unable to post a monetary bond.

**Rule 3.131(e)(4):**
> (4) If any trial court fixes bail and refuses its reduction before trial, the defendant may institute habeas corpus proceedings seeking reduction of bail. If application is made to the supreme court or district court of appeal, notice and a copy of such application must be given to the attorney general and the state attorney. Such proceedings must be determined promptly.

**Rule 3.131(f):**
> (f)   Bail Before Conviction; Condition of Undertaking.

**Rule 3.131(f)(1):**
> (1) If a person is admitted to bail for appearance for a preliminary hearing or on a charge that a judge is empowered to try, the condition of the undertaking must be that the person will appear for the hearing or to answer the charge and will submit to the orders and process of the judge trying the same and will not depart without leave.

**Rule 3.131(f)(2):**
> (2) If a person is admitted to bail after being held to answer by a judge or after an indictment or information on which the person is to be tried has been filed, the condition of the undertaking must be that the person will appear to answer the charges before the court in which the person may be prosecuted and submit to the orders and process of the court and will not depart without leave.

**Rule 3.131(g):**
> (g)   Revocation of Pretrial Release.

**Rule 3.131(g)(1):**
> (1) Any judge presiding at a first appearance hearing may revoke a defendant’s pretrial release status under section 903.0471, Florida Statutes, on a case not assigned to the first appearance judge but that is pending in the same judicial circuit as the first appearance hearing.

**Rule 3.131(g)(2):**
> (2) The court must revoke pretrial release for a person who commits a violation of section 843.23, Florida Statutes, while the person is on pretrial release.

**Rule 3.131(g)(3):**
> (3) The court in its discretion for good cause, any time after a defendant who is at large on bail appears for trial, may commit the defendant to the custody of the proper official to abide by the judgment, sentence, and any further order of the court.

**Rule 3.131(h):**
> (h) Arrest and Commitment by Court. The court in which the cause is pending may direct the arrest and commitment of the defendant who is at large on bail when:

**Rule 3.131(h)(1):**
> (1)   there has been a breach of the undertaking;

**Rule 3.131(h)(2):**
> (2) it appears that the defendant’s sureties or any of them are dead or cannot be found or are insufficient or have ceased to be residents of the state; or

**Rule 3.131(h)(3):**
> (3) the court is satisfied that the bail should be increased or new or additional security required. The order for the commitment of the defendant must recite generally the facts on which it is based and must direct that the defendant be arrested by any official authorized to make arrests and that the defendant be committed to the official in whose custody the defendant would be if the defendant had not been given bail, to be detained by such official until legally discharged. The defendant must be arrested under such order on a certified copy thereof, in any county, in the same manner as on a warrant of arrest. If the order provided for is made because of the failure of the defendant to appear for judgment, the defendant must be committed. If the order is made for any other cause, the court may determine the conditions of release, if any.

**Rule 3.131(i):**
> (i)  Bail after Recommitment. If the defendant applies to be admitted to bail after recommitment, the court that recommitted the defendant or the court under subdivision (e)(1) must determine conditions of release, if any, subject to the limitations of subdivision (c).

**Rule 3.131(j):**
> (j)  Qualifications of Surety after Order of Recommitment. If the defendant offers bail after recommitment, each surety must possess the qualifications and sufficiency and the bail must be furnished in all respects in the manner prescribed for admission to bail before recommitment.

**Rule 3.131(k):**
> (k) Issuance of Capias; Bail Specified. On the filing of either an indictment or information charging the commission of a crime, if the person named therein is not in custody or at large on bail for the offense charged, the judge must issue or direct the clerk to issue, either immediately or when so directed by the prosecuting attorney, a capias for the arrest of the person. If the person named in the indictment or information is a child and the child has been served with a promise to appear under the Florida Rules of Juvenile Procedure, capias need not be issued. On the filing of the indictment or information, the judge must endorse the amount of bail, if any, and may authorize the setting or modification of bail by the judge presiding over the defendant’s first appearance hearing. This endorsement must be made on the capias and signed by the judge.

**Rule 3.131(l):**
> (l)  Summons on Misdemeanor Charge. When a complaint is filed charging the commission of a misdemeanor only and the judge deems that process should issue as a result, or when an indictment or information on which the defendant is to be tried charging the commission of a misdemeanor only, and the person named in it is not in custody or at large on bail for the offense charged, the judge must direct the clerk to issue a summons instead of a capias unless the judge has reasonable ground to believe that the person will not appear in response to a summons, in which event an arrest warrant or a capias must be issued with the amount of bail endorsed on it. The summons must state substantially the nature of the offense, the title of the hearing to be conducted, and must command the person against whom the complaint was made to appear before the judge issuing the summons or the judge having jurisdiction of the offense at a time and place stated in it.

**Rule 3.131(m):**
> (m) Summons When Defendant Is Corporation. On the filing of an indictment or information or complaint charging a corporation with the commission of a crime, whether felony or misdemeanor, the judge must direct the clerk to issue or must issue a summons to secure its appearance to answer the charge. If, after being summoned, the corporation does not appear, a plea of not guilty must be entered and trial and judgment must follow without further process.

**Fla. R. Crim. P. 3.132, whole rule, (a) through (m)**  
READ-WHOLE: Fla. R. Crim. P. 3.132
SINGLE-SOURCE: Fla. R. Crim. P. 3.132 (official compilation only; every external second publisher unavailable at record time; see the verification-paths paragraph of this section)
https://www-media.floridabar.org/uploads/2026/08/2026_01-JUL-Criminal-Procedure-Rules-7-13-2026-2.pdf

**Rule 3.132(a):**
> (a) First Appearance Required. A person arrested for a dangerous crime listed in section 907.041, Florida Statutes, or an unauthorized alien arrested for a forcible felony, must not be released from jail before his or her first appearance.

**Rule 3.132(b):**
> (b) Contents of Motion. A motion for pretrial detention must be in writing and must set forth with particularity the grounds and the essential facts on which it is based.

**Rule 3.132(c):**
> (c) Time for Motion. A motion for pretrial detention may be filed any time before trial.

**Rule 3.132(d):**
> (d) Time for Hearing. If a judge determines there is probable cause to believe the defendant committed a capital felony, a life felony, or a first degree felony, listed as a dangerous crime in section 907.041, Florida Statutes, a pretrial detention hearing must be held within 5 days after first appearance, or, if there is no first appearance, within 5 days after arraignment. Otherwise, the hearing must be held within 5 days after the filing of a motion for pretrial detention.

**Rule 3.132(e):**
> (e) Continuances. Either the state or the defendant may seek a continuance. The state must show good cause for a continuance. A continuance may not exceed 5 days unless the court finds that extenuating circumstances justify any further delay, or upon agreement of the parties with approval of the court. The state may not be granted more than one continuance.

**Rule 3.132(f):**
> (f)   Custody; Release Conditions.

**Rule 3.132(f)(1):**
> (1) Dangerous Crime. At first appearance, a judge must not grant nonmonetary pretrial release if there is probable cause to believe the defendant committed a dangerous crime listed in section 907.041, Florida Statutes. After first appearance and after a finding of probable cause, a person arrested for a dangerous crime listed in section 907.041, Florida Statutes, may not be released on nonmonetary conditions under the supervision of a pretrial release service unless the service certifies to the court that it has investigated or otherwise verified the conditions set forth in section 907.041(3)(b), Florida Statutes.

**Rule 3.132(f)(2):**
> (2) Unauthorized Aliens. If, at the first appearance hearing, the court determines there is probable cause to believe the defendant committed a forcible felony and further determines by a preponderance of the evidence that the defendant is an unauthorized alien, the court must presume that the defendant presents a substantial flight risk and that no conditions of release will ensure his or her appearance at trial and must order pretrial detention. The defendant may rebut the presumption by demonstrating, by a preponderance of the evidence, that appropriate conditions of release will ensure his or her appearance at trial. If the court determines the defendant has rebutted the presumption, it must consider the criteria in section 903.046, Florida Statutes, and any other relevant facts, to determine whether to release the defendant on bail or other conditions.

**Rule 3.132(f)(3):**
> (3) Pretrial Detention Motion Filed at First Appearance. The defendant may be held in custody pending the completion of a detention hearing if there is probable cause for the arrest and if the state filed a motion for pretrial detention at first appearance.

**Rule 3.132(f)(4):**
> (4) State Announces at First Appearance its Intent to Move for Pretrial Detention. If there is probable cause for the arrest, a defendant may be held in jail for up to 4 days if the state informs the judge at first appearance that it intends to file a motion for pretrial detention under section 907.041, Florida Statutes. If the state does not file a motion for pretrial detention within the 4 days, a judge must determine conditions of release or continued detention under rule 3.131.

**Rule 3.132(f)(5):**
> (5) State Does Not Announce Intent to Move for Pretrial Detention at First Appearance. If there is probable cause for the arrest and if the state does not inform the judge at first appearance that it intends to file a motion for pretrial detention under section 907.041, Florida Statutes, the judge must determine conditions of release or continued detention under rule 3.131.

**Rule 3.132(f)(6):**
> (6) Pretrial Detention Motion Filed After First Appearance. If the state filed a motion for pretrial detention after first appearance and if there is probable cause to believe the defendant committed the crime for which pretrial detention is sought, the defendant may be held in custody pending the completion of the detention hearing, or the judge may issue either an order to appear or a warrant. The defendant may be held in custody pending the completion of the detention hearing if he or she were arrested on a warrant issued under this subdivision. For a defendant out of custody, if the state is pursuing pretrial detention under section 907.041, Florida Statutes, the state does not need to show good cause as required by rule 3.131(d).

**Rule 3.132(f)(7):**
> (7) Bail Pending Hearing. If a defendant is released on bail for a dangerous crime that is a capital felony, a life felony, or a first degree felony pending the completion of a detention hearing, the court must inform the defendant that if a surety bond is used to satisfy the monetary component of pretrial release and the motion for pretrial detention is subsequently granted, the defendant will not be entitled to return of the premium on the surety bond.

**Rule 3.132(g):**
> (g) Jurisdiction. A motion for pretrial detention must be heard by a judge with jurisdiction to conduct the defendant’s trial.

**Rule 3.132(h):**
> (h) Rights at Hearing. The defendant is entitled to representation by counsel, to present witnesses and evidence, and to cross-examine witnesses who testify at the detention hearing. No testimony by the defendant is admissible to prove guilt at any other judicial proceeding, but such testimony may be admitted in an action for perjury, based upon the defendant’s statements made at the detention hearing, or for impeachment.

**Rule 3.132(i):**
> (i)   Evidence. Evidence secured in violation of the United States Constitution or the Constitution of the State of Florida is inadmissible. The rules concerning admissibility of evidence in criminal trials do not apply to the presentation and consideration of information at the hearing.

**Rule 3.132(j):**
> (j)  Communication Technology. A judge may allow testimony using communication technology upon a showing of good cause. Oaths must be administered in accordance with Florida Rule of General Practice and Judicial Administration 2.530.

**Rule 3.132(k):**
> (k) Burden of Proof. The state bears the burden of proving the need for pretrial detention under the substantial probability standard in section 907.041, Florida Statutes.

**Rule 3.132(l):**
> (l)   Order.

**Rule 3.132(l)(1):**
> (1) Hearing Required. An order granting or denying pretrial detention must be issued after a hearing.

**Rule 3.132(l)(2):**
> (2) Findings. The order may be based solely on hearsay but must be based solely upon evidence introduced at the hearing and must be supported by findings of fact and conclusions of law. The order must be made either in writing or orally on the record within 24 hours of the conclusion of the hearing.

**Rule 3.132(l)(3):**
> (3) Mandatory Detention Order. The judge must order pretrial detention if the judge finds a substantial probability the defendant committed a capital felony, a life felony, or a first degree felony, listed as a dangerous crime in section 907.041, Florida Statutes, and based on the defendant’s past and present patterns of behavior, consideration of the criteria in section 903.046, Florida Statutes, and any other relevant facts, that no conditions of release or bail will reasonably protect the community from risk of physical harm, ensure the presence of the defendant at trial, or assure the integrity of the judicial process.

**Rule 3.132(m):**
> (m) Reconsideration. Either party may move for the order granting or denying pretrial detention to be reconsidered any time before trial if the judge finds that information exists that was not known to the party moving for reconsideration at the time of the hearing and that such information has a material bearing on determining whether there are conditions of release or bail that will reasonably assure the appearance of the defendant as required and the safety of any other person and the community from harm. The defendant is entitled to dissolution of a pretrial detention order if the court finds that a subsequent event eliminated the basis for detention. Criminal Court Steering Committee Note 2025 Amendment. Rule 3.132 was substantially revised to reflect chapters 2023-27 and 2024-157, Laws of Florida. Rule 3.132 applies to pretrial detention under section 907.041, Florida Statutes. An example of an extenuating circumstance under rule 3.132(e) is the pretrial confinement of the defendant on other pending charges, or his or her lawful confinement on another basis.

**F.S. 903.046, whole section, (1) and (2)(a) through (2)(m)**  
READ-WHOLE: F.S. 903.046
https://www.flsenate.gov/Laws/Statutes/2025/903.046

**F.S. 903.046, catchline:** Purpose of and criteria for bail determination.

**903.046(1):**
> (1) The purpose of a bail determination in criminal proceedings is to ensure the appearance of the criminal defendant at subsequent proceedings and to protect the community against unreasonable danger from the criminal defendant.

**903.046(2):**
> (2) When determining whether to release a defendant on bail or other conditions, and what that bail or those conditions may be, the court shall consider:

**903.046(2)(a):**
> (a) The nature and circumstances of the offense charged.

**903.046(2)(b):**
> (b) The weight of the evidence against the defendant.

**903.046(2)(c):**
> (c) The defendant’s family ties, length of residence in the community, immigration status, employment history, financial resources, and mental condition.

**903.046(2)(d):**
> (d) The defendant’s past and present conduct, including any record of convictions, previous flight to avoid prosecution, or failure to appear at court proceedings. However, any defendant who had failed to appear on the day of any required court proceeding in the case at issue, but who had later voluntarily appeared or surrendered, shall not be eligible for a recognizance bond; and any defendant who failed to appear on the day of any required court proceeding in the case at issue and who was later arrested shall not be eligible for a recognizance bond or for any form of bond which does not require a monetary undertaking or commitment equal to or greater than $2,000 or twice the value of the monetary commitment or undertaking of the original bond, whichever is greater. Notwithstanding anything in this section, the court has discretion in determining conditions of release if the defendant proves circumstances beyond his or her control for the failure to appear. This section may not be construed as imposing additional duties or obligations on a governmental entity related to monetary bonds.

**903.046(2)(e):**
> (e) The nature and probability of danger which the defendant’s release poses to the community.

**903.046(2)(f):**
> (f) The source of funds used to post bail or procure an appearance bond, particularly whether the proffered funds, real property, property, or any proposed collateral or bond premium may be linked to or derived from the crime alleged to have been committed or from any other criminal or illicit activities. The burden of establishing the noninvolvement in or nonderivation from criminal or other illicit activity of such proffered funds, real property, property, or any proposed collateral or bond premium falls upon the defendant or other person proffering them to obtain the defendant’s release.

**903.046(2)(g):**
> (g) Whether the defendant is already on release pending resolution of another criminal proceeding or on probation, parole, or other release pending completion of a sentence.

**903.046(2)(h):**
> (h) The street value of any drug or controlled substance connected to or involved in the criminal charge. It is the finding and intent of the Legislature that crimes involving drugs and other controlled substances are of serious social concern, that the flight of defendants to avoid prosecution is of similar serious social concern, and that frequently such defendants are able to post monetary bail using the proceeds of their unlawful enterprises to defeat the social utility of pretrial bail. Therefore, the courts should carefully consider the utility and necessity of substantial bail in relation to the street value of the drugs or controlled substances involved.

**903.046(2)(i):**
> (i) The nature and probability of intimidation and danger to victims.

**903.046(2)(j):**
> (j) Whether there is probable cause to believe that the defendant committed a new crime while on pretrial release.

**903.046(2)(k):**
> (k) Any other facts that the court considers relevant.

**903.046(2)(l):**
> (l) Whether the crime charged is a violation of chapter 874 or alleged to be subject to enhanced punishment under chapter 874 or reclassification under s. 843.22. If any such violation is charged against a defendant or if the defendant is charged with a crime that is alleged to be subject to such enhancement or reclassification, he or she is not eligible for release on bail or surety bond until the first appearance on the case in order to ensure the full participation of the prosecutor and the protection of the public.

**903.046(2)(m):**
> (m) Whether the defendant, other than a defendant whose only criminal charge is a misdemeanor offense under chapter 316, is required to register as a sexual offender under s. 943.0435 or a sexual predator under s. 775.21; and, if so, he or she is not eligible for release on bail or surety bond until the first appearance on the case in order to ensure the full participation of the prosecutor and the protection of the public.

**F.S. 907.041, whole section, (1) through (6)(d)**
READ-WHOLE: F.S. 907.041
https://www.flsenate.gov/Laws/Statutes/2025/907.041

Fetched 2026-08-20 from flsenate.gov (2025 Florida Statutes), independently
re-verified against Online Sunshine (leg.state.fl.us): all 87 sentence-level
spans contained. Catchline: "Procedure after arrest". Recorded because Rule
3.132(k), quoted on the after-an-arrest guide, names this section's
substantial probability standard, and a page must not point at a standard it
cannot state. The (5)(a) dangerous-crime list runs 1. through 26. and is
recorded whole below.

**907.041(1):**
> (1) LEGISLATIVE INTENT. — It is the policy of this state that persons committing serious criminal offenses, posing a threat to the safety of the community or the integrity of the judicial process, failing to appear at trial, or posing a substantial flight risk because of their status as unauthorized aliens be detained upon arrest. However, persons found to meet specified criteria shall be released under certain conditions until proceedings are concluded and adjudication has been determined. The Legislature finds that this policy of pretrial detention and release will assure the detention of those persons posing a threat to society while reducing the costs for incarceration by releasing, until trial, those persons not considered a danger to the community who meet certain criteria. It is the intent of the Legislature that the primary consideration be the protection of the community from risk of physical harm to persons.

**907.041(2):**
> (2) RULES OF PROCEDURE. — Procedures for pretrial release determinations shall be governed by rules adopted by the Supreme Court.

**907.041(3):**
> (3) RELEASE ON NONMONETARY CONDITIONS. —

**907.041(3)(a):**
> (a) It is the intent of the Legislature to create a presumption in favor of release on nonmonetary conditions for any person who is granted pretrial release unless such person is charged with a dangerous crime as defined in subsection (5) or such person is an unauthorized alien charged with a forcible felony as described in subsection (6). A person charged with a dangerous crime as defined in subsection (5) shall be released on monetary conditions if it is determined that such monetary conditions are necessary to assure the presence of the person at trial or at other proceedings, to protect the community from risk of physical harm to persons, to assure the presence of the accused at trial, or to assure the integrity of the judicial process.

**907.041(3)(b):**
> (b) No person shall be released on nonmonetary conditions under the supervision of a pretrial release service, unless the service certifies to the court that it has investigated or otherwise verified:

**907.041(3)(b)1.:**
> 1. The circumstances of the accused’s family, employment, financial resources, character, mental condition, immigration status, and length of residence in the community;

**907.041(3)(b)2.:**
> 2. The accused’s record of convictions, of appearances at court proceedings, of flight to avoid prosecution, or of failure to appear at court proceedings; and

**907.041(3)(b)3.:**
> 3. Other facts necessary to assist the court in its determination of the indigency of the accused and whether she or he should be released under the supervision of the service.

**907.041(4):**
> (4) SPECIAL CONDITIONS FOR CERTAIN OFFENSES INVOLVING SCHOOLS OR STUDENTS. —

**907.041(4)(a):**
> (a) As used in this subsection, the term “school” means the grounds or facility of any early learning, prekindergarten, kindergarten, elementary school, middle school, junior high school, secondary school, career center, or postsecondary school, whether public or private.

**907.041(4)(b):**
> (b) When a person is charged with a crime under s. 790.115 , s. 790.161 , s. 790.1615 , s. 790.162 , s. 790.163 , s. 790.164 , s. 790.165 , s. 790.166 , s. 810.095 , or s. 836.10 , alleged to have been committed at or against a school or against a student while he or she is at school, the court must consider whether conditions of electronic monitoring and a prohibition from being within 1,000 feet of any school are appropriate to protect the community from risk of physical harm to persons.

**907.041(5):**
> (5) PRETRIAL DETENTION. —

**907.041(5)(a):**
> (a) As used in this subsection, “dangerous crime” means any of the following:

**907.041(5)(a)1.:**
> 1. Arson;

**907.041(5)(a)2.:**
> 2. Aggravated assault;

**907.041(5)(a)3.:**
> 3. Aggravated battery;

**907.041(5)(a)4.:**
> 4. Illegal use of explosives;

**907.041(5)(a)5.:**
> 5. Child abuse or aggravated child abuse;

**907.041(5)(a)6.:**
> 6. Abuse of an elderly person or disabled adult, or aggravated abuse of an elderly person or disabled adult;

**907.041(5)(a)7.:**
> 7. Aircraft piracy;

**907.041(5)(a)8.:**
> 8. Kidnapping;

**907.041(5)(a)9.:**
> 9. Homicide;

**907.041(5)(a)10.:**
> 10. Manslaughter, including DUI manslaughter and BUI manslaughter;

**907.041(5)(a)11.:**
> 11. Sexual battery;

**907.041(5)(a)12.:**
> 12. Robbery;

**907.041(5)(a)13.:**
> 13. Carjacking;

**907.041(5)(a)14.:**
> 14. Lewd, lascivious, or indecent assault or act upon or in presence of a child under the age of 16 years;

**907.041(5)(a)15.:**
> 15. Sexual activity with a child, who is 12 years of age or older but less than 18 years of age, by or at solicitation of person in familial or custodial authority;

**907.041(5)(a)16.:**
> 16. Burglary of a dwelling;

**907.041(5)(a)17.:**
> 17. Stalking and aggravated stalking;

**907.041(5)(a)18.:**
> 18. Act of domestic violence as defined in s. 741.28 ;

**907.041(5)(a)19.:**
> 19. Home invasion robbery;

**907.041(5)(a)20.:**
> 20. Act of terrorism as defined in s. 775.30 ;

**907.041(5)(a)21.:**
> 21. Manufacturing any substances in violation of chapter 893;

**907.041(5)(a)22.:**
> 22. Attempting or conspiring to commit any such crime;

**907.041(5)(a)23.:**
> 23. Human trafficking;

**907.041(5)(a)24.:**
> 24. Trafficking in any controlled substance described in s. 893.135 (1)(c)4.;

**907.041(5)(a)25.:**
> 25. Extortion in violation of s. 836.05 ; and

**907.041(5)(a)26.:**
> 26. Written threats to kill in violation of s. 836.10 .

**907.041(5)(b):**
> (b) A person arrested for a dangerous crime may not be granted nonmonetary pretrial release at a first appearance hearing if the court has determined there is probable cause to believe the person has committed the offense.

**907.041(5)(c):**
> (c) Upon motion by the state attorney, the court may order pretrial detention if it finds a substantial probability, based on a defendant’s past and present patterns of behavior, the criteria in s. 903.046 , and any other relevant facts, that any of the following circumstances exist:

**907.041(5)(c)1.:**
> 1. The defendant has previously violated conditions of release and that no further conditions of release are reasonably likely to assure the defendant’s appearance at subsequent proceedings;

**907.041(5)(c)2.:**
> 2. The defendant, with the intent to obstruct the judicial process, has threatened, intimidated, or injured any victim, potential witness, juror, or judicial officer, or has attempted or conspired to do so, and that no condition of release will reasonably prevent the obstruction of the judicial process;

**907.041(5)(c)3.:**
> 3. The defendant is charged with trafficking in controlled substances as defined by s. 893.135 , that there is a substantial probability that the defendant has committed the offense, and that no conditions of release will reasonably assure the defendant’s appearance at subsequent criminal proceedings;

**907.041(5)(c)4.:**
> 4. The defendant is charged with DUI manslaughter, as defined by s. 316.193 , and that there is a substantial probability that the defendant committed the crime and that the defendant poses a threat of harm to the community; conditions that would support a finding by the court pursuant to this subparagraph that the defendant poses a threat of harm to the community include, but are not limited to, any of the following: a. The defendant has previously been convicted of any crime under s. 316.193 , or of any crime in any other state or territory of the United States that is substantially similar to any crime under s. 316.193 ; b. The defendant was driving with a suspended driver license when the charged crime was committed; or c. The defendant has previously been found guilty of, or has had adjudication of guilt withheld for, driving while the defendant’s driver license was suspended or revoked in violation of s. 322.34 ;

**907.041(5)(c)5.:**
> 5. The defendant poses the threat of harm to the community. The court may so conclude, if it finds that the defendant is presently charged with a dangerous crime, that there is a substantial probability that the defendant committed such crime, that the factual circumstances of the crime indicate a disregard for the safety of the community, and that there are no conditions of release reasonably sufficient to protect the community from the risk of physical harm to persons;

**907.041(5)(c)6.:**
> 6. The defendant was on probation, parole, or other release pending completion of sentence or on pretrial release for a dangerous crime at the time the current offense was committed;

**907.041(5)(c)7.:**
> 7. The defendant has violated one or more conditions of pretrial release or bond for the offense currently before the court and the violation, in the discretion of the court, supports a finding that no conditions of release can reasonably protect the community from risk of physical harm to persons or assure the presence of the accused at trial; or 8.a. The defendant has ever been sentenced pursuant to s. 775.082 (9) or s. 775.084 as a prison releasee reoffender, habitual violent felony offender, three-time violent felony offender, or violent career criminal, or the state attorney files a notice seeking that the defendant be sentenced pursuant to s. 775.082 (9) or s. 775.084 , as a prison releasee reoffender, habitual violent felony offender, three-time violent felony offender, or violent career criminal; b. There is a substantial probability that the defendant committed the offense; and c. There are no conditions of release that can reasonably protect the community from risk of physical harm or ensure the presence of the accused at trial.

**907.041(5)(d):**
> (d) If a defendant is arrested for a dangerous crime that is a capital felony, a life felony, or a felony of the first degree, and the court determines there is probable cause to believe the defendant committed the offense, the state attorney, or the court on its own motion, shall motion for pretrial detention. If the court finds a substantial probability that the defendant committed the offense and, based on the defendant’s past and present patterns of behavior, consideration of the criteria in s. 903.046 , and any other relevant facts, that no conditions of release or bail will reasonably protect the community from risk of physical harm, ensure the presence of the defendant at trial, or assure the integrity of the judicial process, the court must order pretrial detention.

**907.041(5)(e):**
> (e) When a person charged with a crime for which pretrial detention could be ordered is arrested, the arresting agency shall promptly notify the state attorney of the arrest and shall provide the state attorney with such information as the arresting agency has obtained relative to:

**907.041(5)(e)1.:**
> 1. The nature and circumstances of the offense charged;

**907.041(5)(e)2.:**
> 2. The nature of any physical evidence seized and the contents of any statements obtained from the defendant or any witness;

**907.041(5)(e)3.:**
> 3. The defendant’s family ties, residence, employment, immigration status, financial condition, and mental condition; and

**907.041(5)(e)4.:**
> 4. The defendant’s past conduct and present conduct, including any record of convictions, previous flight to avoid prosecution, or failure to appear at court proceedings.

**907.041(5)(f):**
> (f) When a person charged with a crime for which pretrial detention could be ordered is arrested, the arresting agency may detain such defendant, prior to his or her first appearance hearing or prior to the filing by the state attorney of a motion seeking pretrial detention, for a period not to exceed 24 hours.

**907.041(5)(g)1.:**
> (g)1. If a motion for pretrial detention is required under paragraph (d), the pretrial detention hearing must be held within 5 days after the defendant’s first appearance hearing or, if there is no first appearance hearing, within 5 days after the defendant’s arraignment.

**907.041(5)(g)2.:**
> 2. If a state attorney files a motion for pretrial detention under paragraph (c), the pretrial detention hearing must be held within 5 days after the filing of such motion.

**907.041(5)(g)3.:**
> 3. The defendant may request a continuance of a pretrial detention hearing. No continuance shall be for longer than 5 days unless there are extenuating circumstances. The state attorney shall be entitled to one continuance for good cause.

**907.041(5)(g)4.:**
> 4. The defendant may be detained pending the completion of the pretrial detention hearing. If a defendant is released on bail pending a pretrial detention hearing under paragraph (d), the court must inform the defendant that if he or she uses a surety bond to meet the monetary component of pretrial release and the motion for pretrial detention is subsequently granted, the defendant will not be entitled to the return of the premium on such surety bond.

**907.041(5)(h):**
> (h) The state attorney has the burden of showing the need for pretrial detention.

**907.041(5)(i):**
> (i) The rules concerning admissibility of evidence in criminal trials do not apply to the presentation and consideration of evidence at the detention hearing. The court may base an order of pretrial detention under paragraph (d) solely on hearsay. Evidence secured in violation of the United States Constitution or the Constitution of the State of Florida shall not be admissible.

**907.041(5)(j):**
> (j) The defendant is entitled to be represented by counsel, to present witnesses and evidence, and to cross-examine witnesses. No testimony by the defendant shall be admissible to prove guilt at any other judicial proceeding, but such testimony may be admitted in an action for perjury, based upon the defendant’s statements made at the pretrial detention hearing, or for impeachment.

**907.041(5)(k):**
> (k) A party may motion for a pretrial detention order to be reconsidered at any time before a defendant’s trial if the judge finds that information exists that was not known to the party moving for reconsideration at the time of the pretrial detention hearing and that such information has a material bearing on determining whether there are conditions of release or bail that will reasonably assure the appearance of the defendant as required and the safety of any other person and the community from harm.

**907.041(5)(l):**
> (l) The pretrial detention order of the court shall be based solely upon evidence produced at the hearing and shall contain findings of fact and conclusions of law to support it. The order shall be made either in writing or orally on the record. The court shall render its findings within 24 hours of the pretrial detention hearing.

**907.041(5)(m):**
> (m) A defendant convicted at trial following the issuance of a pretrial detention order shall have credited to his or her sentence, if imprisonment is imposed, the time the defendant was held under the order, pursuant to s. 921.161 .

**907.041(5)(n):**
> (n) The defendant shall be entitled to dissolution of the pretrial detention order whenever the court finds that a subsequent event has eliminated the basis for detention.

**907.041(6)(a):**
> (6)(a) As used in this subsection, the term:

**907.041(6)(a)1.:**
> 1. “Forcible felony” has the same meaning as in s. 776.08 .

**907.041(6)(a)2.:**
> 2. “Unauthorized alien” has the same meaning as in s. 908.111 .

**907.041(6)(b):**
> (b) An unauthorized alien who is arrested for committing a forcible felony is not eligible for release until he or she appears for a first appearance hearing.

**907.041(6)(c):**
> (c) If, at the first appearance hearing, the court determines there is probable cause to believe the defendant committed a forcible felony and further determines by a preponderance of the evidence that the defendant is an unauthorized alien, the court shall presume that the defendant presents a substantial flight risk and that no conditions of release will ensure his or her appearance at trial and shall order pretrial detention. The defendant may rebut the presumption by demonstrating, by a preponderance of the evidence, that appropriate conditions of release will ensure his or her appearance at trial. If the court determines the defendant has rebutted the presumption, it must consider the criteria in s. 903.046 , and any other relevant facts, to determine whether to release the defendant on bail or other conditions.

**907.041(6)(d):**
> (d) The defendant may request a continuance of his or her first appearance hearing conducted under this subsection. A continuance shall not be longer than 48 hours unless the court determines there are extenuating circumstances. The state attorney shall be entitled to one continuance for good cause. The defendant may not be released from custody pending any such continuance.


---

## 2026-08-24: Fla. R. Crim. P. 3.992, the Criminal Punishment Code Scoresheet, recorded whole

The form the sentencing worksheet tool would render
(docs/build/tools/SENTENCING-WORKSHEET-CONCEPT.md Section 8, machine item 1).
Before today nothing in this repository recorded the Rule 3.992 form at all,
which is why that document's C6 was stated as BLOCKED rather than pending.

**Fla. R. Crim. P. 3.992, whole rule, (a) and (b), all four pages**
READ-WHOLE: Fla. R. Crim. P. 3.992
SINGLE-SOURCE: Fla. R. Crim. P. 3.992 (SPLIT RECORD, and the split is the point. POINT VALUES: confirmed three ways, by F.S. 921.0024(1)(a) on flsenate.gov, by this form, and by FDLE's independently published copy of the form. LAYOUT AND WORDING: one publisher only, The Florida Bar's standalone form PDF, which is the sole publication path for this revision. So a claim about what the form SCORES rests on three independent paths; a claim about what the form SAYS rests on one. See the verification-paths note below for what was tried and what each alternative could and could not confirm)
https://www-media.floridabar.org/uploads/2026/01/Rule-3.992-Scoresheet-Effective-October-23-2025-Corrected-1.pdf

**Revision implemented by this record.** Amended effective **October 23, 2025**,
in *In re Amendments to Florida Rule of Criminal Procedure 3.992*, No.
SC2025-1036, 2025 WL 2982413. The Florida Bar published a **corrected** upload
of the same revision in **January 2026**; the corrected PDF carries a
CreationDate of 2026-01-14. Both dates are load-bearing and both are recorded
because the correction is substantive, not cosmetic. See "What the January 2026
correction changed" below.

**Fetched 2026-08-24** with a browser user agent and an
https://www.floridabar.org/rules/ctproc/ referer (this host 403s a bare curl,
the same access condition already recorded on the 3.111 and 3.131/3.132
records). 4 pages, 184,053 bytes, sha256
002afdabfe682683c9fe8e9fd1ce68301c6b3efc2108944d8fc4546262e5ff5c. Text
extracted locally with `pdftotext -layout`, then **every one of the four pages
was rendered to PNG at 150dpi and read visually against the extraction** before
recording, because this is a form rather than prose and a layout extractor can
silently drop or reorder a grid. Read whole, recorded whole.

TRANSCRIPTION CONVENTION, stated because it is a departure from the other
records: runs of underscores and dot leaders that are blank fill-in rules on the
form face are collapsed to `____`. Checkbox glyphs render as `[ ]`. Nothing else
is normalized. A bare `II` and a `·` that `pdftotext` emits between the two
SENTENCE COMPUTATION paragraphs are **not form text**: the visual render shows
two bordered boxes and no such characters, so they are box-drawing artifacts and
are omitted here.

**Verification paths, and the honest limit of each.** The house standard is two
independent publishers. This revision does not have two, and the SINGLE-SOURCE
marker above says so rather than letting the asymmetry be inferred (D22).

1. **The Florida Bar's live rules index**, https://www.floridabar.org/rules/ctproc/,
   fetched 2026-08-24: its `3.992` entry links **this exact corrected PDF**. So
   the file recorded here is the one the Bar publishes as Rule 3.992 today, and
   nothing supersedes it as of the fetch date.
2. **The Bar's own rules compilation** (July 13, 2026 edition, 2,035,359 bytes,
   the same PDF the 3.111 and 3.132 records rest on) **does not reproduce the
   form.** Its Rule 3.992 section reads, whole: "THE SCORE SHEETS CAN BE FOUND ON
   THIS WEBPAGE: HTTPS://WWW.FLORIDABAR.ORG/RULES/CTPROC/". It is therefore not a
   second path for the form's text. It *does* independently confirm the
   amendment history: its table of amendments lists "10-23-25: 2025 WL 2982413.
   Amended 3.992." and that is the **last** entry for this rule, through July 13,
   2026.
3. **FDLE publishes a Rule 3.992(a) scoresheet** at fdle.state.fl.us (PDF author
   "Florida Supreme Court"). Fetched and compared. It is an **older revision**
   (PDF CreationDate 2015-12-15): its Section IX carries six enhancements where
   the current form carries eight. It is therefore **not** a second path for the
   2025 text. It **is** an independent publisher's corroboration of all four
   point grids, which it carries identically to both the statute and the
   corrected form.
4. **F.S. 921.0024(1)(a)**, the statute this form implements, independently
   carries all four point grids and every scalar. That diff is recorded in full
   at the end of this record and is the strongest verification available: the
   numbers the tool would render are confirmed by the statute, by FDLE, and by
   the Bar's current form, three ways.
5. The Supreme Court's own opinion PDF for SC2025-1036 was sought and **not
   retrieved**: flcourts.gov serves opinions from opaque numeric download ids
   and no search path exposed one for this case. NOT FETCHED. The November 2025
   Bar compilation, which would have been an independent snapshot of the
   pre-correction text, now 403s and is gone.

So: the **point values are triple-sourced**; the **form's layout and wording are
single-sourced**. Any claim about what the form *says* rests on one publisher.
Any claim about what it *scores* does not.

### What the January 2026 correction changed

Both uploads were fetched and diffed line by line. The October 23, 2025 upload
(https://www-media.floridabar.org/uploads/2025/10/Rule-3.992-Scoresheet-Effective-October-23-2025.pdf,
183,697 bytes, sha256
3b6dd8aac13ff59a31c2fc26fbb2102929365aa44480ed13d36fe6787cd89150, PDF
CreationDate 2025-10-24) differs from the corrected upload in **one substantive
place**, and it is a point grid:

- **October 2025, page 1, Section II (ADDITIONAL OFFENSE(S)):**
  `(Level - Points: 1=4, 2=10, 3=16, 4=22, 5=28, 6=36, 7=56, 8=74, 9=92, 10=116)`
- **January 2026 corrected, same cell:**
  `(Level - Points: M=0.2, 1=0.7, 2=1.2, 3=2.4, 4=3.6, 5=5.4, 6=18, 7=28, 8=37, 9=46, 10=58)`

The October upload printed the **Primary Offense** grid inside the **Additional
Offenses** block. That is wrong against F.S. 921.0024(1)(a), and it was wrong
against the October upload's **own supplemental page**, which carried the
correct additional-offense grid four pages later. The form contradicted itself
and the statute in the same cell. The January 2026 upload fixes exactly that
line.

Every other difference between the two uploads is whitespace, indentation, or a
typographic repair: `ADDITIONAL OFFENSES(S)` to `ADDITIONAL OFFENSE(S)`, and the
supplemental Prior Record column header `OFFENSE/DATE/STATE` to `DESCRIPTION`
with its two stray `/` column rules removed.

**Consequence for the tool, and the reason C6 is a gate rather than a
formality:** a build against the October 2025 PDF would have rendered a filled
cell carrying a wrong point value, which is precisely the "silent-wrong" failure
the concept document's Section 10 names as the one a reader cannot detect. The
revision date alone would not have caught it; only "including the January 2026
correction" does.

### (a) Criminal Punishment Code Scoresheet

**Rule 3.992, catchline and (a) lead:**
> Rule 3.992. Criminal Punishment Code Scoresheet
> (a) Criminal Punishment Code Scoresheet. The Criminal Punishment Code Scoresheet Preparation Manual is available at: https://www.fdc.myflorida.com/statistics-and-publications

**Rule 3.992(a), header block, fields 1 through 12:**
> 1. DATE OF SENTENCE  2. PREPARER'S NAME  3. COUNTY  4. SENTENCING JUDGE
> 5. NAME (LAST, FIRST, MI.I.)  6. DOB  7. DC #  8. RACE [ ] B [ ] W [ ] OTHER  9. GENDER [ ] M [ ] F  10. PRIMARY OFF. DATE  11. PRIMARY DOCKET #  12. PLEA [ ]  TRIAL [ ]

**Rule 3.992(a), Section I, Primary Offense:**
> I. PRIMARY OFFENSE: If Qualifier, please check ____A ____S ____C ____R (A=Attempt, S=Solicitation, C=Conspiracy, R=Reclassification)
> FELONY DEGREE / F.S.# / DESCRIPTION / OFFENSE LEVEL / POINTS
> (Level - Points: 1=4, 2=10, 3=16, 4=22, 5=28, 6=36, 7=56, 8=74, 9=92, 10=116)
> Prior capital felony triples Primary Offense points [ ]
> I. ____

**Rule 3.992(a), Section II, Additional Offenses:**
> II. ADDITIONAL OFFENSE(S): Supplemental page attached [ ]
> DOCKET# / FEL/MM DEGREE / F.S.# / OFFENSE LEVEL / QUALIFY A S C R / COUNTS / POINTS / TOTAL
> DESCRIPTION____
> (Level - Points: M=0.2, 1=0.7, 2=1.2, 3=2.4, 4=3.6, 5=5.4, 6=18, 7=28, 8=37, 9=46, 10=58)
> Prior capital felony triples Additional Offense points [ ]
> Supplemental page points ____
> II. ____

Four offense rows on the face, each with its own DESCRIPTION rule.

**Rule 3.992(a), Section III, Victim Injury:**
> III. VICTIM INJURY:
> Number / Total
> 2nd Degree Murder 240 x ____ = ____
> Death 120 x ____ = ____
> Severe 40 x ____ = ____
> Moderate 18 x ____ = ____
> Slight 4 x ____ = ____
> Sex Penetration 80 x ____ = ____
> Sex Contact 40 x ____ = ____
> III. ____

**Rule 3.992(a), Section IV, Prior Record:**
> IV. PRIOR RECORD: Supplemental page attached [ ]
> FEL/MM DEGREE / F.S.# / OFFENSE LEVEL / QUALIFY: A S C R / DESCRIPTION / NUMBER / POINTS / TOTAL
> (Level = Points: M=0.2, 1=0.5, 2=0.8, 3=1.6, 4=2.4, 5=3.6, 6=9, 7=14, 8=19, 9=23, 10=29)
> Supplemental page points ____
> IV. ____

Nine prior-record rows on the face.

**Rule 3.992(a), page 1 footer and page 2 header:**
> Page 1 Subtotal: ____
> Effective Date: For offenses committed under the Criminal Punishment Code effective for offenses committed on or after October 1, 1998, and subsequent revisions.
> NAME (LAST, FIRST, MI)  DOCKET #

**Rule 3.992(a), Section V, Legal Status Violation:**
> V. LEGAL STATUS VIOLATION = 4 Points
> [ ] Escape [ ] Fleeing [ ] Failure to Appear [ ] Supersedeas Bond [ ] Incarceration [ ] Pretrial Intervention or Diversion Program
> [ ] Court Imposed or Post Prison Release Community Supervision Resulting in a Conviction
> V. ____

**Rule 3.992(a), Section VI, Community Sanction Violation:**
> VI. COMMUNITY SANCTION VIOLATION BEFORE THE COURT FOR SENTENCING
> [ ] Probation [ ] Community Control [ ] Pretrial Intervention or Diversion
> VI. ____
> [ ] 6 points for any violation other than new felony conviction x ____ each successive violation OR
> [ ] New felony conviction = 12 points x ____ each successive violation if new offense results in conviction before or at same time as sentence for violation of probation OR
> [ ] 12 points x ____ each successive violation for a violent felony offender of special concern when the violation is not based solely on failure to pay costs, fines, or restitution OR
> [ ] New felony conviction = 24 points x ____ each successive violation for a violent felony offender of special concern if new offense results in a conviction before or at the same time for violation of probation

**Rule 3.992(a), Sections VII and VIII, and the subtotal:**
> VII. FIREARM/SEMI-AUTOMATIC OR MACHINE GUN = 18 or 25 Points
> VII. ____
> VIII. PRIOR SERIOUS FELONY = 30 Points
> VIII. ____
> Subtotal Sentence Points ____

**Rule 3.992(a), Section IX, Enhancements:**
> IX. ENHANCEMENTS (only if the primary offense qualifies for enhancement)
> Specified Justice System Personnel ____ x 1.5 ____ x. 2.0 ____ x 2.5
> Drug Trafficking ____ x. 1.5
> Motor Vehicle Theft ____ x 1.5
> Criminal Gang Offense ____ x 1.5
> Domestic Violence in Presence of Related Child ____ x 1.5
> Adult-on-Minor Sex Offense ____ x 2.0
> Aggravated Animal Cruelty ____ x 1.25
> Fleeing/Aggravated Fleeing ____ x 1.5
> Enhanced Subtotal Sentence Points IX. ____
> TOTAL SENTENCE POINTS ____

The `x. 2.0` and `x. 1.5` stops are on the form face as printed; they are not
transcription noise.

**Rule 3.992(a), Sentence Computation:**
> SENTENCE COMPUTATION
> If total sentence points are less than or equal to 44, the lowest permissible sentence is any non-state prison sanction. If the total sentence points are 22 points or less, see Section 775.082(10), Florida Statutes, to determine if the court must sentence the offender to a non-state prison sanction.
> If total sentence points are greater than 44:
> ____ minus 28 = ____ x .75 = ____
> total sentence points / lowest permissible prison sentence in months
> If total sentence points are 60 points or less and court makes findings pursuant to both Florida Statute 948.20 and 397.334(3), the court may place the defendant into a treatment-based drug court program.

**Rule 3.992(a), statutory maximum block:**
> The maximum sentence for each individual felony offense is the statutory maximum as provided in s. 775.082, F.S., unless the lowest permissible sentence listed above exceeds the statutory maximum for that offense. If the lowest permissible sentence exceeds the statutory maximum for an individual felony offense, the lowest permissible sentence replaces the statutory maximum and must be imposed for that offense. See State v. Gabriel, 314 So. 3d 1243 (Fla. 2021). Sentences for multiple felony offenses may be imposed concurrently or consecutively. If total sentence points are greater than or equal to 363, a life sentence may be imposed.
> Primary offense: ____ Description ____ Maximum sentence in years
> Additional offense: ____ Description ____ Maximum sentence in years
> Total maximum sentence in years for all counts above if consecutive sentences imposed: ____

Three additional-offense rows on the face.

**Rule 3.992(a), Total Sentence Imposed:**
> TOTAL SENTENCE IMPOSED
> Years / Months / Days
> [ ] State Prison [ ] Life ____ ____ ____
> [ ] County Jail [ ] Time Served ____ ____ ____
> [ ] Community Control ____ ____ ____
> [ ] Probation [ ] Modified ____ ____ ____
> Please check if sentenced as [ ] Habitual Offender, [ ] Habitual Violent Offender, [ ] Violent Career Criminal, [ ] Prison Releasee Reoffender, or a [ ] Mandatory Minimum Applies.
> [ ] Mitigated Departure [ ] Plea Bargain [ ] Prison Diversion Program
> [ ] Other Reason(s): ____
> JUDGE'S SIGNATURE
> Effective Date: For offenses committed under the Criminal Punishment Code effective for offenses committed on or after October 1, 1998, and subsequent revisions.

### (b) Supplemental Criminal Punishment Code Scoresheet

**Rule 3.992(b), header:**
> (b) Supplemental Criminal Punishment Code Scoresheet
> NAME (LAST, FIRST, MI.I)  DOCKET #  DATE OF SENTENCE

**Rule 3.992(b), Section II, Additional Offenses:**
> II. ADDITIONAL OFFENSE(S):
> DOCKET# / FEL/MM DEGREE / F.S.# / OFFENSE LEVEL / QUALIFY A S C R / COUNTS / POINTS / TOTAL
> DESCRIPTION____
> (Level - Points: M=0.2, 1=0.7, 2=1.2, 3=2.4, 4=3.6, 5=5.4, 6=18, 7=28, 8=37, 9=46, 10=58)
> II. ____

Five offense rows on the supplemental page.

**Rule 3.992(b), Section IV, Prior Record:**
> IV. PRIOR RECORD
> FEL/MM DEGREE / F.S.# / OFFENSE LEVEL / QUALIFY: A S C R / DESCRIPTION / NUMBER / POINTS / TOTAL
> (Level = Points: M=0.2, 1=0.5, 2=0.8, 3=1.6, 4=2.4, 5=3.6, 6=9, 7=14, 8=19, 9=23, 10=29)
> IV. ____

Six prior-record rows on the supplemental page.

**Rule 3.992(b), Reasons for Departure, recorded whole, all fifteen lines:**
> REASONS FOR DEPARTURE - MITIGATING CIRCUMSTANCES
> (reasons may be checked here or written on the scoresheet)
> [ ] Legitimate, uncoerced plea bargain.
> [ ] The defendant was an accomplice to the offense and was a relatively minor participant in the criminal conduct.
> [ ] The capacity of the defendant to appreciate the criminal nature of the conduct or to conform that conduct to the requirements of law was substantially impaired.
> [ ] The defendant requires specialized treatment for a mental disorder that is unrelated to substance abuse or addiction, or for a physical disability, and the defendant is amenable to treatment.
> [ ] The need for payment of restitution to the victim outweighs the need for a prison sentence.
> [ ] The victim was an initiator, willing participant, aggressor, or provoker of the incident.
> [ ] The defendant acted under extreme duress or under the domination of another person.
> [ ] Before the identity of the defendant was determined, the victim was substantially compensated.
> [ ] The defendant cooperated with the State to resolve the current offense or any other offense.
> [ ] The offense was committed in an unsophisticated manner and was an isolated incident for which the defendant has shown remorse.
> [ ] At the time of the offense the defendant was too young to appreciate the consequences of the offense.
> [ ] The defendant is to be sentenced as a youthful offender.
> [ ] The defendant is amenable to the services of a postadjudicatory treatment-based drug court program and is otherwise qualified to participate in the program.
> [ ] The defendant was making a good faith effort to obtain or provide medical assistance for an individual experiencing a drug-related overdose.
> [ ] Other Reason(s): ____
> Pursuant to 921.0026(3) the defendant's substance abuse or addiction does not justify a downward departure from the lowest permissible sentence, except for the provisions of s. 921.0026(2)(m).
> Effective Date: For offenses committed under the Criminal Punishment Code effective for offenses committed on or after October 1, 1998, and subsequent revisions.

### The diff against F.S. 921.0024(1)(a)

SENTENCING-WORKSHEET-CONCEPT.md Section 8 machine item 2, and its Section 12
open question 1, "the single question most likely to change the plan": if the
form and the statute disagree, the work stops being transcription and becomes
interpretation, and the tool should not be built.

Statute text for this diff re-fetched 2026-08-24 from
https://www.flsenate.gov/Laws/Statutes/2025/921.0024 (2025 Florida Statutes),
the same URL the audited whole-section table `fs-921-0024.ts` rests on.

**VERDICT: they agree. No contradiction on any value the tool would render.**

**The four point grids, identical in every cell:**

| Grid | F.S. 921.0024(1)(a) | Rule 3.992 (corrected) |
|---|---|---|
| Primary Offense | 10=116, 9=92, 8=74, 7=56, 6=36, 5=28, 4=22, 3=16, 2=10, 1=4; **no M row** | same, ascending; **no M row** |
| Additional Offenses | 10=58, 9=46, 8=37, 7=28, 6=18, 5=5.4, 4=3.6, 3=2.4, 2=1.2, 1=0.7, M=0.2 | same |
| Victim Injury | 2nd degree murder-death 240; Death 120; Severe 40; Moderate 18; Slight 4; Sexual penetration 80; Sexual contact 40 | same values; labels abbreviated to "2nd Degree Murder", "Sex Penetration", "Sex Contact" |
| Prior Record | 10=29, 9=23, 8=19, 7=14, 6=9, 5=3.6, 4=2.4, 3=1.6, 2=0.8, 1=0.5, M=0.2 | same |

**The eight scalars, identical:** legal status 4; community sanction 6; with new
felony conviction 12; violent felony offender of special concern without a new
felony conviction 12; that offender with a new felony conviction 24; prior
serious felony 30; firearm 18; semiautomatic firearm or machine gun 25.

**The eight multipliers, identical:** aggravated animal cruelty 1.25; drug
trafficking 1.5; specified justice system personnel 2.5 / 2.0 / 1.5; grand theft
of a motor vehicle 1.5; fleeing or eluding 1.5; criminal gang offense 1.5;
domestic violence in the presence of a related child 1.5; adult-on-minor sex
offense 2.0.

**The three thresholds, identical:** 44 (nonstate prison sanction at or below),
the `(total - 28) x .75` computation above it, and 363 (life may be imposed).

**Six differences, all structural, none a contradiction. Recorded individually
because "they agree" is a conclusion and the reader is entitled to the working.**

- **D1. Prior capital felony is expressed differently and computes identically.**
  The statute's face carries a separate PRIOR CAPITAL FELONY line in the
  subtotal stack, and its (1)(b) key directs that points "shall be added to the
  subtotal sentence points of the offender equal to twice the number of points
  the offender receives for the primary offense and any additional offense." The
  form has no such line; it instead prints "Prior capital felony triples Primary
  Offense points" in Section I and "triples Additional Offense points" in Section
  II. Adding twice P+A to a subtotal that already contains P+A yields 3(P+A),
  which is what tripling I and II yields. Both leave victim injury and prior
  record unmultiplied. Arithmetically equivalent, verified term by term.
- **D2. Ordering differs in the subtotal stack.** The statute runs prior serious
  felony, prior capital felony, firearm; the form runs VII firearm, VIII prior
  serious felony. Addition commutes.
- **D3. The four designations sit in different places.** The statute's face lists
  PRISON RELEASEE REOFFENDER, VIOLENT CAREER CRIMINAL, HABITUAL VIOLENT OFFENDER
  and HABITUAL OFFENDER, each "(no)(yes)", inside the scoring stack between
  SUBTOTAL and TOTAL SENTENCE POINTS. The form places them on page 3 as
  post-sentence checkboxes under "Please check if sentenced as", and adds a fifth
  box, "Mandatory Minimum Applies", that the statute's face does not carry.
  Neither document attaches a point value to any of them.
- **D4. The intermediate aggregations are labelled differently.** The statute
  totals TOTAL OFFENSE SCORE (I+II+III) and TOTAL PRIOR RECORD SCORE (IV)
  separately; the form prints one "Page 1 Subtotal" over I+II+III+IV. Same
  components, same sum.
- **D5. Two multipliers are named differently.** The statute's face labels read
  "LAW ENF. PROTECT." and "DRUG TRAFFICKER"; the form reads "Specified Justice
  System Personnel" and "Drug Trafficking". The form's names track the statute's
  own (1)(b) key headings more closely than the statute's face labels do.
- **D6. The form carries material sourced outside 921.0024(1)(a).** The
  administrative header fields 1 through 12; the A/S/C/R qualifier boxes; the
  22-point cross-reference to s. 775.082(10); the drug-court sentence citing
  Florida Statute 948.20 and 397.334(3); *State v. Gabriel*, 314 So. 3d 1243
  (Fla. 2021); the TOTAL SENTENCE IMPOSED block; the judge's signature block; and
  the supplemental page's mitigating-circumstances list, which is s. 921.0026.
  These are additions the rule makes, not disagreements with the statute. **A
  tool rendering this form may not describe any of them from this record**, which
  covers the form's face and not those sources. s. 775.082(10), s. 948.20, s.
  397.334(3), s. 921.0026 and *Gabriel*: NOT FETCHED.

**The one contradiction found anywhere in this work was internal to the form's
own publication history, and the January 2026 correction resolves it.** Recorded
above under "What the January 2026 correction changed".
