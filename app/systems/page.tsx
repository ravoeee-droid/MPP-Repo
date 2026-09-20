import type { Metadata } from "next";
import { SiteHeader } from "@/components/mpp/site-header";
import { SiteFooter } from "@/components/mpp/site-footer";
import { MiaAssistant } from "@/components/mpp/mia-assistant";

export const metadata: Metadata = {
  title: "Unternehmensberatung & Systems | MPP",
  description: "MPP Unternehmensberatung für Prozessoptimierung, Organisationsentwicklung und strategisches Personalmanagement."
};

export default function SystemsPage() {
  return (
    <main id="main-content">
      <a className="skip-link" href="#main-content">Zum Inhalt springen</a>
      <SiteHeader />
      <MiaAssistant />

      <section className="service-detail service-detail--systems">
        <div className="service-detail__eyebrow">03 / SYSTEMS · UNTERNEHMENSENTWICKLUNG</div>
        <div className="service-detail__hero">
          <div>
            <h1>
              Strukturen schaffen
              <br />
              <em>Freiheit.</em>
            </h1>
            <p>
              MPP berät laut eigener Unternehmensseite zu Prozessoptimierung,
              Organisationsentwicklung und strategischem Personalmanagement.
              Systems macht daraus die organisatorische Perspektive: Rollen,
              Prozesse und Entscheidungen müssen Wachstum tragen können.
            </p>
            <a className="button button--primary" href="/#contact">
              Strukturen besprechen <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="service-detail__visual asset-slot" aria-hidden="true">
            <div className="asset-slot__meta">
              <span>SYSTEMS / ORGANISATION</span>
              <strong>Finales Systems-Asset folgt.</strong>
            </div>
          </div>
        </div>

        <div className="service-detail__principles">
          <article><span>01</span><h2>Rollen</h2><p>Verantwortung klar zuordnen und Schnittstellen sichtbar machen.</p></article>
          <article><span>02</span><h2>Prozesse</h2><p>Abläufe stabilisieren, ohne unnötige Bürokratie aufzubauen.</p></article>
          <article><span>03</span><h2>Entscheidungen</h2><p>Strukturen schaffen, die Tempo und Verantwortung gleichzeitig ermöglichen.</p></article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
