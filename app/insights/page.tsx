import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/mpp/site-header";
import { SiteFooter } from "@/components/mpp/site-footer";
import { MiaAssistant } from "@/components/mpp/mia-assistant";
import { AssetImage } from "@/components/mpp/asset-image";

export const metadata: Metadata = {
  title: "Insights | MPP",
  description: "MPP Perspektiven zu Recruiting, Vertriebsleistung und Organisationsentwicklung."
};

const articles = [
  {
    index: "01",
    category: "PEOPLE",
    title: "Warum eine gute Besetzung nicht bei der Stellenbeschreibung beginnt.",
    intro: "Welche Verantwortung soll die Rolle wirklich tragen – und in welchem System muss die Person wirksam werden?",
    image: "/assets/insights/people.webp"
  },
  {
    index: "02",
    category: "PERFORMANCE",
    title: "Warum Leistung nicht dauerhaft von Top-Performern abhängen darf.",
    intro: "Wenn Ergebnisse an Einzelpersonen hängen, lohnt sich ein Blick auf Führung, Routinen und Vertriebsstruktur.",
    image: "/assets/insights/performance.webp"
  },
  {
    index: "03",
    category: "SYSTEMS",
    title: "Wann Wachstum zum Organisationsproblem wird.",
    intro: "Mehr Menschen und mehr Entscheidungen brauchen klare Rollen und Prozesse – sonst wächst Reibung schneller als Wirkung.",
    image: "/assets/insights/systems.webp"
  }
];

export default function InsightsPage() {
  return (
    <main id="main-content">
      <Link className="skip-link" href="#main-content">Zum Inhalt springen</Link>
      <SiteHeader />
      <MiaAssistant />

      <section className="insights-index">
        <div className="insights-index__intro">
          <p className="eyebrow">MPP Insights</p>
          <h1>
            Klarer denken.
            <br />
            <em>Besser entscheiden.</em>
          </h1>
          <p>
            Perspektiven auf die Fragen hinter Recruiting, Vertriebsleistung und
            Organisationsentwicklung – ohne Buzzword-Content.
          </p>
        </div>

        <div className="insights-index__grid">
          {articles.map((article) => (
            <article className="insights-index__card" key={article.index}>
              <div className="insights-index__meta">
                <span>{article.index}</span>
                <span>{article.category}</span>
              </div>

              <AssetImage
                className="insights-index__visual"
                src={article.image}
                alt={`MPP Insight zu ${article.category}`}
                label={`EDITORIAL / ${article.category}`}
                note={`Upload: public${article.image}`}
              />

              <h2>{article.title}</h2>
              <p>{article.intro}</p>
              <Link href="/kontakt">
                Thema besprechen <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
