import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Byline from "@/components/cases/Byline";
import SentencingWorksheet from "@/components/tools/SentencingWorksheet";
import {
  CANNOT_KNOW,
  DESCRIPTION_NOTE,
  DESIGNATION_NOTE,
  EMPTY_CELL_NOTE,
  FEDERAL_NOTE,
  H1,
  INTRO_NOTE,
  LEAD,
  NO_RELATIONSHIP,
  VERSION_NOTE,
} from "@/lib/tools/sentencing-worksheet";

/**
 * The sentencing worksheet.
 *
 * Built to docs/build/tools/SENTENCING-WORKSHEET-CONCEPT.md. Read that document
 * before changing anything here.
 *
 * A FORM, NOT A CALCULATOR. This page renders Rule 3.992 and fills the cells a
 * charge selection determines. It computes nothing. There is no total, no
 * subtotal, no range, no number of months and no statement about any reader.
 * `check:worksheet` asserts the total cells render empty for every one of the
 * selectable rows, exhaustively, so C1 holds by construction: if a total ever
 * renders, the build fails.
 *
 * THE EMPTY CELLS ARE THE PRODUCT. Most of this form is blank and each blank
 * carries the fact it needs. That is the disclosure, and it is inside the
 * artifact rather than beside it.
 *
 * UNPUBLISHED. `published: false` on the registry row and noindex here, until a
 * person dispositions C1 through C8. Two of those are human-only and neither has
 * happened: the attorney accuracy review (C7), and the independent read of
 * whether a partly filled form reads as a forecast to a frightened person, which
 * D25 says is exactly the judgment an independent reader should test.
 */
export const metadata: Metadata = pageMetadata({
  title:
    "The Florida Sentencing Worksheet, Mostly Empty | Hines McCarty Pavlidis",
  description:
    "See the Criminal Punishment Code worksheet a Florida court computes a sentencing score on, with only the cells a charge selection determines filled in.",
  path: "/resources/tools/sentencing-worksheet",
  // Unpublished pending the C1 to C8 disposition, and the byline below still
  // renders [NEEDS] markers. Crawlable so internal links pass, out of the index
  // until a person has signed off.
  noindex: true,
});

const P_CLS = "mt-4 max-w-[68ch] text-navy/75";

export default function SentencingWorksheetPage() {
  return (
    <div className="bg-linen">
      {/* A div, not <main>: the root layout already provides <main id="main">, and a second one fails WCAG landmark rules (D67). */}
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
        <h1 className="font-heading text-3xl text-navy sm:text-4xl">{H1}</h1>
        <p className={`${P_CLS} text-lg`}>{LEAD}</p>

        {/*
          Section 5, at Rule 4-7.12(d) prominence, ADJACENT TO THE FORM AND
          BEFORE IT. Assertion T5 checks that this element's index in the
          rendered HTML precedes `data-worksheet`, so moving it below the form
          fails the gate. It is styled at least as prominently as the form it
          precedes.
        */}
        <aside
          data-cannot-know
          className="mt-10 border-l-4 border-bronze bg-white px-6 py-6"
        >
          <h2 className="font-heading text-xl text-navy">{CANNOT_KNOW.heading}</h2>
          <p className="mt-3 max-w-[68ch] text-navy/80">{CANNOT_KNOW.body}</p>
        </aside>

        <p className={P_CLS}>{INTRO_NOTE}</p>
        <p className={P_CLS}>{EMPTY_CELL_NOTE}</p>

        <div className="mt-10">
          <SentencingWorksheet />
        </div>

        <section className="mt-16 border-t border-navy/15 pt-8 text-sm text-navy/70">
          {/* C6. The revision and the January 2026 correction, together. */}
          <p className="max-w-[68ch]" data-version-note>
            {VERSION_NOTE}
          </p>
          <p className="mt-4 max-w-[68ch]">{DESIGNATION_NOTE}</p>
          <p className="mt-4 max-w-[68ch]">{DESCRIPTION_NOTE}</p>
          <p className="mt-4 max-w-[68ch]">{FEDERAL_NOTE}</p>
          {/*
            C4: the no-relationship notice sits with the output, not only in the
            site footer.
          */}
          <p className="mt-4 max-w-[68ch]" data-no-relationship>
            {NO_RELATIONSHIP}
          </p>
        </section>

        {/*
          C7. Renders [NEEDS] markers rather than a date, because a false review
          date removes the signal that the page needs looking at.
        */}
        <Byline />
      </div>
    </div>
  );
}
