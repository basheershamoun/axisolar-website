/** Site-wide content. Single place to edit nav, contact details and socials. */

export const site = {
  name: 'Solor',
  tagline: 'Powering the Future With Renewable.',
  email: 'info@domain.com',
  phone: '+01 248 248 2481',
  phoneHref: '+012482482481',
  address: '123 Green Energy Way, Sunnyvale, CA 94086',
  hours: 'Mon – Sat: 9:00 – 18:00',
};

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Solar Maintenance', href: '/services/solar-maintenance' },
      { label: 'Solar Solutions', href: '/services/solar-solutions' },
      { label: 'Energy Saving Devices', href: '/services/energy-saving-devices' },
      { label: 'Hybrid Energy', href: '/services/hybrid-energy' },
      { label: 'Renewable Energy', href: '/services/renewable-energy' },
      { label: 'Solar PV Systems', href: '/services/solar-pv-systems' },
    ],
  },
  {
    label: 'Projects',
    href: '/portfolio',
    children: [
      { label: 'Photon Fusion', href: '/portfolio/photon-fusion' },
      { label: 'Luxsolar Dynamics', href: '/portfolio/luxsolar-dynamics' },
      { label: 'Solarburst Ventures', href: '/portfolio/solarburst-ventures' },
      { label: 'Sunworks Initiative', href: '/portfolio/sunworks-initiative' },
    ],
  },
  {
    label: 'Pages',
    href: '#',
    children: [
      { label: 'Our Team', href: '/team' },
      { label: 'FAQs', href: '/faqs' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

export const socials = [
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { label: 'X', href: 'https://x.com', icon: 'x' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
] as const;
