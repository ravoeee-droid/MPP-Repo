# DG MILLION-DOLLAR WEBSITE FRAMEWORK v2.1

Status: FROZEN MASTER STANDARD

Dieses Dokument ist die oberste Qualitäts- und Produktionsregel für alle Websites aus dem Digitale-Gewinner-System. Es gilt für zwei Ausführungsmodi:

- DEMO: maximal überzeugender, personalisierter Verkaufszwilling
- PRODUCTION: echte, dauerhaft betriebene Unternehmenswebsite

Die Demo ist kein Wegwerf-Mockup. Sie ist die frühe Ausprägung derselben Strategie, Design-DNA und Komponentenlogik, die bei Auftrag in Production überführt wird.

**Verbindliche Companion Standards:**
- `QUALITY-GATES.md`
- `QA-RELEASE.md`
- `SCORECARD-V2.md`

Diese Dateien sind Bestandteil dieses Master Standards. Ihre Hard Fails, Visual-QA-, Regression- und Release-Evidence-Regeln sind nicht optional und dürfen bei keiner Umsetzung stillschweigend übersprungen werden.

## 1. North Star

Eine DG-Website ist erst fertig, wenn sie:

1. die richtige Person sofort versteht,
2. ein echtes Problem oder Ziel präzise trifft,
3. glaubwürdig differenziert,
4. Vertrauen mit echtem Proof aufbaut,
5. einen klaren nächsten Schritt anbietet,
6. interaktiv zur Conversion führt,
7. auf Mobile ebenso stark wie auf Desktop funktioniert,
8. visuell unverwechselbar für genau dieses Unternehmen ist,
9. technisch schnell, zugänglich und robust ist,
10. messbar und nach Launch optimierbar bleibt.

## 2. Universal Pipeline

DISCOVERY / INPUT
→ RESEARCH
→ TRUTH LEDGER / COMPANY GRAPH
→ CUSTOMER DECISION MODEL
→ MARKET / COMPETITION
→ POSITIONING / ONLY TEST
→ BRAND DNA
→ OFFER / VALUE ARCHITECTURE
→ STORY / INFORMATION ARCHITECTURE
→ CONVERSION ARCHITECTURE
→ CAREER / EMPLOYER-BRAND DECISION
→ AI ASSISTANT / FUNNEL DECISION
→ MEDIA DIRECTION
→ DESIGN DNA
→ COMPONENT SELECTION
→ BUILD
→ VISUAL QA
→ CRO QA
→ TECHNICAL QA
→ REGRESSION QA
→ FIX LOOP
→ RELEASE EVIDENCE
→ RELEASE GATES
→ DEMO OR PRODUCTION
→ ANALYTICS / LEARNING

Kein Schritt darf stillschweigend übersprungen werden, wenn er für das Projekt relevant ist.

## 2A. Quality Execution Rule — Evidence, nicht Annahme

Das Framework darf nie „Checkliste auf Papier“ bleiben.

Für alle Gates gilt:
- ein grüner Build beweist keine visuelle Qualität
- Code Review beweist keine gerenderte Qualität
- eine einzelne Desktop-Ansicht beweist keine Responsive-Qualität
- `UNVERIFIED` ist niemals `PASS`
- ein hoher Score kann niemals einen Hard Fail überschreiben
- ein Agent, Entwickler oder Reviewer darf einen nicht geprüften Bereich nicht stillschweigend als bestanden behandeln

Wenn Browser-/Preview-/Screenshot-Tools verfügbar sind, muss die echte gerenderte Website visuell geprüft werden.

Wenn eine notwendige Prüfung technisch nicht möglich ist, wird sie ausdrücklich als `UNVERIFIED` dokumentiert. Dann darf nicht behauptet werden, diese Qualitätsdimension sei final geprüft.

## 3. Fact Integrity

Jede konkrete Aussage über das Unternehmen wird intern klassifiziert:

- FACT: belegbar
- INFERENCE: plausible Schlussfolgerung, nicht als Tatsache veröffentlichen
- UNKNOWN: unbekannt

Jeder Fact besitzt Quelle und Confidence. Verboten sind erfundene Testimonials, Mitarbeiter, Auszeichnungen, Zertifikate, Kunden, Umsatzwerte, Standorte, Verfügbarkeiten, Preise, Jobs, Projekte und Ergebnisse.

