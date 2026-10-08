import Link from "next/link";
import { type Crumb } from "@/lib/site";

/**
 * Breadcrumb trail, shown only on pages more than one level deep.
 *
 * Reads from the same trail builders as the BreadcrumbList JSON-LD, so the
 * visible path and the markup cannot disagree.
 *
 * Rendered as several linked items with separators rather than as one word.
 * A lone uppercase label above an H1 is an eyebrow, which is the pattern these
 * pages deliberately do not use; a trail has to look like navigation.
 */
export default function Breadcrumbs({
  trail,
  tone = "dark",
}: {
  trail: Crumb[];
  tone?: "dark" | "light";
}) {
  if (trail.length < 3) return null;

  const muted = tone === "dark" ? "text-linen/55" : "text-navy/70";
  const current = tone === "dark" ? "text-linen/85" : "text-navy/85";

  return (
    <nav aria-label="Breadcrumb">
      <ol
        className={`flex flex-wrap items-center gap-x-2 gap-y-1 font-heading text-sm ${muted}`}
      >
        {trail.map((crumb, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li key={crumb.name} className="flex items-center gap-x-2">
              {crumb.href && !isLast ? (
                <Link
                  href={crumb.href}
                  className="underline decoration-transparent underline-offset-4 transition-colors hover:text-bronze hover:decoration-current"
                >
                  {crumb.name}
                </Link>
              ) : (
                <span aria-current="page" className={current}>
                  {crumb.name}
                </span>
              )}
              {!isLast && (
                <span aria-hidden="true" className="opacity-45">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
