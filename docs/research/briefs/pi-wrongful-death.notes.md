# Wrongful death pillar: notes

Page: /personal-injury/wrongful-death (slug `wrongful-death`, top-level pillar, `published: true`).
Entry: wrongful-death.entry.ts.txt (paste into `injuryPages` after the `delivery-and-box-truck` entry).
Records: wrongful-death.sources.md (6 new READ-WHOLE records, to append to docs/research/PAGE-SOURCES.md).

No `owner` or `lastReviewed` fields: none of the existing injury entries carry them.

## Checks run (in the worktree, entry inserted, records appended)

Baseline (before inserting): tsc, check:injury, check:pages, check:claims, check:unverified,
check:provenance, check:readability, check:search-map and check:routes all passed. check:seo failed
at baseline because it reads built HTML (`.next/server/app not found`), so it was not run as a gate.

With the page:

| Check | Result |
|---|---|
| `npx tsc --noEmit -p .` | pass |
| `check:injury` | pass, `ok /personal-injury/wrongful-death`, 10 of 10 injury pages on the standard |
| `check:pages` | pass (first run failed on an em dash inside a "(5) WITHIN TWO YEARS.,  [...]" statute quote; the exemption needs the whole quote to be one recorded line, so that quote was removed and the section made prose) |
| `check:claims` | pass |
| `check:unverified` | pass |
| `check:provenance` | pass; citations audited rose from 309 to 340, READ-WHOLE markers from 33 to 38 (adds 768.16, 768.17, 768.18, 768.20, 768.28) |
| `check:readability` | pass |
| `check:search-map` | pass (S6 applies only to charge pages; no row added, see below) |
| `check:routes` | pass (the page links to no sibling pages, so there were no route failures to expect) |
| `check:seo` | not run (needs a build) |

Measured offline with the same copy the gates use: page grade 6.7, average sentence 14.4 words.
The highest section is 9.1 (the lead); survivor-losses and estate-losses are both 9.0.
An approximation of P7 (8-word runs over measured copy, not rendered HTML) gives 98.2 percent
unique. The most shared with any page is 1.4 percent (car-accidents).

## Search map

Not part of this delivery. Suggested row for src/lib/search-map.ts: href
`/personal-injury/wrongful-death`, kind `injury`, intent `hire`, primary `null` (with the same note
the other injury rows carry), topic `wrongful death`. The topic is in the meta title. It is NOT in the
H1 the brief gave ("Lost a loved one in Tampa because of someone else?"). If the row is added, check:seo
P5 will flag "topic not in H1" unless the row sets `h1Tagline`, or the H1 changes to a variant such
as "Wrongful death claims in Tampa". PAGE-STANDARD section 9 also wants the topic in the H1. Someone
needs to decide this.

## Every legal statement, mapped to its source

Sources marked [new] are recorded in wrongful-death.sources.md. The rest were already in PAGE-SOURCES.md.

Lead
- The family can recover when someone's wrongful act or negligence causes a death: 768.19.
- The personal representative brings the claim for every survivor and the estate: 768.20 [new].
- What each person can recover turns on the relationship: 768.21(1) to (5).

Who pays (ladder)
- The person or business at fault: whoever would have been liable had the person lived is liable for the death, even when it happened in a way that is a felony: 768.19.
- If the wrongdoer has died, the claim is against their personal representative: 768.20 [new].
- "Usually paid from that policy, up to its limits" (liability insurance): firm practice wording, not from a statute. See attorney review.
- "Florida does not make most drivers carry bodily injury liability coverage": reused from the car-accidents pillar, as recorded in the 627.727 WHY note.
- PIP death benefit: $5,000 per individual, on top of the medical and disability benefits: 627.736(1) and (1)(c).
- Uninsured motorist: covers death, protects persons insured under the policy, required on a policy with BI coverage unless a named insured rejects it in writing: 627.727(1). "Or too little" (underinsured): 627.727(3)(b).
- Prose, "one claim for your family": 768.20 [new].

What happens next (timeline)
- A personal representative has to be in place, because the claim belongs to that person: 768.20 [new].
- The complaint must name all potential beneficiaries, including the estate, and allege their relationships: 768.21, opening paragraph.
- Generally two years: 95.11(5)(e).
- No time limit against a natural person for an intentional tort resulting in death from the acts in the murder and manslaughter statutes: 95.11(11).

What to do right now
- Two years, generally: 95.11(5)(e).
- The personal representative brings the claim for the family and the estate: 768.20 [new].
- A survivor who paid medical or funeral bills recovers them: 768.21(5). Bills charged to the estate go to the estate: 768.21(6)(b).
- Lost support and services for each survivor: 768.21(1). Dependence makes some relatives survivors: 768.18(1) [new]. "Household help" paraphrases "services": 768.18(4) [new].
- PIP death benefit: 627.736(1)(c). UM pays when the driver had no coverage or too little: 627.727(1), (3)(b).
- "Gather every insurance policy", "write down who depended": firm advice, not law.

