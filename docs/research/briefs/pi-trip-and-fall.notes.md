# trip-and-fall: build notes

Page: /personal-injury/trip-and-fall (pillar, no parent). Entry was inserted after `delivery-and-box-truck` in the worktree's `injuryPages`. The three new READ-WHOLE records were appended to the worktree's PAGE-SOURCES.md. Both changes were reverted after the checks ran.

## Checks

The baseline was run before the insert, with no trip-and-fall page. Every check passed.

The same checks were run with the page and the records in place:

| Check | Result |
|---|---|
| `npx tsc --noEmit -p .` | pass |
| `npm run -s check:injury` | pass (`ok /personal-injury/trip-and-fall`, 10 of 10 on the standard) |
| `npm run -s check:pages` | pass |
| `npm run -s check:claims` | pass |
| `npm run -s check:unverified` | pass |
| `npm run -s check:provenance` | pass (no G2, G3 or G4 hits) |
| `npm run -s check:readability` | pass |
| `npm run -s check:routes` | pass (it did not flag the sibling links `/personal-injury/slip-and-fall` and `/personal-injury/wrongful-death`; the brief expected it might) |
| `npm run -s check:search-map` | pass |

Measured with the repo's own `score()` over `bodyCopy`:
- Page: grade 5.55, average sentence 13.6 words.
- Hardest section: `trespassers` at 8.21 (the limit is 9.5).
- metaTitle: 54 characters, so it takes the firm-name form.
- metaDescription: 142 characters.

All four section links go to pages that are live or being written now: `/personal-injury/slip-and-fall`, `/contact`, `/personal-injury/car-accidents` and `/personal-injury/wrongful-death`. Every statute.body quote was checked by script and is verbatim in the extracted record, with `[...]` marking where a quote was cut.

What I did NOT run:
- check:seo (P6 and P7, shared-text percentage). It is postbuild and needs `next build`. The page reuses no Tier 3 headings or labels from the car or truck pages, and it does not quote 768.81(6) or Chapter 2023-15 s.28, which the car page already quotes. The fault bar and the time limit are short summaries in new wording.
- No `src/lib/search-map.ts` row was added. check:search-map passed without one. If the search map should name this page's primary query, that row is still to be written.
- No `owner` or `lastReviewed`. The car and truck pillars do not carry them.

## Sources fetched (new records, in trip-and-fall.sources.md)

- **F.S. 768.28**: 59 passages. The 2026 Florida Statutes page for 768.28 was also fetched the same day and extracted the same way. Its body and History are identical to the 2025 text, so the 2026 session made no amendment.
- **F.S. 768.76**: 15 passages.
- **F.S. 768.075**: 9 passages.

Existing records reused: F.S. 95.11, Chapter 2023-15 s.28, F.S. 768.81, F.S. 768.19, F.S. 768.21.

768.28 has no 2023 accrual split. Its History does not carry ch. 2023-15. Its only applicability clause is (17), which covers causes of action accruing on or after October 1, 1981. So the 3-year notice and the 4-year suit limit apply whenever the claim arose. The page says so ("These come from the law on claims against government bodies, not the general time limit.").

## Every legal statement, mapped to its source

**Lead**
- "A city, county or State agency answers only after a written claim": 768.28(6)(a).
- "Florida caps what it pays": 768.28(5)(a).

**Who pays. (ladder)**
- Private card, "Each pays only its own share of fault": 768.81(3).
- Public card: "city, county or State agency" is 768.28(2). "must present a written claim before you can sue" is 768.28(6)(a). "$200,000 to one person, or $300,000 in total for all claims from the same incident" is 768.28(5)(a).
- Above the cap card: "judgment for more than the cap; the part above it can be paid only by a further act of the Legislature" is 768.28(5)(a). The term "claims bill" is from 768.28(16)(a). "may agree to settle within that coverage without the Legislature" is 768.28(5)(a), fourth sentence.
- Health card, "right to be paid back can be repaid from what you later recover": 768.76(4).
- Health card, "waives that right if it does not assert it within 30 days of getting your written notice": 768.76(7).
- Prose, "more than 50 percent at fault ... recover nothing": 768.81(6). Applying it to a government body rests on 768.28(5)(a): liable "in the same manner and to the same extent as a private individual".

