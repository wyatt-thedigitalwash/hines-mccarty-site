# Hunt List

Named defect categories to actively look for during review, in this project's
own work rather than in the market.

**This file did not exist before 2026-08-13.** It was created when the first
entry was named, and moved here from docs/build/ shortly after, because it
governs research method rather than the build.

**It sits beside avoid.md and is not the same kind of list.** avoid.md is a
dated artifact recording competitor tactics not to copy; it is finished and it
describes the market. This file describes how *we* get things wrong, it is a
living document, and entries are added as defects are named rather than
compiled in one pass.

**How to use it.** These are not checklist items to tick. They are shapes of
failure that have already occurred at least once here, written down so that the
next instance is recognised rather than rediscovered. Each entry states the
defect, the instances that produced it, and the rule that follows.

---

## Defect 1: verification that cannot detect the failure it was run to detect

**Named 2026-08-13, from two instances in the wave 1 and wave 2 brief work.**

A verification step runs, produces a clean result, and is recorded as a pass.
The problem is not that the check was done badly. It is that the check, as
constructed, **could not have returned a different answer** if the thing it was
looking for had been present. The output carries the appearance of confirmation
and none of the substance, and it is worse than no check at all, because it
closes the question.

This is the most dangerous defect category in a verification-driven project,
because every other rail in this repo (C12, the allowlist, the calculator ship
gate, the currency policy) is enforced by checks. A check that cannot fail
silently disables the rail it belongs to.

### Instance 1: a grep combining two patterns into one count

A search combined more than one pattern and reported a single count. The count
came back as expected, and the result was recorded as confirming both patterns.

**Why it cannot detect the failure.** A combined count cannot distinguish which
pattern matched. One pattern present and the other absent produces the same
number as the intended distribution, so the expected total is consistent with
the failure state as well as the success state. The check confirms an aggregate
nobody was actually asking about.

**What it should have been.** One pattern, one count, one assertion each. If the
question is "does X appear and does Y not appear," that is two checks with two
separate results, and the cost of running them separately is nil.

A related trap in the same family: a pipeline whose last stage always succeeds,
so a success message prints regardless of what the earlier stage found. Any
check whose reassuring output is unconditional belongs in this category.

### Instance 2: two adversarial verifiers reading the same source document

Two independent agents were asked to refute a factual account of Fla. R. Crim.
P. 3.134. Both were instructed to default to refuted if uncertain. Both failed
to refute it. That was recorded as two passes.

**Why it cannot detect the failure.** Both verifiers reached the same conclusion
by reading the same document, The Florida Bar's compilation of the Rules of
Criminal Procedure. The agents were independent. **The evidence was not.** If
that compilation were wrong, stale, misattributed, or misread in the same way by
both, nothing in the setup would have surfaced it. Two agents against one source
is one verification reported as two.

The setup did produce real value, and that is worth separating out honestly: the
verifiers independently re-derived the rule text, caught a stale flcourts.gov
PDF that the first pass had relied on, and mechanically confirmed a string-count
claim. What it did not do is what the count of "two" implied it did.

### The rule that follows

**Verifier independence means an independent path to the fact, not an
independent agent.**

Two agents reading one document is one path. Two agents reading two documents
that are both derived from the same publisher is arguably still one path. The
question to ask is not "did someone else check this" but **"could this check
have failed if the claim were false, and could it have failed in a way the first
check would not also have missed."**

**Where only one authoritative source exists, say so explicitly rather than
running a second agent against it and recording two passes.** One verified
source, named as one, is an honest position and often the correct one. There is
frequently no second path to the text of a court rule, because the promulgating
body is the source and everything else derives from it. Recording that
truthfully is more useful to whoever reads the file later than a "2/2 verified"
that dissolves on inspection.

**In practice, three moves:**

1. State the number of independent **paths**, not the number of checks run.
   "One source, read twice" is the accurate phrasing when that is what happened.
2. Where a second path genuinely exists, use it. For a court rule that usually
   means the promulgating opinion alongside the compilation, which is a
   different document with a different failure mode.
3. Where no second path exists, escalate to a human eyeball rather than another
   automated pass. This is why the 33-day guide's entry in
   docs/build/REVIEW-QUEUE.md requires a person to open the Bar URL in a browser
   before publish, instead of requiring another agent to fetch it.

### Instance 3: a check whose input set was incomplete

**Added 2026-08-13, from the remaining-20 brief programme.**

The C9 reconciliation barrier ran before wave 2's assertions were recorded,
compared 11 new assertions against 8 already populated, reported 171 pairs and
no collision, and was recorded as a pass. **The 8 was wrong.** FED-01 and FED-02
had been briefed and committed in wave 1, but their assertions were never
written into src/lib/site.ts, so they were not in the set. The barrier's input
was 19 assertions when it should have been 21.

**Why it cannot detect the failure.** The barrier derives its input set from the
recorded data and then reports a comparison count. **A missing entry reduces the
comparison count**, and a lower count reads exactly like a smaller wave, not
like a gap. There is no value of "171 pairs, no collision" that would have
looked wrong. The reassuring result is available in the failure state, and the
failure is invisible from inside the check, because the check has no independent
notion of how many assertions ought to exist.

This is the same shape as instance 1 with the arithmetic reversed: there, a
count was too coarse to distinguish success from failure; here, the count is
precise and the **population it was computed over** is the thing nobody checked.

**The generalisation.** A check whose input set is assembled rather than given
reports a result that is **true of what it saw and false of the whole**, and it
states the first while appearing to state the second.

**The rule that follows.** **Any barrier states its input set and how that set
was derived, not just its comparison count.** "171 pairs compared" is not a
finding. "171 pairs over 19 assertions, being every charge whose C9 field is
populated in src/lib/site.ts, of 30 charge pages total" is a finding, and it is
one a reader can falsify by counting. Where the expected size of the set is
knowable, state it and reconcile the difference.

### Instance 4: a barrier that structurally cannot see the collision it exists to prevent

**Added 2026-08-13, same programme, and recorded because it was caught by a
person rather than by the rail.**

The automated detector, `detectC9Collisions`, compares only assertions that
**share a statute key**. Two pages resting on different statutes are never
compared, whatever they say. While writing ST-03 battery, the agent found a
strong differentiator (seven third degree felony batteries sharing one five-year
maximum but landing at four scoresheet outcomes) and **discarded it because it
mirrored the already-populated F.S. 409.920 assertion**. Different statutes.
**The barrier would never have looked at that pair.**

