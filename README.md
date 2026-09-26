# lime-font

A responsive type specimen website for **Handwritten Symbols**, a hybrid handwritten typeface with an expressive alphabet and a complete punctuation and symbol set.

## What is included

- A live specimen editor where visitors can type and test their own text.
- Preset phrases, copy, clear, and font-size controls.
- Uppercase, lowercase, figures, punctuation, quotation marks, and math symbols.
- A pink, white, and cherry-blossom visual theme with the supplied hero artwork.
- A custom client-side 404 page.
- SEO metadata, canonical URL, Open Graph/Twitter fields, JSON-LD, sitemap, and robots rules.
- The provided font files at [`public/fonts/lime-fonts.ttf`](public/fonts/lime-fonts.ttf), [`public/fonts/lime-fonts.woff`](public/fonts/lime-fonts.woff), and generated [`public/fonts/lime-fonts.woff2`](public/fonts/lime-fonts.woff2).
- Font licensing in [`OFL.txt`](OFL.txt) and [`FONT-LICENSE.md`](FONT-LICENSE.md); the font is licensed separately from the source-code MIT license.

## Stack

This is a **Nuxt 4 + Vue 3 + TypeScript** site managed with the latest pinned pnpm release used by the project.

The migration keeps the existing visual design, authored CSS, local font files, copy, responsive breakpoints, SEO assets, and specimen interactions. The former React/Vite implementation has been replaced by Nuxt pages and Vue Composition API state.

## Development

```bash
pnpm install
pnpm dev
```

Open the local Nuxt URL shown in the terminal. To run the production checks:

```bash
pnpm check
pnpm build
pnpm generate
```

The checked-in `public/fonts/lime-fonts.ttf` and `public/fonts/lime-fonts.woff` files are the authoritative provided font assets. Run `pnpm font:woff2` or `python3 scripts/generate_woff2.py` to generate `public/fonts/lime-fonts.woff2` from the current TTF. The committed `public/background.jpg` is used as the hero and social preview image.

## Cloudflare Pages

The project is configured for Nuxt's Cloudflare Pages preset. [`wrangler.toml`](wrangler.toml) points Cloudflare Pages at Nuxt's generated `dist` directory; do not use the former Vite `dist/public` output directory.

## Font usage

```css
@font-face {
  font-family: "Handwritten Symbols";
  src:
    url("/fonts/lime-fonts.woff2") format("woff2"),
    url("/fonts/lime-fonts.woff") format("woff"),
    url("/fonts/lime-fonts.ttf") format("truetype");
  font-display: swap;
}
```

The font was assembled by using the HandScript alphabet with the symbol set from HandwrittenCustom. Read [`OFL.txt`](OFL.txt) before using or distributing the font files.

## Creator

- Portfolio: https://lime.is-a.dev/
- GitHub: https://github.com/Haruki9767/
- About: https://lime.is-not.cool/

## License

The website source is released under the MIT License. The font files are released separately under the SIL Open Font License, Version 1.1.
