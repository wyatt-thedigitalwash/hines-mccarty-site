import Link from "next/link";

/**
 * The firm's two practices as two large linked cards, beside the intro on the
 * firm page (D108). A referring lawyer reads this page to see what the firm
 * takes; these answer that before anything else.
 */
const PRACTICES = [
  {
    href: "/criminal-defense",
    title: "Criminal Defense",
    body: "State, federal, and white-collar charges in Hillsborough County and the Middle District of Florida.",
  },
  {
    href: "/personal-injury",
    title: "Personal Injury",
    body: "Car and truck collision claims in Hillsborough County and across Tampa Bay.",
  },
];

export default function PracticeCards() {
  return (
    <ul className="grid gap-5">
      {PRACTICES.map((p) => (
        <li key={p.href}>
          <Link
            href={p.href}
            className="group flex items-start justify-between gap-6 border border-navy/15 p-8 transition-colors hover:border-navy"
          >
            <span>
              <span className="block font-display text-3xl leading-tight transition-colors group-hover:text-bronze">
                {p.title}
              </span>
              <span className="mt-3 block leading-relaxed text-charcoal">{p.body}</span>
            </span>
            <svg
              viewBox="0 0 16 16"
              className="mt-2 h-5 w-5 shrink-0 text-navy/40 transition duration-150 group-hover:translate-x-1 group-hover:text-bronze"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </li>
      ))}
    </ul>
  );
}
