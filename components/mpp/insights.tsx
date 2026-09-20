import { AssetImage } from "@/components/mpp/asset-image";

const insights = [
  {
    number: "01",
    category: "PEOPLE",
    title: "Warum eine gute Besetzung nicht bei der Stellenbeschreibung beginnt.",
    text: "Die entscheidende Frage ist nicht nur, wen Sie suchen — sondern welche Verantwortung diese Person im System wirklich tragen soll.",
    src: "/assets/insights/people.png"
  },
  {
    number: "02",
    category: "PERFORMANCE",
    title: "Warum Leistung nicht dauerhaft von Top-Performern abhängen darf.",
    text: "Wenn Ergebnisse an Einzelpersonen hängen, fehlt meist nicht Motivation, sondern ein reproduzierbarer Rahmen für Führung und Vertrieb.",
    src: "/assets/insights/performance.png"
  },
  {
    number: "03",
    category: "SYSTEMS",
    title: "Wann Wachstum zum Organisationsproblem wird.",
    text: "Mehr Aufträge, mehr Menschen und mehr Entscheidungen brauchen klare Rollen und Prozesse — sonst steigt Komplexität schneller als Wirkung.",
    src: "/assets/insights/systems.png"
  }
];

export function Insights() {
  return (
    <section className="insights section-pad" id="insights">
      <div className="section-kicker">
        <span>13 / INSIGHTS</span>
        <span>Gedanken für Unternehmen von morgen.</span>
      </div>

      <div className="insights__intro">
        <h2>
          Klarer denken.
          <br />
          <em>Besser entscheiden.</em>
        </h2>
        <p>
          Keine Content-Masse. Sondern Perspektiven auf die Fragen, die hinter
          Recruiting, Leistung und Wachstum wirklich liegen.
        </p>
      </div>

      <div className="insights__grid">
        {insights.map((item) => (
          <article className="insight-card" key={item.number}>
            <div className="insight-card__meta">
              <span>{item.number}</span>
              <span>{item.category}</span>
            </div>
            <AssetImage
              className="insight-card__visual"
              src={item.src}
              alt={`Editorial Visual zu ${item.category}`}
              label={`EDITORIAL / ${item.category}`}
              note={`Upload: public${item.src}`}
            />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <a href="#contact">
              Perspektive besprechen <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