## 4. Customer Decision Model

Für jede primäre Zielgruppe werden mindestens ermittelt:

- Situation / Trigger
- funktionales Ziel
- emotionales Ziel
- soziales Ziel
- primärer Schmerz
- zugrunde liegender Schmerz
- gewünschter Zustand
- Alternativen / bisherige Lösungen
- Einwände
- Ängste
- Vertrauensanforderungen
- benötigter Proof
- Entscheidungstrigger
- Sprache der Zielgruppe

Die Website darf nicht primär aus Unternehmenssicht geschrieben werden.

## 5. Positioning / Only Test

Die zentrale Positionierung muss beantworten:

> Was kann dieses Unternehmen glaubwürdig sagen oder zeigen, das die relevantesten Wettbewerber nicht identisch behaupten können?

Blocker:
- „Qualität“
- „persönlich“
- „innovativ“
- „zuverlässig“
- „alles aus einer Hand“
- andere austauschbare Aussagen ohne konkreten Mechanismus oder Proof

## 6. Brand DNA

Vor Visual Design werden festgelegt:

- 3–5 Markenattribute
- bewusste No-Gos
- Tonalität
- visuelle Energie
- Typografie-Richtung
- Farblogik
- Layout-Prinzip
- Bildsprache
- Motion-Sprache
- 1 Signature Moment
- eindeutige Logo Source of Truth

Pflege darf nicht wie SaaS wirken. Handwerk nicht wie Krypto. Premium-Immobilien nicht wie ein generisches Handwerker-Template.

Das finale Projekt darf nicht unbeabsichtigt unterschiedliche Logo-Varianten, veraltete Logos oder visuell widersprüchliche Brand Assets mischen.

## 7. Conversion Architecture

Jede Seite besitzt:

- 1 Primary Conversion
- maximal 1 Secondary Conversion
- optional Micro Conversions

Jede DG-Website benötigt mindestens eine interaktive Conversion Experience, sofern geschäftlich sinnvoll:

- Conversational Lead Funnel
- Bewerbungsfunnel
- Termin-/Reservierungsflow
- Rechner / Qualifier
- Job Matcher
- AI Assistant

Ein langes Kontaktformular allein erfüllt diesen Standard nicht.

## 8. AI Assistant Standard

Wenn sinnvoll, erhält die Website einen hochwertigen digitalen Assistenten.

Pflichtregeln:
- klar als digitaler/AI-Assistent gekennzeichnet
- darf menschlich und persönlich gestaltet sein, aber keine reale Mitarbeiteridentität vortäuschen
- antwortet nur aus freigegebenen Unternehmensdaten / Knowledge Sources
- kennt Funnel- und Session-Kontext
- wiederholt keine bereits beantworteten Fragen
- kann abhängig vom Projekt qualifizieren, passende Leistungen erklären, Termine initiieren, Bewerbung starten oder an Menschen übergeben
- bei Unsicherheit: klar sagen, dass Information nicht verifiziert ist
- keine erfundenen Preise, Verfügbarkeiten oder Unternehmensfakten
- Human Handoff vorhanden, wenn geschäftskritisch
- Prompt-Injection-/Abuse-Schutz im Production Mode

## 9. Employer Branding / Career Engine

Die Engine prüft automatisch, ob ein eigener Karrierepfad nötig ist.

Aktivierungsindikatoren:
- offene Stellen
- wiederkehrender Personalbedarf
- Fachkräftemangel
- mehrere Standorte / Wachstum
- Recruiting Ads
- wichtige Arbeitgebervorteile

Dann werden je nach Bedarf aktiviert:
- Employer Brand DNA / EVP
- Career Landing Page
- Job Detail Pages
- echte Team-/Kulturinhalte
- Day-in-the-Life / Mitarbeiter-Video
- Job Matcher
- 60-Sekunden-Bewerbungsfunnel
- Career AI Assistant
- ATS/CRM-Anbindung im Production Mode

Keine erfundenen Benefits, Gehälter, Kulturclaims oder Mitarbeiter.

## 10. Story Architecture

