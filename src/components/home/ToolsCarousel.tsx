"use client";

import Link from "next/link";
import { useRef } from "react";
import { tools } from "@/lib/site";
import {
  BalanceMark,
  AccessMark,
  DiscretionMark,
  CompassMark,
  ProcessMark,
} from "@/components/icons/BrandMarks";

// One brand mark per tool card, in data order.
const toolIcons = [BalanceMark, AccessMark, DiscretionMark, CompassMark, ProcessMark];

function ArrowUpRight({ className = "h-4 w-4" }: { className?: string }) {
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

function NavArrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d={dir === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
    </svg>
  );
}

export default function ToolsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  // Mouse click-and-drag state; touch/trackpad use native scrolling.
  const drag = useRef({ active: false, startX: 0, startLeft: 0, moved: false });

  const scrollByCard = (dir: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.85, 372), behavior: "smooth" });
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const el = scrollRef.current;
    if (!el) return;
    drag.current = { active: true, startX: e.clientX, startLeft: el.scrollLeft, moved: false };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const el = scrollRef.current;
    if (!el || !drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.startLeft - dx;
  };

  const endDrag = () => {
    drag.current.active = false;
  };

  // Swallow the click that follows a drag so it doesn't navigate.
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <div className="mt-16 lg:mt-20">
      <div
        ref={scrollRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
        className="carousel-pad-left no-scrollbar flex cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto pr-6 pb-2 active:cursor-grabbing"
      >
        {tools.map((tool, index) => {
          const ToolIcon = toolIcons[index % toolIcons.length];
          return (
          <Link
            key={tool.label}
            href={tool.href}
            draggable={false}
            className="group flex w-[300px] shrink-0 snap-start flex-col bg-white p-8 text-navy transition-colors hover:bg-linen sm:w-[360px]"
          >
            <ToolIcon className="h-9 w-9 text-bronze" />
            <h3 className="mt-5 font-heading text-2xl font-semibold leading-snug text-navy transition-colors group-hover:text-bronze">
              {tool.label}
            </h3>
            <p className="mt-4 flex-1 text-base leading-relaxed text-charcoal">
              {tool.description}
            </p>
            <span className="link-arrow mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-navy transition-colors group-hover:text-bronze">
              Open
              <ArrowUpRight />
            </span>
          </Link>
          );
        })}
      </div>

      {/* Arrows, aligned to the content column */}
      <div className="mx-auto mt-8 flex max-w-[1400px] gap-3 px-6 lg:px-10">
        <button
          type="button"
          aria-label="Previous tools"
          onClick={() => scrollByCard(-1)}
          className="flex h-12 w-12 items-center justify-center border border-linen/30 text-linen transition-colors hover:border-bronze hover:text-bronze"
        >
          <NavArrow dir="left" />
        </button>
        <button
          type="button"
          aria-label="Next tools"
          onClick={() => scrollByCard(1)}
          className="flex h-12 w-12 items-center justify-center border border-linen/30 text-linen transition-colors hover:border-bronze hover:text-bronze"
        >
          <NavArrow dir="right" />
        </button>
      </div>
    </div>
  );
}
