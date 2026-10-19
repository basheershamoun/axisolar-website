# AXI EVOO EV Chargers: datasheet extraction

Source: `datasheets/AXI EVOO {AC I, AC II, AC III, AC IV, DC I, DCII, DC IV, DC V, DC VII}.pdf`
(the " 2" / " 3" files are byte-identical duplicates). All sheets are image-based; values below were
transcribed visually. Anything not printed on the sheet is listed as "not stated". Anything I couldn't
read is marked "unclear".

**Common structure (every PDF):**
- p1: shared cover, "EV CHARGER CATALOGUE", with a circular collage of 9 product renders and the AXI EVOO logo.
- p2: series hero page.
- p3 (+p4/p5 on AC IV): "PRODUCT PARAMETERS".
- Last page: back cover with contact details.

**Shared tagline (verbatim on every series page):** "Standard Fast EV Charger"

---

## 1. Per-model details

### AC Series I: AC Portable 3.5/7/11KW
- **Variants (verbatim):** `AXI-EVOO-A3.5K-P`, `AXI-EVOO-7K-P`, `AXI-EVOO-11K-P`
- **Headline:** "AC PORTABLE 3.5/7/11KW". Sub: "AC Series I / Standard Fast EV Charger".
- **Key Benefits icons:** Overvoltage Protection, Undervoltage Protection, Lightning Protection, IP65, Overtemperature Protection, Fully Certified, Grounded/Ungrounded, HCI, Overcurrent Protection, OTA, Bluetooth/WIFI, Leakage Protection.
- **Specs.** Each connector standard has its own table.

| Param | GB/T | Type 2 | Type 1 / NACS |
|---|---|---|---|
| Input Voltage | 220Vac ± 20% / 380Vac ± 20% | 230Vac±20%/400Vac±20% | 240Vac±20% |
| Product Size | 213\*80\*50 mm | 213\*80\*50 mm | 213\*80\*50mm |
| Input Current | 16A/32A | 16A/32A | 16A/32A/40A |
| Rating | 3.5kW/7kW/11kW | 3.5kW/7kW/11kW | 3.8kW/7.6kW/9.6kW |
| Leakage Type | A | AC or A+DC6mA(optional) | A or CCID20(optional) |
| Operating "Tumidity" | 5%-95% condensationless | same | same |
| Operating Temp | -25 °C~+50 °C | same | same |
| Functional Support | Time reservation, grounding option, current regulation, Bluetooth/WIFI (optional) | same | same |
| Protective Function | Over-voltage protection, over-current protection, leakage protection, over-temperature protection, lightning protection, etc. | same | same |

- **Fields not stated on the sheet:** IP rating (only shown as an icon: IP65), weight, cable length, certifications (only the generic "Fully Certified" icon), warranty, OCPP/app, RFID.
- **Images:**
  - p2: large hero render of a black control box with a colour screen, an "A" button, a Type 2 gun and a **blue** CEE plug.
  - p3: three small renders labelled 3.5KW (Schuko plug), 7KW (red CEE plug) and 11KW (blue CEE plug).
  - The renders are usable, with clean white backgrounds.

### AC Series II: AC Portable 3.5/7/11/22KW
- **Variants:** `AXI-EVOO-A3.5K-P-II`, `AXI-EVOO-7K-P-II`, `AXI-EVOO-11K-P-II`, `AXI-EVOO-22K-P-II`
- **Headline:** "AC PORTABLE 3.5/7/11/22KW"
- **Key Benefits icons:** same 12 icons as AC I, including IP65.
- **Specs:**

| Param | GB/T | Type 2 | Type 1 / NACS |
|---|---|---|---|
| Input Voltage | 220Vac ± 20% / 380Vac ± 20% | 230Vac±20%/400Vac±20% | 240Vac±20% |
| Product Size | 206\*80\*56 mm | 206\*80\*56 mm | 206\*80\*56 mm |
| Input Current | 16A/32A | 16A/32A | 16A/32A/40A |
| Rating | 3.5kW/7kW/11kW/22kW | 3.5kW/7kW/11kW/22kW | 3.8kW/7.6kW/9.6kW |
| Leakage Type | A | AC or A+DC6mA(optional) | A or CCID20(optional) |
| Humidity / Temp | 5%-95% condensationless / -25 °C~+50 °C | same | same |
| Functional Support | Indicator light, time reservation, grounding option, current regulation, Bluetooth/WIFI (optional) | same | same |
| Protective Function | as AC I | same | same |

