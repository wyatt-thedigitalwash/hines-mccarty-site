# /personal-injury/motorcycle-accidents: build notes

Pillar (no `parent`). H1 "Hurt in a motorcycle accident in Tampa?". metaTitle
"Motorcycle Accident Lawyer in Tampa | Hines McCarty Pavlidis" (60 characters).
metaDescription 155 characters, names Tampa. `published: true`. No `owner` or
`lastReviewed`, because no other injury entry has them.

Insert the entry after the `delivery-and-box-truck` entry in `injuryPages`
(the last truck spoke), before the closing `];`.

## Checks run (in the worktree, entry and records inserted)

Baseline before inserting: all seven passed.

| Check | Result |
|---|---|
| `npx tsc --noEmit -p .` | pass |
| `npm run -s check:injury` | pass (`ok /personal-injury/motorcycle-accidents`). The first run failed I6 once: "The driver may" matched the third-person-reader pattern. Fixed ("That driver may have..."). |
| `npm run -s check:pages` | pass |
| `npm run -s check:claims` | pass |
| `npm run -s check:unverified` | pass |
| `npm run -s check:provenance` | pass. The page is audited (52 surfaces, 30 new citations). The new READ-WHOLE markers are in force: fs 316.003, 316.209, 316.211, 627.732, 627.733. |
| `npm run -s check:readability` | pass |
| `npm run -s check:routes` (extra) | pass. Two section links go to sibling pages that are not in this worktree yet: /personal-injury/brain-injuries and /personal-injury/wrongful-death. The route gate resolves them through the dynamic `[...injury]` route, so it did not flag them. They will 404 until those pages land. |

My own measurement, using the repo's `score()` and the P7 method run on `injuryCopy`
(scratch script, not a repo check). Page grade 6.4. Average sentence 14.2 words.
The highest section is um-owned-vehicle at 8.8 (limit 9.5). Unique 8-word runs: 97.7%.
The largest overlap with any page is car-accidents at 2.7% (limit 30%).
`check:seo` was not run because it needs a build.

Not done, outside this deliverable. The standard (section 9) wants one row in
`src/lib/search-map.ts` for this page. It is not written. `check:search-map` will
want it once the page is merged.

Worktree dependency. The worktree's PAGE-SOURCES.md had no F.S. 627.737 record. The
main checkout has one (READ-WHOLE, fetched 2026-11-19, added for D163). I copied that
record into the worktree only so the checks could run, and left it out of
motorcycle-accidents.sources.md because it already exists. As a test, provenance also
passed with the record removed.

## New records (motorcycle-accidents.sources.md)

All are READ-WHOLE. All were fetched 2026-11-19 from flsenate.gov/Laws/Statutes/2025.
Each section body was cut from the SectionBody div to the History div by a script,
not retyped.

- F.S. 627.732 Definitions (no-fault law), 30 passages
- F.S. 627.733 Required security, 8 passages
- F.S. 316.003 Definitions (traffic code), 173 passages
- F.S. 316.211 Equipment for motorcycle and moped riders, 8 passages
- F.S. 316.209 Operating motorcycles on roadways laned for traffic, 6 passages

Reused existing records: 95.11, Chapter 2023-15 s.28, 768.81, 627.736, 627.727,
627.737 (main checkout), 768.19, 768.21.

## Every legal statement and its source

