import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Byline from "@/components/cases/Byline";
import SealExpungeChecker from "@/components/tools/SealExpungeChecker";
import * as C from "@/lib/tools/seal-expunge/copy";

/**
 * The record sealing eligibility checker.
 *
 * THE FIRST TOOL ON THIS SITE THAT TAKES INPUT. Everything else classifies or
 * looks up; this one asks five questions, plus two conditional follow-ups, and
 * tells a person which conditions of F.S. 943.059(1) their answers satisfy.
 *
 * WHAT KEEPS IT ON THE RIGHT SIDE OF RULE 4-7.13. It reports what the statute
 * says about the answers given, and it never says what will happen. Sealing
 * runs through a certificate from FDLE and then a petition the court decides,
 * and the page says so in the result itself rather than in a footer.
 *
 * WHAT KEEPS IT ON THE RIGHT SIDE OF RULE 4-1.18. There is no field for the
 * facts of a case. Seven multiple-choice questions about the STATUS of a
 * record is all it can receive, so detailed case facts from a prospective
 * client cannot arrive here and cannot conflict the firm out of a matter it
 * has not taken. That is a property of the form, not a policy about reading.
 *
 * THE RESULT IS NEVER GATED. The full answer renders before the email step,
 * and the email step offers a written copy rather than withholding anything.
 */
export const metadata: Metadata = pageMetadata({
  title: "Can This Record Be Sealed? Florida Sealing Checker | Hines & McCarty",
  description:
    "Answer five short questions and see which of the five conditions in Florida Statute 943.059 your answers satisfy, which they do not, and which need a lawyer to check.",
  path: "/resources/tools/seal-expunge-eligibility",
  // Unpublished-by-index pending the C1 to C8 disposition and the attorney
  // accuracy review. The byline below still renders [NEEDS] markers.
  noindex: true,
});

const P = "mt-4 max-w-[68ch] leading-relaxed text-navy/75";

export default function SealExpungeEligibilityPage() {
  return (
    <main className="bg-linen">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
        <h1 className="font-display text-3xl leading-tight text-navy sm:text-4xl">
          {C.H1}
        </h1>
        <p className={`${P} text-lg`}>{C.LEAD}</p>
        <p className={P}>{C.INTRO_NOTE}</p>

        {/*
          Section 5 disclosure, adjacent to the output and above it, per plan
          Section 5.2: equal or greater prominence, close proximity, never
          footer-only.
        */}
        <aside
          data-cannot-know
          className="mt-10 border-l-4 border-bronze bg-white px-6 py-6"
        >
          <h2 className="font-heading text-xl text-navy">{C.CANNOT_KNOW.heading}</h2>
          <p className="mt-3 max-w-[68ch] leading-relaxed text-navy/80">
            {C.CANNOT_KNOW.body}
          </p>
        </aside>

        <div className="mt-10">
          <SealExpungeChecker />
        </div>

        <section className="mt-14 border-t border-navy/15 pt-8 text-sm text-navy/70">
          <p className="max-w-[68ch]" data-privacy-note>
            {C.PRIVACY_NOTE}
          </p>
          <p className="mt-4 max-w-[68ch]" data-version-note>
            {C.VERSION_NOTE}
          </p>
          <p className="mt-4 max-w-[68ch]" data-no-relationship>
            {C.NO_RELATIONSHIP}
          </p>
        </section>

        <Byline />
      </div>
    </main>
  );
}
