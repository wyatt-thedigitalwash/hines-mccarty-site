# Locations Map Section

Analysis of the Carlson, Meissner & Hayslett "Serving West Florida & Beyond"
section, and the build plan for our version.

Status: planned, not built. Nothing in this document has shipped.

---

## 1. What the reference actually is

### Structure

| Element | Reference treatment |
|---|---|
| Section | Full bleed, roughly 2.3:1, white background |
| Split | Text left ~34%, map right ~55%, map bleeds off top / right / bottom |
| Eyebrow | "OUR LOCATIONS", serif, uppercase, ~0.1em tracking |
| Heading | Display serif, ~54px, two lines, **centered inside a left column** |
| Body | **Serif**, ~18px, line-height ~1.75, left aligned |
| CTA | Navy fill, white serif label, ~8px radius, "View All Locations" |
| Map | Raster tile map (Google or Mapbox light style), desaturated to near-white |
| Markers | Custom navy shield-pins, ~28px, no labels of their own |
| Left edge | White gradient dissolving the map into the page, no hard seam |

### What is genuinely good about it

1. **The gradient dissolve.** The single best detail. The map reads as part of
   the page rather than an embedded widget. Worth copying exactly.
2. **The bleed.** Not boxed, not a card. The map runs out of frame on three
   sides, which is what makes it feel like a background rather than an asset.
3. **Brand-shaped markers.** The pin *is* their shield motif. Cheap to do,
   looks bespoke.
4. **Extreme desaturation.** The map never competes with the copy.

### What is weak, and what we must not copy

1. **The map is generic and noisy.** It labels Gainesville, Palm Coast, Daytona
   Beach, Deltona, Kissimmee, Lakeland, Palm Bay, Port Saint Lucie, Cape Coral,
   and West Palm Beach. The firm is in none of them. Roughly two-thirds of the
   text on that map is irrelevant to the reader, because it came with the tiles
   rather than being chosen.
2. **The eyebrow.** House rule: no eyebrow labels above headings.
3. **A centered heading above left-aligned body copy** in the same column. The
   axes disagree. SITE.md is left aligned throughout.
4. **Serif body copy.** Ours is Poppins. Not a flaw in theirs, just not ours.
5. **It is a tile map**, which brings an API key, a billing account, a runtime
   network request on a section most visitors scroll past, a mandatory
   attribution badge, and terms that restrict caching and screenshotting. A
   screenshot of Google Maps used as a static asset is a terms violation.

---

## 2. The compliance problem, which changes the brief

The reference section is about **offices**: "convenient office locations in
Tampa, Clearwater, Spring Hill, Newport Richie, Tampa, St. Pete, and Bradenton."
Those are seven bona fide offices.

**Hines & McCarty has one published office: Brandon.** Tampa exists in
`offices` with `published: false` and no confirmed address.

The six requested markers -- Tampa, St. Pete, Sarasota, Fort Myers, Naples,
Orlando -- are offices in **none** of those places. Copying the reference's
framing would have the page assert seven offices the firm does not have. That is
Rule 4-7.12 (a firm may not advertise a location as an office unless it is a
bona fide office) and 4-7.13 (inherently misleading), and it is the same gate
Tampa has been sitting behind since the office data was written.

### Consequences for the design, not just the copy

- **The heading cannot be "Our Locations."** It is a service-area section.
- **The markers cannot be map pins.** A teardrop pin means "the thing is here."
  A dot with a ring reads as "point of interest," which is what these are. This
  is a compliance-driven design decision, and it happens to look cleaner.
- **Brandon should appear, distinctly.** A map showing six cities and omitting
  the firm's only actual office is strange, and drawing the office differently
  from the service areas is the clearest possible way to make the distinction
  visually rather than relying on a caption nobody reads.

### The framing that is both true and stronger

All six cities sit inside the **Middle District of Florida**, spanning three of
its five divisions:

| Division | Cities requested |
|---|---|
| Tampa | Tampa, St. Petersburg, Sarasota |
| Fort Myers | Fort Myers, Naples |
| Orlando | Orlando |

