const trustItems = [
  {
    label: "INHABER",
    title: "Verantwortung hat einen Namen.",
    text: "Mattias Pedro Panthel ist als Inhaber von MPP - Recruit im öffentlichen Impressum ausgewiesen.",
    state: "VERIFIZIERT / IMPRESSUM",
    verified: true
  },
  {
    label: "FÜHRUNGSPRAXIS",
    title: "Operative Führung vor Beratung.",
    text: "Öffentlich dokumentierte Stationen umfassen Operations Management, Niederlassungsleitung und eine COO-Rolle – zusätzlich zur Führung von MPP-Recruit.",
    state: "VERIFIZIERT / PUBLIC PROFILE",
    verified: true
  },
  {
    label: "LEISTUNGSFELDER",
    title: "Recruiting, Vertrieb und Organisation aus einer Hand.",
    text: "MPP beschreibt öffentlich Recruiting, Vertriebsunterstützung bzw. Coaching sowie Unternehmensberatung mit Prozessoptimierung, Organisationsentwicklung und strategischem Personalmanagement.",
    state: "VERIFIZIERT / MPP WEBSITE",
    verified: true
  },
  {
    label: "FÖRDERUNG",
    title: "Förderfähigkeit wird nicht als Badge verkauft.",
    text: "MPP weist auf der eigenen Unternehmensberatungsseite darauf hin, dass zahlreiche Leistungen BAFA-förderfähig sind. Ob eine konkrete Beratung förderfähig ist, muss im Einzelfall geprüft werden.",
    state: "QUELLENCLAIM / EINZELPRÜFUNG",
    verified: false
  }
];

export function TrustStack() {
  return (
    <section className="trust section-pad" id="trust">
      <div className="section-kicker">
        <span>11 / VERTRAUEN</span>
        <span>Nachvollziehbar statt dekorativ.</span>
      </div>

      <div className="trust__intro">
        <h2>
          Vertrauen entsteht nicht
          <br />
          durch <em>Badge-Wände.</em>
        </h2>
        <p>
          MPP zeigt deshalb lieber, wer Verantwortung trägt, welche Erfahrung
          öffentlich nachvollziehbar ist und welche Leistungsfelder tatsächlich
          beschrieben sind. Kundenproof kommt erst dazu, wenn er belastbar ist.
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
