/**
 * Team roster. Single source for /team, /team/[slug] and any team strip
 * elsewhere on the site. Images live in public/images/ as team-1..8.jpg,
 * in the same order the original demo used.
 */

export type SocialIcon = 'facebook' | 'x' | 'linkedin' | 'instagram';

export interface TeamSocial {
  label: string;
  href: string;
  icon: SocialIcon;
}

export interface TeamSkill {
  label: string;
  /** Percentage, drives the animated [data-progress] bar. */
  value: number;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  image: string;
  /** One-line intro used on the detail page under the name. */
  summary: string;
  /** Long copy — one entry per paragraph. */
  bio: string[];
  email: string;
  phone: string;
  experience: string;
  skills: TeamSkill[];
  socials: TeamSocial[];
}

const socialsFor = (handle: string): TeamSocial[] => [
  { label: 'Facebook', href: `https://facebook.com/${handle}`, icon: 'facebook' },
  { label: 'X', href: `https://x.com/${handle}`, icon: 'x' },
  { label: 'LinkedIn', href: `https://linkedin.com/in/${handle}`, icon: 'linkedin' },
  { label: 'Instagram', href: `https://instagram.com/${handle}`, icon: 'instagram' },
];

export const team: TeamMember[] = [
  {
    slug: 'john-doe',
    name: 'John Doe',
    role: 'Solar Engineer',
    image: '/images/team-1.jpg',
    summary:
      'Leads rooftop photovoltaic design, from the first shading study to the final commissioning report.',
    bio: [
      'John has spent more than a decade turning empty rooftops into working power plants. He specialises in string sizing, inverter selection and the kind of shading analysis that keeps a system producing through every season.',
      'Before joining Solor he commissioned utility-scale arrays across three continents, and he still brings that discipline to every residential install: measure twice, model the yield, then build it properly.',
    ],
    email: 'john@domain.com',
    phone: '+01 248 248 2481',
    experience: '12 years',
    skills: [
      { label: 'PV System Design', value: 95 },
      { label: 'Energy Modelling', value: 88 },
      { label: 'Project Delivery', value: 82 },
    ],
    socials: socialsFor('johndoe'),
  },
  {
    slug: 'arita-benson',
    name: 'Arita Benson',
    role: 'Solar Engineer',
    image: '/images/team-2.jpg',
    summary:
      'Designs battery storage and hybrid systems that keep the lights on when the grid goes quiet.',
    bio: [
      'Arita builds the storage half of our systems. She sizes battery banks against real household load profiles rather than averages, so the numbers hold up on the darkest week of the year.',
      'She is our go-to engineer for hybrid installations that pair solar with a generator or a heat pump, and she writes the commissioning documentation the rest of the team works from.',
    ],
    email: 'arita@domain.com',
    phone: '+01 248 248 2482',
    experience: '9 years',
    skills: [
      { label: 'Battery Storage', value: 93 },
      { label: 'Hybrid Systems', value: 86 },
      { label: 'Load Analysis', value: 90 },
    ],
    socials: socialsFor('aritabenson'),
  },
  {
    slug: 'w-s-gilbert',
    name: 'W. S. Gilbert',
    role: 'Solar Engineer',
    image: '/images/team-3.jpg',
    summary:
      'Runs our commercial portfolio, from car-park canopies to warehouse-scale arrays.',
    bio: [
      'Gilbert handles the projects where the roof is measured in acres. He works with facilities teams to phase installations around production schedules so nothing stops while the panels go up.',
      'He also owns our grid-connection process, which means he spends as much time with utility paperwork as he does on site — and our clients never have to.',
    ],
    email: 'gilbert@domain.com',
    phone: '+01 248 248 2483',
    experience: '15 years',
    skills: [
      { label: 'Commercial Rollouts', value: 96 },
      { label: 'Grid Connection', value: 91 },
      { label: 'Cost Engineering', value: 79 },
    ],
    socials: socialsFor('wsgilbert'),
  },
  {
    slug: 'alpa-silva',
    name: 'Alpa Silva',
    role: 'Solar Engineer',
    image: '/images/team-4.jpg',
    summary:
      'Heads the maintenance division and the monitoring desk that watches every system we install.',
    bio: [
      'Alpa built the monitoring practice at Solor. Every array we commission reports back to her team, and a drop in yield triggers a call before the customer has noticed anything at all.',
      'She trains our field technicians on thermal inspection and string testing, and she keeps the maintenance schedules that make our performance warranty possible.',
    ],
    email: 'alpa@domain.com',
    phone: '+01 248 248 2484',
    experience: '8 years',
    skills: [
      { label: 'Preventive Maintenance', value: 94 },
      { label: 'Fault Diagnosis', value: 89 },
      { label: 'Performance Monitoring', value: 92 },
    ],
    socials: socialsFor('alpasilva'),
  },
  {
    slug: 'alice-thompson',
    name: 'Alice Thompson',
    role: 'Solar Engineer',
    image: '/images/team-5.jpg',
    summary:
      'Our energy analyst — she turns a year of meter data into the case for going solar.',
    bio: [
      'Alice produces the feasibility studies that sit behind every proposal. Consumption patterns, tariff structures, incentive schedules and payback periods all come out of her models.',
      'If a project does not pay for itself she says so early, which is why clients trust the numbers when she says it does.',
    ],
    email: 'alice@domain.com',
    phone: '+01 248 248 2485',
    experience: '7 years',
    skills: [
      { label: 'Feasibility Studies', value: 90 },
      { label: 'Financial Modelling', value: 87 },
      { label: 'Incentive Strategy', value: 84 },
    ],
    socials: socialsFor('alicethompson'),
  },
  {
    slug: 'brian-walker',
    name: 'Brian Walker',
    role: 'Solar Engineer',
    image: '/images/team-6.jpg',
    summary:
      'Installation lead — the person on the roof making sure the design survives contact with reality.',
    bio: [
      'Brian runs our install crews. Mounting systems, roof penetrations, cable routing and the safety plan that covers all of it are his responsibility on every job.',
      'He has a rule the whole company has adopted: nothing is finished until the site is cleaner than the crew found it.',
    ],
    email: 'brian@domain.com',
    phone: '+01 248 248 2486',
    experience: '11 years',
    skills: [
      { label: 'Installation Management', value: 95 },
      { label: 'Site Safety', value: 93 },
      { label: 'Mounting Systems', value: 88 },
    ],
    socials: socialsFor('brianwalker'),
  },
  {
    slug: 'lily-bennett',
    name: 'Lily Bennett',
    role: 'Solar Engineer',
    image: '/images/team-7.jpg',
    summary:
      'Looks after clients from the first survey through to the first full year of generation.',
    bio: [
      'Lily is the voice on the other end of the phone. She walks households through the survey, the quote, the permits and the switch-on, and she keeps the schedule honest.',
      'She also runs our handover sessions, so every customer leaves knowing how to read their own generation data.',
    ],
    email: 'lily@domain.com',
    phone: '+01 248 248 2487',
    experience: '6 years',
    skills: [
      { label: 'Client Relations', value: 96 },
      { label: 'Permitting', value: 85 },
      { label: 'Scheduling', value: 90 },
    ],
    socials: socialsFor('lilybennett'),
  },
  {
    slug: 'jackson-cooper',
    name: 'Jackson Cooper',
    role: 'Solar Engineer',
    image: '/images/team-8.jpg',
    summary:
      'Works on the research side — new cell technology, tracking mounts and everything next.',
    bio: [
      'Jackson evaluates the hardware before it reaches our catalogue. Bifacial modules, micro-inverters, single-axis trackers: if it claims a better yield, he tests it against our own field data first.',
      'He publishes the results internally so our recommendations are based on measurements rather than datasheets.',
    ],
    email: 'jackson@domain.com',
    phone: '+01 248 248 2488',
    experience: '10 years',
    skills: [
      { label: 'Technology Research', value: 92 },
      { label: 'Field Testing', value: 89 },
      { label: 'Yield Optimisation', value: 86 },
    ],
    socials: socialsFor('jacksoncooper'),
  },
];

export const getMember = (slug: string): TeamMember | undefined =>
  team.find((m) => m.slug === slug);
