# /personal-injury/brain-injuries: notes

Pillar (no `parent`). Entry: brain-injuries.entry.ts.txt. New record: brain-injuries.sources.md (one READ-WHOLE record, F.S. 768.0755, fetched 2026-11-19).

## Checks run

The worktree had no changes when I started. Baseline before inserting: tsc, check:injury, check:pages, check:claims, check:unverified, check:provenance and check:readability all passed.

Then I put the entry into `injuryPages` after `delivery-and-box-truck` and appended the 768.0755 record to the worktree's PAGE-SOURCES.md. I also copied in the 627.737 record from the main repo, for verification only. It is not delivered.

| Check | Result |
|---|---|
| `npx tsc --noEmit -p .` | pass |
| `check:injury` | pass (`ok /personal-injury/brain-injuries`) |
| `check:pages` | pass |
| `check:claims` | pass |
| `check:unverified` | pass |
| `check:provenance` | pass. As a negative test I removed the 768.0755 record and the check FAILED on FS 768.0755, (1) and (2), so the new record is required. |
| `check:readability` | pass |
| `check:routes` | pass (the sibling links did not fail in this worktree) |
| `check:search-map` | pass |
| `check:registries` | FAIL, not caused by this page. The copied 627.737 record cites D163, which is not in this worktree's DECISIONS. It goes away in the main repo, where D163 lives. |
| check:seo P7 (postbuild, not run) | Measured by hand with 8-word runs over `injuryCopy`. The page shares 2.7% with the car-accidents pillar in the worktree, and 2.7% with the main repo's reworked car-accidents pillar. It shares 0.5% or less with every other injury page, including 0% with catastrophic-injuries. The limit is 30%. |

Readability: page grade 5.9, average sentence 14.0 words, highest section grade 8.6.

I1 to I7 pass: 3 Tier 2 sections, 5 payment cards, 4 timeline steps, 5 do-now bullets with short headlines, 8 topics, 6 links, 5 FAQ items all sourced "drafted".

## Integration notes

- Links: 6 in total. Four go to live pages: car-accidents/insurance-claims, car-accidents/catastrophic-injuries, car-accidents/compensation and /contact. Two go to sibling pages being written now: /personal-injury/slip-and-fall and /personal-injury/wrongful-death. `isLiveHref` already counts both siblings as live, so the I4 link count is 6, the maximum. If anyone adds a link, remove one.
- The 627.737 record must be in the main repo's PAGE-SOURCES.md. It is already there, uncommitted. This page cites 627.737(2) and (3) and quotes 627.737(2)(b).
- Not delivered, but the standard asks for them:
  - a `src/lib/search-map.ts` row (section 9). check:search-map passes without one.
  - `handlesChargeHrefs` for the "Who handles these cases" block.
- No `owner` or `lastReviewed`, because the other injury entries do not carry them.

## Every legal statement and its source

Who pays (ladder):
- PIP pays no matter who caused the crash, within a $10,000 limit for medical and disability benefits. Source: 627.736(1).
- PIP pays 80 percent of reasonable costs for care you need. Source: 627.736(1)(a).
- PIP pays 60 percent of lost gross income and earning capacity. Source: 627.736(1)(b).
- The medical part pays only if you get first care within 14 days. Source: 627.736(1)(a).
- The driver at fault pays "what PIP does not pay". Source: 627.736(3), no right to recover damages for which PIP benefits are paid or payable.
- Pain and suffering is open only for certain injuries, such as a permanent one. Source: 627.737(2).
- UM coverage pays when the driver at fault has no coverage or limits too low. Sources: 627.727(1) and 627.727(3)(b).
- A policy with bodily injury liability coverage must include UM unless a person named on the policy turned it down in writing. Source: 627.727(1).
- UM pays pain and suffering only under the same injury bar. Source: 627.727(7).
- A person or business that controls a business property has a duty of care under Florida law. Source: 768.0755(2), which keeps the common-law duty of care owed by a person or entity in possession or control of a business premises.
- After a slip on a spill in a business, you must prove the business knew or should have known about it and should have acted to fix it. Source: 768.0755(1).
- After a car crash, Florida makes PIP primary, though workers' compensation benefits are credited against it. Source: 627.736(4).
- What your health coverage pays, or would pay, shapes how medical costs are proven. Source: 768.0427(2)(b).
- When several parties share the blame, each one found liable pays only its own share. Source: 768.81(3).
- More than 50 percent at fault for your own harm means no damages in a negligence claim. Source: 768.81(6).

What happens next:
- First care within 14 days of a car crash, or PIP will not pay medical benefits. Source: 627.736(1)(a).
- Two years for a negligence claim that arose after 24 March 2023. Sources: 95.11(5)(a) and ch. 2023-15 s.28.
- Four years for a claim that arose on or before that date. Source: ch. 2023-15 s.28, with the prior four-year period as stated in the 95.11 record's applicability note.
- The 30-days-before-trial check: the defendant may move, and the court checks once, 30 days before the trial or pretrial hearing, whichever is first, whether you can offer some evidence that you meet the bar. If you cannot, the court dismisses the claim without prejudice. Source: 627.737(3).

What to do right now:
- 14-day PIP window. Source: 627.736(1)(a).
- Future care and lost future income can be part of the claim. Sources: 768.81(1)(b) and 768.0427(2)(c).
- Two years or four, depending on when the claim arose. Sources: 95.11(5)(a) and ch. 2023-15 s.28.

