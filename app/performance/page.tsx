import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/mpp/site-header";
import { SiteFooter } from "@/components/mpp/site-footer";
import { MiaAssistant } from "@/components/mpp/mia-assistant";
import { AssetImage } from "@/components/mpp/asset-image";
import { ServiceDetailBody } from "@/components/mpp/service-detail-body";

export const metadata: Metadata = {
  title: "Performance & Vertrieb | MPP",
  description: "MPP unterstützt Vertriebsleistung mit praxisnaher Vertriebsunterstützung und Coaching."
};

export default function PerformancePage() {
  return (
    <main id="main-content">
      <Link className="skip-link" href="#main-content">Zum Inhalt springen</Link>
      <SiteHeader />
      <MiaAssistant />

      <section className="service-detail service-detail--performance">
        <div className="service-detail__eyebrow">02 / PERFORMANCE · VERTRIEB</div>
        <div className="service-detail__hero">
          <div>
            <h1>
              Leistung ist
              <br />
              <em>keine Zufälligkeit.</em>
            </h1>
            <p>
              MPP bietet Vertriebsunterstützung und Coaching an. Die
              Performance-Perspektive übersetzt das in ein klares Ziel: Leistung
              soll im Alltag nachvollziehbar, entwickelbar und weniger abhängig
              von einzelnen Top-Performern werden.
            </p>
            <Link className="button button--primary" href="/kontakt?fokus=performance">
              Performance-Hebel besprechen <span aria-hidden="true">→</span>
            </Link>
          </div>
          <AssetImage
            className="service-detail__visual"
            src="/assets/performance/meeting.png"
            alt="MPP Gespräch zu Vertriebsleistung und Performance"
            label="PERFORMANCE / VERTRIEB"
            note="Upload: public/assets/performance/meeting.png"
            eager
          />
        </div>

        <div className="service-detail__principles">
          <article><span>01</span><h2>Klarheit</h2><p>Erwartungen, Ziele und Verantwortlichkeiten verständlich machen.</p></article>
          <article><span>02</span><h2>Führung</h2><p>Leistung nicht nur fordern, sondern systematisch ermöglichen.</p></article>
          <article><span>03</span><h2>Wirkung</h2><p>Methoden und Routinen auf reale Ergebnisse im Alltag ausrichten.</p></article>
        </div>
      </section>

      <ServiceDetailBody
        axis="performance"
        chapter="PERFORMANCE / DIE EIGENTLICHE FRAGE"
        statement="Nicht: Wie motivieren wir mehr? Sondern: Was macht gute Leistung wiederholbar?"
        intro="Wenn Ergebnisse dauerhaft von einzelnen Top-Performern abhängen, fehlt selten nur Motivation. Häufig fehlen Klarheit, gemeinsame Standards oder ein Führungsrhythmus, der Leistung im Alltag unterstützt."
        pains={[
          {
            title: "Erfolg steckt in Köpfen.",
            text: "Gute Verkäufer oder Führungskräfte wissen, was funktioniert – das Wissen wird aber nicht systematisch übertragbar."
          },
          {
            title: "Ziele sind da, Orientierung fehlt.",
            text: "Kennzahlen existieren, aber Prioritäten, Verhalten und Entscheidungslogik sind nicht klar genug miteinander verbunden."
          },
          {
            title: "Coaching bleibt punktuell.",
            text: "Einzelne Trainings helfen kurzfristig, greifen aber nicht dauerhaft in Routinen und Führungsarbeit ein."
          }
        ]}
        phases={[
          {
            title: "Leistungslogik verstehen",
            text: "Wir machen sichtbar, was heute gute Ergebnisse erzeugt und wo Wirkung verloren geht."
          },
          {
            title: "Standards und Führung ausrichten",
            text: "Ziele, Routinen und Verantwortlichkeiten werden so klar, dass Leistung entwickelbar wird."
          },
          {
            title: "Im Alltag verankern",
            text: "Die relevanten Methoden werden in echte Arbeits- und Führungsrhythmen übersetzt."
          }
        ]}
        outcomes={[
          {
            title: "Mehr Orientierung",
            text: "Teams wissen klarer, welche Handlungen und Prioritäten wirklich Wirkung erzeugen."
          },
          {
            title: "Weniger Abhängigkeit",
            text: "Erfolg hängt weniger ausschließlich an einzelnen Leistungsträgern."
          },
          {
            title: "Bessere Entwicklungsbasis",
            text: "Führung und Coaching können konkreter an realem Verhalten und Ergebnissen ansetzen."
          }
        ]}
        visualOne={{
          src: "/assets/performance/detail-rhythm.png",
          alt: "MPP Arbeit an Vertriebs- und Führungsrhythmen",
          label: "PERFORMANCE / RHYTHM"
        }}
        visualTwo={{
          src: "/assets/performance/detail-coaching.png",
          alt: "MPP Coaching im Vertriebsumfeld",
          label: "PERFORMANCE / COACHING"
        }}
      />

      <SiteFooter />
    </main>
  );
}
