# DESIGN SYSTEM

## Art direction first

Vor Komponentenwahl werden 5 Dinge definiert:
1. Markencharakter in 3 Adjektiven
2. visuelle Referenzwelt
3. Bildsprache
4. Typografie-Kontrast
5. Signature-Motiv

## Layout

- 12-Spalten-Grid Desktop, flexible 4-Spalten-Logik Mobile
- Content-Breite projektabhängig, nicht pauschal 1200px
- klare vertikale Rhythmik über Spacing Tokens
- Sections dürfen bewusst asymmetrisch sein, solange Scanbarkeit bleibt
- wichtige Inhalte innerhalb der ersten mobilen Viewport-Sequenzen priorisieren

## Spacing tokens

Nutze eine konsistente Skala, z. B.:
`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128`

Keine zufälligen Pixelwerte außer für echte optische Korrekturen.

## Typography

- maximal 2 primäre Schriftfamilien
- Display-Typografie darf Charakter tragen, Body muss extrem lesbar bleiben
- Headlines mit bewusstem Zeilenbruch statt zufälligem Responsive Wrapping
- Fluid Type mit `clamp()`
- Textbreite für lange Absätze begrenzen
- echte Hierarchie: eyebrow -> H1 -> lead -> body -> metadata

## Color

- Farben als semantische Tokens: `background`, `surface`, `text`, `muted`, `brand`, `accent`, `success`, `warning`, `danger`
- Kontrast wird gemessen, nicht geschätzt
- Glas/Transparenz nur auf Hintergründen, auf denen Lesbarkeit stabil bleibt
- keine Neon-/Gradient-Palette ohne Markenbegründung

## Imagery

Priorität:
1. reale Menschen / reale Arbeit / reales Produkt
2. hochwertige kundenspezifische Fotografie oder Renderings
3. erklärende Diagramme/Visualisierungen
4. generative Visuals nur wenn sie zur Markenwelt passen
5. Stock nur als Notlösung

Regeln:
- Hero-Bild erzählt bereits etwas
- keine redundanten Bilder ohne Informationswert
- Crops für Mobile separat prüfen
- Alt-Texte nach Funktion statt Keyword-Stuffing

## Motion language

Definiere je Projekt:
- **enter:** fade + translate / mask / scale etc.
- **hover:** tactile response
- **scroll:** nur für Story-Sequenzen
- **page:** subtile Übergänge
- **loading:** echte Wartezeit erklären, nicht kaschieren

### Motion budget

- Standard-Microinteraction: 120–240 ms
- größere UI-Transitions: 240–500 ms
- Scroll-/Story-Sequenzen nur wenn sie die Information verbessern
- `prefers-reduced-motion` respektieren
- keine dauerhaften Animationen außerhalb sinnvoller Status-/Ambient-Fälle

## Glass / Apple-like premium look

Erlaubt, aber nur kontrolliert:
- mehrere Ebenen mit unterschiedlicher Opazität
- subtile Borders statt übertriebener Glow
- echte Tiefenlogik durch Licht, Schatten und Blur
- Content-Kontrast bleibt oberste Priorität
- Mobile/GPU-Kosten prüfen

## Components

Jede Komponente besitzt:
- default / hover / focus / active / disabled
- mobile + desktop behavior
- empty / loading / error wenn dynamisch
- reduced-motion behavior wenn animiert
- klare Props statt projektweiter Sonderfälle

## Anti-template test

Vor Freigabe fragen:
- Könnte diese Seite mit exakt denselben Sections auch einer SaaS-, Immobilien- oder Agenturmarke gehören?
- Sind mindestens 3 visuelle Elemente eindeutig aus diesem Unternehmen abgeleitet?
- Ist die Bildsprache eigenständig?
- Hat die Seite eine erkennbare Kompositionsidee?

Wenn nicht: Art Direction nacharbeiten.
