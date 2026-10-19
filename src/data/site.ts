/** Site-wide content. Single place to edit nav and contact details. */

export const site = {
  name: 'AXI SOLAR',
  tagline: 'Solar panels, hybrid inverters and EV chargers for installers and engineers.',
  email: 'info@axisolar.com',
};

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

/** Product lines, in display order. Shared by the nav, footer and home page. */
export const productLines = [
  {
    label: 'Solar Panels',
    href: '/solar-panels',
    summary: 'N-type bifacial double-glass modules up to 640 W.',
  },
  {
    label: 'Hybrid Inverters',
    href: '/inverters',
    summary: 'VERO, NERO and FORZA — 48 V hybrid inverters from 3 to 20 kW.',
  },
  {
    label: 'EV Chargers',
    href: '/ev-chargers',
    summary: 'AXI EVOO AC wallboxes and DC fast chargers from 3.5 to 240 kW.',
  },
] as const;

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Solar Panels',
    href: '/solar-panels',
    children: [
      { label: 'AXI LUMEN', href: '/solar-panels/lumen' },
      { label: 'Archive', href: '/solar-panels/archive' },
    ],
  },
  {
    label: 'Inverters',
    href: '/inverters',
    children: [
      { label: 'AXI VERO', href: '/inverters/vero' },
      { label: 'AXI NERO', href: '/inverters/nero' },
      { label: 'AXI FORZA', href: '/inverters/forza' },
    ],
  },
  { label: 'EV Chargers', href: '/ev-chargers' },
  { label: 'Downloads', href: '/downloads' },
  { label: 'About Us', href: '/about' },
  { label: 'Verify', href: '/verify' },
];
