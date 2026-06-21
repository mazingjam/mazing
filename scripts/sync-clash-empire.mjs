import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const source = join(root, "..", "Clash Empire");
const target = join(root, "projects", "clash-empire");

await rm(target, { force: true, recursive: true });
await mkdir(target, { recursive: true });

for (const name of ["index.html", "script.js", "styles.css"]) {
  await cp(join(source, name), join(target, name));
}

await cp(join(source, "assets"), join(target, "assets"), { recursive: true });

console.log("Synced Clash Empire snapshot into Mazing/projects/clash-empire");

