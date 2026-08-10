import Link from "next/link";

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
    href: "/insights",
  },
];

export default function Hero() {
  return (
    <section
      data-bg="dark"
      className="relative overflow-x-clip bg-navy pt-20 pb-20 lg:pt-24 lg:pb-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col-reverse lg:flex-row-reverse lg:items-stretch">
          {/* Text column: narrow, now on the right */}
          <div className="relative z-10 flex w-full flex-col justify-center pb-10 lg:ml-[156px] lg:w-1/2 lg:max-w-[31.8125rem] lg:pb-0">
            <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-linen sm:text-6xl lg:text-7xl">
              When the charge is serious,{" "}
              <span className="text-bronze">the next call matters.</span>
            </h1>
            {/* Middle District of Florida claim is already established in
                SITE.md and src/lib/site.ts (federal capability summary), so
                no [NEEDS] comment is required for it here. */}
            <p className="mt-8 text-lg leading-relaxed text-linen/70">
              If you or someone you love has been arrested or is under
              investigation, you need straight answers before anything else.
              Hines &amp; McCarty defends state charges in Hillsborough County
              and federal cases in the Middle District of Florida, and we
              prepare every case as if it will be tried, because prosecutors
              treat a firm differently when they know it will.
            </p>
            {/* [NEEDS: confirm this number receives SMS]
                Number below (813-333-8886) is per this task's spec and does
                NOT match the confirmed real firm number ((813) 738-8650) in
                SITE.md / src/lib/site.ts firm.phone. Flagged to the human. */}
            <a
              href="tel:8133338886"
              className="mt-8 inline-flex items-center self-start bg-bronze px-7 py-4 font-display text-lg font-bold text-navy transition-colors hover:bg-bronze-soft"
            >
              Call or Text 813-333-8886
            </a>
          </div>

          {/* Hero visual: a rectangular video that bleeds to the right edge with
              a bottom fade, silhouetted into two overlapping arches via the CSS
              mask. Drop tampa-skyline.mp4 into /public/videos and a still at
              /public/images/tampa-skyline-poster.jpg to activate. */}
          <div className="relative w-full lg:flex lg:w-1/2 lg:justify-end">
            <div className="arch-mask arch-mask-flip video-fade relative -ml-6 aspect-[7/6] w-screen overflow-hidden lg:ml-0 lg:mr-[-2vw] lg:aspect-[100/59] lg:w-[56vw] lg:shrink-0">
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-navy via-charcoal to-bronze-soft/50" />
              <video
                className="absolute inset-0 z-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source
                  src="https://res.cloudinary.com/dgbiatexy/video/upload/v1784816947/HinesLaw_Hero2_kqhs7w.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
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
