# AXI SOLAR — Hybrid Inverter Datasheets (NERO / VERO / FORZA)

Sources (each 2 pages, A4-ish 791×1118 pt, made in Canva; files ending " 2" are byte-identical duplicates):

| File | PDF metadata title | Author (metadata) | Created |
|---|---|---|---|
| `datasheets/AXI NERO H8H10H12LV-1 (1).pdf` | AXI NERO H8/H10/H12LV-1 | Fouad Shamoun | 2026-09-24 (Canva) |
| `datasheets/AXI VERO H3H3.6H5H6 LV-1P.pdf` | AXI VERO H3/H3.6/H5/H6 LV-1P | Fouad Shamoun | 2026-09-24 (Canva) |
| `datasheets/XI FORZA H6H8H10H12H15H20LV-3P.pdf` | XI FORZA H6/H8/H10/H12/H15/H20LV-3P | Fouad Shamoun | 2026-09-24 (Canva) |

**Layout (all three identical template):**
- Page 1: AXI SOLAR logo top-right; full-width lifestyle hero (modern villa at sunset, rooftop PV, open garage with grey electric SUV charging, wall-mounted AXI inverter + floor-standing AXI-branded battery cabinet); white product render bottom-left with AXI SOLAR logo and colour touchscreen; family name in red, model line in white, product type in caps; 4 feature blocks with red circular icons: *Excellent Performance / Highly Flexible / Safe & Reliable / Intelligent Maintenance*.
- Page 2: dark grey background with red swoosh lines, red family name + white model line, logo top-right, spec table in white rounded bands, footnotes, footer.
- Same hero background image is reused on all three; only the foreground product render changes. The hero looks AI-generated/stock — confirm usage rights.
- No certification logos (CE, TÜV, etc.), QR codes, or app badges appear anywhere — certifications are text only.

Naming convention (inferred, not stated): `H` + rated kW, `LV` = low-voltage (48 V) battery, `1P`/`3P` = single/three phase.

---

## 1. AXI VERO — single-phase, 3–6 kW

- **Name:** AXI VERO — **AXI VERO H3/H3.6/H5/H6 LV-1P**
- **Type (verbatim):** SINGLE PHASE & LV BATTERY HYBRID INVERTER
- **Variants:** AXI VERO H3 LV-1P · AXI VERO H3.6 LV-1P · AXI VERO H5 LV-1P · AXI VERO H6 LV-1P

### Feature copy (verbatim)
**Excellent Performance**
- 200% usable PV power, up to 12 kW PV input
- Max.20A+20A PV input current with 2 MPPTs
- Max battery charge/discharge current of 140A
- Max. grid passthrough current of 41A

**Highly Flexible**
- Support 40-60V Lithium or Lead-acid battery
- Support generator/smart load/AC coupling
- Max. 9 units parallel for on-gird and off-gird operation
- 3 inverters in parallel for three phase

**Safe & Reliable**
- IP66: Indoor or outdoor installation
- Seamless transition to backup mode, for protection against power outages
- Compact and lightweight

**Intelligent Maintenance**
- 4.3'' LCD color touchscreen, easy to operate
- 6 time periods for battery charging/discharging
- Built-in WiFi, supporting remote monitoring and upgrade