- **How it differs from AC I:** grey/silver body with a vertical green LED bar and a small screen showing a car icon. It adds 22 kW and an indicator light.
- **Images:**
  - p2: hero render with a red CEE plug and Type 2 gun.
  - p3: four renders. 3.5KW has a Schuko plug, 7KW a blue CEE plug, and 11KW and 22KW red CEE plugs.
  - All are usable.

### AC Series III: "AC Portable" 7/11/22KW (actually a wallbox)
- **Variants:** `AXI-EVOO-7K-P-III`, `AXI-EVOO-11K-P-III`, `AXI-EVOO-22K-P-III`
- **Headline:** "AC PORTABLE 7/11/22KW"
- **Key Benefits icons:** Overvoltage, Undervoltage, Overcurrent, OTA, Grounded/Ungrounded, HCI, Overtemperature, Lightning, IP65, Bluetooth/WIFI, Leakage, Fully Certified.
- **Specs:**

| Param | GB/T | Type 2 | Type 1 / NACS |
|---|---|---|---|
| Input Voltage | 220Vac±20%/380Vac±20% | 220Vac±20%/380Vac±20% | 240Vac±20% |
| Product Size | 400\*163\*95 mm | same | same |
| Input Current | 16A/32A | 16A/32A | 32A/48A |
| Rating | 7kW/11kW/22kW | 7kW/11kW/22kW | 7.6kW/11.5kW |
| Leakage Type | A | A | A or CCID20(optional) |
| Humidity / Temp | 5%-95% condensationless / -25 °C~+50 °C | same | same |
| Functional Support | Display, Indicator, Swipe Card, Bluetooth/WIFI(optional) | same | same |
| Protective Function | as AC I | same | same |

- **Design:** white, rounded wall unit. It has an AXIEVOO logo, a landscape colour display, an RFID card zone and a vertical red light strip. It comes with a tethered Type 2 cable and a hard-wired supply tail.
- **Status UI (p3):** six states, each with a front thumbnail and a screen mockup.
  - Pragmatic: green always on
  - Charge Waiting: blue always on
  - Charging Complete: blue always on
  - Insert A Gun: green flashing
  - Charging: blue flashing
  - Faults: red flashing
- **Images:** p2 has a large hero render on a white background, which is usable. p3 has the state thumbnails and dashboard screen mockups.

### AC Series IV: AC Mounted 7/11/22KW (two versions)
**Tethered Cable Version (p2–3)**
- **Variants:** `AXI-EVOO-7K-WM-4`, `AXI-EVOO-11K-WM-4`, `AXI-EVOO-22K-WM-4`
- **Headline:** "AC MOUNTED 7/11/22KW". Label: "Tethered Cable Version". The page carries a **TÜV SÜD** certification mark.
- **Key Benefits icons:** Overvoltage, Undervoltage, Overcurrent, OTA, Grounded/Ungrounded, HCI, Overtemperature, Lightning, **IP55**, Bluetooth/WIFI, Leakage, Fully Certified.
- **Specs (p3):**

| Param | GB/T | Type 2 | Type 1 / NACS |
|---|---|---|---|
| Input Voltage | 220Vac±20%/380Vac±20% | 230Vac±20%/400Vac±20% | 240Vac±20% |
| Product Size | 295\*195\*95.5 mm | same | same |
| Input Current | 16A/32A | 16A/32A | 32A/48A |
| Rating | 7kW/11kW/22kW | 7kW/11kW/22kW | 7.6kW/11.5kW |
| Leakage Type | A | AC or A+DC6mA(optional) | A or CCID20(optional) |
| Humidity / Temp | 5%-95% condensationless / -25 °C~+50 °C | same | same |
| Functional Support | Display, Indicator, Swipe Card, Bluetooth/WIFI(optional) | same | same |

**Socket Version (p4–5)**
- **Variants:** `AXI-EVOO-7K-WM-4-NP`, `AXI-EVOO-11K-WM-4-NP`, `AXI-EVOO-22K-WM-4-NP`
- **Certification and protection:** carries the TÜV SÜD mark. Icon row shows **IP54**. Page 5 adds HCI, Overtemperature, Leakage Protection and Fully Certified.
- **Specs (p5):** Type 2 only. Same values as the tethered Type 2 column, size 295\*195\*95.5 mm.
- **Status UI (p5):** same six states as AC III, plus a "Modeling light" line, e.g. "Modeling light: blue breathing" while Charging.

