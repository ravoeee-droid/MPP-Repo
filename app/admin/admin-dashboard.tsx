"use client";

import { useMemo, useState } from "react";
import styles from "./admin.module.css";

type View = "overview" | "crm" | "messages" | "recruiting" | "visibility" | "automation" | "ai" | "system";

const nav: Array<{ id: View; label: string; meta: string }> = [
  { id: "overview", label: "Command Center", meta: "Live overview" },
  { id: "crm", label: "Leads & CRM", meta: "18 active" },
  { id: "messages", label: "Nachrichten", meta: "9 ungelesen" },
  { id: "recruiting", label: "Recruiting", meta: "42 applicants" },
  { id: "visibility", label: "SEO & GEO", meta: "78 / 100" },
  { id: "automation", label: "Automationen", meta: "12 active" },
  { id: "ai", label: "AI Insights", meta: "5 actions" },
  { id: "system", label: "System Health", meta: "All systems" }
];

const sourceRows = [
  { source: "Google / SEO", leads: 46, conv: "7,8%", value: "18.400 €" },
  { source: "Meta Ads", leads: 31, conv: "6,1%", value: "11.900 €" },
  { source: "LinkedIn", leads: 18, conv: "9,4%", value: "9.700 €" },
  { source: "Direkt / Referral", leads: 14, conv: "12,2%", value: "8.100 €" }
];

const crmRows = [
  { name: "Rheinwerk GmbH", need: "Recruiting", source: "Google", score: 92, state: "Termin" },
  { name: "Meyer Elektrotechnik", need: "Vertrieb", source: "LinkedIn", score: 86, state: "Qualifiziert" },
  { name: "Care West GmbH", need: "Personal", source: "Meta", score: 81, state: "Follow-up" },
  { name: "Nordstern Logistik", need: "Prozesse", source: "Direkt", score: 74, state: "Neu" }
];

const applicants = [
  { name: "Leonie Weber", role: "Sales Manager", score: 94, stage: "Interview" },
  { name: "Tobias Kern", role: "Recruiter", score: 89, stage: "Qualifiziert" },
  { name: "Mila Schubert", role: "Account Manager", score: 84, stage: "Termin" },
  { name: "Jonas Falk", role: "Consultant", score: 78, stage: "Neu" }
];

const workflows = [
  { name: "Lead in < 60 Sek. bestätigen", trigger: "Formular / Chat", status: "Aktiv", runs: "184" },
  { name: "Hot Lead an Sales senden", trigger: "Score ≥ 80", status: "Aktiv", runs: "57" },
  { name: "Bewerber vorqualifizieren", trigger: "Neue Bewerbung", status: "Aktiv", runs: "91" },
  { name: "No-Show Follow-up", trigger: "Termin verpasst", status: "Aktiv", runs: "13" },
  { name: "Review nach Abschluss", trigger: "Deal gewonnen", status: "Aktiv", runs: "21" }
];

const aiActions = [
  {
    impact: "HOCH",
    title: "Recruiting-CTA auf Mobile nach oben ziehen",
    text: "Mobile Besucher erreichen den Job-Match aktuell zu spät. Der kürzere Pfad kann die Bewerbungskonversion verbessern.",
    action: "Optimierung vorbereiten"
  },
  {
    impact: "HOCH",
    title: "Elektro-Case als neue Landingpage ausspielen",
    text: "Suchintention und bestehende Lead-Qualität sprechen für eine eigene Branchenseite mit passendem Proof.",
    action: "Landingpage erzeugen"
  },
  {
    impact: "MITTEL",
    title: "Follow-up nach 24 Stunden ergänzen",
    text: "Mehrere qualifizierte Leads reagieren erst auf den zweiten Kontakt. Eine zusätzliche Sequenz schließt die Lücke.",
    action: "Automation anlegen"
  }
];

function Sparkline({ values }: { values: number[] }) {
  const max = Math.max(...values);
  return (
    <div className={styles.spark} aria-hidden="true">
      {values.map((value, index) => (
        <span key={index} style={{ height: `${Math.max(12, (value / max) * 100)}%` }} />
      ))}
    </div>
  );
}

