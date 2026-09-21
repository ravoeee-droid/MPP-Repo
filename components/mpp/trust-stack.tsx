const trustItems = [
  {
    label: "INHABERGEFÜHRT",
    title: "Verantwortung hat einen direkten Ansprechpartner.",
    text: "Mattias Pedro Panthel führt MPP persönlich und steht hinter der Verbindung aus Recruiting, Leistung und Organisationsentwicklung.",
    state: "MPP / KÖLN",
    verified: true
  },
  {
    label: "OPERATIVE ERFAHRUNG",
    title: "Beratung mit Blick auf den Unternehmensalltag.",
    text: "Erfahrung aus Operations Management, Niederlassungsleitung und COO-Verantwortung prägt den Blick auf Menschen, Führung und Strukturen.",
    state: "FÜHRUNG / OPERATIONS",
    verified: true
  },
  {
    label: "DREI LEISTUNGSFELDER",
    title: "Recruiting, Vertrieb und Organisation zusammengedacht.",
    text: "MPP verbindet Recruiting, Vertriebsunterstützung und Coaching mit Prozessoptimierung, Organisationsentwicklung und strategischem Personalmanagement.",
    state: "PEOPLE / PERFORMANCE / SYSTEMS",
    verified: true
  },
  {
    label: "FÖRDERUNG",
    title: "Fördermöglichkeiten werden im Einzelfall geprüft.",
    text: "MPP weist darauf hin, dass zahlreiche Beratungsleistungen grundsätzlich förderfähig sein können. Ob eine konkrete Maßnahme förderfähig ist, wird individuell geprüft.",
    state: "INDIVIDUELLE PRÜFUNG",
    verified: false
  }
];

export function TrustStack() {
  return (
    <section className="trust section-pad" id="trust">
      <div className="section-kicker">
        <span>11 / VERTRAUEN</span>
        <span>Substanz vor Show.</span>
      </div>

      <div className="trust__intro">
        <h2>
          Vertrauen beginnt mit
          <br />
          <em>klarer Verantwortung.</em>
        </h2>
        <p>
          Wer berät, sollte nicht nur Konzepte kennen, sondern verstehen,
          wie Führung, Vertrieb und Organisation im Alltag tatsächlich
          ineinandergreifen.
        </p>
      </div>

      <div className="trust__grid">
        {trustItems.map((item, index) => (
          <article className="trust-card" key={item.label} data-verified={item.verified}>
            <div className="trust-card__meta">
              <span>0{index + 1}</span>
              <span>{item.label}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <div className="trust-card__state">{item.state}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
