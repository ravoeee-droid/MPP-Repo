# QA + RELEASE GATES v2.1

Dieses Dokument konkretisiert die Release-Prüfung des DG Million-Dollar Website Frameworks.

**Grundsatz:** Ein grüner Build ist kein Release-Beweis. `UNVERIFIED` ist nicht `PASS`.

## Release blockers / STOP-SHIP

Kein Demo- oder Production-Ready-Status bei:
- kaputtem Formular / CTA / Checkout / Booking
- Broken Image
- falschem oder inkonsistentem Logo
- horizontalem Mobile Overflow
- unerklärter leerer Fläche / massivem unbeabsichtigtem Whitespace
- geclippten oder überlappenden Elementen
- Buttons/Controls außerhalb des Viewports
- sichtbaren finalen Platzhaltern
- fehlender Tastaturbedienbarkeit kritischer UI
- offensichtlichen Kontrast-/Label-Problemen
- JavaScript-/Runtime-Fehlern im Kernflow
- falschen Canonicals/noindex/robots-Regeln im Production Mode
- fehlendem Tracking für Primärconversion im Production Mode
- massiven Layout Shifts aus eigener Implementierung
- nicht optimiertem Hero-Medium
- sichtbarer Regression gegenüber einem bereits funktionierenden/freigegebenen Stand

## Performance targets

Field-orientierte Zielwerte:
- **LCP <= 2.5 s**
- **INP <= 200 ms**
- **CLS <= 0.1**

Diese Ziele gelten am 75. Perzentil als „good“ Core Web Vitals. Lab Scores sind Diagnose, nicht Selbstzweck.

### Performance budget

- Above-the-fold nicht mit unnötigen Third-Party-Scripts belasten
- Client Components minimieren
- Bilder responsive und dimensionsstabil
- Fonts subsetting/preload nur gezielt
- below-fold Video/3D lazy
- WebGL braucht statischen/mobile Fallback
- Animationen transform/opacity bevorzugen

## Browser/device matrix

Mindestens prüfen:
- 360x800
- 390x844
- 430x932
- Tablet Portrait ca. 768 px
- Desktop ca. 1440 px
- Wide Desktop ca. 1920 px, wenn Layout/Whitespace relevant anders reagiert
- aktuelles Chrome Desktop
- Safari Desktop, wenn verfügbar
- iPhone Safari / Android Chrome, wenn verfügbar

## Accessibility

Automatisch:
- Playwright + `@axe-core/playwright`, wenn im Projekt verfügbar
- Form Labels
- Landmark/Semantics
- Kontrastprobleme soweit automatisiert erkennbar
- duplicate IDs / ARIA basics

Manuell:
- komplette Kernnavigation nur mit Tastatur
- sichtbarer Fokus
- Modal/Drawer focus trap + close
- Screenreader-Smoke-Test für Kernflow, wenn Tooling verfügbar
- Zoom 200%
- Reduced Motion
- Touch Targets

Automatisierte Accessibility-Tests ersetzen keine manuelle Prüfung.

## Functional tests

- Navigation / deep links
- alle primären CTAs
- Form success/error
- Validation
- Booking/embed fallbacks
- Calculator/Qualifier-Logic
- Consent behavior
- phone/mail/WhatsApp links
- 404
- redirects
- language switch
- Bewerbungsflow
- relevante AI-Assistant-Actions

## SEO checks

- title / description
- meaningful H1 / saubere Heading-Hierarchie
- canonical
- robots
- sitemap
- JSON-LD validity
- OG preview
- internal links
- alt behavior
- no accidental placeholder/demo content
- keine versehentliche Indexierung von Prospect-Demos

## Content integrity

Repository vor Release durchsuchen nach:
- Lorem ipsum
- TODO
- placeholder
- example.com
- dummy/fake metrics
- template company names
- unlicensed assets
- alte/falsche Logos
- Test-Kontaktdaten

## Asset integrity

