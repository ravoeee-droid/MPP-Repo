import Link from "next/link";
import { SiteHeader } from "@/components/mpp/site-header";
import { SiteFooter } from "@/components/mpp/site-footer";

export default function NotFound() {
  return (
    <main id="main-content">
      <Link className="skip-link" href="#main-content">Zum Inhalt springen</Link>
      <SiteHeader />

      <section className="not-found">
        <span className="not-found__code">404</span>
        <div>
          <p className="eyebrow">Hier endet der Weg.</p>
          <h1>
            Diese Seite gehört
            <br />
            <em>nicht zum System.</em>
          </h1>
          <p>
            Zurück zur MPP-Startseite und von dort den passenden Hebel zwischen
            People, Performance und Systems wählen.
          </p>
          <Link className="button button--primary" href="/">
            Zur Startseite <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
