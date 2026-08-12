import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const root = dirname(dirname(fileURLToPath(import.meta.url)));
const source = join(root, "..", "Spirimon");
const target = join(root, "projects", "spirimon");
const staging = join(source, "mazing-build-staging");

// Build against the Mazing subpath so asset and PWA URLs work after Vercel deploy.
// Vite's production build is the deploy artifact; type checks remain available
// from Spirimon's own `pnpm run build` workflow.
await rm(staging, { force: true, recursive: true });
await execFileAsync(process.execPath, [
  join(source, "node_modules", "vite", "bin", "vite.js"),
  "build",
  "--config",
  "vite.config.ts",
  "--configLoader",
  "native",
  "--base",
  "/projects/spirimon/",
  "--outDir",
  staging,
], { cwd: source });

await rm(target, { force: true, recursive: true });
await mkdir(target, { recursive: true });
await cp(staging, target, { recursive: true });
await rm(staging, { force: true, recursive: true });

console.log("Built and synced Spirimon into Mazing/projects/spirimon");
