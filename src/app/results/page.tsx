import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import CallToAction from "@/components/CallToAction";
import EmptyState from "@/components/EmptyState";
import PageHero from "@/components/PageHero";
import { CASE_RESULTS_PHOTO } from "@/lib/hero-photos";

/**
 * Case results. The highest-compliance-risk page on the site.
 *
 * [NEEDS: real, publishable case results with client consent and a compliance
 * pass] WEBSITE-PLAN.md Open Question 3. Nothing is published here and nothing
 * is invented to fill the space. An empty results page is a non-event; a
 * fabricated one is a Rule 4-7.13(b) problem.
 *
 * What this page must never become, all observed on competitor sites and
 * catalogued in docs/research/avoid.md Section 2c:
 *   - item 21: outcomes listed with no results-may-vary disclaimer
 *   - item 23: large result sets with no proximate disclaimer
 *   - item 24: aggregate win claims, "2,000+ Cases Won" and the like
 *   - item 25: review counts used as a headline
 *
 * County pages (/results/hillsborough-county and siblings) are NOT built.
 * WEBSITE-PLAN.md Tier 0 gates them on a county having 5 or more real published
 * results, because two results on a page reads as weakness rather than proof.
 */
export const metadata: Metadata = pageMetadata({
  title: "Case Results | Hines McCarty Pavlidis",
  description:
    "How Hines McCarty Pavlidis publishes case results: only with client consent, described accurately, and never as a prediction of any future outcome.",
  path: "/results",
  // Nothing published yet.
  noindex: true,
});

export default function ResultsPage() {
  return (
    <>
      <PageHero title="Case results" photo={CASE_RESULTS_PHOTO}>
        <p>
          A matter appears on this page only when the client has given informed
          consent to publish it and the outcome can be described accurately.
          Nothing here is a prediction.
        </p>
      </PageHero>

      <EmptyState
        heading="No results are published yet"
        body="Rather than list outcomes we cannot describe accurately or have not been given permission to share, this page stays empty until there is something to put on it. If you want to know how the firm has handled a matter like yours, ask during a consultation."
        linkHref="/cases-we-defend"
        linkLabel="Cases we defend"
      />

      {/*
        The disclaimer is placed now, before any result exists, so it can never
        be forgotten later. Rule 4-7.13(b) requires it clear, conspicuous, and
        PROXIMATE to the results themselves, not buried in a footer, which is
        the exact failure avoid.md items 21 and 23 record on competitor sites.
        When results are added, they go directly above this block.
      */}
      <section data-bg="white" className="bg-white pb-20 text-navy lg:pb-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <p className="border-t border-navy/20 pt-8 text-sm leading-relaxed text-navy/70">
            Every case is different and depends on its own facts. Prior results
            do not guarantee or predict a similar outcome in any other matter.
          </p>
        </div>
      </section>

      <CallToAction heading="Talk to an attorney about your case." tone="navy" />
    </>
  );
}
