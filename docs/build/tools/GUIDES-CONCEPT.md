# The two guides: concept

Written 2026-08-19. Concept only. No code, no changes under `src/`.

Sources read for this document: CLAUDE.md; docs/build/DECISIONS.md, D1 through
D27 in full; docs/build/CASES-WE-DEFEND-PLAN.md Sections 4.3a, 4.5, 4.6, 4.6.1,
5.1 through 5.7, 7, 10.3, 11, 11.1, 11.3, 11A; docs/research/STATE.md;
docs/research/PAGE-SOURCES.md (records at lines 20-131, 640-690, 960-1010,
1180-1270, 1360-1440, 1530-1620, 1730-1810); docs/research/tools-and-hooks.md
Sections 2.4, 2.5, 2.6 and 5; docs/research/content-gaps.md Topics 1 and 5;
docs/research/DOSSIER.md items 9, 13, and the tool list at 233-241;
docs/build/WEBSITE-PLAN.md lines 184-191 and 316-331; scripts/check-pages.mts in
full, check-c9.mts, check-claims.mts, check-unverified.mts, check-rendered.mts;
src/lib/site.ts (`ChargePage`, `Tool`, `tools`, `charges`, `articles`),
src/lib/page-copy.ts, src/lib/charge-page.ts, src/lib/statutes.ts,
src/components/cases/ChargeTemplate.tsx, src/app/sitemap.ts,
src/app/resources/tools-and-guides/page.tsx, next.config.ts, package.json.

**Measurements in this document were computed against the working tree on
2026-08-19** by reimplementing `check-pages.mts`'s shingle function and its
compelled-text exclusion set exactly, and running it over `pageCopy` for every
written charge page. Nothing was written to the repository to obtain them. Every
number below is reproducible from the current tree.

**Corrections, 2026-08-20 (D28 round and rulings).** An adversarial
verification round, five independent auditors with refute-by-default
verification of every surviving finding, confirmed six defects in this
document. Under the same-day rulings, **Section 0 is rewritten from the
corrected counts** rather than patched; the mid-document corrections are marked
`[CORRECTED 2026-08-20]` in place. A low-findings pass the same day corrected,
without inline markers: the A.2 counts for 18 U.S.C. 3142 (3 pages, not 4),
3161 (12, not 11), and the Rule 5 row (0 citations; two passing mentions of an
initial appearance); "70 audited statute tables" to 74; the B.1 allowance rows
40/75/125 to 39/74/124, because exactly 5% fails the gate's strict comparison;
the B.2 straddle-run and shared-run counts relabeled to the 29-written-page
universe they were computed over; the compelled-set attribution (1,182 trigger
fields alongside the 1,662 quotes); the counsel-clause run restated as its two
eight-word runs; and F.2's "every check" narrowed to the six checks that
actually filter. Full round record, including the verified evidence for each:
docs/build/tools/REVIEW-2026-08-20.md.

---

## 0. The verdict, first

[REWRITTEN 2026-08-20 under the D28 rulings. The original Section 0 rested on
two vacancy claims the adversarial round falsified in opposite directions, and
the ruling was to re-derive the verdicts from the corrected counts rather than
patch the numbers. The original text is in git history; the falsified claims
and their verification are in docs/build/tools/REVIEW-2026-08-20.md.]

**Guide 2, the Federal Case Timeline, should be built. The vacancy is real,
measured, and four stages wide, not seven.** Fed. R. Crim. P. 5.1 (preliminary
hearing), Rule 11 (pleas), Rule 32 (presentence report and sentencing), and
18 U.S.C. 3553(a) (the sentencing factors) appear on no written page, and
Rule 5 is cited on none (two pages mention an initial appearance in passing).
Those stages are identical in every federal case, so no charge page can carry
them without failing the cover-the-name test: precisely the residue plan
Section 4.5 sends to a Layer 2 asset. Two provisions this document originally
counted as vacant are not vacant: 18 U.S.C. 3161(h) is treated substantively on
six pages and 3161(c)(2) is stated whole on one. The guide takes those under
the A.4 boundary rule, owning the full treatment while the carrying pages keep
charge-keyed points and the duplication measure runs against every one of them,
rather than as free ground. The market vacancy stands as recorded in
content-gaps.md Topic 1: the one local competitor timeline is roughly 1,200
words with zero citations.

**Guide 1, First 24 Hours After a Hillsborough Arrest, should not be built as
described, and the reason is the measurement, not the inventory.** The original
basis here, that the charge pages leave such a guide nothing to say, is false
at the edges: Rule 3.111 is absent from three state pages, the booking
officer's duties from seven, the Public Defender from four. What is true is
narrower and sufficient: the spine of the described guide, Rule 3.130(a), the
Rule 3.134 clocks with their conditions, the 175-day period and its (o) remedy,
and the local institutions, is on all eleven state pages, and the measurement
below makes the consequence of restating that spine unavoidable. The uneven
edge is not a guide subject either; it is charge-keyed material that belongs on
the pages that lack it, or bounded guide material under A.4.

**The re-scope survives its own correction: guide 1 becomes the release
decision.** Rules 3.131 and 3.132, F.S. 903.046 and 907.041, and the bond
schedule as an instrument appear on no page, are unrecorded fact-layer work
rather than restatement, and govern identically whatever the charge, which is
the same structural argument that carries guide 2. The collision A.3 said a
person had to decide has now been decided: D32 rules that the bond estimator is
not built, the schedule folds into this guide, and the cash versus surety cost
comparison survives as the guide's only interactive element. Guide 1's
remaining conditions are STATE.md Q14, the Hillsborough logistics, and the
interactive-or-prose decision at Open Question 2.

### The measurement that decides it

The duplication gate normalises shared eight-word runs by the **smaller**
page's non-compelled run count. A charge page survives because its procedure is
a minority of its content; the charge-specific substance dilutes the shared
runs against a large denominator. A guide has no charge-specific substance to
dilute with. **The procedure is the whole page, so the same words that pass on
a charge page fail on a guide.**

That is not a prediction. It is measured, on pages already in the tree, and
independently reproduced in the D28 round (the reproduction confirmed the
figures below to the digit):

| Comparison | Rate | Runs |
|---|---|---|
| Worst pair among all 27 measured charge pages, whole page against whole page | **4.73%** | 221 |
| `grand-theft` procedure sections only, against the whole `drug-trafficking` page | **11.4%** | 94 |
| `drug-trafficking` procedure sections only, against the whole `sex-crimes` page | **7.7%** | 94 |
| `sex-crimes` procedure sections only, against the whole `sexual-battery` page | **5.6%** | 113 |
| A guide assembled from every state page's procedure sections, against `computer-crimes` | **33.4%** | 1,509 |

**Twenty-four existing page pairs, thirty-one directed comparisons, are already
at or above the 5% limit when only one side's procedure sections are
measured.** They pass today only because the gate compares whole pages. Isolate
the procedure into a document of its own and the limit is breached by material
already written and already approved.

The rest of this document is what follows from that.

---

## A. Concept, and whether both guides should exist

### A.1 What the charge pages already own

All eleven written state charge pages carry a `timeline` or `clocks` section, a
`now` guidance section, and a `who` section.

[CORRECTED 2026-08-20: this section originally claimed every page states the
full list below. Probed per page, the list splits into a universal spine and an
uneven edge, and the original universal claim was false.]

**On all eleven pages, from a recorded fetch:**

- first appearance within 24 hours, Rule 3.130(a), including the "except when
  previously released in a lawful manner" carve-out;
- the Rule 3.134 charging clocks with the "unless the state files formal
  charges by that date" condition;
- the 175-day speedy trial period and the Rule 3.191(o) recapture remedy;
- the Office of the State Attorney for the Thirteenth Judicial Circuit and the
  Edgecomb and Plant City courthouse addresses.