Topics:
- **Missed at first.** PIP only pays with first care within 14 days. Medical payments can reach $10,000 if a doctor or certain other providers find an emergency medical condition. They stop at $2,500 if a provider finds there was none. Sources: 627.736(1)(a), subparagraphs 3 and 4.
- **Pain and suffering.** The four kinds of injury. Source: 627.737(2)(a) to (d), with (2)(b) quoted verbatim. The UM bar. Source: 627.727(7).
- **Property falls.** Sources: 768.0755(1), including the two constructive-knowledge routes in (1)(a) and (1)(b), and 768.0755(2).
- **Future costs.**
  - Economic loss includes past lost income, future lost income reduced to present value, and medical expenses. Source: 768.81(1)(b).
  - Future-care evidence: what non-Medicare or Medicaid coverage would pay, plus your share, and reasonable amounts to be billed. Source: 768.0427(2)(c)1 and 3.
  - PIP pays 60 percent. Source: 627.736(1)(b).
  - The rest of lost pay goes in the claim against whoever caused the crash. Source: 627.736(3).
- **Health coverage.** Source: 768.0427(2)(b)1, 2, 3 and 5, with 120 percent of the Medicare rate on the date of care and 170 percent of the state Medicaid rate. The letter of protection definition. Source: 768.0427(1)(d).
- **Partly at fault.** Proportional cut of economic and non-economic damages. Source: 768.81(2). The over-50-percent bar and the medical negligence carve-out. Source: 768.81(6).
- **Time limits.** Sources: 95.11(5)(a) and ch. 2023-15 s.28. The "general rule about cases filed" is s.30, from the 2023-15 record.
- **Fatal.** Wrongful death exists for a wrongful act, negligence, default, or breach of contract or warranty, if the person could have sued had they lived. Source: 768.19. Who may recover, by class of survivor. Source: 768.21.

FAQ: each answer restates facts already mapped above (627.736(1)(a), (1)(b); 627.737(2); 768.0755(1); 95.11(5)(a) and 2023-15 s.28; 768.81(1)(b)).

Medical statements (not legal, and not in PAGE-SOURCES):
- The statements are:
  - signs may not show up for hours or days, and can be missed by you, your family or a doctor;
  - signs can include headaches, dizziness, trouble thinking clearly, memory problems, feeling foggy or slowed down, and changes in mood or sleep.
- Paraphrased from the CDC's "Traumatic Brain Injury and Concussion: Signs and Symptoms" page (https://www.cdc.gov/traumatic-brain-injury/signs-symptoms/index.html), read 2026-11-19. Phrases relied on:
  - "Some mild TBI and concussion symptoms may appear right away"
  - "others may not appear for hours or days after the injury"
  - "Problems may be overlooked by the person with a mild TBI or concussion, their family members, or their healthcare provider"
  - the symptom lists.
- Every statement is phrased "can" or "may" and paired with "get checked by a doctor".
- curl returned 403 for cdc.gov. The page was therefore read through WebFetch, which returns a model summary, not a programmatic extract. That is why it is not a READ-WHOLE record. A human should open the CDC page and confirm the wording.

## Not said, because I could not source it

- That Florida does not require most drivers to carry bodily injury liability coverage. No 627.733 or ch. 324 record exists. The page says only that there "may be little or no coverage".
- Who is owed a duty on non-business property (homes), or the invitee and licensee categories. The only recorded source is 768.0755, which concerns business premises. The card speaks only of business property.
- Any health insurer lien, reimbursement or subrogation right against a recovery, and the collateral source rules (768.76, not recorded).
- A separate time limit for wrongful death (95.11(5)(e) is recorded, but the brain page does not need it). The topic links to the wrongful-death sibling instead.
- That a settlement or release is final. The do-now bullet says only that an early offer is priced before costs are known.
- Any medical claim about how long recovery takes, permanence rates, or diagnosis and testing.
- Claims against government bodies, sovereign immunity and notice rules (not recorded).
- Fees, results, values and case timelines.

## For attorney review

1. **$2,500 PIP wording on the car-accidents pillar (existing page, not this one).** 627.736(1)(a)4 caps reimbursement at $2,500 "if a provider ... determines that the injured person did not have an emergency medical condition". The car pillar says "Without a doctor ... finding an emergency medical condition, it pays no more than $2,500". That does not match the statute's trigger where no determination is made either way. This page follows the statute: up to $10,000 with a finding of an emergency medical condition, $2,500 with a finding that there was none.
2. **"Without prejudice (not as a final decision on it)".** The plain-words gloss of 627.737(3) dismissal. Confirm it, and decide whether to note that a dismissed claim still faces the time limit.
3. **"Florida makes PIP primary, so it pays first" ahead of health insurance (627.736(4)).** Confirm that reading. Also confirm whether the Medicaid sentence in (4) needs mention.
4. **The premises card.** Confirm the common-law duty statement drawn from 768.0755(2). Confirm the liability insurance phrasing ("if it has any"). Decide whether residential property should be addressed once a source is recorded (likely shared with the slip-and-fall and trip-and-fall siblings).
5. **"You cannot recover damages in a negligence claim" for over 50 percent fault.** 768.81(6) applies "in a negligence action to which this section applies", and (4) excludes intentional torts and some chapters. Confirm the shorthand.
6. **The four-year limit for claims that arose on or before 24 March 2023.** It rests on the 2023-15 s.28 record and the 95.11 record's note on the prior period. The pre-2023 text of 95.11 is not itself recorded.
7. **The medical copy.** Have a human check the CDC wording above. Decide whether a medical source should be cited on the page.
8. **"With a brain injury, the question is often whether it is permanent"** is a practice observation, not a statute. Confirm it, or cut it.
9. **The PIP "no matter who caused the crash" phrasing.** This follows the existing car pillar (627.736(1)) and the no-fault structure.
