# W3: Content Gap Analysis, Hines & McCarty Law

Market dossier workstream W3. Criminal defense (state + federal), Brandon FL, Hillsborough County / 13th Judicial Circuit / M.D. Fla. Tampa Division.

Date of research: 2026-07-22. Inputs: docs/research/keywords.md (W2 graded keyword list), docs/research/competitors.md (W1 firm profiles), docs/research/STATE.md, plus this pass's local content inventory (8 topic areas, competitor pages fetched and graded) and US exemplar survey (best-in-country page per topic, schema audits curl-verified).

---

## 1. Method and Limitations

**Method.** Eight informational/process topic areas were selected as the question space that sits underneath the W2 commercial keywords: (1) federal criminal process timeline, (2) federal target letters, (3) grand jury subpoenas, (4) Florida CPC sentencing/scoresheet, (5) Hillsborough pretrial release and bond, (6) professional license consequences, (7) immigration consequences of Florida convictions, (8) sealing and expungement. For each topic: the Tampa-market coverage was inventoried (competitor pages fetched directly where possible and graded for depth, citations, currency, and local specificity), then compared against the best US exemplar found for the same topic (fetched, with JSON-LD schema curl-verified on 8 exemplar pages). The gap between the local ceiling and the national bar defines what a best-in-market page must contain on day one.

**Confidence labels** used throughout: **verified** (page fetched or schema curl-checked directly this session), **reported** (seen in a SERP snippet or third-party source, not independently confirmed), **inferred** (judgment grounded in verified observations), **ESTIMATE** (number not observed; basis stated).

**Limitations (systematic):**
1. All SERPs are US-generic, not Tampa- or Brandon-geolocated, and no local pack was observable (standing tooling limitation carried from W1/W2 per STATE.md). Informational queries are less pack-sensitive than "lawyer near me" terms (inferred), but map-pack overlays on queries like "expunge record Tampa" were unobservable.
2. All word counts are ESTIMATE, basis: fetch summarizer output, not exact counts.
3. Several competitor pages could not be fetched: Brunvand's grand-jury-subpoena page and Eisner Gorin's entire site returned HTTP 403; Scriven's grand-jury page was SERP-verified but not fetched. Their depth is unassessed, not assumed weak.
4. Whittel & Melton's ~841-page sitemap was checked via site-restricted search, not a full crawl; "not covered" for Whittel is inferred from search absence.
5. "What competitors rank for" is bounded evidence: presence/position in the specific SERPs queried this session, with no rank-tracking tool.
6. Winnability grades cited below are W2's inferred grades (see keywords.md Sections 2-6); this file does not re-grade keywords.

**Florida Bar compliance framing.** Every recommended page in Section 3 must use process/rights/discretion framing: explain what the law says and what a defendant's options are, never promise or imply outcomes (Fla. Bar R. 4-7.13), never use "expert/specialist" language absent board certification (R. 4-7.14). Competitor patterns flagged OBSERVED-NOT-RECOMMENDED in this file are documented as evidence, not as models.

---

## 2. Topic-by-Topic Gap Analysis

Format per topic: local coverage verdict, best-in-US bar, and the exploitable gap.

### Topic 1: Federal criminal process timeline (investigation to sentencing)

- **Local verdict: COVERED-THIN** (inferred from verified fetches). Exactly one Tampa competitor has a dedicated full-timeline page: Scriven's /federal-criminal-process/, ~1,200 words (ESTIMATE, fetch summarizer), covering pre-arrest through appeal in clean stage headings but with zero statute/rule citations and zero M.D. Fla. or Tampa specifics; it does not even link Scriven's own target-letter page into the flow (verified fetch 2026-07-22). Brunvand's /federal-crimes/ is ~750-800 words of generic national copy with no timeline; Rankin's federal pages are ~450-650-word templates (both per W1 verified fetches). Hanlon, Paulk, Whittel, Brancato: no federal process explainer observed. The SERP is otherwise held by the institutional Federal Defender site (flm.fd.org) and out-of-market firms (verified).
- **Best-in-US bar (verified fetches):** National Security Law Firm's "Complete Guide to the Federal Criminal Process," ~2,800-3,000 words (ESTIMATE), 9-stage framework, FAQ section, author byline and date stamp, per-stage links to DOJ Justice 101. Runner-up: Neal Davis (Houston) timeline page, ~1,200-1,400 words. No exemplar anywhere observed uses an interactive or visual timeline, downloadable checklist, or decision tree; the national format ceiling is plain long-form text (verified within queries run).
- **The gap:** a deep, cited, Tampa-Division-specific timeline (magistrate procedure, federal courthouse logistics, typical M.D. Fla. scheduling, Speedy Trial Act clock) would be unmatched locally and, with any visual timeline treatment, would exceed the national format ceiling (inferred).
- Sources: https://www.scrivenlawfirm.com/federal-criminal-process/ | https://flm.fd.org/federal-court-process | https://www.nationalsecuritylawfirm.com/complete-guide-to-the-federal-criminal-process/ | https://www.nealdavislaw.com/criminal-defense-guides/federal-criminal-offense-timeline/ | docs/research/competitors.md

