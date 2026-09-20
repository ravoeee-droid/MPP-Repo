const trustItems = [
  {
    label: "INHABER",
    title: "Verantwortung hat einen Namen.",
    text: "Mattias Pedro Panthel ist als Inhaber von MPP - Recruit im öffentlichen Impressum ausgewiesen.",
    state: "VERIFIED / IMPRESSUM",
    verified: true
  },
  {
    label: "FÜHRUNGSPRAXIS",
    title: "Operative Führung vor Beratung.",
    text: "Öffentlich gelistete Stationen umfassen Operations Management, Niederlassungsleitung und eine COO-Rolle – zusätzlich zur Führung von MPP-Recruit.",
    state: "VERIFIED / PUBLIC PROFILE",
    verified: true
  },
  {
    label: "REVIEWS",
    title: "Was andere über die Zusammenarbeit sagen.",
    text: "Google-Bewertungen werden erst eingebunden, wenn Profil, Bewertungsstand und Freigabe eindeutig verifiziert sind.",
    state: "CLIENT PROOF REQUIRED",
    verified: false
  },
  {
    label: "REFERENZEN",
    title: "Beziehungen statt Logo-Wand.",
    text: "Kundenlogos und Case Studies erscheinen nur mit nachweisbarer Zusammenarbeit und Freigabe.",
    state: "CLIENT PROOF REQUIRED",
    verified: false
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
          Es entsteht, wenn Aussagen nachvollziehbar werden. Deshalb trennen wir
          verifizierte Fakten klar von Proof, der erst mit Kundenfreigabe
          veröffentlicht werden darf.
        </p>
      </div>

      <div className="trust__grid">
        {trustItems.map((item, index) => (
          <article className="trust-card" key={item.label} data-verified={item.verified}>
            <div className="trust-card__meta">
              <span>0{index + 1}</span>
              <span>{item.label}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <div className="trust-card__state">{item.state}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
