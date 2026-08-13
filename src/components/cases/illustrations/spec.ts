/**
 * One spec for all three forum illustrations.
 *
 * The three sit on sibling pages and must read as one system. Every value they
 * share lives here rather than being repeated per component, which is what
 * keeps them from drifting apart as they get edited.
 */

/** Navy comes from `currentColor`, so the parent's text color drives it. */
export const BRONZE = "var(--color-bronze)";

/**
 * Stroke widths are in SCREEN pixels, not viewBox units.
 *
 * Every path sets vector-effect="non-scaling-stroke". Without it, three
 * drawings at three viewBox scales render at three different visual weights,
 * which is the usual way a set like this falls apart. With it, all three read
 * identically at any size.
 */
export const STROKE = {
  /** The subject of the drawing. */
  primary: 1.4,
  /** Context that must not compete: the US behind the federal illustration. */
  context: 1,
  /** Locator boundary. Carries the contrast, see NOTE below. */
  locator: 1.5,
  graticule: 1,
  /** County borders on the Florida illustration. */
  county: 0.75,
} as const;

export const FILL = {
  /** Landmass tint. Kept low so the outline, not the fill, does the work. */
  land: 0.07,
  /** Context landmass. Nearly nothing. */
  contextLand: 0.04,
  graticule: 0.05,
  outerRing: 0.3,
  /**
   * County borders. Heavier than the graticule because these are real
   * boundaries rather than a background grid, but still well below the
   * coastline so the state reads as one shape first and 67 second.
   */
  county: 0.14,
} as const;

/**
 * NOTE ON CONTRAST, load-bearing.
 *
 * Bronze measures 2.46:1 on white and 2.17:1 on linen, both below the 3:1 that
 * WCAG 1.4.11 requires of a meaningful graphical object. It passes on navy
 * (7.07:1) only.
 *
 * So bronze is never allowed to carry meaning on its own against a light
 * background. Every bronze region is enclosed by a navy stroke, which measures
 * 17.37:1 on white, and the boundary is what makes the mark perceivable. Bronze
 * is the fill inside a compliant outline, not the signal itself.
 *
 * If you remove a navy stroke from a bronze shape here, you break 1.4.11.
 */
export const LOCATOR = {
  outerRadius: 19,
  innerRadius: 7.5,
} as const;

export const GRATICULE_SPACING = 62;
