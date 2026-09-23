/**
 * Services — the single source of truth for the services archive
 * (`/services`) and every service detail page (`/services/<slug>`).
 *
 * Slugs are kept in lock-step with the Services dropdown in `site.ts`.
 * Array order is the order the cards appear in the grid; the detail-page
 * sidebar sorts alphabetically, exactly like the original theme.
 */

export interface Highlight {
  /** Key into `icons` below. */
  icon: string;
  title: string;
  text: string;
}

export interface BodySection {
  /** Omitted on the opening section, which runs straight under the image. */
  heading?: string;
  paragraphs: string[];
  /** Optional supporting image, below the copy. */
  image?: string;
  imageAlt?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  /** One-line summary used on the grid card and as the page meta description. */
  excerpt: string;
  /** Key into `icons` below — drawn in the lime badge on the card. */
  icon: string;
  /** Card + detail hero image, from `public/images/`. */
  image: string;
  imageAlt: string;
  /** Long-form copy, in order. */
  body: BodySection[];
  /** The six-up feature grid on the detail page. */
  highlights: Highlight[];
  /** Planning & strategy block: image, copy and the bulleted benefits list. */
  planning: {
    title: string;
    text: string;
    image: string;
    imageAlt: string;
    /** Bullet list of benefits. */
    benefits: string[];
  };
  faqs: FaqItem[];
}

/* -------------------------------------------------------------------------
   Icon set — inner markup for a 24×24, `currentColor`-stroked <svg>.
   Kept here so the grid and the detail page draw from one library and no
   component has to invent its own artwork.
   ------------------------------------------------------------------------- */
export const icons: Record<string, string> = {
  panel:
    '<path d="M2.5 4h19l1.5 10H1z"/><path d="M12 4v10M1.6 9h20.8M6.6 4 5 14M17.4 4 19 14"/><path d="M12 14v6M8.5 20h7"/>',
  wrench:
    '<path d="M14.8 3.6a4.6 4.6 0 0 0-5.4 6.6L3 16.6 7.4 21l6.4-6.4a4.6 4.6 0 0 0 6.6-5.4l-3 3-3.6-1-1-3.6z"/>',
  bulb: '<path d="M12 2.5a6.5 6.5 0 0 0-3.8 11.8v2.2h7.6v-2.2A6.5 6.5 0 0 0 12 2.5Z"/><path d="M9.4 19.5h5.2M10.3 22h3.4"/>',
  plug: '<path d="M8.5 2v5.5M15.5 2v5.5"/><path d="M5.5 7.5h13v3.6a6.5 6.5 0 0 1-13 0z"/><path d="M12 17.6V22"/>',
  turbine:
    '<path d="M12 13v8M9 21h6"/><path d="M12 11V3M13.4 12.7l7 3.5M10.6 12.7l-7 3.5"/><circle cx="12" cy="12" r="1.4"/>',
  leaf: '<path d="M20.5 3.5C10 3.5 4.5 8 4.5 15.5V20H9c7.5 0 11.5-5 11.5-16.5Z"/><path d="M4 21 13.5 11"/>',
  house:
    '<path d="M3 11 12 3l9 8"/><path d="M5.5 9.5V21h13V9.5"/><path d="M9.5 21v-6h5v6"/>',
  coins:
    '<ellipse cx="12" cy="5.5" rx="7" ry="2.8"/><path d="M5 5.5v6c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-6"/><path d="M5 11.5v6c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-6"/>',
  tools:
    '<path d="m3 21 3.4-1L16 10.4 13.6 8 4 17.6z"/><path d="m15.4 8.6 3-3-1.4-1.4 2.2-2.2 2.8 2.8-2.2 2.2-1.4-1.4-3 3"/>',
  headset:
    '<path d="M4 13v-1.2a8 8 0 0 1 16 0V13"/><path d="M4 12.5h2.4a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1H5.6A1.6 1.6 0 0 1 4 17.4Z"/><path d="M20 12.5h-2.4a1 1 0 0 0-1 1V18a1 1 0 0 0 1 1h.8a1.6 1.6 0 0 0 1.6-1.6Z"/><path d="M20 18.4v.6a3 3 0 0 1-3 3h-2.6"/>',
  sun: '<circle cx="12" cy="12" r="4.5"/><path d="M12 1.6v3M12 19.4v3M1.6 12h3M19.4 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M19.4 4.6l-2.1 2.1M6.7 17.3l-2.1 2.1"/>',
  shield:
    '<path d="M12 2.5 4.5 5.5v6c0 4.7 3.2 8.4 7.5 10 4.3-1.6 7.5-5.3 7.5-10v-6z"/><path d="m8.8 12 2.3 2.3 4.1-4.6"/>',
  battery:
    '<rect x="2.5" y="7" width="16" height="10" rx="2.5"/><path d="M21.5 11v2"/><path d="M6.5 10.5v3M10.5 10.5v3M14.5 10.5v3"/>',
  gauge:
    '<path d="M4 18a9 9 0 1 1 16 0"/><path d="m12 15 4-4.5"/><circle cx="12" cy="16.5" r="1.4"/>',
};

