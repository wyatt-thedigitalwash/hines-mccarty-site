# BRIEF: Florida sex crimes

Wave 4. `/criminal-defense/sex-crimes-defense`. Research date 2026-08-13.
Outline and source material only, no drafted page copy.

**Territory.** This brief covers F.S. 800.04 (lewd or lascivious offences
committed upon or in the presence of persons less than 16 years of age), F.S.
847.0135 (computer pornography, solicitation, and traveling to meet a minor),
F.S. 943.0435 (registration as a sexual offender), F.S. 775.21 (the sexual
predator designation), and F.S. 800.03 (exposure of sexual organs).

**F.S. 794.011 is not this brief's.** It belongs to the sibling page
`/criminal-defense/sexual-battery-defense`. Nothing here rests on it. Where it
appears below it appears only as one entry in a statutory list that some other
statute enumerates, and every such appearance is flagged in Section 6 so a later
reader can re-check it.

---

## 0. THE CLASSIFICATION QUESTION, AND THE RECOMMENDATION

The task set for this brief is to decide whether this is a category hub or a
charge page, and to recommend rather than decide unilaterally. Here is the
recommendation, the reasoning, and the thing the reasoning turns on.

### 0.1 The recommendation

**Classify it as a category overview. Do not make it `c9Exempt`. Give it a real
C9 resting on a real statute, and keep the statute, penalties, and elements
sections that D12 strips from an exempt entry.**

That is a third state the data model does not currently have. Today
`src/lib/site.ts` offers two: a charge page with a `c9` assertion, or an entry
with `c9Exempt` set, which the level 3 template reads and responds to by
omitting the statute, penalties, and elements sections. This page needs the
classification of the second and the treatment of the first.

### 0.2 Why it is not a charge page

No Florida offence is named "sex crimes". A person is charged under 800.04, or
under 847.0135(3), or under 847.0135(4), or under 943.0435(9)(a), or under
800.03, and those are five different offences in three different chapters with
maxima running from a first degree misdemeanour to a life felony. The template's
item 4, "what the state has to prove", cannot be written once for that set,
because the elements of a lewd or lascivious exhibition under 800.04(7) and the
elements of a failure to reregister under 943.0435(14) share nothing.

Writing it as a charge page would also breach the copy-level variation
requirement added to CASES-WE-DEFEND-PLAN.md Section 4.3 on 2026-08-13, which
records that three existing pages already open with "this charge does not exist
under that name in Florida" and that a fourth doing the same makes the set read
as a template.

### 0.3 Why it is nevertheless not the corporate fraud case

D12's stated ratio is precise, and it is worth quoting rather than paraphrasing,
because the whole question turns on whether it reaches this page:

> "**Neither side rested on a statute.** There is no corporate fraud offence in
> the Florida Statutes or in the United States Code. [...] A page with no statute
> fails C9 by construction: there is no element that could be false if another
> charge were swapped in, because there is no charge."

Every clause of that is false here. There are charges. There are statutes. There
are elements. The distinction is not that this page names one offence and
corporate fraud named none; it is that this page names **several**, and the
Florida Statutes themselves group them.

That last point is the load-bearing one and it is verifiable rather than
rhetorical. **Florida law defines this category twice, by enumeration.** F.S.
943.0435(1)(h)1.a lists the twenty-odd statutes whose conviction makes a person a
"sexual offender" for registration purposes, and F.S. 775.21(4)(a)1 lists the
statutes that support a "sexual predator" designation. Both lists are fetched and
quoted in Section 7. There was no analogous list for corporate fraud, and there
could not have been, because the Legislature has never grouped anything under
that name.

So the page has a statutory boundary. It is not a marketing category, it is a
statutory one, and the boundary is checkable: F.S. 800.03 exposure of sexual
organs sits inside the colloquial category and **outside** both enumerations, so
a first conviction under it does not produce registration. That is a real fact
about the edge of the category, it is useful to a reader, and no competitor page
graded in Section 2 states it.

### 0.4 The decisive practical argument

`src/lib/site.ts` already anticipated this case in the doc comment on the
`c9Exempt` field:

> "This is not an escape hatch for a page that is merely hard to differentiate.
> **If a page rests on a statute, it is checked.**"

This page rests on five. Under the project's own rule it is checked.

And the consequence of exempting it would be perverse. D12 records that the level
3 template "reads the flag and omits the statute, penalties, and elements
sections on an exempt entry, since those fields are not missing there, they are
inapplicable." On this page they are the strongest material available. Section 7
carries a twenty-three-row verified penalties and offense level table drawn from
800.04, 847.0135, 943.0435, and 775.21, and **not one competitor page graded in
Section 2 carries a table of any kind or cites a single statute section number.**
Marking the page exempt would delete its best asset to satisfy a flag whose
stated condition it does not meet.

### 0.5 What the recommendation requires of whoever accepts it

Three things, all small:

1. A second `C9Exemption`-shaped record, or a comment on the `c9` entry, saying
   the page is a category overview that is checked anyway. The point of D12's
   bookkeeping was that "excused-by-decision and not-yet-written are different
   states"; a third state, "category page that still carries a differentiator",
   needs the same explicitness or it will be mistaken for one of the other two.
2. A ruling on whether the template's item 4 (elements) may be replaced. This
   brief's Section 5 substitutes a per-statute elements grid for the single
   elements list, and that is a substitution, not a compliance.
3. Confirmation that a category page may hold a C9. Nothing in the plan forbids
   it; nothing expressly permits it either.

**Recommended, not decided.** If the answer comes back that a category page must
be exempt, the fallback is stated at Section 6.5: split the registration material
onto its own Layer 2 guide so the verified statutory substance survives the
classification.

---

## 1. Queries and intent

### 1.1 Primary, commercial

**`sex crimes attorney Tampa`** and **`sex crimes lawyer Tampa`**

