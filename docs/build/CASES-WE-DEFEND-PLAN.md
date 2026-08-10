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

Revision note: Sections 5, 8, 9, 10, and 4.5 were added in the second pass. The
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

### 4.3 Section-by-section template

Extends the money-page template in WEBSITE-PLAN.md Section 4.

1. **H1 and the direct answer.** One paragraph answering "what is this charge"
   in the first 40 words, plain language. This is the featured-snippet slot.
2. **What the statute says.** Cite it. F.S. 812.014 for theft, F.S. 893.135 for
   trafficking, 18 U.S.C. 1343 for wire fraud.
3. **Degrees and penalties table**, with the scoresheet link (Section 4.2).
4. **What the state has to prove.** The elements, listed. Converts well because
   it reframes the reader's situation from hopeless to contested.
5. **How the defense is approached.** Process only. See Section 11.
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

| Wave | Pages | Grade and reasoning (keywords.md) |
|---|---|---|
| 1 | Middle District of Florida federal hub | **NOW.** No Tampa private firm holds a dedicated district page |
| 1 | Embezzlement | **NOW.** Weakest SERP in the white-collar cluster, routine template pages ranking |
| 1 | PPP loan fraud | **NOW.** Thin field, but modest and decaying shelf life |
| 2 | Grand theft, drug trafficking, gun crimes, domestic violence | 6-12mo. Content quality is the barrier, not domain age |
| 2 | Money laundering, identity theft, wire fraud (Tampa-scoped) | 6-12mo. Statewide wire fraud is YEARS; city-scoped is winnable |
| 3 | Federal drug conspiracy, federal indictment, target letter defense | 6-12mo. Highest case value per visit |
| 4 | Sexual battery, sex crimes, CSAM, homicide | YEARS. Build for capability and referral conversion, expect nothing from search |

Wave 4 pages still get built. They convert the referral traffic the firm already
earns, which DOSSIER.md Section 1 identifies as most of the firm's work. They
should simply not be measured on rankings.

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
- **Federal statutes and guidelines:** uscourts.gov and ussc.gov.

Not allowlisted, and not acceptable as a citation source: other law firms'
pages, secondary summaries, aggregators, or any figure the drafting model
produces from memory. content-gaps.md records two competitors publishing legally
inaccurate content, one of which overstates what expungement does; both would
have been caught by fetching the statute.

The allowlist is also what makes Section 9.3's off-cycle trigger work in
practice, since a fetch against the operative statute during a refresh is the
most likely way an amendment gets noticed between sessions.

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

## 11. Compliance Rails

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

## 12. Done-Criteria Added in This Revision

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
| C12 | Every statutory claim verified by fetching an allowlisted official source, never by recall | All content | 10.3 |
| C13 | No charge page duplicated per city; no practice-by-location matrix; no page implies an office the firm does not have | Section architecture | 8.1 |
| C14 | Market page names a verified different arresting agency, courthouse or annex, or judicial circuit than every sibling market page, with the allowlisted source recorded | Every market page | 8.3 |

Charge pages are gated on C9 through C13. Market pages are gated on C13 and C14.
The calculator is gated on C1 through C8 and C11 through C12, and no charge page
links to it until it clears them.

---

## 13. Open Questions

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
