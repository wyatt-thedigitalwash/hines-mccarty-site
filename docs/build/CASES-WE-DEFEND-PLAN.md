# Cases We Defend -- Section Plan

Structure, content, draft copy, and build sequence for the practice-area
section. Sits under docs/build/WEBSITE-PLAN.md Tiers 1 and 2 and extends its
money-page template (Section 4) rather than repeating it.

Sources: docs/research/content-gaps.md (the local content bar and the eight
topic gaps), docs/research/keywords.md (winnability grades quoted throughout),
docs/research/avoid.md Section 2 (the competitor patterns not to copy),
docs/research/tools-and-hooks.md Section 4 (the cited Bar checklist behind the
calculator rails), docs/research/DOSSIER.md Section 1 (referral flow, market
thesis), SITE.md (voice, palette, sensitive-topic framing).

Draft copy is first-pass and needs an attorney read before publication. Every
statutory figure carries a [VERIFY] marker until checked against the operative
statute.

Revision note: Sections 5, 8, 9, 10, and 4.5 were added in the second pass.
Section 11 (Layer 2 hub) was added in a later pass; Compliance Rails,
Done-Criteria, and Open Questions renumbered to 12, 13, and 14. The
build sequence (Section 7), the level 3 template structure (Section 4.3), and
the scoresheet linking strategy (Section 4.2) are approved and unchanged.

---

## 1. Scope: This Is a Section, Not a Page

The nav item hides roughly 30 pages across three levels. Planning the hub alone
would be useless, so this covers all three, with detail decreasing as it goes
down.

| Level | Pages | URL pattern |
|---|---|---|
| 1. Section hub | 1 | `/cases-we-defend` |
| 2. Silo hubs | 3 | `/criminal-defense`, `/federal-criminal-defense`, `/white-collar-defense` |
| 3. Charge pages | ~26 | `/criminal-defense/grand-theft-defense`, and siblings |

The full page list is in WEBSITE-PLAN.md Section 3, Tier 2. It comes from the
client's SEO.pdf: 10 state, 10 federal, 9 white-collar with federal overlap
cross-linked rather than duplicated.

**The level 3 template matters more than any individual page, because it gets
written 26 times.** Most of the effort in this plan is spent there.

---

## 2. Level 1: The Section Hub

**What it is honestly for.** Nobody searches "cases we defend." This page has
almost no direct keyword value. Its two real jobs:

1. **Internal link distribution.** It is how authority reaches 26 charge pages.
2. **Referral navigation.** A visitor who does not know the legal term for what
   they are facing needs one place that lists everything.

Keep it lean. A 3,000-word hub here is effort that belongs on a charge page.

### Structure

**Section 1. Statement (navy)**

> **H1:** Cases we defend.
>
> Hines & McCarty handles serious state and federal charges in Hillsborough
> County and in the Middle District of Florida, including the matters many
> firms refer out. Select a charge to read what it involves, what the statute
> says, and how the defense is built.

**Section 2. Three silo cards (white)**

Reuse the existing `capabilities` data in src/lib/site.ts. State, Federal,
White-Collar, each with its summary line and a link down.

**Section 3. The full charge index (linen)**

All 26 charges, grouped under their silo, as plain link lists. This is the
section's entire SEO purpose.

**Do not paginate it, hide it behind tabs, or lazy-load it.** Tab-hidden content
is discounted by Google, which is exactly why the home practice grid was changed
to render all three groups in the DOM. Same rule applies here, with more at
stake.

**Section 4. Where the cases are heard (white)**

Short. The 13th Judicial Circuit and the Middle District of Florida, Tampa
Division. Links to the office location pages (Section 8).

**Section 5. Close (navy)**

Consultation CTA and the NAP block. Reuse `OfficeBlock` from the attorney build,
which already renders every published office.

---

## 3. Level 2: The Silo Hub Template

Three pages, one shape.

**Set expectations honestly.** keywords.md grades "criminal defense attorney
Tampa" and "federal criminal defense attorney Tampa" as YEARS, behind a wall of
directories and aged exact-match brands (avoid.md items 1 and 3). These pages
will not win their head terms in year one. They convert referral traffic and
pass links down. That is enough.

### Structure

1. **H1 and positioning paragraph.** State: "State criminal defense in
   Hillsborough County." Federal: "Federal criminal defense in the Middle
   District of Florida."
2. **What this silo covers**, plain language, two or three paragraphs.
3. **Charge grid** linking every child page.
4. **What is different about this forum.** The section that earns the page.
   For federal: how a federal case differs from a state case, the Speedy Trial
   Act clock, detention under 18 U.S.C. 3142, why an indictment often follows
   months of investigation the defendant never saw. For state: the 13th Circuit,
   first appearance, the arraignment-to-trial path.
5. **Handled by.** The `HandledBy` component built in
   src/components/attorneys/HandledBy.tsx. Renders nothing until the
   attorney-to-practice mapping is confirmed (WEBSITE-PLAN.md Open Question 2).
6. **Related guides.** Links into the Layer 2 engine.
7. **Close.**

---

## 4. Level 3: The Charge Page

### 4.1 The bar to clear

content-gaps.md establishes the local ceiling precisely, from direct fetches:
competitor practice pages run 450 to 1,200 words, uncited, non-localized, and
undated. Rankin's federal pages are "450-650-word templates." Brunvand's federal
page is "~750-800 words of generic national copy."

The one real content incumbent is Sammis Law Firm, which holds the strongest
local page on 6 of 8 topics analyzed. Its beatable dimensions, per the
cross-topic findings: **currency** (its CPC page is dated February 2022),
**by-level granularity**, **schema** (no FAQPage or HowTo anywhere on the site,
curl-verified), and **Brandon framing**.

So the template is built to beat a thin page, not to be one.

### 4.2 The differentiator no competitor has

**Wire every charge page to the sentencing math.**

content-gaps.md Topic 4 is explicit: no competitor breaks Criminal Punishment
Code content out by offense level, and no charge page anywhere in the market
connects a charge to the scoresheet. The CPC cluster is the widest open lane of
the eight topics analyzed.

A page that says "third degree felony, up to 5 years" is what everyone has. A
page that says "third degree felony, offense level 4, here is what that scores,
calculate yours" is unmatched locally and pulls the reader into the sentencing
calculator, which is tool #1 in the build order.

That internal link is the strategic core of this section. It is the mechanism by
which Layer 1 money pages and the Layer 2 engine feed each other
(WEBSITE-PLAN.md Section 2).

Because it is the strategic core, the calculator carries its own ship gate. See
Section 5. The charge pages must not link to a calculator that has not cleared
it.

**Standing rule, added 2026-08-13: no Florida Criminal Punishment Code artifact
links from any federal page.** This covers the sentencing calculator, the
offense-level comparison instrument, the level pages, the degree pages, and the
CPC hub. It applies to all ten pages under `/federal-criminal-defense/` and to
the federal silo hub.

**The reason is substantive, not procedural.** The Criminal Punishment Code does
not apply to federal cases. A federal defendant is sentenced under the United
States Sentencing Guidelines, and F.S. 921.0022 has nothing to say about their
exposure. A link from a federal page to a CPC artifact would therefore be
**wrong on the merits, independent of the C1 through C8 gate**, and it would stay
wrong after that gate clears. Nobody should read the clearing of C1-C8 as
unlocking these links.

The wave 1 and wave 2 briefs are written to this rule already: every federal
brief records the calculator as "not linked" and gives the CPC-does-not-apply
reason rather than the gate reason.

### 4.3a REDESIGNED 2026-08-13. The human layer sits above the legal layer.

**Read this before 4.3, which it supersedes as the page's organising principle.**
4.3's section list is retained below because its statutory depth is correct and
stays; what changed is that it is no longer the page's spine.

#### The audit that forced it

Eight written charge pages, measured rather than eyeballed:

| Finding | Measurement |
|---|---|
| Identical section order | **8 of 8.** The only variation is whether the counterpart and forum blocks exist at all |
| Identical headings | **8 of 8, necessarily.** Every heading was a string literal inside ChargeTemplate.tsx, so a charge-specific heading was not expressible |
| First screen interchangeable | **Entirely**, below the H1 and the lead. Every page's next heading is "State charge or federal charge?" or "What the statute says" |
| "What am I facing" | Answered thoroughly, 8 of 8 |
| "What happens next, and when" | **0 of 8** |
| "What do I do right now" | **0 of 8** |
| "What this does to my job, licence, or record" | **1 of 8**, and only because a DUI licence suspension is the charge |
| "Can it ever be sealed" | **0 of 8** |
| "Who do I call" | **0 of 8** beyond the fixed closing call to action |

**The cause was architectural, not editorial.** Headings and order lived in JSX.
No amount of rewriting copy could have produced a charge-specific heading.

#### What the page is now

**Three fixed points, and nothing else fixed.** The direct-answer paragraph in
the hero, the FAQ block, and the close. Everything between them is an ordered
list of sections in `src/lib/charge-page.ts`, each carrying its own heading.

**Order follows significance.** The page opens on whatever that charge's reader
most needs, which is not the same section twice. For a DUI that is the ten-day
licence clock, because it expires before most people call anyone. For a charge
whose reader is already indicted it is something else.

**Headings are charge-specific.** A heading equally true of another charge is
the tell. Checked, including the case where a generic stem wears a charge name.

**The human layer, above the statutory material:**

- **What happens next**, as a real timeline through resolution, with an interval
  on every step. Never "soon".
- **Bond and release**, where applicable to the charge.
- **What to do and not do now.** Process and rights only. Never case-specific
  advice, and never anything shaped as a prediction.
- **Collateral consequences**: employment, licensing, immigration, the record.
- **Sealing and expungement**: eligibility, or plainly that it is unavailable.

**The statutory depth stays**, below that layer. It is the rarest thing on these
pages and the audit found nothing wrong with it.

**Coverage is enforced, not encouraged.** Sections declare which of the six
reader questions they answer. A page either answers all six or records an
explicit `readerNeeds` entry naming what it cannot answer and why. Silence fails
the build.

#### The structural variation check: it fails honestly, and here is the proof

The requirement was to build one that can fail, or say plainly that it cannot.
**It can.** `interchangeable()` in scripts/check-pages.mts compares two pages by
section-order signature and heading overlap, and its self-test feeds it two
pages differing only in their facts and asserts that it fires. It does, at
heading overlap 1.00. A second self-test feeds it two genuinely distinct pages
and asserts silence.

**It is run against every written page, not only against the pair being built.**

**One honest limitation, stated rather than hidden.** The check compares shape
and heading language. It cannot detect a page that varies its headings while
saying the same thing underneath, because that is a judgment about meaning. That
half stays a review requirement and belongs to the adversarial pass, which reads
the pages rather than their signatures.

#### Migration

The eight pre-existing pages render through the legacy sequence until reworked.
The checker counts them by name under NOT MIGRATED so the number is visible and
has to reach zero. Legacy pages are excluded from the heading and coverage
gates, and that exclusion is the reason the count is printed: an exemption
nobody can see is an exemption that becomes permanent.