**Why it cannot detect the failure.** The same-statute precondition is not a
performance optimisation; it is the definition of a collision the detector was
built around, taken from the one real collision that had occurred (grand theft
and embezzlement, both on F.S. 812.014). Cross-statute duplication is a
different failure with the same consequence, two pages built on one idea, and
the detector is silent on it by construction. Its clean result is available in
that failure state.

**What was done.** Every barrier run in this programme carries a **manual
pairwise pass with the statute ignored**, over all pairs, reported separately
from the automated same-statute result. That pass is what produced the 351-pair,
max-0.196 figure for wave 4.

**The rule that follows.** **The automated detector catches same-statute
collisions only, and must be described that way whenever its result is cited.**
A page-level differentiator check is not complete without a cross-statute pass,
and the cross-statute pass is currently a human step. Do not let "the C9 check
passed" stand for more than it covers.

### Instance 5: an absence discovered by fetching a long document

**Added 2026-08-13, from the PPP limitations work.**

15 U.S.C. 636 was searched for a limitations provision covering economic injury
disaster loans. The fetch returned no such provision, and reported affirmatively
that subsection (b)(2) contained none. **Recording that as "EIDL has no
limitations provision" would have been wrong**, not because the answer is known
to be otherwise, but because the method could not support it.

**Why it cannot detect the failure.** Section 636 is one of the longest sections
in the United States Code. The fetch converts the page to text and truncates it.
**A document truncated before the relevant provision returns exactly what a
document genuinely lacking that provision returns: nothing.** The negative result
is identical in both states, so it carries no information about which one holds.
This is defect 1 in its purest form, because here the check is not even
badly built: fetching is the right method, and it simply cannot distinguish
these two cases without a completeness signal.

**How it was caught, which is the transferable part.** Not by suspecting
truncation in the abstract. The returned answer **described subsection (b)(2) as
covering pollution control financing**, and (b)(2) is the economic injury
disaster loan provision. A description that does not match what the subsection
actually covers means the reader never reached the subsection and produced its
content from somewhere else. **A wrong detail inside a negative answer is
evidence about the fetch, not just about the detail.** The mismatch was
recoverable only because the question named a specific subsection whose subject
matter was independently known; a bare "is there a provision about X" would have
returned a clean-looking no with nothing to check it against.

**The rule that follows.** **A negative finding from a long document states the
fetch's completeness, or it is recorded UNMET. It is never recorded as an
absence.** Concretely:

1. Ask for something whose presence is **known**, alongside the thing being
   looked for. If the known item does not come back, the fetch is incomplete and
   the negative is worthless.
2. Prefer a **targeted** retrieval, a subsection-level URL or an anchored
   fragment, over a whole-section fetch whenever the question is negative.
   Positive findings survive truncation; negative ones do not.
3. Where neither is available, **record UNMET with the method's limitation
   stated**, which is what OPP-01 Section 6A does for EIDL.

**Asymmetry worth stating plainly, because it governs how much care each needs.**
A **positive** finding from a truncated fetch is still good: the text was found
and quoted, and truncation elsewhere cannot unfind it. A **negative** finding
from the same fetch is worthless. The same tool is reliable in one direction and
silent in the other, so the standard of care differs by the shape of the answer,
not by the source.

### Instance 6: a check whose output cannot distinguish signal from noise

**Added 2026-08-13, from the page-gate work. Two checks, one defect.**

**The banned-term check.** It grepped the **rendered HTML** for compliance
violations and reported 67 hits for "leading", 5 for "dropped", and 2 for
"guarantee". Every "leading" was a Tailwind `leading-*` line-height class.
"dropped" was a legitimate FAQ question asking whether charges can be dropped.
The pages were, in fact, entirely clean.

**The reader-question coverage check.** It regex-matched page copy for terms like
`licens`, `job`, `expung`, `do not`. It reported 4 of 8 pages covering "what to
do right now" and 4 of 8 covering collateral consequences. **Inspection of the
matches showed almost none were real**: `licens` matched "licensed under Statute
790" inside statutory text, `job` matched a description of embezzlement's fact
pattern, `expung` matched a cross-reference inside 790.23(2), `do not` matched
ordinary statutory prose. True coverage was **0 of 8** on three of the questions.

**Why neither can detect the failure.** The stated defect in instance 1 is a
check whose **reassuring** result is available in the failure state. These are
its mirror: a check whose **alarming** result is available in the clean state,
and a check whose alarming result is available in the *absent* state. Both fail
for one reason, and it is the general one: **the output does not discriminate
between the states the check was built to distinguish.** Direction does not
matter. A false negative closes a real question; a false positive buries a real
answer in noise and trains the reader to ignore the check. Neither output is
evidence.

The second one is the more dangerous of the two, because its noise pointed the
*flattering* way. It reported the pages as half-covering the reader questions
when they covered almost none, and a reader who trusted it would have concluded
the template was closer to the mission than it was.

**The rules that follow.**

1. **Extract the thing being checked, do not scrape a rendering of it.** Markup
   carries class names, attributes, and framework tokens that collide with
   English. Copy checks read the data.
2. **Match on word boundaries, and separate a hard violation from a thing a
   human should look at.** Bare outcome words are legitimate in process
   description. "Whether charges can be dropped is decided by the State" is
   accurate; "we get charges dropped" is a violation. A check that cannot tell
   those apart should not be the gate.
3. **Presence of a word is not coverage of a topic.** Answering a reader
   question is a structural property, not a lexical one, so it is now modelled
   as one: sections declare which questions they answer, and the check reads the
   declaration rather than guessing from vocabulary.
4. **Plant the violation and watch the check fire, every time, in the check
   itself.** `scripts/check-pages.mts` self-tests each gate against the exact
   violation it exists to catch **and** against the exact legitimate copy the
   broken version false-flagged. A gate that cannot be shown firing is not
   evidence the pages are clean.

### Instance 7: a check whose failing branch an upstream check makes unreachable

**Added 2026-08-13. Found by the adversarial pass, in the file written the same
day to fix instance 6, whose header comment cites defect 1.**

The structural variation check asked whether two pages were interchangeable:

```
yes = idsSame && headingOverlap >= 0.7
```

It had a self-test. The self-test passed. It fed the function two pages with
identical section ids **and identical headings**, and the function fired. That
was recorded as proof the check could fail honestly, and reported as such.

