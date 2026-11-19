# dog-bites: build notes

Page: /personal-injury/dog-bites (pillar, no parent). Entry: dog-bites.entry.ts.txt. New records: dog-bites.sources.md (READ-WHOLE F.S. 767.04, READ-WHOLE F.S. 767.01, both fetched 2026-11-19 from flsenate.gov 2025, SectionBody cut at History programmatically; blockquote lines diffed against a fresh extraction, identical).

## Checks run (worktree, entry inserted after delivery-and-box-truck, records appended)

Baseline before inserting: tsc, check:injury, check:pages, check:claims, check:unverified, check:provenance, check:readability all passed (check:seo fails without a build, so it was not usable for P7).

With the page:

| Check | Result |
|---|---|
| `npx tsc --noEmit -p .` | pass |
| `check:injury` | pass, `ok /personal-injury/dog-bites` |
| `check:pages` | pass |
| `check:claims` | pass |
| `check:unverified` | pass |
| `check:provenance` | pass; READ-WHOLE markers now include fs 767.01, fs 767.04 |
| `check:readability` | pass (it does not measure injury pages; check:injury I6 does) |
| `check:routes` | pass (the /personal-injury/wrongful-death sibling link did not trip it in this worktree) |
| `check:seo` (P7 overlap) | NOT RUN: needs a build. Copy was written fresh and does not reuse the car page's time-limit wording, but P7 should be confirmed after build. |

Measured (repo's own scorer): page grade 4.4, average sentence 12.7 words; highest section grade 6.0 (lead, who-pays). metaDescription 142 characters, metaTitle 49.

Links (3, the pillar minimum): /contact (not-a-bite), /personal-injury/car-accidents (your-fault, the 50 percent line), /personal-injury/wrongful-death (fatal-attack; sibling being written in parallel). I4 counts the sibling because isLiveHref only excludes /resources. If wrongful-death does not ship, replace that link with another live page or the page drops to 2 real links.

No `owner` or `lastReviewed`: the other injury entries have neither.

## Every legal statement, mapped to its source

| Page statement (where) | Source |
|---|---|
| Owner is liable for a bite in a public place, or on private property where you were lawfully, including the owner's own (lead, who-pays card 1, dogs-past, where-bitten, FAQ 1) | F.S. 767.04, sentence 1 |
| Liable whether or not the dog bit before / whatever the owner knew (lead, who-pays prose, dogs-past, FAQ 1, FAQ 5) | F.S. 767.04, sentence 1 ("regardless of the former viciousness of the dog or the owners' knowledge of such viciousness") |
| Your own share of fault cuts what the owner owes by that percentage; the 20 percent example (who-pays card 1, your-fault) | F.S. 767.04, sentence 2 |
| "Lawfully" = invited, expressly or by implication, or doing a duty that state law, federal law or federal postal rules put on you (where-bitten, do-now bullet 3, FAQ 4) | F.S. 767.04, sentence 3 |
| If not lawfully there, the dog bite law does not make the owner liable (where-bitten) | F.S. 767.04, sentence 1 (liability only "while ... on or in a public place, or lawfully on or in a private place") |
| The dog bite law adds to other claims and does not replace them; a claim "could be brought either way" (where-bitten, how-long) | F.S. 767.04, sentence 5 ("in addition to and cumulative with any other remedy provided by statute or common law") |
| "Bad Dog" sign, prominent place, easily readable: owner generally not liable under the dog bite law; exceptions for a person under the age of 6 and where the owner's negligent act or omission caused the harm (bad-dog-sign, do-now bullet 4, FAQ 2, lead) | F.S. 767.04, sentence 4 |
| Owner who knew the dog was dangerous must keep it securely confined in a proper enclosure (dogs-past) | F.S. 767.01(2) |
| A separate law makes a dog owner liable for any damage the dog does to a person (not-a-bite) | F.S. 767.01(1) |
| General fault rule: more than 50 percent at fault for your own harm recovers nothing, in the cases it covers (your-fault) | F.S. 768.81(6) |
| That rule defines its cases to include strict liability as well as negligence (your-fault) | F.S. 768.81(1)(c) |
| Negligence claim that arose after 24 March 2023: two years (timeline step 3, how-long, do-now bullet 5, FAQ 3) | F.S. 95.11(5)(a); Chapter 2023-15 s.28 (accrual after the effective date, approved and effective 24 March 2023) |
| Claim that arose on or before 24 March 2023 keeps the older four-year limit for negligence (timeline step 4, how-long) | Chapter 2023-15 s.28 (recorded; the 95.11 record states the prior four-year period) |
| A claim founded on a statutory liability: four years (how-long, quoted) | F.S. 95.11(3)(e) |
| Wrongful death: exists when a wrongful act, negligence, default, or breach of contract or warranty caused the death and the person could have sued had they lived; a separate law sets who recovers by class of survivor (fatal-attack) | F.S. 768.19; F.S. 768.21 (both already recorded; wording follows the truck pillar) |

Statements that are not legal facts, kept deliberately non-committal: the owner's homeowner's or renter's insurance pays "only if the owner has a policy, and only if its terms cover a claim like yours"; your own health insurance pays "on the terms of your own plan"; "ask whether your plan expects to be paid back". Practical advice (photos, records, identify the owner) carries no legal claim.

Statute quotes on the page (verbatim, no cross-references to unrecorded sections): F.S. 767.04 sentence 1 (dogs-past); F.S. 767.04 sentence 4 (bad-dog-sign); F.S. 95.11(3)(e) (how-long). 767.01 is not quoted because it cites s. 585.01 and s. 767.11, which are not recorded.

## Chosen not to say (no source fetched)

- Any single definitive deadline for a dog bite claim. The page says the limit can depend on how the claim is brought, plans around two years, and says to talk to a lawyer well before it.
- Whether homeowner's or renter's policies usually cover dog bites, exclude breeds, or carry limits; whether any law requires owners to carry coverage.
- Who counts as the "owner" (keeper, landlord, person walking the dog). 767.04 does not define it; 767.11's definition was not fetched. The page says only "the person walking the dog may not be the owner."
- Landlord or property manager liability, and premises liability generally.
- Reporting the bite to Hillsborough County animal services, quarantine rules, dangerous dog classification (767.11 to 767.14 not fetched).
- Children's own comparative fault (how a young child's negligence is judged) and who brings a minor's claim.
- Collateral source rules or health plan liens and subrogation (768.76 not fetched); the page only tells the reader to ask.
- Medical claims about bite infection or risk.
- Criminal penalties for owners of dogs that injure people.
- Damages categories and values.

