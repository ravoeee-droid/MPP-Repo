import { SiteHeader } from "@/components/mpp/site-header";
import { SiteFooter } from "@/components/mpp/site-footer";

export default function ImpressumPage() {
  return (
    <main id="main-content">
      <a className="skip-link" href="#main-content">Zum Inhalt springen</a>
      <SiteHeader />
      <section className="legal-page">
        <p className="eyebrow">Rechtliches</p>
        <h1>Impressum</h1>

        <div className="legal-page__content">
          <section>
            <h2>Angaben gemäß § 5 DDG</h2>
            <p>
              MPP - Recruit<br />
              Inhaber: Mattias Pedro Panthel<br />
              Benfleetstraße 11<br />
              50858 Köln, Deutschland
            </p>
          </section>

          <section>
            <h2>Kontakt</h2>
            <p>
              Telefon: <a href="tel:+491764516719">0176 4516719</a><br />
              E-Mail: <a href="mailto:mpp-recruit@web.de">mpp-recruit@web.de</a><br />
              Website: mpp-recruit.com
            </p>
          </section>

          <section>
            <h2>Verantwortlich für den Inhalt</h2>
            <p>Mattias Pedro Panthel</p>
          </section>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
