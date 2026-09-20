import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/mpp/site-header";
import { SiteFooter } from "@/components/mpp/site-footer";
import { MiaAssistant } from "@/components/mpp/mia-assistant";
import { AssetImage } from "@/components/mpp/asset-image";

export const metadata: Metadata = {
  title: "Über MPP | People. Performance. Systems.",
  description:
    "Über MPP und Inhaber Mattias Pedro Panthel: Recruiting, Vertriebsleistung und Unternehmensberatung in einer gemeinsamen People-Performance-Systems-Logik."
};

const career = [
  {
    period: "2016–2022",
    role: "Operations Manager",
    company: "Provita GmbH"
  },
  {
    period: "2022–2023",
    role: "Niederlassungsleiter",
    company: "Unique Medicum"
  },
  {
    period: "2024",
    role: "Chief Operating Officer",
    company: "BruDi Personalmanagment GmbH"
  },
  {
    period: "SEIT 2023",
    role: "Geschäftsführer",
    company: "MPP-Recruit"
  }
];

export default function UeberMppPage() {
  return (
    <main id="main-content">
      <Link className="skip-link" href="#main-content">Zum Inhalt springen</Link>
      <SiteHeader />
      <MiaAssistant />

      <section className="about-page">
        <div className="about-page__copy">
          <p className="eyebrow">Über MPP</p>
          <h1>
            Menschen.
            <br />
            Leistung.
            <br />
            <em>Systeme.</em>
          </h1>
          <p>
            MPP wird von Mattias Pedro Panthel geführt. Die öffentlich
            dokumentierte Laufbahn verbindet operative Führung, Personal,
            Organisation und unternehmerische Verantwortung – heute gebündelt
            in MPP.
          </p>

          <div className="about-page__principle">
            <span>MPP PRINZIP</span>
            <strong>
              Die richtigen Menschen sind erst der Anfang.
              <br />
              Das System entscheidet, was daraus wird.
            </strong>
          </div>

          <Link className="button button--primary" href="/kontakt">
            Ins Gespräch kommen <span aria-hidden="true">→</span>
          </Link>

          <div className="about-page__profiles">
            <a
              href="https://de.linkedin.com/in/mattias-pedro-panthel-024341271"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.xing.com/profile/MattiasPedro_Panthel"
              target="_blank"
              rel="noreferrer"
            >
              XING <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <AssetImage
          className="about-page__visual"
          src="/assets/founder/portrait.webp"
          alt="Mattias Pedro Panthel, Inhaber von MPP"
          label="FOUNDER / PORTRAIT"
          note="Upload: public/assets/founder/portrait.webp"
          eager
          quality={100}
          sizes="(max-width: 760px) 100vw, (max-width: 1400px) 58vw, 900px"
        >
          <div className="founder-golden__signature">
            <span className="founder-golden__name">Mattias Pedro Panthel</span>
            <b>MATTIAS PEDRO PANTHEL</b>
            <small>Inhaber MPP</small>
          </div>
        </AssetImage>
      </section>

      <section className="career-strip section-pad" aria-label="Berufliche Stationen">
        <div className="section-kicker">
          <span>PUBLIC CAREER / VERIFIED</span>
          <span>Öffentlich dokumentierte Berufsstationen</span>
        </div>

        <div className="career-strip__grid">
          {career.map((item) => (
            <article key={item.period + item.company}>
              <span>{item.period}</span>
              <h2>{item.role}</h2>
              <p>{item.company}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
