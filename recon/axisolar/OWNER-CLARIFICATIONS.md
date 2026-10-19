# AXI SOLAR — datasheet clarifications for the owner

Generated from the `toConfirm` notes in `src/data/products/*.ts` (2026-10-19).
Each item is either something we corrected on the website, or something the owner needs to confirm.
Once an item is answered, update the product record and delete the note there.

## Solar panels

### AXI LUMEN
- Cell technology: "TC" in the model code read as TOPCon; the sheet never says TOPCon. Cell size not stated.
- NMOT Vmp (41.50–42.30 V) is higher than STC Vmp, and NMOT Voc only ~0.35 V below STC. Physically implausible; shown as printed (Vmp × Imp matches NMOT Pmax). Ask for the source sheet.
- Output cable "±300mm" corrected to 300 mm.
- Bifacial table only says "10% solar irradiation ratio"; no rear irradiance stated (TSD/HJT use 135 W/m²).
- No degradation figures (1st year, annual, 30-year) on the sheet.
- Frame colour not stated in the table; product photo shows black.
- Certifications listed on the sheet (UL 61730, IEC 61215:2021, IEC 61730:2023, IEC 62941, ISO 9001/14001/45001) not shown: need certificate numbers / holder before publishing.
- Typos fixed in copy: "corrosiontest", "subiect".

### AXI-144TSD
- Temperature-coefficient units printed as W/℃, V/℃, A/℃; values are %/°C, corrected.
- Cell count printed "144 (12*12)"; shown as 6 × 24, the usual layout for 144 half-cut cells.
- Voc/Isc printed with "±3%" on each value; moved to a single tolerance row.
- Bifacial (BNPI) Vmp and Voc are identical to STC, likely copied rows. No bifaciality factor stated.
- 87.4 % after 30 years read from the warranty chart only; no first-year or annual degradation figure.
- 37 pcs per package derived from 185 / 5 and 740 / 20.
- Frame colour stocked (silver vs black) unknown; photo shows silver.
- "Module power increases 5–25%" marketing claim dropped (unsupported). Certifications (IEC 61215/61730) not shown.
- Typos fixed: "materail", "Operatingand And Storage", "MaxWind".

### AXIHJT110
- Name: datasheet title and old site say "AXIHJT101", spec table says "AXIHJT110-xxx". Used 110 (matches the 110-cell count); summary mentions 101 so existing owners can find it.
- Frame listed as black but the product photo shows silver; colour omitted.
- Efficiency rounding: 555 W / (2.384 × 1.096 m²) = 21.24 % vs 21.20 % printed; kept as printed.
- Dropped unsupported claim "front generation power 30% higher than conventional, back 25% higher" and "Size > 2 sqm".
- No certification standards listed in text; bifaciality factor not stated.
- Format fixes: "43±3/ °C", "temperature20 °C".

## Hybrid inverters

### AXI VERO
- Spec labels were shifted one row against values in the PDF; re-aligned. Unlabelled "1/1" row assumed to be strings per MPPT.
- Typos corrected: "on-gird/off-gird", "PV Switchl", truncated "Max. Short Circuit Current per", "Weight 11.5 kg" in the value cell.
- Display: table says "LED+LCD", features say 4.3" colour LCD touchscreen.
- Weight 11.5 kg given once. Same for all four models?
- Implied battery voltage differs by model (4,000 W/75 A, 5,500 W/110 A, 6,600 W/140 A). Verify charge/discharge power.
- No AFCI listed (NERO has AFCI 2.0). Not available on VERO?
- Monitoring app/platform and compatible battery (BMS) list not stated.

### AXI NERO
- Spec labels were shifted one row against values in the PDF; re-aligned. Unlabelled "2/2" row assumed to be strings per MPPT.
- Typos corrected: "on-gird/off-gird", "PV Switchl", page-2 header "H8/H10/H12LV-1" (missing "P").
- Feature text "160% PV usable power" conflicts with the table (200%: 16/20/24 kW). Used the table value.
- Feature text "68.2A" grid passthrough vs table 60 A. Used 60 A.
- H12 apparent power: grid 12,000 VA vs backup 13,000 VA (110% pattern would give 13,200 VA). Used the table values as printed.
- "3 MPPTs with 6 strings" applies to H10/H12 only; H8 has 2 MPPTs / 4 strings. Feature copy reworded.
- Max. charge/discharge power row missing from the datasheet.
- AFCI 2.0 appears in features only, not in the protection table. Standard or optional?
- Display: table says "LED+LCD", features say colour LCD touchscreen.

