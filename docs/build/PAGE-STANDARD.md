# The Service Page Standard

D67. What every charge page is built to. The reference implementation is
`/criminal-defense/sexual-battery-defense` (the `state/sexual-battery-defense`
entry in `CHARGE_CONTENT`, `src/lib/site.ts`). When this file and that page
disagree, raise it; do not pick one silently.

Who reads this: anyone, human or agent, writing, restructuring or judging a
charge page. Every rule here is either enforced by a check (named in brackets)
or judged by a reviewer against this file.

---

## 1. Who the page is for

Someone who was just arrested, charged, or contacted by investigators, or a
family member of that person. They are frightened, reading on a phone, and want
three answers fast: **what am I facing, what happens next, what do I do right
now.** Everything else is for the reader who wants more and goes looking.

A page succeeds when that reader gets the three answers without scrolling past
anything they did not ask for, and can then find any deeper question in one
tap.

---

## 2. The reading order

Fixed for every charge page. Section ids, kinds and fields are the ones in
`src/lib/charge-page.ts`.

| # | Block | Data | Rule |
|---|---|---|---|
| 1 | **Hero** | `title` (H1), `lead`, `heroCta` | H1 is a question in the reader's situation: "Charged with X in Hillsborough County?" (federal: "...in Tampa federal court?" or "...in the Middle District of Florida?"; investigation pages: "Got a federal target letter...?"). The lead is 2 or 3 sentences: the range of what they face and the facts that decide it. `heroCta` is the phone. |
| 2 | **Jump links** | automatic | Renders from the Tier 2 headings plus "The details" and "Common questions". |
| 3 | **What you're facing.** | Tier 2, `kind: "penalties"` | See section 4. |
| 4 | **What happens next.** | Tier 2, `kind: "timeline"` | Real intervals from the rules, in order. 3 to 6 steps. Every `when` is a real time ("Within 24 hours of arrest"), never "soon". |
| 5 | **What to do right now.** | Tier 2, `kind: "bullets"`, `background: "navy"` | 3 to 5 bullets. Each is one action and the reason for it, in two or three short sentences. The first sentence is the card's headline: a short instruction of 64 characters or fewer ("Keep every paper you were given."); a longer one renders the card with no headline. Specific to this charge (a no-contact order on violence charges, the 10-day license deadline on DUI, preserving records on fraud). |
| 6 | **The details.** | Tier 3 sections, `detailsLayout: "grid"` | See section 5. |
| 7 | **Common questions** | `faq` | See section 6. |
| 8 | **Who handles these cases.** | automatic | From `handlesChargeHrefs` (D65). |
| 9 | **Call band** | automatic | |

Headings for the three Tier 2 sections are exactly "What you're facing.",
"What happens next." and "What to do right now." They are the page's spine and
every page has them. Every other heading is specific to the charge [check:pages
rejects generic and reused headings].

---

## 3. What flexes by charge

The order never changes. What goes inside each block does. Decide it from the
law and the brief, not from the sexual battery page.

| Shape | Applies to | What changes |
|---|---|---|
| **Florida degrees** | State charges, and the Florida rows on mixed pages | Each row's `degree` is the Florida degree, so the ladder groups rows into one card per degree. Rows run lightest to heaviest. Each row's `situation` is what the person did or had, in their words. |
| **Federal ranges** | Federal pages, and the federal rows on mixed pages | Florida degrees do not exist here. Each row's `degree` is a short label for its tier or class ("Federal, base tier", "Federal felony"), so the ladder gives each its own card. Rows give the statutory maximum and any mandatory minimum by the facts that trigger them (drug type and amount, gun use, loss amount). Say plainly that the Sentencing Guidelines, not the statute alone, drive the actual sentence. |
| **Before a charge** | Target letter, and white-collar pages where readers are usually under investigation (tax evasion, securities, bank fraud, PPP, healthcare) | "What happens next" starts at the investigation (letter, subpoena, agent visit), not at arrest. "What to do right now" leads with not talking to agents and preserving records. |
| **Two clocks** | DUI | The 10-day license deadline is the first bullet of "What to do right now" and the first timeline step. The license case and the criminal case are explained as two separate tracks. DUI manslaughter belongs on this page (D67); the homicide page links to it. |
| **Overview** | Sex crimes, corporate fraud | An overview page introduces the group and routes to the specific pages; it does not answer the specific pages' questions. Corporate fraud stays a short overview (D12, D67). |

---

## 4. "What you're facing."

- **Always the ladder** (`display: "ladder"`), on every page: one outlined
  card per penalty level, the penalty as the card's heading, the situations
  listed under it. One look for this section on every page (D67; the older
  three-column table is retired from pages on the standard).
- Write penalty headings in plain words: "Up to 20 years", "5 to 40 years",
  "10 years to life", not "not less than 5 years and not more than 40 years".

