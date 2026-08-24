# Charging-document decoder: concept

Written 2026-08-24 to docs/build/TOOL-CONCEPT-TEMPLATE.md. New document; no
prior design exists. Concept only; no code this session.

TOOLS.md item 3 is the demand record and the source of the requirements in
Sections 2 and 10. This document is the buildable specification and records
three data findings TOOLS.md could not have known, in Section 6.

---

## 1. What it does

> You type the statute number off your paperwork, and it tells you what that
> charge is called in plain English, what the law actually says, and where to
> read more about it.

In ten seconds a reader gets one thing: **the string on the page in their hand
turned into a name.** Everything else is secondary to that.

## 2. Who arrives, and what they are holding

**They are holding a charging document, a booking sheet, or an indictment**, and
it names a statute and a paragraph rather than an offense in plain English.
TOOLS.md records the pattern and the reason it is a finding rather than an
observation: it surfaced independently in three briefs, on three silos, without
any of them being told to look for it.

| Brief | What was observed |
|---|---|
| ST-02 drug possession | **All eight** related searches on the informational query are statute strings or booking descriptions: `Fss possession of controlled substance`, `FL 893.13 6a`, `893.13 6b` |
| W4-01 sexual battery | `794.011 8b`, pointing at the familial or custodial authority subsection |
| W4-04 federal CSAM | **`18 usc 2252` at 70/month Florida, 20/month Tampa DMA**, the second-largest statute-number term in the corpus behind `21 usc 841` at 140/month |

TOOLS.md's summary of the audience is the reason this tool's privacy rail is not
theatre: "nobody searches `893.13 6b` out of curiosity."

**Known arrival path: search.** This is the only one of the three tools with
measured volume on the exact strings it serves, and TOOLS.md records that no
competitor page answers a statute-string query at all.

**Assumed path: internal.** Charge pages could link it. That is a guess about
behaviour and is labelled as one.

## 3. Inputs

| Input | Type | Permitted values | Stored? |
|---|---|---|---|
| Statute string | Free text, pasted or typed | Anything. The tool normalises and resolves, or refuses | **No.** See below; this row is the tool's central design constraint. |

**This is the only one of the three tools that takes free text, so the rail is
stated concretely rather than by reference.** CASES-WE-DEFEND-PLAN.md Section
5.4 and TOOLS.md's own gate section:

- **Resolution runs entirely in the browser** against a static dataset shipped
  in the bundle. No request leaves the page carrying the input.
- **No server-side logging of the query**, including analytics events carrying
  the raw string, and including error and exception reporting. An exception
  handler that reports "failed to resolve: 893.13 6b" is a leak.
- **No statute string in a URL parameter, and none in the hash.** A citation a
  person typed off their own charging document is case data; a URL puts it in
  referrer headers, server access logs, and browser history, and a hash puts it
  in history and in anything that reads `location`.
- **No autocomplete or typeahead endpoint.** It would send every keystroke
  server-side for a convenience nobody asked for.
- **No persistence.** No localStorage, sessionStorage, or cookie. The input dies
  with the page view.
- **No shareable result URL.** This is the feature most likely to be requested
  and it is the one that breaks the rail: a shareable link reconstructs a
  person's charge from their own paperwork.

TOOLS.md states why this is not over-cautious for a lookup: "a small number of
queries against a Brandon-area IP describes a specific person's specific case.
The gate exists for what the asset does with a reader's case facts, not for
whether it computes."

## 4. Output

### What it IS

For a resolved citation, four things and no fifth:

1. **The citation, normalised**, shown back so the reader can see what was
   matched. `893.13 6b` resolves and displays as F.S. 893.13(6)(b).
2. **The name of the offense**, as the operative statute or the audited row
   states it.
3. **The operative statutory text, quoted**, with its source and version, per
   C12.
4. **A link to the charge page** that covers the offense, where one exists.

Where the offense carries a degree or a statutory term, that is a fact and it is
shown. Where the tool holds only some of the four, it shows what it has and says
what it does not, rather than suppressing the result.

### What it explicitly is NOT

- **Not an assessment of exposure.** No characterisation of how serious the
  charge is, no comparison to other paragraphs, nothing that reads as "this is
  the good one to be charged under." TOOLS.md names this as the live edge.
- **Not a prediction.** No sentence, no range, no likelihood.
- **Not advice about the charge.** It resolves a citation. It does not suggest
  what to do about it.
