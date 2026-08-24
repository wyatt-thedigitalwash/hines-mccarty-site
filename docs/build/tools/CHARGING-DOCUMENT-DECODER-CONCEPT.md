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
| Operative text, per resolved paragraph | `src/lib/statute-tables/*.ts` rows, 1,533 rows, **every one carries a verbatim quote** | 69 of 74 tables audited whole-section |
| Degree, where the offense carries one | Same rows, `degree` field | **968 rows carry a real degree.** See finding 1 |
| The link target | `charges[]` in `src/lib/site.ts`; 28 written pages, each with a recorded C9 statute | Live data |
| Federal offense identification | The 19 USC-keyed tables | **Whole-section, but see finding 1** |

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
| T3 | No string from the Section 4 forbidden list appears in the rendered HTML or in the shipped dataset | `check:pages`, once the copy surface exists |
| T4 | The Section 5 disclosure renders adjacent to results **and to refusals** | **New**. Refusals are the path most likely to lose it |
| T5 | No resolution rendered from a `partial` table asserts a complete paragraph list | **New**, and it is the `check-claims.mts` rule 2 principle applied to a tool |
| T6 | No route, script, or handler in the tool's bundle sends the input anywhere: no fetch, no URL write, no storage API, no analytics call carrying it | **New**, static analysis over the island plus a headless network check. This is C5 made mechanical |
| T7 | Every charge-page link the tool can emit resolves | `check:routes` sweep A over the generated map |
| T8 | The version stamp names every table the resolution rests on, by fetch date, and states the Rule 3.992 clause is inapplicable | **New** |
| T9 | With JavaScript disabled, the page renders its explanation and the disclosure, and no input that appears functional | **New**, headless |

T6 is the one that matters. C5 is this tool's highest-risk criterion and the one
a later well-meaning change is most likely to break, so it is the one that must
be enforced by a machine rather than by a rule in a document.

## 12. Open questions

1. **What replaces "degree" for a federal resolution?** Owner: whoever builds
   it, informed by an attorney. Finding 1. Blocks the highest-volume half of
   the tool.
2. **Show-marked or refuse, for the five partial tables?** Owner: build
   decision, recorded in DECISIONS.md either way. Recommended: show what the
   record holds, marked partial, because a refusal on a paragraph the project
   demonstrably has text for teaches readers the tool is broken.
3. **Does the decoder ship before the charge pages it links to are published?**
   Owner: client, and it is a sequencing question with an SEO answer either way.
   Cross-references Section 8 human-only item 3.
4. **Who is the reviewing attorney for C7?** Owner: the firm.
5. **Does the tool cover municipal ordinances at all?** Owner: research. They
   appear on booking sheets and are not in any audited table. Recommended: out
   of scope, said explicitly in the refusal copy, rather than silently absent.
