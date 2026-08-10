# W6: Paid Reality -- CPC, LSA, and the Tampa Ad Vacuum

Workstream: W6 (paid-reality.md), Hines & McCarty market dossier.
Date: 2026-07-22. Pass 2 of 2 (full rewrite; supersedes pass 1).
Feeds: W7 (avoid.md), W8 (DOSSIER.md). Depends on: W1 (competitors.md), W2 (keywords.md), STATE.md.

**Corrections vs pass 1 (important for W7/W8):**

1. Smith & Eulo was checked at the WRONG domain in pass 1 (smitheulo.com, 0 ads).
   Their real domain is smithandeulo.com (confirmed via BBB, Yelp, firm site), and
   it carries roughly 200 verified ads. Pass 1's "Smith & Eulo: 0 ads" is wrong.
2. Metcalf Falls DOES run LSA-template creatives (pass 1 said none). They are now
   the second confirmed Tampa criminal-defense LSA participant after Whittel.
3. Sammis (criminaldefenseattorneytampa.com), inconclusive in W1, is now a
   browser-confirmed 0 ads.
4. Rule 4-7.12's exact text has now been verified from the official Florida Bar
   Handbook on Lawyer Advertising and Solicitation, 13th edition, effective
   December 10, 2025 (www-media.floridabar.org PDF), which reproduces the full
   rule and comment text, closing pass 1's honest UNMET.

---

## 1. Method Note and Limitations (read first)

**Every cost figure in this file is an ESTIMATE.** Nothing here was observed from
a live Tampa ad auction. Search tooling this session approximates a US-national,
non-geolocated SERP; live top-of-page bids, Tampa/Brandon LSA unit composition,
and actual auction pressure are unobservable from here. Ground truth requires a
Google Keyword Planner or auction-insights pull geo-set to the Tampa DMA, plus
the Tampa-IP manual SERP/LSA check already logged as STATE.md Open Question 10.
Ad-PRESENCE facts in section 3.4 are a different confidence class: those are
verified browser observations of Google's Ads Transparency Center on 2026-07-22
(with screenshots), though Transparency shows creatives, not spend.

**The single most important reading rule:** published legal CPC figures come
from two different measurement families that differ by roughly 3-5x (inferred
reconciliation across four fetched sources):

1. **Bid-estimate figures (Keyword Planner / keyword-tool style, $40-60+ on head
   terms):** advertiser-facing top-of-page bid data. SoftScotch's keyword table
   is this style. Treat as a ceiling indicator.
2. **Measured actual-paid CPCs ($8-14 account averages, $12.30 practice-area
   median):** what managed accounts actually paid per click. ROA Marketing
   (actively managed accounts) and LocaliQ (256 legal campaigns) are this style.

The defensible planning range for Tampa criminal defense search is **roughly
$15-35 actual CPC, with $40-60+ possible on peak head terms** (ESTIMATE; basis:
ROA measured $8-14 averages with $18-35 top keywords, LocaliQ $12.30 criminal
median, SoftScotch $43-61 bid-style ceilings, MB Adv Tampa modeled bands).

Source-quality notes carried from research:

- WordStream and LocaliQ are one data pipeline (LocaliQ owns WordStream), not
  two independent sources. Their legal CPL is byte-identical across the 2025
  and 2026 reports ($131.63), which suggests an unrefreshed figure; treat as
  approximate and do not cite as fresh.
- Pareto Legal's criminal defense "$659 cost per signed case" is internally
  inconsistent ($60 CPL / 2% close = $3,000 per case, not $659) and comes from
  a study described as plaintiff-side firms. Do not use.
- MB Adv Agency's Tampa figures are self-described as "WordStream 2024 legal
  benchmarks + Tampa market estimates," i.e., modeled, not client-measured.
  They are the only Tampa-specific practice-area breakdown found; weighted
  accordingly.
- SoftScotch does not name its keyword tool; its figures read as bid-estimate
  data. Its federal and white-collar CPCs are single-source, uncorroborated.
