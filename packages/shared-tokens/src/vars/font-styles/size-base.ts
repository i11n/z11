import { createMap } from "../../util";

/**
 * The simple base screen `font-size` variants map.
 */
const variants = {
  /**
   * The `small` variant of the base screen `font-size` variants.
   */
  small: `${parseFloat((12 / 14).toFixed(4))}rem`,
  /**
   * The `base` variant of the base screen `font-size` variants.
   */
  base: `${parseFloat((14 / 14).toFixed(4))}rem`,
  /**
   * The `lead` variant of the base screen `font-size` variants.
   */
  lead: `${parseFloat((16 / 14).toFixed(4))}rem`,
  /**
   * The `h6` variant of the base screen `font-size` variants.
   */
  h6: `${parseFloat((14 / 14).toFixed(4))}rem`,
  /**
   * The `h5` variant of the base screen `font-size` variants.
   */
  h5: `${parseFloat((16 / 14).toFixed(4))}rem`,
  /**
   * The `h4` variant of the base screen `font-size` variants.
   */
  h4: `${parseFloat((20 / 14).toFixed(4))}rem`,
  /**
   * The `h3` variant of the base screen `font-size` variants.
   */
  h3: `${parseFloat((22 / 14).toFixed(4))}rem`,
  /**
   * The `h2` variant of the base screen `font-size` variants.
   */
  h2: `${parseFloat((25 / 14).toFixed(4))}rem`,
  /**
   * The `h1` variant of the base screen `font-size` variants.
   */
  h1: `${parseFloat((29 / 14).toFixed(4))}rem`,
  /**
   * The `title` variant of the base screen `font-size` variants.
   */
  title: `${parseFloat((32 / 14).toFixed(4))}rem`,
};

/**
 * The `IMap` of the base screen `font-size` variants.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `size` export of this file instead.
 */
const __map = createMap('size', variants);

/**
 * A readonly copy of the base screen `font-size` styles.
 */
export const size: Readonly<typeof variants> = Object.assign({}, variants);

//  export individual styles

/**
 * The `small` variant of the base screen `font-size` variants.
 */
export const small = size.small;

/**
 * The `base` variant of the base screen `font-size` variants.
 */
export const base = size.base;

/**
 * The `lead` variant of the base screen `font-size` variants.
 */
export const lead = size.lead;

/**
 * The `h6` variant of the base screen `font-size` variants.
 */
export const h6 = size.h6;

/**
 * The `h5` variant of the base screen `font-size` variants.
 */
export const h5 = size.h5;

/**
 * The `h4` variant of the base screen `font-size` variants.
 */
export const h4 = size.h4;

/**
 * The `h3` variant of the base screen `font-size` variants.
 */
export const h3 = size.h3;

/**
 * The `h2` variant of the base screen `font-size` variants.
 */
export const h2 = size.h2;

/**
 * The `h1` variant of the base screen `font-size` variants.
 */
export const h1 = size.h1;

/**
 * The `title` variant of the base screen `font-size` variants.
 */
export const title = size.title;

//  export the map so SASS generators can use it.
export default __map;
