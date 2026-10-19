# AXI SOLAR — Solar Panel Datasheets

Sources (in `datasheets/`; files ending " 2" are byte-identical duplicates):

| File | Product | Pages | PDF metadata |
|---|---|---|---|
| `AXI-144TSD.pdf` | AXI-144TSD — TOPCon bifacial, 550–580 W | 2 | LibreOffice Draw, created 2024-01-05 |
| `AXIHJT101-555-585.pdf` | AXIHJT101 — HJT bifacial, 555–585 W | 2 | LibreOffice Draw, created 2023-11-15 |
| `AXI SOLAR PANEL .pdf` | **AXI LUMEN 620-640N-DG BF**: new N-type bifacial, 620–640 W | 2 | Canva, **Author "Fouad Shamoun"**, created 2026-09-24 |

All values below are transcribed from the sheets. "—" means the sheet does not say.

---

## 1. AXI-144TSD (TOPCon, 550–580 W)

**Headline:** "AXI-144TSD" / "Topcon Technology" / POWER RANGE 550W~580W / CELL SIZE 182*91mm / "16BB" (cell close-up image)

### Key facts
| Item | Value |
|---|---|
| Model codes | AXI550-36V-TSD, AXI555-36V-TSD, AXI560-36V-TSD, AXI565-36V-TSD, AXI570-36V-TSD, AXI575-36V-TSD, AXI580-36V-TSD |
| Cell type | 182*91 N Type Bifacial Mono (i.e. half-cut 182 mm cells), 16BB, SMBB |
| No. of cells | 144 (12*12) |
| Bifacial | Yes (cell type and BNPI table). **Bifaciality factor isn't given.** |
| Front glass | 2.0mm AR coating tempered glass |
| Back glass | 2.0mm Glazed Glass |
| Frame | Anodized Aluminum Alloy ("available in silver and black") |
| Dimensions | 2278*1134*30mm |
| Weight | 32.20kg |
| Junction box | IP68 3 diodes; "Waterproof protection grade:IP68 / Safety Level: Class II / Maximum System Voltage: 1500V" |
| Output cables | 4mm² cable 35cm (Including MC4 connector) |
| Max wind/snow load | 2400Pa/5400Pa |
| Efficiency | 21.29 – 22.45 % |
| Packing | 20FT container: 5 Packages/185pcs · 40HQ container: 20 Packages/740pcs (=37 pcs/package, derived) |
| Warranty | 15 years "Guarantee on product materail and workmanship" [sic] · 30 years "Linear Power output warranty" |
| Degradation | Chart only: 100% / 99% at start, 87.4% at year 30 (x-axis 5,12,15,20,30). No numeric degradation table. |
| Certifications (text) | ·IEC61215 / · IEC61730 |
| Cert logos | TÜV NORD "Type Tested", IEC, IDCOL, CQC, INMETRO, green ring logo (unidentified), CE, Class II double-square symbol, ISO, MCS |
| Other | QR code on page 2; IV curve shown for 570W |

### Electrical data — STC (1000 W/m², AM1.5, 25 °C)
| Model | Pmax (W) | Vmp (V) | Imp (A) | Voc (V) | Isc (A) | Eff (%) |
|---|---|---|---|---|---|---|
| AXI550-36V-TSD | 550.00 | 41.50 | 13.26 | 50.21±3% | 14.00±3% | 21.29 |
| AXI555-36V-TSD | 555.00 | 41.64 | 13.33 | 50.34±3% | 14.07±3% | 21.48 |
| AXI560-36V-TSD | 560.00 | 41.77 | 13.41 | 50.47±3% | 14.15±3% | 21.68 |
| AXI565-36V-TSD | 565.00 | 41.92 | 13.48 | 50.60±3% | 14.23±3% | 21.87 |
| AXI570-36V-TSD | 570.00 | 42.07 | 13.55 | 50.74±3% | 14.31±3% | 22.07 |
| AXI575-36V-TSD | 575.00 | 42.22 | 13.62 | 50.88±3% | 14.39±3% | 22.26 |
| AXI580-36V-TSD | 580.00 | 42.37 | 13.69 | 51.02±3% | 14.47±3% | 22.45 |

