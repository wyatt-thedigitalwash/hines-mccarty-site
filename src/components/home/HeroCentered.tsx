// Second hero layout exploration: contained centered media (a plain
// rectangle, not full-bleed) with the H1 overlapping its top-left corner and
// the description + CTA overlapping its bottom-right corner. Same copy, same
// design system as the live hero, just restructured. Preview-only; the live
// homepage Hero.tsx is untouched.
//
// Height note: the brief asked for the hero locked to "1dvh" but not
// resizing on scroll. dvh is defined to track the browser's dynamic
// viewport, i.e. it DOES change as mobile browser chrome collapses/expands
// while scrolling, the opposite of what was asked for. Using svh (small
// viewport height) instead: it always measures the viewport as if the
// browser chrome is fully expanded, so the section's height is fixed once
// and never shifts on scroll. Scoped to lg+ only, forcing three stacked
// mobile blocks (headline, video, description) into one screen height would
// cramp/clip content; mobile keeps its normal padded, auto-height stack.
export default function HeroCentered() {
  return (
    <section
      data-bg="dark"
      className="relative overflow-hidden bg-navy pt-20 pb-20 lg:flex lg:h-svh lg:items-stretch lg:pt-24 lg:pb-0"
    >
      <div className="mx-auto flex w-full max-w-[1400px] px-6 lg:px-10">
        <div className="lg:grid lg:w-full lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-10">
          {/* H1: top-aligned, overlaps the video's top-left corner */}
          <div className="relative z-10 lg:-mr-16 lg:self-start lg:pr-6 lg:pt-10">
            <h1 className="font-display text-4xl leading-[1.08] tracking-tight text-linen sm:text-5xl lg:text-6xl">
              When the charge is serious,{" "}
              <span className="text-bronze">the next call matters.</span>
            </h1>
          </div>

          {/* Contained media: a plain rectangle, normal top clearance like
              the rest of the hero (does not bleed under the site header).
              Fills the row's available height, width follows from the
              aspect ratio, no arch mask, sharp corners. Dimmed with the same
              bg-navy/85 overlay used on the Testimonials and Tools parallax
              backgrounds, for a consistent treatment. */}
          <div className="video-fade relative mt-10 aspect-[4/3] w-full overflow-hidden lg:mt-0 lg:aspect-[7/8] lg:h-full lg:w-auto">
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
            <div aria-hidden className="absolute inset-0 z-0 bg-navy/85" />
          </div>

          {/* Description + CTA: bottom-aligned, overlaps the video's bottom-right corner */}
          <div className="relative z-10 mt-10 lg:-ml-16 lg:mt-0 lg:self-end lg:pb-10 lg:pl-6">
            <p className="text-lg leading-relaxed text-linen/70">
              If you or someone you love has been arrested or is under
              investigation, you need straight answers before anything else.
              Hines &amp; McCarty defends state charges in Hillsborough County
              and federal cases in the Middle District of Florida, and we
              prepare every case as if it will be tried, because prosecutors
              treat a firm differently when they know it will.
            </p>
            {/* [NEEDS: confirm this number receives SMS] */}
            <a
              href="tel:8133338886"
              className="mt-8 inline-flex items-center bg-bronze px-7 py-4 font-display text-lg font-bold text-navy transition-colors hover:bg-bronze-soft"
            >
              Call or Text 813-333-8886
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
