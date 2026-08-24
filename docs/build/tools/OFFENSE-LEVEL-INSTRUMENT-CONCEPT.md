# Offense-level comparison instrument: concept

Written 2026-08-24 to docs/build/TOOL-CONCEPT-TEMPLATE.md. Concept only; no code
this session.

Supersedes nothing. TOOLS.md item 1 is the source of the concept and remains the
demand record; this document is the buildable specification and corrects two
things TOOLS.md gets slightly wrong about its own data, in Section 6.

**Status: nothing blocks the build.** Every fact it renders is in an audited
whole-section table today. Section 8's machine-resolvable list is verification
work, not research, and its human-only list is the attorney read that every tool
needs.

---

## 1. What it does

> It shows that two people charged with the same degree of felony can be in
> very different positions, and what decides the difference.

In ten seconds a reader gets one distinction: **the degree printed on the
paperwork does not tell you the offense level, and the offense level is what the
sentencing worksheet is built from.** Everything else on the page serves that
sentence.

The instrument is a comparison, not a lookup. TOOLS.md records why the re-scope
happened: a lookup answers "what is my level" and hides the finding; a
comparison makes the finding the artifact. That distinction survives into the
build, because it decides the default view. The page opens on the comparisons,
not on a search box.

## 2. Who arrives, and what they are holding

**Known arrival path, and it is not search.** The charge pages. Six wave 2
briefs carry an offense-level column with nowhere to link, and
CASES-WE-DEFEND-PLAN.md Section 4.5's C9 collision ruling puts the F.S. 812.014
value-to-offense-level table here rather than on both the grand theft and
embezzlement pages. Those two pages currently handle that ruling unevenly:
grand-theft reproduces a 12-row ladder, embezzlement defers with the sentence
"The full value-to-offense-level comparison belongs in one place rather than
being reproduced on each page that touches it," which today points nowhere. The
reader arriving from embezzlement has been promised this page.

So the person arriving is **already reading about their charge on this site**,
has just seen a degree and a statutory maximum, and is holding the question the
charge page raised and did not answer.

**Assumed path, labelled as an assumption.** Search demand for
`Florida criminal punishment code scoresheet` is recorded at 70/month at state
level (TOOLS.md line 90-93, verified against the file during the D28 round). It
is not established that this instrument ranks for that term, and it is not the
term this page is written for. Treat organic arrival as unproven.

**What they are afraid of.** Not the classification. They are afraid of how much
time they are facing, and this page does not answer that. Section 5 is where
that gap is stated to the reader rather than left for them to feel.

## 3. Inputs

| Input | Type | Permitted values | Stored? |
|---|---|---|---|
| None in v1 | | | **No, trivially. There is no input.** |
| Optional v2 filter | Selection from a shipped list | Chart rows already in the bundle | **No.** Lives in one `useState`, dies with the page view. |

The v1 instrument takes nothing. It is a set of prepared comparisons rendered
server-side, which is the strongest possible answer to Section 7's C5 and the
reason this ships ahead of everything else in the tool programme.

If the v2 filter is ever added, all of the following stay false, per
CASES-WE-DEFEND-PLAN.md Section 5.4: it reaches no server, appears in no URL
including the hash, is an attribute on no analytics event, persists past no page
view, and sends nothing per keystroke. TOOLS.md line 137 states the same rail in
the instrument's own terms: a filter filters a shipped dataset in the browser
and no query string carries a charge.

## 4. Output

### What it IS

Three prepared comparisons and one spread, each a small table of statutory
classifications drawn from F.S. 921.0022, with the chart's own words.

**Comparison A. One dollar figure, three statutes, three levels.** $19,000:

| Charged as | Cite | Degree | Level |
|---|---|---|---|
| Grand theft | 812.014(2)(c)3. | third degree felony | **4** |
| Scheme to defraud | 817.034(4)(a)3. | third degree felony | **3** |
| Money laundering | 896.101(5)(a) | third degree felony | **7** |

**Comparison B. A lower degree carrying a higher level.**

| Offense | Cite | Degree | Level |
|---|---|---|---|
| Fraudulent use of a minor's identification by their own parent or guardian | 817.568(7) | second degree felony punishable by life | **9** |
| Grand theft of $100,000 or more | 812.014(2)(a)1. | first degree felony | **7** |

**Comparison C. The trafficking floor.** Every tier in F.S. 893.135 sits at
level 7, 8, or 9. There is no low-level trafficking charge.