### Electrical data — NMOT (800 W/m², AM1.5, ambient 20 °C, wind 1 m/s)
| Model | Pmax (W) | Vmp (V) | Imp (A) | Voc (V) | Isc (A) |
|---|---|---|---|---|---|
| 550 | 413.00 | 38.99 | 10.61 | 47.70±3% | 11.30±3% |
| 555 | 417.00 | 39.12 | 10.67 | 47.82±3% | 11.36±3% |
| 560 | 421.00 | 39.25 | 10.73 | 47.94±3% | 11.42±3% |
| 565 | 425.00 | 39.38 | 10.79 | 48.06±3% | 11.49±3% |
| 570 | 429.00 | 39.51 | 10.85 | 48.20±3% | 11.55±3% |
| 575 | 433.00 | 39.64 | 10.91 | 48.32±3% | 11.61±3% |
| 580 | 437.00 | 39.77 | 10.97 | 48.46±3% | 11.68±3% |

### Electrical data — BNPI (back irradiance 135 W/m², AM1.5, 25 °C)
| Model | Pmax (W) | Vmp (V) | Imp (A) | Voc (V) | Isc (A) |
|---|---|---|---|---|---|
| 550 | 609.00 | 41.50 | 14.69 | 50.21±3% | 15.51±3% |
| 555 | 615.00 | 41.64 | 14.77 | 50.34±3% | 15.59±3% |
| 560 | 620.00 | 41.77 | 14.86 | 50.47±3% | 15.68±3% |
| 565 | 626.00 | 41.92 | 14.94 | 50.60±3% | 15.77±3% |
| 570 | 632.00 | 42.07 | 15.01 | 50.74±3% | 15.86±3% |
| 575 | 637.00 | 42.22 | 15.09 | 50.88±3% | 15.94±3% |
| 580 | 643.00 | 42.37 | 15.18 | 51.02±3% | 16.03±3% |

### Temperature & maximum ratings
| Item | Value |
|---|---|
| Maximum System Voltage | 1500V |
| Maximum Series Fuse Rating | 30A |
| Power Tolerance | 0~+3W |
| Pmax temp. coefficient | -0.300%/℃ (labelled "(W/℃)") |
| Voc temp. coefficient | -0.250%/℃ (labelled "(V/℃)") |
| Isc temp. coefficient | +0.046%/℃ (labelled "(A/℃)") |
| NMOT | 45±2℃ |
| Operating and storage temp. | -40~+85℃ |

### Feature copy (verbatim)
- **JUNCTION BOX**: "Waterproof protection grade:IP68 / Safety Level: Class II / Maximum System Voltage: 1500V / outstanding waterproof level / Effectively resist harsh environments"
- **Frame**: "Strong mechanical load resistance up to 5400Pa / Anodic oxidation layer resistant to chemical corrosion available in silver and black"
- **SMBB Technology**: "Better light trapping and current collection to improve module power output and reliability."
- **PID Resistance**: "Excellent Anti-PID performance guarantee via optimized mass-production process and materials control."
- **Higher Power Output**: "Module power increases 5-25% generally, bringing significantly lower LCOE and higher IRR."
- **Enhanced Mechanical Load**: "Certified to withstand: wind load (2400 Pascal) and snow load (5400 Pascal)."
- **Brand blurb** (page 1):
  > Introducing AXI solar, a solar industry pioneer known for groundbreaking innovation. Our panels redefine reliability, delivering optimal efficiency. With a focus on cutting-edge technology, we stand at the forefront of the solar revolution, offering a reliable, efficient, and sustainable energy solution.
  >
  > At AXI solar, sustainability is not just a goal; it's our ethos. From responsible sourcing to eco-friendly manufacturing, our commitment to minimizing environmental impact is unwavering. Choose AXI solar for solar panels that not only perform at the highest level but also contribute to a greener future.
  >
  > Join us on the journey to a sustainable tomorrow with AXI solar. Our solar panels embody a perfect blend of efficiency, innovation, and eco-conscious design. As a leader in the solar industry, we're dedicated to providing you with a reliable, cutting-edge, and environmentally responsible energy solution.
- Footer: "Specification included in this data-sheet are subject to change without notice"

---

## 2. AXIHJT101 (HJT, 555–585 W)

**Headline:** "Make Solar Energy More Efficient!" / "AXIHJT101" / "HJT Bifacial Module" / "555W~585W" + HJT badge / "Size > 2 sqm Hetero-junction Technology"