**Design and images:**
- Black glass front with a silver/grey side shell and a top LED bar. It has a colour display and an RFID zone.
- Can be wall-mounted or fitted to an optional black pedestal post, which both versions show.
- Usable renders:
  - p2: wall unit with a hard-wired tail plus the pedestal version with a gun.
  - p4: socket version on the wall and on the post.
  - p5: two socket units shown at an angle.

### DC Series I: DC Mounted 20/30/40KW
- **Variants (hero page):** `AXI-EVOO-DC20K-WM-I-P`, `AXI-EVOO-DC30K-WM-I-P`, `AXI-EVOO-DC40K-WM-I-P`
- **Headline:** "DC MOUNTED 20/30/40KW"
- **Connector options shown:** CCS1, CCS2, CHAdeMO, GB/T, Tesla (NACS)
- **Key Benefits icons:** OTA, **CE**, HCI, IP54, Overcurrent Protection, Bluetooth/WIFI, Overload Protection, Lightning Protection.
- **Design Standard (verbatim):** "IEC 62196-3, Plugs, socket-outlets, vehicle connectors and vehicle inlets- Conductivecharging of electric vehicles -Part 3: Dimensional compatibility and interchangeability requirements for d.c.and a.c./d.c. pin and contact-tube vehicle couplers"
- **Specs (p3):**

| Param | 20 kW | 30 kW | 40 kW |
|---|---|---|---|
| Output Power | 20KW | 30KW | 40KW |
| Operating Voltage | 400Vac±15% | ← | ← |
| Operating Current (max) | 67A (max) | 100A (max) | 133A (max) |
| Body Size | 600\*400\*180 mm | 600\*400\*215 mm | 600\*400\*215 mm |
| CP Voltage Protection | ≥±1V | | |
| Storage / Operating Temp | -40 C - +80 C / -25 C - +50 C | | |
| Installation | Wall Mounted | | |
| Shell Protection Grade | IP54 | | |
| Communication | WiFi 2.4GHz / Bluetooth | | |
| Over-undervoltage Protection | ≤285V or ≥475V | | |
| Operating Frequency | 45Hz-65Hz | | |
| Output Voltage Adjustable Range | +200Vdc - +1000Vdc | | |
| Altitude | <2000 m | | |
| Lightning Protection | Yes (Supported) | | |
| Cooling | Forced Air Cooling | | |
| HCI | Indicator 4.3" display | | |
| Package Size | 730\*480\*352 mm | | |
| Output Line | 5 m | | |

- **Fields not stated on the sheet:** weight, OCPP, payment, efficiency, warranty.
- **Design:** brushed-silver wall box with a black vertical display/LED panel and an RFID zone. A gun holster sits on top with the cable coiled around the unit. A pedestal option is shown on p3.
- **Status UI (p3):** Idle (green always on), Charge (blue flash), Fault (red flash).
- **Images:** p2 has a wall-unit hero; p3 has the unit on a pedestal plus a close-up of the LED panel. Both are usable.

### DC Series II: DC Single Gun 20/30/40KW
- **Variants:** `AXI-EVOO-DSG20K-II`, `AXI-EVOO-DSG30K-II`, `AXI-EVOO-DSG40K-II`
- **Headline:** "DC SINGLE GUN 20KW 30KW 40KW"
- **Marketing copy (verbatim):**
  - **7-inch Color Touch Screen**: "User-friendly interface with crisp visuals for an effortless charging experience."
  - **4G / Ethernet / WIFI**: "Flexible multi-mode network communication for stable,real-time remote management."
  - **Communication Protocol: OCPP 1.6J / 2.0.1**: "Seamless smart connectivity and backend integration powered by universal OCPP 1.6J protocol."
  - **Noise: ≤75db**: "Ultra-quiet operation at ≤75dB, perfect for quiet residential and commercial zones."
  - **IP Grade: IP54 Waterproof**: "Robust IP54 waterproof protection, engineered to withstand heavy rain and dust."
  - **Working Temperature: -30 C to 70 C**: "All-weather durability, performing flawlessly in extreme climates from -30°C to 70°C."
- **Specs (p3):**

