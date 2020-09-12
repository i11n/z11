export const sizeXl = {
  small: `${parseFloat((12 / 14).toFixed(4))}rem`,
  base: `${parseFloat((14 / 14).toFixed(4))}rem`,
  lead: `${parseFloat((16 / 14).toFixed(4))}rem`,
  h6: `${parseFloat((20 / 14).toFixed(4))}rem`,
  h5: `${parseFloat((24 / 14).toFixed(4))}rem`,
  h4: `${parseFloat((29 / 14).toFixed(4))}rem`,
  h3: `${parseFloat((32 / 14).toFixed(4))}rem`,
  h2: `${parseFloat((37 / 14).toFixed(4))}rem`,
  h1: `${parseFloat((42 / 14).toFixed(4))}rem`,
  title: `${parseFloat((46 / 14).toFixed(4))}rem`,
};
import { createMap } from "../../util";

/**
 * The simple extra-large screen `font-size` variants map.
 */
const variants = {
  /**
   * The `small` variant of the extra-large screen `font-size` variants.
   */
  small: `${parseFloat((14 / 14).toFixed(4))}rem`,
  /**
   * The `base` variant of the extra-large screen `font-size` variants.
   */
  base: `${parseFloat((16 / 14).toFixed(4))}rem`,
  /**
   * The `lead` variant of the extra-large screen `font-size` variants.
   */
  lead: `${parseFloat((22 / 14).toFixed(4))}rem`,
  /**
   * The `h6` variant of the extra-large screen `font-size` variants.
   */
  h6: `${parseFloat((20 / 14).toFixed(4))}rem`,
  /**
   * The `h5` variant of the extra-large screen `font-size` variants.
   */
  h5: `${parseFloat((24 / 14).toFixed(4))}rem`,
  /**
   * The `h4` variant of the extra-large screen `font-size` variants.
   */
  h4: `${parseFloat((29 / 14).toFixed(4))}rem`,
  /**
   * The `h3` variant of the extra-large screen `font-size` variants.
   */
  h3: `${parseFloat((32 / 14).toFixed(4))}rem`,
  /**
   * The `h2` variant of the extra-large screen `font-size` variants.
   */
  h2: `${parseFloat((37 / 14).toFixed(4))}rem`,
  /**
   * The `h1` variant of the extra-large screen `font-size` variants.
   */
  h1: `${parseFloat((42 / 14).toFixed(4))}rem`,
  /**
   * The `title` variant of the extra-large screen `font-size` variants.
   */
  title: `${parseFloat((46 / 14).toFixed(4))}rem`,
};

/**
 * The `IMap` of the extra-large screen `font-size` variants.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `xlSize` export of this file instead.
 */
const __map = createMap('xlSize', variants);

/**
 * A readonly copy of the extra-large screen`font-size` styles.
 */
export const xlSize: Readonly<typeof variants> = Object.assign({}, variants);

//  export individual styles

/**
 * The `small` variant of the extra-large screen `font-size` variants.
 */
export const small = xlSize.small;

/**
 * The `base` variant of the extra-large screen `font-size` variants.
 */
export const base = xlSize.base;

/**
 * The `lead` variant of the extra-large screen `font-size` variants.
 */
export const lead = xlSize.lead;

/**
 * The `h6` variant of the extra-large screen `font-size` variants.
 */
export const h6 = xlSize.h6;

/**
 * The `h5` variant of the extra-large screen `font-size` variants.
 */
export const h5 = xlSize.h5;

/**
 * The `h4` variant of the extra-large screen `font-size` variants.
 */
export const h4 = xlSize.h4;

/**
 * The `h3` variant of the extra-large screen `font-size` variants.
 */
export const h3 = xlSize.h3;

/**
 * The `h2` variant of the extra-large screen `font-size` variants.
 */
export const h2 = xlSize.h2;

/**
 * The `h1` variant of the extra-large screen `font-size` variants.
 */
export const h1 = xlSize.h1;

/**
 * The `title` variant of the extra-large screen `font-size` variants.
 */
export const title = xlSize.title;

//  export the map so SASS generators can use it.
export default __map;