**The spread.** Third degree grand theft under F.S. 812.014 occupies levels 1,
2, 3, 4 and 6. One degree, five levels.

**The degree-span table**, which is the thesis in one object:

| Degree | Levels it occupies in the chart |
|---|---|
| Third degree felony | 1, 2, 3, 4, 5, 6, 7 |
| Second degree felony | 3, 4, 5, 6, 7, 8 |
| First degree felony | 5, 7, 8, 9, 10 |
| First degree felony punishable by life | 7, 8, 9, 10 |
| Second degree felony punishable by life | 9 |
| Life felony | 9, 10 |

### What it explicitly is NOT

- **Not a sentence, a range, or a number of months.** It renders no output of
  the scoresheet. The worksheet is a separate tool with a separate gate.
- **Not "your level."** Every label attributes to the chart: what F.S. 921.0022
  assigns, never what the reader has.
- **Not a ranking.** TOOLS.md names the trap the re-scope introduces: a
  comparison inviting a reader to conclude their charge is better or worse than
  another edges toward outcome framing. The comparisons are not ordered by
  severity and carry no commentary about which a defendant should prefer.
- **Not a severity claim.** A higher level is not stated to be worse. It is
  stated to be a different input to a worksheet this page does not run.

Strings that must never appear, for the Section 11 assertion: `your level`,
`your score`, `your sentence`, `you are facing`, `worse than`, `better than`,
`more serious than`, `less serious than`, `likely`, `expect`.

## 5. What it cannot know

Rendered adjacent to the comparisons, at Rule 4-7.12(d) prominence, in these
words:

> **This page is one input, not a calculation.** The offense level is the
> primary-offense component of a Criminal Punishment Code scoresheet. A real
> scoresheet also scores additional offenses, victim injury, prior record,
> legal status, community sanction violations, prior serious and prior capital
> felonies, and firearm possession, and it then applies any of eight
> multipliers. None of that is on this page. Nothing here is a statement about
> any particular case, and no page on this site can tell you what sentence a
> court would impose.

The enumeration is not decorative: plan Section 5.2 requires the disclosure to
name what was left out, and the list above is the worksheet's own components as
recorded in `fs-921-0024.ts`.

## 6. Data source

| What the tool renders | Source record | State |
|---|---|---|
| Every cite, degree, and level in every comparison | `src/lib/statute-tables/fs-921-0022.ts`, 624 rows | **Audited whole-section**, fetched 2026-08-13 |
| Default levels for felonies the chart does not list, if the page discusses them | `fs-921-0023.ts`, 6 rows | Audited whole-section, **carries a live defect, below** |
| The worksheet components named in Section 5 | `fs-921-0024.ts`, 48 rows | Audited whole-section |
| Statutory maximums, if shown beside a degree | `fs-775-082.ts`, 54 rows | Audited whole-section |

**Every figure in Section 4 was re-derived from `fs-921-0022.ts` on 2026-08-24**
and is reproducible: filter the rows by cite prefix or by degree and read the
`level` field. The degree-span table is a group-by over the same 624 rows.

### Two corrections to TOOLS.md, found during that re-derivation

1. **817.568(7) is not a plain second degree felony.** TOOLS.md line 65-70
   describes Comparison B as "a second degree felony outranking a first degree
   felony" and calls 817.568(7) a "**second degree** felony ranked at level 9."
   The chart records its degree as **second degree felony punishable by life**.
   The comparison holds and is if anything sharper, because the punishable-by-life
   tier is itself unfamiliar, but the label must be the chart's. This is the same
   sixth degree the D28 round added to the degree-span table in
   SENTENCING-BOND-CONCEPT.md B.3, which had listed five.

2. **"Every drug trafficking tier starts at level 7" needs its statute boundary
   stated.** The claim is true of `893.135(...)`, 47 chart rows at levels 7, 8
   and 9. It is false of any filter written as a prefix match on `893.135`,
   which also catches **F.S. 893.1351**, a different offense (ownership, lease,
   or rental for trafficking or manufacturing) whose (1) sits at **level 5**.
   The build must match on the section boundary, and the page must not present
   893.1351 as a trafficking tier. Recorded because the naive filter was written
   during this document's own verification pass and produced a wrong answer
   before the boundary was added.

### The source's own stated limits