Der Kunde/Bewerber ist der Held. Das Unternehmen ist Guide.

Default Journey:

HERO / RECOGNITION
→ IMMEDIATE PROOF
→ PROBLEM / SITUATION
→ DESIRED FUTURE
→ UNIQUE MECHANISM
→ SOLUTION / SERVICES
→ PROOF
→ PROCESS
→ PEOPLE
→ OBJECTIONS
→ SECOND PROOF
→ FINAL DECISION

Die Reihenfolge ist kein starres Template. Sections ohne Aufgabe werden entfernt.

Jede Section hat genau einen dominanten Job:
- UNDERSTAND
- BELIEVE
- WANT
- ACT

## 11. Hero 7-Second Test

Above the Fold muss in wenigen Sekunden vermitteln:
- Wer?
- Was?
- Für wen?
- Wo, falls relevant?
- Warum diese Firma?
- Was ist der nächste Schritt?

Verboten als Default: „Willkommen“, „Ihr kompetenter Partner“, „Qualität aus Leidenschaft“ und ähnliche informationsarme Einstiege.

## 12. Proof Architecture

Proof steht möglichst nah an der Behauptung.

Proof Ladder:
1. unmittelbare Glaubwürdigkeit
2. Bewertungen
3. konkrete Cases / Projekte
4. echte Menschen
5. nachvollziehbarer Prozess
6. harte Fakten
7. Risk Reversal / nächster sicherer Schritt

Nur verifizierter Proof darf veröffentlicht werden.

## 13. Media Director

Die Engine entscheidet für jede relevante Section:

REAL COMPANY ASSET
→ LICENSED STOCK
→ AI-GENERATED SUPPORTING VISUAL
→ NO IMAGE

Priorität: echte Unternehmensrealität.

Für Final Websites wird zusätzlich ein Shot Plan erzeugt, wenn echtes Material fehlt:
- Mitarbeiterporträts
- Arbeitssituationen
- Standort
- Details / Prozesse
- Team
- Employer-Branding-Clips
- Testimonials, falls echt und freigegeben
- Hero-/Brand-Video, falls sinnvoll

AI-generierte Menschen dürfen nie als echte Mitarbeiter oder Kunden ausgegeben werden.

## 14. Image Production Standard

Für relevante AI-Visuals:
- Purpose definieren
- 3–4 Kandidaten erzeugen
- Brand-/Truth-/Artifact-Critic
- Desktop-/Mobile-Art-Direction
- passende Crops
- Responsive Sizes
- moderne Formate, bevorzugt AVIF/WebP
- feste Dimensionen gegen CLS
- sinnvolle Alt-Texte
- Asset-/Rights-Ledger

Finale Pflicht:
- jedes sichtbare Bild lädt tatsächlich
- kein Bild ist gestreckt/verzerrt
- keine Broken-Image-States
- keine sichtbaren Demo-/Placeholder-Assets im finalen Zustand

## 15. Video Standard

Video nur, wenn es Story, Proof oder Employer Brand verbessert.

Performance-Regeln:
- Poster First
- Player/iframe erst bei Interaktion oder sinnvoller Sichtbarkeit laden
- große Videos adaptiv streamen, wenn nötig
- kein schweres Autoplay-Background-Video auf Mobile ohne klare Begründung
- Captions/Transcript bei relevantem gesprochenem Inhalt
- responsive Poster und Fallback

## 16. Visual Design Standard

Kein AI-Template-Smell.

Verboten als Default:
- zufällige Gradient Orbs
- Glow überall
- generische Bento-Wände
- endlose Marquees
- identische Card-Grids in jeder Section
- Stockfotos ohne Relevanz
- Animation auf jedem Textblock

Pflicht:
- klare visuelle Hierarchie
- konsistente Art Direction
- 2–4 wiedererkennbare Designmotive
- 1 Signature Moment
- bewusstes Wow Budget: Hero, Story, Proof, Conversion
- restliche Seite ruhig und premium
- keine zufälligen Leerflächen oder ungewollt riesigen Abstände
- keine geclippten oder überlappenden Inhalte
- keine visuelle Inkonsistenz zwischen Header, Sections, Forms und Footer

## 17. UX Standard