**It was not proof, because the tested state cannot occur.** Immediately above
this check, the heading-reuse gate fails the build on **any** normalised heading
shared by two migrated pages. So on every input that reaches the structural
check in a passing build, the heading sets are disjoint, `headingOverlap` is
0.00, and the second conjunct is false. **The `yes` branch was unreachable.**
Two pages with an identical section sequence and merely paraphrased headings
scored `idsSame: true, headingOverlap: 0.00, fires: false`.

**Why the self-test did not catch it.** The self-test exercised the function in
isolation, on an input the pipeline can never deliver. It proved the function
*could* return true for some input, which is a weaker claim than the one being
made. **The claim being made was about the pipeline, and the evidence was about
the function.**

**The general defect.** Instance 1 is a check that cannot distinguish the states
it exists to distinguish. This is narrower and harder to see: the check
discriminates perfectly, and an **earlier** stage removes the discriminating
input before it arrives. Every stage passes its own test. The composition is
dead. **A green suite of independently-correct checks is not evidence that the
pipeline catches anything.**

**The rules that follow.**

1. **A self-test must feed the check an input the pipeline can actually
   produce.** If an upstream gate would have rejected that input, the test is
   about a function rather than about the system, and it must not be reported as
   evidence about the system.
2. **When two checks share a signal, ask what the first one guarantees about the
   input to the second.** Here the heading-reuse gate guaranteed the exact
   condition that disabled the structural gate. Conjunctions across signals that
   an earlier gate constrains are the shape to look for.
3. **Prefer disjunction to conjunction in a detector.** Sameness of shape and
   sameness of wording are different failures, and requiring both meant neither
   was caught. The rebuilt check fires on identical id sequence, identical kind
   sequence, identical kind multiset at equal length, or high heading overlap,
   any one alone.
4. **Report what was verified, not what was intended.** The W0 report told the
   user the gate "fails honestly, with proof". The proof did not cover the
   pipeline, and the claim should have been scoped to what the self-test
   actually showed.

### Instance 8: seven gates, tested by their author, three of them theatre

**Added 2026-08-13, from the first independent gate test in this project.**

Six rails were built, each self-tested against a planted violation, each
reported as working. An adversarial pass was then asked to attack them rather
than to attack the pages. It found **49 evasions** and returned a verdict of
theatre on three of the six.

**The headline is the question it was asked to answer plainly.** It planted, in
the live page, both of the defects that had actually stopped this project:

> "Below it the offense is petit theft of the second degree under Statute
> 812.014(3)(a)."
> "Only below $100 does Statute 812.014(3)(a) apply."

**All six gates passed.** Not one of them would have caught either.

**Why, and this is the transferable part.** Every one of the six checks
**form**: word lists, heading strings, section sequences, shingle counts, fetch
bookkeeping. The defect was a matter of **fact**. There was no gate of that kind,
and building six form checks had produced a strong feeling that the fact was
covered.

The unverified-claim gate is the sharpest illustration. It passed because
812.014(3)(a) **was** flagged and **was** recorded as fetched, so the citation
was waved through. **The gate verifies that somebody fetched the paragraph. It
has no opinion on whether the sentence attached to it is true.** That is a real
property worth having and it is not the property it felt like having.

**The specific evasions worth remembering.**

- **A recorded failure counted as a clearance.** A PAGE-SOURCES line reading
  "We could not fetch 784.03(1)(a). Two attempts, both HTTP 403. DO NOT CITE IT."
  parsed as a recorded reference and cleared the flag. The sentence said do not
  cite it; the gate read it as permission.
- **A third of the statute book was invisible.** The citation pattern required
  exactly three digits before the decimal, so chapters 1 to 99 never parsed at
  all, including the entire Florida Evidence Code.
- **One appended section defeated the structural rail.** Both its triggers
  compared joined sequences for equality, so an eleven-element sequence never
  equalled a ten-element one.
- **A field that renders but is not extracted is a hole in every gate at once.**
  `label` is rendered by the template and the index and was read by no
  extractor. Two gates carried separately maintained copies of the extraction
  function and had already drifted.
- **Counting pairs said nothing about magnitude.** Two legacy pages made 99%
  verbatim identical passed, because the pair count did not change.

**THE RECURRENCE, PRESENT TENSE.** This instance is not historical. The
banned-term rail is live, prints `ok` on every run, and missed **16 of 16**
realistic violations under independent testing. It is a word-list check whose
PASS means "none of these specific strings appear", and it produces exactly the
feeling of coverage this instance names as the hazard. It now prints its own
limits alongside its green line for that reason. **Fla. Bar R. 4-7 compliance on
this site rests on the attorney read.** No gate in this repository is a
compliance control, and none should be described as one.

**The rules that follow.**

1. **A gate tested only by its author is untested.** Every gate here had a
   passing self-test written by the person who wrote the gate, and three were
   theatre. Self-tests prove a function can fire on an input; they say nothing
   about whether the inputs a real writer produces reach it.
2. **Count form gates and fact gates separately.** Six form gates do not add up
   to one fact gate, and the feeling that they do is the danger.
3. **Fail closed.** A missing baseline, an unreadable one, or a partial one is a
   failure, not a fresh start. The first version treated all three as
   permission, and one of them silently re-baselined at whatever the current
   debt happened to be.
4. **An escape hatch opened for a hypothetical problem will swallow a real one.**
   The multiset check was demoted to a diagnostic on the reasoning that thirty
   pages would make it noisy. There were two pages, their overlap was already
   100%, and the demotion was hiding the only true positive on the site.

### Instance 9: a metric that degrades when the work improves

**Added 2026-08-13. Recorded as a rule rather than as a one-off, because it is a
test you can apply to any measurement in this project.**

> **If a metric gets worse when the work gets better, it is not measuring what it
> claims to measure.**

**The instance.** The structural check compared two pages by kind-multiset
containment, and reported the embezzlement and grand theft pages as 100%
interchangeable. Attempting to satisfy it, the embezzlement penalties table was
folded into prose. That change was **independently correct**: it brought the page
into compliance with CASES-WE-DEFEND-PLAN.md Section 4.5, which requires the
value-to-offense-level table to live in one place with both charge pages linking
to it rather than reproducing it. The page got better.

**The metric got worse.** Removing a block type made the shorter page's multiset
a cleaner subset of the longer one's, so containment stayed at 100% and order
similarity rose from 0.50 to 0.60.

