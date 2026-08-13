import { florida, floridaInUsa, usa } from "../generated/map-paths";
import {
  BRONZE,
  FILL,
  GRATICULE_SPACING,
  LOCATOR,
  STROKE,
} from "./spec";

/**
 * The three forum illustrations for the silo hubs.
 *
 * One cartographic grammar at three relationships: Florida for state, the
 * United States for federal, and the two overlapping for white-collar, which is
 * the silo whose cases can be charged in either system.
 *
 * All three are decorative. The jurisdiction each one draws is stated in the
 * adjacent copy, so they carry aria-hidden rather than an aria-label that would
 * make a screen reader repeat the paragraph it just read.
 *
 * Geometry is generated. See scripts/build-maps.mjs.
 */

type Props = { className?: string };

function Graticule({ width, height }: { width: number; height: number }) {
  const cols = Math.ceil(width / GRATICULE_SPACING);
  const rows = Math.ceil(height / GRATICULE_SPACING);
  return (
    <g
      stroke="currentColor"
      strokeOpacity={FILL.graticule}
      strokeWidth={STROKE.graticule}
      vectorEffect="non-scaling-stroke"
    >
      {Array.from({ length: cols - 1 }, (_, i) => (
        <line
          key={`v${i}`}
          x1={(i + 1) * GRATICULE_SPACING}
          y1={0}
          x2={(i + 1) * GRATICULE_SPACING}
          y2={height}
        />
      ))}
      {Array.from({ length: rows - 1 }, (_, i) => (
        <line
          key={`h${i}`}
          x1={0}
          y1={(i + 1) * GRATICULE_SPACING}
          x2={width}
          y2={(i + 1) * GRATICULE_SPACING}
        />
      ))}
    </g>
  );
}

/** Bronze fill inside a navy boundary. The boundary is what meets 1.4.11. */
function Locator({ at }: { at: [number, number] | null }) {
  if (!at) return null;
  const [cx, cy] = at;
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={LOCATOR.outerRadius}
        fill="none"
        stroke="currentColor"
        strokeOpacity={FILL.outerRing}
        strokeWidth={STROKE.locator}
        vectorEffect="non-scaling-stroke"
      />
      <circle
        cx={cx}
        cy={cy}
        r={LOCATOR.innerRadius}
        fill={BRONZE}
        stroke="currentColor"
        strokeWidth={STROKE.locator}
        vectorEffect="non-scaling-stroke"
      />
    </g>
  );
}

function Shape({
  paths,
  fillOpacity,
  strokeWidth,
}: {
  paths: string[];
  fillOpacity: number;
  strokeWidth: number;
}) {
  return (
    <g
      fill="currentColor"
      fillOpacity={fillOpacity}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
    >
      {paths.map((d) => (
        <path key={d.slice(0, 24)} d={d} vectorEffect="non-scaling-stroke" />
      ))}
    </g>
  );
}

/**
 * State: Florida's 67 counties, with Hillsborough, the 13th Judicial Circuit,
 * picked out.
 *
 * The county borders replace the graticule here rather than joining it. A
 * background grid and a boundary network are two line systems at similar weight
 * and they turn to mud on top of each other, so the state map trades the
 * abstract grid for the real one. This is also the only one of the three where
 * that trade is available: county lines mean something specific on a state
 * criminal page, because a county IS the unit the state courts are organised
 * into and a judicial circuit is a group of them.
 *
 * Hillsborough is filled rather than dotted. A locator pin says "near here";
 * a filled county says "this jurisdiction", which is the actual claim, and it
 * reads at a glance as one county out of many. Bronze inside a navy boundary,
 * per the contrast note in spec.ts: the boundary is what satisfies 1.4.11.
 */
export function StateForumMap({ className = "" }: Props) {
  return (
    <svg
      viewBox={florida.viewBox}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <Shape
        paths={florida.paths}
        fillOpacity={FILL.land}
        strokeWidth={STROKE.primary}
      />

      {florida.counties && (
        <path
          d={florida.counties}
          fill="none"
          stroke="currentColor"
          strokeOpacity={FILL.county}
          strokeWidth={STROKE.county}
          vectorEffect="non-scaling-stroke"
        />
      )}

      {florida.hillsborough && (
        <path
          d={florida.hillsborough}
          fill={BRONZE}
          stroke="currentColor"
          strokeWidth={STROKE.primary}
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      )}
    </svg>
  );
}

