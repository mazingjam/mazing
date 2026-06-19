import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const source = join(root, "..", "Resort");
const target = join(root, "projects", "resort");

await rm(target, { force: true, recursive: true });
await mkdir(target, { recursive: true });

for (const name of ["index.html", "cards.md", "playtest-sheet.md", "README.md"]) {
  await cp(join(source, name), join(target, name));
}
await cp(join(source, "src"), join(target, "src"), { recursive: true });
await cp(join(source, "assets"), join(target, "assets"), { recursive: true });

console.log("Synced Resort snapshot into Mazing/projects/resort");