/* ------------------------------------------------------------------------- */

const sharedFaqTail: FaqItem[] = [
  {
    question: 'How long does a typical installation take?',
    answer:
      'Most residential projects are surveyed, permitted and commissioned inside four weeks, with only one or two days of work on site. Commercial rollouts are phased so your operation never stops.',
  },
  {
    question: 'What happens after the system is switched on?',
    answer:
      'Every install ships with monitoring, a written performance baseline and a maintenance schedule. Our engineers watch the same dashboard you do and reach out the moment output drifts.',
  },
];

export const services: Service[] = [
  {
    slug: 'solar-maintenance',
    title: 'Solar Maintenance',
    excerpt:
      'Scheduled cleaning, inspection and repair that keeps every panel earning its place on the roof.',
    icon: 'wrench',
    image: '/images/service-1.jpg',
    imageAlt: 'Technician washing a rooftop solar array',
    body: [
      {
        paragraphs: [
          'A solar array is a twenty-five year asset, and it only pays back if it is looked after. Dust, pollen, shading and a single failing optimiser can quietly strip a fifth of the yield out of a healthy system long before anyone notices on a bill.',
          'Our maintenance programme puts a qualified engineer on your roof on a fixed schedule. Panels are washed with deionised water, every clamp and connector is torque-checked, and the inverter logs are pulled and compared against the baseline we recorded on commissioning day.',
        ],
      },
      {
        heading: 'Why us!',
        paragraphs: [
          'We monitor remotely between visits, so most faults are diagnosed before you have noticed them. You get a photographed report after every service and a direct line to the engineer who knows your site.',
        ],
        image: '/images/video-bg.jpg',
        imageAlt: 'Maintenance crew inspecting panels at dusk',
      },
    ],
    highlights: [
      { icon: 'gauge', title: 'Performance Audit', text: 'String-level output measured against the day-one baseline.' },
      { icon: 'sun', title: 'Panel Cleaning', text: 'Deionised water and soft brushes — never a harsh detergent.' },
      { icon: 'shield', title: 'Safety Checks', text: 'Mounts, earthing and isolators tested to current standards.' },
      { icon: 'battery', title: 'Inverter Service', text: 'Firmware, fans and filters kept inside manufacturer spec.' },
      { icon: 'headset', title: 'Priority Support', text: 'Contract holders jump the queue on every callout.' },
      { icon: 'tools', title: 'Fast Repairs', text: 'Common spares carried on the van, so most faults close same day.' },
    ],
    planning: {
      title: 'Planning & Strategy',
      text: 'We build the service plan around your site — its pitch, its dust load and the way you actually use the power it makes.',
      image: '/images/planning.jpg',
      imageAlt: 'Engineer cleaning a photovoltaic panel',
      benefits: [
        'Fixed-price visits with no surprise callout fees',
        'Remote monitoring included between services',
        'Photographed condition report after every visit',
        'Warranty paperwork kept valid and up to date',
      ],
    },
    faqs: [
      {
        question: 'How often should panels be serviced?',
        answer:
          'Twice a year suits most rooftops. Sites near farmland, coastline or heavy traffic collect soiling faster and are usually better on a quarterly plan.',
      },
      {
        question: 'Will cleaning void my panel warranty?',
        answer:
          'No. We clean to the manufacturer method statement, log the work and file it with your warranty record, which is exactly what an insurer asks for after a claim.',
      },
      ...sharedFaqTail,
    ],
  },

  {
    slug: 'energy-saving-devices',
    title: 'Energy Saving Devices',
    excerpt:
      'Smart controls, storage and monitoring that cut the demand before you spend a watt generating it.',
    icon: 'plug',
    image: '/images/service-2.jpg',
    imageAlt: 'Solar panels angled towards a bright sky',
    body: [
      {
        paragraphs: [
          'The cheapest kilowatt-hour is the one you never use. Before we size a single panel we look at where your energy actually goes, then fit the controls, sensors and storage that stop it leaking away.',
          'That might be a diverter sending surplus generation into hot water, a smart load controller that shifts heavy machinery into daylight hours, or metering granular enough to show which circuit is quietly costing you a fortune overnight.',
        ],
      },
      {
        heading: 'Why us!',
        paragraphs: [
          'We are product-agnostic. Devices are chosen on measured payback, not on what a distributor wants to shift this quarter, and everything we fit reports into one dashboard rather than six apps.',
        ],
        image: '/images/video-bg.jpg',
        imageAlt: 'Installers configuring equipment on a rooftop',
      },
    ],
    highlights: [
      { icon: 'gauge', title: 'Circuit Metering', text: 'See consumption per circuit, not one number for the building.' },
      { icon: 'battery', title: 'Battery Storage', text: 'Store the midday surplus and spend it through the evening peak.' },
      { icon: 'plug', title: 'Smart Diverters', text: 'Push excess generation into hot water instead of the grid.' },
      { icon: 'bulb', title: 'LED Retrofit', text: 'Lighting upgrades that typically repay inside two years.' },
      { icon: 'coins', title: 'Tariff Tuning', text: 'Automated load shifting into your cheapest rate window.' },
      { icon: 'headset', title: 'Ongoing Review', text: 'Quarterly readouts showing what each device has saved.' },
    ],
    planning: {
      title: 'Planning & Strategy',
      text: 'Every recommendation starts with a week of real metering, so the savings we quote are measured on your site rather than modelled from a brochure.',
      image: '/images/planning.jpg',
      imageAlt: 'Close-up of an energy monitoring installation',
      benefits: [
        'A measured baseline before anything is bought',
        'Payback modelled per device, ranked cheapest first',
        'One dashboard for generation, storage and demand',
        'Grant and incentive paperwork handled for you',
      ],
    },
    faqs: [
      {
        question: 'Do I need solar panels to benefit?',
        answer:
          'Not at all. Metering, controls and lighting upgrades cut consumption on their own, and they make a future array smaller and cheaper when you are ready for one.',
      },
      {
        question: 'Can this work with my existing inverter?',
        answer:
          'In most cases yes. We check the protocol your inverter speaks before quoting, and we will tell you plainly when a bridge or a replacement is the honest answer.',
      },
      ...sharedFaqTail,
    ],
  },

  {
    slug: 'solar-solutions',
    title: 'Solar Solutions',
    excerpt:
      'End-to-end design, supply and installation for homes, businesses and public estates.',
    icon: 'bulb',
    image: '/images/service-3.jpg',
    imageAlt: 'Engineer in a hard hat beside a solar array',
    body: [
      {
        paragraphs: [
          'One team from first survey to final commissioning. We design the array, handle the grid application, supply the hardware, install it and hand over a system that is already talking to its monitoring platform.',
          'Because design and installation sit under the same roof, nothing is lost in the handover. The engineer who modelled your shading is the one who signs off the string layout on the roof.',
        ],
      },
      {
        heading: 'Why us!',
        paragraphs: [
          'We quote on modelled yield, not on peak capacity, and we publish the assumptions behind it. If the array underperforms against that model in its first year, we come back and fix it.',
        ],
        image: '/images/video-bg.jpg',
        imageAlt: 'Installation crew working on a commercial roof',
      },
    ],
    highlights: [
      { icon: 'sun', title: 'Site Survey', text: 'Drone survey and shading model before a price is quoted.' },
      { icon: 'panel', title: 'System Design', text: 'String layouts optimised for your roof, not a template.' },
      { icon: 'tools', title: 'Full Installation', text: 'Directly employed, accredited crews — never subcontracted.' },
      { icon: 'shield', title: 'Certification', text: 'Grid applications, sign-off and compliance paperwork included.' },
      { icon: 'gauge', title: 'Commissioning', text: 'Measured baseline recorded on day one for later comparison.' },
      { icon: 'headset', title: 'Aftercare', text: 'A named contact for the lifetime of the installation.' },
    ],
    planning: {
      title: 'Planning & Strategy',
      text: 'A good solar project is decided on paper. We model the roof, the load profile and the tariff together before anyone climbs a ladder.',
      image: '/images/planning.jpg',
      imageAlt: 'Panel array under a low golden sun',
      benefits: [
        'Yield modelling with the assumptions written down',
        'Single point of contact from survey to sign-off',
        'Directly employed installation crews',
        'Handover pack with drawings, certificates and warranties',
      ],
    },
    faqs: [
      {
        question: 'How much roof do I actually need?',
        answer:
          'Roughly five square metres per kilowatt of capacity. The survey tells us how much of your roof is genuinely usable once shading, access ways and structure are accounted for.',
      },
      {
        question: 'Will you handle the grid connection?',
        answer:
          'Yes. The application, the network correspondence and the final commissioning certificate are all part of the fixed price.',
      },
      ...sharedFaqTail,
    ],
  },

  {
    slug: 'solar-pv-systems',
    title: 'Solar PV Systems',
    excerpt:
      'High-efficiency photovoltaic arrays engineered for your roof, your load and your tariff.',
    icon: 'panel',
    image: '/images/service-4.jpg',
    imageAlt: 'Photovoltaic array catching the low morning sun',
    body: [
      {
        paragraphs: [
          'A photovoltaic system turns daylight — not heat — directly into electricity, with no moving parts and almost nothing to wear out. The modules we fit are still guaranteed to make better than eighty-five percent of their rated output after twenty-five years.',
          'Sizing is where the money is won or lost. Too small and you keep buying expensive grid power at four in the afternoon; too large and you export cheaply to somebody else. We model half-hourly consumption against half-hourly generation and size the array to the overlap.',
        ],
      },
      {
        heading: 'Why us!',
        paragraphs: [
          'Panel-level electronics mean one shaded module no longer drags down its whole string, and every module reports separately — so a fault is a named panel on a plan, not a hunt across the roof.',
        ],
        image: '/images/video-bg.jpg',
        imageAlt: 'Engineers fitting photovoltaic modules',
      },
    ],
    highlights: [
      { icon: 'leaf', title: 'Renewable Energy', text: 'Clean generation from first daylight, with zero emissions on site.' },
      { icon: 'coins', title: 'Energy Saving', text: 'Cuts the expensive daytime half of a typical electricity bill.' },
      { icon: 'tools', title: 'Easy Installation', text: 'Most homes are surveyed, fitted and switched on in two days.' },
      { icon: 'bulb', title: 'Energy Solution', text: 'Panels, storage and controls specified as one working system.' },
      { icon: 'headset', title: 'Technical Support', text: 'Monitored remotely, with engineers on call all year round.' },
      { icon: 'wrench', title: 'Solar Maintenance', text: 'Optional service plans keep output close to day-one figures.' },
    ],
    planning: {
      title: 'Planning & Strategy',
      text: 'We plan the array around how you use power through the day, then prove the numbers before you commit to anything.',
      image: '/images/planning.jpg',
      imageAlt: 'Technician servicing a photovoltaic panel',
      benefits: [
        'Research beyond the standard yield calculator',
        'Half-hourly generation modelled against real demand',
        'Panel-level monitoring on every module',
        'Twenty-five year performance warranty on the modules',
      ],
    },
    faqs: [
      {
        question: 'Understanding solar PV: where does the power actually go?',
        answer:
          'Generation feeds your own loads first, then storage if you have it, and only the remainder is exported. That is why matching array size to your daytime demand matters more than raw capacity.',
      },
      {
        question: 'Do photovoltaic panels work on a cloudy day?',
        answer:
          'Yes — they run on daylight rather than heat. Output drops on heavy overcast, but a well-sited array still generates usefully across an average temperate year.',
      },
      ...sharedFaqTail,
    ],
  },

  {
    slug: 'hybrid-energy',
    title: 'Hybrid Energy',
    excerpt:
      'Solar, wind and storage combined into one system that keeps producing when a single source cannot.',
    icon: 'turbine',
    image: '/images/service-5.jpg',
    imageAlt: 'Wind turbines and solar panels at sunset',
    body: [
      {
        paragraphs: [
          'Sun and wind fail at different times. Pair them behind a single hybrid inverter, add storage, and the gaps in one resource are covered by the other — which is how a site reaches genuine year-round self-sufficiency instead of a good summer.',
          'We design the mix from local resource data: a year of irradiance and wind speed for your exact location, run against your own consumption profile, so the split between generation, storage and grid is an engineering decision rather than a guess.',
        ],
      },
      {
        heading: 'Why us!',
        paragraphs: [
          'Hybrid systems live or die on their control strategy. Ours is tuned per site and reviewed after the first season, when we finally have real data instead of a forecast.',
        ],
        image: '/images/video-bg.jpg',
        imageAlt: 'Hybrid generation site at golden hour',
      },
    ],
    highlights: [
      { icon: 'turbine', title: 'Wind Capture', text: 'Small-scale turbines matched to your measured wind resource.' },
      { icon: 'panel', title: 'Solar Array', text: 'Photovoltaic generation sized around the wind contribution.' },
      { icon: 'battery', title: 'Smart Storage', text: 'Batteries that buffer both sources and ride through outages.' },
      { icon: 'gauge', title: 'Load Balancing', text: 'Control logic that always draws from the cheapest source.' },
      { icon: 'shield', title: 'Grid Resilience', text: 'Automatic islanding keeps critical circuits alive in a cut.' },
      { icon: 'headset', title: 'Season Review', text: 'The strategy is retuned once a full year of data exists.' },
    ],
    planning: {
      title: 'Planning & Strategy',
      text: 'Hybrid design is a balancing act between two intermittent resources, one battery and a tariff. We model all four together.',
      image: '/images/planning.jpg',
      imageAlt: 'Renewable generation equipment on site',
      benefits: [
        'A full year of local wind and irradiance data',
        'Storage sized against a real outage scenario',
        'Automatic switching between sources and grid',
        'Control strategy retuned after the first season',
      ],
    },
    faqs: [
      {
        question: 'Is a hybrid system worth it on a small site?',
        answer:
          'Sometimes. Wind needs genuinely exposed ground to earn its keep; where the resource is weak we will say so and quote solar with storage instead.',
      },
      {
        question: 'Will it keep the lights on during a power cut?',
        answer:
          'With storage and an islanding-capable inverter, yes. We agree which circuits are critical up front and wire them to a protected supply.',
      },
      ...sharedFaqTail,
    ],
  },

  {
    slug: 'renewable-energy',
    title: 'Renewable Energy',
    excerpt:
      'A whole-property transition plan that takes your building from grid-dependent to self-generating.',
    icon: 'leaf',
    image: '/images/service-6.jpg',
    imageAlt: 'Modern house roofed with solar panels at dusk',
    body: [
      {
        paragraphs: [
          'Going renewable is rarely one purchase. It is a sequence — reduce demand, generate, store, then electrify heat and transport — and doing it in the right order is what makes the numbers work.',
          'We write that sequence as a dated plan with a cost and a saving against each step, so you can take it in stages, at your own pace, without any step stranding the one that follows it.',
        ],
      },
      {
        heading: 'Why us!',
        paragraphs: [
          'We are happy to tell you which step to skip. A plan that recommends everything at once is a sales document; ours is ordered by payback and reviewed every year against what you have actually spent.',
        ],
        image: '/images/video-bg.jpg',
        imageAlt: 'Renewable energy engineers on site',
      },
    ],
    highlights: [
      { icon: 'leaf', title: 'Carbon Baseline', text: 'Your current emissions measured before anything is promised.' },
      { icon: 'house', title: 'Fabric First', text: 'Insulation and airtightness assessed ahead of generation.' },
      { icon: 'panel', title: 'Generation Plan', text: 'The right renewable mix for your site and orientation.' },
      { icon: 'battery', title: 'Storage Strategy', text: 'Batteries phased in when the tariff makes them pay.' },
      { icon: 'coins', title: 'Funding Support', text: 'Grants, incentives and finance identified and applied for.' },
      { icon: 'gauge', title: 'Annual Review', text: 'Progress measured against the baseline every twelve months.' },
    ],
    planning: {
      title: 'Planning & Strategy',
      text: 'The plan is a roadmap, not a shopping list: each step is costed, dated and ordered so the cheapest savings land first.',
      image: '/images/planning.jpg',
      imageAlt: 'Solar installation being prepared on site',
      benefits: [
        'Measured carbon and cost baseline to start from',
        'Steps ordered by payback, not by ticket price',
        'Grant and incentive applications handled for you',
        'Reviewed and re-costed every year',
      ],
    },
    faqs: [
      {
        question: 'Where should a renewable transition start?',
        answer:
          'Almost always with demand. Insulation, controls and lighting are cheaper per unit saved than any generation, and they shrink everything you buy afterwards.',
      },
      {
        question: 'Can the work be phased over several years?',
        answer:
          'Yes, and most clients do exactly that. We specify each stage so it stands alone but still connects cleanly to the ones that follow.',
      },
      ...sharedFaqTail,
    ],
  },
];

/** Look a service up by slug — used by `getStaticPaths` consumers. */
export const getService = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
