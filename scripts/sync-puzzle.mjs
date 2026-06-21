import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const source = join(root, "..", "Puzzle");
const target = join(root, "projects", "puzzle");

await rm(target, { force: true, recursive: true });
await mkdir(join(target, "concept-images"), { recursive: true });
await cp(join(source, "concept-images"), join(target, "concept-images"), { recursive: true });

await writeFile(
  join(target, "index.html"),
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Puzzle Concepts</title>
    <style>
      :root {
        color-scheme: dark;
        --bg: #080808;
        --panel: #141414;
        --ink: #f4eee5;
        --muted: #aaa096;
        --line: #2b2722;
        --gold: #d1a451;
      }

      * { box-sizing: border-box; }
      body {
        margin: 0;
        min-width: 320px;
        background: radial-gradient(circle at top, rgba(209,164,81,.16), transparent 34%), var(--bg);
        color: var(--ink);
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      main { width: min(1180px, 100%); margin: 0 auto; padding: clamp(18px, 5vw, 64px); }
      header { margin-bottom: 24px; }
      p { color: var(--muted); line-height: 1.55; margin: 8px 0 0; }
      h1 { margin: 0; font-family: Georgia, "Times New Roman", serif; font-size: clamp(3.8rem, 12vw, 9rem); line-height: .86; }
      .eyebrow { color: var(--gold); font-size: .78rem; font-weight: 850; letter-spacing: .12em; text-transform: uppercase; }
      .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
      article { overflow: hidden; border: 1px solid var(--line); border-radius: 8px; background: var(--panel); }
      img { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; background: #222; }
      .body { padding: 14px; }
      h2 { margin: 0; font-size: 1.1rem; }
    </style>
  </head>
  <body>
    <main>
      <header>
        <p class="eyebrow">Puzzle</p>
        <h1>Concepts</h1>
        <p>Current visual directions and puzzle concept images.</p>
      </header>
      <section class="grid">
        <article>
          <img src="./concept-images/bell-rooms.png" alt="Bell Rooms concept">
          <div class="body"><h2>Bell Rooms</h2><p>Spatial puzzle concept image.</p></div>
        </article>
        <article>
          <img src="./concept-images/fold-garden.png" alt="Fold Garden concept">
          <div class="body"><h2>Fold Garden</h2><p>Folding-world puzzle concept image.</p></div>
        </article>
        <article>
          <img src="./concept-images/threadlight.png" alt="Threadlight concept">
          <div class="body"><h2>Threadlight</h2><p>Line, light and connection puzzle concept image.</p></div>
        </article>
      </section>
    </main>
  </body>
</html>
`,
);

console.log("Synced Puzzle gallery into Mazing/projects/puzzle");