| Param | DSG20K-II | DSG30K-II | DSG40K-II |
|---|---|---|---|
| Input voltage | AC380V Three-phase five-wire (380Vac±20%) | ← | ← |
| Max input current | 32A | 58A | 76A |
| Operating frequency | 50/60Hz | | |
| Output voltage range | 50-1000VDC | | |
| Max output | 63A | 100A | 133A |
| Output power | 20KW | 30KW | 40KW |
| Power switching | *(blank)* | | |
| THDi | ≤5% (Input 380V, Output 1000V, 50%~100% Load) | | |
| Input surge current | ≤110% of rated input current | | |
| Power factor | ≥0.99 (50%~100% load), ≥0.95 (20%~50% load) | | |
| Voltage regulation / Current stabilization | ±0.5% / ±1% (-30 C~+55 C) | | |
| Output ripple | Ripple peak coefficient ≤ ±1% | | |
| Efficiency | >96% (100% full load output power) | | |
| Standby power | ≤15W | | |
| Heat dissipation | air-cooled | | |
| Noise | ≤75db(1 meter away ) | | |
| Cable spec Cu / Al | 3\*10+2\*6 / 3\*25+2\*16 mm² | 3\*16+2\*10 / 3\*25+2\*16 | 3\*25+2\*16 / 3\*35+2\*25 |
| Relevant standards | GB/T 18487.1-2015; GB/T 27930-2015; GB/T 20234-2015 | | |
| Charging gun | 5m charging gun (length customized available) | | |
| Package size | 970\*970\*420mm | | |
| Gross weight | 91.5kg (40KW) | | |

- **Options:** Credit Card Payments (Optional), shown with a yellow payment terminal photo. Connectors: CCS1, CCS2, CHAdeMO, GB/T, Tesla (NACS).
- **Design:** black wall box with a small screen, green LED bar and RFID zone. A white DC gun sits in a side holster.
- **Images:** p2 has one usable hero render on a white background.

### DC Series IV: DC Station 30/40/60/80KW (advertising screen, single gun)
- **Variant on hero:** `AXI-EVOO-SNOD80SC` only. The table lists `SNOD30SC`, `SNOD40SC`, `SNOD60SC` and `SNOD80SC`, without the AXI-EVOO prefix.
- **Headline:** "DC STATION 30KW 40KW 60KW 80KW"
- **Marketing copy (verbatim):**
  - **55-inch Advertising Screen**: "Double your revenue with a 55-inch ad screen that turns charging time into high-impact marketing prime time."
  - **4G / Ethernet / WIFI**: same copy as DC II.
  - **Modular Design for Maintenance**: "Simplified maintenance and independent power module replacement, minimizing station downtime."
  - **Communication "Protocal": OCPP 1.6J / 2.0.1**: same copy as DC II.
  - **Noise: ≤75db**: same copy as DC II.
  - **IP Grade: IP54 Waterproof**: same copy as DC II.
  - **Working Temperature: -30°C to 80°C**: "All-weather durability, performing flawlessly in extreme climates from -30°C to 80°C."
- **Specs:**

| Param | SNOD30SC | SNOD40SC | SNOD60SC | SNOD80SC |
|---|---|---|---|---|
| Max input current | 58A | 76A | 116A | 152A |
| Max output | 100A | 133A | 200A | 250A |
| Output power | 30KW | 40KW | 60KW | 80KW |
| Cable Cu | 3\*16+2\*10 | 3\*25+2\*16 | 3\*35+2\*25 | 3\*50+2\*35 |
| Cable Al | 3\*25+2\*16 | 3\*35+2\*25 | 3\*70+2\*50 | 3\*95+2\*70 |

  - Everything else matches DC II: AC380V three-phase five-wire, 380Vac±20%, 50/60Hz, 50-1000VDC, THDi, PF and regulation, standby ≤15W, air-cooled, ≤75db, GB/T standards, 5m gun. The one difference is efficiency, listed as "≥96%".
  - Package: 1360\*610\*2410mm. Gross weight: "327kg (40KW) | 351kg (60KW)".
- **Options:** Credit Card Payments (Optional). Same five connector icons as DC II.
- **Design and images:** free-standing black totem with a 55" portrait ad screen showing placeholder fast-food ad art ("CRISPY COMBO… $6"). One gun hangs on the right side. p2 hero is usable, but the ad creative must be replaced.

