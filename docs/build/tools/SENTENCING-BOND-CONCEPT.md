# Sentencing Calculator and Bond Estimator: concept and recommendation

Written 2026-08-19. Concept document only. No code was written and nothing under
`src/` was modified.

Corrected 2026-08-20 in the D28 low-findings pass, five places: the B.3
degree-span table gains the sixth degree the chart uses (second degree felony
punishable by life, level 9, one row); three "30 charge pages" counts become 29
written pages (ppp-loan-fraud has no written content); the B.2 individualized-
inquiry quote is completed to its full sentence; and the B.2 withheld-mapping
quote is re-attributed to its actual source. The round confirmed zero
substantive errors in this document's 124 checked claims; see
docs/build/tools/REVIEW-2026-08-20.md.

**Read for this**: CLAUDE.md; DECISIONS.md D1 through D27; CASES-WE-DEFEND-PLAN.md,
Section 5 in full; WEBSITE-PLAN.md Sections 1, 2 (Tier 2 and Tier 3), 5 and 9;
docs/research/STATE.md; docs/research/tools-and-hooks.md (W5) in full;
docs/research/avoid.md items 30 through 39 and 61 through 63;
docs/research/briefs/TOOLS.md; docs/research/briefs/ST-03-battery.md Sections 7.13
and 7.14; docs/research/PAGE-SOURCES.md; `src/lib/statutes.ts`;
`src/lib/statute-tables/` (921.0022, 921.0023, 921.0024, 775.082, 775.083,
775.084, 775.087 read in full, the rest surveyed);
`scripts/statute-table-annotations.json`; all five `scripts/check-*.mts`;
`src/lib/site.ts` `tools`.

**Fetched this session**: The Florida Bar Handbook on Lawyer Advertising and
Solicitation (SCA-approved 12-10-25), extracted with `pdftotext -layout` and read
directly rather than through a summariser, for the verbatim text of Rule 4-7.13
and its Comment and for the clear-and-conspicuous test in the Rule 4-7.12 Comment.
The Bark calculator page at barklaw.com, for its own results-screen framing, which
tools-and-hooks.md Section 4 could only record as reported.

---

## 0. The recommendations in one place

| Asset | Verdict | One line |
|---|---|---|
| Florida Sentencing Scoresheet Calculator | **BUILD NARROWED**, in three phases, and phase 1 is not a calculator | The arithmetic is lawful to publish. The single number is the defect, and it is fixable: the output is a **range**, never a figure. |
| Bond & Bail Estimator, Hillsborough County | **DO NOT BUILD** | Its description promises what judges typically do. Its only real source binds nobody but the booking officer, excludes every first and second degree felony by its own terms, and expires 2026-12-31. The honest version is a reference section in an existing guide, not a tool. |
| URL patterns | **Keep `/sentencing/...`**, under a stated rule | One inconsistency is real and is not the calculator's. See B.4. |

Three things this document changes about the existing plan, flagged up front
because they are the parts a reviewer should attack first:

1. **The tool's own name and description are the most predictive copy on the
   site.** "Estimate the lowest permissible sentence" describes a single figure.
   The single figure is the thing that cannot be made safe. Section B.1.
2. **A right number is more dangerous here than a wrong one.** The lowest
   permissible sentence is a **floor**. Every failure mode worth worrying about
   is an accurate low number read as a ceiling. Section A.4.
3. **None of the five gates would see this page.** All five enumerate the
   `charges` array. A tool route is invisible to every one of them and each would
   print green. Section F.

---

## A. The sentencing calculator: recommendation

### A.1 What Rule 4-7.13 actually says, verbatim

Quoted from the Bar's own Handbook, pages 71 through 74, fetched and extracted
this session. This matters because tools-and-hooks.md gap 2 records that the rule
text there came from the Handbook rather than live floridabar.org pages, and
because the version now published carries subdivisions **(b)(11) and (b)(12)**
that the W5 checklist does not mention.

The operative prohibitions:

> (a) Deceptive and Inherently Misleading Advertisements. An advertisement is
> deceptive or inherently misleading if it: (1) contains a material statement
> that is factually or legally inaccurate; (2) omits information that is
> necessary to prevent the information supplied from being misleading; or (3)
> implies the existence of a material nonexistent fact.

> (b) ... (1) statements or information that a prospective client can reasonably
> interpret as a prediction or guaranty of success or specific results;

Note the word **information** in (b)(1). It is not limited to statements. A
computed figure is information.

And then the passage that decides this question, from the Comment under
"Predictions of success":

> General statements describing a particular law or area of law are not promises
> of specific legal results or predictions of success. For example, the following
> statement is a description of the law and is not a promise of a specific legal
> result: "When the government takes your property through its eminent domain
> power, the government must provide you with compensation for your property."

And the modifier safe harbour, verbatim:

> The following list is a nonexclusive list of words that generally may be used
> to modify language to prevent violations of the rule: try, pursue, may, seek,
> might, could, and designed to.

The disclaimer presentation test, from the Rule 4-7.12 Comment:

> If a disclaimer is required to modify specific written text, generally it will
> be clear and conspicuous if it receives equal or greater prominence,
> presentation, and placement and appears in close proximity relative to the text
> to be modified. ... The overarching consideration for required information or a
> disclaimer is that consumers notice it, read or hear it, and understand it.

**What the rule does not contain.** There is no provision about calculators,
tools, or automated output anywhere in the rule or its Comment. tools-and-hooks.md
gap 1 records the same affirmative absence across the whole 2025 Handbook and the
November 2025 Technology Packet. This is not a rule that was written with this
question in mind, and nobody should represent otherwise to the client.

### A.2 What the market actually does

STATE.md line 68 supersedes the earlier W2 finding, and W5's Section 1 correction
gives the detail: interactive Florida scoresheet calculators exist and are run by
Florida firms. Verified again this session by search and by direct fetch:

- **barklaw.com** (Law Offices of Matthews R. Bark, Altamonte Springs) runs a
  working calculator. Fetched directly this session, which upgrades the W5
  record from reported to verified on these points. Its output is labelled
  **"Lowest Permissible Sentence"** and described as "an estimate of the lowest
  permissible sentence without a downward departure." Its results-screen
  disclaimer reads: "Important: This is a general estimate, not legal advice.
  Every case is different. Actual sentencing depends on facts, prosecutorial
  discretion, plea negotiations, departures, and minimum mandatories." It
  enumerates what it excludes: mandatory minimums including 10/20/Life,
  trafficking and PRR; habitual felony offender and violent career criminal
  designations; statutory maximums; departures under s. 921.0026; youthful
  offender under s. 958.04; plea negotiations; credit for time served and gain
  time. **It states no Rule 3.992 revision date**, which confirms the W5 finding
  that it ignores the October 2025 amendment.
- **Aaron Delgado & Associates** (communitylawfirm.com, Daytona) publishes one.
- **Smith & Eulo** publishes scoresheet content. Note where that name already
  appears in this repository: DOSSIER.md Section 3 built its review ladder to a
  top of Smith & Eulo at 193.
- Non-firm publishers exist too, including everycalculators.com.

**What this evidence is worth, stated honestly.** It shows the practice is not
unheard of. It does not show the practice is compliant. No disciplinary record
was searched and none is available to search efficiently, so "firms do it" is
evidence about the market and not about the rule. The Bar's own materials are
silent, and silence in a regulatory scheme is not permission. Anyone who presents
"Bark does it" as a compliance answer is making the argument avoid.md item 14
already rejects in another form: Google amplifying a pattern does not make it
lawful, and neither does a competitor shipping it.

**One thing the market evidence does establish, and it is the useful half.** The
niche is being claimed now. W5's Wayback finding was that the Bark page had zero
archived snapshots, consistent with a very recent launch. That raises urgency for
the underlying **data work**, which is the long pole, and it does not lower the
bar for the output.

### A.3 The case for building it

Four arguments, ranked by how much weight they actually carry.

**1. The arithmetic is a statutory command, and reproducing it is the Comment's
own example.** F.S. 921.0024(2) does not describe practice. It prescribes:

> When the total sentence points exceeds 44 points, the lowest permissible
> sentence in prison months shall be calculated by subtracting 28 points from the
> total sentence points and decreasing the remaining total by 25 percent.

That is a rule of law expressed as arithmetic. Publishing it is materially the
same act as the Comment's blessed example about eminent domain compensation: a
description of what the law requires, not a promise about a case. This is the
strongest argument and it is genuinely strong.

