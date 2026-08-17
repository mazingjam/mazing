# Mazing

En statisk webbplats med live reload lokalt och automatisk deploy via Vercel nar repot kopplas till Git.

## Jobba lokalt

```powershell
npm run dev
```

Om Node/npm inte finns installerat lokalt kan du anvanda den buntade Node-runtime som Codex hittade:

```powershell
& "C:\Users\Maise\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" scripts/dev-server.mjs
```

Oppna sedan `http://localhost:5173`. Nar du sparar `index.html`, `src/styles.css` eller `src/app.js` laddas sidan om automatiskt.

## Bygg

```powershell
npm run build
```

Builden hamnar i `dist/`.

## Synka Spirimon

Spirimon byggs som en statisk Vite/PWA-app med rätt bas-URL för Mazing och
synkas sedan till `projects/spirimon/`:

```powershell
npm run sync:spirimon
```

Kör därefter `npm run build` i Mazing. Endast Spirimon-källprojektets byggda
`dist` publiceras i Mazing, så källkod och `node_modules` följer inte med.

## Synka FriendlyFire

FriendlyFire ar en statisk landningssida. Synka den aktuella versionen fran
`D:\\Dev\\FriendlyFire` med:

```powershell
npm run sync:friendlyfire
```

Kommandot kopierar endast deployfilerna till `projects/friendlyfire/`.

## Deploy via Vercel

1. Skapa ett GitHub-repo och pusha projektet dit.
2. Importera repot i Vercel.
3. Vercel laser `vercel.json` och kor `npm run build`.
4. Varje push till huvudbranchen deployas automatiskt.

Preview-deploys skapas ocksa for pull requests om repot ligger pa GitHub, GitLab eller Bitbucket.
