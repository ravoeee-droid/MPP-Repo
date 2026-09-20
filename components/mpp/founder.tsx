import { AssetImage } from "@/components/mpp/asset-image";

export function Founder() {
  return (
    <section className="founder section-pad" id="founder">
      <div className="founder-golden">
        <div className="founder-golden__copy">
          <p className="eyebrow">Menschen. Leistung. Systeme.</p>

          <h2>
            Unternehmen
            <br />
            verändern sich durch
            <br />
            Menschen, die
            <br />
            Verantwortung
            <br />
            übernehmen.
          </h2>

          <div className="founder-golden__principle">
            <i aria-hidden="true">→</i>
            <div>
              <span>MPP PRINZIP</span>
              <p>
                Die richtigen Menschen sind erst der Anfang.
                <br />
                Erst Systeme machen aus Potenzial nachhaltige Leistung.
              </p>
            </div>
          </div>

          <div className="founder-golden__rule" />

          <p className="founder-golden__body">
            MPP verbindet Recruiting, Vertriebsleistung und Unternehmensberatung.
            Im Mittelpunkt stehen passende Menschen, wirksame Leistung und
            Strukturen, die Entwicklung im Alltag tragen.
          </p>

          <div className="founder-golden__actions">
            <a className="button button--primary" href="#contact">
              Lassen Sie uns ins Gespräch kommen <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="/ueber-mpp">
              Mehr über mich
            </a>
          </div>
        </div>

        <AssetImage
          className="founder-golden__visual"
          src="/assets/founder/portrait.png"
          alt="Mattias Pedro Panthel, Inhaber von MPP"
          label="FOUNDER / PORTRAIT"
          note="Upload: public/assets/founder/portrait.png"
          quality={100}
          sizes="(max-width: 760px) 100vw, (max-width: 1400px) 58vw, 900px"
        >
          <div className="founder-golden__signature">
            <span className="founder-golden__name">Mattias Pedro Panthel</span>
            <b>MATTIAS PEDRO PANTHEL</b>
            <small>Inhaber MPP</small>
          </div>

          <div className="hero__image-caption">
            <span>Unternehmen für morgen.</span>
            <i aria-hidden="true" />
          </div>
        </AssetImage>
      </div>
    </section>
  );
}