### Key facts
| Item | Value |
|---|---|
| Model codes (table) | AXIHJT110-555, -560, -565, -570, -575, -580, -585 (**"110" in the table, "101" in the title**) |
| Cell type | 110 half-cut, N-Type, HJT cells; "Based on 210mm wafer"; super MBB |
| Bifacial | Yes (BSTC table). **Bifaciality factor isn't given.** |
| Front cover | Solar glass, 2.0 mm, with anti-reflective surface |
| Back cover | Solar glass, 2.0 mm |
| Frame | Anodized aluminum (black). The product photo shows a silver/light frame. |
| Dimensions | 2384x1096x35 mm (tolerance length ±2mm, width ±2mm) |
| Weight | 32.3 kg |
| Junction box | 3 bypass diodes, IP68 rated, in accordance with IEC 62790 |
| Cables | PV cable 4 mm², 0.3m length, in accordance with EN 50618 (or customized length) |
| Connectors | MC4-Evo2, in accordance with IEC 62852, IP68 rated only when connected |
| Mechanical load | Max. Test Load +/- (incl. Safety Factor of 1.5): 5400/2400 Pa |
| Fire class | CLASS C (EN13501-1) |
| Efficiency | 21.20 – 22.40 % |
| Packing | 31pcs/pallet, 620pcs/40'HQ container |
| Warranty | Product 15 y ("15-Year Warranty for Materials and Processing"), Power 30 y ("30-Year Warranty for Extra Linear Power Output") |
| Degradation | Power after 1 year ≥98.5% of nominal power; annual degradation 0.4 %/y; power after 30 years ≥89% of nominal power |
| Certifications (text) | **None listed** |
| Cert logos | CE, TÜV badge (reads "ISO 9001"; the certifier name is too small to read), IEC, ISO |
| Drawing details | Mounting/grounding holes: 8-Ø4.3 grounding holes; mounting-hole spacing 400 / 1400 mm; frame section 35 mm height, 30 mm flange; inner width 1055 |

### Electrical data — STC / NMOT (Power tolerance 0~+5W)
STC: 1000 W/m², 25 °C cell, AM1.5. NMOT: 800 W/m², AM1.5, ambient 20 °C, wind 1 m/s.

| Model | Pmax STC/NMOT (W) | Vmp STC/NMOT (V) | Imp STC/NMOT (A) | Voc STC/NMOT (V) | Isc STC/NMOT (A) | Eff (%) |
|---|---|---|---|---|---|---|
| AXIHJT110-555 | 555 / 429 | 33.98 / 32.33 | 16.33 / 13.27 | 40.49 / 38.99 | 17.16 / 13.90 | 21.20 |
| AXIHJT110-560 | 560 / 433 | 34.17 / 32.54 | 16.39 / 13.31 | 40.77 / 39.28 | 17.19 / 13.95 | 21.40 |
| AXIHJT110-565 | 565 / 437 | 34.35 / 32.71 | 16.45 / 13.36 | 40.96 / 39.46 | 17.25 / 14.00 | 21.60 |
| AXIHJT110-570 | 570 / 441 | 34.53 / 32.89 | 16.51 / 13.41 | 41.16 / 39.65 | 17.31 / 14.05 | 21.80 |
| AXIHJT110-575 | 575 / 445 | 34.71 / 33.09 | 16.57 / 13.45 | 41.35 / 39.83 | 17.37 / 14.10 | 22.00 |
| AXIHJT110-580 | 580 / 449 | 34.88 / 33.26 | 16.63 / 13.50 | 41.54 / 40.00 | 17.43 / 14.15 | 22.20 |
| AXIHJT110-585 | 585 / 453 | 35.05 / 33.45 | 16.69 / 13.54 | 41.75 / 40.21 | 17.49 / 14.20 | 22.40 |

### Electrical data — BSTC (front 1000 W/m², rear 135 W/m², AM1.5, ambient 25 °C)
| Model | Pmax (W) | Vmp (V) | Imp (A) | Voc (V) | Isc (A) |
|---|---|---|---|---|---|
| 555 | 612 | 33.98 | 18.01 | 40.49 | 18.93 |
| 560 | 618 | 34.17 | 18.08 | 40.77 | 18.96 |
| 565 | 623 | 34.35 | 18.14 | 40.96 | 19.03 |
| 570 | 629 | 34.53 | 18.21 | 41.16 | 19.09 |
| 575 | 634 | 34.71 | 18.28 | 41.35 | 19.16 |
| 580 | 640 | 34.88 | 18.34 | 41.54 | 19.23 |
| 585 | 645 | 35.05 | 18.41 | 41.75 | 19.29 |