/**
 * Federal: the United States, with the Middle District divisions marked.
 *
 * The country is drawn at hairline weight with almost no fill on purpose. A
 * filled US map on a federal defense page reads as a claim to practice
 * nationwide, which is the misleading-geography pattern in avoid.md items 33
 * and 47 and touches the Rule 4-7.12 bona fide office requirement. Here the
 * country is context and only the marked divisions carry weight.
 */
export function FederalForumMap({ className = "" }: Props) {
  return (
    <svg
      viewBox={usa.viewBox}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <Graticule width={800} height={500} />
      <Shape
        paths={usa.paths}
        fillOpacity={FILL.contextLand}
        strokeWidth={STROKE.context}
      />

      {/* Florida at the subject weight, so the eye finds it without the state
          being coloured in. Filling the whole state bronze would overstate the
          claim: the Middle District is one of three Florida districts. */}
      <Shape
        paths={floridaInUsa}
        fillOpacity={FILL.land * 2.2}
        strokeWidth={STROKE.primary}
      />

      {/* A SINGLE locator, not one per division.
          Tampa, Orlando, and Fort Myers sit roughly 100 miles apart, which at
          US scale is about 15px: three rings collapse into an illegible blob at
          480px and a smudge at 320px. Verified in the preview harness. The
          divisions are named in the adjacent copy, where they are readable. */}
      <Locator at={usa.markers.tampa} />
    </svg>
  );
}

/**
 * White-collar, ALTERNATIVE: the record predates the charge.
 *
 * Offset sheets sitting to the left of a marked point on a timeline. The
 * documents these cases are built from already exist before anyone knows there
 * is an investigation, which is the substance of the white-collar forum copy.
 *
 * Breaks the cartographic system on purpose, because white-collar is the one
 * silo with no geography of its own. See the note on the overlap version below.
 */
