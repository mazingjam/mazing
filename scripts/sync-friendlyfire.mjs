import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const source = join(root, "..", "FriendlyFire");
const target = join(root, "projects", "friendlyfire");

// FriendlyFire is a dependency-free static landing page. Copy only its deploy
// artifact files, so future source updates need just `npm run sync:friendlyfire`.
await rm(target, { force: true, recursive: true });
await mkdir(target, { recursive: true });

for (const filename of ["index.html", "styles.css", "script.js"]) {
  await cp(join(source, filename), join(target, filename));
}
await cp(join(source, "assets"), join(target, "assets"), { recursive: true });

console.log("Synced FriendlyFire into Mazing/projects/friendlyfire");