### System design & temperature
| Item | Value |
|---|---|
| Maximum System Voltage | 1500 V |
| Maximum Series Fuse Rating | 35 A |
| Operating temperature | -40 to +85 °C |
| Temp. coeff. Isc | +0.026%/°C |
| Temp. coeff. Voc | -0.223%/°C |
| Temp. coeff. Pmax | -0.243%/°C |
| NMOT | 43±3 °C |

Electrical curves: I-V at 1000/800/600/400/200 W/m² (570.1 / 456.3 / 341.4 / 225.9 / 110.6 W); P-V at cell temps (601.2 / 570.1 / 537.8 / 504.5 / 470.2 W).

### Feature copy (verbatim)
- "Based on 210mm wafer, N-Type bifacial HJT half cut cells"
- "Module power up to 585W, Module efficiency up to 22.40%"
- "Use super MBB half-cut cell technology to minimize micro-crack impacts and no-cutting loss on modules"
- "The front generation power is 30% higher than the conventional module and the back power is 25% higher"
- "No BO-LID, excellent anti-LeTID & anti-PID performance. Low power degradation, high energy yield"
- "Better shading tolerance"
- "Heavy snow load up to 5400 Pa, wind load up to 2400 Pa"
- Warranty chart caption: "Compared with traditional PERC solar module N-Type solar module have a power guarantee of up to 30 years. Less than 1.5% attenuation in the 1st year the annual attenuation from the 2nd year is no more than 0.4% and the power is no less than 89% until the 30th year." (chart: AXI Solar 98.5% → 90% at yr 25 → 89% at yr 30; PERC 98% → 84% at yr 25)
- Disclaimer: "*The specifications and key features contained in this datasheet may deviate slightly from our actual products due to the ongoing innovation and product enhancement. AXI Solar reserves the right to make necessary adjustment to the information described herein at anytime without further notice."

---

## 3. AXI LUMEN 620-640N-DG BF (new; "AXI SOLAR PANEL .pdf")

**Headline:** "620~640 Watt" / "AXI LUMEN 620-640N-DG BF" / "AXI LUMEN" / "AXI PREMIUM SOLAR PANELS"

### Key facts
| Item | Value |
|---|---|
| Model codes (table) | AX620TC-MHC-D, AX625TC-MHC-D, AX630TC-MHC-D, AX635TC-MHC-D, AX640TC-MHC-D |
| Cell tech | N-type, SMBB half-cell, monocrystalline. "TC" in the model code suggests TOPCon, but **the sheet never says TOPCon.** Cell size isn't given. |
| Cells | 132 half-cells; "Cell Orientation 132(6×22)" |
| Bifacial | Yes. **Bifaciality 80±5%** (the only sheet that states it). "DG BF" = double glass, bifacial (inferred from the name) |
| Glass | 2.0+2.0mm AR coated heat strengthened glass |
| Frame | Anodized aluminum alloy frame (black in photo) |
| Dimensions | 2382×1134×30mm (drawing also shows 1094 inner width, mounting-hole spacing 400/1400, frame 30×30; tolerance ±2mm) |
| Weight | 33.7kg |
| Junction box | IP68, three diodes |
| Output cable | 4mm², ±300mm (length can be customized) |
| Connector | MC4 compatible |
| Efficiency | 22.9 – 23.7 % |
| Packing | 36pcs per pallet / 720pcs per 40'HC |
| Mechanical loading | Front 5400Pa / Rear 2400Pa; Hailstone Test: 25mm hailstone at the speed of 23m/s |
| Fire rating | IEC Class A |
| Protection class | Class II |
| Warranty | "15-year product warranty" · "30-year linear power output warranty" |
| Degradation | **Not given** (no 1st-year / annual / 30-year figures) |
| Certifications (text) | UL 61730; IEC61215:2021; IEC61730:2023; ISO9001:2015 (ISO Quality Management System); ISO14001:2015 (ISO Environment Management System); ISO45001:2018 (Occupational Health and Safety); IEC62941 (Guideline for module design qualification and type approval) |
| Cert logos | TÜV Rheinland CERTIFIED, ISO, CSI, INMETRO (Legalizado), CE, CQC, PV CYCLE, MCS CERTIFIED |

