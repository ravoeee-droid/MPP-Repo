const pillars = [
  {
    number: "01",
    name: "PEOPLE",
    title: "Die richtigen Menschen in die richtigen Rollen.",
    body: "Nicht mehr Lebensläufe. Sondern Klarheit darüber, wer wirklich zur Aufgabe, Verantwortung und Organisation passt."
  },
  {
    number: "02",
    name: "PERFORMANCE",
    title: "Potenzial wird erst durch Leistung wertvoll.",
    body: "Führung, Verantwortung und Vertrieb werden so ausgerichtet, dass Leistung nicht von Zufall oder Einzelpersonen abhängt."
  },
  {
    number: "03",
    name: "SYSTEMS",
    title: "Struktur macht Wachstum tragfähig.",
    body: "Rollen, Prozesse und Entscheidungen greifen ineinander — damit das Unternehmen wachsen kann, ohne an Komplexität zu verlieren."
  }
];

export function OperatingSystem() {
  return (
    <section className="os-section section-pad" id="operating-system">
      <div className="section-kicker">
        <span>02 / MPP OPERATING SYSTEM</span>
        <span>People → Performance → Systems → Growth</span>
      </div>

      <div className="os-intro">
        <h2>
          So entsteht
          <br />
          <em>Wachstum mit System.</em>
        </h2>
        <p>
          MPP verbindet Menschen, Leistung und Strukturen zu einem
          zusammenhängenden Operating System für Unternehmen, die nicht nur
          kurzfristig wachsen wollen.
        </p>
      </div>

      <div className="os-track">
        <div className="os-track__line" aria-hidden="true" />
        {pillars.map((pillar) => (
          <article className="os-card" key={pillar.name}>
            <div className="os-card__head">
              <span>{pillar.number}</span>
              <span className="os-card__node" />
              <b>{pillar.name}</b>
            </div>
            <h3>{pillar.title}</h3>
            <p>{pillar.body}</p>
          </article>
        ))}
        <article className="os-card os-card--growth">
          <div className="os-card__head">
            <span>04</span>
            <span className="os-card__node" />
            <b>GROWTH</b>
          </div>
          <h3>Wachstum wird zum Ergebnis des Systems.</h3>
          <p>
            Nicht mehr ein einzelner Hebel, sondern das Zusammenspiel entscheidet.
          </p>
        </article>
      </div>
    </section>
  );
}
