const stages = [
  {
    index: "01",
    name: "Analyse",
    body: "Wir verstehen Ihre Ausgangslage, hören genau hin und erkennen, was wirklich zählt – im System, bei den Menschen und in den Zielen."
  },
  {
    index: "02",
    name: "Klarheit",
    body: "Wir verdichten Erkenntnisse, priorisieren gemeinsam und entwickeln ein klares, realistisches Zielbild – als Grundlage für wirksame Entscheidungen."
  },
  {
    index: "03",
    name: "Umsetzung",
    body: "Wir bringen die vereinbarte Lösung in die Praxis – mit klarer Verantwortung, pragmatischem Vorgehen und enger Begleitung im Alltag."
  },
  {
    index: "04",
    name: "Entwicklung",
    body: "Wir messen Wirkung, lernen gemeinsam und entwickeln weiter – damit Fortschritt kein Projekt bleibt, sondern Teil Ihrer Organisation wird."
  }
];

export function Process() {
  return (
    <section className="process process-golden section-pad" id="process">
      <div className="process-golden__intro">
        <div>
          <p className="eyebrow">Unser Prozess.</p>
          <h2>
            Vom ersten Gespräch
            <br />
            bis zur Umsetzung.
          </h2>
        </div>

        <p>
          Wir hören zu, schaffen Klarheit, bringen Bewegung ins System und bleiben
          an Ihrer Seite – bis Wirkung spürbar wird. Ein strukturierter Prozess,
          der aus Potenzialen Fortschritt macht.
        </p>
      </div>

      <div className="process-golden__grid">
        {stages.map((stage) => (
          <article className="process-golden__step" key={stage.name}>
            <div className="process-golden__visual asset-slot" aria-hidden="true">
              <div className="asset-slot__meta">
                <span>{stage.name.toUpperCase()} / VISUAL</span>
                <strong>Finales Process-Asset folgt.</strong>
              </div>
            </div>

            <div className="process-golden__timeline">
              <span className="process-golden__node" />
              <i />
            </div>

            <span className="process-golden__index">{stage.index}</span>
            <h3>{stage.name}</h3>
            <p>{stage.body}</p>
          </article>
        ))}

        <div className="process-golden__descriptor">
          <span>KLARER</span>
          <span>MENSCHLICHER</span>
          <span>WIRKSAMER</span>
        </div>
      </div>
    </section>
  );
}