That is the diagnostic. The measurement was not tracking "are these the same
document"; it was tracking "does the shorter page use fewer block kinds", which
is a property every good page has.

**Why this is worth a rule.** The failure is invisible from inside the loop. Each
individual step looks like progress: the metric is red, a change is made, the
metric is consulted again. Nothing signals that the target is wrong, and the
natural response to a stubborn number is another change aimed at the number.
**Three edits had already been made in service of it before anyone asked whether
it measured anything.**

**How to apply it.** When a metric resists, make one change you can justify
**without reference to the metric at all**, on the merits of the work. Then look
at the number. If it moved the wrong way, stop editing and examine the metric.

**The related discipline, since this arose from rejecting a reviewer's finding.**
An independent pass had called the multiset overlap "the only true positive on
the site". Rejecting that took more justification than accepting it would have,
so the reasoning went into
docs/build/CASES-WE-DEFEND-PLAN.md Section 4.3a where a later reader will meet
it, rather than into a commit message where they will not. **A finding you
overrule should be easier to find afterwards than one you act on.**

### Instance 10: a field describing the WORK standing in for the FACT

**Added 2026-08-13. The most expensive instance in this file, because the
mistake was inside the fix for instance 8.**

Instance 8 concluded that six gates all checked **form** and none checked
**fact**, and the response was to build a fact table: `src/lib/statutes.ts`,
holding F.S. 812.014 as verified rows, each with its quoted source. That was the
right move. Then the table was given a field:

```ts
completeness: "whole-section" | "partial"
```

and F.S. 812.014 was recorded `"whole-section"`.

**It was not.** The reading had covered the value axis thoroughly and had read
paragraphs (a) and (b) as though "value tier" were all they contained. They also
grade by ITEM, and one of those items has **no lower dollar bound at all**:

> **812.014(2)(b)2.** "If the property stolen is cargo valued at less than
> $50,000 that has entered the stream of interstate or intrastate commerce ...
> the offender commits grand theft in the second degree"

The page's bottom row told a reader with a sub-$100 theft that they faced **60
days**. For cargo, the statute says **fifteen years**. Nine provisions were
missing from a table described in the sourcing record as "the complete grading
structure, verified".

**The mechanism, and why it is worse than an ordinary omission.** The
exhaustive-claim rule in `check-claims.mts` is gated on that field:

```ts
if (EXHAUSTIVE.test(s) && degrees.size && t.completeness !== "whole-section")
```

Recording `"whole-section"` **turned the rule off** for the one statute this
project has been wrong about four times. The guard against "only" and "never"
sentences was disabled by a declaration that the reading was complete, which is
exactly the claim such sentences make. **The field asserting completeness
switched off the check that polices claims of completeness.**

**The general defect.** `completeness` is not a fact about the statute. It is a
claim about the WORK: how thoroughly someone read. Recording a property of the
work in the same structure as properties of the world, and then letting checks
depend on it, means a check can be disabled by an optimistic self-assessment.
Instance 8 said the gates checked form and not fact; the correction built a fact
table and then admitted one form field into it, and that field was the one that
mattered.

**The rules that follow.**

1. **Never gate a check on a self-reported measure of the work.** If a rule
   should run, run it. `completeness` now defaults to the safe value, and the
   guard runs unless someone can name what was read.
2. **A completeness claim needs the complement, not the content.** "I read the
   whole section" is unfalsifiable from inside. `unread` now carries the list of
   what is NOT covered, which is checkable against the source and embarrassing to
   leave empty falsely.
3. **When you read a paragraph for one thing, read the paragraph.** Both
   omissions came from opening (2)(a) and (2)(b) to confirm a dollar tier and
   stopping at the subparagraph that answered the question. The value tier was
   subparagraph 1 in each; the item grading was subparagraphs 2 to 4.
4. **The pattern across instances 6 through 10 is one pattern.** Every fix for a
   verification defect introduced a new verification defect, each subtler than
   the last: a check that could not fail, a check an upstream gate made
   unreachable, six form checks mistaken for a fact check, and now a fact table
   with a form field in its guard. **Infrastructure built to produce confidence
   produces confidence whether or not it is warranted**, and that is the thing to
   watch for, not any of the individual bugs.

### Instance 11: a document promising reproducibility, whose aggregates were not reproducible

**Named 2026-08-20, from the D28 adversarial round over the three tool concept
documents (docs/build/tools/REVIEW-2026-08-20.md, 434 checked claims).**

GUIDES-CONCEPT.md stated, in its own header, that every number in it was
"reproducible from the current tree," and described the method. The independent
reproduction confirmed the method and the row-level figures to the digit
(11.37%/94, 7.75%/94, 5.58%/113, 4.73%/221, the 124,381-run compelled set) and
then failed on the aggregates: "ten pairs at or above 5%" was twenty-four, and
the assembled-guide row's 39.8%/1,796 was 33.4%/1,509 under the same
definition, with no tested variant producing the stated numbers.

The reproducibility promise produced the same hazard as a gate that cannot
fail: it closed the question. A reader who spot-checks a row finds it exact,
extends the trust to the aggregates, and the aggregates are the numbers the
verdict actually rests on. The claim of reproducibility was doing the work of
reproduction.

**The split is the same one the page builds produced, now confirmed at scale.**
Across the round, the fetched material held and the self-produced material did
not: verbatim quotes traced to recorded fetches survived verification
(SENTENCING, 124 claims, zero confirmed errors; SEAL, 105 claims, one), while
the writers' own measurements, counts, and universal claims ("every page
states," "zero pages carry," "the 70 tables") supplied nearly all of the
confirmed defects. Both A.2 vacancy errors were false when written; the copy
they missed had been in the tree for five days.

**The rule.** A claim that a number is reproducible is verified by reproducing
it, before the number drives a decision, and aggregates are the numbers to
reproduce first, because they are the ones verdicts rest on and the ones a
row-level spot-check cannot reach. A document's self-measurements get the same
independent re-derivation its quoted sources get, which is D26's rule arriving
at numbers: the untrusted class is not the fetched fact but the writer's own
arithmetic about it.

### Instance 12: every gate green on a page whose body did not exist

**Named 2026-08-20, from the Phase 2 guide build.**

