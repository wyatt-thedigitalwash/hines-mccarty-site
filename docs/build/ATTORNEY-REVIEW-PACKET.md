# Attorney review packet: the three tools and the two guides

**Prepared 2026-08-24. For the reviewing attorney.**

Five assets are built and published in the site's own registry, which means the
Resources cards link them. **The site is not live.** Nothing here has been
reviewed by a lawyer, and this document exists so that review is a reading task
rather than a reverse-engineering task.

**What you are signing.** For each asset, `owner` (your name) and `lastReviewed`
(the date you read it). Until you set them, every page renders a visible
`[NEEDS: owning attorney]` marker in its byline, on purpose: a false review date
removes the signal that a page needs looking at.

**The three tool pages are `noindex` right now.** Publishing controls whether the
card links; noindex controls whether search engines index. Removing it is a
separate switch and it belongs with your sign-off, not before it.

---

## How to read this

Every factual figure on these pages is **derived at build time from an audited
record in this repository**, not typed by a writer. That is the single most
important thing to know, because it changes what you are checking. You are not
proof-reading numbers against a source. The build already does that, and it
fails rather than shipping a mismatch.

**What you are checking is judgment**: whether the framing is accurate, whether
a reader could misread it as advice or as a prediction, and whether anything
claims more than the source supports.

Where a check is genuinely mechanical, it says so and names the gate that runs
it, so you can skip it.

---

## 1. Offense Level Comparison

`/resources/tools/offense-level-comparison` — **lowest risk of the three.**

**What it is.** Four small tables showing how Florida's offense severity ranking
chart, F.S. 921.0022, scores various charges. No inputs, no form, no
interaction. It is a page of classifications.

**What it is not.** Not a sentence, not a range, not a number of months, and not
about any reader.

### Mechanical, already enforced

| Criterion | How | Gate |
|---|---|---|
| C1 | The strings `your level`, `your score`, `your sentence`, `you are facing`, `worse than`, `better than`, `more serious than`, `less serious than`, `likely`, `expect` cannot appear in the rendered HTML | `check:offense-level` T3 |
| C3 | The disclosure's position in the HTML must precede the first comparison table | `check:offense-level` T4 |
| C5 | **By construction.** There is no form, no state, no event handler, nothing client-side. A tool with no inputs cannot leak one | no server code exists to check |
| C6 | The page states F.S. 921.0022, 2025 Florida Statutes, and the record date | `check:offense-level` T5 |
| Accuracy | Every rendered (cite, degree, level) triple is checked against the chart, and the degree-span table against a group-by recomputed at check time | `check:offense-level` T1, T2 |

### What needs your judgment

1. **The core framing.** The page's thesis is that degree and offense level are
   different things and do not move together. Read the four comparisons and the
   spread. Is that accurate as stated, and is it stated without implying that a
   higher level is *worse* in any sense a reader would act on?

2. **C2 and the disclosure.** The adjacent statement reads, in full:

   > This page is one input, not a calculation. The offense level is the
   > primary-offense component of a Criminal Punishment Code scoresheet. A real
   > scoresheet also scores additional offenses, victim injury, prior record,
   > legal status, community sanction violations, prior serious and prior
   > capital felonies, and firearm possession, and it then applies any of eight
   > multipliers. None of that is on this page. Nothing here is a statement
   > about any particular case, and no page on this site can tell you what
   > sentence a court would impose.

   Does that name everything a reader could wrongly assume the page accounts
   for?

3. **C6, and a deliberate departure worth your eye.** The criterion names Rule
   3.992 because it was written for the sentencing calculator. **This tool
   implements no scoresheet computation**, so the page states that the Rule
   3.992 clause is *inapplicable* rather than satisfied. Confirm you are content
   with that, because a green C6 must not read as a claim about a form this tool
   does not implement.

---

## 2. Charge Lookup

`/resources/tools/charge-lookup`

**What it is.** A reader types a statute number from a charging document,
booking sheet, or indictment, and the tool shows what that paragraph of Florida
or federal law says, verbatim.

**What it is not.** Not an assessment of their case, not a penalty prediction,
and it never tells them what will happen.

### Mechanical, already enforced

| Criterion | How | Gate |
|---|---|---|
| C5 | Resolution is client-side; no charge data reaches a server, a URL, or an analytics attribute | `check:charge-lookup` |
| Accuracy | Every row the resolver can emit is swept against the rules that can legitimately apply to quoted statutory text | `check:charge-lookup` |
| Display | Citations are asserted byte-identical to the authority, separately from the case-folded match key | `check:charge-lookup`, DECISIONS D37 |

### What needs your judgment

1. **C7, and this one is specific.** Sample the resolutions and check them
   **against the statutes themselves, not against the mapping table the tool
   resolves through.** The reason is recorded as HUNT-LIST Instance 17: the
   tool's own fixtures were once written by reading the resolver's output, which
   proved it was deterministic rather than correct, and a real case-display bug
   survived twelve green gates until a human opened a browser. Checking output
   against the table it came from would repeat that mistake.

2. **The refusal copy.** Read what the tool says when it cannot resolve a
   string, when a string is ambiguous, and when the paragraph sits in one of the
   five partially-recorded tables. It shows the paragraph and **marks it
   partial** rather than refusing (DECISIONS D34). Confirm the mark actually
   communicates the limit: the text shown is verified, the list of paragraphs in
   that section is not known to be complete.

