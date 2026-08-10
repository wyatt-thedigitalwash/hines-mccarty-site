import Link from "next/link";
import { previewPhone } from "./previewData";

// Preview-only mock header, one per hero variant below. This is NOT the real
// site Header (src/components/Header.tsx) and does not replace it; the real,
// unmodified Header still renders above this from the root layout. This mock
// exists only so each variant can demonstrate its own nav label and an
// always-visible phone link, without changing the live site's shared header.
const trailingNavItems = [
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function PreviewMockHeader({
  navLabel,
}: {
  navLabel: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 bg-navy px-4 py-4 sm:px-6">
      <span className="font-display text-lg font-extrabold tracking-tight text-linen">
        Hines <span className="text-bronze">&amp;</span> McCarty
      </span>

      <nav className="hidden items-center gap-8 lg:flex">
        <Link
          href="/attorneys"
          className="font-heading text-sm font-medium uppercase text-linen/80 transition-colors hover:text-bronze"
        >
          Attorneys
        </Link>
        <Link
          href="/capabilities"
          className="font-heading text-sm font-medium uppercase text-linen/80 transition-colors hover:text-bronze"
        >
          {navLabel}
        </Link>
        {trailingNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="font-heading text-sm font-medium uppercase text-linen/80 transition-colors hover:text-bronze"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Always visible, tappable, no-scroll-required call link. This is the
          part under test: the real live Header currently has no phone number
          in the visible bar at all (it is tucked inside the slide-in menu). */}
      <a
        href={previewPhone.href}
        className="font-heading text-sm font-semibold text-bronze underline decoration-1 underline-offset-4 sm:text-base"
      >
        {previewPhone.display}
      </a>
    </div>
  );
}
