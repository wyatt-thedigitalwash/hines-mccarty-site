import Image from "next/image";
import type { Attorney } from "@/lib/site";

/**
 * An attorney portrait, or a monogram when there is no real headshot.
 *
 * Deliberately does NOT fall back to the stock images in /public/team. Putting
 * a stock photo under a named lawyer's name misrepresents a real person, which
 * is a Rule 4-7.13 problem before it is a design problem.
 */
export default function Portrait({
  attorney,
  className = "",
  sizes,
  priority = false,
}: {
  attorney: Attorney;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const initials = attorney.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  if (!attorney.portrait) {
    return (
      <div
        className={`flex items-center justify-center bg-navy-700 ${className}`}
        role="img"
        aria-label={`Portrait of ${attorney.name} is not available yet`}
      >
        <span className="font-display text-5xl font-extrabold text-linen/25">
          {initials}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-navy-700 ${className}`}>
      <Image
        src={attorney.portrait}
        alt={`${attorney.name}, criminal defense attorney at Hines & McCarty`}
        fill
        sizes={sizes ?? "(min-width: 1024px) 24rem, 100vw"}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
