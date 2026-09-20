const proofs = [
  {
    eyebrow: "08 / PEOPLE PROOF",
    title: "Recruiting wird erst dann wertvoll, wenn die Rolle wirklich passt.",
    body: "Hier kommt später ein verifizierter Recruiting-Case mit Ausgangslage, Rolle, Ansatz, Ergebnis und Nachweis hinein.",
    tag: "CASE SLOT / VERIFIED ONLY"
  },
  {
    eyebrow: "09 / PERFORMANCE PROOF",
    title: "Leistung braucht Klarheit, nicht mehr Druck.",
    body: "Hier wird später gezeigt, wie Führung, Vertrieb oder Umsetzung messbar verbessert wurden — nur mit belegbaren Resultaten.",
    tag: "CASE SLOT / VERIFIED ONLY"
  },
  {
    eyebrow: "10 / SYSTEMS PROOF",
    title: "Struktur reduziert Abhängigkeit von Einzelpersonen.",
    body: "Hier kommt später ein konkreter Systems-Case hinein: Rollen, Verantwortlichkeiten, Prozesse und der belegte Effekt.",
    tag: "CASE SLOT / VERIFIED ONLY"
  }
];

export function ProofTriad() {
  return (
    <section className="proof section-pad" id="proof">
      <div className="section-kicker">
        <span>08–10 / PROOF ENGINE</span>
        <span>Behauptung → Beweis direkt daneben.</span>
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

            <div className="proof-case__visual asset-slot" aria-hidden="true">
              <div className="asset-slot__meta">
                <span>PROOF / CASE</span>
                <strong>Verifizierte Daten folgen.</strong>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="proof__footer">
        <p>
          Keine erfundenen Kennzahlen. Case Studies werden erst veröffentlicht,
          wenn Ausgangslage, Ergebnis und Freigabe belegt sind.
        </p>
        <a className="button button--primary" href="/case-studies">
          Case-Study-System ansehen <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
