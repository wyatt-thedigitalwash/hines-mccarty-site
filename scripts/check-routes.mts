/**
 * check:routes. Every href resolves to something that exists.
 *
 * THE DEFECT FAMILY THIS CLOSES. Every other gate on this site verifies
 * properties of what is PRESENT: that copy is sourced, that a quote is whole,
 * that a section reaches the HTML. None of them can see that a DESTINATION is
 * absent, because the destination is not part of the thing being checked. Two
 * clickable 404s shipped on the home page under a full green pipeline, and a
 * third dead href sat dormant in the charge data for weeks. That is HUNT-LIST
 * defect 1 in its "cannot detect absence" form, the same shape as Instance 12,
 * one level out: there the body was missing, here the target is.
 *
 * TWO SWEEPS, because either alone has a hole the other closes.
 *
 *   A. DATA (always). Every href in the page data: Tool.href, relatedGuides,
 *      guide relatedLinks, counterpart. Catches entries that are wrong but
 *      dormant, which a rendered sweep cannot see because they never render.
 *      The templatePreview entry pointing at a bare /resources/guides was
 *      exactly this: wrong for weeks, rendered nowhere, invisible.
 *
 *   B. RENDERED (--rendered, postbuild only). Every internal href in the built
 *      HTML. Catches hrefs hardcoded in components, which the data sweep
 *      cannot see because they are not in the data. Run only with the flag, so
 *      a prebuild run never reads a stale .next and reports on the last build.
 *
 * The route inventory is DERIVED from the filesystem and the page data, never
 * hand-listed. A hand-listed inventory is a second copy of the truth and would
 * drift, which is the failure this project has recorded more than once.
 */
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";
import {
  attorneys,
  charges,
  chargeHref,
  guides,
  guideHref,
  attorneysLeadingPractice,
  injuryPages,
  injuryHref,
  practiceAreaIndex,
  tools,
} from "../src/lib/site.ts";

/** Build output directory. Verification builds use NEXT_DIST_DIR so a running
 * `next dev` keeps .next to itself. */
const DIST_DIR = process.env.NEXT_DIST_DIR || ".next";
const ROOT_DIR = `${DIST_DIR}/server/app`;

let failed = false;
const fail = (m: string) => { console.error(`  FAIL  ${m}`); failed = true; };

const RENDERED = process.argv.includes("--rendered");

// ---------------------------------------------------------------- inventory
/** Every static route, from src/app/**\/page.tsx. */
function staticRoutes(dir = "src/app", prefix = ""): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      // Route groups (folder) do not appear in the URL.
      const seg = entry.startsWith("(") && entry.endsWith(")") ? "" : `/${entry}`;
      out.push(...staticRoutes(full, prefix + seg));
    } else if (entry === "page.tsx") {
      out.push(prefix === "" ? "/" : prefix);
    }
  }
  return out;
}

/**
 * Dynamic segments expanded from the SAME data the routes' own
 * generateStaticParams reads, so the inventory cannot claim a param the build
 * will not emit.
 */
const DYNAMIC: Record<string, string[]> = {
  "/attorneys/[slug]": attorneys.map((a) => `/attorneys/${a.slug}`),
  "/resources/guides/[guide]": guides.map((g) => guideHref(g)),
  // Catch-all: one entry covers both pillars and spokes, because injuryHref is
  // the same function generateStaticParams builds its params from.
  "/personal-injury/[...injury]": injuryPages.map((p) => injuryHref(p)),
  "/criminal-defense/[charge]": charges
    .filter((c) => c.silo === "state")
    .map((c) => chargeHref(c)),
  "/federal-criminal-defense/[charge]": charges
    .filter((c) => c.silo === "federal")
    .map((c) => chargeHref(c)),
  "/white-collar-defense/[charge]": charges
    .filter((c) => c.silo === "white-collar")
    .map((c) => chargeHref(c)),
};

/** Redirect sources are valid destinations: they resolve, via a 308. */
const REDIRECTS = (() => {
  const cfg = readFileSync("next.config.ts", "utf8");
  return [...cfg.matchAll(/source:\s*"([^"]+)"/g)]
    .map((m) => m[1])
    .filter((s) => !s.includes("(")); // header matchers, not redirects
})();

