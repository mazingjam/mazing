import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const source = join(root, "..", "GrowUp");
const target = join(root, "projects", "growup");

await rm(target, { force: true, recursive: true });
await mkdir(target, { recursive: true });

await cp(join(source, "app-prototype"), join(target, "app-prototype"), { recursive: true });
await cp(join(source, "web"), join(target, "web"), { recursive: true });
await cp(join(source, "assets"), join(target, "assets"), { recursive: true });
await cp(join(source, "concepts"), join(target, "concepts"), { recursive: true });
await cp(join(source, "docs"), join(target, "docs"), { recursive: true });

console.log("Synced GrowUp snapshot into Mazing/projects/growup");