### DC Series V: DC Station 40/60/80KW (advertising screen, dual gun)
- **Variant on hero:** `AXI-EVOO-KDOD80SC`. The table lists `AXI-EVOO-KDOD40SC`, `AXI-EVOO-KDOD60SC` and `AXI-EVOO-KDOD80SC`.
- **Headline (verbatim, typo):** "DC STATION 60KW 60KW 80KW"
- **Marketing copy:** same six blocks as DC IV, including the 55-inch ad screen, "Protocal" typo and -30 C to 80 C working temperature.
- **Specs:**

| Param | KDOD40SC | KDOD60SC | KDOD80SC |
|---|---|---|---|
| Max input current | 76A | 116A | 152A |
| Max output | 133A | 200A | 250A |
| Output power | 40KW | 60KW | 80KW |
| Cable Cu | 3\*25+2\*16 | 3\*35+2\*25 | 3\*50+2\*35 |
| Cable Al | 3\*35+2\*25 | 3\*70+2\*50 | 3\*95+2\*70 |

  - All other rows match DC IV: efficiency ≥96%, ≤75db, GB/T standards, 5m gun.
  - Package: 1600\*1000\*2400mm. Gross weight: 351kg (80KW).
- **Design and images:** black totem with a 55" portrait ad screen showing placeholder luxury-watch art ("TIME ELEVATED / PRECISION. PASSION. PERFORMANCE."). It has a side status panel and **two guns**, one each side. p2 hero is usable, but the ad creative must be replaced.

### DC Series VII: DC Station 60KW to 240KW (multi-gun floor-standing)
- **Variant on hero:** `AXI-EVOO-KDOD240`. The table lists `KDOD 60V`, `KDOD60F`, `KDOD120`, `KDOD160`, `KDOD180` and `KDOD240`.
- **Headline:** "DC STATION 60KW TO 240KW"
- **Marketing copy (verbatim):**
  - **7-inch Color Touch Screen**: same copy as DC II.
  - **4G / Ethernet / WIFI**: same copy as DC II.
  - **Modular Design for Maintenance**: same copy as DC IV.
  - **Communication Protocal: OCPP 1.6J / 2.0.1**: same copy as DC II.
  - **Power Assisted Arm (optional)**: "Ergonomic gravity compensation minimizes lifting effort for easy plugging. Flexibly rotates to extend reach and automatically retracts to prevent cable wear."
  - **IP54 Waterproof & Noise: ≤75db**: "Built for the elements and quiet spaces alike. It delivers robust IP54 defense against rain and dust and runs quietly at under 75dB for commercial and residential comfort."
  - **Working Temperature: -30 C to 70 C**: "All-weather durability, performing flawlessly in extreme climates from -30°C to 70°C."
- **Specs:**

| Model | KDOD 60V | KDOD60F | KDOD120 | KDOD160 | KDOD180 | KDOD240 |
|---|---|---|---|---|---|---|
| Max input current | 116 A | 152 A | 228 A | 304 A | 384 A | 456 A |
| Max output current per gun | 200 A | 250 A | 250 A | 250 A / 300 A | *(blank)* | 300 A |
| Rated output power | 60 kW | 80 kW | 120 kW | 160 kW | 180 kW | 240 kW |
| Cu cable (mm²) | 3×35+2×25 | 3×50+2×35 | 3×95+2×70 | 3×120+2×95 | 3×150+2×120 | 3×240+2×150 |
| Al cable (mm²) | 3×70+2×50 | 3×95+2×70 | 3×120+2×95 | 3×150+2×120 | 3×185+2×150 | 3×300+2×240 |

  - Common to all models:
    - **Input:** AC380 V three-phase five-wire, 380 VAC ±20 %, 50/60 Hz.
    - **Output:** 50–1000 V DC, with "Equal power sharing" between guns.
    - **Power quality:** THDI ≤5 %, inrush ≤110 %, PF 0.99/0.95, voltage regulation ±0.5 %, current regulation ±1 %, ripple ±1 %.
    - **Efficiency and standby:** efficiency ≥96 %, standby ≤15 W.
    - **Physical:** forced-air cooling, IP54, working temperature -30 C ~ 70 C, 7 Inch Touch Screen.
    - **Connectivity:** OCPP 1.6J / 2.0.1, plus 4G / Ethernet / WIFI (optional).
    - **Gun and shipping:** 5m gun (length customizable), package 1090\*990\*2180mm.
    - **Weight:** gross weight 345kg (120KW).
