export function ImmediateTrust() {
  const facts = [
    ["INHABERGEFÜHRT", "Direkter Ansprechpartner statt anonymer Beratung"],
    ["OPERATIVE FÜHRUNGSERFAHRUNG", "Erfahrung aus Operations, Niederlassungsleitung und COO-Verantwortung"],
    ["DREI HEBEL", "Recruiting · Vertrieb · Organisationsentwicklung"]
  ];

  return (
    <section className="immediate-trust" aria-label="MPP Vertrauensfakten">
      <div className="immediate-trust__inner">
        {facts.map(([label, text], index) => (
          <article className="immediate-trust__item" key={label}>
            <span>0{index + 1}</span>
            <div>
              <strong>{label}</strong>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
