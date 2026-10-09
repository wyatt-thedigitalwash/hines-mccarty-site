import Link from "next/link";
import type { NavItem } from "@/lib/site";

/**
 * The desktop dropdowns, D100: short lists one hover from the top bar, for
 * the three items with pages beneath them. The hamburger menu still carries
 * the full site, and phones use only that.
 *
 * Rendered inside the Header's `group relative` list item. Opens on hover and
 * on keyboard focus; the label above it still links to its page. The top
 * padding is a hover bridge across the gap, and the delays keep a passing
 * pointer from flashing it open or shut. A closed menu is `invisible`, so its
 * links leave the tab order.
 */
export type DropdownItem = { label: string; href: string; divider?: boolean };

export function dropdownFor(item: NavItem): DropdownItem[] | null {
  const kids = item.children ?? [];
  switch (item.href) {
    case "/attorneys":
      return [
        ...kids.filter((c) => c.href.startsWith("/attorneys/")).map((c) => ({ label: c.label, href: c.href })),
        // Set apart at the foot, like "All charges" (client direction).
        { label: "Our Firm", href: "/about", divider: true },
      ];
    case "/criminal-defense":
      return [
        ...kids.map((c) => ({ label: c.short ?? c.label, href: c.href })),
        { label: "All charges", href: "/criminal-defense", divider: true },
      ];
    case "/personal-injury":
      return kids.length ? kids.map((c) => ({ label: c.short ?? c.label, href: c.href })) : null;
    default:
      return null;
  }
}

export default function NavDropdown({ items, pathname }: { items: DropdownItem[]; pathname: string }) {
  return (
    /* D102: navy, continuing the header bar rather than a white box under it.
       pt-[26px] bridges from the label down to the bar's bottom edge (the
       76px bar, label centred), so the panel hangs flush from the bar. */
    <div className="invisible absolute -left-6 top-full z-10 pt-[26px] opacity-0 transition-[opacity,visibility] delay-150 duration-150 group-hover:visible group-hover:opacity-100 group-hover:delay-75 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:delay-0 motion-reduce:transition-none">
      <ul className="min-w-64 border-t border-bronze/70 bg-navy py-3 shadow-[0_18px_36px_rgba(5,9,20,0.35)]">
        {items.map((child) => (
          <li key={child.href + child.label} className={child.divider ? "mt-2 border-t border-white/10 pt-2" : undefined}>
            <Link
              href={child.href}
              aria-current={pathname === child.href ? "page" : undefined}
              className={`group/item flex items-center justify-between gap-6 whitespace-nowrap px-6 py-2.5 font-heading text-sm transition-colors hover:bg-white/[0.04] hover:text-bronze ${
                child.divider || pathname === child.href ? "text-bronze" : "text-linen/80"
              } ${child.divider ? "font-semibold" : ""}`}
            >
              {child.label}
              <svg
                viewBox="0 0 12 12"
                className="h-3 w-3 -translate-x-1 opacity-0 transition duration-150 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2 6h8M7 3l3 3-3 3" />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ChevronIcon() {
  return (
    <svg
      viewBox="0 0 12 12"
      className="h-2.5 w-2.5 transition-transform duration-150 group-hover:rotate-180 group-focus-within:rotate-180"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m2.5 4.5 3.5 3.5 3.5-3.5" />
    </svg>
  );
}
