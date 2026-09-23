/**
 * Portfolio content.
 *
 * The original theme kept these in a WordPress `awaiken-portfolio` custom post
 * type with Elementor field groups. Here they are plain data: the grid, the
 * category filter, the detail pages and the prev/next navigation all derive
 * from this one array, so adding a project means adding a record and nothing
 * else.
 *
 * Slugs mirror the `Projects` submenu in `site.ts` exactly — they are the
 * routes `/portfolio/[slug]` builds.
 */

/** Icon key for the detail sidebar. Rendered by PortfolioDetail.astro. */
export type SpecIcon = 'date' | 'energy' | 'category' | 'client' | 'location';

export interface ProjectSpec {
  icon: SpecIcon;
  label: string;
  value: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectSection {
  heading: string;
  paragraphs: string[];
  /** Optional tick-list rendered under the paragraphs. */
  points?: string[];
}

export interface Project {
  slug: string;
  title: string;
  /** Display label; also the value the grid filter groups on. */
  category: string;
  client: string;
  location: string;
  /** Human-readable date as shown in the sidebar. */
  date: string;
  /** Machine-readable counterpart for <time datetime>. */
  dateISO: string;
  excerpt: string;
  /** Card thumbnail on the portfolio index. */
  image: ProjectImage;
  /** Large lead image on the detail page. */
  hero: ProjectImage;
  body: ProjectSection[];
  gallery: ProjectImage[];
  specs: ProjectSpec[];
}

export const projects: Project[] = [
  {
    slug: 'photon-fusion',
    title: 'Photon Fusion',
    category: 'Geothermal Energy',
    client: 'SolarSphere Solutions',
    location: '123 Main Street, Anytown',
    date: '09 January, 2024',
    dateISO: '2024-01-09',
    excerpt:
      'A ground-mounted array paired with a geothermal loop, sized to carry a 40,000 sq ft production facility through its entire day shift.',
    image: { src: '/images/project-8.jpg', alt: 'Ground-mounted solar array at the Photon Fusion site' },
    hero: { src: '/images/post-6.jpg', alt: 'Engineer fitting a panel on the Photon Fusion array' },
    body: [
      {
        heading: 'Project Information',
        paragraphs: [
          'Photon Fusion began as a simple question from the client: could a single site cover its own daytime load without touching the grid? We surveyed the roofline, modelled twelve months of irradiance against their metered demand, and came back with a hybrid answer — a ground-mounted photovoltaic array carrying the day, a geothermal loop levelling the overnight heating bill.',
          'The build ran across eleven weeks with no interruption to production. Racking went in over two weekends, string wiring followed section by section, and the inverter house was commissioned before the final panels were seated so each block could be tested the day it was energised.',
        ],
      },
      {
        heading: 'Scope of Project',
        paragraphs: [
          'Our remit covered everything from the first shadow study to the handover pack: structural survey, grid application, procurement, installation, commissioning and the monitoring dashboard the facilities team now runs it from. A five-year service agreement keeps the panels washed and the string data reviewed quarterly.',
        ],
        points: [
          'Full irradiance and shading survey before a single bracket was ordered.',
          'Grid connection and export agreement handled end to end by our team.',
          'Live monitoring per string, so a failing panel is flagged the same week.',
        ],
      },
    ],
    gallery: [
      { src: '/images/post-1.jpg', alt: 'Site team reviewing the array layout on the roof' },
      { src: '/images/post-2.jpg', alt: 'Technician checking panel output against the commissioning sheet' },
      { src: '/images/post-3.jpg', alt: 'Engineer torquing a mounting rail into place' },
      { src: '/images/post-4.jpg', alt: 'Finished row of panels catching the afternoon sun' },
    ],
    specs: [
      { icon: 'date', label: 'Project Date', value: '09 January, 2024' },
      { icon: 'energy', label: 'Energy Generation', value: '80,000 kWh / Year' },
      { icon: 'category', label: 'Category', value: 'Geothermal Energy' },
      { icon: 'client', label: 'Client / Company', value: 'SolarSphere Solutions' },
      { icon: 'location', label: 'Project Location', value: '123 Main Street, Anytown' },
    ],
  },
  {
    slug: 'luxsolar-dynamics',
    title: 'LuxSolar Dynamics',
    category: 'Geothermal Energy',
    client: 'LuxSolar Dynamics Ltd',
    location: '48 Riverside Park, Brightwater',
    date: '22 March, 2024',
    dateISO: '2024-03-22',
    excerpt:
      'Fourteen acres of reclaimed farmland turned into a utility-scale field, feeding the local network and heating the estate it sits beside.',
    image: { src: '/images/project-7.jpg', alt: 'Utility-scale solar field at LuxSolar Dynamics' },
    hero: { src: '/images/post-5.jpg', alt: 'Rows of panels stretching across the LuxSolar site' },
    body: [
      {
        heading: 'Project Information',
        paragraphs: [
          'Fourteen acres of tired farmland, poor drainage, and a substation four hundred metres away — on paper a difficult site. In practice the drainage worked in our favour: pile-driven foundations went in faster than a concrete ballast would have, and the ground was never going to be farmed again.',
          'The array now exports to the local network for most of the year and diverts to a geothermal loop that heats the neighbouring estate through the winter months, which is where the project pays for itself twice over.',
        ],
      },
      {
        heading: 'Scope of Project',
        paragraphs: [
          'We took the site from planning submission to first export in under nine months, including the substation upgrade the distribution operator asked for. Panel rows were set on a tracker frame so the array follows the sun through the day rather than sitting at a fixed compromise angle.',
        ],
        points: [
          'Planning, ecology survey and grid application submitted as one package.',
          'Single-axis trackers lifting annual yield roughly a fifth over fixed tilt.',
          'Sheep grazing retained under the array, so the land keeps earning.',
        ],
      },
    ],
    gallery: [
      { src: '/images/post-2.jpg', alt: 'Survey crew setting out the row positions' },
      { src: '/images/post-4.jpg', alt: 'Tracker frames part-way through installation' },
      { src: '/images/post-6.jpg', alt: 'Engineer terminating a string into the combiner box' },
      { src: '/images/post-1.jpg', alt: 'Completed field seen from the access track' },
    ],
    specs: [
      { icon: 'date', label: 'Project Date', value: '22 March, 2024' },
      { icon: 'energy', label: 'Energy Generation', value: '2.4 GWh / Year' },
      { icon: 'category', label: 'Category', value: 'Geothermal Energy' },
      { icon: 'client', label: 'Client / Company', value: 'LuxSolar Dynamics Ltd' },
      { icon: 'location', label: 'Project Location', value: '48 Riverside Park, Brightwater' },
    ],
  },
  {
    slug: 'solarburst-ventures',
    title: 'Solarburst Ventures',
    category: 'Solar Power',
    client: 'Solarburst Ventures Inc',
    location: '9 Harbour Road, Eastport',
    date: '14 June, 2024',
    dateISO: '2024-06-14',
    excerpt:
      'A rooftop retrofit across six warehouse units, delivered unit by unit so no tenant lost a single hour of operating time.',
    image: { src: '/images/project-6.jpg', alt: 'Rooftop solar panels at the Solarburst Ventures warehouses' },
    hero: { src: '/images/post-3.jpg', alt: 'Installer working across the Solarburst warehouse roof' },
    body: [
      {
        heading: 'Project Information',
        paragraphs: [
          'Six warehouse units under one landlord, six different tenants, six different opinions about roof access. The engineering was routine; the sequencing was the real work. We built the programme around each tenant’s quietest day and never had more than one roof open at a time.',
          'Every unit now runs its lighting, dock levellers and chillers off its own array during daylight, with a shared export meter handling the surplus the estate cannot absorb.',
        ],
      },
      {
        heading: 'Scope of Project',
        paragraphs: [
          'A structural engineer walked every roof before we quoted, because a retrofit lives or dies on whether the deck can take the load. Two units needed purlin reinforcement, which we folded into the programme rather than treating as a variation.',
        ],
        points: [
          'Load assessment and reinforcement on every roof before installation.',
          'Unit-by-unit phasing, so no tenant lost operating time.',
          'Individual metering per unit, with a shared export meter for the surplus.',
        ],
      },
    ],
    gallery: [
      { src: '/images/post-3.jpg', alt: 'Panels being lifted onto the warehouse roof' },
      { src: '/images/post-1.jpg', alt: 'Roof-mounted rails set out ahead of the panels' },
      { src: '/images/post-5.jpg', alt: 'Inverter and isolator wall inside the plant room' },
      { src: '/images/post-2.jpg', alt: 'Completed rooftop array across the warehouse units' },
    ],
    specs: [
      { icon: 'date', label: 'Project Date', value: '14 June, 2024' },
      { icon: 'energy', label: 'Energy Generation', value: '610,000 kWh / Year' },
      { icon: 'category', label: 'Category', value: 'Solar Power' },
      { icon: 'client', label: 'Client / Company', value: 'Solarburst Ventures Inc' },
      { icon: 'location', label: 'Project Location', value: '9 Harbour Road, Eastport' },
    ],
  },
  {
    slug: 'sunworks-initiative',
    title: 'Sunworks Initiative',
    category: 'Geothermal Energy',
    client: 'Sunworks Community Trust',
    location: '210 Meadow Lane, Greenfield',
    date: '02 September, 2024',
    dateISO: '2024-09-02',
    excerpt:
      'A community-owned scheme across a school, a library and two halls, with battery storage so the buildings keep running through an outage.',
    image: { src: '/images/project-5.jpg', alt: 'Solar panels on a community building at the Sunworks site' },
    hero: { src: '/images/post-4.jpg', alt: 'Technician commissioning the Sunworks battery and inverter rack' },
    body: [
      {
        heading: 'Project Information',
        paragraphs: [
          'Sunworks is owned by the people who use it. A local trust raised the capital through a community share offer, and four public buildings — a primary school, the library and two halls — now sit behind their own generation and storage.',
          'Because the buildings are places people shelter in, the brief went further than yield. Each site carries enough battery capacity to keep lighting, heating and communications alive through a grid outage, which the school in particular had asked for after two bad winters.',
        ],
      },
      {
        heading: 'Scope of Project',
        paragraphs: [
          'We designed, installed and now maintain all four installations, and trained two trust volunteers to read the monitoring themselves. The geothermal loop under the school playing field covers the heating load the panels cannot, which was the piece that made the numbers work across the whole year.',
        ],
        points: [
          'Battery backup sized to carry each building through a grid outage.',
          'Shared monitoring dashboard the trust runs without us.',
          'Ten-year maintenance plan costed into the original share offer.',
        ],
      },
    ],
    gallery: [
      { src: '/images/post-4.jpg', alt: 'Battery cabinets installed in the school plant room' },
      { src: '/images/post-6.jpg', alt: 'Engineer checking connections on the roof array' },
      { src: '/images/post-2.jpg', alt: 'Panels on the library roof at first light' },
      { src: '/images/post-5.jpg', alt: 'Trust volunteers walking the completed installation' },
    ],
    specs: [
      { icon: 'date', label: 'Project Date', value: '02 September, 2024' },
      { icon: 'energy', label: 'Energy Generation', value: '295,000 kWh / Year' },
      { icon: 'category', label: 'Category', value: 'Geothermal Energy' },
      { icon: 'client', label: 'Client / Company', value: 'Sunworks Community Trust' },
      { icon: 'location', label: 'Project Location', value: '210 Meadow Lane, Greenfield' },
    ],
  },
  {
    slug: 'helioharbor-dynamics',
    title: 'HelioHarbor Dynamics',
    category: 'Solar Power',
    client: 'HelioHarbor Port Authority',
    location: 'Dock Road, Eastharbour',
    date: '14 May, 2024',
    dateISO: '2024-05-14',
    excerpt:
      'A working port that wanted its cranes running on its own power. Salt air, constant vibration and no room to close the quay while we built it.',
    image: { src: '/images/project-4.jpg', alt: 'Solar canopy over the quayside at HelioHarbor' },
    hero: { src: '/images/post-4.jpg', alt: 'Panels mounted above the working dock at HelioHarbour' },
    body: [
      {
        heading: 'Project Information',
        paragraphs: [
          'A port is a hostile place for photovoltaics. Salt carries on the wind, the ground never stops moving under the cranes, and the quay cannot close for a fortnight while somebody bolts panels to it. HelioHarbor asked whether it could run its crane fleet on its own generation anyway.',
          'The answer was a canopy rather than a roof mount: a raised structure spanning the container yard, built in sections overnight so the quay was clear each morning. Marine-grade fixings throughout, and a wash cycle four times a year instead of the usual two.',
        ],
      },
      {
        heading: 'Scope of Project',
        paragraphs: [
          'We designed the canopy, ran the structural case past the port engineer, built it in eight overnight phases and tied it into the existing crane supply through a new switchroom. The yard never lost a working shift.',
        ],
        points: [
          'Marine-grade anodised frames and stainless fixings rated for salt exposure.',
          'Built in overnight phases so the container yard never closed.',
          'Crane supply tied in through a new switchroom with full changeover.',
        ],
      },
    ],
    gallery: [
      { src: '/images/post-2.jpg', alt: 'Canopy frame going up over the container yard' },
      { src: '/images/post-3.jpg', alt: 'Installer fixing a panel to the marine-grade rail' },
      { src: '/images/post-5.jpg', alt: 'Completed canopy seen from the quayside' },
      { src: '/images/post-6.jpg', alt: 'Switchroom tie-in for the crane supply' },
    ],
    specs: [
      { icon: 'date', label: 'Project Date', value: '14 May, 2024' },
      { icon: 'energy', label: 'Energy Generation', value: '310,000 kWh / Year' },
      { icon: 'category', label: 'Category', value: 'Solar Power' },
      { icon: 'client', label: 'Client / Company', value: 'HelioHarbor Port Authority' },
      { icon: 'location', label: 'Project Location', value: 'Dock Road, Eastharbour' },
    ],
  },
  {
    slug: 'solarloom-energy',
    title: 'SolarLoom Energy',
    category: 'Solar Power',
    client: 'SolarLoom Textiles',
    location: 'Mill Lane, Weaverbridge',
    date: '02 July, 2024',
    dateISO: '2024-07-02',
    excerpt:
      'A converted textile mill with a listed roof we were not allowed to touch, so the array went everywhere else instead.',
    image: { src: '/images/project-3.jpg', alt: 'Solar installation at the SolarLoom mill' },
    hero: { src: '/images/post-3.jpg', alt: 'Array set behind the listed mill building' },
    body: [
      {
        heading: 'Project Information',
        paragraphs: [
          'The mill roof was listed, which ruled out the obvious answer before we started. What the site did have was a large yard, a south-facing boundary wall and a flat-roofed weaving shed added in the seventies that nobody had thought to protect.',
          'We split the array three ways across those surfaces. It is a less tidy design than a single roof run, but it produces more than a roof-only scheme would have and it left the listed fabric untouched, which kept the conservation officer on side.',
        ],
      },
      {
        heading: 'Scope of Project',
        paragraphs: [
          'Three sub-arrays, one inverter room, and a control strategy that prioritises the dye house — the single biggest load on site and the one most expensive to run from the grid.',
        ],
        points: [
          'Listed roof left entirely untouched; no fixings into historic fabric.',
          'Three sub-arrays combined into one metered supply.',
          'Load priority set to the dye house, the site\u2019s largest consumer.',
        ],
      },
    ],
    gallery: [
      { src: '/images/post-1.jpg', alt: 'Ground array in the mill yard' },
      { src: '/images/post-4.jpg', alt: 'Flat-roof mount on the weaving shed' },
      { src: '/images/post-5.jpg', alt: 'Inverter room during commissioning' },
      { src: '/images/post-6.jpg', alt: 'Boundary wall array catching afternoon sun' },
    ],
    specs: [
      { icon: 'date', label: 'Project Date', value: '02 July, 2024' },
      { icon: 'energy', label: 'Energy Generation', value: '145,000 kWh / Year' },
      { icon: 'category', label: 'Category', value: 'Solar Power' },
      { icon: 'client', label: 'Client / Company', value: 'SolarLoom Textiles' },
      { icon: 'location', label: 'Project Location', value: 'Mill Lane, Weaverbridge' },
    ],
  },
  {
    slug: 'ecoharbor',
    title: 'EcoHarbor',
    category: 'Geothermal Energy',
    client: 'EcoHarbor Community Trust',
    location: 'Harbour Green, Saltmarsh',
    date: '19 September, 2024',
    dateISO: '2024-09-19',
    excerpt:
      'A community-owned scheme: forty households, one shared ground loop, and a tariff the residents set themselves.',
    image: { src: '/images/project-2.jpg', alt: 'Community energy scheme at EcoHarbor' },
    hero: { src: '/images/post-2.jpg', alt: 'Shared plant room serving the EcoHarbor houses' },
    body: [
      {
        heading: 'Project Information',
        paragraphs: [
          'EcoHarbor is owned by the people who live in it. Forty households formed a trust, raised the capital between them and asked us to build a shared ground-source loop with a rooftop array on every property feeding a common meter.',
          'The engineering was straightforward. The interesting part was the metering: forty owners needed to see, individually and monthly, what they had drawn and what they had contributed. That dashboard took longer to get right than the boreholes did.',
        ],
      },
      {
        heading: 'Scope of Project',
        paragraphs: [
          'Twelve boreholes, a shared plant room, forty rooftop arrays and a settlement system the trust runs itself without needing us in the loop.',
        ],
        points: [
          'Twelve boreholes feeding one shared ground-source plant room.',
          'Per-household metering with a monthly settlement statement.',
          'Handed over with training so the trust operates it unaided.',
        ],
      },
    ],
    gallery: [
      { src: '/images/post-1.jpg', alt: 'Borehole drilling on the green' },
      { src: '/images/post-3.jpg', alt: 'Plant room manifold before insulation' },
      { src: '/images/post-4.jpg', alt: 'Rooftop array on one of the forty houses' },
      { src: '/images/post-6.jpg', alt: 'Residents at the handover walkthrough' },
    ],
    specs: [
      { icon: 'date', label: 'Project Date', value: '19 September, 2024' },
      { icon: 'energy', label: 'Energy Generation', value: '260,000 kWh / Year' },
      { icon: 'category', label: 'Category', value: 'Geothermal Energy' },
      { icon: 'client', label: 'Client / Company', value: 'EcoHarbor Community Trust' },
      { icon: 'location', label: 'Project Location', value: 'Harbour Green, Saltmarsh' },
    ],
  },
  {
    slug: 'greenvista-homes',
    title: 'GreenVista Homes',
    category: 'Solar Power',
    client: 'GreenVista Developments',
    location: 'Vista Rise, Northfield',
    date: '28 November, 2024',
    dateISO: '2024-11-28',
    excerpt:
      'A hundred and twenty new homes specified from the drawings up, so the array was part of the roof rather than bolted onto it.',
    image: { src: '/images/project-1.jpg', alt: 'New-build housing with integrated solar at GreenVista' },
    hero: { src: '/images/post-1.jpg', alt: 'Roof-integrated panels on the GreenVista homes' },
    body: [
      {
        heading: 'Project Information',
        paragraphs: [
          'Coming in at drawing stage changes what is possible. Instead of retrofitting panels onto finished roofs, we specified in-roof mounting from the start: the array sits flush in the tile line, the cable runs were designed into the joists, and the consumer unit had a dedicated way from day one.',
          'The result costs the developer less per home than a retrofit would have and looks like part of the building rather than an addition to it, which mattered for the planning consent on a site this visible.',
        ],
      },
      {
        heading: 'Scope of Project',
        paragraphs: [
          'A hundred and twenty homes across four house types, each with a roof-integrated array sized to its own footprint and orientation, plus a battery in the four-bedroom plots where the demand justified it.',
        ],
        points: [
          'In-roof mounting specified at drawing stage, flush with the tile line.',
          'Array sized per house type rather than one compromise specification.',
          'Battery storage in the larger plots where daily demand justified it.',
        ],
      },
    ],
    gallery: [
      { src: '/images/post-2.jpg', alt: 'In-roof tray being set before tiling' },
      { src: '/images/post-3.jpg', alt: 'Completed roof with the array flush in the tile line' },
      { src: '/images/post-4.jpg', alt: 'Consumer unit and inverter in a plot utility room' },
      { src: '/images/post-5.jpg', alt: 'Street view across the finished development' },
    ],
    specs: [
      { icon: 'date', label: 'Project Date', value: '28 November, 2024' },
      { icon: 'energy', label: 'Energy Generation', value: '480,000 kWh / Year' },
      { icon: 'category', label: 'Category', value: 'Solar Power' },
      { icon: 'client', label: 'Client / Company', value: 'GreenVista Developments' },
      { icon: 'location', label: 'Project Location', value: 'Vista Rise, Northfield' },
    ],
  },
];

/** `Geothermal Energy` -> `geothermal-energy`. Used for filter values. */
export const categorySlug = (category: string): string =>
  category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/** Distinct categories in the order they first appear. */
export const categories: string[] = [...new Set(projects.map((p) => p.category))];

export const getProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

/**
 * Neighbours for the detail page footer. The list wraps, so the last project
 * links forward to the first and there is never a dead control.
 */
export function getAdjacent(slug: string): { prev: Project; next: Project } | null {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1 || projects.length < 2) return null;
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  };
}
