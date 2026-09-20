import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["cloudflare-env.d.ts"],
    linterOptions: { reportUnusedDisableDirectives: "off" },
  },
  globalIgnores([
    ".next/**",
    ".open-next/**",
    ".wrangler/**",
    "next-env.d.ts",
    "qa/**",
  ]),
]);
