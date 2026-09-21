export function FinalCta() {
  return (
    <section className="final-cta" id="contact">
      <div className="final-cta__inner">
        <div className="section-kicker section-kicker--dark">
          <span>15 / NÄCHSTER SCHRITT</span>
          <span>Kein Pitch-Marathon. Erst Klarheit.</span>
        </div>

        <div className="final-cta__grid">
          <div>
            <p className="eyebrow eyebrow--dark">Der erste Termin</p>
            <h2>
              Finden wir heraus,
              <br />
              <em>wo Ihr größter Hebel liegt.</em>
            </h2>
          </div>

          <div className="final-cta__steps">
            <div><span>01</span><p>Ausgangslage verstehen</p></div>
            <div><span>02</span><p>2–3 größte Hebel identifizieren</p></div>
            <div><span>03</span><p>Nächsten sinnvollen Schritt definieren</p></div>
            <a className="button button--primary" href="/kontakt">
              Erstgespräch anfragen <span aria-hidden="true">→</span>
            </a>
            <a className="text-link text-link--dark" href="#diagnostic">
              Noch unsicher? Growth Diagnostic starten <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="final-cta__growth">
          <span className="final-cta__node" />
          <span>PEOPLE</span>
          <i />
          <span>PERFORMANCE</span>
          <i />
          <span>SYSTEMS</span>
          <i />
          <strong>GROWTH</strong>
        </div>
      </div>
    </section>
  );
}
