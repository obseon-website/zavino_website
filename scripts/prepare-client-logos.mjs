import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const originals = path.join(root, "client-logo-assets");
const destination = path.join(root, "public/clients");
const ink = [38, 62, 49];

// Preserve the original lettering. Crops remove surrounding artwork and tiny
// slogans; a foreground mask gives the marks one legible, transparent treatment.
const logos = [
  { id: "rancon", file: "rancon-white.png", mask: "alpha" },
  { id: "halda-valley", file: "halda-valley.png" },
  { id: "ventro", file: "ventro.png" },
  {
    id: "steak-and-marrow",
    file: "steak-and-marrow.jpg",
    crop: { left: 268, top: 475, width: 627, height: 280 },
    mask: "light",
  },
  {
    id: "borsalle",
    file: "borsalle.png",
    crop: { left: 55, top: 200, width: 435, height: 110 },
  },
  { id: "saus-taus", file: "saus-taus.jpg" },
  {
    id: "nawabi-delight",
    file: "nawabi-delight.jpg",
    crop: { left: 20, top: 225, width: 680, height: 252 },
  },
  {
    id: "popsicles",
    file: "popsicles-logo-reference.png",
    crop: { left: 290, top: 230, width: 610, height: 135 },
    mask: "light",
  },
  {
    id: "thanda-garam",
    file: "thanda-garam.jpg",
    crop: { left: 200, top: 570, width: 610, height: 70 },
  },
  { id: "chair-line", file: "chair-line.png" },
  { id: "mk-electronics", file: "mk-electronics.svg", vector: true },
  {
    id: "british-bangla-travel",
    file: "british-bangla-travel.png",
    mask: "alpha",
  },
];

const sources = await fs.readFile(path.join(originals, "SOURCES.txt"), "utf8");
await fs.mkdir(destination, { recursive: true });
const manifest = [];

for (const logo of logos) {
  const input = path.join(originals, logo.file);
  const sourceEntry = sources
    .split("\n\n")
    .find((entry) => entry.includes(`File: ${logo.file}\n`));
  const sourceUrl = sourceEntry?.match(/Source page: (.+)/)?.[1];
  if (!sourceUrl) throw new Error(`Missing provenance for ${logo.file}`);

  const filename = `${logo.id}.${logo.vector ? "svg" : "webp"}`;
  const output = path.join(destination, filename);

  if (logo.vector) {
    const svg = (await fs.readFile(input, "utf8"))
      .replace(/fill:#[\da-f]+/gi, "fill:#263e31")
      .replace(/stroke:#[\da-f]+/gi, "stroke:#263e31")
      .replace('viewBox="0 0 105.53 20.75"', 'viewBox="26 0 79.53 12"')
      .replace(/\s+/g, " ");
    await fs.writeFile(output, svg);
  } else {
    let image = sharp(input);
    if (logo.crop) image = image.extract(logo.crop);
    const { data, info } = await image
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    const pixels = Buffer.alloc(info.width * info.height * 4);

    for (let offset = 0; offset < data.length; offset += 4) {
      const lightness = Math.min(
        data[offset],
        data[offset + 1],
        data[offset + 2],
      );
      const coverage =
        logo.mask === "alpha"
          ? 1
          : logo.mask === "light"
            ? Number(lightness > 150)
            : Number(lightness < 180);
      pixels[offset] = ink[0];
      pixels[offset + 1] = ink[1];
      pixels[offset + 2] = ink[2];
      pixels[offset + 3] = Math.round((data[offset + 3] * coverage) / 17) * 17;
    }

    const { data: resized, info: dimensions } = await sharp(pixels, {
      raw: { width: info.width, height: info.height, channels: 4 },
    })
      .trim({ threshold: 12 })
      .resize({
        width: 384,
        height: 180,
        fit: "inside",
        withoutEnlargement: true,
      })
      .raw()
      .toBuffer({ resolveWithObject: true });
    // Quantize the final alpha after resampling, which otherwise recreates
    // hundreds of nearly identical edge shades and wastes bytes on JPG noise.
    for (let offset = 0; offset < resized.length; offset += 4) {
      resized[offset] = ink[0];
      resized[offset + 1] = ink[1];
      resized[offset + 2] = ink[2];
      resized[offset + 3] = Math.round(resized[offset + 3] / 17) * 17;
    }
    await sharp(resized, {
      raw: { width: dimensions.width, height: dimensions.height, channels: 4 },
    })
      .webp({ lossless: true, effort: 6 })
      .toFile(output);
  }

  const metadata = await sharp(output).metadata();
  const { size } = await fs.stat(output);
  const { size: originalSize } = await fs.stat(input);
  if (size > 25_000)
    throw new Error(`${filename} exceeds the 25 KB asset budget`);
  const entry = {
    id: logo.id,
    file: filename,
    width: metadata.width,
    height: metadata.height,
    bytes: size,
    originalBytes: originalSize,
    sourceFile: `client-logo-assets/${logo.file}`,
    sourceUrl,
    crop: logo.vector ? { viewBox: "26 0 79.53 12" } : (logo.crop ?? null),
    method: logo.vector
      ? "Original vector paths, monochrome fill and stroke; viewBox crops to the primary wordmark and excludes the tiny slogan; whitespace compacted."
      : "Original logo lettering, optional recorded crop, noise-free monochrome foreground mask, transparent trim, size-limited lossless WebP. No generated or redrawn lettering.",
    prompt: `Sourced logo from ${sourceUrl}, using the original asset ${logo.file}. Preserve the supplied lettering and shapes. Recorded crops isolate the primary mark; produce a dark, transparent, readable logo for the Work page. This asset was processed with Sharp, not generated.`,
  };
  await fs.writeFile(`${output}.json`, `${JSON.stringify(entry, null, 2)}\n`);
  manifest.push(entry);
  console.log(
    `${filename}: ${metadata.width} × ${metadata.height}, ${(size / 1024).toFixed(1)} KB`,
  );
}

await fs.writeFile(
  path.join(destination, "manifest.json"),
  `${JSON.stringify(manifest, null, 2)}\n`,
);
const total = manifest.reduce((sum, logo) => sum + logo.bytes, 0);
console.log(`12 logos: ${(total / 1024).toFixed(1)} KB combined.`);