### Specs
| Spec | H3 LV-1P | H3.6 LV-1P | H5 LV-1P | H6 LV-1P |
|---|---|---|---|---|
| Max. efficiency | 97.3% | 97.3% | 97.3% | 97.3% |
| Max. PV usable power | 6,000W | 7,200W | 10,000W | 12,000W |
| Max. PV input voltage | 500V | ← | ← | ← |
| Start-up voltage | 90V | ← | ← | ← |
| MPPT voltage range | 70V-450V | ← | ← | ← |
| Max. input current per MPPT | 20A/20A | ← | ← | ← |
| Max. short-circuit current per (MPPT) | 25A/25A | ← | ← | ← |
| No. of MPP trackers | 2 | ← | ← | ← |
| Strings per MPPT (unlabelled row, see issues) | 1/1 | ← | ← | ← |
| Battery type | Lithium-ion/Lead-acid | ← | ← | ← |
| Nominal / range battery voltage | 48V / 40V-60V | ← | ← | ← |
| Max. charge/discharge current | 75A/75A | 75A/75A | 110A/110A | 140A/140A |
| Max. charge/discharge power | 4,000W/4,000W | 4,000W/4,000W | 5,500W/5,500W | 6,600W/6,600W |
| Grid: nominal AC output power | 3,000W | 3,600W | 5,000W | 6,000W |
| Grid: max. AC apparent power | 3,300VA | 3,960VA | 5,500VA | 6,600VA |
| Grid: nominal AC current (220/230/240V) | 13.6A/13.0A/12.5A | 16.4A/15.7A/15.0A | 22.7A/21.7A/20.8A | 27.3A/26.1A/25.0A |
| Max. grid passthrough current | 41A | ← | ← | ← |
| Grid nominal voltage / freq | 220V/230V/240V, L+N+PE · 50Hz/60Hz | ← | ← | ← |
| Power factor | > 0.99 @rated power (Adjustable 0.8 LD - 0.8 LG) | ← | ← | ← |
| THDi | < 3% @ R Load | ← | ← | ← |
| Backup: nominal AC output power | 3,000W | 3,600W | 5,000W | 6,000W |
| Backup: max. apparent power | 3,300VA | 3,960VA | 5,500VA | 6,600VA |
| Backup: nominal AC current | 13.6A/13.0A/12.5A | 16.4A/15.7A/15.0A | 22.7A/21.7A/20.8A | 27.3A/26.1A/25.0A |
| Backup: peak apparent power | 200% @10s | ← | ← | ← |
| Backup: voltage / freq | 220V/230V/240V, L+N+PE · 50Hz/60Hz | ← | ← | ← |
| Transfer time | < 10ms (Typical) | ← | ← | ← |
| THDv | < 3% @ R Load | ← | ← | ← |
| Protection class | Class I | ← | ← | ← |
| PV switch | Optional | ← | ← | ← |
| Anti-islanding / overcurrent / overvoltage / AC short-circuit / PV reverse polarity | Yes (all) | ← | ← | ← |
| Surge protection | Type III | ← | ← | ← |
| Max. altitude | 4,000m (>2,000m derating) | ← | ← | ← |
| Operating temp. | -25°C~60°C | ← | ← | ← |
| Relative humidity | 0~100% | ← | ← | ← |
| Ingress protection | IP66 | ← | ← | ← |
| Cooling / mounting | Smart Cooling / Wall Bracket | ← | ← | ← |
| Dimensions (W×H×D) | 367mm×421mm×215mm | ← | ← | ← |
| Weight | 11.5 kg (single value for all) | ← | ← | ← |
| Display | LED+LCD | ← | ← | ← |
| Comms | RS485/CAN (for BMS), RS485, CAN (for parallel), 1*DO, 1*DI, Wi-Fi, LAN (Optional) | ← | ← | ← |
| Safety cert. | IEC/EN 62109-1/2 | ← | ← | ← |
| EMC cert. | IEC/EN 61000-6-1/2/3/4, IEC/EN 62920 | ← | ← | ← |
| Grid cert. | IEC 61727/62116, IEC 61683 | ← | ← | ← |
| Warranty | 5 Years | ← | ← | ← |
| Parallel | Max. 9 units (on/off-grid); 3 units for three-phase (from features) | | | |

---

## 2. AXI NERO — single-phase, 8–12 kW

- **Name:** AXI NERO — **AXI NERO H8/H10/H12LV-1P** (page 2 header says "H8/H10/H12LV-1")
- **Type (verbatim):** SINGLE PHASE & LV BATTERY HYBRID INVERTER
- **Variants:** AXI NERO H8 LV-1P · AXI NERO H10LV-1P · AXI NERO H12LV-1P