/**
 * App-directory metadata files serve at their own paths and are NOT in
 * public/. Missing these produced this gate's first false positive:
 * src/app/favicon.ico serves at /favicon.ico, and the layout emits it with a
 * cache-busting query, so every built page appeared to link something dead.
 * A gate's first finding being wrong is how gates lose their audience.
 */
const APP_METADATA: Record<string, string> = {
  "favicon.ico": "/favicon.ico",
  "robots.ts": "/robots.txt",
  "sitemap.ts": "/sitemap.xml",
  "opengraph-image.tsx": "/opengraph-image",
  "icon.tsx": "/icon",
  "apple-icon.tsx": "/apple-icon",
  "manifest.ts": "/manifest.webmanifest",
};

/** Files served from public/ are valid hrefs but are not routes. */
function publicFiles(dir = "public", prefix = ""): string[] {
  if (!existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...publicFiles(full, `${prefix}/${entry}`));
    else out.push(`${prefix}/${entry}`);
  }
  return out;
}

const routes = new Set<string>();
for (const r of staticRoutes()) {
  if (r.includes("[")) {
    const expanded = DYNAMIC[r];
    if (!expanded) {
      fail(
        `dynamic route ${r} has no expansion in this gate's DYNAMIC map. Add it, ` +
          `reading the same data its generateStaticParams reads. An unexpanded ` +
          `dynamic route silently makes every href under it unverifiable.`,
      );
      continue;
    }
    for (const e of expanded) routes.add(e);
  } else {
    routes.add(r);
  }
}
for (const r of REDIRECTS) routes.add(r);
for (const [file, served] of Object.entries(APP_METADATA))
  if (existsSync(join("src/app", file))) routes.add(served);
const assets = new Set(publicFiles());

/**
 * FORBIDDEN EDGES. A link that resolves can still be wrong on the merits.
 *
 * Sweeps A and B ask whether a destination exists. Neither can ask whether this
 * PAGE should be pointing at it, and for one link on this site the answer is
 * permanently no: the Criminal Punishment Code ranks Florida offenses, so the
 * offense-level instrument says nothing about a federal charge. That link would
 * resolve, render, and mislead, and it stays wrong after the tool publishes.
 * The concept document Section 9 records it as a standing rule rather than a
 * launch condition, which is exactly the kind of rule that decays into a
 * comment unless something runs it.
 */
const FORBIDDEN_EDGES: { to: string; fromPrefix: string; why: string }[] = [
  {
    to: "/resources/tools/offense-level-comparison",
    fromPrefix: "/federal-criminal-defense",
    why:
      "the Criminal Punishment Code applies to Florida offenses only, so the " +
      "offense-level instrument speaks to nothing on a federal charge page. " +
      "This is wrong on the merits and stays wrong after the tool publishes.",
  },
];

/** Is this href something that exists? */
function resolves(href: string): boolean {
  const path = href.split("#")[0].split("?")[0];
  if (path === "") return true; // a bare fragment, same page
  if (routes.has(path)) return true;
  if (assets.has(path)) return true;
  return false;
}

