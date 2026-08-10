# W5: Tools and Link Hooks -- Interactive Assets for Hines & McCarty

Workstream W5 of the Hines & McCarty market dossier. Evaluates six candidate
interactive tools/hooks for the site: demand evidence, best existing US
precedent with assessment, Florida Bar compliance considerations specific to
each, and a build-effort vs payoff verdict. Ends with a 1-6 ranking and the
consolidated compliance checklist every tool must satisfy.

Prepared: 2026-07-22, pass 2 (supersedes the pass-1 version of this file;
adds the L&L tool-suite precedent, the FDLE statute-table data backbone, the
Jan 2026 corrected Rule 3.992 scoresheet, the Wayback dating of the Bark
calculator, Ethics Op. 00-4, and a fuller 15-item compliance checklist).
Inputs: STATE.md, keywords.md (Section 4 sentencing cluster and federal
grades), competitors.md context, plus this pass's demand/precedent sweep and
a dedicated Florida Bar compliance pass reading primary sources.

---

## 1. Method and Limitations Note

- **SERP evidence:** search tooling approximates a US, non-Tampa-geolocated
  results page. Every "absence" claim means absence within observed results
  this session, not a guarantee across all geolocations. Local pack and live
  ad units remain unobservable (standing caveat carried from STATE.md).
- **Volume:** no absolute search volumes or People-Also-Ask data were
  extractable. All demand evidence is proxy-based: SERP density across query
  variants, count of competing firm pages, and competitor content investment.
  Every volume claim carries an ESTIMATE label with its basis.
- **Backlinks:** no backlink index (Ahrefs/Majestic/Semrush) was available.
  Link-earning evidence is limited to citation-in-search: one verified .edu
  library-guide link to a sentencing calculator (FSU College of Law linking
  sentencing.us). Link counts for barklaw.com, communitylawfirm.com,
  nealdavislaw.com, and landllawgroup.com were NOT observable (recorded gap;
  human Ahrefs/Semrush pull recommended before the build decision).
- **Compliance:** sourced from Florida Bar primary materials read this
  session: the Handbook on Lawyer Advertising and Solicitation (approved by
  the Standing Committee on Advertising 12-10-25, reproducing Rules 4-7.11
  through 4-7.20 verbatim, current through the Aug 21, 2023 amendments per
  SC22-1294), Ethics Op. 24-1 (Jan 19, 2024, generative AI, full PDF read),
  Advertising Op. A-00-1 (rev. Jan 29, 2016, real-time internet
  communication, full text read), and Ethics Op. 00-4 (reconsidered June 28,
  2024, online legal services, read in the Bar's Technology Informational
  Packet updated 11-14-25). Live floridabar.org rule pages returned 404 to
  direct fetches, so rule text was verified from the Bar's own Handbook
  reproduction; residual risk of a post-Dec-2025 amendment is unobserved and
  a human check of the live rules page before launch closes it.
- **Labels:** claims are marked verified (directly observed/fetched this
  session), reported (stated by a fetched or ranked page, not independently
  confirmed), or inferred (synthesis). Effort grades (S/M/L) are inferred,
  calibrated to this project: a Next.js 16 App Router site built by an
  agency, where S is roughly one component plus a page, M is a
  multi-component feature with data modeling, and L is a sustained
  engineering effort with ongoing maintenance obligations.

**Stale-finding correction to W2 (verified, already noted inline in
keywords.md Section 4):** W2's "verified absence of any interactive FL
scoresheet calculator" is superseded. barklaw.com (Law Offices of Matthews
R. Bark, Altamonte Springs) hosts a genuinely functional "2026 Florida
Sentencing Calculator" that ranked ~#6 this session for the exact query
"florida criminal punishment code scoresheet calculator," and Aaron Delgado
& Associates (Daytona Beach) claims a second one (interactivity unconfirmed,
JS-rendered widget did not appear in fetched HTML). Neither is Tampa Bay.
The Wayback Machine has ZERO archived snapshots of the Bark page, consistent
with a very recent launch (est. late 2025/2026; basis: "2026" title, empty
archive, absence from earlier observed SERPs this session cycle). The niche
is being claimed right now, which raises urgency rather than closing the
door. Never market anything as "first in Florida" (false, Rule 4-7.13
exposure). Sources: https://www.barklaw.com/florida-sentencing-calculator/ |
https://archive.org/wayback/available?url=barklaw.com/florida-sentencing-calculator/ |
https://www.communitylawfirm.com/blog/florida-felony-sentencing-calculator

