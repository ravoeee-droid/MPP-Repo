export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand-lockup" href="#top" aria-label="MPP Startseite">
        <span className="brand-mark">MPP</span>
        <span className="brand-subline">People · Performance · Systems</span>
      </a>

      <nav className="site-nav" aria-label="Hauptnavigation">
        <a href="#operating-system">Ansatz</a>
        <a href="#services">Leistungen</a>
        <a href="#diagnostic">Diagnostic</a>
      </nav>

      <a className="button button--header" href="#diagnostic">
        Gespräch vorbereiten
        <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
