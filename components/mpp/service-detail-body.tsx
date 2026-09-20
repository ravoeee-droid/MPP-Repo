import { AssetImage } from "@/components/mpp/asset-image";

type ServiceDetailBodyProps = {
  axis: "people" | "performance" | "systems";
  chapter: string;
  statement: string;
  intro: string;
  pains: Array<{
    title: string;
    text: string;
  }>;
  phases: Array<{
    title: string;
    text: string;
  }>;
  outcomes: Array<{
    title: string;
    text: string;
  }>;
  visualOne: {
    src: string;
    alt: string;
    label: string;
  };
  visualTwo: {
    src: string;
    alt: string;
    label: string;
  };
};

export function ServiceDetailBody({
  axis,
  chapter,
  statement,
  intro,
  pains,
  phases,
  outcomes,
  visualOne,
  visualTwo
}: ServiceDetailBodyProps) {
  return (
    <>
      <section className="service-story section-pad">
        <div className="section-kicker">
          <span>{chapter}</span>
          <span>Vom Symptom zum System.</span>
        </div>

        <div className="service-story__intro">
          <h2>{statement}</h2>
          <p>{intro}</p>
        </div>

        <div className="service-story__grid">
          <AssetImage
            className="service-story__visual service-story__visual--primary"
            src={visualOne.src}
            alt={visualOne.alt}
            label={visualOne.label}
            note={`Upload: public${visualOne.src}`}
          />

          <div className="service-story__pains">
            {pains.map((pain, index) => (
              <article key={pain.title}>
                <span>0{index + 1}</span>
                <h3>{pain.title}</h3>
                <p>{pain.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-method section-pad">
        <div className="section-kicker">
          <span>MPP / VORGEHEN</span>
          <span>Verstehen → priorisieren → umsetzen.</span>
        </div>

        <div className="service-method__grid">
          <div className="service-method__copy">
            <p className="eyebrow">Wie MPP arbeitet</p>
            <h2>
              Weniger Aktionismus.
              <br />
              <em>Mehr Klarheit.</em>
            </h2>
            <p>
              Nicht jede Situation braucht mehr Maßnahmen. MPP arbeitet deshalb
              zuerst heraus, welcher Hebel tatsächlich zuerst bewegt werden muss.
            </p>
          </div>

          <AssetImage
            className="service-method__visual"
            src={visualTwo.src}
            alt={visualTwo.alt}
            label={visualTwo.label}
            note={`Upload: public${visualTwo.src}`}
          />
        </div>

        <div className="service-method__steps">
          {phases.map((phase, index) => (
            <article key={phase.title}>
              <div>
                <span>0{index + 1}</span>
                <i aria-hidden="true" />
              </div>
              <h3>{phase.title}</h3>
              <p>{phase.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-outcomes section-pad">
        <div className="section-kicker section-kicker--dark">
          <span>WORAN SIE WIRKUNG ERKENNEN</span>
          <span>{axis.toUpperCase()} / MPP</span>
        </div>

        <div className="service-outcomes__intro">
          <h2>
            Wirkung zeigt sich
            <br />
            <em>im Alltag.</em>
          </h2>
          <p>
            Keine erfundenen Benchmarks und keine pauschalen Ergebnisversprechen.
            Entscheidend ist, ob sich die relevanten Arbeits- und
            Entscheidungsbedingungen konkret verbessern.
          </p>
        </div>

        <div className="service-outcomes__grid">
          {outcomes.map((outcome, index) => (
            <article key={outcome.title}>
              <span>0{index + 1}</span>
              <h3>{outcome.title}</h3>
              <p>{outcome.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-detail-cta">
        <div>
          <p className="eyebrow">Nächster Schritt</p>
          <h2>
            Erst verstehen.
            <br />
            Dann <em>entscheiden.</em>
          </h2>
        </div>

        <div>
          <p>
            Im ersten Gespräch ordnen wir Ihre Ausgangslage ein und prüfen, ob
            dieser Hebel tatsächlich der richtige Startpunkt ist.
          </p>
          <a className="button button--primary" href={`/kontakt?fokus=${axis}`}>
            Gespräch vorbereiten <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </>
  );
}
