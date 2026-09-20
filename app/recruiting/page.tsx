import { SiteHeader } from "@/components/mpp/site-header";
import { SiteFooter } from "@/components/mpp/site-footer";
import { MiaAssistant } from "@/components/mpp/mia-assistant";

export default function RecruitingPage() {
  return (
    <main>
      <SiteHeader />
      <MiaAssistant />

      <section className="service-detail service-detail--people">
        <div className="service-detail__eyebrow">01 / PEOPLE · RECRUITING</div>
        <div className="service-detail__hero">
          <div>
            <h1>
              Die richtigen Menschen.
              <br />
              <em>In den richtigen Rollen.</em>
            </h1>
            <p>
              Recruiting ist bei MPP kein isolierter Lebenslauf-Prozess. Es beginnt
              mit der Frage, welche Verantwortung eine Rolle wirklich tragen soll
              und welcher Mensch fachlich wie kulturell dazu passt.
            </p>
            <a className="button button--primary" href="/#contact">
              Schlüsselrolle besprechen <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="service-detail__visual asset-slot" aria-hidden="true">
            <div className="asset-slot__meta">
              <span>PEOPLE / RECRUITING</span>
              <strong>Finales Recruiting-Asset folgt.</strong>
            </div>
          </div>
        </div>

        <div className="service-detail__principles">
          <article><span>01</span><h2>Rolle klären</h2><p>Aufgabe, Verantwortung und Umfeld zuerst verstehen.</p></article>
          <article><span>02</span><h2>Passung prüfen</h2><p>Nicht nur Erfahrung, sondern Wirkung im realen System betrachten.</p></article>
          <article><span>03</span><h2>Integration denken</h2><p>Besetzung endet nicht mit der Unterschrift, sondern mit wirksamer Verantwortung.</p></article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
