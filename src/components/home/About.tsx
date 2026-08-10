import Link from "next/link";

export default function About() {
  return (
    <section
      data-bg="light"
      className="relative overflow-hidden bg-white text-navy"
    >
      {/* Right image, bleeds to the right edge, parallax on scroll via a
          fixed background. Drop about-tampa.jpg into /public/images to
          activate; the gradient shows until then. */}
      <div className="absolute inset-y-0 right-0 hidden w-1/2 overflow-hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-navy-700" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/team/mock-team-photo2.jpg')" }}
        />
        {/* Left fade so the image dissolves into the white background */}
        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent to-[45%]" />
      </div>

      <div className="relative mx-auto flex max-w-[1400px] items-center px-6 py-20 lg:min-h-[620px] lg:px-10 lg:py-32">
        <div className="w-full lg:w-1/2 lg:pr-16">
          <h2 className="font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            A partnership, not a single name on the door.
          </h2>
          <div className="mt-8 max-w-lg space-y-5 text-lg leading-relaxed text-charcoal">
            <p>
              Hines &amp; McCarty is a Brandon firm built around four attorneys
              who each concentrate on different areas of criminal law. When a
              case comes in, it goes to the person who knows that kind of case,
              not to whoever is available.
            </p>
            <p>
              That structure is why so much of the firm&apos;s work arrives by
              referral, from former clients and from other lawyers who send the
              matters they do not handle themselves.
            </p>
          </div>
          <Link
            href="/attorneys"
            className="mt-10 inline-flex items-center border border-navy px-8 py-4 font-display text-lg text-navy transition-colors hover:border-bronze hover:text-bronze"
          >
            Meet the attorneys
          </Link>
        </div>
      </div>

      {/* Mobile image */}
      <div className="relative h-72 w-full overflow-hidden lg:hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-navy-700" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/team/mock-team-photo.jpg')" }}
        />
      </div>
    </section>
  );
}
