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
