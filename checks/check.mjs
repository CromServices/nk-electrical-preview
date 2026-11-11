#!/usr/bin/env node
import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SHOTS = path.join(ROOT, "checks", "shots");
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".woff2": "font/woff2",
  ".png": "image/png",
  ".webp": "image/webp",
  ".txt": "text/plain",
};

function fail(msg) {
  console.error("FAIL " + msg);
  process.exitCode = 1;
}

function pass(msg) {
  console.log("PASS " + msg);
}

const BANNED = [
  /\bTODO\b/i,
  /\bplaceholder\b/i,
  /\bsample\b/i,
  /\bdemo\b/i,
  /\btemplate\b/i,
  /\bconcept\b/i,
  /\billustrative\b/i,
  /\bwireframe\b/i,
  /\bbrief\b/i,
  /\bL-\d+/i,
  /\bCrom\b/i,
  /this form does not send/i,
  /CoffeeCup/i,
  /you('ll| will) stay on this page/i,
  /confirmation email/i,
  /\bcalendars?\b/i,
  /\bAI\b/,
  /\bbot\b/i,
  /\bABN\b/i,
  /There is no online price/i,
  /dLook/i,
  /builder/i,
  /we will (email|call|follow)/i,
  /a copy (will|arrives)/i,
];

async function startServer() {
  const server = createServer(async (req, res) => {
    const url = decodeURIComponent((req.url || "/").split("?")[0].split("#")[0]);
    let rel = url === "/" ? "/index.html" : url;
    const file = path.join(ROOT, rel.replace(/^\/+/, ""));
    if (!file.startsWith(ROOT)) {
      res.writeHead(403);
      res.end();
      return;
    }
    try {
      const data = await readFile(file);
      res.writeHead(200, { "Content-Type": MIME[path.extname(file)] || "application/octet-stream" });
      res.end(data);
    } catch {
      res.writeHead(404);
      res.end("not found");
    }
  });
  await new Promise((r) => server.listen(0, "127.0.0.1", r));
  const { port } = server.address();
  return { server, base: `http://127.0.0.1:${port}` };
}

async function overflow(page) {
  return page.evaluate(() => {
    const w = document.documentElement.scrollWidth;
    const iw = window.innerWidth;
    return { w, iw, overflow: w > iw + 1 };
  });
}

async function headerTop(page) {
  await page.evaluate(() => window.scrollTo(0, 1500));
  await page.waitForTimeout(200);
  return page.evaluate(() => {
    const h = document.querySelector("header.site");
    return h.getBoundingClientRect().top;
  });
}

async function run() {
  await mkdir(SHOTS, { recursive: true });
  const { server, base } = await startServer();
  const browser = await chromium.launch();
  let ok = true;
  const mark = (cond, msg) => {
    if (cond) pass(msg);
    else {
      fail(msg);
      ok = false;
    }
  };

  try {
    for (const vp of [
      { w: 1440, h: 900, name: "1440" },
      { w: 390, h: 844, name: "390" },
      { w: 320, h: 720, name: "320" },
    ]) {
      const page = await browser.newPage({ viewport: { width: vp.w, height: vp.h } });
      await page.goto(base + "/", { waitUntil: "networkidle" });
      const ov = await overflow(page);
      mark(!ov.overflow, `no overflow at ${vp.name} (${ov.w} vs ${ov.iw})`);
      if (vp.name !== "320") {
        const top = await headerTop(page);
        mark(Math.abs(top) < 1, `header top===0 after 1500px scroll at ${vp.name} (got ${top})`);
      }
      await page.close();
    }

    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(base + "/", { waitUntil: "networkidle" });

    const theme0 = await page.getAttribute("html", "data-theme");
    mark(theme0 === "light" || theme0 === "dark", `initial data-theme is ${theme0}`);
    const moon0 = await page.locator(".icon-moon").evaluate((el) => getComputedStyle(el).opacity);
    const sun0 = await page.locator(".icon-sun").evaluate((el) => getComputedStyle(el).opacity);
    if (theme0 === "light") mark(Number(moon0) > 0.5 && Number(sun0) < 0.5, "light mode shows moon");
    else mark(Number(sun0) > 0.5 && Number(moon0) < 0.5, "dark mode shows sun");

    await page.locator("#theme-toggle").click();
    await page.waitForTimeout(350);
    const theme1 = await page.getAttribute("html", "data-theme");
    mark(theme1 && theme1 !== theme0, `toggle flips data-theme ${theme0} -> ${theme1}`);
    const moon1 = await page.locator(".icon-moon").evaluate((el) => getComputedStyle(el).opacity);
    const sun1 = await page.locator(".icon-sun").evaluate((el) => getComputedStyle(el).opacity);
    if (theme1 === "dark") mark(Number(sun1) > 0.5 && Number(moon1) < 0.5, "dark icon is sun");
    else mark(Number(moon1) > 0.5 && Number(sun1) < 0.5, "light icon is moon");

    const chips = page.locator(".day-chips .chip");
    mark((await chips.count()) === 14, "14 date chips");
    const weekends = page.locator(".day-chips .chip[disabled]");
    const wcount = await weekends.count();
    mark(wcount >= 2 && wcount <= 6, `weekends disabled (${wcount})`);
    for (let i = 0; i < (await chips.count()); i++) {
      const dow = await chips.nth(i).getAttribute("data-dow");
      const disabled = await chips.nth(i).isDisabled();
      if (dow === "0" || dow === "6") mark(disabled, `chip ${i} weekend disabled`);
      else mark(!disabled, `chip ${i} weekday enabled`);
    }

    const pills = page.locator(".time-pills .pill");
    const labels = [];
    for (let i = 0; i < (await pills.count()); i++) labels.push((await pills.nth(i).innerText()).trim());
    mark(labels.join("|") === "Morning|Midday|Afternoon", `time pills ${labels.join("/")}`);

    await page.locator("#b-name").fill("Alex Test");
    await page.locator("#b-phone").fill("0418569953");
    await page.locator(".book-form button[type=submit]").click();
    const success = page.locator("#book-success");
    mark(await success.isVisible(), "booking success visible");
    const stext = (await page.locator("#book-success-line").innerText()).trim();
    mark(/Visit request saved:/i.test(stext), `success restates summary: ${stext}`);
    mark(!/(email|call you|follow-up|calendar|we will)/i.test(stext), "success does not promise follow-up");

    await page.screenshot({ path: path.join(SHOTS, "booking-success.png"), fullPage: true });

    await page.goto(base + "/#lb1", { waitUntil: "networkidle" });
    const lb = page.locator(".lightbox:target");
    mark(await lb.isVisible(), "lightbox opens via :target");

    const visible = await page.evaluate(() => document.body.innerText);
    const allowedPhoto = /Your photo here/g;
    let scan = visible.replace(allowedPhoto, "");
    const hits = [];
    for (const re of BANNED) {
      const m = scan.match(re);
      if (m) hits.push(m[0]);
    }
    mark(hits.length === 0, hits.length ? "banned text: " + hits.join(", ") : "banned-text scan clean");

    const noindex = await page.locator('meta[name="robots"]').getAttribute("content");
    mark(/noindex/i.test(noindex || ""), "noindex meta");

    async function shot(theme, w, h, file) {
      const p = await browser.newPage({ viewport: { width: w, height: h } });
      await p.addInitScript((t) => localStorage.setItem("nk-theme", t), theme);
      await p.goto(base + "/", { waitUntil: "networkidle" });
      await p.screenshot({ path: path.join(SHOTS, file), fullPage: false });
      await p.close();
    }
    await shot("light", 1440, 900, "desktop-1440-light.png");
    await shot("dark", 1440, 900, "desktop-1440-dark.png");
    await shot("light", 390, 844, "mobile-390-light.png");
    await shot("dark", 390, 844, "mobile-390-dark.png");

    await page.close();
  } finally {
    await browser.close();
    server.close();
  }

  const expected = [
    "desktop-1440-light.png",
    "desktop-1440-dark.png",
    "mobile-390-light.png",
    "mobile-390-dark.png",
    "booking-success.png",
  ];
  for (const f of expected) {
    mark(existsSync(path.join(SHOTS, f)), "shot " + f);
  }

  if (ok && process.exitCode !== 1) {
    console.log("ALL CHECKS PASS");
  } else {
    console.log("CHECKS FAILED");
    process.exit(1);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