| Where | Statement (paraphrased) | Source |
|---|---|---|
| lead, who-pays prose, FAQ 1 | PIP generally does not pay a rider hurt while riding. The no-fault law is built around vehicles with four or more wheels. | 627.732(3); 627.736(1) ("persons operating the insured motor vehicle ... other persons struck by the motor vehicle ... while not an occupant of a self-propelled vehicle"); 627.736(4)(e)1, 3, 4 |
| who-pays card 1, pip-not-required | Florida's no-fault law does not make you carry PIP on a motorcycle. | 627.733(1)(a) (duty on owners of a "motor vehicle"), read with 627.732(3) |
| who-pays card 1 note, helmet-rule, FAQ 2 | Over 21, you may ride without a helmet if covered by a policy with at least $10,000 in medical benefits for motorcycle crash injuries. | 316.211(3)(b) |
| who-pays card 2 | Claim against the driver at fault for what you lost: medical bills, lost pay, other harm. | 768.81(1)(b) (economic damages definition) |
| who-pays card 2 note, do-now 4, rider-fault-share, FAQ 3 | Your share of fault cuts the recovery. More than 50 percent of the fault for your own harm, and you recover nothing. | 768.81(2), 768.81(6) |
| who-pays card 3, um-for-riders, FAQ 4 | UM pays when the driver has no coverage, or less than you lost, up to your limit. | 627.727(1), 627.727(3)(b) |
| um-for-riders | A policy with bodily injury liability coverage must generally include UM at the same limits, unless a named insured rejected it in writing or chose a lower limit. | 627.727(1), 627.727(2) |
| who-pays card 3 note, do-now 1, um-owned-vehicle, FAQ 4 | A policy form insurers may offer: UM does not apply to the named insured or household family while occupying a vehicle they own on which no UM was bought. It applies only if accepted. A signed form is conclusive proof of acceptance. The form is lower-priced. | 627.727(8)(d), and the unnumbered paragraph closing 627.727(8) (signed form "conclusively presumed"; a rate reduction of at least 20 percent) |
| timeline step 1, do-now 2 | Before a settlement with the liability insurer that leaves a UIM claim, written notice by certified or registered mail goes to each UIM insurer. It has 30 days to approve, or to pay the offer amount and keep its subrogation rights. If it approves or does not respond in time, you may finish the deal without prejudice to the UIM claim. | 627.727(6)(a), 627.727(6)(b) |
| timeline steps 2 and 3, rider-time-limit, FAQ 5 | Two years for a negligence claim that arose after 24 March 2023. Four years if it arose on or before that date. The test is when the claim arose, not when you file. | 95.11(5)(a); Chapter 2023-15, s.28 |
| pip-and-riders | The no-fault law's "motor vehicle" has four or more wheels and is designed and required to be licensed for Florida highways. | 627.732(3) (quoted) |
| pip-and-riders | Under the traffic code, a motorcycle is designed to travel on not more than three wheels. | 316.003(47) |
| pip-and-riders | PIP pays when you are in such a vehicle, or can pay when one hits you while you are not in a self-propelled vehicle. A rider is neither, so PIP generally does not pay, even if you have it on a car. | 627.736(1); 627.736(4)(e)1 ("while occupying a motor vehicle, or while not an occupant of a self-propelled vehicle if the injury is caused by physical contact with a motor vehicle") |
| helmet-rule | No riding without a fastened helmet meeting the federal standard. The operator must wear approved eye protection. | 316.211(1), 316.211(2) |
| helmet-rule, FAQ 2 | Exceptions: inside an enclosed cab; riders 16 or older on low-powered motorcycles that cannot exceed 30 mph on level ground. | 316.211(3)(a) |
| helmet-rule, FAQ 2 | A violation is a noncriminal traffic infraction. | 316.211(7) |
| helmet-and-fault, FAQ 3 | The helmet rule itself does not say what happens to an injury claim. | 316.211, read whole (nothing in it addresses civil claims) |
| helmet-and-fault, FAQ 3 | What an insurer MAY ARGUE: a helmet would have prevented or lessened a head injury, so your fault share should cut the award. | Phrased only as an argument. The reduction mechanism is 768.81(2). No consequence is asserted. |
| lane-rules | Every motorcycle is entitled to the full use of a lane, and no motor vehicle may deprive it of that. This does not apply to motorcycles two abreast. | 316.209(1) |
| lane-rules | No riding between lanes or rows of vehicles. No passing in the same lane as the vehicle being overtaken. No more than two abreast in one lane. | 316.209(3), (2), (4) |
| pain-and-suffering | Pain and suffering in some crash claims is limited to four kinds of injury, listed. | 627.737(2)(a)-(d) |
| pain-and-suffering | Your UM insurer does not owe pain and suffering unless the injury is one of those kinds. | 627.727(7) (quoted) |
| rider-death | A death claim is a wrongful death claim. The law sets who may recover, and for what, by survivor. | 768.19, 768.21 |

