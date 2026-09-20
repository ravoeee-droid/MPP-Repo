export function Problem() {
  return (
    <section className="problem section-pad" id="problem">
      <div className="section-kicker">
        <span>05 / DIE WAHRE HERAUSFORDERUNG</span>
        <span>Recruiting allein reicht nicht.</span>
      </div>

      <div className="problem__grid">
        <div className="problem__statement">
          <p className="eyebrow">Wenn Wachstum an Einzelpersonen hängt</p>
          <h2>
            Gute Menschen lösen
            <br />
            <em>kein schlechtes System.</em>
          </h2>
        </div>

        <div className="problem__copy">
          <p>
            Eine Schlüsselrolle kann besetzt sein — und das Unternehmen trotzdem
            an Führung, Klarheit oder Struktur verlieren. MPP betrachtet deshalb
            nicht nur die Person, sondern das System, in dem sie wirksam werden
            soll.
          </p>
          <p>
            Erst wenn People, Performance und Systems zusammenspielen, entsteht
            Wachstum, das nicht an einzelnen Personen hängen bleibt.
          </p>
        </div>
      </div>

      <div className="problem__friction" aria-label="Vom Einzelproblem zur Systemperspektive">
        <div className="problem__friction-cell problem__friction-cell--people">
          <span>PEOPLE</span>
          <strong>Rolle besetzen</strong>
          <small>notwendig</small>
        </div>
        <div className="problem__friction-cell problem__friction-cell--performance">
          <span>PERFORMANCE</span>
          <strong>Leistung ermöglichen</strong>
          <small>entscheidend</small>
        </div>
        <div className="problem__friction-cell problem__friction-cell--systems">
          <span>SYSTEMS</span>
          <strong>Struktur schaffen</strong>
          <small>tragfähig</small>
        </div>
        <div className="problem__friction-cell problem__friction-cell--result">
          <span>RESULTAT</span>
          <strong>Wachstum ohne Dauerfeuer</strong>
          <small>das Ziel</small>
        </div>
      </div>
    </section>
  );
}
