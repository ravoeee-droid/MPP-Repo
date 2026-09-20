export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">
        <span className="brand-mark">MPP</span>
        <p>People · Performance · Systems.</p>
      </div>

      <div className="site-footer__links">
        <a href="#operating-system">Ansatz</a>
        <a href="#services">Leistungen</a>
        <a href="#diagnostic">Diagnostic</a>
        <a href="#trust">Trust</a>
      </div>

      <div className="site-footer__legal">
        <span>Impressum / Datenschutz werden mit den finalen Unternehmensdaten ergänzt.</span>
        <span>© MPP</span>
      </div>
    </footer>
  );
}
