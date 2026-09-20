import Link from "next/link";
import { MobileNav } from "@/components/mpp/mobile-nav";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand-lockup" href="/#top" aria-label="MPP Startseite">
        <span className="brand-mark">MPP</span>
        <span className="brand-subline">
          <b>PEOPLE</b>
          <b>PERFORMANCE</b>
          <b>SYSTEMS</b>
        </span>
      </Link>

      <nav className="site-nav" aria-label="Hauptnavigation">
        <Link href="/#services">Leistungen</Link>
        <Link href="/#operating-system">Ansatz</Link>
        <Link href="/ueber-mpp">Über uns</Link>
        <Link href="/insights">Insights</Link>
        <Link href="/kontakt">Kontakt</Link>
      </nav>

      <Link className="button button--header button--primary" href="/#contact">
        Gemeinsam morgen bauen
        <span aria-hidden="true">→</span>
      </Link>

      <MobileNav />
    </header>
  );
}