- `fs-921-0023.ts` row (4) carries an **AMBIGUITY FLAG** in its `trigger`
  field: a felony of the first degree punishable by life is recorded with
  `degree: "first degree felony"` because the audit ran before the union
  carried the punishable-by-life value, while `fs-921-0022.ts` uses the
  distinct value on 19 rows. **Consequence for this tool:** it must not map
  degree to a default level through `fs-921-0023.ts`, because "first degree
  felony" matches two rows at levels 7 and 9. The instrument reads the chart by
  ROW, never by degree, which makes this defect non-blocking here. It remains
  live for anything else that reads that table (SENTENCING-BOND-CONCEPT.md C.3
  defect 1).
- `fs-921-0022.ts` covers the chart. It does not carry elements, thresholds, or
  the degree of any listed offense beyond what the chart's own columns state,
  per its `unread` field. The instrument renders chart columns only.
- F.S. 921.0022(2) provides that the chart's right-hand description column is
  "provided solely for descriptive purposes." Any description shown is
  attributed as the chart's descriptive text, never as a statement of what the
  offense is.

## 7. C1 through C8 disposition

| # | Criterion | Disposition | How |
|---|---|---|---|
| C1 | No predictive framing | **By construction** | The page computes nothing and renders no figure that could be read as an outcome. TOOLS.md line 133 says the same of C1 alone. |
| C2 | Names what it cannot know | **By build** | Section 5's paragraph, rendered adjacent to the comparisons. |
| C3 | 4-7.12(d) presentation | **By build** | Same type size as the comparison tables, immediately after the first one, above the fold on a 320px viewport. |
| C4 | No-attorney-client notice adjacent | **By build** | Adjacent to the comparisons, not footer-only. Op. 24-1 and Bartholomew: a reader can form the belief from any tool on a firm's site. |
| C5 | Client-side only | **By construction in v1** | There is no input. If the v2 filter lands, it becomes by build against the Section 3 rail. |
| C6 | Version stated by date | **By build**, with a scope correction | State: the offense severity ranking chart at F.S. 921.0022, 2025 Florida Statutes, as recorded 2026-08-13. **The Rule 3.992 clause of C6 is inapplicable, not satisfied:** this tool implements no scoresheet form. Say so on the page so nobody reads a green C6 as a claim about a form. |
| C7 | Attorney-reviewed accuracy note | **Attorney** | The reviewer attests that each comparison's cite, degree and level match F.S. 921.0022 **read against the chart itself**, not against this document. TOOLS.md line 139 states that condition. |
| C8 | No results, testimonials, "confidential", implied Bar approval | **By build** | Nothing on the page and nothing in the surrounding template. |

**On "by construction" claims.** Two are made here, C1 and C5, and both rest on
the same structural fact: v1 has no input and no computation. If either changes,
both dispositions change with it, and this row is the place that must be edited
first.

## 8. What blocks shipping

### Machine-resolvable

1. **Re-verify each rendered cite, degree and level against `fs-921-0022.ts` at
   build time**, not against this document. Unblocks C7's precondition and is
   the Section 11 T1 assertion.
2. **Write the statute-boundary matcher** so `893.135` does not catch
   `893.1351`, per the Section 6 correction. Small, and it has already produced
   one wrong answer.
3. **Extend the copy surface.** Add the tool's copy to `page-copy.ts` so the
   registry's banned-term and duplication rails read it (D29). Today `toolCopy`
   covers the card, not a tool page.
4. **Decide the route** under the SENTENCING-BOND B.4 rule, and reconcile with
   the `tools` registry row. See Section 9: this tool has **no registry row at
   all** today.
5. **Repoint the two charge pages** that the C9 ruling puts on this asset, once
   the route exists. `check:routes` prevents linking earlier.

### Human-only

1. **Attorney accuracy review (C7).** Named attorney, date, attesting the
   mapping against the chart. Blocks launch.
2. **Attorney read of the framing.** Specifically whether Comparison B reads as
   a severity claim to a lay reader. This document's judgment is that it does
   not; that judgment is the kind D25 says an independent reader should test.
3. **`owner` and `lastReviewed`** for the page, which are `[NEEDS]` across the
   site and are a staffing answer rather than a research one.

**Nothing in the first list requires a fetch, and nothing in either list is
research.** That is what distinguishes this tool from the other two.

## 9. Route, registry, and links