function Metric({
  label,
  value,
  delta,
  foot,
  values
}: {
  label: string;
  value: string;
  delta: string;
  foot: string;
  values: number[];
}) {
  return (
    <article className={styles.metricCard}>
      <div className={styles.metricTop}>
        <span>{label}</span>
        <strong>{delta}</strong>
      </div>
      <div className={styles.metricValue}>{value}</div>
      <div className={styles.metricBottom}>
        <span>{foot}</span>
        <Sparkline values={values} />
      </div>
    </article>
  );
}

function Header({ title, eyebrow }: { title: string; eyebrow: string }) {
  return (
    <div className={styles.pageHead}>
      <div>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1>{title}</h1>
      </div>
      <div className={styles.headActions}>
        <span className={styles.demoBadge}>DEMO-DATEN</span>
        <button className={styles.rangeButton}>Letzte 30 Tage <span>⌄</span></button>
      </div>
    </div>
  );
}

function Funnel() {
  const steps = [
    { name: "Besucher", value: "3.842", pct: 100 },
    { name: "Leads", value: "109", pct: 72 },
    { name: "Qualifiziert", value: "61", pct: 55 },
    { name: "Termine", value: "27", pct: 36 },
    { name: "Gewonnen", value: "9", pct: 22 }
  ];

  return (
    <section className={styles.panel}>
      <div className={styles.panelHead}>
        <div>
          <span className={styles.panelKicker}>CONVERSION ENGINE</span>
          <h2>Vom Klick zum Auftrag.</h2>
        </div>
        <span className={styles.panelMeta}>2,84% Besucher → Lead</span>
      </div>
      <div className={styles.funnel}>
        {steps.map((step, index) => (
          <div className={styles.funnelRow} key={step.name}>
            <div className={styles.funnelLabel}>
              <span>0{index + 1}</span>
              <strong>{step.name}</strong>
            </div>
            <div className={styles.funnelTrack}>
              <i style={{ width: `${step.pct}%` }} />
            </div>
            <b>{step.value}</b>
          </div>
        ))}
      </div>
    </section>
  );
}

