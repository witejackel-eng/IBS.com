// Regenerates src/lib/image-blur-map.ts from every image under public/images.
// Run after adding, removing, or replacing any file in public/images:
//   node scripts/generate-blur-placeholders.mjs
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import sharp from "sharp";

function walk(dir) {
  let results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) results = results.concat(walk(full));
    else if (/\.(jpe?g|png)$/i.test(entry)) results.push(full);
  }
  return results;
}

const files = walk("public/images");
const entries = [];
for (const file of files) {
  const buffer = await sharp(file).resize(12).jpeg({ quality: 40 }).toBuffer();
  const publicPath = "/" + relative("public", file).split(sep).join("/");
  entries.push([publicPath, `data:image/jpeg;base64,${buffer.toString("base64")}`]);
}
entries.sort(([a], [b]) => a.localeCompare(b));

const body = entries.map(([path, dataUrl]) => `  "${path}": "${dataUrl}",`).join("\n");
const content = `// Auto-generated tiny base64 blur placeholders for public/images/**, used as
// next/image blurDataURL for images referenced by dynamic string path (where
// Next.js cannot auto-generate a blur placeholder as it does for statically
// imported images). Regenerate via scripts/generate-blur-placeholders.mjs.
export const blurMap: Record<string, string> = {
${body}
};
`;

writeFileSync("src/lib/image-blur-map.ts", content);
console.log(`Wrote blur placeholders for ${entries.length} images to src/lib/image-blur-map.ts`);