### Topic 2: Federal target letters

- **Local verdict: COVERED-THIN** (inferred). Four-plus Tampa-market firms have target-letter content, every fetched page moderate at best: Scriven /tampa-target-letters-lawyer/ ~800-900 words, no FAQ, no citations; Stechschulte Nell ~2,000-word undated blog post, no MDFL specifics; Sammis /federal/target-letter/ ~1,100-1,200 words, the only one citing the DOJ sample letter and Justice Manual 9-11.151 and referencing the Tampa Division, last updated Sep 3 2024 (all verified fetches; word counts ESTIMATE). Brunvand holds a nested target-letter FAQ subpage (W1 sitemap, not fetched).
- **Best-in-US bar (verified fetches):** Evergreen Attorneys, ~2,000-2,200 words, dated byline, DOJ Justice Manual links, 3-step response plan; Robert M. Helfend, ~1,200-1,400 words with linked TOC and witness/subject/target distinction. **Open-field finding (verified within queries run):** no page anywhere observed shows an annotated sample target letter, district-specific guidance, or deep subject-vs-target-vs-witness strategy; both exemplars are sub-2,500-word text pages.
- **The gap:** an annotated sample-letter walkthrough plus JM 9-11.151 deep dive plus M.D. Fla. procedure (what a Tampa AUSA letter actually triggers, proffer mechanics) would exceed both the local ceiling and the national ceiling simultaneously. W2 grades the localized variant 6-12mo and calls it "the single best asymmetric play" in the federal cluster (keywords.md, federal target letter attorney).
- Sources: https://www.scrivenlawfirm.com/tampa-target-letters-lawyer/ | https://www.tpatrialattorneys.com/target-letters/ | https://criminaldefenseattorneytampa.com/federal/target-letter/ | https://evergreenattorneys.com/target-letter/federal-target-letter/ | https://www.robertmhelfend.com/federal-defense/target-letters/

### Topic 3: Grand jury subpoenas