- **Not a guess.** A near match is never presented as a match. Section 10.

Strings that must never appear: `your charge`, `you are charged with`, `you are
facing`, `serious`, `severe`, `minor`, `worse than`, `better than`, `likely`,
`good news`, `bad news`.

**The reading that must be foreclosed:** that resolving a citation is the same
as being told what the case is about. The design choice that forecloses it is
the fourth output element: every resolution ends by handing the reader onward,
to a charge page or to a conversation, rather than closing.

## 5. What it cannot know

Adjacent to every result, in these words:

> **This tells you what a statute says. It does not tell you anything about your
> case.** A charging document names a paragraph; what the state has to prove
> under it, what the evidence is, whether the right paragraph was charged, and
> what any of it means for you are questions this page cannot reach. Charges are
> also frequently amended, so the paragraph on today's paperwork may not be the
> one a case ends on.

And, on any refusal, in these words:

> **We could not match that to a statute we have verified text for, so we are
> not going to guess.** A wrong paragraph would look exactly like a right one
> from here. Check the document for the exact numbers, or call and read it to
> someone.

## 6. Data source

| What the tool renders | Source record | State |
|---|---|---|
| Operative text, per resolved paragraph | `src/lib/statute-tables/*.ts` rows, ~~1,533~~ **1,662** rows, **every one carries a verbatim quote** | 69 of 74 tables audited whole-section |
| Degree, where the offense carries one | Same rows, `degree` field | **968 rows carry a real degree.** See finding 1 |
| The link target | `charges[]` in `src/lib/site.ts`; ~~28~~ **29** written pages, **27** of them with a C9 that names a statute | Live data |
| Federal offense identification | The ~~19~~ **21** USC-keyed tables | **Whole-section, but see finding 1** |

**Counts corrected in place 2026-08-24 by the build session's own census, per
D28.** Struck figures are what this document recorded at writing; bold figures
are what `STATUTES` actually holds. Every LOAD-BEARING figure in this section
verified exactly and is unchanged: 74 tables, 69 whole-section, five partial and
they are the five named, every row carries a quote, and 968 rows carry a real
degree. The findings those figures support did not move.

**1,533 could not be reproduced by any counting rule tried**, including the
obvious candidate, rows-carrying-a-quote, which is also 1,662 because every row
carries one. "The corpus grew since writing" is the charitable reading and it is
not available: **968 is exact**, and a corpus that gained 129 rows without
gaining a single graded one is not a corpus that grew. Recorded as
unreproducible rather than as stale, because those are different states and only
one of them is honest here. The same applies to 19 versus 21 USC-keyed tables
and 28 versus 29 written pages: each is a count this document produced and none
records how.

**"143 distinct cite shapes" did not reproduce either, and the reason it cannot
be adjudicated is the finding.** A shape census over all 1,662 rows, abstracting
digits to `N` and letters by case, returns **109** distinct shapes and **1,436**
distinct raw cites. **This document does not record the abstraction that
produced 143.** So the two numbers cannot be compared, and that is not a
tie: an unreproducible number is not a second opinion, it is an unverifiable
claim. The 109 stands because its method is written down and can be re-run and
disagreed with; the 143 cannot be defended or refuted by anyone, including its
author.

**This is HUNT-LIST Instance 11 arriving in the document that instance was
written about.** Instance 11 was named from the D28 round over these same three
concept documents, and its rule is that a document's self-measurements get the
same independent re-derivation its quoted sources get, because the untrusted
class is not the fetched fact but the writer's own arithmetic about it. Every
figure in this section that traces to a fetch survived exactly. Every figure the
writer produced by counting is the one that moved. That is the same split
Instance 11 recorded at scale, reproduced here at four numbers out of four.

**The rule this build applied, and the reason no gate asserts either count.**
When a document states a count it names the filter that produced it, so the
filter can be re-run; a bare number carries no evidence about which question it
answered (Instance 16). The normaliser is therefore built and tested against
**every shape actually present, enumerated from the data at build time**, never
against a figure from this document. A gate asserting "143", or "109", would be
asserting a fact about a document rather than about the corpus, and would fail
the day a table is added for reasons having nothing to do with the tool.

Finding 2 itself is untouched by any of this. It does not rest on the count. It
rests on the same conceptual paragraph being written four ways, which is
verified, and which the raw-cite figure understates rather than overstates.

