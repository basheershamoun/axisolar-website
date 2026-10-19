# AXI SOLAR — website rebuild: questions for the client

Sources: the current axisolar.com (6 pages) plus 14 unique datasheets.
Detailed findings are in `datasheets/panels.md`, `datasheets/inverters.md` and `datasheets/evoo-chargers.md`.

## The big picture
The current site shows **2 products**. The datasheets cover **17 product lines across 3 categories**:

| Category | Products | On the site now? |
|---|---|---|
| Solar panels | AXI-144TSD (TOPCon 550–580W), AXIHJT (HJT 555–585W), **AXI LUMEN** (N-type 620–640W) | 2 of 3 |
| Hybrid inverters (48V) | **VERO** 3–6kW 1P, **NERO** 8–12kW 1P, **FORZA** 6–20kW 3P | No |
| EV chargers — "AXI EVOO" | AC I–IV (3.5–22kW), DC I, II, IV, V, VII (20–240kW) | No |

The rebuild is really a **move from a brochure site to a product catalogue**. Most of the questions below follow from that.

---

## A. Business & brand — *priority: blocks the design*
1. What is the **legal company name**, and how does it relate to Shamoun Power Group?
2. Who is the **audience**? Homeowners, installers/distributors (B2B), or both? Which **countries/markets**?
3. What is the **main goal of the site**? Getting quote requests, dealer/distributor sign-ups, datasheet downloads, or brand credibility?
4. Is AXI a **manufacturer**, a **brand owner** (OEM/private label), or a **distributor**? The current site says "manufacturing company". We need to word claims accurately.
5. What is the correct **brand spelling**? The materials use AXI SOLAR / AXISolar / Axi Solar / AXI solar.
6. **Logo:** the Lumen sheet uses a new "AXI SOLAR" logo. Which logo is current? Please send **vector files (SVG/AI/EPS)**.
7. Are there **brand guidelines** (colours, fonts)? If not, are we free to define them? The logo is black and red (around #C42633).
8. Is **EVOO** a sub-brand with its own look, or part of AXI SOLAR? Do inverters/panels have sub-brand names too (LUMEN, VERO, NERO, FORZA)?
9. Name **2–3 websites you like**, and any competitors to stand apart from.

## B. Site scope & structure
10. Should we **show all 17 product lines** on the site? Are any discontinued, or not yet launched?
11. Are **TSD and HJT panels being replaced by LUMEN**, or are all three sold side by side?
12. Is **DC III / DC VI** missing on purpose, or are those models planned?
13. Do you want **prices** shown, "request a quote", or neither?
14. Which pages do you need beyond Home / About / Products / Verify / Contact? For example **Projects/case studies, Become a dealer, Where to buy, Downloads centre, Warranty, News/blog, FAQ, Careers**.
15. **Languages:** English only, or also Arabic / French / others? Does any language need **RTL** (right-to-left) layout?
16. Is the **Offerings** page (panels / solutions / accessories) still relevant? It isn't in the current menu. Do you actually sell "solutions" (installation) and "accessories"?

## C. Product content
17. Who **owns the datasheets**? Can you send **corrected versions** (see section H), or should the website become the source of truth for specs?
18. Do you have **high-res product photos/renders** without backgrounds? The datasheet images are low-res or composites.
19. Do you have **real photos**: factory, team, installations, warehouse? The current site uses stock images, and the datasheet hero images look AI-generated.
20. Do you have **certificates (PDF + certificate numbers)** for the cert logos on the sheets (TÜV, CE, IEC, UL, MCS, INMETRO…)? We should only show marks we can back up.
21. What are the **warranty terms per category**? Panels say 15/30 yr, inverters say 5 yr, and the chargers sheets don't state any.
22. Which **monitoring app** works with the inverters/chargers (name, App Store links)?
23. Who is the **manufacturer/factory** behind each line? This is for internal accuracy; we don't need to publish it. The sheets show signs of rebranded supplier documents: "EVCharger" printed on a device, supplier part codes, and a Dongguan, China address.

## D. Product verification (`/verify`)
24. The current serial check runs on the WordPress server. **Where does the serial database live**, who updates it, and how many serials are in it?
25. What should a successful check show (model, production date, warranty status, distributor)?
26. Can we get an **export or API** of that data? A static site needs a small serverless function to replace it.
27. Are the **old WordPress site and hosting** being shut down? Who has access to them (admin, hosting, DNS)?

## E. Contact & leads
28. **Phone, WhatsApp, address(es), opening hours, social media accounts?** Right now the only public contact is info@axisolar.com. The EVOO sheets list a Dongguan address. Is that meant to be public?
29. **Where should form submissions go** (email addresses, CRM)? Do you want different forms (quote / dealer / support)?
30. Do you want a **Google Map**, **live chat**, or **WhatsApp button**?

## F. Legal & compliance
31. **Image rights:** do you hold licences for the stock and AI images currently in use, including the datasheet covers?
32. Do you have a **privacy policy / cookie policy / terms**? Do we need **GDPR** cookie consent (depends on markets)?
33. Can we name the **sources of the performance claims**? Examples: "exceed industry standards", "double your revenue" on the ad-screen chargers, efficiency figures.

## G. Technical & handover
34. **Domain/DNS access** for axisolar.com, and the preferred **hosting** (Cloudflare Pages, Netlify, Vercel…)?
35. **Who updates content** after launch, and how often? This decides between a plain static site and adding a CMS for products/news.
36. Do you need **analytics** (GA4, Plausible), Search Console, or tracking pixels?
37. Should the old URLs redirect (`/offerings/`, `/products/`)? We'll set this up to protect SEO.
38. What is the **launch deadline**? Are there milestones such as a trade show or a product launch?

---

## H. Datasheet errors to confirm (before we publish specs)
These are errors in the PDFs, and they'll get copied onto the site unless fixed. Full list: around 100 items in the three `datasheets/*.md` files.

**Panels**
- HJT: the title says **AXIHJT101**, but the table says **AXIHJT110**. Which is right? The current site uses 101.
- HJT: the spec says black frame, but the photo shows silver.
- LUMEN: the NMOT voltages are **higher** than STC, which is physically wrong.
- LUMEN: "TC" in the model code — is it TOPCon? Degradation figures are missing.
- TSD: the temperature-coefficient units are wrong, and the rear-gain table copies the STC values.

**Inverters**
- FORZA: the last column is labelled H15, but should be **H20**. "30kW PV" in the features vs 25/40kW in the table. File named "XI FORZA".
- NERO: 160% vs 200% PV usable; 68.2A vs 60A passthrough. H12 apparent power is 12,000 vs 13,000VA.
- All three: the spec labels are shifted against the values. Display says "LED+LCD" vs touchscreen in the features. "On-gird" typos.

**EV chargers**
- DC I shows the AC I model code, and all its columns are labelled "DC20K". DC V's headline reads "60KW 60KW 80KW". KDOD180 current is blank.
- AC III is called "Portable" but is a wallbox. AC I's plug colours are swapped.
- DC I vs DC II specs conflict. Working temp is 70 vs 80 °C. IP ratings are inconsistent (IP54/55/65).
- Some model codes look like supplier part numbers (SNOD / KDOD). Should we use AXI names instead?
- The ad-screen product photos show placeholder ads (fast food, watches).
