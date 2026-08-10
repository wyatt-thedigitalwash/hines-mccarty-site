import Link from "next/link";
import { firm } from "@/lib/site";
import OfficeBlock from "@/components/attorneys/OfficeBlock";

export default function CTA() {
  return (
    <section
      data-bg="dark"
      className="bg-navy py-24 pt-24! lg:py-32 lg:pt-32!"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-navy-700 to-navy p-10 sm:p-16 lg:p-20">
          {/* Oversized Florida watermark, clipped by the card's overflow-hidden.
              Real state outline, masked onto a plain bronze/10 box so it
              tints with the brand color instead of an inline 80kb path.
              Desktop bleeds off the right edge, centered vertically. Mobile
              bleeds off the top-right corner instead, sized down to suit
              the narrower, stacked layout. */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-6 -top-6 block w-[320px] bg-bronze/20 sm:w-[380px] lg:hidden"
            style={{
              aspectRatio: "800 / 679.2",
              WebkitMaskImage: "url('/shapes/florida-outline.svg')",
              maskImage: "url('/shapes/florida-outline.svg')",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 top-1/2 hidden w-[680px] -translate-y-1/2 bg-bronze/10 lg:block lg:w-[760px]"
            style={{
              aspectRatio: "800 / 679.2",
              WebkitMaskImage: "url('/shapes/florida-outline.svg')",
              maskImage: "url('/shapes/florida-outline.svg')",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <span className="eyebrow text-bronze">Speak With Us</span>
              <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-linen sm:text-5xl lg:text-6xl">
                Talk to a defense attorney today.
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-linen/70">
                Consultations are confidential. If you or someone you care about
                has been arrested, charged, or contacted by investigators, reach
                out now.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-bronze px-7 py-4 font-display text-lg font-bold text-navy transition-colors hover:bg-bronze-soft"
                >
                  Request a consultation
                </Link>
                <a
                  href={firm.phoneHref}
                  className="inline-flex items-center border border-linen/25 px-7 py-4 font-display text-lg font-bold text-linen transition-colors hover:border-bronze hover:text-bronze"
                >
                  Call {firm.phone}
                </a>
              </div>
            </div>

            {/* Sources from `publishedOffices`, so the Tampa location appears
                here automatically once its address is confirmed. The phone is
                already shown above, hence showPhone={false}. */}
            <div className="border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <OfficeBlock
                tone="dark"
                showPhone={false}
                className="grid gap-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
