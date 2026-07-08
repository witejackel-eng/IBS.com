/**
 * replace-logos.js
 * Replaces all 46 brand SVGs in public/brands/ with high-quality versions.
 * - 12 from simple-icons (with currentColor → brand hex)
 * - 34 as text wordmark SVGs with proper brand colors
 */

const fs = require('fs');
const path = require('path');
const si = require('simple-icons');

const BRANDS_DIR = path.join(__dirname, '..', 'public', 'brands');

// ─── Step 1: simple-icons brands ─────────────────────────────────────────────
const simpleIconsBrands = [
  { key: 'siCisco',     file: 'cisco.svg',     hex: '1BA0D7' },
  { key: 'siPoly',      file: 'poly.svg',      hex: 'EB3C00' },
  { key: 'siDell',      file: 'dell.svg',      hex: '007DB8' },
  { key: 'siFortinet',  file: 'fortinet.svg',  hex: 'EE3124' },
  { key: 'siZoom',      file: 'zoom.svg',      hex: '0B5CFF' },
  { key: 'siSamsung',   file: 'samsung.svg',   hex: '1428A0' },
  { key: 'siLg',        file: 'lg.svg',        hex: 'A50034' },
  { key: 'siEpson',     file: 'epson.svg',     hex: '003399' },
  { key: 'siNetgear',   file: 'netgear.svg',   hex: '2C262D' },
  { key: 'siSynology',  file: 'synology.svg',  hex: 'B5B5B6' },
  { key: 'siPanasonic', file: 'panasonic.svg', hex: '0049AB' },
  { key: 'siMatrix',    file: 'matrix.svg',    hex: '000000' },
];

// ─── Step 2: Text wordmark brands ────────────────────────────────────────────
const wordmarkBrands = [
  // AV Integration
  { file: 'logitech.svg',      color: '#00B8FC', display: 'Logitech',   title: 'Logitech' },
  { file: 'aver.svg',          color: '#0055A5', display: 'AVer',       title: 'AVer' },
  { file: 'barco.svg',         color: '#BE0031', display: 'Barco',      title: 'Barco' },
  { file: 'biamp.svg',         color: '#E31937', display: 'Biamp',      title: 'Biamp' },
  { file: 'extron.svg',        color: '#FF6600', display: 'Extron',     title: 'Extron' },
  { file: 'crestron.svg',      color: '#F58220', display: 'Crestron',   title: 'Crestron' },
  { file: 'draper.svg',        color: '#003B6F', display: 'Draper',     title: 'Draper' },
  { file: 'harman.svg',        color: '#C8102E', display: 'HARMAN',     title: 'Harman' },
  { file: 'kramer.svg',        color: '#6B2D8B', display: 'Kramer',     title: 'Kramer' },
  { file: 'shure.svg',         color: '#0066CC', display: 'Shure',      title: 'Shure' },
  { file: 'qsc.svg',           color: '#ED1C24', display: 'QSC',        title: 'QSC',        fontSize: 52, letterSpacing: '0.08em' },

  // Communication & IT
  { file: 'alcatel-lucent.svg',color: '#009CDE', display: 'ALCATEL LUCENT', title: 'Alcatel-Lucent', letterSpacing: '0.06em' },
  { file: 'sophos.svg',        color: '#0A7DCD', display: 'Sophos',     title: 'Sophos' },
  { file: 'commscope.svg',     color: '#E31837', display: 'CommScope',  title: 'CommScope' },
  { file: 'systimax.svg',      color: '#00875A', display: 'Systimax',   title: 'Systimax' },
  { file: 'hp-aruba.svg',      color: '#0AB2E6', display: 'Aruba',      title: 'Aruba' },
  { file: 'ruckus.svg',        color: '#FF6B00', display: 'Ruckus',     title: 'Ruckus' },
  { file: 'd-link.svg',        color: '#004A99', display: 'D-Link',     title: 'D-Link' },
  { file: 'apc.svg',           color: '#9D1A10', display: 'APC',        title: 'APC',        letterSpacing: '0.06em' },
  { file: 'vertiv.svg',        color: '#00A3E0', display: 'Vertiv',     title: 'Vertiv' },
  { file: 'eaton.svg',         color: '#A50034', display: 'Eaton',      title: 'Eaton' },
  { file: 'apw.svg',           color: '#1A1A1A', display: 'APW',        title: 'APW',        fontSize: 52, letterSpacing: '0.08em' },

  // Security
  { file: 'hikvision.svg',     color: '#E2231A', display: 'Hikvision',  title: 'Hikvision' },
  { file: 'dahua.svg',         color: '#E60012', display: 'Dahua',      title: 'Dahua' },
  { file: 'axis.svg',          color: '#3B2D5B', display: 'axis',       title: 'Axis' },
  { file: 'essl.svg',          color: '#FF6600', display: 'eSSL',       title: 'eSSL' },
  { file: 'cooper.svg',        color: '#E31837', display: 'Cooper',     title: 'Cooper' },
  { file: 'honeywell.svg',     color: '#E4002B', display: 'Honeywell',  title: 'Honeywell' },
  { file: 'hid.svg',           color: '#00875A', display: 'HID',        title: 'HID',        fontSize: 52, letterSpacing: '0.1em' },
  { file: 'notifier.svg',      color: '#E31837', display: 'Notifier',   title: 'Notifier' },
  { file: 'morley.svg',        color: '#003399', display: 'Morley',     title: 'Morley' },
  { file: 'pelco.svg',         color: '#003DA5', display: 'Pelco',      title: 'Pelco' },
  { file: 'edwards.svg',       color: '#E31837', display: 'Edwards',    title: 'Edwards' },
];

