import type { Product } from './types';

/**
 * AXI hybrid inverters — VERO, NERO, FORZA.
 * Source: public/datasheets/axi-*.pdf (extraction + error list in
 * recon/axisolar/datasheets/inverters.md). Spec labels in the PDFs sit one
 * row off from their values; the rows below are re-aligned.
 */

const SINGLE_PHASE_GRID = '220V / 230V / 240V, L+N+PE';
const THREE_PHASE_GRID = '220V/380V, 230V/400V, 240V/415V, 3W+N+PE';
const PF = '> 0.99 at rated power (adjustable 0.8 leading – 0.8 lagging)';
const CERTS = [
  { label: 'Safety standard', values: ['IEC/EN 62109-1/2'] },
  { label: 'EMC standard', values: ['IEC/EN 61000-6-1/2/3/4, IEC/EN 62920'] },
  { label: 'Grid standard', values: ['IEC 61727 / 62116, IEC 61683'] },
];
const PROTECTIONS = [
  { label: 'Protection class', values: ['Class I'] },
  { label: 'Anti-islanding protection', values: ['Yes'] },
  { label: 'Overcurrent protection', values: ['Yes'] },
  { label: 'Overvoltage protection', values: ['Yes'] },
  { label: 'AC short-circuit protection', values: ['Yes'] },
  { label: 'PV reverse polarity protection', values: ['Yes'] },
];
const ENVIRONMENT = [
  { label: 'Max. operating altitude', values: ['4,000 m (derating above 2,000 m)'] },
  { label: 'Operating temperature', values: ['-25 °C to 60 °C'] },
  { label: 'Relative humidity', values: ['0–100%'] },
];

