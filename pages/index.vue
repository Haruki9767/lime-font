<script setup>
import {
  ChevronDown,
  Copy,
  Github,
  Menu,
  Minus,
  Plus,
  X,
} from "lucide-vue-next";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const punctuation = "! ? @ # $ % & * ( ) [ ] { } — _ + = / \\ : ; , . ' \" `";
const symbols = "× ÷ ≠ ‘ ’ “ ”";
const testLines = [
  "A little less ordinary.",
  "Make a mark!",
  "Type / play / repeat",
];

const sample = ref("A little less ordinary.");
const size = ref(104);
const menuOpen = ref(false);
const copied = ref(false);

const sampleStyle = computed(() => ({ fontSize: `${size.value}px` }));

async function copySample() {
  try {
    await navigator.clipboard.writeText(sample.value);
    copied.value = true;
    window.setTimeout(() => (copied.value = false), 1400);
  } catch {
    copied.value = false;
  }
}

function setSample(line) {
  sample.value = line;
}

useHead({
  title: "Handwritten Symbols — Font Specimen",
  meta: [
    {
      name: "description",
      content:
        "Explore Handwritten Symbols, an expressive handwritten typeface with a complete punctuation and symbol set.",
    },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: "Handwritten Symbols — Font Specimen" },
    {
      property: "og:description",
      content:
        "An expressive alphabet paired with a full punctuation and symbol set.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://lime.is-a.dev/" },
    { property: "og:image", content: "https://lime.is-a.dev/background.jpg" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
  script: [
    {
      type: "application/ld+json",
      textContent: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Handwritten Symbols",
        url: "https://lime.is-a.dev/",
        description:
          "A responsive type specimen website for Handwritten Symbols.",
      }),
    },
  ],
});
</script>