**2. The statute assigns the scoresheet to the prosecution and the check to the
defence.** F.S. 921.0024(3):

> The state attorney shall prepare the digitized scoresheet or scoresheets, which
> must be presented to the defense counsel for review for accuracy in all cases
> unless the judge directs otherwise.

The document is built by the other side and reviewed by ours. A defence firm
publishing the arithmetic is publishing the instrument of that review. That is not
marketing dressed as public service; it is the function the statute names.

**3. The demand is real and the supply is bad.** W5 records 10-plus Florida firms
across 4-plus metros maintaining scoresheet-adjacent content, blank FDLE PDFs
ranking for calculator-intent queries, and `Florida criminal punishment code
scoresheet` at 70 per month at state level. Official blank PDFs ranking for tool
intent is the cleanest possible signal that the intent is unserved.

**4. Freshness is a durable moat.** Rule 3.992 was amended effective 23 October
2025 and the Bar re-uploaded a corrected scoresheet in January 2026. The one
verified interactive competitor states no revision date at all.

### A.4 The case against, and the argument that is actually decisive

**The weak objections first, so they are not mistaken for the strong one.**

- *"A number about liberty is inherently a prediction."* No. A statutory maximum
  is a number about liberty and every one of the 29 written charge pages prints
  several.
  The site already publishes DEGREE_MAXIMUM in `src/lib/statutes.ts` and renders
  it. If a number were the problem, the site would already have it.
- *"Users will misread it."* Users misread statutory maximums too. Foreseeable
  misreading is a design input, not a veto.
- *"No Bar opinion blesses it."* No Bar opinion blesses the 29 written charge
  pages either. Absence of authority cuts both ways and settles nothing.

**The decisive objection is narrower and it is about the shape of the output, not
about the fact of an output.**

The lowest permissible sentence is a **floor**. F.S. 921.0024(2) says so twice:

> The lowest permissible sentence is the minimum sentence that may be imposed by
> the trial court, absent a valid reason for departure.

> The total sentence points shall be calculated only as a means of determining the
> lowest permissible sentence. The permissible range for sentencing shall be the
> lowest permissible sentence up to and including the statutory maximum, as
> defined in s. 775.082, for the primary offense and any additional offenses
> before the court for sentencing.

So the honest answer to "what does this produce" is a **range**, from the computed
floor to the statutory maximum. A tool that returns the floor alone has answered a
two-ended question with one end, and it has answered with the **low** end.

That inverts where the risk sits. The failure mode people expect from a legal
calculator is a wrong number. The failure mode here is a **right** number, read as
a ceiling by someone who has never seen the word "lowest" used as a term of art.
A level 7 primary offense with nothing else produces 21 months. On a third degree
felony ranked at level 7, and 49 rows of the chart are exactly that, the real
range is 21 months to 5 years. A person shown "21 months" and no ceiling has been
given accurate information that leaves them worse informed than before.

That is not a (b)(1) problem in the first instance. It is squarely **4-7.13(a)(2)**:
information supplied, with information omitted that is necessary to prevent it from
being misleading. And unlike (b)(1), which can be argued about, (a)(2) has a fix
that is mechanical: print both ends.

Note what the verified competitor does here. Bark lists **"Statutory maximums"**
among the things its calculator does not account for. That is candid and it is
also the wrong half to omit, because the statutory maximum is the other end of the
range the statute defines. Excluding it is not conservatism; it removes the
context that makes the floor readable.

**Two structural objections that survive on their own.**

- **The fact layer for the scoresheet does not exist yet.** `fs-921-0024.ts` is
  audited whole-section, and it records the worksheet grid as flattened quote
  strings, deliberately: "Level Sentence Points Total 10 116 = 9 92 = ...". The
  audit note says why, and it says the previous reconstruction was rejected: "This
  replaces the prior table's reconstructed '10 = 116' and 'Total ____' renderings,
  which the audit correctly rejected as fabrications in quote fields." **There is
  no typed point table anywhere in the repository and one cannot be regexed out of
  those quotes without redoing the fabrication the audit refused.** Section C
  itemises this. It is real work, it is D23 work, and pretending it is a parse is
  the fastest way to ship a wrong calculator.
- **CASES-WE-DEFEND-PLAN.md Section 5.7 already says do not build it**, and gives
  a reason that gets stronger with time rather than weaker: six of seven wave 2
  briefs carry an offense-level column that wants the link, and the moment a gate
  is under pressure is the moment weakening it is worth something to someone.

### A.5 The recommendation

**BUILD NARROWED.** Build it, in the phases at Section E, and accept that the
first shippable version is not the tool the card describes.

The narrowing is four rules, and each one closes a specific failure this repository
has already recorded:

1. **The output is a range, never a figure.** Floor from F.S. 921.0024(2), ceiling
   from F.S. 775.082 through the primary offense degree. Both endpoints are always
   present, and the ceiling is rendered first in reading order. If the range cannot
   be produced, no number is shown.
2. **No free numeric entry ever resolves a charge.** The user picks a chart row.
   They do not type a dollar amount, a weight, a count, or an age, and they do not
   pick a degree. This closes D22 and traps 1, 4 and 5 at the input surface rather
   than downstream of it.
3. **No prior record entry in the first two phases.** Prior record is where a lay
   user is least able to answer correctly, because it requires the offense level of
   each prior plus the recency test in the prior-serious-felony key, and it is
   where a wrong entry moves the number the most. Phase 1 and 2 compute the primary
   offense component and say so in those words.
4. **The tool is renamed and re-described.** "Estimate the lowest permissible
   sentence" is a single-figure promise in the tool card itself. Section B.1.

**Why not "do not build".** Because the objection that survives scrutiny is about
output shape, and output shape is a design decision, not a property of the subject
matter. Refusing to build for a reason that a redesign answers is not caution, it
is declining to do the design. The arithmetic is a statutory command, the statute
puts the review in defence hands, the demand is verified and the supply is
demonstrably worse. Killing it entirely would also discard the fact-layer work
that the offense-level instrument needs anyway.

**Why not "build" as scoped.** Because as scoped it outputs one number, that
number is a floor, and the floor is the low end. The card promises exactly the
artifact that cannot be made safe.

### A.6 What would change my mind, in both directions

**Toward "do not build at all":**

- The Ethics Hotline or an SCA advisory opinion saying an interactive computation
  responsive to user-entered case facts is (b)(1) "information a prospective client
  can reasonably interpret as a prediction" regardless of framing. That is a
  clean, dispositive answer and it is cheap to ask for. STATE.md Q11.
- Any Florida disciplinary action, consent judgment, or SCA finding involving a
  firm-published sentencing calculator. None was found. One would settle it.
- The attorney reading the range-framed mock and saying the range still reads as a
  forecast to a frightened person. The attorney is the one with the client contact
  and their read beats mine.
- A finding that the Rule 3.992 form as amended 23 October 2025 diverges from
  F.S. 921.0024(1)(a) in a way the statute's own text does not disclose. If the
  form and the statute disagree, this is no longer arithmetic transcription; it is
  interpretation, and it should not be automated. This is unresolved and is an
  open question at the end.

**Toward "build the full thing sooner":**

- The typed point table landing with a PASS from the independent build-then-audit
  pipeline, plus 921.0026 and 958.04 fetched and audited. That removes the largest
  practical objection.
- Attorney sign-off on the range framing plus a written C1 through C8 verification.
- Client answers to STATE.md Q11 and Q12 in the permissive direction, in writing.

**What would not change my mind:** more competitors shipping one, more pages
wanting to link to one, or the volume moving. Section 5.7 is right that pressure to
link is a reason to hold, and it is right for a reason that has nothing to do with
how much pressure there is.

---

## B. Concept for each asset that survives

### B.1 Sentencing tool: exactly what the output says and refuses to say

**The name and description change first.** The current card:

> "Florida Sentencing Scoresheet Calculator" / "Estimate the lowest permissible
> sentence under Florida's Criminal Punishment Code by charge, level, and prior
> record."

Three defects in one sentence. "Estimate" invites a forecast reading and is the
verb Bark uses. "The lowest permissible sentence" names one endpoint. "By ... prior
record" promises an input that phase 1 and 2 do not take and that a lay user cannot
supply reliably.

Proposed replacement, and it is deliberately duller:

> **"Florida Criminal Punishment Code scoresheet: how the arithmetic works"**
> "Work through the Criminal Punishment Code scoresheet the way F.S. 921.0024
> sets it out, and see the sentencing range the statute produces from a given
> offense level."

