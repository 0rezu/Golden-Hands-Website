// Reviews page
const { PageShell, PageHeader, REVIEWS } = window.GH;

function ReviewsFull() {
  const bars = [
    { star: 5, n: 134, w: "98%" },
    { star: 4, n: 0,   w: "0%" },
    { star: 3, n: 0,   w: "0%" },
    { star: 2, n: 0,   w: "0%" },
    { star: 1, n: 2,   w: "2%" },
  ];
  return (
    <section className="reviews">
      <div className="section">
        <div className="rev-top reveal">
          <div>
            <div className="rev-score">4.9<sup>/5</sup></div>
          </div>
          <div>
            <div className="rev-stars">★ ★ ★ ★ ★</div>
            <div className="rev-count">Based on 136 Verified Reviews</div>
          </div>
          <div className="rev-bars">
            {bars.map(b => (
              <div className="rev-bar" key={b.star}>
                <span>{b.star} ★</span>
                <div className="track"><div className="fill" style={{ width: b.w }} /></div>
                <span>{b.n}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rev-grid reveal">
          {REVIEWS.map((r, i) => (
            <div key={i} className="rev-card">
              <div className="stars">{"★".repeat(r.stars)}</div>
              <blockquote>"{r.text}"</blockquote>
              <div className="who">
                <div className="avatar">{r.name[0]}</div>
                <div className="meta">
                  <div className="name">{r.name}</div>
                  <div className="when">{r.when} · From Google</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 80, padding: 40, border: "1px solid var(--line)", background: "var(--bg-2)", textAlign: "center" }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.24em", color: "var(--gold)", textTransform: "uppercase", marginBottom: 14 }}>Just Visited?</div>
          <h3 style={{ fontFamily: "var(--serif)", fontSize: 28, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 20 }}>Share Your Cut</h3>
          <p style={{ color: "var(--ink-2)", maxWidth: 600, margin: "0 auto 28px", lineHeight: 1.7 }}>
            Honest reviews help us keep getting better — and help other guys find a barber they can trust.
          </p>
          <a href="#" className="btn-primary">Write a Review <span>→</span></a>
        </div>
      </div>
    </section>
  );
}

function ReviewsPage() {
  return (
    <PageShell current="reviews">
      <PageHeader
        kicker="Customer Reviews"
        title="The"
        scriptWord="Word"
        subtitle="136 five-star reviews and counting. Honest feedback from real clients."
      />
      <ReviewsFull />
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ReviewsPage />);
