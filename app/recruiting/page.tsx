import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/mpp/site-header";
import { SiteFooter } from "@/components/mpp/site-footer";
import { MiaAssistant } from "@/components/mpp/mia-assistant";
import { AssetImage } from "@/components/mpp/asset-image";
import { ServiceDetailBody } from "@/components/mpp/service-detail-body";

export const metadata: Metadata = {
  title: "Recruiting | MPP",
  description: "MPP Recruiting: Schlüsselrollen passgenau besetzen und Menschen mit Unternehmen verbinden."
};

export default function RecruitingPage() {
  return (
    <main id="main-content">
      <Link className="skip-link" href="#main-content">Zum Inhalt springen</Link>
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
            <Link className="button button--primary" href="/kontakt?fokus=people">
              Schlüsselrolle besprechen <span aria-hidden="true">→</span>
            </Link>
          </div>
          <AssetImage
            className="service-detail__visual"
            src="/assets/editorial/pflege-alltag.webp"
            alt="MPP Recruiting im persönlichen Austausch mit einer Pflegekraft"
            label="PEOPLE / REAL WORLD"
            note="MPP Editorial Asset"
            eager
          />
        </div>

        <div className="service-detail__principles">
          <article><span>01</span><h2>Rolle klären</h2><p>Aufgabe, Verantwortung und Umfeld zuerst verstehen.</p></article>
          <article><span>02</span><h2>Passung prüfen</h2><p>Nicht nur Erfahrung, sondern Wirkung im realen System betrachten.</p></article>
          <article><span>03</span><h2>Integration denken</h2><p>Besetzung endet nicht mit der Unterschrift, sondern mit wirksamer Verantwortung.</p></article>
        </div>
      </section>

      <ServiceDetailBody
        axis="people"
        chapter="PEOPLE / DIE EIGENTLICHE FRAGE"
        statement="Nicht: Wer kann den Job? Sondern: Wer kann diese Verantwortung wirklich tragen?"
        intro="Eine Besetzung wird teuer, wenn Rolle, Erwartung und Umfeld vor der Suche nicht sauber geklärt sind. MPP betrachtet deshalb zuerst das System, in das die Person hineinwirken soll."
        pains={[
          {
            title: "Die Rolle ist zu unscharf.",
            text: "Aufgaben sind beschrieben, aber Verantwortung, Entscheidungsraum und Erfolgskriterien bleiben offen."
          },
          {
            title: "Lebenslauf ersetzt Passung.",
            text: "Fachliche Stationen wirken richtig, aber Führungsstil, Umfeld und reale Wirkung wurden nicht konsequent geprüft."
          },
          {
            title: "Der Prozess endet zu früh.",
            text: "Mit der Unterschrift ist die Suche beendet – obwohl die eigentliche Wirkung erst in den ersten Monaten entsteht."
          }
        ]}
        phases={[
          {
            title: "Rollenbild schärfen",
            text: "Aufgabe, Verantwortung, Umfeld und Erfolgskriterien werden zuerst konkret."
          },
          {
            title: "Passung systematisch prüfen",
            text: "Fachliche Eignung und Wirkung im realen Unternehmenskontext werden zusammen betrachtet."
          },
          {
            title: "Übergang sauber gestalten",
            text: "Der Start wird so gedacht, dass Verantwortung schnell und realistisch übernommen werden kann."
          }
        ]}
        outcomes={[
          {
            title: "Mehr Klarheit vor der Suche",
            text: "Entscheider wissen genauer, welche Person tatsächlich gebraucht wird."
          },
          {
            title: "Weniger Zufall in der Auswahl",
            text: "Passung wird nachvollziehbarer als ein reines Bauchgefühl oder CV-Matching."
          },
          {
            title: "Bessere Grundlage für Wirkung",
            text: "Die Rolle ist so vorbereitet, dass neue Verantwortung im Alltag greifen kann."
          }
        ]}
        visualOne={{
          src: "/assets/people/detail-role.png",
          alt: "MPP Gespräch zur Schärfung einer Schlüsselrolle",
          label: "PEOPLE / ROLE CLARITY"
        }}
        visualTwo={{
          src: "/assets/people/detail-selection.png",
          alt: "MPP Auswahl- und Recruitingprozess",
          label: "PEOPLE / SELECTION"
        }}
      />

      <SiteFooter />
    </main>
  );
}
