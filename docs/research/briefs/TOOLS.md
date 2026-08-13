# PHASE C: Layer 2 tools and guides the briefs revealed demand for

Research date 2026-08-13. Extends docs/research/tools-and-hooks.md and
WEBSITE-PLAN.md Section 5 rather than restating them. Only assets whose demand
was **observed in this session's SERP and volume work** appear here. Assets
already in the plan (the CPC calculator, the bond estimator, the After an Arrest
guide, the federal timeline, the seal and expunge checker) are not re-argued and
not re-ranked; where a brief revealed something new about one of them it is
noted at the end.

**Ranking criterion, stated so the order is checkable:** evidence of demand
first, then how many of the ten briefs the asset serves, then build effort.
An asset that serves one page ranks below an asset that serves six, at equal
demand.

**Re-ranked 2026-08-13, and the criterion needs one addition to explain it.**
The offense-level asset was raised from rank 2 to rank 1 and re-scoped from a
lookup to a comparison instrument. It does not have the strongest demand
evidence in the file, and it now ranks above the asset that does. The reason is a
fourth criterion the first draft did not have: **an asset that other decisions
now depend on outranks one that is merely wanted.** The comparison instrument is
where the F.S. 812.014 table lives under the C9 collision ruling in
CASES-WE-DEFEND-PLAN.md Section 4.5, so two charge pages cannot be drafted as
specified until it exists. The 33-day guide has more demand behind it and nothing
waiting on it.

**The gate.** CASES-WE-DEFEND-PLAN.md Section 5.6 sets done-criteria C1 through
C8 for the sentencing calculator. Section 5.4 is the load-bearing one:
computation runs entirely in the browser and no user-entered charge data is
stored or logged server-side, ever. **Every recommendation below is assessed
against C1 through C8 whether or not it computes anything**, because the
standard is about what the asset does with a reader's case facts, not about
whether it has a form. Nothing here requires collecting case facts
server-side, and nothing that would is recommended.

---

## 1. The offense-level comparison instrument

**Rank 1, raised from rank 2 on 2026-08-13. Re-scoped from a lookup table to a
comparison instrument at the same time. Effort S to M.**

### What it is, and why the re-scope matters

The first draft of this recommendation described a lookup: type a charge, see its
offense level. That is useful and it is not the point.

**The purpose is to make one verified thesis visible: degree does not predict
offense level.** Everyone in this market publishes degrees. Degrees are what a
reader can already find, and they are what every competitor page leads with. The
offense level is what actually drives the scoresheet, it is published by nobody,
and the relationship between the two is not what a reader would guess. A lookup
hides that. A comparison shows it.

### What it must show, at minimum

Three comparisons, all verified this session from F.S. 921.0022 and recorded in
the briefs:

1. **The same dollar figure across three statutes.** Take $19,000. Charged as
   grand theft under 812.014(2)(c)3. it is a third degree felony at **level 4**.
   Charged as scheme to defraud under 817.034(4)(a)3. it is a third degree felony
   at **level 3**. Charged as money laundering under 896.101(5)(a) it is a third
   degree felony at **level 7**. Same money, same degree, three different levels.
2. **A second degree felony outranking a first degree felony.** Identity theft
   under 817.568(7), fraudulent use of the personal identification information of
   a minor by their own parent or guardian, is a **second degree** felony ranked
   at **level 9**. First degree grand theft of $100,000 or more, under
   812.014(2)(a)1., is ranked at **level 7**. The lower degree carries the higher
   level.
3. **The trafficking floor.** Every drug trafficking tier in 893.135 starts at
   **level 7** and runs to level 9. There is no low-level trafficking charge.
   That single fact explains more about why trafficking is different from every
   other drug charge than any prose paragraph on any competitor page.

It should also carry the grand theft spread, third degree grand theft running
from level 2 to level 6 depending on value and on what was taken, because it is
the cleanest demonstration that one degree is not one exposure.

### Evidence of demand

1. **The data is already in hand and it is the C9 engine for the whole section.**
   F.S. 921.0022 was fetched and parsed this session; every wave 1 and wave 2
   state charge has its complete level mapping recorded in its brief.
