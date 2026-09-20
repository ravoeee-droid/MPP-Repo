# DG QUALITY GATES v2.1 — NO QUALITY BY ASSUMPTION

Diese Gates sind verbindlich für **alle Demo- und Production-Projekte** des Million-Dollar Website Frameworks.

Ein Build darf nur weiter, wenn der aktuelle Gate bestanden ist. Ein hoher Score kann niemals einen Hard Fail überstimmen. **UNVERIFIED ist niemals PASS.**

## Grundregel — Evidence > Assumption

Eine Website ist nicht fertig, weil:
- der Code kompiliert,
- der Build grün ist,
- eine einzelne Ansicht gut aussieht,
- ein Agent behauptet, alles geprüft zu haben.

Ein Gate gilt nur als bestanden, wenn es anhand der verfügbaren Tools tatsächlich geprüft wurde.

Wenn eine notwendige Prüfung technisch nicht möglich ist, wird sie als `UNVERIFIED` dokumentiert und darf nicht stillschweigend als bestanden gewertet werden.

---

## Gate 0 — Evidence Lock

Blocker:
- Zielgruppe unklar
- Angebot unklar
- Kernproblem generisch
- keine glaubwürdige Differenzierung
- Proof ohne Quelle
- erfundene Zahlen, Testimonials, Logos, Personen, Cases, Zertifikate, Jobs, Preise oder Verfügbarkeiten

Regel: Fehlende Fakten bleiben UNKNOWN.

## Gate 1 — Strategy Lock

Muss beantworten:
- Für wen?
- In welcher Situation?
- Was soll verstanden werden?
- Was soll geglaubt werden?
- Was soll gewollt werden?
- Was soll getan werden?
- Warum dieses Angebot statt Status quo/Alternative?
- Welcher Proof trägt die Kernbehauptung?

Blocker: Positionierung könnte unverändert für mehrere Wettbewerber gelten.

## Gate 2 — Customer Mind Lock

Für primäre Zielgruppen müssen vorhanden sein:
- Trigger/Situation
- funktionales und emotionales Ziel
- Schmerzen/Ängste
- Alternativen
- Einwände
- Vertrauensanforderungen
- gewünschter Zustand

Blocker: Copy wurde aus Unternehmenssicht gebaut, ohne nachvollziehbares Customer Decision Model.

## Gate 3 — Copy Lock

Prüfen:
- generische AI-Phrasen
- Superlative ohne Beleg
- doppelte/inhaltsarme Headlines
- Featurelisten ohne Nutzen
- CTA ohne konkreten nächsten Schritt
- FAQ-Fülltext
- Textwände
- Fake-Dringlichkeit
- Keyword Stuffing

Verboten als informationsarme Defaults:
- Willkommen bei
- Ihr kompetenter Partner
- maßgeschneiderte Lösungen
- innovative Lösungen
- Qualität aus Leidenschaft
- alles aus einer Hand
- auf das nächste Level

## Gate 4 — Visual Direction Lock

Vor Komponentenwahl müssen feststehen:
- korrektes Logo + eindeutige Source of Truth
- Typografie
- Spacing/Layout-Rhythmus
- Farblogik
- Bildsprache
- Motion-Sprache
- Signature Moment
- Mobile-Verhalten
- No-Gos

Blocker: Art Direction ist nur eine Trendliste oder besteht aus zufällig kombinierten UI-Library-Patterns.

AI-Look Warnsignale:
- Aurora + Mesh Gradient + Glass Cards gleichzeitig
- Glow überall
- Bento als Selbstzweck
- zufällige Badges/Pills
- jede Section identisches Card Grid
- irrelevante 3D-Orbs
- Animation auf jedem Textblock
- generische Stockfotos ohne Firmenbezug

## Gate 5 — Component Lock

Komponenten aus shadcn, 21st.dev, Magic UI, GitHub oder anderen Quellen sind Rohmaterial.

Jede Komponente muss beantworten:
- Welche Story-Aufgabe?
- Welche Conversion-Aufgabe?
- Warum dieses Pattern?
- Brand Fit?
- Mobile mindestens gleichwertig?
- Keyboard/Focus korrekt?
- Ohne Animation verständlich?
- Performance-Kosten vertretbar?

Blocker: Demo-Komponente nur mit anderem Text/Farbe kopiert.

