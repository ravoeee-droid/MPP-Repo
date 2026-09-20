const stages = [
  {
    index: "01",
    name: "ANALYSE",
    title: "Verstehen, was wirklich bremst.",
    body: "Ausgangslage, Rollen, Leistung und Strukturen werden nicht getrennt betrachtet, sondern als zusammenhängendes System."
  },
  {
    index: "02",
    name: "KLARHEIT",
    title: "Den stärksten Hebel priorisieren.",
    body: "Nicht alles gleichzeitig. MPP macht sichtbar, welcher Engpass zuerst gelöst werden muss und was danach folgt."
  },
  {
    index: "03",
    name: "UMSETZUNG",
    title: "Lösungen in den Alltag bringen.",
    body: "Recruiting, Performance-Entwicklung oder Strukturarbeit werden konkret in Rollen, Abläufe und Entscheidungen übersetzt."
  },
  {
    index: "04",
    name: "ENTWICKLUNG",
    title: "Fortschritt sichtbar machen.",
    body: "Was funktioniert, wird verstärkt. Was nicht trägt, wird nachgeschärft. Wachstum wird zu einem lernenden System."
  }
];

export function Process() {
  return (
    <section className="process section-pad" id="process">
      <div className="section-kicker">
        <span>07 / VOM GESPRÄCH ZUR WIRKUNG</span>
        <span>Analyse → Klarheit → Umsetzung → Entwicklung</span>
      </div>

      <div className="process__heading">
        <h2>
          Nicht mehr Maßnahmen.
          <br />
          <em>Mehr Wirkung.</em>
        </h2>
        <p>
          Der Prozess bleibt bewusst einfach: zuerst verstehen, dann priorisieren,
          dann umsetzen — und anschließend lernen.
        </p>
      </div>

      <div className="process__timeline">
        <div className="process__rail" aria-hidden="true" />
        {stages.map((stage) => (
          <article className="process-step" key={stage.name}>
            <div className="process-step__index">
              <span>{stage.index}</span>
              <i aria-hidden="true" />
            </div>
            <div className="process-step__copy">
              <p>{stage.name}</p>
              <h3>{stage.title}</h3>
              <span>{stage.body}</span>
            </div>
            <div className="process-step__visual asset-slot" aria-hidden="true">
              <div className="asset-slot__meta">
                <span>{stage.name} / VISUAL</span>
                <strong>Process Asset</strong>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
