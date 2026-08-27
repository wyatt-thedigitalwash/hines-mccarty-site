import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    // The verification build's output directory (NEXT_DIST_DIR in `npm run
    // verify`, which exists so a running `next dev` keeps .next to itself).
    // eslint-config-next only knows to skip `.next`, so without this line the
    // generated bundle gets linted and buries the real findings: 335 errors
    // and 6,531 warnings, of which three were actually ours.
    ".next-verify/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
