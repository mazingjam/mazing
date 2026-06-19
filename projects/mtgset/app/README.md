# Local App

Mobile-friendly static card browser for the current staple draft.

## Run Locally

From `D:\Dev\MTGSet`:

```powershell
powershell -ExecutionPolicy Bypass -File .\app\start-mobile-server.ps1
```

Open on the computer:

```text
http://localhost:4173/app/
```

Open on a phone on the same Wi-Fi:

```text
http://YOUR_COMPUTER_LAN_IP:4173/app/
```

Find the LAN IP with:

```powershell
ipconfig
```

Use the IPv4 address for your active Wi-Fi/Ethernet adapter.

Current known LAN URL from the latest setup:

```text
http://192.168.86.84:4173/app/
```

## Data Source

The app currently reads:

```text
../cards/draft/archetype-staples-v1.md
```

## Review Marks

The "Needs rethink" toggle is stored in the current browser's `localStorage`.
Marks persist on the same phone/browser, but they are not synced back to the card files yet.

Inline edits are also stored in `localStorage`. Use "Export review" to copy or download
marked cards and edited versions, then send that export back into Codex to apply the
changes to source files.
