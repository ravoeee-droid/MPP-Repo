import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const rules = [
  { file: "public/assets/founder/hero.webp", minWidth: 2800, minHeight: 1800, label: "Founder Hero" },
  { file: "public/assets/founder/portrait.webp", minWidth: 2000, minHeight: 2600, label: "Founder Portrait" },

  { file: "public/assets/people/recruiting.webp", minWidth: 2200, minHeight: 1600, label: "People / Recruiting" },
  { file: "public/assets/people/detail-role.webp", minWidth: 2200, minHeight: 1600, label: "People / Role Detail" },
  { file: "public/assets/people/detail-selection.webp", minWidth: 2200, minHeight: 1600, label: "People / Selection Detail" },

  { file: "public/assets/performance/meeting.webp", minWidth: 2200, minHeight: 1600, label: "Performance / Meeting" },
  { file: "public/assets/performance/detail-rhythm.webp", minWidth: 2200, minHeight: 1600, label: "Performance / Rhythm Detail" },
  { file: "public/assets/performance/detail-coaching.webp", minWidth: 2200, minHeight: 1600, label: "Performance / Coaching Detail" },

  { file: "public/assets/systems/approach-workshop.webp", minWidth: 2400, minHeight: 1600, label: "Systems / Workshop" },
  { file: "public/assets/systems/structure.webp", minWidth: 2200, minHeight: 1600, label: "Systems / Structure" },
  { file: "public/assets/systems/detail-mapping.webp", minWidth: 2200, minHeight: 1600, label: "Systems / Mapping Detail" },
  { file: "public/assets/systems/detail-process.webp", minWidth: 2200, minHeight: 1600, label: "Systems / Process Detail" },

  { file: "public/assets/process/01-analyse.webp", minWidth: 1600, minHeight: 1200, label: "Process / Analyse" },
  { file: "public/assets/process/02-klarheit.webp", minWidth: 1600, minHeight: 1200, label: "Process / Klarheit" },
  { file: "public/assets/process/03-umsetzung.webp", minWidth: 1600, minHeight: 1200, label: "Process / Umsetzung" },
  { file: "public/assets/process/04-entwicklung.webp", minWidth: 1600, minHeight: 1200, label: "Process / Entwicklung" },

  { file: "public/assets/insights/people.webp", minWidth: 1800, minHeight: 1400, label: "Insight / People" },
  { file: "public/assets/insights/performance.webp", minWidth: 1800, minHeight: 1400, label: "Insight / Performance" },
  { file: "public/assets/insights/systems.webp", minWidth: 1800, minHeight: 1400, label: "Insight / Systems" }
];

const root = process.cwd();
let checked = 0;
let failures = 0;

for (const rule of rules) {
  const absolute = path.join(root, rule.file);

  try {
    await fs.access(absolute);
  } catch {
    continue;
  }

  checked += 1;

  const meta = await sharp(absolute).metadata();
  const width = meta.width ?? 0;
  const height = meta.height ?? 0;

  const landscapeRule = width >= rule.minWidth && height >= rule.minHeight;
  const portraitAlternative =
    rule.file.includes("portrait.webp") &&
    width >= rule.minWidth &&
    height >= rule.minHeight;

  if (!landscapeRule && !portraitAlternative) {
    failures += 1;
    console.error(
      `[FAIL] ${rule.label}: ${width}×${height}px — required at least ${rule.minWidth}×${rule.minHeight}px`
    );
  } else {
    console.log(
      `[PASS] ${rule.label}: ${width}×${height}px`
    );
  }
}

if (checked === 0) {
  console.log("No production imagery uploaded yet; image-resolution gate has nothing to validate.");
}

if (failures > 0) {
  console.error(
    `Image quality gate failed: ${failures} uploaded asset(s) are below the minimum source resolution.`
  );
  process.exit(1);
}

console.log(`Image quality gate passed for ${checked} uploaded production asset(s).`);
