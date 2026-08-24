# Sentencing worksheet: concept

Written 2026-08-24 to docs/build/TOOL-CONCEPT-TEMPLATE.md. Concept only; no code
this session.

**Supersedes the calculator half of SENTENCING-BOND-CONCEPT.md.** That document
recommended BUILD NARROWED: a calculator whose output is a range rather than a
figure. This one replaces the artifact. The bond half of that document is
unaffected and remains settled by DECISIONS.md D32 (the estimator is not built).
SENTENCING-BOND-CONCEPT.md stays in the repository as the record of how the
recommendation got here, including the reasoning this reframe rests on.

---

## 0. What changed, and why the reframe is not a hedge

The prior document's decisive finding was that the lowest permissible sentence
is a **floor**, so a tool that returns it has answered a two-ended question with
one end, and answered with the low one. Its fix was to print both ends: a range,
floor to statutory maximum.

**A range is still an answer to a question the tool cannot answer.** The prior
document said so itself about (b)(1): the Rule 4-7.13 comment's safe harbour is
for general statements describing a law, and its eminent-domain example is
general in a way a computation responsive to a reader's own charge selection is
not. "The framing narrows the gap. It does not close it."

The worksheet closes it by changing what the artifact is. **It renders the Rule
3.992 form, fills the cells the statute determines from a charge selection, and
leaves visibly empty every cell that depends on facts the tool does not have.**
The output is a picture of a partly filled form. There is no total, because the
form is not complete, and the emptiness is the point rather than a limitation
disclosed underneath.

This is the same move the seal-and-expunge document made and for the same
reason: the compliance answer and the accuracy answer turned out to be one
answer. A tool that cannot know prior record cannot produce a score, so a tool
that produces no score is not being cautious, it is being correct.

---

## 1. What it does

> It shows you the actual form a Florida court's sentencing score is computed
> on, fills in the parts that come from the charge itself, and leaves the rest
> blank, because the rest depends on facts about your case that no website has.

In ten seconds a reader gets one distinction: **the charge is a small part of
the form.** Most cells are empty, and the empty ones are where the sentence
actually comes from.

## 2. Who arrives, and what they are holding

The most likely arrival is from a charge page, having read a degree, a statutory
maximum and an offense level and wanting to know what happens next. Some arrive
from search: `Florida criminal punishment code scoresheet` is recorded at
70/month at Florida state level (TOOLS.md lines 90-93, verified during the D28
round), and SENTENCING-BOND-CONCEPT.md A.3 records blank FDLE PDFs ranking for
calculator-intent queries, which is the cleanest available signal that the
intent is unserved.

**They are holding a number they were told, or nothing at all.** Frequently the
number came from a person in a jail pod. The worksheet's usefulness is that it
shows them the shape of the thing that number was supposed to come from.

**What they want is a sentence prediction, and they will not get one here.**
That gap is stated on the page in Section 5's words rather than left to be
discovered at the bottom.

## 3. Inputs

| Input | Type | Permitted values | Stored? |
|---|---|---|---|
| Primary offense | Selection from a shipped list of F.S. 921.0022 chart rows, keyed by **row index**, never by cite | The 624 rows, minus capital felonies | **No.** One `useState`, dies with the page view. |

**Keyed by row, not by cite, and this is load-bearing.** Three cites in the
chart carry two rows at different levels under the same degree, so a picker
keyed on cite cannot distinguish them and would silently choose. Recorded in
SENTENCING-BOND-CONCEPT.md as trap 5 with test vectors TV6 and TV7.

**No free numeric entry anywhere, ever.** No dollar amount, weight, count, or
age is accepted as a route to a degree or a level. The prior document's D.3
records why: `rowsAt("817.568", 15)` returns the ten-to-twenty-persons tier and
answers a question about fifteen dollars with a felony degree. The reader picks
a row; the tool never infers one.

All five storage negatives hold, per plan Section 5.4: no server, no URL
including hash, no analytics attribute, no persistence, no autocomplete.

## 4. Output

### What it IS

The Rule 3.992 / F.S. 921.0024(1)(a) worksheet, rendered as the form it is, with
three visual states per cell:

