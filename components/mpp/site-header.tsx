import { MobileNav } from "@/components/mpp/mobile-nav";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand-lockup" href="/#top" aria-label="MPP Startseite">
        <span className="brand-mark">MPP</span>
        <span className="brand-subline">
          <b>PEOPLE</b>
          <b>PERFORMANCE</b>
          <b>SYSTEMS</b>
        </span>
      </a>

      <nav className="site-nav" aria-label="Hauptnavigation">
        <a href="/#services">Leistungen</a>
        <a href="/#operating-system">Ansatz</a>
        <a href="/ueber-mpp">Über uns</a>
        <a href="/insights">Insights</a>
        <a href="/kontakt">Kontakt</a>
      </nav>

      <a className="button button--header button--primary" href="/#contact">
        Gemeinsam morgen bauen
        <span aria-hidden="true">→</span>
      </a>

      <MobileNav />
    </header>
  );
}