2. **No competitor publishes any of it.** content-gaps.md Topic 4 established
   that "no competitor breaks Criminal Punishment Code content out by offense
   level," and this session's page grading confirms it holds: zero of three
   graded competitor pages mentions an offense level, and the longest of them,
   at roughly 2,900 words, cites no statute at all.
3. **Statute-shaped search behaviour.** `Florida criminal punishment code
   scoresheet` returns 70/month at Florida state level, and the related-search
   block on the grand theft informational query is entirely statute-number
   queries. keywords.md already grades the level pages "closest to NOW."
4. **It now resolves a C9 collision.** Per CASES-WE-DEFEND-PLAN.md Section 4.5,
   the F.S. 812.014 value-to-offense-level table lives here rather than on both
   the embezzlement and grand theft pages. This asset is what makes that ruling
   possible, which raises it from useful to structural.

### Does any competitor have one?

**No.** Barklaw and Delgado run calculators, which is a different artefact, and
neither is Tampa-framed. **This is not the calculator and must not wait for it.**
A comparison of statutory classifications is separable from a computation of a
sentence, it is the half that is not gated, and it is the half every charge page
needs on day one.

### Build effort

**S to M.** The chart is long but structured, and the parse already exists. The
work is verification and presentation. The re-scope adds design effort, not
engineering effort: the comparisons have to be laid out so the thesis is legible
without a paragraph explaining it.

### Rule 4-7 considerations

The output is a statutory classification, not a prediction, which is why it
clears where the calculator does not. Label it as what F.S. 921.0022 assigns,
never as "your level." Carry the same no-legal-advice and
no-attorney-client-relationship notice the calculator would, because a reader can
form an expectation from any tool on a firm's site regardless of how simple it is
(Op. 24-1 and Bartholomew, per plan Section 5.3).

**One trap the re-scope introduces.** A comparison inviting a reader to conclude
their charge is "better" or "worse" than another edges toward outcome framing.
Present the comparison as what the code assigns and stop. Do not rank the
comparisons by severity or annotate them with commentary about what a defendant
should prefer.

### Calculator gate

| Criterion | Assessment |
|---|---|
| C1, no predictive framing | **Passes by construction.** The output is a statutory classification. It says what the chart assigns, not what will happen. |
| C2, states what it cannot know | **Required and easy.** The level is only the primary-offense component; prior record, additional offenses, victim injury, and multipliers are not in it. Say so adjacent to the output. |
| C3, Rule 4-7.12(d) presentation | **Required.** Equal prominence, close proximity, not fine print, not footer-only. |
| C4, no-attorney-client notice adjacent | **Required.** |
| C5, client-side only | **Passes trivially.** A static comparison has no inputs to send. If a filter is added it filters a shipped dataset in the browser and no query string carries a charge. |
| C6, revision stated by date | **Required.** State the F.S. 921.0022 version, currently the 2025 Florida Statutes. |
| C7, attorney-reviewed accuracy note | **Required**, and it is a real review: the mapping is checked against the chart, not against this file. |
| C8, no results, testimonials, "confidential" labels, or implied Bar approval | **Required.** |

All eight are satisfiable without a computation, which is why this ships ahead of
the calculator rather than behind it. See CASES-WE-DEFEND-PLAN.md Section 5.7 on
why the mounting pressure to link the calculator is a reason to hold its gate
rather than relax it.

**No federal page links to this asset**, per the standing rule added to plan
Section 4.2 on 2026-08-13. The Criminal Punishment Code does not apply to federal
cases, so the link would be wrong on the merits and stays wrong after C1-C8
clear.

---

## 2. The Florida 33-day rule guide

**Rank 2, moved down from rank 1 on 2026-08-13 when the comparison instrument was
raised. The demand evidence below is unchanged and is still the strongest in the
file. Guide, not a tool. Effort S.**

### Evidence of demand

