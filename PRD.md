# PRD — Handwritten Symbols Font Specimen

## Product goal

Create a public-facing, static specimen page that lets a visitor understand and try the merged Handwritten Symbols typeface, inspect its character coverage, and download the provided TTF asset.

## Users

The primary user is a designer, art director, developer, or type-curious visitor evaluating the font for expressive print or digital use. This audience is inferred from the request for a font specimen and should be confirmed if the project expands beyond a draft.

## Goals

1. Make the font the unmistakable visual anchor of the first viewport.
2. Let visitors edit a sample phrase and adjust its display size.
3. Show uppercase/lowercase letters, numbers, punctuation, and math/quote symbols.
4. Provide a direct download action for the merged TTF.
5. Ship with truthful metadata, responsive structure, semantic headings, and reduced-motion support.
6. Avoid invented commercial claims, fake testimonials, or unverified brand identity.

## Non-goals

This draft does not include user accounts, payments, licensing checkout, analytics configuration, an API, a database, font editing, WOFF conversion, or a production publishing action. The backend and server directory remain unchanged.

## Functional requirements

| ID | Requirement | Acceptance criteria |
|---|---|---|
| FR-01 | Hero specimen | The first viewport identifies the typeface and shows the merged font at display scale. |
| FR-02 | Live editor | A labeled editable field changes the visible specimen text without page reload. |
| FR-03 | Size control | Plus and minus controls change size within bounded values and announce the current size. |
| FR-04 | Glyph inventory | The page shows alphabet, figures, punctuation, and symbols in readable groups. |
| FR-05 | Font download | Both download actions point to the local merged TTF asset. |
| FR-06 | Navigation | Header links move to the specimen, glyph, and about sections; mobile navigation can open and close. |
| FR-07 | Reduced motion | Non-essential motion is reduced when the user preference requests it. |

## Non-functional requirements

- Use a local `@font-face` asset so the specimen does not depend on a remote font CDN.
- Keep the project static and client-only.
- Use semantic HTML and native controls where possible.
- Maintain a minimum 320px layout width without intentional horizontal scrolling.
- Do not ship secrets, external API keys, or user-submitted data handling.
- Add a canonical URL, sitemap, and social image only after a production origin is confirmed.

## SEO and accessibility requirements

- Provide one descriptive page title and meta description.
- Keep one meaningful `h1` and an ordered heading hierarchy.
- Associate visible labels with the live editor.
- Give icon-only controls accessible names.
- Preserve visible focus and reduced-motion behavior.
- Do not invent structured data or organization claims.

## Security and privacy

The draft has no backend, authentication, data persistence, or external integrations. The browser Clipboard API is used only for an explicit user-triggered copy action and does not transmit content. A production host should add HTTPS, a restrictive CSP, and dependency monitoring.

## Acceptance criteria

1. `pnpm check` exits successfully.
2. `pnpm build` exits successfully.
3. The baseline web-quality scanner returns zero high-severity findings.
4. The font loads from `/HandwrittenSymbols-HandScriptAlphabet.ttf` in the rendered page.
5. The sample field, size controls, mobile menu, anchor navigation, and download links are present in source.
6. The final audit records untested manual checks rather than claiming them as passed.

## Rollout and rollback

For the draft, rollout means saving a WebDev checkpoint. Rollback is the WebDev checkpoint rollback tool. No external publishing is requested in this task.

## Open questions

1. What production HTTPS domain should be used for canonical and sitemap metadata?
2. Should the public specimen include a license text or a separate license download?
3. Should WOFF2 be generated for production delivery?
4. Is a social preview image required, and if so, what art direction is approved?

## Traceability

- The live specimen and glyph inventory trace to the user request for a font specimen.
- The local merged TTF traces to the previous font-merging task.
- SEO, security, accessibility, and anti-slop requirements trace to the requested audit skills and their checklists.