Vor Release:
- eine klare Logo Source of Truth
- alle Logo-Instanzen mit dieser Source abgleichen
- alle sichtbaren Bilder laden tatsächlich
- keine verzerrten/stretched Bilder
- zentrale Assets haben geklärte Rechte
- AI-generierte Menschen/Projekte werden nicht als echte Proof-Assets ausgegeben

## Visual QA — Pflicht

**Code Review zählt nicht als Visual QA.**

Für jede wichtige Seite echte Screenshots/Browseransicht an mehreren Breakpoints prüfen.

Prüfen:
- Header/Nav
- Hero vollständig
- erste Conversion-Zone
- Proof/Trust
- Kernleistungen
- Funnel/Form/Chat/Booking
- Footer
- section transitions
- rhythm
- line breaks
- image crops
- awkward empty space
- sticky/fixed overlaps
- hover-only information
- Mobile hierarchy
- Wide-Screen whitespace
- Motion / Scroll-Verhalten

STOP-SHIP, wenn sichtbar:
- Broken Image
- falsches Logo
- leere unerklärte Fläche
- clipping/overlap
- horizontal overflow
- off-screen CTA
- unfertiger Footer/Header
- mobile Layout ist nur verkleinerter Desktop

Wenn Rendering/Screenshot nicht möglich ist, muss der Status `VISUAL_QA_UNVERIFIED` lauten. Dann darf nicht behauptet werden, die Seite sei visuell final geprüft.

## Regression QA — Pflicht bei Änderungen

Vor Feinschliff / begrenzten Änderungen festhalten, was bereits funktioniert und erhalten bleiben muss.

Nach Änderung prüfen:
- angeforderte Änderung korrekt
- Nachbarbereiche unverändert bzw. weiterhin sauber
- Logo unverändert korrekt
- Bilder weiterhin vorhanden
- Motion/Scroll-Verhalten weiterhin vorhanden, sofern nicht explizit geändert
- Mobile nicht verschlechtert
- andere Routen/Flows weiterhin funktional

Keine ungefragte komplette Neugestaltung als Reaktion auf einen lokalen Fix.

## Analytics QA

In Preview/Production prüfen:
- pageview arrives
- primary CTA event
- form start
- form submit
- calculator/funnel events if present
- campaign attribution where required

## Mandatory release evidence

Vor `DEMO_READY` oder `PRODUCTION_READY` dokumentieren:
- Build: PASS / FAIL / UNVERIFIED
- Typecheck/Lint: PASS / FAIL / UNVERIFIED
- getestete Routen
- getestete Viewports
- Visual QA: PASS / FAIL / UNVERIFIED
- Broken Images: 0
- falsche/unbeabsichtigte Logos: 0
- unmarkierte Placeholders: 0
- kaputte Primary CTAs: 0
- kaputte Primary Forms/Funnels: 0
- Runtime Blocker: 0
- Mobile Overflow: 0
- Regression Blocker: 0
- Hard Fails: 0
- finaler Score
- offene Einschränkungen / UNVERIFIED Items

## Release procedure

1. Preview deploy
2. automated checks
3. Visual QA auf definierten Viewports
4. funktionale Kernflow-Tests
5. Regression QA bei Revisionen
6. content/legal/asset review
7. analytics smoke test im Production Mode
8. Scorecard prüfen
9. Hard-Fail-Liste = 0
10. Release Evidence vollständig
11. Human Taste Review PASS
12. production deploy bzw. Demo Ready setzen
13. production smoke test
14. Search Console / sitemap / monitoring im Production Mode
15. optimization backlog eröffnen

## Score threshold

Maßgeblich ist `SCORECARD-V2.md` / `MASTER-FRAMEWORK-V2.md`:
- Demo >=850 Minimum, >=900 Ziel
- Production >=900 Minimum
- >=950 = Zielklasse MILLION-DOLLAR STANDARD
- immer 0 Hard Fails

**Score ersetzt niemals Visual QA, funktionale QA, Regression QA oder Release Evidence.**
