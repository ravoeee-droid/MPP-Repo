import { SiteHeader } from "@/components/mpp/site-header";
import { SiteFooter } from "@/components/mpp/site-footer";
import { MiaAssistant } from "@/components/mpp/mia-assistant";

export default function PerformancePage() {
  return (
    <main>
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
            <a className="button button--primary" href="/#contact">
              Performance-Hebel besprechen <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="service-detail__visual asset-slot" aria-hidden="true">
            <div className="asset-slot__meta">
              <span>PERFORMANCE / VERTRIEB</span>
              <strong>Finales Performance-Asset folgt.</strong>
            </div>
          </div>
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
