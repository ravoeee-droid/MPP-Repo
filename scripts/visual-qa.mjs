import fs from "node:fs/promises";
import { chromium } from "playwright";

const baseUrl = process.env.QA_BASE_URL || "http://127.0.0.1:3000";
const outDir = "artifacts/visual-qa";

const captures = [
  { name: "home-desktop-1440", path: "/", width: 1440, height: 1100 },
  { name: "home-desktop-1920", path: "/", width: 1920, height: 1080 },
  { name: "home-mobile-390", path: "/", width: 390, height: 844 },
  { name: "home-mobile-430", path: "/", width: 430, height: 932 },
  { name: "recruiting-desktop", path: "/recruiting", width: 1440, height: 1000 },
  { name: "performance-desktop", path: "/performance", width: 1440, height: 1000 },
  { name: "systems-desktop", path: "/systems", width: 1440, height: 1000 },
  { name: "about-desktop", path: "/ueber-mpp", width: 1440, height: 1000 }
];

const forbiddenVisibleText = [
  "CLIENT PROOF REQUIRED",
  "VERIFIED ONLY",
  "Finales Asset",
  "Finales Section-Asset",
  "Upload: public/assets",
  "Lorem ipsum"
];

await fs.mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const failures = [];
const report = [];

for (const capture of captures) {
  const context = await browser.newContext({
    viewport: { width: capture.width, height: capture.height },
    deviceScaleFactor: 1,
    reducedMotion: "reduce"
  });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => consoleErrors.push(error.message));

  const response = await page.goto(baseUrl + capture.path, {
    waitUntil: "networkidle",
    timeout: 30000
  });

  await page
    .waitForFunction(
      () =>
        Array.from(document.images).every(
          (img) => img.complete && img.naturalWidth > 0
        ),
      undefined,
      { timeout: 15000 }
    )
    .catch(() => {});

  await page.waitForTimeout(500);

  const checks = await page.evaluate((forbidden) => {
    const html = document.documentElement;
    const bodyText = document.body.innerText || "";
    const images = Array.from(document.images);

    const brokenImages = images
      .filter((img) => !img.complete || img.naturalWidth === 0)
      .map((img) => img.currentSrc || img.src);

    const visibleAssetFallbacks = Array.from(
      document.querySelectorAll(".asset-slot__meta")
    ).filter((el) => {
      const style = getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      return (
        style.display !== "none" &&
        style.visibility !== "hidden" &&
        Number(style.opacity) > 0.05 &&
        rect.width > 0 &&
        rect.height > 0
      );
    }).length;

    const overflowOffenders = Array.from(document.querySelectorAll("body *"))
      .map((el) => {
        const rect = el.getBoundingClientRect();
        const style = getComputedStyle(el);
        return { el, rect, style };
      })
      .filter(
        ({ rect, style }) =>
          style.display !== "none" &&
          style.visibility !== "hidden" &&
          (rect.right > window.innerWidth + 2 || rect.left < -2)
      )
      .slice(0, 20)
      .map(({ el, rect, style }) => ({
        node:
          el.tagName.toLowerCase() +
          (el.id ? "#" + el.id : "") +
          (el.className && typeof el.className === "string"
            ? "." + el.className.trim().replace(/\s+/g, ".")
            : ""),
        left: Math.round(rect.left),
        right: Math.round(rect.right),
        width: Math.round(rect.width),
        position: style.position,
        whiteSpace: style.whiteSpace,
        text: (el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 90)
      }));

    return {
      title: document.title,
      statusOverflow: html.scrollWidth - window.innerWidth,
      brokenImages,
      visibleAssetFallbacks,
      forbiddenText: forbidden.filter((text) => bodyText.includes(text)),
      overflowOffenders,
      bodyHeight: document.body.scrollHeight
    };
  }, forbiddenVisibleText);

  const status = response?.status() ?? 0;
  const currentFailures = [];

  if (status < 200 || status >= 400) {
    currentFailures.push(`HTTP ${status}`);
  }
  if (checks.statusOverflow > 2) {
    currentFailures.push(
      `horizontal overflow +${checks.statusOverflow}px at ${capture.width}px; offenders: ${checks.overflowOffenders
        .slice(0, 6)
        .map((x) => `${x.node}[${x.left},${x.right}]`)
        .join(", ")}`
    );
  }
  if (checks.brokenImages.length) {
    currentFailures.push(
      `broken images: ${checks.brokenImages.slice(0, 5).join(", ")}`
    );
  }
  if (checks.visibleAssetFallbacks > 0) {
    currentFailures.push(
      `${checks.visibleAssetFallbacks} visible asset fallback(s)`
    );
  }
  if (checks.forbiddenText.length) {
    currentFailures.push(
      `unfinished visible copy: ${checks.forbiddenText.join(", ")}`
    );
  }
  if (consoleErrors.length) {
    currentFailures.push(
      `console/page errors: ${consoleErrors.slice(0, 5).join(" | ")}`
    );
  }

  await page.screenshot({
    path: `${outDir}/${capture.name}.png`,
    fullPage: true
  });

  report.push({
    ...capture,
    httpStatus: status,
    checks,
    consoleErrors,
    failures: currentFailures
  });

  if (currentFailures.length) {
    failures.push({
      name: capture.name,
      failures: currentFailures
    });
  }

  await context.close();
}

await browser.close();

await fs.writeFile(
  `${outDir}/report.json`,
  JSON.stringify({ generatedAt: new Date().toISOString(), report, failures }, null, 2)
);

if (failures.length) {
  console.error("Visual QA failed:");
  for (const failure of failures) {
    console.error(`- ${failure.name}: ${failure.failures.join("; ")}`);
  }
  process.exit(1);
}

console.log(
  `Visual QA passed for ${captures.length} desktop/mobile route captures. Screenshots saved in ${outDir}.`
);
