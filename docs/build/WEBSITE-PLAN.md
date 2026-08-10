# Hines & McCarty -- Website Structure & Content Plan

The build plan for the site. It merges the client's own SEO.pdf (his practice-area
page list and keyword clusters) with the research in docs/research/ (winnability,
content gaps, tools, local authority). Website-first: paid advertising is parked
per the client's direction and lives in docs/research/paid-reality.md for when it
is revived.

Confirmed facts driving this plan:
- Physical office: Hines & McCarty, PLLC, 745 W Lumsden Rd, Brandon, FL 33511.
  Phone (813) 738-8650. Google rating 5.0 (low review count). Hours Mon-Fri 9-5.
- 4 attorneys, each focused on different areas; the firm covers everything in
  SEO.pdf. Strong word-of-mouth referral flow. Names (client meeting): David
  Hines, Lily McCarty, Maria Pavlidis, Colton Trina. Pavlidis operates her own
  firm (pavlidislawfirm.com), so her relationship to Hines & McCarty must be
  confirmed and labeled before her page ships (Open Question 2a).
- Firm-wide trial credential: "100+ federal and state jury trials." Objectively
  verifiable, so it is the strongest lawful headline available. Must be
  substantiated (firm-wide vs single attorney) before it goes on the home page.
- Named competitors (confirmed by SEO.pdf): Mark P. Rankin; Brunvand, Wise &
  Farinella; Whittel & Melton.

---

## 1. The Operating Principle: Capability vs Winnability

These are two different questions and the site is planned on both.

**Capability (what we BUILD):** every practice area the firm handles gets a
deep, authoritative, well-credentialed page. No exceptions for "hard" keywords.
Reasons: (1) referred clients search the firm or attorney by name, land on the
practice page, and convert or bounce based on how serious it looks; (2) it
presents the true breadth of a 4-attorney firm; (3) you cannot rank later on a
page you never built. This is the storefront.

**Winnability (how we SEQUENCE and what we EXPECT):** the research grades how
fast each keyword realistically ranks. That grade does NOT decide whether a page
exists. It decides three things only:
- Expectation: do not promise a #1 for "sex crimes attorney Tampa" in 90 days
  (that is a multi-year head-term fight behind a directory wall, per
  competitors.md). The page still earns branded, long-tail, and local traffic
  from day one.
- Reinforcement order: the NOW and 6-12mo pages get blog and guide support and
  internal links FIRST, so the SEO engine shows results where it can fastest.
- Paid (parked): where paid would carry vs where organic must. Not in scope now.

**Bottom line:** build the whole arsenal; reinforce it in winnability order.

The firm's real edge, which most Tampa competitors lack: 4 named, credentialed
attorneys with genuine subject depth. That is an E-E-A-T asset (bylined pages,
real bios mapped to real practice areas). Lean into it everywhere.

---

## 2. Three Content Layers

| Layer | Purpose | Source | Ranking role |
|-------|---------|--------|--------------|
| 1. Practice-area pages ("money pages") | Present capability, convert referrals and branded/mid-funnel search | SEO.pdf page list | The storefront. Head terms rank slowly; pages convert immediately. |
| 2. Guides, process explainers, tools, sentencing pages | Win the informational keywords that ARE winnable now, earn links, build topical authority | docs/research/content-gaps.md + tools-and-hooks.md | The engine. Ranks fast, internally links UP to money pages, lifts them over time. |
| 3. Blog / news / case results | Freshness, long-tail capture, reputation, E-E-A-T | Ongoing cadence (Section 6) | The flywheel. Compounds Layers 1 and 2. |

The whole strategy in one line: Layer 2 and 3 win the traffic that is winnable
now and pass that authority up to the Layer 1 pages that eventually win the
harder terms.

---

## 3. Site Architecture (sitemap)