- **Grade: YEARS.** Agrees with `docs/research/keywords.md` line 43 ("Most
  specialist-entrenched SERP; dedicated exact-match microsites and whole-brand
  specialists") and with `avoid.md` item 2. **No contradiction to record.**
  Section 2 refines the reason rather than the grade.
- **Volume, verified 2026-08-13:** 70/month Florida, 70/month Tampa-St
  Petersburg DMA, competition LOW.
- **CPC, verified 2026-08-13, and a correction:** **$48.87 at the Florida state
  level and $23.10 at the Tampa DMA level.** The brief was tasked with $48.87 at
  both. The DMA figure in `w4_data.json` is $23.10, with competition index 9
  against 19 at state level. Both figures are recorded; the state figure is the
  higher and the one the strength argument below rests on, but a page plan that
  quotes $48.87 as the Tampa number is quoting the Florida number.
- **The two keywords report identically at every level.** That is Google Ads
  merging close variants into one reported group. **They are 70, not 140.**
  Recorded because summing them is the obvious mistake.

**Why this term is commercially serious, argued without the Florida-equals-DMA
tautology.** Florida volume equalling DMA volume is true of every city-named
term in this pull and proves nothing; a term containing the word "Tampa" is
searched from Tampa. The argument is the two absolute numbers:

1. **70/month is the third-highest measurable Tampa DMA figure anywhere in this
   project's corpus.** TEMPLATE-FINDINGS Section 5 recorded the full wave 1 and
   wave 2 DMA pull: `criminal defense attorney Tampa` 2,400, `domestic violence
   lawyer Tampa` 90, `federal criminal defense attorney Tampa` 20, `embezzlement
   lawyer Tampa` 10, `criminal defense attorney Brandon FL` 10, and **seven
   charge terms returning no data at all**. This term sits above every charge
   term in that list except domestic violence, and above the federal head term.
   It is the only wave 4 term with measurable commercial volume of any kind.
2. **$48.87 is a keyword-level CPC, and the wave 4 comparison set makes it
   stark.** The other two wave 4 terms carrying any CPC are `lewd and lascivious
   florida` at $11.50 and `stand your ground florida` at $0.50. This is roughly
   four times the next wave 4 commercial CPC and roughly ninety-eight times the
   CPC of the highest-volume wave 4 term. **ESTIMATE on the ratios only; the two
   CPCs are verified.**

**One honesty note that must not be smoothed.** $48.87 is a keyword-level CPC
and the $31.11 to $97.54 and $50.00 to $65.41 figures in TEMPLATE-FINDINGS are
top-of-page bid ranges. They are different measurements and should not be ranked
against each other as though they were the same. What can be said is that this
term's CPC falls inside the band those two ranges describe, which makes it one of
the most expensive clicks measured in this market.

**And the absolute size stays small.** 70 searches a month is roughly two a day
across the whole DMA. Even top-of-page organic placement, which this page is not
going to hold, returns a handful of visits. **The page is not justified by this
term and must not be planned as though it were.** Its justification is
CASES-WE-DEFEND-PLAN.md Section 7: capability demonstration and referral
conversion. What the CPC establishes is that the individual visitor is worth a
great deal, which is an argument about how carefully the page is written, not an
argument about traffic.

### 1.2 Primary, informational, and the trap

**`florida sex offender registration`**

- **Grade: excluded from the winnable set. Not YEARS, excluded.**
- **Volume: no data at Florida level and no data at Tampa DMA level.**
  verified 2026-08-13. "No data" means below Google Ads' reporting threshold,
  not zero.
- **The audience finding, which is the reason for exclusion.** Organic positions
  1, 2, and 4 are all `offender.fdle.state.fl.us`: the offender search form, the
  search landing page, and the registry FAQ. Position 7 is `tampa.gov`
  ("Sexual Predator/Offender Registry"), position 11 and 13 are `broward.edu`, 15
  is `claysheriff.com`, 19 is `seminolesheriff.org`, 22 is `southfloridaicac.org`.
  Related searches, verbatim: "Florida sex offender registration search",
  "Florida sex offender registration online", "Florida sex offender registration
  lookup", "FDLE Sex Offender list", "Pasco county sex offender registration
  Office", "FDLE Sex Offender search neighborhood", "Florida sex offender
  registration requirements", "FDLE sex Offender map". **Six of eight are lookup
  intent.** This is the public looking registrants up, a college publishing a
  campus notice, and sheriffs' offices serving neighbourhood searches. It is not
  a defendant seeking counsel.
- **The exclusion is doubly grounded, and the second ground is stronger than the
  task's framing assumed.** There is no misdirected volume to subtract, because
  **there is no measurable volume at all.** The term returns no data at either
  geography. So the finding is not "this volume belongs to another audience and
  is therefore not addressable"; it is "there is no measured volume here, and the
  SERP shows that what unmeasured demand exists belongs to another audience".
  Both point the same way and the second is the one to record.

**What survives the exclusion, and it is not nothing.** The registration
*subject matter* is not the same thing as the registration *query*. Three of the
four PAA questions on this SERP are answerable and defendant-relevant (Section
3), and the statutory material behind them is the most concrete verified content
this brief produced (Section 7). **The subject stays on the page. The term is
not a target.**

### 1.3 Secondary, and where this page's actual search value sits

| Query | FL vol | DMA vol | CPC | Grade | Note |
|---|---|---|---|---|---|
| `lewd and lascivious florida` | **70** | **20** | **$11.50** | **6-12mo**, inferred | Squarely F.S. 800.04. The largest measurable statewide term this page can hold, and statute-shaped rather than firm-shaped, which is the shape TEMPLATE-FINDINGS Change 1 says the opening paragraph is written for. |
| `solicitation of a minor florida` | 10 | 10 | none | **6-12mo**, inferred | F.S. 847.0135(3). Tiny, but the online-sting fact pattern is the one this page can serve better than anything in the SERP. |
| `sex offender registry florida rules` | no data | no data | none | **Not a target** | No measurable volume. Subject matter served from the page anyway. |
| `florida sex offender registration` | no data | no data | none | **Excluded, wrong audience** | Section 1.2. |
| `sex crimes attorney Tampa` / `lawyer Tampa` | 70 | 70 | $48.87 / $23.10 | **YEARS** | Section 1.1. |

**The reframing this table forces.** This page's best search asset is not its
name. It is **F.S. 800.04**. `lewd and lascivious florida` carries measurable
volume at both geographies, carries a real CPC, is informational and statutory
rather than brand-driven, and sits in a SERP position that a cited, tabled,
dated page can contest inside a year. That is the opposite of the head term's
profile, and it is a further argument for Section 0's recommendation: the value
of this page comes from the statutes it carries, so stripping the statute and
penalties sections under a `c9Exempt` flag would remove the only part of it with
a measurable search case.

`lewd and lascivious florida` was not pulled as a SERP this session, so its grade
is **inferred from volume, CPC, and statutory shape, not from an observed SERP.**
Recorded as a gap in Section 10.

---

## 2. The SERP field

Pulled 2026-08-13, DataForSEO, `location_code 1015214` (Tampa), desktop, depth 20.

### 2.1 `sex crimes attorney Tampa`, what is actually there

Item types returned, in order: `ai_overview`, `organic`, `people_also_ask`,
`knowledge_graph`, `google_reviews`. 23 items, 129 reported results.

**Three absences, all recorded rather than smoothed:**

- **No featured snippet.** Consistent with TEMPLATE-FINDINGS Section 1.1.
- **No related searches.** Consistent with the two-of-ten rate recorded there.
- **No local pack.** This one is a genuine departure. TEMPLATE-FINDINGS Section 0
  recorded "local packs rendered on **10 of 10** primary queries tested in Phase
  B". This query is Tampa-pinned and returns none. keywords.md line 87 speculated
  exactly this ("packs may be suppressed for sex-offense queries, unverified for
  Tampa"). **It is now verified as an absence on a Tampa-pinned pull.** In the
  pack's place sits a right-hand knowledge panel for Hanlon Law with a Google
  reviews unit (4.7, 103 reviews, verified). The practical consequence is that
  the local-authority ladder in DOSSIER.md Section 3 does not govern this query.

**Organic top ten, verbatim, by `rank_group`:**

| # | Domain | Title |
|---|---|---|
| 1 | tampafloridacriminallawyer.com | "Sex Crimes \| Tampa Criminal Defense Lawyer ..." (Mayberry Law Firm) |
| 2 | **tampasexcrimesattorney.com** | "Tampa Sex Crimes Lawyer \| Hillsborough County Sexual ..." (Hanlon Law microsite) |
| 3 | attorneys.superlawyers.com | "Best Tampa, FL Sex Offenses Attorneys" |
| 4 | brancatolawfirm.com | "Affordable Sex Offense Attorney Tampa" (blog post, dated Jun 23 2025) |
| 5 | criminalattorneytampa.net | "Sex Crime Defense in Tampa Florida" (Hanlon Law main site) |
| 6 | mikeglaw.com | "Mike G Law: Tampa Criminal Defense Attorney" (homepage) |
| 7 | scrivenlawfirm.com | "Tampa Sex Crimes Lawyer" |
| 8 | djfernandezlaw.com | "Tampa Sex Crimes Lawyer" |
| 9 | nocuffstampa.com | "Tampa Sex Crimes Lawyer" |
| 10 | familymaritallaw.com | "Tampa Sex Crimes Attorney - Free Consultation" |

Positions 11 through 20 add amarosalaw.com, attorneyatlawmagazine.com,
tampasexcrimesattorney.com again ("Recent Wins"), freylegal.com,
mgrlawoffices.com, tampabayfloridalawyers.com (St. Petersburg),
tpatrialattorneys.com (StechLaw), brancatolawfirm.com again ("Comparing Tampa Sex
Crimes Lawyers"), and floridasexcrimeattorney.com (Whittel & Melton).

**The SERP has moved since keywords.md.** keywords.md line 83 recorded
superlawyers at #1, Scriven at #2, Hanlon's main site at #3, Mike G at #4, and
the Hanlon microsite at #5. Today the microsite is #2, Mayberry is #1, Scriven
has fallen to #7, Mike G to #6, and the directory to #3. **Firm pages have
displaced the directory at the top.** The grade does not change; the reason it is
YEARS is now less about directories being hard to leapfrog and more about aged
single-topic brands holding every slot.

### 2.2 The AI Overview, and a correction to the framing

Nine top-level citations. Distribution by domain, verified:

| Domain | Citations | Firm |
|---|---|---|
| tampasexcrimesattorney.com | **3** | Hanlon Law |
| mikeglaw.com | 2 | Mike G Law |
| criminalattorneytampa.net | 1 | **Hanlon Law** |
| tampafloridacriminallawyer.com | 1 | Mayberry |
| tpatrialattorneys.com | 1 | StechLaw |
| nocuffstampa.com | 1 | Kevin Hayslett / no-cuffs |

**The correction.** The task described `tampasexcrimesattorney.com` as "a
dedicated single-practice competitor". It is not an independent competitor. It is
**Hanlon Law's exact-match satellite**, confirmed by its own page title ("Sex
Offenses | Tampa Sexual Abuse Lawyers Hanlon Law") and its shared phone number
with criminalattorneytampa.net. Counted properly, **Hanlon holds four of nine AI
Overview citations across two domains, two of the top five organic slots, and
the knowledge panel.** That is a materially stronger position than three of nine
from one microsite, and it is worse news, not better.

**What the AI Overview says, and what it names.** The four elements are: an
opening naming "Hanlon Law, Mike G Law, StechLaw Criminal Defense, and Mayberry
Law Firm"; a stakes block; a firm-by-firm description block; and an immediate
steps block ("Do Not Speak to Police", "Avoid Contact", "Schedule a
Consultation"). This is the commercial recommendation pattern TEMPLATE-FINDINGS
Section 1.2 recorded, in its purest form: four of four elements are about which
firm to hire, and **not one cites a statute.**

Two of the nine citations are out of market entirely (`giannicriminallaw.com`,
Nassau County NY; `laurasiemers.com`, Melbourne FL). Recorded because it shows
the model reaching outside Tampa for the "what to do next" element, which is the
element with the least local firm content behind it.

### 2.3 Competitor pages graded

Four pages fetched and graded 2026-08-13. Word counts are **ESTIMATE**, basis:
whitespace token count of the de-tagged body including navigation chrome, so
they run high.

| Page | Words | Table | H2/H3 | FAQ block | FAQPage schema | Statute sections cited | Offense level | Date | Courthouse or 13th Circuit |
|---|---|---|---|---|---|---|---|---|---|
| tampasexcrimesattorney.com/ (**organic #2**) | ~2,050 | **0** | **0** | no | no | **none** | no | no | **no** |
| tampasexcrimesattorney.com/sex-offenses.html (AI Overview cite) | ~666 | 0 | **0** | no | no | **none** | no | no | no |
| tampafloridacriminallawyer.com/practice-areas/sex-crimes/ (**organic #1**) | ~1,470 | 0 | 20 | no | no | **943.0435 only, unnumbered mention** | no | no | no |
| tpatrialattorneys.com/tampa-sex-crimes-lawyer/ | ~2,430 | 0 | 48 | no | no | **none** | no | no | no |

**Read this table carefully, because it is the most useful finding in the brief.**
The page holding organic position 2 on the most expensive term in wave 4 has
**zero H2 or H3 headings and cites no statute at all.** The two numeric strings on
it that match a statute pattern are its own phone numbers. The page holding
position 1 mentions 943.0435 once without a subsection. The longest page in the
set, StechLaw at roughly 2,430 words with 48 headings, cites nothing.

**Zero of four carries a table. Zero carries an FAQ block or FAQPage schema.
Zero carries an offense level. Zero carries a last-reviewed date. Zero names a
courthouse, a circuit, or a sheriff's registration location.**

This is not the picture TEMPLATE-FINDINGS' 2026-08-13 amendment predicted. That
amendment warned that currency, bylines, and FAQ blocks are "contested in the
higher-volume state charge niches and open only in the thinner ones", citing
longwelllawyers.com and brancatolawfirm.com as pages that carry all three. **In
this niche every one of those dimensions is open, on the most expensive term in
the corpus.** The finding is recorded as a scoped observation of four pages, not
as a market-wide claim, because the generalisation is exactly what failed last
time.

**Which forces the honest grading the task asked for.** The field is entrenched
by **brand and domain age, not by content quality.** avoid.md item 2 said so
already and this pass confirms it with evidence avoid.md did not have. The
practical consequence is uncomfortable and should be stated plainly: **a
better-researched page will not move this SERP.** Building a cited, tabled,
dated page here buys three things that are not head-term rankings, and the plan
should be honest that those are the whole return:

1. **AI Overview citation eligibility.** Section 4.7 of the plan is about being
   named in the commercial AI Overview. The model currently has no statutory
   source in this niche to cite and is reaching to Long Island for its "what to
   do next" element. A page carrying the actual statute is the only candidate in
   view.
2. **The `lewd and lascivious florida` and `solicitation of a minor florida`
   long tail**, which is statute-shaped and uncontested.
3. **Referral conversion**, which is the stated purpose (Section 5.6).

### 2.4 One compliance observation about the field

The position 2 page's own headings are "Why Hire Us to Defend Your Sex Charge?"
and it states that its attorney "has successfully defended clients on a wide
range" of these charges. The same domain ranks a "Recent Wins" page at position
15. Mike G Law's snippet reads "We defend your innocence [...] and fight
aggressively for your rights."

**None of that is a route available to this page.** Florida Bar Rule 4-7.13(b)
and the standing rails in CASES-WE-DEFEND-PLAN.md Section 12 put past results,
outcome language, and "fight the charge" framing out of reach, and W4-SPEC makes
this the wave where the rule is hardest to hold. Recorded here so that the
drafting brief does not read the SERP and conclude that matching its tone is the
competitive move. **It is the field's positioning and it is not this firm's.**
The compensating move is the one Section 5 builds: statutory substance, process,
and the registration consequences, which are verifiable and which nobody in this
SERP publishes.

---

## 3. People Also Ask, verbatim, with disposition

Both queries. Eight questions. DataForSEO returned the question titles without
expanded answers on this pull, so the questions are verbatim and the answers were
not observed.

### 3.1 On `sex crimes attorney Tampa`

| # | Question, verbatim | Disposition | Reasoning |
|---|---|---|---|
| 1 | "How much is a sex crime lawyer?" | **Refused** | Fee question. TEMPLATE-FINDINGS Section 4A records two prior fee refusals across wave 1 and 2. A fee answer on a firm's own page is a solicitation-adjacent claim, and no honest general answer exists. |
| 2 | "What is the 33 day rule in Florida?" | **Refused, link out** | Section 11A.2 rule 5. This is its **eighth** appearance across this project's charge SERPs (seven recorded in TEMPLATE-FINDINGS Section 1.3, plus this one). Links to the Layer 2 33-day correction guide. **Do not restate W2-04's version of the correction.** REVIEW-QUEUE.md records that Fla. R. Crim. P. 3.134 was amended effective 2025-07-01 by SC2022-1123, 411 So. 3d 385, adding a new subdivision (b), and that a person on pretrial release is now on a 60-day and 63rd-day track rather than the 30-day and 33rd-day track the guide's title refers to. That is why the guide sits on a 3-month cadence. **This page links and says nothing further**, which is the correct posture for a rule that has moved once and may move again. |
| 3 | "Where can I find sex crime lawyers in Florida?" | **Refused** | Directory-shaped and adjacent to Section 11A.2 rule 6. Answering it on the firm's own page is either a directory listing or an implied superiority claim. Neither is available. |
| 4 | "Do sex crimes have a statute of limitations in Florida?" | **FAQ-eligible, and it is the only one** | Answerable in two sentences from verified primary source, and the answer is charge-specific to this page's territory. **F.S. 775.15(18)**: a prosecution under 800.04(4) or (5) with a victim under 16 may be commenced at any time, unless the offender was under 18 and no more than 4 years older than the victim. **F.S. 775.15(13)(a)**: where the victim of an 800.04 or 847.0135(5) violation is under 18, the limitation period does not begin to run until the victim turns 18 or the violation is reported, whichever is earlier. Both quoted in Section 7. |

**One in four usable. Exactly the observed yield.** TEMPLATE-FINDINGS Section 4A
recorded 38 PAA questions producing 18 usable and 10 FAQ-eligible across ten
prior briefs. This set produces one of four, which is inside the band, and it is
the second-most hostile set observed after W2-04's zero of four.

### 3.2 On `florida sex offender registration`

| # | Question, verbatim | Disposition | Reasoning |
|---|---|---|---|
| 5 | "What are the requirements to register as a sex offender in Florida?" | **Body copy, outline section 8** | Answerable, defendant-relevant, and fully verified from F.S. 943.0435(2)(a)-(b) and (3). Too long for a two-sentence FAQ answer under rule 4, so it becomes a body section rather than an FAQ entry. |
| 6 | "What are the new sex offender laws in Florida for 2026?" | **Refuse to answer as asked. Record the absence as the finding.** | See 3.3. |
| 7 | "How long can a sex offender visit Florida without having to register?" | **FAQ-eligible** | Two sentences, verified. F.S. 775.21(2), incorporated into 943.0435(1)(f): "temporary residence" is a place a person abides "for 3 or more days in the aggregate during any calendar year", with the first day excluded and any part of a calendar day counting as a day. FDLE's own FAQ 7 confirms the 48-hour report obligation follows from establishing that residence. Quoted in Section 7. |
| 8 | "What happens if you don't register as a sex offender in Florida?" | **FAQ-eligible, and it is the page's C9 anchor** | Two sentences, verified from F.S. 943.0435(9)(a) and (9)(b). This is the question the page is best positioned to answer in the entire corpus and it is where Section 6's differentiator sits. |

### 3.3 PAA #6, the 2026 question, checked rather than assumed

The task required this be verified rather than answered from assumption. It was.
**Three independent checks, all from allowlisted sources, all negative:**

1. **flsenate.gov publishes no 2026 edition of the Florida Statutes as of
   2026-08-13.** The year selector on the statutes index runs 2025 back to 1997,
   and the page states its own rule: "The Florida Statutes are updated annually
   after the conclusion of a regular legislative session, typically published in
   July/August." Requesting `/Laws/Statutes/2026/943.0435` silently serves the
   2025 index. verified.
2. **The statutory histories of both registration statutes end in 2025.**
   F.S. 943.0435 History ends "s. 2, ch. 2025-134; ss. 10, 41, ch. 2025-156."
   F.S. 775.21 History ends "s. 1, ch. 2025-134; s. 4, ch. 2025-156." No 2026
   chapter law appears in either. verified.
3. **FDLE's own registrant notice is the 2025 one.** Its title is "2025
   Registration Law Updates for Sexual Offenders and Sexual Predators", it says
   "Pursuant to House Bill 1351", and it is stamped "EFFECTIVE OCTOBER 1, 2025".
   The site links a 2025 notice and a 2024 notice. **There is no 2026 notice.**
   verified.

**The finding, and it is a finding rather than a gap:** the most recent
verifiable change to Florida's sexual offender registration law took effect
**1 October 2025**, and **no 2026 change is verifiable from any allowlisted
source as of 2026-08-13.**

**Disposition.** The question is not answered in the form asked, because "what
are the new laws for 2026" invites a page to assert a change it cannot verify,
and a page that says "nothing changed in 2026" is making an unsourced negative
claim. **What the page carries instead** is the substance of the change that did
happen, dated to its effective date: the in-state travel residence category, the
48-hour DHSMV reporting rule for residence and name changes, the address
verification cadence (once per calendar year for offenders, four times for
predators), the 3-week window to respond to verification correspondence, and the
expanded employment-information reporting. All quoted in Section 7. That answers
the reader's real question, is fully sourced, and carries a date the reader can
check, which is what the currency policy in Section 9 exists for.

This also becomes the page's **off-cycle refresh trigger** under Section 9.3: the
2026 statutes edition publishing in July or August 2026 is the event that
requires this page to be re-fetched.

---

## 4. The question set a person would ask an AI assistant

Per TEMPLATE-FINDINGS Section 4A, this is where the FAQ block actually comes
from. Twelve questions, drafted against the C9 test at the question level and
the two-sentence answerability test in Section 11A.2 rule 4.

1. "I was arrested in Hillsborough County for a lewd and lascivious charge. What
   does that actually mean under Florida law?"
2. "What is the difference between lewd or lascivious battery, molestation,
   conduct, and exhibition in Florida?"
3. "Does it matter that I did not know how old they were?"
4. "The person I was talking to online turned out to be a police officer. Is
   that a defence?"
5. "I never met anyone and I never touched anyone. How is this a second degree
   felony?"
6. "Will I have to register as a sex offender, and for how long?"
7. "What happens if I don't register, or if I register late?"
8. "What is the difference between being a sexual offender and being a sexual
   predator in Florida?"
9. "Do I have to report my email addresses and social media usernames?"
10. "How long does the state have to file charges?"
11. "Where do I report if I live in Hillsborough County?"
12. "Can this ever be sealed or expunged?"

**FAQ block: questions 3, 4, 7, and 8, plus PAA #4 and PAA #7. Six entries, the
top of the three-to-six band in Section 11A.2 rule 1.**

Why those six, tested one at a time against "askable about this and nonsensical
about any other page in the corpus":

- **Q3** is answered by F.S. 800.04(3), which forecloses ignorance of age,
  misrepresentation of age, and bona fide belief of age as defences by name. The
  sentence is nonsensical on any page in the corpus that is not about an
  age-element offence, and it is a statutory text this page owns rather than
  shares with the sexual battery page (which has its own age provisions in a
  statute this brief does not touch).
- **Q4** is answered by the sentence appearing twice in F.S. 847.0135: "The fact
  that an undercover operative or law enforcement officer was involved in the
  detection and investigation of an offense under this section shall not
  constitute a defense to a prosecution under this section." No other statute in
  the corpus says this.
- **Q7** is the C9 anchor. F.S. 943.0435(9)(a) and (9)(b).
- **Q8** is F.S. 775.21(4)(a)1.a against 1.b: two routes to the designation. See
  Section 6.4, where this is recorded as the reserve C9.
- **PAA #4** is F.S. 775.15(18) and 775.15(13)(a).
- **PAA #7** is the three-day temporary residence definition.

**Excluded from the FAQ, on the record with reasons:**

- **Q5** ("I never met anyone and I never touched anyone") is a real and common
  question and its statutory answer is verified, but as phrased it invites an
  answer that characterises the seriousness of the conduct. W4-SPEC forbids
  minimisation as firmly as it forbids the opposite. **The substance goes into
  body copy** (outline section 5), stated as what the statute reaches, with no
  commentary on whether that is a lot or a little.
- **Q1** is the direct-answer paragraph, not an FAQ entry.
- **Q2** is the penalties table's job.
- **Q6, Q9, Q11** are body copy in outline sections 8 and 9. Q6 in particular
  cannot be answered in two sentences honestly, because F.S. 943.0435(11) sets
  lifetime registration and then carves a 25-year petition path with nine
  excluded conviction categories.
- **Q10** duplicates PAA #4 and is dropped in its favour.
- **Q12** is **refused pending verification.** The sealing and expunction
  statutes at F.S. 943.0585 and 943.059 were not fetched this session and this
  brief will not state from recall whether these offences are excluded. Section
  10 records it. Until verified, the page links to
  `/resources/tools/seal-expunge-eligibility` and says nothing.

**No outcome question survived drafting and none was written.** "Can this be
dropped", "what are my chances", "how do I beat this" were all considered and
none appears above. That is the W4-SPEC rail, applied at the drafting stage
rather than as a filter afterwards.

### 4.1 C15 compliance, and a gap it exposes

Done-criterion C15 requires every FAQ entry to carry a `source` and, where
research-derived, its `grade`. For this page:

| FAQ entry | `source` | `grade` |
|---|---|---|
| Q3, mistake of age | `drafted` | none |
| Q4, undercover officer | `drafted` | none |
| Q7, failure to register | `drafted` | none |
| Q8, offender against predator | `drafted` | none |
| PAA #4, limitations | `PAA, sex crimes attorney Tampa, 2026-08-13` | none |
| PAA #7, visiting Florida | `PAA, florida sex offender registration, 2026-08-13` | none |

**Not one entry is keywords.md-derived, and that is a finding rather than an
oversight.** Section 11A.2 rule 2 says questions come from keywords.md. For this
page keywords.md has nothing to give: it carries one entry for `sex crimes
attorney Tampa` and no entry at all for sex offender registration, and "lewd and
lascivious" and "solicitation" appear in it only inside a single intent line
(keywords.md line 82) with no grade of their own. **`solicitation of a minor`
appears nowhere in the repository.**

Four `drafted` entries out of six is the highest drafted proportion of any charge
page in the corpus. It is defensible because the assistant-question method is
what TEMPLATE-FINDINGS Section 4A found actually fills FAQ blocks, and because
the underlying statutory answers are all verified. It is recorded here so nobody
mistakes it for measured demand. **The remedy is a keywords.md pass on the two
statute-shaped terms in Section 1.3**, which is the same second-pass target as
criterion 33.

---

## 5. Section-by-section outline

Against the level 3 template in CASES-WE-DEFEND-PLAN.md Section 4.3, with
TEMPLATE-FINDINGS Changes 1, 2, and 3 applied. **Substitutions are marked.**

| # | Section | What it must contain, for this page specifically |
|---|---|---|
| 1 | H1 and the direct answer | Per Change 1: 40 words, standing alone, naming a statute in the same paragraph. States that Florida has no offence called "sex crimes" and that the phrase covers several statutes, then names F.S. 800.04 as the one most Hillsborough state-court charges in this area rest on. **Opening move must differ from the three existing "no offence of that name" pages** per the Section 4.3 copy-level variation requirement: those three lead with the substitute statute; this one leads with the fact that there are five, not one. |
| 2 | Which statute you are actually charged under | **SUBSTITUTION for template item 2.** A single statute section cannot serve a category page. This is a five-row orientation block: 800.04, 847.0135, 800.03, 943.0435, 775.21, each with its statutory title verbatim and one line on what it reaches. It is also where the page states which offences are **not** here, and links out: sexual battery under chapter 794 to the sibling page, federal charges to the federal silo. |
| 3 | Degrees, penalties and offense levels | Per Change 2. The 23-row verified table in Section 7.6. Columns: subsection, degree, statutory maximum, F.S. 921.0022 offense level. **No scoresheet link** until C1 through C8 clear (Section 4.2 and 5.6). Carries the honest note that F.S. 800.03 does not appear in the ranking chart at all. **This is the single largest content gap in the SERP** and it is the section a `c9Exempt` flag would delete. |
| 4 | What the state has to prove | **SUBSTITUTION for template item 4.** Not one elements list, a per-statute grid, because the elements of 800.04(7) exhibition and 943.0435(9)(a) failure to register share nothing. Three columns: statute, the conduct element, and the status or age element. Carries F.S. 800.04(2) and (3) verbatim, which is where the prohibited-defence material sits. |
| 5 | The online cases, and what F.S. 847.0135 actually requires | The section that serves assistant-questions 4 and 5 and the `solicitation of a minor florida` term. Three verified points, stated as statutory text and nothing more: (a) the statute reaches "another person believed by the person to be a child", so the existence of an actual child is not an element; (b) undercover involvement is expressly not a defence, twice stated in the statute; (c) 847.0135(3) makes each separate use of the service chargeable as a separate offence, and misrepresenting one's own age raises the offence from third degree to second degree. **Process and text only. No characterisation of the conduct and no commentary on whether the statute is broad.** |
| 6 | How the defence is approached | Process only, per Section 12, and per the standing project rule at WEBSITE-PLAN.md lines 302 to 303: "Sensitive pages (sex offenses, CSAM): lead with process, rights, discretion; calm tone, never fear-marketing." **That rule names this page specifically and predates W4-SPEC, which restates it.** What was preserved, what the discovery obligations are, what the timeline is, what decisions are made by whom. No dismissal talk, no "fight", no reference to the complainant's account. The legitimate content is entirely procedural: charging discretion sits with the State Attorney, designation findings sit with the sentencing court under F.S. 775.21(5)(a)2, and the registration determination follows from the conviction rather than from any exercise of discretion. **Note the "never fear-marketing" half, which cuts the other way from the outcome rail**: outline section 8's registration material is severe, and it is carried because it is statutory and useful, not to alarm. It is written as deadlines and addresses, not as consequences. |
| 7 | Where the case is heard | Thirteenth Judicial Circuit. Section 8. All of these are circuit criminal except a first violation of F.S. 800.03, which is a first degree misdemeanour and county criminal. **Brandon excluded per D7.** |
| 8 | **Registration: what the statute requires, and when** | The page's most useful section and its C9 carrier. F.S. 943.0435(2)(a) 48 hours to the sheriff; 943.0435(3) 48 hours after that to a DHSMV driver license office; 943.0435(4)(a)1 48 hours on any change of residence or name; 943.0435(4)(b)2 in person every 30 days while transient; 943.0435(4)(e)1 48 hours after using any new email address or internet identifier; 943.0435(14)(a) reregistration twice yearly, and (14)(b) four times yearly for the enumerated convictions; 943.0435(11) lifetime, with the 25-year petition path and its exclusions. Then 943.0435(9)(a) and (9)(b), which is the C9. Every figure quoted from the statute in Section 7. |
| 9 | Offender, predator, and who decides which | F.S. 943.0435(1)(h) against F.S. 775.21(4). The two enumerated lists, the two routes to a predator designation, and the fact that under 775.21(5)(a)2 the designation is a **written finding the sentencing court must make**, transmitted to FDLE within 48 hours by the clerk. Serves assistant-question 8. Carries the 775.21(10) penalty parallel. |
| 10 | Handled by | Blocked on WEBSITE-PLAN.md Open Question 2. |
| 11 | FAQ block with FAQPage schema | The six entries named in Section 4. Zero competitor pages in this SERP carry either the block or the schema. |
| 12 | Related guides | Section 9. |
| 13 | Byline and last-reviewed date | **6-month cadence, not 12.** The page's substance is a set of statutory deadlines and both governing statutes were amended in the 2025 session. Off-cycle trigger recorded at Section 3.3: publication of the 2026 Florida Statutes edition. |

### 5.1 What a referring attorney or a family member needs to see, and where

Required by W4-SPEC. This is not an addendum to the outline; it changes what
sections 2, 8, and 9 are for.

**Two readers arrive at this page who did not search for it**, and the plan says
they are the reason it exists (CASES-WE-DEFEND-PLAN.md Section 7: wave 4 pages
"convert the referral traffic the firm already earns [...] They should simply not
be measured on rankings").

**The referring attorney** is a family lawyer, an immigration lawyer, or a
general practitioner whose client has just been arrested, and who has about
ninety seconds. What they need, in order:

1. **Scope, resolved fast.** Section 2 is their landing point. It must tell them
   within one screen whether this is a case the page covers, and it must send
   them elsewhere plainly if it is not: chapter 794 to the sibling page, federal
   to the federal silo. A referrer who cannot resolve scope quickly refers
   elsewhere.
2. **Evidence of statutory command, not of results.** Section 3's table is what
   does this. An offense level column sourced to F.S. 921.0022 signals to another
   lawyer that the page was written by someone who works these cases, and it does
   it without a single claim about the firm, which is what Rule 4-7.13 requires.
   **The table is the referral asset.** That is an independent reason not to let
   a `c9Exempt` flag remove it.
3. **A named person and a direct route.** Section 10, blocked on Open Question 2,
   is the referral conversion point. A referrer refers to a person.

**The family member**, usually a parent or a spouse, arrives frightened and
searching for what happens next. What they need, in order:

1. **A timeline of the next steps**, in section 6, expressed as process: what
   happens at first appearance, who files the charge and when, what the discovery
   sequence is. Links to `/resources/guides/after-an-arrest`.
2. **Section 8, which is the single most reassuring thing on the page**, not
   because it is good news but because it is **concrete and checkable**. A family
   member trying to help someone comply with a 48-hour deadline can act on
   "1201 Orient Road, Tampa, Monday to Friday 7:30am to 3:30pm" in a way they
   cannot act on any sentence in any competitor page in this SERP.
3. **No outcome language anywhere on the path they read.** The temptation to
   reassure is strongest with this reader and it is the temptation W4-SPEC
   forbids. The compensating move is specificity, not comfort.

**Placement consequence.** Section 8 must be reachable from the top of the page
without reading sections 3 through 7, because the family member's need is
time-limited in a way the searcher's is not. That is an in-page navigation
requirement, and it is the one structural request this brief makes of the
template.

---

## 6. The C9 differentiator

### 6.1 The assertion

Ready to populate the `c9` field in `src/lib/site.ts`:

```
statute:   "F.S. 943.0435"
section:   "Registration: what the statute requires, and when"
assertion: "Registration runs on a 48-hour clock rather than a calendar and the offence it creates is an offence of omission: F.S. 943.0435(9)(a) makes any failure to report a third degree felony, ranked at level 7 on the F.S. 921.0022 chart, and makes each separate instance a separate offence, and F.S. 943.0435(9)(b) requires a mandatory minimum term of community control with electronic monitoring of 6 months, 1 year, or 2 years by offence count wherever the court imposes no prison sentence, while two narrower failures are graded a full degree higher to a second degree felony, reporting an intent to vacate a residence and then remaining under F.S. 943.0435(4)(c), and reporting an intent to leave the state and then remaining in Florida under F.S. 943.0435(8)."
```

### 6.2 The cover-the-name test

Cover the words "sex crimes" and read outline section 8. What is left is a
statute that turns reporting omissions into felonies on a 48-hour clock, ranks
the base omission at level 7, multiplies it per instance, and grades **two
specific broken statements of future intent above the base offence**.

Test it by substitution against the corpus, which is what the test is for:

- **Swap in grand theft.** F.S. 812.014's ladder counts dollars, from $750 to
  $100,000. There is no reporting obligation in it and no 48-hour anything.
- **Swap in drug trafficking.** F.S. 893.135 counts weight and attaches
  mandatory minimum terms to the weight tiers. Nothing turns on a statement of
  intent.
- **Swap in unauthorized computer access.** ST-01's differentiator escalates on
  the kind of harm the access risked. There is no post-conviction obligation in
  815.06 at all.
- **Swap in domestic violence.** W2-04's rests on who the other person is.
- **Swap in DUI.** W3's DUI assertion is the closest structural neighbour in the
  entire corpus and it is worth being explicit about, because both involve a
  statutory clock. It rests on **F.S. 322.2615(1)(b)3, a 10-day window running
  from a notice of suspension, opening a second administrative case against the
  driver license.** Three differences, and they are not cosmetic. That clock runs
  **before** any conviction and is administrative; this one runs **after**
  conviction and is criminal. That one gives 10 days from a notice; this one
  gives 48 hours from an event that generates no notice at all. That one presents
  three mutually exclusive elections; this one presents an obligation with no
  election and a felony for missing it.
- **Swap in sexual battery.** The sibling page rests on F.S. 794.011, which
  creates no reporting duty and no clock. **794.011 is one of the twenty-odd
  entries in the 943.0435(1)(h)1.a list, so registration follows a conviction
  under it, but the registration statute is not that page's differentiator and
  must not become it.** See 6.3.

**Every other Florida ladder verified in this project counts something: dollars,
weight, grams, quantity, prior convictions. This one counts hours, and then
counts instances.** That sentence is true of exactly one page.

### 6.3 Hand-check against every populated assertion in `c9_populated.json`

Twenty populated. Checked one at a time.

| Populated page | Statute | Collision risk | Finding |
|---|---|---|---|
| criminal-defense/drug-trafficking-defense | F.S. 893.135 | none | Weight tiers and mandatory minimums. |
| criminal-defense/gun-crimes-defense | F.S. 775.087 | none | Firearm minimums under 10-20-Life. |
| criminal-defense/domestic-violence-defense | F.S. 741.2901 | none | Pro-prosecution policy directive. |
| criminal-defense/computer-crimes-defense | F.S. 815.06 | none | Harm-kind escalation ladder. |
| criminal-defense/grand-theft-defense | F.S. 812.014 | none | Value ladder. |
| criminal-defense/drug-possession-defense | F.S. 893.13(6) | **checked closely** | Both cite the F.S. 921.0022 chart. That page's claim is that **one paragraph is ranked twice at two different levels**. Mine is that a third degree felony of omission **is ranked at level 7**, which is a single-row observation, not a divergence claim. Different claims about the same chart are not a collision; the chart is shared infrastructure across the corpus. **No collision.** |
| criminal-defense/battery-defense | F.S. 784.03 | none | Priors and victim status raising a misdemeanour. |
| criminal-defense/dui-defense | F.S. 322.2615 | **checked closely, see 6.2** | Both involve a statutory clock. Administrative and pre-conviction against criminal and post-conviction; 10 days from a notice against 48 hours from an event; an election against an obligation. **No collision**, and the contrast strengthens both. |
| federal/drug-trafficking | 21 U.S.C. 841 | none | |
| federal/healthcare-fraud | 18 U.S.C. 1347 | none | |
| federal/wire-mail-fraud | 18 U.S.C. 1341, 1343 | none | |
| federal/conspiracy-charges | 18 U.S.C. 371, 846, 1349 | none | |
| federal/weapons-gun-offenses | 18 U.S.C. 924 | none | |
| white-collar/healthcare-fraud | F.S. 409.920 | **checked closely, and it changed this brief** | Its assertion is that "the third degree tier and the second degree tier are both ranked at level 7, so the statutory maximum triples from 5 years to 15 while the primary offense points stay at 56." **That exact structure is present in my statutes and I removed it from my assertion.** 943.0435(9)(a) third degree and 943.0435(4)(c) and (8) second degree are all ranked at level 7, and 847.0135(3) third degree and 847.0135(4) second degree are both level 7. Building on that would have been a restatement of a populated assertion in different clothes. **My assertion instead rests on the degree grading itself, the per-instance multiplication, and the mandatory minimum community control, none of which appear in 409.920.** The shared-level fact is recorded in the Section 7 table as data and is **not** the differentiator. |
| white-collar/bank-fraud | 18 U.S.C. 1344 | none | |
| white-collar/embezzlement | F.S. 812.014 | none | |
| white-collar/securities-fraud | F.S. 517.302, 18 U.S.C. 1348 | none | |
| white-collar/wire-fraud | F.S. 817.034 | none | "No Florida offence carries this name." **Related in shape to Section 0's finding here, and the difference matters:** that page says no offence bears the name and one analogue exists. This page says no offence bears the name and **five** do, which is why that page is a charge page and this one is a category. Not a C9 collision, because my assertion does not rest on the name at all. |
| white-collar/tax-evasion | 26 U.S.C. 7201, F.S. 212.15(2) | none | Same shape note as above. |
| white-collar/identity-theft | F.S. 817.568 | none | Protected-person tiers. |
| white-collar/money-laundering | F.S. 896.101 | none | Three-tier ladder across 12 months. |

**No populated assertion rests on F.S. 943.0435, F.S. 775.21, F.S. 800.04, F.S.
847.0135, or F.S. 800.03.** `statuteKey` resolves this page to `fs 943.0435`,
which matches nothing in the populated set, so **the automated checker will never
compare this assertion to anything.** That is exactly the case W4-SPEC says the
automated check cannot see, and this table is the substitute.

### 6.4 Reserve assertion, if 943.0435 is claimed elsewhere

If the barrier finds a competing claim on 943.0435, this is the fallback,
already verified in Section 7 and ready to swap in:

```
statute:   "F.S. 775.21"
section:   "Offender, predator, and who decides which"
assertion: "The sexual predator designation runs on two separate routes through one enumerated list: F.S. 775.21(4)(a)1.a designates on the current offence alone, and only for a capital, life, or first degree felony violation of three named statutes, while F.S. 775.21(4)(a)1.b reaches every other listed offence, including every violation of F.S. 847.0135, only where the offender already carries a separately sentenced qualifying prior, so no first felony conviction for computer solicitation or for traveling to meet a minor can produce a predator designation at all."
```

It is weaker as a first choice for one reason: one of the three statutes named in
775.21(4)(a)1.a is 794.011, which belongs to the sibling page, and an assertion
that names the sibling's statute in its operative clause is an assertion the
sibling could contest. The 943.0435 assertion names no statute outside this
page's territory. **That is why it is first.**

### 6.5 Fallback if Section 0's recommendation is rejected

If the page is made `c9Exempt` after all, the registration material must not die
with the C9. **Move it to a Layer 2 guide at `/resources/guides/florida-sex-offender-registration`**,
keep the whole of outline section 8 there with its verified quotations, and have
the category page link to it. That preserves the verified substance and satisfies
Section 11A.2 rule 5, which already says content spanning several charges belongs
in the Layer 2 guide that owns it. It is a worse outcome than Section 0's
recommendation, not a disaster.

### 6.6 Hand-check against the three wave 4 siblings

**Timing, recorded because it matters to the reliability of this check.** When
this brief began, `docs/research/briefs/` contained **no W4 file**, so an earlier
draft of this subsection named what a later reader would have to re-check. By the
time it finished, all three siblings existed: `W4-01-sexual-battery.md`,
`W4-03-homicide.md`, and `W4-04-csam.md`. **The check below was performed against
their actual recorded assertions**, not against expectations. The earlier
placeholder is superseded.

| Sibling | Its C9 statute | Its assertion, in one line | Finding |
|---|---|---|---|
| **W4-01 sexual battery** | F.S. 794.011(5) and (6), read with F.S. 794.005 | The basic charge is the one with no force in it; (6) makes (5)'s paragraphs necessarily included offences of (3) and (4); 794.005 records the legislative finding about what (5) requires | **No collision.** Its assertion is about the elements of one offence and the lesser-included relationship inside chapter 794. Mine is about reporting duties in chapter 943. No shared subsection, no shared claim shape. |
| **W4-03 homicide** | F.S. 782.04 | The same enumerated felony produces first degree murder or second degree murder depending on who caused the death, and the two enumerated lists are not identical | **No collision.** Different chapter, different subject. Structurally its claim is about two lists that differ; mine is about two degrees of a reporting failure. Not the same move: its lists differ in membership, my grading differs by conduct. |
| **W4-04 CSAM** | 18 U.S.C. 2252 | The paragraph charged, not the quantity, sets the minimum, the detention presumption, and the guideline base offense level at once | **No collision.** Federal, and its registration content rests on SORNA at 34 U.S.C. 20911 and 20915, which is a different statute from F.S. 943.0435. |

**The boundary held on both sides, and that is worth recording rather than
assuming.** W4-01 Section 0.2 states the division as a rule, in its own words:

> "This page owns **F.S. 794.011 and the chapter 794 apparatus that operates on
> it**: 794.005, 794.0115, 794.023, and the 794.011-specific limitations
> provisions in F.S. 775.15. The sex crimes page owns **F.S. 800.04 (lewd and
> lascivious offences), F.S. 847.0135 (solicitation), and the registration scheme
> at F.S. 943.0435**."

It then lists 800.04, 847.0135, 943.0435, and 794.05 as hard exclusions from its
own page, limiting itself to "one line and one link" on each. **That matches this
brief's territory statement exactly and neither brief saw the other while
drafting.** Two independent divisions of the same ground landing in the same place
is the strongest available evidence that the division is the natural one.

**All four claims the earlier draft flagged are now resolved rather than
pending:**

1. **The enumeration claim (Section 0.3).** W4-01 does not build on either
   enumeration. It carries a single sentence stating that 943.0435(1)(h)1.a.(I)
   lists "s. 794.011, excluding s. 794.011(10)", and links out. **Cleared.**
2. **The reserve assertion (6.4) on F.S. 775.21.** W4-01 does not cite 775.21 at
   all, at any point. **The reserve is available and unclaimed.**
3. **The limitations FAQ.** W4-01 claims "the 794.011-specific limitations
   provisions in F.S. 775.15" and this page answers from 775.15(18) and
   775.15(13)(a), which name 800.04 and 847.0135(5). **Different subsections, no
   collision.** But **Section 11A.2 rule 5 is now engaged**, because a limitations
   question has surfaced on two charge SERPs in this wave. Recommended: both pages
   keep their own FAQ entry, because each answers from a subsection the other
   cannot use, and the rule 5 remedy of a shared Layer 2 guide is disproportionate
   for two entries. **Flagged for the reconciliation barrier rather than decided
   here.**
4. **The F.S. 921.0024 adult-on-minor 2.0 multiplier.** W4-01 does not cite
   921.0024 at all. **Unclaimed by any wave 4 brief.** This brief still declines
   it as a differentiator, for the reason given before: its trigger list names
   794.011, and an assertion whose operative clause names the sibling's statute is
   an assertion the sibling could contest later. It stays a footnote to the
   Section 7.6 table.

### 6.7 Requests the siblings made of this page, answered

Three, and answering them is the point of doing the check late rather than early.

**1. W4-01 requests a reciprocal link.** Its Section 8 records: "**A reciprocal
link is requested from the sibling for the 794.011 content**, and the sibling
brief should record it." **Recorded and granted.** Section 9 of this brief already
carries `/criminal-defense/sexual-battery-defense` as the most important link on
the page, routed from outline section 2. W4-01 links here three times (for 800.04,
for 794.05, and for registration); this page links there once, from the routing
block. **The asymmetry is correct**, because a category page routes down and a
charge page routes sideways, and it is stated so neither brief reads it as an
omission.

**2. W4-01 asks this page to check a claim it declined to verify.** Its Section
2.1 records that the AI Overview on `sexual battery attorney Tampa` states
"Mandatory, lifetime sex offender registration" flatly, that the duration question
is this page's statute, and that it is "**a claim the sibling should check against
F.S. 943.0435**."

**Checked, and the flat statement is materially incomplete.** F.S. 943.0435(11),
quoted in full in Section 7.3, opens "**Except as provided in s. 943.04354**, a
sexual offender shall maintain registration with the department for the duration
of his or her life **unless** the sexual offender has received a full pardon or
has had a conviction set aside in a postconviction proceeding", and then sets out
a petition path for a person released for at least 25 years without an intervening
arrest, subject to nine excluded conviction categories. So the accurate statement
is that **the default is lifetime, subject to one statutory exception, two
vacatur routes, and a 25-year petition path with enumerated exclusions.** "Mandatory,
lifetime" is the default stated as if it were the whole rule.

**Consequence for both pages:** neither may restate the AI Overview's sentence.
This page states the default and the exceptions together, from the statutory text.
W4-01 keeps its single-sentence treatment and does not characterise duration at
all, which its own Section 0.2 already requires. **Note that F.S. 943.04354 itself
remains UNVERIFIED** (Section 7.8), so the exception is named and its content is
not described until it is fetched.

**3. W4-04 asks two questions and both have clean answers.**

- It asks whether this page's C9 anchors on **F.S. 827.071(5)(a)**, the per-image
  counting rule, which it identifies as "the sibling's asset, not this page's".
  **It does not.** 827.071 is not in this brief's territory list, was not fetched,
  and is not claimed anywhere above. It appears in this brief only inside the
  quoted 943.0435(1)(h)1.a.(I) enumeration. **So the per-image counting rule is
  currently claimed by nobody**, and that is recorded here as an open asset rather
  than left implicit. Whoever wants it should fetch 827.071 first; this brief
  makes no claim about what it says.
- It asks that if this page's C9 rests on **registration duration**, its own
  SORNA section must stay descriptive. **This page's C9 does not rest on
  duration.** It rests on failure to report: the 48-hour clock, the degree
  grading, per-instance charging, and the mandatory minimum community control.
  Duration appears on this page as body copy in outline section 8, not as the
  differentiator. **W4-04's registration section is unconstrained by this page**
  and it may treat 20911 and 20915 as it judges best.

---

## 7. Sources and verification status

All fetched 2026-08-13. Every URL below is on the C12 allowlist in
CASES-WE-DEFEND-PLAN.md Section 10.3: flsenate.gov for statutes, FDLE for the
registry's own procedure.

### 7.1 F.S. 800.04, lewd or lascivious offences

**https://www.flsenate.gov/Laws/Statutes/2025/800.04**

Title, verbatim:

> "800.04 Lewd or lascivious offenses committed upon or in the presence of
> persons less than 16 years of age."

The prohibited-defence provisions, verbatim, which are outline section 4's core:

> "(2) PROHIBITED DEFENSES. -- Neither the victim's lack of chastity nor the
> victim's consent is a defense to the crimes proscribed by this section.
> (3) IGNORANCE OR BELIEF OF VICTIM'S AGE. -- The perpetrator's ignorance of the
> victim's age, the victim's misrepresentation of his or her age, or the
> perpetrator's bona fide belief of the victim's age cannot be raised as a
> defense in a prosecution under this section."

The four limbs, verbatim in their operative parts:

> "(4) LEWD OR LASCIVIOUS BATTERY. -- (a) A person commits lewd or lascivious
> battery by: 1. Engaging in sexual activity with a person 12 years of age or
> older but less than 16 years of age; or 2. Encouraging, forcing, or enticing
> any person less than 16 years of age to engage in sadomasochistic abuse, sexual
> bestiality, prostitution, or any other act involving sexual activity."

> "(5) LEWD OR LASCIVIOUS MOLESTATION. -- (a) A person who intentionally touches
> in a lewd or lascivious manner the breasts, genitals, genital area, or
> buttocks, or the clothing covering them, of a person less than 16 years of age,
> or forces or entices a person under 16 years of age to so touch the
> perpetrator, commits lewd or lascivious molestation."

> "(6) LEWD OR LASCIVIOUS CONDUCT. -- (a) A person who: 1. Intentionally touches
> a person under 16 years of age in a lewd or lascivious manner; or 2. Solicits a
> person under 16 years of age to commit a lewd or lascivious act commits lewd or
> lascivious conduct."

> "(7) LEWD OR LASCIVIOUS EXHIBITION. -- (a) A person who: 1. Intentionally
> masturbates; 2. Intentionally exposes the genitals in a lewd or lascivious
> manner; or 3. Intentionally commits any other sexual act that does not involve
> actual physical or sexual contact with the victim, including, but not limited
> to, sadomasochistic abuse, sexual bestiality, or the simulation of any act
> involving sexual activity in the presence of a victim who is less than 16 years
> of age, commits lewd or lascivious exhibition."

> "(8) EXCEPTION. -- A mother's breastfeeding of her baby does not under any
> circumstance constitute a violation of this section."

**History line ends:** "s. 7, ch. 2022-165." No 2025 or 2026 amendment.

**The structural fact the penalties table is built on:** every one of the four
limbs is graded by **two ages at once**, the complainant's and the defendant's.
800.04(5) alone runs from a life felony (offender 18 or older, victim under 12)
to a third degree felony (offender under 18, victim 12 to 15) for conduct the
statute describes in one sentence.

### 7.2 F.S. 847.0135, computer pornography, solicitation, and traveling

**https://www.flsenate.gov/Laws/Statutes/2025/847.0135**

Title and short title, verbatim:

> "847.0135 Computer pornography; prohibited computer usage; traveling to meet
> minor; penalties. -- (1) SHORT TITLE. -- This section shall be known and may be
> cited as the 'Computer Pornography and Child Exploitation Prevention Act.'"

The undercover sentence, verbatim, appearing in (2):

> "The fact that an undercover operative or law enforcement officer was involved
> in the detection and investigation of an offense under this section shall not
> constitute a defense to a prosecution under this section."

It appears a second time, scoped to the subsection, at the end of (5)(a):
"...shall not constitute a defense to a prosecution under this subsection."

Solicitation, verbatim in its operative parts:

> "(3) CERTAIN USES OF COMPUTER SERVICES OR DEVICES PROHIBITED. -- Any person who
> knowingly uses a computer online service, Internet service, local bulletin board
> service, or any other device capable of electronic data storage or transmission
> to: (a) Seduce, solicit, lure, or entice, or attempt to seduce, solicit, lure,
> or entice, a child or another person believed by the person to be a child, to
> commit any illegal act described in chapter 794, chapter 800, or chapter 827,
> or to otherwise engage in any unlawful sexual conduct with a child or with
> another person believed by the person to be a child [...] commits a felony of
> the third degree [...] Any person who, in violating this subsection,
> misrepresents his or her age, commits a felony of the second degree [...] Each
> separate use of a computer online service, Internet service, local bulletin
> board service, or any other device capable of electronic data storage or
> transmission wherein an offense described in this section is committed may be
> charged as a separate offense."

Traveling, verbatim in its operative opening:

> "(4) TRAVELING TO MEET A MINOR. -- Any person who travels any distance either
> within this state, to this state, or from this state by any means, who attempts
> to do so, or who causes another to do so or to attempt to do so for the purpose
> of engaging in any illegal act described in chapter 794, chapter 800, or
> chapter 827, or to otherwise engage in other unlawful sexual conduct with a
> child or with another person believed by the person to be a child after using
> [a computer online service, etc.] [...] commits a felony of the second degree."

Extraterritorial jurisdiction, verbatim:

> "(7) STATE CRIMINAL JURISDICTION. -- A person is subject to prosecution in this
> state pursuant to chapter 910 for any conduct proscribed by this section which
> the person engages in, while either within or outside this state, if by such
> conduct the person commits a violation of this section involving a child, a
> child's guardian, or another person believed by the person to be a child or a
> child's guardian."

**The three facts outline section 5 rests on, all verified above:** "another
person believed by the person to be a child" is on the face of both (3) and (4),
so no actual child is an element; undercover involvement is expressly not a
defence; and "travels any distance" is the whole of the movement element in (4).

### 7.3 F.S. 943.0435, sexual offender registration

**https://www.flsenate.gov/Laws/Statutes/2025/943.0435**

Title, verbatim: "943.0435 Sexual offenders required to register with the
department; penalty."

**The enumeration that defines the category**, verbatim from (1)(h)1.a(I),
abridged only where the list repeats:

> "'Sexual offender' means a person who [...] (I) Has been convicted of
> committing, or attempting, soliciting, or conspiring to commit, any of the
> criminal offenses proscribed in the following statutes in this state or similar
> offenses in another jurisdiction: s. 393.135(2); s. 394.4593(2); s. 787.01,
> s. 787.02, or s. 787.025(2)(c), where the victim is a minor; s. 787.06(3)(b),
> (d), (f), or (g), or (5); former s. 787.06(3)(h); s. 794.011, excluding
> s. 794.011(10); s. 794.05; former s. 796.03; former s. 796.035; s. 800.04;
> s. 810.145(8); s. 825.1025; s. 827.071; s. 847.0133; s. 847.0135, excluding
> s. 847.0135(6); s. 847.0137; s. 847.0138; s. 847.0145; s. 895.03 [...];
> s. 916.1075(2); or s. 985.701(1)"

**F.S. 800.03 is not on this list.** Verified by inspection of the full
enumeration. That is the basis for the boundary claim in Section 0.3.

Initial registration, verbatim:

> "(2) Upon initial registration, a sexual offender shall: (a) Report in person
> at the sheriff's office: 1. In the county in which the offender establishes or
> maintains a permanent, temporary, or transient residence **within 48 hours**
> after: a. Establishing permanent, temporary, or transient residence in this
> state; or b. Being released from the custody, control, or supervision of the
> Department of Corrections or from the custody of a contractor-operated
> correctional facility; or 2. In the county where he or she was convicted
> **within 48 hours** after being convicted for a qualifying offense for
> registration under this section if the offender is not in the custody or
> control of, or under the supervision of, the Department of Corrections"

The second 48-hour obligation, verbatim:

> "(3) **Within 48 hours after the report required under subsection (2)**, a
> sexual offender shall report in person at a driver license office of the
> Department of Highway Safety and Motor Vehicles"

Changes and transient reporting, verbatim in the operative parts:

> "(4)(a)1. [...] **within 48 hours after any change** in the sexual offender's
> permanent, temporary, or transient residence or change in the sexual offender's
> name by reason of marriage or other legal process, the sexual offender shall
> report in person to a driver license office"

> "(4)(b)2. A sexual offender shall report in person at the sheriff's office in
> the county in which he or she is located **within 48 hours after establishing a
> transient residence and thereafter must report in person every 30 days** to the
> sheriff's office in the county in which he or she is located while maintaining
> a transient residence."

> "(4)(e)1. A sexual offender shall register all electronic mail addresses and
> Internet identifiers, and each Internet identifier's corresponding website
> homepage or application software name, with the department [...] **within 48
> hours after using** such electronic mail addresses or Internet identifiers."

**The first of the two second-degree provisions**, verbatim from (4)(c):

> "A sexual offender who remains at a permanent, temporary, or transient residence
> after reporting his or her intent to vacate such residence shall, **within 48
> hours** after the date upon which the offender indicated he or she would or did
> vacate such residence, report in person to the agency to which he or she
> reported pursuant to paragraph (b) [...] A sexual offender who makes a report as
> required under paragraph (b) but fails to make a report as required under this
> paragraph **commits a felony of the second degree**"

**The second**, verbatim from the close of (8):

> "[a sexual offender who indicates his or her intent to establish a residence in
> a jurisdiction other than the State of Florida, or intent to travel to another
> country,] but who remains in this state without reporting to the sheriff in the
> manner required by this subsection **commits a felony of the second degree**"

**The base penalty**, verbatim from (9)(a), abridged in its list of failures:

> "(9)(a) Except as otherwise specifically provided, a sexual offender who fails
> to register; who fails, after registration, to maintain, acquire, or renew a
> driver license or an identification card; who fails to provide required location
> information or change-of-name information; who fails to provide electronic mail
> addresses, Internet identifiers [...]; who fails to make a required report in
> connection with vacating a permanent residence; who fails to reregister as
> required; **who fails to respond to any address verification correspondence
> from the department or from county or local law enforcement agencies within 3
> weeks after the date of the correspondence**; who knowingly provides false
> registration information by act or omission; or who otherwise fails, by act or
> omission, to comply with the requirements of this section **commits a felony of
> the third degree** [...] **Each instance of a failure to register or report
> changes to the required information specified in this paragraph constitutes a
> separate offense.**"

**The mandatory minimum**, verbatim from (9)(b):

> "For a felony violation of this section, excluding subsection (13), committed on
> or after July 1, 2018, **if the court does not impose a prison sentence, the
> court shall impose a mandatory minimum term of community control**, as defined
> in s. 948.001, as follows: 1. For a first offense, a mandatory minimum term of
> **6 months** with electronic monitoring. 2. For a second offense, a mandatory
> minimum term of **1 year** with electronic monitoring. 3. For a third or
> subsequent offense, a mandatory minimum term of **2 years** with electronic
> monitoring."

Venue for a registration prosecution, verbatim from (9)(c), which is genuinely
useful and which no competitor page carries:

> "A sexual offender who commits any act or omission in violation of this section
> may be prosecuted for the act or omission in the county in which the act or
> omission was committed, in the county of the last registered address of the
> sexual offender, in the county in which the conviction occurred for the offense
> or offenses that meet the criteria for designating a person as a sexual
> offender, in the county where the sexual offender was released from
> incarceration, or in the county of the intended address of the sexual offender
> as reported by the offender prior to his or her release from incarceration."

Duration, verbatim from (11):

> "Except as provided in s. 943.04354, a sexual offender shall maintain
> registration with the department **for the duration of his or her life** unless
> the sexual offender has received a full pardon or has had a conviction set aside
> in a postconviction proceeding [...] However, a sexual offender shall be
> considered for removal of the requirement to register as a sexual offender only
> if the person: (a)1. **Has been lawfully released from confinement, supervision,
> or sanction, whichever is later, for at least 25 years and has not been arrested
> for any felony or misdemeanor offense since release**, provided that the sexual
> offender's requirement to register was not based upon an adult conviction: a.
> For a violation of s. 787.01 or s. 787.02; b. For a violation of s. 794.011,
> excluding s. 794.011(10); c. For a violation of s. 800.04(4)(a)2. where the
> court finds the offense involved a victim under 12 years of age or sexual
> activity by the use of force or coercion; d. For a violation of s. 800.04(5)(b);
> e. For a violation of s. 800.04(5)(c)2. where the court finds the offense
> involved the use of force or coercion and unclothed genitals or genital area;
> f. For a violation of s. 825.1025(2)(a); g. For any attempt or conspiracy to
> commit any such offense..."

Reregistration frequency, verbatim from (14)(a) and the close of (14)(b):

> "(14)(a) A sexual offender must report in person each year during the month of
> the sexual offender's birthday and during the sixth month following the sexual
> offender's birth month to the sheriff's office in the county in which he or she
> resides or is otherwise located to reregister."

> "(14)(b) However, a sexual offender who is required to register as a result of a
> conviction for: [enumerated list including s. 794.011, s. 800.04(4)(a)2.,
> s. 800.04(5)(b), s. 800.04(5)(c)2., s. 825.1025(2)(a)] [...] must reregister
> each year during the month of the sexual offender's birthday and **every third
> month thereafter**."

**A correction the page can make that the market gets wrong.** The common
framing, including on `justiceflorida.com` at organic position 21 of the
informational SERP, is "offenders register twice a year, predators four times a
year." **That is not what (14) says.** The four-times-a-year obligation is set by
the **underlying conviction**, not by the offender-versus-predator designation,
and it reaches sexual offenders whose qualifying conviction is on the (14)(b)
list. FDLE's own FAQ 4 states it correctly: "either twice a year [...] or four
times a year [...] depending upon their offense", and "**All sexual predators,
some sexual offenders**, and all juvenile sexual offenders must report four times
a year." verified.

**History line ends:** "s. 2, ch. 2025-134; ss. 10, 41, ch. 2025-156."

### 7.4 F.S. 775.21, the sexual predator designation

**https://www.flsenate.gov/Laws/Statutes/2025/775.21**

Short title, verbatim: "(1) SHORT TITLE. -- This section may be cited as 'The
Florida Sexual Predators Act.'"

**The two routes**, verbatim from (4)(a)1:

> "(4) SEXUAL PREDATOR CRITERIA. -- (a) For a current offense committed on or
> after October 1, 1993, upon conviction, an offender shall be designated as a
> 'sexual predator' under subsection (5) [...] if: 1. The felony is: a. **A
> capital, life, or first degree felony violation, or any attempt thereof**, of
> s. 787.01 or s. 787.02, where the victim is a minor, or s. 787.06(3)(f) or (g),
> where the victim is a minor, or (5); **s. 794.011, s. 800.04, or s. 847.0145**,
> or a violation of a similar law of another jurisdiction; or b. **Any felony
> violation, or any attempt thereof**, of s. 393.135(2); s. 394.4593(2);
> s. 787.01, s. 787.02, or s. 787.025(2)(c), where the victim is a minor;
> s. 787.06(3)(b), (d), (f), or (g), or (5); former s. 787.06(3)(h); s. 794.011,
> excluding s. 794.011(10); s. 794.05; former s. 796.03; former s. 796.035;
> **s. 800.04**; s. 810.145(8)(b); s. 825.1025; s. 827.071; **s. 847.0135,
> excluding s. 847.0135(6)**; s. 847.0145; s. 895.03 [...]; s. 916.1075(2); or
> s. 985.701(1) [...] **and the offender has previously been convicted of or
> found to have committed** [...] any violation of [the same list]"

**Note the asymmetry, verified by inspecting both lists.** 847.0135 appears in
(4)(a)1.b and **not** in (4)(a)1.a. So no conviction under the computer
solicitation or traveling statute can produce a predator designation on the
current offence alone; a qualifying prior is required. That is the reserve
assertion at Section 6.4.

The prior-conviction counting rule, verbatim from (4)(b):

> "In order to be counted as a prior felony for purposes of this subsection, the
> felony must have resulted in a conviction sentenced separately, or an
> adjudication of delinquency entered separately, prior to the current offense and
> sentenced or adjudicated separately from any other felony conviction that is to
> be counted as a prior felony regardless of the date of offense of the prior
> felony."

Who makes the designation, verbatim from (5)(a)2:

> "An offender who meets the sexual predator criteria described in paragraph
> (4)(a) who is before the court for sentencing for a current offense committed on
> or after October 1, 1993, is a sexual predator, and **the sentencing court must
> make a written finding at the time of sentencing that the offender is a sexual
> predator**, and the clerk of the court shall transmit a copy of the order
> containing the written finding to the department within 48 hours after the entry
> of the order"

The parallel penalty, verbatim from (10)(a) and (10)(c), abridged:

> "(10) PENALTIES. -- (a) Except as otherwise specifically provided, a sexual
> predator who fails to register [...] or who otherwise fails, by act or omission,
> to comply with the requirements of this section **commits a felony of the third
> degree** [...] Each instance of a failure to register or report changes to the
> required information specified in this paragraph constitutes a separate
> offense."
> "(c) For a felony violation of this section, excluding paragraph (g), committed
> on or after July 1, 2018, if the court does not impose a prison sentence, the
> court shall impose a mandatory minimum term of community control [...] 6 months
> [...] 1 year [...] 2 years with electronic monitoring."

A provision with no analogue in 943.0435, verbatim from (10)(b):

> "A sexual predator who has been convicted of [an enumerated list] where the
> victim of the offense was a minor, and **who works, whether for compensation or
> as a volunteer, at any business, school, child care facility, park, playground,
> or other place where children regularly congregate, commits a felony of the
> third degree**"

Residence-period definitions, verbatim from (2), incorporated into 943.0435 by
943.0435(1)(f):

> "'Permanent residence' means a place where the person abides, lodges, or
> resides **for 3 or more consecutive days** that is the person's home or other
> place where the person primarily lives. For the purpose of calculating a
> permanent residence under this paragraph, **the first day** that a person
> abides, lodges, or resides at a place **is excluded** and each subsequent day is
> counted. A day includes any part of a calendar day."

> "'Temporary residence' means a place where the person abides, lodges, or
> resides, including, but not limited to, vacation, business, or personal travel
> destinations in or out of this state, **for 3 or more days in the aggregate
> during any calendar year** that is not the person's permanent or transient
> residence. For a person whose permanent residence is not in this state, the term
> also includes a place where the person is employed, practices a vocation, or is
> enrolled as a student for any period of time in this state. [...] The term
> includes an 'in-state travel residence,' which means a temporary residence in
> this state established by a person who already has an existing permanent,
> temporary, or transient residence..."

> "'Transient residence' means a county where the person lives, remains, or is
> located for the purpose of abiding, lodging, or residing **for 3 or more days in
> the aggregate during a calendar year** that is not the person's permanent or
> temporary residence. The term includes, but is not limited to, a place where the
> person sleeps or seeks shelter and a location that has no specific street
> address."

**History line ends:** "s. 1, ch. 2025-134; s. 4, ch. 2025-156."

### 7.5 F.S. 800.03, 775.15, 921.0024

**https://www.flsenate.gov/Laws/Statutes/2025/800.03**, full operative text:

> "800.03 Exposure of sexual organs. -- (1) A person commits unlawful exposure of
> sexual organs by: (a) Exposing or exhibiting his or her sexual organs in public
> or on the private premises of another, or so near thereto as to be seen from such
> private premises, in a vulgar or indecent manner; or (b) Being naked in public
> in a vulgar or indecent manner. (2)(a) Except as provided in paragraph (b), a
> violation of this section is a **misdemeanor of the first degree** [...]
> (b) **A second or subsequent violation of this section is a felony of the third
> degree** [...] (3) The exposure of sexual organs by any of the following does
> not violate this section: (a) A mother breastfeeding her baby; or (b) An
> individual who is merely naked at any place provided or set apart for that
> purpose."

**https://www.flsenate.gov/Laws/Statutes/2025/775.15**, the two limitations
provisions this page's territory needs:

> "(13)(a) If the victim of a violation of s. 794.011, former s. 794.05, Florida
> Statutes 1995, **s. 800.04**, s. 826.04, or **s. 847.0135(5)** is under the age
> of 18, the applicable period of limitation, if any, **does not begin to run
> until the victim has reached the age of 18 or the violation is reported to a law
> enforcement agency or other governmental agency, whichever occurs earlier.**"

> "(18) If the offense is a violation of **s. 800.04(4) or (5)** and the victim
> was under 16 years of age at the time the offense was committed, **a prosecution
> of the offense may be commenced at any time, unless, at the time of the offense,
> the offender is less than 18 years of age and is no more than 4 years older than
> the victim.** This subsection applies to an offense that is not otherwise barred
> from prosecution on or before October 1, 2014."

Also verified and relevant: 775.15(16)(a) permits prosecution at any time after
DNA identification for "a lewd or lascivious offense under s. 800.04, s. 825.1025,
or s. 847.0135(5)", among others.

**https://www.flsenate.gov/Laws/Statutes/2025/921.0024**, two provisions:

The multiplier flagged at Section 6.6 item 4, verbatim:

> "**Adult-on-minor sex offense:** If the offender was 18 years of age or older
> and the victim was younger than 18 years of age at the time the offender
> committed the primary offense, and if the primary offense was an offense
> committed on or after October 1, 2014, and is a violation of [...] s. 794.011,
> excluding s. 794.011(10); **s. 800.04**; or **s. 847.0135(5)**, the subtotal
> sentence points are **multiplied by 2.0**. If applying the multiplier results in
> the lowest permissible sentence exceeding the statutory maximum sentence for the
> primary offense under chapter 775, the court may not apply the multiplier and
> must sentence the defendant to the statutory maximum sentence."

**Note what is absent:** 847.0135(3) solicitation and 847.0135(4) traveling are
**not** in the multiplier's trigger list. Only (5) is.

The points scale and threshold, verbatim from the worksheet and (2):

> Primary offense sentence points: Level 10 = 116, **Level 9 = 92, Level 8 = 74,
> Level 7 = 56**, Level 6 = 36, Level 5 = 28, Level 4 = 22, Level 3 = 16,
> Level 2 = 10, Level 1 = 4.

> "(2) The lowest permissible sentence is the minimum sentence that may be imposed
> by the trial court, absent a valid reason for departure. **The lowest permissible
> sentence is any nonstate prison sanction in which the total sentence points
> equals or is less than 44 points**, unless the court determines within its
> discretion that a prison sentence [...] is appropriate."

### 7.6 F.S. 921.0022, the verified offense levels for this page

**Source: the parsed F.S. 921.0022 ranking chart** (scratchpad `9210022.html`,
2025 edition). Per W3-SPEC, this source is used **for levels only**; every scope
claim above comes from the operative statute fetched separately. Descriptions are
the chart's own abbreviated text, quoted verbatim and **not relied on for what the
offence covers**.

| Level | Subsection | Degree | Chart description, verbatim |
|---|---|---|---|
| 9 | 800.04(5)(b) | Life | "Lewd or lascivious molestation; victim less than 12 years; offender 18 years or older." |
| 8 | 800.04(4)(c) | 1st | "Lewd or lascivious battery; offender 18 years of age or older; prior conviction for specified sex offense." |
| 8 | 800.04(4)(b) | 2nd | "Lewd or lascivious battery." |
| 7 | 800.04(5)(e) | 1st | "Lewd or lascivious molestation; victim 12 years of age or older but younger than 16 years; offender 18 years or older; prior conviction for specified sex offense." |
| 7 | 800.04(5)(c)1. | 2nd | "Lewd or lascivious molestation; victim younger than 12 years of age; offender younger than 18 years of age." |
| 7 | 800.04(5)(c)2. | 2nd | "Lewd or lascivious molestation; victim 12 years of age or older but younger than 16 years of age; offender 18 years of age or older." |
| 7 | 847.0135(4) | 2nd | "Traveling to meet a minor to commit an unlawful sex act." |
| 7 | 847.0135(3) | 3rd | "Solicitation of a child, via a computer service, to commit an unlawful sex act." |
| 7 | 943.0435(4)(c) | 2nd | "Sexual offender vacating permanent residence; failure to comply with reporting requirements." |
| 7 | 943.0435(8) | 2nd | "Sexual offender; remains in state after indicating intent to leave; failure to comply with reporting requirements." |
| 7 | **943.0435(9)(a)** | **3rd** | "Sexual offender; failure to comply with reporting requirements." |
| 7 | 943.0435(13) | 3rd | "Failure to report or providing false information about a sexual offender; harbor or conceal a sexual offender." |
| 7 | 775.21(10)(a) | 3rd | "Sexual predator; failure to register; failure to renew driver license or identification card; other registration violations." |
| 7 | 775.21(10)(b) | 3rd | "Sexual predator working where children regularly congregate." |
| 7 | 775.21(10)(g) | 3rd | "Failure to report or providing false information about a sexual predator; harbor or conceal a sexual predator." |
| 6 | 800.04(5)(d) | 3rd | "Lewd or lascivious molestation; victim 12 years of age or older but less than 16 years of age; offender less than 18 years." |
| 6 | 800.04(6)(b) | 2nd | "Lewd or lascivious conduct; offender 18 years of age or older." |
| 6 | 847.0135(2) | 3rd | "Facilitates sexual conduct of or with a minor or the visual depiction of such conduct." |
| 5 | 800.04(6)(c) | 3rd | "Lewd or lascivious conduct; offender less than 18 years of age." |
| 5 | 800.04(7)(b) | 2nd | "Lewd or lascivious exhibition; offender 18 years of age or older." |
| 5 | 847.0135(5)(b) | 2nd | "Lewd or lascivious exhibition using computer; offender 18 years or older." |
| 4 | 800.04(7)(c) | 3rd | "Lewd or lascivious exhibition; offender less than 18 years." |
| 4 | 847.0135(5)(c) | 3rd | "Lewd or lascivious exhibition using computer; offender less than 18 years." |

**F.S. 800.03 does not appear anywhere in the chart.** An unranked third degree
felony takes its level from F.S. 921.0023 rather than 921.0022, and **921.0023
was not fetched this session.** The table must say "not ranked in 921.0022; see
921.0023" and must not invent a level. Recorded as UNMET in Section 10.

**Read the level 7 block, which is where this page's substance concentrates.**
Level 7 is 56 primary offense points, and the lowest permissible sentence
threshold is 44 points. **A single conviction under F.S. 943.0435(9)(a), which is
a failure to report, scores 56 points on the primary offence alone**, twelve above
the threshold at which a nonstate prison sanction ceases to be the lowest
permissible sentence. That is the arithmetic behind Section 6's assertion and it
is stated in the outline as arithmetic, not as a prediction about any case.

### 7.7 FDLE, the registry's own procedure

FDLE is allowlisted at CASES-WE-DEFEND-PLAN.md Section 10.3 and is the correct
source for the registry's procedure as distinct from what the statute says.

**https://offender.fdle.state.fl.us/offender/sops/faq.jsf**, FAQ 4, verbatim:

> "Sexual offenders must complete a registration form at their county sheriff's
> office either twice a year (birth month and every 6th month thereafter) or four
> times a year (birth month and every 3rd month thereafter) **depending upon their
> offense**. For a list of qualifying offenses for quarterly registration (four
> times a year) please refer to Florida Statute 943.0435(14)(b). **All sexual
> predators, some sexual offenders, and all juvenile sexual offenders must report
> four times a year**"

FAQ 7, verbatim in part:

> "If an offender or predator is visiting Florida from another state, he or she
> must report in person to the sheriff's office **within 48 hours of establishing
> a temporary residence in Florida**. Within 48 hours from the time of his or her
> registration with the sheriff's office, he or she is required to report in
> person to the Department of Highway Safety and Motor Vehicles (DHSMV) [...]
> Failure to comply with these registration requirements as provided by Florida
> Statute is a felony of the 3rd degree."

FAQ 8, verbatim in part, which the statute states less plainly:

> "A sexual offender/predator planning to establish a permanent, temporary, or
> transient residence in another state within the U.S. must report in person to
> the sheriff of the county where he or she currently resides in Florida **at
> least 48 hours before** the date he or she intends to leave Florida; OR If a
> sexual offender/predator is leaving the U.S. for any amount of time, he or she
> must report in person [...] **at least 21 days before** the date he or she
> intends to travel"

FAQ 13, verbatim in part, which corrects a widespread misunderstanding and which
the page should carry:

> "**Florida's sexual offender/predator registration laws do not prohibit
> offenders/predators from living in certain areas** or from sharing a residence
> with another sexual offender/predator. **However, there may be municipal and/or
> county ordinances** that outline where sexual offenders/predators can live [...]
> For more information pertaining to state residency restrictions based on a
> particular conviction, please see Florida Statute 775.215."

**F.S. 775.215 was not fetched.** Recorded as UNMET.

**https://www.fdle.state.fl.us/getContentAsset/9ba23964-88f8-4ee2-a2d3-66a0162460d4/73aabf56-e6e5-4330-95a3-5f2a270a1d2b/Notice_to_Registrants.pdf**,
linked from FDLE's "Important Information" page. Title and effective date,
verbatim:

> "**2025 Registration Law Updates for Sexual Offenders and Sexual Predators**
> Pursuant to House Bill 1351, the Florida Department of Law Enforcement (FDLE)
> provides this notice to highlight updates to Florida's sexual offender and
> predator registration laws that impact those required to register.
> **EFFECTIVE OCTOBER 1, 2025**"

The address verification cadence, verbatim, which is the change least visible in
the statute text and most useful to a reader:

> "For those who are not under the care, custody, control, or supervision of DOC,
> county and local law enforcement agencies are required to verify the addresses
> of **sexual offenders at least one time per calendar year and of sexual
> predators at least four times per calendar year** [...] Sexual offenders and
> predators must respond to any address verification correspondence from FDLE or
> county or local law enforcement agencies **within 3 weeks** after the date of
> the correspondence. **Address verifications are not the same as in-person
> biannual or quarterly reregistration.** Completion of an address verification by
> a local agency or FDLE does NOT alter or negate in-person biannual or quarterly
> reregistration requirements."

**https://www.flsenate.gov/Laws/Statutes/2026/943.0435** returns the 2025 index,
and the statutes index states: "The Florida Statutes are updated annually after
the conclusion of a regular legislative session, **typically published in
July/August**." Year selector runs 2025 back to 1997. verified 2026-08-13. This
is the source for Section 3.3's finding.

### 7.8 UNVERIFIED, and what to check

| Claim | Status | What to check |
|---|---|---|
| The F.S. 921.0023 default level for an unranked third degree felony, needed for F.S. 800.03(2)(b) | **UNVERIFIED** | flsenate.gov/Laws/Statutes/2025/921.0023. **Publish blocker** for one row of the penalties table. Do not infer it. |
| F.S. 775.215, residency restrictions by conviction | **UNVERIFIED** | flsenate.gov. FDLE FAQ 13 names it. Outline section 8 cannot state a distance or a restriction without it. |
| F.S. 943.04354, the "Romeo and Juliet" removal provision | **UNVERIFIED** | flsenate.gov. FDLE FAQ 9 describes it (victim at least 13 and not more than 17, no more than four years younger, consensual, sole qualifying offence). **Reported by FDLE, not verified against the statute.** Outline section 8 must quote the statute, not the FAQ. |
| F.S. 943.0585 and 943.059, whether these offences may ever be sealed or expunged | **UNVERIFIED** | flsenate.gov. Blocks assistant-question 12 and constrains the link to `/resources/tools/seal-expunge-eligibility`. |
| Chapter 2025-134 and chapter 2025-156, their effective dates and whether any provision was deferred into 2026 | **UNVERIFIED** | flsenate.gov Laws of Florida. FDLE's notice gives October 1 2025 for HB 1351's provisions. A deferred provision would change Section 3.3's answer and nothing else. |
| Whether F.S. 800.04(4)(a)1's "sexual activity" definition creates an overlap with chapter 794 charging | **UNVERIFIED, and deliberately not pursued** | It is the sibling page's territory. Section 6.6 records it. |
| Hillsborough County Sheriff's Office registration hours and phone | **verified from FDLE's own PDF**, but a single-source fact on a detail that changes | Re-fetch the FDLE registration locations PDF at each 6-month review. |
| Whether a local pack ever renders on this query | **verified absent on one Tampa-pinned pull** | Single observation. Not generalised. |
| SERP for `lewd and lascivious florida` | **NOT PULLED** | Its 6-12mo grade is inferred from volume, CPC, and statutory shape only. |

---

## 8. Local specificity

| Element | Detail | Source status |
|---|---|---|
| Circuit | Thirteenth Judicial Circuit, Hillsborough County | **reported**, carried from W2-04 Section 7 |
| Felony courthouse | Edgecomb Courthouse, 800 E. Twiggs Street, Tampa FL 33602, "Circuit Criminal" | **verified 2026-08-13** by TEMPLATE-FINDINGS Section 4, hillsclerk.com. Every offence in Section 7.6 is a felony and sits here. |
| County criminal | The clerk lists "County Criminal" at its courthouse locations | **verified**, same source. Relevant to a **first** violation of F.S. 800.03 only, which is a first degree misdemeanour. |
| East Hillsborough | Plant City Courthouse, 301 North Michigan Ave, "Criminal Courts" | **verified**, same source |
| Brandon | **EXCLUDED FROM COPY per D7** | The Brandon Regional Service Center is a clerk facility and D7 blocks naming it until the attorneys confirm it is accurate for these case types. It is not confirmed and this page does not name it. |
| **Where a person registers in Hillsborough County** | **Hillsborough County Sheriff's Office, 1201 Orient Road, Tampa FL 33619. Monday to Friday, 7:30am to 3:30pm. 813-247-8460.** | **verified 2026-08-13**, FDLE "Registration Locations" PDF, allowlisted. |
| Prosecuting agency | State Attorney, Thirteenth Judicial Circuit | **reported.** No policy document fetched and none should be characterised. |
| Designating authority | The sentencing court, by written finding under F.S. 775.21(5)(a)2, transmitted to FDLE by the clerk within 48 hours | **verified**, Section 7.4 |
| Registry authority | FDLE Offender Registry Services Bureau, 1-888-357-7332 | **verified**, FDLE FAQ preamble |
| Arresting agencies | HCSO in unincorporated county, Tampa PD in city limits | **UNVERIFIED.** Carried forward as unresolved from W2-04. Do not name from recall. |

**The registration location line is the strongest piece of local specificity this
project has produced.** TEMPLATE-FINDINGS Section 2 records that zero graded
competitor pages name a courthouse, a division, or an arresting agency, and
Section 2.3 above confirms that holds in this niche too. **A verified street
address, opening hours, and phone number for the one obligation carrying a
48-hour deadline is a genuinely useful fact, not a local-SEO gesture,** and it is
sourced to the state agency that maintains the registry rather than to a firm
page. It answers assistant-question 11 in one line.

---

## 9. Internal links

| Direction | Target | Note |
|---|---|---|
| Up, silo hub | `/criminal-defense` | |
| **Down, category** | `/criminal-defense/sexual-battery-defense` | **The most important link on the page.** As a category overview this page must route chapter 794 matters to the sibling rather than covering them. Named from outline section 2. **This is not in tension with ST-03's posture**, which explicitly refuses to link `/criminal-defense/battery-defense` to the sexual battery page ("It shares one word and nothing else, and the association is a harm to a page about ordinary battery"). ST-03 is right, and the reason it is right is the reason this link is required: ordinary battery has nothing to do with chapter 794 and this page has a routing obligation to it. Different pages, opposite correct answers. |
| Sideways, same silo | `/criminal-defense/computer-crimes-defense` | F.S. 815.06 is a different statute entirely and the pages must not blur. site.ts records the label was set to "Unauthorized Computer Access" precisely to steer away from "internet crimes", which "in this market pulls child pornography defence into the same SERP". **This link is one line and it goes one way.** |
| Cross-silo | `/federal-criminal-defense/csam-defense` | The federal counterpart. Per Section 4.6, an overlap page carries a forum section; **this page is not an overlap page**, because F.S. 847.0135 and the federal CSAM statutes are not two forums for one offence. One plain cross-link from outline section 2, no forum section. |
| Cross-silo | `/federal-criminal-defense` | For enticement and travel prosecuted federally. |
| Sideways | Attorney bio via `HandledBy` | Blocked on WEBSITE-PLAN.md Open Question 2. **The referral conversion point per Section 5.1.** |
| Layer 2, specific | `/resources/guides/after-an-arrest` | Serves the family member reader. |
| Layer 2, specific | The 33-day-rule correction guide | Required by Section 11A.2 rule 5 and by PAA #2. This is the question's eighth recorded appearance. |
| Layer 2, specific | `/resources/tools/seal-expunge-eligibility` | **Linked, not described.** Whether these offences are eligible is UNVERIFIED and the page says nothing about it until F.S. 943.0585 and 943.059 are fetched. |
| Layer 2, specific | The offense-level comparison instrument (TOOLS.md rank 1) | **And a note on why the Section 7.6 table stays on the page.** Section 4.5's collision ruling moved the F.S. 812.014 value table to Layer 2 because two charge pages both claimed it. Every row of the Section 7.6 table is a subsection of a statute only this page covers, so no other page can claim it and there is nothing to move. The page links to the instrument for cross-charge comparison and keeps its own rows. |
| Layer 2, hub | `/resources/tools-and-guides` | |
| **Proposed Layer 2** | `/resources/guides/florida-sex-offender-registration` | Recommended if and only if Section 0's recommendation is rejected. See Section 6.5. |
| **Not linked** | The sentencing calculator | Blocked by the C1 through C8 ship gate in Section 5.6. The offense level column ships with the number and without the link. |
| **Not linked** | Anything on the informational SERP | FDLE's search, tampa.gov's registry page, and the sheriffs' lookup pages serve the other audience identified in Section 1.2. **FDLE's FAQ is cited as a source in the brief and is not a link target on the page**, because a defence page linking a searcher into the public registry serves the wrong reader. |

---

## 10. DONE-CRITERIA

| # | Criterion | Status | Note |
|---|---|---|---|
| 1 | Hub-or-charge-page question decided and recommended with reasons, not unilaterally | **MET** | Section 0. Recommended as a category overview that is **not** `c9Exempt`, tested against D12's stated ratio clause by clause, with the three implementation consequences named and a fallback at 6.5. |
| 2 | Difference from the corporate fraud precedent tested rather than assumed | **MET** | Section 0.3. D12's condition is "no statute". This page rests on five, and Florida law enumerates the category twice, at 943.0435(1)(h)1.a and 775.21(4)(a)1, both quoted. |
| 3 | Primary and secondary queries with winnability grade and volume at both geographies | **MET** | Section 1. Head term YEARS, agreeing with keywords.md. |
| 4 | Grade contradictions with keywords.md stated | **MET, none found** | keywords.md grades `sex crimes attorney Tampa` YEARS; this session agrees. The **SERP composition** has moved since keywords.md and that change is recorded at 2.1, but the grade has not. |
| 5 | Commercial term argued from the DMA number and the CPC, not the FL-equals-DMA identity | **MET** | Section 1.1. Identity explicitly refused as an argument. Ranked against the corpus DMA table and against the wave 4 CPC set. |
| 6 | CPC figure reported as measured | **MET, with a correction** | FL $48.87, **DMA $23.10**, not $48.87 at both. Recorded rather than smoothed. |
| 7 | Informational term audience-checked and excluded | **MET, and strengthened** | Section 1.2. Excluded on two grounds: wrong audience per the SERP and related searches, and **no measurable volume at either geography**, which is a stronger ground than the task's framing assumed. |
| 8 | What remains winnable, stated | **MET** | Section 1.3. `lewd and lascivious florida` at 70 FL / 20 DMA / $11.50 is the page's real search asset, and `solicitation of a minor florida` at 10/10 is second. |
| 9 | The 2026 laws question checked rather than assumed | **MET** | Section 3.3. Three independent allowlisted checks, all negative. Verified change effective 1 October 2025; **no verifiable 2026 change.** The absence is recorded as the finding and becomes the page's off-cycle refresh trigger. |
| 10 | SERP field: who holds it, what they are missing, competitor pages graded honestly | **MET** | Section 2. Four pages graded. Zero tables, zero FAQ blocks, zero offense levels, zero dates, zero courthouses, and **the position 2 page cites no statute and has no H2 or H3 at all.** Graded honestly in both directions: the content field is wide open and the page still will not move this SERP. |
| 11 | Correction to the task's competitor framing | **MET** | 2.2. tampasexcrimesattorney.com is Hanlon Law's satellite, not an independent single-practice firm. Counted properly Hanlon holds **four of nine** AI Overview citations across two domains, two of the top five organic slots, and the knowledge panel. |
| 12 | PAA verbatim with a disposition and reason for each | **MET** | Section 3. 8 questions across both queries. 3 FAQ-eligible, 1 to body copy, 4 refused with reasons (fee, 33-day, directory-shaped, and the unverifiable 2026 question). |
| 13 | Assistant-question set weighted over PAA | **MET** | Section 4. 12 questions, 4 of the 6 FAQ slots from this set and 2 from PAA, which matches the yield TEMPLATE-FINDINGS Section 4A records. |
| 14 | Outcome-shaped questions refused and the refusal recorded | **MET** | Section 4. None was written; the three considered are named. Q5 excluded because its phrasing invites minimisation, which W4-SPEC forbids as firmly as the opposite. |
| 15 | Section-by-section outline against the level 3 template with substitutions noted | **MET** | Section 5. 13 sections, two substitutions marked (item 2 becomes a five-statute orientation block, item 4 becomes a per-statute elements grid) and one structural request (section 8 reachable from the top). |
| 16 | What a referring attorney or family member needs, and where | **MET** | Section 5.1. Two readers, three needs each, mapped to outline sections 2, 3, 6, 8, and 10. The penalties table identified as the referral asset, which is an independent argument against `c9Exempt`. |
| 17 | C9 in the `c9` field's exact shape | **MET** | Section 6.1. F.S. 943.0435. |
| 18 | C9 does not rest on F.S. 794.011 | **MET** | Section 6. The assertion names only 943.0435 subsections. |
| 19 | Cover-the-name test proved | **MET** | 6.2. Six substitutions, including the closest structural neighbour (DUI's statutory clock) worked through in three dimensions. |
| 20 | Hand-check against every populated assertion | **MET** | 6.3. All 20 checked individually. **Two changed this brief:** the healthcare fraud "levels come apart" shape was present in these statutes and was removed from the assertion, and the drug possession chart claim was distinguished. |
| 21 | Hand-check against the sexual battery sibling, and every wave 4 brief existing at finish | **MET** | 6.6. No W4 brief existed when this brief began; all three existed when it finished, and the check was performed against their **recorded assertions**, not against expectations. W4-01 rests on F.S. 794.011(5) and (6) with 794.005, W4-03 on F.S. 782.04, W4-04 on 18 U.S.C. 2252. **No collision with any.** All four previously-flagged 794.011 claims resolved: W4-01 cites neither 775.21 nor 921.0024 anywhere, and carries 943.0435 for one sentence only. |
| 21a | The territory division confirmed from both sides | **MET** | 6.6. W4-01 Section 0.2 states the same division in its own words and lists 800.04, 847.0135, and 943.0435 as hard exclusions from its page. Two independent divisions of the same ground, drafted without sight of each other, landing identically. |
| 21b | Sibling requests answered rather than noted | **MET** | 6.7. Three answered: the reciprocal link granted with the asymmetry explained; the AI Overview's "mandatory, lifetime registration" claim **checked against F.S. 943.0435(11) and found materially incomplete**, with the consequence stated for both pages; and W4-04 freed on registration duration and told plainly that F.S. 827.071(5)(a) is claimed by nobody. |
| 21c | Section 11A.2 rule 5 applied to the limitations question | **MET, flagged not decided** | 6.6 item 3. A limitations FAQ has now surfaced on two wave 4 charge SERPs, which engages rule 5. Each page answers from a subsection of F.S. 775.15 the other cannot use, so a shared Layer 2 guide looks disproportionate for two entries. **Routed to the reconciliation barrier**, because a rule-5 call that affects two pages should not be made unilaterally by one of them. |
| 22 | Source URL with quoted text for every statutory claim | **MET** | Section 7. Eight allowlisted fetches: flsenate.gov for 800.04, 800.03, 847.0135, 943.0435, 775.21, 775.15, 921.0024, plus the parsed 921.0022 chart, plus FDLE for the registry procedure and the registration locations. **No claim rests on recall.** |
| 23 | 921.0022 used for levels only, never for scope | **MET** | 7.6 states the restriction and every scope claim in Sections 7.1 to 7.4 comes from the operative statute. |
| 24 | Registration material fetched and quoted | **MET** | 7.3 and 7.7. Every deadline, the reregistration cadence, the duration, the removal path, the venue provision, both second-degree provisions, the base penalty, and the mandatory minimum, all verbatim. |
| 25 | Local specificity, Brandon excluded per D7 | **MET** | Section 8. Brandon named as excluded with the reason. The HCSO registration address, hours, and phone are new to this project and verified from FDLE. |
| 26 | Internal links | **MET** | Section 9. Includes two deliberate non-links with reasons. |
| 27 | Tone: process, rights, and discretion; no outcome language; no characterisation | **MET** | Section 5 sections 5 and 6 are written as statutory text and procedure, against both W4-SPEC and the standing project rule at WEBSITE-PLAN.md lines 302 to 303, which names sex offense pages specifically and adds "never fear-marketing". 2.4 records the field's results-based positioning specifically so the drafting brief does not mistake it for the competitive move. No sentence in this brief characterises a complainant, a defendant, or any conduct. |
| 27a | C15: every FAQ entry carries a `source` | **MET, with a gap recorded** | Section 4.1. Four `drafted`, two PAA-derived, **zero keywords.md-derived**, because keywords.md carries no graded term for anything on this page except the head term. The highest drafted proportion in the corpus, recorded rather than disguised. |
| 28 | No em dashes, no eyebrow labels, no superiority, no fee claims | **MET** | Commas, periods, and double hyphens only. |
| 29 | **F.S. 921.0023 default level for F.S. 800.03(2)(b)** | **UNMET** | Not fetched. **Publish blocker** for one row of the penalties table. Do not infer it; ST-01 records that this project has already made three errors reading the chart instead of the operative text. |
| 30 | **F.S. 775.215 residency restrictions** | **UNMET** | Not fetched. FDLE FAQ 13 names it. Outline section 8 cannot state any restriction without it. |
| 31 | **F.S. 943.04354 removal provision** | **UNMET** | Described by FDLE, not verified against the statute. Reported, not verified. |
| 32 | **F.S. 943.0585 and 943.059 sealing and expunction eligibility** | **UNMET** | Blocks assistant-question 12 and constrains the seal-expunge link. |
| 33 | SERP for `lewd and lascivious florida` | **UNMET** | Not in the central pull and this brief does not call DataForSEO. Its 6-12mo grade is **inferred from volume, CPC, and statutory shape only.** The single largest term this page can hold has an ungrounded grade, and that is the highest-value target for a second pass. |
| 34 | Local pack behaviour on this query generalised | **UNMET by choice** | One Tampa-pinned pull showed no pack. Recorded as one observation, not generalised, because generalising from a small sample is the failure TEMPLATE-FINDINGS' own amendment records. |
| 35 | Whether a category page may carry a C9 under the plan | **UNMET, and it is a question for the plan owner** | Nothing in CASES-WE-DEFEND-PLAN.md forbids it and nothing permits it. Section 0.5 item 3. |

**Passes used: 1 of 2.** Pass 2, if spent, goes to a single fetch batch:
F.S. 921.0023, 775.215, 943.04354, 943.0585, and 943.059 from flsenate.gov.
That clears criteria 29, 30, 31, and 32, which is the whole publish-blocker set,
and it leaves criterion 33 to a SERP pull that this brief is not permitted to
issue.