---

### 4.3 Section-by-section template

Extends the money-page template in WEBSITE-PLAN.md Section 4.

1. **H1 and the direct answer.** One paragraph answering "what is this charge"
   in the first 40 words, plain language. This is the featured-snippet slot.
2. **What the statute says.** Cite it. F.S. 812.014 for theft, F.S. 893.135 for
   trafficking, 18 U.S.C. 1343 for wire fraud.
3. **Degrees and penalties table**, with the scoresheet link (Section 4.2).
4. **What the state has to prove.** The elements, listed. Converts well because
   it reframes the reader's situation from hopeless to contested.
5. **How the defense is approached.** Process only. See Section 12.
6. **Where the case is heard.** Courthouse-level specificity. Local detail is
   Sammis's entire edge and it is copyable.
7. **Handled by.** Reciprocal attorney block.
8. **FAQ block with FAQPage schema.** Per content-gaps.md cross-topic finding 2,
   content-type structured data is an under-used differentiator even among the
   best pages nationally. Value is entity signaling, not guaranteed rich
   results, since Google deprecated most FAQ display in 2023.
9. **Related guides**, linking up to Layer 2.
10. **Attorney byline and last-reviewed date.** Currency is the single most
    beatable dimension in this market. Governed by Section 9.

**Copy-level variation requirement.** Added 2026-08-13 from the wave 2 brief
review.

**Where more than one page's differentiator rests on the charge not existing
under that name in Florida, each page must open differently.** Three pages
currently do: embezzlement (prosecuted as theft under F.S. 812.014), wire fraud
(a federal offence with no Florida statute of that name, the Florida analogue
being the Communications Fraud Act at F.S. 817.034), and identity theft (charged
as fraudulent use of personal identification information under F.S. 817.568).

**This is distinct from C9, which all three already pass.** C9 asks whether the
page's substance is charge-specific, and it is: three different statutes, three
different threshold structures, three different offense-level ladders. What C9
does not catch is that all three would open with the same rhetorical move, in
roughly the same sentence shape, in the first forty words. A reader who lands on
two of them in one session sees a template. So does a model reading the site.

**The substance stays. The opening move varies.** One page can lead with the
statute it is actually charged under, one with what the reader was told versus
what the charging document will say, one with the element that surprises people.
Which page takes which is a drafting decision, not a plan decision; the
requirement is only that they are not all the same.

**Check this at draft time across the set, not page by page.** The failure is
invisible when a page is read alone, which is exactly the property it shares
with the cross-brief C9 collision in Section 4.5.

### 4.4 Worked example: Grand Theft

Chosen because keywords.md grades it 6-12mo with "zero directories, newer firms
already ranking; content quality is the barrier, not domain age." A page that
can actually be won.

> **H1:** Grand theft charges in Hillsborough County
>
> Grand theft is a felony charge under Florida law that applies when the value
> of what was allegedly taken crosses a dollar threshold set by statute. Below
> that threshold the same conduct is petit theft, a misdemeanor. The dollar
> figure is often the difference between a misdemeanor and a felony record, and
> it is frequently contested.
>
> **H2:** What the statute says
>
> Florida charges theft under F.S. 812.014. The statute sets the degree of the
> offense by the value of the property and, in some cases, by what the property
> was. [VERIFY: current value thresholds and degree mapping against the
> operative version of F.S. 812.014 before publish.]
>
> **H2:** What the state has to prove
>
> To convict, the state must prove that the property was taken, that it belonged
> to someone else, and that it was taken with the intent to deprive the owner of
> it. Value is a separate element and has to be proven, not assumed. Where value
> rests on an estimate, a receipt, or a witness's recollection, it is open to
> challenge.
>
> **H2:** How the defense is approached
>
> The first questions are what the state can actually prove about value, where
> that valuation came from, and whether intent can be established at all. Many
> theft cases turn on documentation the state has not gathered yet.

Note what that copy does **not** do. It does not say the firm wins these, that
charges get reduced, or that the reader has a good defense. It describes the
charge and the process. That is the line Rule 4-7.13 draws, and avoid.md items
14 through 17 catalogue four competitors who cross it.

### 4.5 The anti-duplication test

Twenty-six pages written to one template is how a site ends up with twenty-six
interchangeable pages. Thin, near-duplicate practice pages are the exact failure
mode of the competitor set in Section 4.1, and they are what makes a page
worthless whether or not it ranks.

**The test.** Cover the charge name and read the page. It must still be
identifiable as being about that charge, and at least one section must be false
or nonsensical if a different charge name were swapped in.

A page that passes has something like: a value threshold that only exists in the
theft statute, a weight table that only exists in trafficking, a
predicate-offense list that only exists in 922(g). A page that fails is one
where "the state must prove the elements beyond a reasonable doubt and we
examine the evidence carefully" could sit under any of the 26 headings.

**Where the charge-specific substance comes from,** in rough order of
reliability:

1. The elements of the offense, which differ by statute.
2. The statutory thresholds, tables, and tiers (value, weight, loss amount,
   prior-conviction predicates).
3. The offense level under F.S. 921.0022 and what that scores.
4. Charge-specific procedural facts (which division hears it, whether a
   mandatory minimum attaches, whether the charge is bond-schedule eligible).
5. The FAQ block, which should answer questions only askable about this charge.

Generic defense narrative is the filler that makes pages interchangeable. It
belongs in one shared section at most, never as the page's substance.

**C9 collisions are checked across pages, not only within one.** Added
2026-08-13 after the wave 1 brief review found one.

The cover-the-name test as written is a single-page test, and a page can pass it
while quietly claiming substance that another page is also claiming. The wave 1
briefs surfaced exactly that: **both the embezzlement brief and the grand theft
brief named the F.S. 812.014 value-to-offense-level table as their C9
substance.** Each passed the test on its own. Together they would have produced
two pages built on the same table, which is the interchangeability the test
exists to prevent, arriving through a door the test did not watch.

**The check.** Before a page is drafted, its named C9 differentiator is compared
against every sibling brief's. If two pages claim the same substance, the
substance belongs to one of them, and the other finds its own or does not get
built. Where the shared substance is genuinely reference material rather than
argument, the third option is better than both: **it moves to a Layer 2 asset
and both pages link to it.**

That is how the 812.014 collision was resolved. The value-to-offense-level table
lives once, in the Layer 2 offense-level comparison instrument, and both charge
pages link to it rather than reproducing it. Grand theft keeps the value ladder
as its subject matter and its C9, because the ladder is what the charge *is*.
Embezzlement's C9 became the position-of-trust fact pattern plus the absence of
any Florida offense by that name, which was always the stronger half of its
claim. Recorded in the two briefs.

### 4.6 State and federal overlap pages

Drug trafficking, gun crimes, and several fraud offenses exist in both the state
and federal silos. WEBSITE-PLAN.md Section 3 already says cross-link, do not
duplicate. The anti-duplication test makes that concrete: these pairs are the
most likely to mirror each other, so they carry an extra requirement.

**Every overlap page opens with a forum section: "state charge or federal
charge?"** That is a real question readers arrive with, no competitor answers it
well, and it is the section that makes the two pages structurally different
rather than reworded.

The differentiating substance per pair:

| Pair | State page turns on | Federal page turns on |
|---|---|---|
| Drug trafficking | F.S. 893.135, weight thresholds triggering mandatory minimums, substantial-assistance relief under the statute, the CPC scoresheet, 13th Circuit practice | 21 U.S.C. 841 and 846, the USSG drug quantity table, relevant conduct and co-conspirator attribution, 851 enhancements, safety valve, M.D. Fla. practice |
| Gun crimes | F.S. 790 series, 10-20-Life under F.S. 775.087, state scoresheet | 18 U.S.C. 922(g) predicates, ACCA exposure, guideline base offense levels |
| Fraud offenses | Florida scheme-to-defraud and theft statutes, state court process | Wire and mail fraud statutes, loss-amount tables, federal investigative posture pre-indictment |

Body copy is never shared between the two. Each links to the other once, from
the forum section, with a plain line: "If your case is being prosecuted in
federal court, see [the federal page]."

**Done-criterion.** No charge page ships until it passes the cover-the-name
test, and no overlap page ships without its forum section and its cross-link.

### 4.6.1 The test applied to the fraud cluster (2026-08-13)

Four slugs covered two federal statutes: `/white-collar-defense/wire-fraud`,
`/white-collar-defense/mail-fraud`, `/white-collar-defense/bank-fraud`, and
`/federal-criminal-defense/wire-mail-fraud`. Whether that was three pages too
many was an open content decision. It was resolved by running the test rather
than by judgment. Full evidence in DECISIONS.md D4.

| Page | Result | Why |
|---|---|---|
| `/white-collar-defense/mail-fraud` | **FAILS. Removed.** | 18 U.S.C. 1341 and 1343 share an opening clause, a 20-year maximum, and a word-for-word identical enhancement sentence. Only the jurisdictional means differs. Cover "mail" and every section is true of wire fraud. The market has already merged them: the #1 result on the query is a combined mail-and-wire page, and LawInfo serves its wire fraud directory page for a mail fraud query. |
| `/white-collar-defense/bank-fraud` | **PASSES. Kept.** | 18 U.S.C. 1344 has no mailing and no wire element. Its hook is the financial institution itself, as the object of the scheme or as the custodian of the property. Cover "bank" and the elements section is false. Separate SERP, separate PAA set, separate directory taxonomy, and mortgage fraud clusters under it. |
| `/white-collar-defense/wire-fraud` | **PASSES. Kept.** | Survives against its own federal sibling because it is built on the Florida Communications Fraud Act, F.S. 817.034, which the federal page never mentions. |
| `/federal-criminal-defense/wire-mail-fraud` | **Kept, and absorbs mail fraud.** | The slug already names both. The `mail fraud attorney Tampa` query is targeted by an H2 here rather than by a URL. |

**The generalisable rule.** Where two pages would rest on statutes that differ
only in a jurisdictional element, they are one page. Where they differ in an
element of the offence, they are two. That is the same distinction Section 4.5
draws between substance and filler, applied at the page-list level.

### 4.6.2 The full audit, and two binding constraints it produced

All seven overlap pairs were audited against 4.6.1 on 2026-08-13. The evidence,
statute by statute, is in **docs/build/OVERLAP-AUDIT.md**. Five pairs survive,
one collapsed (corporate fraud, DECISIONS.md D12), and healthcare fraud survived
on statute but needed a naming fix first (D13).

**Two of the surviving pairs survive conditionally. The conditions below are
binding constraints on their briefs, not notes.** A brief that does not carry
its constraint has not been written to spec, and the page it produces collapses
the pair in practice whatever the audit concluded on paper.

#### Constraint 1: the federal money laundering page