**"What is the 33 day rule in Florida?" surfaced as a People Also Ask question
on seven of the ten primary queries in this brief set**: grand theft,
embezzlement, drug trafficking, gun charge, domestic violence, money
laundering, and identity theft. verified 2026-08-13, Tampa-geolocated.

That is the single most repeated question anywhere in the Phase B research, and
it is more repeated than any charge-specific question by a factor of six. It is
also the question that forced TEMPLATE-FINDINGS Change 3: it is real demand
attached to no charge, so under C9 it cannot live on a charge page, and under
Section 11A.2 rule 2 it cannot be ignored either. A Layer 2 guide is the only
place it fits.

### Does any competitor have one?

**No dedicated page was observed in any of the ten SERPs.** verified absence
within the SERPs seen. Google is surfacing the question repeatedly and
answering it from PAA expansions rather than from a page anyone built.

### Build effort

**S.** One page, no interactivity, one rule to cite.

### Rule 4-7 considerations

Low risk, with one real trap. The guide describes a procedural deadline. It must
describe what the rule provides and must not suggest what will happen if the
deadline passes, because the intuitive reading (that a case goes away) is wrong
and stating it would be a materially inaccurate statement under Rule
4-7.13(a)(1). Frame as process, per the standing rail.

### Calculator gate

C1 through C8 assessed: **not applicable in substance, and passed trivially.**
No computation, no inputs, no output about a reader's liberty, no data of any
kind leaves the browser because there is nothing to send. C6 still applies in
spirit: the guide states the rule it implements and the date it was reviewed.

### RESOLVED 2026-08-13. Outcome: common misconception. Build the correction page.

The first draft recorded this as UNVERIFIED and set three possible outcomes:
genuine rule, common misconception, or unverifiable. **The second obtains**, and
it is the most valuable of the three, because a correction page has something to
say that no competitor page is saying.

Verified from The Florida Bar's published compilation of the Florida Rules of
Criminal Procedure, updated July 13, 2026, Rule 3.134 at pp. 76-77:
https://www-media.floridabar.org/uploads/2026/07/2026_01-JUL-Criminal-Procedure-Rules-7-13-2026-1.pdf

> "RULE 3.134. TIME FOR FILING FORMAL CHARGES
> (a) Defendants in Custody.
> (1) The state must file formal charges on defendants in custody by information, or indictment, or in the case of alleged misdemeanors by whatever documents constitute a formal charge, within 30 days from the date on which defendants are arrested or from the date of the service of capiases on them.
> (2) If the defendants remain uncharged, the court on the 30th day and with notice to the state must:
> (A) Order that the defendants automatically be released on their own recognizance on the 33rd day unless the state files formal charges by that date; or
> (B) If good cause is shown by the state, order that the defendants automatically be released on their own recognizance on the 40th day unless the state files formal charges by that date.
> (3) In no event may any defendants remain in custody beyond 40 days unless they have been formally charged with a crime.
> (b) Defendants Not in Custody.
> (1) The state must file formal charges on defendants on pretrial release by information or indictment ... within 60 days ... the court on the 60th day and with notice to the state must:
> (A) Order that the defendants automatically be released on their own recognizance on the 63rd day unless the state files formal charges by that date; or
> (B) If good cause is shown by the state, the Court may continue the defendant on pretrial release for up to an additional 30 days unless the state files formal charges.
> (2) On the expiration of the time period prescribed in subsection (1), and on motion with notice to the state, the court shall order that the defendant be released from all requirements of bail and all conditions of pretrial release unless the defendant has been formally charged with a crime."

Subdivision (b) is **new as of July 1, 2025**, added by In re: Amendments to
Florida Rule of Criminal Procedure 3.191, No. SC2022-1123 (Fla. Mar. 13, 2025),
411 So. 3d 385.

**Method note.** Three independent research angles, then two adversarial
verifiers instructed to refute and to default to refuted if uncertain. **Neither
could refute it**, and both independently re-derived the rule text from the Bar
compilation. One verifier confirmed mechanically that a case-insensitive search
of the full compilation returns **zero** hits for "33 day" or "33-day" and
**exactly one** hit for "33rd," in 3.134(a)(2)(A).

