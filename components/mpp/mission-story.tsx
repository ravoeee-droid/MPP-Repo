import Link from "next/link";

const chapters = [
  {
    index: "01",
    label: "PEOPLE",
    title: "Die richtige Person ist kein Endpunkt.",
    text: "Eine Besetzung wird erst dann wertvoll, wenn Verantwortung klar ist, Erwartungen zusammenpassen und Menschen in der Rolle tatsächlich Wirkung entfalten können."
  },
  {
    index: "02",
    label: "PERFORMANCE",
    title: "Leistung braucht mehr als Talent.",
    text: "Gute Menschen allein lösen keine Reibung. Klarheit in Führung, Vertrieb und Zusammenarbeit entscheidet darüber, ob Potenzial im Alltag ankommt."
  },
  {
    index: "03",
    label: "SYSTEMS",
    title: "Wachstum braucht ein System, das mitwächst.",
    text: "Wenn Rollen, Prozesse und Entscheidungen zusammenpassen, wird aus einzelnen Leistungsträgern ein Unternehmen, das nicht permanent an Einzelnen hängt."
  }
];

export function MissionStory() {
  return (
    <section className="mission-story section-pad" id="mission">
      <div className="section-kicker">
        <span>02 / MISSION</span>
        <span>Vom Match zur Wirkung.</span>
      </div>

      <div className="mission-story__layout">
        <div className="mission-story__sticky">
          <p className="eyebrow">WARUM MPP</p>
          <h2>
            Der Match ist
            <br />
            nicht das Ziel.
            <br />
            <em>Wirkung ist es.</em>
          </h2>
          <p>
            MPP denkt Recruiting, Leistung und Organisation nicht getrennt.
            Denn die richtige Person kann nur dann ihr Potenzial entfalten,
            wenn Rolle, Führung und System zusammenpassen.
          </p>

          <Link className="text-link mission-story__link" href="/ueber-mpp">
            Die Haltung hinter MPP <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="mission-story__chapters">
          {chapters.map((chapter) => (
            <article className="mission-story__chapter" key={chapter.index}>
              <div className="mission-story__meta">
                <span>{chapter.index}</span>
                <span>{chapter.label}</span>
              </div>
              <div className="mission-story__chapter-copy">
                <h3>{chapter.title}</h3>
                <p>{chapter.text}</p>
              </div>
              <div className="mission-story__pulse" aria-hidden="true">
                <i />
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mission-story__statement" aria-label="MPP Leitgedanke">
        <span>RICHTIGE MENSCHEN</span>
        <i aria-hidden="true" />
        <span>KLARE LEISTUNG</span>
        <i aria-hidden="true" />
        <span>TRAGFÄHIGE SYSTEME</span>
      </div>
    </section>
  );
}
