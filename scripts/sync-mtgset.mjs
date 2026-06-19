import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const source = join(root, "..", "MTGSet");
const target = join(root, "projects", "mtgset");

await rm(target, { force: true, recursive: true });
await mkdir(target, { recursive: true });

for (const name of ["app", "cards", "data", "docs", "images", "reports"]) {
  await cp(join(source, name), join(target, name), { recursive: true });
}
await cp(join(source, "README.md"), join(target, "README.md"));
await cp(join(source, "DEVLOG.md"), join(target, "DEVLOG.md"));

console.log("Synced MTGSet snapshot into Mazing/projects/mtgset");