| Field | Value |
|---|---|
| Route | **Open.** Recommended `/sentencing/offense-levels` if the sentencing silo is built, otherwise `/resources/tools/offense-level-comparison`. See below. |
| Registry entry | **Does not exist.** No `Tool` row in `src/lib/site.ts` names this asset. |
| Copy surface | `toolCopy` covers the card only. A page surface must be added. |
| Linked from | The charge pages carrying an offense-level column, and specifically `/criminal-defense/grand-theft-defense` and `/white-collar-defense/embezzlement` under the C9 ruling. **Not before the route exists**, which `check:routes` now enforces. |
| Deliberately not linked from | **Every federal page.** Standing rule in plan Section 4.2: the Criminal Punishment Code does not apply to federal cases, so the link is wrong on the merits and stays wrong after C1-C8 clear. |

**The route question is genuinely open and depends on a decision this document
cannot make.** WEBSITE-PLAN.md Tier 2 reserves `/sentencing/` for a 16-page
silo. If that silo is built, this instrument is a natural spoke of it and the
B.4 rule puts it there. If it is not, `/resources/tools/` is correct. Choosing
`/sentencing/...` first and cancelling the silo later costs a redirect.

**The missing registry row is the more interesting gap.** The `tools` array
carries the calculator, the seal-and-expunge checker, and the two guides. The
rank 1 tool in TOOLS.md, the one two charge pages are waiting on, has never had
a row. It was invisible to the site's own inventory, which is the shape
HUNT-LIST Instance 14 records one level out.

## 10. Failure modes

- **Unresolvable input.** Not applicable in v1: there is no input. If the v2
  filter lands, an empty filter result says so and shows the unfiltered
  comparisons rather than an empty table.
- **Ambiguous input.** Not applicable in v1. Noted for v2: three cites in the
  chart carry two rows at different levels under the same statute and degree,
  and a filter keyed on cite alone cannot distinguish them. A v2 filter is keyed
  on the row, never on the cite.
- **Out of scope.** A reader looking for a federal offense is told the chart
  ranks Florida offenses and pointed at the federal silo, not shown a blank.
- **Silent-wrong.** The failure a reader could not detect is a **transcription
  error in a rendered level**: a wrong number in a small table looks exactly
  like a right one. The control is T1 in Section 11, which asserts every
  rendered triple against the audited table at build time rather than trusting
  the JSX. There is no second control, and the attorney review in Section 8 is
  the only human check.

## 11. Done criteria, machine-checkable

| # | Assertion | Gate |
|---|---|---|
| T1 | Every (cite, degree, level) triple rendered on the page matches a row in `fs-921-0022.ts` exactly. Not a sample: the whole set. | **New**, or extend `check:claims` |
| T2 | The degree-span table matches a group-by over `fs-921-0022.ts` computed at check time, so a chart update that changes a span fails rather than rendering a stale table | **New** |
| T3 | No string from the Section 4 forbidden list appears in the rendered HTML | `check:pages` once the tool copy surface exists |
| T4 | The Section 5 disclosure appears in the rendered HTML, and its index precedes the first comparison table | **New**, rendered-artifact assertion |
| T5 | The version stamp naming F.S. 921.0022, 2025 Florida Statutes appears, and the page states that the Rule 3.992 clause of C6 is inapplicable | **New** |
| T6 | No page under `/federal-criminal-defense` links the route | `check:routes`, extended with a from-side rule |
| T7 | The route resolves, and the registry row exists with `published` matching whether the route is built | `check:routes` sweeps A and B, both already live |
| T8 | No `893.1351` row is rendered inside a comparison presented as F.S. 893.135 trafficking tiers | **New**, and it exists because the naive filter was written once already |

T1 and T2 are the ones that matter. Both read the built artifact per D24, both
fail on a missing artifact per D30, and both ship with a self-test that plants a
wrong level and asserts the gate fires.

## 12. Open questions

1. **Is the `/sentencing/` silo being built?** Owner: client, via WEBSITE-PLAN
   Tier 2. Decides this tool's route. Cross-references Section 9.
2. **Does this tool get a `tools` registry row now or at build time?** Owner:
   whoever runs the next build session. Recommended now: a row with
   `published: false` makes the asset visible to the site's own inventory, and
   `check:routes` sweep A already permits an unpublished row pointing at an
   unbuilt route.
3. **Who is the reviewing attorney for C7?** Owner: the firm. Same person as
   the site-wide `owner` gap.
4. **Does the embezzlement page's deferral sentence get repointed here, or
   rewritten?** Owner: a content decision. The sentence promises "one place"
   that does not exist yet; this tool is that place, and until it ships the
   sentence is a promise the site does not keep.