3. **The federal-degree absence.** Federal paragraphs carry no degree, because
   federal offenses are not graded in degrees. The page says so. Confirm a
   reader would understand that as *the law being different* rather than *the
   tool being broken*.

4. **A departure to sign off on (DECISIONS D36).** The tool's own forbidden-word
   list conflicts with the requirement that statutes be quoted verbatim. Across
   987 quoted rows, the claim-shaped phrases occur **zero** times; the bare
   adjectives `serious` (25), `minor` (21), `likely` (5) and `severe` (2) occur
   only as the statute's own words, e.g. "serious bodily injury" in 21 U.S.C.
   841(b)(1)(A) and "any minor" in 18 U.S.C. 2251(a). The rule was therefore
   split: claim-shaped phrases forbidden everywhere, bare adjectives forbidden
   in authored copy only. Confirm you agree.

---

## 3. Sentencing Worksheet

`/resources/tools/sentencing-worksheet` — **highest risk of the three, and the
one I would spend your time on.**

**What it is.** The Rule 3.992 Criminal Punishment Code scoresheet, rendered
mostly empty, with only the cells a charge selection determines filled in.

**What it is not.** It computes no total, no score, and no sentence.

### Mechanical, already enforced

| Criterion | How | Gate |
|---|---|---|
| Accuracy | All four point grids and eight scalars are re-derived from two independent in-repo records and fail on any disagreement | `check:worksheet` |
| C6 | The page states the revision **and** the January 2026 correction | `check:worksheet` |
| C5 | No inputs reach a server | `check:worksheet` |

### What needs your judgment

1. **The question this tool exists or dies on: does a partly filled form read as
   a forecast?** A blank scoresheet with some cells filled invites a reader to
   imagine the rest being filled. The page's answer is to state that it computes
   nothing and to leave every other cell visibly empty. **This is a judgment
   call, not a checkable property, and it is the Rule 4-7.13 exposure on this
   tool.** If your answer is no, the tool should not publish.

2. **Read the version note carefully, and know why.** The Florida Bar's own
   official Rule 3.992 PDF, effective 23 October 2025, **printed the wrong point
   grid**: it placed the Primary Offense values inside the Additional Offenses
   block, contradicting F.S. 921.0024(1)(a) and its own supplemental page. The
   Bar re-uploaded a corrected version in January 2026. This tool implements the
   corrected grid and says so on the page. Recorded as HUNT-LIST Instance 18.
   **The relevance to you:** no gate here could have caught that, because every
   rail checks copy against a record and a record against a source, and the
   defect was upstream of the first link. A page truthfully printing "October
   23, 2025" would have satisfied C6 while rendering figures the statute
   contradicts. Your read is the only check that sits above the authority.

3. **C2.** Confirm the adjacent statement names everything the worksheet cannot
   know, in the terms the criterion lists: prior record, victim injury points,
   enhancements, mandatory minimums, departures, judicial discretion.

---

## 4. After an Arrest (guide)

`/resources/guides/after-an-arrest` — 14 sections, ~1,760 words.

**Not a tool.** C1 through C8 do not apply. What applies is accuracy, no outcome
promises, and no implied relationship.

### What needs your judgment

1. **Read it for outcome language.** It describes how the release decision
   works. Confirm nothing reads as a prediction of what will happen to a reader.

2. **Two things the page deliberately does not say, and I want you to agree with
   both:**
   - **Hillsborough logistics.** Where first appearance happens, how to attend,
     booking specifics. Research exists but is **not human-verified**, and the
     project rule is that location logistics do not publish on an unverified
     record. This is still open (see below).
   - **The bond schedule's contents.** Administrative Order S-2025-063 is now
     recorded whole, but the guide has not yet been written against it.

### Still outstanding, and it is not yours

**Someone local must verify three things** before the logistics section can be
written: where first appearance actually happens, how to attend or view it, and
booking facility specifics. A call to the clerk closes it. Tracked as STATE.md
Q14.

---

## 5. Federal Case Timeline (guide)

`/resources/guides/federal-criminal-process-timeline` — 13 sections, ~1,770
words.

### What needs your judgment

1. **Read it for outcome language**, same standard as above. It walks target
   letter through indictment, trial, and sentencing.

2. **The 3553(a) section stops short on purpose.** The guide names the provision
   and does not describe the factors. The subsection is now recorded verbatim,
   so that block can be written; it has not been yet. Confirm you are content
   for the guide to publish naming the provision rather than describing it, or
   tell me to write it first.

---

## Two things that apply to all five

**C8 across every page**: no case results, no testimonials, no "confidential"
labeling, no implied Bar approval. The banned-term rail checks the wording; you
are checking that nothing *implies* it.

**Rule 4-7.12 and the Tampa question.** Unrelated to these five, but it is the
sharpest compliance item open on the site: the firm has one confirmed office,
and every reference to Tampa renders a `[NEEDS]` marker under "not open yet"
rather than an address. Implying an office the firm does not have is a Rule
4-7.12 problem, so if Tampa's status changes, that changes before launch.

---

## What happens after you sign

1. I set `owner` and `lastReviewed` on each asset you approve, which clears the
   byline markers.
2. I remove `noindex` from the three tool pages.
3. Full pipeline, then commit.

Anything you reject stays `published: false` and comes off the Resources cards.