## Gate 6 — Proof Integrity Lock

Jeder Proof intern mit:
- Typ
- Aussage
- Quelle
- Verifizierungsstatus
- Freigabestatus
- optional Datum

Blocker: Zahl/Aussage/Review ohne nachvollziehbare Quelle.

## Gate 7 — Conversion / Funnel Lock

Jede relevante Seite:
- ein Primary CTA
- maximal ein Secondary CTA
- nächster Schritt klar
- Einwände vor finaler Entscheidung behandelt

Wenn geschäftlich sinnvoll, muss eine interaktive Conversion Experience vorhanden sein:
- Lead Funnel
- Application Funnel
- Booking
- Job Matcher
- Qualifier
- AI Assistant

Funnel-Regeln:
- nur qualifikations-/routing-/fulfillment-relevante Daten
- verständlicher Fortschritt
- Mobile vollständig bedienbar
- Success/Error State
- Drop-off messbar im Production Mode

Blocker:
- Kernconversion ist nur ein unnötig langes Formular
- Funnel kaputt
- CTA führt ins Nichts
- Primary CTA ist optisch oder inhaltlich unklar
- Dark Patterns

## Gate 8 — AI Assistant Lock

Wenn AI Assistant aktiv:
- klar als digital/AI gekennzeichnet
- keine reale Mitarbeiteridentität vortäuschen
- freigegebene Wissensquellen
- Unsicherheit/Fallback definiert
- Session/Funnel-Kontext korrekt
- Human Handoff, wenn geschäftskritisch
- Production: Rate Limiting / Abuse / Injection Considerations
- Production: Datenschutz/Logging geklärt

Blocker:
- erfindet Preise/Verfügbarkeit/Fakten
- behauptet Mensch zu sein
- kann kritische Frage nicht sicher eskalieren

## Gate 9 — Career / Employer Brand Lock

Wenn Recruiting relevant:
- Candidate Persona
- EVP
- echte Gründe zu wechseln
- echter Proof/Kulturbezug
- passende Job Journey
- Application Flow
- reale Jobdaten im Production Mode

Blocker:
- erfundene Benefits
- erfundene Mitarbeiterquotes
- generische „tolles Team“-Karriereseite ohne Arbeitgeberbeweis
- Bewerbungsflow auf Mobile unbrauchbar

## Gate 10 — Media Truth & Asset Integrity Lock

Für zentrale Assets muss intern bekannt sein:
- Quelle
- Rechte/Freigabe
- reale vs. generierte Darstellung
- Zweck
- verwendete finale Datei/Variante

Pflicht:
- Logo Source of Truth festlegen
- keine unterschiedlichen Logo-Varianten ohne bewusste Designregel
- keine veralteten/falschen Logos aus alten Assets
- keine kaputten oder nicht ladenden Bilder
- keine gestreckten/verzerrten Bilder
- keine sichtbaren Platzhalter im finalen Zustand

AI-Regeln:
- AI-Mitarbeiter dürfen nicht als echte Mitarbeiter erscheinen
- AI-Projekte dürfen nicht als echte Referenzen erscheinen
- AI-Kunden dürfen nicht als echte Kunden erscheinen

Production bei fehlendem echten Material:
- Shot Plan erzeugen

STOP-SHIP:
- falsches Logo
- unbeabsichtigt mehrere Logo-Varianten
- Broken Image
- zentraler Asset ohne geklärte Rechte
- irreführende synthetische Darstellung

## Gate 11 — Image / Video Performance Lock

Images:
- responsive
- passende `sizes`
- feste Dimensionen
- moderne Formate
- keine unnötig riesigen Originale
- Alt-Intent korrekt

Video:
- Poster First
- Heavy Player/iframe lazy
- Mobile-Fallback
- Captions/Transcript bei relevantem gesprochenem Inhalt
- kein massives Autoplay-Hero-Video ohne Rechtfertigung

## Gate 12 — SEO / GEO Lock

Production:
- eindeutige Title/Descriptions
- klare H1/Heading-Struktur
- Search Intent
- interne Links
- Canonical
- Sitemap
- Robots
- Structured Data nur für reale Inhalte
- Local/Location nur mit realem Wert
- hreflang wenn nötig
- Redirect/Migration bei Relaunch

Demo:
- realistische Architektur
- keine versehentliche Indexierung von Prospect Demos