- Least Effort
- Recognition over Recall
- vertraute Mental Models bei kritischen Interaktionen
- klare Signifier
- sichtbares Feedback
- logisch gruppierte Inhalte
- geringe kognitive Last
- ausreichend große Touch Targets
- keine unnötigen Entscheidungen

Neuheit darf keine Bedienbarkeit zerstören.

## 18. SEO / GEO

Production Mode:
- Search Intent Mapping
- Unique Title / Description
- sinnvolle Heading-Hierarchie
- Canonical
- Sitemap
- Robots
- Internal Linking
- Structured Data nur für reale Inhalte
- lokale Entity-/Standortstruktur, wenn relevant
- service-/intent-spezifische Landingpages nur mit eigenständigem Wert
- klare, zitierfähige Antworten auf kaufrelevante Fragen
- hreflang bei Mehrsprachigkeit
- Migration-/Redirect-Plan bei Relaunch

Demo Mode: technische Grundlagen und realistische Architektur zeigen; keine unnötige Indexierung.

## 19. Performance Budgets

Externes Mindestziel für echte Nutzer am 75. Perzentil:
- LCP <= 2.5 s
- INP <= 200 ms
- CLS <= 0.1

Interne DG-Ambition auf kritischen Seiten:
- LCP möglichst < 2.0 s
- CLS möglichst < 0.05
- minimale Client-JS-Menge

Regeln:
- Server-first
- Client Components nur bei echter Interaktion
- next/image / responsive media
- kontrollierte Fonts
- lazy loading below fold
- Third-Party Scripts inventarisieren
- Video facade/poster-first
- keine schwere Library für triviale UI

## 20. Accessibility

Automatisiert + manuell:
- semantisches HTML
- Tastaturbedienung
- sichtbarer Fokus
- Skip Link
- korrekte Labels / Error States
- Kontrast
- Reduced Motion
- keine Info nur durch Farbe
- Dialog-/Drawer-Fokus
- Screenreader-Grundtest für kritische Flows
- Zoom / Reflow

## 21. Analytics / CRO

Production Websites werden für Lernen gebaut.

Mindestens messen:
- Primary CTA
- Funnel Start
- Funnel Step Completion
- Drop-off
- Form Submit
- Booking
- Application Start / Submit
- wichtige AI-Assistant Conversions
- Traffic Source / Attribution

Nach Launch:
BUILD → MEASURE → HYPOTHESIS → TEST → LEARN → IMPROVE

## 22. Personalization

Optionaler Production Layer:
- Campaign Source
- Zielgruppe
- Standort
- bereits gewählte Leistung
- Funnel State
- returning visitor context

Personalisierung darf niemals sensible Merkmale erraten oder manipulativ eingesetzt werden.

## 23. Demo Framework

Zweck: Deal gewinnen.

Demo muss:
- real personalisiert sein
- reale Unternehmensdetails verwenden
- wesentliche Money Leaks lösen
- echte interaktive Experience zeigen
- Funnel-Demo enthalten, wenn relevant
- AI-Assistant-Demo enthalten, wenn relevant
- Career Experience enthalten, wenn Recruiting relevant
- responsive und technisch sauber sein
- Presentation Mode besitzen
- schnell erzeugbar bleiben

Demo darf keine reale Backend-Funktion vortäuschen, die nicht existiert. Simulationen werden intern/bei Bedarf sichtbar als Demo-Verhalten behandelt.

## 24. Production Framework

Zweck: reales Geschäftsergebnis.

Zusätzlich zu Demo:
- echte Datenquellen
- echtes CRM / ATS
- echte Form Delivery
- echte Automationen
- echte AI Knowledge Base
- Consent / Privacy
- Security
- CMS
- Analytics / RUM
- Monitoring
- Backup / Rollback
- SEO Migration
- laufende Optimierung

## 25. Autonomous Build Loop

STRATEGY
→ DESIGN DNA
→ BUILD
→ DESKTOP SCREENSHOT
→ TABLET SCREENSHOT
→ MOBILE SCREENSHOT
→ WIDE-DESKTOP CHECK, WENN RELEVANT
→ DESIGN CRITIC
→ CRO CRITIC
→ CUSTOMER CRITIC
→ ASSET / LOGO INTEGRITY CHECK
→ PATCH
→ REGRESSION CHECK
→ BROWSER TEST
→ PERFORMANCE / ACCESSIBILITY
→ RELEASE EVIDENCE
→ REPEAT

