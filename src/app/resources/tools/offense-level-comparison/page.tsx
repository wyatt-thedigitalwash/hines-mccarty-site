import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Byline from "@/components/cases/Byline";
import {
  SpanTable,
  TripleTable,
} from "@/components/tools/OffenseLevelTables";
import {
  CANNOT_KNOW,
  COMPARISON_A,
  COMPARISON_B,
  COMPARISON_C,
  DEGREE_SPANS,
  FEDERAL_NOTE,
  H1,
  INTRO_NOTE,
  LEAD,
  NO_RELATIONSHIP,
  SPANS_BLURB,
  SPANS_HEADING,
  SPREAD,
  VERSION_NOTE,
} from "@/lib/tools/offense-level";

/**
 * The offense-level comparison instrument.
 *
 * Built to docs/build/tools/OFFENSE-LEVEL-INSTRUMENT-CONCEPT.md. Read that
 * document before changing anything here; the constraints below are its
 * Section 4 and Section 5, not house style.
 *
 * CLASSIFICATION, NEVER PREDICTION. This page renders what F.S. 921.0022
 * assigns. It renders no sentence, no range, no number of months, and no
 * statement about any reader. The forbidden strings are listed in the concept
 * document Section 4 and asserted by `check:offense-level`, so a future edit
 * that writes "your level" fails the build rather than shipping.
 *
 * NOT A RANKING. The comparisons are deliberately not ordered by severity and
 * carry no commentary about which charge a defendant would prefer. A higher
 * level is a different input to a worksheet this page does not run, and the
 * page never says it is worse.
 *
 * NO INPUTS. There is no form, no state, no event handler, and nothing client
 * side. A tool with no inputs cannot leak one, which is how C5 is satisfied by
 * construction rather than by policy.
 *
 * UNPUBLISHED. `published: false` on the registry row and noindex here, until a
 * person dispositions C1 through C8. The route exists so the two waiting charge
 * pages can link it; `check:routes` sweep B is what keeps "unpublished" a
 * checkable property instead of a promise.
 */
export const metadata: Metadata = pageMetadata({
  title:
    "How Florida Ranks Offenses: Degree Compared to Offense Level | Hines & McCarty",
  description:
    "See how Florida's offense severity ranking chart scores a charge, and why the degree written on a charging document does not tell you the offense level.",
  path: "/resources/tools/offense-level-comparison",
  // Unpublished pending the C1 to C8 disposition, and the byline below still
  // renders [NEEDS] markers. Crawlable so internal links pass, out of the index
  // until a person has signed off.
  noindex: true,
});

const H2_CLS = "font-heading text-2xl text-navy sm:text-3xl";
const P_CLS = "mt-4 max-w-[68ch] text-navy/75";

export default function OffenseLevelComparisonPage() {
  return (
    <main className="bg-linen">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
        <h1 className="font-heading text-3xl text-navy sm:text-4xl">{H1}</h1>
        <p className={`${P_CLS} text-lg`}>{LEAD}</p>
        <p className={P_CLS}>{INTRO_NOTE}</p>

        {/*
          Section 5, adjacent to the output and BEFORE the first comparison
          table. Assertion T4 checks that this element's index in the rendered
          HTML precedes the first `data-comparison`, so moving it below the
          tables fails the gate. Rule 4-7.13(a)(2) and plan Section 5.2: equal
          or greater prominence, close proximity, never footer-only. It is
          styled at least as prominently as the tables it precedes.
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

        <section className="mt-16">
          <h2 className={H2_CLS}>{COMPARISON_A.heading}</h2>
          <p className={P_CLS}>{COMPARISON_A.blurb}</p>
          <div className="mt-6">
            <TripleTable caption={COMPARISON_A.heading} rows={COMPARISON_A.rows} />
          </div>
        </section>

        <section className="mt-16">
          <h2 className={H2_CLS}>{COMPARISON_B.heading}</h2>
          <p className={P_CLS}>{COMPARISON_B.blurb}</p>
          <div className="mt-6">
            <TripleTable caption={COMPARISON_B.heading} rows={COMPARISON_B.rows} />
          </div>
        </section>

        <section className="mt-16">
          <h2 className={H2_CLS}>{COMPARISON_C.heading}</h2>
          <p className={P_CLS}>{COMPARISON_C.blurb}</p>
          <p className={P_CLS}>{COMPARISON_C.boundaryNote}</p>
        </section>

        <section className="mt-16">
          <h2 className={H2_CLS}>{SPREAD.heading}</h2>
          <p className={P_CLS}>{SPREAD.blurb}</p>
        </section>

        <section className="mt-16">
          <h2 className={H2_CLS}>{SPANS_HEADING}</h2>
          <p className={P_CLS}>{SPANS_BLURB}</p>
          <div className="mt-6">
            <SpanTable caption={SPANS_HEADING} spans={DEGREE_SPANS} />
          </div>
        </section>

        <section className="mt-16 border-t border-navy/15 pt-8 text-sm text-navy/70">
          <p className="max-w-[68ch]" data-version-note>
            {VERSION_NOTE}
          </p>
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
    </main>
  );
}
