import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TOOLS_LIVE, articles, primaryNav, tools } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import CallToAction from "@/components/CallToAction";
import PageHero from "@/components/PageHero";
import { RESOURCES_PHOTO } from "@/lib/hero-photos";

/**
 * The Layer 2 hub.
 *
 * RESOLVES the two-homes conflict recorded in CASES-WE-DEFEND-PLAN.md Section
 * 11.3. Layer 2 lives at /resources, not /guides, because /resources is the
 * structure that came out of the client meeting and is already in the header
 * and the side menu. /guides now redirects here rather than competing with it.
 *
 * [PENDING: Layer 2 content] The children are stubs. Build order per
 * CASES-WE-DEFEND-PLAN.md Section 5 as amended by D32 (2026-08-20, bond
 * estimator not built): sentencing calculator, federal case timeline, seal
 * and expunge checker, after-an-arrest guide.
 *
 * The sentencing calculator is not linked from this page or any other until it
 * clears done-criteria C1 through C8 (Section 5.6). Listing it here as a link
 * would be the one thing that gate exists to prevent.
 */
export const metadata: Metadata = pageMetadata({
  title: "Resources | Hines McCarty Pavlidis",
  description:
    "Tools, guides, and articles explaining how a criminal case moves through the state courts of Hillsborough County and the Middle District of Florida.",
  path: "/resources",
  // Children are empty; nothing to index yet.
  noindex: true,
});

const RESOURCES = primaryNav.find((item) => item.href === "/resources");

export default function ResourcesPage() {
  // D73, D74: the hub mostly lists tools and guides; with them hidden, the
  // menu goes straight to Articles and this page is not found.
  if (!TOOLS_LIVE) notFound();
  return (
    <>
      <PageHero title="Resources" photo={RESOURCES_PHOTO}>
        <p>
          Plain-language explanations of how a case moves, what the terms on the
          paperwork mean, and what happens at each stage. Written for the moment
          before you know what you are dealing with.
        </p>
      </PageHero>

      <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {/* Cards read from the same nav data as the header and side menu, so
              the hub and the navigation cannot describe Resources differently. */}
          <ul className="grid gap-6 md:grid-cols-2">
            {RESOURCES?.children?.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className="group flex h-full min-h-[280px] flex-col border border-navy/20 bg-white p-10 transition-colors hover:border-navy lg:min-h-[320px] lg:p-12"
                >
                  <h2 className="font-display text-3xl font-medium leading-tight transition-colors group-hover:text-bronze lg:text-4xl">
                    {child.label}
                  </h2>
                  <p className="mt-6 flex-1 text-lg leading-relaxed text-charcoal">
                    {child.description}
                  </p>
                  <span className="mt-8 inline-block text-base underline decoration-1 underline-offset-4 transition-colors group-hover:text-bronze">
                    Browse
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/*
        Everything Layer 2 will contain, listed on the hub rather than hidden a
        click down. Order is build priority from CASES-WE-DEFEND-PLAN.md
        Section 5, NOT popularity: there is no traffic data yet, and "most
        popular" on a law firm site is a claim about something unmeasured.

        Unpublished items are named and described but never linked, so the page
        can be useful now without pointing at a 404. The sentencing calculator
        stays unlinked even after it is built, until it clears C1 through C8.
      */}
      <section data-bg="white" className="bg-white pb-20 text-navy lg:pb-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Tools and guides
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal">
            Each one answers a question people ask at a specific point in a
            case. They are listed in the order they are being built.
          </p>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => {
              const inner = (
                <>
                  <span className="eyebrow text-navy/70">
                    {tool.kind}
                  </span>
                  <span className="mt-4 block font-display text-2xl leading-tight">
                    {tool.label}
                  </span>
                  <span className="mt-3 block flex-1 leading-relaxed text-charcoal">
                    {tool.description}
                  </span>
                  <span className="mt-6 inline-block text-sm text-navy/70">
                    {tool.published ? "Open" : "In progress"}
                  </span>
                </>
              );

              return (
                <li key={tool.href} className="flex">
                  {tool.published ? (
                    <Link
                      href={tool.href}
                      className="group flex h-full w-full flex-col border border-navy/20 p-8 transition-colors hover:border-navy"
                    >
                      {inner}
                    </Link>
                  ) : (
                    <div className="flex h-full w-full flex-col border border-dashed border-navy/20 p-8">
                      {inner}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-16 border-t border-navy/15 pt-10">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              Articles
            </h2>
            {articles.length ? (
              <ul className="mt-8 space-y-3">
                {articles.map((article) => (
                  <li key={article.href}>
                    <Link
                      href={article.href}
                      className="text-navy underline decoration-1 underline-offset-4 transition-colors hover:text-bronze"
                    >
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-6 max-w-2xl leading-relaxed text-charcoal">
                Articles go up last, because each one is written to link back to
                a charge page that explains the offence in full. Those come
                first.
              </p>
            )}
          </div>
        </div>
      </section>

      <CallToAction heading="Talk to an attorney about your case." tone="navy" />
    </>
  );
}