- A reader must be able to find their situation in one scan. Group by penalty
  (ladder) when rows share penalties; one row per distinct situation.
- Every row states the maximum. A row whose penalty differs from its level
  carries its own maximum. Mandatory minimums are stated as minimums.
- `note` on a row is one short sentence that changes how to read the row
  ("Asking is enough. No touching is needed."). Not a second fact dump.
- Attempts and other offenses written into the same law go in `related` rows,
  not between the levels.
- Prose under the ladder: at most two short paragraphs, only for rules that
  change every row (a step-up for multiple offenders, higher fines). No offense
  levels in the main reading path; they belong in a Tier 3 topic if anywhere.

---

## 5. "The details." (Tier 3)

- `detailsLayout: "grid"`: one full-width box per topic.
- **Each topic label (`group`) is the reader's question**, ending in "?"
  ("Which charge am I facing?", "Can it ever come off my record?"). Not a
  noun phrase, not legal language.
- **Each topic has a `groupSummary`**: one line saying what is inside, not a
  one-line legal conclusion.
- 5 to 9 topics. Merge topics that answer the same question; cut topics a
  reader of this charge would not ask.
- Inside a topic, each section's `heading` is specific and plain.
- Paragraphs 4 sentences or fewer; no run over 300 words without a break
  [check:readability].
- Use `bullets` for parallel items (a list of circumstances, deadlines), `prose`
  for explanation, `guidance` for "your rights / what your lawyer looks at".
- `statutes` (verbatim text) only where the exact words matter to the reader
  (a definition that decides the case). Never in Tier 2.
- **3 to 6 `link`s per page** across the topics, each to a live page that
  answers what that topic raises: the tools (charge lookup, offense levels,
  sealing checker, sentencing worksheet), the guides, the sibling page, a
  related charge. Link labels say what the target does. No link for its own
  sake.
- **Name offices, not office holders.** "The State Attorney for the Thirteenth
  Judicial Circuit", not the person's name. Names go stale the day someone
  leaves office and the page is then wrong (D67).

Usual topics, chosen per charge, not all on every page: which charge am I
facing; what does the State have to prove; is there a mandatory minimum; is
there a deadline to charge me; what are my rights and what will my lawyer look
at; what happens after a conviction (registration, license, immigration,
professional license, forfeiture, restitution); can it come off my record; who
decides what happens in my case.

---

## 6. "Common questions" (FAQ)

- 4 to 6 questions, each a real search question recorded in the brief or People
  Also Ask, with its `source` [check:pages FAQ provenance].