## For attorney review

1. THE TIME LIMIT. Whether a claim under F.S. 767.04 is "an action founded on a statutory liability" (95.11(3)(e), four years) or is treated as negligence (95.11(5)(a), two years for accrual after 24 March 2023). The statute text does not settle it and no case law was read. The page tells readers to plan around two years. If Florida case law settles it, the how-long topic, timeline step 3, do-now bullet 5 and FAQ 3 should be revised to state it.
2. COMPARATIVE FAULT. How 767.04's own percentage reduction interacts with 768.81(6)'s greater-than-50-percent bar (768.81(1)(c) includes strict liability in "negligence action"). The page presents it as an open question for a lawyer.
3. The "Bad Dog" sign rule: whether it reaches a bite off the owner's premises (the text speaks of a sign "on his or her premises" but does not limit the rule to bites there); the page does not address it.
4. 767.01(1) and non-bite injuries (knocked down, scratched): the page says only that whether it fits is a question for a lawyer. Confirm that framing, given case law reading 767.01 with 767.04.
5. "If you were not lawfully there, the dog bite law does not make the owner liable for the bite. That law is not the only route." Confirm this reading of the place limitation and the cumulative-remedy sentence.
6. Who pays card 2 (owner's homeowner's or renter's insurance) and card 3 (your health insurance, repayment question): confirm the framing does not overclaim coverage.
7. Carried from the other injury pages: contingency fee terms and costs if the case does not recover are not on the page.
