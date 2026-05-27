// Golden Hands Barbershop — shared components and data
// Exposed via window for cross-script access (each <script type="text/babel"> has its own scope)
const { useState, useEffect, useRef } = React;

// ============================================
// DATA
// ============================================
const SERVICES = [
  { id: "combo",   name: "Adult Haircut, Beard & Lineup", dur: 35, price: 46, blurb: "The full ritual — sharp cut, beard sculpt, and a clean lineup. Includes hot-towel finish." },
  { id: "adult",   name: "Adult Haircut",                 dur: 30, price: 35, blurb: "Precision cut tailored to your style. Shampoo, scissor work, taper or fade." },
  { id: "kids",    name: "Kids Haircut",                  dur: 30, price: 25, blurb: "Patient, friendly cuts for the next generation. Ages 12 and under." },
  { id: "senior",  name: "Senior Haircut",                dur: 30, price: 22, blurb: "A respectful cut and a quiet chair. Ages 65+." },
  { id: "beard",   name: "Beard & Lineup",                dur: 20, price: 16, blurb: "Shaped, sculpted, and razor-clean lines. Hot towel finish." },
  { id: "student", name: "Student Haircut",               dur: 30, price: 30, blurb: "A sharper version of you, on a student budget. Valid ID required." },
];

const BARBERS = [
  {
    id: "marcus",
    name: "Marcus",
    title: "Founder · Master Barber",
    years: 14,
    specialties: ["Skin Fades", "Beard Sculpting", "Hot Towel Shaves"],
    bio: "Marcus opened Golden Hands with one rule: nobody leaves the chair unless he'd be proud to bump into them on the street. Trained in Toronto and Ottawa, his fades are precise and his conversation is unrushed.",
    instagram: "@marcus.goldenhands",
  },
  {
    id: "kwame",
    name: "Kwame",
    title: "Senior Barber",
    years: 8,
    specialties: ["Tapers", "Lineups", "Kids Cuts"],
    bio: "Kwame is the steady hand behind some of the cleanest lineups in Ottawa. Patient with first-timers and the kids' favorite — they request him by name.",
    instagram: "@kwame.cuts",
  },
];

const REVIEWS = [
  { name: "Aisha Nakamya",   when: "2 days ago",  text: "The best barbershop in Canada so far. Walked out looking sharper than I came in.", stars: 5 },
  { name: "Arsene Wenga",    when: "3 days ago",  text: "Best service I've had in Ottawa. Will absolutely be back.", stars: 5 },
  { name: "Natacha Dessande",when: "Last week",   text: "J'ai adoré ma coupe. Ils sont respectueux et professionnels. Loved my haircut.", stars: 5 },
  { name: "Brandon Yu",      when: "Last month",  text: "Booked online, walked in, got the cleanest lineup I've had in years.", stars: 5 },
  { name: "Malise Ngo Nwalal",when:"2 days ago",  text: "Good service. Friendly staff, fair price, great cut. Hard to beat.", stars: 5 },
  { name: "Shigdo Defi",     when: "2 months ago",text: "Atmosphere is welcoming, conversation is real. This place feels like home.", stars: 5 },
];

// ============================================
// LOGO
// ============================================
function Logo({ size = 60, withText = false }) {
  return (
    <div className="logo" style={{ display: "inline-flex", alignItems: "center", gap: 14 }}>
      <img src="assets/logo.png" alt="Golden Hands Barbershop" style={{ width: size, height: size, objectFit: "contain" }} />
      {withText && (
        <span style={{ fontFamily: "var(--serif)", letterSpacing: "0.18em", fontSize: 13, fontWeight: 500 }}>
          GOLDEN HANDS <span className="script" style={{ fontFamily: "var(--script)", color: "var(--gold)", fontSize: 22, letterSpacing: 0, marginLeft: -2 }}>Barbershop</span>
        </span>
      )}
    </div>
  );
}

// ============================================
// NAV
// ============================================
const PAGES = [
  { href: "index.html",    key: "home",     label: "Home" },
  { href: "services.html", key: "services", label: "Services" },
  { href: "barbers.html",  key: "barbers",  label: "Barbers" },
  { href: "gallery.html",  key: "gallery",  label: "Gallery" },
  { href: "reviews.html",  key: "reviews",  label: "Reviews" },
  { href: "contact.html",  key: "contact",  label: "Contact" },
];

