import type { Metadata } from "next";
import { SiteHeader } from "@/components/mpp/site-header";
import { SiteFooter } from "@/components/mpp/site-footer";

export const metadata: Metadata = {
  title: "Kontakt | MPP",
  description: "Kontakt zu MPP in Köln: Telefon, E-Mail und direkter Einstieg in das Erstgespräch."
};

const focusLabels: Record<string, string> = {
  people: "People / Recruiting",
  performance: "Performance / Vertrieb",
  systems: "Systems / Organisation"
};

export default async function KontaktPage({
  searchParams
}: {
  searchParams: Promise<{ fokus?: string }>;
}) {
  const params = await searchParams;
  const focus = params.fokus && focusLabels[params.fokus] ? focusLabels[params.fokus] : null;

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

          {focus ? (
            <div className="contact-page__focus">
              <span>GROWTH DIAGNOSTIC</span>
              <strong>Ihr aktueller Schwerpunkt: {focus}</strong>
              <p>
                Diese Einordnung ist nur eine erste Orientierung. Im Gespräch wird
                geprüft, ob dort tatsächlich der stärkste Hebel liegt.
              </p>
            </div>
          ) : null}
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
