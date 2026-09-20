import { SiteHeader } from "@/components/mpp/site-header";
import { SiteFooter } from "@/components/mpp/site-footer";
import { MiaAssistant } from "@/components/mpp/mia-assistant";
import { AssetImage } from "@/components/mpp/asset-image";

export default function UeberMppPage() {
  return (
    <main id="main-content">
      <a className="skip-link" href="#main-content">Zum Inhalt springen</a>
      <SiteHeader />
      <MiaAssistant />

      <section className="about-page">
        <div className="about-page__copy">
          <p className="eyebrow">Über MPP</p>
          <h1>
            Menschen.
            <br />
            Leistung.
            <br />
            <em>Systeme.</em>
          </h1>
          <p>
            MPP wird von Mattias Pedro Panthel geführt. Die öffentlich
            beschriebenen Leistungsfelder reichen von Recruiting über Vertrieb
            bis zur Unternehmensberatung. Die neue Website verbindet diese
            Felder in einer gemeinsamen Logik: People, Performance und Systems.
          </p>

          <div className="about-page__principle">
            <span>MPP PRINZIP</span>
            <strong>
              Die richtigen Menschen sind erst der Anfang.
              <br />
              Das System entscheidet, was daraus wird.
            </strong>
          </div>

          <a className="button button--primary" href="/kontakt">
            Ins Gespräch kommen <span aria-hidden="true">→</span>
          </a>
        </div>

        <AssetImage
          className="about-page__visual"
          src="/assets/founder/portrait.webp"
          alt="Mattias Pedro Panthel, Inhaber von MPP"
          label="FOUNDER / PORTRAIT"
          note="Upload: public/assets/founder/portrait.webp"
          eager
        >
          <div className="founder-golden__signature">
            <span className="founder-golden__name">Mattias Pedro Panthel</span>
            <b>MATTIAS PEDRO PANTHEL</b>
            <small>Inhaber MPP</small>
          </div>
        </AssetImage>
      </section>

      <SiteFooter />
    </main>
  );
}
