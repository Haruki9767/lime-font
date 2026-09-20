# lime-font

A responsive type specimen website for **Handwritten Symbols**, a hybrid handwritten typeface with an expressive alphabet and a complete punctuation and symbol set.

## What is included

- A live specimen editor where visitors can type and test their own text.
- Preset phrases, copy, clear, and font-size controls.
- Uppercase, lowercase, figures, punctuation, quotation marks, and math symbols.
- A pink, white, and cherry-blossom visual theme with the supplied hero artwork.
- A custom client-side 404 page.
- SEO metadata, canonical URL, Open Graph/Twitter fields, JSON-LD, sitemap, and robots rules.
- The provided font files at [`client/public/lime-fonts.ttf`](client/public/lime-fonts.ttf) and [`client/public/lime-fonts.woff`](client/public/lime-fonts.woff).
- Separate font terms in [`FONT-LICENSE.md`](FONT-LICENSE.md); the font is not covered by the source-code MIT license.

## Development

This is a React 19 + Vite + TypeScript + Tailwind CSS static site.

```bash
pnpm install
pnpm dev
```

Open the local Vite URL shown in the terminal. To run the production checks:

```bash
pnpm check
pnpm build
```

The checked-in `lime-fonts.ttf` and `lime-fonts.woff` files are the authoritative font assets used by the site. CI validates the website without regenerating or modifying them.

## Font usage

```css
@font-face {
  font-family: "Handwritten Symbols";
  src: url("/lime-fonts.woff") format("woff"), url("/lime-fonts.ttf") format("truetype");
  font-display: swap;
}
```

The font was assembled by using the HandScript alphabet with the symbol set from HandwrittenCustom. Read [`FONT-LICENSE.md`](FONT-LICENSE.md) before using or distributing the font files.

## Creator

- Portfolio: https://lime.is-a.dev/
- GitHub: https://github.com/Haruki9767/
- About: https://l1me.de5.net/

## License

The website source is released under the MIT License. The font asset may have separate licensing or attribution requirements; verify those before redistribution.