- Excluded entirely: three keyword figures seen only in search snippets and
  never traced to a fetchable page ('DUI lawyer' $28.00, 'criminal lawyers
  near me' $42.27, 'criminal law attorney' $57.47), and Savvy Law Firm
  Marketing's stats page (HTTP 403, unverifiable).

---

## 2. CPC Benchmarks by Keyword Cluster (all ESTIMATE)

### 2.1 Industry and practice-area context (measured actual-paid tier)

| Metric | Figure | Source, date, confidence |
|---|---|---|
| Legal industry median search CPC (all keywords) | $8.58 (2025 report), $9.87 (2026 report; highest of any industry vs $5.26-5.42 cross-industry) | WordStream/LocaliQ annual benchmarks; 16,446 US campaigns Apr 2024-Mar 2025 and 13,474 campaigns Apr 2025-Mar 2026; fetched; reported |
| Legal CTR / CVR / CPL | 5.87-5.97% / 5.09-5.55% / $131.63 (CPL identical both years, suspect) | same, reported |
| Criminal Law median CPC | $12.30, most expensive legal subcategory (legal avg $9.21); lowest legal CTR 4.51% | LocaliQ legal-vertical breakout; 256 US legal campaigns, data Apr 2022-Mar 2023, page updated 2025-07-14; fetched; reported |
| Legal-wide CVR / CPL in that breakout | 7.0% / $111.05 (no criminal-specific CPL published) | same, reported |
| Criminal defense account averages | $8.00-12.00 CPC (top keywords $18-30), CVR 11%, CPL $73-109 | ROA Marketing benchmarks from actively managed accounts $2k-50k/mo spend; published 2026-06-12; national, sample size undisclosed; reported |
| DUI/DWI account averages | $10.00-14.00 CPC (top keywords $22-35), CVR 12%, CPL $83-117 | same, reported |

Perspective check (verified, iLawyerMarketing analysis of 21,000+ legal
keywords via Google Keyword Planner, Oct 2025): **zero criminal defense terms
appear in the legal industry's top-200 most-expensive keywords**, a list
dominated by PI/trucking/maritime at $200+ CPCs (nearby PI datapoint: 'st
petersburg truck accident lawyer' $247.50). Criminal defense PPC in Tampa is a
mid-cost auction, not a PI-style bloodbath. iLawyer also cautions that Keyword
Planner prices overstate what managed accounts actually pay, consistent with
the 3-5x gap in section 1.

### 2.2 Cluster-by-cluster planning table (ESTIMATE, source and date per figure)

| Cluster | Bid-estimate / keyword-tool figures | Measured or modeled figures | Planning band (ESTIMATE, with basis) |
|---|---|---|---|
| Core criminal defense head terms | 'criminal defense attorney' $43.50 (74,000/mo); 'criminal defense lawyer' $45.86 (49,500/mo). SoftScotch 239-keyword dataset, 2026-04-27, tool unnamed | ROA measured avg $8-12, top keywords $18-30 (2026-06); LocaliQ criminal median $12.30 (2022-23 data) | $15-35 actual, $40-60 peak head terms |
| Tampa-geo core | 'criminal defense lawyers tampa' $61.17 (2,900/mo), SoftScotch 2026-04-27; the ONLY Tampa criminal keyword-tool CPC found; single source; prices above national head terms, consistent with metro auction pressure | none measured | treat $61 as bid ceiling, not expected CPC; expect $20-40 actual (inferred from 3-5x gap) |
| DUI | agency-quoted band $25-160: $25-60 mid-size markets, $80+ top-of-page major metros (Superpractice, Lucrative Legal, Media Spearhead, DM Law Partners consensus); Surfside PPC: geo-specific DUI $50-100, above $300 extreme markets; all bid-estimate style | ROA measured $10-14 avg, top $22-35 (2026-06); MB Adv Tampa modeled 'DUI attorney Tampa' / 'DUI lawyer Hillsborough County' $25-45 (WordStream-derived estimate, undated) | $25-60 per click for Tampa planning; low anchor $10-14 measured national |
| Drug charges | no trafficking-specific figure exists anywhere found (verified gap after three attempts) | MB Adv Tampa modeled 'drug possession attorney Tampa' $20-38 | $20-38 Tampa (weak provenance); trafficking terms likely a thin, cheap auction (inferred from absence) |
| Federal criminal | 'federal criminal defense attorney' $31.96 (4,400/mo), SoftScotch 2026-04-27; SINGLE SOURCE, uncorroborated | none | ~$30 national baseline, directionally lower volume than state head terms; Tampa auction plausibly thin (inference: organic leaders run 0 ads, W1) |
| White-collar | 'white collar crime lawyers' $24.90 (1,600/mo), SoftScotch 2026-04-27; SINGLE SOURCE; also 'florida criminal defense lawyers' $27.49 (4,400/mo) | none | widest uncertainty; low volume; defer paid (sec 4.2) |
| Emergency / after-hours | none national | MB Adv Tampa modeled night/weekend criminal terms $15-28 | $15-28; cheapest Tampa cluster in print and highest caller urgency |

### 2.3 Cost-per-lead and cost-per-signed-case (all ESTIMATE, national unless noted)

- Measured national CPL (ROA, 2026-06): criminal defense $73-109, DUI $83-117.
- Modeled Tampa CPL (MB Adv, undated): criminal defense $250-600, CVR 3-6%.
  The realistic Tampa CPL sits somewhere between these two brackets, which are
  2-5x apart (inferred).
- Cost per signed case via PPC (Foundry CRO, 2026-04-28, reported): criminal
  defense $800-2,000 suburban, $1,500-4,000 mid-market, $3,000-7,500 top-20
  metro, against case values of $2,000-15,000 and CPCs of $25-50 suburban /
  $45-80 mid-market / $80-120 top-20. Tampa/Brandon plausibly straddles the
  suburban and mid-market bands: **roughly $1,000-4,000 per signed case via
  search PPC (ESTIMATE)**.
- Rejected datapoint: Pareto Legal's "$659 per signed case" for criminal
  defense (2026-04-17) fails arithmetic ($60 CPL at 2% close = $3,000/case)
  and comes from a plaintiff-side study. Excluded from planning.

---

## 3. Local Services Ads (LSA)

### 3.1 Availability in Florida (verified, Google primary source)

Google's US screening-requirements page lists 16 lawyer LSA categories
including **Criminal lawyer** (described as covering "domestic violence, drug
possession, felonies, federal crimes, petty crimes, and restraining orders"),
**DUI lawyer**, and Traffic lawyer, with no state-level restriction on any
lawyer category (verified, fetched this session; some non-legal verticals do
carry geographic restrictions, lawyers carry none). Lawyer LSAs have been
available nationwide since mid-2020 after a San Diego/Houston pilot (reported,
Justia Onward and Scorpion, seen in search results, not fetched).

That LSAs actively serve the Tampa criminal market is verified at the creative
level: Whittel & Melton (3 LSA-format ads, W1) and Metcalf Falls (this session)
both show LSA-template creatives in Ads Transparency. Caveat: the live LSA unit
on an actual Tampa SERP remains unobservable from this non-geolocated session;
participation is verified, live serving is inferred-strong.

### 3.2 Screening requirements (verified, Google primary source)

Per Google's US screening-and-verification requirements for all 16 lawyer
categories (fetched): business-owner identity verification, fieldworker
identity verification, **state bar license checks for each lawyer in the
firm**, and professional liability insurance; business/owner background checks
are marked "Select users only." Lawyers earn the **Google Screened** badge, not
Google Guaranteed. Google dropped the mandatory background check for lawyers
effective October 18, 2021, treating bar licensure as the equivalent screen;
keeping bar licenses current in the LSA dashboard is still required (reported;
the Justia article returned HTTP 403, claim rests on its search summary and is
consistent with the current requirements page).

Practical implication: onboarding is paperwork, bar lookup for each attorney
(Colton Trina, FL Bar 1057615, plus any co-counsel), and liability-insurance
proof (STATE.md Open Question 13). No disqualifying barrier for a newer firm.

### 3.3 LSA pricing (ESTIMATE; no Tampa figure exists anywhere)

LSAs are pay-per-lead; Google publishes no price list, and actual CPL is only
discoverable inside a running account. Basis for the estimate, all labeled:

- Pareto Legal LSA study (9 law-firm clients, Jan-Dec 2025, $1.2M spend):
  $232 average per LSA lead across practice areas, ~$2,525 per signed case,
  criminal defense converting 9-10% of leads to cases (reported; direct fetch
  404'd, figures from search summary).
- OptimizeMyFirm (April 2022 data): criminal defense ~$75/LSA lead, ~25%
  caller-to-client, ~$300 per case; family law FL ~$85/lead (reported).
- 39Celsius case study (Aug 2021): 42 criminal defense LSA leads in one month
  at $111/lead average, vs $53-75 per CLICK for criminal defense search ads,
  i.e., 5-7x cheaper per lead than search (reported).

**Inferred planning band: $75-250 per LSA lead nationally; ~$100-200/lead most
plausible for Tampa in 2026 (ESTIMATE).** Cost per signed case via LSA spans
~$300 (2022 vintage, 25% close) to ~$2,525 (2025 all-practice average); the
spread is mostly vintage and practice-mix, so budget the middle and measure.
Every LSA dollar figure here is national; no Tampa or Florida criminal defense
LSA CPL has been published anywhere found.

### 3.4 The observed Tampa competitive vacuum (verified, Ads Transparency, 2026-07-22)

Browser-verified domain checks this session (US region, all time, screenshots),
extending W1's seven:

| Firm | Domain | Ads found |
|---|---|---|
| Sammis Law | criminaldefenseattorneytampa.com | 0 (resolves W1's inconclusive) |
| Mike G Law | mikeglaw.com | 0 |
| Hersem Law | hersemlaw.com | 0 |
| Metcalf Falls | hillsboroughdefense.com | 9, verified advertiser: LSA-template units, 1 search text ad, 1 Maps/GBP-format ad |
| Curry Law Group | currylawgroup.com | 13, verified advertiser, but creatives are overwhelmingly PI ("Injury Experts on Your Side", motorcycle, slip and fall); zero criminal defense creatives observed |
| Smith & Eulo | smithandeulo.com | ~200, verified advertiser: Maps/GBP-format local ads across many Florida cities (Ocala, Miami, Kissimmee observed), a statewide volume play, not Brandon-focused. Pass 1's 0-ad result used the wrong domain smitheulo.com |

Combined tally across all 13 Tampa-market criminal defense domains now checked
(W1 + this session): **only 4 advertise at all** (Whittel 3 LSA ads; Metcalf
Falls 9 mixed; Curry 13 mostly PI; Smith & Eulo ~200 statewide), **6 are
confirmed zeros** (Rankin, Brunvand, Sammis, Mike G, Hersem, plus the
wrong-domain check), and 3 remain inconclusive from W1 (Scriven, Hanlon, Paulk;
Brancato also unresolved). The organic leaders Rankin and Brunvand verifiably
run 0 Google ads (W1, competitors.md).

Strategic headlines (inferred from verified observations):

- **The LSA lane has only TWO observed criminal-defense participants** (Whittel,
  Metcalf Falls), both light.
- **Nobody advertises criminal defense in Brandon in any observed channel.**
  Curry, the only Brandon-based criminal firm from W1, spends its entire
  observed creative set on PI/family. Even the incumbent is not defending the
  Brandon criminal paid lane.
- Smith & Eulo is the one competitor treating Tampa criminal defense as a
  paid-acquisition volume business, but their observed play is statewide
  multi-office local ads (GBP ratings 4.7/92, 4.4/79, 4.9/55 visible in
  creatives), plausibly Performance Max or Maps ads (product inferred), not
  Brandon depth.

Caveats: Ads Transparency shows creatives, not budgets; domain-level queries
are strong evidence against Search/Display but weaker for LSA absence (LSA
creatives can sit under agency advertiser accounts, as Whittel's did in W1);
Smith & Eulo's ~200 ads were not exhaustively categorized (first-screen
creatives inspected).

### 3.5 LSA ranking mechanics (verified, Google primary source, plus one correction)

Google's official ad-rankings page (fetched) lists the factors: (1) your bid,
(2) likelihood of lead conversion, including responsiveness ("Missed calls may
negatively affect your responsiveness") and message/booking availability, and
(3) profile quality: "Your rating, number of reviews, average response time,
use of high-quality images, the verification checks you have completed."
**Proximity does not appear on the page.** Google announced in May 2024 that
"proximity of a business' location is often not a key indicator of relevancy"
(reported, Search Engine Journal coverage); service-area targeting policies
still gate where ads serve. This corrects the common "reviews + proximity"
formula: a Brandon office is not a ranking penalty for serving greater Tampa
under current rules.

Because LSA reviews pull from the Google Business Profile, GBP review velocity
feeds LSA rank directly. Competitor review bars are low (Rankin 10, Whittel
Tampa 15, Brunvand Tampa 21, Brancato ~34, per competitors.md/STATE.md), so a
criminal-categorized Brandon GBP passing roughly 35 reviews, plus disciplined
call answering, plausibly reaches LSA competitiveness quickly (inferred). This
is the paid payoff of W4's review program.

---

## 4. Strategy Read: Where Paid Makes Sense for a Newer Firm

All recommendations are contingent on STATE.md Open Question 7 (paid budget
ceiling), Open Question 3 (Brandon office address, which gates GBP and LSA),
and Open Question 13 (24/7 answering and liability insurance).

### 4.1 Where paid should carry (evidence-cited)

1. **LSA first, search second.** Evidence: only 2 of 13 checked firms show any
   LSA creative (sec 3.4, verified); LSA is pay-per-lead (~$75-250/lead
   ESTIMATE), which caps waste for a budget-constrained entrant vs $15-60
   clicks at 3-6% conversion; 39Celsius measured LSA leads 5-7x cheaper than
   search clicks for criminal defense; ranking inputs (review count,
   responsiveness, Google Screened verification) are assets the firm controls
   without a bidding war, against 10-34-review local bars; and proximity is no
   longer a primary factor, so Brandon-based serving of greater Tampa is not
   penalized (sec 3.5, verified).
2. **High-intent, arrest-adjacent emergency terms, Brandon-geofenced search.**
   The night/weekend cluster is the cheapest Tampa band in print ($15-28
   ESTIMATE, MB Adv modeled) and maps to the highest-urgency caller. No
   competitor was observed advertising on it. Honest use requires genuine 24/7
   answering, which also protects LSA responsiveness scores.
3. **DUI and drug-possession clusters, Brandon/Riverview/Valrico geo.** Tampa
   planning bands $25-60 and $20-38 (ESTIMATE) against measured national CPLs
   of $73-117 (ROA) and modeled Tampa CPLs of $250-600 (MB Adv); even at the
   pessimistic bracket, Foundry's suburban/mid-market cost-per-case bands
   ($800-4,000) clear typical criminal defense fees. These are the
   transactional moments where paid buys what organic cannot yet rank for.
4. **Federal-moment terms as a capped experiment, not a pillar.** The only
   keyword datapoint is $31.96 single-source (SoftScotch), volume is modest
   (4,400/mo national), and the Tampa federal organic leaders run 0 ads (W1,
   verified), so the local auction is plausibly thin (inference). A small
   exact-match test (target-letter, indictment, "federal criminal defense
   attorney tampa" phrasings) buys presence on exactly the searches W1
   concedes organically for year one. Cap it (~$500/mo) and kill it fast if
   observed CPCs disprove the thin-auction hypothesis.

### 4.2 Where organic must carry it (evidence-cited)

- **Informational long-tail** (post-arrest process, sentencing/scoresheet
  questions, W2's long-tail list): informational intent converts poorly against
  $15-35 clicks, and these are exactly the cheap terms that dilute account
  averages down to $8-12. This is W3/W5 territory (content and the scoresheet
  calculator), not paid.
- **Broad Tampa head-term search.** Bid ceilings run $43-61 (SoftScotch) and
  the organic head-term SERP is behind a directory wall (W1); paid should buy
  geography (Brandon) and moments (arrest, DUI stop, target letter), not broad
  Tampa share against volume advertisers like Smith & Eulo.
- **White-collar paid.** Single-source $24.90 CPC, low search volume (1,600/mo
  national), no Tampa data, and W1 shows the organic space owned by
  referral-moat specialists. Defer until the practice-mix answer (Open
  Question 6) says otherwise.
- **Drug-trafficking-specific terms.** No published CPC anywhere (verified
  gap); the absence itself suggests a thin auction with negligible volume.
  Cover trafficking intent through the drug-charges cluster and content.

### 4.3 Scenario budget sketch (ESTIMATE, contingent on Open Question 7)

Context: reported starting budgets for criminal defense PPC run $2,000-5,000/mo
(Savvy Law Firm Marketing, snippet only, unverified) and $5,000-7,000/mo for
DUI (Media Spearhead, agency figure). Given the verified vacuum, the low end is
more plausible here than national narratives suggest (inference).

**Small scenario, ~$2,500-3,500/mo (ESTIMATE):**

- LSA: $1,500-2,000/mo. At $100-200/lead (ESTIMATE band), roughly 8-18
  leads/mo; at the 9-25% lead-to-case rates reported, roughly 1-3 signed
  cases/mo. Break-even against typical fees at one case.
- Search: $1,000-1,500/mo on exact/phrase-match emergency + DUI +
  drug-possession terms, Brandon/Riverview/Valrico radius, call-tracked. At
  $20-45 ESTIMATE CPCs, roughly 25-60 clicks/mo; at 3-6% CVR, 1-3 leads/mo.
  This budget is buying data as much as leads: 60-90 days of it replaces every
  estimate in this file with the firm's own observed Tampa numbers.

**Medium scenario, ~$6,000-8,000/mo (ESTIMATE):**

- LSA: $2,500-3,500/mo, raising bid targets once review count (~35+) and
  responsiveness are established.
- Search: $2,500-3,500/mo, widening DUI/drug coverage and adding the capped
  federal-moment experiment (~$500/mo).
- Reserve: $500-1,000/mo for landing pages and intake/call answering, since
  intake quality, not clicks, is the usual failure point.

Expected all-in cost per signed case: **roughly $1,000-4,000 (ESTIMATE, Foundry
suburban/mid-market straddle), with the small scenario aiming at the lower
half of that band given Brandon's suburban auction profile.** Do not commit to
the medium scenario until small-scenario data validates the Tampa bands. Both
scenarios assume the Brandon office (Open Question 3) and 24/7 answering (Open
Question 13) exist; without them, run neither.

---

## 5. Compliance Note: Florida Bar Rule 4-7 Constraints on Ad Copy

Rule text verified this session from The Florida Bar's official Handbook on
Lawyer Advertising and Solicitation, 13th edition, effective December 10, 2025
(www-media.floridabar.org/uploads/2025/12/Handbook-2025-Approved-by-SCA-12-10-25.pdf),
which reproduces the full text and comments of Rules 4-7.12 through 4-7.14.
4-7.12 was last amended June 22, 2023, effective August 21, 2023 (SC22-1294),
per the amendment history in the reproduced rule. Final copy still needs
Florida counsel review.

- **Required content, Rule 4-7.12 (verified, primary text).** Per subdivision
  (a), "All advertisements for legal employment must include" (a)(1) "the name
  of at least 1 lawyer, the law firm, ... responsible for the content of the
  advertisement" (the comment confirms "including the name of the law firm is
  sufficient"; the rule also lists referral-service/qualifying-provider/
  directory names for those advertiser types), and (a)(2) "the city, town, or
  county of 1 or more bona fide office locations of the lawyer who will
  perform the services advertised." (b) Referrals: "If the case or matter will
  be referred to another lawyer or law firm, the advertisement must include a
  statement to this effect" (the comment's model disclaimer: "Your case may be
  referred to another lawyer."). (c) Required words or statements must appear
  in each language used in the ad. (d) Required information "must be clear and
  conspicuous and must be clearly legible if written, or intelligible if
  spoken." The comment defines a bona fide office as "a physical location
  maintained by the lawyer or law firm where the lawyer or law firm reasonably
  expects to furnish legal services in a substantial way on a regular and
  continuing basis," and an ad "cannot state or imply that a lawyer has
  offices in a location where the lawyer has no bona fide office"
  (satellite/"available for consultation"/"available by appointment"
  statements allowed only if true). Practical effect: LSA
  profiles, search ads, and landing pages must carry the firm name and
  "Brandon, FL" (or the actual bona fide office location), and any
  Tampa-office implication is off-limits until a Tampa bona fide office
  exists. This directly constrains the Brandon-serves-Tampa positioning: serve
  the area, name the Brandon office.
- **No deceptive or inherently misleading claims, Rule 4-7.13 (verified,
  primary text).** Prohibits material statements that are factually or legally
  inaccurate, omissions that make supplied information misleading, and
  implying material nonexistent facts. No outcome promises, no
  "charges dropped" framing, in ad copy or LSA profile. "Available 24/7" is
  usable only if literally staffed.
- **No potentially misleading claims, Rule 4-7.14 (verified, primary text).**
  Restricts "board certified" statements to lawyers actually certified under
  the Florida Certification Plan or an accredited equivalent (4-7.14(a)(4)),
  restricts specialist/expert statements (4-7.14(a)(5)), and restricts
  membership/recognition claims to bona fide organizations with objective,
  uniformly applied criteria (4-7.14(a)(3)). Whether any Hines & McCarty
  attorney is board certified (STATE.md Open Question 5) gates all credential
  language.
- **Observed-not-recommended competitor copy (verified creatives, flagged for
  W7, not asserted as violations).** Metcalf Falls' live text ad says the
  attorneys "specialize in criminal defense and DUI charges" and uses "Top
  Rated & Award Winning"; Curry runs "Injury Experts on Your Side."
  Specialization claims implicate 4-7.14 absent board certification (Metcalf's
  certification status was not checked), and rating/award language requires
  substantiation under 4-7.13/4-7.14(a)(3). Treat as risk patterns to avoid,
  not ammunition.
- **Compliant-by-design positioning (inferred).** Lead with process,
  availability (if true), free consultation, the Brandon office location, and
  the Google Screened badge, which is Google's verification statement rather
  than the firm's claim about itself.

---

## 6. Avoid Candidates Surfaced by W6 (feed W7)

1. Planning budgets on Keyword-Planner-style bid figures ($43-61/click) as
   expected CPCs; measured actual-paid data runs 3-5x lower.
2. Trusting agency sales-page CPC narratives ($50-160 DUI, $300+ extreme
   markets) as planning inputs; they are uncited bid-ceiling figures.
3. Broad Tampa head-term search campaigns before conversion infrastructure is
   proven (directory-walled SERP, highest bid ceilings, volume incumbents).
4. White-collar and federal paid as year-one pillars (single-source CPCs, low
   volume, referral-moated organic per W1); federal only as a capped test.
5. Chasing drug-trafficking-specific paid terms (no auction data exists;
   absence signals negligible volume).
6. Copying competitor ad copy patterns: "specialize in," "Top Rated & Award
   Winning," "Injury Experts" (Rule 4-7.13/4-7.14 exposure, observed live in
   two competitors' creatives).
7. Launching LSA before the review program reaches roughly 35+ reviews and
   before genuine 24/7 answering exists; review count and responsiveness are
   Google-documented ranking inputs and missed calls damage rank.
8. Citing Pareto's $659 cost-per-case (fails arithmetic) or WordStream's 2026
   legal CPL $131.63 (byte-identical to 2025, likely unrefreshed) as planning
   data.
9. Trying to out-spend Smith & Eulo's ~200-ad statewide volume play; the
   counter is Brandon depth and LSA, not breadth.
10. Implying a Tampa office in any ad or landing page before a bona fide Tampa
    office exists (Rule 4-7.12 comment, verified text).

---

## 7. Open Questions Only the Human Can Answer

- Paid budget ceiling and LSA appetite (STATE.md Open Question 7; both budget
  scenarios are gated on it).
- Brandon office address for GBP/LSA and Rule 4-7.12(a)(2) bona fide office naming
  (STATE.md Open Question 3).
- Board certification / former-prosecutor status (STATE.md Open Question 5;
  gates all credential language in ad copy under 4-7.14).
- Can the client run (a) a Tampa/Brandon-geolocated manual check of the live
  LSA unit, local pack, and the 4 unresolved Ads Transparency domains
  (Scriven, Hanlon, Paulk, Brancato), and (b) a Google Keyword Planner pull
  geo-set to the Tampa DMA to replace every CPC estimate in this file
  (STATE.md Open Question 10)?
- Can the firm staff or contract genuine 24/7 call answering, and is
  professional liability insurance in force (LSA screening prerequisite;
  STATE.md Open Question 13)?
- Desired year-one practice mix, state volume vs federal/white-collar, which
  decides whether the capped federal test runs at all (STATE.md Open
  Question 6).

---

## Sources

CPC and cost data: wordstream.com 2025 and 2026 Google Ads benchmarks;
localiq.com legal search advertising benchmarks; softscotch.com criminal
defense keyword dataset (2026-04-27); roa-marketing.com attorney CPC
benchmarks (2026-06-12); mbadv.agency Tampa legal PPC guide; pareto.legal PPC
statistics (2026-04-17, flagged unreliable); foundrycro.com legal marketing
benchmarks by practice area (2026-04-28); ilawyermarketing.com most expensive
legal keywords (Oct 2025); surfsideppc.com DUI leads guide; superpractice.com
and dmlawpartners.com Google Ads cost pages.

LSA: support.google.com/localservices answers 12174778 (screening
requirements) and 7527305 (ad rankings), both fetched;
searchenginejournal.com proximity announcement coverage; onward.justia.com
rollout and background-check articles (403/secondary); pareto.legal LSA
statistics (404/secondary); optimizemyfirm.com LSA cost analysis;
39celsius.com LSA vs Google Ads case study.

Ads Transparency (browser-verified 2026-07-22):
adstransparency.google.com for criminaldefenseattorneytampa.com, mikeglaw.com,
hersemlaw.com, hillsboroughdefense.com, currylawgroup.com, smithandeulo.com
(and the erroneous smitheulo.com); domain confirmations via bbb.org, yelp.com,
hersemlaw.com, smithandeulo.com.

Compliance: The Florida Bar, Handbook on Lawyer Advertising and Solicitation,
13th edition, effective December 10, 2025, approved by the Standing Committee
on Advertising
(https://www-media.floridabar.org/uploads/2025/12/Handbook-2025-Approved-by-SCA-12-10-25.pdf);
full text and comments of Rules 4-7.12, 4-7.13, 4-7.14 as reproduced there
read directly this session (verified, floridabar.org primary source).

Internal: docs/research/competitors.md (W1), docs/research/keywords.md (W2),
docs/research/STATE.md.

---

## DONE-CRITERIA

1. **CPCs for all main clusters with sources.** MET. Core criminal, Tampa-geo,
   DUI, drug (with the trafficking gap stated), federal, white-collar, and
   emergency clusters are tabled in section 2 with source and date per figure;
   the core term is reconciled across the bid-estimate and measured-actual
   tiers (4+ sources). Honest gaps recorded: no published CPC anywhere for
   'drug trafficking lawyer'; federal and white-collar rest on a single
   source and are labeled as such.
2. **LSA availability and dynamics documented from primary sources.** MET.
   Category eligibility and screening cite Google's fetched
   screening-requirements page (answer 12174778); ranking mechanics cite
   Google's fetched ad-rankings page (answer 7527305) including the
   proximity correction; pricing is necessarily secondary-source ESTIMATE
   because Google publishes no LSA pricing, and is labeled as such with all
   three bases dated.
3. **Paid-vs-organic split reasoned from evidence.** MET. Section 4 ties each
   recommendation to named evidence: the verified 13-firm Ads Transparency
   vacuum, measured LSA-vs-search cost data, cluster price bands with
   provenance grades, and W1/W2 organic findings; every recommendation states
   its contingency on the human budget/office/staffing answers.
4. **Every cost figure ESTIMATE-labeled.** MET. Section 1 declares the blanket
   rule; every cost table, band, and budget scenario carries an explicit
   ESTIMATE label with basis; verified items are ad-presence, policy, and
   rule-text facts, never costs.
5. **Compliance constraints sourced.** MET. In this pass the official Florida
   Bar Handbook on Lawyer Advertising and Solicitation PDF (13th edition,
   effective 2025-12-10, www-media.floridabar.org) was fetched and the full
   reproduced text and comments of Rules 4-7.12, 4-7.13, and 4-7.14 were read
   directly, closing pass 1's UNMET on the 4-7.12 required content elements
   ((a)(1) responsible lawyer or firm name, (a)(2) city/town/county of a bona
   fide office, (b) referral disclosure, (c) same-language requirement,
   (d) clear and conspicuous). The direct floridabar.org/rules chapter page
   returned 404 this session; the Handbook PDF on the Bar's own media domain
   is the primary source used instead. Competitor copy flags are sourced to
   verified Ads
   Transparency creatives and framed as risks to avoid, not asserted
   violations. Residual caveat stated in place: final copy review by Florida
   counsel is still recommended, and Metcalf's certification status was not
   checked.

Status summary: 5 of 5 criteria MET. W6 pass 2 complete; the pass-2 item
planned in STATE.md (fetch Rule 4-7.12) is done. Remaining unknowns are
human-gated (Tampa-geolocated observation, live account data), not
research-gated.