The site already claims federal practice in M.D. Fla., so a map organized around
federal reach asserts nothing new. It is also a genuinely differentiated idea:
nobody else's "areas we serve" map is organized by federal division.

State charges are a separate claim. The site currently says state work is
Hillsborough County, the 13th Circuit. The other five cities are in the 6th
(Pinellas), 12th (Sarasota), 20th (Lee, Collier), and 9th (Orange) Circuits.
Presenting them undifferentiated implies state practice in five more circuits.

**[NEEDS: confirmation that the firm accepts state cases in Pinellas, Sarasota,
Lee, Collier, and Orange Counties, or confirmation that these six markers
represent federal reach only.]** This gates the copy, not the build.

---

## 3. Technical approach

### Options considered

| | Raster tiles (reference) | MapLibre GL + vector tiles | **Our own SVG** |
|---|---|---|---|
| Licensing | API key, billing, attribution required | Tile provider still required | None. Census public domain, us-atlas ISC |
| Payload | Image request per view | ~200KB JS + WebGL | ~4KB of path data, no JS |
| Runtime | Third-party request | Third-party request | Zero |
| Theming | Limited without a custom style | Good | Total |
| Retina | Needs 2x assets | Vector | Resolution independent |
| SEO | Nothing in HTML | Nothing in HTML | City names server-rendered |
| Unique | Looks like every firm site | Better | Nobody else has it |

**Recommendation: our own SVG.** It is not a compromise, it is the better
artifact on every axis that matters here, and roughly 80% of it already exists.

### What already exists

`scripts/build-maps.mjs` generates `src/components/cases/generated/map-paths.ts`
from us-atlas TopoJSON (Census cartographic boundary files, public domain,
packaged ISC). Florida is 371 points at 0.084% forward deviation, verified
against a generalization budget and protected-feature checks so the Keys and the
panhandle survive simplification.

Critically, it already has a `PLACES` dictionary of `[lon, lat]` and a `marker()`
helper that projects through the **same fitted Albers projection** as the
outline. Marker placement is therefore exact by construction, not eyeballed.

### Verified during this research

Ran the six cities through the existing projection:

```
city         lon/lat              -> svg x,y      onLand  inViewBox
tampa        [-82.4572, 27.9506]   503.3, 294.4   true    true
stPete       [-82.6403, 27.7676]   489.0, 311.0   true    true
sarasota     [-82.5307, 27.3364]   498.1, 349.6   true    true
fortMyers    [-81.8723, 26.6406]   551.6, 411.3   true    true
naples       [-81.7948, 26.1420]   558.6, 455.9   true    true
orlando      [-81.3792, 28.5383]   587.4, 240.3   true    true

cluster bbox: x 489..587  y 240..456  (of 800x620)
closest pair: tampa/stPete at 21.9 svg units
```

All six project onto land and inside the frame.

**The finding that changes the design:** the cluster occupies 98 of 800
horizontal units and 216 of 620 vertical. Rendered at the full state, six
markers would be crammed into 12% of the width, with the entire panhandle and
north Florida empty. Tampa and St. Pete would sit 19px apart at a realistic
render size, so their labels would collide.

**The full state does not work.** The reference solves this too, and it is easy
to miss: *their map has no panhandle.* It runs from roughly Gainesville to Cape
Coral. They cropped to the peninsula and let it bleed.

So we crop as well. Starting viewBox to tune during build, roughly
`"420 180 330 330"`, which frames the cluster with margin, keeps both coasts,
and lets north Florida and the Keys run out of frame.

### County lines: measured, and worth it

`node_modules/us-atlas/counties-10m.json` is present (0.8MB, build-time only).
Florida has 67 counties. Using `topojson-client`'s `mesh` to extract interior
borders only, so each shared edge is drawn once instead of twice:

```
interior mesh, raw          9.1KB
interior mesh, rounded      4.5KB   <- before simplification
all 67 polygons, raw       23.1KB   <- the naive approach, borders drawn twice
```

4.5KB before simplification, well under 2KB gzipped. Affordable.

