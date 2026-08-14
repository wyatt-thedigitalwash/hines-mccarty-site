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

## Verified and applied (68)

In `src/lib/statute-tables/` (67 generated files) plus the hand-built partial
812.014 in statutes.ts, pending its round-3 replacement. Every table passed
the independent build-then-audit pipeline; the full list is
`src/lib/statute-tables/index.ts` and the claim checker prints it on every
run. Notables: 921.0022 ranking chart (624 rows, audited by programmatic
multiset diff), 775.082 (54), 817.568 (56, two build lineages merged), 893.13
(47), 316.193 (50), 893.135 (94), 921.0024 (48 covering the full worksheet
face and key). Zero-row whole-section tables exist for the definitional and
procedural sections (776.032, 517.021, 18 USC 20/24/3553, 322.271, 794.005) so
exhaustive claims about them stay checkable.

## Round 3, the last two (in flight 2026-08-14)

- **812.014**: repair-2 build is complete and correct except one typed field;
  the two round-2 findings were (a) an audit-prompt vocabulary artifact
  (dwelling IS a defined scope) and (b) min 3000 typed inclusive for "in
  excess of $3,000". Patch: minExclusive true on the (6) row; keep dwelling
  scopes. Independent re-audit, then it replaces the hand-built partial.
- **212.15**: batch-3 build missed one verifiable level (Level 1 on (2)(b),
  chart-listed). Patch and re-audit.

Tables that PASS re-audit get generated into `src/lib/statute-tables/` by
`scripts/generate-statute-tables.mjs`, run over the results snapshots
harvested from the workflow journals (each journal lives under its session's
`subagents/workflows/<run-id>/journal.jsonl` in the Claude project dir, so
results survive a killed session).

## Known limitation, recorded before it bites

`GradingRow.min/max` carry dollar amounts and drug quantities in the same
numeric field with no unit marker. The claim checker's amount rules only fire
on `$`-prefixed sentence amounts, and primary-statute scoping keeps dollar
sentences away from most quantity ladders, but a page whose PRIMARY statute is
quantity-graded (893.135, 21 USC 841) could have a dollar claim judged against
grams. Before the drug-trafficking rewrite ships, either add a `unit` field to
the rows of those two tables or verify the checker stays quiet for the right
reasons.

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