// ---------------------------------------------------------------- self-tests
console.log("Route-resolution self-tests");
{
  let ok = true;
  const t = (name: string, cond: boolean) => {
    if (cond) console.log(`  ok    ${name}`);
    else { fail(`SELF-TEST: ${name}`); ok = false; }
  };

  t("a real static route resolves (/contact)", resolves("/contact"));
  t("a real dynamic route resolves (a written charge page)",
    resolves(chargeHref(charges.find((c) => c.sections?.length)!)));
  t("a real guide route resolves", resolves(guideHref(guides[0])));
  t("a redirect source resolves (/guides)", resolves("/guides"));
  t("a public asset resolves (/logos/placeholder-1.svg)",
    resolves("/logos/placeholder-1.svg"));
  t("an app-dir metadata file resolves (/favicon.ico)", resolves("/favicon.ico"));
  t("a cache-busted metadata href resolves (/favicon.ico?v=hash)",
    resolves("/favicon.ico?favicon.abc123.ico"));
  t("a fragment on a real route resolves (/attorneys#who-handles-what)",
    resolves("/attorneys#who-handles-what"));

  // PLANTED VIOLATIONS. Each is a real shape this gate exists to catch.
  t("PLANTED: a bare segment with no index route FAILS (/resources/guides)",
    !resolves("/resources/guides"));
  t("PLANTED: an unbuilt tool route FAILS (/sentencing/florida-criminal-punishment-code)",
    !resolves("/sentencing/florida-criminal-punishment-code"));
  t("PLANTED: a typo in a real route FAILS (/attorney)", !resolves("/attorney"));
  t("PLANTED: a charge slug that does not exist FAILS",
    !resolves("/criminal-defense/not-a-real-charge"));

  // The published/unpublished split in sweep A is a real branch, so it gets a
  // test rather than an assumption: a PUBLISHED tool pointing at an unbuilt
  // route must be a failure, which is what stops the concession below from
  // widening into "tool hrefs are never checked".
  {
    const wouldFail = (published: boolean, href: string) =>
      published && !resolves(href);
    t("PLANTED: a PUBLISHED tool pointing at an unbuilt route FAILS",
      wouldFail(true, "/sentencing/florida-criminal-punishment-code"));
    t("an UNPUBLISHED tool pointing at the same route is allowed in sweep A",
      !wouldFail(false, "/sentencing/florida-criminal-punishment-code"));
  }

  // Sweep C. The rule is a standing one, so its test plants the edge rather
  // than waiting for someone to write it for real.
  {
    const violates = (from: string, href: string) =>
      FORBIDDEN_EDGES.some((e) => href === e.to && from.startsWith(e.fromPrefix));
    const TOOL = "/resources/tools/offense-level-comparison";
    t("PLANTED: a federal charge page linking the offense-level tool FAILS",
      violates("/federal-criminal-defense/wire-fraud", TOOL));
    t("a STATE charge page linking the same tool is allowed",
      !violates("/criminal-defense/grand-theft-defense", TOOL));
    t("a federal page linking something else is allowed",
      !violates("/federal-criminal-defense/wire-fraud", "/contact"));
  }

  if (!ok) {
    console.log("\nRoute check FAILED (self-tests).");
    process.exit(1);
  }
}

// ---------------------------------------------------------------- refs
// Hoisted out of sweep A so sweep C can ask a different question of the same
// edges: A asks whether the destination exists, C asks whether this origin is
// allowed to point at it.
type Ref = { from: string; shape: string; label: string; href: string };
const refs: Ref[] = [];

// ---------------------------------------------------------------- A. data
console.log("\nA. Hrefs in the page data");
{
  for (const c of charges) {
    for (const g of c.relatedGuides ?? [])
      refs.push({ from: chargeHref(c), shape: "relatedGuides", label: g.label, href: g.href });
    if (c.counterpart)
      refs.push({ from: chargeHref(c), shape: "counterpart", label: c.counterpart.label, href: c.counterpart.href });
  }
  for (const g of guides)
    for (const l of g.relatedLinks ?? [])
      refs.push({ from: guideHref(g), shape: "relatedLinks", label: l.label, href: l.href });
  /**
   * An UNPUBLISHED tool's href is a planned destination, not a promise.
   *
   * Its route is unbuilt by design, and both surfaces that render tool cards
   * now refuse to link an unpublished one, so the href reaches no reader.
   * Requiring it to resolve would make this gate unsatisfiable until every
   * planned tool ships, and an unsatisfiable gate gets routed around (D21);
   * deleting the href instead would throw away the plan.
   *
   * THIS IS NOT AN EXEMPTION ON TRUST. Sweep B reads the built HTML: the
   * moment one of these hrefs actually renders, it fails there. The
   * concession is "does not render", and that is the thing being checked,
   * rather than "will be built later", which is a promise no gate can hold.
   */
  const planned = tools.filter((t) => !t.published && !resolves(t.href));
  for (const t of tools)
    if (t.published)
      refs.push({ from: "tools[]", shape: "Tool.href", label: t.label, href: t.href });

  let bad = 0;
  for (const r of refs) {
    if (resolves(r.href)) continue;
    bad++;
    fail(
      `${r.from} [${r.shape}] "${r.label}" points at ${r.href}, which is not a route ` +
        `and not a file in public/. Build it, repoint it, or remove it.`,
    );
  }
  if (!bad)
    console.log(`  ok    all ${refs.length} rendered data hrefs resolve to a route or an asset`);
  if (planned.length)
    console.log(
      `  ..    ${planned.length} unpublished tool href(s) point at unbuilt routes, which is ` +
        `the plan, not a defect: ${planned.map((t) => `${t.label} -> ${t.href}`).join("; ")}. ` +
        `Sweep B fails if any of them renders.`,
    );
}

