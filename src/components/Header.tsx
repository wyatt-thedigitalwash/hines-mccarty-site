"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import SiteSearch from "@/components/SiteSearch";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { firm, formatOffice, primaryNav, primaryOffice } from "@/lib/site";
import NavDropdown, { ChevronIcon, dropdownFor } from "@/components/NavDropdown";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const open = menuOpen || searchOpen;
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, searchOpen]);

  const closeMenu = () => setMenuOpen(false);

  const isCurrent = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  // D85: the logo shrinks and the controls settle once the page scrolls.
  const compact = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen ? "bg-navy" : "bg-transparent"
      }`}
    >
      {/*
        FULL BLEED, unlike the page content below it.

        This bar carried `mx-auto max-w-[1400px]`, the same wrapper every
        section uses, which is right for reading measure and wrong for a
        navigation bar: on a 2000px display it left roughly 300px of empty navy
        outside the logo and outside the last nav item, so the header floated in
        the middle of its own background while the background ran edge to edge.
        A bar that spans the viewport should place its controls at the viewport
        edges.

        The gutter still matches the site's, px-6 and lg:px-10, so the logo
        lines up with nothing in particular by design: it is anchored to the
        window rather than to the content column.
      */}
      {/* D85: THE BAR HAS ONE HEIGHT, scrolled or not, so the menu, phone
          number and icons never move. Only the logo changes: pinned to the
          top-left, at the top of the page it is the full logo hanging below
          the bar over the hero (clear of every hero's breadcrumbs); on scroll
          it scales down from that corner to the monogram, centred in the bar,
          while the names fade (Logo). One element, one transform. The menu
          and icons sit 7px lower at the top of the page and settle into
          place with the logo, a small follow-through the owner asked for. */}
      <div className="relative flex h-[68px] w-full items-center justify-end gap-4 px-6 sm:h-[76px] lg:px-10">
        <Link
              href="/"
              aria-label={`${firm.name} home`}
              className={`absolute left-6 top-4 block transition-[width,height] duration-300 ease-out motion-reduce:transition-none lg:left-10 ${
                compact
                  ? "h-9 w-12 sm:h-11 sm:w-[59px]"
                  : "h-16 w-[95px] sm:h-[72px] sm:w-[107px] lg:h-24 lg:w-[143px]"
              }`}
            >
              <Logo
                compact={compact}
                className={`h-16 w-[95px] origin-top-left text-[#937c3e] transition-transform duration-300 ease-out motion-reduce:transition-none sm:h-[72px] sm:w-[107px] lg:h-24 lg:w-[143px] [--s:0.687] [--x:-8.5px] sm:[--s:0.746] sm:[--x:-10.4px] lg:[--s:0.559] lg:[--x:-10.5px] ${
                  compact ? "[transform:translateX(var(--x))_scale(var(--s))]" : ""
                }`}
              />
        </Link>

        {/* Desktop: flat top nav. The depth lives in the side menu. */}
        <nav aria-label="Primary" className={`hidden lg:block transition-transform duration-300 ease-out motion-reduce:transition-none ${compact ? "" : "translate-y-[7px]"}`}>
          <ul className="flex items-center gap-8">
            {primaryNav.map((item) => {
              const menu = dropdownFor(item);
              return (
                <li
                  key={item.href}
                  className={menu ? "group relative" : undefined}
                  // Escape closes an open dropdown from the keyboard: it is
                  // open only while focus is inside, so drop the focus.
                  onKeyDown={menu ? (e) => { if (e.key === "Escape") (document.activeElement as HTMLElement | null)?.blur(); } : undefined}
                >
                  <Link
                    href={item.href}
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                    className={`inline-flex items-center gap-1.5 font-heading text-[0.9375rem] font-medium uppercase transition-colors hover:text-bronze ${
                      isCurrent(item.href) ? "text-bronze" : "text-linen/80"
                    }`}
                  >
                    {item.label}
                    {menu ? <ChevronIcon /> : null}
                  </Link>
                  {menu ? <NavDropdown items={menu} pathname={pathname} /> : null}
                </li>
              );
            })}
            <li className="flex items-center gap-5 pl-1">
              <a
                href={firm.phoneHref}
                className="font-heading text-[0.9375rem] font-semibold text-bronze transition-colors hover:text-bronze-soft"
              >
                {firm.phone}
              </a>
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Open search"
                className="text-linen/80 transition-colors hover:text-bronze"
              >
                <SearchIcon />
              </button>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={menuOpen}
                aria-controls="site-menu"
                className="text-linen/80 transition-colors hover:text-bronze"
              >
                <MenuIcon />
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile controls */}
        <div className={`flex items-center gap-4 lg:hidden transition-transform duration-300 ease-out motion-reduce:transition-none ${compact ? "" : "translate-y-[7px]"}`}>
          {/* D69: on the narrowest phones the full number beside the longer
              firm name wrapped onto three lines, so below 640px the number is
              not written out. D95: the gold icon with the words "Call Now"
              beside it (no box, client direction), so it reads as the call
              rather than one more icon beside search and menu.
              Named with the number for screen readers. */}
          <a
            href={firm.phoneHref}
            aria-label={`Call ${firm.phone}`}
            className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-bronze transition-colors hover:text-bronze-soft sm:hidden"
          >
            <PhoneIcon />
            Call Now
          </a>
          <a
            href={firm.phoneHref}
            className="hidden whitespace-nowrap font-heading text-sm font-semibold text-bronze sm:inline"
          >
            {firm.phone}
          </a>
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Open search"
            className="text-linen/80"
          >
            <SearchIcon />
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            className="text-linen/80"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {/*
        Slide-in site menu. This is where the site's depth lives: every top-level
        item with its children shown expanded, so one open reveals the whole map.
      */}
      {/* Closed, the overlay is inert: nothing inside it (the scrollable
          panel, the search field, the links) can take focus or be read by a
          screen reader. Without it, tabbing past the header walked keyboard
          users into an invisible menu (WCAG 2.4.3, 2.4.7). */}
      <div
        inert={!menuOpen}
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 bg-navy/70 backdrop-blur-sm"
        />
        <aside
          id="site-menu"
          aria-label="Site menu"
          className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col overflow-y-auto bg-white px-8 py-6 text-navy transition-transform duration-300 sm:px-10 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="eyebrow text-navy/70">Menu</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              tabIndex={menuOpen ? 0 : -1}
              className="text-navy transition-colors hover:text-bronze"
            >
              <CloseIcon />
            </button>
          </div>

          <nav aria-label="Site" className="mt-6 flex flex-col">
            {primaryNav.map((item) => (
              <div key={item.href} className="border-b border-navy/10 py-4">
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  tabIndex={menuOpen ? 0 : -1}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                  className="link-arrow group flex items-center justify-between gap-4 font-display text-2xl font-extrabold leading-tight transition-colors hover:text-bronze"
                >
                  {item.label}
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-navy/30 transition-colors group-hover:text-bronze" />
                </Link>

                {!!item.children?.length && (
                  <ul className="mt-3 space-y-0.5">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={closeMenu}
                          tabIndex={menuOpen ? 0 : -1}
                          aria-current={
                            isCurrent(child.href) ? "page" : undefined
                          }
                          className="block py-1.5 text-navy/65 transition-colors hover:text-bronze"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <a
              href={firm.phoneHref}
              tabIndex={menuOpen ? 0 : -1}
              className="font-display text-2xl font-extrabold hover:text-bronze"
            >
              {firm.phone}
            </a>
            <p className="mt-1 text-sm text-navy/60">
              {formatOffice(primaryOffice)}
            </p>
          </div>
        </aside>
      </div>

      {/* Search overlay. Inert while closed, for the same reason as the menu:
          its field was reachable by Tab while invisible. */}
      <div
        inert={!searchOpen}
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          searchOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Close search"
          tabIndex={searchOpen ? 0 : -1}
          onClick={() => setSearchOpen(false)}
          className="absolute inset-0 bg-navy/90 backdrop-blur-sm"
        />
        <div className="absolute inset-x-0 top-0 bg-navy px-6 pt-6 pb-16 lg:px-10 lg:pb-20">
          <div className="mx-auto max-w-[1400px]">
            {/* D77: a large, always-visible close in the corner, where the
                header's own buttons sit, so leaving search is one obvious tap.
                Tapping the darkened page below and Escape close it too. */}
            <div className="flex items-center justify-between">
              <span className="eyebrow text-bronze">Search</span>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                tabIndex={searchOpen ? 0 : -1}
                className="-mr-2 inline-flex min-h-11 items-center gap-2 px-2 font-heading text-base text-linen transition-colors hover:text-bronze"
              >
                Close
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7" aria-hidden="true">
                  <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            {/* D76: the site search. Results appear as you type. */}
            <SiteSearch open={searchOpen} onNavigate={() => setSearchOpen(false)} />
            <p className="mt-4 hidden text-sm text-linen/70 sm:block">Press Escape or click outside to close.</p>
          </div>
        </div>
      </div>
    </header>
  );
}

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

function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function SearchIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