- **Local verdict: COVERED-THIN** (inferred). Dedicated local pages exist (Scriven /tampa-grand-jury-lawyer/, SERP-verified, not fetched; Brunvand, SERP-verified, fetch 403'd) but no observed local page shows deep procedural treatment: nothing on duces tecum vs ad testificandum, immunity types, or Fifth Amendment invocation mechanics. Sammis covers grand jury witness letters inside its target-letter page rather than a dedicated asset (verified fetch).
- **Best-in-US bar (verified fetch + curl-verified schema):** Oberheiden (federal-lawyer.com), ~8,500-9,000 words: subpoena types, motion-to-quash grounds, act-of-production doctrine, an actual N.D. Tex. subpoena image, embedded TOC, and FAQPage schema with 20 Q/A pairs plus 5 VideoObject entries. **This topic is NOT an open field nationally; it is Oberheiden's moat**, and Oberheiden also ranks #1 on the Florida-scoped query (verified).
- **The gap:** do not fight the national term. The M.D. Fla.-localized variant is graded 6-12mo by W2 (two blog posts in the top 5, no microsite moat on the Florida query). A Tampa/MDFL response guide at 3,000+ words with rule citations beats every local page while conceding the national SERP to Oberheiden (inferred).
- Sources: https://federal-lawyer.com/criminal-law/grand-jury-subpoena/ | https://federal-lawyer.com/florida/grand-jury-subpoena-defense/ | https://www.scrivenlawfirm.com/tampa-grand-jury-lawyer/ | https://www.acquitter.com/federal-crimes/federal-grand-jury-subpoena-defense/ | docs/research/keywords.md

### Topic 4: Florida sentencing guidelines / CPC scoresheet

- **Local verdict: COVERED-THIN** (inferred). Three Tampa-market pages, all fetched: Sammis /statutory-penalties/cpc/ is the best (~2,200 words, cites F.S. 921.0022/921.0023/775.082 and Rule 3.704(d)(26), offense-level table) but was **last updated Feb 4 2022** and gives only a partial lowest-permissible-sentence formula; Buda Law blog (Feb 2024) lists all 10 level point values but no LPS math; Stechschulte ~1,200 words, undated, broken source links. No local page breaks content out by offense level.
- **Best-in-US bar (verified fetch): CORRECTION TO W2's "verified absence" of calculators.** Barklaw (Altamonte Springs FL) hosts a live interactive CPC calculator: charge search, level dropdown, priors, multipliers, dynamic lowest-permissible-sentence output with the (total minus 28) x 0.75 formula, ungated (verified interactive by direct fetch). Aaron Delgado (Daytona) describes an embedded calculator (reported; embed not captured). W2's absence finding holds only for the head-term SERPs W2 observed: the tools exist but are weakly discoverable, neither is Tampa/13th-Circuit-localized, and Barklaw carries only generic Yoast schema, no SoftwareApplication or FAQPage markup (curl-verified).
- **The gap:** still the widest open lane of the eight, restated: a Tampa-localized calculator plus a level-by-level hub (10 level pages + 3 degree pages, updated to the Oct 23 2025 Rule 3.992 scoresheet revision per keywords.md Section 4) beats a dated Sammis page, two thin blogs, and two weakly-distributed out-of-market calculators. Official PDFs (FDLE scoresheet, AG prep manual) occupying mid-SERP confirm informational intent Google cannot currently satisfy with firm content (verified).
- Sources: https://criminaldefenseattorneytampa.com/statutory-penalties/cpc/ | https://budalaw.com/blog/2024/february/florida-criminal-punishment-code-scoresheet/ | https://www.tpatrialattorneys.com/management-of-florida-s-felony-scoresheet/ | https://www.barklaw.com/florida-sentencing-calculator/ | https://www.communitylawfirm.com/blog/florida-felony-sentencing-calculator | docs/research/keywords.md

### Topic 5: Pretrial release and bond in Hillsborough

- **Local verdict: COVERED-WELL, by exactly one firm** (inferred). Sammis's first-appearance page (verified fetch) is the deepest, most current, most locally specific competitor page found in the entire inventory: ~3,500-4,000 words (ESTIMATE), updated May 11 2026, Division O judges, Orient Road/Faulkenburg Road Jail video procedure, hearing times, the uniform bond schedule with dollar amounts, citing Fla.R.Crim.P. 3.131, F.S. 903.046/903.047/907.041 and Administrative Order S-2024-030, inside a nine-sibling emergency-bond silo. Everyone else is moderate or generic (Metcalf Falls ~1,100 words, no citations; Brancato blog post ~2,200 words). Among the client-named three (Rankin, Brunvand, Whittel): zero Hillsborough bond/first-appearance content observed.
- **Best-in-US bar:** Sammis IS the US bar on this topic; its emergency-bond hub (~4,500-5,000 words) outclasses the out-of-market exemplar fetched (Sharp, Houston). Sammis's schema is LegalService + BreadcrumbList only, no FAQPage (curl-verified).
- **The gap:** narrow. Beating Sammis requires matching courthouse-level specificity, not adding another overview, plus what Sammis lacks: FAQPage markup, an on-page bond-schedule table, a Spanish version (conditional on capability), and a Brandon/east-Hillsborough family framing. On the federal side the gap is wide open: no Tampa private firm has a real M.D. Fla. detention-hearing/bond page; the SERP is the Federal Defender and Miami/Ft. Lauderdale solos (W2, verified, graded NOW).
- Sources: https://criminaldefenseattorneytampa.com/emergency-bond-hearings/first-appearance/ | https://criminaldefenseattorneytampa.com/emergency-bond-hearings/ | https://www.hillsboroughdefense.com/first-appearance-in-court/ | https://www.brancatolawfirm.com/blog/understanding-the-criminal-court-process-in-hillsborough-county/ | https://flm.fd.org/bail | docs/research/keywords.md

### Topic 6: Professional license consequences

- **Local verdict: COVERED-WELL by Sammis alone; NOT-COVERED by any of the 7 profiled firms as a dedicated asset** (inferred). Sammis /career-consequences/ (verified fetch): ~2,800-3,000 words covering nurses, teachers, physicians, CDL, pilots, FINRA, military, FRS employees, with an extensive profession-specific subpage silo; weakness is thin statutory citation outside F.S. 1012.796. None of Rankin, Brunvand, Whittel, Scriven, Hanlon, Paulk, or Brancato showed a dedicated professional-license page in topic SERPs.
- **Best-in-US bar:** on the adjacent DUI-administrative side, Sammis again (formal review hearing page, 4,500+ words, case law, county BAR office directory, verified fetch); no strong national exemplar could be verified (Shouse and The Law Place URLs 404'd; gap recorded).
- **The gap:** high-value-client topic (federal/white-collar defendants are disproportionately licensed professionals, inferred) where the profiled competitive set is absent. A licensed-professionals hub tied to the white-collar cluster, with per-board reporting-duty citations Sammis lacks, is a differentiated conversion asset even if Sammis keeps the informational rankings (inferred).
- Sources: https://criminaldefenseattorneytampa.com/career-consequences/ | https://criminaldefenseattorneytampa.com/dui/defenses/formal-review-hearing/ | https://www.tpatrialattorneys.com/protecting-your-florida-professional-license-after-being-charged-with-a-crime/ | https://www.hillsboroughdefense.com/consequence-of-a-conviction/ | docs/research/competitors.md

### Topic 7: Immigration consequences of Florida convictions

- **Local verdict: COVERED-THIN among defense firms** (inferred). Sammis has the only substantive local page (verified fetch: ~3,200 words, updated Jan 2025, strong citations) but with doctrinal holes exactly where a noncitizen defendant needs help: **no Padilla v. Kentucky discussion, minimal CIMT treatment, minimal plea-structuring strategy**. The profiled 7 have essentially nothing (5-domain site-restricted search, verified absence within that search). The SERP is ceded to a West Palm Beach firm, crimmigration boutiques, and pages about defending federal immigration crimes, which is a different intent.
- **Best-in-US bar: OPEN FIELD on firm sites** (verified within queries run). Best fetched firm pages (Thompson Law Advocates, AER Law Group, ~2,100-2,200 words each) also lack Padilla, safe-harbor plea coverage, FAQs, and tables. The authoritative content is the nonprofit ILRC's chart-format practice advisories, a benchmark to model, not a competitor.
- **The gap:** a Padilla-centered, plea-strategy-focused, Florida-statute-specific guide (which FL offenses are CIMTs/aggravated felonies, plea language that avoids removal triggers), modeled on ILRC's chart format, has no observed firm-site rival nationally and no local defense-firm competitor at all. Pairs with the Spanish-language play (~30% Hispanic county, reported via Census QuickFacts snippets per keywords.md Section 6), conditional on firm language capability.
- Sources: https://criminaldefenseattorneytampa.com/career-consequences/immigration-and-criminal-law/ | https://www.tlapc.org/immigration-law/deportation-defense/deportable-crimes/ | https://www.aerlawgroup.com/blog/immigration-consequences-of-a-criminal-conviction/ | https://www.ilrc.org/crimes | docs/research/keywords.md

### Topic 8: Sealing and expungement

- **Local verdict: COVERED-WELL, the most crowded of the eight** (inferred). Sammis's Hillsborough seal/expunge page (verified fetch) is step-by-step deep and updated Mar 2026 (statutes, Rules 3.692-3.694, Admin Order S-2020-014, exact clerk fees, e-portal instructions) inside a county-page silo. Metcalf Falls (~2,400 words) and Paulk (~1,200-1,400 words, omits the FDLE Certificate of Eligibility process entirely) hold moderate dedicated pages; a niche operator (erasethecase.com) and the Hillsborough Clerk's own page hold SERP slots. Scriven/Hanlon/Brunvand treat it as blog filler; one Scriven post contains a likely accuracy error (claims expungement purges the record "from all databases including law enforcement databases," overstating F.S. 943.0585; reported-level for exact wording, seen verbatim in snippet).
- **Best-in-US bar (verified fetch + curl-verified schema):** Erase The Case's Florida guide, ~4,500-5,000 words, 9-step process, itemized costs, 13-question FAQ, free eligibility quiz, and HowTo schema (9 HowToStep entries). Above all firms sits FDLE's official process page (verified).
- **The gap: lowest-opportunity topic of the eight.** Only entry angle if attempted: nobody owns a Brandon/east-Hillsborough framing, and an eligibility-quiz format is unclaimed locally. Recommend deprioritizing; see avoid list.
- Sources: https://criminaldefenseattorneytampa.com/seal-and-expunge-criminal-record/hillsborough-county/ | https://www.hillsboroughdefense.com/expungement-lawyer/ | https://www.tampacriminalattorneys.com/criminal-defense/post-conviction/expungements/ | https://erasethecase.com/florida-expungement-sealing/ | https://www.fdle.state.fl.us/seal-and-expunge-process | https://www.hillsclerk.com/court-services/expungement-and-sealing

### Cross-topic findings

1. **The real content incumbent is Sammis Law Firm, not any of the 7 profiled firms** (inferred from verified fetches). Sammis holds the strongest local page on 6 of 8 topics; its edge is Hillsborough-courthouse-level specificity plus statute citations. Its beatable dimensions: currency (CPC page dated Feb 2022), formatting (no FAQPage/HowTo schema anywhere, curl-verified), by-level granularity (CPC), Padilla/strategy depth (immigration), and Brandon framing. The 7 profiled firms are collectively near-absent from informational/process content; Scriven's 7-page federal cluster (all moderate, uncited, non-localized) is the only exception.
2. **Schema is an under-used differentiator even among the best pages in each niche** (curl-verified on 8 exemplars): only Oberheiden (FAQPage, 20 Q/A) and Erase The Case (HowTo, 9 steps) use content-type structured data; everyone else runs boilerplate. Caveat (inferred): Google has deprecated FAQ rich-result display for most sites since 2023, so the value is entity/eligibility signaling, not guaranteed SERP features.
3. **Opportunity ranking across the 8 topics** (inferred, basis: verdicts above): (1) CPC scoresheet by level + calculator, (2) immigration consequences with Padilla/plea strategy, (3) federal process timeline with M.D. Fla. specifics, (4) professional license consequences, (5) grand jury subpoenas, (6) target letters, (7) Hillsborough bond/first appearance (must out-local Sammis to matter), (8) sealing/expungement (crowded, lowest priority).

---

## 3. THE LIST: 19 Best-in-Market-on-Day-One Pages

Ordered roughly by opportunity x keyword grade. Every W2 grade cited is from keywords.md; every gap claim is sourced in Section 2 or inline. Standing compliance rule for all 19: process/rights/discretion framing, no outcome promises or implied results (R. 4-7.13), no "expert/specialist" absent board certification (R. 4-7.14), attorney byline + dated last-reviewed stamp on every page (E-E-A-T, and the currency weakness observed across competitors).

### A. Sentencing hub (Topic 4)

**1. Florida Criminal Punishment Code Scoresheet, Explained (hub) + Interactive Scoresheet Calculator**
- Captures (W2): "florida criminal punishment code scoresheet calculator" (6-12mo, hub), sentencing-by-felony-level cluster graded 6-12mo overall with level pages "closest to NOW" (keywords.md Section 4).
- Gap exploited: best local page (Sammis CPC) dated Feb 2022 with partial formula; no local calculator; Barklaw/Delgado calculators exist but are Orlando/Daytona-area, weakly discoverable, no content schema (Section 2, Topic 4, verified).
- Exemplar to beat: Barklaw's interactive calculator (functionality) + Sammis's CPC page (citation depth). Beat both by combining them, localizing to the 13th Circuit, and updating to the Oct 23 2025 Rule 3.992 revision.
- Compliance: calculator output must carry a prominent no-legal-advice, no-outcome-guarantee disclaimer (R. 4-7.13); mirror Barklaw's disclaimer posture, which is the compliant model observed.

**2. Offense Level Pages, Levels 1 through 10 (10 spoke pages, one line item)**
- Captures (W2): "level 7 offense Florida scoresheet" and the level-by-level long tail, graded closest to NOW ("when Ocala firms and a bare PDF rank," keywords.md Section 4).
- Gap exploited: no competitor anywhere breaks CPC content out by offense level (Section 2, Topic 4, verified within pages fetched).
- Exemplar to beat: none dedicated; Moses & Rooth's chart page and the Rule 3.992 PDF are the current answers.
- Compliance: point values and common-offense lists must be verified against the current F.S. 921.0022 table before publish; each page states its statute revision date.

**3. Minimum and Maximum Sentences for a Third Degree Felony in Florida (degree-page entry, plus 2nd/1st degree siblings)**
- Captures (W2): "what is the minimum sentence for a third degree felony in Florida (first offense)" (6-12mo).
- Gap exploited: current rankers are a mass publisher (LegalClarity) and small-firm blogs; two Tampa firms rank, confirming volume, but none connects the answer to the scoresheet math (keywords.md, verified SERP).
- Exemplar to beat: Buda Law's Aug 2024 blog post. Beat with the under-44-points probation answer wired into the calculator and hub.
- Compliance: no "you will get probation" phrasing; frame as what the code permits, judicial discretion controls.

### B. Federal pre-indictment cluster (Topics 1-3)

**4. Charged or Under Investigation in the Middle District of Florida: The Tampa Division Guide (federal hub)**
- Captures (W2): "Middle District of Florida federal criminal defense attorney" (NOW; "no Tampa private firm holds a dedicated district page").
- Gap exploited: SERP starved of commercial competition; Wikipedia and flm.fd.org rank (keywords.md, verified). Anchors topical authority for every other federal page.
- Exemplar to beat: thefederalcriminalattorneys.com's aggregator district page (403'd, unassessed; treat as unknown, not weak). Build with judges, courthouse logistics, division map, CJA vs retained.
- Compliance: factual court information only; no implication of special influence or relationships with the court (R. 4-7.13).

**5. The Federal Criminal Process in the Middle District of Florida: Timeline from Investigation to Sentencing**
- Captures (W2): "how long does a federal indictment take" (NOW, "a raw PDF ranking near #1 signals Google lacks a good answer"), "federal indictment lawyer Tampa" (6-12mo).
- Gap exploited: only local timeline is Scriven's, uncited and non-localized (Topic 1, verified). National ceiling is plain text with no visual timeline anywhere observed (US exemplar survey, verified within queries run).
- Exemplar to beat: National Security Law Firm's 9-stage guide. Beat with M.D. Fla. specifics, statute/rule citations, Speedy Trial Act clock, and a visual timeline.
- Compliance: describe typical process, never predict a specific client's timeline or outcome.

**6. Federal Target Letters: Annotated Sample and What to Do (M.D. Fla.)**
- Captures (W2): "federal target letter attorney" localized (6-12mo, "the single best asymmetric play in this cluster"), "what happens after a federal target letter" localized (6-12mo).
- Gap exploited: every local page moderate, no Federal Rules citations (Topic 2, verified); no annotated sample letter observed anywhere in the US field (US exemplar survey, verified within queries run).
- Exemplar to beat: Evergreen Attorneys (~2,000-2,200 words). Beat with the annotated DOJ sample letter, JM 9-11.151 walkthrough, subject/target/witness strategy, and Tampa AUSA procedure.
- Compliance: highest-sensitivity pre-charge audience; pure process/rights framing, explicit "contact counsel before responding" guidance, no urgency-scare copy (do NOT model Evergreen's "last best chance" framing, OBSERVED-NOT-RECOMMENDED).

**7. Served with a Federal Grand Jury Subpoena in the Middle District of Florida**
- Captures (W2): "federal grand jury subpoena lawyer Florida" (6-12mo, "softest true SERP in the cluster after target letters"), "witness vs subject vs target" (6-12mo).
- Gap exploited: no local page covers duces tecum vs ad testificandum, immunity types, or Fifth Amendment mechanics (Topic 3, inferred from fetches and SERPs); concede the national term to Oberheiden.
- Exemplar to beat (locally): Scriven's grand-jury page (unfetched; assume moderate parity with his other pages, inferred). National reference bar: Oberheiden's ~8,500-word page; match its structure at MDFL scope, not its scale.
- Compliance: do not copy Oberheiden's "2,000+ Cases Won" aggregate-results claim or media-logo wall (unsubstantiated under R. 4-7.13, OBSERVED-NOT-RECOMMENDED).

**8. Proffer Agreements ("Queen for a Day"): What They Are and the Risks**
- Captures (W2): "what is a proffer agreement and should I take one" (6-12mo, zero Florida firms observed).
- Gap exploited: no FL incumbent; pairs with pages 6-7 as the pre-indictment cluster; Mayberry's combined page is the only local adjacent asset (Topic 3 sources, verified).
- Exemplar to beat: caudill.legal's question-matched page.
- Compliance: emphasize this is a decision made with counsel; no generic "take/do not take" advice.

**9. Federal Detention Hearings and Pretrial Release in the M.D. Fla. Tampa Division**
- Captures (W2): "federal bond / pretrial release Middle District of Florida how it works" (NOW, "no Tampa private firm has a real page"; highest-urgency conversion moment in the federal funnel).
- Gap exploited: SERP is the Federal Defender, court sites, and Miami/Ft. Lauderdale solos (Topic 5, verified).
- Exemplar to beat: flm.fd.org/bail (institutional); no private-firm bar exists locally. Cover 18 U.S.C. 3142 factors, presumption cases, the Tampa magistrate calendar.
- Compliance: no release-likelihood promises; factual procedure only.

**10. FBI or HSI Agents Contacted You in Tampa: Your Rights Before You Say Anything**
- Captures (W2): "what to do when the FBI wants to talk to you / shows up at your door" (6-12mo, no FL incumbent; fbi.gov ranking means firm coverage is beatable).
- Gap exploited: localizes an otherwise national SERP and cross-links the whole federal cluster (keywords.md, verified SERP).
- Exemplar to beat: Oberheiden's FBI-interview page.
- Compliance: rights-education framing (right to counsel, right to decline interview); never advise obstruction-adjacent conduct; keep tone calm, not fear-marketing.

**11. Federal Agents Seized Your Phone or Computer: Rule 41(g) and Getting Property Back**
- Captures (W2): "federal agents seized my phone, how long until I get it back" (NOW, verified thin SERP with JustAnswer and an academic blog ranking).
- Gap exploited: no Florida firm observed; top-of-funnel moment for device-based federal cases (keywords.md, verified).
- Exemplar to beat: Burnham & Gorokhov / Eisner Gorin text pages (latter unassessed, 403).
- Compliance: discretion-first framing suitable for sensitive device cases; no assumptions about the underlying investigation in copy.

**12. Felon in Possession Under 18 U.S.C. 922(g): Federal Gun Charges in Tampa**
- Captures (W2): "felon in possession of a firearm federal charge how much time" (6-12mo, no FL competitor), "gun charge lawyer Tampa / weapons offense attorney" (6-12mo).
- Gap exploited: guideline-level detail (base offense levels 12-26, ACCA) is the observed bar and no Florida firm competes; the W2 state gun page and this federal page split state (790-series/10-20-Life) from federal exposure, the structure no local competitor uses (keywords.md, verified SERPs).
- Exemplar to beat: egattorneys.com (CA).
- Compliance: sentencing figures must cite USSG/USSC sources with dates; no predicted sentences.

**13. Federal Drug Conspiracy (21 U.S.C. 846) Defense in Tampa**
- Captures (W2): "federal drug conspiracy lawyer Tampa" (6-12mo; a Missouri firm's programmatic city page ranks #1, "clear softness signal").
- Gap exploited: incumbents are an out-of-state doorway page and standard local practice pages (keywords.md, verified). Cover co-conspirator liability, drug-weight attribution, safety valve, 851 enhancements.
- Exemplar to beat: Combs Waterkotte's Tampa page (thin programmatic; beatable on genuine locality and depth, inferred).
- Compliance: H&M's real local presence makes the geo page honest; do not replicate doorway-page networks (R. 4-7.13 misleading-geography risk noted in W2).

### C. State process and collateral-consequences cluster (Topics 5-7)

**14. First Appearance and Bond in Hillsborough County: Orient Road, Video Court, and the Bond Schedule (Brandon/East Hillsborough framing)**
- Captures (W2): "first appearance Hillsborough County what to expect" (6-12mo, "the single best state-felony conversion query in the county").
- Gap exploited: narrow but real; Sammis is deep and current, so this page wins only by matching courthouse specificity and adding what Sammis lacks: on-page bond-schedule table, FAQPage markup, Brandon/Plant City courthouse angle, Spanish version if capability confirmed (Topic 5, verified).
- Exemplar to beat: Sammis /emergency-bond-hearings/first-appearance/ (updated May 11 2026), the deepest competitor page in the entire inventory.
- Compliance: bond amounts and Administrative Order S-2024-030 details must be independently verified against the current order before publish (amounts here are reported via Sammis's page, not primary-source-verified); a wrong dollar figure on a page families read at 2am is both a trust and accuracy failure.

**15. Violation of Probation in Hillsborough County: No-Bond Warrants and VOP Hearings**
- Captures (W2): "violation of probation Florida, what happens at a VOP hearing" (6-12mo; Hillsborough-localized variant NOW).
- Gap exploited: only lighter-weight Tampa coverage exists (Matassini; keywords.md, verified); high-frequency, urgent-intent case type.
- Exemplar to beat: Hornsby's VOP page (Orlando).
- Compliance: hearsay/preponderance/no-bond facts cited to statute and rule; no outcome framing.

**16. Pretrial Intervention and Diversion in the 13th Circuit: Who Qualifies**
- Captures (W2): "pretrial intervention (PTI) Hillsborough County, who qualifies" (NOW; Broward SAO ranking for a Hillsborough query shows Google lacks county-specific supply).
- Gap exploited: only two real incumbents (Sammis, Metcalf Falls), one of them a 2020 post (keywords.md, verified). Include the pre-file vs post-file distinction and RIC.
- Exemplar to beat: Sammis's PTI page.
- Compliance: eligibility described as prosecutor discretion, never promised; ties into page 17's diversion warning.

**17. Criminal Charges and Your Professional License in Florida (licensed-professionals hub)**
- Captures (W2): no dedicated W2 head term; supports and converts the white-collar cluster: "white collar criminal defense attorney Tampa" (6-12mo), "healthcare fraud attorney Tampa" (6-12mo, conditional), "under investigation for healthcare fraud, what should a provider do" (6-12mo). Mapping is audience-based, not query-graded (honest label: this page's own query space was inventoried in W3, not graded in W2).
- Gap exploited: none of the 7 profiled firms has a dedicated page; Sammis's hub is strong but citation-thin outside F.S. 1012.796 (Topic 6, verified). Beat with per-board reporting-duty citations (DOH/AHCA, DBPR, FINRA, FDLE-CJSTC) and the diversion-before-understanding-collateral-consequences warning.
- Exemplar to beat: Sammis /career-consequences/.
- Compliance: no promise of license preservation; coordinate-with-licensing-counsel framing.

**18. Immigration Consequences of Florida Criminal Charges: Padilla, CIMTs, and Plea Strategy (English, plus Spanish version conditional on firm capability)**
- Captures (W2): no directly graded W2 keyword (honest label); supported by W2 Section 6 Spanish-demand evidence (~30% Hispanic county, reported; contested but real Spanish SERP) and by this pass's verified open field: no local defense firm and no observed US firm covers Padilla plus safe-harbor plea structuring (Topic 7, verified within queries run).
- Gap exploited: Sammis's only-in-market page omits Padilla, CIMT depth, and plea strategy, the three things a noncitizen defendant most needs (verified fetch).
- Exemplar to beat: ILRC's chart-format advisories (nonprofit benchmark, not a competitor); Sammis locally.
- Compliance: the Spanish version ships ONLY if genuine Spanish capability exists at the firm ("se habla espanol" without capability is a R. 4-7.13 misleading-communication risk per keywords.md Section 6); immigration advice framing must direct readers to immigration counsel coordination, consistent with Padilla duties.

**19. Sealing or Expunging a Criminal Record in Hillsborough County (Brandon-framed, deprioritized)**
- Captures (W2): "can you seal or expunge a felony arrest in Florida" (6-12mo; Hillsborough service page closer to NOW).
- Gap exploited: smallest of the list; included because it captures post-case clients and leads whose real problem is an open case (keywords.md, verified). Only angles: Brandon/east-Hillsborough framing and an eligibility-quiz format, both unclaimed locally (Topic 8, inferred).
- Exemplar to beat: Sammis's Hillsborough page (Mar 2026) and Erase The Case's statewide guide (HowTo schema, quiz). Realistically, match rather than beat on day one; build last.
- Compliance: state accurately that FDLE retains a nonpublic copy after expungement; do NOT replicate Scriven's "purged from all databases" overstatement (accuracy flag, Topic 8) or Erase The Case's speed-comparison claims ("3-5 months vs industry 5-7," unvetted under R. 4-7.13, OBSERVED-NOT-RECOMMENDED).

**Build-order note (inferred):** items 1-3 (sentencing hub) and 4-5 (federal hub + timeline) first, since they combine NOW-graded keywords with the two widest verified gaps; then 6-9 (pre-indictment cluster, highest case-value per visit); then 10-13; then 14-18; 19 last. Every page carries attorney byline, last-reviewed date, statute citations, FAQ block, and appropriate schema (FAQPage/HowTo/SoftwareApplication where applicable), the under-used differentiators verified in the cross-topic schema audit.

---

## 4. Done Criteria

| Criterion | Status | Note |
|---|---|---|
| Full question space compared: all 8 topic areas analyzed, local coverage verdict vs best-in-US bar | MET | Section 2 covers all 8 topics, each with a labeled local verdict (COVERED-THIN / COVERED-WELL / open-field variants), a fetched-and-graded best-in-US exemplar, and the exploitable gap. Caveats recorded where pages could not be fetched (Brunvand and Eisner Gorin 403s, Scriven grand-jury page unfetched, Whittel inferred from search absence, not a crawl). |
| 15-20 pages specified | MET | 19 line items in Section 3 (item 2 bundles the 10 offense-level spokes as one item; counted as one). Each has a working title. |
| Every page mapped to W2 keywords with grades cited | MET, with two honest exceptions | 17 of 19 map directly to graded keywords.md terms with grades quoted (NOW / 6-12mo). Items 17 and 18 have no directly graded W2 keyword; both are explicitly labeled as audience-based/W3-evidence-based mappings rather than silently attached to unrelated grades. |
| Every gap claim sourced | MET | Every Section 2 verdict carries source URLs and confidence labels; every Section 3 item cites its gap back to Section 2, keywords.md, or an inline source. Word counts labeled ESTIMATE (fetch summarizer basis) throughout. |
| Confidence labels used (verified / reported / inferred / ESTIMATE) | MET | Labels applied per claim; the W2-correction on calculator existence (Topic 4) is explicitly marked verified with the scope of W2's original absence claim preserved; the Scriven accuracy flag is marked reported for exact wording. |
| No em dashes; method and limitations up front; DONE-CRITERIA honest | MET | File uses commas, periods, and double hyphens only; Section 1 states method and six systematic limitations; this table flags the two partial keyword mappings rather than dropping the criterion. |

**Standing caveats for the dossier (W8):** (1) no Tampa-geolocated SERP or local pack was observable for any query in W1-W3; (2) the Hillsborough bond schedule and Administrative Order S-2024-030 amounts must be primary-source-verified before page 14 publishes; (3) Eisner Gorin's federal pages remain unassessed (403) and could raise the national bar on topics 1, 3, and 9 above what is recorded here.