18 U.S.C. 1956(a)(1) and F.S. 896.101(3)(a) are near word for word identical,
purpose limbs included. Florida's statute was plainly modelled on the federal
one.

**The federal page must be built on the predicate list, the absence of
thresholds, and federal sentencing. It may not restate the conduct language.**

What that means concretely: 1956(c)(7) defines specified unlawful activity by a
list of federal offences, where Florida defines it as racketeering activity
under F.S. 895.02, so the same money can be laundering under one and not the
other. Florida's offence begins at transactions exceeding $300 and sets degrees
at $20,000 and $100,000 across any 12-month period; the federal statute has no
floor and no tiers at all. Those are the differences the page exists to explain.

#### Constraint 2: the federal computer crimes page

The shared core with F.S. 815.06 is unauthorized access or exceeding
authorization, and 18 U.S.C. 1030's protected-computer requirement is largely an
interstate commerce hook. Read only that far, this pair is the collapse case.

**The federal page must be built on 1030(a)(1), (a)(4), and (a)(5), which add
elements rather than a hook: national defence information, intent to defraud
plus obtaining anything of value, and causing damage. If it is built on (a)(2)
or (a)(3), it is the Florida page with a commerce clause attached and it
collapses into it.**

This is the pair most likely to fail in practice, so it carries the strictest
constraint.

#### Open, deliberately: the computer crime silo placement

Unauthorized access is not inherently financial, and the genuinely white-collar
limb of 1030 is the fraud limb at (a)(4). Whether
`/white-collar-defense/computer-crime` belongs in the white-collar silo at all
is a real question and it is **not resolved here**.

**Resolve it from the SERP evidence when its brief is written, not now.** The
brief will show who is searching and what Google is serving, which is better
evidence for a placement question than reasoning from the statute. Recorded so
the question is asked rather than rediscovered.

---

## 4.7 Being named in the commercial AI Overview

Added 2026-08-13 (DECISIONS.md D8).

Four of the ten wave 1 and wave 2 primary queries carry an AI Overview. On
commercial queries it does not summarise law. **It names firms and then asks the
searcher a qualifying question**, such as "Whether the charges are in state court
or federal court" or "Are you or someone else currently under federal
investigation or already arrested?"

That is a referral surface sitting above the organic results. It is not the
featured snippet the level 3 template was originally written for, and the
research recorded in docs/research/briefs/TEMPLATE-FINDINGS.md found that
featured snippets are effectively absent from these SERPs while AI Overviews
are not.

**The objective.** Be named in the citation set and in the named-firms text.

**How it is measured.** Presence or absence, per query, on the same cadence as
the rest of reporting. **It is not a rank and is never reported as one.** It is
volatile, so a single absence is not a regression and a single appearance is not
a win. The baseline, per query and with the firms currently named, is recorded
in DECISIONS.md D8.

**What earns it, on the evidence.** The pages cited are tightly matched to the
charge, at charge-level granularity rather than hub level. On `gun charge lawyer
Tampa`, four of the eight citations are separate Hanlon pages, one per
sub-offence. That is the hub-and-spoke structure this section already builds,
which is the useful finding: no new tactic is required, and the objective is
served by doing the existing plan well.

**The compliance rail that travels with it.** On the wire fraud query the second
citation is a competitor slug already recorded in avoid.md item 14 as an
unverifiable superiority claim. **Google amplifying a pattern does not make it
lawful to copy.** The objective is to be named, never to adopt the phrasing of
the firms that currently are.

---

## 5. The Sentencing Calculator: Compliance Rails and Ship Gate

Section 4.2 makes the calculator the strategic core of this section. It is also
the single highest-risk asset on the site: a tool that outputs a number about a
person's liberty, built by a law firm, with no calculator-specific Florida
authority on point (tools-and-hooks.md gap 1). The rails below are drawn from
the cited Bar checklist in tools-and-hooks.md Section 4 and from avoid.md items
38 and 39.

### 5.1 Framing

**Educational only. It computes what the statute computes, never what will
happen to the reader.**

- Output is never labeled "your sentence," "your score," or "what you are
  facing." It is what the Criminal Punishment Code scoresheet produces from the
  inputs given.
- Use the modifier words the Rule 4-7.13(b)(1) comment expressly permits: may,
  could, designed to, seek, pursue. Never guarantee, ensure, will, or any
  phrasing a prospective client "can reasonably interpret as a prediction or
  guaranty of success or specific results."
- No case results, verdicts, or testimonials anywhere near the tool
  (Rule 4-7.13(b)(2) and (b)(9); tools-and-hooks.md item 8).
- Never state or imply Florida Bar approval of the tool
  (Rule 4-7.13(b)(10); tools-and-hooks.md item 12).

### 5.2 Disclosure of what the tool cannot know

Rule 4-7.13(a)(2) makes output misleading by omission if the tool presents a
number without saying what it left out. A scoresheet depends on facts a web form
does not have.

**Required, adjacent to the output, not in a footer:** a prominent statement
that a real scoresheet depends on facts the tool cannot know, naming at minimum:

- prior record and how it scores
- victim injury points
- enhancements, habitualization, and mandatory minimums
- departures and judicial discretion
- anything charged but not entered

Presentation follows Rule 4-7.12(d) as applied in tools-and-hooks.md item 4:
equal or greater prominence, close proximity, same or larger text. It "may not
appear in fine print, nor may it be buried in a footnote," and footer-only
placement does not satisfy it.

### 5.3 No attorney-client relationship

A notice on the tool itself, on the results screen next to the number: the tool
is educational, it is not legal advice, no attorney-client relationship is
created by using it, every case is different, and the reader should consult a
Florida lawyer.

This is not boilerplate hygiene. Under Op. 24-1 and Bartholomew, 611 So. 2d 85,
a relationship can arise from a user's subjective reasonable belief regardless
of the firm's intent. Related, and already in WEBSITE-PLAN.md Section 5: the
tool is never labeled "confidential" and never implies privilege
(tools-and-hooks.md item 9; avoid.md item 31).

### 5.4 Data handling: client-side only

**Computation runs entirely in the browser. No user-entered charge data is
stored or logged server-side, ever.**

This is an engineering rail with a legal purpose. Anonymous inputs and ungated
results are the compliance-conservative design in avoid.md item 38, but a policy
of not looking at the data is weaker than an architecture that never receives
it. If the server never sees a charge, there is nothing to safeguard under Rule
4-1.6(e), no record capable of creating a prospective-client expectation under
Rule 4-1.18, and nothing to produce later.

What that forbids concretely:

- No API route, server action, or form POST carrying charge inputs.
- No case facts in URL query strings, which land in server access logs and leak
  through the Referer header to any third party the page contacts.
- No analytics events carrying charge parameters. Tool usage may be counted in
  aggregate; the inputs may not be attributes on the event.
- No lead-capture gate before results, and no requirement to enter contact
  details to see output (avoid.md item 38).
- No session persistence of inputs beyond the page view.

### 5.5 Accuracy note and version stamp

An outdated formula is a materially inaccurate statement under Rule
4-7.13(a)(1), which is avoid.md item 39 in full: "an outdated scoresheet
computation is a materially inaccurate statement, so the Rule 3.992 revision
implemented must be date-stamped and kept synced or the tool should not ship."

**Required on the tool page:**

- The Rule 3.992 scoresheet revision the computation implements, by date,
  including the January 2026 correction (tools-and-hooks.md item 2).
- A statement that the tool addresses Florida law only (Op. 00-4).
- The responsible attorney identified on the site (Op. 00-4).
- An attorney-reviewed accuracy note: named attorney, date the computation was
  reviewed, and what was reviewed. This is separate from the byline. It attests
  the math, not the prose.

The tool joins the currency policy in Section 9 with the shortest cadence on the
site, because a stale calculator is a compliance problem rather than just a
staleness problem.

### 5.6 Ship gate

**The calculator does not ship, and no charge page links to it, until every one
of these is true.**

| # | Done-criterion |
|---|---|
| C1 | Output is framed as what the statute computes. No instance of "your sentence," "your score," or any predictive phrasing anywhere in the tool copy |
| C2 | A prominent adjacent statement names what the tool cannot know: prior record, victim injury points, enhancements, mandatory minimums, departures, judicial discretion |
| C3 | That statement meets the Rule 4-7.12(d) presentation test: equal or greater prominence, close proximity, same or larger text, not fine print, not footer-only |
| C4 | A no-attorney-client-relationship notice appears on the results screen adjacent to the output, not only in the site footer |
| C5 | Computation is client-side only. No server-side storage or logging of user-entered charge data, no case facts in URLs or analytics attributes, no lead gate on results |
| C6 | The implemented Rule 3.992 revision is stated on-page by date, including the January 2026 correction, with a Florida-law-only scope note |
| C7 | An attorney-reviewed accuracy note is present, naming the reviewing attorney and the review date for the computation itself |
| C8 | No case results, testimonials, "confidential" labeling, or implied Bar approval anywhere on the tool page |

C1 through C8 are verified by a person before launch, not asserted. WEBSITE-PLAN.md
Open Question 6 (voluntary Bar pre-clearance under Rule 4-7.19(d) or an Ethics
Hotline call) remains open and is a belt-and-suspenders addition to this gate,
not a substitute for it.

### 5.7 The pressure to link it is now measurable, and that is a reason to hold

Added 2026-08-13.

**Do not build the calculator.** Nothing in the wave 1 or wave 2 brief work
changes the gate, and the briefs were written to it: not one of the ten links
the calculator.

What the briefs did produce is evidence of **pressure**. Six of the seven
state-side pages carry an offense-level column that wants a link to it. The
money laundering brief says outright that it has "the strongest argument for it
of any in the set," having verified that a third degree money laundering charge
scores at level 7 while a third degree grand theft can score as low as level 2.
The grand theft brief calls itself "the single largest beneficiary of that gate
clearing." That pressure will keep building as pages ship.

**This is a reason to hold C1 through C8, not to relax them.** A gate that is
never tested costs nothing to maintain and proves nothing. A gate that six pages
are pushing against is doing its job, and the moment to weaken it is exactly the
moment it is finally worth something. The criteria were written against a tool
that outputs a number about a person's liberty, and that has not changed because
more pages would like to link to it.

**The relief valve is already built and it is not a compromise.** TOOLS.md
recommends shipping the offense-level comparison instrument ahead of the
calculator. It answers "what level is this charge and how does that compare,"
which is the half of the value the charge pages actually want, it is a statutory
classification rather than a prediction, and it clears C1 through C8 without
computing anything. Ship that. Let the calculator wait for its gate.

---

## 6. Flow and Internal Linking

```
Home practice grid ---+
Nav "Cases We Defend" -+--> /cases-we-defend (hub)
Footer ---------------+          |
                                 +--> /criminal-defense ----------> 10 charge pages
                                 +--> /federal-criminal-defense --> 10 charge pages
                                 +--> /white-collar-defense ------>  6 charge pages
                                                                        |
                              charge page -------------------------------+
                                                                        |
                                    +--> sentencing calculator (Layer 2, gated by Section 5)
                                    +--> related guides (Layer 2)
                                    +--> attorney bio (E-E-A-T)
                                    +--> /contact
```