function Overview() {
  return (
    <>
      <Header eyebrow="WEB SYSTEM / COMMAND CENTER" title="Was heute wirklich passiert." />
      <div className={styles.metricsGrid}>
        <Metric label="LEADS" value="109" delta="+24%" foot="vs. vorheriger Zeitraum" values={[33, 42, 37, 56, 62, 74, 91]} />
        <Metric label="QUALIFIZIERTE LEADS" value="61" delta="+18%" foot="56% Lead-Qualität" values={[28, 34, 39, 45, 44, 51, 61]} />
        <Metric label="TERMINE" value="27" delta="+31%" foot="44% Lead → Termin" values={[8, 12, 10, 17, 18, 22, 27]} />
        <Metric label="PIPELINE-WERT" value="48.100 €" delta="+12%" foot="attributiertes Potenzial" values={[18, 24, 22, 31, 36, 40, 48]} />
      </div>

      <div className={styles.twoCol}>
        <Funnel />
        <section className={styles.panel}>
          <div className={styles.panelHead}>
            <div>
              <span className={styles.panelKicker}>AI PRIORITIES</span>
              <h2>Das System denkt mit.</h2>
            </div>
            <span className={styles.liveDot}>5 Chancen erkannt</span>
          </div>
          <div className={styles.insights}>
            {aiActions.map((item) => (
              <article key={item.title} className={styles.insight}>
                <span>{item.impact}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <b>↗</b>
              </article>
            ))}
          </div>
        </section>
      </div>

      <div className={styles.twoColWide}>
        <section className={styles.panel}>
          <div className={styles.panelHead}>
            <div>
              <span className={styles.panelKicker}>ATTRIBUTION</span>
              <h2>Welche Kanäle Umsatz bringen.</h2>
            </div>
            <span className={styles.panelMeta}>Multi-touch demo</span>
          </div>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead><tr><th>Quelle</th><th>Leads</th><th>Conversion</th><th>Pipeline</th></tr></thead>
              <tbody>
                {sourceRows.map((row) => (
                  <tr key={row.source}><td>{row.source}</td><td>{row.leads}</td><td>{row.conv}</td><td>{row.value}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.panel}>
          <div className={styles.panelHead}>
            <div>
              <span className={styles.panelKicker}>LIVE SYSTEM</span>
              <h2>Heute automatisiert.</h2>
            </div>
            <span className={styles.liveDot}>12 Workflows aktiv</span>
          </div>
          <div className={styles.activity}>
            <div><i>13:08</i><span><b>Hot Lead</b> an Sales übergeben</span><em>Score 92</em></div>
            <div><i>12:54</i><span><b>Bewerbung</b> automatisch qualifiziert</span><em>Match 94%</em></div>
            <div><i>12:31</i><span><b>SEO-Seite</b> neu gecrawlt</span><em>Indexiert</em></div>
            <div><i>11:42</i><span><b>Termin</b> nach Follow-up gebucht</span><em>Google</em></div>
            <div><i>10:19</i><span><b>Review</b> angefragt</span><em>Workflow</em></div>
          </div>
        </section>
      </div>
    </>
  );
}

function CRM() {
  return (
    <>
      <Header eyebrow="LEADS / SALES PIPELINE" title="Kein Lead fällt mehr durchs Raster." />
      <div className={styles.metricsGrid}>
        <Metric label="OFFENE LEADS" value="18" delta="+5" foot="heute neu" values={[12, 11, 14, 13, 16, 17, 18]} />
        <Metric label="Ø LEAD SCORE" value="82" delta="+9%" foot="Qualitätsscore" values={[61, 66, 69, 72, 76, 79, 82]} />
        <Metric label="FOLLOW-UPS" value="7" delta="3 heute" foot="automatisch fällig" values={[4, 7, 5, 9, 8, 10, 7]} />
        <Metric label="ABSCHLUSSQUOTE" value="33%" delta="+6 Pkt." foot="Termin → Auftrag" values={[18, 22, 20, 25, 27, 30, 33]} />
      </div>
      <section className={styles.panel}>
        <div className={styles.panelHead}>
          <div><span className={styles.panelKicker}>SMART CRM</span><h2>Priorisiert nach Kaufwahrscheinlichkeit.</h2></div>
          <button className={styles.actionButton}>+ Lead erfassen</button>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead><tr><th>Kontakt</th><th>Bedarf</th><th>Quelle</th><th>Score</th><th>Status</th></tr></thead>
            <tbody>{crmRows.map((row) => (
              <tr key={row.name}>
                <td><strong>{row.name}</strong></td><td>{row.need}</td><td>{row.source}</td>
                <td><span className={styles.score}>{row.score}</span></td><td><span className={styles.state}>{row.state}</span></td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </section>
      <div className={styles.threeCol}>
        {["Neu", "Qualifiziert", "Termin"].map((name, index) => (
          <section className={styles.stageCard} key={name}>
            <div><span>0{index + 1}</span><b>{name}</b><em>{[18, 11, 7][index]}</em></div>
            <p>{[
              "Formulare, Chat, Ads und Telefon laufen in einem Eingang zusammen.",
              "Scoring nach Bedarf, Budget, Timing, Region und Verhalten.",
              "Kalender, Reminder und Follow-ups laufen automatisch."
            ][index]}</p>
          </section>
        ))}
      </div>
    </>
  );
}

function Messages() {
  const inbox = [
    { initials: "TW", name: "Thomas Weber", company: "Weber Elektrotechnik", channel: "WHATSAPP", time: "13:14", text: "Ja, morgen um 10 Uhr passt bei mir sehr gut.", unread: true, score: "92" },
    { initials: "LK", name: "Laura Klein", company: "Bewerbung · Sales Manager", channel: "E-MAIL", time: "12:48", text: "Vielen Dank für die schnelle Rückmeldung. Anbei meine Unterlagen …", unread: true, score: "94" },
    { initials: "MH", name: "Michael Hahn", company: "Hahn Industrie GmbH", channel: "CHAT", time: "11:37", text: "Wie schnell könnten Sie uns bei der Personalsuche unterstützen?", unread: true, score: "86" },
    { initials: "AS", name: "Anna Schmitz", company: "Care West GmbH", channel: "WHATSAPP", time: "10:22", text: "Können Sie mir vorab noch die Leistungsübersicht senden?", unread: false, score: "81" },
    { initials: "JR", name: "Jonas Richter", company: "Richter Logistik", channel: "E-MAIL", time: "09:16", text: "Der Termin ist bestätigt. Bis später.", unread: false, score: "76" }
  ];

  return (
    <>
      <Header eyebrow="UNIFIED INBOX / COMMUNICATION" title="Jede Nachricht. Ein Verlauf." />
      <div className={styles.metricsGrid}>
        <Metric label="NACHRICHTEN" value="184" delta="+29%" foot="E-Mail · WhatsApp · Chat" values={[72, 88, 91, 112, 136, 154, 184]} />
        <Metric label="UNGelesen" value="9" delta="-31%" foot="offene Antworten" values={[18, 16, 14, 13, 12, 10, 9]} />
        <Metric label="Ø ANTWORTZEIT" value="4:12" delta="-38%" foot="Minuten" values={[10, 9, 8, 7, 6, 5, 4]} />
        <Metric label="AUTO FOLLOW-UPS" value="41" delta="+12" foot="diesen Monat" values={[8, 13, 18, 21, 27, 33, 41]} />
      </div>

      <div className={styles.inboxShell}>
        <section className={styles.inboxList}>
          <div className={styles.inboxHead}>
            <div>
              <span className={styles.panelKicker}>ALLE KANÄLE</span>
              <h2>Posteingang</h2>
            </div>
            <button className={styles.actionButton}>+ Nachricht</button>
          </div>

          <div className={styles.channelTabs}>
            <button data-active="true">Alle <b>9</b></button>
            <button>E-Mail <b>4</b></button>
            <button>WhatsApp <b>3</b></button>
            <button>Chat <b>2</b></button>
          </div>

          <div className={styles.messageRows}>
            {inbox.map((item, index) => (
              <article key={item.name} data-active={index === 0}>
                <div className={styles.messageAvatar}>{item.initials}</div>
                <div className={styles.messageCopy}>
                  <div><strong>{item.name}</strong><time>{item.time}</time></div>
                  <span>{item.company}</span>
                  <p>{item.text}</p>
                  <footer><b>{item.channel}</b><em>Lead Score {item.score}</em></footer>
                </div>
                {item.unread && <i className={styles.unreadDot} />}
              </article>
            ))}
          </div>
        </section>

        <section className={styles.conversation}>
          <div className={styles.conversationHead}>
            <div className={styles.messageAvatar}>TW</div>
            <div>
              <h3>Thomas Weber</h3>
              <p>Weber Elektrotechnik · Lead Score 92 · Qualifiziert</p>
            </div>
            <span className={styles.state}>WhatsApp</span>
          </div>

          <div className={styles.timeline}>
            <div className={styles.timelineEvent}>
              <span>12:41</span><p><b>System</b> Lead automatisch mit Score 92 qualifiziert.</p>
            </div>
            <div className={styles.bubbleIncoming}>
              <small>Thomas · 12:46</small>
              <p>Hallo, ich habe gerade Ihre Seite gesehen. Wir suchen aktuell dringend zwei Elektriker und kommen mit den normalen Stellenportalen kaum weiter.</p>
            </div>
            <div className={styles.bubbleOutgoing}>
              <small>MPP · 12:49</small>
              <p>Hallo Herr Weber, danke für Ihre Nachricht. Das klingt genau nach einem Fall, bei dem unser Recruiting-System helfen kann. Ich würde Ihnen gerne kurz zeigen, wie wir Bewerber über Website, Ads und automatisches Follow-up zusammenführen.</p>
            </div>
            <div className={styles.timelineEvent}>
              <span>12:50</span><p><b>Automation</b> Terminvorschlag und Kalenderlink gesendet.</p>
            </div>
            <div className={styles.bubbleIncoming}>
              <small>Thomas · 13:14</small>
              <p>Ja, morgen um 10 Uhr passt bei mir sehr gut.</p>
            </div>
          </div>

          <div className={styles.aiReply}>
            <div><span>AI REPLY COPILOT</span><strong>Antwortvorschlag bereit</strong></div>
            <p>Perfekt, Herr Weber. Ich habe morgen um 10 Uhr für Sie reserviert. Sie erhalten den Termin gleich noch einmal per E-Mail mit dem Link. Bis morgen!</p>
            <div><button>Übernehmen</button><button>Neu formulieren</button></div>
          </div>

          <div className={styles.composer}>
            <span>WhatsApp</span>
            <textarea defaultValue="Perfekt, Herr Weber. Ich habe morgen um 10 Uhr für Sie reserviert." aria-label="Nachricht" />
            <button>Senden →</button>
          </div>
        </section>
      </div>

      <div className={styles.threeCol}>
        <section className={styles.stageCard}>
          <div><span>01</span><b>E-Mail</b><em>4</em></div>
          <p>Alle Anfragen, Antworten, Angebote und Bewerbermails laufen direkt am Kontakt zusammen.</p>
        </section>
        <section className={styles.stageCard}>
          <div><span>02</span><b>WhatsApp</b><em>3</em></div>
          <p>Schnelle Kommunikation mit Interessenten und Bewerbern inklusive automatischer Follow-ups.</p>
        </section>
        <section className={styles.stageCard}>
          <div><span>03</span><b>Website Chat</b><em>2</em></div>
          <p>Chats werden zum CRM-Kontakt, qualifiziert und bei Bedarf automatisch an den richtigen Mitarbeiter übergeben.</p>
        </section>
      </div>
    </>
  );
}

function Recruiting() {
  return (
    <>
      <Header eyebrow="RECRUITING OS" title="Vom Besucher zum passenden Menschen." />
      <div className={styles.metricsGrid}>
        <Metric label="BEWERBUNGEN" value="42" delta="+38%" foot="letzte 30 Tage" values={[14, 19, 18, 25, 31, 35, 42]} />
        <Metric label="QUALIFIZIERT" value="23" delta="55%" foot="nach Job-Match" values={[8, 11, 12, 13, 17, 20, 23]} />
        <Metric label="INTERVIEWS" value="11" delta="+4" foot="automatisch terminiert" values={[3, 4, 5, 5, 7, 9, 11]} />
        <Metric label="COST / APPLICANT" value="37 €" delta="-21%" foot="Demo Ads Attribution" values={[64, 58, 55, 49, 45, 41, 37]} />
      </div>
      <div className={styles.twoCol}>
        <section className={styles.panel}>
          <div className={styles.panelHead}>
            <div><span className={styles.panelKicker}>CANDIDATE PIPELINE</span><h2>Die besten zuerst.</h2></div>
            <span className={styles.panelMeta}>Automatisches Matching</span>
          </div>
          <div className={styles.candidateList}>
            {applicants.map((person) => (
              <article key={person.name}>
                <div className={styles.avatar}>{person.name.split(" ").map(x => x[0]).join("")}</div>
                <div><h3>{person.name}</h3><p>{person.role}</p></div>
                <strong>{person.score}%</strong>
                <span className={styles.state}>{person.stage}</span>
              </article>
            ))}
          </div>
        </section>
        <section className={styles.panel}>
          <div className={styles.panelHead}>
            <div><span className={styles.panelKicker}>JOB MATCH</span><h2>60 Sekunden statt Lebenslauf.</h2></div>
          </div>
          <div className={styles.matchCard}>
            <span>LIVE FUNNEL</span>
            <h3>Passt diese Stelle zu mir?</h3>
            <p>5 Fragen → Match-Score → passende Stelle → WhatsApp / Termin / Bewerbung.</p>
            <div className={styles.matchGauge}><i style={{ width: "88%" }} /></div>
            <div className={styles.matchMeta}><b>88% Match</b><span>Sehr gute Passung</span></div>
            <button className={styles.actionButton}>Job-Match öffnen ↗</button>
          </div>
        </section>
      </div>
    </>
  );
}

function Visibility() {
  const terms = [
    ["personalvermittlung köln", "4", "+6"],
    ["recruiting mittelstand", "8", "+11"],
    ["vertriebsberatung köln", "6", "+3"],
    ["prozessoptimierung kmu", "12", "+9"]
  ];
  return (
    <>
      <Header eyebrow="SEO / GEO / CONTENT" title="Sichtbarkeit wird messbar." />
      <div className={styles.metricsGrid}>
        <Metric label="SEO SCORE" value="91" delta="+12" foot="technisch + inhaltlich" values={[67, 72, 76, 80, 84, 88, 91]} />
        <Metric label="AI VISIBILITY" value="78" delta="+19" foot="GEO Demo Score" values={[42, 48, 53, 61, 65, 70, 78]} />
        <Metric label="ORGANIC CLICKS" value="1.284" delta="+41%" foot="30 Tage" values={[420, 510, 620, 760, 840, 1040, 1284]} />
        <Metric label="CONTENT ASSETS" value="34" delta="+6" foot="Seiten + Insights" values={[18, 20, 22, 24, 27, 31, 34]} />
      </div>
      <div className={styles.twoCol}>
        <section className={styles.panel}>
          <div className={styles.panelHead}><div><span className={styles.panelKicker}>SEARCH DEMAND</span><h2>Wo Nachfrage entsteht.</h2></div></div>
          <div className={styles.rankList}>
            {terms.map(([term, rank, change]) => (
              <div key={term}><span>{term}</span><strong>#{rank}</strong><em>{change}</em></div>
            ))}
          </div>
        </section>
        <section className={styles.panel}>
          <div className={styles.panelHead}><div><span className={styles.panelKicker}>CONTENT ENGINE</span><h2>Die nächste beste Seite.</h2></div></div>
          <div className={styles.contentIdea}>
            <span>EMPFOHLEN</span>
            <h3>Recruiting im Elektro-Handwerk: Mitarbeiter gewinnen ohne Stellenportal-Abhängigkeit</h3>
            <p>Hohe Suchintention · niedrige Content-Abdeckung · starke Nähe zum Leistungsangebot.</p>
            <button className={styles.actionButton}>Entwurf erzeugen</button>
          </div>
        </section>
      </div>
    </>
  );
}

function Automation() {
  return (
    <>
      <Header eyebrow="AUTOMATION HUB" title="Das System arbeitet weiter." />
      <div className={styles.metricsGrid}>
        <Metric label="AKTIVE WORKFLOWS" value="12" delta="100%" foot="Systemstatus" values={[8, 9, 9, 10, 11, 12, 12]} />
        <Metric label="RUNS / 30 TAGE" value="648" delta="+29%" foot="automatisierte Aktionen" values={[280, 330, 390, 460, 510, 585, 648]} />
        <Metric label="ZEIT GESPART" value="31 h" delta="+8 h" foot="modellierte Ersparnis" values={[10, 14, 16, 20, 24, 28, 31]} />
        <Metric label="FEHLERQUOTE" value="0,3%" delta="-0,4" foot="Demo Monitoring" values={[10, 8, 7, 5, 4, 4, 3]} />
      </div>
      <section className={styles.panel}>
        <div className={styles.panelHead}>
          <div><span className={styles.panelKicker}>WORKFLOW ENGINE</span><h2>Wenn X passiert, erledigt das System Y.</h2></div>
          <button className={styles.actionButton}>+ Workflow</button>
        </div>
        <div className={styles.workflowList}>
          {workflows.map((flow, index) => (
            <article key={flow.name}>
              <span>0{index + 1}</span>
              <div><h3>{flow.name}</h3><p>Trigger: {flow.trigger}</p></div>
              <em>{flow.runs} Runs</em>
              <b><i /> {flow.status}</b>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function AI() {
  return (
    <>
      <Header eyebrow="AI OPTIMIZATION LAYER" title="Nicht nur messen. Verbessern." />
      <div className={styles.aiHero}>
        <div>
          <span className={styles.panelKicker}>WEEKLY SYSTEM REVIEW</span>
          <h2>5 konkrete Chancen.<br /><em>Heute erkannt.</em></h2>
        </div>
        <div className={styles.aiScore}>
          <span>SYSTEM SCORE</span>
          <strong>87</strong>
          <p>+9 Punkte seit letzter Analyse</p>
        </div>
      </div>
      <section className={styles.panel}>
        <div className={styles.aiList}>
          {aiActions.concat([
            { impact: "MITTEL", title: "FAQ aus echten Sales-Fragen ergänzen", text: "Wiederkehrende Einwände aus dem Funnel lassen sich als strukturierte Antwort in Website und KI-Suche überführen.", action: "FAQ vorbereiten" },
            { impact: "NIEDRIG", title: "Case-Study intern verlinken", text: "Eine zusätzliche interne Verlinkung stärkt die thematische Verbindung zwischen Leistung, Proof und Conversion.", action: "Link setzen" }
          ]).map((item, index) => (
            <article key={item.title}>
              <div className={styles.aiNumber}>0{index + 1}</div>
              <div><span>{item.impact}ER HEBEL</span><h3>{item.title}</h3><p>{item.text}</p></div>
              <button>{item.action} <b>→</b></button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function System() {
  const integrations = [
    ["Website / Vercel", "Verbunden", "99,99%"],
    ["Google Analytics", "Verbunden", "Live"],
    ["Search Console", "Verbunden", "Heute"],
    ["Meta Ads", "Verbunden", "Live"],
    ["CRM / Leads", "Verbunden", "Live"],
    ["WhatsApp", "Verbunden", "Live"],
    ["Kalender", "Verbunden", "Live"],
    ["Microsoft Clarity", "Verbunden", "Heute"]
  ];
  return (
    <>
      <Header eyebrow="SYSTEM HEALTH / INTEGRATIONS" title="Ein Cockpit statt acht Tools." />
      <div className={styles.healthHero}>
        <div><span>GESAMTSTATUS</span><strong><i /> Alle Systeme operational</strong><p>Letzter Check vor 34 Sekunden · Demo Monitoring</p></div>
        <div><span>WEBSITE HEALTH</span><strong>96 / 100</strong><p>Performance · SEO · Accessibility · Best Practices</p></div>
        <div><span>AUTOMATION HEALTH</span><strong>99,7%</strong><p>Erfolgreiche Runs im aktuellen Zeitraum</p></div>
      </div>
      <section className={styles.panel}>
        <div className={styles.panelHead}><div><span className={styles.panelKicker}>CONNECTED STACK</span><h2>Alles spricht miteinander.</h2></div></div>
        <div className={styles.integrationGrid}>
          {integrations.map(([name, status, sync]) => (
            <article key={name}><div className={styles.integrationIcon}>◆</div><div><h3>{name}</h3><p><i /> {status}</p></div><span>{sync}</span></article>
          ))}
        </div>
      </section>
    </>
  );
}

export function AdminDashboard() {
  const [active, setActive] = useState<View>("overview");

  const content = useMemo(() => {
    if (active === "crm") return <CRM />;
    if (active === "messages") return <Messages />;
    if (active === "recruiting") return <Recruiting />;
    if (active === "visibility") return <Visibility />;
    if (active === "automation") return <Automation />;
    if (active === "ai") return <AI />;
    if (active === "system") return <System />;
    return <Overview />;
  }, [active]);

  return (
    <main className={styles.shell}>
      <aside className={styles.sidebar}>
        <a className={styles.logo} href="/" aria-label="Zur MPP Website">
          <strong>MPP</strong><i />
          <span>WEB SYSTEM</span>
        </a>

        <div className={styles.systemState}>
          <span><i /> SYSTEM ONLINE</span>
          <small>Command Center / Demo</small>
        </div>

        <nav className={styles.nav}>
          {nav.map((item, index) => (
            <button key={item.id} data-active={active === item.id} onClick={() => setActive(item.id)}>
              <span>0{index + 1}</span>
              <div><strong>{item.label}</strong><small>{item.meta}</small></div>
              <b>↗</b>
            </button>
          ))}
        </nav>

        <div className={styles.sidebarFoot}>
          <div><span>MPP</span><b>People. Performance. Systems.</b></div>
          <a href="/">← Website ansehen</a>
        </div>
      </aside>

      <section className={styles.workspace}>
        <div className={styles.topbar}>
          <div className={styles.breadcrumb}><span>MPP</span><b>/</b><strong>WebSystem Command Center</strong></div>
          <div className={styles.topbarRight}>
            <span className={styles.sync}><i /> synchronisiert</span>
            <button className={styles.iconButton} aria-label="Benachrichtigungen">○</button>
            <div className={styles.user}>MP</div>
          </div>
        </div>
        <div className={styles.content}>{content}</div>
      </section>
    </main>
  );
}