Who brings a wrongful death claim?
- The personal representative brings the claim and recovers for the survivors and the estate. The statute quote is verbatim: 768.20 [new], first sentence.
- The court papers name everyone and their relationship: 768.21, opening paragraph.
- "Your loss is still part of the claim": inferred from 768.20 ("for the benefit of the decedent's survivors") and 768.21's opening paragraph.
- When an injury causes death, the injury claim does not survive, and a pending one abates: 768.20 [new], second sentence.
- "The losses are then pursued through the wrongful death claim": a reading of 768.20 as a whole. See attorney review.

Which family members count as survivors?
- Spouse, children and parents. Blood relatives and adoptive siblings count only if partly or wholly dependent for support or services: 768.18(1) [new].
- A child under 25 is a minor child, whatever the age of majority. The statute quote is verbatim: 768.18(2) [new].
- Support includes contributions in kind: 768.18(3) [new]. Services means tasks, usually household, regularly performed, that will be a necessary expense: 768.18(4) [new].
- The rule for a child born out of wedlock (a survivor of the mother; of the father only if he recognized a responsibility for support): 768.18(1) [new].

What can the family and the estate recover?
- The stated aim is to shift the losses from the survivors to the wrongdoer: 768.17 [new].
- Every survivor: lost support and services from injury to death, with interest, plus future loss reduced to present value. The relationship, probable net income and replacement value may be considered: 768.21(1).
- Spouse: companionship, protection, and mental pain and suffering from the date of injury: 768.21(2).
- Children: minor children, and all children if there is no surviving spouse, recover for lost parental companionship, instruction and guidance, and for mental pain and suffering: 768.21(3).
- Parents: a parent of a minor child recovers for mental pain and suffering. A parent of an adult child recovers for it only if there are no other survivors: 768.21(4).
- Medical and funeral bills paid by a survivor: 768.21(5).
- Estate: lost earnings from injury to death, less the survivors' lost support (excluding contributions in kind): 768.21(6)(a). Medical and funeral bills charged to the estate or paid by or for the person who died, other than those under (5): 768.21(6)(b).
- Net accumulations: recoverable if the survivors include a spouse or lineal descendants. Also recoverable if the person who died was not a minor child under 768.18(2), no lost support and services are recoverable, and a parent survived: 768.21(6)(a)1. and 2., 768.18(2) and (5) [new].
- Estate awards are subject to creditors' probate claims: 768.21(7).

How long do we have to file?
- Generally two years: 95.11(5)(e).
- Wrongful death was already two years before 2023: 95.11 as it read in the 2022 Florida Statutes [new], (4)(d), alongside (3)(a), four years for negligence. Ch. 2023-15 s.28 (already recorded) applies the amendments to claims accruing after 24 March 2023.
- No time limit against a person (not a company) for an intentional tort resulting in death from the acts in the murder and manslaughter statutes. No arrest, charge or conviction is required: 95.11(11). The words "murder or manslaughter" stand for "s. 782.04 or s. 782.07". The recorded lines that name those sections as murder and manslaughter are F.S. 943.0584 (d) and (e), "Murder, as defined in s. 782.04" and "Manslaughter or homicide, as defined in s. 782.07", plus the existing 782.04 record.
- Government body: a claim must first be presented in writing, and a wrongful death claim must be presented within 2 years after it accrues: 768.28(6)(a) and (6)(a)2. [new]. "A city, a county or a state agency": 768.28(2) [new], where "state agencies or subdivisions" include counties and municipalities.

What if the death followed medical care?
- For medical negligence claims, adult children cannot recover the (3) damages and parents of an adult child cannot recover the (4) damages. The statute quote is verbatim, with "[...]" replacing "as defined by s. 766.106(1).": 768.21(8).
- "These limits reach children 25 and older": a reading of 768.21(8) together with 768.18(2) [new]. See attorney review.
- "The limit does not name lost support and services, or medical and funeral bills": (8) refers only to subsections (3) and (4).
- Medical care claims have their own time rules: 95.11(5)(c) (its definition of "action for medical malpractice" includes death claims).

What if my loved one was partly at fault?
- The bar applies to negligence actions. More than 50 percent at fault for one's own harm means no recovery: 768.81(6). A smaller share reduces the recovery: 768.81(2).
- The bar does not apply to personal injury or wrongful death arising out of medical negligence: 768.81(6). The fault section does not apply to an action based on an intentional tort: 768.81(4).
- A defense against one survivor does not affect another survivor's recovery. The statute quote is verbatim: 768.20 [new], last sentence.

Does a criminal case change our claim?
- The wrongdoer is liable even though the death was caused under circumstances constituting a felony: 768.19.
- For the claim with no time limit, no arrest, charge or conviction is required: 95.11(11).

