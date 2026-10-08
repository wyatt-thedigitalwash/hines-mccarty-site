"use client";

import { useState, type ReactNode } from "react";
import { card, color, space, type } from "./ui";

export type DetailsGridItem = {
  id: string;
  label: string;
  /** What the topic covers, shown in the box under the label. */
  summary?: string;
  /** Server-rendered topic content. Every panel is in the HTML; only the open one shows. */
  content: ReactNode;
};

/**
 * The details as a stack of full-width boxes, D47. Opt-in per page via
 * `ChargePage.detailsLayout: "grid"` (the name is from the 3x3 grid this
 * started as; the client moved it to one box per row).
 *
 * Each box shows the topic as the reader's question, a line on what it covers,
 * and "Read more". Opening a box attaches its panel directly underneath, on the
 * same linen as the open box, so the two read as one piece. The box already
 * carries the title, so the panel does not repeat it. One topic open at a time.
 *
 * Every panel is in the HTML and only the open one is shown, so crawlers and
 * check:rendered see all of the content, exactly as with the accordion.
 */
export default function DetailsGrid({ items }: { items: DetailsGridItem[] }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className={space.items}>
      {items.map((item) => {
        const isOpen = open === item.id;
        return (
          <div
            key={item.id}
            className={`border transition-colors ${
              isOpen ? "border-navy/25 bg-linen/25" : "border-navy/15 bg-white hover:border-bronze hover:bg-linen/15"
            }`}
          >
            {/* D59: the title is a real <h3> holding the button (the WAI
                accordion pattern), so the outline runs h2 > h3 > h4 instead of
                skipping from "The details." to the topic's h4s. The button's
                hit area is stretched over the whole box with ::after, so the
                box is still clickable anywhere; the description and the "Read
                more" cue sit outside the button and are not part of its name. */}
            <div
              className={`group relative flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between md:gap-10 ${card}`}
            >
              <div className="flex flex-col">
                <h3 className={`${type.subheading} ${color.heading} text-balance`}>
                  <button
                    id={`${item.id}-box`}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`${item.id}-panel`}
                    onClick={() => setOpen(isOpen ? null : item.id)}
                    className="text-left after:absolute after:inset-0 after:content-['']"
                  >
                    {item.label}
                  </button>
                </h3>
                {/* What is inside, not a one-line legal conclusion: a summary
                    that tried to state the answer read oddly and oversimplified. */}
                {item.summary ? (
                  <p className={`${space.inItem} ${type.body} ${color.body}`}>{item.summary}</p>
                ) : null}
              </div>
              <span
                aria-hidden="true"
                className={`inline-flex shrink-0 items-center gap-1.5 ${type.label} ${color.muted} transition-colors group-hover:text-bronze`}
              >
                {isOpen ? "Close" : "Read more"}
                <svg
                  viewBox="0 0 16 16"
                  className={`h-3.5 w-3.5 text-bronze transition-transform ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            <div
              id={`${item.id}-panel`}
              role="region"
              aria-labelledby={`${item.id}-box`}
              hidden={!isOpen}
              className="px-6 pb-6 md:px-8 md:pb-8"
            >
              <div className={`space-y-8 ${type.body} ${color.body}`}>
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