- **Dimensions (drawing):** 700MM wide × 2008MM high × 818MM deep.
- **Options:** Credit Card Payments (Optional). Same five connector icons as DC II.
- **Design and images:** tall black cabinet with a canopy top and a central black panel holding the screen, RFID zone and two green LED bars. Guns hang from both sides; the exact gun count is unclear (at least 2). p2 hero and p3 dimensioned render are usable.

---

## 2. Comparison table

| Series | Model codes | Type / form | Power (kW) | Input | Connectors | IP | Display / UI | Connectivity | Payment / auth | Size (mm) | Weight | Cert marks shown |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| AC I | AXI-EVOO-A3.5K-P / 7K-P / 11K-P | AC portable (plug-in) | 3.5 / 7 / 11 (US: 3.8/7.6/9.6) | 1ph/3ph, 16/32A (US 40A) | GB/T, Type 2, Type 1/NACS | IP65 (icon) | Small colour screen + button | BT/WiFi (opt), OTA | None | 213×80×50 | not stated | "Fully Certified" icon |
| AC II | …-P-II (3.5/7/11/22) | AC portable | 3.5 / 7 / 11 / 22 (US: 3.8/7.6/9.6) | 16/32A (US 40A) | GB/T, Type 2, Type 1/NACS | IP65 (icon) | Screen + LED bar | BT/WiFi (opt), OTA | None | 206×80×56 | not stated | "Fully Certified" icon |
| AC III | …-P-III (7/11/22) | AC wallbox, tethered (labelled "portable") | 7 / 11 / 22 (US: 7.6/11.5) | 16/32A (US 32/48A) | GB/T, Type 2, Type 1/NACS | IP65 (icon) | Colour display, 6-state light strip | BT/WiFi (opt), OTA | Swipe card (RFID) | 400×163×95 | not stated | "Fully Certified" icon |
| AC IV tethered | …-WM-4 (7/11/22) | AC wallbox / pedestal, tethered | 7 / 11 / 22 (US: 7.6/11.5) | 16/32A (US 32/48A) | GB/T, Type 2, Type 1/NACS | IP55 | Colour display, LED bar | BT/WiFi (opt), OTA | Swipe card | 295×195×95.5 | not stated | TÜV SÜD |
| AC IV socket | …-WM-4-NP (7/11/22) | AC wallbox / pedestal, socket | 7 / 11 / 22 | 16/32A | Type 2 socket only | IP54 | Colour display, LED bar | BT/WiFi (opt), OTA | Swipe card | 295×195×95.5 | not stated | TÜV SÜD |
| DC I | AXI-EVOO-DC20K/30K/40K-WM-I-P | DC wall box (opt. pedestal) | 20 / 30 / 40 | 400Vac±15%, 67/100/133A | CCS1, CCS2, CHAdeMO, GB/T, NACS | IP54 | 4.3" display + LED column | WiFi 2.4GHz / BT (no OCPP stated) | RFID icon on unit | 600×400×180/215 | not stated | CE |
| DC II | AXI-EVOO-DSG20K/30K/40K-II | DC wall box, single gun | 20 / 30 / 40 | 380V 3ph, 32/58/76A | CCS1, CCS2, CHAdeMO, GB/T, NACS | IP54 | 7" touch | 4G/Ethernet/WiFi, OCPP 1.6J/2.0.1 | Credit card (opt), RFID zone | pkg 970×970×420 | 91.5kg (40kW, gross) | GB/T standards only |
| DC IV | (AXI-EVOO-)SNOD30/40/60/80SC | DC totem, 55" ad screen, single gun | 30 / 40 / 60 / 80 | 380V 3ph, 58–152A | CCS1, CCS2, CHAdeMO, GB/T, NACS | IP54 | 55" ad screen | 4G/Eth/WiFi, OCPP 1.6J/2.0.1 | Credit card (opt) | pkg 1360×610×2410 | 327kg (40kW) / 351kg (60kW) | GB/T standards only |
| DC V | AXI-EVOO-KDOD40/60/80SC | DC totem, 55" ad screen, dual gun | 40 / 60 / 80 | 380V 3ph, 76–152A | CCS1, CCS2, CHAdeMO, GB/T, NACS | IP54 | 55" ad screen + side status panel | 4G/Eth/WiFi, OCPP 1.6J/2.0.1 | Credit card (opt) | pkg 1600×1000×2400 | 351kg (80kW) | GB/T standards only |
| DC VII | KDOD 60V / 60F / 120 / 160 / 180 / 240 | DC floor-standing, multi-gun, power-sharing | 60 / 80 / 120 / 160 / 180 / 240 | 380V 3ph, 116–456A | CCS1, CCS2, CHAdeMO, GB/T, NACS | IP54 | 7" touch | 4G/Eth/WiFi (opt), OCPP 1.6J/2.0.1 | Credit card (opt), RFID | 700×818×2008 (unit) | 345kg (120kW) | none |

