/**
 * Site search, D76. Builds the index from the data and runs the queries real
 * visitors type, asserting the right page comes back near the top. If a data
 * change breaks a common search ("dui" stops finding the DUI page), the build
 * fails here rather than a visitor finding out.
 */
import { buildSearchIndex } from "../src/lib/search-index.ts";
import { prepare, search } from "../src/lib/search-engine.ts";

let failed = false;
const fail = (m: string) => { console.error(`  FAIL  ${m}`); failed = true; };

const index = buildSearchIndex();
const prepared = prepare(index);
const bytes = JSON.stringify(index).length;
console.log(`Site search (D76): ${index.length} entries, ${(bytes / 1024).toFixed(0)} KB before compression`);
if (bytes > 400_000) fail(`the index is ${(bytes / 1024).toFixed(0)} KB; keep it under 400 KB so the search opens fast on a phone`);

// [query, a URL (prefix) that must appear in the top N, N]
const CASES: [string, string, number][] = [
  ["dui", "/criminal-defense/dui-defense", 1],
  ["drunk driving", "/criminal-defense/dui-defense", 2],
  ["weed", "/criminal-defense/drug-possession-defense", 3],
  ["trafficking", "/criminal-defense/drug-trafficking-defense", 3],
  ["traff", "/criminal-defense/drug-trafficking-defense", 3],
  ["trafficing", "/criminal-defense/drug-trafficking-defense", 3],
  ["federal drug trafficking", "/federal-criminal-defense/drug-trafficking", 1],
  ["893.13", "/criminal-defense/drug-possession-defense", 3],
  ["sexual battery", "/criminal-defense/sexual-battery-defense", 1],
  ["domestic violence", "/criminal-defense/domestic-violence-defense", 1],
  ["target letter", "/federal-criminal-defense/target-letter-defense", 1],
  ["car accident", "/personal-injury/car-accidents", 2],
  ["uber", "/personal-injury/car-accidents/types-of-car-accidents", 3],
  ["18 wheeler", "/personal-injury/truck-accidents", 3],
  ["seal my record", "#topic-", 5],
  ["lily", "/attorneys/lily-mccarty", 1],
  ["maria pavlidis", "/attorneys/maria-pavlidis", 1],
  ["phone number", "/contact", 2],
  ["ppp loan", "/white-collar-defense/ppp-loan-fraud", 1],
  ["how long does the state have to charge me", "#topic-", 5],
];
for (const [q, want, n] of CASES) {
  const top = search(prepared, q, n).map((r) => r.u);
  if (top.some((u) => u.startsWith(want) || u.includes(want))) console.log(`  ok    "${q}" finds ${want} in the top ${n}`);
  else fail(`"${q}" should find ${want} in the top ${n}; got ${top.join(", ") || "nothing"}`);
}
if (search(prepared, "zzzxqv").length) fail(`a nonsense query returned results`);
else console.log(`  ok    a nonsense query returns nothing`);
for (const e of index) if (e.u.startsWith("/resources/") && !e.u.startsWith("/resources/articles")) fail(`hidden page in the index: ${e.u}`);

console.log(failed ? "\nSearch check FAILED." : "\nSearch check passed.");
process.exit(failed ? 1 : 0);
