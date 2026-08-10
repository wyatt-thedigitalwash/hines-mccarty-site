type IconProps = { className?: string };

/** Scales of justice, reduced to a beam, a stem, and two hanging weights. */
export function BalanceMark({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M16 42H32l4 3H12z" fill="currentColor" />
      <rect x="22.5" y="8" width="3" height="34" rx="1.5" fill="currentColor" />
      <circle cx="24" cy="13" r="4.5" fill="currentColor" />
      <rect x="6" y="11.5" width="36" height="3" rx="1.5" fill="currentColor" />
      <rect x="7.25" y="14" width="1.5" height="9" fill="currentColor" fillOpacity="0.55" />
      <rect x="39.25" y="14" width="1.5" height="9" fill="currentColor" fillOpacity="0.55" />
      <circle cx="8" cy="28" r="7" fill="currentColor" fillOpacity="0.3" />
      <circle cx="40" cy="28" r="7" fill="currentColor" fillOpacity="0.3" />
    </svg>
  );
}

/** Defense, split down the center into a solid and a soft half. */
export function ShieldMark({ className = "h-8 w-8" }: IconProps) {
  const d =
    "M24 4c7 0 13 2.5 16 4.5V21c0 11-7 19.5-16 23-9-3.5-16-12-16-23V8.5C11 6.5 17 4 24 4z";
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <defs>
        <clipPath id="hm-shield-l">
          <rect x="0" y="0" width="24" height="48" />
        </clipPath>
        <clipPath id="hm-shield-r">
          <rect x="24" y="0" width="24" height="48" />
        </clipPath>
      </defs>
      <path d={d} fill="currentColor" clipPath="url(#hm-shield-l)" />
      <path d={d} fill="currentColor" fillOpacity="0.45" clipPath="url(#hm-shield-r)" />
    </svg>
  );
}

/** The courthouse and the institution behind the case. */
export function ColumnMark({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M6 15L24 5 42 15z" fill="currentColor" fillOpacity="0.35" />
      <rect x="6" y="14" width="36" height="3" fill="currentColor" />
      <rect x="10" y="17" width="4" height="19" fill="currentColor" />
      <rect x="22" y="17" width="4" height="19" fill="currentColor" fillOpacity="0.5" />
      <rect x="34" y="17" width="4" height="19" fill="currentColor" />
      <rect x="6" y="36" width="36" height="3" fill="currentColor" />
      <rect x="4" y="39" width="40" height="3" fill="currentColor" fillOpacity="0.35" />
    </svg>
  );
}

/** Guidance through a case, from first call to resolution. */
export function CompassMark({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" />
      <rect x="22.5" y="3" width="3" height="6" fill="currentColor" />
      <path d="M24 10L28 24 20 24z" fill="currentColor" />
      <path d="M24 38L28 24 20 24z" fill="currentColor" fillOpacity="0.4" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
    </svg>
  );
}

/** Partnership, two circles sharing one hole, the same evenodd cut used in the hero visual. */
export function BondMark({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 11a13 13 0 100 26 13 13 0 000-26zM29 11a13 13 0 100 26 13 13 0 000-26z"
        fill="currentColor"
      />
    </svg>
  );
}

/** A key, the ring and the teeth, for the Access value and the tools that unlock answers. */
export function AccessMark({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="24" r="7" fill="none" stroke="currentColor" strokeWidth="4.5" />
      <rect x="18" y="22" width="21" height="4" fill="currentColor" />
      <rect x="30" y="26" width="3" height="6" fill="currentColor" />
      <rect x="36" y="26" width="3" height="9" fill="currentColor" fillOpacity="0.5" />
    </svg>
  );
}

/** A lock with a true cutout keyhole, for the Discretion value and confidential handling. */
export function DiscretionMark({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M15 22V15a9 9 0 0118 0v7"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeOpacity="0.55"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 20H40V44H8Z M24 25.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7Z M22 32.5L26 32.5 27 38 21 38Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Four rising nodes, for the four-step Our Process section, from consultation to resolution. */
export function ProcessMark({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 36L20 28 32 20 40 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.5"
      />
      <circle cx="8" cy="36" r="3" fill="currentColor" fillOpacity="0.4" />
      <circle cx="20" cy="28" r="3.5" fill="currentColor" fillOpacity="0.6" />
      <circle cx="32" cy="20" r="4" fill="currentColor" fillOpacity="0.8" />
      <circle cx="40" cy="10" r="5" fill="currentColor" />
    </svg>
  );
}