**On some pages only:**

- Rule 3.111 in any form: absent entirely from drug-trafficking, grand-theft,
  and dui, which ground counsel in Rule 3.130(b) and (c) instead. The booking
  officer's duties under 3.111(c) appear on 4 of 11 (sexual-battery, gun-crimes,
  battery, computer-crimes);
- the Public Defender: absent from drug-trafficking, drug-possession,
  domestic-violence, and dui;
- the Rule 3.191(a) (e) and (f) limitations by name: 4 of 11 (drug-possession,
  sex-crimes, domestic-violence, homicide);
- the right to decline to answer questions: absent from dui;
- the 63-day figure (absent from domestic-violence), the 90-day misdemeanor
  period (absent from drug-trafficking), and the capias start-date clause
  (absent from dui).

The battery page additionally carries Administrative Order S-2025-063, the
uniform bond schedule, with the amounts for its own degrees, the section 2
no-release-before-first-appearance list, and the order's own statement that the
schedule "applies only to the booking officer" and does not bind a judge.

**The first-24-hours guide, as its description is written, has little to say
that is not already on those pages.** [CORRECTED 2026-08-20: originally "no
sentence to say," which the per-page probe above falsifies at the edges: 3.111,
the booking officer's duties, and the Public Defender are unevenly covered. The
verdict does not rest on this inventory; it rests on the Section 0 measurement,
which got stronger under correction, and the uneven edge is exactly the
material A.4's boundary rule assigns rather than duplicates.]

### A.2 What no page owns, on the federal side

Probing every federal and white-collar page's extracted copy for the provisions
a federal timeline would be built on:

| Provision or stage | Pages that mention it |
|---|---|
| 18 U.S.C. 3161, the Speedy Trial Act intervals | 12 |
| 18 U.S.C. 3142, pretrial detention and release | 3 (drug trafficking, weapons, CSAM, and only in part) |
| Grand jury, Fed. R. Crim. P. 6 | 1 in depth (target letter, 54 mentions) plus passing mentions |
| Fed. R. Crim. P. 5, initial appearance | 0 citations; two pages mention an initial appearance in passing |
| Arraignment | 1, in passing |
| Fed. R. Crim. P. 5.1, preliminary hearing | **0** |
| Fed. R. Crim. P. 11, pleas | **0** |
| Fed. R. Crim. P. 32, presentence report and sentencing procedure | **0** |
| 18 U.S.C. 3553(a), the sentencing factors | **0** |
| 18 U.S.C. 3161(h), excludable time | 6, substantively (conspiracy quotes (h)(1), (h)(1)(D), (h)(6) at length) |
| 18 U.S.C. 3161(c)(2), the 30-day minimum before trial may begin | 1 (money-laundering, stated whole) |

**Four of the eleven rows are zero: Rule 5.1, Rule 11, Rule 32, and 3553(a).**
Those stages are the same in every federal case, which is exactly why no charge
page carries them: a section true of every federal charge fails the
cover-the-name test by construction, and plan Section 4.5 says such material
"moves to a Layer 2 asset and both pages link to it." That sentence was written
about the F.S. 812.014 value table shared by two pages. It applies with more
force to material shared by nine.

[CORRECTED 2026-08-20: originally "seven of the eleven rows are zero," with
3161(h) and 3161(c)(2) claimed at zero pages. Both claims were false when
written: the (h) and (c)(2) copy landed in src/lib/site.ts on 2026-08-14, five
days before this document. (h) is treated on six pages (wire-mail-fraud,
conspiracy, weapons, money-laundering, computer-internet-crimes, bank-fraud)
and (c)(2) is stated whole on money-laundering. The vacancy is real for the
four rows above; for (h) and (c)(2) guide 2 gets the A.4 boundary treatment,
not free ground. See A.5 and B.3.]

The market evidence agrees and is already verified. content-gaps.md Topic 1
grades the local field COVERED-THIN: one Tampa competitor has a dedicated
timeline page, roughly 1,200 words, with zero statute or rule citations and zero
M.D. Fla. specifics. The national ceiling is a 2,800 to 3,000 word prose guide.
A cited, Tampa-Division-specific timeline is unmatched locally.

**Verdict on guide 2: build it.** It has a vacancy in the site, a vacancy in the
market, and a structural reason it cannot live anywhere else.

### A.3 Guide 1, and the honest answer

The subject as described is taken. What is not taken is the **release
decision**, and it is a genuinely different subject from the charging clocks:

| Already on the charge pages | Not on any page |
|---|---|
| Rule 3.130(a), the 24-hour rule | Rule 3.131, pretrial release: the presumption, non-monetary conditions, the release decision itself, the bond-modification motion |
| Rule 3.130(d), which routes to 3.131 or 3.132 by name | Rule 3.132, pretrial detention on the State's motion |
| F.S. 903.047(1)(b), no-contact conditions, on the domestic violence page only | F.S. 903.046, the criteria a court weighs in setting bail; F.S. 907.041 |
| AO S-2025-063 amounts for the battery degrees, on one page | The schedule as an instrument: every degree, the section 2 exclusion list, the expiry date |
| Written to the person accused | Written to the person making the phone call |

That last row is not decoration. Every charge page addresses "you," the accused.
tools-and-hooks.md Section 2.4 says this asset is "aimed at the FAMILY of the
arrestee as much as the defendant." A page written to someone who is not the
client, about a decision they can actually affect in the next twelve hours, is a
different document rather than a reworded one, and it is the shape the
conversion research says wins.

**But three things have to be settled before a word is written.**

1. **It collides with the Bond and Bail Estimator.** `src/lib/site.ts` carries
   "Bond & Bail Estimator, Hillsborough County: see how bond is typically set
   locally and what to expect at first appearance." Re-scoped to the release
   decision, guide 1 is that description. D1's principle is that two pages
   cannot own one query. DOSSIER.md item 233 and tools-and-hooks.md Section 2.5
   both already say the standalone bond walkthrough is **not built** and folds
   into the first-24-hours asset, so the research answer is that the guide
   absorbs the estimator. The `tools` array has not been updated to say so.
2. **The Hillsborough logistics are unverified by decision.** STATE.md Open
   Question 14 requires human verification of the uniform bond schedule amounts,
   and of HCSO and Orient Road first-appearance logistics, before publication.
   D7 keeps the Brandon Regional Service Center out of copy entirely. The
   research facts that make this asset attractive, booking at 1201 Orient Road
   and Division O video court, are recorded in tools-and-hooks.md as
   "confirmed in SERP content this session (verify before publishing)." That is
   not a source under Section 10.3.
3. **Interactivity.** tools-and-hooks.md says the differentiator is the format,
   an interactive or printable checklist, with no US law firm incumbent found.
   Every gate on this site reads data, and D24 exists because the one defect
   none of them could see sat in the path between the data and the page.
   Interactivity widens that path. It also adds a Rule 4-1.18 and Op. 24-1
   surface if a family member enters facts. **Recommendation: prose first, with
   a print stylesheet, and record explicitly that this gives up the format
   differentiator the research identified.** Do not let it be given up by
   default.

**Verdict on guide 1: conditional. Not as described. Buildable as the release
decision, after a person answers Open Question 1.** If the answer is that the
estimator keeps that ground, then guide 1 has no subject left and the correct
outcome is to remove it from `tools` with a recorded reason, in the shape of D5:
a decision rather than an oversight.

### A.4 The boundary, drawn the way battery and domestic violence draw theirs

Those two pages cover overlapping conduct and share a charging statute, and they
do not collide. The mechanism is worth copying exactly, because it is the only
demonstrated solution on this site to the problem the guides have.

**Battery owns** the reclassification routes (what turns the same touching into
a felony), the F.S. 784.03 text and its catchline problem, the ranking-chart
ladder, and the arithmetic of a level 4 score. **Domestic violence owns** the
relationship element under F.S. 741.28(3), the no-contact order and the 500
feet, the pro-prosecution policy, and the specialised prosecutors under F.S.
741.2901(1).

Both pages carry a timeline covering the same rules. They do not read alike
because **each timeline is keyed to the fact that is that page's own**: battery
begins at the booking desk with the bond schedule because a battery is
schedule-eligible or is excluded by section 2; domestic violence begins with
F.S. 741.2901(3), which holds the person until first appearance so no schedule
applies at all, and with the history the State Attorney must assemble before
that hearing. Same rule, different entry point, and the entry point is the
charge-specific fact.

**The rule this yields for the guides.** A guide may state a rule that a charge
page also states **only where the guide's treatment is keyed to something the
charge pages cannot be keyed to**: the whole schedule rather than one degree's
rows, the release decision rather than the charging clock, the stage sequence
rather than one stage's deadline. Where the guide would say what a charge page
says for the same reason, the guide links instead.

### A.5 The boundaries, stated as a table

| Subject | Owner | The other side does what |
|---|---|---|
| Rule 3.130(a), 24 hours to first appearance | Charge pages, each keyed to its own charge | Guide 1 links, and quotes only if the release discussion needs the sentence |
| Rule 3.134 charging clocks | Charge pages | Guide 1 does not state them at all |
| Rule 3.191 speedy trial | Charge pages | Guide 1 does not state them at all |
| Rule 3.111 appointment of counsel | Charge pages | Guide 1 does not state it; it may say when a lawyer can be reached, which is not the rule |
| Rules 3.131 and 3.132, chapter 903, the whole bond schedule | **Guide 1** | Charge pages link, and keep only the schedule rows for their own degrees |
| Grand jury, target letters, JM 9-11.150 through 9-11.155, Fed. R. Crim. P. 6 | `/federal-criminal-defense/target-letter-defense` | **Guide 2 links and does not restate.** This is the single largest duplication risk on the federal side |
| 18 U.S.C. 3161(b) and (c)(1), the two intervals | Federal charge pages, one sentence each | Guide 2 owns them **in full**, including (b)'s second sentence. [CORRECTED 2026-08-20: (c)(2) and (h) are not unshared text, contra the original row. Guide 2 still owns the full treatment, but on the 3142 pattern in the next row: the six pages carrying (h) and the one carrying (c)(2) keep charge-keyed points, and the guide's sections are measured against all of them before this boundary is trusted] |
| 18 U.S.C. 3142, detention and release | **Guide 2** | The four federal pages that mention it keep only their charge-keyed rebuttable-presumption point |
| Rules 5, 5.1, 10, 11, 32, and 18 U.S.C. 3553(a) | **Guide 2**, uncontested | Charge pages link |
| Limitations, 18 U.S.C. 3282 and 3293 | Charge pages that already carry them (bank fraud, wire and mail fraud, federal money laundering) | Guide 2 names the stage and links; it does not re-quote |

