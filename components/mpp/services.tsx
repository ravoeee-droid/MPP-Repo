const services = [
  {
    index: "01",
    label: "PEOPLE",
    title: "Die richtigen Menschen finden.",
    text: "MPP verbindet Recruiting mit einem tieferen Verständnis von Rolle, Verantwortung und Unternehmensrealität.",
    link: "Recruiting"
  },
  {
    index: "02",
    label: "PERFORMANCE",
    title: "Teams zu Ergebnissen befähigen.",
    text: "Führung, Vertriebsleistung und Klarheit werden so ausgerichtet, dass Leistung nachvollziehbar und entwickelbar wird.",
    link: "Performance"
  },
  {
    index: "03",
    label: "SYSTEMS",
    title: "Wachstum tragfähig machen.",
    text: "Strukturen, Prozesse und Verantwortlichkeiten werden so gestaltet, dass das Unternehmen mit seiner Ambition mitwachsen kann.",
    link: "Systems"
  }
];

export function Services() {
  return (
    <section className="services section-pad" id="services">
      <div className="section-kicker">
        <span>03 / DREI HEBEL</span>
        <span>Ein stärkeres Unternehmen.</span>
      </div>

      <div className="services__title-row">
        <h2>
          Drei Hebel.
          <br />
          <em>Ein stärkeres Unternehmen.</em>
        </h2>
        <p>
          Nicht drei voneinander getrennte Beratungsprodukte, sondern drei
          Perspektiven auf dieselbe Frage: Was braucht Ihr Unternehmen, um
          nachhaltig stärker zu werden?
        </p>
      </div>

      <div className="services__grid">
        {services.map((service) => (
          <article className="service-panel" key={service.label}>
            <div className="service-panel__media asset-slot asset-slot--service">
              <span className="service-panel__number">{service.index}</span>
              <div className="asset-slot__meta">
                <span>{service.label} / VISUAL</span>
                <strong>Finales Section-Asset folgt.</strong>
              </div>
            </div>

            <div className="service-panel__body">
              <p className="service-panel__label">{service.label}</p>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="#diagnostic" className="text-link">
                {service.link} ansehen <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