Every charge page links **up** to its silo, **sideways** to the attorney who
handles it, and **down** to the tool or guide that answers the reader's next
question.

---

## 7. Build Sequence: Do Not Follow the Client's List Order

Approved and unchanged.

The client's SEO.pdf lists state charges starting with sexual battery and sex
crimes. Those are the two hardest terms in the entire cluster. avoid.md item 2
grades "sex crimes attorney Tampa" as YEARS and "the most specialist-entrenched
SERP in the state cluster," held by whole-brand specialists and a dedicated
competitor microsite.

Build every page, per the capability principle in WEBSITE-PLAN.md Section 1.
Reinforce in winnability order.

**THIS TABLE IS PARTIAL, AND DELIBERATELY SO.** Added 2026-08-13. It sequences
only the charges that keywords.md actually graded, which is 6 of the 20 charges
still without a brief: conspiracy charges and target letter defense in wave 3,
and sexual battery, sex crimes, CSAM, and homicide in wave 4. **The other 14
have no wave here**, including every federal counterpart of a state page already
built.

It was left partial rather than completed, because completing it would mean
assigning waves to charges that carry no winnability grade. A wave in this table
means "keywords.md graded this and here is the grade." Inventing wave numbers
for ungraded charges would make the column look like evidence when it is
guesswork, which is the failure this plan spends Section 4.5 and Section 10.3
guarding against.

**Do not read this table as the full picture.** It answers "in what order do the
graded pages get reinforced," not "what is left to build." For the second
question, see the brief-production grouping in Section 7.4, which covers all 20
and is ordered by dependency rather than by grade.

| Wave | Pages | Grade and reasoning |
|---|---|---|
| 1 | Middle District of Florida federal hub | **NOW.** No Tampa private firm holds a dedicated district page (keywords.md) |
| 1 | Embezzlement | **NOW.** Weakest SERP in the white-collar cluster, routine template pages ranking (keywords.md) |
| 1 | **Grand theft** | **6-12mo, promoted 2026-08-13.** Strongest single opportunity in the wave 1 and 2 brief set. See 7.2 |
| 2 | Drug trafficking, gun crimes, domestic violence | 6-12mo. Content quality is the barrier, not domain age (keywords.md) |
| 2 | Money laundering, identity theft, wire fraud (Tampa-scoped) | 6-12mo. Statewide wire fraud is YEARS; city-scoped is winnable (keywords.md) |
| 3 | Federal drug conspiracy, federal indictment, target letter defense | 6-12mo. Highest case value per visit (keywords.md) |
| 4 | Sexual battery, sex crimes, CSAM, homicide | YEARS. Build for capability and referral conversion, expect nothing from search |
| **Opportunistic** | **PPP loan fraud** | **Demoted 2026-08-13.** Built only after the C12 allowlist decision lands, and only if capacity allows. See 7.2 |

#### Page-writing order for the briefed set, decided 2026-08-13

The table above sequences **reinforcement** of the graded pages. All 30 charges
now carry briefs, so the separate question of **which page gets written first**
has an answer, and it is not the top of that table.

**DUI first, and within it the first-refusal substance leads.**

| | |
|---|---|
| **Why first** | `refusing breathalyzer florida` is the **only NOW-graded term** in the entire remaining-20 set: 210/month Florida, 50/month DMA, LOW competition, $2.30 CPC |
| **Why the refusal substance leads the page** | Effective 1 October 2025, ch. 2025-121 made a **first** refusal a second degree misdemeanor under F.S. 316.1939(1)(e). **Five sources still publish the superseded rule, including flhsmv.gov at organic position 1**, which is also the AI Overview's first cited source |
| **Why it is urgent rather than merely good** | **This position closes as competitors update.** It is the only opportunity in the set with an expiry date attached to someone else's editing schedule. Every other finding here keeps |

**The DUI page is built.** Its commercial term stays graded **YEARS** and that is
not in tension with building it: the informational and procedural case stands
**independently** of the commercial one. The page is justified by the refusal
substance, the F.S. 322.2615 administrative-suspension material, and the
10-day-notice C9, none of which depend on ever ranking for `dui lawyer tampa`.
Measurability and winnability are different questions, and so are winnability and
worth building. See docs/research/briefs/ST-04-dui.md.

**Drug possession keeps its place for now.** Its volume is the weakest in the set
at roughly 120/month measurable Florida, and its own brief asks whether it should
be resequenced. It is not resequenced: volume alone does not settle it, and
nothing currently depends on the answer. Revisit when something does.


Wave 4 pages still get built. They convert the referral traffic the firm already
earns, which DOSSIER.md Section 1 identifies as most of the firm's work. They
should simply not be measured on rankings.

### 7.2 Wave 1 re-sequenced, 2026-08-13

**Grand theft moves into wave 1. PPP loan fraud moves out to opportunistic
status.** Both changes come from the wave 1 brief review, on evidence gathered
after the original sequence was set.

**Why PPP loan fraud came out.** Four reasons, and they compound:

1. **It downgraded itself.** The brief revised the grade from NOW to 6-12mo on
   new SERP evidence. When W2 ran, this was "a thin competitive field; one firm
   holding two slots with individual pages." Today the top nine are all
   dedicated PPP or SBA pages: Hoyer, Scriven, Kirlew, Sammis, Trombley & Hanes,
   OA Law Firm on a Hillsborough County URL, Petro, StechLaw, Jonathan Rose.
   verified 2026-08-13. The field filled in during the year the plan sat.
2. **It has the weakest source position of the ten briefs.** Almost every
   statutory claim on the page was unverifiable at brief time.
3. **It is publish-blocked on its central fact.** The limitations period is what
   makes a 2020 borrower search in 2026, and the ten-year figure in the corpus
   is reported rather than verified. Without it the page has no reason to exist.
4. **Its shelf life decays.** keywords.md already flagged this, and nothing has
   improved it.

Any one of those would be survivable. Together they describe a page that is
harder than believed, thinner than believed, blocked on the one thing that makes
it worth building, and shrinking. That is not a wave 1 page.

**Why grand theft went in.** It is the strongest single opportunity in the set,
and three conditions hold at once that hold nowhere else:

1. The #1 organic result on the money informational query is the **statute
   itself**, leg.state.fl.us, above every law firm in Florida. Google has no firm
   page it prefers to the raw statute.
2. The AI Overview on that query **builds a table by hand**, with columns
   Property Value, Maximum Prison, Maximum fine, because no page supplies one.
   That is the artefact Section 4.3 item 3 already specifies.
3. The statewide informational volume is real where the local commercial volume
   is not: `grand theft Florida` 320/month, `grand theft third degree Florida`
   140, and the adjacent `third degree felony Florida` at 1,000.

**PPP is deferred, not cancelled.** The brief at
docs/research/briefs/OPP-01-ppp-loan-fraud.md stands as written and is complete.
When the C12 allowlist work lands and capacity allows, it is ready to build.
Nothing about it needs re-researching except the limitations period, which was
always its blocker.

### 7.4 Brief production order for the remaining 20 charges

Added 2026-08-13. This is a different axis from the wave table above. The wave
table orders **reinforcement by winnability grade**. This orders **brief
production by dependency**, which is why the two do not match and why neither
replaces the other.

30 charges. 9 briefed. 20 still need one.
`/white-collar-defense/corporate-fraud` is excluded and needs no brief: D12
reclassified it as a category overview, it is `c9Exempt`, it rests on no
statute, and its page is written.

| Group | Count | Charges |
|---|---|---|
| **W1**, conditional pairs, serial | 2 | `federal/money-laundering`, `federal/computer-internet-crimes` |
| **W2**, remaining federal and white-collar | 11 | federal: drug-trafficking, healthcare-fraud, wire-mail-fraud, conspiracy-charges, weapons-gun-offenses, target-letter-defense. White-collar: healthcare-fraud, bank-fraud, securities-fraud, computer-crime, tax-evasion |
| **W3**, remaining state | 3 | drug-possession, battery, dui |
| **W4**, wave 4 charges | 4 | sexual-battery, sex-crimes, homicide, and federal csam-defense |

**W1 runs first and runs serially**, because both its briefs carry binding
constraints from Section 4.6.2 and either can collapse its page. A collapse
changes the page list, so nothing downstream should be researched against a list
that might move.

**W2 through W4 may fan out**, on one condition. The C9 collision check is only
sound against a current set of assertions, so briefs drafted in parallel cannot
each check against a snapshot taken before the others recorded: two such checks
can both pass and both be wrong. Parallel drafting therefore ends at a
**reconciliation barrier** that compares every new assertion **pairwise against
the other new ones as well as against the populated set**, before any is
recorded. A barrier that only checks new against old reproduces the defect it
exists to prevent (docs/research/HUNT-LIST.md defect 1).

### 7.3 The white-collar supply gap, and why it does not reorder wave 2

Added 2026-08-13. **ACCEPTED 2026-08-13. Wave 2 is not reordered for the
white-collar pages.** This supersedes the ordering implied by the wave 2 rows in
the Section 7 table, which grouped the pages without ranking them and would have
been read as build order. The order below governs.

**The finding.** Three of three white-collar briefs showed Google filling the
SERP with generic hubs or out-of-market pages rather than dedicated Tampa pages.
On `embezzlement lawyer Tampa`, four of the top ten slots are competitor
homepages and only four of twelve results are actually about embezzlement. On
`money laundering defense attorney Tampa`, two of the top five are generic
white-collar hubs and an out-of-county St. Petersburg page holds #5. On
`identity theft defense lawyer Tampa`, a St. Petersburg page holds #5 and a
`/naples/` URL holds #11. On `wire fraud attorney Tampa`, bank fraud pages hold
#7 and #8. All verified 2026-08-13. Recorded as a market finding in DOSSIER.md
Section 10.

**The tempting conclusion is that the white-collar pages should be built first.
The recommendation is not to.** Three reasons:

1. **A supply gap predicts ease of entry and nothing else.** When Google pads a
   SERP with competitor homepages, that is Google reporting it has no
   well-matched document *and* the market reporting that several firms with real
   Tampa budgets independently declined to make one. Those two facts arrive
   together and point the same way.
2. **The two kinds of padding are different signals and the briefs conflated
   them.** Generic-hub and near-miss-offence padding is a genuine relevance
   vacuum a dedicated page can fill. **Out-of-market padding is worse news**: a
   St. Petersburg page ranking on a Tampa query means the "Tampa" token is doing
   almost no ranking work, so Google is falling back to domain authority. That
   removes the exact advantage the page was going to be built on. Treating it as
   opportunity is the error in the build-white-collar-first case.