### Tier 0 -- Core
- `/` Home
- `/attorneys` Attorney hub, doubles as the About overview -> 4 individual bio
  pages, each mapped to the practice areas that attorney leads and each carrying
  its own keyword set in the bio copy (E-E-A-T anchor; see Open Questions)
  - `/attorneys/lily-mccarty`, `/attorneys/david-hines`,
    `/attorneys/maria-pavlidis`, `/attorneys/colton-trina`
- `/about` Our Firm (values, Brandon roots, why a 4-attorney bench matters).
  Still built for E-E-A-T and internal linking, but NOT a top-level nav item;
  linked from the Attorneys hub and the footer. Full section-by-section plan,
  draft copy, and blocked-vs-buildable split: docs/build/ABOUT-PAGE-PLAN.md
- `/results` Case Results (compliance-gated: real, consented, disclaimered)
  - County result pages (`/results/hillsborough-county`, etc.) spin out only once
    a county has 5+ real published results. Below that it stays one filterable
    overview page. Two results on a page reads as weakness, not proof.
- `/contact` Contact + intake form (server-validated)
- `/reviews` (or embedded testimonials block, compliance-reviewed)

### Tier 1 -- Practice-Area Hubs

Full section plan for the "Cases We Defend" hub, the three silo hubs, and the
26 charge pages beneath them, including the charge-page template, draft copy,
and the winnability-ordered build sequence: docs/build/CASES-WE-DEFEND-PLAN.md

- `/criminal-defense` State criminal defense hub
- `/federal-criminal-defense` Federal hub
- `/white-collar-defense` White-collar & fraud hub (cross-linked with federal)
- `/corporate-law` Business/corporate hub -- SCOPE TBD, see Open Questions

### Tier 2 -- State Practice Sub-Pages (all 10 from SEO.pdf)
Under `/criminal-defense/`:
`sexual-battery-defense`, `drug-trafficking-defense`, `drug-possession-defense`,
`gun-crimes-defense`, `sex-crimes-defense`, `battery-defense`,
`domestic-violence-defense`, `grand-theft-defense`, `homicide-defense`,
`dui-defense`

### Tier 2 -- Federal Practice Sub-Pages (all 10 from SEO.pdf)
Under `/federal-criminal-defense/`:
`drug-trafficking`, `white-collar-corporate-fraud`, `healthcare-fraud`,
`wire-mail-fraud`, `conspiracy-charges`, `weapons-gun-offenses`,
`csam-defense`, `money-laundering`, `computer-internet-crimes`,
`target-letter-defense`

### Tier 2 -- White-Collar / Fraud Sub-Pages (from SEO.pdf checklist)
Under `/white-collar-defense/` (some overlap with federal; cross-link, do not
duplicate content):
`corporate-fraud`, `healthcare-fraud`, `mail-fraud`, `bank-fraud`,
`embezzlement`, `securities-fraud`, `computer-crime`, `wire-fraud`,
`tax-evasion`

