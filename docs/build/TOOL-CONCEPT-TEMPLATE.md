# Tool concept template

Every tool concept document answers these questions, in this order, under these
headings. Copy this file, fill it, delete nothing.

---

## Why this template exists

Three tool concept documents were written on 2026-08-19 by separate agents from
separate briefs. Each independently diagnosed the same hole, that no gate reads
a non-charge page, and each invented a different mechanism to close it:
`check:tool-rendered`, a three-layer `check:tools`, and a `measuredPages`
registry with `check:provenance`. The cross-document review recorded the result
plainly: implemented as written, the banned-term rail would have acquired three
different iteration sources, and two of the three tools would have stayed
outside the registry whose own premise is that nothing renderable stays outside
it. Reconciling that took a ruling (DECISIONS.md D29) and a rewrite.

**One shape prevents that.** Not because the shape is clever, but because three
documents answering the same questions in the same order make a difference in
the answers visible instead of leaving it to be discovered when the code is
written. The second reason is mechanical: a build prompt should be producible
from a filled copy of this file without interpretation. If writing the prompt
requires going back to the author, the document is not finished.

**What this template is not.** It is not a compliance review and it does not
replace one. Section 7 records a disposition per criterion; a person still
verifies C1 through C8 before launch (CASES-WE-DEFEND-PLAN.md Section 5.6).

---

## Rules that bind every filled copy

1. **Every factual claim traces to a record in this repository**, cited by file
   and, where the file is long, by line or by row. Nothing from recall. A claim
   that would need a fetch is written as a blocker in Section 8, never filled
   in from memory and never quietly omitted.
2. **A number nobody can reproduce is not evidence.** If a document states a
   count, a span, or a rate, it names how to re-derive it. HUNT-LIST Instance
   11 is the case where a document promised every number was reproducible from
   the tree and its aggregates were not.
3. **State what is NOT covered.** Every section that could be read as complete
   says what it leaves out. A section that cannot be read as complete says so.
4. **No section is deleted for being inapplicable.** Write "not applicable" and
   the reason. A missing heading reads as an oversight; an answered one reads
   as a decision. This is the D5 shape.

---

## 1. What it does

One sentence, in words a client would use, with no statutory citation in it.

If the sentence needs a subordinate clause to be accurate, the tool is doing
two things and this document covers one of them.

Then, separately: **what a reader gets out of it in ten seconds.** If the answer
is "an understanding of a distinction," name the distinction.

## 2. Who arrives, and what they are holding

Not a persona. The physical situation: what document is in their hand, what
they just typed, what they are afraid of. The demand evidence for the tool, with
its source.

State the arrival paths that are known and, separately, the ones that are
assumed. An assumed path is a guess about traffic and is labelled as one.

## 3. Inputs

A table. Every input, its type, its permitted values, and its storage
disposition.

| Input | Type | Permitted values | Stored? |
|---|---|---|---|
| | | | **No.** Where it lives and dies. |

**The storage column has one permitted answer: no.** CASES-WE-DEFEND-PLAN.md
Section 5.4 is the rail, and the reason it is an architecture rather than a
policy is stated there: a policy of not looking is weaker than a system that
never receives. Concretely, for every input, all of the following are false:

- it reaches a server (no API route, server action, or form POST)
- it appears in a URL, including the hash fragment
- it appears in an analytics event as an attribute, or in error reporting
- it persists past the page view (no localStorage, sessionStorage, cookie)
- it is sent per keystroke to any endpoint (no autocomplete)

A tool with no inputs writes "None" and says why that matters: a tool with no
inputs cannot leak, and Section 7's C5 disposition follows from it.

## 4. Output

Two sub-headings, both required.

**What it IS.** The literal artifact, described so a reader could sketch it.

**What it explicitly is NOT.** A list, phrased as the negations that will be
enforced. This is where the tool's compliance posture is actually decided.
Write the strings that must never appear, so Section 11 can turn them into an
assertion.

If the output can be misread as a prediction under any reading, that reading is
named here and the design choice that forecloses it is named next to it.

## 5. What it cannot know

**In the words that will appear on the page.** Not a description of the
disclosure, the disclosure itself, quoted, ready to be pasted into copy and
checked by a gate.

Rule 4-7.13(a)(2) makes output misleading by omission when it presents a result
without saying what it left out, so this section is load-bearing rather than
courteous. Plan Section 5.2 sets the presentation standard: adjacent to the
output, not in a footer, at equal or greater prominence.

## 6. Data source

A table. Every fact the tool renders, traced to a record that exists now.

| What the tool renders | Source record | State |
|---|---|---|
| | `src/lib/statute-tables/…` row, or PAGE-SOURCES.md line | audited whole-section / partial / READ-WHOLE marked / **not recorded** |

Rows in the **not recorded** state are blockers and repeat in Section 8. A
partial record supports no closed-set claim (D26, and `check-claims.mts` rule
2), so a tool whose output is a closed answer cannot rest on one.

State the source's own known limits. If a table's `unread` field says something
was not verified, quote it here rather than discovering it during the build.

## 7. C1 through C8 disposition

Every criterion, one row, one of three dispositions and no fourth:

- **By construction.** The design makes the criterion true; there is nothing to
  remember. Say what makes it true.
- **By build.** An engineer must do a specific thing. Say what.
- **Attorney.** A person must read and sign. Say what they are attesting.