3. **An AI Overview over dense dedicated supply is the harder field and the
   better one.** Drug trafficking has no directory in the top twelve, all
   dedicated pages, and an AI Overview citing twelve firm sources. Google does
   not synthesise an overview for a query nobody asks. So the signals invert:
   homepage padding is easy to rank and hard to justify, while dense supply plus
   an overview is hard to rank and easy to justify. **Ease of ranking is the
   cheap input. Demand is the scarce one. Sequence against the scarce one.**

Every measurable volume number sits on the state side. The lone white-collar
adjacent number, `identity theft Florida statute` at 70/month, is itself a
Florida state offence under F.S. 817.568, which is the tell.

**Accepted order within wave 2.** This is the build order:

1. Domestic violence, the only term with real Tampa DMA volume at 90/month plus
   170/month statewide, with confirmed commercial bids of $50 to $65.
2. Drug trafficking, hardest field but strongest validated demand.
3. Gun crimes, clean field, and a competitor is already demonstrating the
   sub-offence architecture that earns AI Overview citations.
4. Identity theft, first of the white-collar three, because it has the only
   white-collar informational volume and is functionally a state offence.
5. Wire fraud, genuine relevance vacuum and high federal case value.
6. Money laundering, last: weakest evidence, and overwhelmingly a companion
   charge people do not search for standalone.

Grand theft is absent because it moved to wave 1 under Section 7.2.

**One part of the underlying analysis is expressly not adopted.** It suggested
folding embezzlement into grand theft, on the ground that Florida charges
embezzlement as theft. That is legally right and structurally wrong here:
embezzlement passes C9 on the position-of-trust fact pattern, which is a
different page from grand theft in everything except the charging statute, and
it is already a wave 1 page. It stays.

**What would reopen the decision**, in priority order. Accepting it does not
mean it is permanent; it means the burden is now on new evidence rather than on
the argument.

- **The firm's own case-mix and fee data.** This is the strongest counterargument
  and it is not a SERP question. If one wire fraud retainer is worth fifteen
  domestic violence retainers, low volume and high value can beat the ordering
  above. Twelve months of matters by type with average fee would settle it.
- **Search Console impressions once wave 1 is indexed.** If white-collar queries
  show impressions materially above the Ads-reported zeros, the volume data is a
  measurement artifact and the gap becomes exploitable.
- **Non-geo volume checks.** If money laundering and wire fraud carry real
  statewide or national volume once the Tampa modifier is dropped, those pages
  should be built for that intent, which is a different page than the one now
  scoped.
- **Domain authority.** On a new domain with no link profile, competing in the
  drug and gun fields is a multi-quarter project, and building the easy
  white-collar SERPs first is defensible as topical scaffolding. If that route is
  taken it must be agreed up front as scaffolding, so the pages are not judged on
  sessions at 90 days.

### 7.1 Reporting standard for waves 1 through 3

Added 2026-08-13 (DECISIONS.md D6). **AMENDED the same day by D17**, on evidence
D6 did not have. Read the amendment first; the original text follows it because
a decision is easier to audit when what it replaced is still visible.

#### The standard, as amended (D17)

> Reporting defaults to **statewide informational capture and conversion**,
> except where **DMA volume is verified measurable for that charge**, in which
> case local position is a legitimate secondary measure reported alongside it.
> Measurability is **checked per charge, never assumed** in either direction,
> and re-derived from a volume pull each reporting cycle.

**Two charges qualify today: DUI and domestic violence.** That list is data, not
doctrine.

**What changed and why.** D6 generalised a measurement from the charges it
happened to examine. That generalisation is false for DUI: `dui lawyer tampa`
returns **320 per month at Tampa DMA** at **$110.74** CPC, the highest in this
project's corpus, against no measurable DMA volume for seven of the terms D6
looked at. The amendment replaces the generalisation with a per-charge check,
rather than adding DUI as an exception, because an exception list would
reproduce the same error the next time a charge has volume.

**How the evidence must be stated.** On the **absolute** DMA figure and the CPC.
**Not** on Florida volume equalling DMA volume: that ratio is a tautology
satisfied by every city-named term in the same pull, including terms at 10 per
month, and it does not survive review.

**A hole in the foundational research, recorded as a hole.** docs/research/
keywords.md **never graded DUI at all** (zero word-boundary matches; the one
substring hit is a domain name in a rankers list). The file that graded
winnability for this project omits the charge carrying the highest measurable
local volume in it. That is an absence in the source material, not a wrong
grade, and the two need different remedies.

**Unchanged by the amendment:** this is told to the client **before** reporting
begins.

#### The original standard, as decided under D6

**Wave 1 and wave 2 pages are measured on statewide informational capture and on
conversion. Never on local charge-term position.**

The reason is not that the terms are unwinnable. It is that they are
**unmeasurable**. Google Ads reports no measurable Tampa DMA search volume for
the grand theft, drug trafficking, gun charge, money laundering, identity theft,
wire fraud, or PPP loan fraud attorney terms. Only domestic violence at 90 per
month and embezzlement at 10 per month register at all. Reporting a position on
a term with no measurable volume produces a number that means nothing.

The volume that does exist is statewide and informational, verified 2026-08-13:

| Term | Monthly, Florida |
|---|---|
| third degree felony Florida | 1,000 |
| grand theft Florida | 320 |
| domestic violence Florida charges | 170 |
| 10-20-life Florida | 170 |
| grand theft third degree Florida | 140 |
| identity theft Florida statute | 70 |
| Florida criminal punishment code scoresheet | 70 |

This extends what Section 7 already says about wave 4, for a different reason.
Wave 4 is not measured on rankings because the terms are years away. Waves 1 and
2 are not measured on local charge-term position because there is nothing there
to measure.

**Client communication requirement.** This revises the goal as originally
stated, so **it is communicated to the client before any reporting begins, not
alongside the first report.** A measurement standard introduced with the first
set of numbers reads as an excuse for them. Introduced beforehand it reads as
what it is.

---

## 8. Office Pages, Market Pages, and the Two-Office Reality

**The firm has two offices: Brandon (745 W Lumsden Rd, Brandon FL 33511) and
Tampa.** The Tampa address, suite, hours, and whether the phone differs are
unconfirmed and tracked as [NEEDS] items in src/lib/site.ts.

There are two distinct page types here and conflating them is what produces
doorway networks. An **office page** documents a place the firm occupies. A
**market page** documents a place the firm appears in court. They carry
different claims and different rules.

### 8.1 Absolute rules

These are not criterion-based. They hold regardless of what any market page
qualifies for.

1. **No charge page is duplicated per city.** There is no
   `/tampa/grand-theft-defense`, no `/riverview/drug-trafficking-defense`.
2. **No practice-by-location matrix.** 26 charges times N markets is a page set
   that fails the Section 4.5 cover-the-name test by construction. That is the
   Hanlon and Combs Waterkotte pattern in avoid.md items 46 and 47, carrying
   Google quality risk and Rule 4-7.13 misleading-geography risk.
3. **No page implies an office the firm does not have.** Rule 4-7.12 requires a
   bona fide office location; avoid.md item 33 names implying a Tampa office
   before a real one existed as a misleading communication. A market page names
   courts and agencies, never a local presence.

### 8.2 Office pages

One per office, two total:

- `/brandon-criminal-defense-lawyer`
- `/tampa-criminal-defense-lawyer` (blocked on the Tampa address)

These carry the NAP block, the office's Google Business Profile link, and the
Rule 4-7.12 location claim.

**The Tampa office page will not win its head term.** "criminal defense attorney
Tampa" is YEARS (avoid.md item 1). Its value is the bona fide office claim, the
GBP link, and NAP consistency, not rankings.

`OfficeBlock` already renders every published office site-wide, so Tampa appears
automatically once its address is confirmed and nothing renders for it until
then.

### 8.3 Market pages: permitted only on a verified differentiator

A market page for a place the firm does not have an office (Riverview, Plant
City, Wesley Chapel, or any other) is permitted **only if it passes C9 on its
own terms.** Cover the city name and the page must still be identifiable.

**The test.** The page must name at least one of the following that is different
from every sibling market page:

1. a different **arresting agency**,
2. a different **courthouse or annex**, or
3. a different **judicial circuit**.

One qualifying fact is enough, but it must be genuinely different from every
other market page in the set, not merely different from Brandon. Two market
pages that both rest on "Hillsborough County Sheriff's Office, 13th Circuit,
downtown Tampa courthouse" are the same page twice, and the second one fails.

**Every differentiator is verified before the page is built, per C12. Do not
assume.** County lines, circuit boundaries, municipal police jurisdiction, and
which courthouse or annex actually hears which case type are exactly the facts
that are easy to guess wrong and embarrassing to publish wrong.

**Allowlist extension for jurisdictional facts.** C12's allowlist covers
statutes and federal courts. For court and agency geography it extends to, and
only to: flcourts.gov circuit information, the official site of the circuit
court in question, the county clerk of court for courthouse and annex locations
and what is heard where, and the official site of the arresting agency. Not
acceptable: other firms' pages, aggregators, mapping services, or recall.

**Candidates, all unverified.** The differentiators below are hypotheses to
check, not findings. None of these pages is built until its row is verified and
the source recorded.

| Market | Candidate differentiator to verify | Verify against |
|---|---|---|
| Plant City | Whether it has its own municipal police department distinct from the county sheriff, and whether a courthouse or annex there hears criminal matters. keywords.md Section 5 refers to a "Plant City courthouse angle," which is prior research, not verification | County clerk of court; the municipal agency's official site |
| Wesley Chapel | Whether it sits in a different county from Brandon and therefore possibly a different judicial circuit, and whether the arresting agency differs | flcourts.gov circuit information; the county sheriff's official site |
| Riverview | No candidate differentiator identified. It may share county, circuit, arresting agency, and courthouse with Brandon, in which case it fails the test | Same sources; expected to fail |

**Markets that fail are served by Layer 2 courthouse guides instead**, under
`/resources/guides/`. A guide about a courthouse is honest content about a place
and makes no claim about the firm's presence, which is precisely why it is the
right form for a market where the firm has no distinguishing footprint.

**Done-criterion C14.** No market page ships without a verified differentiator
naming a different arresting agency, courthouse or annex, or judicial circuit
than every sibling market page, with the allowlisted source recorded in the
review queue.

### 8.4 Reconciliation and recorded tradeoff

This supersedes both the original five-location list in WEBSITE-PLAN.md Tier 3
and the blanket per-office rule in the previous revision of this plan.

**What changed and why.** The per-office rule was simple to state but it
foreclosed markets that DOSSIER.md Section 2 item 4 explicitly recommends and
that keywords.md Section 5 grades as real and weakly defended. The criterion
does the same protective work without the collateral damage: it blocks the
doorway pattern by requiring genuine local substance, rather than by banning a
page type outright. Riverview probably still fails, but it now fails on evidence
instead of on a rule.

WEBSITE-PLAN.md Tier 3 is reconciled to this section.

### 8.5 Google Business Profile: two profiles

