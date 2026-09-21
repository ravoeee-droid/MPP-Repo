import { AssetImage } from "@/components/mpp/asset-image";

const stages = [
  {
    index: "01",
    name: "Analyse",
    body: "Wir verstehen Ihre Ausgangslage, hören genau hin und erkennen, was wirklich zählt – im System, bei den Menschen und in den Zielen.",
    src: "/assets/process/01-analyse.png"
  },
  {
    index: "02",
    name: "Klarheit",
    body: "Wir verdichten Erkenntnisse, priorisieren gemeinsam und entwickeln ein klares, realistisches Zielbild – als Grundlage für wirksame Entscheidungen.",
    src: "/assets/process/02-klarheit.png"
  },
  {
    index: "03",
    name: "Umsetzung",
    body: "Wir bringen die vereinbarte Lösung in die Praxis – mit klarer Verantwortung, pragmatischem Vorgehen und enger Begleitung im Alltag.",
    src: "/assets/process/03-umsetzung.png"
  },
  {
    index: "04",
    name: "Entwicklung",
    body: "Wir messen Wirkung, lernen gemeinsam und entwickeln weiter – damit Fortschritt kein Projekt bleibt, sondern Teil Ihrer Organisation wird.",
    src: "/assets/process/04-entwicklung.png"
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
            <AssetImage
              className="process-golden__visual"
              src={stage.src}
              alt={`MPP Prozessphase ${stage.name}`}
              label={`${stage.name.toUpperCase()} / VISUAL`}
              note="MPP Editorial Asset"
            />

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
