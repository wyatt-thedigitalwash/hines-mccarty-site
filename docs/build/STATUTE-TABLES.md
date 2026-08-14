# Statute table programme — status

The fact layer for all 30 charge pages: every statute a page rests on gets a
table built by one agent from the full section text and audited by a second
agent that re-fetches independently. Writers may only assert what an audited
row supports. Nothing here is prose; see DECISIONS.md D10-D12 for where
verified tables land and why.

Sized at P0 inventory: **72 tables** (11 shared infrastructure statutes + 61
primary charging statutes). Heavily shared: the theft statute serves 8 pages,
775.082 serves 9, the ranking chart serves 12.

Updated 2026-08-14 after repair round 2: 68 of 70 tables verified and applied. Repair round 2 passed 23 of 24 (only 812.014 remains, on two typed-field findings, one of which was an audit-prompt vocabulary artifact); batch 3 passed 28 of 29 (212.15 remains, one verifiable level to add). The 921.0022 chart passed a programmatic multiset-diff audit. Round 3 = mechanical patches to 812.014 and 212.15 plus independent re-audit. The Degree union gained the two punishable-by-life categories the chart surfaced, and GradingRow gained minExclusive.

## Verified and applied (18)

In `src/lib/statute-tables/` (17) plus the hand-built partial 812.014 in
statutes.ts: 409.920, 741.2901, 775.21, 776.08, 782.04, 782.07, 784.041,
784.045, 784.07, 794.011, 827.071, 893.135 (94 rows), 896.101, 921.0023,
943.0584, 943.0585, 943.059.

## In repair round 2 (24) — workflow launched 2026-08-14

Failed batch-2 audit; repair + independent re-audit running: 775.082, 775.083,
775.084, 775.087, 784.03, 784.08, 790.23, 800.04, 812.014 (will replace the
partial), 815.06, 816.193*, 817.034, 817.568 (two lineages merged), 847.0135,
893.03, 893.13, 896.104, 921.0022 (the 624-row ranking chart), 921.0024,
943.0435, 18 USC 1956, 18 USC 924, 21 USC 841. (*316.193 — DUI.)

Tables that PASS re-audit get generated into `src/lib/statute-tables/` by
`scripts/generate-statute-tables.mjs`, run over the results snapshots
harvested from the workflow journals (each journal lives under its session's
`subagents/workflows/<run-id>/journal.jsonl` in the Claude project dir, so
results survive a killed session). Tables that fail again go to round 3 with
their new finding lists.

## Not yet built (~29) — batch 3

From the remaining-54 list minus batch-2 builds: 921.141, 212.15, 213.29,
316.1939, 322.2615, 322.271, 517.021, 517.301, 517.302, 776.032, 782.071,
794.005, 794.0115, 815.04, 893.147, USC: 15/636, 18/1028A, 18/1341, 18/1347,
18/1348, 18/1349, 18/20, 18/24, 18/371, 18/2252, 18/2252A, 18/3553, 21/846,
26/7201.

## Process learnings carried in the prompts

Four named failure classes, each found in a real table: (1) no-lower-bound
provisions hiding mid-list (cargo; 775.082(9)(a)1.o; 817.568(2)(b)); (2)
invented ceilings — 841(b)(1)(B) "or more" given the (A) threshold as a max;
(3) penalty caps typed as triggers — 924(p)'s $2,500 civil cap in max; (4)
quote splices. Completeness and correctness are separate axes; the auditor
sets completeness. Materiality rule per D12.

## After the fact layer

P3 write (pairs, wave 4 last) → P4 adversarial review per pair → P5 fix,
re-review, commit. Page DoD is in the old session's /goal, restated: every
claim traces to a table row, check:claims passes, six reader questions
answered, charge-specific headings, compliance judged by read not word-list,
one adversarial round passed.