<template>
  <div class="site-shell">
    <header id="top" class="site-header">
      <a class="wordmark" href="#top" aria-label="Handwritten Symbols home"
        >HS<span>·</span>01</a
      >
      <nav
        class="nav-links"
        :class="{ 'is-open': menuOpen }"
        aria-label="Primary navigation"
      >
        <a href="#specimen" @click="menuOpen = false">Specimen</a>
        <a href="#glyphs" @click="menuOpen = false">Glyphs</a>
        <a href="#about" @click="menuOpen = false">About</a>
      </nav>
      <a
        class="text-link header-repo-link"
        href="https://github.com/Haruki9767/lime-font"
        target="_blank"
        rel="noreferrer"
      >
        View on GitHub <Github :size="15" aria-hidden="true" />
      </a>
      <button
        class="menu-button"
        type="button"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <X v-if="menuOpen" :size="20" />
        <Menu v-else :size="20" />
      </button>
    </header>

    <main>
      <section class="hero" aria-labelledby="page-title">
        <div class="hero-rail" aria-hidden="true"><span>01</span><i /></div>
        <div class="hero-copy">
          <p class="eyebrow">A hybrid handwriting typeface</p>
          <h1 id="page-title">Handwritten<br /><em>Symbols</em></h1>
          <p class="hero-intro">
            An expressive alphabet paired with a full punctuation and symbol
            set..
          </p>
          <a class="text-link" href="#specimen"
            >Explore the specimen <span>↘</span></a
          >
        </div>
        <div class="hero-note">
          <span class="note-mark">✳</span><span>Made by<br />Lime.</span>
        </div>
      </section>

      <section class="statement-band" aria-label="Typeface statement">
        <p>
          Letters with a point of view<br /><span
            >and punctuation to match.</span
          >
        </p>
        <span class="band-index">HS / 01—26</span>
      </section>

      <section
        id="specimen"
        class="specimen-section section-wrap"
        aria-labelledby="specimen-title"
      >
        <div class="section-heading">
          <p class="eyebrow">Live specimen</p>
          <h2 id="specimen-title">Make it yours.</h2>
          <p class="section-description">
            Type a line, find your size, and see how the alphabet holds
            together.
          </p>
        </div>
        <div class="specimen-panel">
          <div class="panel-toolbar">
            <label for="sample-input">Your words</label>
            <div class="toolbar-actions">
              <button
                type="button"
                aria-label="Copy sample text"
                @click="copySample"
              >
                <Copy :size="15" /> {{ copied ? "Copied" : "Copy" }}
              </button>
              <span class="toolbar-divider" />
              <button
                type="button"
                aria-label="Decrease type size"
                @click="size = Math.max(40, size - 8)"
              >
                <Minus :size="15" />
              </button>
              <span class="size-value" aria-live="polite">{{ size }}px</span>
              <button
                type="button"
                aria-label="Increase type size"
                @click="size = Math.min(164, size + 8)"
              >
                <Plus :size="15" />
              </button>
            </div>
          </div>
          <textarea
            id="sample-input"
            v-model="sample"
            placeholder="Type here to test the font…"
            maxlength="120"
            spellcheck="false"
            aria-describedby="sample-help"
          />
          <div class="sample-preview" :style="sampleStyle">
            {{ sample || "Start typing" }}
          </div>
          <div class="panel-footer">
            <span id="sample-help"
              >Type in the box above, or try a phrase:</span
            >
            <div class="test-lines">
              <button
                v-for="line in testLines"
                :key="line"
                type="button"
                @click="setSample(line)"
              >
                {{ line }}
              </button>
              <button class="reset-button" type="button" @click="setSample('')">
                Clear
              </button>
              <span>{{ sample.length }}/120</span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="glyphs"
        class="glyph-section section-wrap"
        aria-labelledby="glyph-title"
      >
        <div class="glyph-intro">
          <p class="eyebrow">The complete set</p>
          <h2 id="glyph-title">All<br /><em>characters</em></h2>
        </div>
        <div class="glyph-list">
          <div class="glyph-row">
            <div class="row-label">Upper + lowercase</div>
            <div class="glyphs">{{ alphabet }}</div>
          </div>
          <div class="glyph-row">
            <div class="row-label">Figures</div>
            <div class="glyphs">{{ numbers }}</div>
          </div>
          <div class="glyph-row">
            <div class="row-label">Punctuation</div>
            <div class="glyphs">{{ punctuation }}</div>
          </div>
          <div class="glyph-row">
            <div class="row-label">Math + quotes</div>
            <div class="glyphs">{{ symbols }}</div>
          </div>
        </div>
      </section>

      <section id="about" class="about-section" aria-labelledby="about-title">
        <div class="about-number" />
        <div>
          <p class="eyebrow">About the build</p>
          <h2 id="about-title">Everything is<br /><em>Handwritten</em></h2>
        </div>
        <div class="about-copy">
          <p>
            Handwritten Symbols brings together the letterforms of HandScript
            with the punctuation and mathematical marks from Handwritten Custom.
          </p>
          <p>
            The result is a single, ready-to-use font for notes, posters,
            packaging, invitations, and any interface that needs a human accent.
          </p>
          <a
            class="button-link"
            href="https://github.com/Haruki9767/lime-font"
            target="_blank"
            rel="noreferrer"
            ><Github :size="16" /> View on GitHub</a
          >
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <span>Handwritten Symbols / 2026</span>
      <a href="#top"
        >Back to top <ChevronDown :size="15" class="rotate-up"
      /></a>
      <nav class="creator-links" aria-label="Creator links">
        <a href="https://lime.is-a.dev/" target="_blank" rel="noreferrer"
          >Portfolio</a
        >
        <a
          href="https://github.com/Haruki9767/"
          target="_blank"
          rel="noreferrer"
          >GitHub</a
        >
        <a
          href="https://github.com/Haruki9767/lime-font"
          target="_blank"
          rel="noreferrer"
          >Repo</a
        >
        <a href="https://lime.is-not.cool/" target="_blank" rel="noreferrer"
          >About me</a
        >
      </nav>
    </footer>
  </div>
</template>