A shell-quoting defect emptied a guide's sections array while its lead and
metadata landed. The guide therefore counted as "written," rendered a page,
and passed every gate: typecheck (an empty array is valid), the banned-term
rail (nothing to scan is nothing banned), heading reuse (no headings), the
duplication measure (no runs), the rendered check (every extracted string
reached the HTML, because the extractor saw the same empty array the renderer
did). Twenty minutes earlier, thirteen sections of that guide had been
measured, so the pass was not merely hollow; it directly contradicted work
product that existed outside the tree.

No gate caught it, and no gate could have. Every gate verifies properties of
what is present. None can detect that the thing itself is missing, because
"nothing is present" satisfies almost any property universally: all zero
headings are unique, all zero claims are sourced. This is the vacuous-truth
edge of defect 1, and it is the same hole G1 closes for a missing ROUTE,
arriving one level down, where the route exists and the content does not.

What caught it was an implausible count: the provenance gate printed 2
citations and 0 quoted spans for a guide whose draft carried roughly 25
citations and 12 spans. The numbers were not wrong. They were true statements
about an empty body, printed because D22 requires gates to say what they saw,
not only whether it passed.

**The rule.** A pass whose printed counts do not match what the work should
have produced is investigated before it is accepted. Gates must keep printing
their counts (a bare "passed" would have hidden this), and the reader of a
gate owes the counts thirty seconds of arithmetic: does the volume reported
match the volume built? Zero is the number to distrust most, and second place
belongs to any count that stayed the same after work that should have moved
it.

### Instance 13: correct records in a shape their own gate cannot read

**Named 2026-08-20, same build, found during Phase 3's pre-write check.**

The Phase 1 rule records were textually correct, verified against a second
publisher, and emitted one blockquote line per WRAPPED PDF LINE, roughly ten
words each. The G3 truncation detector locates quoted spans inside single
corpus entries. Against ten-word entries it is structurally unable to locate
any span longer than a line, so it would have reported zero truncations on
any quote from those records forever, not because quotes were whole but
because it could not see them. A truncation detector that cannot see spans
reports zero truncations, and zero is exactly what a reader expects a healthy
gate to say.

Correct data plus wrong shape equals a blind gate that runs green. This is
instance 1's grep-shape failure arriving through a data format: nothing was
missing, nothing was wrong, and the check could still never have fired. The
records were reflowed to one blockquote per logical paragraph and re-verified
against the second publisher; the compelled corpus was unchanged because the
duplication gate joins its sources order-preserving, which is itself worth
remembering: two gates read the same records through different windows, and a
shape can blind one while leaving the other whole.

**The rule.** When a record feeds a gate, the record's SHAPE is part of the
gate's correctness, and a new record format is verified by planting a
violation the gate must catch THROUGH that record, not by checking the record
against its source. Content verification and shape verification are different
checks, and passing one says nothing about the other.

### Instance 14: nothing could see that a destination was absent

**Named 2026-08-21, from a report-only audit of the tool cards.**

The home page shipped two clickable 404s. The tools carousel rendered every
card as an unconditional link, and two of those cards point at routes that do
not exist and stay unpublished until they clear their own gates. Separately, a
charge-data entry pointed at `/resources/guides`, a bare segment with no index
route behind it, and had done for weeks. Seven gates ran green over all three
the entire time.

The reason is structural and is worth stating precisely, because it is not
laziness in any individual gate. **Every check on this site verifies a property
of the thing in front of it.** Copy is checked for banned terms, quotes for
truncation, sections for reaching the HTML, citations for provenance. An href
is a *reference to something else*, and its correctness is a property of the
OTHER thing, which is not in scope for any check that reads the page. The
render gate confirmed the link reached the reader, which was true. The
duplication gate measured its label. Nothing asked the only question that
mattered: is there anything at the other end.

This is Instance 12 one level out. There, the body was missing and the gates
verified an empty body's properties; here the target is missing and the gates
verify a dead link's properties. Both are the vacuous-truth edge of defect 1:
absence satisfies almost any test applied to presence.

**The two-sweep shape, because either sweep alone leaves the other's hole.**
A data sweep sees entries that are wrong but dormant, which a rendered sweep
cannot: the `/resources/guides` entry rendered nowhere, because written content
overrode the preview it was attached to. A rendered sweep sees hrefs hardcoded
in components, which a data sweep cannot: `/about`, `/insights`, and `/reviews`
are written in JSX and appear in no data structure. Running only one of them
would have found two of the five real defects and reported clean.

**The rule.** A gate that checks references checks that the referent exists,
and it derives the inventory of what exists rather than being handed a list. A
hand-maintained inventory is a second copy of the truth, and the copy is what
goes stale. Where a reference is legitimately allowed to point at something
unbuilt, the concession is stated as a property that can be checked now, not as
a promise about later: an unpublished tool's href is permitted in the data
sweep only because the rendered sweep proves it reaches no reader.

**A note on the first run.** This gate's first output contained a false
positive: `src/app/favicon.ico` serves at `/favicon.ico`, which is not in
`public/` and was not in the derived inventory, so every built page appeared to
link something dead. It was fixed before the gate was relied on. A gate whose
first finding is wrong teaches its readers to skim the next one.

### Instance 15: a gate's self-tests green while the gate was blind to the page

**Named 2026-08-24, during the offense-level instrument build.**

`check:offense-level` shipped with 20 self-tests, 11 of them planted
violations, and every one passed. Against the real built page, T2 reported
**zero degree-span rows on a page that rendered six**. It was not a false
negative on a subtle case; the assertion could not see its subject at all.

The cause is one character. The fixtures hand-wrote `<tr data-span
data-degree=...>`, and the matcher required whitespace after the attribute
name. React does not emit that: a valueless JSX attribute renders as
`data-span="true"`, so the next character is `=`. Every self-test matched the
fixture, the fixture matched nothing the build produces, and the only thing
that exposed it was running the gate against `.next`.

This is instance 8 with the tables turned. There, gates were theatre because
their planted violations could not fire. Here the planted violations fired
perfectly, on input that did not exist. Testing a gate against a stand-in you
authored tests your model of the artifact, and your model is the thing that
was already wrong: the same hand that wrote the wrong matcher wrote the
fixture that agrees with it. D24 says an assertion reads the rendered artifact
rather than the data behind it; this is the same rule applied one level up, to
the assertion's own tests.

