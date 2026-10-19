/**
 * Product data shape shared by all three product lines.
 *
 * Every product page, comparison table and the downloads page is generated
 * from records of this shape. Specs come from the client's datasheets, so
 * correcting a datasheet means editing one record here, nothing else.
 */

export type ProductLine = 'panels' | 'inverters' | 'chargers';

/** One row of a spec table. `values` holds one entry per variant, in the
 *  same order as `Product.variants`. A single value spans all variants. */
export interface SpecRow {
  label: string;
  values: string[];
}

export interface SpecGroup {
  title: string;
  rows: SpecRow[];
}

export interface Product {
  slug: string;
  line: ProductLine;
  /** Display name, e.g. "AXI LUMEN". */
  name: string;
  /** Sub-group within a line, e.g. "AC Charger" / "DC Fast Charger". */
  family?: string;
  /** Short line under the name, e.g. "N-type bifacial double-glass module". */
  tagline: string;
  /** One or two sentences for cards and meta descriptions. */
  summary: string;
  status: 'current' | 'discontinued';
  /** Path under public/, e.g. "/images/products/panels/lumen.webp". */
  image: string;
  imageAlt: string;
  /** Model codes / power classes covered by this product's spec table. */
  variants: string[];
  /** 3–4 headline figures for the hero strip, e.g. { label: 'Max power', value: '640 W' }. */
  highlights: { label: string; value: string }[];
  features: string[];
  specs: SpecGroup[];
  /** Path under public/, e.g. "/datasheets/axi-lumen.pdf". */
  datasheet?: string;
  /**
   * Internal only — never rendered. Values we corrected from the datasheet or
   * that still need the client to confirm, so they are easy to find later.
   */
  toConfirm?: string[];
}