1. **Filled from the statute.** The primary offense block: the selected row's
   level, and the points that level carries, from the recorded grid
   `Level Sentence Points Total 10 116 = 9 92 = 8 74 = 7 56 = 6 36 = 5 28 = 4 22 = 3 16 = 2 10 = 1 4 = Total`.
2. **Visibly empty, with a reason.** Every cell whose value depends on a fact
   the tool does not have. Not greyed out and not omitted: rendered as an empty
   cell with a short label saying what would go there and who knows it.
3. **Not applicable, stated.** Cells that cannot apply to the selection, said
   plainly rather than left ambiguous with the empty ones.

The empty blocks, which are most of the form: additional offenses, victim
injury, prior record, legal status at the time of the offense, community
sanction violations, prior serious felony, prior capital felony, firearm or
semiautomatic weapon possession, the eight multipliers, and the four
designations (prison releasee reoffender, violent career criminal, habitual
violent offender, habitual offender).

**There is no Total row value. The subtotal and total cells render empty**,
because a form with empty inputs has no total, and printing one would be
arithmetic on numbers the tool made up.

### What it explicitly is NOT

- **Not a sentence.** No months, no years, no range, no floor, no ceiling.
- **Not a score.** The total cell is empty and stays empty.
- **Not "your" anything.** The form is the statute's form; the selection is a
  row of a chart.
- **Not a scoresheet.** A scoresheet is prepared by the state attorney under
  F.S. 921.0024(3) and reviewed by defence counsel. This is a rendering of the
  blank form with one block filled.

Strings that must never appear: `your sentence`, `your score`, `your level`,
`you are facing`, `you would get`, `lowest permissible sentence` **as an output
label**, `months`, `years` **as a computed value**, `likely`, `expected`,
`typical`, `usually`, `on average`, `most people`.

**The one reading that must be foreclosed.** A reader could take a partly filled
form as "this is what my scoresheet looks like." The design choice that
forecloses it: the empty cells outnumber the filled ones and each carries a
label naming the fact it needs, so the artifact reads as a form the reader
cannot complete rather than a form the tool completed.

## 5. What it cannot know

Adjacent to the form, at Rule 4-7.12(d) prominence, in these words:

> **This form is mostly empty, and that is the accurate result.** What fills the
> empty cells is prior record, additional offenses, victim injury, legal status
> at the time of the offense, community sanction violations, prior serious and
> prior capital felonies, and whether a firearm was possessed, plus any of eight
> multipliers and four sentencing designations. Every one of those raises the
> score, none of them is on this page, and no total is shown because a form with
> empty inputs has no total. A real worksheet in a real case is prepared by the
> state attorney and reviewed by a defence lawyer. This page is not that and
> cannot be.

## 6. Data source

| What the tool renders | Source record | State |
|---|---|---|
| The worksheet's structure and every block on its face | `fs-921-0024.ts`, 48 rows, whole-section | Audited, fetched 2026-08-13 |
| The primary-offense point grid | `fs-921-0024.ts` row 921.0024(1)(a), quoted as a flattened grid string | Audited, **and see the transcription blocker below** |
| The charge picker: cite, degree, level | `fs-921-0022.ts`, 624 rows, whole-section | Audited |
| Statutory maximums, if the page states them beside a degree | `fs-775-082.ts`, 54 rows, whole-section | Audited |
| The four designations' names as they appear on the form face | `fs-921-0024.ts` (1)(a) | Audited; **their substance is NOT recorded, below** |
| The Rule 3.992 form as promulgated | **Nothing. Not recorded anywhere in this repository.** | **BLOCKER, Section 8** |

### The source's own stated limits, quoted

`fs-921-0024.ts` records the point grids as flattened quote strings and its
audit note explains why the alternative was rejected: the file "replaces the
prior table's reconstructed '10 = 116' and 'Total ____' renderings, which the
audit correctly rejected as fabrications in quote fields."

Its `unread` field records what is not there:

> s. 775.082(9) (prison releasee reoffender). NOT FETCHED. Substantive source of
> the PRISON RELEASEE REOFFENDER (no)(yes) designation on the (1)(a) worksheet
> face. The designation line is captured; the mandatory terms it triggers live
> in s. 775.082(9) and are not represented here.

