const trustItems = [
  {
    label: "REVIEWS",
    title: "Was andere über die Zusammenarbeit sagen.",
    text: "Echte Google-Bewertungen werden hier erst nach Verifizierung eingebunden."
  },
  {
    label: "REFERENZEN",
    title: "Unternehmen, die MPP ihr Vertrauen geben.",
    text: "Nur freigegebene Kundenlogos und reale Beziehungen — keine Platzhaltermarken."
  },
  {
    label: "CREDENTIALS",
    title: "Nachweise, die wirklich gelten.",
    text: "BAFA, TÜV, ISO, IHK oder Mitgliedschaften nur mit aktuellem, belegbarem Status."
  },
  {
    label: "CONFIDENTIALITY",
    title: "Diskretion ist Teil der Zusammenarbeit.",
    text: "Vertrauliche Themen brauchen klare Prozesse, saubere Datenwege und menschliche Verantwortung."
  }
];

export function TrustStack() {
  return (
    <section className="trust section-pad" id="trust">
      <div className="section-kicker">
        <span>11 / TRUST OS</span>
        <span>Proof dort, wo Zweifel entsteht.</span>
      </div>

      <div className="trust__intro">
        <h2>
          Vertrauen entsteht nicht
          <br />
          durch <em>Badges.</em>
        </h2>
        <p>
          Es entsteht, wenn Aussagen nachvollziehbar werden. Deshalb bekommt jede
          große Behauptung ihren Beweis genau dort, wo der Zweifel entsteht.
        </p>
      </div>

      <div className="trust__grid">
        {trustItems.map((item, index) => (
          <article className="trust-card" key={item.label}>
            <div className="trust-card__meta">
              <span>0{index + 1}</span>
              <span>{item.label}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <div className="trust-card__state">VERIFIED CONTENT REQUIRED</div>
          </article>
        ))}
      </div>
    </section>
  );
}
