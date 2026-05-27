// Gallery page
const { PageShell, PageHeader } = window.GH;

function GalleryGrid() {
  const tiles = [
    { cls: "gt-1", label: "Faded High-Top",  tag: "Adult Cut" },
    { cls: "gt-2", label: "Lineup Detail",   tag: "Beard" },
    { cls: "gt-3", label: "Chair No. 1",     tag: "Interior" },
    { cls: "gt-4", label: "Crisp Taper",     tag: "Style" },
    { cls: "gt-5", label: "Tools Of Trade",  tag: "Craft" },
    { cls: "gt-6", label: "Front Window",    tag: "Shop" },
    { cls: "gt-7", label: "Beard Sculpt",    tag: "Beard" },
    { cls: "gt-8", label: "Sharp & Clean",   tag: "Adult Cut" },
  ];
  return (
    <section className="gallery">
      <div className="section">
        <div className="section__head reveal">
          <div>
            <div className="section__num">/ Portfolio</div>
            <div className="section__kicker">The Work</div>
          </div>
          <div>
            <h2 className="section__title">
              Recent <span className="script">work</span>
            </h2>
            <p className="section__desc">
              A look at the cuts, the shop, and the tools that make every visit feel
              like a ritual. Hover any tile for detail.
            </p>
          </div>
        </div>

        <div className="gal-grid reveal">
          {tiles.map((t, i) => (
            <div key={i} className={"gal-tile " + t.cls} data-label={t.label}>
              <div className="overlay"><span>{t.tag}</span></div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 80, padding: 40, border: "1px solid var(--line)", background: "var(--bg-2)", textAlign: "center" }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.24em", color: "var(--gold)", textTransform: "uppercase", marginBottom: 14 }}>Follow Along</div>
          <h3 style={{ fontFamily: "var(--serif)", fontSize: 28, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 20 }}>See More on Instagram</h3>
          <p style={{ color: "var(--ink-2)", maxWidth: 600, margin: "0 auto 28px", lineHeight: 1.7 }}>
            Fresh cuts dropped daily. Tag <span style={{ color: "var(--gold)" }}>@goldenhandsbarber</span> to be featured.
          </p>
          <a href="#" className="btn-ghost">Follow on Instagram →</a>
        </div>
      </div>
    </section>
  );
}

function GalleryPage() {
  return (
    <PageShell current="gallery">
      <PageHeader
        kicker="Photo Gallery"
        title="The"
        scriptWord="Work"
        subtitle="Selected cuts, lineups, and shop moments. Photography placeholder — drop real photos in to bring this to life."
      />
      <GalleryGrid />
    </PageShell>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<GalleryPage />);
