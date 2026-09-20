const yes = [
  "wenn Wachstum nicht mehr nur über einzelne Leistungsträger funktionieren soll",
  "wenn Schlüsselrollen wirklich zum System passen müssen",
  "wenn Führung, Vertrieb und Organisation zusammengedacht werden sollen"
];

const no = [
  "wenn nur möglichst schnell irgendein Lebenslauf geliefert werden soll",
  "wenn Veränderung ausschließlich an Mitarbeitende ausgelagert werden soll",
  "wenn Symptome behandelt werden sollen, ohne Ursachen anzusehen"
];

export function Fit() {
  return (
    <section className="fit section-pad" id="fit">
      <div className="section-kicker">
        <span>12 / FIT</span>
        <span>Für Unternehmen, die mehr vorhaben.</span>
      </div>

      <div className="fit__headline">
        <h2>
          MPP passt,
          <br />
          wenn Wachstum <em>Verantwortung</em> bedeutet.
        </h2>
      </div>

      <div className="fit__columns">
        <article className="fit-column fit-column--yes">
          <span className="fit-column__label">MPP PASST,</span>
          {yes.map((item) => (
            <div className="fit-row" key={item}>
              <i aria-hidden="true">+</i>
              <p>{item}</p>
            </div>
          ))}
        </article>

        <article className="fit-column fit-column--no">
          <span className="fit-column__label">MPP PASST WENIGER,</span>
          {no.map((item) => (
            <div className="fit-row" key={item}>
              <i aria-hidden="true">−</i>
              <p>{item}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