### What is actually wrong with the popular understanding

Four things, and they are the page's content:

1. **The deadline is 30 days, not 33.** Day 33 is the earliest automatic release
   date the court sets on day 30. The state can still file on days 31, 32 or 33
   and moot the release entirely.
2. **The good-cause escape hatch is always omitted.** On the state's showing of
   good cause the release date moves to the 40th day, so 33 is not a ceiling on
   uncharged custody at all. Forty is.
3. **Release is not dismissal.** This is the damaging one. The words "dismiss,"
   "dismissal," "drop," "discharge" and "bar" appear nowhere in Rule 3.134. Every
   operative verb is "released." The state may file afterward and prosecute
   normally; the real outer limit is the statute of limitations at F.S. 775.15,
   which runs in years, not days.
4. **Almost the entire competing corpus is now stale.** It describes only the
   in-custody track and predates subdivision (b). **For most arrestees, meaning
   anyone who bonded out, the operative numbers are now 60 and 63, not 30 and
   33.**

### Why this is now a better asset than when it was ranked on demand alone

The demand evidence was already the strongest in the file: the question surfaced
on seven of the ten primary queries. What the verification adds is that **the
answer everyone else is giving is wrong, and the freshest fact in it is thirteen
months old and unrepresented.** A correction page with a current-as-of date beats
a corpus that is both inaccurate and stale, which is a stronger position than
merely being first to a question nobody answered.

### Revised Rule 4-7 considerations

The first draft called this low risk. **It is not.** Publishing the number
without the consequence reproduces exactly the harm identified above, and a page
that leaves a reader believing release means the case is over could lead someone
to stop preserving evidence or to talk to a detective. Requirements:

- The release-is-not-dismissal correction goes **above the fold**, not in a
  footnote.
- A current-as-of date and an explicit note of the July 1, 2025 amendment.
- Describe what the rule provides. Do not characterise what it will do in any
  particular case.

### One open verification before publish

One research angle flagged that the consolidated Rules PDF hosted on
flcourts.gov carries a January 1, 2017 footer and **does not contain the amended
(a)/(b) structure**, so it is stale for this rule and must not be cited as
current. The controlling text is the Bar's July 13, 2026 compilation quoted
above, which both verifiers retrieved successfully. **Have a person open that
Bar URL in a browser and eyeball Rule 3.134 before publish**, since one agent hit
a Cloudflare 403 on it and the two that succeeded were reading the same document
independently rather than a second source.

---

## 3. The charging-document decoder

**Rank 3, added 2026-08-13. Reference tool. Effort S to M.**

**Why rank 3 and not higher.** It serves **more briefs than any other asset in
this file**, and its demand pattern is the most replicated finding in the
programme. It ranks below the two above it because their demand is measured
directly on the terms they serve, while a meaningful part of this asset's
evidence is a **shape** observed in related searches that carry no volume
figures. Ranked on breadth and replication, not on a single volume number, and
the distinction is stated so the order stays checkable.

### Evidence of demand

**The pattern surfaced independently in three briefs, on three different silos,
without any of them being told to look for it.** That is what moves it from an
observation to a finding.

| Brief | What was observed |
|---|---|
| ST-02 drug possession | **All eight** related searches on the informational query are statute strings or booking descriptions: `Fss possession of controlled substance`, `FL 893.13 6a`, `893.13 6b`, `Fss possession of drug paraphernalia`, `Drug equip possess and or use` |
| W4-01 sexual battery | `794.011 8b` among the related searches, pointing at the familial or custodial authority subsection |
| W4-04 federal CSAM | **`18 usc 2252` at 70/month Florida, 20/month Tampa DMA**, the second-largest statute-number term in the corpus behind `21 usc 841` at 140/month |

Related searches on the battery and sexual battery queries repeat it in the
Florida form: `Fss battery`, `Fss Simple battery`, `Fss felony battery`, `Fss
sexual battery Jury Instructions`, `Aggravated battery fss`, `784.03 1A1
domestic battery`.

