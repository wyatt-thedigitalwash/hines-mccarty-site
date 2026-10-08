"use client";

import { useId, useState, type MouseEvent } from "react";

export type QuickNavItem = { id: string; label: string };

/**
 * "On this page" links in the charge-page hero, D52.
 *
 * Plain in-page anchors, so they work with no JavaScript at all. With it, the
 * click scrolls smoothly to the section and updates the hash. Smoothness is
 * scoped to these links ON PURPOSE: globals.css records why there is no global
 * `scroll-behavior: smooth` (it animated every route change). Visitors who ask
 * for reduced motion get an instant jump. Each target carries `scroll-mt-28`,
 * so it lands below the fixed header.
 *
 * TWO SHAPES, one per screen size; only one is ever displayed, and the other
 * is display:none, so assistive technology meets one nav.
 *   - lg and up: one row, the links spread evenly across the container.
 *   - below lg: a single "Jump to a section" row that slides open to the
 *     list, each link indented under it with a down arrow; choosing a link
 *     closes it. (Two always-open phone versions, a sideways-scrolling row and
 *     a two-column grid, were rejected: five links after the call button cost
 *     about as much space as the hero text.)
 *
 * WHY A BUTTON AND NOT <details>. The first menu was a native <details>, which
 * needs no JavaScript but cannot animate its opening in every browser. The
 * client asked for a smoother open and close, so it is a button driving a
 * grid-rows transition (0fr to 1fr, which animates to the content's real
 * height). Closed, the list is `inert`, so keyboard and screen-reader users
 * cannot land on links they cannot see. Reduced motion opens it instantly.
 */
export default function QuickNav({ items }: { items: QuickNavItem[] }) {
  const [open, setOpen] = useState(false);
  const listId = useId();
  const go = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    setOpen(false);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  const chevron = (className: string) => (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={`h-3.5 w-3.5 text-bronze transition-transform ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <>
      <nav aria-label="On this page" className="hidden lg:block">
        <ul className="flex justify-between gap-8">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => go(e, item.id)}
                className="group inline-flex items-center gap-2 whitespace-nowrap py-5 font-heading text-base font-normal text-linen/85 transition-colors hover:text-bronze"
              >
                {item.label}
                {chevron("group-hover:translate-y-0.5")}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav aria-label="On this page" className="lg:hidden">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={listId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between py-4 text-left font-heading text-base font-normal text-linen"
        >
          Jump to a section
          {chevron(`duration-300 motion-reduce:transition-none ${open ? "rotate-180" : ""}`)}
        </button>
        <div
          id={listId}
          inert={!open}
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <ul className="overflow-hidden">
            {items.map((item, i) => (
              <li key={item.id} className={i === items.length - 1 ? "pb-4" : ""}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => go(e, item.id)}
                  className="flex items-center gap-3 py-2.5 pl-4 font-heading text-base font-normal text-linen/80 transition-colors hover:text-bronze"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="h-3.5 w-3.5 shrink-0 text-bronze"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                  >
                    <path d="M8 3v10M4 9l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
