import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const source = join(root, "..", "d&d-light");
const target = join(root, "projects", "dnd-light");

await rm(target, { force: true, recursive: true });
await mkdir(target, { recursive: true });

for (const name of ["index.html", "script.js", "styles.css", "README.md"]) {
  await cp(join(source, name), join(target, name));
}

for (const name of ["assets", "data", "docs"]) {
  await cp(join(source, name), join(target, name), { recursive: true });
}

console.log("Synced d&d-light snapshot into Mazing/projects/dnd-light");