### Electrical characteristics — STC / NMOT
STC: 1000 W/m², AM1.5, cell 25 °C. NMOT: 800 W/m², AM1.5, ambient 20 °C, wind 1 m/s.

| Model | Pmax STC/NMOT (W) | Voc STC/NMOT (V) | Isc STC/NMOT (A) | Vmp STC/NMOT (V) | Imp STC/NMOT (A) | Eff (%) |
|---|---|---|---|---|---|---|
| AX620TC-MHC-D | 620 / 484 | 49.40 / 49.05 | 15.95 / 12.44 | 41.05 / 41.50 | 15.10 / 11.65 | 22.9 |
| AX625TC-MHC-D | 625 / 488 | 49.63 / 49.29 | 16.00 / 12.48 | 41.25 / 41.70 | 15.15 / 11.69 | 23.1 |
| AX630TC-MHC-D | 630 / 491 | 49.87 / 49.52 | 16.05 / 12.52 | 41.45 / 41.90 | 15.20 / 11.73 | 23.3 |
| AX635TC-MHC-D | 635 / 495 | 50.11 / 49.76 | 16.10 / 12.56 | 41.65 / 42.10 | 15.25 / 11.76 | 23.5 |
| AX640TC-MHC-D | 640 / 499 | 50.35 / 50.00 | 16.15 / 12.60 | 41.84 / 42.30 | 15.29 / 11.80 | 23.7 |

### Electrical characteristics with 10% solar irradiation ratio (BNPI)
| Model | Pmax (W) | Voc (V) | Isc (A) | Vmp (V) | Imp (A) |
|---|---|---|---|---|---|
| 620 | 682 | 49.40 | 17.55 | 41.05 | 16.61 |
| 625 | 688 | 49.63 | 17.60 | 41.25 | 16.67 |
| 630 | 693 | 49.87 | 17.66 | 41.45 | 16.72 |
| 635 | 699 | 50.11 | 17.71 | 41.65 | 16.77 |
| 640 | 704 | 50.35 | 17.77 | 41.84 | 16.82 |

Footnote: "*Rear side power gain: The additional gain from the rear side compared to the power of the front side at the standard test condition. It depends on mounting (structure, height, tilt angle etc.) and albedo of the ground."

### Operating parameters & temperature ratings (STC)
| Item | Value |
|---|---|
| Operational Temperature | -40°C~+85°C |
| Power Output Tolerance | 0~3% |
| Maximum System Voltage | 1500V |
| Maximum Series Fuse Rating | 30A |
| Nominal Operating Cell Temperature | 45±2°C |
| Temp. coeff. Isc | +0.04%/°C |
| Temp. coeff. Voc | -0.23%/°C |
| Temp. coeff. Pmax | -0.28%/°C |

Curves are shown for AX640TC-MHC-D only (I-V and P-V at 1000/800/600/400/200 W/m²).

### Feature copy (verbatim)
- **SMBB Half-Cell Technology**: "More uniform current collection capability, reducing the current heat loss of the internal cells."
- **Higher Output Power**: "The output power of 132 half-cells monocrystalline modules is up to 640W."
- **Low Light Features**: "Higher performance under low light environment."
- **Harsh Environmental Adaptability**: "Strict salt spray and ammonia corrosiontest by the third party." [sic]
- **N-type With Very Low LID**: "N-type solar cell has very low LID naturally which can reduce power degradation."
- **Dual-Sided Power Generation**: "Gain increases with backside exposure to light, significantly reducing LCOE."
- Footer: "© 2026 AXISolar All rights reserved. / Note: Please read the safety and installation manual before using the product. / We reserve the right of final interpretation. / The specifications in this datasheet are subiect to change without notice." [sic] / "*The actual test value may be slightly deviated from the technical parameters due to the difference in test methods."

---

## 4. What is "AXI SOLAR PANEL .pdf"?

**It's a separate, new product (AXI LUMEN), not another version of the TSD or HJT.** It's also the only sheet made in-house: built in Canva, authored by "Fouad Shamoun", dated 2026-09-24, and it carries a new logo lockup ("AXI" mark + "AXI SOLAR" wordmark).

