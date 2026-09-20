import { AssetImage } from "@/components/mpp/asset-image";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">Menschen. Leistung. Systeme.</p>

          <h1>
            Die richtigen
            <br />
            Menschen sind
            <br />
            erst der Anfang.
          </h1>

          <p className="hero__lede">
            MPP bringt die richtigen Menschen in Rollen,
            <br className="desktop-only" />
            stärkt Leistung im System und baut Strukturen,
            <br className="desktop-only" />
            in denen Wachstum möglich wird.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#diagnostic">
              Potenziale ins Wirken bringen <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="#operating-system">
              Mehr über unseren Ansatz
            </a>
          </div>
        </div>

        <div className="hero__visual-wrap">
          <AssetImage
            className="hero__visual"
            src="/assets/founder/hero.png"
            alt="Mattias Pedro Panthel im Gespräch"
            label="FOUNDER / HERO"
            note="Upload: public/assets/founder/hero.png"
            eager
            quality={100}
            sizes="(max-width: 760px) 100vw, (max-width: 1400px) 58vw, 900px"
          >
            <div className="hero__image-caption">
              <span>Unternehmen für morgen.</span>
              <i aria-hidden="true" />
            </div>
          </AssetImage>
        </div>
      </div>

      <div className="operating-line operating-line--hero" aria-label="MPP Operating Line">
        <div className="operating-line__rail" />
        <div className="operating-line__item">
          <span className="operating-line__node" />
          <div>
            <b>PEOPLE</b>
            <small>Talente verbinden.<br />Verantwortung ermöglichen.</small>
          </div>
        </div>
        <div className="operating-line__item">
          <span className="operating-line__node" />
          <div>
            <b>PERFORMANCE</b>
            <small>Leistung stärken.<br />Wirkung steigern.</small>
          </div>
        </div>
        <div className="operating-line__item">
          <span className="operating-line__node" />
          <div>
            <b>SYSTEMS</b>
            <small>Strukturen entwickeln.<br />Wachstum ermöglichen.</small>
          </div>
        </div>
        <div className="operating-line__descriptor">
          <span>KLARER</span>
          <span>MENSCHLICHER</span>
          <span>WIRKSAMER</span>
        </div>
      </div>
    </section>
  );
}
