import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const roots = ["app", "components", "config"];
const forbidden = [
  { pattern: /@fortawesome|fontawesome/i, label: "retired icon system" },
  { pattern: /NODE_TLS_REJECT_UNAUTHORIZED/i, label: "TLS bypass" },
  { pattern: /NEXT_PUBLIC_GITHUB_TOKEN/i, label: "browser-exposed GitHub token" },
  { pattern: /rehype-raw/i, label: "unsafe raw HTML rendering" },
];

async function filesWithin(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) return filesWithin(file);
    return /\.(tsx?|jsx?|css|svg|json)$/.test(file) ? [file] : [];
  }));
  return nested.flat();
}

const files = (await Promise.all(roots.map(filesWithin))).flat();
const problems = [];
for (const file of files) {
  const content = await readFile(file, "utf8");
  for (const { pattern, label } of forbidden) {
    if (pattern.test(content)) problems.push(`${file}: ${label}`);
  }
}

if (problems.length) {
  console.error(problems.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Content audit passed across ${files.length} source files.`);
}