## Gate 13 — Accessibility Lock

Automatisiert + manuell:
- Tastatur
- sichtbarer Fokus
- Skip Link
- Landmarken
- Labels/Errors
- Kontrast
- Reduced Motion
- Dialog/Drawer/Accordion Focus
- keine Info nur über Farbe
- Screenreader-Grundprüfung auf Kernflow
- Reflow/Zoom

Blocker: kritischer A11y-Fehler oder unbedienbarer Kernfunnel.

## Gate 14 — Performance Lock

CWV p75 Ziel:
- LCP <= 2.5s
- INP <= 200ms
- CLS <= 0.1

DG Ambition auf kritischen Pages:
- LCP möglichst <2.0s
- CLS möglichst <0.05

Zusätzlich:
- minimales Client JS
- kontrollierte Fonts
- Third-Party Inventory
- GPU/layout-freundliche Motion
- keine unnötige Hydration

Blocker: eigenes Design verursacht deutlich vermeidbares Performanceversagen.

## Gate 15 — Visual QA / Device Lock

**Code Review ist keine Visual QA.**

Wenn Browser-/Preview-/Screenshot-Tools verfügbar sind, muss die echte gerenderte Website geprüft werden.

Mindestens prüfen:
- 360x800
- 390x844
- 430x932
- Tablet Portrait ca. 768 px
- Desktop ca. 1440 px
- Wide Desktop ca. 1920 px, wenn Layout/Whitespace dort relevant verändert wird

Auf jeder wichtigen Seite prüfen:
- Header / Navigation
- kompletter Hero
- erste Conversion-Zone
- Proof / Trust
- Kernleistungen
- Formulare / Funnel / Interaktionen
- Footer
- Section-Übergänge

STOP-SHIP:
- Broken/gestrecktes Bild
- falsches Logo
- unerklärte leere Fläche
- gigantischer unbeabsichtigter Whitespace
- geclippter Text
- überlappende Elemente
- horizontaler Overflow
- Buttons außerhalb des Viewports
- unlesbarer Kontrast
- kaputte Section auf Mobile
- Desktop nur stumpf verkleinert statt mobil gestaltet
- Layout Shift durch eigene Implementierung
- sichtbar unfertiger Header/Footer
- sichtbarer Platzhalter
- Browser-Default-Formcontrols in ansonsten vollständig gestalteter UI

Wenn echte visuelle Prüfung nicht möglich ist: `VISUAL_QA = UNVERIFIED`.

## Gate 16 — Runtime / Integration Lock

Browserprüfung:
- Navigation
- Form/Funnel Submit
- Success/Error
- Booking
- Bewerbungsflow
- externe Links
- 404
- relevante Routen
- primäre CTAs

Production zusätzlich:
- CRM/ATS Delivery
- Follow-up/Notification
- Consent
- Analytics Events
- Attribution
- AI Assistant actions
- monitoring/errors
- sitemap/robots/canonical/OG/schema

Blocker: Lead/Application kann verloren gehen oder Erfolg wird angezeigt, obwohl Delivery scheitert.

## Gate 17 — Security / Privacy Lock

Production je nach Features:
- server-side validation
- Rate Limiting
- Spam/Bot Protection
- sichere Upload Constraints
- Secrets serverseitig
- Security Headers/CSP sinnvoll
- Datenschutz/Consent für Analytics, Ads, Chat, Bewerberdaten, Embeds
- Retention/Third Parties geklärt

## Gate 18 — Originality Lock

Frage:
> Könnte die Website mit minimalem Texttausch genauso für einen Wettbewerber funktionieren?

Wenn ja: FAIL.

Wenn verfügbar sollen mindestens fünf echte Firmendetails sichtbar in Story/Proof/Experience einfließen.

## Gate 19 — Human Taste Review

Ein Mensch beantwortet:
- wirkt speziell für diese Firma gebaut?
- stärkste Aussage sofort sichtbar?
- UI-Library-Demo-Geruch?
- Elemente ohne Aufgabe?
- abwechslungsreicher, konsistenter Rhythmus?
- Portfolio-würdig?
- Mobile ebenso überzeugend?
- Signature Moment wirklich relevant?
- gibt es Bereiche, die zwar technisch korrekt, aber sichtbar billig/unfertig wirken?