DOSSIER.md Section 2 item 1 and Section 3 both assume a single profile. With two
offices that assumption no longer holds, and the consequences are larger than
they look.

#### 8.5.0 Gating dependency: read this first

**The entire two-profile program is contingent on one unanswered question.**

**[VERIFY: is the Tampa office staffed during its posted hours?]**

Google requires a location to be staffed during posted hours to be eligible for
a profile. Everything in the rest of Section 8.5 assumes the answer is yes.

**If Tampa is not staffed during posted hours:**

- Tampa gets no Google Business Profile.
- The two-profile split does not exist. There is one profile, Brandon.
- The single-profile sizing in DOSSIER.md Section 3 stands unchanged, and the
  correction in 8.5.4 does not apply.
- The Tampa office page and the site-wide NAP entry are unaffected. Those rest
  on Rule 4-7.12 bona fide office status, which is a different question from GBP
  eligibility.

This resolves before any profile is created, any category set is chosen, or any
review target is committed. It ties to the open [NEEDS: Tampa office hours] item
in src/lib/site.ts.

#### 8.5.1 Two profiles means two of everything, and nothing pools

- **Two category sets.** Each profile is configured independently. Primary
  category is "Criminal justice attorney" on both, per DOSSIER Section 2 item 1;
  secondary categories may differ only if the offices genuinely differ in
  practice emphasis, not as a keyword play.
- **Two photo sets.** Distinct exterior, interior, and team photos per location.
  Reusing Brandon photography on the Tampa profile misrepresents the location.
- **Two review streams.** A review on the Brandon profile does not help Tampa
  rank, and vice versa. Reviews attach to a location, not to a firm.
- **Two sets of hours**, subject to 8.5.0.

#### 8.5.2 Who counts as an eligible reviewer

**The program counts the retaining party, not only the defendant.**

Frequently that is a parent, spouse, or sibling: the person who called, came to
the office, sat in the meetings, and can describe a genuine experience of
working with the firm. Sizing the review program against defendants alone
understates the available volume, because it ignores the person who in many
matters had the most contact with the office.

The requirement is genuine experience, not proximity to the case. Someone who
never dealt with the firm is not an eligible reviewer regardless of relationship.

**No incentives of any kind.** Rules 4-7.13(b)(9) and 4-7.17(b) prohibit giving
anything of value for a review, as do Google and FTC policy (avoid.md item 34).
The firm also does not draft or suggest review wording (avoid.md item 35).

**[VERIFY: that asks to a retaining non-client party sit inside the permitted
scope of Rule 4-7.18(b).]** avoid.md item 36 records that asks to people who are
not current or former clients, or prior professional contacts, can trigger the
direct-solicitation regime. Where the defendant is the client and a parent or
spouse retained the firm, whether the retaining party falls inside that scope is
worth confirming before the ask script is written. This is a scripting question,
not a blocker on the pool itself.

#### 8.5.3 Uneven weighting between profiles is permitted

If the stream cannot support competitive velocity on both profiles, **weight
toward Tampa** as the higher-value geography rather than splitting evenly and
leaving both weak. Two profiles at half-velocity clear no benchmark; one profile
at full velocity clears several.

**This is implemented through which office handles which matters, never through
where asks are routed.** A review must reflect the office that actually served
the client. Directing a client to review a location they never dealt with is a
misrepresentation and against platform policy, and no ranking benefit is worth
it. If Tampa is to carry more reviews, Tampa handles more matters.

#### 8.5.4 Correction to DOSSIER.md Section 3, recorded rather than silently changed

DOSSIER Section 3 sets the target at **50 to 100 Google reviews at 4.9-plus
within 12 months, via 4 to 8 reviews per month.** That number was derived
against a single profile and a competitor benchmark ladder: 2 per month clears
the client-named firms, 3 clears Brancato, 11 would catch Curry Law Group in
Brandon, 14 to 17 would chase the pack leaders.

**With two profiles that target is understated.** Splitting 4 to 8 across two
profiles yields 2 to 4 each, which no longer clears the benchmarks it was
selected to clear. Holding the intended competitive position requires **4 to 8
per month per profile, roughly 8 to 16 per month firm-wide.**

**That figure is the position-holding requirement. It is not an achievable
target, and it should not be presented as one.**

Criminal defense has a structurally low review rate. Many clients decline to be
publicly associated with the firm that defended them, for reasons that are
entirely rational and that no ask script overcomes. A civil or transactional
practice converts closed matters to reviews at a rate this practice will not
match, and the benchmark ladder in DOSSIER Section 3 was built from competitor
counts without adjusting for that.

**The gap is stated plainly rather than smoothed over:** 8 to 16 per month
firm-wide is what holding position across two profiles would take, and it is
above what a two-office criminal defense practice should expect to produce from
honest, unincentivized asks. The eligible-pool widening in 8.5.2 narrows the gap.
It does not close it.

The honest responses to the gap, in preference order:

1. Widen the pool to every genuinely eligible reviewer (8.5.2).
2. Weight toward the higher-value profile rather than splitting (8.5.3).
3. Extend the timeline past 12 months.
4. Accept a lower competitive position on the secondary profile.

Not on the list: incentives, drafted wording, asks to people who did not deal
with the firm, or routing asks to the wrong location. Those are prohibited
regardless of what the gap costs.

**Tampa starts at zero.** Brandon has an existing profile with a low count;
Tampa would have none. The two profiles will not track together and the Tampa
ramp is the longer one, which is a further argument for 8.5.3.

#### 8.5.6 Third revision, against a directly observed pack

Added 2026-08-13 (DECISIONS.md D9). Placed after 8.5.4 in substance; numbered
after 8.5.5 so nothing above is renumbered and the revision history stays
readable in order.

**The ladder in DOSSIER.md Section 3 was wrong, and every number derived from it
is understated.**

Every previous count in this corpus was aggregator-reported and carried a
5-to-25-percent staleness band, because no local pack had ever been directly
observed. On 2026-08-13 the pack was observed directly, Tampa-geolocated, on ten
of ten wave 1 and wave 2 primary queries.

**Observed counts:** Daniel J. Fernandez 574, Hersem Law 236, Sammis 167,
StechLaw 136, Brett Metcalf 125, Greater Tampa Law 123, Musca Law 109. Also
appearing: Mike G Law 76, Scriven 76, OA Law Firm 75, Michael J. Petro 17.

DOSSIER Section 3 sized its target against a ladder topping at Smith & Eulo 193.
The firm holding pack position 1 across most of these queries has **roughly three
times that**.

**Conclusion: local pack entry is a multi-year objective under honest,
unincentivized asks.** That is stated plainly rather than converted into a fourth
monthly number.

**This is the third upward revision. Naming the pattern is the point.**

| # | Where | What changed |
|---|---|---|
| 1 | DOSSIER.md Section 3 | 50 to 100 reviews at 4.9-plus in 12 months, via 4 to 8 per month. Single profile, aggregator-reported ladder topping at 193. |
| 2 | Section 8.5.4 above | Two profiles, nothing pools, so holding position needs 4 to 8 per month **per profile**. That section already said plainly this was a position-holding requirement rather than an achievable target. |
| 3 | This subsection | The ladder itself was wrong. The observed leader is at 574. |

Each revision moved the number up, and each was triggered by better information
rather than by a change in ambition. Three revisions in one direction is the
signal. **Review count is the wrong lever to plan the local strategy around on a
twelve-month horizon**, for the structural reason 8.5.4 already gave: criminal
defense has a low review rate, many clients rationally decline to be publicly
associated with the firm that defended them, and no ask script overcomes that.

**What does not change.** The programme still starts week one, still asks every
genuinely eligible party per 8.5.2, still offers no incentive of any kind, and
still never drafts or suggests wording (Rules 4-7.13(b)(9), 4-7.17(b), 4-7.18;
avoid.md items 34 through 37). A slow-compounding asset with a distant payoff is
still worth starting first. What changes is what anyone is told to expect from
it, and by when.

#### 8.5.5 Open verification

**[VERIFY: how the Local Services Ads review gate applies across two
locations.]** DOSSIER Section 2 item 11 gates LSA launch on roughly 35-plus
reviews, computed against one profile. Whether that threshold applies per
location or firm-wide changes when paid can start. **Left open deliberately; do
not resolve it by inference.** Confirm against Google's own documentation before
the paid budget in DOSSIER Section 6 is committed.

---

The corrections in 8.5.4 are recorded here rather than edited into DOSSIER.md,
which is a dated research artifact. DOSSIER Section 3 remains accurate for the
single-office assumption it was written under, and becomes operative again
unchanged if 8.5.0 resolves to "not staffed."

---

## 9. Currency Policy

Currency is the most beatable dimension in this market: the strongest competitor
page on the CPC topic is dated February 2022 (content-gaps.md Topic 4). It is
also the easiest advantage to lose, because it decays silently.

### 9.1 Every page carries a date and an owner

Two required fields on every charge page, silo hub, and tool page, stored as
page data rather than prose so they can be queried:

- `lastReviewed`: the date a named person last checked the page against its
  cited sources.
- `owner`: the reviewing attorney. A page with no owner is not published.

`lastReviewed` renders on the page (template item 10). It is a factual review
date, not a "published" date, and it is never bumped without an actual review.

### 9.2 Cadence

| Page type | Cadence | Why |
|---|---|---|
| Sentencing calculator | 6 months, plus every Rule 3.992 revision | A stale formula is a Rule 4-7.13(a)(1) accuracy problem, not just staleness (Section 5.5) |
| Pages citing penalties, thresholds, or dollar figures | 6 months | These are the numbers that move and the ones readers act on |
| Other charge pages and silo hubs | 12 months | Elements and process change slowly |

**Anchor the annual sweep to July.** Florida's regular legislative session
produces laws that typically take effect July 1, so a sweep in the weeks after
that date catches the year's statutory changes in one pass rather than
discovering them page by page.

### 9.3 Off-cycle trigger

**When a statute cited on a page is amended, that page enters off-cycle review
within 30 days of the firm learning of the amendment, regardless of where it
sits in the cadence.**

The trigger is the amendment, not the effective date, because the drafting
window is when the work is cheapest. A page whose cited statute has changed is
carrying an inaccurate statement, so the review is not optional and cannot wait
for the annual sweep.

Practical detection: the July sweep catches session output; between sessions, a
statute cited on a page changing is most likely to surface through the
verification allowlist in Section 10.3, which fetches the operative statute
every time a page is drafted or refreshed.

### 9.4 Where the queue lives

**`docs/build/REVIEW-QUEUE.md`**, a single register listing every page with its
`owner`, `lastReviewed`, cadence, next due date, and any open [VERIFY] or
off-cycle trigger.

It lives in the repo rather than in a project tool for the same reason the rest
of these plans do: it versions with the pages it describes, and a review date is
only trustworthy if you can see when and by whom it was changed. The page data
is the source of truth; the register is the human-readable view and the place
off-cycle triggers get logged.

