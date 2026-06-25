import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const source = join(root, "..", "Puzzle");
const target = join(root, "projects", "puzzle");

await rm(target, { force: true, recursive: true });
await mkdir(target, { recursive: true });

for (const name of ["index.html", "script.js", "styles.css"]) {
  await cp(join(source, name), join(target, name));
}

await cp(join(source, "concept-images"), join(target, "concept-images"), {
  recursive: true,
});

console.log("Synced Puzzle snapshot into Mazing/projects/puzzle");