### Three findings this document's own data pass produced

**1. Federal rows carry no degree, and the federal half is where the measured
demand is.** Every row in every USC-keyed table records `degree: "no degree
assigned"`, which is correct: federal offenses are not graded in degrees. The
consequence is that the decoder's output shape **differs by jurisdiction**, and
the difference is not cosmetic. A Florida resolution can show a degree; a
federal one shows a statutory term instead, drawn from the row's own quote.
TOOLS.md's requirement list says "the offence name, the degree, and the
plain-English description" without distinguishing, and that requirement cannot
be met as written for `18 usc 2252`, the highest-volume term in the corpus.

**2. Cite formats are not uniform across tables, so there is no single lookup
key.** A shape census over all 1,533 rows returns **143 distinct cite shapes**.
The same conceptual thing is written `316.193(2)(a)3.`, `(a)(1)`, `§841(a)(1)`,
and `18 U.S.C. 1343` in four different tables. A decoder built on a naive key
match against `STATUTES` would resolve some strings, fail others silently, and
give no signal which. **The mapping requires a normalisation layer with its own
verification**, and that is the tool's real engineering work.

**3. Not every row with a quote carries a degree, including in Florida tables.**
`784.03(1)(a)` records `no degree assigned`, because the degree attaches at a
different paragraph. A decoder that promises a degree per paragraph will show
blanks on paragraphs that genuinely have none, and must distinguish "this
paragraph assigns no degree" from "we do not know."

### A fourth finding, from the build session's data pass, 2026-08-24

**4. The 921.0022 chart is inside `STATUTES` and its rows are cites of OTHER
statutes, so the ship condition below is not satisfied by intending to obey
it.** The chart table's rows carry cites like `812.014(2)(c)3.` and
`794.011(8)(b)`: they are the chart's rankings OF other sections, not paragraphs
of 921.0022. A decoder that indexes every row of every table by its cite
therefore ingests the chart as a mapping source automatically, without anyone
deciding to, which is the shape of every gate failure this project has recorded.

The collision is not hypothetical and it is not benign. `794.011(8)(b)` resolves
to two rows carrying **different degrees**:

| Source table | Degree recorded |
|---|---|
| `794.011`, the operative statute, whole-section | first degree felony |
| `921.0022`, the ranking chart, whole-section | first degree felony **punishable by life** |

That is a chart-versus-statute discrepancy of exactly the family TOOLS.md counts
six of, sitting on a paragraph the corpus records as a real user query. Indexed
naively it would present as an *ambiguity* between two equally-weighted sources
and the tool would show both, which is worse than showing neither: it would
display a chart-derived degree to a reader as one of two possible answers about
their own charge.

**So chart exclusion is implemented as a filter with its own gate (T10), not as
a convention.** `921.0022`, `921.0023` and `921.0024` are excluded from the
resolution corpus by key, and the gate asserts both directions: that the excluded
keys contribute no resolvable row, and that `794.011(8)(b)` resolves to exactly
one row whose degree is the statute's and not the chart's.

### The constraint that decides the mapping source

TOOLS.md, and it is stated as a ship condition rather than a preference:

> The 921.0022 chart must not be used as the mapping source: this project has
> found **six** chart-versus-statute scope errors, three of them in ST-02 on the
> possession statute this tool would be most used for. **The mapping is built
> from operative statutory text or it is not built.**

The audited tables satisfy that: they are built from full section text and carry
verbatim quotes. The chart does not and is excluded.

**Five tables are recorded `partial`** (1030, 2251, 741.28, 775.084, 784.08). A
partial record cannot support a closed answer, so a string resolving into one of
them either shows what the record actually holds, marked as partial, or refuses.
It never implies the paragraph list is complete.

## 7. C1 through C8 disposition

