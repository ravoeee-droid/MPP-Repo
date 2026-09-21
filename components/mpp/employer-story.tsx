import Link from "next/link";

const story = [
  {
    index: "01",
    kicker: "ANZIEHEN",
    title: "Menschen wollen wissen, wofür sie antreten.",
    text: "Arbeitgeberstärke beginnt vor dem ersten Gespräch: mit einer klaren Rolle, einer glaubwürdigen Geschichte und einem realistischen Bild davon, was jemand bewegen kann."
  },
  {
    index: "02",
    kicker: "ANKOMMEN",
    title: "Das Versprechen muss zum Arbeitsalltag passen.",
    text: "Was im Recruiting versprochen wird, muss sich in Rolle, Führung und Zusammenarbeit wiederfinden. Sonst entsteht schon beim Einstieg Reibung."
  },
  {
    index: "03",
    kicker: "WACHSEN",
    title: "Gute Leute bleiben dort, wo Entwicklung möglich ist.",
    text: "Klare Verantwortung, Feedback und Perspektive machen aus einer Stelle eine Rolle, in der Menschen Wirkung entfalten und sich weiterentwickeln können."
  }
];

export function EmployerStory() {
  return (
    <section className="employer-story" id="arbeitgeberstory">
      <div className="employer-story__inner">
        <div className="section-kicker section-kicker--dark">
          <span>08 / ARBEITGEBERSTÄRKE</span>
          <span>Vom ersten Eindruck bis zum Alltag.</span>
        </div>

        <div className="employer-story__intro">
          <p className="eyebrow">EMPLOYER EXPERIENCE</p>
          <h2>
            Starke Arbeitgeber gewinnen
            <br />
            <em>nicht nur Bewerbungen.</em>
          </h2>
          <p>
            Für Arbeitgeber endet Recruiting nicht mit einer Bewerbung.
            Entscheidend ist, ob das Versprechen nach außen zu Rolle, Führung
            und Alltag im Unternehmen passt.
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
            <strong>Arbeitgeberstärke endet nicht bei der Bewerbung.</strong>
          </div>
          <Link className="button button--primary" href="/recruiting">
            Recruiting neu denken <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