### Feature copy (verbatim)
**Excellent Performance**
- 200% PV oversizing, 160% PV usable power
- 3 MPPTs with 6 PV Strings, 20A Max. Input Current per String
- Max. battery charge/discharge current of 250A
- Max. grid passthrough current of 68.2A

**Highly Flexible**
- Support 40-60V Lithium or Lead-acid battery
- Support generator/smart load/AC coupling
- Max. 9 units parallel for on-gird and off-gird operation
- 3 inverters in parallel for three phase

**Safe & Reliable**
- IP66: Indoor or outdoor installation
- Seamless transition to backup mode, for protection against power outages
- Arc-fault circuit interruption (AFCI) 2.0

**Intelligent Maintenance**
- 4.3'' LCD color touchscreen, easy to operate
- 6 time periods for battery charging/discharging
- Built-in WiFi, supporting remote monitoring and upgrade

### Specs
| Spec | H8 LV-1P | H10LV-1P | H12LV-1P |
|---|---|---|---|
| Max. efficiency | 97.3% | 97.3% | 97.3% |
| Max. PV usable power | 16,000W | 20,000W | 24,000W |
| Max. PV input voltage | 500V | ← | ← |
| Start-up voltage | 90V | ← | ← |
| MPPT voltage range | 70V-450V | ← | ← |
| Max. input current per MPPT | 2*20A/2*20A | 2*20A/2*20A/2*20A | 2*20A/2*20A/2*20A |
| Max. short-circuit current per (MPPT) | 2*25A/2*25A | 2*25A/2*25A/2*25A | 2*25A/2*25A/2*25A |
| No. of MPP trackers | 2 | 3 | 3 |
| Strings per MPPT (unlabelled row) | 2/2 | 2/2/2 | 2/2/2 |
| Battery type | Lithium-ion/Lead-acid | ← | ← |
| Nominal / range battery voltage | 48V / 40V-60V | ← | ← |
| Max. charge/discharge current | 190A/190A | 220A/220A | 250A/250A |
| Max. charge/discharge power | **not stated** | | |
| Grid: nominal AC output power | 8,000W | 10,000W | 12,000W |
| Grid: max. AC apparent power | 8,800VA | 11,000VA | 12,000VA |
| Grid: nominal AC current (220/230/240V) | 36.4A/34.8A/33.3A | 45.5A/43.5A/41.7A | 54.5A/52.2A/50.0A |
| Max. grid passthrough current | 60A | ← | ← |
| Grid nominal voltage / freq | 220V/230V/240V, L+N+PE · 50Hz/60Hz | ← | ← |
| Power factor | > 0.99 @rated power (Adjustable 0.8 LD - 0.8 LG) | ← | ← |
| THDi | < 3% @ R Load | ← | ← |
| Backup: nominal AC output power | 8,000W | 10,000W | 12,000W |
| Backup: max. apparent power | 8,800VA | 11,000VA | 13,000VA |
| Backup: nominal AC current | 36.4A/34.8A/33.3A | 45.5A/43.5A/41.7A | 54.5A/52.2A/50.0A |
| Backup: peak apparent power | 200% @10s | ← | ← |
| Backup: voltage / freq | 220V/230V/240V, L+N+PE · 50Hz/60Hz | ← | ← |
| Transfer time | < 10ms (Typical) | ← | ← |
| THDv | < 3% @ R Load | ← | ← |
| Protection class | Class I | ← | ← |
| PV switch | Optional | ← | ← |
| Anti-islanding / overcurrent / overvoltage / AC short-circuit / PV reverse polarity | Yes (all) | ← | ← |
| Surge protection | Type III | ← | ← |
| AFCI | AFCI 2.0 (features only; not in table) | ← | ← |
| Max. altitude | 4,000m (>2,000m derating) | ← | ← |
| Operating temp. | -25°C~60°C | ← | ← |
| Relative humidity | 0~100% | ← | ← |
| Ingress protection | IP66 | ← | ← |
| Cooling / mounting | Smart Cooling / Wall Bracket | ← | ← |
| Dimensions (W×H×D) | 443mm×679mm×210mm | ← | ← |
| Weight | 29kg | 31.1kg | 31.1kg |
| Display | LED+LCD | ← | ← |
| Comms | RS485/CAN (for BMS), RS485, CAN (for parallel), 1*DO, 1*DI, Wi-Fi, LAN (Optional) | ← | ← |
| Safety / EMC / Grid cert. | IEC/EN 62109-1/2 · IEC/EN 61000-6-1/2/3/4, IEC/EN 62920 · IEC 61727/62116, IEC 61683 | ← | ← |
| Warranty | 5 Years | ← | ← |
| Parallel | Max. 9 units (on/off-grid); 3 units for three-phase (from features) | | |

