import Link from "next/link";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  return (
    <section
      data-bg="dark"
      className="relative isolate overflow-hidden py-24 lg:py-32"
    >
      {/* Parallax background: Tampa's minaret on mobile, the courthouse
          colonnade on desktop, both fixed to the viewport and dimmed by a
          navy overlay so text stays legible. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-fixed bg-center lg:hidden"
        style={{ backgroundImage: "url('/backgrounds/yes2.jpg')" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 hidden bg-cover bg-fixed bg-center lg:block"
        style={{ backgroundImage: "url('/backgrounds/yes4.jpg')" }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-navy/85" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-linen sm:text-5xl">
            What clients say.
          </h2>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {testimonials.map((item, index) => (
            <figure
              key={index}
              className="flex flex-col border-t border-white/10 pt-8"
            >
              <span className="font-display text-6xl leading-none text-bronze" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="mt-4 font-display text-2xl font-medium leading-snug text-linen sm:text-3xl">
                {item.quote}
              </blockquote>
              <figcaption className="eyebrow mt-6 text-linen/50">
                {item.attribution}
              </figcaption>
            </figure>
          ))}
        </div>

        <Link
          href="/reviews"
          className="link-arrow group mt-14 inline-flex items-center gap-2 font-display text-lg font-bold text-linen transition-colors hover:text-bronze"
        >
          Read more reviews
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