**Done-criterion.** No charge page ships without a populated `owner` and
`lastReviewed`, and an entry in the review queue.

---

## 10. Content Production: Named Project Risk

Promoted from an open question. This is the largest delivery risk in the
project, and it is a resourcing risk rather than a research or design one.

### 10.1 The risk

Twenty-six charge pages at a realistic 1,200 to 1,800 words each, every one
carrying statute citations, a penalties table, an FAQ block, an attorney byline,
and a review date. Plus three silo hubs, plus the ongoing refresh load created
by Section 9.

Under-resourcing this does not produce fewer pages. It produces 26 thin pages
that fail the Section 4.5 test, which is the competitor failure mode this whole
section is designed to beat. The risk is not that the pages do not get written.
It is that they get written badly and the section's entire premise is lost.

### 10.2 Proposed answer

| Scope | Production route |
|---|---|
| Wave 1 pages (Section 7) | Agency drafts, attorney reviews and signs the byline |
| Waves 2 through 4 | Astold voice pipeline, once it reaches v1 |
| All subsequent refreshes (Section 9) | Astold voice pipeline |

Wave 1 stays human-drafted deliberately. It is small, it is the highest-value
set (three NOW-graded pages), and it is what establishes the voice, the
citation depth, and the section conventions that the pipeline is then held to.
A pipeline calibrated against three finished pages produces better output than
one calibrated against a spec.

### 10.3 Verification pass and its allowlist

Whatever drafts the prose, **every statutory claim is verified by fetching the
operative source, never by recall.** The verification pass is allowlisted to
official sources only:

- **Florida statutes:** the Legislature's Online Sunshine (leg.state.fl.us) and
  flsenate.gov statute pages.
- **Florida rules of criminal procedure and the scoresheet:** flcourts.gov and
  the Florida Bar's published rules, plus the FDLE scoresheet forms for Rule
  3.992.
- **Middle District of Florida:** flmd.uscourts.gov for local rules, general
  orders, division information, and judge assignments.
- **Federal statutes:** **uscode.house.gov**, published by the Office of the Law
  Revision Counsel, which is the official publisher of the United States Code.
- **Federal sentencing guidelines:** ussc.gov.
- **Federal procedure and DOJ policy:** justice.gov, **for procedure and policy
  only**. See the scope limit below.
- **Federal courts, general:** uscourts.gov.

**Considered and refused, 2026-08-13 (DECISIONS.md D18): flhsmv.gov.** It
administers the DUI administrative-suspension proceeding and holds organic
position 1 on `florida DUI penalties`, and it is still **not** allowlisted, for
two reasons. The DUI page was built entirely without it and lost nothing, every
claim resting on F.S. 322.2615, 322.271 and 316.193 from allowlisted sources. And
it is currently publishing the **superseded** rule on the exact point that page
corrects, stating "Second or subsequent refusal is a misdemeanor of the first
degree" after ch. 2025-121 made a **first** refusal a second degree misdemeanor
effective 1 October 2025.

The general rule the refusal stands on: **the allowlist prefers the source that
publishes the law over the agency that applies it.** An agency page can lag the
statute it administers, and this one demonstrably does. This is the same line
already drawn for justice.gov below.


**Amendment, 2026-08-13 (DECISIONS.md D2). Why the original list was
defective.** This list previously read "Federal statutes and guidelines:
uscourts.gov and ussc.gov." ussc.gov publishes the Guidelines Manual, so the
guidelines half was sound. **Neither site publishes the United States Code**, so
the statutes half named no source capable of satisfying it. C12 was therefore
unsatisfiable for every federal statutory claim, which blocked seven of the ten
wave 1 and wave 2 content briefs. The rule was not too strict; it pointed at the
wrong door.

### C12-B: the byline class. Claims no allowlist can settle.

**Added 2026-08-13**, after the same situation arose four separate times and was
handled ad hoc each time.

The allowlist above sorts **sources** into acceptable and unacceptable. It
assumes that for any claim, some acceptable source could settle it. **For a
whole class of claims that assumption is false.** These are not blocked by a gap
in the allowlist, and widening the allowlist would not reach them. They are
outside it **by nature**:

- **Statutory construction.** What operative text *means* where the text does not
  say. Whether an incorporation clause carries a criminal provision across.
  Whether a defined term reaches a person the definition does not name.
- **Case law.** Any proposition whose authority is a holding. **No source on the
  allowlist publishes holdings**, and none ever will, because the allowlist is
  built from statute publishers, court administrative sites, and agency policy.
- **Executive discretion.** Clemency, restoration of rights, and charging
  practice. Governed by boards and offices exercising judgment, not by a statute
  that can be quoted against them.

**The fixed rule.**

> A byline-class claim either **appears under an attorney's byline as that
> attorney's own judgment, with their own citation**, or it **does not appear**.
> It is never resolved by research, and it is never left implied.

**Both halves are load-bearing.** "Never resolved by research" stops the endless
second pass: more fetching cannot close these, so a brief that keeps trying is
burning passes on a question its method cannot answer. **"Never left implied" is
the half that is easy to miss**: a page can commit to a construction without
stating it, by writing as though the answer were settled, and that is worse than
stating it, because the reader cannot see that a judgment was made.

**The safe move is almost always to state the verified text and stop.** W4-03
does this well: it quotes Rule 6(e)(2)(B)'s list and **does not draw the
conclusion** about what the omission of witnesses from that list means. The
reader gets the operative material and the page makes no claim it cannot support.

**A byline-class item is never a research UNMET that a later pass clears.** It is
a standing routing decision. Mark it, route it to the attorney read, and move on.

#### Current instances, recorded against the category

| Claim | Kind | Brief |
|---|---|---|
| Whether 15 U.S.C. 636(a)(36)(W) carries across to paragraph (37) second draw loans via (37)(B) | Construction | OPP-01 |
| Whether "a borrower" in 636(a)(36)(W) reaches facilitators and organisers | Construction | OPP-01 |
| Whether each wire is a separate count under 18 U.S.C. 1343 | Case law | W2-07 |
| Whether and how a Florida felon regains firearm rights | Clemency | W2-03 |
| What a defendant's prima facie showing under F.S. 776.032(4) requires | Case law | W4-03 |
| The constructive possession test under F.S. 893.13 | Case law | ST-02 |
| Whether "exceeds authorized access" reaches misuse of legitimate access | Case law | FED-02 |
| Whether courts have held no overt act need be proved under 846, 1349, 1956(h) | Case law | FED-06 |
| Scope of the agreement in a federal conspiracy, and limitations accrual for a continuing offense | Case law | FED-06 |
| Whether a completed loss to the institution is required under 18 U.S.C. 1344 | Case law | WC-02 |
| Whether 18 U.S.C. 1348 requires an actual purchase or sale | Case law | WC-03 |
| Whether self-laundering is chargeable and on what terms | Case law | FED-01 |
| Whether 922(g)(3) reaches state-authorised medical marijuana use | Case law | FED-07 |
| The legal effect of Rule 6(e)(2)(B) omitting witnesses from its list | Case law | FED-08 |
| Whether a death sentence under F.S. 794.011(2)(a) is presently available | Constitutional | W4-01 |
| Florida sobriety checkpoint law | Case law | ST-04 |

**Sixteen instances across eleven briefs.** The pattern is stable enough to plan
around: **every charge page in this project should expect at least one**, and the
attorney read is where they are answered or dropped, not the research pass.

**Scope limit on justice.gov.** justice.gov is allowlisted for **procedure and
DOJ policy only, and is explicitly not a source for what a statute says.** The
Justice Manual states internal charging policy, not law, and it does not bind a
court. Citing JM 9-11.151 for what a target letter is, is correct use. Citing it
for what a statute requires is not, and a page that does so is making a legal
claim from a policy document.

Not allowlisted, and not acceptable as a citation source: other law firms'
pages, secondary summaries, aggregators, or any figure the drafting model
produces from memory. content-gaps.md records two competitors publishing legally
inaccurate content, one of which overstates what expungement does; both would
have been caught by fetching the statute.

The allowlist is also what makes Section 9.3's off-cycle trigger work in
practice, since a fetch against the operative statute during a refresh is the
most likely way an amendment gets noticed between sessions.

**The allowlist answers a different question from verifier independence, and
both need answering.** Added 2026-08-13. C12 governs whether a source is
authoritative. It says nothing about how many independent paths a claim rests
on. Two checks against one authoritative document is one path reported as two,
and it cannot detect the failure it was run to detect. That defect category is
recorded in docs/research/HUNT-LIST.md defect 1, with the rule that follows:
**verifier independence means an independent path to the fact, not an
independent agent.** Where only one authoritative source exists, say so, rather
than running a second pass against it and recording two.

### 10.4 The dependency, stated plainly

**Waves 2 through 4 are sequenced behind Astold reaching v1.** That is a real
dependency on a system outside this project, and it should be visible in the
schedule rather than discovered when wave 2 is due.

Consequences if v1 slips:

- Wave 1 is unaffected. It is human-drafted by design and can start immediately.
- Waves 2 through 4 either slip with it, or fall back to agency drafting with
  attorney review at wave 1 cost per page. That is a budget decision, not a
  technical one, and it should be made deliberately rather than by default.
- The Section 9 refresh load also falls back to human drafting, which is the
  more expensive half of the exposure over time, because refreshes recur.

Because of that, the fallback should be priced before wave 1 ships, so the
decision at wave 2 is a choice rather than a scramble.

---

## 11. Layer 2 Lives at Its Own Hub

**Decision: tools and guides live under a single hub at `/guides`. They are not
listed per section.**

The alternative was a tools-and-guides block on each silo hub and on the section
hub, which is how most firm sites do it. Rejected for three reasons:

1. **The same asset serves several silos.** The After an Arrest guide is
   relevant to nearly every state charge, and the federal timeline to every
   federal one. Listing per section means either repeating an asset across
   pages or arbitrarily assigning it to one.
2. **Section hubs already have a job.** The section hub's payload is the full
   charge index (Section 2). A second index of guides underneath it competes
   with the first and pushes the charge links further down the page.
3. **Layer 2 grows on its own schedule.** WEBSITE-PLAN.md Section 6 puts guides
   on a separate cadence from money pages. A single hub absorbs new assets
   without touching any section page.

### 11.1 Who links to what

| Surface | Links to |
|---|---|
| Section hub (`/cases-we-defend`) | The Layer 2 hub only, one row, after the charge index |
| Silo hubs | The Layer 2 hub only |
| **Charge pages** | The **specific** tool or guide that answers the reader's next question, per the level 3 template item 9 |

That split is the point. The section hub is for someone still working out what
they are facing, so a general pointer is the right depth. A charge page reader
has a specific next question, so a specific link is. Charge pages keep their
direct per-asset links exactly as Section 4.3 specifies.

**The sentencing calculator is linked from nowhere,** including the hub, until
it clears done-criteria C1 through C8 (Section 5.6).

