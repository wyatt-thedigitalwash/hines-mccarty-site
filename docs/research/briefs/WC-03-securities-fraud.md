# BRIEF: Securities fraud

`/white-collar-defense/securities-fraud`. Research date 2026-08-13. Outline and
source material only, no drafted page copy.

**No overlap sibling exists.** The federal silo has no securities fraud entry;
its nine slugs are drug-trafficking, healthcare-fraud, wire-mail-fraud,
conspiracy-charges, weapons-gun-offenses, csam-defense, money-laundering,
computer-internet-crimes, target-letter-defense. Verified in src/lib/site.ts.
This page therefore carries both forums itself, which is the constraint below.

**This page inherits the removed corporate fraud card.** DECISIONS.md D12
removed `/federal-criminal-defense/white-collar-corporate-fraud` and reclassified
`/white-collar-defense/corporate-fraud` as a C9-exempt category overview that
links down here. Verified in src/lib/site.ts, which already carries the
overview's outbound link to `/white-collar-defense/securities-fraud`.

---

## 0. THE CONSTRAINT, AND THE VERDICT

**The constraint.** This page rests on a Florida statute and a federal statute at
once, with no federal sibling to hand the federal half to. Plan Section 4.6
requires a forum section on overlap pages, and this page is an overlap page with
only one side built. If it cannot say clearly which statute is which, it becomes
the interchangeable "securities fraud is a serious white-collar crime" page that
Section 4.5 exists to prevent, and it also inherits corporate fraud's traffic
without inheriting a statute to answer it with.

**Verdict: SATISFIED, and the two statutes are further apart than expected.**
They diverge on scope, on penalty ceiling, and on ranking, all three verified:

| Dimension | Florida, ch. 517 | Federal, 18 U.S.C. 1348 | Status |
|---|---|---|---|
| What it reaches | "any investment or security", with "investment" separately defined in 517.301(2) | only a security "of an issuer with a class of securities registered under section 12 of the Securities Exchange Act of 1934 ... or that is required to file reports under section 15(d)", plus commodities for future delivery | **verified**, both fetched |
| Ceiling | third degree by default, 5 years under 775.082; first degree, 30 years, on the 517.302(2) tier | "imprisoned not more than 25 years" | **verified** |
| Ranking | 517.302(1) is expressly ranked at **offense level 1**, the floor of the F.S. 921.0022 chart | no Florida offense level applies | **verified** |

**The counterintuitive finding, and it is the page.** The Florida statutory
maximum on the escalated tier (30 years) is **higher** than the federal maximum
(25 years), while the Florida default tier is ranked at the lowest level in the
entire sentencing chart. The usual reader assumption, that federal is uniformly
worse, is wrong in both directions here, and nothing in the observed SERP says
so.

---

## 1. Queries and intent

### Primary

**`securities fraud attorney Tampa`**

- **Grade: 6-12mo**, inferred. **keywords.md does not grade securities fraud and
  does not mention it at all**, verified by grep across docs/research. There is
  no prior grade to inherit or contradict, so this grade is new and rests on the
  SERP below.
- **Volume: 10/month at Tampa DMA.** verified 2026-08-13. Per TEMPLATE-FINDINGS
  Section 5, that puts it in the same short band as `federal criminal defense
  attorney Tampa` (20), `embezzlement lawyer Tampa` (10) and `criminal defense
  attorney Brandon FL` (10), and above ten other charge terms that return no
  data at all. **It is one of very few charge terms in the whole set with any
  measurable DMA volume**, which is the reason this page is worth more research
  effort than its silo position suggests.
- **`securities fraud` returns 140/month at Florida state level.** verified
  2026-08-13. That is the fourth largest figure in the verified volume set,
  behind tax evasion 880, bank fraud 320, and 21 usc 841 140 tied.

### What the SERP actually contains, and it is the finding

Observed 2026-08-13, Tampa-geolocated, item types local_pack, organic,
people_also_ask, google_reviews.

| # | Domain | Title |
|---|---|---|
| 1 | justia.com | "Best Securities Lawyers in Tampa, FL" |
| 2 | savagelaw.us | "Savage Villoch Law, PLLC: Florida Securities Fraud Lawyer ..." |
| 3 | floridatrialattorneys.net | "Tampa Securities Fraud Lawyer \| Fraudulent Behavior" |
| 4 | scotthirschlawgroup.com | "Securities Attorney Tampa, FL" |
| 5 | shutts.com | "Securities Fraud Litigation" |
| 6 | tampa-criminal-attorney.com | "Tampa Securities Fraud Attorney" |
| 7 | cooklawfla.com | "Tampa Securities Litigation Attorney - Cook Law" |
| 8 | ganalawfirm.com | "Florida Securities Attorneys" |
| 9 | ligorilaw.com | "Tampa Securities Litigation Lawyer" |
| 10 | goldmanwetzel.com | "St. Petersburg Securities Fraud Lawyer" |