**What the pattern actually is.** People are typing the citation off a piece of
paper. A charging document, a booking sheet, or an indictment names a statute
and a paragraph, not an offence in plain English, and the first thing a person
does with it is search the string. **The audience is unambiguous**: nobody
searches `893.13 6b` out of curiosity.

**It serves every charge page in the project**, state and federal, which no other
asset in this file does.

### Does any competitor have one?

**No, and no competitor page answers a statute-string query at all.** Verified
across the graded competitor sets in six briefs. The pages that rank on these
queries rank despite not answering them: they are charge-name pages that Google
matches to a citation string because nothing better exists.

### What it must do, at minimum

- Map a **Florida statute string in the forms people actually type** (`893.13
  6a`, `Fss 784.03`, `784.03 1A1`, `F.S. 812.014(2)(c)`) to the offence name,
  the degree, and the plain-English description of what the paragraph covers.
- Do the same for the **federal citation forms** (`18 usc 2252`, `18 U.S.C. §
  1343`), which is where the measured volume is.
- Resolve to the **paragraph**, not the section. An indictment names a paragraph,
  and section-level granularity would fail the exact query it exists to serve.
- **Link through to the charge page** that covers the offence. This is the asset's
  strategic value: it is the natural top of funnel for every charge page, from an
  audience that already knows it has been charged.
- Carry the **operative statutory text**, quoted, with its source, per C12.

### Build effort

**S to M.** Static data plus string normalisation. No computation, no
persistence, no external calls. The mapping table is the work, and much of it is
already fetched and quoted across the 33 briefs.

### The gate, per your instruction: the same standard as the offense-level instrument

**CASES-WE-DEFEND-PLAN.md Section 5.4 applies in full: nothing a user enters is
stored or logged server-side, ever.**

This tool takes a text input, which the offense-level instrument does not, so the
standard is stated concretely rather than by reference:

- **Lookup runs entirely in the browser** against a shipped static dataset. No
  request leaves the page carrying user input.
- **No server-side logging of the query string**, including analytics events
  carrying the raw input, and including error and exception reporting.
- **No statute string in a URL parameter.** A citation a person typed off their
  own charging document is case data, and putting it in a query string puts it in
  referrer headers, server logs, and browser history.
- **No autocomplete endpoint**, which would send every keystroke server-side and
  would defeat the whole gate for a convenience nobody asked for.

**Why this is not over-cautious for a lookup tool.** A statute string entered by
a person facing that charge is as sensitive as anything the sentencing calculator
would take, and arguably more identifying in aggregate: a small number of queries
against a Brandon-area IP describes a specific person's specific case. The gate
exists for what the asset does with a reader's case facts, not for whether it
computes.

### Rule 4-7 considerations

Low risk, with one live edge. Stating what a statute covers is factual and
citable. **The tool must not characterise exposure, suggest a likely outcome, or
imply that a particular paragraph is better or worse to be charged under.** It
resolves a citation and links onward. Degree and statutory maximum are facts and
belong; anything that reads as "this is the good one" does not.

**One thing it must get right or not ship.** A decoder that resolves a string to
the wrong paragraph is worse than no decoder, because the reader has no way to
tell. The 921.0022 chart must not be used as the mapping source: this project has
found **six** chart-versus-statute scope errors, three of them in ST-02 on the
possession statute this tool would be most used for. **The mapping is built from
operative statutory text or it is not built.**

---

## 4. The third degree felony sentencing page

**Rank 4. Guide. Effort S.**

### Evidence of demand

**`third degree felony Florida` returns 1,000 searches per month at Florida
state level, competition LOW, top-of-page bids $0.55 to $30.97.** verified
2026-08-13. That is the largest verified volume of any non-head term found in
this entire session, four times the next largest.

`grand theft third degree Florida` adds 140/month. keywords.md already graded
"what is the minimum sentence for a third degree felony in Florida" 6-12mo and
noted two Tampa firms already rank on the adjacent head term.

It also serves the briefs directly: seven of the ten wave 1 and wave 2 pages
have at least one third degree felony row in their penalties table.

