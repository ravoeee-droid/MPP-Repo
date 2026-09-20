import { SiteHeader } from "@/components/mpp/site-header";
import { SiteFooter } from "@/components/mpp/site-footer";
import { MiaAssistant } from "@/components/mpp/mia-assistant";
import { MotionScenes } from "@/components/mpp/motion-scenes";

type Pillar = {
  index: string;
  title: string;
  text: string;
};

type ServicePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  problemTitle: string;
  problemText: string;
  pillars: Pillar[];
  proofTitle: string;
  proofText: string;
  visualLabel: string;
};

export function ServicePage({
  eyebrow,
  title,
  intro,
  problemTitle,
  problemText,
  pillars,
  proofTitle,
  proofText,
  visualLabel
}: ServicePageProps) {
  return (
    <main id="main-content">
      <MotionScenes />
      <a className="skip-link" href="#main-content">Zum Inhalt springen</a>
      <SiteHeader />
      <MiaAssistant />

      <section className="detail-hero" id="top">
        <div className="detail-hero__copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="/#diagnostic">
              Potenziale ins Wirken bringen <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="/#contact">Gespräch starten</a>
          </div>
        </div>

        <div className="detail-hero__visual asset-slot" role="img" aria-label={visualLabel}>
          <div className="asset-slot__meta">
            <span>{visualLabel}</span>
            <strong>Freigegebenes Production-Asset folgt.</strong>
          </div>
          <div className="hero__image-caption">
            <span>Unternehmen für morgen.</span>
            <i aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="detail-problem section-pad">
        <div className="section-kicker">
          <span>01 / AUSGANGSLAGE</span>
          <span>Vom Symptom zur Ursache.</span>
        </div>
        <div className="detail-problem__grid">
          <h2>{problemTitle}</h2>
          <p>{problemText}</p>
        </div>
      </section>

      <section className="detail-pillars section-pad">
        <div className="section-kicker">
          <span>02 / ARBEITSWEISE</span>
          <span>Klar. Menschlich. Wirksam.</span>
        </div>
        <div className="detail-pillars__grid">
          {pillars.map((pillar) => (
            <article key={pillar.index} className="detail-pillar">
              <span>{pillar.index}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-proof section-pad section-pad--dark">
        <div className="section-kicker section-kicker--dark">
          <span>03 / PROOF</span>
          <span>Nur verifizierte Ergebnisse.</span>
        </div>
        <div className="detail-proof__grid">
          <h2>{proofTitle}</h2>
          <div>
            <p>{proofText}</p>
            <div className="detail-proof__slot">
              CASE STUDY / CUSTOMER PROOF — VERIFIED CONTENT REQUIRED
            </div>
          </div>
        </div>
      </section>

      <section className="detail-next section-pad">
        <div className="detail-next__grid">
          <p className="eyebrow">Nächster Schritt</p>
          <h2>Was wäre bei Ihnen der sinnvollste erste Hebel?</h2>
          <p>
            Das MPP Growth Diagnostic gibt in fünf kurzen Fragen eine erste
            strukturierte Richtung — ohne erfundene Benchmarks.
          </p>
          <a className="button button--primary" href="/#diagnostic">
            Diagnostic starten <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
