"use client";

import { useMemo, useState } from "react";

type Axis = "people" | "performance" | "systems";

type Answer = {
  label: string;
  weights: Record<Axis, number>;
};

type Question = {
  id: string;
  eyebrow: string;
  question: string;
  answers: Answer[];
};

const questions: Question[] = [
  {
    id: "roles",
    eyebrow: "01 / 05 · PEOPLE",
    question: "Wie schwer fällt es aktuell, Schlüsselrollen richtig zu besetzen?",
    answers: [
      { label: "Kein akutes Thema", weights: { people: 0, performance: 0, systems: 0 } },
      { label: "Einzelne Rollen bremsen", weights: { people: 2, performance: 0, systems: 1 } },
      { label: "Mehrere kritische Rollen sind offen", weights: { people: 4, performance: 1, systems: 1 } }
    ]
  },
  {
    id: "dependency",
    eyebrow: "02 / 05 · PERFORMANCE",
    question: "Wie abhängig sind Ergebnisse von einzelnen Leistungsträgern?",
    answers: [
      { label: "Kaum abhängig", weights: { people: 0, performance: 0, systems: 0 } },
      { label: "Spürbar abhängig", weights: { people: 1, performance: 3, systems: 2 } },
      { label: "Sehr stark abhängig", weights: { people: 1, performance: 4, systems: 3 } }
    ]
  },
  {
    id: "clarity",
    eyebrow: "03 / 05 · SYSTEMS",
    question: "Wie klar sind Rollen, Entscheidungen und Verantwortlichkeiten geregelt?",
    answers: [
      { label: "Sehr klar", weights: { people: 0, performance: 0, systems: 0 } },
      { label: "Teilweise klar", weights: { people: 0, performance: 1, systems: 3 } },
      { label: "Viel hängt an Einzelpersonen", weights: { people: 1, performance: 2, systems: 4 } }
    ]
  },
  {
    id: "execution",
    eyebrow: "04 / 05 · PERFORMANCE",
    question: "Wie zuverlässig werden gute Pläne im Alltag tatsächlich umgesetzt?",
    answers: [
      { label: "Sehr zuverlässig", weights: { people: 0, performance: 0, systems: 0 } },
      { label: "Unterschiedlich je Team", weights: { people: 1, performance: 3, systems: 2 } },
      { label: "Zu oft bleibt es bei guten Absichten", weights: { people: 1, performance: 4, systems: 3 } }
    ]
  },
  {
    id: "growth",
    eyebrow: "05 / 05 · GROWTH",
    question: "Was würde aktuell den größten Unterschied machen?",
    answers: [
      { label: "Die richtigen Menschen", weights: { people: 5, performance: 0, systems: 0 } },
      { label: "Mehr Wirkung im Team", weights: { people: 0, performance: 5, systems: 1 } },
      { label: "Klarere Strukturen", weights: { people: 0, performance: 1, systems: 5 } }
    ]
  }
];

const labels: Record<Axis, string> = {
  people: "People",
  performance: "Performance",
  systems: "Systems"
};

export function GrowthDiagnostic() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<Axis, number>>({
    people: 0,
    performance: 0,
    systems: 0
  });
  const [complete, setComplete] = useState(false);

  const current = questions[step];

  const maxScore = 15;
  const percentages = useMemo(
    () =>
      Object.fromEntries(
        (Object.keys(scores) as Axis[]).map((axis) => [
          axis,
          Math.min(100, Math.round((scores[axis] / maxScore) * 100))
        ])
      ) as Record<Axis, number>,
    [scores]
  );

  const strongest = useMemo(() => {
    return (Object.keys(scores) as Axis[]).reduce((a, b) =>
      scores[a] >= scores[b] ? a : b
    );
  }, [scores]);

  function answer(answer: Answer) {
    const nextScores = {
      people: scores.people + answer.weights.people,
      performance: scores.performance + answer.weights.performance,
      systems: scores.systems + answer.weights.systems
    };

    setScores(nextScores);

    if (step === questions.length - 1) {
      setComplete(true);
      return;
    }

    setStep((value) => value + 1);
  }

  function reset() {
    setScores({ people: 0, performance: 0, systems: 0 });
    setStep(0);
    setComplete(false);
  }

  return (
    <section className="diagnostic section-pad section-pad--dark" id="diagnostic">
      <div className="section-kicker section-kicker--dark">
        <span>04 / MPP GROWTH DIAGNOSTIC</span>
        <span>5 Fragen · ca. 2 Minuten</span>
      </div>

      <div className="diagnostic__intro">
        <h2>
          Wo verliert Ihr Unternehmen
          <br />
          gerade <em>Wirkung?</em>
        </h2>
        <p>
          Fünf kurze Fragen zeigen, ob Ihr größter Hebel aktuell eher bei People,
          Performance oder Systems liegt.
        </p>
      </div>

      <div className="diagnostic__shell">
        <div className="diagnostic__question">
          {!complete ? (
            <>
              <div className="diagnostic__progress">
                <span>{current.eyebrow}</span>
                <span>{String(step + 1).padStart(2, "0")} / 05</span>
              </div>
              <h3>{current.question}</h3>
              <div className="diagnostic__answers">
                {current.answers.map((item) => (
                  <button key={item.label} type="button" onClick={() => answer(item)}>
                    <span>{item.label}</span>
                    <span aria-hidden="true">↗</span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="diagnostic__result">
              <p className="eyebrow eyebrow--dark">Ihre erste Einordnung</p>
              <h3>
                Ihr stärkster Hebel liegt aktuell bei{" "}
                <em>{labels[strongest]}.</em>
              </h3>
              <p>
                Das ist keine Diagnose im wissenschaftlichen Sinn, sondern eine
                strukturierte erste Orientierung für das Gespräch.
              </p>
              <div className="diagnostic__result-actions">
                <a className="button button--primary" href="#top">
                  Erstgespräch vorbereiten <span aria-hidden="true">→</span>
                </a>
                <button className="text-link text-link--dark" type="button" onClick={reset}>
                  Neu starten
                </button>
              </div>
            </div>
          )}
        </div>

        <aside className="diagnostic__profile" aria-label="MPP Profil">
          <div className="diagnostic__profile-head">
            <span>LIVE PROFILE</span>
            <span>MPP / 01</span>
          </div>

          {(Object.keys(scores) as Axis[]).map((axis) => (
            <div className="profile-axis" key={axis}>
              <div className="profile-axis__meta">
                <span>{labels[axis]}</span>
                <span>{percentages[axis]}%</span>
              </div>
              <div className="profile-axis__bar" aria-hidden="true">
                <span style={{ width: `${percentages[axis]}%` }} />
              </div>
            </div>
          ))}

          <p className="diagnostic__disclaimer">
            Richtungsprofil auf Basis Ihrer Antworten — keine erfundenen
            Benchmarks, keine externe Vergleichsdatenbank.
          </p>
        </aside>
      </div>
    </section>
  );
}
