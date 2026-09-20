"use client";

import { useState } from "react";

const items = [
  {
    q: "Ist MPP eine Recruiting-Agentur?",
    a: "Recruiting ist ein möglicher Hebel, aber die Positionierung dieser Website geht bewusst weiter: People, Performance und Systems werden gemeinsam betrachtet. Die finale Formulierung wird mit den verifizierten MPP-Leistungen abgeglichen."
  },
  {
    q: "Womit beginnt eine Zusammenarbeit?",
    a: "Mit einem strukturierten ersten Gespräch: Ausgangslage verstehen, die größten Hebel identifizieren und den nächsten sinnvollen Schritt definieren."
  },
  {
    q: "Muss bereits klar sein, ob das Problem bei People, Performance oder Systems liegt?",
    a: "Nein. Genau dafür ist das Growth Diagnostic gedacht: als erste strukturierte Orientierung, nicht als wissenschaftliche Diagnose."
  },
  {
    q: "Welche Förderungen oder Zertifizierungen gibt es?",
    a: "Diese Angaben werden erst veröffentlicht, wenn der exakte Status belegt ist. Bis dahin zeigt die Website bewusst keine ungeprüften Förder- oder Zertifizierungsclaims."
  }
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq section-pad" id="faq">
      <div className="section-kicker">
        <span>14 / FRAGEN VOR DEM ERSTEN GESPRÄCH</span>
        <span>Klarheit vor Conversion.</span>
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
