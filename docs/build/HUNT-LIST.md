# Hunt List

Named defect categories to actively look for during review, in this project's
own work rather than in the market.

**This file did not exist before 2026-08-13.** It was created when the first
entry was named. It is deliberately separate from docs/research/avoid.md, which
is a dated research artifact about competitor tactics not to copy. This file is
about how we get things wrong, and it is a living document.

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
   automated pass. This is why the 33-day guide's entry in REVIEW-QUEUE.md
   requires a person to open the Bar URL in a browser before publish, instead of
   requiring another agent to fetch it.

### Where this already applies

- **REVIEW-QUEUE.md**, the 33-day rule correction guide: open verification
  requires a human, explicitly because a second automated pass against the same
  compilation would not be a second path.
- **CASES-WE-DEFEND-PLAN.md Section 10.3 (C12)**: the allowlist governs whether
  a source is authoritative. It says nothing about how many independent paths a
  claim rests on. These are different questions and both need answering.
- Any future adversarial verification: report paths, not agents.
