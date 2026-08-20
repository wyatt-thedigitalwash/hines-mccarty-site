# Record Sealing and Expungement Eligibility Checker: concept

Written 2026-08-19. Concept only. No code, no changes under `src/`.
Corrected 2026-08-20 after the D28 adversarial round: hostile fact pattern 6
(the battery degree), and three low-severity items in the same-day pass (the
B.1 fetch-date framing, the C.1 hub-behavior claim, and the A.3
passes-by-construction attribution); see docs/build/tools/REVIEW-2026-08-20.md.
Every other audited claim in this document survived verification (105
checked).

Sources read for this document: CLAUDE.md; docs/build/DECISIONS.md, D1 through
D27 in full; docs/build/CASES-WE-DEFEND-PLAN.md, Sections 4.2, 4.5, 4.6, 5.1
through 5.7, 7, 10.3; docs/research/STATE.md; docs/research/PAGE-SOURCES.md, the
sealing and expunction records at lines 133-174, 511-594, 1588-1594, 1772-1810,
1831-1885, 1938-1955, 2055-2095; src/lib/statute-tables/fs-943-059.ts,
fs-943-0584.ts, fs-943-0585.ts, fs-943-0435.ts, fs-775-21.ts;
docs/research/tools-and-hooks.md; docs/research/briefs/TOOLS.md;
docs/research/content-gaps.md Topic 8 and item 19; docs/research/avoid.md items
14, 30, 31, 32, 38, 39; docs/build/WEBSITE-PLAN.md Section 5;
scripts/check-c9.mts, check-pages.mts, check-unverified.mts, check-claims.mts,
check-rendered.mts; src/lib/site.ts `tools`, `Tool`; src/lib/page-copy.ts;
src/app/resources/tools-and-guides/page.tsx; package.json.

---

## 0. The verdict, first

**The tool as named and described should not be built. Three of its four load-
bearing premises do not survive contact with this repository.**

What should be built instead, and what this document specifies, is a **statutory
requirement walkthrough**: a page that sets out what F.S. 943.059 requires,
quotes every operative provision from a recorded fetch, and renders **no
judgment about the reader's own record at all**. Interactivity, if it is ever
added, is a one-directional self-check that can mark a requirement **unmet** and
can never mark a record **eligible**.

The three premises that fail:

**Premise 1: "sealing eligibility is genuinely rule-based."** Half true, and the
half that fails is the half a checker needs. A **disqualifying** finding is
soundly derivable from an audited row: a conviction for aggravated assault is
barred by F.S. 943.0584(2)(g), full stop. A **qualifying** finding requires
asserting that a record is **not** on the list at (a) through (hh), and the
audited table's own `unread` field says that assertion cannot be made:

> "Paragraph (2)(hh) is an open-ended catch-all that cannot be applied at all
> without reading those two lists in full. The set of offenses barred by this
> section is therefore NOT closed by paragraphs (a) through (gg)."
> -- src/lib/statute-tables/fs-943-0584.ts, `unread`

The eligibility answer is not symmetric. The tool can soundly say no. It cannot
soundly say yes. Everything below follows from that one asymmetry.

