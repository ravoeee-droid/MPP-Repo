import { AssetImage } from "@/components/mpp/asset-image";

const proofs = [
  {
    eyebrow: "08 / PEOPLE",
    title: "Recruiting, das bei Rolle und Verantwortung beginnt.",
    body: "MPP verbindet Kandidaten und Unternehmen nicht nur über Lebensläufe. Entscheidend ist, welche Verantwortung eine Rolle trägt, welche Erwartungen zusammenpassen und ob daraus im Alltag echte Wirkung entstehen kann.",
    tag: "RECRUITING / ROLLENKLARHEIT",
    src: "/assets/people/recruiting.png",
    alt: "MPP Recruiting und People Beratung"
  },
  {
    eyebrow: "09 / PERFORMANCE",
    title: "Vertriebsleistung, die im Alltag wiederholbar wird.",
    body: "Vertriebsunterstützung und Coaching setzen dort an, wo Ziele, Führung und Umsetzung zusammenkommen. Der Fokus liegt darauf, Leistung nachvollziehbarer zu machen und Abhängigkeiten von einzelnen Top-Performern zu reduzieren.",
    tag: "VERTRIEB / COACHING",
    src: "/assets/performance/meeting.png",
    alt: "MPP Performance und Vertriebsberatung"
  },
  {
    eyebrow: "10 / SYSTEMS",
    title: "Strukturen, die Wachstum nicht ausbremsen.",
    body: "Prozessoptimierung, Organisationsentwicklung und strategisches Personalmanagement greifen dort ineinander, wo Rollen, Entscheidungen und Abläufe unter Wachstum zunehmend Reibung erzeugen.",
    tag: "ORGANISATION / PROZESSE",
    src: "/assets/systems/structure.png",
    alt: "MPP Systems und Organisationsentwicklung"
  }
];

export function ProofTriad() {
  return (
    <section className="proof section-pad" id="proof">
      <div className="section-kicker">
        <span>08–10 / MPP IN DER PRAXIS</span>
        <span>Drei Felder. Eine gemeinsame Logik.</span>
      </div>

      <div className="proof__list">
        {proofs.map((proof, index) => (
          <article className="proof-case" key={proof.eyebrow}>
            <div className="proof-case__meta">
              <span>{proof.eyebrow}</span>
              <span>0{index + 1}</span>
            </div>

            <div className="proof-case__copy">
              <h2>{proof.title}</h2>
              <p>{proof.body}</p>
              <small>{proof.tag}</small>
            </div>

            <AssetImage
              className="proof-case__visual"
              src={proof.src}
              alt={proof.alt}
              label={proof.eyebrow}
              note="MPP"
              sizes="(max-width: 760px) 100vw, 42vw"
            />
          </article>
        ))}
      </div>

      <div className="proof__footer">
        <p>
          Entscheidend ist nicht ein einzelner Hebel, sondern wie People,
          Performance und Systems im Unternehmen zusammenspielen.
        </p>
        <a className="button button--primary" href="/kontakt">
          Erstgespräch anfragen <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
