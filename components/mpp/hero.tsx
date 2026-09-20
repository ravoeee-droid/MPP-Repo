export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">Menschen. Leistung. Systeme.</p>

          <h1>
            Die richtigen Menschen
            <br />
            sind erst <em>der Anfang.</em>
          </h1>

          <p className="hero__lede">
            MPP bringt die richtigen Menschen in die richtigen Rollen, stärkt
            Leistung im System und schafft Strukturen, in denen Wachstum möglich
            wird.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#diagnostic">
              Wachstumspotenziale erkennen <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="#operating-system">
              Unser Ansatz <span aria-hidden="true">↘</span>
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
          </div>

          <div className="hero__caption">
            <span>01</span>
            <p>Menschen sind der Anfang. Das System entscheidet, was daraus wird.</p>
          </div>
        </div>
      </div>

      <div className="operating-line operating-line--hero" aria-label="MPP Operating Line">
        <div className="operating-line__rail" />
        <div className="operating-line__item">
          <span className="operating-line__node" />
          <div><b>PEOPLE</b><small>Richtige Menschen. Richtige Rollen.</small></div>
        </div>
        <div className="operating-line__item">
          <span className="operating-line__node" />
          <div><b>PERFORMANCE</b><small>Leistung wird systematisch wirksam.</small></div>
        </div>
        <div className="operating-line__item">
          <span className="operating-line__node" />
          <div><b>SYSTEMS</b><small>Strukturen tragen das Wachstum.</small></div>
        </div>
        <div className="operating-line__item operating-line__item--growth">
          <span className="operating-line__node" />
          <div><b>GROWTH</b><small>Nachhaltig statt zufällig.</small></div>
        </div>
      </div>
    </section>
  );
}
