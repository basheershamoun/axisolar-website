import type { Product, SpecRow } from './types';

/**
 * AXI EVOO EV chargers, transcribed from the client datasheets
 * (public/datasheets/axi-evoo-*.pdf, extraction notes in
 * recon/axisolar/datasheets/evoo-chargers.md).
 *
 * Values not printed on a sheet are "—". Corrections and open questions live
 * in each record's `toConfirm` (never rendered).
 */

const row = (label: string, ...values: string[]): SpecRow => ({ label, values });
const NA = '—';

/* ---- Shared rows ------------------------------------------------------- */

const acProtection = row(
  'Protection',
  'Over/under-voltage, over-current, leakage, over-temperature, lightning',
);
const acEnvironment = [
  row('Operating temperature', '-25 °C to +50 °C'),
  row('Operating humidity', '5–95 % RH, non-condensing'),
];
const acStandards = row('Connector standards', 'GB/T, Type 2 or Type 1 / NACS (per order)');
const acCurrentStd = row('Input current (GB/T, Type 2)', '16 A / 32 A');
const acLeakage = row(
  'Leakage detection',
  'GB/T: Type A · Type 2: AC or A + 6 mA DC (optional) · Type 1 / NACS: A or CCID20 (optional)',
);

const dcConnectors = row('Connector options', 'CCS1, CCS2, CHAdeMO, GB/T, NACS');
const dcGbStandards = row('Standards (per datasheet)', 'GB/T 18487.1-2015; GB/T 27930-2015; GB/T 20234-2015');

/** Power-quality block printed identically on DC II, IV, V and VII. */
const dcPowerQuality = (efficiency: string): SpecRow[] => [
  row('Input', '380 V AC ±20 %, three-phase five-wire'),
  row('Frequency', '50/60 Hz'),
  row('Output voltage', '50–1000 V DC'),
  row('THDi', '≤5 % (380 V in, 1000 V out, 50–100 % load)'),
  row('Inrush current', '≤110 % of rated input current'),
  row('Power factor', '≥0.99 (50–100 % load); ≥0.95 (20–50 % load)'),
  row('Voltage regulation', '±0.5 % (-30 °C to +55 °C)'),
  row('Current regulation', '±1 % (-30 °C to +55 °C, 20–100 % load)'),
  row('Output ripple', 'Peak coefficient ±1 % (input at 85 / 100 / 115 %)'),
  row('Efficiency', efficiency),
  row('Standby power', '≤15 W'),
];

/* ---- Comparison data for the category page ----------------------------- */

export interface ChargerCompare {
  power: string;
  connectors: string;
  input: string;
  ip: string;
  ocpp: string;
  mounting: string;
}

/** One row per product in the category-page comparison tables. */
export const chargerCompare: Record<string, ChargerCompare> = {
  'evoo-ac-1': { power: '3.5–11 kW', connectors: 'GB/T, Type 2, Type 1 / NACS', input: '1- or 3-phase, 16/32 A', ip: 'IP65', ocpp: NA, mounting: 'Portable' },
  'evoo-ac-2': { power: '3.5–22 kW', connectors: 'GB/T, Type 2, Type 1 / NACS', input: '1- or 3-phase, 16/32 A', ip: 'IP65', ocpp: NA, mounting: 'Portable' },
  'evoo-ac-3': { power: '7–22 kW', connectors: 'GB/T, Type 2, Type 1 / NACS', input: '1- or 3-phase, 16/32 A', ip: 'IP65', ocpp: NA, mounting: 'Wall, tethered' },
  'evoo-ac-4': { power: '7–22 kW', connectors: 'Tethered: GB/T, Type 2, Type 1 / NACS · Socket: Type 2', input: '1- or 3-phase, 16/32 A', ip: 'IP55 tethered / IP54 socket', ocpp: NA, mounting: 'Wall or pedestal' },
  'evoo-dc-1': { power: '20–40 kW', connectors: 'CCS1, CCS2, CHAdeMO, GB/T, NACS', input: '400 V AC ±15 %', ip: 'IP54', ocpp: NA, mounting: 'Wall or pedestal' },
  'evoo-dc-2': { power: '20–40 kW', connectors: '1 gun: CCS1, CCS2, CHAdeMO, GB/T, NACS', input: '380 V AC 3-phase, 32–76 A', ip: 'IP54', ocpp: '1.6J / 2.0.1', mounting: 'Wall' },
  'evoo-dc-4': { power: '30–80 kW', connectors: '1 gun: CCS1, CCS2, CHAdeMO, GB/T, NACS', input: '380 V AC 3-phase, 58–152 A', ip: 'IP54', ocpp: '1.6J / 2.0.1', mounting: 'Floor-standing' },
  'evoo-dc-5': { power: '40–80 kW', connectors: '2 guns: CCS1, CCS2, CHAdeMO, GB/T, NACS', input: '380 V AC 3-phase, 76–152 A', ip: 'IP54', ocpp: '1.6J / 2.0.1', mounting: 'Floor-standing' },
  'evoo-dc-7': { power: '60–240 kW', connectors: 'Multi-gun: CCS1, CCS2, CHAdeMO, GB/T, NACS', input: '380 V AC 3-phase, 116–456 A', ip: 'IP54', ocpp: '1.6J / 2.0.1', mounting: 'Floor-standing' },
};