Der erste Build wird nie ungeprüft ausgeliefert.

Eine Schleife endet nicht, weil „schon viel gemacht wurde“, sondern erst wenn die relevanten Gates tatsächlich bestanden sind.

## 26. Critic System

### Design Director
Prüft:
- Hierarchie
- Typografie
- Layout
- Rhythmus
- Brand Fit
- Originalität
- Premium Feeling
- unerklärte Leerflächen
- inkonsistente Assets/Logos
- sichtbare Unfertigkeit

### CRO Director
Prüft:
- Message
- Offer
- Proof
- Objections
- CTA
- Friction
- Funnel

### Customer Agent
Prüft aus Persona-Perspektive:
- Verstehe ich es?
- Glaube ich es?
- Fühle ich mich verstanden?
- Was macht mich skeptisch?
- Was fehlt?
- Würde ich handeln?

### Regression Guardian
Prüft bei jeder Revision:
- Was war bereits korrekt/freigegeben?
- Was durfte sich laut Scope ändern?
- Was wurde unbeabsichtigt verändert?
- Sind Motion, Bilder, Logos, Copy, Routen und Mobile weiterhin mindestens so gut wie vorher?

### Technical Release Manager
Prüft harte technische Gates und darf Release bei jedem Hard Fail blockieren.

## 27. 1,000-Point Score

- Customer Understanding: 100
- Positioning: 100
- Message & Copy: 100
- Trust & Proof: 100
- Conversion: 100
- UX: 100
- Brand & Visual Design: 100
- Story & Emotion: 75
- Mobile: 75
- Technical Quality: 75
- Differentiation: 50
- Accessibility: 25

Total: 1000

Interpretation:
- <750 REJECT
- 750–849 GOOD
- 850–899 EXCELLENT
- 900–949 DG PREMIUM
- 950+ MILLION-DOLLAR STANDARD

Ein Score kann niemals einen Hard Fail überschreiben.

Für Production gilt >=900 als Minimum. 950+ bleibt die Zielklasse „Million-Dollar Standard“.

## 28. Universal Hard Fails

Sofortiger Release-Blocker:
- Fake Claim / Fake Proof
- Broken Image
- falsches oder unbeabsichtigt inkonsistentes Logo
- Broken Link im Kernflow
- kaputtes Formular/Funnel
- kaputter Primary CTA
- Mobile Overflow
- unerklärte leere Fläche / gigantischer unbeabsichtigter Whitespace
- geclippter Text oder überlappende Elemente
- Buttons/Controls außerhalb des Viewports
- kritischer Console Error
- nicht verständlicher Hero
- keine klare Primary Conversion
- generische Positionierung ohne Differenzierung
- unbedienbarer Kernflow
- kritischer Accessibility-Fehler
- gravierendes eigenes Performance-Problem
- unklare Rechte an zentralen Assets
- unmarkierter Placeholder im finalen Zustand
- deutliche visuelle oder funktionale Regression gegenüber einem bereits funktionierenden/freigegebenen Stand

## 28A. Mandatory Visual QA Evidence Gate

**Code Review ist keine Visual QA.**

Wenn Rendering-Tools verfügbar sind, werden mindestens geprüft:
- 360x800
- 390x844
- 430x932
- Tablet Portrait ca. 768 px
- Desktop ca. 1440 px
- Wide Desktop ca. 1920 px, wenn Layout/Whitespace dort anders reagiert

Für jede wichtige Seite mindestens:
- Header / Navigation
- kompletter Hero
- erste Conversion-Zone
- Proof / Trust
- Kernleistungen
- Form/Funnel/Chat/Booking
- Footer
- Section-Übergänge

Visuelle Pflichtprüfung:
- Bilder laden
- Logo korrekt
- kein unerklärter Leerraum
- keine Clipping-/Overlap-Fehler
- keine Off-Screen-Controls
- keine ungewollten Layout Jumps
- Mobile bewusst gestaltet, nicht nur Desktop verkleinert
- Motion/Scroll-Verhalten intakt

