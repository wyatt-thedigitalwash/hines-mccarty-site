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
  tools,
} from "../src/lib/site.ts";

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

  if (!ok) {
    console.log("\nRoute check FAILED (self-tests).");
    process.exit(1);
  }
}

// ---------------------------------------------------------------- A. data
console.log("\nA. Hrefs in the page data");
{
  type Ref = { from: string; shape: string; label: string; href: string };
  const refs: Ref[] = [];
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

// ---------------------------------------------------------------- B. rendered
console.log("\nB. Hrefs in the built HTML");
if (!RENDERED) {
  console.log(
    "  ..    DEFERRED to postbuild. This sweep reads .next, and a prebuild run " +
      "would report on the PREVIOUS build's HTML, which is worse than not " +
      "running: a stale pass reads as a current one.",
  );
} else if (!existsSync(".next/server/app")) {
  fail(
    ".next/server/app not found and --rendered was requested. A missing artifact " +
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
  })(".next/server/app");

  const dead = new Map<string, Set<string>>();
  let checked = 0;
  for (const f of files) {
    const html = readFileSync(f, "utf8");
    const page = f.replace(".next/server/app", "").replace(/\.html$/, "") || "/";
    for (const m of html.matchAll(/href="([^"]+)"/g)) {
      const href = m[1];
      // Internal page links only. Next's own assets, absolute URLs, and the
      // non-http schemes are not routes and are not this gate's business.
      if (!href.startsWith("/")) continue;
      if (href.startsWith("/_next/")) continue;
      checked++;
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
