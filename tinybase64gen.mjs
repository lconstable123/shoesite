#!/usr/bin/env node

import { readdir, writeFile } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import sharp from "sharp";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const IMAGE_EXT = /\.(?:jpe?g|png|webp|avif)$/i;

async function ask(question) {
  const rl = readline.createInterface({ input, output });
  const answer = await rl.question(question);
  rl.close();
  return answer.trim();
}

async function walkDir(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      files.push(...(await walkDir(full)));
    } else if (ent.isFile() && IMAGE_EXT.test(ent.name)) {
      files.push(full);
    }
  }
  return files;
}

async function makePlaceholder(filePath, size = 10) {
  const buf = await sharp(filePath)
    .resize(size, size, { fit: "inside" })
    .png()
    .toBuffer();
  const base64 = buf.toString("base64");
  return `data:image/png;base64,${base64}`;
}

async function main() {
  const dirInput = await ask("Enter source folder path: ");
  const dir = path.resolve(dirInput);

  if (!existsSync(dir)) {
    console.error("Folder does not exist:", dir);
    process.exit(1);
  }

  console.log("Scanning directory:", dir);

  const files = await walkDir(dir);
  console.log(`Found ${files.length} image(s).`);

  const map = {};

  for (const fp of files) {
    const parsed = path.parse(fp);
    const filenameNoExt = parsed.name;
    // e.g. 'myimage' from '/some/path/myimage.jpg'

    try {
      const tiny = await makePlaceholder(fp, 10);
      map[filenameNoExt] = tiny;
      console.log(`✅ ${filenameNoExt}`);
    } catch (err) {
      console.error(`⚠️ Error processing ${filenameNoExt}`, err);
    }
  }

  const outFile = path.join(dir, "placeholders.json");
  await writeFile(outFile, JSON.stringify(map, null, 2), "utf8");
  console.log("Wrote base64 placeholders to:", outFile);
}

await main();
