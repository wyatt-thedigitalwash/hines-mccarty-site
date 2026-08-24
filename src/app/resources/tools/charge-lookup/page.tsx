import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Byline from "@/components/cases/Byline";
import ChargeLookup from "@/components/tools/ChargeLookup";
import {
  ATTORNEY_NOTE,
  CANNOT_KNOW,
  LEAD,
  NOT_THIS,
  NO_RELATIONSHIP,
  SCOPE_NOTE,
  SOURCE_NOTE,
  VERSION,
  VERSION_NOTE,
} from "@/lib/tools/charge-lookup/copy";
/**
 * Imported HERE, in the server component, and handed to the island as a prop.
 *
 * This module derives the map from `charges`, so importing it pulls the
 * authored prose of all 30 charge pages. On the server that is free; inside
 * the island it is not. See lib/tools/charge-lookup/links.ts for the
 * measurement and for what the split does and does not buy.
 */
import {
  CHARGE_MAP_DATA,
  LINKED_SECTION_COUNT,
} from "@/lib/tools/charge-lookup/charge-map";

/**
 * The charging-document decoder.
 *
 * Built to docs/build/tools/CHARGING-DOCUMENT-DECODER-CONCEPT.md. Read that
 * document before changing anything here.
 *
 * THE INPUT IS CASE DATA. This is the only asset on the site that takes free
 * text from a reader, and what a reader types here is the citation off their
 * own charging document. Section 3's six negatives are load-bearing: nothing
 * typed here leaves the browser, reaches a URL, or is persisted anywhere. The
 * resolution runs against a dataset shipped in the bundle. `check:charge-lookup`
 * T6 enforces this by static analysis over the island and everything it
 * imports, because it is the criterion a well-meaning later change is most
 * likely to break.
 *
 * IT REFUSES RATHER THAN GUESSING. No nearest match, no fuzzy cite, no falling
 * back to the section when the paragraph cannot be reached. A refusal is
 * visible to a reader; a confident wrong paragraph is not, and TOOLS.md's
 * standard is that a decoder resolving to the wrong paragraph is worse than no
 * decoder.
 *
 * UNPUBLISHED. `published: false` on the registry row and noindex here, until
 * C7's attorney accuracy review and the read of the refusal copy happen. Note
 * the sequencing fact recorded in the concept document Section 12 question 3:
 * zero of the 30 charge pages are published today, so every link this tool can
 * emit points at a route that exists and is noindex. That is coherent now and
 * becomes a live question the day the first charge page publishes.
 */
export const metadata: Metadata = pageMetadata({
  title: "What Does That Statute Number Mean? | Hines & McCarty",
  description:
    "Type the statute number from a charging document, booking sheet, or indictment and see what that paragraph of Florida or federal law actually says.",
  path: "/resources/tools/charge-lookup",
  // Unpublished pending C7. Crawlable so internal links pass, out of the index
  // until a person has signed off on the resolutions and the refusal copy.
  noindex: true,
});

const H2_CLS = "font-heading text-2xl text-navy sm:text-3xl";
const P_CLS = "mt-4 max-w-[68ch] text-navy/75";

export default function ChargeLookupPage() {
  return (
    <main className="bg-linen">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
        <h1 className="font-heading text-3xl text-navy sm:text-4xl">
          What does that statute number mean?
        </h1>
        <p className={`${P_CLS} text-lg`}>{LEAD}</p>

        {/*
          Section 5, server-rendered and ABOVE the input, so it is present with
          JavaScript off (T9) and is read before anything is typed rather than
          after an answer arrives. The island renders it again on every result
          and every refusal, which is what T4 checks.
        */}
        <aside
          data-cannot-know
          className="mt-10 border-l-4 border-bronze bg-white px-6 py-6"
        >
          <h2 className="font-heading text-xl text-navy">
            {CANNOT_KNOW.heading}
          </h2>
          <p className="mt-3 max-w-[68ch] text-navy/80">{CANNOT_KNOW.body}</p>
        </aside>

        <ChargeLookup chargeMap={CHARGE_MAP_DATA} />

        <section className="mt-16">
          <h2 className={H2_CLS}>What this page does not do</h2>
          <p className={P_CLS}>{NOT_THIS}</p>
          <p className={P_CLS}>{SCOPE_NOTE}</p>
        </section>

        <section className="mt-16">
          <h2 className={H2_CLS}>Sections this page can answer about</h2>
          <p className={P_CLS}>{SOURCE_NOTE}</p>
          <p className={P_CLS}>
            {`Of the ${VERSION.tableCount} sections below, ${LINKED_SECTION_COUNT} have a page on this site to read next. The rest resolve and link nowhere, which is stated rather than filled in.`}
          </p>
          <ul
            data-covered
            className="mt-6 grid gap-x-8 gap-y-2 text-sm text-navy/75 sm:grid-cols-2"
          >
            {VERSION.tables.map((t) => (
              <li key={t.cite} data-section={t.cite}>
                {t.cite}
                <span className="text-navy/50">
                  {t.completeness === "partial"
                    ? ", read in part, recorded "
                    : ", read in full, recorded "}
                  {t.fetched}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 border-t border-navy/15 pt-8 text-sm text-navy/70">
          <p className="max-w-[68ch]" data-version-note>
            {VERSION_NOTE}
          </p>
          {/* C4: the no-relationship notice sits with the output. */}
          <p className="mt-4 max-w-[68ch]" data-no-relationship>
            {NO_RELATIONSHIP}
          </p>
          <p className="mt-4 max-w-[68ch]" data-attorney-note>
            {ATTORNEY_NOTE}
          </p>
        </section>

        {/*
          C7 and C11. Renders [NEEDS] markers rather than a date, because a
          false review date removes the signal that the page needs looking at.
        */}
        <Byline />
      </div>
    </main>
  );
}
