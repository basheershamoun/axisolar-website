# Solor — Astro rebuild

A faithful rebuild of the Solor WordPress/Elementor theme
(https://demo.awaikenthemes.com/solor/) in Astro + Tailwind v4, keeping the
original's design and animation polish while dropping WordPress, jQuery and
GSAP.

## Stack
- **Astro 7** — static output, zero JS by default
- **Tailwind v4** via `@tailwindcss/vite` (CSS-first config, no tailwind.config.js)
- **Motion v13** (`motion`) — WAAPI-backed, replaces GSAP + ScrollTrigger + SplitType
- Self-hosted fonts via Fontsource: **Rajdhani** (display) + **Rubik** (body)

## Non-negotiable rules

### 1. Colours come from tokens. Always.
Every colour, font, radius and duration lives in `src/styles/tokens.css` as a
`:root` custom property. **Never hardcode a hex value in a component.**
Use `var(--color-accent)`, `var(--font-display)`, `var(--radius-pill)`, etc.
`src/styles/global.css` bridges these into Tailwind's `@theme`, so
`bg-accent` / `text-heading` / `font-display` utilities resolve to the same
variables. Adding a new colour means adding a token first.

### 2. Styling approach
Prefer a scoped `<style>` block in the `.astro` component using token vars.
Tailwind utilities are fine for layout (`flex`, `grid`, `gap-*`).
Do not invent new spacing scales — use `--section-py`, `--container-pad`.

### 3. Animation
Never import GSAP. Use the helpers in `src/lib/animations.ts`, driven by markup:
- `data-anim="up|down|left|right|fade"` + optional `data-anim-delay="0.2"` — entrance
- `class="reveal-image"` on a wrapper containing an `<img>` — the slide reveal
- `<SplitText text="..." mode="words|chars" as="h2" />` — per-word/char heading reveal
  (spans are generated at BUILD time — never split text at runtime)
- `data-count-to="250"` — animated counter
- `data-progress="85"` — animated bar, with `data-progress-label` on the % element

All of it already respects `prefers-reduced-motion`. Keep it that way.

### 4. Accessibility
Real landmarks, one `<h1>` per page, `alt` on every meaningful image,
`aria-label` on icon-only controls, visible `:focus-visible`. Decorative SVGs get
`aria-hidden="true"`.

### 5. Images
All assets are already downloaded to `public/images/`. Reference them as
`/images/<name>.jpg`. **Do not hotlink the demo site.** Check the folder for what
exists before inventing a filename. Add `loading="lazy"` + `decoding="async"` to
below-the-fold images; the hero image stays eager with `fetchpriority="high"`.

## Layout
```
src/
  components/
    Header.astro  Footer.astro        # shared — do not edit without coordinating
    ui/           Button, SectionHeading, SplitText
    sections/     one file per page section
  data/site.ts                        # nav, contact details, socials
  layouts/Base.astro
  lib/animations.ts
  pages/
  styles/         tokens.css  global.css
public/images/                        # 52 assets pulled from the original
```

## Reference material
Full-page screenshots and saved HTML of the original are at:
`/private/tmp/claude-502/-Users-bahaa-solar-theme-rebuild/7335fc40-a33b-445e-b396-ed265389afad/scratchpad/recon/`
  - `shots/*.png`   — full-page screenshots at 1440px (read these, they are the spec)
  - `pages/*.html`  — saved rendered HTML for exact copy

## Verify your work
`npm run build` must pass before you report done.