// ---------------------------------------------------- A2. practice-area refs
/**
 * An attorney's practice-area hrefs resolve to a practice area, not just to a
 * route.
 *
 * These two are different questions and only the first was ever asked. Every
 * href here also resolves as a ROUTE, so sweep A passes on all of them. But the
 * bio renders them by looking each one up in `practiceAreaIndex` and dropping
 * what it cannot find, so an href that is a real page and not a real practice
 * area renders NOTHING and reports nothing. That is what erased Colton Trina's
 * injury practice from his own bio the moment it was added.
 */
console.log("\nA2. Attorney practice-area references resolve to a practice area");
{
  let bad = 0, checked = 0;
  for (const a of attorneys) {
    for (const [field, hrefs] of [
      ["practiceAreaHrefs", a.practiceAreaHrefs ?? []],
      ["leadsPracticeHrefs", a.leadsPracticeHrefs ?? []],
    ] as const) {
      for (const href of hrefs) {
        checked++;
        if (!practiceAreaIndex.some((p) => p.href === href)) {
          bad++;
          fail(
            `${a.slug} [${field}] names ${href}, which resolves as a route but ` +
              `is not in practiceAreaIndex, so it renders as nothing on the bio`,
          );
        }
      }
    }
  }
  // The reciprocal: a practice with a lead must be able to render one.
  for (const p of practiceAreaIndex) {
    const leads = attorneysLeadingPractice(p.href);
    if (leads.length) checked++;
  }
  if (!bad)
    console.log(`  ok    ${checked} practice-area reference(s) resolve to a named practice area`);
}

// ---------------------------------------------------------------- B. rendered
/** page path -> every internal href it renders. Populated only with --rendered. */
const renderedEdges = new Map<string, Set<string>>();
console.log("\nB. Hrefs in the built HTML");
if (!RENDERED) {
  console.log(
    "  ..    DEFERRED to postbuild. This sweep reads .next, and a prebuild run " +
      "would report on the PREVIOUS build's HTML, which is worse than not " +
      "running: a stale pass reads as a current one.",
  );
} else if (!existsSync(`${DIST_DIR}/server/app`)) {
  fail(
    `${DIST_DIR}/server/app not found and --rendered was requested. A missing artifact ` +
      "FAILS rather than skips (D30): 'the site is not built' and 'the site has no " +
      "dead links' must never produce the same green run.",
  );
} else {
  const files: string[] = [];
  (function walk(dir: string) {
    for (const e of readdirSync(dir)) {
      const full = join(dir, e);
      if (statSync(full).isDirectory()) walk(full);
      else if (e.endsWith(".html")) files.push(full);
    }
  })(`${DIST_DIR}/server/app`);

  const dead = new Map<string, Set<string>>();
  let checked = 0;
  for (const f of files) {
    const html = readFileSync(f, "utf8");
    const page = f.replace(`${DIST_DIR}/server/app`, "").replace(/\.html$/, "") || "/";
    for (const m of html.matchAll(/href="([^"]+)"/g)) {
      const href = m[1];
      // Internal page links only. Next's own assets, absolute URLs, and the
      // non-http schemes are not routes and are not this gate's business.
      if (!href.startsWith("/")) continue;
      if (href.startsWith("/_next/")) continue;
      checked++;
      if (!renderedEdges.has(page)) renderedEdges.set(page, new Set());
      renderedEdges.get(page)!.add(href.split("#")[0].split("?")[0]);
      if (resolves(href)) continue;
      if (!dead.has(href)) dead.set(href, new Set());
      dead.get(href)!.add(page);
    }
  }
  for (const [href, pages] of dead) {
    const list = [...pages].sort();
    fail(
      `${href} is linked from ${pages.size} rendered page(s) and does not resolve: ` +
        `${list.slice(0, 4).join(", ")}${list.length > 4 ? `, +${list.length - 4} more` : ""}`,
    );
  }
  if (!dead.size)
    console.log(
      `  ok    ${checked} internal hrefs across ${files.length} built page(s) all resolve`,
    );
}

