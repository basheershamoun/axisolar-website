# AXI SOLAR — website

Rebuild of **axisolar.com** for AXI SOLAR (Shamoun Power Group) on a re-skinned
copy of the Solor Astro theme. It is a static B2B product catalogue covering solar
panels, hybrid inverters and EV chargers.

## Client brief
- **Audience:** installers, distributors, engineers. **Markets:** Lebanon, Iraq, Syria.
- **Tone:** technical, concise, factual. Specs and datasheets first, marketing second.
- **Language:** English now. **Arabic (RTL) comes later** and is the primary target,
  so write every new style with CSS logical properties (`margin-inline-start`,
  `inset-inline`, `text-align: start`). Never use `left`/`right`.
- **Contact:** `info@axisolar.com` plus an HTML form **only**. No phone, address, map
  or socials anywhere. The datasheets list a Dongguan/China address; never publish it.
- **No certification badges** and no cert claims until the client sends certificate
  numbers. No invented stats, years, testimonials, warranties or claims.

## Commands — Docker only, never Node on the host
| Task | Command |
|---|---|
| Dev server → http://localhost:4321 | `make up` |
| Production build → `dist/` | `make build` |
| Build + preview | `make preview` |
| Shell in container | `make shell` |
| Reinstall deps | `make install` |

- `node_modules` lives in a named Docker volume; never bind-mount it.
- **Run builds one at a time.** Parallel `docker compose run` builds on a nearly
  full disk once corrupted Docker's image store.
- If an agent needs a throwaway build, use `--outDir /app/.dist-<name>` and delete
  it after. `/tmp` fails with `EXDEV` because it's on a different device from the bind mount.

**`make build` must pass before you report done.**

## Product lines
| Line | Route | Products | Data |
|---|---|---|---|
| Solar panels | `/solar-panels` | **AXI LUMEN** (current); AXI-144TSD + AXIHJT110 in `/solar-panels/archive` (discontinued) | `src/data/products/panels.ts` |
| Hybrid inverters | `/inverters` | **VERO → NERO → FORZA**, always in this order | `inverters.ts` |
| EV chargers | `/ev-chargers` | **AXI EVOO** AC I–IV, DC I, II, IV, V, VII | `chargers.ts` |

**Logos:** panels and inverters use the main AXI SOLAR logo
(`public/images/axi-logo.webp`, plus `-light` for dark backgrounds). EV chargers use the **AXI EVOO**
logo (`public/images/brand/axi-evoo-logo*.webp`). Both are bitmaps; vectors are pending from the client.

## Product data — the one place specs live
Every product page, card, comparison table and the Downloads page is generated
from `Product` records (`src/data/products/types.ts`). **Updating a datasheet =
editing one record.** Never hardcode specs in a page.

- `variants`: column headers (model codes or power classes). Each `SpecRow.values`
  has one entry per variant, or a single value that spans all variants.
- `status: 'discontinued'` → shows a badge, and the product is listed in the archive.
- `datasheet` → `/datasheets/<slug>.pdf` (`public/datasheets/`, clean filenames).
- **`toConfirm`** is internal only and is **never rendered**. It records every value we
  corrected from a datasheet or that still needs the client's confirmation. When the
  client sends updated sheets, work through these and delete each one once it's resolved.
- Correction policy: fix the obvious (typos, swapped labels, wrong units). For anything
  ambiguous, keep the spec-table value. Log both in `toConfirm`.
- Line → route mapping for links: `src/components/sections/lines.ts`.

## Design rules
1. **Tokens only.** Colours, fonts, radii and durations live in `src/styles/tokens.css`.
   Never put a hex value in a component. `global.css` bridges the tokens into Tailwind `@theme`.
   - Brand palette: near-black + AXI red `#c42633`. Token names are inherited from the
     theme: `--color-forest` = brand dark, `--color-lime`/`--color-accent` = brand red.
   - **Red on dark fails AA for small text** (3.17:1). There, use `--color-accent-on-dark`.
     Red fills take `--color-on-accent` (white) text.
2. **Styling:** scoped `<style>` per component, using tokens. Tailwind is fine for layout
   utilities. Use `--section-py` / `--container-pad` for spacing; no new scales.
   Use `.sr-only` from `global.css`.
3. **Animation:** never GSAP. Markup-driven helpers in `src/lib/animations.ts`:
   - `data-anim="up|down|left|right|fade"` with optional `data-anim-delay`
   - `.reveal-image` wrapper
   - `<SplitText text mode="words|chars" as="h2" />` (split at build time)
   - `data-count-to`
   - `data-progress`
   All respect `prefers-reduced-motion`. Keep it that way.
4. **Accessibility:** one `<h1>` per page (`PageHero` or `ProductDetail` owns it), real
   landmarks, `alt` on meaningful images, `aria-label` on icon-only controls, visible
   `:focus-visible`, decorative SVGs `aria-hidden="true"`. Wide tables are focusable
   scroll regions.
5. **Images:** in `public/images/`: `axi/` (site photos), `products/<line>/` (transparent
   cut-outs from the datasheets), `brand/`. Never hotlink axisolar.com. Below the fold:
   `loading="lazy" decoding="async"`. Hero images: eager with `fetchpriority="high"`.
   Product images sit in a fixed aspect-ratio box with `object-fit: contain`. A `%`
   max-height does not work there, so the image fills the box absolutely.

## Layout
```
src/
  components/
    Header.astro Footer.astro   # shared chrome — nav comes from data/site.ts
    ui/                         # Button, PageHero, SectionHeading, SplitText
    products/                   # ProductDetail, ProductCard, SpecTable (shared by all lines)
    panels/ inverters/ chargers/  # line-specific pieces
    sections/                   # home / about / contact / downloads / verify sections
  data/
    site.ts                     # name, email, nav, productLines
    products/                   # types.ts + panels.ts, inverters.ts, chargers.ts, index.ts
  layouts/Base.astro            # <head>, favicons, header/footer; `head` slot for extra meta
  lib/animations.ts
  pages/                        # index, about, contact, downloads, verify, 404, + line folders
  styles/tokens.css global.css
public/datasheets/              # 15 PDFs
```

## Open items (not built yet)
- **Contact form endpoint:** `ContactForm.astro` posts to `https://formspree.io/f/REPLACE_ME`.
  Until it's set, a submit tells the visitor to email us. Don't fake success.
- **Product verification:** `/verify` is UI only. The serial DB exists on the client's
  side; the lookup needs a small serverless function. Keep `name="product_serial"`.
- **Arabic / RTL** version.
- From the client: vector logos, hi-res product renders (HJT, inverter and charger images
  are 250–740px), corrected datasheets, certificate numbers.

## Reference material (`recon/axisolar/`)
- `CONTENT.md`: copy from the old axisolar.com. `shots/`, `pages/`: screenshots and HTML.
- `datasheets/{panels,inverters,evoo-chargers}.md`: full datasheet extractions and their errors.
- `CLIENT-QUESTIONS.md`: questions sent to the client.
- `recon/theme-archive/`: theme pages and sections we removed (blog, portfolio, team,
  FAQs, services). Not built. Copy from here if one is needed again.
