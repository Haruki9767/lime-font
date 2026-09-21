# lime-font

A responsive type specimen website for **Handwritten Symbols**, a hybrid handwritten typeface with an expressive alphabet and a complete punctuation and symbol set.

## What is included

- A live specimen editor where visitors can type and test their own text.
- Preset phrases, copy, clear, and font-size controls.
- Uppercase, lowercase, figures, punctuation, quotation marks, and math symbols.
- A pink, white, and cherry-blossom visual theme with the supplied hero artwork.
- A custom client-side 404 page.
- SEO metadata, canonical URL, Open Graph/Twitter fields, JSON-LD, sitemap, and robots rules.
- The provided font files at [`client/public/fonts/lime-fonts.ttf`](client/public/fonts/lime-fonts.ttf), [`client/public/fonts/lime-fonts.woff`](client/public/fonts/lime-fonts.woff), and generated [`client/public/fonts/lime-fonts.woff2`](client/public/fonts/lime-fonts.woff2).
- Font licensing in [`OFL.txt`](OFL.txt) and [`FONT-LICENSE.md`](FONT-LICENSE.md); the font is licensed separately from the source-code MIT license.

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

The checked-in `client/public/fonts/lime-fonts.ttf` and `client/public/fonts/lime-fonts.woff` files are the authoritative provided font assets. Run `pnpm font:woff2` or `python3 scripts/generate_woff2.py` to generate `client/public/fonts/lime-fonts.woff2` from the current TTF. The committed `client/public/background.jpg` is used as the hero and social preview image.

## Font usage

```css
@font-face {
  font-family: "Handwritten Symbols";
  src: url("/fonts/lime-fonts.woff2") format("woff2"), url("/fonts/lime-fonts.woff") format("woff"), url("/fonts/lime-fonts.ttf") format("truetype");
  font-display: swap;
}
```

The font was assembled by using the HandScript alphabet with the symbol set from HandwrittenCustom. Read [`OFL.txt`](OFL.txt) before using or distributing the font files.

## Creator

- Portfolio: https://lime.is-a.dev/
- GitHub: https://github.com/Haruki9767/
- About: https://l1me.de5.net/

## License

The website source is released under the MIT License. The font files are released separately under the SIL Open Font License, Version 1.1.