| # | Criterion (plan Section 5.6, verbatim) | Disposition | How |
|---|---|---|---|
| C1 | Output is framed as what the statute computes. No instance of "your sentence," "your score," or any predictive phrasing anywhere in the tool copy | | |
| C2 | A prominent adjacent statement names what the tool cannot know: prior record, victim injury points, enhancements, mandatory minimums, departures, judicial discretion | | |
| C3 | That statement meets the Rule 4-7.12(d) presentation test: equal or greater prominence, close proximity, same or larger text, not fine print, not footer-only | | |
| C4 | A no-attorney-client-relationship notice appears on the results screen adjacent to the output, not only in the site footer | | |
| C5 | Computation is client-side only. No server-side storage or logging of user-entered charge data, no case facts in URLs or analytics attributes, no lead gate on results | | |
| C6 | The implemented Rule 3.992 revision is stated on-page by date, including the January 2026 correction, with a Florida-law-only scope note | | |
| C7 | An attorney-reviewed accuracy note is present, naming the reviewing attorney and the review date for the computation itself | | |
| C8 | No case results, testimonials, "confidential" labeling, or implied Bar approval anywhere on the tool page | | |

**C6 for a tool that implements no scoresheet computation.** The criterion names
Rule 3.992 because it was written for the calculator. A tool that computes
nothing still states the version of every authority it renders, by date. Say
which version, and say that the Rule 3.992 clause is inapplicable rather than
satisfied, so nobody later reads a satisfied C6 as a claim about a form the tool
does not implement.

**"By construction" is a claim, not a comfort.** Two of the three 2026-08-19
documents overstated one: TOOLS.md marks C1 alone as passing by construction for
the offense-level instrument, and a concept document restated that as the whole
gate passing by construction. If a criterion is by construction, the sentence
saying so names the structural fact that makes it so.

## 8. What blocks shipping

Two lists. The split is the point: one list is work, the other is waiting.

### Machine-resolvable

Anything a person with this repository can finish without asking anyone: a
fetch, a transcription, a gate, a parse, a verification pass. Each item names
what would be done and what it unblocks.

### Human-only

Anything that needs the client, an attorney, or a decision this repository
cannot make: a factual answer about the firm, a compliance sign-off, a business
call. Each item names **who** and **what question**, phrased so it could be sent
as written.

An item that looks machine-resolvable but rests on an unanswered human question
belongs in the second list, with the dependency stated. This is where concept
documents most often flatter themselves.

## 9. Route, registry, and links

| Field | Value |
|---|---|
| Route | |
| Registry entry | The `Tool` row in `src/lib/site.ts`, and its `published` value |
| Copy surface | Which extractor in `src/lib/page-copy.ts` covers it |
| Linked from | Pages that will link it, and **when they may start** |
| Deliberately not linked from | Pages that must not, with the reason |

**The registry is not optional.** D29: one measured-surface registry holds every
renderable page, and a page outside it is invisible to every gate. A tool that
is not in `measuredPages` is not gated by the banned-term, duplication, or
provenance rails.

**Route naming follows the rule in SENTENCING-BOND-CONCEPT.md B.4:** a tool that
is the hub of a topical silo lives at that silo's root; a tool that serves no
silo lives under `/resources/tools/`.

**"Linked from" carries a gate, not a date.** Say what must be true before the
first link goes live. `check:routes` fails the build on a link to a route that
does not exist, and its sweep A permits an unpublished tool's href only because
sweep B proves it renders nowhere.

## 10. Failure modes

What this tool does when it cannot answer. Every tool has this section; a tool
that always answers is claiming something no tool can claim.

- **Unresolvable input.** What the reader sees. It is never a guess, and never
  a nearest match presented as an answer.
- **Ambiguous input.** Where one string maps to more than one provision, the
  tool shows all of them or refuses. It does not pick.
- **Out of scope.** The reader is told the tool does not cover this, and what
  does.
- **Silent-wrong.** The failure this tool could produce that a reader could not
  detect. Name it, then name the control. Where there is no control, say so.

## 11. Done criteria, machine-checkable

Numbered assertions, each one a thing a gate can evaluate against a built
artifact. Not intentions.

Each row states the gate that runs it. Where no gate covers it yet, the row says
which gate must be extended, because "someone will check" is the shape every
HUNT-LIST instance shares.

| # | Assertion | Gate |
|---|---|---|
| T1 | | `check:routes`, `check:pages`, `check:provenance`, new |

**Rules for this section.** An assertion reads the rendered artifact, not the
data behind it (D24). A missing artifact fails rather than skips (D30). Every
new gate ships with a self-test that plants the violation and asserts it fires,
and the self-test is written so it can fail for its stated reason. Every run
prints what it did not check (D22).

## 12. Open questions

Numbered, each phrased as a question with an owner. A question with no owner is
a note.

Questions that block Section 8's human-only list are cross-referenced, so the
same thing is not tracked twice under two names.

---

## Filling order

The order the sections are written in is not the order they are read in.

1. Sections 1 and 4 first. What it does and what comes out.
2. Section 6 next, because the data decides whether 4 is honest.
3. Section 3 and Section 10, which together are most of the design.
4. Section 7, which by then is mostly derivable.
5. Sections 8 and 12, which are what is left over.
6. Sections 2, 5, 9, 11 last.

If Section 6 cannot be completed, stop. A tool concept resting on data that is
not in the repository is a proposal to do research, and it should be written as
one.
