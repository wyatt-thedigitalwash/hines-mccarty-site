import Link from "next/link";
import ParallaxVideoBanner from "./ParallaxVideoBanner";

// Third hero layout exploration: centered H1 and description, two CTA
// buttons, then a full-bleed thin parallax video ribbon, then the same
// 3-card grid the original hero uses. Preview-only; the live homepage
// Hero.tsx is untouched.
const blocks = [
  {
    label: "Our Team",
    title: "Four attorneys, four areas of focus.",
    href: "/attorneys",
  },
  {
    label: "Our Capabilities",
    title: "Serious state and federal defense.",
    href: "/cases-we-defend",
  },
  {
    label: "Our Insights",
    title: "Plain answers to hard questions.",
    href: "/resources/articles",
  },
];

export default function HeroCenteredBanner() {
  return (
    <section
      data-bg="dark"
      className="relative overflow-hidden bg-navy pt-20 pb-16 lg:pt-24 lg:pb-20"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-linen sm:text-6xl lg:text-7xl">
            When the charge is serious,{" "}
            <span className="text-bronze">the next call matters.</span>
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-linen/70">
            If you or someone you love has been arrested or is under
            investigation, you need straight answers before anything else.
            Hines &amp; McCarty defends state charges in Hillsborough County
            and federal cases in the Middle District of Florida, and we
            prepare every case as if it will be tried, because prosecutors
            treat a firm differently when they know it will.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {/* [NEEDS: confirm this number receives SMS] */}
            <a
              href="tel:8133338886"
              className="inline-flex items-center bg-bronze px-7 py-4 font-display text-lg font-bold text-navy transition-colors hover:bg-bronze-soft"
            >
              Call or Text 813-333-8886
            </a>
            <Link
              href="/attorneys"
              className="inline-flex items-center border border-linen/25 px-7 py-4 font-display text-lg text-linen transition-colors hover:border-bronze hover:text-bronze"
            >
              Meet the attorneys
            </Link>
          </div>
        </div>
      </div>

      {/* Full-bleed thin video ribbon, parallax */}
      <div className="mt-16 lg:mt-20">
        <ParallaxVideoBanner />
      </div>

      <div className="mx-auto mt-16 max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-3">
          {blocks.map((block) => (
            <Link
              key={block.label}
              href={block.href}
              className="group flex min-h-[280px] flex-col border border-bronze/50 p-8 transition-colors hover:border-bronze lg:min-h-[320px] lg:p-10"
            >
              <span className="font-heading text-[0.8125rem] font-semibold uppercase tracking-normal text-linen transition-colors group-hover:text-bronze">
                {block.label}
              </span>
              <p className="mt-auto font-heading text-2xl font-medium leading-snug text-linen transition-colors group-hover:text-bronze lg:text-3xl">
                {block.title}
              </p>
              <span className="mt-8 inline-block text-sm text-linen/80 underline decoration-1 underline-offset-4 transition-colors group-hover:text-bronze">
                Learn More
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