| | AXI-144TSD | AXIHJT101 | **AXI LUMEN** |
|---|---|---|---|
| Power | 550–580 W | 555–585 W | **620–640 W** |
| Tech | N-type TOPCon | N-type HJT | N-type (TOPCon implied by "TC") |
| Cell format | 182×91 half-cut, 144 | 210 mm half-cut, 110 | 132 half-cells (6×22), size not stated |
| Size (mm) | 2278×1134×30 | 2384×1096×35 | 2382×1134×30 |
| Weight | 32.20 kg | 32.3 kg | 33.7 kg |
| Efficiency | 21.29–22.45 % | 21.20–22.40 % | 22.9–23.7 % |
| Glass | 2.0 tempered AR + 2.0 glazed | 2.0 AR + 2.0 | 2.0+2.0 heat-strengthened AR |
| Bifaciality | not stated | not stated | 80±5% |
| Pmax coeff. | -0.300 %/°C | -0.243 %/°C | -0.28 %/°C |
| Packing / 40HQ | 740 (37/pkg) | 620 (31/pallet) | 720 (36/pallet) |
| Fuse | 30 A | 35 A | 30 A |
| Fire | — | Class C (EN13501-1) | IEC Class A |
| Degradation | chart: 99% → 87.4% @30y | 98.5%, 0.4%/y, 89% @30y | not given |
| Warranty | 15 / 30 | 15 / 30 | 15 / 30 |

The format (2382×1134, 132 half-cells, 620–640 W) is the industry-standard 210R/"G12R" 66-cell size. That's a newer class than the TSD's 182 mm 72-cell format. Lumen is the logical successor/top tier of the range.

---

## 5. Brand info found on the sheets

| Item | Value |
|---|---|
| Company name | "AXI solar" / "AXI Solar" / "Axi Solar" / "AXISolar" (inconsistent styling) |
| Website | www.axisolar.com (TSD, HJT); axisolar.com (Lumen) |
| Email | info@axisolar.com (all; the TSD shows "E-mail: info@axisolar.com") |
| Phone | **None on any sheet** |
| Address | **None on any sheet** |
| Social | **None on any sheet** |
| Copyright | "ⓒ Axi Solar All rights reserved." (TSD); "© 2026 AXISolar All rights reserved." (Lumen) |
| Taglines | "Make Solar Energy More Efficient!" (HJT); "AXI PREMIUM SOLAR PANELS" (Lumen) |
| Logo | TSD/HJT: "AXI" mark only (black + red swoosh). Lumen: chrome/red "AXI" mark + "AXI SOLAR" wordmark |
| Manufacturer / factory | **Not named anywhere.** No factory address, country of origin or cert holder. |
| Document author | Lumen PDF metadata: Author "Fouad Shamoun" (Canva). TSD/HJT: LibreOffice Draw, no author |

**Signs that these are rebranded OEM sheets** (inference, unverified):
- The model codes don't follow one AXI scheme. The cover names (AXI-144TSD, AXIHJT101, AXI LUMEN 620-640N-DG BF) don't match the table codes (AXIxxx-36V-TSD, AXIHJT110-xxx, AX6xxTC-MHC-D). That points to tables carried over from different source sheets.
- HJT: the 110-cell, 2384×1096×35, 555–585 W, 15/30 y, 98.5% / 0.4% / 89% spec closely matches mainstream Chinese HJT (e.g. Risen-style "RSM110-8" naming), but that's unconfirmed. "MC4-Evo2" is a Stäubli trademark connector.
- TSD and HJT were converted to PDF in LibreOffice Draw (edited from an existing PDF). The TSD keeps a stray "AXI" text overlay inside the BNPI table.
- Each sheet uses its own layout, fonts and footnote wording. The cert logos differ per sheet, and the Lumen logos are generic marks with no certificate numbers.
- The Lumen "MHC-D" suffix, "We reserve the right of final interpretation" (common Chinese-supplier boilerplate) and the "10% solar irradiation ratio (BNPI)" wording all look supplier-sourced.

---

## 6. Inconsistencies, gaps and client questions

### Conflicts with the current website (axisolar.com)
1. The site lists only TSD + HJT. **AXI LUMEN 620–640 W isn't on the site.** Confirm it's launched and sellable, and confirm the name "AXI LUMEN".
2. Site says both are "Bifacial Mono Half Cells Solar Panel… double glass with 2mm each side". This matches both sheets (2.0 + 2.0 mm) and Lumen (2.0+2.0). OK. But the TSD's rear is "Glazed Glass" while the front is "tempered", and Lumen says "heat strengthened". Which wording should we use?
3. Site name "AXIHJT101 555-585" vs table models "AXIHJT110-xxx". **Which is correct, 101 or 110?** (110 = cell count, so the title "101" is likely a typo.)
4. Site power ranges (TOPCon 550–580, HJT 555–585) match the sheets. OK.

