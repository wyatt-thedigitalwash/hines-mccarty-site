# Our Firm (/about) -- Page Plan

Structure, content, draft copy, and build sequence for the firm page. Sits under
docs/build/WEBSITE-PLAN.md Tier 0 and inherits its compliance rails. Draft copy
below is first-pass and written to Fla. Bar R. 4-7; it still needs an attorney
read before it publishes.

Sources: docs/research/DOSSIER.md (positioning, the four-attorney bench as the
firm's real differentiator), docs/research/avoid.md Section 2 (the specific
about-page compliance traps), SITE.md (voice, palette, type).

---

## 1. Naming and URL

Visible label is **Our Firm**, per the client. The URL stays **`/about`**.

Rationale: `/about` is the convention, it is already linked from the Attorneys
hub and the footer, and nothing is published yet so there is no migration cost
either way. Renaming to `/our-firm` buys nothing and costs a rename across two
components. If the client insists on the URL matching the label, do it before
launch, not after.

The side-menu child label changes from "About the Firm" to "Our Firm" in
`primaryNav` (src/lib/site.ts).

---

## 2. Division of Labor with /attorneys

This is the decision that determines whether the page is worth having. The two
pages cannibalize each other unless the split is strict.

| /about (Our Firm) | /attorneys |
|---|---|
| The firm as an entity | The four people |
| Why a four-attorney bench matters | What each one actually does |
| How a case moves through the office | Credentials, bar numbers, full bios |
| Courts, standards, community | The practice areas each attorney leads |

**Rule:** /about names the four attorneys exactly once, in a strip that links
out. No bios on this page. If a paragraph is about a person, it belongs on that
person's page.

---

## 3. What This Page Is Actually For

It will not rank for money terms. Nobody searches for a firm's about page. Its
three jobs, in order of value:

1. **Convert referral traffic.** DOSSIER Section 1 establishes that much of the
   firm's work arrives by word of mouth. A referred client searches the firm
   name, lands here, and decides quickly whether this reads as a real firm or a
   shingle. This is the highest-value job on the page.
2. **Carry E-E-A-T.** The four-attorney bench is the firm's genuine structural
   advantage in a market of solos (DOSSIER Section 1). This page states it as an
   entity, marks it up in schema, and links into the four bios.
3. **Distribute internal links.** Up to the three practice silos, out to the
   bios, across to Results and Contact.

Write it for a human who is already half-sold, not for a crawler.

---

## 4. Section Flow

The logic: who we are, why that structure matters, how it works in practice, who
the people are, where the firm appears, what it holds to, proof, talk to us.

Backgrounds alternate per the Section Spacing Rule in CLAUDE.md, using the
existing navy / white / linen vocabulary.

### Section 1. Statement hero (navy)

Not a stock "About Us" banner. One H1, one paragraph, in the Sheppard register.

> **H1:** A Brandon criminal defense firm built for the charges other firms
> refer out.
>
> Hines & McCarty is four attorneys who each concentrate on a different part of
> criminal law, practicing in the state courts of Hillsborough County and in the
> Middle District of Florida. The firm was built so that a serious case goes to
> someone who has handled that exact kind of case before.

The H1 carries "Brandon" and "criminal defense" without reading as keyword
stuffing.

### Section 2. The thesis (white)

The home page teases this with "A partnership, not a single name on the door."
This page proves it. Do not repeat the home copy verbatim; expand it.

> **H2:** Four attorneys, four different concentrations.
>
> Most criminal defense firms in this market are one lawyer and a staff. That
> works until a case turns into something the lawyer has not handled before, and
> then the client either gets referred out or does not.
>
> Hines & McCarty is structured the other way around. Each attorney concentrates
> in a different area, so when a case comes in it goes to the person who already
> knows that kind of case rather than to whoever has room. Cases get worked in
> front of the other three, which means a client gets one attorney's attention
> and four attorneys' judgment.
>
> That structure is why so much of the firm's work arrives by referral, both
> from former clients and from other lawyers who send the matters they do not
> take themselves.

The referral line is a strong, lawful credibility signal. Referral flow is a
fact, not a superlative.

### Section 3. How a case is handled (linen)

Reuse the four-step `process` array already in src/lib/site.ts (Consultation,
Investigation, Strategy, Resolution). It is written and it is compliant.

Lead-in so it reads as method rather than sales funnel:

> **H2:** How a case is handled here.
>
> The order of operations does not change based on the charge. What changes is
> how long each stage takes.

**Do not confuse this with the client's four-step "Consultation Process"** from
the meeting notes (call, meet, explore options, represent in court). That one is
a conversion ladder and belongs on /contact or the home page. This one is about
method. Running both on the same page is redundant.

### Section 4. The bench (navy)

Four cards: name, the area that attorney leads, portrait, link to the bio. This
is the page's main internal-link payload and its E-E-A-T anchor.

Two constraints:
- **Maria Pavlidis needs an accurate label.** She operates a separate firm
  (pavlidislawfirm.com). Blocked until her relationship to Hines & McCarty is
  confirmed. Likely ships as "Of Counsel" with a line noting the separate
  practice (WEBSITE-PLAN.md Open Question 2a).
