# Statute workflow result snapshots

Harvested {builds, audits} JSON from the statute-table workflow journals,
committed so the fact-layer provenance survives any session. Regenerate the
applied tables with:

    node scripts/generate-statute-tables.mjs \
      docs/build/statute-snapshots/batch1-results.json \
      docs/build/statute-snapshots/batch2-results.json \
      docs/build/statute-snapshots/batch3-results.json \
      docs/build/statute-snapshots/repair2-results.json

round3-812-014.json and round3-212-15.json are the PATCHED builds awaiting
independent re-audit (see STATUTE-TABLES.md "Round 3"). They are NOT applied
and must not be applied without a PASS audit; when their audits pass, add a
round3 snapshot ({builds, audits}) to the generator invocation.