Wenn diese Prüfung nicht möglich ist, Status `VISUAL_QA_UNVERIFIED`. Dann ist eine Aussage wie „visuell final“, „premium fertig“ oder „vollständig geprüft“ nicht zulässig.

## 28B. Regression / Scope Lock

Eine Änderungsanweisung ist kein Freibrief für ein ungefragtes Redesign.

Bei `Feinschliff`, lokalem Fix oder begrenzter Revision:
1. vor Änderung festhalten, was bereits korrekt/freigegeben ist
2. nur den notwendigen Scope ändern
3. Design-DNA, korrektes Logo, freigegebene Bilder, funktionierende Motion, Copy außerhalb des Scopes und Kernflows standardmäßig erhalten
4. geänderte und angrenzende Bereiche erneut visuell prüfen
5. funktionierende Routen/Flows erneut smoke-testen

STOP-SHIP Regressionen:
- richtiges Logo wird ersetzt
- funktionierende Bilder werden broken
- Motion/Scroll Experience verschwindet ohne Auftrag
- neue Leerflächen entstehen
- Mobile wird durch Desktop-Fix schlechter
- lokale Änderung verändert ungewollt das gesamte Design
- anderer Flow/Route bricht

**Random Redesign ist kein Optimierungsverfahren.**

## 28C. Release Evidence Lock

Vor jedem Status `DEMO_READY` oder `PRODUCTION_READY` muss intern ein Release-Evidence-Block vorliegen:

- Build: PASS / FAIL / UNVERIFIED
- Typecheck/Lint: PASS / FAIL / UNVERIFIED
- relevante Routen geprüft
- visuell geprüfte Viewports
- Visual QA: PASS / FAIL / UNVERIFIED
- Broken Images: 0
- falsche/unbeabsichtigte Logo-Varianten: 0
- unmarkierte Placeholders: 0
- kaputte Primary CTAs: 0
- kaputte Primary Forms/Funnels: 0
- Console/Runtime Blocker: 0
- Mobile Overflow: 0
- Regression Blocker: 0
- Hard Fails: 0
- finaler 1.000-Punkte-Score
- bekannte Einschränkungen / UNVERIFIED Items

Ein Release darf nicht mit einem versteckten `UNVERIFIED` als vollständig geprüft dargestellt werden.

## 29. Originality Gate

Frage:
> Könnte diese Website mit minimalem Textaustausch genauso für einen anderen Betrieb funktionieren?

Wenn ja: FAIL.

Mindestens fünf reale Unternehmensdetails sollen, wenn verfügbar, in Experience/Story/Proof sichtbar werden.

## 30. Definition of Done

Eine Website darf erst als fertig gelten, wenn:
- alle relevanten Fakten verifiziert oder klar als unbekannt behandelt sind
- Strategy Lock bestanden
- Positioning Lock bestanden
- Copy Lock bestanden
- Visual Direction Lock bestanden
- Conversion Lock bestanden
- Media Truth / Rights geprüft
- Logo Source of Truth eingehalten
- Broken Images = 0
- unbeabsichtigte falsche Logo-Varianten = 0
- unerklärte Leerflächen / grobe Layoutfehler = 0
- unmarkierte Placeholders = 0
- Desktop + Tablet + Mobile Visual Review bestanden, Wide Desktop wenn relevant
- Kernflows getestet
- Regression Lock bei Revisionen bestanden
- Performance Gate bestanden
- Accessibility Gate bestanden
- SEO/GEO Gate für Production bestanden
- Tracking/Runtime Gate für Production bestanden
- Release Evidence vollständig
- Score >= 900 für Production bzw. projektdefinierter Demo-Schwellenwert
- 0 Hard Fails
- Human Taste Review bestanden

950+ ist Zielklasse „Million-Dollar Standard“, nicht automatisch monetärer Marktwert.

## 31. Final Rule

Nicht maximal viele Features bauen.

Für jeden Besucher die relevanteste, glaubwürdigste und einfachste nächste Erfahrung erzeugen.

Und: **Niemals eine Website als fertig ausliefern, nur weil sie technisch gebaut wurde. Fertig bedeutet nachweislich geprüft.**