No "your". No "estimate". "The statute produces", not "you face".

**What the results panel says.** Drafted so the copy is reviewable now rather than
described. Reading order top to bottom, all of it in one viewport at 320px width:

> **What this scoresheet produces**
>
> **Ceiling: up to 5 years.** F.S. 775.082(3)(e) sets the statutory maximum for a
> felony of the third degree at a term of imprisonment not exceeding 5 years. The
> permissible range runs up to and including that maximum.
>
> **Floor: 21 months.** F.S. 921.0024(2) provides that when the total sentence
> points exceeds 44 points, the lowest permissible sentence in prison months is
> calculated by subtracting 28 points from the total sentence points and
> decreasing the remaining total by 25 percent. From 56 points that is 21 months.
>
> **So the range the code sets is 21 months to 5 years**, and the statute calls the
> lower figure the lowest permissible sentence, which means the minimum a trial
> court may impose absent a valid reason for departure. It is not an estimate of a
> sentence and it is not the top of anything.
>
> **This arithmetic ran on one input: an offense at severity level 7.** A real
> scoresheet is not one input. It also scores additional offenses, victim injury,
> prior record, legal status, community sanction violations, prior serious and
> prior capital felonies, and firearm or semiautomatic weapon possession, and it
> then applies any of eight multipliers. Every one of those raises the floor. None
> of them is in the figure above.
>
> **And it says nothing at all about several things that decide real sentences**:
> mandatory minimum terms, the habitual offender, habitual violent offender,
> violent career criminal and prison releasee reoffender designations, downward
> departures, youthful offender sentencing, plea negotiation, and the discretion
> the statute gives the court in its own words.
>
> **This is educational information about how a statute computes. It is not legal
> advice, it is not about your case, and using it does not create an
> attorney-client relationship with Hines & McCarty. Every case is different.
> Speak to a Florida lawyer about yours.**
>
> Computed from F.S. 921.0024 (2025 Florida Statutes) and the offense severity
> ranking chart at F.S. 921.0022 (2025), implementing the Fla. R. Crim. P. 3.992
> scoresheet effective 23 October 2025 as corrected January 2026. Florida law
> only. This page does not address federal sentencing. Arithmetic reviewed by
> [attorney] on [date].

**What the output refuses to say, as a hard list.** Any of these appearing anywhere
in the tool's copy is a build failure:

- "your sentence", "your score", "your level", "you are facing", "you would get",
  "likely", "expected", "typical", "usually", "on average", "most people"
- any single number presented without its other endpoint
- any figure attributed to a person rather than to a computation
- "confidential" applied to the tool, or any implication of privilege
  (avoid.md item 31)
- any past result, verdict, testimonial, or record characterisation on the page
  (Rule 4-7.13(b)(2), (b)(3), (b)(9))
- "first in Florida" or any first-mover claim (avoid.md item 32, and it is false)
- any statement or implication of Florida Bar approval (Rule 4-7.13(b)(10))
- "expert", "specialist", "best", or "leading" applied to the firm anywhere on the
  page, gated on STATE.md Q5 in any event (Rule 4-7.14)

**Does the framing language actually work? An honest assessment.**

Partly. Here is what it does and does not do, separated.

**It does work on 4-7.13(a)(2).** The omission problem is a real problem with a
real fix, and printing both endpoints plus the excluded-factors list is that fix.
An (a)(2) complaint against a page that leads with the ceiling and enumerates
eleven unmodelled factors adjacent to the output is a weak complaint.

**It works on 4-7.13(a)(1)** provided the version stamp is true and maintained. That
is an engineering and cadence commitment, not a copy commitment, and it is where
this will actually fail if it fails.

**It works only partially on (b)(1), and I am not going to claim otherwise.** The
Comment's safe harbour is for *general statements describing a particular law*. The
eminent domain example is general in a way this is not: it describes a rule without
being responsive to anything the reader supplied. Our output is responsive to an
input the reader chose because it matches their case. The framing narrows the gap.
It does not close it. Whether a computation triggered by a reader's own charge
selection is still "general" is the exact question no Florida authority answers,
and the pre-clearance route in STATE.md Q11 exists for questions of this shape.

**And a limit on disclaimers generally, which should be said plainly to the
client.** The Comment's own test is that "consumers notice it, read or hear it, and
understand it." That is an outcome standard about a reader, not a checklist about a
page. A disclaimer that satisfies the prominence test on the served page does not
travel into a screenshot, a print-to-PDF, or a paragraph a family member retypes
into a text message. Section G treats that as a test case rather than as a
caveat, because it is the D24 shape exactly: the artifact the reader carries away
is not the artifact anyone checked.

**The one design decision that does more than all of the copy.** Lead with the
ceiling. A reader who reads only the first line reads the worst case, not the best
one. Every ordering choice on the panel is made against the reader who stops
reading early.

### B.2 Bond estimator: the description is the problem, and so is the product

The card says:

> "Bond & Bail Estimator, Hillsborough County" / "See how bond is typically set
> locally and what to expect at first appearance."

**"Typically" and "what to expect" are unsourceable and this project cannot write
them.** There is no dataset of Hillsborough bond outcomes in this repository, none
in the research, and none available on the C12 allowlist. A sentence about what
judges usually do is a claim about a decision-maker's practice. Under D26's own
logic it would also be the most-copied wrong record on the site, because it is the
kind of thing later writers consult precisely because they have not looked.

**What Hillsborough actually publishes, and why it is not what the tool needs.**
Administrative Order S-2025-063, quoted verbatim in ST-03-battery.md Section 7.13
from `https://www.fljud13.org/Portals/0/AO/DOCS/S-2025-063.pdf`. Four facts, each
one fatal to the estimator on its own:

1. **It binds the booking officer, not a judge.** Quoted: "This bond schedule
   applies only to the booking officer, not to judges. This schedule does not bind
   any judge conducting first appearance hearings or bail bond hearings. All
   persons brought before a judge for a first appearance hearing or any future
   proceeding are entitled by law to an individualized inquiry, based on the
   specific circumstances of the arrestee, to determine whether the arrestee
   should be released and the conditions of release." The card promises
   first-appearance expectations. The source expressly disclaims first appearance.
2. **Section 2 removes the schedule for most of this firm's work.** Quoted:
   "The following persons may not be released before his or her first appearance
   hearing, and the bond schedule enumerated in section 4 of this administrative
   order does not apply ... G.i. A capital felony, life felony, felony of the first
   degree, or felony of the second degree". Every first and second degree felony is
   out. So is a named list at G.iii including felony battery, domestic battery by
   strangulation, domestic violence as defined in s. 741.28, stalking, assault or
   battery on a law enforcement officer, assault or battery on a person 65 or
   older, robbery, burglary, carjacking, and resisting with violence. For a large
   share of the 29 written charge pages the correct output is "the schedule does
   not apply to this."
3. **The order expires by its own terms on 31 December 2026**, four months out. It
   adopts the statewide schedule under Florida Supreme Court order AOSC25-69 and
   already supersedes S-2024-083. A tool whose only data source expires within the
   quarter is a maintenance liability with a launch date.
4. **The project has already decided, twice, that this mapping is not done here.**
   ST-03-battery.md constrains the battery page so that "the mapping of a charge
   to a schedule row is explicitly withheld as an application rather than a
   quotation" (W4-01's restatement says "a specific charge"),
   and W4-01 applies the identical constraint and records "Whether 794.011 is
   bond-schedule eligible under AO S-2025-063: NOT DETERMINED, deliberately."
   The live sexual battery page says so in copy: "This page does not state how the
   circuit's bond schedule applies to a charge under Statute 794.011, because
   mapping a specific charge onto a schedule row is an application rather than a
   quotation." **A bond estimator is a machine for doing exactly the thing two
   briefs refused to do by hand and a published page announces it will not do.**

**Two further problems.**