export const inverters: Product[] = [
  {
    slug: 'vero',
    line: 'inverters',
    name: 'AXI VERO',
    family: 'Single-phase hybrid inverter',
    tagline: '3–6 kW single-phase hybrid inverter for 48 V LV batteries',
    summary:
      'Single-phase hybrid inverter from 3 to 6 kW with 2 MPPTs, 200% PV oversizing and up to 140 A battery charge/discharge. IP66, parallel up to 9 units.',
    status: 'current',
    image: '/images/products/inverters/vero.webp',
    imageAlt: 'AXI VERO single-phase hybrid inverter, front view with colour touchscreen',
    variants: ['H3 LV-1P', 'H3.6 LV-1P', 'H5 LV-1P', 'H6 LV-1P'],
    highlights: [
      { label: 'Rated power', value: '3–6 kW' },
      { label: 'Max. PV power', value: '12 kW' },
      { label: 'Battery current', value: '140 A' },
      { label: 'Max. efficiency', value: '97.3%' },
    ],
    features: [
      '200% usable PV power, up to 12 kW PV input',
      '2 MPPTs, max. 20 A + 20 A PV input current',
      'Max. battery charge/discharge current of 140 A',
      'Max. grid passthrough current of 41 A',
      'Supports 40–60 V lithium or lead-acid batteries',
      'Supports generator, smart load and AC coupling',
      'Up to 9 units in parallel for on-grid and off-grid operation; 3 units for three-phase',
      'IP66 for indoor or outdoor installation',
      'Seamless transition to backup mode, < 10 ms typical',
      '4.3" colour LCD touchscreen',
      '6 time periods for battery charging/discharging',
      'Built-in Wi-Fi for remote monitoring and firmware upgrade',
    ],
    specs: [
      {
        title: 'PV Input',
        rows: [
          { label: 'Max. PV usable power', values: ['6,000 W', '7,200 W', '10,000 W', '12,000 W'] },
          { label: 'Max. PV input voltage', values: ['500 V'] },
          { label: 'Start-up voltage', values: ['90 V'] },
          { label: 'MPPT voltage range', values: ['70–450 V'] },
          { label: 'No. of MPP trackers', values: ['2'] },
          { label: 'No. of strings per MPPT', values: ['1 / 1'] },
          { label: 'Max. input current per MPPT', values: ['20 A / 20 A'] },
          { label: 'Max. short-circuit current per MPPT', values: ['25 A / 25 A'] },
        ],
      },
      {
        title: 'Battery',
        rows: [
          { label: 'Battery type', values: ['Lithium-ion / lead-acid'] },
          { label: 'Nominal battery voltage', values: ['48 V'] },
          { label: 'Battery voltage range', values: ['40–60 V'] },
          { label: 'Max. charge/discharge current', values: ['75 A / 75 A', '75 A / 75 A', '110 A / 110 A', '140 A / 140 A'] },
          { label: 'Max. charge/discharge power', values: ['4,000 W / 4,000 W', '4,000 W / 4,000 W', '5,500 W / 5,500 W', '6,600 W / 6,600 W'] },
        ],
      },
      {
        title: 'AC Output (On-grid)',
        rows: [
          { label: 'Nominal AC output power', values: ['3,000 W', '3,600 W', '5,000 W', '6,000 W'] },
          { label: 'Max. AC apparent power', values: ['3,300 VA', '3,960 VA', '5,500 VA', '6,600 VA'] },
          { label: 'Nominal AC current (220/230/240 V)', values: ['13.6 / 13.0 / 12.5 A', '16.4 / 15.7 / 15.0 A', '22.7 / 21.7 / 20.8 A', '27.3 / 26.1 / 25.0 A'] },
          { label: 'Max. grid passthrough current', values: ['41 A'] },
          { label: 'Nominal grid voltage', values: [SINGLE_PHASE_GRID] },
          { label: 'Nominal grid frequency', values: ['50 / 60 Hz'] },
          { label: 'Power factor', values: [PF] },
          { label: 'THDi', values: ['< 3% (resistive load)'] },
        ],
      },
      {
        title: 'AC Output (Backup)',
        rows: [
          { label: 'Nominal AC output power', values: ['3,000 W', '3,600 W', '5,000 W', '6,000 W'] },
          { label: 'Max. AC apparent power', values: ['3,300 VA', '3,960 VA', '5,500 VA', '6,600 VA'] },
          { label: 'Nominal AC current (220/230/240 V)', values: ['13.6 / 13.0 / 12.5 A', '16.4 / 15.7 / 15.0 A', '22.7 / 21.7 / 20.8 A', '27.3 / 26.1 / 25.0 A'] },
          { label: 'Peak apparent power', values: ['200% for 10 s'] },
          { label: 'Nominal voltage', values: [SINGLE_PHASE_GRID] },
          { label: 'Nominal frequency', values: ['50 / 60 Hz'] },
          { label: 'Transfer time', values: ['< 10 ms (typical)'] },
          { label: 'THDv', values: ['< 3% (resistive load)'] },
        ],
      },
      {
        title: 'Efficiency',
        rows: [{ label: 'Max. efficiency', values: ['97.3%'] }],
      },
      {
        title: 'General',
        rows: [
          ...ENVIRONMENT,
          { label: 'Ingress protection', values: ['IP66'] },
          { label: 'Cooling', values: ['Smart cooling'] },
          { label: 'Mounting', values: ['Wall bracket'] },
          { label: 'Dimensions (W × H × D)', values: ['367 × 421 × 215 mm'] },
          { label: 'Weight', values: ['11.5 kg'] },
          { label: 'Display', values: ['LED + LCD'] },
          { label: 'Communication', values: ['RS485/CAN (BMS), RS485, CAN (parallel), 1× DO, 1× DI, Wi-Fi, LAN (optional)'] },
          { label: 'Parallel operation', values: ['Up to 9 units (on-grid and off-grid); 3 units for three-phase'] },
          ...CERTS,
        ],
      },
      {
        title: 'Protection',
        rows: [
          ...PROTECTIONS,
          { label: 'PV switch', values: ['Optional'] },
          { label: 'Surge protection', values: ['Type III'] },
        ],
      },
      {
        title: 'Warranty',
        rows: [{ label: 'Standard warranty', values: ['5 years'] }],
      },
    ],
    datasheet: '/datasheets/axi-vero.pdf',
    toConfirm: [
      'Spec labels were shifted one row against values in the PDF; re-aligned. Unlabelled "1/1" row assumed to be strings per MPPT.',
      'Typos corrected: "on-gird/off-gird", "PV Switchl", truncated "Max. Short Circuit Current per", "Weight 11.5 kg" in the value cell.',
      'Display: table says "LED+LCD", features say 4.3" colour LCD touchscreen.',
      'Weight 11.5 kg given once. Same for all four models?',
      'Implied battery voltage differs by model (4,000 W/75 A, 5,500 W/110 A, 6,600 W/140 A). Verify charge/discharge power.',
      'No AFCI listed (NERO has AFCI 2.0). Not available on VERO?',
      'Monitoring app/platform and compatible battery (BMS) list not stated.',
    ],
  },
  {
    slug: 'nero',
    line: 'inverters',
    name: 'AXI NERO',
    family: 'Single-phase hybrid inverter',
    tagline: '8–12 kW single-phase hybrid inverter for 48 V LV batteries',
    summary:
      'Single-phase hybrid inverter from 8 to 12 kW with up to 3 MPPTs and 6 strings, 200% PV oversizing and up to 250 A battery charge/discharge. IP66 with AFCI 2.0.',
    status: 'current',
    image: '/images/products/inverters/nero.webp',
    imageAlt: 'AXI NERO single-phase hybrid inverter, three-quarter view with colour touchscreen',
    variants: ['H8 LV-1P', 'H10 LV-1P', 'H12 LV-1P'],
    highlights: [
      { label: 'Rated power', value: '8–12 kW' },
      { label: 'Max. PV power', value: '24 kW' },
      { label: 'Battery current', value: '250 A' },
      { label: 'Max. efficiency', value: '97.3%' },
    ],
    features: [
      '200% PV oversizing, up to 24 kW PV usable power',
      'Up to 3 MPPTs and 6 PV strings (H10/H12), 20 A max. input current per string',
      'Max. battery charge/discharge current of 250 A',
      'Max. grid passthrough current of 60 A',
      'Supports 40–60 V lithium or lead-acid batteries',
      'Supports generator, smart load and AC coupling',
      'Up to 9 units in parallel for on-grid and off-grid operation; 3 units for three-phase',
      'IP66 for indoor or outdoor installation',
      'Arc-fault circuit interruption (AFCI) 2.0',
      'Seamless transition to backup mode, < 10 ms typical',
      '4.3" colour LCD touchscreen with 6 battery charge/discharge time periods',
      'Built-in Wi-Fi for remote monitoring and firmware upgrade',
    ],
    specs: [
      {
        title: 'PV Input',
        rows: [
          { label: 'Max. PV usable power', values: ['16,000 W', '20,000 W', '24,000 W'] },
          { label: 'Max. PV input voltage', values: ['500 V'] },
          { label: 'Start-up voltage', values: ['90 V'] },
          { label: 'MPPT voltage range', values: ['70–450 V'] },
          { label: 'No. of MPP trackers', values: ['2', '3', '3'] },
          { label: 'No. of strings per MPPT', values: ['2 / 2', '2 / 2 / 2', '2 / 2 / 2'] },
          { label: 'Max. input current per MPPT', values: ['2×20 A / 2×20 A', '2×20 A / 2×20 A / 2×20 A', '2×20 A / 2×20 A / 2×20 A'] },
          { label: 'Max. short-circuit current per MPPT', values: ['2×25 A / 2×25 A', '2×25 A / 2×25 A / 2×25 A', '2×25 A / 2×25 A / 2×25 A'] },
        ],
      },
      {
        title: 'Battery',
        rows: [
          { label: 'Battery type', values: ['Lithium-ion / lead-acid'] },
          { label: 'Nominal battery voltage', values: ['48 V'] },
          { label: 'Battery voltage range', values: ['40–60 V'] },
          { label: 'Max. charge/discharge current', values: ['190 A / 190 A', '220 A / 220 A', '250 A / 250 A'] },
        ],
      },
      {
        title: 'AC Output (On-grid)',
        rows: [
          { label: 'Nominal AC output power', values: ['8,000 W', '10,000 W', '12,000 W'] },
          { label: 'Max. AC apparent power', values: ['8,800 VA', '11,000 VA', '12,000 VA'] },
          { label: 'Nominal AC current (220/230/240 V)', values: ['36.4 / 34.8 / 33.3 A', '45.5 / 43.5 / 41.7 A', '54.5 / 52.2 / 50.0 A'] },
          { label: 'Max. grid passthrough current', values: ['60 A'] },
          { label: 'Nominal grid voltage', values: [SINGLE_PHASE_GRID] },
          { label: 'Nominal grid frequency', values: ['50 / 60 Hz'] },
          { label: 'Power factor', values: [PF] },
          { label: 'THDi', values: ['< 3% (resistive load)'] },
        ],
      },
      {
        title: 'AC Output (Backup)',
        rows: [
          { label: 'Nominal AC output power', values: ['8,000 W', '10,000 W', '12,000 W'] },
          { label: 'Max. AC apparent power', values: ['8,800 VA', '11,000 VA', '13,000 VA'] },
          { label: 'Nominal AC current (220/230/240 V)', values: ['36.4 / 34.8 / 33.3 A', '45.5 / 43.5 / 41.7 A', '54.5 / 52.2 / 50.0 A'] },
          { label: 'Peak apparent power', values: ['200% for 10 s'] },
          { label: 'Nominal voltage', values: [SINGLE_PHASE_GRID] },
          { label: 'Nominal frequency', values: ['50 / 60 Hz'] },
          { label: 'Transfer time', values: ['< 10 ms (typical)'] },
          { label: 'THDv', values: ['< 3% (resistive load)'] },
        ],
      },
      {
        title: 'Efficiency',
        rows: [{ label: 'Max. efficiency', values: ['97.3%'] }],
      },
      {
        title: 'General',
        rows: [
          ...ENVIRONMENT,
          { label: 'Ingress protection', values: ['IP66'] },
          { label: 'Cooling', values: ['Smart cooling'] },
          { label: 'Mounting', values: ['Wall bracket'] },
          { label: 'Dimensions (W × H × D)', values: ['443 × 679 × 210 mm'] },
          { label: 'Weight', values: ['29 kg', '31.1 kg', '31.1 kg'] },
          { label: 'Display', values: ['LED + LCD'] },
          { label: 'Communication', values: ['RS485/CAN (BMS), RS485, CAN (parallel), 1× DO, 1× DI, Wi-Fi, LAN (optional)'] },
          { label: 'Parallel operation', values: ['Up to 9 units (on-grid and off-grid); 3 units for three-phase'] },
          ...CERTS,
        ],
      },
      {
        title: 'Protection',
        rows: [
          ...PROTECTIONS,
          { label: 'Arc-fault protection', values: ['AFCI 2.0'] },
          { label: 'PV switch', values: ['Optional'] },
          { label: 'Surge protection', values: ['Type III'] },
        ],
      },
      {
        title: 'Warranty',
        rows: [{ label: 'Standard warranty', values: ['5 years'] }],
      },
    ],
    datasheet: '/datasheets/axi-nero.pdf',
    toConfirm: [
      'Spec labels were shifted one row against values in the PDF; re-aligned. Unlabelled "2/2" row assumed to be strings per MPPT.',
      'Typos corrected: "on-gird/off-gird", "PV Switchl", page-2 header "H8/H10/H12LV-1" (missing "P").',
      'Feature text "160% PV usable power" conflicts with the table (200%: 16/20/24 kW). Used the table value.',
      'Feature text "68.2A" grid passthrough vs table 60 A. Used 60 A.',
      'H12 apparent power: grid 12,000 VA vs backup 13,000 VA (110% pattern would give 13,200 VA). Used the table values as printed.',
      '"3 MPPTs with 6 strings" applies to H10/H12 only; H8 has 2 MPPTs / 4 strings. Feature copy reworded.',
      'Max. charge/discharge power row missing from the datasheet.',
      'AFCI 2.0 appears in features only, not in the protection table. Standard or optional?',
      'Display: table says "LED+LCD", features say colour LCD touchscreen.',
    ],
  },
  {
    slug: 'forza',
    line: 'inverters',
    name: 'AXI FORZA',
    family: 'Three-phase hybrid inverter',
    tagline: '6–20 kW three-phase hybrid inverter for 48 V LV batteries',
    summary:
      'Three-phase hybrid inverter from 6 to 20 kW with 1,000 V PV input, up to 3 MPPTs, 380 A battery charging and unbalanced three-phase output. IP65, parallel up to 9 units.',
    status: 'current',
    image: '/images/products/inverters/forza.webp',
    imageAlt: 'AXI FORZA three-phase hybrid inverter, front view with colour touchscreen',
    variants: ['H6 LV-3P', 'H8 LV-3P', 'H10 LV-3P', 'H12 LV-3P', 'H15 LV-3P', 'H20 LV-3P'],
    highlights: [
      { label: 'Rated power', value: '6–20 kW' },
      { label: 'Max. PV voltage', value: '1,000 V' },
      { label: 'Charge current', value: '380 A' },
      { label: 'Max. efficiency', value: '97.6%' },
    ],
    features: [
      'Up to 3 MPPTs (H10–H20), 20 A input current per MPPT for high-power modules',
      'Up to 380 A max. battery charge current, 2 battery inputs',
      'Max. grid passthrough current of 45 A',
      'Supports 40–60 V lithium or lead-acid batteries',
      'Unbalanced three-phase output to increase solar self-consumption',
      'Supports smart load, generator and AC coupling',
      'Up to 9 units in parallel for on-grid and off-grid operation',
      'IP65 for indoor or outdoor installation',
      'MC4 PV connectors',
      'Multiple built-in protections; optional AFCI 2.0, RSD and battery breaker',
      'Seamless transition to backup mode, < 10 ms typical',
      '4.3" colour LCD touchscreen with 6 battery charge/discharge time periods',
    ],
    specs: [
      {
        title: 'PV Input',
        rows: [
          { label: 'Max. PV usable power', values: ['25,000 W', '25,000 W', '40,000 W', '40,000 W', '40,000 W', '40,000 W'] },
          { label: 'Max. PV input voltage', values: ['1,000 V'] },
          { label: 'Start-up voltage', values: ['120 V'] },
          { label: 'MPPT voltage range', values: ['160–980 V'] },
          { label: 'No. of MPP trackers', values: ['2', '2', '3', '3', '3', '3'] },
          { label: 'No. of strings per MPPT', values: ['1 / 1', '1 / 1', '1 / 1 / 1', '1 / 1 / 1', '1 / 1 / 1', '1 / 1 / 1'] },
          { label: 'Max. input current per MPPT', values: ['20 A'] },
          { label: 'Max. short-circuit current per MPPT', values: ['25 A'] },
        ],
      },
      {
        title: 'Battery',
        rows: [
          { label: 'Battery inputs', values: ['2'] },
          { label: 'Battery type', values: ['Lithium-ion / lead-acid'] },
          { label: 'Nominal battery voltage', values: ['48 V'] },
          { label: 'Battery voltage range', values: ['40–60 V'] },
          { label: 'Max. charge/discharge current*', values: ['380 A / 150 A', '380 A / 200 A', '380 A / 250 A', '380 A / 300 A', '380 A / 350 A', '380 A / 380 A'] },
          { label: 'Max. charge/discharge power', values: ['20,000 W / 7,200 W', '20,000 W / 9,600 W', '20,000 W / 12,000 W', '20,000 W / 14,500 W', '20,000 W / 18,000 W', '20,000 W / 20,000 W'] },
          { label: '* With one set of battery terminals', values: ['Max. charge/discharge current limited to 250 A'] },
        ],
      },
      {
        title: 'AC Output (On-grid)',
        rows: [
          { label: 'Nominal AC output power', values: ['6,000 W', '8,000 W', '10,000 W', '12,000 W', '15,000 W', '20,000 W'] },
          { label: 'Max. AC apparent power', values: ['6,600 VA', '8,800 VA', '11,000 VA', '13,200 VA', '16,500 VA', '22,000 VA'] },
          { label: 'Nominal AC current (per phase, 220/230/240 V)', values: ['9.1 / 8.7 / 8.3 A', '12.1 / 11.6 / 11.1 A', '15.2 / 14.5 / 13.9 A', '18.2 / 17.4 / 16.7 A', '22.7 / 21.7 / 20.8 A', '30.3 / 29.0 / 27.8 A'] },
          { label: 'Max. grid passthrough current', values: ['45 A'] },
          { label: 'Nominal grid voltage', values: [THREE_PHASE_GRID] },
          { label: 'Nominal grid frequency', values: ['50 / 60 Hz'] },
          { label: 'Power factor', values: [PF] },
          { label: 'THDi', values: ['< 3% (resistive load)'] },
        ],
      },
      {
        title: 'AC Output (Backup)',
        rows: [
          { label: 'Nominal AC output power', values: ['6,000 W', '8,000 W', '10,000 W', '12,000 W', '15,000 W', '20,000 W'] },
          { label: 'Max. AC apparent power', values: ['6,600 VA', '8,800 VA', '11,000 VA', '13,200 VA', '16,500 VA', '22,000 VA'] },
          { label: 'Nominal AC current (per phase, 220/230/240 V)', values: ['9.1 / 8.7 / 8.3 A', '12.1 / 11.6 / 11.1 A', '15.2 / 14.5 / 13.9 A', '18.2 / 17.4 / 16.7 A', '22.7 / 21.7 / 20.8 A', '30.3 / 29.0 / 27.8 A'] },
          { label: 'Peak apparent power', values: ['200% for 10 s'] },
          { label: 'Nominal voltage', values: [THREE_PHASE_GRID] },
          { label: 'Nominal frequency', values: ['50 / 60 Hz'] },
          { label: 'Transfer time', values: ['< 10 ms (typical)'] },
          { label: 'THDv', values: ['< 3% (100% resistive load)'] },
        ],
      },
      {
        title: 'Efficiency',
        rows: [{ label: 'Max. efficiency', values: ['97.6%'] }],
      },
      {
        title: 'General',
        rows: [
          ...ENVIRONMENT,
          { label: 'Ingress protection', values: ['IP65'] },
          { label: 'Cooling', values: ['Smart cooling'] },
          { label: 'Mounting', values: ['Wall bracket'] },
          { label: 'Dimensions (W × H × D)', values: ['460 × 742 × 266 mm'] },
          { label: 'Weight', values: ['46.5 kg'] },
          { label: 'Display', values: ['LED + LCD'] },
          { label: 'Communication', values: ['RS485/CAN (BMS), RS485 (meter), DRMs, CAN (parallel), 2× DO, 2× DI, USB (Wi-Fi/LAN, optional)'] },
          { label: 'Parallel operation', values: ['Up to 9 units (on-grid and off-grid)'] },
          ...CERTS,
        ],
      },
      {
        title: 'Protection',
        rows: [
          ...PROTECTIONS,
          { label: 'PV switch', values: ['Yes'] },
          { label: 'Surge protection', values: ['Type II AC/DC'] },
          { label: 'Optional', values: ['AFCI 2.0, RSD, battery breaker'] },
        ],
      },
      {
        title: 'Warranty',
        rows: [{ label: 'Standard warranty', values: ['5 years'] }],
      },
    ],
    datasheet: '/datasheets/axi-forza.pdf',
    toConfirm: [
      'Sixth variant column was labelled "H15LV-3P" twice; corrected to H20 LV-3P.',
      'Spec labels were shifted one row against values in the PDF; re-aligned. Unlabelled "1/1" row assumed to be strings per MPPT.',
      'Typos corrected: "on-gird/off-gird", "PV Switchl", merged label "2 Battery Input. Battery Type", missing "W" on discharge power, "XI FORZA" in PDF title/filename.',
      'Feature text "Max. PV input power of 30kW" vs table 25,000 W (H6/H8) / 40,000 W (H10–H20). Used the table values; 30 kW dropped from copy.',
      'PV usable power ratios look implausible (H6 = 25 kW, ~417%; H20 = 40 kW, 200%). Verify.',
      'Short-circuit current printed as "25A/25A" for all models, incl. 3-MPPT ones. Shown as "25 A" per MPPT.',
      'Footnote "limited to 250A with one set of terminals" has no asterisk in the table; attached to charge/discharge current.',
      'Single dimensions (460×742×266 mm) and weight (46.5 kg) for 6–20 kW. Confirm.',
      'Wi-Fi via optional USB dongle here vs built-in on VERO/NERO. "3 inverters in parallel for three-phase" not applicable?',
      'Display: table says "LED+LCD", features say colour LCD touchscreen.',
    ],
  },
];