### Per-sheet errors and typos
**AXI-144TSD**
- Temp-coefficient units are labelled "(W/℃)", "(V/℃)", "(A/℃)" but the values are %/℃.
- "No. of Cells 144 (12*12)": the layout for 144 half-cells is normally 6×24. Please confirm.
- Voc/Isc carry "±3%" tolerance, which is unusual on rated values.
- BNPI Vmp and Voc are identical to STC (copied rows). The BNPI gain is about 10.7%, but no bifaciality factor is stated.
- Typos: "materail", "Operatingand And Storage Temperature", "MaxWind", "ELECTRICALDATA", "Specification included … are subject" and a stray "AXI" in the BNPI table.
- Degradation is shown only as an unlabelled chart (99% → 87.4%). Is there a 1st-year / annual figure? 87.4% at 30 y is lower than the HJT (89%). Is that intended?
- The frame is "available in silver and black", but the table just says anodized and the photo shows silver. Which colour is stocked?
- No hail, fire class, product cert numbers or pallet weight.

**AXIHJT101**
- Title "AXIHJT101" vs models "AXIHJT110-…".
- Efficiency rounding: 555 W / (2.384×1.096 m²) = 21.24% vs 21.20% stated. Minor.
- "Size > 2 sqm" is an odd selling point.
- "The front generation power is 30% higher than the conventional module and the back power is 25% higher" is an unsupported marketing claim. Keep it or drop it?
- The frame is listed "black", but the product photo shows a silver frame.
- No certification standards are listed in text; there are only 4 logos (CE, TÜV/ISO 9001, IEC, ISO). Is it IEC 61215/61730 certified?
- Bifaciality factor isn't stated. Typo/format issues: "43±3/ °C", "temperature20 °C".
- Warranty chart: the "98%" label on the PERC line sits next to "98.5%". The chart puts AXI at 90% at year 25, consistent with 0.4%/y.
- Fire class C (EN 13501-1) vs Lumen "IEC Class A". These are different standards. Fine, but don't compare them on the site.

**AXI LUMEN**
- The tech is never stated explicitly (TOPCon?). Cell size isn't given (182×210 "210R"?).
- **NMOT Vmp (41.50–42.30 V) is higher than STC Vmp (41.05–41.84 V), and NMOT Voc is only about 0.35 V below STC.** That's physically implausible because voltage drops at higher temperature. Probably a copy error. Ask for the source sheet.
- The output cable reads "±300mm". The "±" is probably a typo for 300 mm.
- No degradation data (1st-year, annual, 30-year). It's needed for a warranty claim.
- BNPI is defined only as "10% solar irradiation ratio" (= Pmax × 1.10). There are no irradiance conditions, unlike TSD/HJT (135 W/m²).
- The drawing labels width 1094 (inner) and 1134 (outer). Fine, just note it.
- Typos: "corrosiontest", "subiect".
- Certs: UL 61730, IEC 61215:2021, IEC 61730:2023, IEC 62941 and the logo wall (TÜV Rheinland, CSI, INMETRO, CQC, MCS, PV CYCLE). **Can the client provide the certificate numbers/holders?** These are typically the OEM's certs, not AXI's.
- "© 2026", while the sheet itself is dated Sept 2026. OK, but the TSD/HJT have no year.

### Cross-sheet / brand questions
- Who is the manufacturer / OEM for each panel, and what's the country of origin? Can we state "manufactured by AXI" (the current site says "every solar panel we manufacture")?
- Company legal name, physical address, phone and socials appear on no sheet. Please supply them for the new site.
- Official brand styling: "AXI SOLAR", "AXI Solar", "AXISolar" or "Axi Solar"? Which logo is current (the Lumen lockup or the plain AXI mark)?
- Should TSD/HJT be retired in favour of Lumen, or should all three be sold (good/better/best)?
- Warranty terms (15 y product / 30 y linear) are the same for all three. Who backs the warranty, and is there a warranty document?
- Can the client supply high-res product photos and cut-outs? (Sheet images are low-res and differ per sheet.)
- TSD/HJT: are there newer versions of these sheets with certification details and corrected typos?
