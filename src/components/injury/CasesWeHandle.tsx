import Link from "next/link";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
  faBrain,
  faCarBurst,
  faDog,
  faDove,
  faMotorcycle,
  faPersonFalling,
  faPersonFallingBurst,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

/**
 * "Cases we handle" on the personal injury hub (client direction): one tile
 * per kind of case, each with a symbol so a reader can find theirs at a
 * glance without reading a list.
 *
 * Every tile links to its case type's page (D163).
 *
 * The symbols are Font Awesome Free solid icons (CC BY 4.0), drawn from the
 * package's path data so no icon font or client script ships. Solid shapes
 * read at a glance inside the gold circle in a way thin outline icons did not,
 * and the set has a symbol for each case (a crash, a fall) rather than a
 * stand-in (a warning sign, footprints).
 */
const CASES: { label: string; href: string; icon: IconDefinition }[] = [
  { label: "Car Accidents", href: "/personal-injury/car-accidents", icon: faCarBurst },
  { label: "Motorcycle Accidents", href: "/personal-injury/motorcycle-accidents", icon: faMotorcycle },
  { label: "Trucking Accidents", href: "/personal-injury/truck-accidents", icon: faTruck },
  { label: "Slip and Falls", href: "/personal-injury/slip-and-fall", icon: faPersonFalling },
  { label: "Trip and Falls", href: "/personal-injury/trip-and-fall", icon: faPersonFallingBurst },
  { label: "Dog Bites", href: "/personal-injury/dog-bites", icon: faDog },
  { label: "Brain Injuries", href: "/personal-injury/brain-injuries", icon: faBrain },
  { label: "Wrongful Death", href: "/personal-injury/wrongful-death", icon: faDove },
];

function Icon({ icon, className }: { icon: IconDefinition; className?: string }) {
  const [width, height, , , path] = icon.icon;
  const paths = Array.isArray(path) ? path : [path];
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      {paths.map((d) => (
        <path key={d.slice(0, 24)} d={d} />
      ))}
    </svg>
  );
}

export default function CasesWeHandle() {
  return (
    <section data-bg="white" className="bg-white py-20 text-navy lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <h2 className="font-display text-4xl leading-tight sm:text-5xl">Cases we handle</h2>
        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
          {CASES.map(({ label, href, icon }) => (
            <li key={label}>
              <Link
                href={href}
                className="group flex h-full flex-col items-center justify-start gap-5 border border-navy/20 px-4 py-8 text-center transition-colors hover:border-bronze lg:gap-6 lg:py-10"
              >
                <span className="flex h-18 w-18 items-center justify-center rounded-full bg-bronze text-navy transition-colors group-hover:bg-navy group-hover:text-bronze lg:h-22 lg:w-22">
                  <Icon icon={icon} className="h-8 w-8 lg:h-10 lg:w-10" />
                </span>
                <span className="font-heading text-sm font-semibold uppercase tracking-wide lg:text-[0.9375rem]">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
