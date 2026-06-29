import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const source = join(root, "..", "Sunder");
const target = join(root, "projects", "sunder");

await rm(target, { force: true, recursive: true });
await mkdir(target, { recursive: true });

for (const name of ["index.html", "script.js", "styles.css", "README.md"]) {
  await cp(join(source, name), join(target, name));
}

for (const name of ["old-cards", "generated-cards", "docs", "design", "cards", "board-book"]) {
  await cp(join(source, name), join(target, name), { recursive: true });
}

console.log("Synced Sunder snapshot into Mazing/projects/sunder");
