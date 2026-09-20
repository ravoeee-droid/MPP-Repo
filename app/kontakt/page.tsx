import { SiteHeader } from "@/components/mpp/site-header";
import { SiteFooter } from "@/components/mpp/site-footer";

export default function KontaktPage() {
  return (
    <main id="main-content">
      <a className="skip-link" href="#main-content">Zum Inhalt springen</a>
      <SiteHeader />

      <section className="contact-page">
        <div className="contact-page__intro">
          <p className="eyebrow">Kontakt / MPP</p>
          <h1>
            Ein gutes Gespräch
            <br />
            beginnt mit <em>Klarheit.</em>
          </h1>
          <p>
            Wenn Sie eine Schlüsselrolle besetzen, Vertriebsleistung stärken oder
            Strukturen professionalisieren möchten, können Sie MPP direkt
            kontaktieren.
          </p>
        </div>

        <div className="contact-page__details">
          <a href="tel:+491764516719">
            <span>TELEFON</span>
            <strong>0176 4516719</strong>
            <i aria-hidden="true">↗</i>
          </a>
          <a href="mailto:mpp-recruit@web.de">
            <span>E-MAIL</span>
            <strong>mpp-recruit@web.de</strong>
            <i aria-hidden="true">↗</i>
          </a>
          <div>
            <span>STANDORT</span>
            <strong>Benfleetstraße 11<br />50858 Köln</strong>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
