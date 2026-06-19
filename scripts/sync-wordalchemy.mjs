import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const source = join(root, "..", "WordAlchemy");
const target = join(root, "projects", "wordalchemy");

await rm(target, { force: true, recursive: true });
await mkdir(target, { recursive: true });
await cp(join(source, "index.html"), join(target, "index.html"));
await cp(join(source, "styles.css"), join(target, "styles.css"));
await cp(join(source, "main.js"), join(target, "main.js"));
await cp(join(source, "assets"), join(target, "assets"), { recursive: true });
await cp(join(source, "README.md"), join(target, "README.md"));

console.log("Synced WordAlchemy snapshot into Mazing/projects/wordalchemy");

