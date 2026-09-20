export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">
        <span className="brand-mark">MPP</span>
        <p>People · Performance · Systems.</p>
      </div>

      <div className="site-footer__links">
        <a href="/recruiting">Recruiting</a>
        <a href="/performance">Performance</a>
        <a href="/systems">Systems</a>
        <a href="/#operating-system">Ansatz</a>
        <a href="/kontakt">Kontakt</a>
      </div>

      <div className="site-footer__legal">
        <div>
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
        </div>
        <span>© MPP · Unternehmen für morgen.</span>
      </div>
    </footer>
  );
}
