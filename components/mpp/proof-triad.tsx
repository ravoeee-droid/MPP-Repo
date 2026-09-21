import { AssetImage } from "@/components/mpp/asset-image";

const proofs = [
  {
    eyebrow: "08 / PEOPLE",
    title: "Recruiting mit Blick auf Rolle, Passung und Verantwortung.",
    body: "MPP beschreibt öffentlich die passgenaue Verbindung von Kandidaten und Unternehmen als Kern des Recruiting-Angebots. Die neue Website übersetzt das konsequent in ein Rollen- und Verantwortungssystem statt in reine CV-Vermittlung.",
    tag: "VERIFIED / MPP WEBSITE",
    src: "/assets/editorial/pflege-alltag.webp",
    alt: "MPP im Austausch mit einer Pflegekraft im Arbeitsalltag"
  },
  {
    eyebrow: "09 / PERFORMANCE",
    title: "Vertriebsunterstützung und Coaching mit Praxisfokus.",
    body: "MPP führt Vertrieb und Sales Coaching als eigenes Leistungsfeld. Die Performance-Perspektive macht daraus eine klare Frage: Wie wird gute Leistung im Alltag nachvollziehbar und entwickelbar?",
    tag: "VERIFIED / MPP WEBSITE",
    src: "/assets/performance/detail-coaching.png",
    alt: "MPP Coaching und Performance Entwicklung"
  },
  {
    eyebrow: "10 / SYSTEMS",
    title: "Organisationsentwicklung dort, wo Wachstum Reibung erzeugt.",
    body: "Auf der Unternehmensberatungsseite nennt MPP Prozessoptimierung, Organisationsentwicklung und strategisches Personalmanagement. Systems bündelt diese Themen in einer klaren Wachstumslogik.",
    tag: "VERIFIED / MPP WEBSITE",
    src: "/assets/systems/detail-mapping.png",
    alt: "MPP Mapping von Rollen und Organisationsstrukturen"
  }
];

export function ProofTriad() {
  return (
    <section className="proof section-pad" id="proof">
      <div className="section-kicker">
        <span>08–10 / MPP IN DER PRAXIS</span>
        <span>Drei Felder. Eine gemeinsame Logik.</span>
      </div>

      <div className="proof__list">
        {proofs.map((proof, index) => (
          <article className="proof-case" key={proof.eyebrow}>
            <div className="proof-case__meta">
              <span>{proof.eyebrow}</span>
              <span>0{index + 1}</span>
            </div>

            <div className="proof-case__copy">
              <h2>{proof.title}</h2>
              <p>{proof.body}</p>
              <small>{proof.tag}</small>
            </div>

            <AssetImage
              className="proof-case__visual"
              src={proof.src}
              alt={proof.alt}
              label={proof.eyebrow}
              note="MPP Production Asset"
              sizes="(max-width: 760px) 100vw, 42vw"
            />
          </article>
        ))}
      </div>

      <div className="proof__footer">
        <p>
          Kundenergebnisse, Referenzlogos und Kennzahlen werden erst ergänzt,
          wenn MPP dafür belastbare Daten und Freigaben bereitstellt. Bis dahin
          bleibt die Website bei nachprüfbaren Leistungs- und Erfahrungsfakten.
        </p>
        <a className="button button--primary" href="/case-studies">
          Case-Study-System ansehen <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
