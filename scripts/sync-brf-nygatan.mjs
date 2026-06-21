import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const source = join(root, "..", "BRF Nygatan");
const target = join(root, "projects", "brf-nygatan");

await rm(target, { force: true, recursive: true });
await mkdir(target, { recursive: true });

for (const name of ["index.html", "styles.css"]) {
  await cp(join(source, name), join(target, name));
}

await cp(join(source, "assets"), join(target, "assets"), { recursive: true });

console.log("Synced BRF Nygatan snapshot into Mazing/projects/brf-nygatan");
