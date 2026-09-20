"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

type Axis = "people" | "performance" | "systems" | "unknown";

type ThreadItem = {
  role: "mia" | "user";
  text: string;
};

const routeContext: Record<
  string,
  {
    axis: Axis;
    intro: string;
    prompt: string;
    quick: string[];
  }
> = {
  "/recruiting": {
    axis: "people",
    intro:
      "Sie sind gerade im Bereich Recruiting. Ich kann mit Ihnen einordnen, welche Rolle wirklich gebraucht wird und wo die Besetzung im System wirken soll.",
    prompt: "Suchen Sie aktuell eine konkrete Schlüsselposition?",
    quick: [
      "Ja, eine konkrete Schlüsselrolle",
      "Mehrere Rollen sind schwierig",
      "Wir müssen die Rolle erst schärfen"
    ]
  },
  "/performance": {
    axis: "performance",
    intro:
      "Sie sind gerade im Bereich Performance. Ich kann mit Ihnen eingrenzen, wo Vertriebs- oder Führungsleistung aktuell Wirkung verliert.",
    prompt: "Woran merken Sie die Performance-Lücke am stärksten?",
    quick: [
      "Zu abhängig von Top-Performern",
      "Zu wenig Klarheit im Vertrieb",
      "Führung und Umsetzung greifen nicht"
    ]
  },
  "/systems": {
    axis: "systems",
    intro:
      "Sie sind gerade im Bereich Systems. Ich kann mit Ihnen prüfen, ob Rollen, Prozesse oder Entscheidungen aktuell die größte Reibung erzeugen.",
    prompt: "Wo entsteht aktuell die meiste organisatorische Reibung?",
    quick: [
      "Rollen sind nicht klar",
      "Prozesse skalieren nicht",
      "Zu viele Entscheidungen hängen an Einzelnen"
    ]
  },
  "/case-studies": {
    axis: "unknown",
    intro:
      "Sie schauen sich gerade den Proof-Bereich an. MPP veröffentlicht hier nur belegte Case Studies – keine erfundenen Erfolgszahlen.",
    prompt: "Welcher Beweis wäre für Ihre Situation am relevantesten?",
    quick: [
      "Recruiting-Ergebnisse",
      "Performance-Ergebnisse",
      "Organisations-Ergebnisse"
    ]
  }
};

const defaultContext = {
  axis: "unknown" as Axis,
  intro:
    "Ich kann Ihnen helfen, den wahrscheinlich stärksten Hebel zwischen People, Performance und Systems einzuordnen.",
  prompt: "Womit sollen wir beginnen?",
  quick: [
    "Wir suchen eine Schlüsselperson",
    "Unser Vertrieb hängt an Einzelnen",
    "Unsere Strukturen halten nicht mit",
    "Ich weiß noch nicht, wo das Problem liegt"
  ]
};

function responseFor(text: string) {
  const normalized = text.toLowerCase();

  if (
    normalized.includes("schlüssel") ||
    normalized.includes("rolle") ||
    normalized.includes("recruit") ||
    normalized.includes("besetz")
  ) {
    return "Dann starten wir bei People: Welche Verantwortung soll die Rolle tragen – und woran würden Sie nach sechs Monaten erkennen, dass die Besetzung wirklich funktioniert?";
  }

  if (
    normalized.includes("vertrieb") ||
    normalized.includes("perform") ||
    normalized.includes("top-performer") ||
    normalized.includes("führung")
  ) {
    return "Dann schauen wir zuerst auf Performance: Ist das Hauptproblem fehlende Klarheit, uneinheitliche Umsetzung oder eine zu starke Abhängigkeit von einzelnen Leistungsträgern?";
  }

  if (
    normalized.includes("struktur") ||
    normalized.includes("prozess") ||
    normalized.includes("entscheid") ||
    normalized.includes("skal")
  ) {
    return "Dann liegt der erste Blick auf Systems: Sind Rollen und Verantwortlichkeiten unklar oder funktionieren Abläufe vor allem unter Wachstum nicht mehr zuverlässig?";
  }

  return "Dann ist das Growth Diagnostic der beste nächste Schritt. Fünf kurze Fragen geben Ihnen eine erste Richtung, ohne so zu tun, als wäre das bereits eine vollständige Unternehmensdiagnose.";
}

export function MiaAssistant() {
  const pathname = usePathname();
  const context = routeContext[pathname] ?? defaultContext;
  const [open, setOpen] = useState(false);
  const [thread, setThread] = useState<ThreadItem[]>([]);

  const messages = useMemo<ThreadItem[]>(
    () => [
      {
        role: "mia",
        text: `Hi, ich bin Mia, die KI-Assistentin von MPP. ${context.intro}`
      },
      ...thread
    ],
    [context.intro, thread]
  );

  function choose(text: string) {
    setThread((current) => [
      ...current,
      { role: "user", text },
      { role: "mia", text: responseFor(text) }
    ]);
  }

  const contactFocus =
    context.axis === "unknown" ? "/kontakt" : `/kontakt?fokus=${context.axis}`;

  return (
    <>
      <button
        className="mia-launcher"
        type="button"
        aria-expanded={open}
        aria-controls="mia-panel"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="mia-launcher__status" aria-hidden="true" />
        <span>
          <b>Mia</b>
          <small>MPP KI-Assistentin</small>
        </span>
        <i aria-hidden="true">{open ? "×" : "↗"}</i>
      </button>

      <aside
        className="mia-panel"
        id="mia-panel"
        data-open={open}
        aria-label="MPP KI-Assistentin Mia"
      >
        <div className="mia-panel__header">
          <div>
            <span className="mia-panel__eyebrow">MPP DIGITAL CONSULTANT</span>
            <h2>Mia</h2>
            <p>KI-Assistentin · keine reale Mitarbeiterin</p>
          </div>
          <button type="button" onClick={() => setOpen(false)} aria-label="Mia schließen">
            ×
          </button>
        </div>

        <div className="mia-panel__thread" aria-live="polite">
          {messages.map((item, index) => (
            <div className={"mia-message mia-message--" + item.role} key={index}>
              <span>{item.role === "mia" ? "MIA / AI" : "SIE"}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mia-panel__quick">
          <span>{context.prompt}</span>
          {context.quick.map((item) => (
            <button type="button" key={item} onClick={() => choose(item)}>
              <span>{item}</span>
              <i aria-hidden="true">↗</i>
            </button>
          ))}
        </div>

        <div className="mia-panel__footer">
          <a href="/#diagnostic" onClick={() => setOpen(false)}>
            Growth Diagnostic öffnen <span aria-hidden="true">→</span>
          </a>
          <a className="mia-panel__contact" href={contactFocus} onClick={() => setOpen(false)}>
            Gespräch vorbereiten <span aria-hidden="true">↗</span>
          </a>
          <small>
            Demo-Shell: Mia nutzt aktuell ausschließlich freigegebene
            Projektlogik. Vor Production wird sie an eine verifizierte
            MPP-Wissensbasis und den finalen Datenschutzprozess angebunden.
          </small>
        </div>
      </aside>
    </>
  );
}