export function WhiteCollarDocumentMap({ className = "" }: Props) {
  // Painted back to front, so the annotated sheet ends up on top. Drawing them
  // in index order buries the one sheet whose content is the point.
  // Painted back to front, so the annotated sheet ends up on top. Drawing them
  // in index order buries the one sheet whose content is the point.
  const sheets = [3, 2, 1, 0];
  const SHEET_W = 224;
  const SHEET_H = 250;
  const STEP = 28;
  const AXIS_Y = 400;
  const BASE_X = 78;
  // Sheets stand ON the axis rather than floating above a separate diagram.
  // That was the main weakness of the first version: two unrelated drawings
  // stacked, with a void between them.
  const BASE_Y = AXIS_Y - SHEET_H;
  const RECORD_X = BASE_X + 46;
  const CHARGE_X = 648;

  return (
    <svg
      viewBox="0 0 800 500"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <Graticule width={800} height={500} />

      {sheets.map((i) => {
        const x = BASE_X + i * STEP;
        // Fan upward from the axis, so every sheet keeps its footing on it.
        const y = BASE_Y - i * (STEP * 0.34);
        const isEarliest = i === 0;
        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width={SHEET_W}
              height={SHEET_H}
              fill="var(--color-white)"
              stroke="currentColor"
              strokeOpacity={isEarliest ? 1 : 0.45}
              strokeWidth={isEarliest ? STROKE.primary : STROKE.context}
              vectorEffect="non-scaling-stroke"
            />
            {isEarliest &&
              [0, 1, 2, 3, 4, 5].map((line) => (
                <line
                  key={line}
                  x1={x + 26}
                  x2={x + SHEET_W - (line === 5 ? 92 : 26)}
                  y1={y + 52 + line * 30}
                  y2={y + 52 + line * 30}
                  stroke={line === 2 ? BRONZE : "currentColor"}
                  strokeOpacity={line === 2 ? 1 : 0.26}
                  strokeWidth={line === 2 ? 6 : 3}
                  vectorEffect="non-scaling-stroke"
                />
              ))}
          </g>
        );
      })}

      {/* One timeline the whole composition stands on. */}
      <line
        x1={44}
        y1={AXIS_Y}
        x2={756}
        y2={AXIS_Y}
        stroke="currentColor"
        strokeOpacity={0.45}
        strokeWidth={STROKE.primary}
        vectorEffect="non-scaling-stroke"
      />
      {Array.from({ length: 8 }, (_, i) => (
        <line
          key={i}
          x1={44 + i * 102}
          x2={44 + i * 102}
          y1={AXIS_Y - 5}
          y2={AXIS_Y + 5}
          stroke="currentColor"
          strokeOpacity={0.28}
          strokeWidth={STROKE.context}
          vectorEffect="non-scaling-stroke"
        />
      ))}

      {/* The record's own point in time, tied to the annotated sheet. This is
          what makes the axis mean something instead of decorating the bottom:
          the gap between this tick and the charge marker IS the point. */}
      <line
        x1={RECORD_X}
        y1={AXIS_Y - 14}
        x2={RECORD_X}
        y2={AXIS_Y + 14}
        stroke="currentColor"
        strokeWidth={STROKE.locator}
        vectorEffect="non-scaling-stroke"
      />

      {/* The span from record to charge, drawn as the distance it is. */}
      <line
        x1={RECORD_X}
        y1={AXIS_Y}
        x2={CHARGE_X}
        y2={AXIS_Y}
        stroke={BRONZE}
        strokeWidth={4}
        vectorEffect="non-scaling-stroke"
      />

      <line
        x1={CHARGE_X}
        y1={AXIS_Y - 54}
        x2={CHARGE_X}
        y2={AXIS_Y + 18}
        stroke="currentColor"
        strokeWidth={STROKE.locator}
        vectorEffect="non-scaling-stroke"
      />
      <circle
        cx={CHARGE_X}
        cy={AXIS_Y}
        r={LOCATOR.innerRadius}
        fill={BRONZE}
        stroke="currentColor"
        strokeWidth={STROKE.locator}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/**
 * White-collar: the two systems overlapping.
 *
 * These cases are the ones that can be charged in either forum, and often start
 * before anyone tells you which. By this page the reader has already learned
 * the vocabulary from the sibling illustrations, so the overlap reads directly.
 *
 * The intersection is a real clip of one shape by the other, not an
 * approximation drawn by hand, so the boundary is exact. The navy stroke around
 * the bronze region is what satisfies 1.4.11.
 */
export function WhiteCollarForumMap({ className = "" }: Props) {
  const FL_SCALE = 0.62;
  const FL_X = 300;
  const FL_Y = 40;
  const flTransform = `translate(${FL_X} ${FL_Y}) scale(${FL_SCALE})`;

  return (
    <svg
      viewBox="0 0 800 500"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <clipPath id="hm-fc-usa">
          {usa.paths.map((d) => (
            <path key={d.slice(0, 24)} d={d} />
          ))}
        </clipPath>
        <clipPath id="hm-fc-fl" clipPathUnits="userSpaceOnUse">
          <g transform={flTransform}>
            {florida.paths.map((d) => (
              <path key={d.slice(0, 24)} d={d} />
            ))}
          </g>
        </clipPath>
      </defs>

      <Graticule width={800} height={500} />

      <Shape
        paths={usa.paths}
        fillOpacity={FILL.contextLand}
        strokeWidth={STROKE.context}
      />

      <g transform={flTransform}>
        <Shape
          paths={florida.paths}
          fillOpacity={FILL.land}
          strokeWidth={STROKE.primary}
        />
      </g>

      {/* The exact intersection: Florida filled bronze, clipped to the US. */}
      <g clipPath="url(#hm-fc-usa)">
        <g transform={flTransform}>
          {florida.paths.map((d) => (
            <path key={d.slice(0, 24)} d={d} fill={BRONZE} fillOpacity={0.9} />
          ))}
        </g>
      </g>

      {/* Navy boundary on the overlap, drawn as each outline clipped by the
          other. Their union is exactly the intersection's border. */}
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={STROKE.locator}
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      >
        <g clipPath="url(#hm-fc-usa)">
          <g transform={flTransform}>
            {florida.paths.map((d) => (
              <path key={d.slice(0, 24)} d={d} vectorEffect="non-scaling-stroke" />
            ))}
          </g>
        </g>
        <g clipPath="url(#hm-fc-fl)">
          {usa.paths.map((d) => (
            <path key={d.slice(0, 24)} d={d} vectorEffect="non-scaling-stroke" />
          ))}
        </g>
      </g>
    </svg>
  );
}