---

## 3. AXI FORZA — three-phase, 6–20 kW

- **Name:** AXI FORZA — **AXI FORZA H6/H8/H10/H12/H15/H20LV-3P** (filename + PDF metadata say "XI FORZA")
- **Type (verbatim):** THREE PHASE & LV BATTERY HYBRID INVERTER
- **Variants:** AXI FORZA H6 LV-3P · H8 LV-3P · H10LV-3P · H12LV-3P · H15LV-3P · H20LV-3P (the H20 column is mislabelled "H15LV-3P" in the table)

### Feature copy (verbatim)
**Excellent Performance**
- 3 MPPTs with Max. PV Input power of 30kW
- Support high power module with 20A PV input current
- Up to 380A max. charging/discharging current
- Max. Grid Passthrough Current of 45A

**Highly Flexible**
- Support 40-60V Lithium or Lead-acid battery
- 3-Phase unbalanced output: Increase the self-use rate of solar energy
- Support smart load/generator/AC Coupling
- Max. 9 units parallel for on-gird and off-gird operation

**Safe & Reliable**
- IP65: Indoor or outdoor installation
- MC4 PV connectors, convenient for installation
- Multiple built-in protections, with optional AFCI 2.0/RSD/Battery breaker
- Seamless transition to backup mode, for protection against power outages

**Intelligent Maintenance**
- 4.3" LCD color touchscreen, easy to operate
- 6 time periods for battery charging/discharging
- Intelligent Management, local & remote monitoring

