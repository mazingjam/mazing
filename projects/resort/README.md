# Resort Royale

Ett auktionsdrivet bradspel om att bygga semesterresorts, optimera personal och skapa kassaflode nar sasongen slar till.

## Digital Prototyp

En webbaserad testversion finns i detta repo.

Starta den pa Windows:

```powershell
.\start.ps1
```

Oppna sedan:

```text
http://localhost:5190
```

Prototypen innehaller just nu:

- 2-4 spelare
- automatisk marknad med resorts, personal och upgrades
- oppen auktion med manuellt bud
- tarningsslag med resort-triggers
- personalbonusar, upgrades, events, loner och underhall
- enkel logg och nettoformogenhet

## Grundide

Spelarna driver konkurrerande resortbolag. Varje runda auktioneras nya resorttomter, personal och uppgraderingar ut. Sedan slas tva tarningar. Alla resorts med matchande trigger-nummer ger inkomster, bonusar eller specialeffekter.

Spelet ar inspirerat av Monopoly-kanslan med pengar, fastigheter och rivalitet, men utan en fast spelplan. Det centrala ar auktioner, timing och motorbyggande.

## Spelmal

Efter ett bestamt antal sasonger vinner spelaren med hogst formogenhet:

- Kontanter
- Resortvardet pa agda resorts
- Bonuspoang fran resortkedjor, personal och mal

## Komponenter

- Sedlar i valorerna 1, 5, 10, 20 och 50
- 2 sexsidiga tarningar
- Resortkort
- Personalkort
- Uppgraderingskort
- Eventkort
- Auktionsmarkor
- Agarmarkorer i spelarnas farger

## Rundstruktur

Varje runda representerar en bokningsperiod.

1. Fyll marknaden
2. Hall auktioner
3. Slå tarningarna
4. Trigga resorts
5. Betala loner och underhall
6. Forbered nasta runda

## 1. Fyll marknaden

Dra upp kort till en gemensam marknad:

- 3 resortkort
- 2 personalkort
- 2 uppgraderingskort

Vid 2 spelare kan marknaden minskas till 2 resorts, 1 personal och 1 uppgradering.

## 2. Auktioner

Marknadskorten auktioneras ett i taget. Startspelaren valjer vilket kort som gar forst.

Budgivning sker med oppna bud. Spelare far passa, men kan inte komma tillbaka i samma auktion. Hogsta bud betalar banken och tar kortet.

Om alla passar koper banken kortet och det slangs. Det skapar tempo och press.

## 3. Slå tarningarna

Startspelaren slar 2T6. Summan avgor vilka resorts som triggar.

Exempel: Om resultatet ar 8 triggar alla resorts med `Trigger 8`.

## 4. Trigga Resorts

Nar en resort triggar far agaren dess inkomst och effekter.

Exempel:

| Resort | Trigger | Inkomst | Effekt |
| --- | ---: | ---: | --- |
| Budget Bungalows | 4 | 5 | +2 om du har Receptionist |
| Surfside Hotel | 6 | 8 | Far 1 extra om nagon annan ocksa triggar |
| Alpine Spa | 8 | 10 | Betala 2 i underhall |
| Luxury Island | 10 | 18 | Kräver Manager, annars bara 9 |

## 5. Loner och Underhall

Personal ger starka effekter men kostar lon.

Efter triggers betalar varje spelare:

- 2 per junior personal
- 4 per senior personal
- Underhall enligt resortkort

Om en spelare inte kan betala maste den ta ett krislån pa 20 och far en skuldmarkor vard -30 vid spelets slut.

## 6. Forbered Nasta Runda

Korten som inte koptes slangs. Startspelarmarkoren gar vidare.

Efter var tredje runda dras ett eventkort, till exempel hogsasong, stormvarning eller influencer-boom.

## Resorttyper

Resorts har typ och trigger-intervall. Typen anvands for bonusar och personal.

- Beach
- Mountain
- City
- Family
- Luxury
- Eco

Laga triggernummer ar vanligare men betalar mindre. Hoga triggernummer ar mer swingiga men mer lukrativa.

## Personal

Personal byggs som ett litet maskineri runt resorts.

Exempel:

| Personal | Lon | Effekt |
| --- | ---: | --- |
| Receptionist | 2 | +2 nar en Family eller Budget resort triggar |
| Concierge | 3 | Luxury resorts ger +4 |
| Head Chef | 4 | Varje resortkedja med minst 2 resorts ger +3 |
| Marketing Lead | 3 | En gang per runda: lagg +1 pa din inkomst fran en trigger |
| Operations Manager | 5 | Minska totalt underhall med 4 |
| Auctioneer | 2 | En gang per runda: fa 2 tillbaka efter att du vunnit en auktion |

## Uppgraderingar

Uppgraderingar spelas pa resorts och forandrar deras ekonomi.

Exempel:

- Pool Area: +4 inkomst
- Conference Wing: Triggar aven pa ett intilliggande nummer
- Solar Roofs: Underhall -2
- Premium Villas: +8 inkomst, men loner kostar +1 totalt
- Shuttle Service: Om en annan spelares resort triggar pa samma slag, fa 3

## Ekonomisk Kansla

Pengar ska vara tajta. Spelarna ska ofta kanna:

- "Har jag rad att vinna den har auktionen?"
- "Ska jag spara kontanter till loner?"
- "Kan jag pressa upp priset for nagon annan?"
- "Ska jag bygga stabil inkomst eller jaga stora triggers?"

## Forsta Balansmal

En normal runda bor ge:

- Tidigt spel: 5-15 i inkomst for aktiva spelare
- Mitten: 15-35
- Sent spel: 30-70

En auktion ska ofta sluta runt 60-80 procent av kortets forvantade framtida varde.

## Slutspel

Spelet pagar 9 rundor.

Efter runda 9 raknas:

- Kontanter
- Tryckt resortvarde
- 5 per komplett kedja om minst 3 resorts av samma typ
- Personalbonusar
- Skuldavdrag

## Designfragor Att Testa

- Ska spelare kunna salja resorts till banken?
- Ska doubles pa tarningarna trigga en extra eventeffekt?
- Ska auktioner ha dolt maxbud i stallet for oppen budgivning?
- Ska resorts kunna ha flera triggernummer fran start?
- Hur hart ska loner straffa stora personalmotorer?
