import type { Metadata } from "next";
import {
  StateForumMap,
  FederalForumMap,
  WhiteCollarForumMap,
  WhiteCollarDocumentMap,
} from "@/components/cases/illustrations/ForumMaps";
import { florida, usa } from "@/components/cases/generated/map-paths";
import { rawFlorida, rawUsa } from "@/components/cases/generated/map-source";

export const metadata: Metadata = {
  title: { absolute: "Illustration preview" },
  robots: { index: false, follow: false },
};

/**
 * Review harness for the three forum illustrations. Throwaway, like
 * /hero-preview. Delete once the illustrations are approved and wired into the
 * silo hubs.
 *
 * Renders each at three sizes on both backgrounds, so optical weight and
 * legibility can be judged rather than guessed at.
 */

const SIZES = [320, 480, 640];

const MAPS = [
  { key: "state", label: "State: Florida, 13th Circuit marked", Map: StateForumMap },
  {
    key: "federal",
    label: "Federal: United States, M.D. Fla. divisions marked",
    Map: FederalForumMap,
  },
  {
    key: "white-collar-doc",
    label: "White-collar OPTION A: the record predates the charge",
    Map: WhiteCollarDocumentMap,
  },
  {
    key: "white-collar-overlap",
    label:
      "White-collar OPTION B: the two systems overlapping (reads as a broken map, not recommended)",
    Map: WhiteCollarForumMap,
  },
] as const;

export default function IllustrationPreview() {
  return (
    <main className="bg-white pb-32 pt-32 text-navy">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <h1 className="font-display text-4xl leading-tight sm:text-5xl">
          Forum illustration preview
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-charcoal">
          Three sizes, two backgrounds. Check that stroke weight reads
          identically across all three maps and all three sizes, that the
          locator marks stay legible at 320, and that the overlap boundary on
          the white-collar map is crisp.
        </p>

        <dl className="mt-8 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-2 text-sm sm:grid-cols-4">
          <div>
            <dt className="text-navy/50">Florida</dt>
            <dd>{florida.paths.length} rings</dd>
          </div>
          <div>
            <dt className="text-navy/50">United States</dt>
            <dd>{usa.paths.length} rings</dd>
          </div>
          <div>
            <dt className="text-navy/50">Florida inline</dt>
            <dd>{(florida.paths.join("").length / 1024).toFixed(1)} KB</dd>
          </div>
          <div>
            <dt className="text-navy/50">US inline</dt>
            <dd>{(usa.paths.join("").length / 1024).toFixed(1)} KB</dd>
          </div>
        </dl>
      </div>

      {/* Ground-truth overlay. Bronze is the raw us-atlas source, unsimplified
          and unfiltered. Navy is what ships. Any divergence is visible here. */}
      <section className="mt-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <h2 className="font-display text-2xl">
            Source vs shipped, overlaid
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-charcoal">
            Bronze is the raw Census geometry straight from us-atlas, with no
            simplification and no ring filtering. Navy is the shipped outline.
            Where you see only navy, they agree.
          </p>
          <div className="mt-8 flex flex-wrap gap-12">
            {[
              { label: "Florida", raw: rawFlorida, ship: florida.paths, vb: florida.viewBox, w: 560 },
              { label: "United States", raw: rawUsa, ship: usa.paths, vb: usa.viewBox, w: 700 },
            ].map((o) => (
              <figure key={o.label} style={{ width: o.w }}>
                <svg viewBox={o.vb} className="h-auto w-full" aria-hidden="true">
                  <g fill="none" stroke="var(--color-bronze)" strokeWidth={2.5}>
                    {o.raw.map((d, i) => (
                      <path key={i} d={d} vectorEffect="non-scaling-stroke" />
                    ))}
                  </g>
                  <g fill="none" stroke="currentColor" strokeWidth={1}>
                    {o.ship.map((d, i) => (
                      <path key={i} d={d} vectorEffect="non-scaling-stroke" />
                    ))}
                  </g>
                </svg>
                <figcaption className="mt-3 text-sm text-navy/55">
                  {o.label}: source {o.raw.length} rings, shipped {o.ship.length}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {MAPS.map(({ key, label, Map }) => (
        <section key={key} className="mt-24">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <h2 className="font-display text-2xl">{label}</h2>
          </div>

          <div className="mt-8 bg-white py-10">
            <div className="mx-auto flex max-w-[1400px] flex-wrap items-end gap-12 px-6 lg:px-10">
              {SIZES.map((size) => (
                <figure key={size} className="text-navy" style={{ width: size }}>
                  <Map className="h-auto w-full" />
                  <figcaption className="mt-3 text-sm text-navy/50">
                    {size}px on white
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-2 bg-navy py-10">
            <div className="mx-auto flex max-w-[1400px] flex-wrap items-end gap-12 px-6 lg:px-10">
              {SIZES.map((size) => (
                <figure key={size} className="text-linen" style={{ width: size }}>
                  <Map className="h-auto w-full" />
                  <figcaption className="mt-3 text-sm text-linen/50">
                    {size}px on navy
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