What if the death happened in a car or truck crash?
- Who the PIP death benefit may be paid to (executor or administrator, relatives by blood, adoption or marriage, anyone who appears equitably entitled): 627.736(1)(c).
- UM covers death: 627.727(1).
- In a truck crash, each liable party pays its own percentage of fault, not the whole: 768.81(3) (wording reused from the truck pillar).

FAQ (all `source: "drafted"`)
- Two years, the same before 2023, the intentional-killing exception: 95.11(5)(e), 95.11 (2022) (4)(d), 95.11(11).
- The personal representative files one claim for everyone: 768.20 [new].
- Adult children: lost support, 768.21(1). Companionship and pain and suffering only with no surviving spouse, 768.21(3). Not in medical negligence, 768.21(8). "25 and older" is the same reading as above.
- Parents of an adult child: 768.21(4), (8). Parents of a minor child (under 25): 768.21(4), 768.18(2).
- PIP: $5,000 on top of medical and disability benefits: 627.736(1)(c).

## Left out because no recorded source supports it

- When the two-year clock starts. Florida case law generally runs it from the date of death, but no
  recorded source says so (95.031 and the case law are not fetched). The page says "two years" and
  "when your clock started can be disputed".
- Tolling, and any other rule that pauses a time limit (95.051 is not fetched).
- How a personal representative is appointed (probate, ch. 733), and who may serve. The page says a
  lawyer can explain.
- The medical malpractice time limits in figures (2 years from discovery, the 4-year repose) and the
  pre-suit notice process (766.106). The page says only that medical care claims have their own time rules.
- The sovereign immunity caps ($200,000 / $300,000, 768.28(5)(a)) and the 4-year filing rule (768.28(14)).
  They are recorded but not stated: the brief asked for one sentence on government bodies.
- Who the government notice goes to (agency, Department of Financial Services, or both), because
  768.28(6)(a)'s municipality and county exception has to be read with (6)(a)2. See review item 3.
- 768.22 to 768.26 (recovery by the estate, verdicts, and the rest of the Act). They were not fetched,
  so the page says nothing about how a recovery is divided, court approval of settlements, or
  apportionment between survivors.
- Punitive damages, caps on wrongful death damages, and a claim's value or how long it takes.
- Whether a death caused partly by the person who died is reduced or barred. The page states the
  768.81 text and says to take the question to a lawyer.
- Fee terms, and any outcome language.

## Items for attorney review

1. **768.21(8) is current law?** The 2025 statutes (fetched) still carry the medical negligence limit
   on adult children and parents of an adult child. Confirm that no 2026 session law repealed or amended it
   before publishing. Repeal bills have been filed in past sessions. If one passed, the
   medical-care topic and two FAQ answers change.
2. **"Children 25 and older".** The page reads "adult children" in 768.21(8) and "adult child" in
   768.21(4) as children 25 or older, because 768.18(2) defines minor children as under 25 for the whole
   Act. Please confirm this reading, which the page states plainly in the medical-care topic and the FAQ.
3. **Government notice.** The page says a death claim against a government body "must first be
   presented in writing, and on a death claim that is due within two years after the claim arises". It does not say
   to whom. 768.28(6)(a) exempts claims against a municipality or county from the Department of Financial
   Services notice in its main clause, while (6)(a)2. says a wrongful death claim must be presented to the Department within 2 years.
   Please confirm the sentence is right for city and county defendants.
4. **The 2023 sentence.** The page says wrongful death "already had two years" before ch. 2023-15. That
   rests on the 2022 statute's (4)(d), and it is there so readers do not carry the car page's "four
   years for older claims" over to a death. Please confirm there is no transition issue for a death that occurred
   before 24 March 2023 from an injury suffered earlier.
5. **When the clock starts.** The page does not say "from the date of death". If you want it to,
   it needs a recorded source (95.031 and/or case law).
6. **The decedent's own fault.** The shared-fault topic states the 768.81 text and stops. Please
   confirm you are content that it does not say how the decedent's share of fault reduces or bars the
   survivors' recovery.
7. **"The losses are then pursued through the wrongful death claim"** (after the injury claim
   abates). This is a plain reading of 768.20, not its words.
8. **Liability insurance card.** "When the person or business at fault carries liability coverage,
   the claim is usually paid from that policy, up to its limits" is firm-practice wording, not a statute.
9. **"Murder or manslaughter laws"** stands for the acts described in 782.04 and 782.07. Note that
   782.07 also covers aggravated manslaughter, and 782.071 (vehicular homicide) is a separate section that 95.11(11)
   does not list. The page does not say whether a vehicular homicide death fits the exception.
10. **Estate net accumulations**, second condition: the page says "was not a minor child under this
   law", following 768.21(6)(a)2.'s cross-reference to 768.18(2). Please confirm.
11. The H1 does not contain "wrongful death" (see Search map above).