**Why this matters more than it sounds.** The reference map shows roads. Roads
mean nothing to someone choosing a criminal defense lawyer. County lines are the
jurisdictional unit of the state criminal courts, and judicial circuits are
groups of counties. A map of Florida's counties on a criminal defense site is
substantive where a map of Florida's highways is decoration. Drawn as hairlines
at low opacity it reads as texture, and it is the thing that will make this look
bespoke rather than clip-art.

---

## 4. Build spec

### Layout

- Full-bleed section, white background per the service-page rule
- Desktop: content left ~40%, map right ~60%, map bleeding off top, right, bottom
- Left column, left aligned throughout: h2, body paragraph, city list, one CTA
- **No eyebrow**
- Map dissolves into white on its left edge via a horizontal mask, per the
  reference. This is the detail to get right.
- Mobile: stack. Text, then map, then the city list as real text.

### Map layers, back to front

1. Land fill, very light warm gray, near white
2. County interior mesh, hairline, navy at ~6-8% opacity
3. Hillsborough County filled slightly darker -- the 13th Circuit, where state
   charges are actually defended. Ties the map to a claim the site already makes.
4. State outline, navy hairline
5. Service-area markers: small ring-and-dot, navy, six of them
6. Office marker: Brandon, visually distinct, the brand shield
7. Labels: Poppins uppercase, ~11px, letterspaced, navy/70. Six only.

### Label collision

Tampa and St. Pete are 21.9 units apart, the tightest pair. Labels need manual
side assignment rather than a uniform offset: St. Pete's label to the west,
Tampa's to the east. Store the side in the data next to the coordinates rather
than hard-coding it in the component.

### Accessibility

- The map is informative, not decorative, so it needs a real text equivalent.
  The city list in the left column **is** that equivalent, which means it should
  be a real list in the DOM at every breakpoint, not a mobile-only fallback.
- `role="img"` and an `aria-label` on the SVG; hairlines and county fills
  `aria-hidden`.
- Markers must clear 3:1 non-text contrast against the land fill (WCAG 1.4.11).
  Navy on near-white passes comfortably; verify the county hairlines are
  *decorative* enough not to need it, since they will not pass at 8%.
- Any marker entrance animation respects `prefers-reduced-motion`.

### SEO

- Six city names server-rendered as real text, which the reference does not
  achieve because its city names are baked into a raster.
- Add `areaServed` to the existing `LegalService` JSON-LD, as `City` objects.
  Legitimate structured data, directly supported, and currently absent.
- Do **not** let this become a thin "areas we serve" link farm. Markers stay
  non-interactive until the market pages of CASES-WE-DEFEND-PLAN Section 8 exist
  and clear C13/C14. At that point the map becomes a natural internal-linking
  hub, which is a good reason to build the marker data as a list of records now
  rather than as six hard-coded coordinates.

---

## 5. Work required

1. Add the six cities plus Brandon to `PLACES` in `scripts/build-maps.mjs`.
2. Add a county interior mesh for Florida to the generator, simplified against
   the existing deviation budget, emitted as one path string.
3. Add Hillsborough as a separate filled path.
4. Emit a cropped `viewBox` for the locations map alongside the existing full
   state, so the forum illustrations that already consume `florida` do not move.
5. Extend the generator's verification to assert every marker lands inside the
   simplified state polygon. A marker in the water after simplification is
   exactly the class of bug this pipeline exists to catch, and it is not
   currently checked.
6. Build `LocationsMap.tsx` and the section that wraps it.
7. Add `areaServed` to the schema.

---

## 6. Open questions

1. **[NEEDS: state-court service areas]** See Section 2. Does the firm accept
   state cases in Pinellas, Sarasota, Lee, Collier, and Orange, or are these six
   markers federal reach only? Gates the copy.
2. **[NEEDS: confirm the M.D. Fla. division assignments]** Tampa, Orlando, and
   Fort Myers divisions, against flmd.uscourts.gov, per C12. The existing
   `PLACES` block already carries this note.
3. Should Brandon appear as a distinct office marker? Recommended, see Section 2.
4. Where does this section live? Home page, `/contact`, or both. The reference
   uses it on the home page.
5. Does the client want the "View All Locations" CTA equivalent? There is no
   locations index to link to, and building one would re-raise the office
   question. Suggest linking to `/contact` instead.
