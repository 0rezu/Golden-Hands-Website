// Barbers page
const { PageShell, PageHeader, BARBERS } = window.GH;

function BarberCard({ b, idx }) {
  return (
    <div className="barber-card reveal">
      <div className="barber-card__img" data-label={`PORTRAIT · ${b.name.toUpperCase()}`}>
        <div className="frame" />
      </div>
      <div className="barber-card__body">
        <div className="barber-card__num">/ Barber 0{idx + 1}</div>
        <div className="barber-card__name">{b.name}</div>
        <div className="barber-card__title">{b.title}</div>
        <p className="barber-card__bio">{b.bio}</p>
        <div className="barber-card__chips">
          {b.specialties.map(s => (
            <span key={s} className="barber-card__chip">{s}</span>
          ))}
        </div>
        <div className="barber-card__meta">
          <span><b>{b.years}+</b> Years Experience</span>
          <span>{b.instagram}</span>
        </div>
        <button className="barber-card__book" onClick={() => window.__openBooking()}>
          Book with {b.name} <span>→</span>
        </button>
      </div>
    </div>
  );
}

function BarbersList() {
  return (
    <section className="services" style={{ background: "var(--bg)" }}>
      <div className="section">
        <div className="section__head reveal">
          <div>
            <div className="section__num">/ The Team</div>
            <div className="section__kicker">Two Chairs · Master Hands</div>
          </div>
          <div>
            <h2 className="section__title">
              Meet the <span className="script">team</span>
            </h2>
            <p className="section__desc">
              Two seasoned barbers, one shared standard. Every member of the Golden Hands
              team is hand-picked for craft, character, and a genuine love of the work.
            </p>
          </div>
        </div>

        <div className="barbers-grid">
          {BARBERS.map((b, i) => <BarberCard key={b.id} b={b} idx={i} />)}
        </div>

        <div style={{ marginTop: 80, padding: 40, border: "1px solid var(--line)", background: "var(--bg-2)", textAlign: "center" }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.24em", color: "var(--gold)", textTransform: "uppercase", marginBottom: 14 }}>Or Just</div>
          <h3 style={{ fontFamily: "var(--serif)", fontSize: 28, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 20 }}>Walk Right In</h3>
          <p style={{ color: "var(--ink-2)", maxWidth: 600, margin: "0 auto 28px", lineHeight: 1.7 }}>
            No appointment? No problem. We welcome walk-ins any time during shop hours
            and we'll seat you with the next available chair.
          </p>
          <button className="btn-primary" onClick={() => window.__openBooking()}>
            Book A Chair <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function BarbersPage() {
  return (
    <PageShell current="barbers">
      <PageHeader
        kicker="Our Team"
        title="The"
        scriptWord="Barbers"
        subtitle="The hands behind the cut. Two master barbers, one shared standard of craft and care."
      />
      <BarbersList />
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<BarbersPage />);
