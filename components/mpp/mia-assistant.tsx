"use client";

import { useState } from "react";

type ThreadItem = {
  role: "mia" | "user";
  text: string;
};

const quickStarts = [
  "Wir suchen eine Schlüsselperson",
  "Unser Vertrieb hängt an Einzelnen",
  "Unsere Strukturen halten nicht mit",
  "Ich weiß noch nicht, wo das Problem liegt"
];

export function MiaAssistant() {
  const [open, setOpen] = useState(false);
  const [thread, setThread] = useState<ThreadItem[]>([
    {
      role: "mia",
      text: "Hi, ich bin Mia, die KI-Assistentin von MPP. Ich kann Ihnen helfen, den wahrscheinlich stärksten Hebel zwischen People, Performance und Systems einzuordnen."
    }
  ]);

  function choose(text: string) {
    setThread((current) => [
      ...current,
      { role: "user", text },
      {
        role: "mia",
        text:
          text.includes("Schlüsselperson")
            ? "Dann starten wir bei People: Geht es um eine konkrete Rolle oder eher darum, dass mehrere wichtige Positionen schwer zu besetzen sind?"
            : text.includes("Vertrieb")
              ? "Dann schauen wir zuerst auf Performance: Ist die Leistung stark von einzelnen Top-Performern abhängig oder fehlt vor allem Klarheit im Führungs- und Vertriebsprozess?"
              : text.includes("Strukturen")
                ? "Dann liegt der erste Blick auf Systems: Sind Rollen und Entscheidungen unklar oder brechen Prozesse vor allem bei Wachstum weg?"
                : "Kein Problem. Dann ist das Growth Diagnostic der beste Startpunkt — fünf kurze Fragen geben Ihnen eine erste Richtung."
      }
    ]);
  }

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

      <aside className="mia-panel" id="mia-panel" data-open={open} aria-label="MPP KI-Assistentin Mia">
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
          {thread.map((item, index) => (
            <div className={"mia-message mia-message--" + item.role} key={index}>
              <span>{item.role === "mia" ? "MIA / AI" : "SIE"}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mia-panel__quick">
          <span>Womit sollen wir beginnen?</span>
          {quickStarts.map((item) => (
            <button type="button" key={item} onClick={() => choose(item)}>
              <span>{item}</span>
              <i aria-hidden="true">↗</i>
            </button>
          ))}
        </div>

        <div className="mia-panel__footer">
          <a href="#diagnostic" onClick={() => setOpen(false)}>
            Growth Diagnostic öffnen <span aria-hidden="true">→</span>
          </a>
          <small>
            Demo-Shell: Antworten stammen aktuell nur aus den freigegebenen Projektregeln.
            Vor Production wird Mia an eine verifizierte MPP-Wissensbasis angebunden.
          </small>
        </div>
      </aside>
    </>
  );
}