The same note covers s. 775.084 for the other three designations. **Consequence
for this tool:** it may render the designation lines, because they are on the
form face and are recorded. It may not describe what any designation does,
because the substance is not in the repository. On the worksheet that is a
comfortable limit: the designations are cells, and this tool renders cells.

`fs-775-084.ts` is recorded **partial**, which independently forbids any
exhaustive claim about enhancements (`check-claims.mts` rule 2, D26).

## 7. C1 through C8 disposition

| # | Criterion | Disposition | How |
|---|---|---|---|
| C1 | No predictive framing | **By construction** | There is no output to frame. The total cell is empty; nothing on the page is a quantity about the reader. |
| C2 | Names what it cannot know | **By construction, then by build** | The empty cells ARE the disclosure, which is the reframe's whole argument. Section 5's paragraph is the build part. |
| C3 | 4-7.12(d) presentation | **By build** | Section 5's paragraph adjacent to the form, and the per-cell labels, which put the disclosure inside the artifact rather than beside it. |
| C4 | No-attorney-client notice adjacent | **By build** | On the form panel, not footer-only. |
| C5 | Client-side only | **By build** | One `useState`, no server, no URL, no analytics attribute, no persistence, no autocomplete. Section 3. |
| C6 | Rule 3.992 revision stated by date, incl. the January 2026 correction | **BLOCKED. Neither by build nor by attorney.** | The revision cannot be stated because the form is not recorded. See Section 8. This is the one criterion this tool cannot currently satisfy at any effort short of a fetch. |
| C7 | Attorney-reviewed accuracy note | **Attorney** | The reviewer attests the point values against F.S. 921.0024 and the form layout against Rule 3.992. |
| C8 | No results, testimonials, "confidential", implied Bar approval | **By build** | |

**C6 is the gate.** It is stated as blocked rather than pending, because the
document that recommended the calculator recorded the same thing as its single
most plan-changing open question and it is unchanged: nothing in this repository
records the Rule 3.992 form at all.

## 8. What blocks shipping

### Machine-resolvable

1. **Fetch Rule 3.992 as amended 23 October 2025 and as corrected January 2026,
   and record both**, whole, per the Phase 1 discipline: one blockquote per
   logical passage, per-subdivision headers, READ-WHOLE marker, second-path
   verification. Unblocks C6. **This is the largest single item and everything
   else waits behind it.**
2. **Diff the fetched form against F.S. 921.0024(1)(a).** If the form and the
   statute disagree, this stops being transcription and becomes interpretation,
   and the tool should not be built. Recorded as the prior document's open
   question 1: "the single question most likely to change the plan."
3. **Transcribe the point grids into typed fields** by a fresh build-and-audit
   pass (D19/D23), not by regexing the flattened quote strings. The audit
   already rejected one reconstruction; splitting on whitespace would repeat the
   act it refused while looking like a parse. Four grids and eight scalars.
4. **Extend the copy surface** so the tool page is in the measured registry
   (D29).
5. **Re-audit `fs-921-0023.ts`** so row (4) carries `first degree felony
   punishable by life`, or add an explicit disambiguator. Not blocking for this
   tool, which reads the chart by row, but it is live in the data and any
   degree-keyed lookup hits it.

### Human-only

1. **Attorney accuracy review (C7).** Point values against the statute, layout
   against the rule.
2. **Attorney read of the artifact.** Specifically: does a partly filled form
   read as a forecast to a frightened person? This document's judgment is that
   an empty total reads as an absence rather than a promise. That judgment is
   exactly what D25 says an independent reader should test.
3. **STATE.md Q11, Bar pre-clearance.** Cheaper for this artifact than for a
   calculator, because the question is now "may a firm render a blank statutory
   form" rather than "may a firm compute a sentence," but still the only route
   to a real answer on (b)(1).
4. **`owner` and `lastReviewed`.**

**Note on the dependency direction.** Item 1 of the machine list is a fetch, but
item 2 makes it a question with a real chance of a negative answer: if the form
diverges from the statute, the correct outcome is not to build. That makes the
whole tool contingent in a way the offense-level instrument is not.

## 9. Route, registry, and links