### Specs
| Spec | H6 | H8 | H10 | H12 | H15 | H20 (labelled "H15") |
|---|---|---|---|---|---|---|
| Max. efficiency | 97.60% | ← | ← | ← | ← | ← |
| Max. PV usable power | 25,000W | 25,000W | 40,000W | 40,000W | 40,000W | 40,000W |
| Max. PV input voltage | 1,000V | ← | ← | ← | ← | ← |
| Start-up voltage | 120V | ← | ← | ← | ← | ← |
| MPPT voltage range | 160V-980V | ← | ← | ← | ← | ← |
| Max. input current per MPPT | 20A/20A | 20A/20A | 20A/20A/20A | 20A/20A/20A | 20A/20A/20A | 20A/20A/20A |
| Max. short-circuit current per (MPPT) | 25A/25A (single value for all columns) | ← | ← | ← | ← | ← |
| No. of MPP trackers | 2 | 2 | 3 | 3 | 3 | 3 |
| Strings per MPPT (unlabelled row) | 1/1 | 1/1 | 1/1/1 | 1/1/1 | 1/1/1 | 1/1/1 |
| Battery inputs | 2 (from label "2 Battery Input.") | ← | ← | ← | ← | ← |
| Battery type | Lithium-ion/Lead-acid | ← | ← | ← | ← | ← |
| Nominal / range battery voltage | 48V / 40V-60V | ← | ← | ← | ← | ← |
| Max. charge/discharge current | 380A/150A | 380A/200A | 380A/250A | 380A/300A | 380A/350A | 380A/380A |
| Max. charge/discharge power | 20,000W/7,200 | 20,000W/9,600 | 20,000W/12,000 | 20,000W/14,500 | 20,000W/18,000 | 20,000W/20,000 |
| Grid: nominal AC output power | 6,000W | 8,000W | 10,000W | 12,000W | 15,000W | 20,000W |
| Grid: max. AC apparent power | 6,600VA | 8,800VA | 11,000VA | 13,200VA | 16,500VA | 22,000VA |
| Grid: nominal AC current | 3*9.1A/3*8.7A/3*8.3A | 3*12.1A/3*11.6A/3*11.1A | 3*15.2A/3*14.5A/3*13.9A | 3*18.2A/3*17.4A/3*16.7A | 3*22.7A/3*21.7A/3*20.8A | 3*30.3A/3*29A/3*27.8A |
| Max. grid passthrough current | 45A | ← | ← | ← | ← | ← |
| Grid nominal voltage | 220V/380V; 230V/400V, 240V/415V 3W+N+PE | ← | ← | ← | ← | ← |
| Freq / PF / THDi | 50Hz/60Hz · > 0.99 @rated power (Adjustable 0.8 LD - 0.8 LG) · < 3% @ R Load | ← | ← | ← | ← | ← |
| Backup: nominal / max. apparent power | same as grid row | | | | | |
| Backup: nominal AC current | same as grid row | | | | | |
| Backup: peak apparent power | 200% @10s | ← | ← | ← | ← | ← |
| Backup: voltage / freq | 220V/380V; 230V/400V, 240V/415V 3W+N+PE · 50Hz/60Hz | ← | ← | ← | ← | ← |
| Transfer time | < 10ms (Typical) | ← | ← | ← | ← | ← |
| THDv | < 3% @ 100% R Load | ← | ← | ← | ← | ← |
| Protection class | Class I | ← | ← | ← | ← | ← |
| PV switch | Yes | ← | ← | ← | ← | ← |
| Anti-islanding / overcurrent / overvoltage / AC short-circuit / PV reverse polarity | Yes (all) | ← | ← | ← | ← | ← |
| Surge protection | Type II AC/DC | ← | ← | ← | ← | ← |
| Optional | AFCI 2.0 / RSD / Battery breaker (features only) | | | | | |
| Max. altitude | 4,000m (>2,000m derating) | ← | ← | ← | ← | ← |
| Operating temp. / humidity | -25°C~60°C / 0~100% | ← | ← | ← | ← | ← |
| Ingress protection | IP65 | ← | ← | ← | ← | ← |
| Cooling / mounting | Smart Cooling / Wall Bracket | ← | ← | ← | ← | ← |
| Dimensions (W×H×D) | 460mm×742mm×266mm | ← | ← | ← | ← | ← |
| Weight | 46.5kg (single value for all) | ← | ← | ← | ← | ← |
| Display | LED+LCD | ← | ← | ← | ← | ← |
| Comms | RS485/CAN (for BMS), RS485 (for Meter), DRMs, CAN (for parallel), 2*DO, 2*DI, USB (for Wi-Fi/LAN,Optional) | ← | ← | ← | ← | ← |
| Safety / EMC / Grid cert. | IEC/EN 62109-1/2 · IEC/EN 61000-6-1/2/3/4, IEC/EN 62920 · IEC 61727/62116, IEC 61683 | ← | ← | ← | ← | ← |
| Warranty | 5 Years | ← | ← | ← | ← | ← |
| Parallel | Max. 9 units (on/off-grid) | | | | | |

Footnote (verbatim): "*: if only one set of terminals is used, the max battery charge/discharge current will be limited to 250A"

---

## 4. Comparison across families