**The rule.** A fixture that does not look like the artifact tests the
fixture. Where a gate reads rendered output, at least one self-test asserts
against real built HTML rather than a hand-written stand-in, and any attribute
or structural marker the gate matches on is tested in **the spelling the build
actually emits**. The tolerant version of the matcher is not the fix on its
own, because tolerance chosen by the same author has the same blind spot; the
fix is that something the author did not write is in the loop.

### Instance 16: a verification filter narrower than the claim it verifies

**Named 2026-08-24, same build. An extension of instance 1 rather than a new shape.**

OFFENSE-LEVEL-INSTRUMENT-CONCEPT.md stated that F.S. 893.135 has 47 chart rows
at levels 7, 8 and 9. The figure came from a filter written as
`/^893\.135\(/`, which requires an opening parenthesis and therefore silently
drops the bare `893.135` row: "Attempted capital trafficking offense", first
degree felony, level 9. The section has 48.

What makes this worth its own entry is the direction. The same document
correctly warns, at length, about the filter that is too WIDE: a prefix match
on `893.135` catches F.S. 893.1351 and would put a level 5 tier on a page whose
thesis is that trafficking has no low tier. That hazard was named, gated, and
given assertion T8. The narrow filter sitting three lines away in the same
document went unremarked, because a filter that returns fewer rows feels
conservative and a count that is too low reads as caution.

It is not caution. Both filters answer a question other than the one asked, and
a claim verified by the wrong question is unverified in either direction. Here
the levels happened to be unaffected, so the error was harmless, and harmless is
a property of this instance rather than of the defect: had the missing row been
level 4, the page's central claim would have been false and the check that was
run would still have passed.

**The rule.** A verification filter is checked against the boundaries of the
CLAIM, not only against the failure mode currently feared. When a document
states a count, it names the filter that produced it, so the filter can be
re-run and disagreed with; a bare number carries no evidence about which
question it answered. Where code and a document both derive the same figure,
the code is the record and the document is a restatement of it, and the
restatement is what goes stale.

### Instance 17: every gate folded case, so no gate could see a case defect

**Named 2026-08-24, during the charging-document decoder build.**

The decoder shipped twelve assertions, all green, including a 34-fixture
resolution corpus built from recorded user queries and a gate that reads the
built page. Opened in a browser, the tool rendered **`18 U.S.C. 1030(a)(2)(a)`
for a paragraph the United States Code writes `1030(a)(2)(A)`**, and in the
other direction it would have rendered a booking sheet's upper-case `893.13 6B`
back as `F.S. 893.13(6)(B)` where Florida writes `(6)(b)`.

Nothing was subtly wrong with any gate. **Every one of them was blind to this
class of defect for the same structural reason the defect existed.** The
matcher folds case on purpose: the Code nests `(a)(2)(A)(i)`, a reader types
`1030 a2a`, and a decoder that treated those as different citations would fail
the exact query it exists to serve. Case-folding is correct. But every
assertion downstream compared *through the same fold*, so a citation displayed
in the wrong case and a citation displayed in the right case were, to every
gate, the same string. The corpus was worse than silent: its expected values
had been written by reading the resolver's own output, so **the fixtures
encoded the defect as the specification**.

This is Instance 15 one level deeper, and the difference is worth stating. In
Instance 15 the fixture did not look like the artifact, and running against
`.next` exposed it. Here the fixture looked exactly like the artifact under the
comparison being used, and running against `.next` would *not* have exposed it,
because the gate reading the HTML also compared case-insensitively. What
exposed it was a human looking at rendered output with no comparison in the
loop at all.

The general shape: **a normalization is a deliberate loss of information, and
any assertion written on the normalized side cannot see what was discarded.**
Fold case and case defects vanish; trim whitespace and spacing defects vanish;
lower-case a URL and path-case defects vanish. The check does not fail. The
distinction it would have failed on no longer exists by the time the check
runs. This is the vacuous-truth edge of defect 1 arriving through the
comparison function rather than through absent data.

**The rule.** A gate that normalizes its input the same way the code does
cannot detect a normalization defect, and adding more such gates never will.
Where matching and display deliberately differ, they are **separate assertions
in both directions**: that the folded forms match, and that the displayed form
is byte-identical to the authority it claims to reproduce. "Both directions" is
literal and not rhetorical here. A rule that simply lower-cased every citation
would have produced the correct Florida `(6)(b)` and the wrong federal
`(a)(2)(A)`, so a one-sided fixture set passes while the tool is half wrong;
the corpus now carries the Florida and the federal case as a matched pair,
each of which fails a rule that satisfies the other.

The corollary is about who writes the expected value. **An expected value read
off the implementation's output tests that the implementation is deterministic,
not that it is right.** Where a fixture's correct answer exists in an external
authority, the fixture cites the authority and the answer is copied from it.
The decoder's corpus was written before the resolver for exactly this reason
and still absorbed the defect at the one point where a value was filled in
afterwards, which is how narrow the opening has to be.

### Instance 18: the authority itself was wrong, and every downstream check would have been faithful to it

**Named 2026-08-24, during the Rule 3.992 sentencing-worksheet fetch.**

The Florida Bar's official Rule 3.992 scoresheet PDF, effective October 23,
2025, printed the **Primary Offense point grid inside the Additional Offenses
block**: `1=4, 2=10 ... 10=116` where `M=0.2, 1=0.7 ... 10=58` belongs. It
contradicted F.S. 921.0024(1)(a), the statute the form implements, and it
contradicted **its own supplemental page four pages later**, which carried the
correct additional-offense grid. The Bar re-uploaded a corrected PDF in January
2026 fixing exactly that line.

**Why no gate on this site could have caught it.** Every rail here checks copy
against a record and a record against a source. That chain was sound and would
have run green end to end. A record built from the October PDF would have been a
faithful transcription of it; `check:worksheet` comparing typed values to that
record would have matched; an auditor re-fetching the same URL would have
confirmed it. The defect was upstream of the first link. **The verification
architecture assumes the authority is right, and no amount of checking against
it tests that assumption.** This is the vacuous-truth family of defect 1 arriving
through the SOURCE rather than through the comparison function or the input set:
in instance 17 the normalization discarded the distinction before the check ran;
here the distinction never entered the chain at all, because the document at the
root of it was defective.

Note what makes this worse than an ordinary stale-source problem. The tool was
going to render **one filled cell per selection**, and a wrong point value in a
filled cell is the concept document's own named silent-wrong failure: it looks
exactly like a right one, and a reader has nothing to compare it against. C6, the
criterion requiring the implemented revision to be stated by date, would have
been satisfied by a page truthfully printing "October 23, 2025" while rendering
a grid the statute contradicts. **A correct provenance claim about a defective
source is still a defective page.**