`technisch okay` ist kein PASS für Premium Design.

## Gate 20 — Regression / Scope Lock

Bei Revisionen wird vor der Änderung dokumentiert, was bereits funktioniert und erhalten bleiben muss.

Wenn der Auftrag lautet „Feinschliff“, „nur X korrigieren“ oder eine klar begrenzte Änderung verlangt wird:
- keine ungefragte Neugestaltung anderer Bereiche
- Design-DNA erhalten
- korrektes Logo erhalten
- freigegebene Bilder erhalten
- funktionierende Motion/Scroll-Experience erhalten
- bestehende Copy außerhalb des Scopes erhalten, sofern kein Fehler vorliegt
- funktionierende Routen/Flows erhalten

Nach der Änderung werden betroffene **und angrenzende Bereiche** erneut visuell und funktional geprüft.

STOP-SHIP Regressionen:
- richtige Logos durch falsche ersetzt
- funktionierende Bilder werden broken
- bestehende Motion verschwindet ohne Grund
- neue Leerflächen entstehen
- Mobile wird durch Desktop-Fix schlechter
- lokale Änderung verändert ungewollt die gesamte Designsprache
- funktionierender CTA/Formular/Flow wird beschädigt
- andere Route wird durch Fix gebrochen

**Random Redesign ist kein Optimierungsverfahren.**

## Gate 21 — Release Evidence Lock

Vor jedem Status `DEMO_READY` oder `PRODUCTION_READY` muss ein Release-Evidence-Block vorhanden sein:

- Build: PASS / FAIL / UNVERIFIED
- Typecheck/Lint: PASS / FAIL / UNVERIFIED
- relevante Routen geprüft
- visuell geprüfte Viewports
- Broken Images: 0
- falsche/unbeabsichtigte Logo-Varianten: 0
- unmarkierte Placeholders: 0
- kaputte Primary CTAs: 0
- kaputte Primary Forms/Funnels: 0
- Console/Runtime Blocker: 0
- Mobile Overflow: 0
- Regression Blocker: 0
- Hard Fails gesamt: 0
- finaler Score
- bekannte Einschränkungen / UNVERIFIED Items

Ein Release darf nicht mit einem versteckten `UNVERIFIED` als vollständig geprüft dargestellt werden.

## Gate 22 — Score / Release

Verwende `SCORECARD-V2.md` und den 1.000-Punkte-Standard aus `MASTER-FRAMEWORK-V2.md`.

Demo:
- >=850 Minimum
- >=900 Ziel
- 0 Hard Fails

Production:
- >=900 Minimum
- >=950 Ziel / MILLION-DOLLAR STANDARD
- 0 Hard Fails
- alle Production Integrations end-to-end verifiziert

Ein Score kann niemals Hard Fails, fehlende Visual QA oder ungeprüfte Kernflows kompensieren.

---

# Universal STOP-SHIP Hard Fails

- Fake Claim / Fake Proof
- Broken Image
- falsches oder unbeabsichtigt inkonsistentes Logo
- Broken Link im Kernflow
- kaputtes Formular/Funnel
- kaputter Primary CTA
- Mobile Overflow
- unerklärte leere Fläche / gigantischer unbeabsichtigter Whitespace
- geclippte oder überlappende Inhalte
- Buttons/Controls außerhalb des Viewports
- kritischer Console/Runtime Error
- nicht verständlicher Hero
- keine klare Primary Conversion
- generische Positionierung ohne Differenzierung
- unbedienbarer Kernflow
- kritischer Accessibility-Fehler
- gravierendes eigenes Performance-Problem
- ungeklärte zentrale Asset-Rechte
- irreführende AI-Darstellung
- unmarkierter Placeholder im finalen Zustand
- deutliche visuelle Regression gegenüber einem bereits freigegebenen/ funktionierenden Stand

---

# Release Status

Nur zulässig:
- `BLOCKED`
- `REVISION_REQUIRED`
- `DEMO_READY`
- `PRODUCTION_READY`

Release Ready = mode-specific score + 0 Hard Fails + Human Taste Review PASS + Visual QA PASS + Release Evidence vollständig.

**Kein Agent, Entwickler oder Reviewer darf „fertig“, „ready“, „premium“ oder „deployment-ready“ behaupten, wenn diese Bedingungen nicht erfüllt sind.**
