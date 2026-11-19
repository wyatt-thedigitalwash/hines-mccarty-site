import { firm } from "@/lib/site";

/**
 * The white call bar across the very top of every page (client direction:
 * the call to action has to be impossible to miss). The whole strip is one
 * tap-to-call link, so there is no small target to find. It sits inside the
 * fixed header, so it stays on screen while the page scrolls.
 *
 * Height comes from --call-bar-h (globals.css), which Header also uses for
 * the spacer that pushes the page down by the same amount.
 *
 * Below 640px only "Call now" and the number show, so it fits on one line on
 * the narrowest phones; the free consultation line joins from 640px up.
 */
export default function CallBar() {
  return (
    <a
      href={firm.phoneHref}
      className="group/bar flex h-[var(--call-bar-h)] w-full items-center justify-center gap-2.5 bg-bronze px-4 font-heading text-navy transition-colors hover:bg-white focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-navy sm:gap-4"
    >
      <span className="hidden text-sm font-semibold sm:inline lg:text-[0.9375rem]">
        Free consultation, available 24/7.
      </span>
      <span aria-hidden="true" className="hidden h-4 w-px bg-navy/30 sm:block" />
      <span className="inline-flex items-center gap-2 text-[0.9375rem] font-bold uppercase tracking-wide lg:text-base">
        <PhoneIcon />
        Call now <span className="tabular-nums">{firm.phone}</span>
        <svg
          viewBox="0 0 12 12"
          className="hidden h-3 w-3 transition-transform duration-150 group-hover/bar:translate-x-0.5 sm:block"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M2 6h8M7 3l3 3-3 3" />
        </svg>
      </span>
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