**Premise 2: "this project already has independently audited statute tables for
it."** It has one, F.S. 943.0584, and it is genuinely excellent: 36 rows,
whole-section, PASS verdict, every disqualifying paragraph carrying its verbatim
words. It does **not** have the others. `fs-943-059.ts` carries **two rows**,
both penalty provisions (false swearing on the sworn statement, and an
employee's unlawful disclosure). Not one of the eligibility conditions in
943.059(1) is a row in it, because the tables record provisions that assign a
degree and eligibility conditions assign none. `fs-943-0585.ts` is the same
shape: two penalty rows, nothing about who may expunge. The sealing conditions
survive because they were separately fetched into PAGE-SOURCES.md. **The
expunction conditions were not.** See Section B.

**Premise 3, implicit in the brief: that this is the strongest tool candidate.**
Tested below in Section A.1, and it does not hold. Every research file in this
repository that graded it put it last or near last, W5 never evaluated it at
all, and TOOLS.md's not-recommended table bars its class by name.

**What survives, and it is worth real money.** The correction content is
genuinely valuable and genuinely absent from the market. Ordinary readers are
wrong about this subject in at least six specific, documented ways, and the
firm's own repository has verbatim text for every one of them. A page that says
so plainly beats a checker that answers a question it cannot answer.

---

## A. Concept

### A.1 Testing the claim that this is the strongest candidate

The brief asks me to test the claim rather than accept it. Here is what this
repository already recorded, before this document existed.

| Source | Verdict on sealing and expungement |
|---|---|
| docs/research/content-gaps.md, Topic 8 | "**COVERED-WELL, the most crowded of the eight.**" Sammis holds a Hillsborough-specific seal/expunge page, verified fetch, updated March 2026, carrying statutes, Rules 3.692-3.694, Admin Order S-2020-014, exact clerk fees, and e-portal instructions, inside a county-page silo. |
| content-gaps.md, opportunity ranking | **8th of 8.** "(8) sealing/expungement (crowded, lowest priority)." |
| docs/research/DOSSIER.md, item 16 | "**Deprioritized, build last if at all.**" |
| docs/research/tools-and-hooks.md (W5) | **Not evaluated.** W5 assessed six candidate tools with demand evidence, precedent, compliance, and effort-versus-payoff for each. This tool is not one of the six. It has never had the evaluation every other tool on this site has had. |
| docs/build/WEBSITE-PLAN.md, Section 5 | Fourth of four. Partially reversed from "build last," and the stated reason it stays fourth is **lead quality**: "It draws low-value inquiries that compete for intake attention with federal and serious-felony matters." |
| docs/research/briefs/TOOLS.md, "What is explicitly not recommended," row 1 | "A '**does my case qualify' eligibility checker of any kind**, for diversion, PTI, or otherwise." |

Two of these need care rather than a citation.

**The TOOLS.md row.** TOOLS.md line 7 says assets already in the plan, "the seal
and expunge checker" among them, "are not re-argued and not re-ranked." That
exemption is about **demand ranking**, which is what TOOLS.md's body does. The
not-recommended table is not a ranking; it is a design prohibition, and its
stated ground reaches this tool exactly: an asset that "collects case facts,
returns an answer about the reader's own situation." The same document, at
recommendation 5, applies that ground to a state-or-federal decision tree and
concludes: "**Do not build that.** It collects case facts, it produces an answer
about the reader's own situation, and even done client-side it invites the
prospective-client expectation Rule 4-1.18 and Op. 24-1 describe... **Build the
guide, not the tool.**" Every word of that reasoning transfers. This is a live
conflict between two plan documents and it needs a decision, not an
interpretation. See Open Question 1.

**The lead-quality objection gets worse, not better, with a better tool.** This
is the strongest argument against the asset and it is not a legal or technical
one. A checker that works well produces more of the inquiries the plan says the
firm does not want, sorted no better than a page would sort them. Nothing in
this design fixes it. It is a client decision.

**What genuinely counts in favor**, recorded fairly:

- The traps are real and readers do get them wrong. F.S. 943.0584(1) makes a
  withheld adjudication a conviction; misdemeanor domestic battery is
  permanently disqualifying while felony grand theft is not; the one-use rule at
  943.059(1)(e) is a lifetime bar; and 943.0595 seals some records with no
  petition at all. keywords.md line 397 independently names "the two-prior-
  withhold limit" and sealing eligibility as the content that could compete.
- There is verified precedent for the asset class. tools-and-hooks.md Section 1
  records L&L Law Group PLLC running an **expunction eligibility checker** among
  four client-side tools, "entirely client-side JavaScript with no logging and
  no email capture," and calls that suite "the model to copy."
- The 943.0584 table is the best single piece of source data this repository
  holds for any tool. It is whole-section, audited, and every row carries the
  verbatim paragraph.

**Conclusion.** The subject matter deserves a page. It does not support a
checker, and the case for the checker rests on data the repository does not have
and on a demand ranking every research file in it contradicts.

### A.2 What the tool actually outputs

The brief poses the design question directly: is "you are eligible" the right
output at all, versus "here is what the statute requires and which requirement
your answers did not meet." I recommend the second, with one refinement that
matters more than the choice between them.

**Recommended output: a requirement ledger, one-directional.**

The reader sees the five conditions in F.S. 943.059(1), the bar in 943.0584, the
certificate step in (2), and the one-arrest rule in (4)(c), each stated in the
statute's own words. Where an answer the reader gave contradicts a requirement,
that requirement is marked, in plain terms, with the words that decide it:

> **F.S. 943.059(1)(b) is not met on what you entered.** The statute reads: "The
> person has never, before the date the application for a certificate of
> eligibility is filed, been adjudicated guilty in this state of a criminal
> offense..." You entered a Florida conviction. The condition is "never," and
> it has no time limit.

Where nothing the reader entered contradicts anything, the tool says what is
true and no more:

> **Nothing you entered is inconsistent with the conditions this page checks.**
> That is a statement about this page, not about your record. This page checks
> the conditions in F.S. 943.059(1), the offenses listed in F.S. 943.0584(2)(a)
> through (gg), and the one-arrest rule in F.S. 943.059(4)(c). It does not and
> cannot check F.S. 943.0584(2)(hh), which reaches any offense that is a
> predicate for registration under F.S. 775.21 or F.S. 943.0435 "without regard
> to whether that offense alone is sufficient to require such registration." An
> attorney reads that paragraph against the actual record. This page does not.

That is the whole design. It is not a hedge on a verdict. **There is no verdict.**

### A.3 Why the middle option fails

WEBSITE-PLAN.md Section 5 already made a call on this: "output is 'you appear to
meet / not meet the statutory criteria,' never 'you are eligible.'" That is a
real improvement on "you are eligible" and it is not enough. Three reasons:

1. **It does not fix the accuracy problem, only the phrasing.** "You appear to
   meet the statutory criteria" is still a claim that the record is not on a
   list the repository cannot close. Softening the verb does not make an unsound
   inference sound. `check-claims.mts` already encodes exactly this principle for
   page prose: rule 2 bars an exhaustive claim over a partial reading, because
   "a negative cannot rest on a partial reading." The favorable answer here is a
   negative resting on a paragraph the audited table says cannot be applied
   without reading two lists in full.

2. **"Appear to meet" is heard as "eligible," and "eligible" is heard as "you
   will get it."** That is the Rule 4-7.13 problem, and F.S. 943.059(4)(e) is
   the provision that makes it a problem rather than a quibble: "This section
   does not confer any right to the sealing of any criminal history record, and
   any request for sealing of a criminal history record may be denied at the
   sole discretion of the court." A tool that hands a reader a favorable
   statement and then disclaims it is asking a disclaimer to do work a design
   choice should have done. Rule 4-7.13(b)(1) bars anything a prospective client
   "can reasonably interpret as a prediction or guaranty of success or specific
   results," and the reasonable interpretation of a favorable eligibility output
   from a law firm's own tool is that the firm thinks the petition will succeed.

3. **The tension the brief calls the central design question dissolves rather
   than being managed.** With no favorable verdict there is nothing to be heard
   as a prediction. The compliance rails stop being a set of things bolted onto
   an output and become a description of what the output already is. That is the
   difference between the sentencing calculator, which needs C1 through C8 to
   hold a number in check, and the offense-level comparison instrument, whose
   no-predictive-framing criterion, C1, TOOLS.md marks "Passes by construction"
   because its output is a statutory classification rather than a prediction.
   C2 through C8 remain required for that instrument too; TOOLS.md concludes
   "all eight are satisfiable," not passed. This design puts the sealing tool
   in the same category on the C1 axis. [Corrected 2026-08-20; the original
   attributed passes-by-construction to the whole gate.]

**The honest summary of A: the compliance answer and the accuracy answer are the
same answer.** The tool must not produce a favorable eligibility verdict, and
the reason it must not is not primarily that the Bar rule is uncomfortable. It
is that the repository cannot support one.

### A.4 How the design survives each named trap

| Trap | How this design survives it |
|---|---|
| **1. 943.0584(2)(hh), the residual catch-all.** A checker that enumerates disqualifiers and misses it tells ineligible people they are eligible. | **Structurally, not by remembering to include it.** The design produces no favorable verdict, so it never needs the list closed and (hh) cannot be the paragraph that silently makes an answer wrong. In addition: (hh) is rendered last, in full, including the closing clause "without regard to whether that offense alone is sufficient to require such registration," which is what removes the intuitive limit. Gate T1, T2, T3 in Section E enforce presence, position, and completeness against the audited row's own `quote`, so a rewrite that deletes it fails the build rather than a review. |
| **2. 943.059(1)(b) and the word "never."** | The paragraph is quoted whole and the two prongs are separated on the page, because PAGE-SOURCES.md line 590 records that they are two different bars: the adult prong is "never... adjudicated guilty in this state of a criminal offense," any offense, no list, and the thirteen misdemeanors qualify only the juvenile prong. Consequences for the design: **no date range is ever offered as an input for (1)(b)**, because offering one implies a window the statute does not have; the question is asked as "ever, in Florida"; and the cutoff shown is "before the date the application for a certificate of eligibility is filed," not the petition date. Gate T4 asserts the exact span, so a rewrite cannot keep "never" while dropping "in this state" or moving the cutoff. |
| **3. 943.059(4)(c), the exception inside the sentence after "only."** | Rendered as one uninterrupted block of all four sentences, never summarized, never excerpted. This provision has already been truncated once in this repository, at exactly that word: PAGE-SOURCES.md line 1778 records a repair agent filing a "SOURCE CONFLICT" warning that turned out to be someone else's truncated quotation. Gate T5 asserts both the "only, except..." span and the fourth sentence, in two separate assertions. |
| **4. 943.059(2), the certificate of eligibility, valid 12 months.** | It is not a footnote and not a next-steps afterthought. It appears on **every** path, including the unfavorable one, because it is the next step regardless of what the reader entered, and it carries the $75 fee, the certified disposition requirement, the 12-month validity, and the reapplication sentence with its rule that "the status of the applicant and the law in effect at the time of the renewal application determine the petitioner's eligibility." F.S. 943.059(4)(b) travels with it: the court may not order sealing until the certificate has been applied for and received. Gate T6. |
| **5. 943.059(4)(e), no right, sole discretion.** | This is the **frame**, not the disclaimer. It sits above the requirement ledger, with Rule 4-7.12(d) presentation (equal or greater prominence, close proximity, same or larger text, not fine print, not footer-only, per plan Section 5.2). Gate T7 asserts both presence and **position**: its index in the rendered text must precede the first requirement result. A disclosure below the thing it qualifies is the exact failure 4-7.12(d) names. |
| **6. Federal convictions.** | A scope screen is the **first** thing, and a federal case terminates the tool with a scope statement rather than a result. PAGE-SOURCES.md line 1836 records the basis: F.S. 943.0584(2) names exactly two routes, expunction under 943.0585 and sealing under 943.059, and "the subsection names those two routes and speaks to no others." Both are Florida court-ordered. Op. 00-4 separately requires the Florida-law-only scope statement. Gate T8 asserts the scope sentence and, separately, that no page under `/federal-criminal-defense` links to the tool, reusing the standing rule in plan Section 4.2 that already keeps federal pages away from the Criminal Punishment Code instrument. |

---

## B. Data model

### B.1 What exists, row by row

Everything in this table is either an audited row or a recorded verbatim fetch.
Nothing else may be asserted.

**Audited statute tables** (src/lib/statute-tables/, PASS verdict, D19):

| Rows relied on | File | Status |
|---|---|---|
| `943.0584(1)`, the conviction definition including the juvenile limb | fs-943-0584.ts | Audited row, whole-section |
| `943.0584(2)`, the operative bar and its flush language | fs-943-0584.ts | Audited row |
| `943.0584(2)(a)` through `(2)(hh)`, all 34 paragraphs | fs-943-0584.ts | Audited rows, each carrying its verbatim quote |
| `943.0584(2)(hh)` specifically, with the closing clause | fs-943-0584.ts | Audited row, and the table's own note that the list is not closed |

Total 36 rows. This is the tool's factual core and it is in good shape.

**Recorded verbatim fetches** (docs/research/PAGE-SOURCES.md):

| Provision | Line | Note |
|---|---|---|
| F.S. 943.059(1), opening flush words | 560 | |
| F.S. 943.059(1)(a) | 564 | |
| F.S. 943.059(1)(b), lead-in plus all thirteen subparagraphs | 568 **and** 2095 | Two independent fetch records, both dated 2026-08-14, agreeing |
| F.S. 943.059(1)(c) | 572 | Plus the analysis at 584 that (1)(c) turns on adjudication, not on the 943.0584(1) definition |
| F.S. 943.059(1)(d) and (1)(e) | 576 | |
| F.S. 943.059(2) flush, (2)(a)1.-3. including the $75 fee, and (2)(b) | 1591 | |
| F.S. 943.059(2)(a)1. and (2)(b) | 580 | Second record |
| F.S. 943.059(2)(b), 12-month validity and reapplication | 1808 | Third record |
| F.S. 943.059(4)(c), all four sentences | 1794 | With the refused-record note at 1778 |
| F.S. 943.059(4)(e) | 1801 **and** 1885 | 1885 additionally records (4)(b), the certificate precondition, **as a description rather than a quotation** |
| F.S. 943.0584(1) | 1878 | |
| F.S. 943.0584(2) flush and (2)(f) | 1836 | Including the two-routes-and-no-others finding |
| F.S. 943.0584(2)(v), (ff), (gg), and the absence of 812.014 | 154-163 | Table of targeted re-fetches |
| F.S. 943.0595, automatic sealing, whole section: (1), (2)(a), (2)(b), (3)(a)-(d) | 515-533 | Retrieved with curl and stripped locally rather than through a summarizing fetcher |
| F.S. 943.0435(1)(h)1., all four routes, with the a.(I) enumeration in full | 2074 | |
| F.S. 943.0583(2), human trafficking victim expunction, operative sentence | 1843 | Subsection (2) only |

**Analytical findings already recorded**, which the page copy may rest on because
each is traced to one of the above:

- 943.059(1)(b) is two bars, and the thirteen misdemeanors attach only to the
  juvenile prong (line 590).
- Both prongs of (1)(b) are state-limited and the cutoff is the certificate
  application date (line 592).
- 943.0584(1)'s expanded conviction definition is scoped "As used in this
  section" and does **not** travel into 943.059(1)(c). A withheld adjudication
  does not trip (1)(c) (line 584).
- The same definition does mean a withheld adjudication on a **listed** offense
  still makes the record permanently ineligible (line 586).
- The unit of sealing is one arrest or one incident, not one count (line 588).
- The two lists use different cites for same-sounding offenses and must not be
  merged into one table: arson is 806.031(1) in 943.059(1)(b)10. and 806.01 in
  943.0584(2)(p); assault and battery are bare in (1)(b) and domestic-only in
  (2)(f) (line 594).

### B.2 What does NOT exist, and is therefore fact-layer work that must be scheduled

Nine gaps. Each is stated as work, not as an assumption, per the project's rule.

**1. F.S. 943.0585(1)(a) through (h), the expunction eligibility conditions.
Nothing. No row, no fetch record, no brief.** `fs-943-0585.ts` carries two rows
and both are penalty provisions. A search of PAGE-SOURCES.md for 943.0585
returns three hits and all three are cross-references from other statutes.
**Consequence: the expunction half of this tool, which is half of its name, has
no basis at all.** It cannot ship in the same phase as the sealing half. This is
the single largest finding in Section B and it is the reason Phase 1 below is
sealing-only.

**2. F.S. 943.0585(2), the expunction certificate of eligibility**, including
whether it requires a state attorney's written certified statement that the
sealing counterpart does not. Unrecorded. Blocks the same phase as gap 1.

**3. F.S. 775.21(4)(a)1.b, the sexual predator predicate list, complete.**
PAGE-SOURCES.md line 2067 records (4)(a) **with ellipses** and with a bracketed
paraphrase, "[a comparable list]," standing in for the prior-conviction limb.
Under D26 an excerpt that says it is an excerpt is an honest record and is still
not a basis for a closed-set claim. `fs-775-21.ts` is whole-section but has **no
row at (4)(a)**, because that subsection assigns no degree, and its `unread`
field says the enumerated predicate statutes were not opened. **This is one of
the two lists F.S. 943.0584(2)(hh) points at.** Under the recommended design the
gap is not blocking, which is the design's main practical argument: it is the
only design under which this gap does not have to be closed before anything
ships. Under any design that produces a favorable verdict, it is blocking and
the work is substantial, because closing it means reading roughly twenty
predicate statutes.

**4. F.S. 943.059(3), the petition requirements**, and **(4)(a), (4)(b),
(4)(d)**. (4)(b) is described in a note at line 1885 but never quoted. A
description inside a note is not a fetch record; D26 exists because records get
trusted by writers who did not open the source. Needed for the procedural half
of the walkthrough.

**5. F.S. 943.059(5) and (6), processing and effect of the order**, including
the (6)(b) disclosure exceptions. Unrecorded except for the single penalty row
at (6)(d) in the audited table. This is the most-asked follow-up question on the
subject, "who can still see it," and there is nothing in the repository to
answer it with.

**6. F.S. 943.0515, retention of juvenile records.** Cited inside 943.059(1)(b)
as the unless-clause that undoes a disqualifying delinquency adjudication. Never
fetched. **A tool that asks about juvenile adjudications without this gives a
wrong answer to every reader whose delinquency record was expunged.** Until it
is fetched, the walkthrough quotes the unless-clause and declines to apply it.

**7. F.S. 943.0583, human trafficking victim expunction**, subsections (1) and
(3) onward. Only (2) is recorded. A reader who qualifies under this route is
told nothing by a tool that knows only 943.059.

**8. The Hillsborough procedural layer.** Fla. R. Crim. P. 3.692, 3.693 and
3.694; Administrative Order S-2020-014; the clerk's fee schedule; the e-portal
filing route. **None of it is in this repository.** content-gaps.md Topic 8
records all of it on Sammis's page. This is where the competitive difference
against the incumbent actually lives, it is entirely research rather than
engineering, and STATE.md Q14 means the local figures need human verification
before publishing regardless.

**9. Currency of F.S. 943.0584 itself.** The audited table's `unread` field
says: "NOT READ: the History note's session laws... ss. 42, 72, ch. 2025-156.
**The 2025-156 amendment is recent and I did not verify what it changed.**" The
table was fetched 2026-08-13. A tool whose factual core is a list of
disqualifying offenses cannot ship on a list whose most recent amendment nobody
has checked. This is avoid.md item 39 and Rule 4-7.13(a)(1) in the exact shape
the plan already warned about for the calculator: "an outdated computation is a
materially inaccurate statement." **Blocking for Phase 1.** It is also cheap:
one fetch of the 2025-156 session law.

---

## C. Implementation

### C.1 Route and file layout

Route is fixed by `src/lib/site.ts`: `/resources/tools/seal-expunge-eligibility`.
Do not change it. `published` stays `false` until the phase gate clears.
`publishedTools` filters on it, but note the hub as currently built renders an
empty state and lists no tool names at all; the listed-by-name, never-linked
behavior is recorded intent on the `Tool` type, not current page behavior.
[Corrected 2026-08-20; the original sentence stated the intent as current.]

```
src/app/resources/tools/seal-expunge-eligibility/page.tsx   server component
src/components/tools/SealRequirementLedger.tsx              "use client"
src/lib/tools/seal-expunge.ts                               strings + provisions
```

### C.2 Server versus client, and the rule that makes the gate possible

CLAUDE.md permits `"use client"` only where the component needs interactivity.
That is satisfied here, but the split matters for a second reason, which is D24.

**The page component is a server component and renders every statutory block
unconditionally, on every load, for every reader, regardless of any answer.**
The (4)(e) frame, the scope statement, all 36 disqualifier quotes, the five
conditions in 943.059(1), the (4)(c) block, and the certificate step are all
static output.

**One client island holds only `useState`.** It is a `"use client"` component
whose entire job is to mark which requirements a reader's answers contradict.

**The governing rule: the client island may change what is emphasized. It may
never change what exists.**

Every string the island can ever display is already present in the server-
rendered HTML. The island adds emphasis, ordering, and a marker; it composes no
sentence that is not already on the page.

This is not stylistic. D24's rule is that a gate must read the rendered
artifact, and `check-rendered.mts` implements that by grepping
`.next/server/app/**/*.html`. **A conditionally rendered client branch is
invisible to that method by construction**, which is precisely the shape of the
defect D24 records: `SectionBody` dropped `prose` from any section whose kind
was not `prose`, 1,489 words reached no reader, and every gate passed because
every gate read the data. A tool that assembles its output in the browser
reproduces that hole with the polarity reversed. The rule above closes it, and
gate T10 enforces it.

A consequence: **do not set `export const dynamic`.** The page must be statically
generated so the HTML file exists for the postbuild gate to read.

### C.3 State, and what touches the server

Assume every answer is sensitive. TOOLS.md states the standard for a tool that
takes input, and it is stricter than the calculator's for a reason worth
repeating: "a small number of queries against a Brandon-area IP describes a
specific person's specific case."

- **State lives in one `useState` in one component.** Nothing else.
- **No API route, no server action, no form POST.** Plan Section 5.4.
- **No query string, ever.** A case fact in a URL lands in server access logs,
  browser history, and the Referer header of every request the page makes.
- **No `sessionStorage`, no `localStorage`, no cookie.** Plan Section 5.4's "no
  session persistence of inputs beyond the page view."
- **No analytics event carrying an answer.** A page view may be counted. An
  answer may not be an attribute on it.
- **No autocomplete or typeahead endpoint.** TOOLS.md names this specifically:
  it sends every keystroke server-side "for a convenience nobody asked for."
- **No lead capture and no gate on the output.** avoid.md item 38; STATE.md Q12.
- **The tool is never labeled "confidential."** avoid.md item 31; the Bark
  pattern recorded as OBSERVED-NOT-RECOMMENDED.

**What is logged: nothing about any answer.** Vercel's access log records the
pathname of a static page. That is the entire server-side record, and it is why
the no-query-string rule is load-bearing rather than fastidious.

### C.4 Required on-page elements

Carried from plan Section 5 and tools-and-hooks.md Section 4, with the ones this
tool changes marked.

- The F.S. 943.059(4)(e) frame, above the ledger, at 4-7.12(d) prominence.
- A no-attorney-client-relationship notice adjacent to the ledger, not only in
  the footer. Op. 24-1 and Bartholomew, 611 So. 2d 85: a relationship can arise
  from the user's subjective reasonable belief regardless of the firm's intent.
- Florida-law-only scope statement. Op. 00-4.
- The responsible attorney identified. Op. 00-4.
- The statute year stated on the page: 2025 Florida Statutes, with the fetch
  dates. **Changed for this tool:** the 943.0584 currency note must also record
  that ch. 2025-156 has been checked, per gap 9.
- An attorney-reviewed accuracy note naming the reviewer and the review date,
  attesting the provision list rather than the prose. Plan C7.
- No case results, testimonials, "confidential" label, or implied Bar approval
  anywhere on the page. Plan C8; Rule 4-7.13(b)(10).
- No em dashes anywhere in the copy. CLAUDE.md.
- Unique meta title and description; the page is `noindex` until it publishes.

---

## D. Phases

Each phase is independently shippable and independently verifiable. The phase
numbering starts at 0 because the first thing needed is not a build.

### Phase 0. Decide. Not shippable; prerequisite to everything.

Two conflicts and one business question have to be resolved by a person, and the
output is an entry in `docs/build/DECISIONS.md` so that a settled question stays
settled.

1. TOOLS.md bars "a 'does my case qualify' eligibility checker of any kind"
   against WEBSITE-PLAN.md Section 5 listing this checker as tool 4. One of the
   two documents has to give.
2. WEBSITE-PLAN.md's "you appear to meet / not meet" framing against the
   one-directional design recommended here.
3. The lead-quality objection, which is the client's call and not this
   document's.

D5 is the precedent for the shape of the output: a decision recorded "so the gap
is a decision rather than an oversight."

### Phase 1. The sealing requirement walkthrough. Static. No inputs. No output.

**This is the smallest honest first version, stated plainly:**

> A page that sets out the five conditions in F.S. 943.059(1), the bar in F.S.
> 943.0584 with all 34 paragraphs shown and (hh) shown last and in full, the
> certificate-of-eligibility step in F.S. 943.059(2), the one-arrest rule in
> F.S. 943.059(4)(c), and F.S. 943.059(4)(e) at the top. Every provision quoted
> from a recorded fetch or an audited row. **No form, no inputs, no output, and
> nothing on the page that is about the reader.**

What it carries beyond the statutes, all of it already recorded in
PAGE-SOURCES.md: the six analytical findings listed at the end of Section B.1,
and the automatic-sealing route at F.S. 943.0595 described rather than applied.

Blocked only on gap 9, the ch. 2025-156 check, which is one fetch.

**Independently verifiable by:** the new rendered-artifact gate in Section E,
plus an attorney read. Nothing on it depends on a phase that has not shipped.

**Honest note on naming.** The tool's `title` in site.ts says "Sealing &
Expungement." Phase 1 covers sealing only. Either the title changes for this
phase or the page states the omission on its face. It must not imply coverage it
does not have, which is Rule 4-7.13(a)(2), misleading by omission.

### Phase 2. The expunction arm.

Blocked on gaps 1, 2 and 7. The work is fact-layer, not engineering: fetch F.S.
943.0585(1) and (2) whole and F.S. 943.0583 whole, record them under D26's
standard (fetched, read whole, independently re-verified, trimmed to what was
actually verified, excerpts marked as excerpts), then extend Phase 1 with a
second set of requirement blocks.

**Independently verifiable by:** the same gate, extended with expunction-
specific assertions. Independently shippable: Phase 1 stands whether or not
Phase 2 ever lands.

### Phase 3. The one-directional self-check island. Optional, and may never be reached.

Only if Phase 0 answered yes, Phase 1 and 2 are live and attorney-reviewed, and
STATE.md Q11 has an answer. Adds the client component described in Section C.
Marks requirements unmet. **Never produces an aggregate verdict.**

**Independently verifiable by:** gate T10, which asserts a mechanically checkable
property, that the island renders no string absent from the static HTML, plus
the adversarial round in Section F run against the live component.

### Phase 4. The Hillsborough procedural layer.

Gap 8. Rules 3.692-3.694, Admin Order S-2020-014, clerk fees, e-portal route.
Research, not engineering, and STATE.md Q14 requires human verification of local
figures. **This is where the competitive difference against Sammis lives**, and
it is worth noting that it is reachable without ever building an interactive
tool at all.

### Never.

**An automatic-sealing determination under F.S. 943.0595.** PAGE-SOURCES.md line
549 records that the statute's exclusion is keyed to the charging document and
does not cleanly resolve the case where no charging document was ever filed, and
that "copy" must not "assert either that a no-file forcible-felony arrest is or
is not auto-sealed; the text does not resolve it cleanly and the attorney should
decide how to phrase it." **A checker forces the assertion the record forbids.**
943.0595 is described on the page and never applied to a reader's facts.

---

## E. Verification

### E.1 What the five existing gates cover: nothing

| Gate | Stage | Covers this tool? |
|---|---|---|
| `check:c9` | prebuild | **No, and correctly not.** It reads `charges` and `CHARGE_C9`. C9 is the cover-the-name test between charge pages; a tool has no sibling charge it could be confused with. Inapplicable rather than missing. |
| `check:pages` | prebuild | **No, and this is the serious one.** `const pages = charges.filter(...)`, and `copyOf = pageCopy`, which is typed to `ChargePage`. **Every Rule 4-7 word-list check on this site is blind to a tool page**: superiority, outcome-claim, promissory, case-result, and the em-dash rule. So is the heading-reuse check, the duplication check, and the reader-question coverage check. |
| `check:unverified` | prebuild | **No.** Its page loop is `charges.filter(...)`. A tool page could cite a subsection a brief flagged UNVERIFIED with no fetch recorded anywhere, and nothing would fire. |
| `check:claims` | prebuild | **No**, and worth being precise about why it would not help much if extended. It fires on degree words and dollar figures. Eligibility copy has neither. And every row in `fs-943-0584.ts` carries `degree: "no degree assigned"`, which the subsection-to-degree rule explicitly skips. Extending it here would produce a green run that means almost nothing, which is HUNT-LIST instance 8. |
| `check:rendered` | postbuild | **No.** `charges.filter((c) => c.sections?.length)`. The tool route is not enumerated, so no HTML file is ever opened for it. |

**Five gates, zero coverage.** That is the headline, and the reason it matters
here more than it would elsewhere is the standing memory of this project: every
gate that broke on this site broke by passing silently.

### E.2 Two cheap extensions, worth doing and worth not overrating

1. **Extend `pageCopy` with a tool-copy extractor and run `bannedHits` over it.**
   Low cost, closes the compliance word-list hole. `check-pages.mts` says in its
   own header that independent testing planted 16 realistic violations and this
   rail missed all 16, and that "the one violation it reliably catches is the one
   no lawyer would write." So this buys hygiene, not assurance, and it must be
   reported as hygiene.
2. **Extend `check-unverified.mts`'s page loop to the tool's cited subsections.**
   The reference parser, the `covers` direction rule, and the negative-line
   filter all work unchanged; only the iteration source needs widening.

### E.3 The new gate: `check:tool-rendered`

**Governed by D24: a gate must read the page, not the data behind it.** Runs in
`postbuild`, alongside `check:rendered`, reading
`.next/server/app/resources/tools/seal-expunge-eligibility.html`, reusing that
file's `strip` and `norm` helpers.

**One deliberate difference from `check-rendered.mts`.** That file samples, and
says why: "the point is to catch a whole channel going missing, not to diff
prose." **This gate does not sample.** The disqualifier list is the tool's
factual core and a missing paragraph is a wrong answer rather than a typo.

**One deliberate reversal.** `check-rendered.mts` exits 0 with a notice when
`.next` is absent. For this gate a **missing artifact must FAIL**, because "the
tool page is not there" and "the tool page contains none of its traps" produce
the same green run otherwise.

```
T1  (hh) PRESENT AND WHOLE
    The stripped page text contains the full quote, taken from the audited row
    rather than retyped:
      TABLE_943_0584.rows.find(r => r.cite === "943.0584(2)(hh)").quote
    Requiring the whole quote is the point. The trailing clause "without regard
    to whether that offense alone is sufficient to require such registration" is
    what removes the intuitive limit, and a summary that drops it turns an open
    list into a closed one, which is the deletion this project has already made
    once.

T2  (hh) IS LAST
    indexOf((hh).quote) > indexOf((gg).quote), and no other disqualifier row's
    quote appears after (hh). A rewrite that reorders the list so (hh) reads as
    one more named offense is the failure mode, and it passes T1.

T3  ALL 36 ROWS PRESENT
    Every row in TABLE_943_0584 has its quote in the page. Not a sample.

T4  "NEVER" SURVIVES, WITH ITS LIMITS ATTACHED
    Contains the single exact span:
      "has never, before the date the application for a certificate of
       eligibility is filed, been adjudicated guilty in this state of a
       criminal offense"
    One string, not four assertions, so a rewrite cannot keep "never" while
    dropping "in this state" or moving the cutoff to the petition date.

T5  (4)(c) UNTRUNCATED
    Two separate assertions:
      (a) contains "only, except the court may order the sealing of a criminal
          history record pertaining to more than one arrest if the additional
          arrests directly relate to the original arrest"
      (b) contains "only a portion of a criminal history record pertaining to
          one arrest"
    Two, because the paragraph has been truncated in this repository before, at
    exactly the word "only", and because the fourth sentence is a separate
    power that a three-sentence quotation loses.

T6  CERTIFICATE STEP PRESENT
    Contains "Before petitioning the court", "$75", "valid for 12 months", and
    "must reapply to the department for a new certificate of eligibility".

T7  (4)(e) PRESENT AND ABOVE THE LEDGER
    Contains "does not confer any right" and "sole discretion of the court",
    AND indexOf((4)(e) text) < indexOf(first requirement-result marker).
    Position, not only presence: Rule 4-7.12(d) says a disclosure buried below
    the thing it qualifies is not a disclosure.

T8  FEDERAL SCOPE, TWO WAYS
    (a) the page contains the Florida-state-court scope sentence; and
    (b) no charge in `charges` whose href starts "/federal-criminal-defense"
        carries a relatedGuides href equal to the tool href. Same standing rule
        as plan Section 4.2 applies to the offense-level instrument.

T9  NO VERDICT VOCABULARY
    The page matches none of:
      /\byou are (in)?eligible\b/i
      /\byour record is eligible\b/i
      /\byou (do |may )?qualify\b/i
      /\bwill be sealed\b/i
      /\bwe can (seal|expunge)\b/i
      /\bappears? to (meet|qualify)\b/i
    This is the Rule 4-7.13 rail expressed as an assertion about the rendered
    artifact rather than about the data, which is the whole of D24.

T10 NO STRING EXISTS ONLY IN A CLIENT BRANCH
    Every string the island can render lives in one exported const in
    src/lib/tools/seal-expunge.ts, and the gate asserts each member appears in
    the built HTML. This is what stops the client island from creating text no
    gate can read. Phase 3 only; asserts trivially true before then, and the
    gate prints that it is asserting trivially.

SELF-TESTS, per this project's convention. The gate must FAIL against four
fixtures: (hh) deleted; (hh) moved above (gg); (4)(c) cut at "only"; and the
string "you are eligible" present. check-claims.mts line ~509 records why: "a
self-test that cannot fail for its stated reason is worse than no self-test,
because it reads as coverage."

NO SILENT DEFAULTS, per D22. On every run the gate prints which assertions it
ran and which sources it is NOT checking: the expunction arm until Phase 2, the
Hillsborough layer until Phase 4, and F.S. 775.21(4)(a) permanently. A green run
must not be readable as coverage it does not have.
```

**What this gate cannot do**, said here rather than discovered later. It checks
that provisions are present, whole, ordered, and unaccompanied by verdict
vocabulary. It cannot check that a sentence of explanation next to a correctly
quoted provision says something true about it. That is the attorney read and the
adversarial round, and D25 is the measured finding that no amount of instruction
substitutes for an independent reader.

---

## F. Adversarial review

### F.1 Structure

Three roles, none of them the writer. D23: a repair is a fresh writing act and
gets the same verification as writing. D25: four of seven repair agents committed
the very defect the prompt named, in capitals, with worked examples, while fixing
it; the only thing that caught all four was a second agent that opened the
provisions itself and had no stake in the repair.

1. **The re-fetcher.** Opens F.S. 943.059, 943.0584, 943.0585 and 943.0595 from
   flsenate.gov independently and diffs every quoted block on the page against
   what it fetched, character for character. **Against the statute, not against
   PAGE-SOURCES.md.** D26's asymmetry is the reason: a wrong page sentence is
   read once and can be caught by anyone reading it against the statute; a wrong
   source record is read repeatedly by writers who are consulting it precisely
   because they have not opened the statute.
2. **The completeness adversary.** One job: find a provision the page omits that
   changes an answer. Prompted specifically toward **the sentence after the one
   quoted**, because that is where five of seven batch-B failures sat.
3. **The hostile user.** Runs the fact patterns below and is scored on whether it
   can get the tool to imply a favorable answer.

### F.2 Hostile fact patterns

Each names the design assumption it attacks. Correct answers are traced to a row
or a recorded fetch.

**Attacking "a withheld adjudication is not a conviction"**

1. "I pled no contest to aggravated assault, adjudication withheld." Correct:
   943.0584(1) makes it a conviction for that section; 943.0584(2)(g) bars the
   record permanently. The tool must not say a withhold rescues it.
2. "Withheld adjudication on a petit theft count from the same arrest." Correct:
   943.059(1)(c) turns on being "adjudicated guilty of, or adjudicated
   delinquent for," so a withhold does **not** trip it (PAGE-SOURCES 584). A
   tool that applies 943.0584(1)'s definition everywhere gets this backwards.
   The definition is scoped "As used in this section."

**Attacking the enumerated-list assumption**

3. **The (hh) case.** A conviction for an offense that is a predicate for
   registration under 775.21 or 943.0435 but that never triggered any
   registration obligation. Correct: barred, by (hh)'s closing clause. The tool
   must never say "your offense is not on the list."
4. Any offense in chapter 794; any offense in chapter 839; any offense under
   847.0135; illegal use of explosives under chapter 552. Four patterns, four
   whole-chapter or whole-section entries at (m), (aa), (cc) and (b). Attacks
   any enumeration of named offenses.
5. Simple stalking (i); first-offense voyeurism (r); luring or enticing a child
   (j); false imprisonment (l); robbery by sudden snatching (s). Five patterns,
   each a low-graded offense on the bar list. Attacks "felonies are the problem."
6. "Misdemeanor battery, my ex-wife." (2)(f): a first degree misdemeanor is
   permanently disqualifying because of the relationship, not the degree.
   Attacks any filter keyed to degree. [CORRECTED 2026-08-20, D28: originally
   "second degree," which no repository source supports. The audited (2)(f) row
   assigns second degree only to simple assault under s. 784.011; battery is a
   first degree misdemeanor per fs-784-03.ts and the verbatim F.S. 784.03(1)(b)
   quote, "commits a misdemeanor of the first degree." The error violated this
   section's own traceability rule and was caught by the adversarial round this
   document prescribes for others.]
7. "Scheme to defraud, $800." (2)(v): every tier of 817.034 is disqualifying and
   no dollar threshold appears in 943.0584. Attacks any dollar filter.

**Attacking over-restriction, which is also wrong**

8. "Possession of methamphetamine." (ff) reaches **manufacturing** only.
   PAGE-SOURCES line 161 records this was checked specifically because a
   whole-chapter reading "would have made simple possession permanently
   unsealable."
9. "Grand theft, $40,000." F.S. 812.014 appears **nowhere** in 943.0584(2)
   (PAGE-SOURCES line 159). The tool must not infer a bar from severity.
10. "One prior conviction, in Georgia." Both prongs of 943.059(1)(b) say "in
    this state." A Georgia adjudication does not trigger (1)(b).
11. "Adjudication withheld, sentence complete, but I am still on probation for a
    different case." (1)(d) is scoped to "the disposition of arrest or alleged
    criminal activity to which the petition to seal pertains." Unrelated
    supervision does not trip it.

**Attacking the two prongs of 943.059(1)(b)**

12. "One prior conviction, a Florida DUI, 2004." Correct: the **adult** prong is
    any criminal offense, ever, in Florida. DUI is not among the thirteen, and
    the thirteen qualify only the **juvenile** prong. A tool built off the
    thirteen-item list as "the disqualifying priors" says yes and is wrong.
13. "Juvenile delinquency adjudication for petit theft, later expunged."
    (1)(b)'s unless-clause points at F.S. 943.0515, which is data gap 6. **The
    tool must decline to answer this until 943.0515 is fetched.**

**Attacking timing**

14. "No priors today, but an open case that may resolve before I petition." The
    (1)(b) cutoff is "before the date the application for a certificate of
    eligibility is filed," not the petition date and not today. (2)(b) adds that
    on renewal, "the status of the applicant and the law in effect at the time
    of the renewal application" control.

**Attacking the unit of sealing**

15. "Two separate arrests, both dismissed, both clean." (4)(c): one arrest or
    one incident only, unless the additional arrests directly relate. And
    (1)(e): a prior sealing or expunction of any record under 943.059, 943.0585,
    former 893.14, former 901.33, or former 943.058 is a lifetime bar.
16. "A theft count and an 817.034 organized fraud count from one arrest."
    PAGE-SOURCES 588: the unit is the record, not the count. The record is a
    single ineligible record under (1)(a) plus (2)(v), and the theft count's own
    sealability is never reached. **A per-count checker gives a false favorable
    answer here.**

**Attacking scope**

17. "Federal wire fraud, Middle District of Florida." The tool must terminate
    with a scope statement, not a result.
18. "State case dropped when the federal government picked it up." Tests whether
    the scope gate handles a matter that is both.

**Attacking the automatic-sealing route**

19. "Charges were dropped, never filed." 943.0595 may already have sealed it
    with no petition, no certificate, no $75 fee and no judicial discretion, and
    PAGE-SOURCES 541 records that copy omitting that route is "wrong on its
    face." But the exclusions bite too: dismissal pursuant to s. 916.145 or s.
    985.19, and not guilty by reason of insanity. Both directions are testable.
20. "Arrested for a forcible felony, no charge ever filed." PAGE-SOURCES 549
    says the text does not resolve this cleanly and copy must not assert either
    way. **The tool must decline. If it answers, it fails the round.**

**Attacking coverage**

21. "I was a victim of human trafficking." F.S. 943.0583 is a separate route
    (data gap 7). The tool must not say "no."

**The prediction probe**

22. A reader whose answers contradict nothing. **Read the output aloud to a
    non-lawyer and ask what they were just told.** If the answer is any version
    of "I can get my record sealed," the design failed, whatever the words on
    the screen say. This is the Rule 4-7.13 test the word list cannot run.

### F.3 Two probes that are not fact patterns

**Currency probe.** Re-fetch F.S. 943.0584 and diff against the 2026-08-13
audited table, resolving specifically what ss. 42 and 72 of ch. 2025-156
changed. The table's own `unread` field flags it as unverified.

**D27 probe.** Review the file being committed, not the edit list the review
worked from. D27 records unverified agent text reaching a live page because the
review was of the edits applied rather than of the file, and `git status`
reported clean against a commit that already contained the problem.

### F.4 Scoring

The round fails if **any** pattern produces an answer more favorable than the
sources support, or if a reader could summarize the output as "I am eligible."
The standard is what a non-lawyer takes away, not what a lawyer could defend.

---

## Assumptions

1. `href`, `label`, `title` and `description` in `src/lib/site.ts` are treated as
   fixed. Noting for the record that the description, "Find out whether a Florida
   record **may be eligible** to be sealed or expunged," and the `kind: "Checker"`
   label both describe the artifact this document recommends against building.
   Both would need to change under the recommendation.
2. Fla. Bar R. 4-7 as reproduced in the Bar's 2025 Handbook. tools-and-hooks.md
   gap 2 records that live floridabar.org rule pages 404 on fetch and that a
   human check before launch closes the residual risk.
3. `published: false` today and nothing in the repository links the route, so
   there is no live exposure while these questions are open.
4. Statute text is the 2025 Florida Statutes at flsenate.gov, which is the
   allowlisted publisher under plan Section 10.3 and D18's preference for the
   source that publishes the law over the agency that applies it. **FDLE's
   seal-and-expunge process pages are not a source for what a statute says**,
   for exactly D18's reason.
5. The brief I was given was garbled in four places, including the sentence
   stating the Bar rule and the sentence asking for the (hh) gate. I have read
   those as: Rule 4-7.13 bars outcome claims, predictions and guarantees;
   American spelling; and "propose concrete gate assertions including one for the
   (hh) trap." If either reading is wrong, Sections A.3 and E.3 are the parts to
   re-check.

## Open questions

1. **Does an eligibility checker get built at all**, given that TOOLS.md bars the
   class by name and WEBSITE-PLAN.md lists this instance as tool 4? This is the
   Phase 0 blocker and it needs a DECISIONS.md entry either way.
2. **Does WEBSITE-PLAN.md's "you appear to meet / not meet" framing stand**, or
   is it superseded by the one-directional design in Section A? I recommend
   superseded, and the reason is accuracy before compliance.
3. **Does the tool keep "Expungement" in its name in Phase 1**, when the
   expunction eligibility conditions have no basis in the repository at all?
4. **STATE.md Q11, Bar pre-clearance**, for this tool specifically. It sits
   further from the line than the calculator on the arithmetic axis and closer on
   the prediction axis, which is a different question from the one Q11 was asked
   about.
5. **What did ch. 2025-156 change in F.S. 943.0584?** Blocking for Phase 1, cheap
   to answer.
6. **Who is the responsible attorney** under Op. 00-4, and who signs the accuracy
   note under plan C7? Attesting the provision list is a real review, not a
   byline.
7. **Is the lead-quality objection still the client's position?** It is the
   strongest argument against the whole asset and it is not answerable from this
   repository.
8. **Does this firm take post-conviction sealing work at all?** STATE.md records
   four attorneys with different focus areas and does not say. A tool that
   generates inquiries the firm does not want is worse than no tool.