### Does any competitor have one?

Yes, several, and that is the honest position. keywords.md records LegalClarity,
Buda Law, Meltzer & Bell, Moses & Rooth, and Marshall Law competing here. But
**this session found the publisher wall on the adjacent grand theft query has
gone**: LegalClarity held four of eight positions when W2 ran and appears
nowhere in the top nine today. verified 2026-08-13. The field is small-firm
blogs, and none of them connects the answer to the scoresheet.

### Build effort

**S.** It already exists in the plan as `/sentencing/third-degree-felony`. This
recommendation is to move it forward, not to invent it.

### Rule 4-7 considerations

The highest-risk page in this list, because the reader's question is "will I go
to prison" and the honest answer involves the 22-point and 44-point provisions.
Frame strictly as what the code permits and what the court may do. content-gaps.md
item 3 already sets the rail: "no 'you will get probation' phrasing; frame as
what the code permits, judicial discretion controls."

### Calculator gate

C1 through C8: **not applicable in substance.** No inputs, no output about a
particular reader. C6 applies: state the statutes and their year. C2 applies in
spirit and should be honoured, because a page that quotes the 22-point
provision without naming what else is on a scoresheet is misleading by omission
in exactly the way Rule 4-7.13(a)(2) describes.

---

## 5. "Is my case state or federal?" forum guide

**Rank 5. Guide. Effort S to M.**

### Evidence of demand

**Google's own AI Overview asks searchers this question, unprompted, on two of
the ten primary queries.** On `drug trafficking attorney Tampa`: "If you'd like
to narrow this down, please let me know: Whether the charges are in state court
or federal court." On `gun charge lawyer Tampa`: "Is it in state or federal
court?" verified 2026-08-13. Google has determined that it cannot answer these
queries without knowing the forum, which is as direct a demand signal as this
session produced.

