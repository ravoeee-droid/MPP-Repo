import Image from "next/image";
import { AssetImage } from "@/components/mpp/asset-image";

export function Hero() {
  return (
    <section className="hero hero-wow" id="top">
      <div className="hero-wow__ambient" aria-hidden="true">
        <span />
        <span />
      </div>

      <div className="hero__grid hero-wow__grid">
        <div className="hero__copy hero-wow__copy">
          <div className="hero-wow__topline">
            <p className="eyebrow">MPP / PEOPLE · PERFORMANCE · SYSTEMS</p>
            <span>Unternehmen für morgen.</span>
          </div>

          <h1>
            Die richtigen
            <br />
            Menschen sind
            <br />
            <em>erst der Anfang.</em>
          </h1>

          <p className="hero__lede">
            MPP verbindet Recruiting, Performance und Organisation zu einem
            System, in dem Menschen Verantwortung übernehmen, Leistung Wirkung
            entfaltet und Wachstum tragfähig wird.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#diagnostic">
              Potenziale ins Wirken bringen <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="#mission">
              Unsere Mission <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="hero-wow__proof" aria-label="MPP Leistungsfelder">
            <span>RECRUITING</span>
            <i aria-hidden="true" />
            <span>SALES &amp; PERFORMANCE</span>
            <i aria-hidden="true" />
            <span>ORGANISATIONSENTWICKLUNG</span>
          </div>
        </div>

        <div className="hero__visual-wrap hero-wow__visual-wrap">
          <div className="hero-wow__brand-watermark" aria-hidden="true">
            <Image
              src="/assets/logos/mark-dark.png"
              alt=""
              fill
              priority
              sizes="28vw"
            />
          </div>

          <AssetImage
            className="hero__visual hero-wow__visual"
            src="/assets/founder/hero.png"
            alt="Mattias Pedro Panthel im Gespräch"
            label="FOUNDER / HERO"
            note="MPP"
            eager
            quality={100}
            sizes="(max-width: 760px) 100vw, (max-width: 1400px) 58vw, 900px"
          >
            <div className="hero__image-caption hero-wow__caption">
              <span>Menschen. Leistung. Systeme.</span>
              <i aria-hidden="true" />
            </div>
          </AssetImage>

          <div className="hero-wow__signal hero-wow__signal--people">
            <span>01</span>
            <strong>PEOPLE</strong>
            <small>Die richtigen Menschen.</small>
          </div>
          <div className="hero-wow__signal hero-wow__signal--performance">
            <span>02</span>
            <strong>PERFORMANCE</strong>
            <small>Leistung, die Wirkung bekommt.</small>
          </div>
          <div className="hero-wow__signal hero-wow__signal--systems">
            <span>03</span>
            <strong>SYSTEMS</strong>
            <small>Strukturen, die mitwachsen.</small>
          </div>
        </div>
      </div>

      <div className="hero-wow__marquee" aria-label="MPP Operating Line">
        <div>
          <span>PEOPLE</span>
          <i aria-hidden="true" />
          <span>PERFORMANCE</span>
          <i aria-hidden="true" />
          <span>SYSTEMS</span>
          <i aria-hidden="true" />
          <span>GROWTH</span>
        </div>
      </div>
    </section>
  );
}