- avoid.md item 63 already reads "Standalone bail/bond walkthrough: do not build
  standalone", with the reason that the consumer SERP is a bail-bondsman wall. The
  WEBSITE-PLAN.md Section 5 justification for adding the estimator back ("this is a
  factual lookup rather than a prediction: low accuracy risk") rests on a premise
  that the S-2025-063 text contradicts. It is a lookup only if the schedule
  answers the question, and for first and second degree felonies it does not.
- TOOLS.md's not-recommended table already covers the shape: "A 'does my case
  qualify' eligibility checker of any kind ... Collects case facts, returns an
  answer about the reader's own situation." Substituting bond for eligibility does
  not change the shape.

**Is this a schedule lookup, or is the honest version a different product?**

It is a different product, and it is not a tool.

**Recommendation: DO NOT BUILD the bond estimator. Publish the schedule as a
reference section inside `/resources/guides/after-an-arrest`**, which
WEBSITE-PLAN.md Tier 3 already designates as the guide that "absorbs the state bond
walkthrough". The section is prose plus a quoted table, in this order:

1. **The limitation first.** The schedule applies only to the booking officer and
   binds no judge. Quoted, not paraphrased.
2. **The exclusions second.** Section 2.G, quoted, with the plain statement that
   for a capital, life, first degree or second degree felony the schedule does not
   apply and the person is not released before first appearance.
3. **The amounts third**, quoted from section 4, with no charge mapped onto any
   row, consistent with the ST-03 constraint.
4. **What happens instead**, from Rule 3.130(a) (24 hours, recorded verbatim in
   PAGE-SOURCES.md), Rule 3.130(d) (the judge determines detention or release under
   rule 3.132 or rule 3.131), and F.S. 903.047 pretrial release conditions
   (whole section read 2026-08-14, recorded).
5. **The expiry**, stated on the page: the order expires 31 December 2026, and the
   page carries the shortest review cadence on the site under Section 9.3's
   off-cycle trigger, which ST-03 has already flagged for this exact order.

The one interactive element worth keeping is the one that involves no legal
judgment at all: **the cash versus surety cost comparison** W5 Candidate 5
identified. It is arithmetic on a number the reader supplies from their own paper,
it maps to no charge, and it makes no claim about what any judge will do. Even
that should ship only after the premium figures are verified, since W5 records
them as reported and not verified.

**If the client insists on a bond tool anyway**, the only version that survives is
a schedule **reader**: the reader picks the schedule row's own words from
section 4, and the tool returns the amount that row states plus the two limitations
above, with no charge picker, no degree picker, and no mapping. That is a table
with a filter on it. It is honest and it is not worth building as a tool, which is
the point.

### B.3 What ships in the calculator's place, and it already has a rank

TOOLS.md item 1, the **offense-level comparison instrument**, is rank 1 and its
own C1 through C8 assessment is already written and already clears. It exists to
make one thesis visible: **degree does not predict offense level**. The chart data
in this repository proves that thesis harder than TOOLS.md knew. Computed from
`fs-921-0022.ts` this session:

| Degree | Severity levels it actually spans in the chart |
|---|---|
| Third degree felony | 1, 2, 3, 4, 5, 6, 7 |
| Second degree felony | 3, 4, 5, 6, 7, 8 |
| First degree felony | 5, 7, 8, 9, 10 |
| First degree felony punishable by life | 7, 8, 9, 10 |
| Second degree felony punishable by life | 9 (one chart row, 817.568(7)) |
| Life felony | 9, 10 |

A third degree felony spans seven of the ten levels. Forty-nine chart rows are
third degree felonies ranked at level 7, which is the same level the chart gives to
forty-five first degree felonies. That is the whole argument for the instrument and
it is also the argument that a calculator keyed on degree is unbuildable.

### B.4 URL patterns: the resolution

The premise needs one correction before the recommendation. Of the two tools in
scope, **only the calculator is off-pattern**. `/resources/tools/bond-bail-estimator`
already matches the other three.

**But there is a real inconsistency, and it is not that one.** `src/lib/site.ts`
has `/resources/tools/bond-bail-estimator`. WEBSITE-PLAN.md Section 5 has
`/resources/tools/bond-estimator`. Two documents name two URLs for one page. If the
bond estimator is not built, delete the row from `tools` rather than leaving a
`published: false` entry whose href disagrees with the plan; a dormant wrong URL is
the shape D27 warns about, correct-looking and unreviewed.

**Recommendation: keep `/sentencing/florida-criminal-punishment-code`, and record
the rule that makes it correct rather than an exception.**

> A tool that is the hub of a topical silo lives at that silo's root. A tool that
> serves no silo lives at `/resources/tools/`.

Under that rule all five current entries are right. WEBSITE-PLAN.md Tier 2 already
reserves `/sentencing/` for a 16-page silo: the hub plus `level-1` through
`level-10` plus five degree pages. The calculator is that hub. Moving it to
`/resources/tools/` orphans the hub of a silo the client's own SEO.pdf asked for
("add sentencing pages by felony level"), and leaves fifteen spoke pages pointing
sideways into a resources folder. That costs more than the inconsistency does.

The stated rule is the deliverable here, not the URL. Without it, the next tool
reopens the question, and the redirect the question is meant to avoid gets paid
later anyway.

---

## C. Data model, row by row

Everything the calculator reads, what exists, and what is new fact-layer work.
"New fact-layer work" means the D19 build-then-audit pipeline: built by one agent
from full section text, independently re-fetched and audited by a second, PASS
before it lands.

### C.1 What exists and is audited

| Source | File | State | What the tool takes from it |
|---|---|---|---|
| F.S. 921.0022 (2025) | `fs-921-0022.ts` | whole-section, 624 rows, 623 chart entries diffed as a multiset with zero missing and zero extra | The charge picker. `cite` plus `degree` plus `level`, one option per row. |
| F.S. 921.0023 (2025) | `fs-921-0023.ts` | whole-section, 6 rows | Default levels for unlisted felonies. **Carries a defect, see C.3.** |
| F.S. 921.0024 (2025) | `fs-921-0024.ts` | whole-section, 48 rows | The formula, the thresholds, the multiplier qualifiers, and the worksheet structure, **all as prose in `trigger` and `quote`.** No typed numbers. |
| F.S. 775.082 (2025) | `fs-775-082.ts` | whole-section, 54 rows | The range ceiling by degree. |
| F.S. 775.083 | `fs-775-083.ts` | whole-section, 12 rows | Fines, if the tool ever states one. It should not in phases 1 to 3. |
| F.S. 775.084 (2025) | `fs-775-084.ts` | **partial**, 46 rows | Named as an unmodelled factor only. **No exhaustive claim about it is permitted**, because `check-claims.mts` rule 2 bars a negative claim over a partial reading, and "the only enhancements that apply are" is exactly that claim. |
| F.S. 775.087 (2025) | `fs-775-087.ts` | whole-section, 24 rows | The (2) and (3) carve-out lists that the 18-point and 25-point weapon tiers cross-reference. |
| `DEGREE_MAXIMUM` | `src/lib/statutes.ts` | shipped | Human-readable ceilings, already rendered elsewhere on the site. |

### C.2 The single largest piece of new fact-layer work

**A typed point table does not exist and cannot be derived from what does.**

`fs-921-0024.ts` records the Primary Offense grid as one quote string:

> "Level Sentence Points Total 10 116 = 9 92 = 8 74 = 7 56 = 6 36 = 5 28 = 4 22 = 3
> 16 = 2 10 = 1 4 = Total"

and its own `unread` field explains why, and records that the previous
reconstruction was rejected: "This replaces the prior table's reconstructed
'10 = 116' and 'Total ____' renderings, which the audit correctly rejected as
fabrications in quote fields."

So the honest statement of the work is: **the point values must be transcribed from
flsenate.gov into typed fields by a fresh build-and-audit pass, not regexed out of
the quote strings.** Splitting on whitespace and reading pairs would work on this
grid and would be the same act the audit already refused, with the added hazard
that it looks like a parse and would review as one. D23 governs: a repair, and by
the same logic a transcription, is a fresh writing act and gets the same
verification as writing.

Four grids and eight scalars are needed:

| Table | Rows | Note that must travel with it |
|---|---|---|
| Primary Offense | levels 1 to 10 | **No M row exists.** A misdemeanor cannot be a primary offense on this worksheet. |
| Additional Offenses, per count | levels 1 to 10 plus M | Fractional at level 5 and below. M is 0.2. |
| Victim Injury, per count | 7 categories | The two sexual categories sit at the bottom of the printed table and outrank several above them. Sexual penetration is 80, against severe at 40. |
| Prior Record, per count | levels 1 to 10 plus M | Lower than Additional Offenses at every level **except M, which is 0.2 in both.** The audited note says so explicitly, because the obvious generalisation is false. |
| Legal status | 4 | Status at the time the current offense was committed, not criminal history. |
| Community sanction violation | 6, or 12, or 24 | The 6 is a default only. The sentence ends "unless any of the following apply". |
| Prior serious felony | single 30 | Requires a level 8, 9 or 10 primary or additional offense **and** a prior meeting a 3-year recency test. Not per prior. |
| Prior capital felony | 2 x (primary + additional) | Twice the **offense** points, not twice the subtotal. |
| Firearm | 18 | Non-s. 775.087(2) felonies. |
| Semiautomatic or machine gun | 25 | Non-s. 775.087(**3**) felonies. Different cross-reference from the 18-point tier, mid-paragraph after a semicolon and "or". |

### C.3 Defects in the existing data that a calculator would consume

**Defect 1, and it is live. The 921.0023 degree taxonomy collides.** The row for
921.0023(4), "A felony of the first degree punishable by life within offense level
9", is recorded as `degree: "first degree felony"`, because the audit ran before
the union had the value. The row's own trigger field flags this: "AMBIGUITY FLAG on
the degree taxonomy". Meanwhile `src/lib/statutes.ts` **does** carry
`"first degree felony punishable by life"` in the `Degree` union, and
`fs-921-0022.ts` uses it on 19 chart rows.

Consequence for a calculator: a lookup from degree to default level finds two rows
matching "first degree felony", 921.0023(3) at level 7 and 921.0023(4) at level 9,
and cannot tell them apart from typed fields. Level 7 is 56 points, level 9 is 92.
That is 21 months against 48 months out of one taxonomy collision in this
repository's own data.

**This is trap 4 in a second form.** Trap 4 as stated is that 921.0023 assigns
levels to felonies the chart does not, so "no level" is false and a page that
rendered "Not applicable" beside seven felony rows was wrong. That trap says
*consult 921.0023*. This defect says *consulting it by degree is not enough*.

Fix, and it is fact-layer work: re-audit `fs-921-0023.ts` so row (4) carries
`"first degree felony punishable by life"`, or add an explicit disambiguator. Until
then the calculator must not read that table by degree at all.

**Defect 2. `fs-800-04.ts` carries a count of prior convictions in `min`**,
contrary to the convention settled in `statute-table-annotations.json`, and the
annotation file records it as left as audited and flagged for the next re-audit.
The amount rules are off for that statute so nothing reads it today. A calculator
that read `min` generically would read it.

**Defect 3, upstream and not this project's. Administrative Order S-2025-063 is
not in PAGE-SOURCES.md.** It lives only in ST-03-battery.md Section 7.13, and only
four of section 4's rows are quoted, being the rows the battery page needed. Under
D26 that is a partial record on a document already relied on by two live pages. If
any bond content is written, the order gets a full PAGE-SOURCES.md entry first,
fetched and independently re-verified, with the excerpt marked as an excerpt.

**Defect 4. Fla. R. Crim. P. 3.131 is not recorded verbatim anywhere.** It appears
only inside quotations of other documents: once inside the Rule 3.130(d) text in
PAGE-SOURCES.md, and twice inside the administrative order's own cross-references.
Rule 3.130 is recorded verbatim; 3.131 is not. Any bond content stating what 3.131
requires needs a fetch first.

### C.4 New fact-layer work required, complete list

| # | Source | Why | Blocks |
|---|---|---|---|
| 1 | The four point grids and eight scalars, typed | C.2 | Phase 2 |
| 2 | Fla. R. Crim. P. 3.992 scoresheet, 23 Oct 2025 as corrected Jan 2026 | C6 requires the implemented revision by date. **Nothing in this repository records the form at all.** Fetch both PDFs, diff the form against F.S. 921.0024(1)(a), and record any divergence. | Phase 2, and see the open question |
| 3 | F.S. 921.0026, downward departures | Named in the excluded-factors list. Naming it is fine without a fetch; describing it is not. | Only if described |
| 4 | F.S. 958.04, youthful offender | Same | Only if described |
| 5 | F.S. 948.06, violent felony offender of special concern | Gateway for the 12 and 24 point community sanction tiers. `fs-921-0024.ts` records it NOT FETCHED. | Phase 3 |
| 6 | F.S. 775.0823, 775.0875(1) | The three justice-personnel multiplier tiers. 784.07 is present; these two are not. | Phase 3 |
| 7 | F.S. 874.03, 828.12(2), 316.1935, 379.303 | Gang, animal cruelty, fleeing-or-eluding multiplier predicates. Note `fs-316-1939.ts` exists and is a **different section**; 316.1935 is absent. | Phase 3 |
| 8 | F.S. 787.01, 787.02 | Adult-on-minor multiplier predicates. 794.011, 800.04 and 847.0135 are already present. | Phase 3 |
| 9 | Plain-English charge labels | The chart's Description column is expressly non-controlling under 921.0022(2): "the language in the right column of the chart is provided solely for descriptive purposes." So descriptions may be shown **as the chart's own descriptive text, attributed**, and never as a statement of what the offense is. FDLE's Arrest/Clerk Statute Table is the alternative backbone and is not in the repository either. | Phase 1 copy decision |

Items 3 and 4 are the cheapest and highest-value: they are the two things Bark
excludes by name, and naming them without fetching them is permitted, so they cost
a sentence each.

---

## D. Implementation

### D.1 Routes

```
/sentencing                                     silo hub, static
/sentencing/florida-criminal-punishment-code    the tool, hub of the silo
/sentencing/level-1 ... level-10                spokes, static
/sentencing/third-degree-felony ... capital-felony   spokes, static
/resources/tools-and-guides                     already exists, links in
/resources/guides/after-an-arrest               carries the bond schedule section
```

### D.2 Server versus client

**Server component for everything except the interaction.** The page shell, all
prose, the disclaimers, the version stamp, and the attorney accuracy note are
server-rendered so they exist in the HTML before any script runs. This is not only
a performance choice: it is what makes Section F's rendered-artifact gate possible,
because a gate greps built HTML and cannot see a client-rendered string.

**One `"use client"` island**, which is the exception CLAUDE.md permits, holding
the picker and the results panel. Under 300 lines, with the data tables in
`src/lib/` per the same rules.

**The disclaimers are not inside the island.** They are server-rendered siblings,
statically adjacent to where the island renders its output. If the island fails to
hydrate, the reader gets the disclaimers and no number. That failure direction is
the correct one and it should be deliberate rather than lucky.

### D.3 Input validation

The validation rule that matters is architectural, not defensive: **the tool takes
no free numeric input that resolves a charge.**

| Input | Type | Validation |
|---|---|---|
| Primary offense | Selection from a shipped list of chart rows, one option per row, keyed by row index and not by cite | Index must exist in the shipped table. Rows whose degree is capital felony are absent from the list entirely. |
| Additional offense counts | Integer, per level, 0 to 20 | Integer only. Negative rejected. Above 20 rejected with a message that the tool does not model it, not silently clamped. |
| Victim injury counts | Integer, per category, 0 to 20 | Same. |
| Weapon | Three-way radio: none, firearm, semiautomatic or machine gun | Never two at once. |
| Legal status, community sanction tier | Enumerated | Community sanction is a four-way choice (none, 6, 12, 24), never a checkbox, because the 6 is a default with exceptions. |
| Prior record | **Absent in phases 1 and 2** | |

**Silent clamping is forbidden.** A rejected input says it was rejected and why.
This is the D22 rule generalised: a mechanism that appears to run while quietly
substituting something else is the failure shape this project keeps hitting, and
`Math.min(20, n)` on a user's input is that shape.

**No amount, weight, age, count, or dollar figure is ever accepted as a route to a
degree or a level.** This is the design answer to trap 1. The scoresheet does not
need one: F.S. 921.0024 contains no dollar figures at all, which its own audited
first row states after a scan of the full operative text. The temptation to add an
amount box comes from the charge picker wanting to be friendly, and that is exactly
where `rowsAt("817.568", 15)` returns the 10-to-20-persons tier and answers a
question about fifteen dollars with a felony degree.

### D.4 What is logged

**Nothing. Not reduced, not anonymised, not aggregated with parameters. Nothing.**

CASES-WE-DEFEND-PLAN.md Section 5.4 already states this as C5 and its reasoning is
right: a policy of not looking is weaker than an architecture that never receives.
Restated as build constraints:

- No API route, server action, or form POST carries any input.
- No input appears in a URL, including hash fragments. A hash is not sent to the
  server but it **is** readable by any script on the page and it survives in
  browser history and in a pasted link. A shared link that reconstructs someone's
  charge selection is a case-facts leak with no server involved.
- `Referrer-Policy: no-referrer` on the tool route.
- No analytics event carries an input as an attribute. A page-view count is fine. A
  "calculated" event with `level: 7` is not, and it is the one a well-meaning
  analytics ticket will ask for.
- No third-party script on the route at all, which also means no font, tag manager,
  chat widget, or map embed. Every one of them sees the URL and the Referer.
- No `localStorage`, `sessionStorage`, cookie, or service-worker cache of inputs.
- `autocomplete="off"` on the controls, so a browser does not retain a charge
  selection in a form-fill profile.
- The route is excluded from any error-reporting integration that captures form
  state or breadcrumbs.

**One thing the plan does not currently say and should.** A print stylesheet is
required, and its job is to make the disclaimers survive. If a reader prints or
saves to PDF, the panel that comes out must carry the ceiling, the floor, the
excluded-factors list, and the no-relationship notice. A print stylesheet that
strips "chrome" is the D24 defect delivered by CSS instead of by a switch
statement.

---

## E. Phases

Each phase is independently shippable, independently verifiable, and useful on its
own. No phase depends on a later one for its honesty.

### Phase 1. The offense-level comparison instrument. No computation at all.

**This is the smallest honest first version, and it is not a calculator.**

It is TOOLS.md item 1, already rank 1, with its C1 through C8 assessment already
written and already clearing. It ships the charge picker and the chart data and
stops there. Output per selection: the statute cite, the degree the chart's
controlling middle column assigns, and the severity level. Plus the three
comparisons TOOLS.md specifies, and the degree-to-level span table in Section B.3
of this document.

- **Ships**: the picker, the chart, the comparisons, all disclaimers, the version
  stamp, the attorney accuracy note.
- **Computes**: nothing.
- **Unblocks**: the C9 collision ruling in plan Section 4.5, and the six wave 2
  briefs carrying offense-level columns with nowhere to link.
- **New fact-layer work required**: none. C.4 item 9 is a copy decision.
- **Verifiable by**: a rendered-artifact gate asserting every shipped chart row's
  cite, degree and level reaches the built HTML, and asserting the disclaimer
  strings are in the server-rendered output.

### Phase 2. Single-input arithmetic, as a range.

Adds one thing: from the selected chart row's level, compute and display the range.
Floor from the F.S. 921.0024(2) formula. Ceiling from F.S. 775.082 through the
row's degree.

- **Inputs**: primary offense only. Nothing else.
- **Output**: the range panel drafted at B.1, verbatim.
- **Requires**: C.4 items 1 and 2. Item 2 is the gating one, because C6 is
  unsatisfiable without the Rule 3.992 revision in hand, and because the form may
  diverge from the statute in ways this document cannot rule out.
- **Explicitly carries**: the sub-44 branch as its own outcome, not as a zero. At
  44 points or fewer the statute prescribes "any nonstate prison sanction", with
  the court's discretionary escape hatch in the same sentence, and the tool prints
  both halves. A tool that shows "0 months" there is stating something the statute
  does not say.
- **Also carries**: the "any sentence to state prison must exceed 1 year" floor, in
  words, because the audited table deliberately did not type it into `min` and
  explains why.

### Phase 3. The rest of the worksheet.

Additional offenses, victim injury, legal status, community sanction violation
tiers, prior serious and prior capital felony, weapon tiers, and multipliers.

- **Requires**: C.4 items 5 through 8, plus the full test-vector suite at F.4
  passing.
- **The multipliers are the hard part and the qualifiers travel with them
  unconditionally.** Drug trafficking is level 7 or 8 only and is discretionary,
  the one discretionary multiplier in the section. The gang and adult-on-minor
  multipliers each close with a cap the court must apply instead, running opposite
  to the subsection (2) override. Fleeing or eluding has no checkbox on the (1)(a)
  worksheet face at all, confirmed by both builder and auditor. If any qualifier
  cannot be surfaced adjacent to the control that arms it, that multiplier does not
  ship.
- **Prior record enters here or not at all**, and if it enters, the recency test in
  the prior-serious-felony key enters with it.

### Phase 4, conditional. Prior record and the designations.

Only after phase 3 has been live long enough for the attorney review cadence to
have run at least once. The four designations (prison releasee reoffender, violent
career criminal, habitual violent offender, habitual offender) are yes/no boxes
with no point value, no multiplier, and no corresponding (1)(b) key paragraph, and
their substance lives in s. 775.082(9) and s. 775.084, the latter recorded
**partial**. They should be named as unmodelled factors and probably never
implemented.

---

## F. Verification

### F.1 What the five gates cover, which is nothing

| Gate | Reads | Covers a tool page? |
|---|---|---|
| `check:c9` | `charges`, `CHARGE_C9_KEYS` | **No.** A tool has no C9 assertion and is not in `charges`. |
| `check:pages` | `charges` via `pageCopy` | **No.** Banned terms, duplication, generic headings and reader-question coverage would never see the tool's copy. |
| `check:unverified` | `charges` via `pageCopy` plus briefs plus PAGE-SOURCES.md | **No.** The pre-write rule would not apply to a statute the tool cites. |
| `check:claims` | `charges` via `pageCopy` against `STATUTES` | **No.** The amount-to-degree, exhaustive-claim and subsection-to-degree rules would not run on tool copy. |
| `check:rendered` | `charges.filter(c => c.sections?.length)` against `.next/server/app` | **No.** It builds its path from `chargeHref(c)`. |

Every one of the five opens with `import { charges, chargeHref } from
"../src/lib/site.ts"` and iterates that array. **A tool route is invisible to all
five, and all five would print green while it shipped.** That is HUNT-LIST defect 1
and the gate-failure shape recorded in this project's memory: a check whose
reassuring result is available in the failure state.

### F.2 What has to be built, and D24 governs the shape

**Gate 6, `check:tools`, and it reads the rendered page.** D24's finding is that
when a check and the artifact it protects are built from the same source, the check
cannot see a fault in the path between them. A tool has a longer such path than a
charge page does, because the number is produced by client-side code that no gate
reads at all.

Three layers, and the third is the one that is new:

**Layer 1, copy, reading built HTML.** Extend the existing machinery to the tool
route rather than reimplementing it. Concretely: give tools a `copy` surface in
`site.ts` analogous to `pageCopy`, then run the banned-term, superiority and
outcome-claim checks over it, plus a tool-specific list from B.1. Then assert the
strings reach `.next/server/app/sentencing/florida-criminal-punishment-code.html`,
because a disclaimer that exists in data and not in HTML is D24 exactly.

**Layer 2, structural assertions on the built HTML.**

- The excluded-factors block and the no-relationship notice appear in the
  server-rendered HTML, not injected by script. Testable by greping the built file,
  which by definition contains no client-rendered output.
- They appear **before** the results container in document order. Document order is
  a poor proxy for visual proximity and it is a real proxy for screen-reader order
  and for the no-JavaScript case, and it is the part a grep can hold.
- The version stamp string is present and matches the Rule 3.992 revision date
  recorded in `src/lib/`. A stamp that disagrees with the data it claims to
  describe fails.
- No `<script src>` pointing at a third-party origin exists on the route.

**Layer 3, and this is the one D24 implies but no existing gate does: assert the
number and its frame in the same rendered artifact.** A headless render of the tool
with a fixed input, then assertions against the DOM the reader actually gets:

- The ceiling appears before the floor in document order.
- The floor is never rendered without the ceiling in the same container. The
  strongest version of this is a component-level invariant that makes the
  single-figure state unrepresentable, plus a test that fails if a floor-only
  render is ever produced.
- At 320px width and at 100% zoom, the number and the first line of the
  excluded-factors block are within the same viewport. This is Rule 4-7.12's
  "close proximity" test made mechanical, and it is worth stating that this is an
  approximation of a standard about a reader, not the standard itself.
- The print stylesheet retains all four required blocks. Render to PDF, extract,
  grep.

**What none of it does.** It does not check compliance. `check-pages.mts` already
says this about itself in terms this document will not improve on: independent
testing planted 16 realistic violations and the word-list caught none of them, and
"COMPLIANCE ON THIS SITE RESTS ON THE ATTORNEY READ." That is more true of a tool
than of a page, because the artifact is generated.

### F.3 Where the gate cannot help, and what to spend instead

D25 measured that naming a failure mode in the instructions does not prevent it,
and that the only control that caught all four repeats was a second agent that
opened the sources itself. The corollary in D25 is the budget rule: where a defect
can be caught mechanically, write the gate; where it cannot, spend the tokens on an
independent reader.

For this tool, the mechanical half is F.2 and the arithmetic vectors at F.4. The
non-mechanical half is (a) whether the transcribed point values match flsenate.gov,
which is an independent re-fetch, and (b) whether the framing reads as a forecast to
a frightened person, which is the attorney, and which no gate approximates.

### F.4 Arithmetic test vectors

Fixtures with expected outputs, written to be checkable against the statute rather
than against the implementation. Point values are those quoted in
`fs-921-0024.ts`. Every one of these is a vector where a plausible implementation
gets it wrong.

| # | Input | Expected | What it catches |
|---|---|---|---|
| TV1 | Primary level 6, nothing else. Total 36 | **Not a months figure.** "Any nonstate prison sanction", plus the court's discretionary power to impose prison up to the statutory maximum, stated in the same output | A tool that renders 0 months, or that applies the formula below the threshold and returns 6 months |
| TV2 | Primary level 7. Total 56 | Floor 21.0 months. Ceiling: the degree's maximum under 775.082 | The base formula |
| TV3 | **Total exactly 44** | Nonstate prison sanction band | The comparison operator. The statute says "exceeds 44". An implementation using `>= 44` computes (44-28) x 0.75 = **12.0 months exactly**, which does not exceed 1 year, and 921.0024(2) says "any sentence to state prison must exceed 1 year". **The off-by-one produces a sentence the statute forbids, and the arithmetic proves the operator** |
| TV4 | Primary level 6 (36) + firearm (18). Total 54 | 19.5 months | The 18-point tier |
| TV5 | Primary level 6 (36) + semiautomatic (25). Total 61 | 24.75 months | Reading past the semicolon and "or" into the second weapon tier, and using the s. 775.087(**3**) carve-out rather than (2) |
| TV6 | **Same cite, same degree, two levels.** F.S. 316.193(2)(b), third degree felony. Row A is level 3 (felony DUI, 3rd conviction), row B is level 6 (4th or subsequent). Each plus legal status (4) and one level 6 prior (9) | Row A: 29 points, **nonstate prison sanction**. Row B: 49 points, **15.75 months in prison**. Same statute, same degree, opposite outcomes | Trap 5. A picker keyed on cite, or on cite plus degree, cannot tell these apart. Only the row can |
| TV7 | Same shape on F.S. 893.13(6)(a), third degree felony at level 1 (cannabis over 20 grams) and at level 3 (any other controlled substance); and F.S. 893.13(2)(a)2. at levels 1 and 2 | Different point totals from one cite | Trap 5 again, on the statute the drug pages rest on |
| TV8 | **The statutory maximum override.** A third degree felony ranked level 7 (49 such rows exist), primary 56, plus three level 10 priors (3 x 29 = 87). Total 143 | **86.25 months**, with the override stated: 921.0024(2) provides that if the lowest permissible sentence exceeds the statutory maximum, the sentence required by the code must be imposed. The 5-year maximum does **not** cap it | A tool that clamps to `DEGREE_MAXIMUM`. Clamping is the intuitive safe behaviour and it is wrong |
| TV9 | **The multiplier cap, running the other way.** Same primary, plus two level 8 priors (2 x 19 = 38), subtotal 94, gang multiplier 1.5x giving 141 | The multiplier is **not applied**. The gang paragraph provides that if applying it results in the lowest permissible sentence exceeding the statutory maximum, the court may not apply it and must impose the statutory maximum | Two provisions in one statute resolving the same conflict in opposite directions. A tool that gets TV8 and TV9 the same way has one of them wrong |
| TV10 | **The 921.0023 taxonomy collision.** An unlisted felony of the first degree punishable by life | Level 9, 92 points, floor 48.0 months | Reading `fs-921-0023.ts` by degree returns level 7, 56 points, floor 21.0. **A 27-month error out of this repository's own data.** See C.3 defect 1 |
| TV11 | Primary level 7 (56) + one additional level 7 (28) + prior capital felony | Prior capital adds 2 x 84 = **168**, subtotal 252, floor 168.0 months | "Twice the number of points the offender receives for the primary offense and any additional offense", not twice the subtotal |
| TV12 | Primary level 7 (56) + legal status (4) + firearm (18) = subtotal 78, drug trafficking multiplier 1.5x | Total 117, floor 66.75 months | A tool that multiplies the offense score instead of the subtotal gets 106 and 58.5, wrong by 8.25 months. Every multiplier operates on the subtotal |
| TV13 | Two multipliers applicable at once | **The tool declines and says so.** The statute states no compounding rule | A tool that silently picks one, or silently multiplies both. Declining is the correct output and must be tested for |
| TV14 | Primary level 8 (74) | **34.5** months, not 34 and not 35 | The statute prescribes no rounding. Rounding is an invented rule |
| TV15 | Primary level 10 (116) + victim injury, 2nd degree murder-death (240) + legal status (4) + one level 6 prior (9) = 369 | **Both** outputs: floor 255.75 months, **and** that at 363 or more points the court may sentence to life imprisonment, with the early-release bar | A tool that reports the formula figure and drops the life branch, or vice versa |
| TV16 | Misdemeanor selected as primary offense | **Refused.** The Primary Offense table has no M row | A tool that borrows the 0.2 from the Additional Offenses table. That value exists for a different table and using it here invents a rule |
| TV17 | Capital felony selected | **Refused.** 921.0023 supplies no default for a capital felony and its own audited row says so; 775.082(1) and 921.141 govern | The picker must exclude these rather than compute something |
| TV18 | Offense date before 1 October 1998 | **Refused**, with the reason. 921.0023 reaches offenses committed on or after that date, and 921.0024(3) requires separate scoresheets where felonies fall under more than one version | A tool with no date input at all, which is the likely v1 |

### F.5 The check that catches the thing no gate can

D27's rule, applied here: what a workflow returns is what gets reviewed, and
anything written to the tree is presumed unreviewed. The transcription in C.2 is
the exposure. Two practices:

1. The point values are returned as data by the transcribing agent, verified by a
   second agent that re-fetches flsenate.gov itself, and only then written. Not
   written by the transcriber.
2. Before any commit touching this work, read the diff for text nobody applied.
   Never `git add -A` after the run.

And D27's diagnostic, which is the most useful sentence in the decision log: a
number that gets better on its own is not good news, it is a question.

---

## G. Adversarial review

**Goal of the review, stated so it cannot be softened into a code review:** make
the calculator produce a number that is wrong, or produce a number that is right
and dangerously framed. The second half is not the smaller half. Reviewers who only
hunt wrong numbers will pass a tool whose worst property is an accurate one.

**Structure.** Three reviewers who do not share a brief. D25's finding is that
naming a defect in the instructions does not prevent it, and that an independent
reader with no stake in the work is what caught every repeat, so these are separate
agents and none of them is the builder.

### G.1 Reviewer A: make the number wrong

Hostile inputs, each with the mechanism it exploits.

**Against the charge picker and the data behind it:**

1. Select **F.S. 893.13(6)(a)**. Two chart rows, both third degree felony, levels 1
   and 3. Does the picker offer both, and are they distinguishable to a reader?
2. Select **F.S. 316.193(2)(b)** and **F.S. 893.13(2)(a)2.**, the other two
   same-cite-same-degree pairs. Three such pairs exist in 624 rows; find them all
   before deciding the picker is safe.
3. Select **F.S. 790.23** (second degree felony at level 5 and first degree felony
   punishable by life at level 7), **F.S. 794.011(2)** (first degree felony and
   life felony, both level 9), **F.S. 796.05(1)**, **F.S. 456.065(2)**. Same cite,
   different degrees. Four such cites exist.
4. Feed the tool an **unlisted felony of the first degree punishable by life** and
   see whether it returns level 7 or level 9. C.3 defect 1.
5. Feed it a felony the chart does not list at all and confirm it routes to
   921.0023 rather than reporting "no level". This is trap 4 and a page already
   rendered "Not applicable" beside seven felony rows and was wrong.
6. Feed it **F.S. 815.06**, which has no row in the chart while 815.04 does, and
   confirm the tool does not borrow 815.04's rows. D14 records this constraint for
   the computer crimes page and it applies identically here.
7. Select an enhanced or reclassified offense and confirm the tool does not treat
   it as unlisted. 921.0022(2) says reclassification "shall not cause the offense
   to become unlisted".

**Against any numeric surface, which is trap 1:**

8. If any amount box exists anywhere, enter **15** against F.S. 817.568 and see
   whether the 10-to-20-**persons** prong answers a dollar question. The
   annotation file calls this "the clearest case for the whole mechanism".
9. Enter **1000** against F.S. 893.13 and see whether the gram ladder answers.
   `degreesAt("893.13", 1000)` returns two felony degrees, probed and confirmed
   before the mechanism shipped.
10. Enter **14** against F.S. 800.04 and see whether a victim age bracket answers a
    dollar question with a felony degree. This is the case D22 says has no default
    precisely because it would have been silently wrong.
11. Enter exactly **$300** against F.S. 896.101(5)(a) and exactly **$10,000**
    against F.S. 409.920(2)(b)1.b., both strict thresholds carried in the
    annotation file rather than in the audited rows.
12. If the tool consumes `min`/`max` anywhere without reading `amountUnit`, that is
    the finding. There is deliberately no default, and the gate prints which
    statutes it is not checking on every run.

**Against the arithmetic:**

13. Drive the total to exactly 44, to 44 plus one tenth, and to 43.9.
14. Enter 999 additional counts, negative counts, 0.5 counts, and a count typed as
    "1e3". Confirm rejection with a message rather than a clamp.
15. Apply two multipliers and confirm the tool declines rather than choosing.
16. Apply the drug trafficking multiplier to a level 9 offense and confirm it is
    refused; it reaches level 7 and 8 only.
17. Construct TV8 and TV9 and confirm the tool reaches different answers.
18. Check the fleeing-or-eluding multiplier exists at all. It has no checkbox on
    the (1)(a) worksheet face, so a tool built from the worksheet image has seven
    multipliers where (1)(b) has eight.
19. Confirm the prior-record M row is 0.2 and not lower than the additional-offense
    M row. The audited note flags this because the obvious generalisation is false.
20. Confirm victim injury sexual penetration is 80, above severe at 40. The audited
    note flags an ordering trap: the sexual categories sit at the bottom of the
    printed table and outrank rows above them.

### G.2 Reviewer B: make the number right and dangerous

This reviewer is told the arithmetic is correct and is asked to harm someone with
it anyway.

21. **Get a floor to render without a ceiling.** Try: JavaScript disabled, CSS
    disabled, slow hydration, a print stylesheet, reader mode, a browser
    translation pass, and an error state where the degree lookup fails but the
    level lookup succeeds.
22. **Screenshot the results panel on a 320px viewport** and on a phone at default
    zoom. If the number is in frame and the excluded-factors block is not, the tool
    has failed its own proximity requirement in the artifact people actually share.
23. **Print to PDF and read what comes out.** All four required blocks present, or
    it is a finding.
24. **Read the panel aloud in screen-reader order** and confirm the ceiling comes
    first and the disclaimer is not orphaned in a visually-adjacent but
    DOM-distant node.
25. **Take the lowest number the tool can produce and write the worst honest
    headline for it.** If "21 months for a felony" is achievable and reads as good
    news, the framing has failed regardless of what the panel says underneath.
26. **Look for the word "your" anywhere**, including in a tooltip, an aria-label, a
    placeholder, an error message, a page title, and the meta description.
27. **Read the meta title and description as they will appear in a SERP.** That is
    a lawyer advertisement, it is the copy most people will read, and it renders
    with none of the disclaimers. Bark's SERP title markets a "Free, Confidential
    Tool", which avoid.md item 31 already records as not to be replicated.
28. **Check every internal link into the tool** and read the anchor text as a
    standalone claim. "See what you're facing" on a charge page is an outcome claim
    that the tool page's own disclaimers cannot reach.
29. **Check the schema.org markup**, if any. A `FAQPage` or `HowTo` block
    summarising the tool is copy, is eligible for a rich result, and renders
    without the panel.
30. **Try to form a reasonable belief that a lawyer is advising you**, using only
    the page. Bartholomew turns on the user's subjective reasonable belief
    regardless of the firm's intent. If the tool's tone is consultative, that is
    the finding.

### G.3 Reviewer C: make the data leak

31. Read every network request the route makes. Any request to a third-party origin
    is a finding, because the URL and Referer travel with it.
32. Look for inputs in the URL, including the hash. A shareable link that
    reconstructs a charge selection is a case-facts leak with no server involved.
33. Check history, back-forward cache, `localStorage`, `sessionStorage`, cookies,
    and form autofill after a full interaction.
34. Check the analytics payload for any input as an attribute.
35. Check the error-reporting integration for form state in breadcrumbs.
36. Confirm no lead-capture gate exists on results, including a soft one such as an
    email-me-these-results control. avoid.md item 38.

### G.4 What the review is not allowed to conclude

That the tool is compliant. The reviewers can find defects and cannot certify
absence. C1 through C8 are verified by a person before launch, not asserted, and
Section 5.6 already says so. This review feeds that person; it does not replace
them.

---

## Assumptions

1. **The firm wants the sentencing silo.** The client's SEO.pdf asked for
   sentencing pages by felony level and WEBSITE-PLAN.md Tier 2 reserves sixteen
   URLs for it. If that silo is cancelled, the URL recommendation in B.4 flips and
   the calculator belongs at `/resources/tools/`.
2. **The Rule 3.992 form implements F.S. 921.0024(1)(a) without divergence.** Not
   verified. If it diverges, phase 2 does not ship as scoped. See open question 1.
3. **`fs-921-0022.ts` covers every offense a user will look for.** It covers the
   chart, whole-section, 623 entries diffed with zero missing and zero extra. It
   does not cover offenses the chart omits, which is what 921.0023 is for, and it
   does not carry the elements, thresholds or degree of any listed offense, which
   its own `unread` field states.
4. **No lead capture, per STATE.md Q12's compliance-conservative answer.** If the
   client overrules this, most of Section D.4 is void and the concept needs
   rewriting rather than amending.
5. **An attorney will read the tool and sign the accuracy note.** C7 requires a
   named attorney and a date. Without that person the tool does not ship and no
   amount of design in this document substitutes.
6. **This document's arithmetic is arithmetic, not law.** Every figure in F.4 was
   computed from point values quoted in `fs-921-0024.ts` and levels recorded in
   `fs-921-0022.ts`. The point values in that file are quoted inside flattened grid
   strings, so the arithmetic here inherits whatever a fresh transcription confirms
   or corrects. These are fixtures to check an implementation against, and every
   one of them is itself re-derived during C.4 item 1.

## Open questions

1. **Does the Rule 3.992 scoresheet form, as amended 23 October 2025 and corrected
   January 2026, diverge from F.S. 921.0024(1)(a)?** Nothing in this repository
   records the form. If the form and the statute disagree, this stops being
   transcription and becomes interpretation, and it should not be automated.
   Blocks phase 2. **This is the single question most likely to change the plan.**
2. **STATE.md Q11, pre-clearance.** Voluntary filing under Rule 4-7.19(d) or an
   Ethics Hotline call. Websites are filing-exempt under Rule 4-7.20(g), and a Bar
   finding of compliance binds the Bar in a grievance proceeding under Rule
   4-7.19(e) to (f). Whether the SCA will opine on a website-only tool is
   unconfirmed and the Hotline is the fallback. **Cheap, and it is the only route
   to a real answer on the (b)(1) question at B.1.**
3. **STATE.md Q12, lead capture.** Answered conservatively here. Needs the client's
   written agreement, not an assumption.
4. **STATE.md Q5, credentials.** Gates whether any "expert", "specialist" or
   "board certified" language may appear anywhere near the tool.
5. **Rule text currency.** The Handbook fetched this session is the SCA-approved
   12-10-25 edition and carries (b)(11) and (b)(12), which the W5 checklist does
   not. tools-and-hooks.md gap 2 asked for a human check of the live rules page
   before launch and that is still outstanding.
6. **Does the bond section belong in `/resources/guides/after-an-arrest` at all
   before 31 December 2026?** The order expires then. Publishing four months of
   accurate content that becomes wrong on a known date is a currency-policy
   question, not a research question, and Section 9.3's off-cycle trigger is the
   mechanism. Someone has to own the recheck.
7. **Who owns the calculator's currency?** Section 5.5 puts it on the shortest
   cadence on the site because a stale calculator is a compliance problem rather
   than a staleness problem. `owner` and `lastReviewed` are `[NEEDS]` across the
   site. A tool with no owner should not ship, and that is a staffing answer.
8. **Should `fs-921-0023.ts` be re-audited now?** C.3 defect 1 is live in the data
   whether or not this tool is built, and any page that maps degree to default
   level can hit it.
9. **Is the bond estimator row deleted from `src/lib/site.ts`, or left dormant?**
   It currently disagrees with WEBSITE-PLAN.md on its own URL. Leaving a dormant
   entry with a wrong href is the D27 shape: correct-looking and unreviewed.
