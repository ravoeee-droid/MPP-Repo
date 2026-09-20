import { AssetImage } from "@/components/mpp/asset-image";

const pillars = [
  {
    number: "01",
    name: "People",
    body: "Die richtigen Menschen\nin die richtigen Rollen.",
    icon: "people"
  },
  {
    number: "02",
    name: "Performance",
    body: "Leistung im Alltag,\nbesonders im Vertrieb,\nwirksam machen.",
    icon: "performance"
  },
  {
    number: "03",
    name: "Systems",
    body: "Strukturen, Prozesse und\nFührung schaffen, die\nWachstum tragen.",
    icon: "systems"
  }
];

function PillarIcon({ type }: { type: string }) {
  if (type === "people") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="13" r="5" />
        <circle cx="12" cy="18" r="4" />
        <circle cx="36" cy="18" r="4" />
        <path d="M15 37v-5a9 9 0 0 1 18 0v5M5 37v-5a7 7 0 0 1 10-6M43 37v-5a7 7 0 0 0-10-6" />
      </svg>
    );
  }

  if (type === "performance") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M9 37V28M18 37V21M27 37V14M36 37V8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="m24 7 15 8-15 8-15-8 15-8Z" />
      <path d="m9 23 15 8 15-8M9 31l15 8 15-8" />
    </svg>
  );
}

export function OperatingSystem() {
  return (
    <section className="os-section section-pad" id="operating-system">
      <div className="os-hero">
        <div className="os-hero__copy">
          <p className="eyebrow">Unser Ansatz</p>
          <h2>
            So entsteht
            <br />
            Wachstum mit System.
          </h2>
          <p>
            MPP ist das Growth Operating System für Organisationen, die mehr
            erreichen wollen. Wir bringen die richtigen Menschen in die richtigen
            Rollen, machen Leistung im Alltag wirksam und schaffen Strukturen,
            die nachhaltiges Wachstum tragen.
          </p>
        </div>

        <AssetImage
          className="os-hero__visual"
          src="/assets/systems/approach-workshop.webp"
          alt="MPP Workshop zur Organisationsentwicklung"
          label="APPROACH / WORKSHOP"
          note="Upload: public/assets/systems/approach-workshop.webp"
        />
      </div>

      <div className="os-flow">
        <div className="os-flow__rail" aria-hidden="true" />
        <div className="os-flow__side os-flow__side--left">
          <span>POTENZIALE</span>
          <span>INS WIRKEN</span>
          <span>BRINGEN</span>
          <i />
        </div>

        {pillars.map((pillar) => (
          <article className="os-pillar" key={pillar.name}>
            <span className="os-pillar__number">{pillar.number}</span>
            <div className="os-pillar__orbit">
              <div className="os-pillar__icon">
                <PillarIcon type={pillar.icon} />
              </div>
            </div>
            <h3>{pillar.name}</h3>
            <p>
              {pillar.body.split("\n").map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
          </article>
        ))}

        <div className="os-flow__side os-flow__side--right">
          <span>KLARER</span>
          <span>MENSCHLICHER</span>
          <span>WIRKSAMER</span>
          <strong>GEMEINSAM<br />MORGEN BAUEN</strong>
          <i />
        </div>
      </div>

      <div className="os-actions">
        <a className="button button--primary" href="#contact">
          Gemeinsam morgen bauen <span aria-hidden="true">→</span>
        </a>
        <a className="text-link" href="#services">
          Mehr über unseren Ansatz
        </a>
        <div className="os-actions__signoff">
          <i />
          <span>Unternehmen für morgen.</span>
        </div>
      </div>
    </section>
  );
}