---

## B. Duplication strategy, measured

### B.1 How the measure actually works, and the two facts that govern the design

`scripts/check-pages.mts` lines 761 to 840. Copy is extracted from the data by
`pageCopy`, lowercased, stripped to alphanumerics, and cut into eight-word runs.
Runs in the compelled set are removed from **both the numerator and the
denominator**. The rate is shared runs over the **smaller** page's remaining run
count, and the limit is 5%.

**Fact one: the denominator punishes short pages.** The smallest measured charge
page, `/white-collar-defense/embezzlement`, has 3,919 non-compelled runs. Below
that size the guide is its own denominator:

| Guide size, non-compelled runs (roughly, words) | Worst-case allowance against any charge page |
|---|---|
| 800 | 39 shared runs |
| 1,500 | 74 |
| 2,500 | 124 |
| 4,000 | **195** |
| 6,000 | 195 (the floor is now the charge page, not the guide) |

**A short guide is the most dangerous shape.** A 1,200-word first-24-hours
checklist would have roughly 60 shared runs to spend across 29 comparisons, and
the shared procedural vocabulary alone runs to 296 distinct runs appearing on
five or more of the 27 measured pages, 301 across all 29 written pages. **Minimum viable guide length is about 4,000 words of
non-quoted prose**, and that is a duplication constraint before it is an
editorial one.

**Fact two: verbatim quotation is free and paraphrase is not.** The compelled set
is built from three sources (lines 796 to 827): six fixed institutional phrases,
the `quote` and `trigger` fields of every row in the 74 audited statute tables,
and **every blockquote line in `docs/research/PAGE-SOURCES.md`**. It currently
holds 124,381 runs, from 1,662 table quotes, 1,182 trigger fields, and 379
blockquote lines.

So a rule quoted exactly as recorded costs nothing. A rule compressed by one
clause costs full price. This is measurable in the tree today. The clause

> `right to counsel and that counsel will be appointed`

is nine tokens, so under the gate's eight-word unit it is two runs, and both
appear on **ten** pages and are **not** excluded, because Rule 3.130(b)(1)(B)
actually reads "has a right to counsel, and, if financially unable to afford
counsel, that counsel will be appointed," and ten pages elided the middle
clause. Quoting it whole would have removed the run from the measure and made
the sentence more accurate at the same time.

**This is the single most useful thing to tell whoever writes these guides.**
Quote correctly and the metric pays you. Summarise and it charges you twice, in
the number and in the review round.

### B.2 The exclusion set has holes, and two of its six phrases do nothing

Token counts against the eight-word window:

| Compelled phrase | Tokens | Runs it contributes |
|---|---|---|
| the Office of the State Attorney for the Thirteenth Judicial Circuit | 11 | 4 |
| **the Hillsborough County Clerk** | 4 | **0** |
| the Edgecomb Courthouse, 800 E. Twiggs Street, Room 101 | 9 | 2 |
| the Plant City Courthouse, 301 North Michigan Avenue, Room 1071 | 10 | 3 |
| **the Middle District of Florida, Tampa Division** | 7 | **0** |
| the Sam M. Gibbons United States Courthouse, 801 North Florida Avenue | 11 | 4 |

Two of the six are shorter than the window and exclude nothing at all. The other
four exclude only the runs wholly inside them, so every run that straddles the
phrase boundary is counted as chosen prose. The measured consequence, across
all 29 written pages (over the 27 measured pages the Gibbons row is 15 and the
US Attorney row 10; the other four rows are identical):

| Run, still counted as chosen | Pages carrying it |
|---|---|
| `at the edgecomb courthouse 800 e twiggs street` | 16 |
| `at the sam m gibbons united states courthouse` | 16 |
| `at the plant city courthouse 301 north michigan` | 15 |
| `or from the date of the service of` | 11 |
| `the united states attorney s office for the` | 11 |
| `the date on which defendants are arrested or` | 10 |

The Rule 3.134 runs are the more serious ones, and PAGE-SOURCES.md already
records why at lines 1760 to 1768: the "capiases on them" clauses are recorded
there as **inline** quotation rather than as blockquotes, and the gate reads
blockquote lines only. Two repair agents noticed this, said so, and
deliberately did not convert the lines, "because that would silently change
the measurement for the published sibling page as well."

[CORRECTED 2026-08-20: the original sentence also named the opening carve-out
of Rule 3.191(a) as inline-only. That is no longer true: PAGE-SOURCES.md line
1539, a batch B round 2 record dated 2026-08-14, blockquotes 3.191(a) from its
opening, "Except as otherwise provided by this rule, and subject to the
limitations imposed under subdivisions (e) and (f)," so those runs are already
compelled today. The 1760-1768 note this paragraph cites predates that record.
Only the 3.134 capias clauses remain uncompelled.]

