import Link from "next/link";
import { previewPhone } from "./previewData";

// Exactly one primary CTA (the call button) plus one visually quieter
// secondary CTA, per the task's non-negotiables. Secondary destination and
// label vary by variant; the call button never does.
export default function CTARow({
  secondaryLabel,
  secondaryHref,
}: {
  secondaryLabel: string;
  secondaryHref: string;
}) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      <a
        href={previewPhone.href}
        className="inline-flex items-center bg-bronze px-7 py-4 font-display text-lg font-bold text-navy transition-colors hover:bg-bronze-soft"
      >
        Call {previewPhone.display}
      </a>
      <Link
        href={secondaryHref}
        className="inline-flex items-center border border-linen/25 px-7 py-4 font-display text-lg text-linen transition-colors hover:border-bronze hover:text-bronze"
      >
        {secondaryLabel}
      </Link>
    </div>
  );
}