function Nav({ onBook, current }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <a href="index.html" className="nav__brand">
        <img src="assets/logo.png" alt="" style={{ width: 40, height: 40, objectFit: "contain" }} />
        <span className="nav__brand-text">
          GOLDEN HANDS <span className="script">Barbershop</span>
        </span>
      </a>
      <div className={"nav__links" + (mobile ? " open" : "")}>
        {PAGES.map(p => (
          <a key={p.key} href={p.href} className={current === p.key ? "active" : ""} onClick={() => setMobile(false)}>
            {p.label}
          </a>
        ))}
      </div>
      <div className="nav__right">
        <a href="tel:+13439618486" className="nav__phone">+1 (343) 961-8486</a>
        <button className="nav__cta" onClick={onBook}>
          Book Now <span>→</span>
        </button>
        <button className="nav__burger" onClick={() => setMobile(m => !m)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

// ============================================
// MARQUEE
// ============================================
function Marquee({ items }) {
  const list = items || [
    "Adult Cuts", "Beard & Lineup", "Kids Cuts", "Senior Cuts",
    "Student Cuts", "Hot Towel Shave", "Walk-Ins Welcome", "Black-Owned",
  ];
  const seq = [...list, ...list, ...list];
  return (
    <div className="marquee">
      <div className="marquee__track">
        {seq.map((s, i) => (
          <span key={i} className="marquee__item">
            {s} <span className="star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ============================================
// PAGE HEADER (for inner pages)
// ============================================
function PageHeader({ kicker, title, scriptWord, subtitle }) {
  return (
    <header className="page-head">
      <div className="page-head__bg" />
      <div className="page-head__vignette" />
      <div className="page-head__inner reveal in">
        <div className="page-head__eyebrow">
          <span /> {kicker} <span />
        </div>
        <h1 className="page-head__title">
          {title} {scriptWord && <span className="script">{scriptWord}</span>}
        </h1>
        {subtitle && <p className="page-head__sub">{subtitle}</p>}
      </div>
    </header>
  );
}

// ============================================
// FOOTER
// ============================================
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <img src="assets/logo.png" alt="" style={{ width: 80, height: 80, objectFit: "contain", marginBottom: 16 }} />
            <h4>Golden Hands<span className="script">Barbershop</span></h4>
            <p>Proud Black-owned. Master cuts, hot towel finishes, and a welcoming chair every single time.</p>
          </div>
          <div className="footer__col">
            <h5>Shop</h5>
            <ul>
              <li><a href="services.html">Services</a></li>
              <li><a href="barbers.html">Barbers</a></li>
              <li><a href="gallery.html">Gallery</a></li>
              <li><a href="reviews.html">Reviews</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h5>Visit</h5>
            <ul>
              <li>2201 Riverside Dr</li>
              <li>Suite 99, Ottawa, ON</li>
              <li>K1H 8K9</li>
              <li><a href="tel:+13439618486">(343) 961-8486</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h5>Follow</h5>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">TikTok</a></li>
              <li><a href="#">Google</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Golden Hands Ottawa Barbershop</span>
          <span>Ottawa, Canada</span>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// BOOKING MODAL
// ============================================
function BookingModal({ open, onClose, initialService }) {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [barber, setBarber] = useState("any");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (open) {
      setStep(initialService ? 1 : 0);
      setPicked(initialService ? SERVICES.find(s => s.id === initialService) : null);
      setDate(null); setTime(null); setBarber("any");
    }
  }, [open, initialService]);

  useEffect(() => {
    const fn = e => { if (e.key === "Escape" && open) onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [open, onClose]);

  if (!open) return null;

  const today = new Date();
  const dates = Array.from({ length: 8 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    return d;
  });
  const times = ["9:00", "9:45", "10:30", "11:15", "12:00", "1:30", "2:15", "3:00", "3:45", "4:30", "5:15", "6:00", "6:45", "7:30"];
  const disabledTimes = new Set(["10:30", "1:30", "3:45", "6:00"]);
  const dows = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const next = () => setStep(s => Math.min(3, s + 1));
  const back = () => setStep(s => Math.max(0, s - 1));

  const canNext =
    (step === 0 && picked) ||
    (step === 1 && date && time) ||
    (step === 2 && name && phone);

  const scriptStyle = { fontFamily: "var(--script)", color: "var(--gold)", textTransform: "none" };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>×</button>

        {step < 3 && (
          <div className="modal__progress">
            <span className={step === 0 ? "active" : step > 0 ? "done" : ""} />
            <span className={step === 1 ? "active" : step > 1 ? "done" : ""} />
            <span className={step === 2 ? "active" : step > 2 ? "done" : ""} />
          </div>
        )}

        {step === 0 && (
          <>
            <div className="modal__step-meta">Step 01 / Service</div>
            <h3 className="modal__title">Choose your <span style={scriptStyle}>cut</span></h3>
            <div className="svc-pick">
              {SERVICES.map(s => (
                <button
                  key={s.id}
                  className={"svc-opt" + (picked?.id === s.id ? " selected" : "")}
                  onClick={() => setPicked(s)}
                >
                  <span className="name">{s.name}</span>
                  <span className="dur">{s.dur} Min</span>
                  <span className="price">${s.price}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <div className="modal__step-meta">Step 02 / Date · Time · Barber</div>
            <h3 className="modal__title">Pick your <span style={scriptStyle}>chair</span></h3>
            <div className="barber-pick">
              <button className={"barber-opt" + (barber === "any" ? " selected" : "")} onClick={() => setBarber("any")}>
                Any Barber
              </button>
              {BARBERS.map(b => (
                <button key={b.id} className={"barber-opt" + (barber === b.id ? " selected" : "")} onClick={() => setBarber(b.id)}>
                  {b.name}
                </button>
              ))}
            </div>
            <div className="date-grid">
              {dates.map((d, i) => (
                <button
                  key={i}
                  className={"date-tile" + (date && d.toDateString() === date.toDateString() ? " selected" : "")}
                  onClick={() => setDate(d)}
                >
                  <div className="dow">{dows[d.getDay()]}</div>
                  <div className="day">{d.getDate()}</div>
                </button>
              ))}
            </div>
            <div className="time-grid">
              {times.map(t => (
                <button
                  key={t}
                  className={"time-tile" + (time === t ? " selected" : "")}
                  disabled={disabledTimes.has(t)}
                  onClick={() => setTime(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="modal__step-meta">Step 03 / Details</div>
            <h3 className="modal__title">Your <span style={scriptStyle}>info</span></h3>
            <div className="summary">
              <div className="summary__row"><dt>Service</dt><dd>{picked.name}</dd></div>
              <div className="summary__row"><dt>Barber</dt><dd>{barber === "any" ? "Any Available" : BARBERS.find(b => b.id === barber).name}</dd></div>
              <div className="summary__row"><dt>Date</dt><dd>{date.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })}</dd></div>
              <div className="summary__row"><dt>Time</dt><dd>{time}</dd></div>
              <div className="summary__row total"><dt>Total</dt><dd>${picked.price}</dd></div>
            </div>
            <div className="field">
              <label>Full Name</label>
              <input value={name} onChange={e => setName(e.target.value)} placeholder="John Smith" />
            </div>
            <div className="field">
              <label>Phone</label>
              <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="(613) 555-0100" />
            </div>
            <div className="field">
              <label>Notes (optional)</label>
              <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={3} placeholder="Anything we should know about your cut" />
            </div>
          </>
        )}

        {step === 3 && (
          <div className="confirm">
            <div className="check">✓</div>
            <h4>You're <span style={scriptStyle}>booked</span></h4>
            <p>
              We'll see you on <b style={{ color: "var(--gold)" }}>{date.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })}</b> at <b style={{ color: "var(--gold)" }}>{time}</b>.
              <br />A confirmation text is on the way to {phone}.
            </p>
            <button className="btn-primary" onClick={onClose}>Done</button>
          </div>
        )}

        {step < 3 && (
          <div className="modal__actions">
            {step > 0 ? (
              <button className="btn-ghost" onClick={back}>← Back</button>
            ) : <span />}
            <button
              className="btn-primary"
              disabled={!canNext}
              style={{ opacity: canNext ? 1 : 0.4, pointerEvents: canNext ? "auto" : "none" }}
              onClick={next}
            >
              {step === 2 ? "Confirm Booking" : "Continue"} <span>→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================
// REVEAL ON SCROLL
// ============================================
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ============================================
// TWEAKS
// ============================================
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "gold"
}/*EDITMODE-END*/;

const ACCENTS = {
  gold:    { "--gold": "#c9a45c", "--gold-2": "#e0bd75", "--gold-deep": "#8a6a2f" },
  copper:  { "--gold": "#c97a3d", "--gold-2": "#e09659", "--gold-deep": "#8a4f24" },
  silver:  { "--gold": "#b8b8c4", "--gold-2": "#d6d6e0", "--gold-deep": "#7a7a85" },
  emerald: { "--gold": "#5ec98a", "--gold-2": "#82e0a8", "--gold-deep": "#2f8a5a" },
};

function applyAccent(name) {
  const root = document.documentElement;
  const accent = ACCENTS[name] || ACCENTS.gold;
  Object.entries(accent).forEach(([k, v]) => root.style.setProperty(k, v));
}

function TweaksUI({ t, setTweak }) {
  const { TweaksPanel, TweakSection, TweakRadio } = window;
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Accent" />
      <TweakRadio
        label="Theme"
        value={t.accent}
        onChange={v => setTweak("accent", v)}
        options={["gold", "copper", "silver", "emerald"]}
      />
    </TweaksPanel>
  );
}

// ============================================
// PAGE SHELL — wraps page content with nav, footer, tweaks, fab, booking modal
// ============================================
function PageShell({ current, children }) {
  const [bookOpen, setBookOpen] = useState(false);
  const [initial, setInitial] = useState(null);
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);

  useReveal();
  useEffect(() => { applyAccent(t.accent); }, [t.accent]);

  const openBook = (id) => {
    setInitial(typeof id === "string" ? id : null);
    setBookOpen(true);
  };

  // Expose to children
  window.__openBooking = openBook;

  return (
    <div className="grain">
      <Nav onBook={() => openBook(null)} current={current} />
      {children}
      <Footer />
      <BookingModal open={bookOpen} onClose={() => setBookOpen(false)} initialService={initial} />
      <TweaksUI t={t} setTweak={setTweak} />
    </div>
  );
}

// ============================================
// EXPOSE
// ============================================
Object.assign(window, {
  GH: {
    SERVICES, BARBERS, REVIEWS, PAGES,
    Logo, Nav, Marquee, Footer, PageHeader, BookingModal, PageShell,
    TweaksUI, useReveal, applyAccent, TWEAK_DEFAULTS, ACCENTS,
  },
});
