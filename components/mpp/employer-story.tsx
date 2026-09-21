import Link from "next/link";

const story = [
  {
    index: "01",
    kicker: "ANZIEHEN",
    title: "Menschen wollen wissen, wofür sie antreten.",
    text: "Arbeitgeberstärke beginnt vor dem ersten Gespräch: mit einer klaren Rolle, einer glaubwürdigen Geschichte und einem Bild davon, was jemand wirklich bewegen kann."
  },
  {
    index: "02",
    kicker: "ANKOMMEN",
    title: "Der erste Arbeitstag darf kein Realitätsbruch sein.",
    text: "Was im Recruiting versprochen wird, muss sich im Alltag wiederfinden. Deshalb gehören Auswahl, Erwartungsmanagement und Führung in dieselbe Geschichte."
  },
  {
    index: "03",
    kicker: "WACHSEN",
    title: "Gute Leute bleiben dort, wo Entwicklung sichtbar wird.",
    text: "Verantwortung, Feedback und klare Perspektiven machen aus einer Stelle eine Rolle, in der Menschen stärker werden können."
  },
  {
    index: "04",
    kicker: "WIRKEN",
    title: "Arbeitgebermarke zeigt sich im System.",
    text: "Kultur ist nicht nur Kommunikation. Sie wird in Entscheidungen, Abläufen und Führung spürbar – genau dort, wo tägliche Arbeit leicht oder schwer wird."
  }
];

export function EmployerStory() {
  return (
    <section className="employer-story" id="arbeitgeberstory">
      <div className="employer-story__inner">
        <div className="section-kicker section-kicker--dark">
          <span>08 / ARBEITGEBERSTORY</span>
          <span>Was Menschen erleben, bleibt.</span>
        </div>

        <div className="employer-story__intro">
          <p className="eyebrow">EMPLOYER EXPERIENCE</p>
          <h2>
            Arbeitgeberstärke entsteht
            <br />
            <em>zwischen Stellenanzeige und Alltag.</em>
          </h2>
          <p>
            Eine starke Arbeitgeberstory ist kein Karriereseiten-Text.
            Sie ist die Verbindung zwischen dem Versprechen nach außen und
            dem Erlebnis im Unternehmen.
          </p>
        </div>

        <div className="employer-story__track">
          {story.map((item) => (
            <article className="employer-story__chapter" key={item.index}>
              <div className="employer-story__number">{item.index}</div>
              <div className="employer-story__copy">
                <span>{item.kicker}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <div className="employer-story__node" aria-hidden="true" />
            </article>
          ))}
        </div>

        <div className="employer-story__end">
          <div>
            <span>PEOPLE → PERFORMANCE → SYSTEMS</span>
            <strong>Die Arbeitgeberstory endet nicht bei der Bewerbung.</strong>
          </div>
          <Link className="button button--primary" href="/recruiting">
            Recruiting neu denken <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
