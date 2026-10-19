# axisolar.com — content inventory (scanned 2026-10-19)

Source: WordPress (`wp-sitemap.xml`), 6 pages total. Fonts: Inter + DM Sans.
- `pages/*.html` — raw HTML · `shots/*.png` — full-page 1440px · `assets/` — images + datasheet PDFs

## Global
- **Brand:** AXI SOLAR — logo `assets/cropped-axisolar-logo-1.webp`
- **Nav:** Home · Products · About Us · Verify · Contact Us (Offerings is NOT in the nav, only in the sitemap)
- **Footer:** same links + "Copyright © 2026 AXI SOLAR"
- **Contact:** Info@axisolar.com (no phone, address, or socials on the site)
- **Shared CTA band:** "Ready to Go Solar?" / "Contact us today to schedule a consultation and learn how solar energy can benefit your home or business."

## Home `/`
- **Hero:** H1 "Welcome to AXI SOLAR" — "Harness the power of the sun and join us in creating a greener future" — img `manufacturing-equipment-panel-…webp`
- **Our Offerings:** "Explore our range of high-quality solar energy products"
  - 01. Solar Panels — Explore our cutting-edge solar panels designed for optimal energy capture.
  - 02. Solar Solutions — Discover tailored solar solutions for residential, commercial, and industrial applications.
  - 03. Solar Accessories — Explore a range of accessories designed to complement and optimize your solar setup.
- **Banner:** "Take the Next Step Towards Clean Energy" — img `9893729-9893729-scaled.jpg`
- **About AXI SOLAR:** "AXI SOLAR is a distinguished solar energy manufacturing company committed to delivering high-quality products that harness the power of the sun. We create cleaner and greener solutions for a sustainable planet." — imgs `2800832-2800832.jpg`, `9875404-9875404-scaled.jpg`
- **Why Choose AXI SOLAR:** "Discover the unique advantages we offer in the solar energy industry"
  - Exceptional Quality — Our solar panels exceed industry standards and are built to last
  - Expertise and Innovation — We combine advanced technology with years of experience to deliver cutting-edge solutions
- **CTA band**

## About `/about/`
- **H1:** "Empowering the Future"
- **Lead:** With years of experience and expertise in the solar energy industry, we have become a trusted name known for our cutting-edge technology and exceptional standards. We ensure that every solar panel we manufacture is of the highest quality.
- img `2800832-2800832-scaled.jpg`
- Our motivation lies in paving the way towards a brighter and more environmentally friendly future. We believe in the power of solar energy to transform the world and are dedicated to making a positive impact on the planet and people's lives.
- Throughout our journey, we have served a diverse range of clients including residential, commercial, and industrial customers. Our solar solutions have helped businesses and individuals reduce their carbon footprint and embrace sustainable energy sources.
- **Banner:** "Take the Next Step Towards Clean Energy"
- **Our Core Values:** "At AXI SOLAR, we adhere to a set of core values that guide our actions and decisions every day."
  - Quality — We are committed to delivering products of the highest quality that exceed our customer's expectations. Our stringent quality control measures ensure that every solar panel is reliable and durable.
  - Innovation — We continuously strive to be at the forefront of solar technology. Through innovation and research, we develop solutions that maximize efficiency and harness the full potential of solar energy.
  - Sustainability — Environmental consciousness is ingrained in everything we do. We prioritize sustainable practices in our manufacturing processes and promote the use of clean energy for a healthier planet.
- **CTA band**

## Offerings `/offerings/`
- **H1:** "Discover Our Solar Solutions" — "Explore our range of high-quality solar energy products and services that cater to all your renewable energy needs."
- **Solar Panels** — Harvesting Sunlight for Efficiency and Sustainability. Explore our cutting-edge solar panels designed for optimal energy capture. High efficiency, durability, and a commitment to eco-friendly power solutions. — img `row-solar-panels-…webp`
- **Solar Solutions** — Comprehensive Solar Energy Solutions for Every Need. Discover tailored solar solutions for residential, commercial, and industrial applications. From design to installation, we provide end-to-end sustainable energy solutions. — img `9893729-9893729-1-scaled.jpg`
- **Solar Accessories** — Enhance Your Solar Experience with Quality Accessories. Explore a range of accessories designed to complement and optimize your solar setup. Inverters, batteries, and mounting systems for a seamless solar journey. — img `solar-power-facility-…webp`
- **CTA band**

## Products `/products/`
- **H1:** "PRODUCTS" — "Harnessing the Sun's Energy: Explore our Innovative Solar Manufacturing Solutions for a Sustainable Future"
- **TOPCON Technology Solar Panels** — Bifacial Mono Half Cells Solar Panel
  - **AXI-144TSD** — Bifacial Mono Half Cells Solar Panel with TOPCON Technology, double glass with 2mm each side, 550W–580W — img `topcon.webp`, datasheet `AXI-144TSD.pdf`
- **HJT Technology Solar Panels**
  - **AXIHJT101 555-585** — Bifacial Mono Half Cells Solar Panel with HJT Technology, double glass with 2mm each side, 555W–585W — img `hjt.webp`, datasheet `AXIHJT101-555-585.pdf`

## Verify `/verify/`
- **H1:** "Validate Product by serial number"
- Form: POSTs `product_serial` to the same page, and the server looks up the serial. Unknown serial → "No data found for the entered product serial."
- ⚠️ This needs a backend and the serial database. A static Astro site can't do it alone.
- **CTA band**

## Contact `/contact/`
- **H1:** "Get in Touch"
- **Contact Information:** "Reach out to us for any inquiries or concerns" — Email: Info@axisolar.com
- **Submit Your Details** form: Name, Email, Message, reCAPTCHA → "Send Message"