**They were right not to do it silently. It should now be done deliberately.**
Measured effect of recording those provisions as complete blockquotes, plus
widening the six phrases to the surrounding context in which every page actually
uses them:

| Exclusion set | Worst existing pair | Runs shared by 5+ pages |
|---|---|---|
| As shipped | 4.73% | 301 |
| Plus complete rule blockquotes | 4.73% | 286 |
| Plus address context phrases | 4.45% | 272 |
| Both | **4.45%** | **257** |

**Report this honestly: the widening is worth doing and it is not the
strategy.** It buys 44 runs of headroom out of a 195-run budget. It is a
correction to a measurement error, not a solution to a content problem. Anyone
who proposes it as the answer to the guides' duplication problem has
misunderstood the arithmetic in B.1.

Two conditions on doing it, both from D27: the change is made in one commit, on
its own, with before and after numbers recorded; and the numbers are re-derived
for **all 27 existing pages**, because a duplication rate that improves without
anyone changing copy is the exact signal D27 says must be chased to its cause.

### B.3 The concrete strategy, in order of how much it buys

1. **Own different provisions.** By far the largest lever. Sections A.2 and A.5
   assign the guides provisions that appear on zero pages: Rules 3.131, 3.132,
   5.1, 11, 32, chapter 903, 3553(a). Runs built on text no page carries cannot
   be shared runs. [CORRECTED 2026-08-20: 18 U.S.C. 3161(c)(2) and (h) were on
   this list and do not belong on it, per the corrected A.2 table; (c)(2) is on
   one page and (h) on six. Rules 5 and 10 also appear once each in passing.
   For those provisions the lever is the A.4 boundary rule, not vacancy, and
   the guide's (c)(2) and (h) sections must be measured against the carrying
   pages before this strategy is trusted.]
2. **Meet the length floor.** At least 4,000 words of non-quoted prose, so the
   denominator is the charge page rather than the guide. This follows from B.1
   and inverts the usual instinct to keep a guide short.
3. **Quote verbatim from a recorded blockquote, always.** Free in the measure and
   required by Section 10.3 anyway.
4. **Link rather than restate.** Guide 2 links to the target letter page for the
   grand jury stage. Guide 1 links to the charge pages for the charging clocks.
   Plan Section 11.1 already requires per-asset links in the other direction.
5. **Never reuse a heading.** The heading-reuse gate fails the build on any
   normalised heading shared by two migrated pages. The guides must be inside
   that gate (Section F) and their headings must be as specific as the charge
   pages' are.
6. **Fix the exclusion set,** deliberately, per B.2.

### B.4 Measure before writing, not after

The guides are the first pages on this site whose duplication risk is known in
advance. Take the advantage.

- Run the pairwise measure against a **draft outline** with placeholder prose at
  the intended length, before any legal sentence exists. It will not find real
  overlap, but it will confirm the harness runs and the guide is in the measured
  set.
- Run it again after the first section is written, then per section. The
  measurement is a few seconds of compute. Discovering a 6% rate at section
  three costs one section; discovering it at review costs a round, and this
  project has already spent two rounds rewriting pairs for exactly this.
- Record the rate against **every** charge page, not the worst one. A guide can
  sit at 4.9% against nine pages and be one edit from failing all nine.

---

## C. Sources, provision by provision

The rule that governs this section is D26: a source record is checked as
strictly as copy, because it is read by pages that do not exist yet. Anything in
the "new work" column is a scheduled fact-layer task with the D23 shape, one
agent fetching and returning verbatim text, a second independently re-fetching,
before any sentence rests on it.

### C.1 Guide 1, if it is built

**Recorded, usable as-is** (PAGE-SOURCES.md, Florida Bar compilation updated
2026-07-13, corrected URL, browser user agent required):

| Provision | Where recorded |
|---|---|
| Rule 3.130(a), (b)(1)(B), (c)(1), (c)(2), (d) | lines 47-71 and 1600-1603 |
| Rule 3.134(a)(1), (a)(2)(A) and (B), (a)(3), (b)(1), (b)(2) | lines 77-101, with the corrections at 1747-1758 |
| Rule 3.191(a), (b), (d), (e) and (f) | lines 113-131 and 1536-1551 |
| Rule 3.111(a), (b)(1), (b)(1)(C), (b)(2), (b)(4), (b)(5), (c)(1) to (c)(3) | lines 640-690, 1600-1603, 1852-1859, 2125 |
| F.S. 903.047, whole section read | lines 1731-1733, 1824-1825 |

**Not recorded. New fact-layer work, and it is the guide's actual subject:**

| Provision | Why it is needed | Note |
|---|---|---|
| **Fla. R. Crim. P. 3.131**, whole rule | The release decision. Named by 3.130(d) and quoted nowhere | Same Bar compilation, same extraction method |
| **Fla. R. Crim. P. 3.132**, whole rule | Pretrial detention on the State's motion, the other half of 3.130(d) | Same |
| **F.S. 903.046** | The criteria a court weighs in setting bail | flsenate.gov |
| **F.S. 903.011, 903.02, 903.035, 903.09** | Bond forms, sureties, sworn applications, forfeiture | Fetch only what the guide states |
| **F.S. 907.041** | Pretrial detention and release statute | Read whole; it is long and heavily amended |
| **Administrative Order S-2025-063**, sections 2 and 4 in full | The schedule as an instrument. One page currently carries the rows for its own degrees | The order expires 2026-12-31 by its own terms. Currency policy Section 9 applies with the shortest cadence on the site |
| **Administrative Order S-2026-006** | Division O, First Appearance and Emergency | Referenced on two pages already |
| HCSO booking logistics, 1201 Orient Road, video first appearance | The family-member track | **Blocked. STATE.md Q14 requires human verification. Not a Section 10.3 source today** |

### C.2 Guide 2

**Recorded, usable as-is:**

| Provision | Where recorded |
|---|---|
| 18 U.S.C. 3161(b), **both sentences** | line 1185-1187 |
| 18 U.S.C. 3161(c)(1) | line 970-976 |
| 18 U.S.C. 3161(h), opening clause and (h)(1)(D) only | lines 1418-1421, the bank-fraud batch B record. Partial, and marked as partial there |
| 18 U.S.C. 3282, read whole, including the existence of (b) | line 1392 |
| 18 U.S.C. 3293, read whole, chapeau, (1) to (3), flush clause | line 1390 |
| 18 U.S.C. 3006A(a)(1) | line 978-987 |
| 18 U.S.C. 3142(f), chapeau, (f)(1)(A)-(E), (f)(2)(A)-(B), and the continuance sentence with its recorded trap | lines 1277-1281, 1985-1986 |
| Fed. R. Crim. P. 6(e)(1), 6(e)(2)(A)-(B), 6(f), 6(g) | lines 1227-1241 |
| JM 9-11.150, 9-11.151, 9-11.153, 9-11.155, 9-27.230, 1-1.200 | lines 1243-1269. DOJ policy only, never law (D2) |
| 18 U.S.C. 3553(f) and (g) | lines 1053-1107 |

**Not recorded. New fact-layer work:**

