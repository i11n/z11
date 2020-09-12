import { createMap } from "../../util";

/**
 * The simple medium screen `font-size` variants map.
 */
const variants = {
  /**
   * The `small` variant of the medium screen `font-size` variants.
   */
  small: `${parseFloat((12 / 14).toFixed(4))}rem`,
  /**
   * The `base` variant of the medium screen `font-size` variants.
   */
  base: `${parseFloat((14 / 14).toFixed(4))}rem`,
  /**
   * The `lead` variant of the medium screen `font-size` variants.
   */
  lead: `${parseFloat((18 / 14).toFixed(4))}rem`,
  /**
   * The `h6` variant of the medium screen `font-size` variants.
   */
  h6: `${parseFloat((16 / 14).toFixed(4))}rem`,
  /**
   * The `h5` variant of the medium screen `font-size` variants.
   */
  h5: `${parseFloat((18 / 14).toFixed(4))}rem`,
  /**
   * The `h4` variant of the medium screen `font-size` variants.
   */
  h4: `${parseFloat((22 / 14).toFixed(4))}rem`,
  /**
   * The `h3` variant of the medium screen `font-size` variants.
   */
  h3: `${parseFloat((24 / 14).toFixed(4))}rem`,
  /**
   * The `h2` variant of the medium screen `font-size` variants.
   */
  h2: `${parseFloat((28 / 14).toFixed(4))}rem`,
  /**
   * The `h1` variant of the medium screen `font-size` variants.
   */
  h1: `${parseFloat((32 / 14).toFixed(4))}rem`,
  /**
   * The `title` variant of the medium screen `font-size` variants.
   */
  title: `${parseFloat((35 / 14).toFixed(4))}rem`,
};

/**
 * The `IMap` of the medium screen `font-size` variants.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `mdSize` export of this file instead.
 */
const __map = createMap('mdSize', variants);

/**
 * A readonly copy of the medium `font-size` styles.
 */
export const mdSize: Readonly<typeof variants> = Object.assign({}, variants);

//  export individual styles

/**
 * The `small` variant of the medium screen `font-size` variants.
 */
export const small = mdSize.small;

/**
 * The `base` variant of the medium screen `font-size` variants.
 */
export const base = mdSize.base;

/**
 * The `lead` variant of the medium screen `font-size` variants.
 */
export const lead = mdSize.lead;

/**
 * The `h6` variant of the medium screen `font-size` variants.
 */
export const h6 = mdSize.h6;

/**
 * The `h5` variant of the medium screen `font-size` variants.
 */
export const h5 = mdSize.h5;

/**
 * The `h4` variant of the medium screen `font-size` variants.
 */
export const h4 = mdSize.h4;

/**
 * The `h3` variant of the medium screen `font-size` variants.
 */
export const h3 = mdSize.h3;

/**
 * The `h2` variant of the medium screen `font-size` variants.
 */
export const h2 = mdSize.h2;

/**
 * The `h1` variant of the medium screen `font-size` variants.
 */
export const h1 = mdSize.h1;

/**
 * The `title` variant of the medium screen `font-size` variants.
 */
export const title = mdSize.title;

//  export the map so SASS generators can use it.
export default __map;
