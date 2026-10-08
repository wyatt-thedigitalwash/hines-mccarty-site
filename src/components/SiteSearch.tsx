"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { firm } from "@/lib/site";
import { isGeneric, prepare, search, type SearchEntry, type SearchKind } from "@/lib/search-engine";

/**
 * The site search box, D76. Lives in the header's search overlay.
 *
 * The index (built from the site's data at build time) is fetched the first
 * time the overlay opens, about 40 KB compressed, and matched in the browser,
 * so results appear as the visitor types with no round trip. Arrow keys move
 * through results, Enter opens one, Escape closes the overlay (Header).
 *
 * WAI-ARIA combobox pattern: the input owns a listbox of options and points
 * at the highlighted one with aria-activedescendant; a polite live region
 * announces how many results there are.
 */

const KIND_LABEL: Record<SearchKind, string> = {
  page: "Page",
  topic: "Topic",
  question: "Question",
  attorney: "Attorney",
};

/** Shown before the visitor types: the searches most visitors come for. */
const SUGGESTIONS = ["DUI", "Drug possession", "Car accident", "Domestic violence", "Target letter", "Seal my record"];

let indexPromise: Promise<ReturnType<typeof prepare>> | null = null;
function loadIndex() {
  indexPromise ??= fetch("/search-index.json")
    .then((r) => r.json() as Promise<SearchEntry[]>)
    .then(prepare)
    .catch((e) => {
      indexPromise = null;
      throw e;
    });
  return indexPromise;
}

/** Tell the page a fragment was navigated to, so it can open that topic. */
function announceHash(url: string) {
  if (!url.includes("#")) return;
  window.setTimeout(() => window.dispatchEvent(new Event("site:hash")), 60);
}

export default function SiteSearch({ open, onNavigate }: { open: boolean; onNavigate: () => void }) {
  const router = useRouter();
  const [index, setIndex] = useState<ReturnType<typeof prepare> | null>(null);
  const [failed, setFailed] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    loadIndex().then(setIndex, () => setFailed(true));
    const t = window.setTimeout(() => inputRef.current?.focus(), 50);
    return () => window.clearTimeout(t);
  }, [open]);

  const results = useMemo(() => (index && query.trim() ? search(index, query) : []), [index, query]);
  const generic = isGeneric(results);

  const go = (url: string) => {
    onNavigate();
    setQuery("");
    router.push(url);
    announceHash(url);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => (a + 1) % results.length); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => (a - 1 + results.length) % results.length); }
    else if (e.key === "Enter") { e.preventDefault(); go(results[active].u); }
  };

  const optionId = (i: number) => `${listId}-opt-${i}`;
  const typed = query.trim().length > 0;

  return (
    <div>
      <form
        role="search"
        className="mt-4 flex items-center gap-4 border-b border-white/20 pb-4 transition-colors focus-within:border-bronze"
        onSubmit={(e) => { e.preventDefault(); if (results[active]) go(results[active].u); }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 shrink-0 text-linen/60" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-4-4" strokeLinecap="round" />
        </svg>
        <input
          ref={inputRef}
          type="search"
          role="combobox"
          aria-label="Search the site"
          aria-expanded={results.length > 0}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={results.length ? optionId(active) : undefined}
          value={query}
          onChange={(e) => { setQuery(e.target.value); setActive(0); }}
          onKeyDown={onKeyDown}
          placeholder="Search a charge or a question"
          autoComplete="off"
          className="w-full min-w-0 bg-transparent font-display text-2xl font-medium text-linen placeholder:text-linen/60 focus:outline-none sm:text-4xl [&::-webkit-search-cancel-button]:appearance-none"
        />
      </form>

      <p className="sr-only" aria-live="polite">
        {typed ? (results.length ? `${results.length} results` : "No results") : ""}
      </p>

      <div className="mt-6 max-h-[60vh] overflow-y-auto">
        {!typed ? (
          <div>
            <p className="font-heading text-sm text-linen/70">Popular searches</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <li key={s}>
                  <button
                    type="button"
                    onClick={() => { setQuery(s); setActive(0); inputRef.current?.focus(); }}
                    className="border border-white/20 px-4 py-2 font-heading text-sm text-linen/85 transition-colors hover:border-bronze hover:text-bronze"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : failed ? (
          <p className="text-linen/75">Search is not available right now. Call {firm.phone} and we will point you to the right page.</p>
        ) : !index ? (
          <p className="text-linen/70">Loading…</p>
        ) : results.length ? (
          <>
            <ul id={listId} role="listbox" aria-label="Search results" className="divide-y divide-white/10">
              {results.map((r, i) => (
                <li key={r.u} role="presentation">
                  {/* The link is the option itself: an option may not contain
                      another interactive element (axe nested-interactive). */}
                  <Link
                    href={r.u}
                    id={optionId(i)}
                    role="option"
                    aria-selected={i === active}
                    tabIndex={-1}
                    onClick={(e) => { e.preventDefault(); go(r.u); }}
                    onMouseEnter={() => setActive(i)}
                    className={`block px-3 py-4 transition-colors ${i === active ? "bg-white/[0.06]" : ""}`}
                  >
                    <span className="font-heading text-xs uppercase tracking-[0.12em] text-bronze">
                      {KIND_LABEL[r.kind]}
                      {r.kind !== "page" ? <span className="text-linen/70 normal-case tracking-normal"> · {r.c}</span> : null}
                    </span>
                    <span className="mt-1 block font-display text-xl leading-snug text-linen">{r.t}</span>
                    {r.s ? <span className="mt-1 block text-sm leading-relaxed text-linen/70">{r.s}</span> : null}
                  </Link>
                </li>
              ))}
            </ul>
            {generic ? (
              <p className="mt-4 text-sm text-linen/70">
                This question comes up on several charge pages. Add your charge to narrow it, for example &ldquo;{query.trim()} battery&rdquo;.
              </p>
            ) : null}
          </>
        ) : (
          <div className="text-linen/80">
            <p>Nothing on the site matches &ldquo;{query.trim()}&rdquo;.</p>
            <p className="mt-2 text-sm text-linen/70">
              Try the charge as it is written on your paperwork, or{" "}
              <Link href="/cases-we-defend" onClick={onNavigate} className="underline underline-offset-4 hover:text-bronze">
                see every charge we defend
              </Link>
              . Or call{" "}
              <a href={firm.phoneHref} className="underline underline-offset-4 hover:text-bronze">{firm.phone}</a>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