/**
 * Family-level comparison for the /inverters index. Same source as above;
 * one value per family in VERO, NERO, FORZA order.
 */
export const inverterComparison: { label: string; values: [string, string, string] }[] = [
  { label: 'Rated AC power', values: ['3–6 kW', '8–12 kW', '6–20 kW'] },
  { label: 'Phase', values: ['Single-phase', 'Single-phase', 'Three-phase'] },
  { label: 'Max. PV usable power', values: ['6–12 kW', '16–24 kW', '25–40 kW'] },
  { label: 'Max. PV input voltage', values: ['500 V', '500 V', '1,000 V'] },
  { label: 'MPP trackers', values: ['2', '2 (H8) / 3', '2 (H6, H8) / 3'] },
  { label: 'Battery voltage', values: ['48 V (40–60 V)', '48 V (40–60 V)', '48 V (40–60 V)'] },
  { label: 'Max. charge current', values: ['75–140 A', '190–250 A', '380 A'] },
  { label: 'Ingress protection', values: ['IP66', 'IP66', 'IP65'] },
  { label: 'Parallel units', values: ['Up to 9 (3 for three-phase)', 'Up to 9 (3 for three-phase)', 'Up to 9'] },
  { label: 'Warranty', values: ['5 years', '5 years', '5 years'] },
];
