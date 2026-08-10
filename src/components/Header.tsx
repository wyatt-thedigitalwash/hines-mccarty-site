"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { firm, formatOffice, primaryNav, primaryOffice } from "@/lib/site";

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "bg-navy border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">
        <Link
          href="/"
          className="font-display text-2xl font-extrabold tracking-tight text-linen lg:text-[1.75rem]"
          aria-label={`${firm.name} home`}
        >
          Hines <span className="text-bronze">&amp;</span> McCarty
        </Link>

        {/* Desktop: flat top nav. The depth lives in the side menu. */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                  className={`font-heading text-[0.9375rem] font-medium uppercase transition-colors hover:text-bronze ${
                    isCurrent(item.href) ? "text-bronze" : "text-linen/80"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
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
        <div className="flex items-center gap-4 lg:hidden">
          <a
            href={firm.phoneHref}
            className="font-heading text-sm font-semibold text-bronze"
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
      <div
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
            <span className="eyebrow text-navy/50">Menu</span>
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

      {/* Search overlay */}
      <div
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
        <div className="absolute inset-x-0 top-0 bg-navy px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-[1400px]">
            <span className="eyebrow text-bronze">Search</span>
            <form
              className="mt-4 flex items-center gap-4 border-b border-white/20 pb-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <SearchIcon className="h-6 w-6 text-linen/60" />
              <input
                autoFocus={searchOpen}
                type="search"
                placeholder="Search charges, guides, and attorneys"
                className="w-full bg-transparent font-display text-2xl font-medium text-linen placeholder:text-linen/40 focus:outline-none sm:text-4xl"
              />
            </form>
            <p className="mt-4 text-sm text-linen/50">Press Escape to close.</p>
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
