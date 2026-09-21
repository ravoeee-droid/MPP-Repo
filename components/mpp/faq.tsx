"use client";

import { useState } from "react";

const items = [
  {
    q: "Ist MPP nur eine Recruiting-Agentur?",
    a: "Nein. Recruiting ist ein Leistungsfeld. MPP verbindet People, Performance und Systems und betrachtet deshalb neben der Besetzung auch Vertriebsleistung, Führung, Prozesse und Organisationsentwicklung."
  },
  {
    q: "Womit beginnt eine Zusammenarbeit?",
    a: "Mit einem strukturierten ersten Gespräch: Ausgangslage verstehen, die größten Hebel identifizieren und den nächsten sinnvollen Schritt definieren."
  },
  {
    q: "Muss bereits klar sein, ob das Problem bei People, Performance oder Systems liegt?",
    a: "Nein. Das Growth Diagnostic dient als erste Orientierung. Im persönlichen Gespräch wird anschließend geprüft, welcher Hebel für Ihre konkrete Situation tatsächlich relevant ist."
  },
  {
    q: "Sind Beratungsleistungen von MPP förderfähig?",
    a: "MPP weist darauf hin, dass zahlreiche Beratungsleistungen grundsätzlich förderfähig sein können. Ob eine konkrete Maßnahme und Ihr Unternehmen die jeweiligen Voraussetzungen erfüllen, muss im Einzelfall geprüft werden."
  }
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq section-pad" id="faq">
      <div className="section-kicker">
        <span>14 / FRAGEN VOR DEM ERSTEN GESPRÄCH</span>
        <span>Klarheit vor dem nächsten Schritt.</span>
      </div>

      <div className="faq__grid">
        <h2>
          Was Entscheider
          <br />
          vorher <em>wissen wollen.</em>
        </h2>

        <div className="faq__items">
          {items.map((item, index) => {
            const active = open === index;
            return (
              <article className="faq-item" key={item.q}>
                <button
                  type="button"
                  aria-expanded={active}
                  onClick={() => setOpen(active ? -1 : index)}
                >
                  <span>{item.q}</span>
                  <i aria-hidden="true">{active ? "−" : "+"}</i>
                </button>
                <div className="faq-item__answer" data-open={active}>
                  <p>{item.a}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