- Each answer stands alone in 2 to 4 sentences: the direct answer first ("No,
  not for the basic charge."), then only what makes it true. It is the short
  answer; the topic holds the full rule.
- **No fact is repeated in full across the page.** If the ladder lists the
  penalties, the FAQ gives the range and the topic points to the ladder. The
  question text is what search engines match; the answer does not need to
  restate a whole topic to rank.
- The FAQPage schema is generated from this field, so visible text and schema
  always match.

---

## 7. Writing

- Grade 8 or below per page, 9.5 per section; average sentence under 20 words;
  "you" in every section [check:readability, D41].
- No statute or subsection numbers in body copy. They go in `sources` and
  `statutes` [check:readability].
- Plain words for legal terms, with the term in brackets the first time when
  the reader will see it on paperwork ("withholds adjudication (does not
  formally find you guilty)").
- No em dashes [project rule]. No "expert", "specialist", "best",
  "guarantee", no outcome predictions, no case results [Florida Bar 4-7.13,
  4-7.14; check:claims].
- Short is better than complete-sounding. Cut every sentence the reader would
  not miss.

---

## 8. Accuracy (the hard rule)

Restructuring and rewriting are where legal errors come from: earlier rounds
on these pages produced about 340 of them. So:

- **No new legal facts.** A rewrite may only rephrase, move, merge, or cut what
  the page and its recorded sources already say. A fact not already on the page
  needs a fetched, recorded source [check:unverified, check:provenance].
- **No dropped qualifiers.** "Generally", "except", "unless", "if the State
  proves", "for an offense on or after" carry legal meaning. Shortening a
  sentence never removes one.
- **No changed numbers.** Degrees, years, dollar amounts, ages, dates and
  deadlines are copied exactly [check:claims compares amounts and degrees
  against verified rows].
- Every changed sentence is compared against the original by a reviewer who
  did not write it.

---

## 9. Search

- One row in `src/lib/search-map.ts` naming the page's primary query from its
  brief, its topic, and its siblings [check:search-map, D66].
- `metaTitle`: "[Charge] Lawyer in Tampa | Hines McCarty Pavlidis". If that is
  over 60 characters, drop the firm name: "[Charge] Lawyer in Tampa,
  Florida". The search words always win; the firm name is shown above every
  result anyway, from the site-name markup on the home page (D69). Unique,
  with the topic [check:seo, check:search-map].
- `metaDescription`: 70 to 160 characters, unique, and it names Tampa (state
  pages: "in Tampa or elsewhere in Hillsborough County"), because the searches
  these pages target say Tampa [check:seo].
- The topic appears in the H1 and the meta title [check:search-map S6].
- Sibling pages (same subject, different law or court) link to each other
  once, from the topic that explains the difference [check:seo P6].
- At least 60% of the page's text appears on no other page; no two pages share
  over 30% [check:seo P7].

---

## 10. Design

Use the tokens in `src/components/cases/ui.ts` for every type style, colour and
space. The components are fixed: `PenaltyLadder`, the timeline, the navy do-now
band, `DetailsGrid`, the FAQ, `HandledBy`. Content changes; components do not.
A page that seems to need a new component is a question for the client, with
options, before anything is built.

Rejected before, do not reintroduce: dividing lines between sections, gold
borders, callout boxes, a lede paragraph above sections, tags or pills on
topics, fact-row columns, serif FAQ questions, a staged or illustrated
timeline, CTA buttons inside the timeline.

---

## 11. Accessibility

Zero axe violations at 1440px and 390px [audit:pages]. One H1; headings in
order; every image has alt text; every control reachable and visible by
keyboard. The components already meet this; content changes should not break
it, and the audit proves it per page.

---

## 12. Done means

1. Every check passes in `npm run verify` (pre-build and post-build).
2. `npm run audit:pages -- <href>`: zero violations at both widths.
3. Someone has looked at the desktop and phone screenshots and the page reads
   in the order above, with nothing out of place.
4. The accuracy comparison (section 8) found no changed meaning.
5. The page is in `STANDARD_PAGES` in `scripts/check-pages.mts`, so the rules
   above that a script can measure hold from then on.

Attorney review comes after, on the finished page. Publishing waits for it.

---

## 13. Personal injury pages (D72)

The same standard, adapted for a reader who was hurt in a crash rather than
charged with a crime. Their questions: who pays my bills, what can I recover,
how long do I have, what do I do now. Enforced by `check:injury`.

**Pillars** (`/personal-injury/car-accidents`, `/personal-injury/truck-accidents`)
carry the full spine:

| Block | Data | Rule |
|---|---|---|
| Hero | `title`, `lead`, photo | H1 is the reader's situation with the topic: "Hurt in a car accident in Tampa?" The lead is 2 or 3 sentences on what decides the claim. The hero keeps its photo (client direction). |
| **Who pays.** | Tier 2, `kind: "penalties"`, `display: "ladder"` | One card per source of payment, in the order Florida law makes them pay (your own coverage first on a car claim; on a truck claim, each party that can be responsible). `degree` is the card label ("Pays first", "The driver's employer"); `maximum` is the card heading; `situation` and `note` say what it covers and its conditions. |
| **What happens next.** | Tier 2 timeline, 3 to 6 steps | Real deadlines: the 14-day treatment window, filing limits, evidence windows. |
| **What to do right now.** | navy, 3 to 5 bullets | Each opens with a short instruction of 64 characters or fewer. |
| The details | `detailsLayout: "grid"`, 5 to 9 topics | Topics as the reader's questions, each with a one-line summary. |
| Common questions | 4 to 6, each with a source | |
| In more depth | automatic | The pillar's spokes as boxes. |
| Who handles these cases | automatic | Colton Trina (`handlesChargeHrefs`). |

**Spokes** (the seven pages under the pillars) go deeper on one subject and do
not repeat the pillar's spine:

| Block | Rule |
|---|---|
| Hero | H1 names the subject ("Car accident insurance claims in Tampa"). |
| **The short answer.** | Tier 2 prose, 1 or 2 short paragraphs: the direct answer to the page's question. |
| The details | 3 to 6 topics as questions, with summaries. |
| Common questions | 3 to 5, each with a source. |
| Links | 1 to 4, one of them back to the pillar (for the deadlines and the steps to take now). |

Everything else in sections 7 to 11 applies unchanged: plain English at grade
8, no citations in body copy, no fact added or changed in a rewrite, every
qualifier kept, Florida Bar rules, no em dashes. Scope disclaimers ("What
this page does not cover") are not sections. A pillar and its spokes must not
repeat each other: the pillar summarises and links; the spoke holds the full
treatment (check:seo P7 measures it).

**Titles**: "[Subject] Lawyer in Tampa | Hines McCarty Pavlidis" for the
pillars; "[Subject] in Tampa | Hines McCarty Pavlidis" for spokes, dropping the
firm name when over 60 characters (D69).
