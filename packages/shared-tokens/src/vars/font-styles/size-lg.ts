import { createMap } from "../../util";

/**
 * The simple large screen `font-size` variants map.
 */
const variants = {
  /**
   * The `small` variant of the large screen `font-size` variants.
   */
  small: `${parseFloat((14 / 14).toFixed(4))}rem`,
  /**
   * The `base` variant of the large screen `font-size` variants.
   */
  base: `${parseFloat((16 / 14).toFixed(4))}rem`,
  /**
   * The `lead` variant of the large screen `font-size` variants.
   */
  lead: `${parseFloat((20 / 14).toFixed(4))}rem`,
  /**
   * The `h6` variant of the large screen `font-size` variants.
   */
  h6: `${parseFloat((18 / 14).toFixed(4))}rem`,
  /**
   * The `h5` variant of the large screen `font-size` variants.
   */
  h5: `${parseFloat((20 / 14).toFixed(4))}rem`,
  /**
   * The `h4` variant of the large screen `font-size` variants.
   */
  h4: `${parseFloat((25 / 14).toFixed(4))}rem`,
  /**
   * The `h3` variant of the large screen `font-size` variants.
   */
  h3: `${parseFloat((28 / 14).toFixed(4))}rem`,
  /**
   * The `h2` variant of the large screen `font-size` variants.
   */
  h2: `${parseFloat((32 / 14).toFixed(4))}rem`,
  /**
   * The `h1` variant of the large screen `font-size` variants.
   */
  h1: `${parseFloat((36 / 14).toFixed(4))}rem`,
  /**
   * The `title` variant of the large screen `font-size` variants.
   */
  title: `${parseFloat((40 / 14).toFixed(4))}rem`,
};

/**
 * The `IMap` of the large screen `font-size` variants.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `lgSize` export of this file instead.
 */
const __map = createMap('lgSize', variants);

/**
 * A readonly copy of the large screen `font-size` styles.
 */
export const lgSize: Readonly<typeof variants> = Object.assign({}, variants);

//  export individual styles

/**
 * The `small` variant of the large screen `font-size` variants.
 */
export const small = lgSize.small;

/**
 * The `base` variant of the large screen `font-size` variants.
 */
export const base = lgSize.base;

/**
 * The `lead` variant of the large screen `font-size` variants.
 */
export const lead = lgSize.lead;

/**
 * The `h6` variant of the large screen `font-size` variants.
 */
export const h6 = lgSize.h6;

/**
 * The `h5` variant of the large screen `font-size` variants.
 */
export const h5 = lgSize.h5;

/**
 * The `h4` variant of the large screen `font-size` variants.
 */
export const h4 = lgSize.h4;

/**
 * The `h3` variant of the large screen `font-size` variants.
 */
export const h3 = lgSize.h3;

/**
 * The `h2` variant of the large screen `font-size` variants.
 */
export const h2 = lgSize.h2;

/**
 * The `h1` variant of the large screen `font-size` variants.
 */
export const h1 = lgSize.h1;

/**
 * The `title` variant of the large screen `font-size` variants.
 */
export const title = lgSize.title;

//  export the map so SASS generators can use it.
export default __map;