### 11.2 Open question: does /guides earn a primary nav item?

**Recommendation: yes, once more than two assets exist. Not before.**

A top-level nav item pointing at a hub with one guide on it advertises a library
that is not there. Below three assets the hub is reachable from the section hub,
the silo hubs, and the charge pages, which is enough traffic for its actual
audience. At three or more it becomes a destination someone would navigate to
directly, and it should be promoted.

### 11.3 RESOLVED: Layer 2 lives at /resources

Recorded as a conflict in an earlier pass and now settled.

Three places disagreed about where Layer 2 lives: this plan and a `/guides`
stub said `/guides`, the client-confirmed nav in SITE.md said
**Resources -> Tools & Guides** at `/resources/tools-and-guides`, and the
`tools` entries in src/lib/site.ts already pointed at `/resources/tools/*` and
`/resources/guides/*`.

**`/resources` wins.** It is the structure that came out of the client meeting,
it is already rendered in the header and the side menu, and two of the three
sources already agreed with it. `/guides` was a stub built before the question
was settled, so it was the cheapest thing to move.

What changed:

- `/resources` built as the Layer 2 hub, with `/resources/tools-and-guides` and
  `/resources/articles` as children, so the nav no longer points at 404s.
- `/guides` deleted and 308-redirected to `/resources` in next.config.ts, so
  anything that linked there still resolves.
- The guides row on `/cases-we-defend` repointed at `/resources`.

Section 11.2 still stands: `/resources` already has its primary nav item, so
the open question there is now moot.


---

## 11A. The FAQ Standard

FAQs are first-class content on this section, not filler at the bottom of a
page. They are also the single best-positioned asset for how people now ask
questions, so they get a standard rather than a slot.

### 11A.1 What the value actually is

**Not rich results.** Google deprecated FAQ rich results for most sites in 2023.
Anyone promising stars in the SERP from FAQPage markup is working from stale
information, and content-gaps.md already records that the schema's remaining
value is entity signaling.

**Passage extraction.** AI Overviews, ChatGPT search, and Perplexity answer by
lifting self-contained passages. A question phrased the way someone types it,
followed by a complete answer in two or three sentences, is close to the ideal
extractable unit. It is also how people talk to an assistant, which is the same
long-tail keywords.md grades as winnable now while the head terms are not.

**One correction worth carrying:** the visible Q&A copy does most of that work,
not the markup. Models read rendered text. The schema helps entity
understanding and is an under-used local differentiator, since content-gaps.md
found only Oberheiden using it, but markup wrapped around thin answers buys
nothing.

### 11A.2 The four rules

1. **Three to six per charge page. C9 applied at the question level.** Each
   question must be askable about this charge and nonsensical about any other.
   "What are the elements of the offence" is filler and appears nowhere. "How
   much does the property have to be worth" belongs to grand theft and to
   nothing else.
2. **Questions come from keywords.md, not from imagination.** The research
   already recorded what people type and graded how winnable each one is. Every
   FAQ entry carries `source` and, where research-derived, its `grade`. A
   question invented at the desk is labeled `drafted` so it is never mistaken
   for a measured one.
3. **Silo hubs carry forum-level questions.** "How do I know whether my case is
   state or federal" is about the court, not the offence, so it belongs on the
   hub. It is also the question C10 requires on every overlap page.
4. **Answer completely in the first two sentences.** An answer that needs the
   preceding paragraph for context does not survive extraction. Write the
   answer to stand alone, then add detail after it if detail is needed.
5. **A question that surfaces on more than one charge SERP is not a charge
   FAQ.** Added 2026-08-13. It is answered once, in the Layer 2 guide that owns
   it, and every charge page whose SERP surfaced it links there from item 9.
   Repeating it across pages is the mechanism by which twenty-six pages become
   interchangeable, which is what C9 exists to prevent. Record the question and
   the pages it surfaced on, so the Layer 2 backlog is driven by measured demand
   rather than by what is convenient to write.
6. **Superiority-shaped questions are never answered on the firm's own pages.**
   Added 2026-08-13. "Who is the best criminal defense lawyer in Florida," "who
   is the best federal criminal defense attorney," and every variant of them
   surface in People Also Ask constantly. **Answering one on the firm's own site
   is an unverifiable superiority claim under Rule 4-7.13(b)(3)**, which requires
   that words characterising a lawyer's or firm's skills, experience, reputation,
   or record be objectively verifiable. avoid.md items 14 through 17 already
   catalogue six competitors who cross this line; PAA presence is not a licence
   to join them.

   **Record them in the brief as observed and refused**, with the reason. The
   point of recording rather than silently omitting is that a later writer
   looking at the same SERP will see the same question and needs to know it was
   considered and rejected, not missed. On the Middle District of Florida query,
   **three of four PAA questions were of this shape** ("Who is the best criminal
   defense lawyer in Florida?", "Who is the best federal criminal defense
   attorney?", plus an off-topic third), leaving exactly one usable question on
   the whole SERP. A brief that recorded only the usable one would look like
   thin research instead of what it was, which is a hostile PAA set.

### 11A.3 Questions ship before answers

A question is research. An answer is legal content: it carries statutory
figures, so it clears the C12 verification pass and an attorney read before it
publishes.

So the two land separately. `FaqItem.answer` is optional, unanswered questions
render a visible marker, and **`faqJsonLd` filters to answered items only**. A
`Question` with no `acceptedAnswer` is invalid markup, and emitting one to look
complete is the kind of hollow structured data that earns a manual action
rather than a rich result.

Charges with no research-graded question yet have no FAQ at all rather than a
padded one. A thin FAQ beats a filler FAQ.

### 11A.4 Current state

Questions are placed and unanswered. Answers are wave 1 content work.

| Page | Questions | Source |
|---|---|---|
| State hub | 6 | 5 from keywords.md, 1 drafted |
| Federal hub | 6 | 5 from keywords.md, 1 drafted |
| White-collar hub | 4 | 1 from keywords.md, 3 drafted |
| Charge pages | 9 across 9 pages | all keywords.md |

**Done-criterion C15.** Every FAQ question passes C9 at the question level,
carries a `source`, answers completely within its first two sentences, and no
`FAQPage` markup is emitted for an unanswered question.

---

## 12. Compliance Rails

Beyond the standing Rule 4-7 rails in WEBSITE-PLAN.md Section 4, and the
calculator-specific gate in Section 5, three items specific to this section.

**Sensitive charges take a different register.** SITE.md requires sex offenses
and CSAM be framed around process, rights, and discretion. In practice: no lurid
description of alleged conduct, lead with investigative posture and the reader's
rights, state discretion explicitly. avoid.md item 28 flags fear-marketing
urgency copy ("last best chance") as the pattern to avoid on pre-charge pages.

**Every statutory figure needs primary-source verification before publish.**
content-gaps.md records a competitor overstating what expungement does and
another with internally inconsistent case counts. A wrong penalty figure on a
page a family reads at 2am is an accuracy failure and a trust failure at once.
Every number carries [VERIFY] until checked against the Section 10.3 allowlist,
and each page states its statute revision date.

**No case results anywhere in this section.** avoid.md items 21 through 25
catalogue five competitors presenting results without required disclaimers.
Results live on /results, gated, disclaimered, and only when real and consented.

---

## 13. Done-Criteria Added in This Revision

| # | Done-criterion | Applies to | Section |
|---|---|---|---|
| C1 | Output framed as what the statute computes; no "your sentence," "your score," or predictive phrasing | Calculator | 5.6 |
| C2 | Prominent adjacent statement of what the tool cannot know (prior record, victim injury points, enhancements, mandatory minimums, departures, discretion) | Calculator | 5.6 |
| C3 | That statement meets Rule 4-7.12(d) presentation: equal prominence, close proximity, same or larger text, not fine print, not footer-only | Calculator | 5.6 |
| C4 | No-attorney-client-relationship notice adjacent to the output, not footer-only | Calculator | 5.6 |
| C5 | Client-side computation only; no server-side storage or logging of charge data, no case facts in URLs or analytics, no lead gate | Calculator | 5.6 |
| C6 | Implemented Rule 3.992 revision stated by date, including the January 2026 correction, with a Florida-law-only scope note | Calculator | 5.6 |
| C7 | Attorney-reviewed accuracy note naming the reviewing attorney and review date for the computation | Calculator | 5.6 |
| C8 | No case results, testimonials, "confidential" labeling, or implied Bar approval on the tool page | Calculator | 5.6 |
| C9 | Page passes the cover-the-name test: at least one section false or nonsensical if the charge were swapped | Every charge page | 4.5 |
| C10 | Overlap pages carry a forum section and a single cross-link to their counterpart; no shared body copy | Overlap pages | 4.6 |
| C11 | Populated `owner` and `lastReviewed`, plus an entry in docs/build/REVIEW-QUEUE.md | Every charge page, silo hub, and tool | 9.4 |
| C12 | Every statutory claim verified by fetching an allowlisted official source, never by recall. Federal statutory text comes from uscode.house.gov; justice.gov is procedure and policy only and is never a source for what a statute says (DECISIONS.md D2) | All content | 10.3 |
| C13 | No charge page duplicated per city; no practice-by-location matrix; no page implies an office the firm does not have | Section architecture | 8.1 |
| C14 | Market page names a verified different arresting agency, courthouse or annex, or judicial circuit than every sibling market page, with the allowlisted source recorded | Every market page | 8.3 |
| C15 | FAQ question passes C9 at the question level, carries a `source`, answers completely in its first two sentences, and emits no FAQPage markup while unanswered | Every FAQ entry | 11A |

Charge pages are gated on C9 through C13, and on C15 for their FAQ block. Market pages are gated on C13 and C14.
The calculator is gated on C1 through C8 and C11 through C12, and no charge page
links to it until it clears them.

---

## 14. Open Questions

1. **Does `/cases-we-defend` need to exist?** The alternative is pointing the
   nav item at `/criminal-defense` and letting that silo carry the section. That
   saves a page but loses the single index linking all 26 charges.
   Recommendation: keep the hub, precisely for that index.
2. **Which attorney leads which charge?** Same blocker as the bios
   (WEBSITE-PLAN.md Open Question 2). Without it the "Handled by" block cannot
   render on any of the 26 pages, and that block is a meaningful share of the
   section's E-E-A-T value. It is also the input to the `owner` field in
   Section 9.1.
3. **Does the firm have real federal healthcare fraud matters?** keywords.md
   grades that term 6-12mo *conditional*, and YEARS without demonstrated federal
   healthcare experience on the attorney bios. It decides whether that page is
   worth reinforcing or just worth having.
4. **What is the Tampa office address?** Blocks the Tampa location page, the
   second GBP, and the site-wide NAP block (Section 8).
5. **What is the target date for Astold v1?** Section 10.4 sequences waves 2
   through 4 behind it. The fallback needs pricing before wave 1 ships.

Former Open Question 4 (who writes and signs off on 26 pages) is now Section 10.