**Local pack:** Savage Villoch Law, PLLC; The Consumer Lawyers PLLC; The Schwartz
Law Firm, P.A. verified.

**Eight of the ten organic results and all three local pack entries are on the
other side of the "v."** "Securities fraud litigation", "securities litigation
attorney", "the consumer lawyers", "florida trial attorneys": these are investor
recovery, FINRA arbitration, and civil securities practices, not criminal
defense. Only **two** results read as criminal defense at all,
tampa-criminal-attorney.com at #6 and Goldman Wetzel at #10, and Goldman Wetzel's
is a **St. Petersburg** page, which is the third time in this project an
out-of-county page has held a top-ten slot on a Tampa charge query (money
laundering #5, federal money laundering #9, here #10). verified.

**Three consequences, and they change how the page is written.**

1. **The criminal defense sub-intent on this query is effectively unserved.** A
   dedicated Hillsborough criminal page competes for the defendant-side share of
   a SERP nobody is holding for defendants. That is the softest competitive
   position of any wave 2 white-collar term examined.
2. **Intent is genuinely mixed, and the page must disambiguate in the first
   screen.** A meaningful share of these searchers were defrauded and want to
   sue. The opening paragraph has to make it unmistakable that this page is for
   a person accused, not a person who lost money, or the page collects bounces
   and misdirected calls. **No competitor result does this**, because each of
   them is on one side only and never has to.
3. **A directory holds #1 with a superiority title.** "Best Securities Lawyers in
   Tampa, FL" is a Justia listicle. Under Rule 4-7.13(b)(3) the firm cannot
   answer that query in kind, which is a constraint, not a loss: the ranking
   route here is substance the listicle has none of.

### Secondary

| Query | Volume | Winnability | Note |
|---|---|---|---|
| `securities fraud` | **140/month, Florida** | **YEARS** for the head term, inferred | Not observed this session. An informational head term at this volume is the shape that FED-01 found to be a government wall. Do not target the head term; serve it through the opening paragraph and the statute sections. |
| `securities fraud attorney Tampa` | **10/month, Tampa DMA** | 6-12mo, inferred | The primary. |
| `Florida securities fraud statute` | not pulled | **NOW**, inferred | Statute-shaped, per TEMPLATE-FINDINGS Change 1 the shape this audience types. Nothing in the observed SERP is a statute page. **ESTIMATE only, volume not pulled**, and the standing instruction is not to pull more. |
| `18 usc 1348` | not pulled | **NOW**, inferred | Same reasoning. `18 usc 1343` returns 70/month and `18 usc 1344` 30/month at Florida level, verified, so statute-number demand in this cluster is real; 1348's own figure is **UNVERIFIED**. |
| `corporate fraud` inheritance, per D12 | not pulled | -- | The overview page holds the term. This page holds the charge. Do not build a second corporate fraud landing here. |

**No AI Overview, no featured snippet, and no related searches were returned for
this query.** Recorded as observed absence within the retrieved data rather than
as a claim that none exists. The retrieved item types are listed above and
contain no answer-box feature.

---

## 2. People Also Ask, verbatim, with disposition

Observed 2026-08-13, Tampa-geolocated, on the primary query. Four questions.

| # | Question, verbatim | Disposition | Reasoning |
|---|---|---|---|
| 1 | "How much does a securities attorney cost?" | **Refused. Neither.** | Fee question, and worse, a fee question aimed at the civil practices holding this SERP. TEMPLATE-FINDINGS Section 4A already records fee questions as a standing refusal category. Answering it on a defense page invites a fee claim the firm has to stand behind. |
| 2 | "How much does it cost to get a lawyer for fraud?" | **Refused. Neither.** | Same category, and duplicative of #1. |
| 3 | "How to prove securities fraud?" | **Body copy, inverted.** Elements section. | The question is plaintiff-shaped: it means "how do I prove someone defrauded me." It cannot be answered in that frame on a defense page. Inverted, it is the legitimate elements question: what the state must establish under 517.301, and what the government must establish under 1348, which are different lists because 1348 requires a registered or reporting issuer and 517.301 does not. **Not FAQ**, because the inversion needs a paragraph of setup. |
| 4 | "Do people go to jail for securities fraud?" | **FAQ.** | The one FAQ-eligible question in the set, and it happens to land on the C9. Answerable in two sentences from verified material on both forums: 517.302(1) is ranked at offense level 1, which scores 4 primary offense points under 921.0024, below the 22-point line at which 775.082(10) requires a nonstate prison sanction, while 1348 carries a 25 year maximum and USSC FY2025 reports 89 percent of securities and investment fraud offenders sentenced to prison. **Rule 4-7 rail: this is a statement of what the statutes and the published data say. It is never a prediction about this reader's case, and the answer must not imply one.** |

**PAA yield: 2 usable of 4, 1 FAQ-eligible.** Consistent with the roughly
one-in-four rate in TEMPLATE-FINDINGS Section 4A. Two of the four refusals are
fee questions, which is the second highest fee-question density of any brief in
the corpus and is a direct artefact of the civil practices holding this SERP.

**"What is the 33 day rule in Florida?" did not appear on this SERP.** Recorded
because it appeared on seven of ten wave 1 and wave 2 primary queries. This is
one of the few charge SERPs free of it, so this page does not need the Layer 2
correction link that the others carry.

---

## 3. The question set a person would ask an AI assistant

1. "Is securities fraud a state charge or a federal charge in Florida?"
2. "What is the difference between Florida's securities fraud statute and 18
   U.S.C. 1348?"
3. "Does it have to be a registered stock for this to be securities fraud?"
4. "How many investors does it take before this becomes a first degree felony?"
5. "How long does the state have to charge me with securities fraud?"
6. "Can the fine be more than the money that was involved?"
7. "Is an Office of Financial Regulation investigation the same thing as a
   criminal case?"
8. "I was accused of running a Ponzi scheme. Is that a securities charge?"

**The FAQ block is questions 3, 4 and 5, plus PAA #4.** Four questions, and all
four are answerable in two sentences from fetched text:

- Q3 rests on the verified scope gap: 1348(1) reaches securities of an issuer
  registered under section 12 or reporting under 15(d); 517.301 reaches "any
  investment or security", with "investment" separately defined in 517.301(2)
  and "security" defined across 23 categories in 517.021.
- Q4 rests on 517.302(2), verbatim below: more than $50,000 in aggregate value
  from five or more persons.
- Q5 rests on 775.15(8), verbatim below: five years for a felony violation of
  chapter 517.
- PAA #4 rests on the offense level and the USSC data.

Questions 1 and 2 are the forum section, not the FAQ, because the answer is a
section rather than two sentences. Question 6 is body copy under penalties, from
517.302(3). Question 7 is body copy in the regulatory-track section and is
partly UNVERIFIED, see Section 6. **Question 8 is recorded and not answered.**
"Ponzi scheme" is not a statutory term in chapter 517 or in title 18, nothing
was fetched that defines it, and the honest treatment is to say which statutory
offense the conduct is usually charged under rather than to define a term the
statute does not use. Do not let a writer reach for it as easy copy.

---

## 4. Section-by-section outline against the level 3 template

Template from CASES-WE-DEFEND-PLAN.md Section 4.3, with TEMPLATE-FINDINGS
Change 1 applied to item 1 and Change 2 applied to item 3.

| # | Section | What it must contain FOR THIS CHARGE, and what it must not |
|---|---|---|
| 1 | H1 and the direct answer | Per Change 1, 40 words, standing alone, naming the statute in the same paragraph. **The opening move for this page, under the 4.3 copy-level variation requirement, is audience disambiguation**, because the SERP is held by investor-side firms: this is a page for a person accused. That move is used on no other page in the set. Name both **F.S. 517.301** and **18 U.S.C. 1348** in the paragraph, since the direct answer is that there are two different offenses with this name. |
| 2 | **Forum section, opens the body** | Section 4.6 requires it and there is **no sibling page to link to**, which is the one structural difference from every other overlap page. The cross-link goes **up to `/federal-criminal-defense`**, the silo hub, phrased as the hub row D12 created. The section's substance is the scope gap: the federal statute reaches registered and reporting issuers, the Florida statute reaches any investment or security. **The same conduct can be a Florida offense and not a federal one**, which is the reverse of the pattern on the money laundering pages and must not be written in their shape. |
| 3 | What the Florida statute says | 517.301 by its statutory name, "Fraudulent transactions; falsification or concealment of facts", and its three prohibited limbs at (1)(a)1., 2., 3. Then the breadth point: (2) defines "investment" separately, and 517.021 defines "security" across 23 categories. Penalty lives in a **different section**, 517.302, and the page must say so, because a reader who fetches 517.301 alone finds no penalty and concludes there is none. |
| 4 | **Degrees, penalties and offense levels table** | Per Change 2. Columns: subsection, degree, statutory maximum, offense level, primary offense points. Rows verified in Section 6: 517.302(1) third degree, 5 years, **level 1, 4 points**; 517.302(2) first degree, 30 years, **unranked in the chart, level 7 by default under 921.0023, 56 points**; 517.07(2) level 3; 517.07(1) level 4; 517.12(1) level 4. Add the alternative fine from 517.302(3) as a note below the table, not a column, because it is not a per-row figure. **No offense-level column applies to 1348** and the table must not imply one. No calculator link. |
| 5 | The federal statute | 1348 quoted: the "scheme or artifice" opening, the registered-issuer and reporting-issuer limbs, the commodity-for-future-delivery limb, and "imprisoned not more than 25 years". Then the USSC FY2025 figures. Frame the 25-versus-30 inversion here, once, plainly, as what the two maxima are. |
| 6 | What must be proved | The inverted PAA #3. Two lists, side by side, and the difference between them is the registration status of the security. |
| 7 | How the defense is approached | Process only, per Section 12. What instrument is said to be a security or an investment, whether the issuer meets 1348's registration or reporting description, what the aggregate value is and how many persons it came from, and where the conduct falls in time against the limitations period. No outcomes, no results, no case examples. |
| 8 | **Three tracks, not one** | 517.302(4) refers on its face to "investigation and prosecution of administrative, civil, and criminal actions arising under this chapter", so the chapter itself confirms all three exist. The Office of Financial Regulation is the chapter's regulator per 517.021(26). **This section states that the tracks exist and are different. It must not describe how a regulatory referral works**, which is UNVERIFIED. Answers assistant-question 7 only partially, and that is the honest limit. |
| 9 | **How long the state has** | 775.15(8): five years for a felony violation of chapter 517, against 775.15(2)(a)'s four years for a first degree felony and (2)(b)'s three years for any other felony. **Chapter 517 gets longer than any ordinary felony class.** Verified, counterintuitive, and absent from all ten SERP results. Answers assistant-question 5. |
| 10 | Where the case is heard | Thirteenth Judicial Circuit, Edgecomb Courthouse, 800 E. Twiggs Street Room 101, with Plant City at 301 North Michigan Avenue Room 1071 for criminal court services. MDFL Tampa Division, Sam M. Gibbons courthouse, 801 North Florida Avenue, if federal. **Brandon is blocked, D7.** |
| 11 | Handled by | `HandledBy` renders empty. Open Question 2. |
| 12 | FAQ block, FAQPage schema | Assistant-questions 3, 4, 5, plus PAA #4. Four questions. |
| 13 | Related guides | `/resources`. **Not** the 33-day guide: that question did not surface on this SERP. |
| 14 | Byline and last-reviewed | **6-month cadence.** The page carries a dollar threshold, a person count, a limitations period, and USSC statistics that reissue annually. `owner` and `lastReviewed` stay `[NEEDS]`. |

**Deviation from the template, stated.** The template has ten items; this outline
has fourteen sections because items 2 and 3 split across two forums and because
sections 8 and 9 are charge-specific additions. Neither addition is generic
narrative: 8 rests on 517.302(4) and 517.021(26), 9 on 775.15(8).

---

## 5. The C9 differentiator

Ready to paste into the `c9` field in src/lib/site.ts:

```
statute:   "F.S. 517.302 and 18 U.S.C. 1348"
section:   "Degrees, penalties and offense levels"
assertion: "Florida ranks its general securities fraud offense at level 1, the floor of the F.S. 921.0022 chart, and lifts it to a first degree felony only on a count of persons, more than $50,000 obtained from five or more, while the federal analogue at 18 U.S.C. 1348 reaches only the securities of a registered or reporting issuer."
```

**Why it is false or nonsensical if another charge is swapped in.**

- **Level 1 is unique to this page in the built set.** Every other populated C9
  in src/lib/site.ts sits far up the chart: money laundering's lowest tier is
  level 7, drug trafficking has no tier below level 7, identity theft's
  protected-person tiers are 8 and 9. Swap any of them into this assertion and
  the level is simply wrong.
- **No other statute in the set escalates on a count of persons.** Grand theft
  escalates on value (812.014). Money laundering escalates on value across a
  12-month window (896.101(5)). Identity theft escalates on the victim's age and
  the defendant's custodial relationship (817.568). **517.302(2) is the only one
  that requires both a dollar figure and a number of human beings**, and the
  five-person element is false of every other charge on the site.
- **The registered-or-reporting-issuer limit is unique to 1348.** Wire fraud
  under 1343 and bank fraud under 1344 have no issuer element at all. Cover the
  words "securities fraud" and the sentence still identifies the charge, because
  no other offense in the set is bounded by section 12 of the Securities Exchange
  Act of 1934.

**Collision check.** `statuteKey` resolves this to the chapter 517 and 1348
citations. No other entry in `CHARGE_C9` cites chapter 517 or title 18 section
1348; the populated set cites 812.014 twice, 893.135, 775.087, 741.2901,
896.101, 817.568, 817.034, and one `[NEEDS]` placeholder for PPP loan fraud.
Verified by reading src/lib/site.ts. **No collision, automated or by hand.**

**One caution for the collision checker.** The statute field here is a compound
citation, the same shape FED-01 used with "18 U.S.C. 1956 and 1957". If
`findUnparseableStatutes` (D12) rejects compounds, this entry fails the build for
a formatting reason rather than a substantive one. Check that before populating,
and if it rejects compounds, the field becomes "F.S. 517.302" and the federal
limb moves into the assertion text, where it already is.

---

## 6. Sources and verification status

All fetched 2026-08-13. Allowlisted domains only.

### Federal

**https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section1348&num=0&edition=prelim**

Currency line, quoted:
> "Text contains those laws in effect on August 12, 2026"

Opening clause, quoted:
> "Whoever knowingly executes, or attempts to execute, a scheme or artifice--"

Paragraph (1), quoted in full:
> "(1) to defraud any person in connection with any commodity for future delivery, or any option on a commodity for future delivery, or any security of an issuer with a class of securities registered under section 12 of the Securities Exchange Act of 1934 (15 U.S.C. 78l) or that is required to file reports under section 15(d) of the Securities Exchange Act of 1934 (15 U.S.C. 78o(d));"

Paragraph (2), quoted as returned:
> "(2) to obtain, by means of false or fraudulent pretenses, representations, or promises, any money or property in connection with the purchase or sale of any commodity..."

Penalty, quoted:
> "shall be fined under this title, or imprisoned not more than 25 years, or both."

**Note on the first fetch attempt.** The bare granuleid URL
(`...?req=granuleid:USC-prelim-title18-section1348` with no `num` or `edition`
parameters) returned a "Document not Found" page. The `&num=0&edition=prelim`
form succeeded. Recorded so the next brief does not lose a pass to it.

**https://www.ussc.gov/research/quick-facts/securities-and-investment-fraud**
Fiscal year 2025.
> "Of the 66,662 cases reported to the Commission in fiscal year 2025, 202 involved securities and investment fraud."
> "89% were sentenced to prison."
> "The average sentence for individuals sentenced for securities and investment fraud was 51 months."

**Scope caution on the USSC figure.** The Commission's category is "securities
and investment fraud", which is broader than 18 U.S.C. 1348. The page must
attribute the number to that category by name and must not present it as a 1348
statistic.

### Florida

**https://www.flsenate.gov/Laws/Statutes/2025/517.301** 2025 Florida Statutes.

Section title, quoted:
> "Fraudulent transactions; falsification or concealment of facts."

Subsection (1)(a) limbs, quoted as returned:
> 1. "employ any device, scheme, or artifice to defraud"
> 2. "obtain money or property by means of any untrue statement of a material fact"
> 3. "engage in any transaction, practice, or course of business which operates or would operate as a fraud or deceit"

Connecting language, quoted:
> "in connection with the rendering of any investment advice or in connection with the offer, sale, or purchase of any investment or security"

Subsection (2) defines "investment" as a commitment of money or property
principally induced by a representation of potential economic benefit, with
exclusions for business opportunities and purchases of tangible personal
property. Subsection (3) prohibits misrepresenting that a security has been
guaranteed, sponsored, recommended, or approved by a state or federal government
entity. **Both returned as summary rather than verbatim; treat the paraphrases as
reported, not verified, and re-fetch before quoting.**

**https://www.flsenate.gov/Laws/Statutes/2025/517.302** 2025 Florida Statutes.

Title and subsection (1), quoted:
> "SECTION 302 Criminal penalties; alternative fine; Anti-Fraud Trust Fund; time limitation for criminal prosecution.--(1) Whoever violates any of the provisions of this chapter is guilty of a felony of the third degree, punishable as provided in s. 775.082, s. 775.083, or s. 775.084."

Subsection (2), quoted:
> "Any person who violates s. 517.301 by obtaining money or property of an aggregate value exceeding $50,000 from five or more persons is guilty of a felony of the first degree"
> "punishable as provided in s. 775.082, s. 775.083, or s. 775.084."

Subsection (3), alternative fine, quoted:
> "a fine that does not exceed the greater of three times the gross value gained or three times the gross loss caused by such conduct, plus court costs and the costs of investigation and prosecution reasonably incurred."

Subsection (4), Anti-Fraud Trust Fund, quoted:
> "Any amounts assessed as costs of investigation and prosecution under this subsection shall be deposited in the trust fund. Funds deposited in the trust fund must be used, when authorized by appropriation, for investigation and prosecution of administrative, civil, and criminal actions arising under this chapter."

Subsection (5), limitations cross-reference, quoted:
> "Criminal prosecution for offenses under this chapter is subject to the time limitations in s. 775.15"

**https://www.flsenate.gov/Laws/Statutes/2025/775.15**

Subsection (8), quoted:
> "A prosecution for a felony violation of chapter 517 or s. 409.920 must be commenced within 5 years after the violation is committed."

Subsection (2)(a) and (2)(b), quoted:
> "A prosecution for a felony of the first degree must be commenced within 4 years after it is committed."
> "A prosecution for any other felony must be commenced within 3 years after it is committed."

**https://www.flsenate.gov/Laws/Statutes/2025/921.0022** offense severity ranking
chart, 2025. Two independent fetches were run against this page, the second
asking specifically whether any row cites 517.301 or 517.302. Rows verified:

| Level | Subsection | Degree | Description, verbatim |
|---|---|---|---|
| **1** | **517.302(1)** | **3rd** | **"Violation of the Florida Securities and Investor Protection Act."** |
| 3 | 517.07(2) | 3rd | "Failure to furnish a prospectus meeting requirements." |
| 4 | 517.07(1) | 3rd | "Failure to register securities." |
| 4 | 517.12(1) | 3rd | "Failure of dealer or associated person of a dealer of securities to register." |

**s. 517.301 appears nowhere in the chart, and neither does s. 517.302(2).**
Confirmed on the second, targeted fetch. **This is exactly the case the standing
warning describes**: the chart row is reliable for the level and its abbreviated
description, "Violation of the Florida Securities and Investor Protection Act",
is far broader than what it actually ranks. It ranks the 517.302(1) third degree
catch-all only. The first degree tier at 517.302(2) is not in the chart at all
and must be ranked through 921.0023, below. **A writer reading the chart row
alone would conclude the whole Act sits at level 1, which is wrong.**

**https://www.flsenate.gov/Laws/Statutes/2025/921.0023**

Title, quoted:
> "Criminal Punishment Code; ranking unlisted felony offenses."

Unlisted felonies fall within these levels, quoted:
> third degree "within offense level 1"; second degree "within offense level 4"; first degree "within offense level 7"; first degree punishable by life "within offense level 9"; life felony "within offense level 10"

**So 517.302(2), a first degree felony not listed in the chart, defaults to
offense level 7.** That is a chart-plus-default derivation, not a chart row, and
the page must present it as what 921.0023 provides rather than as a chart entry.

**https://www.flsenate.gov/Laws/Statutes/2025/921.0024** primary offense points
by level, quoted:
> Level 10: "116"; Level 9: "92"; Level 8: "74"; Level 7: "56"; Level 6: "36"; Level 5: "28"; Level 4: "22"; Level 3: "16"; Level 2: "10"; Level 1: "4"

Subsection (2), quoted:
> "The lowest permissible sentence is the minimum sentence that may be imposed by the trial court, absent a valid reason for departure. The lowest permissible sentence is any nonstate prison sanction in which the total sentence points equals or is less than 44 points, unless the court determines within its discretion that a prison sentence, which may be up to the statutory maximums for the offenses committed, is appropriate."

**The arithmetic the page may state, and the sentence it may not.** A 517.302(1)
charge as the primary offense scores **4 primary offense points**, which is below
both the 44-point line in 921.0024(2) and the 22-point line in 775.082(10).
**The page may say what those provisions require at those point totals. It may
not say what will happen in the reader's case**, because total sentence points
include prior record, additional offenses, victim injury, and other components
this brief has not fetched, and because a prediction is a results claim under
Rule 4-7 regardless of how it is hedged.

**https://www.flsenate.gov/Laws/Statutes/2025/517.021**
> "Commission" means the Financial Services Commission.
> "Office" means the Office of Financial Regulation of the commission.

"Security" is defined across 23 enumerated categories including notes, stocks,
bonds, debentures, certificates of deposit, investment contracts, beneficial
interests, option contracts, and viatical settlement investments. **The
enumeration is reported from the fetch summary, not quoted verbatim; do not
reproduce the list on the page without re-fetching it.**

### UNVERIFIED, and what to check

| Claim | Status | What to check |
|---|---|---|
| Verbatim text of 517.301(1)(a)1., 2., 3. and (2) | **Reported, not verified.** The fetch returned the limbs as bracketed fragments with character counts, indicating truncation by the summarizer rather than by the source. | flsenate.gov/Laws/Statutes/2025/517.301. **Publish blocker for the elements section.** The three limbs are the page's elements list and must be quoted exactly. |
| Verbatim 18 U.S.C. 1348(2) | **Partial.** Returned with a trailing ellipsis. | uscode.house.gov, the `&num=0&edition=prelim` URL form. The commodity clause tail is missing. |
| Whether 1348 requires proof of an actual purchase or sale | **UNVERIFIED** | Case law, not statutory text. Likely outside the C12 allowlist. Do not assert. |
| Who investigates and refers chapter 517 criminal cases | **UNVERIFIED.** 517.021(26) verifies the Office of Financial Regulation is the chapter's regulator, and 517.302(4) verifies that administrative, civil, and criminal actions all arise under the chapter. Neither establishes a referral pathway. | An official Florida source. **Do not describe a referral process, and do not name an OFR division or unit.** |
| Any SEC office, region, or parallel-proceeding practice | **UNVERIFIED and unfetchable.** sec.gov is not on the allowlist. | Do not name an SEC office. If the parallel-proceedings point is wanted, it needs an allowlisted source or an attorney byline. |
| Whether securities fraud is a RICO predicate under 18 U.S.C. 1961(1), and therefore specified unlawful activity for money laundering under 1956(c)(7)(A) | **UNVERIFIED.** FED-01 Section 6 records 1961(1) as unfetched. | uscode.house.gov. **This gates the cross-link to `/white-collar-defense/money-laundering`** in Section 8. Verify before linking on that rationale. |
| Volume for `18 usc 1348`, `Florida securities fraud statute`, `corporate fraud` | **Not pulled**, by standing instruction | Both are ESTIMATE-grade in Section 1 and labelled as such. |
| Whether an AI Overview renders on `securities fraud` at Florida level | **Not observed.** Only the primary query's SERP was retrieved. | A second SERP pull, if a pass is available. |
| "Ponzi scheme" as a statutory or charging term | **UNVERIFIED and probably nonexistent** | Not found in any fetched text. Assistant-question 8 stays unanswered on the record. |

---

## 7. Local specificity

| Element | Detail | Source status |
|---|---|---|
| State circuit | Thirteenth Judicial Circuit, Hillsborough County | **verified**, carried forward |
| Felony courthouse | Edgecomb Courthouse, 800 E. Twiggs Street, Room 101, Tampa | **verified**, hillsclerk.com |
| Second location | Plant City Courthouse, 301 North Michigan Avenue, Room 1071, criminal court services | **verified**, hillsclerk.com |
| Brandon | **BLOCKED**, D7 | Do not use pending attorney confirmation |
| Federal forum | Middle District of Florida, Tampa Division, Sam M. Gibbons United States Courthouse, 801 North Florida Avenue, Tampa FL 33602, clerk (813) 301-5400 | **verified**, flmd.uscourts.gov |
| Division counties | Hardee, Hillsborough, Manatee, Pasco, Pinellas, Polk, Sarasota | **verified**, flmd.uscourts.gov |
| State regulator | Office of Financial Regulation of the Financial Services Commission | **verified as the chapter's regulator**, F.S. 517.021. **Not verified as an investigating or referring agency**, see Section 6. |
| Prosecuting offices | State Attorney, Thirteenth Judicial Circuit; United States Attorney's Office, Middle District of Florida | **verified as entities**; no unit, division, or task force verified. Do not name one. |
| Anti-Fraud Trust Fund | Costs of investigation and prosecution are deposited to it and appropriated back for chapter 517 enforcement | **verified**, F.S. 517.302(4). A genuinely local-flavoured fact that no competitor page carries. |
| Competitive note | Eight of ten organic results and all three local pack entries are investor-side or civil securities practices; Goldman Wetzel holds #10 with a **St. Petersburg** page | **verified** in SERP |

---

## 8. Internal links

| Direction | Target | Note |
|---|---|---|
| Up, silo hub | `/white-collar-defense` | Standard |
| **Down-link inheritance, D12** | `/white-collar-defense/corporate-fraud` | The overview already links **down to this page** in src/lib/site.ts. The reciprocal link back up to the overview is optional and should be **one** link at most, since the overview is C9-exempt and must not accumulate authority as if it were a charge page. |
| **Forum section cross-link** | `/federal-criminal-defense` | **The silo hub, not a sibling page**, because no federal securities fraud page exists. This is the one place this page's forum section differs structurally from the money laundering pair. |
| Sideways, same silo | `/white-collar-defense/wire-fraud` | Rationale: the wire fraud page rests on F.S. 817.034 and 18 U.S.C. 1343, neither of which has an issuer element, so the two pages contrast rather than overlap. **Inferred**, on the statutes, not on any observed charging practice. |
| Sideways, same silo, **gated** | `/white-collar-defense/money-laundering` | **Do not link on the specified-unlawful-activity rationale until 18 U.S.C. 1961(1) is fetched.** See Section 6. |
| Sideways | Attorney bio via `HandledBy` | Renders empty, Open Question 2 |
| Layer 2, hub | `/resources` | |
| **Not linked** | The 33-day rule guide | That question did not surface on this SERP. Linking it here would be the interchangeability Section 4.5 warns about, arriving by habit. |
| **Not linked** | The sentencing calculator | Standing gate, C1 through C8 uncleared. The 4-points-at-level-1 fact makes this page a strong future candidate; it does not open the gate. |

---

## 9. DONE-CRITERIA

| # | Criterion | Status | Note |
|---|---|---|---|
| 1 | 18 U.S.C. 1348 fetched from uscode.house.gov and quoted | **MET** | Section 6. Paragraph (1) verbatim in full, opening clause and penalty verbatim. First URL form 404'd; the working form is recorded. |
| 2 | F.S. 517.301 fetched from flsenate.gov | **MET as to title and structure, UNMET as to verbatim limbs** | Title and connecting language quoted. The three (1)(a) limbs returned truncated and are marked a publish blocker for the elements section. |
| 3 | F.S. 921.0022 checked for offense levels | **MET, and it produced a correction** | 517.302(1) is ranked at level 1. 517.301 and 517.302(2) are absent from the chart. Confirmed on a second targeted fetch. |
| 4 | Statute fetched for scope, not just the chart row | **MET** | The chart row reads "Violation of the Florida Securities and Investor Protection Act", which is broader than what it ranks. 517.301, 517.302, and 921.0023 were each fetched separately. This is the standing warning firing in practice. |
| 5 | The page says which statute is federal and which is Florida | **MET** | Sections 0, 1, 4 and 5. The scope, ceiling, and ranking all differ, and section 2 of the outline is built on the difference. |
| 6 | Primary query with winnability grade and volume | **MET** | 6-12mo inferred, 10/month Tampa DMA, 140/month Florida on the informational term. keywords.md is silent on securities fraud, recorded. |
| 7 | Verbatim PAA with disposition per question | **MET** | Section 2. Four questions, two refused as fee questions, one inverted to body copy, one to FAQ. |
| 8 | Assistant-question set, 6 to 8, with the FAQ named | **MET** | Section 3. Eight questions, four to the FAQ, one recorded and deliberately unanswered. |
| 9 | Section-by-section outline against the level 3 template | **MET** | Section 4, with the fourteen-section deviation stated and each addition tied to a fetched provision. |
| 10 | C9 in the c9 field's exact shape, with the swap test | **MET** | Section 5. Collision-checked by hand against all ten entries in `CHARGE_C9`. |
| 11 | D12 inheritance handled | **MET** | Section 8. The overview links down; the reciprocal link is capped at one and the reason is stated. |
| 12 | Local specificity with source status per element | **MET** | Section 7. Brandon excluded per D7. |
| 13 | Internal links including silo hub, overlap sibling, bio slot, Layer 2 | **MET, with the sibling recorded as nonexistent** | Section 8. There is no federal securities fraud page, so the forum cross-link goes to the silo hub. That is a real structural difference and is not smoothed over. |
| 14 | Verbatim text of 517.301(1)(a)1., 2., 3. | **UNMET** | Returned truncated. Publish blocker for the elements section, recorded in Section 6 with the retry target. |
| 15 | Verbatim tail of 18 U.S.C. 1348(2) | **UNMET** | Returned with a trailing ellipsis. |
| 16 | Verbatim 23-category "security" definition in 517.021 | **UNMET, and possibly not worth a pass** | Reported from summary. The page can cite the breadth without enumerating; enumerating requires a re-fetch. |
| 17 | Who investigates and refers chapter 517 criminal cases | **UNMET** | Nothing allowlisted establishes a referral pathway. Outline section 8 is written to state only what 517.302(4) and 517.021 support. |
| 18 | Second SERP for the informational term `securities fraud` | **UNMET** | Only the primary query's SERP was supplied. The YEARS grade on the head term is inferred from the FED-01 pattern, not observed. |

**Passes used: 1.** If a second is spent, it goes to 517.301(1)(a) verbatim
first, since that is the publish blocker, then to 18 U.S.C. 1961(1), which
unlocks the money laundering cross-link.
