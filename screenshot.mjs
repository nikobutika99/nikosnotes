// Screenshot helper for the design-QA workflow (see CLAUDE.md).
// Usage: node screenshot.mjs http://localhost:3000 [label]
// Saves to ./temporary screenshots/screenshot-N[-label].png (auto-incremented).
import puppeteer from 'puppeteer';
import { mkdir, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] ? `-${process.argv[3]}` : '';
const outDir = path.join(process.cwd(), 'temporary screenshots');

async function nextIndex() {
  if (!existsSync(outDir)) return 1;
  const files = await readdir(outDir);
  const nums = files
    .map((f) => /screenshot-(\d+)/.exec(f))
    .filter(Boolean)
    .map((m) => Number(m[1]));
  return (nums.length ? Math.max(...nums) : 0) + 1;
}

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
// Let fonts + lazy content settle.
await new Promise((r) => setTimeout(r, 800));

await mkdir(outDir, { recursive: true });
const n = await nextIndex();
const file = path.join(outDir, `screenshot-${n}${label}.png`);
await page.screenshot({ path: file, fullPage: true });
console.log('Saved', file);
await browser.close();
