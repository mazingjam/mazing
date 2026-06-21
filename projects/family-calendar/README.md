# Familjekalender MVP

En statisk tablet-forst prototyp for en familjekalender som samlar flera personers kalendrar i en gemensam vy.

## Det som finns nu

- Veckovy med dagens markering.
- Personfilter for flera kalendrar.
- Dagens agenda och narmaste kommande event.
- Dialog for att skapa testevent.
- Lokala testevent sparas i `localStorage`.

## Avsiktlig fas 2

Eventmodellen har `ownerId`, `source`, `start`, `end`, `title` och `note` sa backend senare kan byta lokala testevent mot riktiga provider-event.

Planerad backend:

- OAuth for varje vuxens kalenderkonto.
- Read-only sync for MVP-drift.
- Write-scope nar eventskapande aktiveras.
- `ownerCalendarId`, `provider` och `sourceEventId` per event.
- Google Calendar API for Google-kalendrar.
- Microsoft Graph for Outlook/Microsoft 365-kalendrar.

## Lokal anvandning

Fran repo-roten:

```powershell
npm run dev
```

Oppna `http://localhost:5173/projects/family-calendar/`.
