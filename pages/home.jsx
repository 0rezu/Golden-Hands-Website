// Home page
const { useState } = React;

function Hero({ onBook }) {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" />
      <div className="hero__bg-img" />
      <div className="hero__vignette" />

      <div className="hero__inner reveal in">
        <img src="assets/logo.png" alt="Golden Hands Barbershop" className="hero__crest" style={{ width: 200, height: 200, objectFit: "contain", margin: "0 auto 24px", display: "block" }} />
        <div className="hero__eyebrow">Est. Ottawa · Master Barbers</div>
        <h1 className="hero__title">
          Golden Hands
          <span className="script">Barbershop</span>
        </h1>
        <p className="hero__sub">
          We serve both <b>Walk-Ins</b> &nbsp;·&nbsp; And <b>Appointments</b>
        </p>
        <div className="hero__cta-row">
          <button className="btn-primary" onClick={onBook}>
            Book An Appointment <span>→</span>
          </button>
          <a href="tel:+13439618486" className="btn-ghost">
            Call (343) 961-8486
          </a>
        </div>
      </div>
    </section>
  );
}

function FeaturedServices({ onBook }) {
  const featured = window.GH.SERVICES.slice(0, 3);
  return (
    <section className="services" id="services">
      <div className="section">
        <div className="section__head reveal">
          <div>
            <div className="section__num">/ Services</div>
            <div className="section__kicker">The Menu</div>
          </div>
          <div>
            <h2 className="section__title">
              Most Booked <span className="script">cuts</span>
            </h2>
            <p className="section__desc">
              Every cut is hand-tailored. Hot towel finish, neck shave, and a clean line every visit.
            </p>
          </div>
        </div>

        <div className="svc-feature reveal">
          {featured.map(s => (
            <button key={s.id} className="svc-feature__card" onClick={() => onBook(s.id)}>
              <div className="svc-feature__price">${s.price}</div>
              <div className="svc-feature__name">{s.name}</div>
              <div className="svc-feature__dur">{s.dur} Minutes</div>
              <div className="svc-feature__blurb">{s.blurb}</div>
              <div className="svc-feature__arrow">Book Now <span>→</span></div>
            </button>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a href="services.html" className="btn-ghost">View Full Menu →</a>
        </div>
      </div>
    </section>
  );
}

function AboutTeaser() {
  return (
    <section className="teaser" style={{ background: "var(--bg)" }}>
      <div className="teaser__inner reveal">
        <div className="teaser__visual" data-label="SHOP INTERIOR">
          <div className="frame" />
        </div>
        <div className="teaser__copy">
          <div className="section__num">/ About</div>
          <h3>Black-Owned, <span className="script">Ottawa</span> Born</h3>
          <p>
            Welcome to Golden Hands Ottawa Barbershop — a proud Black-owned establishment
            dedicated to exceptional grooming. Precise haircuts, expert beard work, and
            an atmosphere built around respect.
          </p>
          <a href="barbers.html" className="teaser__cta">Meet the Barbers <span>→</span></a>
        </div>
      </div>
    </section>
  );
}

function ReviewsTeaser() {
  return (
    <section className="teaser teaser--reverse" style={{ background: "var(--bg-2)" }}>
      <div className="teaser__inner reveal">
        <div className="teaser__copy">
          <div className="section__num">/ Reviews</div>
          <h3>136 Five-Star <span className="script">cuts</span></h3>
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 20 }}>
            <div style={{ fontFamily: "var(--serif)", fontSize: 64, color: "var(--gold)", lineHeight: 1 }}>4.9</div>
            <div>
              <div style={{ color: "var(--gold)", fontSize: 18, letterSpacing: "0.1em", marginBottom: 4 }}>★ ★ ★ ★ ★</div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.18em", textTransform: "uppercase" }}>136 Verified Reviews</div>
            </div>
          </div>
          <p>
            "The best barbershop in Canada so far. Walked out looking sharper than I came in."
            <br /><span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.18em", textTransform: "uppercase", marginTop: 8, display: "inline-block" }}>— Aisha N. · Google Review</span>
          </p>
          <a href="reviews.html" className="teaser__cta">Read All Reviews <span>→</span></a>
        </div>
        <div className="teaser__visual" data-label="MASTER BARBER AT WORK" style={{ order: 1 }}>
          <div className="frame" />
        </div>
      </div>
    </section>
  );
}

function VisitSection() {
  const ADDRESS = "2201 Riverside Drive, Suite 99, Ottawa, ON K1H 8K9";
  const MAP_QUERY = encodeURIComponent(ADDRESS);
  const MAP_EMBED = `https://maps.google.com/maps?q=${MAP_QUERY}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const MAP_LINK  = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
  return (
    <section className="visit" id="visit">
      <div className="section">
        <div className="section__head reveal">
          <div>
            <div className="section__num">/ Visit</div>
            <div className="section__kicker">The Shop</div>
          </div>
          <div>
            <h2 className="section__title">
              Come <span className="script">in</span>
            </h2>
            <p className="section__desc">
              Walk-ins welcome any time during shop hours. Book ahead to lock your chair.
            </p>
          </div>
        </div>

        <div className="visit__inner reveal">
          <div className="visit__map real">
            <iframe
              src={MAP_EMBED}
              title="Golden Hands Barbershop location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="visit__map-open">
              Open in Maps <span>↗</span>
            </a>
          </div>
          <div className="visit__info">
            <h3>The Shop</h3>
            <dl>
              <div className="visit__row">
                <dt>Address</dt>
                <dd>
                  2201 Riverside Drive, Suite 99
                  <small>Ottawa, ON · K1H 8K9</small>
                </dd>
              </div>
              <div className="visit__row">
                <dt>Phone</dt>
                <dd><a href="tel:+13439618486" style={{ color: "var(--gold)" }}>(343) 961-8486</a></dd>
              </div>
              <div className="visit__row">
                <dt>Hours</dt>
                <dd>
                  <div className="visit__hours">
                    <span><b>Mon – Fri</b><span>9:00 AM – 8:00 PM</span></span>
                    <span><b>Saturday</b><span>9:00 AM – 7:00 PM</span></span>
                    <span><b>Sunday</b><span>10:00 AM – 5:00 PM</span></span>
                  </div>
                </dd>
              </div>
            </dl>
            <div style={{ display: "flex", gap: 10, marginTop: 28, flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={() => window.__openBooking()}>
                Book A Chair <span>→</span>
              </button>
              <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  const { PageShell } = window.GH;
  return (
    <PageShell current="home">
      <Hero onBook={() => window.__openBooking()} />
      <FeaturedServices onBook={(id) => window.__openBooking(id)} />
      <AboutTeaser />
      <ReviewsTeaser />
      <VisitSection />
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Home />);
