"use client";

import { useState } from "react";
import Link from "next/link";
import { capabilities } from "@/lib/site";

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

function ItemRow({
  label,
  description,
  href,
}: {
  label: string;
  description: string;
  href: string;
}) {
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
      <ArrowUpRight className="h-5 w-5 shrink-0 text-navy/50 transition-colors group-hover:text-bronze" />
    </Link>
  );
}

export default function PracticeAreas() {
  const [active, setActive] = useState<string>(capabilities[0].key);
  const [openMobile, setOpenMobile] = useState<string[]>([capabilities[0].key]);

  const toggleMobile = (key: string) =>
    setOpenMobile((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );

  return (
    <section data-bg="white" className="bg-white py-24 text-navy lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Desktop: category switcher + grid of charges */}
        <div className="hidden lg:grid lg:grid-cols-[16rem_1fr] lg:gap-20">
          <div className="flex flex-col items-start gap-7">
            {capabilities.map((cap) => {
              const isActive = cap.key === active;
              return (
                <button
                  key={cap.key}
                  type="button"
                  onClick={() => setActive(cap.key)}
                  aria-expanded={isActive}
                  aria-controls={`practice-panel-${cap.key}`}
                  className="font-display text-5xl leading-none transition-colors"
                >
                  <span
                    className={
                      isActive
                        ? "border-b-2 border-navy pb-2 text-navy"
                        : "text-navy/30 hover:text-navy/60"
                    }
                  >
                    {cap.short}
                  </span>
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
            {capabilities.map((cap) => (
              <div
                key={cap.key}
                id={`practice-panel-${cap.key}`}
                hidden={cap.key !== active}
              >
                <div className="grid grid-cols-2 gap-4">
                  {cap.items.map((item) => (
                    <ItemRow
                      key={item.label}
                      label={item.label}
                      description={item.description}
                      href={cap.href}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: accordion */}
        <div className="lg:hidden">
          {capabilities.map((cap) => {
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
                  className="flex w-full items-center justify-between gap-4"
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
                      <ItemRow
                        key={item.label}
                        label={item.label}
                        description={item.description}
                        href={cap.href}
                      />
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
