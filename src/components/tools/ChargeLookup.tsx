"use client";

/**
 * The charge-lookup island. THE ONLY CLIENT CODE THIS TOOL SHIPS.
 *
 * READ CHARGING-DOCUMENT-DECODER-CONCEPT.md SECTION 3 BEFORE EDITING. The six
 * negatives below are the tool's central design constraint, not house style,
 * and this is the only asset on the site that takes free text from a reader.
 *
 * WHAT THIS FILE MUST NEVER CONTAIN, enforced by `check:charge-lookup` T6 as
 * static analysis over this exact file plus everything it imports:
 *
 *   fetch, XMLHttpRequest, navigator.sendBeacon, WebSocket, EventSource
 *   localStorage, sessionStorage, document.cookie, indexedDB
 *   location.search, location.hash, history.pushState, replaceState
 *   router.push / router.replace with the query in it
 *   any analytics call, and any error reporter carrying the input
 *
 * WHY THE FORM IS NOT SERVER-RENDERED. Assertion T9: with JavaScript disabled
 * the page must render its explanation and the disclosure and NO INPUT THAT
 * APPEARS FUNCTIONAL. A server-rendered <input> that does nothing until
 * hydration is exactly an input that appears functional, and the reader most
 * likely to be on a locked-down or old browser is the reader this tool is for.
 * So the form mounts only after hydration, and the static HTML carries a
 * sentence saying the lookup needs JavaScript instead.
 *
 * WHY THERE IS NO onChange RESOLUTION. Section 3 forbids per-keystroke
 * anything. Resolution runs on submit. That is not a performance decision: a
 * keystroke-triggered resolver is one refactor away from a keystroke-triggered
 * request, and the shape of the code is what makes the next change obvious.
 */
import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { resolve } from "@/lib/tools/charge-lookup/resolve";
import { panelFor, type Panel } from "@/lib/tools/charge-lookup/panel";
import type { ChargeMapData } from "@/lib/tools/charge-lookup/links";
import { HOW_TO_READ, INTRO_NOTE } from "@/lib/tools/charge-lookup/copy";

/**
 * `chargeMap` arrives as a PROP rather than an import.
 *
 * It is derived from `charges` in site.ts, so importing it here would put the
 * authored prose of all 30 charge pages into this island's bundle graph for a
 * map of 33 keys. The server computes it and passes it down.
 *
 * Nothing about C5 changes: a prop ships with the page exactly as an import
 * does, and the resolution still runs entirely in this browser against data
 * that came with the page. See links.ts for what this did and did not save.
 */