Statute quotes on the page, all verbatim whole record lines: 627.732(3),
627.727(8)(d), 316.211(3)(b), 627.727(7). None contains an em dash. The quote of
627.727(7) cites "s. 627.737(2)", which is recorded.

## What I chose not to say, because I could not source it

- **Whether the pain and suffering limit in 627.737(2) applies to a rider's claim against the at-fault driver.** On its face, (2) applies to "a plaintiff" in any tort action against the owner or operator of a vehicle with PIP security. That would seem to include a rider. Many Florida firms say riders are not bound by the threshold, because they get no PIP benefits. That rests on case law I could not fetch. The page states only that the limit exists and that it binds UM claims, a direct statutory statement. It sends the reader to a lawyer on the driver-claim question.
- **Whether a motorcycle policy must include UM.** 627.727(1) speaks of a "motor vehicle liability insurance policy" for a "specifically insured or identified motor vehicle". "Motor vehicle" is not defined for 627.727, because it sits outside the no-fault definitions range. The page tells the reader to check their motorcycle policy and does not claim the requirement applies to it.
- **Any legal consequence of not wearing a helmet** (a reduction of damages, a jury instruction, a seat-belt-style statutory defense). None is in 316.211. Each is phrased as what an insurer may argue.
- **That most Florida drivers are not required to carry bodily injury liability coverage.** The car page says so citing 627.727(1), but the requirement itself lives in chapter 324, which is not recorded. This page says only that the driver "may have little or no coverage".
- **Motorcycle medical payments coverage, and the ch. 324 financial responsibility rules for motorcycles.** Not recorded. The page says only "whatever coverage you bought".
- **Hit-and-run and the unidentified driver.** UM coverage for an unidentified vehicle is not in the recorded 627.727 text, so it is omitted.
- **Medical facts** (that riders often suffer head injuries, or that brain injuries appear late). Not stated.
- **Wrongful death time limits and who brings the claim** (personal representative, 768.20). Not stated. The page links to the wrongful death page.

## For attorney review

1. **PIP and riders.** The page says PIP "generally does not pay" a rider hurt while riding, even one with PIP on a car. This rests on 627.732(3) (four or more wheels), 627.736(1) and (4)(e) (occupying a motor vehicle, or not an occupant of a self-propelled vehicle), and 316.003(47). "Self-propelled vehicle" is not defined in the no-fault law, and treating a motorcycle as one is a reading. Please confirm, including for passengers and autocycles.
2. **The 627.737(2) threshold on a rider's claim against the driver.** See above. Should the page say riders are or are not bound, citing case law?
3. **Whether UM must be offered on a motorcycle policy** under 627.727(1) and (2).
4. **The 627.727(8)(d) "limited UM" form.** The page says a car policy with this form may not help after a motorcycle crash if the bike has no UM. Is that framing right in practice? Note that (8)(c) and (8)(e) also bear on stacking.
5. **The UIM settlement-notice timeline step** (627.727(6)). The page paraphrases "without prejudice to any underinsured motorist claim" as "keep your underinsured motorist claim". It implies, but does not state, that skipping the notice risks the UIM claim.
6. **Helmet "over 21".** The page keeps the statute's words "over 21" and does not translate them into an age. The 316.211(3)(a) exception is simplified to "low-powered bikes that cannot go faster than 30 miles per hour on level ground". The statute says 50cc or less or 2 brake horsepower or less, and not capable of more than 30 mph.
7. **Lane-rules sentence** "If a driver crowded you out of your lane, you may raise that rule too." It is phrased as an argument, not a legal effect. Confirm the firm is comfortable with it.
8. **Time limits.** Two years and four years are stated without "generally", the same as the car page. Tolling is not addressed.
9. **FAQ sources** are all "drafted". No People Also Ask or keyword record was available to this task. Replace them with real query sources if the brief has them.
