import { AssetImage } from "@/components/mpp/asset-image";

const services = [
  {
    index: "01",
    label: "RECRUITING / BESETZUNG",
    title: "Die richtigen\nMenschen finden.",
    text: "Wir besetzen Schlüsselrollen mit Menschen, die fachlich überzeugen und kulturell zu Ihnen passen – für nachhaltige Wirkung im System.",
    link: "Mehr über Recruiting",
    href: "/recruiting",
    asset: "PEOPLE / VISUAL",
    src: "/assets/people/recruiting.png",
    alt: "MPP im persönlichen Austausch mit Menschen aus der Pflege"
  },
  {
    index: "02",
    label: "VERTRIEBSLEISTUNG / PERFORMANCE",
    title: "Teams zu\nErgebnissen befähigen.",
    text: "Wir stärken Vertriebsorganisationen mit den richtigen Menschen, klaren Zielen und wirksamen Methoden – für messbare und planbare Leistung.",
    link: "Mehr über Vertriebsleistung",
    href: "/performance",
    asset: "PERFORMANCE / VISUAL",
    src: "/assets/performance/meeting.png",
    alt: "MPP im persönlichen Beratungsgespräch mit Kunden"
  },
  {
    index: "03",
    label: "STRUKTUREN / UNTERNEHMENSENTWICKLUNG",
    title: "Strukturen für\nnachhaltiges Wachstum.",
    text: "Wir entwickeln Organisationen, Prozesse und Führungssysteme, die Menschen stärken und Wachstum dauerhaft ermöglichen.",
    link: "Mehr über Unternehmensentwicklung",
    href: "/systems",
    asset: "SYSTEMS / VISUAL",
    src: "/assets/systems/structure.png",
    alt: "MPP in der gemeinsamen Planung mit Handwerkern"
  }
];

export function Services() {
  return (
    <section className="services section-pad" id="services">
      <div className="services__eyebrow">Menschen. Leistung. Systeme.</div>

      <div className="services__title-row">
        <h2>Drei Hebel. Ein stärkeres Unternehmen.</h2>
        <p>
          MPP verbindet Recruiting, Vertriebsleistung und Struktur zu einem System.
          <br />
          Damit aus Potenzial messbare Wirkung wird.
        </p>
      </div>

      <div className="services__grid">
        {services.map((service) => (
          <article className="service-panel" key={service.label}>
            <AssetImage
              className="service-panel__media"
              src={service.src}
              alt={service.alt}
              label={service.asset}
              note={`Upload: public${service.src}`}
            />

            <div className="service-panel__body">
              <div className="service-panel__rule">
                <span>{service.index}</span>
                <i />
                <b />
              </div>
              <p className="service-panel__label">{service.label}</p>
              <h3>
                {service.title.split("\n").map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h3>
              <p>{service.text}</p>
              <a href={service.href} className="service-panel__link">
                <i aria-hidden="true">→</i>
                <span>{service.link}</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