| Provision | Why it is needed |
|---|---|
| **18 U.S.C. 3161(c)(2)** | The 30-day minimum before trial may begin over the defendant's objection. [CORRECTED 2026-08-20: not absent from the site; stated whole on the money-laundering page. The fetch-record gap this table tracks stands] |
| **18 U.S.C. 3161(h)**, read whole | Excludable time. A guide stating "70 days" without (h) is the federal analogue of the fourteen-page Rule 3.134 failure. [CORRECTED 2026-08-20: partially recorded, not absent; see the recorded table above. The read-whole fetch is still required] |
| **18 U.S.C. 3161(a), (d), (e)** | Retrial and reindictment intervals, if the guide reaches them |
| **18 U.S.C. 3162** | The sanction for a violation. Without it, a reader takes the interval for a case-ending deadline, which is the error Rule 3.191(o) already corrected on the state side |
| **18 U.S.C. 3142(a), (b), (c), (e), (g), (i)** | Only (f) is recorded. (g) is the factors list and (e) is the presumption |
| **18 U.S.C. 3143** | Release pending sentence and appeal, if the guide runs past verdict |
| **Fed. R. Crim. P. 5** and **5.1** | Initial appearance and preliminary hearing. Zero coverage on the site |
| **Fed. R. Crim. P. 10** | Arraignment |
| **Fed. R. Crim. P. 11** | Pleas. Read whole; (c)(1)'s prohibition on judicial participation and (b)'s colloquy are the load-bearing parts |
| **Fed. R. Crim. P. 32** | Presentence report, disclosure timing, and the sentencing hearing |
| **18 U.S.C. 3553(a)** | The sentencing factors. `usc-3553.ts` is a whole-section audited table with **zero rows by design**, so its text is **not** in the compelled exclusion set and no `quote` field carries (a). It must be recorded as a blockquote |
| M.D. Fla. Local Rules, and the Tampa Division's own scheduling practice | **Probably not obtainable to this project's standard.** See Open Question 4 |

### C.3 Three standing limits that bind both guides

1. **Case law is not in this project's record.** State what a statute or rule
   says. Never what a court held. This bars, among others, any account of what
   the Speedy Trial Act means in practice, any bail-presumption doctrine, and
   any characterisation of how the guidelines became advisory.
2. **The Guidelines Manual is not in this project's record either.** Recorded at
   PAGE-SOURCES.md line 1193 in the course of a different finding. Guide 2 may
   describe the presentence report and 3553(a) from statute and rule. It may not
   describe how a guideline range is computed.
3. **justice.gov is procedure and DOJ policy only** (D2). The Justice Manual is
   internal policy, it does not bind a court, and it is never a source for what
   a statute says. Guide 2 will be tempted here more than any page yet written,
   because the Justice Manual is the most readable description of federal
   process in existence.

---

## D. Implementation

### D.1 Do these belong in `tools`? No, and not in `articles` either

`Tool` (src/lib/site.ts:7262) is `{label, kind, title, description, href,
published}`. It has no body. It is an index card. `Article`
(src/lib/site.ts:7343) is `{title, href, published}`, which is less. Neither type
can hold a sectioned, source-backed, gate-measured document, and **the guides'
whole problem is that they are measured documents.**

Recommendation:

- Add `GuidePage` and a `guides` array, structurally parallel to `ChargePage`
  and `charges`: `slug`, `title`, `metaTitle`, `metaDescription`, `lead`,
  `sections: ChargeSection[]`, `faq`, `relatedLinks`, `owner`, `lastReviewed`,
  `readerNeeds`, `published`. No `silo`, no `c9`, no `penalties` requirement.
- Leave `tools` in place as the **presentation** list for the Resources hub and
  the home carousel, and derive its guide rows from `guides` so the two cannot
  drift. `src/app/resources/page.tsx` and `ToolsCarousel.tsx` need no change if
  the derived shape matches `Tool`.
- Delete nothing from `tools` in the same commit that adds `guides`. Drift here
  is exactly the D13 defect, two entries byte-identical in slug and description
  getting written toward each other.

Note a small existing inconsistency to fix while in there:
`src/app/resources/tools-and-guides/page.tsx` states the build order as
"sentencing calculator, bond estimator, federal case timeline, seal and expunge
checker," which omits the After an Arrest guide that `tools` lists fourth. One
of the two is wrong.

### D.2 The registry that makes the gates possible

This is the load-bearing implementation decision and it should be made before
any content exists.

Every one of the five gates iterates `charges`. A guide added anywhere else is
invisible to all five, silently, which is the failure shape recorded in this
project's own memory: every gate that broke here broke by passing.

So introduce **one measured-surface registry**:

```
// src/lib/measured.ts  (sketch, not code to be pasted)
export type Measured = {
  key: string;          // "charge:state/battery-defense" | "guide:after-an-arrest"
  href: string;
  sections?: ChargeSection[];
  copy: string[];       // from pageCopy or guideCopy
  published: boolean;
};
export const measuredPages: Measured[] = [...charges.map(...), ...guides.map(...)];
```

and change the gates to iterate `measuredPages` rather than `charges`. Three
consequences worth stating plainly:

1. `pageCopy` gains a sibling `guideCopy`, and `RENDERED_FIELDS` in
   page-copy.ts gains a guide checklist. That file's header already says a field
   that renders but is not extracted is a hole in every gate at once.
2. `check-c9.mts` keeps iterating `charges`. C9 is the cover-the-name test
   between charge pages, and a guide has no sibling charge it could be confused
   with. Inapplicable rather than missing, and it should print that it is
   skipping guides by design.
3. The duplication and heading-reuse checks then compare guides against charge
   pages automatically, which is the whole point of Section B.

### D.3 Template

**Do not reuse `ChargeTemplate`.** It is built on `chargeTrail`, the silo, the
counterpart cross-link, the C9 byline and the penalties table. Feeding a guide
through it means constructing a fake `ChargePage`, which pulls the guide into
`charges` and therefore into `chargesInSilo`, the charge index, the practice
grid and the silo hubs. That is a worse outcome than duplicated JSX.

**Do extract the section primitives.** `SectionBody`, `SectionPrimary` and
`PenaltyTable` (ChargeTemplate.tsx lines 336 to 468) are already generic over
`ChargeSection`. Lift them into a shared module and have both templates render
through them. This keeps D24's first rule alive for the guides for free: the
renderer is total, `kind` decides order and emphasis and never what survives.

### D.4 Routes and wiring

- `src/app/resources/guides/[guide]/page.tsx`, with `generateStaticParams` from
  `guides`, matching the charge routes' shape. Two static routes would work and
  would drift.
- `noindex: !published`, matching the charge routes.
- `src/app/sitemap.ts` currently lists attorneys, silos and charges. It must gain
  `guides.filter(g => g.published)`. Omitting this is the exact mismatch the
  sitemap's own comment warns about, asking Google to crawl a page and then
  telling it not to index what it found.
- Breadcrumb trail: Home / Resources / Tools and Guides / [guide]. Add a
  `guideTrail` beside `siloTrail` and `chargeTrail` so the visible breadcrumb and
  the JSON-LD read from one source, which is why those builders exist.
- Schema: `breadcrumbJsonLd`, plus `faqJsonLd` only if the guide carries answered
  FAQs. **Do not emit HowTo.** A HowTo for legal steps is a machine-readable
  claim that following the steps produces the outcome, on a page that must not
  predict outcomes under Rule 4-7.13(b)(1).
- `relatedGuides` carries 26 links across the charge pages, and **22 of them, on
  22 different pages, point at `/resources/tools-and-guides`**, the hub. Plan
  Section 11.1 requires the **specific** asset. Wiring those is a phase of its
  own (E, phase 6), and the labels are short enough not to move the duplication
  measure: a six-word label contributes no eight-word runs at all.
- Section spacing rule from CLAUDE.md, mobile responsive at 768px, alt text on
  any diagram, unique meta title and description, no `"use client"` unless the
  print or disclosure UI genuinely needs it.

### D.5 Compliance elements required on the page itself

Guide 1 is closer to the calculator's risk profile than to a charge page's,
because it tells a frightened reader what to do in the next hour.

- Process and rights only. `Guidance` in charge-page.ts already carries the rule:
  "You have the right to decline to answer questions" is process; "do not talk
  and the case will go away" is an outcome claim.
