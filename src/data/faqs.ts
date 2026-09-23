/**
 * FAQ content for /faqs (and anywhere else an accordion is needed).
 *
 * Questions are taken verbatim from the original Solor FAQs page. The original
 * repeated one lorem paragraph for every answer; here each one carries a real
 * answer so the page is useful as well as faithful.
 *
 * The original page shows a single ungrouped list, so `category` is optional —
 * set it on every record and pass `grouped` to <FaqAccordion /> if a future
 * page needs sections.
 */

export interface Faq {
  /** Stable slug — used for the accordion element ids and deep links. */
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqs: Faq[] = [
  {
    id: 'renewable-basics',
    question: 'Understanding Renewable Energy: A Beginners Guide ?',
    answer:
      'Renewable energy comes from sources that replenish themselves faster than we can use them — sunlight, wind, water, heat from the ground and organic matter. Unlike coal or gas, nothing is burned and nothing runs out, so the fuel cost stays at zero for the life of the system. For most homes and businesses solar is the easiest place to start: the hardware is mature, the payback is predictable, and a single roof can cover the bulk of a yearly electricity bill.',
  },
  {
    id: 'tidal-wave',
    question: 'The Basics of Tidal and Wave Energy?',
    answer:
      'Tidal power captures the predictable rise and fall of the sea, while wave power harvests the motion of the surface itself. Because tides run on a lunar schedule, output can be forecast years ahead — a rare quality among renewables. Both are best suited to coastal grid-scale projects rather than individual sites, and we assess them as part of a wider hybrid strategy where a location makes them viable.',
  },
  {
    id: 'sustainable-education',
    question: 'Educating for a Sustainable Future?',
    answer:
      'Hardware only delivers half the saving; the other half comes from knowing how to use it. Every Solor installation is handed over with a walkthrough of your monitoring dashboard, a plain-English explanation of your tariff, and guidance on shifting heavy loads into peak generation hours. We also run free quarterly workshops for schools and community groups.',
  },
  {
    id: 'staying-informed',
    question: 'Staying Informed: Resources and Further Reading on Renewable Energy?',
    answer:
      'Start with your national energy agency for incentives and tariffs, then follow the IEA and IRENA annual outlooks for the wider picture. Our own blog tracks changes to grid-connection rules, panel efficiency and battery pricing as they happen, and clients on a maintenance plan receive a short summary of anything that affects their system directly.',
  },
  {
    id: 'panel-types',
    question: 'Solar Panel Types: Choosing the Right Technology for Your Installation ?',
    answer:
      'Monocrystalline panels give the highest output per square metre and suit roofs where space is tight. Polycrystalline costs less per watt and makes sense where area is not a constraint. Thin-film is light and flexible, which fits large flat commercial roofs that cannot carry extra load. We survey your roof first, then recommend the technology that fits the space, the structure and the budget.',
  },
  {
    id: 'installation-process',
    question: 'Installation Process Unveiled: What to Expect During Solar Panel Setup ?',
    answer:
      'A typical residential install runs to three stages: a site survey and design, one to two days of mounting and wiring on site, and a final commissioning visit once the meter and grid connection are approved. Power is interrupted only briefly during the changeover, and we leave the site clean with the monitoring app already paired to your system.',
  },
  {
    id: 'permitting',
    question: 'Permitting and Paperwork: Navigating the Regulatory Landscape for Solar?',
    answer:
      'Most projects need a building or electrical permit plus a grid-connection agreement from your utility. We prepare and submit the full package on your behalf, including structural drawings and single-line diagrams, and track it through to approval so you are not chasing anyone. Incentive and rebate claims are filed at the same time.',
  },
  {
    id: 'inverters',
    question: 'Solar Inverters: Understanding Their Role in Your System?',
    answer:
      'Panels produce direct current; your building and the grid run on alternating current. The inverter makes that conversion and is also the brain of the system, tracking the maximum power point and reporting performance. String inverters are the cost-effective default, while microinverters and power optimisers earn their keep on roofs with shading or several orientations.',
  },
];
