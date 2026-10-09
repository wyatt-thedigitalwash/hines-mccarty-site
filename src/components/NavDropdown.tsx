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
      return kids
        .filter((c) => c.href.startsWith("/attorneys/"))
        .map((c) => ({ label: c.label, href: c.href }));
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
    <div className="invisible absolute left-1/2 top-full z-10 -translate-x-1/2 pt-4 opacity-0 transition-[opacity,visibility] delay-150 duration-150 group-hover:visible group-hover:opacity-100 group-hover:delay-75 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:delay-0 motion-reduce:transition-none">
      <ul className="min-w-60 bg-white py-3 shadow-[0_12px_32px_rgba(16,25,51,0.18)]">
        {items.map((child) => (
          <li key={child.href + child.label} className={child.divider ? "mt-2 border-t border-navy/10 pt-2" : undefined}>
            <Link
              href={child.href}
              aria-current={pathname === child.href ? "page" : undefined}
              className={`block whitespace-nowrap px-5 py-2 font-heading text-sm transition-colors hover:bg-navy/[0.04] hover:text-bronze ${
                child.divider ? "font-semibold text-navy" : "text-navy/80"
              }`}
            >
              {child.label}
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
