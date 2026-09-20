import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import sharp from "sharp";

// Only the 13 approved top-level showreels enter the published collection.
const source = "resources-from-old-website/videos";
const destination = "public/media/reels";
fs.mkdirSync(destination, { recursive: true });
const files = fs
  .readdirSync(source)
  .filter((file) => /^Zavino Showreel \d{2} \[.+\]\.mp4$/.test(file))
  .sort();
if (files.length !== 13)
  throw new Error(
    `Expected 13 approved showreels; found ${files.length}. Review the collection before publishing.`,
  );
const manifest = [];
for (const file of files) {
  const number = file.match(/Showreel (\d{2})/)[1];
  const input = path.join(source, file);
  const output = path.join(destination, `${number}.mp4`);
  const probe = spawnSync(
    "ffprobe",
    ["-v", "quiet", "-show_format", "-show_streams", "-of", "json", input],
    { encoding: "utf8" },
  );
  if (probe.status !== 0)
    throw new Error(`ffprobe failed for ${file}. Install FFmpeg first.`);
  const meta = JSON.parse(probe.stdout);
  const duration = Number(meta.format.duration);
  if (
    !fs.existsSync(output) ||
    fs.statSync(input).mtimeMs > fs.statSync(output).mtimeMs ||
    process.argv.includes("--force")
  ) {
    const encode = spawnSync(
      "ffmpeg",
      [
        "-hide_banner",
        "-loglevel",
        "error",
        "-i",
        input,
        "-vf",
        "scale='min(720,iw)':-2",
        "-c:v",
        "libx264",
        "-preset",
        "fast",
        "-crf",
        "24",
        "-maxrate",
        "2000k",
        "-bufsize",
        "4000k",
        "-pix_fmt",
        "yuv420p",
        "-c:a",
        "aac",
        "-b:a",
        "96k",
        "-movflags",
        "+faststart",
        "-y",
        output,
      ],
      { stdio: "inherit" },
    );
    if (encode.status !== 0) throw new Error(`Encoding failed for ${file}`);
  }
  const frame = spawnSync(
    "ffmpeg",
    [
      "-hide_banner",
      "-loglevel",
      "error",
      "-ss",
      String(Math.min(3, duration * 0.2)),
      "-i",
      input,
      "-frames:v",
      "1",
      "-f",
      "image2pipe",
      "-vcodec",
      "png",
      "pipe:1",
    ],
    { maxBuffer: 20 * 1024 * 1024 },
  );
  if (frame.status !== 0)
    throw new Error(`Poster extraction failed for ${file}`);
  await sharp(frame.stdout)
    .resize({ width: 480 })
    .webp({ quality: 83 })
    .toFile(path.join(destination, `${number}-poster.webp`));
  manifest.push({
    number,
    source: file,
    duration: Math.round(duration),
    video: `/media/reels/${number}.mp4`,
    poster: `/media/reels/${number}-poster.webp`,
  });
  console.log(
    `Showreel ${number}: ${Math.round(duration)}s, ${Math.round(fs.statSync(output).size / 1024)} KiB`,
  );
}
fs.writeFileSync(
  "src/lib/reel-manifest.json",
  `${JSON.stringify(manifest, null, 2)}\n`,
);
