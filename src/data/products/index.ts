/** All products, for pages that list across lines (downloads, sitemap). */
import { panels } from './panels';
import { inverters } from './inverters';
import { chargers } from './chargers';

export * from './types';
export { panels, inverters, chargers };

export const allProducts = [...panels, ...inverters, ...chargers];