**What actually caught it**, and neither half was optional:

1. **Fetching both revisions and diffing them.** The January 2026 upload is not
   described anywhere as substantive; the Bar's rules index simply links it, and
   the file name says "Corrected" without saying what was corrected. Diffing the
   two uploads line by line is what turned "there is a correction" into "the
   correction is a point grid, and the superseded upload contradicts the statute
   in the one cell this tool reads." One fetch of the current PDF would have
   produced the right numbers by luck and taught nothing; one fetch of the
   October PDF would have produced wrong numbers silently.
2. **Rendering all four pages to PNG and reading them.** This is a form, not
   prose. `pdftotext -layout` can reorder or drop a grid without erroring, and
   the same run emitted a bare `II` and a `·` between two boxed paragraphs that
   are not form text at all. Nothing in the extraction announces which of those
   happened. A human comparison against the rendered page is the only step in
   the chain with no parser in it.

The cross-check that made the verdict safe was the third source: F.S.
921.0024(1)(a) on flsenate.gov and FDLE's independently published copy of the
form both carry the correct additional-offense grid. **Three paths agreeing on
the numbers is what licensed the conclusion that the January upload is right and
the October one is wrong**, rather than merely different. Without that, a diff
between two revisions tells you something changed and cannot tell you which one
to believe.

**The rule.** For a **form, a table, or any grid-shaped authority**:

- **One fetch is not verification.** The revision history is part of the source.
  Where a document has been amended or corrected, the superseded version is
  fetched and diffed too, and the diff is recorded, because "what changed"
  is evidence about which version to trust and a corrected upload is a
  publisher telling you it got something wrong.
- **Layout extraction is checked against a visual render.** Any text pulled from
  a PDF whose meaning depends on two-dimensional position gets its pages
  rasterized and read before it is recorded. An extractor that silently drops or
  transposes a cell produces a record that every downstream gate will honour.
- **A value that will be rendered as a filled cell needs an independent path
  that is not the document it came from.** Provenance says where a number came
  from; it does not say the number is right. Where a second authority exists,
  as it did here in the statute the form implements, agreement between them is
  the check, and disagreement is a stop rather than a tiebreak to be resolved by
  the implementer.
- **A revision date stated on a page is a claim about the source, not about the
  page's correctness**, and the two must not be allowed to stand in for each
  other. C6 now requires the revision **and the correction** to be named
  together, because the date alone was satisfiable by the defective version.

### Instance 19: every rail checks what is wired, and nothing checked what is not

**Named 2026-08-24, from a reconciliation pass after two sessions worked this
tree at the same time.**

Three defects, one week, one shape, none visible to any gate:

1. `scripts/check-worksheet.mts`, 20KB, twenty passing self-tests, **registered
   in no npm script**. Three source files cited `check:worksheet` in prose as
   though it ran.
2. `WORKSHEET_PAGE_COPY`, twelve strings including the page's H1, absent from
   `TOOL_PAGE_COPY` and therefore outside the banned-term, duplication and
   provenance rails. Eleven of the twelve reached no extractor at all. This is
   the D29 hole that assertion T9 was written to close for one tool, live on
   another.
3. `src/lib/tools/sentencing-worksheet.ts`, the entire form model plus an
   eleven-entry forbidden-output list, **imported by nothing**.

Each was individually a small oversight. Together they are not three oversights,
they are one missing rail, and the pipeline was fully green throughout: 239 `ok`
lines, fourteen gate verdicts, both route sweeps, exit 0.

**Why nothing could see them.** Every gate here iterates a registry. `check:pages`
walks `measuredPages`; `check:routes` derives its inventory from the filesystem
and the page data; `check:offense-level` reads a built page it is pointed at. A
gate that iterates a registry **cannot report on what is absent from that
registry**, and it does not merely stay silent: it reports green over a smaller
world than its output describes. "All 3 copy constants are inside the measured
corpus" is a true sentence whether the corpus holds three constants or thirty.
This is defect 1's vacuous-truth edge again, and Instance 12 and Instance 14
are the same statement about a page body and a link target. Here the unit is the
wiring itself.

**The concurrency is the cause and not the setting.** These are the shapes that
appear when two writers share a tree and neither owns the seams. Both sessions
wrote correct artifacts; what neither wrote was the edge connecting the artifact
to the thing that runs it, because an edge belongs to no one. Nothing conflicted
in git, because an absent registration is not a textual difference. The same
week produced a duplicate `D35` for the same reason, which `check:registries`
now catches, and that gate and this one are two halves of one observation:
**shared surfaces need rails precisely because no single writer feels
responsible for them.**

**The rule.** A gate that exists is registered, a copy constant that exists is
extracted, and a module that exists is imported, and each of those three is
asserted rather than assumed. More generally: for every kind of artifact this
repository produces, something checks that the artifact is REACHABLE from the
thing that consumes it, not only that the artifact is internally correct.
Correctness and reachability are different properties, and every gate here was
measuring the first while the second was what failed.

**The gate is `check:dormant`**, in `prebuild`. Its self-tests plant all three,
and it was then re-planted against the real inventories rather than hand-written
ones, per Instance 15: the real `package.json` with `check:worksheet`
unregistered, the real twelve strings against the real corpus, the real module
tree with the worksheet's importers redacted. All three fire, and the replant
reproduces the exact figures above.

**Its own first finding was itself.** Run before it was registered, `check:dormant`
failed on `scripts/check-dormant.mts`, a gate script no npm script ran. That is
the correct first output for this gate and it is worth keeping on the record:
the defect class was live in the act of closing it.

### Where this already applies

- **src/lib/statutes.ts**: F.S. 812.014 is recorded `partial` with `unread`
  naming (2)(a)3, the riot and emergency reclassification clauses, and 812.014(6).
  23 rows, including the cargo, semitrailer and equipment rows that were missing.
- **scripts/check-pages.mts**: the structural check now measures order rather
  than multiset, and its banned-term section prints its own limits on every run
  because a green line there is instance 8 in the present tense.
- **scripts/check-pages.mts**: the structural check now fires on any single
  signal, and its self-test includes the paraphrased-headings case that the real
  pipeline produces, with an explicit comment saying that is the state the
  heading-reuse gate guarantees.
