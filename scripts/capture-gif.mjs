/**
 * Captures the hero demo widget as GIFs using Playwright + ffmpeg.
 *
 * Usage:
 *   node scripts/capture-gif.mjs
 *
 * Output:
 *   demo-record-replay.gif  — scenes 0 + 1 (record + replay)
 *   demo-agent.gif          — scene 2 (AI agent autofill)
 *
 * Requires:
 *   npm install --save-dev playwright && npx playwright install chromium
 *   ffmpeg on PATH
 */

import { chromium } from 'playwright';
import { execSync, spawn } from 'child_process';
import { mkdirSync, rmSync, existsSync, readdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT     = path.resolve(__dirname, '..');
const WORK_DIR = path.join(ROOT, '.gif-capture');
const PORT     = 8788;

// Fixed content dimensions (dualPane / agentFullPane height = 548px)
const W = 860;
const H = 548;

const GIFS = [
  { name: 'demo-record-replay', scenes: '0,1', loops: 1 },
  { name: 'demo-agent',         scenes: '2',   loops: 1 },
];

function startServer() {
  const proc = spawn('python3', ['-m', 'http.server', String(PORT), '--directory', ROOT], {
    stdio: 'ignore',
  });
  return new Promise(resolve => setTimeout(() => resolve(proc), 700));
}

/**
 * Opens capture.html with the given scenes param, waits for the widget to
 * expose a manual capture start, records video for loops × cycleDuration,
 * then returns { videoPath, cycleDuration, captureOffsetSeconds }.
 */
async function capture({ name, scenes, loops }) {
  const videoDir = path.join(WORK_DIR, name);
  mkdirSync(videoDir, { recursive: true });

  const browser = await chromium.launch();
  const videoStartedAt = Date.now();
  const context = await browser.newContext({
    viewport: { width: W, height: H },
    recordVideo: { dir: videoDir, size: { width: W, height: H } },
  });
  const page = await context.newPage();

  await page.route('**', route => {
    if (/app\.aevra\.co\/embed/.test(route.request().url())) return route.abort();
    return route.continue();
  });

  await page.goto(`http://localhost:${PORT}/capture.html?capture&compact=1&manualStart=1&scenes=${scenes}`, {
    waitUntil: 'networkidle',
    timeout: 20000,
  });

  await page.waitForFunction(
    () => window.__heroCaptureReady === true && typeof window.__startHeroCapture === 'function',
    { timeout: 8000 }
  );

  await page.evaluate(() => window.__startHeroCapture());

  const cycleDuration = await page
    .waitForFunction(() => typeof window.__heroCycleDuration === 'number', { timeout: 8000 })
    .then(() => page.evaluate(() => window.__heroCycleDuration));

  const totalS = cycleDuration * loops;
  console.log(`  cycle=${cycleDuration.toFixed(3)}s × ${loops} loop(s) = recording ${totalS.toFixed(3)}s`);

  const captureOffsetSeconds = (Date.now() - videoStartedAt) / 1000;
  await page.waitForTimeout(totalS * 1000);

  await context.close(); // flushes the video
  await browser.close();

  const webm = readdirSync(videoDir).find(f => f.endsWith('.webm'));
  if (!webm) throw new Error(`No video file found for ${name}`);

  return { videoPath: path.join(videoDir, webm), cycleDuration, captureOffsetSeconds };
}

/**
 * Converts the recorded webm to a palette-optimised GIF trimmed to exactly
 * loops × cycleDuration seconds so the loop is clean.
 */
function toGif({ videoPath, cycleDuration, loops, name, captureOffsetSeconds }) {
  const out       = path.join(ROOT, `${name}.gif`);
  const trimTo    = (cycleDuration * loops).toFixed(3);
  const trimFrom  = captureOffsetSeconds.toFixed(3);
  const vf = [
    'fps=20',
    `scale=${W}:-1:flags=lanczos`,
    'split[s0][s1]',
    '[s0]palettegen=max_colors=128[p]',
    '[s1][p]paletteuse=dither=bayer:diff_mode=rectangle',
  ].join(',');

  execSync(`ffmpeg -y -i "${videoPath}" -ss "${trimFrom}" -t "${trimTo}" -vf "${vf}" "${out}"`, { stdio: 'inherit' });
  console.log(`  → ${out}`);
}

// ── Main ──────────────────────────────────────────────────────────────────────

console.log('Starting local server...');
const server = await startServer();

if (existsSync(WORK_DIR)) rmSync(WORK_DIR, { recursive: true });
mkdirSync(WORK_DIR);

try {
  for (const gif of GIFS) {
    console.log(`\nCapturing: ${gif.name} (scenes ${gif.scenes})`);
    const { videoPath, cycleDuration, captureOffsetSeconds } = await capture(gif);
    toGif({ videoPath, cycleDuration, loops: gif.loops, name: gif.name, captureOffsetSeconds });
  }
  console.log('\nDone.');
} finally {
  server.kill();
  rmSync(WORK_DIR, { recursive: true });
}