export default function ChargeLookup({ chargeMap }: { chargeMap: ChargeMapData }) {
  /**
   * Hydration gate. False during SSR and on the first client render, so the
   * static artifact contains no form. See T9 above.
   *
   * `useSyncExternalStore` rather than a `useState` plus `useEffect` pair.
   * React 19 flags setState inside an effect body, and it is right to: the
   * pair renders twice and asks React to reconcile a tree that was never
   * meant to exist. This hook is the primitive built for exactly this
   * question, "is this the server or the client", and it answers it with two
   * snapshot functions instead of a render cycle. The subscribe callback is
   * empty because the answer never changes after mount.
   */
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const [draft, setDraft] = useState("");
  const [panel, setPanel] = useState<Panel | null>(null);
  /** True once the reader has actually submitted, so an untouched page shows nothing. */
  const [asked, setAsked] = useState(false);

  if (!mounted) {
    return (
      <div
        data-lookup-placeholder
        className="mt-8 border border-navy/15 bg-white px-6 py-6 text-navy/75"
      >
        <p className="max-w-[68ch]">
          The lookup on this page runs in your browser and needs JavaScript
          turned on. With it off, everything below still explains what this page
          covers and what it cannot tell you.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8" data-lookup>
      <form
        className="border border-navy/15 bg-white px-6 py-6"
        onSubmit={(e) => {
          // Prevented so the browser never performs a navigation, which is what
          // would put the typed citation into the URL, the history entry, and
          // the referrer of the next request. Section 3, third negative.
          e.preventDefault();
          setAsked(true);
          setPanel(panelFor(resolve(draft), chargeMap));
        }}
      >
        <label
          className="font-heading text-lg text-navy"
          htmlFor="charge-lookup-input"
        >
          The statute number from your paperwork
        </label>
        <p className="mt-2 max-w-[68ch] text-sm text-navy/70">{HOW_TO_READ}</p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input
            id="charge-lookup-input"
            name="citation"
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            // Every one of these is a leak the browser would perform on its
            // own, without any code here doing it.
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            placeholder="893.13 6a"
            className="w-full border border-navy/25 px-4 py-3 text-navy"
          />
          <button
            type="submit"
            className="bg-navy px-6 py-3 font-heading text-linen"
          >
            Look it up
          </button>
        </div>
        <p className="mt-4 max-w-[68ch] text-sm text-navy/70">{INTRO_NOTE}</p>
      </form>

      {asked && panel ? <ResultPanel panel={panel} /> : null}
    </div>
  );
}

/**
 * The one renderer for every outcome.
 *
 * Every branch of `panelFor` comes through here, which is what makes the
 * disclosure structurally unforgettable: it is rendered from `panel.cannotKnow`
 * outside any conditional, so a result cannot appear without it. T4.
 */
function ResultPanel({ panel }: { panel: Panel }) {
  return (
    <section
      data-result-panel
      data-panel-kind={panel.kind}
      className="mt-8 border border-navy/15 bg-white px-6 py-6"
    >
      <h2 className="font-heading text-xl text-navy" data-panel-heading>
        {panel.heading}
      </h2>
      {panel.notes.map((n) => (
        <p key={n} className="mt-3 max-w-[68ch] text-navy/80">
          {n}
        </p>
      ))}

      {panel.rows.map((row, i) => (
        <article
          key={`${row.cite}-${i}`}
          data-row
          data-cite={row.cite}
          data-degree={row.degree ?? ""}
          data-has-degree={row.degree === undefined ? "no" : "yes"}
          data-partial={row.partial ? "yes" : "no"}
          className="mt-6 border-t border-navy/10 pt-5"
        >
          <p className="font-heading text-lg text-navy">{row.cite}</p>

          {/*
            D33. Rendered ONLY when the key is present. There is no `?? ""`
            fallback and no empty cell: a blank degree reads as "we do not
            know" when the truth is "this paragraph assigns none".
          */}
          {row.degree !== undefined ? (
            <p className="mt-2 text-navy/80">
              <span className="text-navy/55">Degree: </span>
              {row.degree}
            </p>
          ) : null}

          {row.term !== undefined ? (
            <p className="mt-2 text-navy/80" data-term>
              <span className="text-navy/55">The term this paragraph states: </span>
              <q>{row.term}</q>
            </p>
          ) : null}

          <blockquote className="mt-3 max-w-[68ch] border-l-4 border-bronze pl-4 text-navy/80">
            {row.quote}
          </blockquote>

          <p className="mt-2 text-sm text-navy/55">
            {row.source.citation}, recorded {row.source.fetched}.{" "}
            <a href={row.source.url} rel="nofollow noopener" target="_blank">
              Source
            </a>
          </p>

          {row.note ? (
            <p className="mt-2 max-w-[68ch] text-sm text-navy/70">{row.note}</p>
          ) : null}
        </article>
      ))}

      {panel.links.length ? (
        <div className="mt-8 border-t border-navy/10 pt-5" data-links>
          <p className="font-heading text-lg text-navy">Where to read more</p>
          <ul className="mt-3 space-y-2">
            {panel.links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-navy underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {panel.noPageNote ? (
        <p className="mt-6 max-w-[68ch] text-sm text-navy/70">
          {panel.noPageNote}
        </p>
      ) : null}

      {/*
        Section 5, on results AND on refusals, at the same type size as the
        result. Outside every conditional above, deliberately. C2, C3, T4.
      */}
      <aside
        data-cannot-know
        className="mt-8 border-l-4 border-bronze bg-linen px-5 py-5"
      >
        <p className="font-heading text-lg text-navy">
          {panel.cannotKnow.heading}
        </p>
        <p className="mt-2 max-w-[68ch] text-navy/80">{panel.cannotKnow.body}</p>
      </aside>
    </section>
  );
}