**What happens next. (timeline)**
- Two years after 24 March 2023, four years on or before: 95.11(5)(a) and Ch. 2023-15 s.28. The prior four-year period comes from the existing 95.11 and 2023-15 record notes.
- Within 3 years, written claim to the agency, plus DFS unless city or county: 768.28(6)(a). "Generally" covers the Florida Space Authority exception, which the page does not name.
- 6 months with no final disposition is treated as a denial, and no suit before denial: 768.28(6)(a) and (6)(d).
- Within 4 years, suit against a government body: 768.28(14).

**What to do right now.**
- Fault bar: 768.81(6).
- Written claim, then up to 6 months before suit: 768.28(6)(a) and (6)(d).
- Health plan repayment letters: 768.76(6) and (7).
- The photo, witness and medical-care advice is practical, not legal.

**Who owned the spot where I tripped?**
- A separate law, a written claim first, caps and its own time limits: 768.28(1), (2), (5)(a), (6)(a) and (14). The section's `sources` list only (1), (2) and (6)(a). The caps and the time limits are cited in the topics that state them in full.

**What if a city or county owns the sidewalk?**
- "liable much as a private person would be, within limits the law sets": 768.28(5)(a).
- The written claim to the agency, and to DFS unless city or county, within 3 years: 768.28(6)(a).
- Date and place of birth, SSN, and unpaid adjudicated fines, fees or judgments over $200 (or a statement that there are none): 768.28(6)(c).
- Due before settlement payment, close of discovery or trial, whichever is sooner: 768.28(6)(d).
- Suit after written denial, or a deemed denial after 6 months: 768.28(6)(a) and (6)(d).
- Statute quote: 768.28(6)(a), opening clause through "denies the claim in writing;", then [...].

**How much can a city, county or the State pay?**
- $200,000 and $300,000, no punitive damages, no pre-judgment interest, a judgment above the caps paid only by further act, and settlement within insurance: 768.28(5)(a).
- The worker is not personally liable unless bad faith, malicious purpose, or wanton and willful disregard of human rights, safety, or property. The claim goes against the government body: 768.28(9)(a).
- Statute quote: 768.28(5)(a), first three sentences.

**How long do I have after a trip and fall?**
- Private two or four years: 95.11(5)(a) and 2023-15 s.28.
- Government 3-year written claim: 768.28(6)(a).
- Government 4-year suit: 768.28(14).
- Up to 6 months to decide: 768.28(6)(d).
- Statute quote: 768.28(14), through "within 4 years after such claim accrues;", then [...]. The cut leaves out the contribution, medical malpractice and wrongful death exceptions. The death exception is stated in the death topic.

**What if they say I should have watched my step?**
- Fault reduces recovery: 768.81(2).
- More than 50 percent recovers nothing: 768.81(6).

**Does it matter why I was on the property?**
- Owner not liable to trespassers except as (3) provides: 768.075(2).
- Undiscovered trespasser: the owner must only refrain from intentional misconduct. Discovered (detected within 24 hours before): also refrain from gross negligence and warn of known dangers not readily observable: 768.075(3)(a)2., 3. and (3)(b).
- Attractive nuisance doctrine not altered: 768.075(3)(c).
- Invitation means an objectively reasonable belief of being invited or welcome on that portion. No elevation to invitee without an express invitation or a clear intent to hold the property open: 768.075(3)(a)1. and 2.
- Statute quote: 768.075(3)(a)1.

**Who pays my medical bills while the claim is open?**
- Health insurance is a collateral source, and Medicare, Medicaid and workers' compensation are excluded from the term: 768.76(2)(a) and (b).
- Repayment limited to the amount actually recovered, minus a pro rata share of costs and fees: 768.76(4).
- Notice by certified or registered mail: 768.76(6).
- 30 days, then waiver: 768.76(7).
- Statute quote: 768.76(7), whole.

