import type { Metadata } from "next";
import { SiteHeader } from "@/components/mpp/site-header";
import { SiteFooter } from "@/components/mpp/site-footer";

export const metadata: Metadata = {
  title: "Kontakt | MPP",
  description: "Kontakt zu MPP in Köln: Telefon, E-Mail und direkter Einstieg in das Erstgespräch."
};

const focusCopy = {
  people: {
    eyebrow: "PEOPLE / SCHLÜSSELROLLEN",
    headline: "Die richtige Rolle.\nDer richtige Mensch.",
    intro:
      "Sie kommen aus dem Growth Diagnostic mit dem stärksten Hebel People. Im ersten Gespräch klären wir, welche Rolle wirklich gebraucht wird, welche Verantwortung sie trägt und welche Passung entscheidend ist."
  },
  performance: {
    eyebrow: "PERFORMANCE / VERTRIEB",
    headline: "Leistung sichtbar machen.\nWirkung verstärken.",
    intro:
      "Sie kommen aus dem Growth Diagnostic mit dem stärksten Hebel Performance. Im ersten Gespräch schauen wir darauf, wo Leistung verloren geht und welche Führungs-, Vertriebs- oder Umsetzungshebel zuerst Sinn ergeben."
  },
  systems: {
    eyebrow: "SYSTEMS / STRUKTUREN",
    headline: "Klarere Strukturen.\nMehr Beweglichkeit.",
    intro:
      "Sie kommen aus dem Growth Diagnostic mit dem stärksten Hebel Systems. Im ersten Gespräch machen wir sichtbar, wo Rollen, Prozesse oder Entscheidungen aktuell Reibung erzeugen."
  }
} as const;

type FocusKey = keyof typeof focusCopy;

export default async function KontaktPage({
  searchParams
}: {
  searchParams: Promise<{ fokus?: string }>;
}) {
  const params = await searchParams;
  const focus = params.fokus as FocusKey | undefined;
  const context = focus && focus in focusCopy ? focusCopy[focus] : null;

  return (
    <main id="main-content">
      <a className="skip-link" href="#main-content">Zum Inhalt springen</a>
      <SiteHeader />

      <section className="contact-page">
        <div className="contact-page__intro">
          <p className="eyebrow">{context?.eyebrow ?? "Kontakt / MPP"}</p>
          <h1>
            {context ? (
              context.headline.split("\n").map((line, index) => (
                <span key={line}>
                  {line}
                  {index === 0 && <br />}
                </span>
              ))
            ) : (
              <>
                Ein gutes Gespräch
                <br />
                beginnt mit <em>Klarheit.</em>
              </>
            )}
          </h1>
          <p>
            {context?.intro ??
              "Wenn Sie eine Schlüsselrolle besetzen, Vertriebsleistung stärken oder Strukturen professionalisieren möchten, können Sie MPP direkt kontaktieren."}
          </p>

          {context && (
            <div className="contact-focus">
              <span>IHRE VORBEREITUNG</span>
              <p>
                Ihr Diagnostic-Ergebnis wird nicht automatisch gespeichert oder
                übertragen. Bringen Sie einfach Ihren Fokus mit ins Gespräch —
                mehr brauchen wir für den Start nicht.
              </p>
            </div>
          )}
        </div>

        <div className="contact-page__details">
          <a href="tel:+491764516719">
            <span>TELEFON</span>
            <strong>0176 4516719</strong>
            <i aria-hidden="true">↗</i>
          </a>
          <a href="mailto:mpp-recruit@web.de">
            <span>E-MAIL</span>
            <strong>mpp-recruit@web.de</strong>
            <i aria-hidden="true">↗</i>
          </a>
          <div>
            <span>STANDORT</span>
            <strong>Benfleetstraße 11<br />50858 Köln</strong>
          </div>

          <div className="contact-page__promise">
            <span>IM ERSTEN GESPRÄCH</span>
            <ol>
              <li>Ausgangslage verstehen</li>
              <li>2–3 relevante Hebel priorisieren</li>
              <li>Nächsten sinnvollen Schritt definieren</li>
            </ol>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