| # | Criterion | Disposition | How |
|---|---|---|---|
| C1 | No predictive framing | **By construction** | The output is a citation, a name, and quoted text. There is no computation and no quantity about the reader. |
| C2 | Names what it cannot know | **By build** | Section 5's paragraph, adjacent to every result, including refusals. |
| C3 | 4-7.12(d) presentation | **By build** | Same type size as the result, immediately adjacent, not a footer. |
| C4 | No-attorney-client notice adjacent | **By build** | On the result panel. Op. 24-1 and Bartholomew: a person who types their own charge into a firm's tool and gets an answer is exactly the reader whose subjective belief the rule turns on. |
| C5 | Client-side only | **By build**, and this is the tool's highest-risk criterion | Section 3's six negatives. This is the only tool of the three that takes free text, so C5 is the criterion most likely to be violated by a well-meaning later change. |
| C6 | Version stated by date | **By build**, with a scope correction | State the version of every table the resolution rests on, by fetch date. **The Rule 3.992 clause is inapplicable, not satisfied:** this tool implements no scoresheet. Say so, so a green C6 is not read as a claim about a form. |
| C7 | Attorney-reviewed accuracy note | **Attorney** | The reviewer attests that a sample of resolutions land on the right paragraph, **read against the statute**, not against the mapping table. |
| C8 | No results, testimonials, "confidential", implied Bar approval | **By build** | Note specifically: this tool must never be labelled confidential, which is the pattern avoid.md item 31 records as observed-not-recommended, and it is the tool most likely to tempt it because it takes private input. |

## 8. What blocks shipping

### Machine-resolvable

1. **Build the normalisation layer and verify it**, per finding 2. Input forms
   `893.13 6a`, `Fss 784.03`, `784.03 1A1`, `F.S. 812.014(2)(c)`, `18 usc 2252`,
   `18 U.S.C. § 1343` all normalise to a canonical key, and the 143 cite shapes
   in the tables normalise to the same space. This is the tool.
2. **Build the resolution test corpus** from the statute strings the briefs
   actually recorded, and assert each resolves to the paragraph the brief says
   it is. Those strings are real user queries, which makes them the right
   fixtures.
3. **Decide and implement the federal output shape**, per finding 1: what
   replaces "degree" for a USC resolution.
4. **Decide the partial-table behaviour**, per Section 6: show-marked or refuse,
   for the five partial tables.
5. **Build the statute-to-charge-page map** from the 28 written pages' recorded
   C9 statutes, and define what happens when a resolution has no page.
6. **Extend the copy surface** so the tool page joins the measured registry
   (D29), including the shipped dataset's rendered text.
7. **Decide the route** under the B.4 rule and add the registry row. **No `Tool`
   row exists for this asset today.**

### Human-only

1. **Attorney accuracy review (C7).** A sample of resolutions checked against
   the statutes themselves.
2. **Attorney read of the refusal copy.** A refusal is the output a frightened
   reader is most likely to misread, and Section 5's refusal wording is the part
   of this tool most worth an independent read.
3. **A decision on whether this tool ships at all before the charge pages it
   feeds are published.** It is the natural top of funnel for every charge page;
   most of those pages are `published: false`. Shipping the decoder first means
   resolutions that link to noindex pages.
4. **`owner` and `lastReviewed`.**

**Nothing here requires a fetch**, which distinguishes this tool from the
worksheet. The data is in the repository; the work is normalisation and
verification.

## 9. Route, registry, and links

| Field | Value |
|---|---|
| Route | **Open.** Recommended `/resources/tools/charge-lookup`. This tool serves no single silo, so the B.4 rule puts it under `/resources/tools/`. |
| Registry entry | **Does not exist.** |
| Copy surface | Must be added, and it must cover the shipped dataset's rendered strings, not only the page chrome. |
| Linked from | Charge pages, as a way back for a reader who arrived on the wrong one. **Not before the route exists**, which `check:routes` enforces. |
| Deliberately not linked from | Nothing. Unlike the Criminal Punishment Code tools, this one is jurisdiction-neutral by design and the federal pages are a legitimate source of traffic to it. |

## 10. Failure modes

**This section is the tool.** TOOLS.md states the standard: "A decoder that
resolves a string to the wrong paragraph is worse than no decoder, because the
reader has no way to tell."

- **Unresolvable input.** Section 5's refusal copy. The tool does not offer a
  nearest match, does not fuzzy-match to the closest cite, and does not fall
  back to the section when it cannot reach the paragraph. TOOLS.md: "Resolve to
  the paragraph, not the section. An indictment names a paragraph, and
  section-level granularity would fail the exact query it exists to serve."
- **Ambiguous input.** Where a normalised string maps to more than one row, the
  tool **shows all of them** and says the document's own numbers decide which.
  It never picks. This is the failure mode the offense-level instrument's trap 5
  is the same shape as: a picker keyed on cite where two rows share a cite.