// ─── Helper: generate a wordmark SVG string ──────────────────────────────────
function makeWordmark({ title, display, color, fontSize = 42, letterSpacing = '0.02em' }) {
  return [
    `<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" role="img">`,
    `  <title>${title}</title>`,
    `  <text x="150" y="55" text-anchor="middle" dominant-baseline="middle"`,
    `    font-family="'Inter','Segoe UI',system-ui,-apple-system,sans-serif"`,
    `    font-weight="700" letter-spacing="${letterSpacing}" font-size="${fontSize}"`,
    `    fill="${color}">${display}</text>`,
    `</svg>`,
  ].join('\n');
}

// ─── Main ────────────────────────────────────────────────────────────────────
function main() {
  // Ensure output directory exists
  if (!fs.existsSync(BRANDS_DIR)) {
    fs.mkdirSync(BRANDS_DIR, { recursive: true });
  }

  let simpleCount = 0;
  let wordmarkCount = 0;

  // Step 1: Extract from simple-icons
  for (const brand of simpleIconsBrands) {
    const icon = si[brand.key];
    if (!icon) {
      console.error(`  ✗ simple-icons missing: ${brand.key}`);
      continue;
    }

    // Replace currentColor with the brand's official hex color
    let svg = icon.svg.replace(/currentColor/g, brand.hex);

    const outPath = path.join(BRANDS_DIR, brand.file);
    fs.writeFileSync(outPath, svg, 'utf8');
    simpleCount++;
    console.log(`  ✓ simple-icons → ${brand.file}  (${brand.hex})`);
  }

  // Step 2: Generate text wordmarks
  for (const brand of wordmarkBrands) {
    const svg = makeWordmark(brand);
    const outPath = path.join(BRANDS_DIR, brand.file);
    fs.writeFileSync(outPath, svg, 'utf8');
    wordmarkCount++;
    console.log(`  ✓ wordmark    → ${brand.file}  (${brand.color})`);
  }

  // Step 3: Verify
  console.log('\n── Verification ───────────────────────────────────────');

  const allFiles = [
    ...simpleIconsBrands.map(b => b.file),
    ...wordmarkBrands.map(b => b.file),
  ];

  let errors = 0;

  if (new Set(allFiles).size !== allFiles.length) {
    console.error('  ✗ Duplicate filenames detected!');
    errors++;
  }

  for (const file of allFiles) {
    const fp = path.join(BRANDS_DIR, file);
    if (!fs.existsSync(fp)) {
      console.error(`  ✗ MISSING: ${file}`);
      errors++;
      continue;
    }
    const stat = fs.statSync(fp);
    if (stat.size <= 100) {
      console.error(`  ✗ TOO SMALL (${stat.size}B): ${file}`);
      errors++;
      continue;
    }
    const content = fs.readFileSync(fp, 'utf8');
    if (content.includes('currentColor')) {
      console.error(`  ✗ STILL HAS currentColor: ${file}`);
      errors++;
      continue;
    }
  }

  const actualFiles = fs.readdirSync(BRANDS_DIR).filter(f => f.endsWith('.svg'));
  console.log(`\n  Total SVGs in directory: ${actualFiles.length}`);
  console.log(`  Simple-icons processed:  ${simpleCount}`);
  console.log(`  Wordmarks generated:     ${wordmarkCount}`);
  console.log(`  Errors:                  ${errors}`);

  if (errors === 0) {
    console.log('\n  ✅ All 46 brand logos replaced successfully!');
  } else {
    console.error(`\n  ❌ ${errors} error(s) found.`);
    process.exit(1);
  }
}

main();