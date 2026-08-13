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

**The gate.** CASES-WE-DEFEND-PLAN.md Section 5.6 sets done-criteria C1 through
C8 for the sentencing calculator. Section 5.4 is the load-bearing one:
computation runs entirely in the browser and no user-entered charge data is
stored or logged server-side, ever. **Every recommendation below is assessed
against C1 through C8 whether or not it computes anything**, because the
standard is about what the asset does with a reader's case facts, not about
whether it has a form. Nothing here requires collecting case facts
server-side, and nothing that would is recommended.

---

## 1. The Florida 33-day rule guide

**Rank 1. Guide, not a tool. Effort S.**

### Evidence of demand

**"What is the 33 day rule in Florida?" surfaced as a People Also Ask question
on six of the ten primary queries in this brief set**: grand theft,
embezzlement, drug trafficking, gun charge, domestic violence, and money
laundering. Also observed on identity theft. verified 2026-08-13,
Tampa-geolocated.

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

### The one thing that must happen first

**UNVERIFIED: what the 33-day rule actually is.** It is not defined anywhere in
the existing research corpus, and this brief set did not verify it. It is
commonly associated with Fla. R. Crim. P. 3.134 and the filing decision for a
defendant held in custody, but **that association is inferred and must not be
published**. Verify against flcourts.gov or the Florida Bar's published rules,
both of which are already on the CASES-WE-DEFEND-PLAN.md Section 10.3 allowlist.
This is a single fetch and it unblocks the highest-demand asset found in the
whole session.

---

## 2. The offense-level lookup table

**Rank 2. Static reference table, arguably a tool. Effort S to M.**

### Evidence of demand

Three strands, all verified this session:

1. **The data is already in hand and it is the C9 engine for the whole
   section.** F.S. 921.0022 was fetched and parsed this session, and every wave
   1 and wave 2 state charge now has its complete level mapping recorded in the
   briefs: theft levels 1 to 8, trafficking 7 to 9, money laundering 7 to 9,
   identity theft 4 to 9, felon in possession 5 and 7, communications fraud 3,
   5 and 7, battery offences 2, 6 and 7.
2. **No competitor publishes it.** content-gaps.md Topic 4 established that "no
   competitor breaks Criminal Punishment Code content out by offense level."
   This session's page-level grading confirms it holds: zero of three graded
   competitor pages mentions an offense level, and the longest of them, at
   roughly 2,900 words, cites no statute at all.
3. **Statute-shaped search behaviour.** `Florida criminal punishment code
   scoresheet` returns 70/month at Florida state level; the related-search block
   on the grand theft informational query is entirely statute-number queries
   (`Fss 812.014 grand theft`, `Petit theft statute`, `Fss grand theft`).
   verified 2026-08-13. keywords.md already grades the level pages "closest to
   NOW."

### Does any competitor have one?

**No.** Barklaw and Delgado run calculators, which is a different artefact, and
neither is Tampa-framed. **This is not the same as the calculator and should not
wait for it.** That is the central recommendation here: a lookup that answers
"what level is this charge" is separable from a computation that answers "what
does that score," it is the half that is not gated, and it is the half every
charge page needs on day one.

### Build effort

**S to M.** The chart is long but it is structured data, and the parse already
exists from this session. The work is verification and presentation, not
engineering.

### Rule 4-7 considerations

The output is a statutory classification, not a prediction. That is the whole
reason it clears where the calculator does not. It must be labelled as what F.S.
921.0022 assigns, never as "your level," and it must carry the same
no-legal-advice and no-attorney-client-relationship notice the calculator
carries, because a reader can form an expectation from any tool on a firm's site
regardless of how simple it is (Op. 24-1 and Bartholomew, per plan Section 5.3).

### Calculator gate

| Criterion | Assessment |
|---|---|
| C1, no predictive framing | **Passes by construction.** The output is a statutory classification. It says what the chart assigns, not what will happen. |
| C2, states what it cannot know | **Required and easy.** The level is only the primary-offense component; prior record, additional offenses, victim injury, and multipliers are not in it. Say so adjacent to the output. |
| C3, Rule 4-7.12(d) presentation | **Required.** Equal prominence, close proximity, not fine print, not footer-only. |
| C4, no-attorney-client notice adjacent | **Required.** |
| C5, client-side only | **Passes trivially.** A static table has no inputs to send. If a search box is added it filters a shipped dataset in the browser and no query string carries a charge. |
| C6, revision stated by date | **Required.** State the F.S. 921.0022 version, currently the 2025 Florida Statutes. |
| C7, attorney-reviewed accuracy note | **Required**, and it is a real review: the mapping must be checked against the chart, not against this brief. |
| C8, no results, testimonials, "confidential" labels, or implied Bar approval | **Required.** |

All eight are satisfiable without a computation, which is why this ships ahead
of the calculator rather than behind it.

---

## 3. The third degree felony sentencing page

**Rank 3. Guide. Effort S.**

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

## 4. "Is my case state or federal?" forum guide

**Rank 4. Guide. Effort S to M.**

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

## 5. The 10-20-Life explainer

**Rank 5. Guide. Effort S.**

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

## 6. The restitution guide

**Rank 6. Guide. Effort S.**

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
