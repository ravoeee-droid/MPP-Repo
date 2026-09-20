import Link from "next/link";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">
        <span className="brand-mark">MPP</span>
        <p>People · Performance · Systems.</p>
      </div>

      <div className="site-footer__links">
        <Link href="/recruiting">Recruiting</Link>
        <Link href="/performance">Performance</Link>
        <Link href="/systems">Systems</Link>
        <Link href="/case-studies">Case Studies</Link>
        <Link href="/ueber-mpp">Über MPP</Link>
        <Link href="/insights">Insights</Link>
        <Link href="/kontakt">Kontakt</Link>
      </div>

      <div className="site-footer__legal">
        <div>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </div>
        <span>© MPP · Unternehmen für morgen.</span>
      </div>
    </footer>
  );
}
