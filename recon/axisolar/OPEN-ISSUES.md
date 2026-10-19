# AXI SOLAR — open issues (as of 2026-10-19)

The demo builds (25 pages) and every route returns 200. This is the backlog.
Delete an item once it's done.

## 1. Pending decisions (user)
- [ ] **Git, before the first push:** remove the raw `datasheets/` folder (102 MB, 9 exact
      duplicates of `public/datasheets/`) from history and add it to `.gitignore`. There's no
      remote yet, so the rewrite is cheap; back up the branch first. Push to a **private** repo:
      the PDFs still have errors, author metadata and signs they come from a supplier.
- [ ] **Contact form endpoint:** Formspree or similar, and who receives the messages
      (info@axisolar.com?). `ContactForm.astro` still posts to `REPLACE_ME`.
- [ ] **Verify backend:** the client has the serial DB. Needs a small serverless lookup.
- [ ] **Hosting + domain/DNS** for axisolar.com, plus 301 redirects from the old URLs
      (`/offerings/` → `/solar-panels`, `/products/` → `/solar-panels`).

## 2. From the client
- [ ] Answers to `OWNER-CLARIFICATIONS.md` (101 items, generated from `toConfirm`) and the
      corrected datasheets. Replace files in `public/datasheets/` **under the same names**.
- [ ] Vector logos: AXI SOLAR (the LUMEN sheet uses a newer logo; which one is current?) and AXI EVOO.
- [ ] Hi-res product renders. Current sizes: HJT 244×311, inverters ~500–740 px,
      chargers ~450–620 px.
- [ ] Approval of image edits we made: AC I had the OEM "EvCharger" print retouched out;
      DC IV/DC V ad screens were replaced with a blank dark screen. Ideally they send clean AXI renders.
- [ ] Certificate numbers before any certifications or badges go on the site.

## 3. UI polish backlog
- [ ] **Visual QA not done yet:** none of `/ev-chargers/*` has been checked in a browser (Docker
      was down). `/solar-panels` and the product detail pages haven't been screenshot-checked at 390px.
- [ ] Home "featured products": now pulls in every current product, including 9 chargers.
      Curate it to about 3–6 picks and avoid a lone card on the last row.
- [ ] `ProductCard`: LUMEN has no `family`, so its title sits higher than its neighbours'. Either
      add a family ("N-type bifacial module") or reserve the line. On `/ev-chargers` the
      family repeats the section heading, so add a prop to hide it.
- [ ] Spec figures like "−0.243 %/°C" wrap after the "/": add `white-space: nowrap` on stat values.
- [ ] 404 cards: text is narrow at 1440px. Drop `padding-inline-end: 3rem` on `.nf__card`.
- [ ] `Button`: the primary hover fills with brand dark, which is invisible on dark sections.
      Add an on-dark variant; the 404 page and CtaBand override it locally right now.
- [ ] RTL: the contact form's select chevron uses a physical `background-position`.
- [ ] Remove the 50+ unused Solor demo images in `public/images/*.jpg|svg|png`. They still
      ship in `dist/`. Keep `axi/`, `products/`, `brand/` and `axi-logo*.webp`.
- [ ] `public/images/brand/axi-evoo-logo-light.webp` is unused (for dark backgrounds).
- [ ] Optional: move `src/components/sections/lines.ts` (line → route map) into
      `src/data/products/` so product code and sections share it.

## 4. Later
- [ ] Arabic (RTL) version: primary target market.
- [ ] Analytics / Search Console, sitemap, Open Graph images.

## Housekeeping
- Docker can reclaim about 110 GB (images and build cache):
  `docker system prune -a && docker builder prune -a`. Leave out `--volumes`.
