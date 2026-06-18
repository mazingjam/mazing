import { createServer } from "node:http";
import { readFile, stat, watch } from "node:fs/promises";
import { dirname, extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const args = new Set(process.argv.slice(2));
const root = dirname(dirname(fileURLToPath(import.meta.url)));
const publicRoot = args.has("--dist") ? join(root, "dist") : root;
const port = Number(process.env.PORT || 5173);
const clients = new Set();

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml"
};

function resolveRequestPath(url) {
  const parsed = new URL(url, `http://localhost:${port}`);
  const pathname = parsed.pathname === "/" ? "/index.html" : parsed.pathname;
  const normalized = normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, "");
  return join(publicRoot, normalized);
}

async function sendFile(res, filePath) {
  try {
    const fileStat = await stat(filePath);
    const finalPath = fileStat.isDirectory() ? join(filePath, "index.html") : filePath;
    let body = await readFile(finalPath);

    if (finalPath.endsWith(".html") && !args.has("--dist")) {
      body = Buffer.concat([
        body,
        Buffer.from(`
<script>
  new EventSource("/__live").onmessage = () => location.reload();
</script>`)
      ]);
    }

    res.writeHead(200, {
      "Content-Type": types[extname(finalPath)] || "application/octet-stream"
    });
    res.end(body);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
  }
}

createServer((req, res) => {
  if (req.url === "/__live") {
    res.writeHead(200, {
      "Cache-Control": "no-cache",
      "Content-Type": "text/event-stream",
      Connection: "keep-alive"
    });
    res.write("\n");
    clients.add(res);
    req.on("close", () => clients.delete(res));
    return;
  }

  sendFile(res, resolveRequestPath(req.url));
}).listen(port, () => {
  console.log(`Mazing is live at http://localhost:${port}`);
});

if (!args.has("--dist")) {
  const watcher = watch(root, { recursive: true });
  for await (const event of watcher) {
    if (event.filename?.startsWith("dist") || event.filename?.startsWith(".git")) {
      continue;
    }

    for (const client of clients) {
      client.write("data: reload\n\n");
    }
  }
}