| | AXI VERO | AXI NERO | AXI FORZA |
|---|---|---|---|
| Type | Hybrid, 1-phase, 48V LV battery | Hybrid, 1-phase, 48V LV battery | Hybrid, 3-phase, 48V LV battery |
| Models | H3, H3.6, H5, H6 LV-1P | H8, H10, H12 LV-1P | H6, H8, H10, H12, H15, H20 LV-3P |
| Rated AC power | 3–6 kW | 8–12 kW | 6–20 kW |
| Max. PV usable power | 6–12 kW (200%) | 16–24 kW (200%) | 25–40 kW |
| Max. PV voltage / MPPT range | 500V / 70–450V | 500V / 70–450V | 1,000V / 160–980V |
| MPPTs × strings | 2 × 1 | 2×2 (H8), 3×2 (H10/H12) | 2×1 (H6/H8), 3×1 (H10+) |
| Max. current per MPPT | 20A | 2×20A (20A/string) | 20A |
| Battery | 48V (40–60V), Li-ion/Lead-acid | same | same, 2 battery inputs |
| Max. charge/discharge current | 75–140A | 190–250A | 380A charge / 150–380A discharge |
| Max. grid passthrough | 41A | 60A (feature text: 68.2A) | 45A |
| Max. efficiency | 97.3% | 97.3% | 97.60% |
| Backup transfer | < 10ms | < 10ms | < 10ms |
| Peak backup | 200% @10s | 200% @10s | 200% @10s |
| IP rating | IP66 | IP66 | IP65 |
| Surge protection | Type III | Type III | Type II AC/DC |
| AFCI | not mentioned | AFCI 2.0 | optional AFCI 2.0 / RSD / battery breaker |
| PV switch | Optional | Optional | Yes |
| Wi-Fi | Built-in (LAN optional) | Built-in (LAN optional) | via USB dongle, optional |
| DI/DO | 1/1 | 1/1 | 2/2 (+ DRMs, meter RS485) |
| Parallel | 9 units; 3 for 3-phase | 9 units; 3 for 3-phase | 9 units |
| Unbalanced 3-phase output | – | – | Yes |
| Dimensions (mm) | 367×421×215 | 443×679×210 | 460×742×266 |
| Weight | 11.5 kg | 29 / 31.1 / 31.1 kg | 46.5 kg |
| Certifications | IEC/EN 62109-1/2; IEC/EN 61000-6-1/2/3/4, 62920; IEC 61727/62116, 61683 | same | same |
| Warranty | 5 Years | 5 Years | 5 Years |

---

## 5. Brand info found

| Item | Value | Where |
|---|---|---|
| Brand / company | AXISolar / "AXI SOLAR" (logo: stylised "AXI" monogram in black/chrome + red, with "A X I" and red italic "SOLAR") | Logo, footer |
| Copyright | © 2026 AXISolar All rights reserved. | Footer, page 2 |
| Website | axisolar.com | Footer |
| Email | info@axisolar.com | Footer |
| Phone / address / social | **None** | — |
| Slogan / tagline | **None** beyond product-type lines | — |
| Section headings (reusable as site copy) | Excellent Performance · Highly Flexible · Safe & Reliable · Intelligent Maintenance | Page 1 |
| Footer note | "Note: Please read the safety and installation manual before using the product." | Page 2 |
| Disclaimers | "The range of output voltage and frequency may vary depending on different grid codes." / "Specifications are subject to change without advanced notice." | Page 2 |
| Document author | Fouad Shamoun (PDF metadata) — ties to Shamoun Power Group | Metadata |
| Tooling | Canva (Creator/Producer) | Metadata |
| Cert logos | None shown | — |
| Product family naming | Italian-ish names: VERO, NERO, FORZA | Titles |
| Other brand names (OEM leftovers) | **None found** in text, metadata, or visible images | — |

**OEM hints:** spec-table structure, wording ("on-gird/off-gird", "LD/LG", "Smart Cooling", "DRMs", "6 time periods") and model-suffix scheme (`LV-1P` / `LV-3P`) are typical of a rebadged Chinese hybrid-inverter OEM template, but no originating brand is named anywhere. The product renders carry the AXI logo (likely edited). Ask the client for the OEM and original datasheets to verify numbers.

---

## 6. Issues / client questions