- **Shared across all AC models:** -25~+50 °C, 5–95 % RH. Protections listed: over/under-voltage, over-current, leakage, over-temperature and lightning.
- **Shared across DC II, IV, V and VII:** 50–1000 VDC output, ≥96 % efficiency, ≤15 W standby, ≤75 dB, 5 m gun with custom length.
- **Not stated on any sheet:** warranty.

---

## 3. Brand info

- **Brand / sub-brand:** **AXI EVOO**. The logo is "AXI" in black italic plus "EVOO" in red, with the final "O" shaped as a plug/cable.
  - Parent brand: **AXISolar** ("© 2026 AXISolar All rights reserved.").
- **Company line:** "AXI EVOO EV CHARGING SOLUTIONS"
- **Contact details:**
  - Web: axisolar.com
  - Email: info@axisolar.com
  - Address: Dalingshan, Dongguan City, Guangdong Province, China
- **Phone / social:** none on any sheet.
- **Legal footer (verbatim):** "© 2026 AXISolar All rights reserved. / We reserve the right of final interpretation. / The specifications in this datasheet are subiect to change without notice."
- **Slogans:** none beyond the per-series "Standard Fast EV Charger" and the cover title "EV CHARGER CATALOGUE".
- **Certification marks:**
  - TÜV SÜD (AC IV, both versions)
  - CE icon (DC I)
  - Generic "Fully Certified" ribbon icon (AC I–IV)
- **Standards cited:** IEC 62196-3 (DC I); GB/T 18487.1-2015, GB/T 27930-2015 and GB/T 20234-2015 (DC II, IV, V)
- **Manufacturer / OEM hints:**
  - The Dongguan address points to China manufacturing.
  - AC I hero render shows **"EVCharger"** printed on the device screen bezel, which is the OEM's stock branding.
  - The non-AXI model codes look like OEM part numbers: `SNOD..SC`, `KDOD..SC`, `KDOD60F` / `KDOD 60V`.
  - The payment terminal photo looks like a **Nayax**-style unit; a small "NAYAX" mark is barely legible (unclear). Its screen shows Chinese payment-app logos alongside Apple Pay, Samsung Pay, VISA and Mastercard.
  - Only GB/T (Chinese national) standards are cited for DC II–VII.
  - DC parameter tables are identical boilerplate across series.

---

## 4. Inconsistencies and client questions

**Model naming**
1. AC I and AC II use a different pattern for 3.5 kW (`A3.5K`) than for the others (`7K`, `11K`, `22K`). Is the "A" intentional?
2. **DC I** page 2 has a stray header **"AXI-EVOO-7K-P"**, which is the AC I model code, above the DC Series I title.
3. **DC I** parameter table labels all three columns `AXI-EVOO-DC20K-WM-I-P`; they should be DC20K / DC30K / DC40K.
4. **DC IV** hero shows only `AXI-EVOO-SNOD80SC`, and the table drops the AXI-EVOO prefix (`SNOD30SC`…).
5. **DC V** headline reads "60KW 60KW 80KW"; it should probably be 40/60/80 to match the table.
6. **DC VII** table uses `KDOD 60V` and `KDOD60F` without the prefix. KDOD60F is rated **80 kW**, so its name doesn't match its rating. The hero shows only `AXI-EVOO-KDOD240`.
7. Series numbering has gaps: DC III and DC VI don't exist. Are they planned, or should the series be renumbered?
8. "SC" / "WM" / "NP" / "P" suffixes are undefined. "P" is used for both portable (AC I/II) and the DC I wall unit (`-WM-I-P`).

**Spec conflicts**

