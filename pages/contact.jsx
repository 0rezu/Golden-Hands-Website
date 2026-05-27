// Contact page — Golden Hands aesthetic
const { useState } = React;
const { PageShell, PageHeader } = window.GH;

const SUBJECTS = [
  "General question",
  "Booking question",
  "Group / event booking",
  "Press / partnership",
  "Feedback",
  "Other",
];

function ContactGrid() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", subject: SUBJECTS[0], message: "" });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  return (
    <section style={{ background: "var(--bg)" }}>
      <div className="contact-grid">
        <div className="contact-info reveal">
          <div className="section__num" style={{ marginBottom: 18 }}>/ The Details</div>
          <h3>
            Stop <span className="script">by.</span>
          </h3>
          <dl>
            <div>
              <dt>Address</dt>
              <dd>
                2201 Riverside Drive, Suite 99<br />
                Ottawa, ON · K1H 8K9
              </dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>
                Mon – Fri · 9:00 AM – 8:00 PM<br />
                Saturday · 9:00 AM – 7:00 PM<br />
                Sunday · 10:00 AM – 5:00 PM
              </dd>
            </div>
            <div>
              <dt>Call</dt>
              <dd><a href="tel:+13439618486">(343) 961-8486</a></dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd><a href="mailto:hello@goldenhandsbarber.com">hello@goldenhandsbarber.com</a></dd>
            </div>
            <div>
              <dt>Parking</dt>
              <dd>Free on-site parking out front and in the rear lot.</dd>
            </div>
          </dl>
        </div>

        <div className="reveal">
          {!sent ? (
            <form className="contact-form" onSubmit={submit}>
              <div className="section__num" style={{ marginBottom: 8 }}>/ Send A Note</div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px, 3.4vw, 40px)", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 24, lineHeight: 1.1 }}>
                We'd love to <span style={{ fontFamily: "var(--script)", color: "var(--gold)", textTransform: "none", letterSpacing: 0 }}>hear</span> from you
              </h3>
              <div className="field">
                <label>Name</label>
                <input value={form.name} onChange={e => set("name", e.target.value)} placeholder="Your name" required />
              </div>
              <div className="field">
                <label>Email or Phone</label>
                <input value={form.contact} onChange={e => set("contact", e.target.value)} placeholder="How can we reach you?" required />
              </div>
              <div className="field">
                <label>Subject</label>
                <select value={form.subject} onChange={e => set("subject", e.target.value)}>
                  {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="field">
                <label>Message</label>
                <textarea value={form.message} onChange={e => set("message", e.target.value)} placeholder="What's on your mind?" required />
              </div>
              <button type="submit">Send Message <span>→</span></button>
            </form>
          ) : (
            <div className="contact-form">
              <div className="sent">
                <div style={{ width: 60, height: 60, border: "1px solid var(--gold)", borderRadius: "50%", margin: "0 auto 18px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gold)", fontSize: 26 }}>✓</div>
                <h4>Message received</h4>
                <p>Thank you, {form.name || "friend"}. We'll get back to you within one business day.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <PageShell current="contact">
      <PageHeader
        kicker="Get In Touch"
        title="Say"
        scriptWord="hello"
        subtitle="Have a question, want to book a group, or just want to say hi? We're a phone call, an email, or a short walk away."
      />
      <ContactGrid />
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ContactPage />);
