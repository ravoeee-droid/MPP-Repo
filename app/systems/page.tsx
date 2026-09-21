import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/mpp/site-header";
import { SiteFooter } from "@/components/mpp/site-footer";
import { MiaAssistant } from "@/components/mpp/mia-assistant";
import { AssetImage } from "@/components/mpp/asset-image";
import { ServiceDetailBody } from "@/components/mpp/service-detail-body";

export const metadata: Metadata = {
  title: "Unternehmensberatung & Systems | MPP",
  description: "MPP Unternehmensberatung für Prozessoptimierung, Organisationsentwicklung und strategisches Personalmanagement."
};

export default function SystemsPage() {
  return (
    <main id="main-content">
      <Link className="skip-link" href="#main-content">Zum Inhalt springen</Link>
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
              MPP berät öffentlich beschrieben zu Prozessoptimierung,
              Organisationsentwicklung und strategischem Personalmanagement.
              Systems macht daraus die organisatorische Perspektive: Rollen,
              Prozesse und Entscheidungen müssen Wachstum tragen können.
            </p>
            <Link className="button button--primary" href="/kontakt?fokus=systems">
              Strukturen besprechen <span aria-hidden="true">→</span>
            </Link>
          </div>
          <AssetImage
            className="service-detail__visual"
            src="/assets/editorial/handwerk-planung.webp"
            alt="MPP im Austausch mit Handwerkern zu Rollen und Prozessen"
            label="SYSTEMS / REAL WORLD"
            note="MPP Editorial Asset"
            eager
          />
        </div>

        <div className="service-detail__principles">
          <article><span>01</span><h2>Rollen</h2><p>Verantwortung klar zuordnen und Schnittstellen sichtbar machen.</p></article>
          <article><span>02</span><h2>Prozesse</h2><p>Abläufe stabilisieren, ohne unnötige Bürokratie aufzubauen.</p></article>
          <article><span>03</span><h2>Entscheidungen</h2><p>Strukturen schaffen, die Tempo und Verantwortung gleichzeitig ermöglichen.</p></article>
        </div>
      </section>

      <ServiceDetailBody
        axis="systems"
        chapter="SYSTEMS / DIE EIGENTLICHE FRAGE"
        statement="Nicht: Welche Prozesse fehlen? Sondern: Wo bremst die Organisation ihre eigenen Menschen aus?"
        intro="Mit Wachstum steigt die Zahl an Schnittstellen, Entscheidungen und Abhängigkeiten. Wenn Verantwortlichkeiten und Prozesse nicht mitwachsen, wird aus Tempo schnell Reibung."
        pains={[
          {
            title: "Entscheidungen hängen an Einzelnen.",
            text: "Zu viele Themen laufen über dieselben Personen – dadurch werden Geschwindigkeit und Verantwortung gleichzeitig begrenzt."
          },
          {
            title: "Prozesse existieren nur informell.",
            text: "Abläufe funktionieren, solange die richtigen Menschen verfügbar sind, sind aber schwer übertragbar oder skalierbar."
          },
          {
            title: "Rollen überlappen.",
            text: "Verantwortung ist verteilt, aber nicht eindeutig – dadurch entstehen Schleifen, Rückfragen und unnötige Abstimmung."
          }
        ]}
        phases={[
          {
            title: "System sichtbar machen",
            text: "Rollen, Schnittstellen und Entscheidungswege werden gemeinsam transparent."
          },
          {
            title: "Reibung priorisieren",
            text: "Nicht jeder Prozess wird optimiert – zuerst die Punkte, die Menschen und Wachstum am stärksten bremsen."
          },
          {
            title: "Struktur im Alltag verankern",
            text: "Verantwortung und Abläufe werden so definiert, dass sie tatsächlich gelebt werden können."
          }
        ]}
        outcomes={[
          {
            title: "Klarere Verantwortung",
            text: "Menschen wissen besser, was sie entscheiden und wofür sie wirklich verantwortlich sind."
          },
          {
            title: "Weniger operative Reibung",
            text: "Abstimmung wird dort reduziert, wo sie keinen zusätzlichen Wert erzeugt."
          },
          {
            title: "Mehr organisatorische Tragfähigkeit",
            text: "Wachstum kann auf klareren Rollen und wiederholbaren Abläufen aufbauen."
          }
        ]}
        visualOne={{
          src: "/assets/systems/detail-mapping.png",
          alt: "MPP Mapping von Rollen und Organisationsstrukturen",
          label: "SYSTEMS / MAPPING"
        }}
        visualTwo={{
          src: "/assets/systems/detail-process.png",
          alt: "MPP Prozess- und Organisationsarbeit",
          label: "SYSTEMS / PROCESS"
        }}
      />

      <SiteFooter />
    </main>
  );
}