**What if the fall killed someone?**
- Wrongful death is a separate claim: 768.19 and 768.21.
- Two-year limit: 95.11(5)(e).
- 2-year written claim to DFS: 768.28(6)(a)2.
- 90-day deemed denial and tolling while the agency decides: 768.28(6)(d).
- Suit under the 95.11(5) limits: 768.28(14).
- Statute quote: 768.28(6)(a)2.

**FAQ** (all `source: "drafted"`)
- Suing the city: 768.28(5)(a) and (6)(a).
- How long: 95.11(5)(a), 2023-15 s.28, 768.28(6)(a) and (14).
- Phone or fault: 768.81(2) and (6).
- Health plan repayment: 768.76(4) and (7).
- The city worker: 768.28(9)(a).

## Left out because I could not source it, or it belongs elsewhere

- **Wet-floor and spill slips (768.0755).** Not fetched, per the brief. The page only points to /personal-injury/slip-and-fall and makes no claim about the rule there.
- **Common-law premises duties.** The duty owed to an invitee or licensee, the "open and obvious" doctrine, and notice of a dangerous condition all come from case law with no statute. The page never says what an owner owes an invited guest. It only says trespassers are owed less.
- **What 768.76(1) does.** It reduces an award by collateral sources. That only applies "in any action to which this part applies", and the scope section is not recorded, so the page leaves it out.
- **How Medicare, Medicaid and workers' compensation get paid back** (federal law, 409.910, 440.39). Not fetched. The page says only that these are not covered by 768.76's steps and to ask a lawyer.
- **768.075(1) and (4)** (impaired trespassers and people committing a felony). Recorded, but left off the page as edge cases.
- **The 25 percent fee cap in 768.28(8).** Recorded but left off, to keep fees off the page (no fee promises). This one is for the attorney to decide.
- **Who owns a given road or sidewalk** (FDOT state roads, county or city maintenance). Unsourced, so the page says only that ownership can be unclear and to settle it early.
- **Falls at work** (workers' compensation exclusivity). Not fetched and not mentioned.
- **When the clock starts** (accrual, discovery or tolling, apart from the 768.28(6)(d) death tolling). The page says the start can be disputed.
- **Evidence rules on later repairs.** Not stated.

## For attorney review

1. **768.28(14)'s 4 years against 95.11(5)(a)'s 2 years.** The page tells readers they have 4 years to sue a city, county or State agency for negligence whenever the claim arose, and that the 2023 cut to two years did not reach this. That is the plain text of (14), whose History does not carry ch. 2023-15. Please confirm there is no case law or later act that applies 95.11(5)(a) instead.
2. **A city or county wrongful death claim and DFS.** (6)(a)2. says a wrongful death claim must go to DFS within 2 years. The main clause excuses city and county claims from going to DFS. The page says "must reach the State's Department of Financial Services within 2 years", following the subparagraph's words. Please confirm how this applies when the defendant is a city or county.
3. **The 6-month wait is treated as an absolute bar to an earlier suit.** The page says "You may not sue until it is denied in writing or this time runs out." Please confirm, including whether a written denial before 6 months opens the courthouse.
4. **The timing of the (6)(c) disclosures.** The page reads (6)(d) as the deadline: before settlement payment, close of discovery or trial, whichever is sooner. It does not say the notice itself must contain them. Please confirm the firm's practice is not to say otherwise.
5. **The caps are the 2025 and 2026 statutory figures: $200,000 and $300,000.** They are unchanged as of the 2026 Florida Statutes fetched 2026-11-19. Please re-check before publishing if any 2026 or later session law takes effect after that compilation.
6. **The trespasser paraphrase** ("did not know was there" for undiscovered, "knew was there in the 24 hours before" for discovered). This simplifies the 24-hour detection and reliable-source definitions in (3)(a)2. and 3.
7. **The health plan card's "waives that right" wording.** This assumes the claimant's notice followed (6), including the required waiver statement. The page mentions certified or registered mail but not the required statement.
8. **Whether to state the 25 percent fee cap on government claims (768.28(8)).** It is left out.
9. **The "A common reply to a trip and fall claim is that you should have seen the hazard" sentence and the photo advice.** These are practical framing, not law. Please confirm the firm is comfortable with them.
