import type { Metadata } from "next";
import HeroVariantA from "./_components/HeroVariantA";
import HeroVariantB from "./_components/HeroVariantB";
import HeroVariantC from "./_components/HeroVariantC";

// Internal-only comparison route. Does not touch the live homepage
// (src/app/page.tsx / src/components/home/Hero.tsx are untouched) and is not
// linked from primary nav anywhere. Keep out of search results.
export const metadata: Metadata = {
  title: "Hero Preview (Internal)",
  robots: { index: false, follow: false },
};

const variants = [
  { id: "variant-a", label: "Variant A", sub: "Institutional" },
  { id: "variant-b", label: "Variant B", sub: "The moment" },
  { id: "variant-c", label: "Variant C", sub: "The trial line" },
];

function VariantDivider({
  label,
  sub,
  id,
}: {
  label: string;
  sub: string;
  id: string;
}) {
  return (
    <div id={id} className="scroll-mt-40 bg-white px-6 py-6 lg:px-10">
      <div className="mx-auto flex max-w-[1400px] items-baseline gap-4">
        <span className="font-heading text-sm font-semibold uppercase tracking-wide text-bronze">
          {label}
        </span>
        <span className="font-display text-xl text-navy">{sub}</span>
        <span className="h-px flex-1 bg-navy/10" />
      </div>
    </div>
  );
}

export default function HeroPreviewPage() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Sticky jump toolbar, offset below the real fixed site Header so the
          two never overlap. */}
      <div className="sticky top-20 z-40 border-b border-white/10 bg-navy/95 backdrop-blur lg:top-24">
        <div className="mx-auto flex max-w-[1400px] items-center gap-6 overflow-x-auto px-6 py-3 lg:px-10">
          <span className="shrink-0 font-heading text-xs font-semibold uppercase tracking-wide text-linen/50">
            Jump to
          </span>
          {variants.map((v) => (
            <a
              key={v.id}
              href={`#${v.id}`}
              className="shrink-0 font-heading text-sm font-medium text-linen/80 transition-colors hover:text-bronze"
            >
              {v.label}
            </a>
          ))}
        </div>
      </div>

      <VariantDivider id="variant-a" label="Variant A" sub="Institutional" />
      <HeroVariantA />

      <VariantDivider id="variant-b" label="Variant B" sub="The moment" />
      <HeroVariantB />

      <VariantDivider id="variant-c" label="Variant C" sub="The trial line" />
      <HeroVariantC />

      <div className="bg-white px-6 py-10 text-center lg:px-10">
        <p className="mx-auto max-w-2xl text-sm text-navy/50">
          Internal comparison page. Not part of the live site navigation and
          not indexed by search engines.
        </p>
      </div>
    </div>
  );
}
