import type { Metadata } from "next";
import { SiteHeader } from "@/components/mpp/site-header";
import { SiteFooter } from "@/components/mpp/site-footer";
import { MiaAssistant } from "@/components/mpp/mia-assistant";

export const metadata: Metadata = {
  title: "Case Studies | MPP",
  description: "MPP Case Studies zu People, Performance und Systems – ausschließlich mit verifizierten Kundendaten."
};

const pillars = [
  {
    index: "01",
    name: "PEOPLE",
    title: "Die richtige Person in der richtigen Verantwortung.",
    text: "Hier wird ein realer Recruiting-Case veröffentlicht, sobald Ausgangslage, Vorgehen, Ergebnis und Freigabe vollständig belegt sind."
  },
  {
    index: "02",
    name: "PERFORMANCE",
    title: "Leistung, die im Alltag reproduzierbar wird.",
    text: "Hier wird ein realer Performance- oder Vertriebs-Case veröffentlicht, sobald belastbare Ergebnisse und Kundeneinwilligung vorliegen."
  },
  {
    index: "03",
    name: "SYSTEMS",
    title: "Strukturen, die Wachstum nicht ausbremsen.",
    text: "Hier wird ein realer Organisations-Case veröffentlicht, sobald Problem, Intervention und belegbarer Effekt dokumentiert sind."
  }
];

export default function CaseStudiesPage() {
  return (
    <main id="main-content">
      <a className="skip-link" href="#main-content">Zum Inhalt springen</a>
      <SiteHeader />
      <MiaAssistant />

      <section className="case-index">
        <div className="case-index__intro">
          <p className="eyebrow">Case Studies / Proof</p>
          <h1>
            Wirkung braucht
            <br />
            <em>Belege.</em>
          </h1>
          <p>
            MPP veröffentlicht hier keine erfundenen Erfolgszahlen. Jede Case
            Study folgt demselben Muster: Ausgangslage, Rolle des MPP-Ansatzes,
            Ergebnis und nachvollziehbarer Nachweis.
          </p>
        </div>

        <div className="case-index__grid">
          {pillars.map((item) => (
            <article className="case-index__card" key={item.name}>
              <div className="case-index__meta">
                <span>{item.index}</span>
                <span>{item.name}</span>
              </div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <span className="case-index__state">VERIFIED CASE REQUIRED</span>
            </article>
          ))}
        </div>

        <div className="case-index__cta">
          <span>Sie möchten wissen, ob ein ähnlicher Ansatz bei Ihnen sinnvoll ist?</span>
          <a className="button button--primary" href="/#diagnostic">
            Growth Diagnostic starten <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
