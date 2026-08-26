import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";
import CallToAction from "@/components/CallToAction";
import HandledBy from "@/components/attorneys/HandledBy";
import { injuryIsIndexable, injuryPages, injuryPractices } from "@/lib/site";

/**
 * The personal injury hub. The second of the firm's two practices.
 *
 * WHY IT IS SEPARATE FROM /cases-we-defend. That hub is criminal defence and
 * its reader is accused. This reader was injured. Same firm, opposite posture,
 * and one hub cannot address both without one of them reading as an
 * afterthought.
 *
 * WHAT IT DELIBERATELY DOES NOT DO. It states no limitations period, no case
 * value, and no outcome. Those are the three things a personal injury page is
 * most tempted to assert and most likely to get wrong, and the pages that will
 * carry them are not written yet. The law is recorded (F.S. 95.11, 768.81,
 * 627.736, 627.727, 768.19, 768.21, 768.0427 and ch. 2023-15 all sit in
 * PAGE-SOURCES.md), so those pages will quote rather than paraphrase.
 *
 * NOINDEX until the two silo pillars are written. A hub whose spokes do not
 * exist is a page that promises depth it has not got, which is the same reason
 * the unwritten charge pages stayed out of the index.
 */
export const metadata: Metadata = pageMetadata({
  title: "Personal Injury | Hines & McCarty, Brandon FL",
  description:
    "The personal injury side of Hines & McCarty: car and truck collision claims in Hillsborough County and across Tampa Bay.",
  path: "/personal-injury",
  /*
    The hub follows its own spokes. A hub is indexable once at least one page
    beneath it is, and every injury page waits on the attorney review, so this
    is false today and flips with the rest of the practice rather than needing
    to be remembered separately.
  */
  noindex: !injuryPages.some(injuryIsIndexable),
});

const P = "mt-5 max-w-[68ch] text-lg leading-relaxed";

export default function PersonalInjuryHub() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", href: "/" },
              { name: "Personal Injury", href: "/personal-injury" },
            ]),
          ),
        }}
      />

      <section data-bg="navy" className="bg-navy pt-36 pb-20 lg:pt-44 lg:pb-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <h1 className="max-w-4xl font-display text-4xl leading-[1.08] tracking-tight text-linen sm:text-5xl lg:text-6xl">
            If someone else caused it, you should not be the one paying for it.
          </h1>
          <p className={`${P} text-linen/75`}>
            Hines &amp; McCarty handles injury claims arising from car and
            commercial vehicle collisions in Hillsborough County and across
            Tampa Bay. That work sits alongside the firm&apos;s criminal
            practice rather than replacing it, and the same collision sometimes
            produces both.
          </p>
        </div>
      </section>

      <section data-bg="white" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <h2 className="font-display text-3xl leading-tight text-navy sm:text-4xl">
            What this side of the firm covers
          </h2>

          <ul className="mt-10 grid gap-8 lg:grid-cols-2">
            {injuryPractices.map((p) => (
              <li
                key={p.key}
                className="border border-navy/15 p-8"
                data-injury-practice={p.key}
              >
                <h3 className="font-display text-2xl leading-tight text-navy">
                  {p.published ? (
                    <Link href={p.href} className="hover:text-bronze">
                      {p.title}
                    </Link>
                  ) : (
                    p.title
                  )}
                </h3>
                <p className="mt-3 max-w-[60ch] leading-relaxed text-charcoal">
                  {p.summary}
                </p>
                {!p.published && (
                  <p className="mt-4 font-heading text-xs uppercase tracking-wide text-navy/45">
                    In progress
                  </p>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-14 max-w-[68ch] border-l-4 border-bronze bg-navy/[0.03] px-6 py-6">
            <h2 className="font-heading text-xl text-navy">
              What this page will not tell you
            </h2>
            <p className="mt-3 leading-relaxed text-charcoal">
              It does not say how long you have to file, what a claim is worth,
              or what any case will do. Florida changed both its limitations
              period and its comparative fault rule in 2023, and which version
              applies turns on when the claim arose rather than on when someone
              asks about it. Those are questions for a lawyer looking at your
              dates and your paperwork, and this page would rather say nothing
              than say something that is right for most people and wrong for
              you.
            </p>
          </div>
        </div>
      </section>

      {/* Renders only when an attorney is mapped to this practice. Colton
          Trina was confirmed 2026-08-26, so it renders here and nowhere on the
          criminal side, where Open Question 2 is still open. */}
      <HandledBy href="/personal-injury" />

      <CallToAction
        heading="Talk to an attorney about your injury claim."
        body="Consultations are confidential. If you or someone you care about has been hurt in a collision, reach out and we will tell you what the next step looks like."
        tone="white"
      />
    </>
  );
}