// ------------------------------------------------------------- B2. sitemap
/**
 * Nothing in the sitemap is noindex.
 *
 * A sitemap entry asks a crawler to fetch a page. A noindex on that page tells
 * it to discard what it found. Shipping both is a self-cancelling instruction,
 * and sitemap.ts already carries three separate comments warning about it,
 * which is the state a rule reaches just before it stops being true. Comments
 * do not run.
 *
 * Rendered-side only: the sitemap is generated, so the check has to read what
 * was actually emitted rather than the code that emitted it.
 */
console.log("\nB2. Sitemap entries are indexable");
if (!RENDERED) {
  console.log("  ..    DEFERRED to postbuild, same reason as sweep B.");
} else {
  const smPath = join(ROOT_DIR, "sitemap.xml.body");
  const candidates = [
    smPath,
    join(ROOT_DIR, "sitemap.xml"),
    join(ROOT_DIR, "sitemap.xml.meta"),
  ];
  const found = candidates.find((f) => existsSync(f));
  if (!found) {
    console.log(
      "  ..    NOT CHECKED: no generated sitemap found under the build output. " +
        "The route exists, so this is a shape this gate does not know how to " +
        "read rather than a missing sitemap, and it is printed rather than " +
        "passed silently.",
    );
  } else {
    const xml = readFileSync(found, "utf8");
    const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    let bad = 0;
    for (const u of urls) {
      const path = u.replace(/^https?:\/\/[^/]+/, "") || "/";
      const html = join(ROOT_DIR, `${path === "/" ? "/index" : path}.html`);
      if (!existsSync(html)) continue;
      if (/name="robots"[^>]*content="[^"]*noindex/.test(readFileSync(html, "utf8"))) {
        bad++;
        fail(`${path} is in the sitemap and its page carries noindex`);
      }
    }
    if (!bad)
      console.log(`  ok    ${urls.length} sitemap URL(s), none of them noindex`);
  }
}

// ---------------------------------------------------------------- C. forbidden
console.log("\nC. Links that resolve but must not exist from where they are");
{
  const violates = (from: string, href: string) =>
    FORBIDDEN_EDGES.filter(
      (e) => href === e.to && from.startsWith(e.fromPrefix),
    );

  let bad = 0;
  // Data side. Runs on every invocation, including prebuild.
  for (const r of refs)
    for (const e of violates(r.from, r.href.split("#")[0].split("?")[0])) {
      bad++;
      fail(
        `${r.from} [${r.shape}] "${r.label}" links ${e.to}. Pages under ` +
          `${e.fromPrefix} must not: ${e.why}`,
      );
    }
  // Rendered side. Catches the same edge hardcoded in a component, which the
  // data side cannot see. Only meaningful with --rendered.
  for (const [page, hrefs] of renderedEdges)
    for (const href of hrefs)
      for (const e of violates(page, href)) {
        bad++;
        fail(
          `the built page ${page} renders a link to ${e.to}. Pages under ` +
            `${e.fromPrefix} must not: ${e.why}`,
        );
      }

  if (!bad)
    console.log(
      `  ok    ${FORBIDDEN_EDGES.length} forbidden edge rule(s) hold across ` +
        `${refs.length} data href(s)` +
        (RENDERED
          ? ` and ${[...renderedEdges.values()].reduce((n, s) => n + s.size, 0)} rendered href(s)`
          : `; the rendered side is DEFERRED to postbuild, so a hardcoded ` +
            `violation would not be caught by this run`),
    );
}

// D22: say what was not checked, every run.
console.log(
  "\n  ..    NOT CHECKED: external (http) links, which this project does not " +
    "verify at build time; fragment TARGETS, so /attorneys#who-handles-what is " +
    "checked as /attorneys and an absent anchor id would pass; and hrefs " +
    "assembled at runtime in client code, which appear in neither the data nor " +
    "the static HTML.",
);

console.log(failed ? "\nRoute check FAILED." : "\nRoute check passed.");
process.exit(failed ? 1 : 0);