- **Which attorney leads which area is still unknown** (Open Question 2).
  Without it these cards are name-and-photo only, which wastes the section. This
  is the largest content dependency on the page.

### Section 5. Where the firm practices (white)

Courts, not marketing geography. A credibility section that doubles as a local
signal.

> **H2:** The courts we appear in.
>
> **State.** The 13th Judicial Circuit in Hillsborough County, with matters
> throughout Tampa Bay including Pinellas, Polk, Manatee, Hernando, Sarasota,
> and Pasco.
>
> **Federal.** The Middle District of Florida, including the Tampa, Orlando, and
> Fort Myers divisions.

This is the footer state/federal split (WEBSITE-PLAN.md Section 3) stated as
prose. It lets the firm claim Orlando and Fort Myers accurately, as federal
reach, without implying offices there. Rule 4-7.12 and avoid.md item 24 both
apply: never imply an office the firm does not have.

### Section 6. What you can expect (linen)

Reuse `coreValues` and `coreStatement` from src/lib/site.ts. Discretion,
Preparation, Advocacy, Access are drafted and compliant. `CoreValues.tsx`
already exists.

### Section 7. Credentials and memberships (white)

The five-logo strip plus the membership list. **Entirely gated** on Open
Questions 7 and 8. Ship only what is confirmed; three real credentials beat five
with one unverifiable.

Memberships to list once joined (DOSSIER Section 2 item 7): Hillsborough County
Bar Association, FACDL and the local HCACDL chapter, NACDL, Brandon Riverview
Chamber, Bay Area VLP.

### Section 8. Close (navy)

Consultation CTA, phone, full address, hours, map embed.

Double duty: Rule 4-7.12 requires the firm name and a bona fide office location,
and this address block is the NAP consistency anchor for the local SEO program
in DOSSIER Section 2.

---

## 5. Compliance Rails Specific to This Page

About pages are where firms write things they would never write on a practice
page. avoid.md item 16 flags this exact pattern in a competitor: "we are
heavyweights in the courtroom," "one of Florida's leading criminal defense
lawyers." Both are unverifiable quality characterizations under Rule 4-7.13.

- **No self-laudatory copy.** State what the firm does, never how good it is at
  it.
- **No "best / expert / specialist"** absent board certification (4-7.14). If an
  attorney is certified, the page must name the certifying organization and the
  certified area.
- **No imported directory superlatives.** A "Best Criminal Lawyers in Tampa"
  badge is the directory's claim; republishing it as self-description converts
  it into the firm's claim (avoid.md item 15).
- **No outcome language** in the process section.
- **No implied offices** beyond Brandon (Rule 4-7.12; avoid.md item 24).
- **"100+ federal and state jury trials"** is the strongest lawful asset
  available and belongs on this page, but it is blocked until substantiated and
  correctly attributed, firm-wide versus a single attorney (Open Question 2b).
  It is lawful precisely because it is objectively verifiable, which cuts both
  ways.

---

## 6. SEO Spec

| Field | Value |
|---|---|
| URL | `/about` |
| Title | Our Firm \| Hines & McCarty, Criminal Defense in Brandon FL |
| Meta description | A Brandon criminal defense firm of four attorneys, each concentrating in a different area, practicing in Hillsborough County and the Middle District of Florida. |
| Schema | `AboutPage` wrapping `LegalService`, with `address`, `telephone`, `areaServed`, and `employee` linking each attorney to their `/attorneys/*` page. `sameAs` to the GBP and claimed directory profiles. |
| Links out | 4 attorney bios, 3 practice silos, `/results`, `/contact`, `/brandon-criminal-defense-lawyer` |
| Links in | Attorneys hub, footer, home About section |

The `employee` links in the schema are the part that matters. They tie the firm
entity to four named lawyer entities, which is the E-E-A-T asset DOSSIER keeps
pointing at.

Expectation setting: this page earns branded and referral traffic, not head
terms. Do not measure it against the money pages.

---

## 7. Blocked vs Buildable

**Buildable now, roughly 70 percent of the page, none of it client-dependent:**
sections 1, 2, 3, 5, 6, and 8.

**Blocked:**

| Blocked item | Waiting on |
|---|---|
| Attorney strip | Photos, and which attorney leads which area (OQ 2) |
| Pavlidis card | Her relationship to the firm (OQ 2a) |
| Trial-count line | Substantiation and attribution (OQ 2b) |
| Credential strip | Board certification status, logo permissions (OQ 7, 8) |
| Team photo | Real photography; /public/team currently holds mocks |

**Build order:** ship sections 1, 2, 3, 5, 6, 8 with the attorney strip as a
placeholder grid, then fill sections 4 and 7 when the client answers. This keeps
the page from sitting unbuilt behind questions that may take weeks.

---

## 8. Open Questions

1. **Firm history / founding story: include it or not?** Left out of the plan
   deliberately. A new firm's founding story tends to read thin, and the "four
   concentrations" thesis is a stronger opening than "founded in 20XX." If there
   is a real origin worth telling, it slots in as a short section between 2 and
   3. Needs the client.
2. **Does the client want the label "Our Firm" reflected in the URL?** Plan says
   no; see Section 1.
3. Everything in WEBSITE-PLAN.md Section 9 that this page depends on: OQ 2, 2a,
   2b, 7, and 8.
