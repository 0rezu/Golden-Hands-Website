// Services page
const { PageShell, PageHeader, SERVICES } = window.GH;

function FullServices() {
  const onBook = (id) => window.__openBooking(id);
  return (
    <section className="services">
      <div className="section">
        <div className="section__head reveal">
          <div>
            <div className="section__num">/ The Board</div>
            <div className="section__kicker">Pricing, Plainly</div>
          </div>
          <div>
            <h2 className="section__title">
              Hand-Tailored, <span className="script">by the cut</span>
            </h2>
            <p className="section__desc">
              Every cut is hand-tailored by a master barber. Hot towel finish, neck shave,
              and a clean line every visit — no shortcuts, no rush.
            </p>
          </div>
        </div>

        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <button key={s.id} className="svc" onClick={() => onBook(s.id)}>
              <span className="svc__num">/ 0{i + 1}</span>
              <span className="svc__name">{s.name}</span>
              <span className="svc__dur">{s.dur} Min</span>
              <span className="svc__price">${s.price}</span>
              <span className="svc__book">Book <span>→</span></span>
            </button>
          ))}
        </div>

        <div style={{ marginTop: 80, padding: 40, border: "1px solid var(--line)", background: "var(--bg-2)", textAlign: "center" }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.24em", color: "var(--gold)", textTransform: "uppercase", marginBottom: 14 }}>Good To Know</div>
          <h3 style={{ fontFamily: "var(--serif)", fontSize: 28, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 20 }}>Booking Policy</h3>
          <p style={{ color: "var(--ink-2)", maxWidth: 600, margin: "0 auto 12px", lineHeight: 1.7 }}>
            Walk-ins are welcome any time during shop hours. For guaranteed seating,
            book at least 24 hours in advance. Cancellations within 2 hours of your
            appointment may be subject to a $10 fee.
          </p>
          <p style={{ color: "var(--ink-3)", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", marginTop: 20 }}>
            Cash · Debit · Credit · E-Transfer
          </p>
        </div>
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <PageShell current="services">
      <PageHeader
        kicker="What We Do"
        title="The"
        scriptWord="Craft"
        subtitle="Six signature services. One standard: walk out sharper than you walked in."
      />
      <FullServices />
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ServicesPage />);
