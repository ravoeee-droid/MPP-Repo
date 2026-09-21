"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#services", label: "Leistungen" },
  { href: "/#operating-system", label: "Ansatz" },
  { href: "/ueber-mpp", label: "Über uns" },
  { href: "/insights", label: "Insights" },
  { href: "/kontakt", label: "Kontakt" }
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        className="mobile-nav-trigger"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <div className="mobile-nav-panel" id="mobile-nav-panel" data-open={open}>
        <div className="mobile-nav-panel__inner">
          <div className="mobile-nav-panel__meta">
            <span>MPP</span>
            <span>People · Performance · Systems</span>
          </div>

          <nav aria-label="Mobile Navigation">
            {links.map((link, index) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span>
                <strong>{link.label}</strong>
                <i aria-hidden="true">↗</i>
              </Link>
            ))}
          </nav>

          <Link
            className="button button--primary mobile-nav-panel__cta"
            href="/kontakt"
            onClick={() => setOpen(false)}
          >
            Erstgespräch anfragen <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </>
  );
}
