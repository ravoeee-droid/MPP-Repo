import type { Metadata } from "next";
import { SiteHeader } from "@/components/mpp/site-header";
import { SiteFooter } from "@/components/mpp/site-footer";

export const metadata: Metadata = {
  title: "Datenschutz | MPP",
  description: "Datenschutzinformationen für die neue MPP Website."
};

export default function DatenschutzPage() {
  return (
    <main id="main-content">
      <a className="skip-link" href="#main-content">Zum Inhalt springen</a>
      <SiteHeader />

      <section className="legal-page">
        <p className="eyebrow">Rechtliches</p>
        <h1>Datenschutz</h1>

        <div className="legal-page__content">
          <section>
            <h2>Status dieser Seite</h2>
            <p>
              Diese neue MPP-Website befindet sich noch im Aufbau. Die finale
              Datenschutzerklärung wird vor dem Produktionsstart vollständig mit
              den tatsächlich eingesetzten Diensten, Formularen, Analytics-,
              Hosting- und KI-Komponenten abgeglichen.
            </p>
          </section>

          <section>
            <h2>Aktuell veröffentlichte Datenschutzerklärung</h2>
            <p>
              Bis zur finalen Migration bleibt die bestehende Datenschutzerklärung
              von MPP die Referenz.
            </p>
            <p>
              <a
                className="text-link"
                href="https://www.mpp-recruit.com/datenschutzerklarung/"
                target="_blank"
                rel="noreferrer"
              >
                Bestehende Datenschutzerklärung öffnen <span aria-hidden="true">↗</span>
              </a>
            </p>
          </section>

          <section>
            <h2>Vor Launch noch zu prüfen</h2>
            <p>
              Vercel Hosting, Kontakt-/Terminflow, Analytics, Consent Management,
              eingebundene Drittanbieter, MPP Growth Diagnostic und die
              KI-Assistentin Mia werden erst nach der finalen technischen
              Entscheidung in die Datenschutzerklärung aufgenommen.
            </p>
          </section>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
