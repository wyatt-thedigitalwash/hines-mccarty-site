import Link from "next/link";
import { capabilities, firm } from "@/lib/site";

/**
 * The practice cards on the home page. Four of them, two by two.
 *
 * WHY CARDS AND NOT THE TWO-COLUMN LIST THAT WAS HERE. The list nested each
 * silo under its practice, which was structurally honest and unreadable: the
 * silo names looked like body copy rather than destinations, and nothing about
 * them said they could be clicked. A card that is one big link says it.
 *
 * THE FOURTH CARD MIXES LEVELS ON PURPOSE. Three of these are criminal silos
 * and the fourth is a whole practice. That is not a taxonomy, it is the four
 * things a visitor arrives wanting, and making Personal Injury wait behind a
 * "Criminal Defense" card would bury the practice this site just added.
 *
 * THE WHOLE CARD IS THE LINK, not the label at the bottom. The label is a
 * visual affordance rather than the hit target, so the click works wherever it
 * lands.
 */

type Card = {
  key: string;
  title: string;
  summary: string;
  href: string;
  cta: string;
};

const CARDS: Card[] = [
  ...capabilities.map((c) => ({
    key: c.key,
    title: c.title,
    summary: c.summary,
    href: c.href,
    cta: "View charges",
  })),
  {
    key: "personal-injury",
    title: "Personal Injury",
    summary:
      "Car and commercial vehicle collision claims in Hillsborough County and across Tampa Bay, from the insurance claim through a lawsuit if the claim does not resolve.",
    href: "/personal-injury",
    // Not "View charges". A person hurt in a crash is not charged with
    // anything, and the label is the one word on the card that tells them
    // which side of the firm they have landed on.
    cta: "View claim types",
  },
];

export default function Practices() {
  return (
    <section data-bg="dark" className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* D89: the call button on the right of the intro from lg, level with
            its last line; under it, full width, on a phone. */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-linen sm:text-5xl">
              What we handle.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-linen/70">
              Hines McCarty Pavlidis defends people accused of crimes and represents
              people injured by someone else, in the 13th Judicial Circuit and in
              the Middle District of Florida, Tampa Division.
            </p>
          </div>
          <a
            href={firm.phoneHref}
            className="inline-flex w-full shrink-0 items-center justify-center bg-bronze px-7 py-4 font-display text-lg font-bold text-navy transition-colors hover:bg-bronze-soft sm:w-auto sm:self-start lg:self-auto"
          >
            Call {firm.phone}
          </a>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {CARDS.map((card) => (
            <Link
              key={card.key}
              href={card.href}
              data-practice-card={card.key}
              className="group flex min-h-[340px] flex-col bg-white p-10 transition-colors hover:bg-linen lg:min-h-[380px] lg:p-12"
            >
              <h3 className="font-display text-3xl font-medium leading-tight text-navy lg:text-4xl">
                {card.title}
              </h3>
              <p className="mt-6 flex-1 text-lg leading-relaxed text-charcoal">
                {card.summary}
              </p>
              <span className="mt-8 inline-block text-base text-navy underline decoration-1 underline-offset-4 transition-colors group-hover:text-bronze">
                {card.cta}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
