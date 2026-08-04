import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const srcDir = "/tmp/portfolio-shots";
const outDir = path.resolve("public/stills");

/** Carbon Trail grade: dark base + forest green wash + warm lift in mids */
async function grade(input, output, { width = 1600, height = 1000 } = {}) {
  const base = sharp(input).resize(width, height, {
    fit: "cover",
    position: "top",
  });

  const { data, info } = await base
    .modulate({ brightness: 0.72, saturation: 0.78 })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Soft green wash + vignette in RGBA
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const i = (y * info.width + x) * 4;
      const nx = (x / info.width) * 2 - 1;
      const ny = (y / info.height) * 2 - 1;
      const vignette = Math.min(1, Math.sqrt(nx * nx + ny * ny) * 0.85);
      const dark = 1 - vignette * 0.55;

      let r = data[i] * dark;
      let g = data[i + 1] * dark;
      let b = data[i + 2] * dark;

      // Mix toward accent #3A5A40 and base #0C0C0C
      r = r * 0.82 + 0x0c * 0.12 + 0x3a * 0.06;
      g = g * 0.82 + 0x0c * 0.12 + 0x5a * 0.06;
      b = b * 0.82 + 0x0c * 0.12 + 0x40 * 0.06;

      data[i] = Math.max(0, Math.min(255, r));
      data[i + 1] = Math.max(0, Math.min(255, g));
      data[i + 2] = Math.max(0, Math.min(255, b));
    }
  }

  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .webp({ quality: 78 })
    .toFile(output);
}

async function heroComposite() {
  // Title + OG use project stills (HireMe first). No dedicated hero asset.

  // Frame stills for project cards
  const frames = [
    ["hireme", "hireme.png"],
    ["sellit", "sellit.png"],
    ["crisispass", "crisispass.png"],
    ["shafiq", "shafiq.png"],
    ["bafc", "bafc.png"],
    ["sheema", "sheema.png"],
  ];

  for (const [name, file] of frames) {
    await grade(path.join(srcDir, file), path.join(outDir, `${name}.webp`), {
      width: 1280,
      height: 800,
    });
  }

  // Triple strip for optional atmosphere (HireMe · SellIt · Crisis)
  const stripW = 640;
  const stripH = 400;
  const panels = await Promise.all(
    ["hireme.png", "sellit.png", "crisispass.png"].map((file) =>
      sharp(path.join(srcDir, file))
        .resize(stripW, stripH, { fit: "cover", position: "top" })
        .modulate({ brightness: 0.7, saturation: 0.75 })
        .toBuffer(),
    ),
  );

  await sharp({
    create: {
      width: stripW * 3,
      height: stripH,
      channels: 3,
      background: "#0C0C0C",
    },
  })
    .composite([
      { input: panels[0], left: 0, top: 0 },
      { input: panels[1], left: stripW, top: 0 },
      { input: panels[2], left: stripW * 2, top: 0 },
    ])
    .modulate({ brightness: 0.85, saturation: 0.8 })
    .webp({ quality: 76 })
    .toFile(path.join(outDir, "reel.webp"));
}

await mkdir(outDir, { recursive: true });
await heroComposite();
console.log("Graded stills written to", outDir);
