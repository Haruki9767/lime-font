import { useMemo, useState } from "react";
import { ArrowDownToLine, ChevronDown, Copy, Menu, Minus, Plus, X } from "lucide-react";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const punctuation = "! ? @ # $ % & * ( ) [ ] { } — _ + = / \\ : ; , . ' \" `";
const symbols = "× ÷ ≠ ‘ ’ “ ”";
const testLines = ["A little less ordinary.", "Make a mark!", "Type / play / repeat"];

function GlyphRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="glyph-row">
      <div className="row-label">{label}</div>
      <div className="glyphs">{value}</div>
    </div>
  );
}

export default function Home() {
  const [sample, setSample] = useState("A little less ordinary.");
  const [size, setSize] = useState(104);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const sampleStyle = useMemo(() => ({ fontSize: `${size}px` }), [size]);

  const copySample = async () => {
    try {
      await navigator.clipboard.writeText(sample);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="site-shell">
      <header className="site-header" id="top">
        <a className="wordmark" href="#top" aria-label="Handwritten Symbols home">HS<span>·</span>01</a>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
          <a href="#specimen" onClick={() => setMenuOpen(false)}>Specimen</a>
          <a href="#glyphs" onClick={() => setMenuOpen(false)}>Glyphs</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </nav>
        <a className="download-link" href="/lime-fonts.ttf" download>
          Download font <ArrowDownToLine size={15} aria-hidden="true" />
        </a>
        <button className="menu-button" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <main>
        <section className="hero" aria-labelledby="page-title">
          <div className="hero-rail" aria-hidden="true"><span>01</span><i /></div>
          <div className="hero-copy">
            <p className="eyebrow">A hybrid handwriting typeface</p>
            <h1 id="page-title">Handwritten<br /><em>Symbols</em></h1>
            <p className="hero-intro">An expressive alphabet paired with a full punctuation and symbol set. Made for words that want to leave a mark.</p>
            <a className="text-link" href="#specimen">Explore the specimen <span>↘</span></a>
          </div>
          <div className="hero-note"><span className="note-mark">✳</span><span>One font.<br />Two voices.</span></div>
        </section>

        <section className="statement-band" aria-label="Typeface statement">
          <p>Letters with a point of view<br /><span>and punctuation to match.</span></p>
          <span className="band-index">HS / 01—26</span>
        </section>

        <section className="specimen-section section-wrap" id="specimen" aria-labelledby="specimen-title">
          <div className="section-heading">
            <p className="eyebrow">Live specimen</p>
            <h2 id="specimen-title">Make it yours.</h2>
            <p className="section-description">Type a line, find your size, and see how the alphabet holds together.</p>
          </div>
          <div className="specimen-panel">
            <div className="panel-toolbar">
              <label htmlFor="sample-input">Your words</label>
              <div className="toolbar-actions">
                <button type="button" onClick={copySample} aria-label="Copy sample text"><Copy size={15} /> {copied ? "Copied" : "Copy"}</button>
                <span className="toolbar-divider" />
                <button type="button" onClick={() => setSize((current) => Math.max(40, current - 8))} aria-label="Decrease type size"><Minus size={15} /></button>
                <span className="size-value" aria-live="polite">{size}px</span>
                <button type="button" onClick={() => setSize((current) => Math.min(164, current + 8))} aria-label="Increase type size"><Plus size={15} /></button>
              </div>
            </div>
            <textarea id="sample-input" value={sample} placeholder="Type here to test the font…" maxLength={120} spellCheck={false} onChange={(event) => setSample(event.target.value)} aria-describedby="sample-help" />
            <div className="sample-preview" style={sampleStyle}>{sample || "Start typing"}</div>
            <div className="panel-footer"><span id="sample-help">Type in the box above, or try a phrase:</span><div className="test-lines">{testLines.map((line) => <button type="button" key={line} onClick={() => setSample(line)}>{line}</button>)}<button type="button" className="reset-button" onClick={() => setSample("")}>Clear</button><span>{sample.length}/120</span></div></div>
          </div>
        </section>

        <section className="glyph-section section-wrap" id="glyphs" aria-labelledby="glyph-title">
          <div className="glyph-intro">
            <p className="eyebrow">The complete set</p>
            <h2 id="glyph-title">Every mark<br /><em>counts.</em></h2>
          </div>
          <div className="glyph-list">
            <GlyphRow label="Upper + lowercase" value={alphabet} />
            <GlyphRow label="Figures" value={numbers} />
            <GlyphRow label="Punctuation" value={punctuation} />
            <GlyphRow label="Math + quotes" value={symbols} />
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="about-number">02</div>
          <div>
            <p className="eyebrow">About the build</p>
            <h2 id="about-title">Two gestures,<br /><em>one rhythm.</em></h2>
          </div>
          <div className="about-copy">
            <p>Handwritten Symbols brings together the letterforms of HandScript with the punctuation and mathematical marks from Handwritten Custom.</p>
            <p>The result is a single, ready-to-use font for notes, posters, packaging, invitations, and any interface that needs a human accent.</p>
            <a className="button-link" href="/lime-fonts.ttf" download>Get the TTF <ArrowDownToLine size={16} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Handwritten Symbols / 2026</span>
        <a href="#top">Back to top <ChevronDown size={15} className="rotate-up" /></a>
        <nav className="creator-links" aria-label="Creator links">
          <a href="https://lime.is-a.dev/" target="_blank" rel="noreferrer">Portfolio</a>
          <a href="https://github.com/Haruki9767/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://l1me.de5.net/" target="_blank" rel="noreferrer">About me</a>
        </nav>
      </footer>
    </div>
  );
}
