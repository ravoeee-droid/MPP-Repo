import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/mpp/site-header";
import { SiteFooter } from "@/components/mpp/site-footer";
import { MiaAssistant } from "@/components/mpp/mia-assistant";
import { AssetImage } from "@/components/mpp/asset-image";

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
              MPP bietet Vertriebsunterstützung und Coaching an. Die neue
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
            src="/assets/performance/meeting.webp"
            alt="MPP Gespräch zu Vertriebsleistung und Performance"
            label="PERFORMANCE / VERTRIEB"
            note="Upload: public/assets/performance/meeting.webp"
            eager
          />
        </div>

        <div className="service-detail__principles">
          <article><span>01</span><h2>Klarheit</h2><p>Erwartungen, Ziele und Verantwortlichkeiten verständlich machen.</p></article>
          <article><span>02</span><h2>Führung</h2><p>Leistung nicht nur fordern, sondern systematisch ermöglichen.</p></article>
          <article><span>03</span><h2>Wirkung</h2><p>Methoden und Routinen auf reale Ergebnisse im Alltag ausrichten.</p></article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