**Best national operating model (verified, fetched):** L&L Law Group PLLC
(Frisco, TX) runs four client-side interactive criminal defense tools (DWI
bond calculator, Texas sentencing range lookup, character letter generator,
expunction eligibility checker) under one /tools/ hub, all stated to be
entirely client-side JavaScript with no logging and no email capture, with
disclaimers framing outputs as "starting points for attorney consultation."
The firm explicitly states the tools "surface our analytical framework
publicly, which is part of how we earn referrals from other practitioners"
(that referral claim is the firm's own, reported). This is the model to copy
for Hillsborough: calculator + lookup + checklist under one /tools/ hub.
Source: https://landllawgroup.com/tools/

---

## 2. Candidate Evaluations

### 2.1 Candidate 1: Florida CPC Scoresheet Calculator (interactive)

**What it is:** points in, minimum-months out. Implements the Criminal
Punishment Code scoresheet math of Fla. Stat. 921.0024 and Fla. R. Crim. P.
3.992: total sentence points from primary offense severity level (1-10),
additional offenses, prior record, victim injury, firearm, supervision
status, and enhancements; output is the lowest permissible sentence via the
(total points minus 28) x 0.75 formula and the 44-point prison threshold.

**Demand evidence (verified for density, volume ESTIMATE):**
- 10+ distinct FL firms across 4+ metros maintain dedicated
  scoresheet/calculator-adjacent content: Hornsby, Orlando Defense, Frost
  Law, Bryce Fetter, Mack Law, Jackson Defense, Defend Ocala, Daytona
  Defense, Law Firm Ocala ("Sentencing Calculator Checklist"), Moses &
  Rooth. Sustained multi-metro firm investment is the strongest available
  volume proxy. Aggregate volume ESTIMATE moderate-to-high (basis:
  multi-metro firm investment; absolute numbers not observed).
- Official PDFs rank for calculator-intent queries (FDLE blank scoresheet,
  AG preparation manual, flsenate.gov statute text). When blank PDFs rank
  for a "calculator" query, tool intent is unserved (inferred).
- W2 grades: level 1-10 spoke pages closest to NOW, hub 6-12mo.

**Best precedent (verified, fetched and assessed):**
https://www.barklaw.com/florida-sentencing-calculator/ -- real interactive
tool, no lead-capture wall (results shown without contact info). Inputs:
primary charge/severity level 1-10, priors, additional charges, victim
injury, firearm, supervision status, enhancements. Correctly implements the
(total minus 28) x 0.75 formula and the 44-point prison threshold. Serves
Seminole/Orange County, not Tampa Bay. Its compliant disclaimer posture
("general estimate, not legal advice," lists exclusions: mandatory
minimums, habitualization, departures) is the model to replicate. Verified
weakness: it does not reference the Oct 23, 2025 Rule 3.992 revision.
Secondary precedent: the Delgado calculator page (Daytona) describes
time-served and gain-time adjustments, but interactivity is unconfirmed
(reported). Link-earning precedent for the asset class: FSU College of
Law's Federal Sentencing research guide recommends sentencing.us by name,
direct verified evidence that a free, no-lead-capture sentencing calculator
earns .edu library-guide backlinks.

**Freshness moat (verified):** Rule 3.992 was amended effective October 23,
2025 (In re Amendments to Fla. R. Crim. P. 3.992, No. SC2025-1036), and The
Florida Bar re-uploaded a CORRECTED scoresheet PDF in January 2026. Ongoing
revisions make freshness a durable moat: a calculator that tracks
corrections and says so on-page outruns static competitors and the Bark
tool, which ignores the revision. Sources:
https://www-media.floridabar.org/uploads/2025/10/Rule-3.992-Scoresheet-Effective-October-23-2025.pdf |
https://www-media.floridabar.org/uploads/2026/01/Rule-3.992-Scoresheet-Effective-October-23-2025-Corrected-1.pdf |
https://www.floridabar.org/the-florida-bar-news/proposed-amendments-to-rule-3-992-criminal-punishment-code-scoresheet/ |
https://www.fdc.myflorida.com/content/download/41292/file/Scoresheet%20Preparation%20Manual%202025.pdf

**Data backbone (verified):** FDLE's Arrest/Clerk Statute Table
(web.fdle.state.fl.us/statutes) is an official, downloadable (Excel/PDF)
table of all Florida criminal offenses by statute number, maintained for
law enforcement and clerks, with statutory history and a "Changes Only"
update table. It can power the offense dropdown. Per-offense degree/level
columns were not itemized on its About page; one file download confirms.

**Compliance considerations specific to this tool (authorities in Section
4):** frame output as what the statute computes ("estimated lowest
permissible sentence the formula produces from these inputs"), never what
the firm will achieve; use may/could/estimated modifiers (Rule 4-7.13(b)(1)
plus comment safe harbor). An outdated formula is a materially inaccurate
statement (4-7.13(a)(1)), so date-stamp the scoresheet revision implemented
and keep it synced. Disclose unmodeled factors (mandatory minimums,
habitualization, departures, judicial discretion) to avoid misleading
omission (4-7.13(a)(2)). Anonymous inputs, no lead gate on results,
no-relationship warning before fact entry (Rule 4-1.18 comment via Op.
24-1; Bartholomew v. Bartholomew, 611 So. 2d 85 (Fla. 2d DCA 1992):
relationship depends on the client's subjective reasonable belief).

**Effort vs payoff (inferred): Effort M. Payoff HIGH. Verdict: BUILD
FIRST.** Effort basis: a client-side React component (legitimately needs
"use client") plus a structured data file built from the FDLE table and the
corrected Jan 2026 scoresheet; no backend, no persistence. Encoding and
verifying the offense table faithfully is the bulk of the effort, not the
code. Payoff basis: one verified interactive competitor statewide (very
new, Central FL), none in Tampa Bay, verified institutional-link precedent
for the asset class, and it is the hub of the W2-graded sentencing
hub-and-spoke (level 1-10 spoke pages near NOW). Urgency: the Wayback
evidence says this niche is being claimed right now.

### 2.2 Candidate 2: Federal Sentencing Guidelines Range Estimator

**What it is:** a USSG offense-level/criminal-history calculator producing
a guideline range from the Sentencing Table.

**Demand evidence (verified):** demand exists but is fully served at the
national level. Incumbents observed in a single SERP: sentencing.us (free,
Nov 1, 2024 Guidelines Manual, run by Josh Goldfoot as a personal project,
fetched and confirmed interactive), the USSC's own official Guidelines App,
guidelines.whitecollaradvice.com, sentencingpro.com, courtcalculator.com,
sentencingguidelinescalculator.com, and Spodek Law Group's calculator suite.

**Best precedent (verified):** sentencing.us plus the official USSC app.
When the regulator ships a free official calculator and a free independent
one already holds the .edu links (FSU guide), a new entrant has no
differentiation path on the math itself.

**Compliance considerations:** same rails as Candidate 1 with a heavier
material-accuracy burden (4-7.13(a)): the USSG's relevant-conduct,
enhancement, and departure machinery is far harder to model faithfully, so
the misleading-omission risk of a simplified version is higher (inferred).

**Effort vs payoff (inferred): Effort L. Payoff LOW. Verdict: DO NOT
BUILD** as a general tool. The federal play for H&M remains the W2-verified
MDFL process gaps (federal bond/detention hearing Tampa Division,
indictment timeline), not a calculator. Feeds W7 avoid.md.

### 2.3 Candidate 3: Charge-Lookup Explainer (statute number to plain English)

**What it is:** user enters the statute number from an arrest report or
searches a charge name; output is plain-English explanation, degree,
offense severity level, CPC points, and statutory exposure, linking into
the sentencing hub.

**Demand evidence (verified for the gap, with an intent caveat):** no
interactive plain-English charge lookup by any US law firm was observed
anywhere (verified within observed SERPs across two query framings;
caveat: absence within observed results only). Key intent nuance: the
literal phrase "charge lookup" pulls arrest-RECORDS intent
(staterecords.org, floridacourtrecords.us, Checkr), the wrong audience.
Real demand arrives as per-statute queries ("florida statute 893.13"),
where rankers are flsenate.gov raw text (multiple year-versions), FindLaw
codes, LegalClarity, and out-of-market firm pages (Flaherty Defense Destin,
RP Foley West Palm, Ansara Ft. Lauderdale). No Tampa firm observed ranking.
Demand is therefore captured page-by-page, not by the tool itself
(inferred), which makes this the weakest standalone demand case among the
open candidates.

**Best precedent (verified):** closest precedents are L&L's Texas
Sentencing Range Lookup (interactive, verified) and Ansara Law's prose
statute index. The niche as an INTERACTIVE asset is open. Data backbone:
the FDLE Arrest/Clerk Statute Table (above). Bark's calculator already
overlaps via its searchable-charge input, so a standalone version would
duplicate Candidate 1's input layer.

**Compliance considerations:** outputs must be explanations of law and
statutory ranges, never charge-specific advice, with the standard
disclaimers (4-7.13; 4-1.18 comment via Op. 24-1). Because it maps a user's
actual charge to exposure, no-prediction framing matters as much as on the
calculator. Florida-law-only scope statement required (Op. 00-4).

**Effort vs payoff (inferred): Effort S-M as Candidate 1's input layer, M
standalone. Payoff MEDIUM merged, LOW standalone. Verdict: MERGE into
Candidate 1**, do not build separately. Build shape: interactive
statute/degree/level lookup as the calculator's front door (hub) +
individual statute pages as the query-capturing spokes. A standalone lookup
tool would compete with its own hub and chase the wrong-intent head term.

### 2.4 Candidate 4: "First 24 Hours After a Hillsborough Arrest" Interactive Checklist

**What it is:** a time-sequenced interactive/printable checklist keyed to
Hillsborough logistics, aimed at the FAMILY of the arrestee as much as the
defendant: find the inmate, do not discuss facts on recorded jail lines,
first-appearance logistics, bond options, what a lawyer changes at first
appearance, and the filing-decision window.

**Demand evidence (verified):** demand is verified and the format niche is
open. The prose SERP is contested by the strongest local content players
(Sammis with 2+ URLs, Brancato, Metcalf Falls, DJ Fernandez, an HCSO PDF),
which is itself the demand proof. Hillsborough specifics confirmed in SERP
content this session (verify before publishing, per STATE.md Q14): booking
at 1201 Orient Road jail; first appearance within 24 hours in Division "O"
Video Court via closed-circuit from the jail; the first 21 days are when
the SAO makes its felony/misdemeanor filing decision; represented
defendants tend to get better bond outcomes at first appearance. W2 graded
first-appearance as the county's best state-felony conversion query.

**Best precedent (verified for absence):** a dedicated interactive-checklist
search returned only prose guides (Kosnett LA, Powers Charlotte, Nelson &
Marks, Cavazos TX, LawInfo's document checklist) and the L&L tool suite,
which has no checklist tool. NO interactive what-to-do-if-arrested
checklist was found from any US law firm in observed searches. The
differentiator is the format: interactive/printable, keyed to Orient Road
logistics + the 21-day window + a family-member track.

**Compliance considerations:** checklist steps are procedural information
inside the general-statements-of-law safe harbor (4-7.13 comment), but
steps must inform, not recommend action on the user's specific case; the
tool may not deliver legal advice or have advice delegated to it (Op. 24-1:
"a lawyer may not delegate to generative AI any act that could constitute
the practice of law," applied by analogy to any automated feature). Urgency
framing must stay factual (deadlines, locations, recorded-line warning),
not fear-based. If a family member enters case facts, the same 4-1.18
warning logic applies, so keep inputs anonymous.

**Effort vs payoff (inferred): Effort S. Payoff HIGH. Verdict: BUILD
SECOND, absorbing Candidate 5's state bond content.** Effort basis: a
progressive-disclosure checklist component with local data and minimal
logic; the local-fact verification is the real work. Payoff basis: targets
the county's best conversion query at the exact hiring moment, in a format
with zero observed incumbents, and lands the Brandon/Hillsborough local
strategy from W1.

### 2.5 Candidate 5: Hillsborough Bond Process Walkthrough

**What it is:** step-by-step walkthrough of bail in Hillsborough: bond set
at first appearance, cash vs surety cost math, ROR/unsecured/pretrial
supervision alternatives, Rule 3.131(d)(2) bond-modification motions,
release timing.

**Demand evidence (verified, two distinct SERPs):** the consumer "how to
bail someone out of Hillsborough jail" SERP is a bail-bondsman wall with
zero law firms observed (floridabailbonds.com, bailamericainc.com,
omalleybailbonds.com, mercybailbonds.com, bailbondtampa.com,
jailexchange.com); much of that intent is bail-premium commercial traffic a
firm cannot convert (inferred). The attorney-side "bond reduction / first
appearance" SERP is owned by Sammis via a dedicated /emergency-bond-hearings/
silo (3 URLs observed across two searches), plus Fernandez (2 URLs),
Brancato, Escobar, Metcalf Falls. Process facts surfaced (reported, verify
before publishing): cash bond full amount refundable minus fees vs surety
10% non-refundable with a $100 minimum in Hillsborough; Rule 3.131(d)(2)
motion; ROR and pretrial-supervision alternatives.

**Best precedent (verified for absence):** no interactive walkthrough or
calculator observed anywhere; every ranker is prose. The open wedges are
(a) an interactive walkthrough/calculator (cash-vs-surety cost math, ROR
factors, motion timeline), which nobody has, and (b) the federal variant,
where W2 verified no Tampa firm has an MDFL detention-hearing/bond page at
all (that is a content page in the federal cluster, not this tool).

**Compliance considerations:** standard rails; additionally, bond-cost
outputs must never imply the firm can guarantee release or a bond amount
(4-7.13(b)(1)), and any dollar figures from the county bond schedule need
human verification before publishing (STATE.md Q14).

**Effort vs payoff (inferred): Effort S. Payoff LOW-MEDIUM standalone.
Verdict: DO NOT BUILD STANDALONE; fold into Candidate 4** as its bond
section, including the small cash-vs-surety cost widget. Prose is CONTESTED
with Sammis the incumbent; the attorney-convertible slice (bond reduction,
first-appearance advocacy) is exactly a section of the first-24-hours
checklist. A standalone bail explainer chases bail-bond-company traffic.

### 2.6 Candidate 6: Federal Case Timeline (MDFL Tampa Division, visual/interactive)

**What it is:** a stage-by-stage visual/interactive timeline of a federal
criminal case with MDFL Tampa Division practice notes: initial appearance,
detention hearing, indictment, arraignment, discovery, motions, plea/trial,
sentencing, with the statutory clocks at each stage.

**Demand evidence (verified):** every ranking asset observed is prose or a
static PDF: Spodek (on Medium), Broden Mickelsen (Dallas), Elizabeth
Franklin-Best (SC), Neal Davis (Houston), Satawa (MI), a federal defender
PDF (vae.fd.org), and MDFL's own federal defender process page (flm.fd.org).
Anchor facts that recur and should structure the asset (reported across
sources): the 30-day complaint-to-indictment clock, the 70-day Speedy Trial
Act indictment-to-trial clock, ~10-month average prosecution length. Fits
W2's NOW-graded "how long does a federal indictment take" gap.

**Best precedent (verified, fetched):** Neal Davis's federal criminal
offense timeline guide, prose with 6 stages and embedded graphics but zero
interactivity. The interactive-format niche is open nationally, and the
MDFL/Tampa Division angle has no incumbent at all.

**Compliance considerations:** duration claims must be framed as typical
ranges from cited sources, never a prediction of the user's case timeline
(4-7.13(b)(1)); statistics must be sourced on-page; MDFL practice notes are
general statements of law/process inside the safe harbor; Florida-law/
federal-practice scope statement and named responsible attorney per Op.
00-4.

**Effort vs payoff (inferred): Effort S-M. Payoff MEDIUM-HIGH. Verdict:
BUILD THIRD.** Effort basis: a scroll/step timeline component with static
researched content; MDFL per-stage research is the real work. Payoff basis:
open format nationally, feeds the MDFL funnel and the two NOW-graded
federal gaps, very high case value per visit; ranked below the state assets
because federal volume is lower and the firm's year-one federal posture is
an open question (STATE.md Q6).

---

## 3. Final Ranking

1. **FL CPC Scoresheet Calculator with charge-lookup input layer
   (Candidates 1+3 merged). BUILD IMMEDIATELY.** Strongest verified demand
   proxy (10+ firms, 4+ metros, official PDFs mis-ranking for tool intent);
   exactly one verified interactive competitor statewide, launched so
   recently it has no Wayback snapshot, and none in Tampa Bay; verified
   .edu link precedent for the asset class; hub of the W2-graded sentencing
   hub-and-spoke. Differentiate on Oct 23, 2025 / Jan 2026-corrected Rule
   3.992 fidelity stated on-page (Bark ignores it), Hillsborough context,
   and level 1-10 spoke pages. Best-in-state positioning, never
   first-in-state. Effort M.
2. **Hillsborough First-24-Hours Interactive Checklist absorbing the bond
   walkthrough (Candidates 4+5 merged as one connected cluster). BUILD
   SECOND.** Highest conversion intent in the county (first-appearance
   query), format niche open (no interactive arrest checklist from any US
   firm observed), Orient Road + Division O + 21-day-window specifics no
   ranked page structures as a tool. Smallest build. Effort S.
3. **MDFL Tampa Division Federal Case Timeline (Candidate 6). BUILD
   THIRD.** Interactive format open nationally, MDFL angle has no
   incumbent, feeds the high-case-value federal funnel and two NOW-graded
   W2 gaps; ranked third on lower volume and the unresolved year-one
   federal posture. Effort S-M.
4. **Charge-lookup standalone (Candidate 3 unmerged): do not build
   separately.** Tool demand is real but query demand is captured
   page-by-page; merged into #1 as its input layer plus statute spoke
   pages.
5. **State bond walkthrough standalone (Candidate 5): do not build
   standalone.** Consumer SERP is bail-bondsman intent; attorney slice
   folded into #2; the federal bond variant is a content page, not a tool.
6. **Federal guidelines range estimator (Candidate 2): DO NOT BUILD.**
   Space saturated including the regulator's own free official app; highest
   effort, lowest marginal payoff, highest accuracy risk.

Sequencing note (inferred): #2 is the cheapest and fastest to ship and
could reasonably go first on the calendar; the ranking above is by expected
payoff, not build order. The Bark launch evidence argues for starting #1's
data work without delay either way.

---

## 4. Consolidated FL Bar Compliance Checklist (applies to every tool built)

Checklist synthesis is inferred as applied to calculators (no
calculator-specific FL authority exists; see gap 1), but every underlying
rule/opinion citation was individually verified this session. Authorities:
Handbook on Lawyer Advertising and Solicitation (SCA-approved 12-10-25),
https://www-media.floridabar.org/uploads/2025/12/Handbook-2025-Approved-by-SCA-12-10-25.pdf ;
Ethics Op. 24-1, https://www-media.floridabar.org/uploads/2024/01/FL-Bar-Ethics-Op-24-1.pdf ;
Advertising Op. A-00-1, https://www-media.floridabar.org/uploads/2018/04/FL-Bar-Advertising-Op-A-00-1-Rev.pdf ;
Ethics Op. 00-4 via the Technology Informational Packet (updated 11-14-25),
https://www-media.floridabar.org/uploads/2025/11/Technology-Packet-updated-11-14-25.pdf

1. **Frame output as what the statute computes, never what the firm will
   achieve.** Use modifier words the comment expressly blesses: try,
   pursue, may, seek, might, could, designed to. No guarantee language,
   nothing a prospective client "can reasonably interpret as a prediction
   or guaranty of success or specific results." [Rule 4-7.13(b)(1) +
   comment, Handbook]
2. **Keep the computation legally current** (Rule 3.992 scoresheet as
   revised, including the Jan 2026 correction); an outdated formula is a
   materially inaccurate statement. Date-stamp the version implemented.
   [Rule 4-7.13(a)(1), Handbook]
3. **Disclose what the tool omits** (enhancements, mandatory minimums,
   habitualization, departures, judicial discretion) so output is not
   misleading by omission. [Rule 4-7.13(a)(2), Handbook]
4. **Clear-and-conspicuous disclaimers on the results screen, next to the
   number:** educational/informational only, not legal advice, no
   attorney-client relationship created, every case is different, consult a
   Florida lawyer. Equal or greater prominence, close proximity,
   same-or-larger text; "may not appear in fine print, nor may it be buried
   in a footnote"; not footer-only. [Rule 4-1.18 comment via Op. 24-1;
   Rule 4-7.14(b) clarifying-information cure; presentation per Rule
   4-7.12(d), Handbook]
5. **State the tool addresses Florida law only** (or federal practice
   scope, for the timeline). [Op. 00-4]
6. **Identify the responsible attorney on the site.** [Op. 00-4]
7. **No "expert"/"specialist"/"board certified" language on tool pages**
   unless Rule 4-7.14(a)(4)-(6) is satisfied (Florida/accredited
   certification naming area and certifier, or objectively verifiable
   specialization); firm-wide claims need the not-all-lawyers disclaimer if
   applicable. Gated on STATE.md Q5. [Rule 4-7.14, Handbook]
8. **No past results near any tool unless objectively verifiable with
   client informed consent under Rule 4-1.6, "even if the information is in
   the public record"; results-bearing testimonials need the may-not-obtain
   -similar-results disclaimer.** [Rules 4-7.13(b)(2), (b)(9); 4-1.6,
   Handbook]
9. **Do not label the tool "confidential" or imply privilege.** If inputs
   are collected, 4-1.6(e) safeguards and 4-1.18 prospective-client duties
   attach; a relationship can arise from the user's subjective reasonable
   belief regardless of the lawyer's intent (Bartholomew, 611 So. 2d 85).
   Conservative design: anonymous inputs, no lead capture gating results.
   [Op. 24-1; competitor observation]
10. **Any AI/chatbot component must disclose it is AI and not a lawyer or
    firm employee, screen for persons already represented, and never give
    legal advice**; no delegation to software of acts constituting the
    practice of law. [Op. 24-1]
11. **Live chat stays user-initiated.** Responding to questions users pose
    is permitted; lawyer-initiated real-time outreach is
    solicitation-regulated. [Op. A-00-1; Rule 4-7.18]
12. **Never state or imply Florida Bar approval of the tool.** [Rule
    4-7.13(b)(10), Handbook]
13. **Fee info near a tool needs the required cost disclosures**; "free
    consultation" alone needs none per the SCA. [Rule 4-7.14(a)(7),
    Handbook]
14. **Any Spanish version carries all required disclaimers in Spanish.**
    [Rule 4-7.12(c), Handbook; gated on STATE.md Q8]
15. **Optional belt-and-suspenders: voluntary SCA advisory opinion or
    Ethics Hotline pre-clearance.** Websites are filing-exempt (Rule
    4-7.20(g)) but a Bar finding of compliance is binding on the Bar in a
    grievance proceeding under Rule 4-7.19(e)-(f), with carve-outs. Whether
    the SCA will opine on a website-only tool is unconfirmed (gap); the
    Hotline is the practical fallback. Routed to the client as STATE.md
    Q11. [Handbook]

**Working disclaimer patterns (reported; quotes came through a summarizer,
not raw HTML; confirm verbatim before copying):**
- Bark: "This is a general estimate, not legal advice. Every case is
  different." / "The information in this calculator is general educational
  content and is not legal advice. No attorney-client relationship is
  created by use of this tool."
- Vasquez de Lara (FL child support calculator, same template): estimate
  for informational purposes only, anchored to the statute, "the final
  child support amount is determined by a court," results without contact
  info, routes to "a qualified Florida attorney."

**OBSERVED-NOT-RECOMMENDED (do not replicate; feed to W7):**
- Bark's SERP title markets its calculator as a "Free, Confidential Tool":
  calling an anonymous marketing calculator "confidential" risks implying
  attorney-client confidentiality that does not exist (risk assessment
  inferred, under Rule 4-7.14(a)(1)-(2)).
- Bark's "defended thousands of Florida felony cases" is a record
  characterization that must be objectively verifiable under 4-7.13(b)(3).
- No Rule 4-7 violations were observed among the other tool precedents
  reviewed this pass (Bark's core tool and L&L's suite both model compliant
  free-access design).

**Site-integration notes (per CLAUDE.md):** calculator and checklist
components genuinely need "use client" (state, event handlers), the
permitted exception; keep components under 300 lines by splitting the
FDLE-derived offense table into src/lib; every tool page needs a unique
meta title and description; no em dashes in any disclaimer copy.

---

## 5. Known Gaps

1. No Florida Bar ethics or advertising opinion specifically addresses
   calculators or non-AI interactive tools. Basis: zero hits for
   calculator/interactive/chatbot/AI in full-text greps of the 2025
   Advertising Handbook and the Nov 2025 Technology Packet, plus two
   targeted searches including site:floridabar.org. Affirmative absence;
   Op. 24-1 and Op. 00-4 used by analogy.
2. Rule text verified from the Bar's 2025 Handbook reproduction, not live
   floridabar.org rule pages (404 on fetch). Residual risk of a
   post-Dec-2025 amendment; human check before launch.
3. Backlink counts/quality for the precedent tools (barklaw.com,
   communitylawfirm.com, nealdavislaw.com, landllawgroup.com) unobservable;
   only citation-in-search evidence (FSU guide linking sentencing.us).
   Human Ahrefs/Semrush pull recommended before the build decision.
4. Whether the Delgado (Daytona) calculator is genuinely interactive is
   unconfirmed (JS widget absent from fetched HTML).
5. Exact launch date of the Bark calculator unknown; bounded only by the
   "2026" title, the empty Wayback record, and absence from earlier
   observed SERPs.
6. Per-offense degree/level columns in the downloadable FDLE Arrest/Clerk
   Statute Table not itemized on its About page; one download confirms it
   can power the offense dropdown.
7. Competitor disclaimer quotes are reported, not verified (summarizer
   fetches; one familylawprotection.com line was visibly corrupted;
   brucepa.com returned 403). Raw-HTML confirmation is a 5-minute human
   follow-up if verbatim adaptation is intended.
8. Whether the SCA will issue an advisory opinion on a filing-exempt
   website tool is unconfirmed; Ethics Hotline is the fallback (STATE.md
   Q11).
9. No absolute search volumes, no People-Also-Ask data, no
   Tampa-geolocated SERPs; all demand evidence is proxy-based per Section
   1 (standing limitation carried from W1/W2).

---

## DONE-CRITERIA

| Criterion | Status | Reason |
|---|---|---|
| All candidate tool classes evaluated | MET | Six candidates evaluated in Section 2: CPC scoresheet calculator, federal guidelines range estimator, charge-lookup explainer, arrest checklist, bond walkthrough, federal timeline. |
| Each candidate has demand evidence or a recorded absence | MET | Candidates 1, 2, 4, 5, 6 carry verified SERP-density/competitor-investment demand evidence; Candidate 3's standalone volume is explicitly recorded as the weakest case, with the intent caveat (records-intent head term) and per-statute query evidence stated. All volume claims are ESTIMATE-labeled with basis; absolute volumes recorded as unobservable (Section 1, gap 9). |
| Each candidate has a best-precedent assessment or a verified open field | MET | Fetched-and-assessed precedents for 1 (Bark, plus Delgado reported and sentencing.us/FSU link evidence), 2 (sentencing.us, official USSC app), 3 (L&L lookup, Ansara, FDLE table), 4 (verified US-wide absence of the interactive format, prose incumbents listed), 5 (verified absence of any interactive walkthrough, Sammis prose silo as incumbent), 6 (Neal Davis fetched, interactive format verified open). Delgado interactivity honestly flagged unconfirmed (gap 4). |
| Compliance sourced from primary FL Bar materials | MET | Section 4 cites the Bar's own Handbook PDF (rules verbatim, current through Aug 2023 amendments), Ethics Op. 24-1 (full PDF read), Advertising Op. A-00-1 (full text read), and Op. 00-4 via the Bar's Technology Packet, all read this session; the Handbook-vs-live-rules caveat (gap 2) and the no-calculator-opinion absence (gap 1) are disclosed rather than papered over. |
| Effort vs payoff verdict present for every candidate | MET | All six carry S/M/L effort grades explicitly labeled inferred and calibrated to the Next.js 16 agency build context, each with payoff basis and an explicit build / merge / fold / do-not-build verdict. |
| Final ranking justified | MET | Section 3 ranks all six slots with per-slot reasoning, records the two merges (1+3, 4+5), the do-not-build with grounds (regulator's own free app), and a sequencing note distinguishing payoff order from calendar order plus the urgency signal from the Bark Wayback evidence. |