### AXI FORZA
- Sixth variant column was labelled "H15LV-3P" twice; corrected to H20 LV-3P.
- Spec labels were shifted one row against values in the PDF; re-aligned. Unlabelled "1/1" row assumed to be strings per MPPT.
- Typos corrected: "on-gird/off-gird", "PV Switchl", merged label "2 Battery Input. Battery Type", missing "W" on discharge power, "XI FORZA" in PDF title/filename.
- Feature text "Max. PV input power of 30kW" vs table 25,000 W (H6/H8) / 40,000 W (H10–H20). Used the table values; 30 kW dropped from copy.
- PV usable power ratios look implausible (H6 = 25 kW, ~417%; H20 = 40 kW, 200%). Verify.
- Short-circuit current printed as "25A/25A" for all models, incl. 3-MPPT ones. Shown as "25 A" per MPPT.
- Footnote "limited to 250A with one set of terminals" has no asterisk in the table; attached to charge/discharge current.
- Single dimensions (460×742×266 mm) and weight (46.5 kg) for 6–20 kW. Confirm.
- Wi-Fi via optional USB dongle here vs built-in on VERO/NERO. "3 inverters in parallel for three-phase" not applicable?
- Display: table says "LED+LCD", features say colour LCD touchscreen.

## EV chargers (AXI EVOO)

### AXI EVOO AC I
- IP65 appears only as an icon, not in the parameter table.
- 3.5 kW code is "A3.5K" while others are "7K"/"11K": is the "A" intentional?
- Type 1 / NACS ratings (3.8/7.6/9.6 kW) shown as one row; per-variant mapping not stated.
- Sheet typo "Operating Tumidity" corrected to humidity.
- Renders show OEM "EvCharger" print on the bezel (retouched out of site image); 11 kW render uses a blue CEE plug.
- Weight, cable length, warranty and certifications not stated.

### AXI EVOO AC II
- IP65 appears only as an icon, not in the parameter table.
- 22 kW has no Type 1 / NACS equivalent on the sheet.
- Weight, cable length, warranty and certifications not stated.

### AXI EVOO AC III
- Sheet headline says "AC Portable"; the unit is a wall-mounted wallbox. Site says wall-mounted.
- Model codes keep the "-P-" (portable) suffix as printed: confirm codes.
- Type 2 input printed as 220/380 V (AC I/II/IV say 230/400 V) and leakage "A" only (others "AC or A+DC6mA").
- IP65 appears only as an icon.
- Status names "Pragmatic" / "Insert A Gun" rewritten as standby / plugged in.
- Weight, cable length, warranty and certifications not stated.

### AXI EVOO AC IV
- IP ratings differ between versions (tethered IP55, socket IP54), icon-only; confirm.
- Socket-version leakage type taken from the tethered Type 2 column (sheet says same values).
- Sheet carries a TÜV SÜD mark: not shown on site per brief; confirm certificate scope.
- Raster under the text overlay shows OEM codes (KP-A7T-IV etc.).
- Weight, cable length, warranty not stated.

### AXI EVOO DC I
- p2 shows stray AC model code "AXI-EVOO-7K-P" above the title: ignored.
- Parameter table labels all three columns "DC20K-WM-I-P": corrected to DC20K/DC30K/DC40K.
- DC I vs DC II at 20 kW: DC I 67 A, 400 V ±15 %, 200–1000 V; DC II 63 A, 380 V ±20 %, 50–1000 V. Sheet values kept.
- "Operating current" not stated as input or output.
- OCPP, 4G, RFID (icon visible on render), weight, efficiency not stated.
- Five connector icons shown: confirm which are per-order options.
- Sheet shows a CE icon: not shown on site per brief.

### AXI EVOO DC II
- OCPP 1.6J / 2.0.1 in heading, body copy says 1.6J only: is 2.0.1 supported?
- Mounting not stated; "wall-mounted" taken from the render.
- 7-inch touch screen claimed; render shows a small screen.
- Unit dimensions not stated (package only). Gross weight given for 40 kW only.
- "Power switching" row blank on sheet: omitted.
- Working temperature -30 to 70 °C, but regulation only rated to +55 °C.
- RFID zone visible on render, not stated in specs.

### AXI EVOO DC IV
- Model codes SNOD..SC printed without AXI-EVOO prefix (hero shows AXI-EVOO-SNOD80SC): supplier-looking, confirm AXI codes.
- Working temperature -30 to 80 °C here vs -30 to 70 °C on DC II/VII.
- Gross weight given for 40 and 60 kW only.
- Render ad screen showed placeholder fast-food art: blanked on site image; need AXI creative or clean render.
- "Double your revenue" claim and "ultra-quiet" wording not used.
- Unit dimensions not stated (package only).

### AXI EVOO DC V
- Headline reads "60KW 60KW 80KW": corrected to 40/60/80 kW per the table.
- KDOD..SC codes look like supplier part numbers: confirm.
- Power sharing between the two guns not stated.
- Working temperature -30 to 80 °C here vs -30 to 70 °C on DC II/VII.
- Gross weight given for 80 kW only.
- Render ad screen showed placeholder watch art: blanked on site image; need AXI creative or clean render.

### AXI EVOO DC VII
- Model codes KDOD.. printed without AXI-EVOO prefix (hero shows AXI-EVOO-KDOD240): supplier-looking, confirm.
- "KDOD 60V" normalised to KDOD60V. KDOD60F is rated 80 kW: name/rating mismatch.
- KDOD180 max current per gun is blank; KDOD160 lists "250 A / 300 A".
- Number of guns not stated (render shows guns both sides).
- Gross weight given for 120 kW only.
- Connectors not in the table; five connector icons shown.