### Tier 2 -- Sentencing (client's "add sentencing pages by felony level" + research)
Under `/sentencing/`:
- `florida-criminal-punishment-code` (HUB + interactive CALCULATOR, tool #1)
- `level-1` ... `level-10` (10 offense-level spoke pages)
- `third-degree-felony`, `second-degree-felony`, `first-degree-felony`,
  `life-felony`, `capital-felony`

### Tier 3 -- Guides / Legal Resources (research winnable informational content)
Under `/resources/guides/` (nested so the Resources nav item has a real hub
behind it; tools live beside them at `/resources/tools/`):
- `middle-district-florida-federal-court` (federal district hub)
- `federal-criminal-process-timeline` (+ TIMELINE, tool #3)
- `federal-target-letter`
- `federal-grand-jury-subpoena`
- `federal-detention-and-bond`
- `fbi-hsi-agent-contact-your-rights`
- `federal-device-seizure-rule-41g`
- `after-an-arrest` (the Hillsborough first-24-hours guide, client's name for it;
  absorbs the state bond walkthrough and links to the bond estimator)
- `pretrial-intervention-13th-circuit`
- `violation-of-probation-hillsborough`
- `professional-license-consequences`
- `immigration-consequences` (English; Spanish version conditional on capability)
- `sealing-and-expungement` (deprioritized, build last)

### Tier 3 -- Office Pages and Market Pages

SUPERSEDED by CASES-WE-DEFEND-PLAN.md Section 8, which splits this into two page
types with different rules.

**Office pages, one per office.** The firm has two:
- `/brandon-criminal-defense-lawyer` (home base, strongest)
- `/tampa-criminal-defense-lawyer` (second office; blocked on the Tampa address)

**Market pages, permitted only on a verified differentiator.** A page for a
market where the firm has no office is allowed only if it names at least one of
a different arresting agency, a different courthouse or annex, or a different
judicial circuit than every sibling market page, verified against an allowlisted
official source (done-criterion C14). Candidates carried forward from
DOSSIER.md Section 2 item 4, all unverified: Plant City, Wesley Chapel, and
Riverview, the last of which is expected to fail. Markets that fail are served
by Layer 2 courthouse guides under `/resources/guides/` instead.

Absolute, regardless of what any market page qualifies for: no charge page is
duplicated per city, no practice-by-location matrix is created, and no page
implies an office the firm does not have (Rule 4-7.12; avoid.md items 33, 46,
and 47).

St. Petersburg and Clearwater remain out regardless: saturated own-markets
(keywords.md Section 5).

### Tier 3 -- Publishing
- `/resources` hub -> `/resources/tools`, `/resources/guides`, `/resources/articles`
- `/resources/articles` legal explainers + firm news (the blog)
- `/results` case results (also linked in Tier 0)

---

### Footer: Areas We Serve

The client list spans 7 counties, 13 cities, and reaches Orlando and Ft. Myers.
Orlando is the 9th Circuit and Ft. Myers the 20th, so listing them beside Brandon
as state-practice markets dilutes local relevance. Both cities ARE in the Middle
District of Florida (Orlando Division, Fort Myers Division), so they are
legitimate as FEDERAL reach. Split the footer accordingly:

**State practice (Tampa Bay):**
- Counties: Hillsborough, Pinellas, Polk, Manatee, Hernando, Sarasota, Pasco
- Cities: Tampa, Brandon, Riverview, Temple Terrace, Carrollwood, St. Petersburg,
  Clearwater, Bradenton, Dade City, Plant City, Lakeland
  (note: "Carrolwood" in the meeting notes is Carrollwood)

**Federal practice:**
- "Middle District of Florida, including the Tampa, Orlando, and Fort Myers
  divisions." This covers Orlando and Ft. Myers accurately, as a credential
  rather than a reach.

**Hard rule:** these are plain text or links to the five built location pages
only. Do NOT generate a page per city. Twenty near-identical city pages is a
doorway-page pattern under Google's spam policies and would put the whole
domain at risk for markets the firm cannot win anyway.

---

**Navigation (confirmed, client meeting):**

`Attorneys | Cases We Defend | Results | Resources | Contact Us`

- Wordmark links home; no separate Home item.
- **Attorneys** -> hub (also serves as About overview) + 4 bio pages.
- **Cases We Defend** -> the Tier 1/2 practice silos. Plain-language label; the
  keywords live in the meta title ("Criminal Defense Practice Areas | State &
  Federal"), not the nav. Needs a mega-menu or a real hub landing page, because
  30+ money pages sit under this one item.
- **Results** -> overview, plus county pages once each clears 5 real results.
- **Resources** -> Tools & Guides, Articles.
- **Contact Us** -> rendered as a button, not a text link. Label in-page CTAs
  "Request a consultation" per SITE.md.

Location pages linked in the footer and from the Brandon-focused Home and
Contact pages.

---

## 4. Money-Page Template (every Tier 1/2 practice page)

So capability comes through and pages convert regardless of ranking timeline:
- H1 with the charge; unique meta title + description with target keyword
- What the charge is, in plain language; the Florida or federal statute cited
- Penalties / exposure, tied to the sentencing pages (internal link to the
  scoresheet where relevant)
- The defense: how the firm approaches it, what is at stake, the process
- Which attorney(s) lead this area, with a photo and a link to the bio
  (E-E-A-T, and it signals a real bench, not a solo)
- FAQ block (FAQPage schema for entity signaling, not promised rich results)
- Related guides (internal links to Layer 2)
- Clear CTA: call (813) 738-8650 / request a consultation
- Attorney byline + last-reviewed date on every page

**Compliance rails on every page** (Fla. Bar Rule 4-7, see avoid.md Section 2):
- No "expert / specialist / best" language absent board certification (4-7.14).
  A "Board Certified" badge additionally requires naming the certifying
  organization and the certified area (4-7.14(a)(4)).
- No outcome promises or results guarantees; process, rights, and options only
  (4-7.13). This applies to process/step copy too: describe representation
  ("we represent you at every court appearance and fight the charge"), never the
  result ("to get your case dismissed").
- Case results, if shown, carry a proximate results-may-vary disclaimer
- Required content present: firm name + Brandon office location (4-7.12)
- Sensitive pages (sex offenses, CSAM): lead with process, rights, discretion;
  calm tone, never fear-marketing

---

## 5. Tools (from docs/research/tools-and-hooks.md, ranked)

Reordered against the client's tool list from the meeting. Two tools are new
(bond estimator, seal & expunge checker) and both earn their place.

| # | Tool | Lives in | Build | Effort |
|---|------|----------|-------|--------|
| 1 | Sentencing Calculator (FL CPC scoresheet + charge lookup as its input layer) | `/sentencing/florida-criminal-punishment-code` | First | M |
| 2 | Bond & Bail Estimator | `/resources/tools/bond-estimator` | Second | S |
| 3 | Federal Case Timeline (MDFL Tampa Division, visual) | `/resources/guides/federal-criminal-process-timeline` | Third | S-M |
| 4 | Seal & Expunge Checker | `/resources/tools/seal-expunge-eligibility` | Fourth | S-M |

Guides (not interactive tools, but the client grouped them here):
- **After an Arrest** -- this is the former "Hillsborough First-24-Hours
  Checklist" under the client's better name. Absorbs the state bond walkthrough.
  Lives at `/resources/guides/after-an-arrest`.
- **Federal Case Timeline** -- tool 3 above.

Why the order:
- **Calculator first** because it is the input layer for 15+ sentencing pages.
  Nothing else unlocks as much of the site.
- **Bond estimator second.** New, and a good call. Hillsborough publishes a
  standard bond schedule, so this is a factual lookup rather than a prediction:
  low accuracy risk, fast to build, strong local long-tail, and it pairs
  naturally with the After an Arrest guide.
- **Seal & Expunge fourth, but no longer "build last."** The earlier plan
  deprioritized sealing/expungement entirely. Partially reversed: FS 943.0585 /
  943.059 eligibility is a clean rules-based flowchart and one of the
  highest-volume legal searches in Florida. The reason it stays fourth is lead
  quality, not feasibility. It draws low-value inquiries that compete for intake
  attention with federal and serious-felony matters.

**Do NOT build:** a federal sentencing guidelines range estimator (saturated,
including the free official USSC app; highest effort, lowest payoff, highest
accuracy risk -- tools-and-hooks.md Section 3; avoid.md item 30).

**Tool compliance rails (all tools):** anonymous inputs, no lead-gating of
results, a no-legal-advice / no-outcome-guarantee disclaimer adjacent to output,
current statute revision stated on-page (calculator: Oct 23 2025 Rule 3.992).
Bond estimator specifically: frame output as "the standard Hillsborough bond
schedule amount for this charge," never as a prediction of the bond a given
defendant will receive. Seal & expunge checker: output is "you appear to meet /
not meet the statutory criteria," never "you are eligible."
Never market the calculator "first in Florida" (competitors already run one; it
would be false -- avoid.md item 14). Consider voluntary Bar pre-clearance for the
calculator (Open Question).

---

## 6. Publishing Cadence (the goal/month)

Two modes: a front-loaded BUILD for the pages that should exist at or near
launch, then an ONGOING cadence that keeps the site fresh and compounding.

### Build phases

| Phase | Window | What ships | Approx pages |
|-------|--------|------------|--------------|
| 1. Storefront | Launch, weeks 1-8 | Core (Tier 0), all 4 attorney bios, 3-4 practice hubs, all 20 state+federal money pages, 5 location pages, GBP live, review program started | ~36 |
| 2. Anchor engine | Months 2-4 | Sentencing hub + calculator + 10 level pages + degree pages; After an Arrest guide + bond estimator; federal district hub + timeline | ~18 pages + tools 1, 2 & 3 |
| 3. Guides + white-collar depth | Months 4-8 | Remaining federal pre-indictment guides, state process guides, collateral-consequences guides, white-collar sub-pages | ~18 pages |
| 4. Long tail | Ongoing | Seal & expunge page + checker (tool 4), Spanish (if capable), overflow | as needed + tool 4 |

Note on Phase 1: money pages ship as a batch, not "per month," because the
storefront should be whole at launch. It is fine to launch hubs + top-priority
pages first and fill the rest across weeks 1-8, but do not leave a defended
practice area with no page.

### Ongoing monthly cadence (steady state, after Phase 1)

| Output | Goal / month | Notes |
|--------|-------------|-------|
| Guides / process pages (Layer 2) | 3-4 during Phases 2-3, then 1-2 | Works through the ~15 research guides, then maintenance |
| Blog posts (Layer 3) | 4 (about 1/week) | Long-tail legal explainers + firm news; each links up to a money page |
| Case results | 1-2 | Only real, client-consented, compliance-reviewed, disclaimered |
| Google reviews | 4-8 | The velocity target (Section 7); not content but same cadence |
| GBP posts | ~4 (weekly) | Legal tips / updates, per SEO.pdf checklist |
| Page refreshes | 2-3 | Update last-reviewed dates, statute changes; currency is the edge competitors lose (avoid.md item 38) |

Blog topic well (pulls from winnable long-tail in keywords.md): "what happens
after a federal target letter," "first appearance in Hillsborough County what to
expect," "what is the minimum sentence for a third degree felony in Florida,"
"can a drug trafficking charge be reduced," "violation of probation what happens
at a VOP hearing," "who qualifies for pretrial intervention in Hillsborough."
Every blog post links up to its money page and its guide.

---

## 7. Local SEO & Reputation (runs in parallel with the build)

From docs/research/local-authority.md and the SEO.pdf checklist:
- GBP: primary category "Criminal justice attorney," Brandon NAP exactly matching
  the site, team + office photos, weekly posts. Nobody owns Brandon -- this is
  the single biggest structural opening (competitors.md).
- Review velocity target: 50-100 Google reviews at 4.9+ within 12 months, via a
  4-8/month ask-every-closed-case program. No incentives (Rules 4-7.13(b)(9),
  4-7.17(b)). Current count is low, so this starts week 1.
- Directory profiles, free tier, SERP-visible ones first: Justia, Super Lawyers,
  LawInfo/FindLaw, plus the SEO.pdf list (Martindale, Avvo, Nolo, Lawyers.com,
  HG.org, Best Lawyers) for NAP consistency. Do not pay for premium placement on
  Avvo/Martindale/Lawyers.com/Expertise (plumbing, not SERP movers -- avoid.md
  Section 3). NAP consistent everywhere.
- Citations plumbing: Apple Maps, Bing Places, Yelp, BBB, data aggregators.
- Memberships: Hillsborough County Bar Association, FACDL + local chapter, NACDL,
  Brandon Riverview Chamber, Bay Area VLP.

---

## 8. How It All Ties Together (the one-paragraph version)

Build the full storefront so every one of the firm's capabilities has a serious,
attorney-bylined page that converts the referral and branded traffic the firm
already earns by word of mouth. Underneath it, build the engine: the sentencing
tools, the Middle District federal guides, the Hillsborough process explainers,
the things no competitor covers well, which rank fast because they are winnable
now and which internally link up to the money pages. Own Brandon on the map with
a real GBP and a steady review stream that no local competitor is building. Keep
it all fresh with a weekly blog and monthly case results. The money pages present
the capability; the guides, tools, reviews, and blog are what actually move them
up the rankings over the year, including on the hard terms the firm would
otherwise wait years to touch.

---

## 9. Open Questions (need the client before or during build)

1. **Corporate / business law scope.** The firm is described as criminal + corporate,
   but SEO.pdf is entirely criminal. Does the site include a corporate/business-law
   section (its own hub + sub-pages), a single overview page, or nothing for now?
   This changes Tier 1.
2. **The 4 attorneys:** names now confirmed (Hines, McCarty, Pavlidis, Trina).
   Still needed: photos, bios, bar numbers, and which practice areas each leads.
   Required for the attorney pages and for mapping the "led by" block on every
   money page. The firm's biggest E-E-A-T advantage, so worth getting right.
2a. **Maria Pavlidis's relationship to the firm.** She operates her own firm
   (pavlidislawfirm.com). Listing a lawyer from a separate firm on the Attorneys
   page implies partnership, which is a firm-name and misrepresentation problem.
   Is she of counsel, co-counsel on specific matters, or an actual firm attorney?
   Her page needs an accurate label ("Of Counsel") and probably a line stating
   the separate practice. BLOCKS her bio page.
2b. **"100+ federal and state jury trials":** firm-wide total or one attorney's?
   The claim is lawful because it is objectively verifiable, which also means it
   has to be substantiated and attributed correctly. BLOCKS the home hero.
2c. **Is the phone actually answered 24/7?** The proposed ribbon says "Free
   Consultation, Available 24/7" but SITE.md has hours as Mon-Fri 9-5. If calls
   roll to voicemail after 5, that statement is false under Rule 4-7.13 and it
   would sit on every page of the site. Either confirm an answering service or
   change the ribbon to "Free Consultation" alone.
3. **Case results:** are there real, publishable results (with client consent and
   a compliance pass) to build the `/results` page and the per-page "led by" proof?
4. **Spanish capability:** does anyone at the firm speak Spanish? Gates the Spanish
   immigration/first-appearance pages. Advertising it without capability is a Rule
   4-7.13 problem (keywords.md Section 6).
5. **Blog production:** who writes the 4 posts/month, attorneys or agency with
   attorney review? This sets the realistic cadence; the plan assumes agency drafts
   with attorney sign-off for E-E-A-T bylines.
6. **Calculator pre-clearance:** voluntarily file the calculator page under Rule
   4-7.19(d) or call the Bar Ethics Hotline, since no calculator-specific Florida
   opinion exists (tools-and-hooks.md)?
7. **Board certification / former prosecutor / PD status** for any attorney: gates
   what credential language is lawful under Rule 4-7.14. Now urgent: the proposed
   home-page credential strip includes a "Board Certified" logo. Under
   4-7.14(a)(4) that mark is only usable if an attorney is actually certified by
   The Florida Bar or an ABA-accredited body, AND the page names the certifying
   organization and the certified area. A bare badge is not compliant. If nobody
   is certified, the logo comes out.
8. **Credential logo permissions.** The strip is HCBA, NACDL, DUIDLA, FJA, plus
   Board Certified. Membership does not by itself grant trademark usage rights;
   each org's mark needs permission. Also worth raising with the client: FJA
   (Florida Justice Association) is primarily a plaintiff-side trial org. FACDL
   (Florida Association of Criminal Defense Lawyers) is the on-point credential
   for this firm and is missing from the list. Are they members?
9. **White background throughout?** The meeting notes say "white background
   throughout, dark blue header." SITE.md's committed visual direction is the
   opposite: a Prussian Blue canvas with linen panels, referencing sheppard.com.
   Both are viable, but they are different sites and Home is already built the
   dark way. Confirm whether this came from the client before rebuilding. BLOCKS
   any further Home design work.
