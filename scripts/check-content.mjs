import { readdir, readFile } from "node:fs/promises";
import { join, extname } from "node:path";

const roots = ["README.md", "SOURCES.md", "CONTRIBUTING.md", "CHANGELOG.md", "guides", "docs", ".github"];
const textExtensions = new Set([".md", ".html", ".json", ".svg", ".yml", ".yaml", ".mjs", ".js", ".css", ".txt"]);
const prohibitedDash = /[\u2013\u2014]/;
const files = [];

async function collect(path) {
  const entries = await readdir(path, { withFileTypes: true }).catch(() => []);
  for (const entry of entries) {
    const child = join(path, entry.name);
    if (entry.isDirectory()) await collect(child);
    if (entry.isFile() && textExtensions.has(extname(entry.name))) files.push(child);
  }
}

for (const root of roots) {
  if (textExtensions.has(extname(root))) files.push(root);
  else await collect(root);
}

const failures = [];
for (const file of files) {
  const content = await readFile(file, "utf8");
  if (prohibitedDash.test(content)) failures.push(`${file}: contains an em dash or en dash`);
}

const readme = await readFile("README.md", "utf8");
const page = await readFile("docs/index.html", "utf8");
if (!readme.startsWith("> [!IMPORTANT]")) failures.push("README.md: pricing disclaimer must be first");
if (!page.includes('id="pricing-notice"')) failures.push("docs/index.html: pricing disclaimer is missing");
if (!page.includes('rel="icon"')) failures.push("docs/index.html: favicon is missing");

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Content check passed for ${files.length} files.`);