/* ---- Products ------------------------------------------------------------ */

export const chargers: Product[] = [
  {
    slug: 'evoo-ac-1',
    line: 'chargers',
    name: 'AXI EVOO AC I',
    family: 'AC Charger',
    tagline: 'Portable AC charger, 3.5–11 kW',
    summary:
      'Plug-in portable AC charger with colour display, scheduled charging and adjustable current. Available with GB/T, Type 2 or Type 1 / NACS vehicle connector.',
    status: 'current',
    image: '/images/products/chargers/evoo-ac-1.webp',
    imageAlt: 'AXI EVOO AC I portable charger: black control box with colour display, Type 2 connector and industrial supply plug',
    variants: ['3.5 kW', '7 kW', '11 kW'],
    highlights: [
      { label: 'Rated power', value: '3.5–11 kW' },
      { label: 'Ingress', value: 'IP65' },
      { label: 'Control box', value: '213 × 80 × 50 mm' },
    ],
    features: [
      'Portable: carry it with the vehicle, plug into a supply socket',
      'Colour status display with control button',
      'Scheduled charging and adjustable charging current',
      'Selectable grounded / ungrounded operation',
      'Bluetooth / Wi-Fi (optional) with OTA firmware updates',
      'Over/under-voltage, over-current, leakage, over-temperature and lightning protection',
    ],
    specs: [
      {
        title: 'Electrical',
        rows: [
          row('Model code', 'AXI-EVOO-A3.5K-P', 'AXI-EVOO-7K-P', 'AXI-EVOO-11K-P'),
          row('Rated power (GB/T, Type 2)', '3.5 kW', '7 kW', '11 kW'),
          row('Rated power (Type 1 / NACS)', '3.8 / 7.6 / 9.6 kW'),
          row('Input voltage (GB/T)', '220 V AC ±20 % / 380 V AC ±20 %'),
          row('Input voltage (Type 2)', '230 V AC ±20 % / 400 V AC ±20 %'),
          row('Input voltage (Type 1 / NACS)', '240 V AC ±20 %'),
          acCurrentStd,
          row('Input current (Type 1 / NACS)', '16 A / 32 A / 40 A'),
          acProtection,
        ],
      },
      { title: 'Charging Interface', rows: [acStandards, acLeakage] },
      {
        title: 'User Interface & Connectivity',
        rows: [
          row('Display', 'Colour display with control button'),
          row('Functions', 'Scheduled charging, current adjustment, grounding option'),
          row('Connectivity', 'Bluetooth / Wi-Fi (optional), OTA updates'),
        ],
      },
      {
        title: 'Mechanical',
        rows: [
          row('Form factor', 'Portable, in-cable control box'),
          row('Control box size', '213 × 80 × 50 mm'),
          row('Ingress protection', 'IP65'),
        ],
      },
      { title: 'Environment', rows: acEnvironment },
    ],
    datasheet: '/datasheets/axi-evoo-ac-1.pdf',
    toConfirm: [
      'IP65 appears only as an icon, not in the parameter table.',
      '3.5 kW code is "A3.5K" while others are "7K"/"11K": is the "A" intentional?',
      'Type 1 / NACS ratings (3.8/7.6/9.6 kW) shown as one row; per-variant mapping not stated.',
      'Sheet typo "Operating Tumidity" corrected to humidity.',
      'Renders show OEM "EvCharger" print on the bezel (retouched out of site image); 11 kW render uses a blue CEE plug.',
      'Weight, cable length, warranty and certifications not stated.',
    ],
  },
  {
    slug: 'evoo-ac-2',
    line: 'chargers',
    name: 'AXI EVOO AC II',
    family: 'AC Charger',
    tagline: 'Portable AC charger, 3.5–22 kW',
    summary:
      'Portable AC charger up to 22 kW with display, LED status bar, scheduled charging and adjustable current. GB/T, Type 2 or Type 1 / NACS connector.',
    status: 'current',
    image: '/images/products/chargers/evoo-ac-2.webp',
    imageAlt: 'AXI EVOO AC II portable charger: silver and black control box with display and green LED bar, Type 2 connector and red three-phase plug',
    variants: ['3.5 kW', '7 kW', '11 kW', '22 kW'],
    highlights: [
      { label: 'Rated power', value: '3.5–22 kW' },
      { label: 'Ingress', value: 'IP65' },
      { label: 'Control box', value: '206 × 80 × 56 mm' },
    ],
    features: [
      'Portable up to 22 kW on a three-phase supply',
      'Display and LED status indicator',
      'Scheduled charging and adjustable charging current',
      'Selectable grounded / ungrounded operation',
      'Bluetooth / Wi-Fi (optional) with OTA firmware updates',
      'Over/under-voltage, over-current, leakage, over-temperature and lightning protection',
    ],
    specs: [
      {
        title: 'Electrical',
        rows: [
          row('Model code', 'AXI-EVOO-A3.5K-P-II', 'AXI-EVOO-7K-P-II', 'AXI-EVOO-11K-P-II', 'AXI-EVOO-22K-P-II'),
          row('Rated power (GB/T, Type 2)', '3.5 kW', '7 kW', '11 kW', '22 kW'),
          row('Rated power (Type 1 / NACS)', '3.8 / 7.6 / 9.6 kW'),
          row('Input voltage (GB/T)', '220 V AC ±20 % / 380 V AC ±20 %'),
          row('Input voltage (Type 2)', '230 V AC ±20 % / 400 V AC ±20 %'),
          row('Input voltage (Type 1 / NACS)', '240 V AC ±20 %'),
          acCurrentStd,
          row('Input current (Type 1 / NACS)', '16 A / 32 A / 40 A'),
          acProtection,
        ],
      },
      { title: 'Charging Interface', rows: [acStandards, acLeakage] },
      {
        title: 'User Interface & Connectivity',
        rows: [
          row('Display', 'Display with LED status bar'),
          row('Functions', 'Indicator light, scheduled charging, current adjustment, grounding option'),
          row('Connectivity', 'Bluetooth / Wi-Fi (optional), OTA updates'),
        ],
      },
      {
        title: 'Mechanical',
        rows: [
          row('Form factor', 'Portable, in-cable control box'),
          row('Control box size', '206 × 80 × 56 mm'),
          row('Ingress protection', 'IP65'),
        ],
      },
      { title: 'Environment', rows: acEnvironment },
    ],
    datasheet: '/datasheets/axi-evoo-ac-2.pdf',
    toConfirm: [
      'IP65 appears only as an icon, not in the parameter table.',
      '22 kW has no Type 1 / NACS equivalent on the sheet.',
      'Weight, cable length, warranty and certifications not stated.',
    ],
  },
  {
    slug: 'evoo-ac-3',
    line: 'chargers',
    name: 'AXI EVOO AC III',
    family: 'AC Charger',
    tagline: 'Wall-mounted AC charger, 7–22 kW, tethered cable',
    summary:
      'Hard-wired AC wallbox with tethered cable, colour display, RFID card authorisation and a six-state status light.',
    status: 'current',
    image: '/images/products/chargers/evoo-ac-3.webp',
    imageAlt: 'AXI EVOO AC III wallbox: white rounded unit with colour display, RFID zone, red light strip and tethered Type 2 cable',
    variants: ['7 kW', '11 kW', '22 kW'],
    highlights: [
      { label: 'Rated power', value: '7–22 kW' },
      { label: 'Ingress', value: 'IP65' },
      { label: 'Access', value: 'RFID card' },
    ],
    features: [
      'Wall-mounted, hard-wired supply with tethered charging cable',
      'Colour display and status light (standby, waiting, plugged in, charging, complete, fault)',
      'RFID card authorisation',
      'Bluetooth / Wi-Fi (optional) with OTA firmware updates',
      'Selectable grounded / ungrounded operation',
      'Over/under-voltage, over-current, leakage, over-temperature and lightning protection',
    ],
    specs: [
      {
        title: 'Electrical',
        rows: [
          row('Model code', 'AXI-EVOO-7K-P-III', 'AXI-EVOO-11K-P-III', 'AXI-EVOO-22K-P-III'),
          row('Rated power (GB/T, Type 2)', '7 kW', '11 kW', '22 kW'),
          row('Rated power (Type 1 / NACS)', '7.6 / 11.5 kW'),
          row('Input voltage (GB/T, Type 2)', '220 V AC ±20 % / 380 V AC ±20 %'),
          row('Input voltage (Type 1 / NACS)', '240 V AC ±20 %'),
          acCurrentStd,
          row('Input current (Type 1 / NACS)', '32 A / 48 A'),
          acProtection,
        ],
      },
      {
        title: 'Charging Interface',
        rows: [
          acStandards,
          row('Cable', 'Tethered'),
          row('Leakage detection', 'GB/T, Type 2: Type A · Type 1 / NACS: A or CCID20 (optional)'),
        ],
      },
      {
        title: 'User Interface & Connectivity',
        rows: [
          row('Display', 'Colour display, status light strip'),
          row('Authorisation', 'RFID card'),
          row('Connectivity', 'Bluetooth / Wi-Fi (optional), OTA updates'),
        ],
      },
      {
        title: 'Mechanical',
        rows: [
          row('Mounting', 'Wall-mounted'),
          row('Dimensions', '400 × 163 × 95 mm'),
          row('Ingress protection', 'IP65'),
        ],
      },
      { title: 'Environment', rows: acEnvironment },
    ],
    datasheet: '/datasheets/axi-evoo-ac-3.pdf',
    toConfirm: [
      'Sheet headline says "AC Portable"; the unit is a wall-mounted wallbox. Site says wall-mounted.',
      'Model codes keep the "-P-" (portable) suffix as printed: confirm codes.',
      'Type 2 input printed as 220/380 V (AC I/II/IV say 230/400 V) and leakage "A" only (others "AC or A+DC6mA").',
      'IP65 appears only as an icon.',
      'Status names "Pragmatic" / "Insert A Gun" rewritten as standby / plugged in.',
      'Weight, cable length, warranty and certifications not stated.',
    ],
  },
  {
    slug: 'evoo-ac-4',
    line: 'chargers',
    name: 'AXI EVOO AC IV',
    family: 'AC Charger',
    tagline: 'Wall or pedestal AC charger, 7–22 kW, tethered or socket',
    summary:
      'AC charger for wall or optional pedestal mounting, in a tethered-cable version or a Type 2 socket version. Colour display, LED bar and RFID card authorisation.',
    status: 'current',
    image: '/images/products/chargers/evoo-ac-4.webp',
    imageAlt: 'AXI EVOO AC IV chargers: black glass wall unit with tethered Type 2 cable, and the same unit on a black pedestal',
    variants: ['7 kW tethered', '11 kW tethered', '22 kW tethered', '7 kW socket', '11 kW socket', '22 kW socket'],
    highlights: [
      { label: 'Rated power', value: '7–22 kW' },
      { label: 'Versions', value: 'Tethered / socket' },
      { label: 'Ingress', value: 'IP55 / IP54' },
      { label: 'Mounting', value: 'Wall or pedestal' },
    ],
    features: [
      'Tethered-cable version, or Type 2 socket version for the driver’s own cable',
      'Wall-mounted or on optional pedestal',
      'Colour display and LED status bar',
      'RFID card authorisation',
      'Bluetooth / Wi-Fi (optional) with OTA firmware updates',
      'Over/under-voltage, over-current, leakage, over-temperature and lightning protection',
    ],
    specs: [
      {
        title: 'Electrical',
        rows: [
          row('Model code', 'AXI-EVOO-7K-WM-4', 'AXI-EVOO-11K-WM-4', 'AXI-EVOO-22K-WM-4', 'AXI-EVOO-7K-WM-4-NP', 'AXI-EVOO-11K-WM-4-NP', 'AXI-EVOO-22K-WM-4-NP'),
          row('Rated power (GB/T, Type 2)', '7 kW', '11 kW', '22 kW', '7 kW', '11 kW', '22 kW'),
          row('Rated power (Type 1 / NACS)', '7.6 / 11.5 kW', '7.6 / 11.5 kW', '7.6 / 11.5 kW', NA, NA, NA),
          row('Input voltage (GB/T)', '220 V AC ±20 % / 380 V AC ±20 %', '220 V AC ±20 % / 380 V AC ±20 %', '220 V AC ±20 % / 380 V AC ±20 %', NA, NA, NA),
          row('Input voltage (Type 2)', '230 V AC ±20 % / 400 V AC ±20 %'),
          row('Input voltage (Type 1 / NACS)', '240 V AC ±20 %', '240 V AC ±20 %', '240 V AC ±20 %', NA, NA, NA),
          acCurrentStd,
          row('Input current (Type 1 / NACS)', '32 A / 48 A', '32 A / 48 A', '32 A / 48 A', NA, NA, NA),
          acProtection,
        ],
      },
      {
        title: 'Charging Interface',
        rows: [
          row('Connection', 'Tethered cable', 'Tethered cable', 'Tethered cable', 'Socket', 'Socket', 'Socket'),
          row('Connector standards', 'GB/T, Type 2 or Type 1 / NACS', 'GB/T, Type 2 or Type 1 / NACS', 'GB/T, Type 2 or Type 1 / NACS', 'Type 2', 'Type 2', 'Type 2'),
          acLeakage,
        ],
      },
      {
        title: 'User Interface & Connectivity',
        rows: [
          row('Display', 'Colour display, LED status bar'),
          row('Authorisation', 'RFID card'),
          row('Connectivity', 'Bluetooth / Wi-Fi (optional), OTA updates'),
        ],
      },
      {
        title: 'Mechanical',
        rows: [
          row('Mounting', 'Wall-mounted or optional pedestal'),
          row('Dimensions', '295 × 195 × 95.5 mm'),
          row('Ingress protection', 'IP55', 'IP55', 'IP55', 'IP54', 'IP54', 'IP54'),
        ],
      },
      { title: 'Environment', rows: acEnvironment },
    ],
    datasheet: '/datasheets/axi-evoo-ac-4.pdf',
    toConfirm: [
      'IP ratings differ between versions (tethered IP55, socket IP54), icon-only; confirm.',
      'Socket-version leakage type taken from the tethered Type 2 column (sheet says same values).',
      'Sheet carries a TÜV SÜD mark: not shown on site per brief; confirm certificate scope.',
      'Raster under the text overlay shows OEM codes (KP-A7T-IV etc.).',
      'Weight, cable length, warranty not stated.',
    ],
  },
  {
    slug: 'evoo-dc-1',
    line: 'chargers',
    name: 'AXI EVOO DC I',
    family: 'DC Fast Charger',
    tagline: 'Wall-mounted DC charger, 20–40 kW',
    summary:
      'Compact wall-mounted DC charger with 4.3-inch indicator display, Wi-Fi / Bluetooth and an optional pedestal.',
    status: 'current',
    image: '/images/products/chargers/evoo-dc-1.webp',
    imageAlt: 'AXI EVOO DC I: brushed-silver wall box with vertical LED display panel and DC cable coiled around the unit',
    variants: ['20 kW', '30 kW', '40 kW'],
    highlights: [
      { label: 'Output power', value: '20–40 kW' },
      { label: 'Output voltage', value: '200–1000 V DC' },
      { label: 'Ingress', value: 'IP54' },
    ],
    features: [
      'Wall-mounted, with optional pedestal',
      'Output 200–1000 V DC',
      'CCS1, CCS2, CHAdeMO, GB/T or NACS connector',
      '4.3-inch indicator display with idle / charging / fault states',
      'Wi-Fi 2.4 GHz / Bluetooth with OTA updates',
      'Over/under-voltage, over-current, overload and lightning protection',
    ],
    specs: [
      {
        title: 'Electrical',
        rows: [
          row('Model code', 'AXI-EVOO-DC20K-WM-I-P', 'AXI-EVOO-DC30K-WM-I-P', 'AXI-EVOO-DC40K-WM-I-P'),
          row('Output power', '20 kW', '30 kW', '40 kW'),
          row('Operating current (max)', '67 A', '100 A', '133 A'),
          row('Operating voltage', '400 V AC ±15 %'),
          row('Operating frequency', '45–65 Hz'),
          row('Output voltage range', '200–1000 V DC'),
          row('Over/under-voltage protection', '≤285 V or ≥475 V'),
          row('CP voltage protection', '≥ ±1 V'),
          row('Lightning protection', 'Yes'),
        ],
      },
      {
        title: 'Charging Interface',
        rows: [dcConnectors, row('Output cable', '5 m'), row('Design standard', 'IEC 62196-3')],
      },
      {
        title: 'User Interface & Connectivity',
        rows: [
          row('Display', '4.3-inch indicator display'),
          row('Communication', 'Wi-Fi 2.4 GHz / Bluetooth'),
        ],
      },
      {
        title: 'Mechanical',
        rows: [
          row('Mounting', 'Wall-mounted (pedestal optional)'),
          row('Body size', '600 × 400 × 180 mm', '600 × 400 × 215 mm', '600 × 400 × 215 mm'),
          row('Package size', '730 × 480 × 352 mm'),
          row('Cooling', 'Forced air'),
          row('Ingress protection', 'IP54'),
        ],
      },
      {
        title: 'Environment',
        rows: [
          row('Operating temperature', '-25 °C to +50 °C'),
          row('Storage temperature', '-40 °C to +80 °C'),
          row('Altitude', '<2000 m'),
        ],
      },
    ],
    datasheet: '/datasheets/axi-evoo-dc-1.pdf',
    toConfirm: [
      'p2 shows stray AC model code "AXI-EVOO-7K-P" above the title: ignored.',
      'Parameter table labels all three columns "DC20K-WM-I-P": corrected to DC20K/DC30K/DC40K.',
      'DC I vs DC II at 20 kW: DC I 67 A, 400 V ±15 %, 200–1000 V; DC II 63 A, 380 V ±20 %, 50–1000 V. Sheet values kept.',
      '"Operating current" not stated as input or output.',
      'OCPP, 4G, RFID (icon visible on render), weight, efficiency not stated.',
      'Five connector icons shown: confirm which are per-order options.',
      'Sheet shows a CE icon: not shown on site per brief.',
    ],
  },
  {
    slug: 'evoo-dc-2',
    line: 'chargers',
    name: 'AXI EVOO DC II',
    family: 'DC Fast Charger',
    tagline: 'Wall-mounted single-gun DC charger, 20–40 kW',
    summary:
      'Single-gun wall-mounted DC charger with 7-inch touch screen, 4G / Ethernet / Wi-Fi and OCPP backend integration. Optional card payment terminal.',
    status: 'current',
    image: '/images/products/chargers/evoo-dc-2.webp',
    imageAlt: 'AXI EVOO DC II: black wall box with screen, green status bar and a DC gun in a side holster',
    variants: ['20 kW', '30 kW', '40 kW'],
    highlights: [
      { label: 'Output power', value: '20–40 kW' },
      { label: 'Output voltage', value: '50–1000 V DC' },
      { label: 'Efficiency', value: '>96 %' },
      { label: 'Protocol', value: 'OCPP 1.6J / 2.0.1' },
    ],
    features: [
      'Single charging gun, 5 m cable (custom lengths available)',
      '7-inch colour touch screen',
      '4G / Ethernet / Wi-Fi communication',
      'OCPP 1.6J / 2.0.1',
      'Optional credit-card payment terminal',
      'CCS1, CCS2, CHAdeMO, GB/T or NACS connector',
    ],
    specs: [
      {
        title: 'Electrical',
        rows: [
          row('Model code', 'AXI-EVOO-DSG20K-II', 'AXI-EVOO-DSG30K-II', 'AXI-EVOO-DSG40K-II'),
          row('Output power', '20 kW', '30 kW', '40 kW'),
          row('Max output current', '63 A', '100 A', '133 A'),
          row('Max input current', '32 A', '58 A', '76 A'),
          ...dcPowerQuality('>96 % (full load)'),
          row('Supply cable, Cu (mm²)', '3×10 + 2×6', '3×16 + 2×10', '3×25 + 2×16'),
          row('Supply cable, Al (mm²)', '3×25 + 2×16', '3×25 + 2×16', '3×35 + 2×25'),
        ],
      },
      {
        title: 'Charging Interface',
        rows: [row('Guns', '1'), dcConnectors, row('Charging cable', '5 m (custom length available)'), dcGbStandards],
      },
      {
        title: 'User Interface & Connectivity',
        rows: [
          row('Display', '7-inch colour touch screen'),
          row('Communication', '4G / Ethernet / Wi-Fi'),
          row('Protocol', 'OCPP 1.6J / 2.0.1'),
          row('Payment', 'Credit-card terminal (optional)'),
        ],
      },
      {
        title: 'Mechanical',
        rows: [
          row('Mounting', 'Wall-mounted'),
          row('Package size', '970 × 970 × 420 mm'),
          row('Gross weight', NA, NA, '91.5 kg'),
          row('Cooling', 'Air-cooled'),
          row('Ingress protection', 'IP54'),
        ],
      },
      {
        title: 'Environment',
        rows: [row('Working temperature', '-30 °C to +70 °C'), row('Noise', '≤75 dB at 1 m')],
      },
    ],
    datasheet: '/datasheets/axi-evoo-dc-2.pdf',
    toConfirm: [
      'OCPP 1.6J / 2.0.1 in heading, body copy says 1.6J only: is 2.0.1 supported?',
      'Mounting not stated; "wall-mounted" taken from the render.',
      '7-inch touch screen claimed; render shows a small screen.',
      'Unit dimensions not stated (package only). Gross weight given for 40 kW only.',
      '"Power switching" row blank on sheet: omitted.',
      'Working temperature -30 to 70 °C, but regulation only rated to +55 °C.',
      'RFID zone visible on render, not stated in specs.',
    ],
  },
  {
    slug: 'evoo-dc-4',
    line: 'chargers',
    name: 'AXI EVOO DC IV',
    family: 'DC Fast Charger',
    tagline: 'Floor-standing DC station, 30–80 kW, single gun, 55-inch display',
    summary:
      'Single-gun floor-standing DC station with a 55-inch portrait advertising display, modular power units, 4G / Ethernet / Wi-Fi and OCPP.',
    status: 'current',
    image: '/images/products/chargers/evoo-dc-4.webp',
    imageAlt: 'AXI EVOO DC IV: black floor-standing totem with a 55-inch portrait display and one DC gun on the side',
    variants: ['30 kW', '40 kW', '60 kW', '80 kW'],
    highlights: [
      { label: 'Output power', value: '30–80 kW' },
      { label: 'Display', value: '55-inch' },
      { label: 'Efficiency', value: '≥96 %' },
      { label: 'Protocol', value: 'OCPP 1.6J / 2.0.1' },
    ],
    features: [
      '55-inch portrait advertising display',
      'Modular power units, replaceable individually',
      'Single charging gun, 5 m cable (custom lengths available)',
      '4G / Ethernet / Wi-Fi, OCPP 1.6J / 2.0.1',
      'Optional credit-card payment terminal',
      'CCS1, CCS2, CHAdeMO, GB/T or NACS connector',
    ],
    specs: [
      {
        title: 'Electrical',
        rows: [
          row('Model code', 'SNOD30SC', 'SNOD40SC', 'SNOD60SC', 'SNOD80SC'),
          row('Output power', '30 kW', '40 kW', '60 kW', '80 kW'),
          row('Max output current', '100 A', '133 A', '200 A', '250 A'),
          row('Max input current', '58 A', '76 A', '116 A', '152 A'),
          ...dcPowerQuality('≥96 % (full load)'),
          row('Supply cable, Cu (mm²)', '3×16 + 2×10', '3×25 + 2×16', '3×35 + 2×25', '3×50 + 2×35'),
          row('Supply cable, Al (mm²)', '3×25 + 2×16', '3×35 + 2×25', '3×70 + 2×50', '3×95 + 2×70'),
        ],
      },
      {
        title: 'Charging Interface',
        rows: [row('Guns', '1'), dcConnectors, row('Charging cable', '5 m (custom length available)'), dcGbStandards],
      },
      {
        title: 'User Interface & Connectivity',
        rows: [
          row('Display', '55-inch advertising screen'),
          row('Communication', '4G / Ethernet / Wi-Fi'),
          row('Protocol', 'OCPP 1.6J / 2.0.1'),
          row('Payment', 'Credit-card terminal (optional)'),
        ],
      },
      {
        title: 'Mechanical',
        rows: [
          row('Mounting', 'Floor-standing'),
          row('Package size', '1360 × 610 × 2410 mm'),
          row('Gross weight', NA, '327 kg', '351 kg', NA),
          row('Power modules', 'Modular, individually replaceable'),
          row('Cooling', 'Air-cooled'),
          row('Ingress protection', 'IP54'),
        ],
      },
      {
        title: 'Environment',
        rows: [row('Working temperature', '-30 °C to +80 °C'), row('Noise', '≤75 dB at 1 m')],
      },
    ],
    datasheet: '/datasheets/axi-evoo-dc-4.pdf',
    toConfirm: [
      'Model codes SNOD..SC printed without AXI-EVOO prefix (hero shows AXI-EVOO-SNOD80SC): supplier-looking, confirm AXI codes.',
      'Working temperature -30 to 80 °C here vs -30 to 70 °C on DC II/VII.',
      'Gross weight given for 40 and 60 kW only.',
      'Render ad screen showed placeholder fast-food art: blanked on site image; need AXI creative or clean render.',
      '"Double your revenue" claim and "ultra-quiet" wording not used.',
      'Unit dimensions not stated (package only).',
    ],
  },
  {
    slug: 'evoo-dc-5',
    line: 'chargers',
    name: 'AXI EVOO DC V',
    family: 'DC Fast Charger',
    tagline: 'Floor-standing DC station, 40–80 kW, dual gun, 55-inch display',
    summary:
      'Dual-gun floor-standing DC station with a 55-inch portrait advertising display, modular power units, 4G / Ethernet / Wi-Fi and OCPP.',
    status: 'current',
    image: '/images/products/chargers/evoo-dc-5.webp',
    imageAlt: 'AXI EVOO DC V: black floor-standing totem with a 55-inch portrait display and a DC gun on each side',
    variants: ['40 kW', '60 kW', '80 kW'],
    highlights: [
      { label: 'Output power', value: '40–80 kW' },
      { label: 'Guns', value: '2' },
      { label: 'Display', value: '55-inch' },
      { label: 'Protocol', value: 'OCPP 1.6J / 2.0.1' },
    ],
    features: [
      'Two charging guns, 5 m cables (custom lengths available)',
      '55-inch portrait advertising display',
      'Modular power units, replaceable individually',
      '4G / Ethernet / Wi-Fi, OCPP 1.6J / 2.0.1',
      'Optional credit-card payment terminal',
      'CCS1, CCS2, CHAdeMO, GB/T or NACS connectors',
    ],
    specs: [
      {
        title: 'Electrical',
        rows: [
          row('Model code', 'AXI-EVOO-KDOD40SC', 'AXI-EVOO-KDOD60SC', 'AXI-EVOO-KDOD80SC'),
          row('Output power', '40 kW', '60 kW', '80 kW'),
          row('Max output current', '133 A', '200 A', '250 A'),
          row('Max input current', '76 A', '116 A', '152 A'),
          ...dcPowerQuality('≥96 % (full load)'),
          row('Supply cable, Cu (mm²)', '3×25 + 2×16', '3×35 + 2×25', '3×50 + 2×35'),
          row('Supply cable, Al (mm²)', '3×35 + 2×25', '3×70 + 2×50', '3×95 + 2×70'),
        ],
      },
      {
        title: 'Charging Interface',
        rows: [row('Guns', '2'), dcConnectors, row('Charging cable', '5 m (custom length available)'), dcGbStandards],
      },
      {
        title: 'User Interface & Connectivity',
        rows: [
          row('Display', '55-inch advertising screen, side status panel'),
          row('Communication', '4G / Ethernet / Wi-Fi'),
          row('Protocol', 'OCPP 1.6J / 2.0.1'),
          row('Payment', 'Credit-card terminal (optional)'),
        ],
      },
      {
        title: 'Mechanical',
        rows: [
          row('Mounting', 'Floor-standing'),
          row('Package size', '1600 × 1000 × 2400 mm'),
          row('Gross weight', NA, NA, '351 kg'),
          row('Power modules', 'Modular, individually replaceable'),
          row('Cooling', 'Air-cooled'),
          row('Ingress protection', 'IP54'),
        ],
      },
      {
        title: 'Environment',
        rows: [row('Working temperature', '-30 °C to +80 °C'), row('Noise', '≤75 dB at 1 m')],
      },
    ],
    datasheet: '/datasheets/axi-evoo-dc-5.pdf',
    toConfirm: [
      'Headline reads "60KW 60KW 80KW": corrected to 40/60/80 kW per the table.',
      'KDOD..SC codes look like supplier part numbers: confirm.',
      'Power sharing between the two guns not stated.',
      'Working temperature -30 to 80 °C here vs -30 to 70 °C on DC II/VII.',
      'Gross weight given for 80 kW only.',
      'Render ad screen showed placeholder watch art: blanked on site image; need AXI creative or clean render.',
    ],
  },
  {
    slug: 'evoo-dc-7',
    line: 'chargers',
    name: 'AXI EVOO DC VII',
    family: 'DC Fast Charger',
    tagline: 'Floor-standing multi-gun DC station, 60–240 kW',
    summary:
      'High-power floor-standing DC station with equal power sharing between guns, 7-inch touch screen, modular power units and OCPP 1.6J / 2.0.1.',
    status: 'current',
    image: '/images/products/chargers/evoo-dc-7.webp',
    imageAlt: 'AXI EVOO DC VII: tall black cabinet with canopy top, central screen panel and DC guns on both sides',
    variants: ['60 kW', '80 kW', '120 kW', '160 kW', '180 kW', '240 kW'],
    highlights: [
      { label: 'Output power', value: '60–240 kW' },
      { label: 'Max per gun', value: '300 A' },
      { label: 'Efficiency', value: '≥96 %' },
      { label: 'Protocol', value: 'OCPP 1.6J / 2.0.1' },
    ],
    features: [
      'Equal power sharing between guns',
      'Modular power units, replaceable individually',
      '7-inch colour touch screen',
      '4G / Ethernet / Wi-Fi (optional), OCPP 1.6J / 2.0.1',
      'Optional power-assisted cable arm with auto-retract',
      'Optional credit-card payment terminal',
    ],
    specs: [
      {
        title: 'Electrical',
        rows: [
          row('Model code', 'KDOD60V', 'KDOD60F', 'KDOD120', 'KDOD160', 'KDOD180', 'KDOD240'),
          row('Rated output power', '60 kW', '80 kW', '120 kW', '160 kW', '180 kW', '240 kW'),
          row('Max output current per gun', '200 A', '250 A', '250 A', '250 A / 300 A', NA, '300 A'),
          row('Max input current', '116 A', '152 A', '228 A', '304 A', '384 A', '456 A'),
          ...dcPowerQuality('≥96 % (full load)'),
          row('Supply cable, Cu (mm²)', '3×35 + 2×25', '3×50 + 2×35', '3×95 + 2×70', '3×120 + 2×95', '3×150 + 2×120', '3×240 + 2×150'),
          row('Supply cable, Al (mm²)', '3×70 + 2×50', '3×95 + 2×70', '3×120 + 2×95', '3×150 + 2×120', '3×185 + 2×150', '3×300 + 2×240'),
        ],
      },
      {
        title: 'Charging Interface',
        rows: [
          row('Power allocation', 'Equal power sharing'),
          dcConnectors,
          row('Charging cable', '5 m (custom length available)'),
          row('Cable management', 'Power-assisted arm (optional)'),
        ],
      },
      {
        title: 'User Interface & Connectivity',
        rows: [
          row('Display', '7-inch touch screen'),
          row('Communication', '4G / Ethernet / Wi-Fi (optional)'),
          row('Protocol', 'OCPP 1.6J / 2.0.1'),
          row('Payment', 'Credit-card terminal (optional)'),
        ],
      },
      {
        title: 'Mechanical',
        rows: [
          row('Mounting', 'Floor-standing'),
          row('Dimensions (W × D × H)', '700 × 818 × 2008 mm'),
          row('Package size', '1090 × 990 × 2180 mm'),
          row('Gross weight', NA, NA, '345 kg', NA, NA, NA),
          row('Power modules', 'Modular, individually replaceable'),
          row('Cooling', 'Forced air'),
          row('Ingress protection', 'IP54'),
        ],
      },
      {
        title: 'Environment',
        rows: [row('Working temperature', '-30 °C to +70 °C'), row('Noise', '≤75 dB')],
      },
    ],
    datasheet: '/datasheets/axi-evoo-dc-7.pdf',
    toConfirm: [
      'Model codes KDOD.. printed without AXI-EVOO prefix (hero shows AXI-EVOO-KDOD240): supplier-looking, confirm.',
      '"KDOD 60V" normalised to KDOD60V. KDOD60F is rated 80 kW: name/rating mismatch.',
      'KDOD180 max current per gun is blank; KDOD160 lists "250 A / 300 A".',
      'Number of guns not stated (render shows guns both sides).',
      'Gross weight given for 120 kW only.',
      'Connectors not in the table; five connector icons shown.',
    ],
  },
];