| Field | Value |
|---|---|
| Route | `/sentencing/florida-criminal-punishment-code`, the existing registry href, **if** the `/sentencing/` silo is built. Under the B.4 rule this tool is that silo's hub. |
| Registry entry | Exists: `tools[]`, label "Sentencing Calculator", `published: false`. **Both the label and the description describe the artifact this document replaces** and must change with it. |
| Copy surface | `toolCopy` covers the card. A page surface must be added. |
| Linked from | Nothing, until C1-C8 clear. Plan Section 4.2 and 5.7. |
| Deliberately not linked from | Every federal page. The Criminal Punishment Code does not apply to federal cases. |

**The card copy is currently wrong for this tool and is the most predictive copy
on the site.** The description reads "Estimate the lowest permissible sentence
under Florida's Criminal Punishment Code by charge, level, and prior record."
Three defects for a worksheet: "estimate" invites a forecast, "the lowest
permissible sentence" names an output this tool does not produce, and "by prior
record" promises an input it does not take. The prior document proposed a
replacement name and description; that proposal now needs revising again for the
worksheet rather than the range calculator, and it is out of scope for this
document, which does not touch tool descriptions.

## 10. Failure modes

- **Unresolvable input.** Not applicable: the reader selects from a shipped
  list and cannot enter a value that fails to resolve.
- **Ambiguous input.** Prevented at the input surface by keying on row index.
  A cite-keyed picker would be the ambiguity, which is why it is forbidden.
- **Out of scope.** Capital felonies are absent from the picker rather than
  computed: F.S. 921.0023 supplies no default for one and 775.082(1) and
  921.141 govern. A misdemeanor cannot be a primary offense; the Primary
  Offense grid has no M row, and borrowing the 0.2 from the Additional Offenses
  grid would invent a rule.
- **Silent-wrong.** The failure a reader cannot detect is **a wrong point value
  in a filled cell**, which looks exactly like a right one. Controls: the T1
  assertion in Section 11, and the independent transcription in Section 8 item
  3, where the values are returned as data by one agent and re-fetched by a
  second before being written (D27). Note that the prior document's arithmetic
  test vectors mostly do not apply here, because this tool performs no
  arithmetic; TV16, TV17 and TV18, the refusals, do apply.

## 11. Done criteria, machine-checkable

| # | Assertion | Gate |
|---|---|---|
| T1 | Every filled cell's value matches the typed point table, and the typed table matches the recorded F.S. 921.0024 quote strings | **New** |
| T2 | The total and subtotal cells render **empty** in every state of the tool, for every selectable row. This is the assertion that makes C1 mechanical | **New**, and it must be exhaustive over the picker, not sampled |
| T3 | No string from the Section 4 forbidden list appears in the rendered HTML | `check:pages`, once the copy surface exists |
| T4 | Every empty cell carries its label naming the fact it needs. An empty cell with no label is a blank the reader could read as a zero | **New** |
| T5 | The Section 5 disclosure appears, and its index precedes the form | **New** |
| T6 | The Rule 3.992 revision date and the January 2026 correction appear on the page, and match the recorded form's version | **New**, blocked with C6 |
| T7 | No page under `/federal-criminal-defense` links the route | `check:routes`, extended |
| T8 | The picker contains no capital-felony row and no misdemeanor row | **New** |
| T9 | With JavaScript disabled, the page renders the blank form and the disclosure, and no filled cell | **New**, headless |

T2 is the important one. It is the reframe expressed as something a machine can
check, and it is the reason this tool's C1 is by construction rather than by
build: if a total ever renders, the build fails.

## 12. Open questions

1. **Does the Rule 3.992 form as amended 23 October 2025 and corrected January
   2026 diverge from F.S. 921.0024(1)(a)?** Owner: whoever runs the fetch.
   Blocks C6 and possibly the whole tool. Unchanged from the prior document,
   where it was the most plan-changing question, and it is still unanswered.
2. **Is the `/sentencing/` silo being built?** Owner: client. Decides whether
   this tool is a hub or an orphan. Cross-references the instrument document's
   question 1, which is the same question.
3. **Does the client accept a tool that shows a form and produces no number?**
   Owner: client. The prior document's lead-quality and expectation arguments
   apply: a reader who came for a number leaves without one, and that is the
   design rather than a shortfall.
4. **Who is the reviewing attorney for C7?** Owner: the firm.
5. **Does the registry row's label and description change now or at build?**
   Owner: a content decision, deliberately out of scope here. Cross-references
   Section 9.