### All three sheets
1. **"on-gird and off-gird"** typo → "on-grid and off-grid".
2. **"PV Switchl"** typo → "PV Switch".
3. **"Max. Short Circuit Current per"** label truncated (missing "MPPT").
4. **Row/label misalignment:** the PV block has one more value row than labels; the last row (1/1, 2/2, 1/1/1, 2/2/2) has no label (probably "No. of strings per MPPT"), and values sit one row off from their labels in the PDF layout. Confirm the intended mapping.
5. "without **advanced** notice" → "advance notice".
6. Display row says **"LED+LCD"** while features claim a **4.3" LCD colour touchscreen**. Which is it?
7. Certifications are generic IEC only. No CE, VDE, AS/NZS 4777, G98/G99, UL, etc., and no cert logos. Which certifications/markets actually apply? Any test reports?
8. **Warranty 5 Years:** standard or extendable? What are the terms?
9. **No monitoring app** is named (Wi-Fi "remote monitoring and upgrade"). Which app/platform is it, and which battery brands are compatible (BMS protocol list)?
10. No Euro/weighted efficiency, MPPT efficiency, or battery-to-AC efficiency given; no standby consumption, noise level, or generator-input rating.
11. The hero lifestyle image is shared across all three and looks AI-generated. Check usage rights, and whether real product photos exist.
12. The OEM is unidentified. Ask for the source manufacturer and original datasheets.

### AXI NERO
13. Page 2 header **"AXI NERO H8/H10/H12LV-1"** is missing the "P" (page 1 says LV-1P; PDF title also "LV-1").
14. Feature **"200% PV oversizing, 160% PV usable power"** conflicts with the table (PV usable = 200% of rated: 16/20/24 kW).
15. Feature **"Max. grid passthrough current of 68.2A"** vs table **60A**.
16. Feature **"3 MPPTs with 6 PV Strings"** applies to H10/H12 only; H8 has 2 MPPTs / 4 strings.
17. **H12 max. apparent power:** grid 12,000VA vs backup 13,000VA. Other models use 110% (8,800/11,000), which would give 13,200VA. Which is correct?
18. The **Max. charge/discharge power** row is missing (VERO and FORZA have it).
19. **AFCI 2.0** is claimed in features but absent from the protection table. Is it standard or optional?
20. Variant label spacing is inconsistent ("H8 LV-1P" vs "H10LV-1P").

### AXI VERO
21. Weight cell reads **"Weight 11.5 kg"** (label duplicated in the value). Is it one weight for all 4 models?
22. Implied charge voltage is inconsistent: 75A→4,000W (53V), 110A→5,500W (50V), 140A→6,600W (47V). Please verify.
23. No AFCI listed (NERO has it). Not available on VERO?

### AXI FORZA
24. Filename and PDF metadata title say **"XI FORZA"** (missing "A"). The visible text is correct.
25. The **6th variant column is labelled "AXI FORZA H15LV-3P"** twice. The second should be **H20LV-3P**.
26. Feature **"3 MPPTs with Max. PV Input power of 30kW"** vs table **25,000W / 40,000W**. Also H6/H8 have only 2 MPPTs.
27. **PV usable power ratios look implausible:** H6 = 25 kW (417%), H10 = 40 kW (400%), H20 = 40 kW (200%). Please verify.
28. **Max. short-circuit current "25A/25A"** is shown as one value across all columns, but H10–H20 have 3 MPPTs (should be 25A/25A/25A?).
29. **Max. charge/discharge power** discharge values lack units ("20,000W/7,200").
30. Battery label is merged: **"2 Battery Input. Battery Type"**. The footnote "*: if only one set of terminals is used... limited to 250A" has **no matching asterisk** in the table.
31. Efficiency is formatted "97.60%" vs "97.3%" on the other sheets.
32. Nominal voltage separators are inconsistent: "220V/380V; 230V/400V, 240V/415V 3W+N+PE".
33. THDv says "< 3% @ 100% R Load" vs "< 3% @ R Load" elsewhere. Wi-Fi is via optional USB dongle, while the 1P sheets say built-in. Confirm.
34. A single dimension (460×742×266 mm) and weight (46.5 kg) are listed for 6–20 kW. Confirm they are identical across the range.
35. The "Peak Output Apparent Power 200% @10s" cell uses a larger font than the rest of the table (layout glitch).
36. Is "3 inverters in parallel for three phase" not applicable here? (The 1P sheets list it; FORZA lists 9-unit parallel only.)