Independently, **four of the ten briefs carry a mandatory forum section under
plan Section 4.6 and C10**: drug trafficking, gun crimes, money laundering, and
wire fraud. Each needs the same underlying explanation written differently, which
is precisely the condition plan Section 11 describes for a Layer 2 asset ("the
same asset serves several silos").

### Does any competitor have one?

**No dedicated page observed.** The competitor pattern this session found is the
opposite: a **state** page ranking #1 on the query `federal drug trafficking
lawyer Tampa` (Hanlon), and Mayberry and Trombley & Hanes ranking on the wire
fraud query with **bank fraud** pages. verified. The market is answering federal
queries with state pages and hoping nobody notices. A guide that draws the line
honestly has no competitor.

### Build effort

**S to M.** One page. The substance is real but it is explanatory, not
computational.

### Rule 4-7 considerations

Two traps. First, the guide must not suggest the firm can influence which
sovereign charges a case; that edges toward implying a relationship with the
court or prosecutor, which content-gaps.md item 4 already flags. Second, it must
not imply either forum is better, since that is an outcome characterisation.
Describe the differences factually and stop.

### Calculator gate

**This is the recommendation most at risk of being built the wrong way, and the
gate is why.** The obvious product is a decision tree: answer four questions
about your case and we will tell you which court you are in. **Do not build
that.** It collects case facts, it produces an answer about the reader's own
situation, and even done client-side it invites the prospective-client
expectation Rule 4-1.18 and Op. 24-1 describe. Section 5.4's architectural point
applies: a policy of not looking at the data is weaker than never receiving it,
and the strongest version of that is not asking.

**Build the guide, not the tool.** It answers the same question, serves the same
four briefs, and carries none of the exposure.

---

## 6. The 10-20-Life explainer

**Rank 6. Guide. Effort S.**

### Evidence of demand

**`10-20-life Florida` is the only term in the entire gun cluster with
measurable volume: 50/month at Tampa DMA and 170/month at Florida state level,
competition LOW.** verified 2026-08-13. `gun charge lawyer Tampa`, `weapons
charge lawyer Tampa`, and `felon in possession of a firearm Florida` all return
no data.

It is also a sentencing statute rather than a charge, so under the same logic as
recommendation 1 it does not belong on a charge page as its own section beyond a
cross-reference.

### Does any competitor have one?

Not observed as a dedicated page. The AI Overview on `gun charge lawyer Tampa`
summarises 10-20-Life in a single line as "Mandatory minimum prison terms tied
to using a gun during specific crimes" and **omits the three-year exception for
possession of a firearm by a felon and burglary of a conveyance**, which this
session verified verbatim from F.S. 775.087(2)(a)1. A guide that carries the
exception is more accurate than the answer Google is currently giving.

### Build effort

**S.** The enumerated list and the three minimum terms are already verified and
quoted in W2-03-gun-crimes.md Section 6.

### Rule 4-7 considerations

Mandatory minimum figures are exactly the numbers plan Section 12 requires
primary-source verification for, and they are verified. The rail is not to
suggest any minimum can be avoided.

### Calculator gate

C1 through C8: not applicable in substance. **Explicitly do not build a
"does 10-20-Life apply to me" checker**, for the same reason as recommendation
4. C6 applies: state the statute year.

---

## 7. The restitution guide

**Rank 7. Guide. Effort S.**

### Evidence of demand

Weaker than the five above, and labelled as such. The demand is inferred rather
than measured: it is assistant-question 4 on the embezzlement brief and
assistant-question 5 on the grand theft brief, and it is the question the
accused person asks first in every property offence. **No SERP evidence was
captured for it**, so this is an inferred recommendation, not a measured one.

It serves at least four briefs: embezzlement, grand theft, identity theft, wire
fraud.

### Does any competitor have one?

Not observed. The three graded competitor pages treat their charges as
definition exercises and none addresses restitution at all.

### Build effort

**S.**

### Rule 4-7 considerations

**The highest-risk item in this list and the reason it is ranked sixth rather
than higher.** The reader wants to be told that paying the money back ends the
case. It does not, and any framing that implies it would be both inaccurate and
an implied outcome. The guide has to be genuinely useful while saying no, which
is hard to write and easy to get wrong. It should not be drafted by a pipeline
before the voice is established, per plan Section 10.2.

### Calculator gate

Not applicable. **Do not build a restitution calculator.** It would take a
dollar figure about a real case and return a number, which is the calculator
problem with none of the calculator's statutory grounding.

---

## What is explicitly not recommended

| Not recommended | Why |
|---|---|
| A "does my case qualify" eligibility checker of any kind, for diversion, PTI, or otherwise | Collects case facts, returns an answer about the reader's own situation, and eligibility is prosecutor discretion which content-gaps.md item 16 already says must never be promised. |
| A state-or-federal decision tree | See recommendation 4. Build the guide instead. |
| A restitution or loss calculator | See recommendation 6. |
| Any tool with a server-side component touching charge inputs | Plan Section 5.4, and the mission's own constraint. Nothing above needs one. |
| A federal sentencing guidelines estimator | Already ruled out by tools-and-hooks.md and avoid.md item 61. Nothing in this session changes that; if anything, the two failed ussc.gov fetches recorded in W2-07 Section 6 show how much verification burden that asset would carry. |

---

## Notes on assets already in the plan

Three things the briefs revealed about existing plan items. These are not new
recommendations.

1. **The CPC calculator's dependency is heavier than the plan shows.** Six of
   the seven wave 2 briefs carry an offense-level column that wants a link to
   it, and all six currently ship without one because of the C1-C8 gate. That is
   the correct outcome, and recommendation 2 above is the way to deliver most of
   the value while the gate stands.
2. **The bond estimator did not surface in any of the ten SERPs.** No PAA
   question, no related search, no volume. That is not an argument against it,
   since its demand case in WEBSITE-PLAN.md Section 5 rests on the arrest moment
   rather than on charge queries, but the absence is recorded rather than
   assumed away.
3. **The federal target letter guide is linked from three of the ten briefs**
   (PPP fraud, wire fraud, and by implication the MDFL hub), which is more
   internal demand than any other planned Layer 2 asset in this set. It remains
   correctly prioritised.
