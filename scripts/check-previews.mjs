import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const directory = path.join(process.cwd(), "public", "project-previews");
const manifest = await readFile(path.join(process.cwd(), "config", "projects.ts"), "utf8");
const files = (await readdir(directory)).filter((name) => name.endsWith(".jpg"));
const references = [...manifest.matchAll(/src: "\/project-previews\/([^"/]+\.jpg)"/g)].map((match) => match[1]);
const mobileReferences = new Set([...manifest.matchAll(/viewport: "mobile",\s*src: "\/project-previews\/([^"/]+\.jpg)"/g)].map((match) => match[1]));
const conversationReferences = new Set([...manifest.matchAll(/layout: "conversation",\s*src: "\/project-previews\/([^"/]+\.jpg)"/g)].map((match) => match[1]));
const errors = [];

function jpegSize(image) {
  if (image[0] !== 0xff || image[1] !== 0xd8) return null;
  let offset = 2;
  while (offset < image.length) {
    if (image[offset] !== 0xff) return null;
    const marker = image[offset + 1];
    if (marker === 0xd9 || marker === 0xda) break;
    if (marker === 0xff) { offset++; continue; }
    const segmentLength = image.readUInt16BE(offset + 2);
    if (segmentLength < 2 || offset + 2 + segmentLength > image.length) return null;
    if ([0xc0, 0xc1, 0xc2, 0xc3].includes(marker)) {
      return { width: image.readUInt16BE(offset + 7), height: image.readUInt16BE(offset + 5) };
    }
    offset += 2 + segmentLength;
  }
  return null;
}

for (const filename of references) {
  if (!files.includes(filename)) errors.push(`Missing preview: ${filename}`);
}

for (const filename of files) {
  if (!references.includes(filename)) errors.push(`Unreferenced preview: ${filename}`);
  const image = await readFile(path.join(directory, filename));
  const dimensions = jpegSize(image);
  if (!dimensions) {
    errors.push(`${filename} is not a readable JPEG`);
    continue;
  }
  const { width, height } = dimensions;
  const mobile = mobileReferences.has(filename);
  const conversation = conversationReferences.has(filename);
  const dimensionsValid = mobile
    ? width >= 360 && width <= 600 && height >= 700 && height <= 1300 && height / width >= 1.7
    : conversation
      ? width >= 900 && width <= 1100 && height >= 560 && height <= 800 && width / height >= 1.3 && width / height <= 1.8
    : width >= 1000 && width <= 2000 && height >= 560 && height <= 1200 && width > height;
  if (!dimensionsValid) {
    errors.push(`${filename} has unexpected dimensions: ${width}×${height}`);
  }
  if (image.byteLength > 500_000) errors.push(`${filename} exceeds 500 KB`);
  console.log(`${filename}: ${width}×${height} ${mobile ? "mobile" : conversation ? "conversation" : "desktop"}, ${(image.byteLength / 1024).toFixed(1)} KB`);
}

if (errors.length) {
  for (const error of errors) console.error(error);
  process.exitCode = 1;
} else {
  console.log(`${files.length} public demo previews checked.`);
}
