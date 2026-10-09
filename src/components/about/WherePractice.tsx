import LocationsMap from "@/components/home/LocationsMap";

/**
 * "Where we practice." on the firm page (D108): the courts, beside the drawn
 * Florida map (D91) filling the right half from desktop width, and edge to
 * edge under the copy below that, the way the hub maps sit (D97, D99).
 *
 * The offices line names Brandon and Tampa: the client confirmed the Tampa
 * office (D101). Its street address is still owed, so no address shows here.
 */
const fade = (mask: string) => ({ WebkitMaskImage: mask, maskImage: mask, WebkitMaskComposite: "source-in", maskComposite: "intersect" }) as const;
const PANEL = fade("linear-gradient(to right, transparent, black 22%), linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)");
const BLEED = fade("linear-gradient(to bottom, transparent, black 12%, black 82%, transparent)");

export default function WherePractice() {
  return (
    <section data-bg="white" className="relative overflow-hidden bg-white py-20 text-navy lg:min-h-[40rem] lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block" style={PANEL}>
        <LocationsMap />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="lg:max-w-[44%]">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">Where we practice.</h2>
          <div className="mt-8 space-y-8 text-lg leading-relaxed text-charcoal">
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-navy/60">State</h3>
              <p className="mt-3">
                The 13th Judicial Circuit in Hillsborough County, with matters throughout Tampa Bay including
                Pinellas, Polk, Manatee, Hernando, Sarasota, and Pasco.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-navy/60">Federal</h3>
              <p className="mt-3">The Middle District of Florida, including the Tampa, Orlando, and Fort Myers divisions.</p>
            </div>
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-navy/60">Offices</h3>
              <p className="mt-3">Brandon and Tampa.</p>
            </div>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="mt-12 h-[26rem] w-full sm:h-[34rem] lg:hidden" style={BLEED}>
        <LocationsMap variant="mobile" />
      </div>
    </section>
  );
}
