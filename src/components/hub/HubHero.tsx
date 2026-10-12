import { firm, siloTrail, type Silo } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import HeroPhotoLayer from "@/components/HeroPhotoLayer";
import { SILO_HERO_PHOTOS } from "@/lib/hero-photos";

/**
 * The criminal hubs' hero (D112), in the main pages' hero form (PageHero):
 * breadcrumbs, H1, intro, the gold call button full width on a phone, and the
 * same 380px content floor so the three hubs line up. A photo slot waits on
 * the client's courthouse images (SILO_HERO_PHOTOS).
 *
 * The "outside Hillsborough" line (D82) shows on state and white-collar, not
 * federal, whose H1 already names the 35-county Middle District.
 */
export default function HubHero({ silo }: { silo: Silo }) {
  return (
    <section data-bg="navy" data-hero className="relative isolate overflow-hidden bg-navy pt-36 lg:pt-44">
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-20 lg:min-h-[380px] lg:px-10 lg:pb-24">
        <Breadcrumbs trail={siloTrail(silo)} />
        <h1 className="mt-8 max-w-4xl font-display text-4xl leading-[1.08] tracking-tight text-linen sm:text-5xl lg:text-6xl">
          {silo.h1}
        </h1>
        <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-linen/70">
          {silo.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-8">
          <a
            href={firm.phoneHref}
            className="inline-flex w-full items-center justify-center bg-bronze px-7 py-4 font-display text-lg font-bold text-navy transition-colors hover:bg-bronze-soft sm:w-auto"
          >
            Call {firm.phone}
          </a>
        </div>
        {silo.key !== "federal" ? (
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-linen/60">
            Charged outside Hillsborough County? We also take cases elsewhere in Florida, most often in the
            counties around Tampa Bay.
          </p>
        ) : null}
      </div>
      <HeroPhotoLayer photo={SILO_HERO_PHOTOS[silo.key]} />
    </section>
  );
}
