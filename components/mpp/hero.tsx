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
          <div
            className="hero__visual asset-slot"
            role="img"
            aria-label="Platzhalter für das freigegebene Founder-Hero-Bild"
          >
            <div className="asset-slot__meta">
              <span>FOUNDER / HERO</span>
              <strong>Finales Bild wird aus dem Asset-Paket eingesetzt.</strong>
            </div>
            <div className="hero__image-caption">
              <span>Unternehmen für morgen.</span>
              <i aria-hidden="true" />
            </div>
          </div>
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