- No outcome claims, predictions, guarantees or comparisons to other firms
  (Fla. Bar R. 4-7.13). No "not guilty verdict" anywhere; the phrase trips the
  `CASE_RESULT` rule in check-pages.mts line 200. Write "acquitted".
- No em dashes in user-facing copy, per CLAUDE.md and the `EM_DASH` rule.
- Byline: `owner` and `lastReviewed`, per plan Section 9.1 and C11.
- A no-attorney-client-relationship notice, adjacent to the guidance rather than
  in the footer, on the same reasoning as plan Section 5.3.
- Never "confidential", never implied Bar approval.
- Urgency framing stays factual. Deadlines, locations and the recorded-line
  warning are facts; fear is not a fact.

---

## E. Phases

Each phase is independently shippable and independently verifiable. Nothing in a
later phase is required for an earlier one to be correct.

### Phase 0. The registry and the gates, with no content

Add `GuidePage`, `guides` (both entries `published: false`, no sections), the
`measuredPages` registry, `guideCopy`, the route, the trail, the sitemap entry,
and the gate changes in Section F. Extract the section primitives.

**Verify:** all five gates green; `check:pages` prints a guide count of 2 and a
written-guide count of 0; the new gates' self-tests print firing on planted
violations. A build produces `/resources/guides/*.html` with the guide title and
nothing else. **Ship value: the gates exist before the content does**, which is
the reverse of how every other page on this site was built.

### Phase 1. Fact layer for guide 2

Fetch and record every "new work" row in C.2. D23 shape: a fetching agent
returns verbatim text and writes nothing; an independent verifier re-fetches and
confirms; the record is written by the main session from the returned text.
Record as **blockquotes**, not inline, because inline text does not reach the
exclusion set (B.2).

**Verify:** `check:unverified` still green; the new citation-provenance gate
(F.3, G2) reports every provision guide 2 intends to cite as recorded; a diff of
PAGE-SOURCES.md shows only additions; the 27 existing pages' duplication rates
are re-derived and any movement is explained before the commit lands (D27).

### Phase 2. Guide 2 written

Written against the boundaries in A.5 and the budget in B.1. Measured per
section, not at the end.

**Verify:** five gates plus the new ones; the pairwise duplication table against
all 27 charge pages **and** against the target letter page, recorded in the
commit message; adversarial review per Section G; attorney read.

### Phase 3. Decide guide 1. Not shippable. Blocking.

A person answers Open Question 1 (does the guide absorb the Bond and Bail
Estimator, or does the estimator keep that ground) and Open Question 2
(interactive or prose). Record the answer in DECISIONS.md. If the answer removes
guide 1's subject, remove it from `tools` with the reason recorded, in D5's
shape.

**Verify:** a decision entry exists. Nothing else changes.

### Phase 4. Fact layer for guide 1

As phase 1, against C.1. **The Hillsborough logistics remain blocked on STATE.md
Q14** and the guide is written without them if they are not cleared. A fetch
that fails means the claim is left off the page, never written with an
unrecorded source; that is the rule check-unverified.mts exists to enforce.

**Verify:** as phase 1. Additionally, AO S-2025-063's expiry date is entered in
the currency queue (plan Section 9.4) at the moment it is recorded, not later.

### Phase 5. Guide 1 written

**Verify:** as phase 2. Additionally, the addressee check: a reviewer reads the
whole guide asking who "you" is in every sentence, because the family-member
track is the differentiator and it fails silently by drifting back to the
accused.

### Phase 6. Wiring and promotion

Repoint the 22 charge pages whose `relatedGuides` currently name the hub at the
specific guide (plan Section 11.1). Flip `published`. Reconsider the primary nav
item under plan Section 11.2, which sets the bar at three assets.

**Verify:** `check:rendered` and its guide equivalent both green after a build;
sitemap contains the guide URLs and only the published ones; every charge page's
duplication rate re-measured after the label additions.

---

## F. Verification

### F.1 What the five gates cover today: nothing

| Gate | Stage | Covers a guide? |
|---|---|---|
| `check:c9` | prebuild | **No, correctly.** Reads `charges` and `CHARGE_C9`. A guide has no sibling charge to be confused with. It should print that it skips guides by design rather than not mentioning them |
| `check:pages` | prebuild | **No, and this is the serious one.** Line 621: `const pages = charges.filter(...)`. Every banned-term rule, the generic-heading rule, the heading-reuse rule, the structural-variation rule, the duplication rule and the reader-question rule are blind to a guide |
| `check:unverified` | prebuild | **No.** Line 366 iterates `charges`. Worse, it is **flag-driven**: it fires only where a brief flagged a subsection UNVERIFIED. The guides have no briefs, so even after the iteration is widened the gate is close to vacuous for them |
| `check:claims` | prebuild | **No,** and extending it buys little. Line 528 iterates `charges`, and line 544 skips any statute key the page does not mention. `STATUTES` contains **no rule tables at all** and no table for 3161, 3282, 3293, 3142, or Fed. R. Crim. P. 5, 11 or 32. Every provision both guides are built on is outside it |
| `check:rendered` | postbuild | **No.** Line 38: `charges.filter(c => c.sections?.length)`. No HTML file is opened for a guide |

**Five gates, zero coverage.**

### F.2 A live hole worth fixing in the same pass

