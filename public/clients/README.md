# Client logo assets

Prepared on 13 October 2026 from the twelve client identities supplied by Zavino. The Work page uses eleven transparent dark monochrome WebPs and one native SVG. The original downloads remain intact in [client-logo-assets/](../../client-logo-assets/); [SOURCES.txt](../../client-logo-assets/SOURCES.txt) retains source pages, direct asset URLs, and collection notes.

| Asset                                                    | Description                                                                                    |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| [rancon.webp](rancon.webp)                               | Original transparent white wordmark converted to a dark foreground.                            |
| [halda-valley.webp](halda-valley.webp)                   | Original symbol and wordmark from Halda Valley’s site.                                         |
| [ventro.webp](ventro.webp)                               | Original header wordmark from Ventro’s site.                                                   |
| [steak-and-marrow.webp](steak-and-marrow.webp)           | Primary wordmark isolated from the restaurant logo’s fire background and emblem.               |
| [borsalle.webp](borsalle.webp)                           | Wordmark cropped from the recorded profile image.                                              |
| [saus-taus.webp](saus-taus.webp)                         | Original venture-profile mark; the small source was not enlarged.                              |
| [nawabi-delight.webp](nawabi-delight.webp)               | Mark cropped from the Facebook profile image that the user confirmed as the logo.              |
| [popsicles.webp](popsicles.webp)                         | Standalone primary mark extracted from the existing designer branding reference sheet.         |
| [thanda-garam.webp](thanda-garam.webp)                   | Primary wordmark cropped from the recorded Foodpanda vendor logo.                              |
| [chair-line.webp](chair-line.webp)                       | Original symbol and wordmark from Chair Line’s header logo.                                    |
| [mk-electronics.svg](mk-electronics.svg)                 | Original vector paths; the viewBox isolates the primary wordmark and excludes its tiny slogan. |
| [british-bangla-travel.webp](british-bangla-travel.webp) | Original transparent white wordmark converted to a dark foreground.                            |

Sharp applies deterministic foreground masks, recorded crops, transparent trimming, and lossless WebP encoding. Raster output fits within 384 × 180px without enlargement. The selected primary letterforms come from the originals; no logo was generated or redrawn. SVG processing retains the original paths and compacts whitespace while setting a dark fill/stroke.

The twelve shipping logo files total **53,134 bytes (51.9 KiB)**, compared with **2,078,058 bytes** for their selected originals: a **97.4% reduction**. Metadata and this README are excluded from those totals. The largest WebP is 7,050 bytes. The native SVG is 20,848 bytes, or 6,116 bytes when gzip-compressed locally. Every logo remains below the script’s 25,000-byte per-file budget.

Run from the repository root to regenerate the shipping assets and their structured records with the existing Sharp dependency:

```sh
node scripts/prepare-client-logos.mjs
```

[manifest.json](manifest.json) and each adjacent `<image-file>.json` record the source file and page, crop, processing method, output dimensions, and byte counts. The source notes distinguish a designer reference for Popsicles from the user-confirmed Nawabi identity and the other collected marks’ source evidence; processing does not provide new independent identity confirmation.