- **scripts/check-pages.mts**: every gate carries a fires-on-planted-violation
  self-test and a stays-silent-on-legitimate-copy control, and the build fails
  if either stops holding.
- **docs/research/briefs/OPP-01-ppp-loan-fraud.md** Section 6A: the EIDL search
  is recorded as inconclusive rather than negative, with the truncation signature
  stated.
- **docs/research/briefs/STATE.md**: every barrier run in the remaining-20
  programme states its input set, its derivation, and its three parts
  separately, rather than reporting one aggregate.
- **docs/build/REVIEW-QUEUE.md**, the 33-day rule correction guide: open
  verification requires a human, explicitly because a second automated pass
  against the same compilation would not be a second path.
- **docs/build/CASES-WE-DEFEND-PLAN.md Section 10.3 (C12)**: the allowlist
  governs whether a source is authoritative. It says nothing about how many
  independent paths a claim rests on. These are different questions and both
  need answering.
- Any future adversarial verification: report paths, not agents.
- **src/lib/tools/charge-lookup/cite.ts**: `ParsedCite` carries `path` and
  `displayPath` as two fields rather than one field plus a formatting rule.
  The folded form is the match key and the written form is the label, and they
  are separate because a formatting rule is something a later change forgets to
  apply while a missing field is a type error.
- **src/lib/tools/charge-lookup/corpus.ts**: the `893.13 6B` and
  `18 usc 1030 (a)(2)(A)` fixtures are a matched pair, asserting Florida's
  lower-case paragraph and the Code's capital subparagraph. Either alone passes
  under a rule that gets the other wrong.
- **docs/research/PAGE-SOURCES.md**, the Fla. R. Crim. P. 3.992 record: both the
  October 23, 2025 upload and the January 2026 correction are fetched, hashed,
  and diffed on the record, and the diff is stated rather than summarized as
  "corrected". The record also states that all four pages were rasterized and
  read against the extraction, and names the two characters the extractor
  emitted that are not form text.
- **docs/research/PAGE-SOURCES.md**, the same record's `SINGLE-SOURCE:` marker:
  it records a SPLIT rather than a single status. The point values rest on three
  independent paths (the statute, the form, FDLE's copy); the layout and wording
  rest on one publisher. A marker recording only the weaker half would have
  misdescribed the record in the cautious direction, which is still
  misdescribing it.
- **scripts/check-worksheet.mts**: one assertion exists solely to fire if the
  Additional Offenses grid ever equals the Primary Offense grid. That equality
  is not a hypothetical corruption, it is the exact content of the superseded
  October 2025 PDF, so the gate watches for a future record built from the wrong
  revision.
- **src/lib/tools/scoresheet-form.ts**: `FORM_REVISION` carries `effective` and
  `correction` as two required fields, so a surface cannot state the revision
  date without also stating the correction.

### Open instance: attorney bios are not a measured surface

Found 2026-08-25, while entering the client's attorney copy. NOT yet closed.

`measuredPages` in src/lib/measured.ts has three kinds: `charge`, `guide`, and
`tool`. `check-pages.mts` iterates that registry for its banned-term sweep, so
`attorneys[].overview` and `attorneys[].concentration` in src/lib/site.ts are
read by no gate at all. The registry's own comment gives the right reason for
including guides and tool cards, that they are "lawyer advertising exactly as
much as a charge page is," and an attorney bio is the most personal advertising
on the site: it is the surface where superiority and results claims attach to a
named human being.

The registry gap is the shallow half. The deeper half was found by running the
gate's own regexes against the eight worst sentences in the Maria Pavlidis bio
the client supplied this session. **All eight pass silently.** Enrolling bios in
`measuredPages` would not have caught one of them:

    SILENT  gained a reputation for trying some of the most challenging and
            high-profile cases in the Tampa Bay area
    SILENT  has a record of winning difficult cases and uses her extensive
            expertise ... to get proven results
    SILENT  is known for fighting for her clients and is sought after for her
            knowledge and skill
    SILENT  is considered an expert and specialist in criminal trial law
    SILENT  one of the highest recognitions a lawyer in Florida can receive
    SILENT  the highest level of evaluation offered by the Florida Bar
    SILENT  she has tried well over 120 cases to verdict
    SILENT  has represented thousands of people accused of various offenses

The cause is grammatical, not lexical. The word list is fine: `expert`,
`expertise`, and `specialist` are all in `SUPERIORITY_WORD`. What fails is the
gating clause. `SUPERIORITY` fires only on `SUPERIORITY_WORD && FIRM_REFERENCE`,
and `FIRM_REFERENCE` is `we|we're|us|our|ours|the firm|this firm|our firm|this
office|Hines|McCarty`. Every one of those is first person or a firm name. A bio
is third person about a named individual: "Ms. Pavlidis," "she," "her." So the
firm-reference half never matches, and the superiority half never gets to fire.
`SUPERIORITY_OF_SERVICES`, the other arm, needs the word to directly modify
`attorney|lawyer|firm|...`, which "an expert and specialist in criminal trial
law" does not. `OUTCOME_CLAIM` is explicitly `we|our`-gated, so "she has a record
of winning difficult cases" is invisible to it by construction.

This is the same defect the file's own comment describes fixing for superiority
once before, arriving in a new place: the gate was tuned against the voice the
charge pages are written in, and an attorney bio is written in a different voice.
Third-person prose about a named lawyer is the single most claim-dense surface a
law firm publishes, and it is the one voice the gate cannot read. The Pavlidis
copy was caught by a person reading the paste, which is the path the gate exists
to not depend on.

Not fixed in the same change that found it, deliberately, and the fix is two
parts rather than one:
[NEEDS: a third-person arm on `FIRM_REFERENCE` -- the attorney surnames and
title-plus-surname forms -- so the existing word list works on bio prose. Note
that `Hines` and `McCarty` are already there as FIRM names, which means the
McCarty bio is partly covered by accident and the Pavlidis and Trina bios are
not covered at all. Accidental coverage that varies by whose name is on the door
is worse than none, because it makes the green line mean different things on
different pages.]
[NEEDS: a bio-shaped `measuredPages` entry that the banned-term sweep reads and
the structural-variation, generic-heading, and duplicate-copy gates skip, since
those are written against charge-page shape and would fail on a bio for reasons
that are not defects.]
Both need planted-violation self-tests built from the eight real sentences above.
A gate with no self-test is instance 8 again.