`check-pages.mts` line 621 filters `&& !c.c9Exempt`. The run prints **"Written
charge pages: 27"** against 29 written pages. `/federal-criminal-defense/target-
letter-defense` and `/white-collar-defense/corporate-fraud` are excluded from
the six checks that iterate the filtered list: banned terms, generic headings,
heading reuse, structural variation, duplication and reader-question coverage.
Two checks in the same file iterate `charges` unfiltered and do still cover
them, the section-payload rendering check and the FAQ provenance check.

D15 says the exemption excuses the target letter page "from the statute-parse
check only," and requires it to carry a populated C9 precisely because it claims
verified substance. `check-pages.mts` excuses it from six unrelated checks. That
is the two-states-one-label failure D15 exists to prevent, arriving in a
different file.

**Why it matters here specifically.** The target letter page is 4,967
non-compelled runs of federal pre-indictment procedure. It is guide 2's nearest
neighbour on the site and its largest single duplication risk, and it is
currently invisible to the measure. **Fix the filter so `c9Exempt` suppresses
only the C9 check, in the same commit as the registry.**

### F.3 The new gates

House convention, from check-pages.mts's header and from D24: every gate is
preceded by a self-test that plants the violation and asserts it fires. All four
below carry one.

**G1. Registry completeness. `check:pages`, extended.**
After a build, enumerate `.next/server/app/resources/guides/*.html` and assert a
one-to-one correspondence with `guides`. A guide route that exists without a
registry entry is a page outside every gate; a registry entry with no route is a
link to a 404. This is the D24 rule applied to the page list itself rather than
to a page's contents: read the artifact, not the data.
*Self-test: a synthetic route name not in the registry must fail.*

**G2. Citation provenance. New file, `check:provenance`.**
For every rule, statute or Justice Manual citation extracted from a guide's copy
by the existing `refs()` parser in check-unverified.mts, require a record in
PAGE-SOURCES.md at least as specific as the citation. **Positive requirement,
not flag-driven**, which is the difference from check:unverified and the reason
it is a new gate rather than a widened one. Guides have no briefs; nothing else
can arm this.
*Self-test: a planted citation of a subsection with no record must fail; a
planted citation whose record exists must pass.*

**G3. Truncation detector. Part of `check:provenance`.**
This is the direct mechanical answer to trap 5 and to D25's finding that naming
a defect in the prompt does not prevent it. Four of seven repair agents
committed the named defect **while fixing it**; the only thing that caught all
four was an independent reader. A gate is cheaper than a reader and does not get
tired.

For every quoted span on a guide (text between quotation marks, or the `body` of
a `statute` section, longer than 12 words):

```
1. Locate the span verbatim in the compelled corpus (PAGE-SOURCES blockquote
   lines plus audited table `quote` fields). Not found -> FAIL, the quote is
   not from the record.
2. Found. Look at the recorded text immediately following the span.
3. If the page presented the span as a complete sentence (it ends with a period
   inside the quotation) and the record continues with anything other than a
   sentence boundary, FAIL: the quote stops mid-sentence and is presented as
   whole.
4. If the span ends at a genuine sentence boundary but the record's NEXT
   sentence begins with a limiter -- "unless", "except", "provided that",
   "but", "however", "This subsection does not", "Notwithstanding" -- WARN and
   name the following sentence in the output.
```

Step 4 is the fourteen-page Rule 3.134 failure expressed as a rule. Those pages
quoted the release dates and stopped one clause before "unless the state files
formal charges by that date." It is a warning rather than a failure because a
guide may legitimately stop before a limiter it discusses separately, and a gate
that cannot be satisfied gets routed around (D21).
*Self-tests: the actual pre-fix Rule 3.134 sentence must FAIL step 3; the
current post-fix sentence must pass; a quote ending immediately before "unless
the state files formal charges by that date" must WARN.*

**G4. Closed-set detector. Part of `check:provenance`.**
Trap 4 has failed at least six times on this project, twice inside the fix for
itself. Extend the `EXHAUSTIVE` rule in check-claims.mts (line 53) from statute
keys to rule and USC citations, and add counting language: a cardinal number
followed by a plural noun ("three ways", "the two tracks", "both limbs", "all
four"), plus "only", "every", "all", "none", "no other", "always", "never". Fire
unless the cited provision is recorded as read whole. **PAGE-SOURCES.md records
whether a provision was read whole in prose, not in a field**, so this gate needs
a machine-readable marker on the record. Adding one is part of phase 1.
*Self-test: "the rule names two tracks" against a provision not recorded whole
must fail.*

**G5. Rendered-guide check. `check:rendered`, extended.**
Same D24 reasoning as the charge pages, one difference. `check-rendered.mts`
samples, because "the point is to catch a whole channel going missing, not to
diff prose." **Do not sample the quoted provisions.** For a guide, every quoted
statutory span must be found in the built HTML in full, because a guide's
quotations are its factual core and a dropped clause is a wrong statement of law
rather than a formatting slip. Sample everything else.

Keep the existing skip-with-notice behaviour when `.next` is absent, but only
after G1 has asserted the route exists; otherwise "the guide is not built" and
"the guide contains none of its provisions" produce the same green run.

### F.4 What none of this covers, stated so nobody reads the green run wrongly

The banned-term rail is a word list. Its own header records that independent
testing planted 16 realistic Rule 4-7 violations and it missed all 16.
`check:claims` will remain silent on both guides because their provisions have
no audited tables, and building rule tables is not sensible: the tables record
provisions that assign a degree, and procedural rules assign none. That is the
same finding as the seal and expunge concept's, from the other direction.

**Compliance on these two pages rests on the attorney read, and legal accuracy
rests on Section G.** Everything above narrows the surface where an error can
hide. It does not close it.

---

## G. Adversarial review

### G.1 The design rule

**Open every provision the guide cites, read to the end of the subsection, then
read one sentence further.** Never review from a findings list. D25 measured
what happens otherwise: the drug possession repair quoted Rule 3.191(a) out of a
findings list, having opened no source at all, and disclosed that in its own
`basis` field while the prompt in front of it said the basis must quote words
read in a source opened that session.

Three stages, three independent agents, none of which edits anything. Edits come
back as exact old and new pairs and are applied programmatically, so the main
session composes no legal prose (D23, D27). If any agent writes to the tree, the
file is rebuilt from the last known-good commit plus the vetted edit list rather
than trusted (D27).

**Stage 1, provenance.** For every quoted span: does it appear verbatim in a
recorded blockquote, and was the provision read whole? Returns a per-span
verdict with the recorded text quoted back.

**Stage 2, truncation.** Fetches each cited provision **itself**, from the source
in the record, and reads past the end of every quoted span. Returns, per span,
the next sentence in the source and a judgment on whether it changes what the
page's sentence means. This is the stage that catches the defect the other two
cannot, and it is the stage that must never be cut when a round looks small.

**Stage 3, closed sets, addressee and compliance.** Counts every count. Every
"only", "both", "every", "all", "none", "the three", "two ways". Checks that
"you" means the same person throughout. Checks Rule 4-7.13: no outcome claims,
no predictions, no guarantees, no firm superiority, no case results, no
"confidential", no implied Bar approval. Checks that guidance is process and
rights rather than advice.

Posture: **refute by default**. A finding survives only if the agent cannot
refute it from the source. Where a claim can fail in more than one way, give
each verifier a distinct lens rather than running the same check three times.

And verify the finding before repairing to it. D25's closing note: a review
round reported four hrefs to an unwritten page; there were three. A repair aimed
at a miscounted finding is a fresh error with a citation attached.

### G.2 The provisions most likely to be truncated, ranked

Ordered by the product of how likely the truncation is and how wrong the result
would be. Every entry names the text that gets dropped.

**Guide 1**

1. **Rule 3.134(a)(2)(A) and (B), and (b)(1)(A).** The dropped words are
   **"unless the state files formal charges by that date."** This failed on
   fourteen pages. Both limbs carry the condition; an earlier draft carried it in
   (A) and dropped it in (B), which told a reader whose charges were filed on day
   39 that the court must release on day 40. Also **(a)(3)**: "in no event may
   any defendants remain in custody beyond 40 days **unless they have been
   formally charged with a crime**."
2. **Rule 3.134(a)(1) and (b)(1), the start date.** The clocks run from arrest
   **"or from the date of the service of capiases on them."** A person served
   with a capias rather than arrested has been given the wrong start date every
   time this is dropped.
3. **Rule 3.134(b)(2).** The motion requirement belongs here, to a **different
   remedy** on the not-in-custody track, and not to (b)(1). Conflating them
   tells a reader that the automatic release requires a motion, or that the
   bail-conditions release happens automatically. It was omitted entirely from
   an earlier draft.
4. **Rule 3.191(a), the opening.** **"Except as otherwise provided by this rule,
   and subject to the limitations imposed under subdivisions (e) and (f)."**
   Pages quoted this rule from the middle. Also its **closing**: the periods
   "shall commence when the person is formally charged with a crime as defined
   under subdivision (d)", and the sentence routing to the **(o)** remedy, whose
   absence turns an interval into a case-ending deadline.
5. **Rule 3.111(a), the opening.** **"A person entitled to appointment of
   counsel as provided herein."** The subdivision sets WHEN a person already
   entitled to counsel gets it, at the earliest of three events. It confers
   nothing. Entitlement is (b)(1).
6. **Rule 3.111(b)(1), the second sentence.** The no-incarceration order, the
   15-day requirement, and the third sentence saying the 15 days may be waived
   by the defendant or defence counsel. A flat "you will be given a lawyer" is
   wrong for that whole class of case.
7. **Rule 3.130(a), the opening carve-out.** **"Except when previously released
   in a lawful manner."** On a guide about release, this is the clause that
   decides whether the reader is in the sentence at all.
8. **Rule 3.130(c)(1)** is four sentences. The last one, appointment "for the
   limited purpose of representing the defendant only at first appearance," is
   the one that gets dropped and it is the one a first-day reader most needs.
9. **F.S. 903.047(1)(b).** The definition's own qualifier, **"unless otherwise
   specified by the court"**; subparagraph 3's **"even if the defendant and the
   victim or other named person share the residence"**; and the two carve-outs
   inside subparagraph 1, for a third person facilitating contact with children
   and for defence counsel.
10. **AO S-2025-063.** Section 4 amounts quoted without section 2's exclusion
    list, and without the order's own sentence that the schedule "applies only
    to the booking officer" and does not bind a judge at first appearance. Also
    the expiry date, 2026-12-31.
11. **Rule 3.131 and Rule 3.132**, unrecorded today and therefore unmeasured.
    Treat every subdivision as a truncation candidate until a verifier has read
    each one whole.

**Guide 2**

1. **18 U.S.C. 3161(b), the SECOND sentence.** "If an individual has been
   charged with a felony in a district in which no grand jury has been in
   session during such thirty-day period, the period of time for filing of the
   indictment shall be extended an additional thirty days." Pages kept dropping
   it. It is recorded at PAGE-SOURCES.md line 1187 precisely because it was
   dropped.
2. **18 U.S.C. 3161(h).** Not a truncation of a sentence but of a subsection,
   and the worst available error on this guide. A "70 days to trial" sentence
   with no excludable time is the federal twin of the fourteen-page Rule 3.134
   failure: it tells a reader a date is a deadline when it is not.
3. **18 U.S.C. 3161(c)(1), the closing.** **"whichever date last occurs."**
   Drop it and the interval starts at the wrong event.
4. **18 U.S.C. 3162.** The sanction. Omitting it entirely is the structural
   analogue of omitting Rule 3.191(o), and the state side has already made and
   corrected that error.
5. **18 U.S.C. 3282(a), the opening.** **"Except as otherwise expressly provided
   by law."** And the fact that the section is **not one sentence**: subsection
   (b) exists, with paragraphs (1) to (3). PAGE-SOURCES.md line 1392 records that
   a page's FAQ quoted (a) as though it were the section.
6. **18 U.S.C. 3293, the flush closing clause.** "unless the indictment is
   returned or the information is filed within 10 years after the commission of
   the offense." The ten years sits **after** the three numbered paragraphs and
   is easy to lose. Also paragraph (3), which the page it was recorded for had
   never mentioned, and the fact that the ten years is written to a conspiracy
   as well as to a violation.
7. **18 U.S.C. 3142(f), the continuance sentence.** Recorded at PAGE-SOURCES.md
   line 1985 as an explicit trap: the sentence **does not end at "detained."** Any
   quotation stopping there is a partial sentence and needs an ellipsis, not a
   period.
8. **18 U.S.C. 3142(e) and (g),** unrecorded. The presumption and the factors.
   Treat every paragraph as a candidate.
9. **JM 9-11.151.** Two places. The opening qualifier **"Notwithstanding the
   lack of a clear constitutional imperative, it is the policy of the
   Department"**, which is what makes it policy rather than law, and the closing
   fallback about a separate letter when a district court insists the notice not
   be appended.
10. **Fed. R. Crim. P. 11 and 32**, unrecorded, long, and heavily subdivided.
    Rule 11(c)(1)'s prohibition on judicial participation in plea discussions
    and Rule 32's disclosure timings are the sentences a summary loses.
11. **18 U.S.C. 3553(a).** The list is introduced by a chapeau containing the
    parsimony clause, and quoting the factors without it inverts what the
    subsection does.

### G.3 Two probes that are not provisions

- **The addressee probe.** Read guide 1 and answer, per sentence, who "you" is.
  The family-member track is the differentiator and it fails by drifting, not by
  breaking.
- **The number-that-improved-itself probe.** After any change to PAGE-SOURCES.md
  or to `COMPELLED_PHRASES`, re-derive the duplication rate for all 27 charge
  pages. D27: a number that gets better on its own is not good news, it is a
  question, and the answer is always that something changed that you did not
  change.

---

## Assumptions

1. **Reconstructed prompt text.** The brief arrived with several fragments
   truncated. They were read as: Rule 3.134's condition is "unless the state
   files formal charges by that date"; Rule 3.111(b)(1) "carries a
   no-incarceration order exception"; trap 4 concerns closed sets, any count or
   any word implying completeness; new fact-layer work "must be scheduled"; D24
   requires a gate to read the rendered artifact "not the data behind it"; and
   the phrase "not guilty verdict" trips a banned-term gate. Each reconstruction
   was checked against the repository before being relied on, and each is
   confirmed there: the condition at PAGE-SOURCES.md lines 83 and 1753, the
   no-incarceration order at lines 674 and 1603, D24 at DECISIONS.md line 812,
   and `CASE_RESULT` at check-pages.mts line 200.
2. Both guides stay `published: false` until the fact layer, the gates, the
   adversarial review and the attorney read are all complete. Nothing in this
   document changes the publication posture of anything.
3. The Florida Bar compilation of 2026-07-13 remains the source for the Rules of
   Criminal Procedure, at the corrected `/uploads/2026/08/...-2.pdf` address,
   fetched with a browser user agent and extracted locally with `pdftotext
   -layout`. A bare request 403s.
4. `uscode.house.gov` is the source for the United States Code (D2).
   `justice.gov` is procedure and DOJ policy only, never for what a statute says.
   Fed. R. Crim. P. text is taken from the title 18 appendix on uscode.house.gov,
   which is how Rule 6 was recorded.
5. Measurements assume `pageCopy` extracts everything a reader sees. That
   assumption is the one D24 falsified once, which is why G5 exists.
6. The 5% limit and the eight-word window are treated as fixed. Nothing in this
   document proposes moving either, and a proposal to move them should be read
   as a proposal to stop measuring.

## Open questions

1. **Does guide 1 absorb the Bond and Bail Estimator, or does the estimator keep
   the release ground?** Blocking for phases 3 through 5. DOSSIER.md item 233 and
   tools-and-hooks.md Section 2.5 both say the walkthrough folds into the
   first-24-hours asset and is not built standalone, but `tools` still lists the
   estimator as its own entry with a description that is the same ground. Two
   assets cannot own one query (D1). **Recommendation: the guide absorbs it, and
   the estimator entry is either removed or narrowed to a cost widget inside the
   guide.**
2. **Interactive or prose?** tools-and-hooks.md says the format is the
   differentiator and that no US law firm interactive arrest checklist was found.
   Prose is safer against D24, against Op. 24-1, and against Rule 4-1.18.
   **Recommendation: prose with a print stylesheet at v1, and record that the
   format differentiator is being deferred rather than abandoned.**
3. **Is STATE.md Q14 clearable?** The uniform bond schedule amounts, the HCSO and
   Orient Road first-appearance logistics. Guide 1 is materially weaker without
   them and must be written without them if they are not verified. Who is asking
   the attorneys, and by when?
4. **Are M.D. Fla. local practice facts obtainable to this project's standard?**
   Typical scheduling intervals in the Tampa Division are the thing that would
   make guide 2 unmatched, and they are the thing least likely to exist in a
   citable source. If the answer is no, guide 2 is built entirely on statute and
   rule, which is still ahead of every competitor page found, and the local layer
   is limited to the courthouse, the divisions, and the offices.
5. **Should the `c9Exempt` filter in check-pages.mts be narrowed in this
   workstream or its own?** It is a live gap on two published-pending pages and
   it is not caused by the guides. Narrowing it may surface findings on the
   target letter page that have nothing to do with this work.
6. **Does `check:provenance` belong in `prebuild` or in `postbuild`?** It reads
   source records and page data, so prebuild is natural, but G3's truncation
   check is the most expensive gate proposed here and prebuild runs on every
   build.
7. **Who owns the currency entry for AO S-2025-063?** It expires 2026-12-31 by
   its own terms, and a page resting on an expired administrative order is a
   Rule 4-7.13(a)(1) accuracy problem rather than a staleness problem.
