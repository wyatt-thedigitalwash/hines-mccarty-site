"use client";

import { useState } from "react";
import Link from "next/link";
import {
  capabilities,
  chargeHref,
  chargesInSilo,
  injuryHref,
  injuryPages,
  type SiloKey,
} from "@/lib/site";

function ArrowUpRight({ className = "" }: { className?: string }) {
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

function ChevronIcon({ className = "" }: { className?: string }) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/**
 * One row in a panel: a charge, or an injury page.
 *
 * TAKES A PLAIN ITEM rather than a ChargePage, because this grid now serves
 * two practices whose page types are different and whose rows are identical.
 * Both sources build the same shape and the row stays one component.
 *
 * `href` already accounts for publication: an unpublished item resolves to its
 * hub instead. The stubs are noindex and full of [NEEDS] markers, and the home
 * page is the last place that scaffolding should be reachable from.
 */
type Item = { key: string; label: string; description: string; href: string };

function ItemRow({ item }: { item: Item }) {
  const { label, description, href } = item;

  return (
    <Link
      href={href}
      className="group flex h-full items-center justify-between gap-4 border border-navy/20 px-6 py-4 transition-colors hover:border-navy"
    >
      <span className="min-w-0">
        <span className="block text-lg text-navy">{label}</span>
        {/*
          13px, not 14px: at 14px the longest description measures 394px against
          400px of available card width, which is too little headroom to trust.
          navy/65 rather than a lighter tint keeps contrast on white above the
          WCAG AA 4.5:1 floor for normal-size text.
        */}
        <span className="mt-1 block text-[0.8125rem] leading-snug text-navy/65">
          {description}
        </span>
      </span>
      <ArrowUpRight className="h-5 w-5 shrink-0 text-navy/70 transition-colors group-hover:text-bronze" />
    </Link>
  );
}

/**
 * The four panels. Three criminal silos and the injury practice.
 *
 * The injury panel lists pillars and spokes flat rather than nesting them,
 * because a panel is a list of destinations and the hierarchy is already
 * expressed by the URLs and by the pages themselves. Nesting it here would
 * reproduce the two-column layout that was removed from this page for being
 * unreadable.
 */
type Group = { key: string; short: string; href: string; items: Item[] };

const GROUPS: Group[] = [
  ...capabilities.map((cap) => ({
    key: cap.key,
    short: cap.short,
    href: cap.href,
    items: chargesInSilo(cap.key as SiloKey).map((c) => ({
      key: c.slug,
      label: c.label,
      description: c.description,
      href: c.published ? chargeHref(c) : cap.href,
    })),
  })),
  {
    key: "personal-injury",
    short: "Injury",
    href: "/personal-injury",
    items: injuryPages.map((p) => ({
      key: `${p.parent ?? ""}/${p.slug}`,
      label: p.label,
      description: p.description,
      href: p.published ? injuryHref(p) : "/personal-injury",
    })),
  },
];

export default function PracticeAreas() {
  const [active, setActive] = useState<string>(GROUPS[0].key);
  const [openMobile, setOpenMobile] = useState<string[]>([GROUPS[0].key]);

  const toggleMobile = (key: string) =>
    setOpenMobile((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );

  return (
    <section data-bg="white" className="bg-white py-24 text-navy lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Desktop: category switcher + grid of charges */}
        <div className="hidden lg:grid lg:grid-cols-[21rem_1fr] lg:gap-16">
          <div className="flex flex-col items-stretch gap-7">
            {GROUPS.map((cap) => {
              const isActive = cap.key === active;
              return (
                <button
                  key={cap.key}
                  type="button"
                  onClick={() => setActive(cap.key)}
                  aria-expanded={isActive}
                  aria-controls={`practice-panel-${cap.key}`}
                  /*
                    HOVER HAS TO SAY "PRESSABLE". These read as a heading stack,
                    and the inactive state going from 30% to 60% navy was too
                    small a change to register as a control at all.

                    Three signals now: an explicit pointer cursor, because a
                    <button> does not get one from the user agent; full navy on
                    hover rather than a midpoint; and the same underline the
                    active item carries, drawn transparent and revealed on
                    hover, so hovering previews exactly what clicking does.
                  */
                  className="group flex w-full cursor-pointer items-center justify-between gap-6 whitespace-nowrap font-display text-5xl leading-none transition-colors"
                >
                  <span
                    className={`border-b-2 pb-2 transition-colors ${
                      isActive
                        ? "border-navy text-navy"
                        : "border-transparent text-navy/70 group-hover:border-navy/40 group-hover:text-navy"
                    }`}
                  >
                    {cap.short}
                  </span>
                  {/* D103, D120: every item carries a mark that says "pick
                      me", all in one column at the right edge (not trailing
                      each word, which left them ragged) and sized to the
                      serif. The active one is an arrow pointing at the grid
                      it opened; the others are faint chevrons that darken
                      and nudge on hover. */}
                  <svg
                    viewBox="0 0 24 24"
                    className={`-mt-1 h-7 w-7 shrink-0 transition duration-150 ${
                      isActive ? "text-navy" : "text-navy/30 group-hover:translate-x-1 group-hover:text-navy"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {isActive ? <path d="M4 12h15M13 6l6 6-6 6" /> : <path d="m9 5 7 7-7 7" />}
                  </svg>
                </button>
              );
            })}
          </div>

          {/*
            Every panel stays mounted and the inactive ones are hidden, rather
            than being unmounted, so all three groups of charges reach the
            server-rendered HTML. Crawlers do not click tabs, so unmounting
            would keep two thirds of these labels out of the index.

            The hide sits on this wrapper, which carries no display utility.
            Putting `hidden` on the element that also has `grid` would not work:
            a Tailwind display class outranks the user-agent [hidden] rule.
          */}
          <div className="self-start">
            {GROUPS.map((group) => (
              <div
                key={group.key}
                id={`practice-panel-${group.key}`}
                hidden={group.key !== active}
              >
                <div className="grid grid-cols-2 gap-4">
                  {group.items.map((item) => (
                    <ItemRow key={item.key} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: accordion */}
        <div className="lg:hidden">
          {GROUPS.map((cap) => {
            const isOpen = openMobile.includes(cap.key);
            return (
              <div
                key={cap.key}
                className="border-t border-navy/25 py-6 first:border-t-0 first:pt-0"
              >
                <button
                  type="button"
                  onClick={() => toggleMobile(cap.key)}
                  aria-expanded={isOpen}
                  aria-controls={`practice-accordion-${cap.key}`}
                  className="flex w-full cursor-pointer items-center justify-between gap-4"
                >
                  <span className="font-display text-4xl text-navy">
                    {cap.short}
                  </span>
                  <ChevronIcon
                    className={`h-7 w-7 shrink-0 text-navy transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {/* Kept mounted and hidden when collapsed, same reason as above */}
                <div id={`practice-accordion-${cap.key}`} hidden={!isOpen}>
                  <div className="mt-6 flex flex-col gap-3">
                    {cap.items.map((item) => (
                      <ItemRow key={item.key} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
