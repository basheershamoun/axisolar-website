/**
 * Product line -> route / label, used by the home page and downloads.
 * Labels come from `productLines` so the nav, footer and pages never drift.
 */
import { productLines } from '../../data/site';
import type { ProductLine } from '../../data/products/types';

export const lineRoute: Record<ProductLine, string> = {
  panels: '/solar-panels',
  inverters: '/inverters',
  chargers: '/ev-chargers',
};

export const lineLabel = (line: ProductLine): string =>
  productLines.find((l) => l.href === lineRoute[line])?.label ?? line;

export const productHref = (p: { line: ProductLine; slug: string }) =>
  `${lineRoute[p.line]}/${p.slug}`;
