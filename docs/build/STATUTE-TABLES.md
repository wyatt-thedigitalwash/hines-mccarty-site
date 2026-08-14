# Statute table programme — status

The fact layer for all 30 charge pages: every statute a page rests on gets a
table built by one agent from the full section text and audited by a second
agent that re-fetches independently. Writers may only assert what an audited
row supports. Nothing here is prose; see DECISIONS.md D19-D22 for where
verified tables land and why.

Sized at P0 inventory: **72 tables** (11 shared infrastructure statutes + 61
primary charging statutes). Heavily shared: the theft statute serves 8 pages,
775.082 serves 9, the ranking chart serves 12.

**COMPLETE as of 2026-08-14. All 70 tables are built, audited, and applied**,
across three build batches and three repair rounds. Every one carries a PASS
verdict from an agent that re-fetched the statute independently of the agent
that built it.

## Verified and applied (70)

All generated into `src/lib/statute-tables/`. The hand-built partial 812.014 is
retired: its 41-row whole-section replacement passed round 3 on a full fresh
walk, so the statute the grand theft page got wrong four times is now verified
end to end. Every table passed
the independent build-then-audit pipeline; the full list is
`src/lib/statute-tables/index.ts` and the claim checker prints it on every
run. Notables: 921.0022 ranking chart (624 rows, audited by programmatic
multiset diff), 775.082 (54), 817.568 (56, two build lineages merged), 893.13
(47), 316.193 (50), 893.135 (94), 921.0024 (48 covering the full worksheet
face and key). Zero-row whole-section tables exist for the definitional and
procedural sections (776.032, 517.021, 18 USC 20/24/3553, 322.271, 794.005) so
exhaustive claims about them stay checkable.

## Pass rates, which are the interesting number

| Stage | Result |
|---|---|
| Batch 1 (15 statutes) | 8 pass, 7 fail |
| Batch 2 (34) | 10 pass, 24 fail |
| Batch 3 (29) | 28 pass, 1 fail |
| Repair round 2 (24) | 23 pass, 1 fail |
| Round 3 (2) | 2 pass |

Batch 1 and 2 ran with a prompt carrying one worked example of the
no-lower-bound failure. Batch 3 ran with four named failure classes drawn from
what the auditors had actually caught, plus a materiality rule that stopped
re-audits failing tables over unmarked ellipses. The jump from 29 percent to 97
percent first-pass is that change. "Read the whole section" does not stick as
an instruction; a catalogue of the specific ways people fail to does.

Tables get generated into `src/lib/statute-tables/` by
`scripts/generate-statute-tables.mjs`, run over the results snapshots
harvested from the workflow journals (each journal lives under its session's
`subagents/workflows/<run-id>/journal.jsonl` in the Claude project dir, so
results survive a killed session).

## The unit limitation, found and closed (D22)

`min` and `max` carried dollars, drug weights, and person counts in the same
two fields with no marker, and the claim checker compared sentence dollar
figures against them. Probing before the drug page was written confirmed it
was live: `degreesAt("893.13", 1000)` returns two felony degrees off a weight
ladder, and F.S. 817.568 has dollar prongs and person-count prongs in the same
paragraph with overlapping ranges.

Closed by `amountUnit` in `scripts/statute-table-annotations.json`, with no
default: a primary statute with bounded rows and no declared unit fails the
gate. Amount rules are off for 893.13, 817.568, 1956, and 322.2615, and the
gate prints that list on every run rather than passing quietly.

**What this costs.** Dollar claims on the drug, identity theft, federal money
laundering, and DUI pages are not machine-checkable and rest on the reviewer.
That is a real gap, and naming it is the point: it was previously not checked
either, while appearing to be.

## Process learnings carried in the prompts

Four named failure classes, each found in a real table: (1) no-lower-bound
provisions hiding mid-list (cargo; 775.082(9)(a)1.o; 817.568(2)(b)); (2)
invented ceilings — 841(b)(1)(B) "or more" given the (A) threshold as a max;
(3) penalty caps typed as triggers — 924(p)'s $2,500 civil cap in max; (4)
quote splices. Completeness and correctness are separate axes; the auditor
sets completeness. Materiality rule per D21.

## After the fact layer

P3 write (pairs, wave 4 last) → P4 adversarial review per pair → P5 fix,
re-review, commit. Page DoD is in the old session's /goal, restated: every
claim traces to a table row, check:claims passes, six reader questions
answered, charge-specific headings, compliance judged by read not word-list,
one adversarial round passed.