9. **AC III** is headlined "AC PORTABLE", but it is a wall-mounted, hard-wired wallbox.
10. AC I renders show the **11 kW** unit with a **blue** (single-phase) CEE plug and the **7 kW** with a **red** (3-phase) plug. AC II shows the opposite, which is the electrically correct way round. The AC I hero also uses the blue plug.
11. US (Type 1/NACS) ratings (3.8/7.6/9.6 and 7.6/11.5 kW) differ from the headline kW values. AC II's headline "22KW" has no US equivalent.
12. AC III Type 2 input is 220/380 V, while AC I/II/IV Type 2 is 230/400 V. AC III Type 2 leakage is "A" only; the others list "AC or A+DC6mA".
13. AC IV tethered is IP55; AC IV socket is IP54; AC I–III are IP65 (icon only).
14. **DC I vs DC II at 20 kW:** DC I lists 67 A output and 400Vac±15% input; DC II lists 63 A and 380Vac±20%. Output range also differs: DC I is +200 to +1000 Vdc, DC II–VII are 50–1000 VDC.
15. Working temperature varies:
    - DC II and DC VII: -30 to 70 °C
    - DC IV and DC V: -30 to 80 °C
    - DC I: -25 to +50 °C
    - The DC II/VII spec-table voltage and current regulation is only rated -30~+55 °C.
16. **DC VII:** KDOD180 max output current is blank, and KDOD160 lists both "250 A / 300 A".
17. "Power switching" row is **blank** in DC II, IV and V.
18. DC IV gross weight is given for 40 and 60 kW only. DC V gives 80 kW only, and DC VII 120 kW only. The other variants have no weight.
19. DC II gross weight is 91.5 kg with a 970×970×420 package. That's plausible, but the unit's own dimensions are missing.
20. "OCPP 1.6J / 2.0.1" in the headings, but the body copy says "powered by universal OCPP 1.6J protocol". Is 2.0.1 actually supported?
21. DC I and all AC models never mention OCPP or 4G. Is that genuinely absent, or just omitted?
22. "Ultra-quiet operation at ≤75dB, perfect for quiet residential…" is a weak claim, since 75 dB is loud. Consider rewording.
23. "7-inch Color Touch Screen" on DC II, but the render shows a small screen. Verify.
24. "Double your revenue with a 55-inch ad screen" is an unsubstantiated claim.
25. Connector icons on DC sheets show all five standards (CCS1/CCS2/CHAdeMO/GB/T/NACS). Are these per-order options? Which are standard for the target market?

**Missing data (all models)**

26. Warranty
27. Certifications per model (CE / UKCA / TÜV / UL / ETL, etc.)
28. Weights for AC models
29. Cable length for AC models
30. RCD details
31. App name, if any
32. Phone number
33. Social links
34. Local / regional address. The only address is Dongguan, China; is there a local distributor such as Shamoun Power Group?

**Typos and copy errors (do not copy verbatim to site)**

35. Typos:
    - "Operating Tumidity" (should be Humidity) and "condensationless", both on every AC sheet
    - "Protocal" (DC IV, V, VII)
    - "voltagerange"
    - "Conductivecharging"
    - "d.c.and"
    - "subiect" (footer)
    - "≤75db" (should be dB)
    - "stable,real-time" (missing space)
    - "-30 C" (missing °)
36. Odd translated status names: "Pragmatic" (probably "Standby/Idle") and "Insert A Gun" (probably "Plugged in").
37. HCI (human-computer interaction) is shown as a selling point. That's jargon; rename it or clarify.

**Rebrand / stock-asset flags**

38. **"EVCharger"** OEM text is visible on the AC I unit in the renders.
39. The payment terminal photo is third-party (Nayax-style), with Chinese payment logos on screen.
40. DC IV/V ad screens show placeholder ads: a fast-food "CRISPY COMBO $6" and a luxury-watch "TIME ELEVATED". These may be stock or AI art, and the cover collage reuses them. AXI-specific creative is needed.
41. The cover collage renders look AI-generated or composited; logos are slightly warped on some units. Ask for clean original product photography or CAD renders.
42. The DC I hero render has the AXIEVOO logo pasted onto a brushed-metal OEM chassis. The status-thumbnail units on AC IV p5 have small unreadable text under the screen (unclear; possibly an OEM logo).
43. The AC IV p3 tethered parameters page has no status UI or product image, while the socket page has both. The layout is inconsistent.