- **Partial-source input.** A string resolving into one of the five partial
  tables is answered from what the record holds, marked partial, with no
  implication that the paragraph list is complete. Or refused. Section 8 item 4.
- **Out of scope.** A string that is not a statute citation, a citation from
  another state, or a municipal ordinance is refused with what the tool covers,
  not with an error.
- **Silent-wrong.** **A confident resolution to the wrong paragraph.** The
  reader cannot detect it, which is the whole risk. Three controls, and the
  third is the only real one:
  1. The mapping is built from operative statutory text, never from the
     921.0022 chart (TOOLS.md's ship condition).
  2. The test corpus in Section 8 item 2 asserts real recorded queries land on
     the paragraphs the briefs recorded.
  3. **The refusal default.** Where normalisation is not certain, the tool
     refuses rather than resolving. A refusal is visible to the reader; a wrong
     resolution is not. This is the design decision that makes the failure mode
     survivable, and it is why the tool is specified to under-answer.

## 11. Done criteria, machine-checkable

| # | Assertion | Gate |
|---|---|---|
| T1 | Every string in the recorded-query test corpus resolves to the paragraph the brief recorded, or refuses. No test string resolves to a different paragraph | **New**. The corpus is fixtures from the briefs |
| T2 | Every quote the tool can render appears verbatim in the audited table row it claims to come from | **New**, extend `check:provenance` G3 |
| T3 | No string from the Section 4 forbidden list appears in the rendered HTML ~~or in the shipped dataset~~ **, split by shape: the seven claim-shaped phrases are forbidden in copy AND dataset, the four bare adjectives in authored copy only** | `check:pages` plus `check:charge-lookup` |
| T4 | The Section 5 disclosure renders adjacent to results **and to refusals** | **New**. Refusals are the path most likely to lose it |
| T5 | No resolution rendered from a `partial` table asserts a complete paragraph list | **New**, and it is the `check-claims.mts` rule 2 principle applied to a tool |
| T6 | No route, script, or handler in the tool's bundle sends the input anywhere: no fetch, no URL write, no storage API, no analytics call carrying it | **New**, static analysis over the island plus a headless network check. This is C5 made mechanical |
| T7 | Every charge-page link the tool can emit resolves | `check:routes` sweep A over the generated map |
| T8 | The version stamp names every table the resolution rests on, by fetch date, and states the Rule 3.992 clause is inapplicable | **New** |
| T9 | With JavaScript disabled, the page renders its explanation and the disclosure, and no input that appears functional | **New**, headless |
| T10 | **The 921.0022/0023/0024 chart tables contribute no resolvable row**, and a cite the chart and the statute both carry resolves to the statute's row only | **New, added 2026-08-24.** Section 6 finding 4. The ship condition made mechanical |
| T11 | Every no-degree row renders **no degree field at all**, and every rendered statutory term is a verbatim substring of the row's own `quote` | **New, added 2026-08-24.** D33 made mechanical |
| T12 | The client island's import closure **does not reach `site.ts`** | **New, added 2026-08-24 during the build.** Not a concept-document assertion; see below |

**T12 is a build-discovered assertion and is stated as one.** The first working
build had `panel.ts` importing `charge-map.ts` for its link lookup. That module
derives the map from `charges`, and `charges` carries the authored prose of all
30 charge pages, so a map of 33 keys pulled every charge page's copy into the
island's bundle graph. The map is now computed on the server and passed as a
prop, and `links.ts` holds the pure half.

**What it saved, measured, because the obvious claim would have been wrong: no
bytes today.** A shared chunk loaded by every route on this site already
contains `site.ts`, so the page measures 2.90 MB before and after against a
1.89 MB site-wide baseline. The roughly 1.0 MB difference is the statute
dataset, which is this tool's design rather than a defect. The gate exists so
this tool is not a *second* cause of a problem the site already has, and so the
day the shared chunk is fixed a one-line import here cannot silently undo it.
**The shared chunk is a pre-existing, site-wide performance issue outside this
tool's scope, and it is recorded here rather than fixed.**

**DEPARTURE, recorded as one. T3 was split during the build, 2026-08-24, and
it is the only place this build does not do what the table above says.**
Applied literally to the shipped dataset, T3 is unsatisfiable against C12. A count over the 987 rows the
resolver can emit: the seven claim-shaped phrases (`your charge`, `you are
charged with`, `you are facing`, `worse than`, `better than`, `good news`, `bad
news`) occur **zero** times, and the four bare adjectives occur **53** times,
every one of them the statute's own word doing legal work. `serious bodily
injury` in 21 U.S.C. 841(b)(1)(A). `any minor` in 18 U.S.C. 2251(a). `actual
physical force likely to cause serious personal injury` in F.S. 794.011(3).
`more severe than a fine` in F.S. 775.082(5).

C12 requires those quotes verbatim, so a gate firing on them would force the
build to choose which of this document's own rules to break. The split follows
the precedent `check-pages.mts` already records at length for the "parking
enforcement specialist" false positive: **a rule must sit with a claim, not
with a bare word.** The claim-shaped phrases are forbidden everywhere,
including the dataset, which costs nothing today and catches a source that ever
changes. The bare adjectives are forbidden in authored copy, which is the
surface Section 4 was actually written about: the tool characterising exposure
is the live edge, and the statute using "minor" to mean a person under 18 is
not.

**The split follows an existing precedent rather than inventing an exemption,
and that distinction is the whole defence of it.** `check-pages.mts` already
carries this reasoning at length, for F.S. 784.07(1)'s "parking enforcement
specialist" and F.S. 409.913(16)(c)'s "each false or erroneous Medicaid claim":
a gate that fires on quoted statutory text asks the writer to choose which rule
to break, and the fix there was to require the word to sit with a claim about
the firm. Same defect, same fix, one surface further out. Had no precedent
existed, the right move would have been to raise the conflict and stop, not to
decide it inside a build.

**It is not a loosening, and there is evidence rather than an assurance.** The
copy-surface half of the rule failed this build on its author's own sentence,
"this page does not say how serious a charge is", written minutes after the
rule. That sentence is now in `copy.ts` with the failure recorded above it. The
dataset half is enforced too and costs nothing today, at zero occurrences of
seven phrases across 987 rows, which is exactly the state in which a rule
should be kept rather than dropped: it catches the day a source changes.

**To reverse this, the thing that must change is C12, not T3.** The departure
exists only because verbatim quotation is mandatory. If the tool ever stopped
quoting operative text, the literal T3 would become satisfiable and should be
restored.

T6 is the one that matters. C5 is this tool's highest-risk criterion and the one
a later well-meaning change is most likely to break, so it is the one that must
be enforced by a machine rather than by a rule in a document.

## 12. Open questions

1. ~~**What replaces "degree" for a federal resolution?**~~ **ANSWERED
   2026-08-24, DECISIONS.md D33.** Nothing replaces it as a field: where a row
   records `no degree assigned` the result carries no degree key at all, absent
   rather than blank. Where the row's own quote states a term of imprisonment,
   that term is shown as a **verbatim span of the quote**, never paraphrased and
   never read out of the row's `trigger` summary. The rule is keyed on what the
   row records, not on jurisdiction, because 419 Florida rows carry no degree
   either and a jurisdiction switch would be wrong for every one of them
   (finding 3). The decoder's version note must say federal offenses are not
   graded in degrees, or the absence reads as a defect in the tool rather than a
   fact about the law.
2. ~~**Show-marked or refuse, for the five partial tables?**~~ **ANSWERED
   2026-08-24, DECISIONS.md D34.** Show what the record holds, marked partial,
   taking this document's own recommendation. The mark states the actual limit,
   that the paragraph's text is verified and the section's paragraph list is not
   known to be complete, and names the table's `unread` field where one exists.
   Gated by T5.
3. **Does the decoder ship before the charge pages it links to are published?**
   Owner: client, and it is a sequencing question with an SEO answer either way.
   Cross-references Section 8 human-only item 3. **Not answered, and the build
   does not need it answered**: as of 2026-08-24 **zero of the 30 charge pages
   are published**, so the decoder ships `published: false` and `noindex`
   alongside them. Every link it can emit points at a route that exists and is
   noindex, which is coherent. The question becomes live the day the first
   charge page publishes, and not before.
4. **Who is the reviewing attorney for C7?** Owner: the firm.
5. **Does the tool cover municipal ordinances at all?** Owner: research. They
   appear on booking sheets and are not in any audited table. Recommended: out
   of scope, said explicitly in the refusal copy, rather than silently absent.
