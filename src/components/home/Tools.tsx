import Link from "next/link";
import ToolsCarousel from "@/components/home/ToolsCarousel";

function ArrowUpRight({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

export default function Tools() {
  return (
    <section
      data-bg="dark"
      className="relative isolate overflow-hidden py-24 text-linen lg:py-32"
    >
      {/* Parallax background: Lady Justice fixed to the viewport, dimmed by a
          navy overlay so the statue reads as texture and text stays legible. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: "url('/backgrounds/yes5.jpg')" }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-navy/85" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Statement: heading left, positioning paragraph right */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Tools &amp; Guides
            </h2>
          </div>

          <div className="max-w-2xl lg:pt-2">
            <p className="text-xl leading-relaxed text-linen/80 lg:text-2xl">
              A charge brings a hundred unknowns at once. These free tools turn
              the biggest ones into plain answers, what a sentence could look
              like, whether a record can be cleared, what the first day actually
              holds, so your first call with us starts with strategy instead of
              a scramble to understand the basics.
            </p>
            <Link
              href="/resources/tools-and-guides"
              className="link-arrow group mt-8 inline-flex items-center gap-2 font-heading text-sm uppercase tracking-[0.08em] text-linen underline decoration-1 underline-offset-4 transition-colors hover:text-bronze"
            >
              View all tools and guides
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Full-bleed horizontal carousel of tool cards */}
      <ToolsCarousel />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Disclaimer */}
        <p className="mt-12 max-w-3xl text-sm leading-relaxed text-linen/50">
          These tools provide general information only and produce estimates,
          not legal advice. Every case turns on its own facts. Speak with an
          attorney before making any decision.
        </p>
      </div>
    </section>
  );
}
