import { MAP_VIEWS, project, type MapVariant } from "@/lib/map-view";
import { officeLatLon, serviceAreas } from "@/lib/site";

/**
 * The locations map: a real tile map with the firm's pins dropped on it.
 *
 * The image comes from /api/map, which holds the provider token server-side.
 * Pins are absolutely positioned HTML, projected into the same Web Mercator
 * view the image was rendered at, so they land exactly on the cities the tiles
 * draw. Positions are percentages, so they stay correct when the image is
 * scaled to fill a container that is not exactly the requested size.
 *
 * OFFICE VERSUS SERVICE AREA. Brandon gets the shield. The service areas get a
 * disc. The reference design uses one shape for all seven of its pins because
 * all seven are offices; ours are not, and under Rule 4-7.12 the firm may only
 * plant an office pin on Brandon. See the note on `serviceAreas` in site.ts.
 *
 * ACCESSIBILITY. The map and the pins are aria-hidden. Every city on it is
 * listed in real text beside it, which is why that list renders at every
 * breakpoint rather than being a mobile fallback.
 */
export default function LocationsMap({
  variant = "desktop",
}: {
  variant?: MapVariant;
}) {
  const view = MAP_VIEWS[variant];
  const office = project(officeLatLon.lat, officeLatLon.lon, view);

  // Server component, so this reads the real environment at render time. With
  // no token /api/map returns 503 and an <img> would render as a broken-image
  // icon, which is worse than an honest placeholder.
  // [NEEDS: MAPBOX_TOKEN] See src/app/api/map/route.ts.
  if (!process.env.MAPBOX_TOKEN) {
    return (
      <div
        aria-hidden="true"
        className="flex h-full w-full items-center justify-center bg-navy/[0.04] px-6"
      >
        {/* D74: the hint shows in development only. A live page without the
            token shows a plain panel, never a setup note to a visitor. */}
        {process.env.NODE_ENV !== "production" ? (
          <p className="max-w-xs text-center font-heading text-sm leading-relaxed text-navy/70">
            [NEEDS: MAPBOX_TOKEN] Add the token to .env.local and the map renders
            here.
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="relative h-full w-full overflow-hidden">
      {/*
        Plain img, not next/image. The bytes come from our own route, which
        already caches hard at the edge and returns a fixed-size image, so the
        optimizer would re-encode something that is already exactly right and
        add a second hop for nothing.
      */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/api/map?v=${variant}`}
        alt=""
        width={view.width}
        height={view.height}
        className="h-full w-full object-cover object-center"
        loading="lazy"
        decoding="async"
      />

      {serviceAreas.map((area) => {
        const at = project(area.lat, area.lon, view);
        return (
          <span
            key={area.key}
            className="absolute block h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-navy shadow-sm lg:h-4 lg:w-4"
            style={{ left: `${at.left}%`, top: `${at.top}%` }}
          />
        );
      })}

      {/* The shield's point is its anchor, so it is translated to sit ON the
          place rather than centred over it like the discs. */}
      <span
        className="absolute block -translate-x-1/2 -translate-y-full"
        style={{ left: `${office.left}%`, top: `${office.top}%` }}
      >
        <Shield />
      </span>
    </div>
  );
}

function Shield() {
  return (
    <svg
      width="26"
      height="34"
      viewBox="0 0 26 34"
      className="drop-shadow-sm"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2 2 H24 V19 Q24 31 13 33 Q2 31 2 19 Z"
        fill="#101933"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
