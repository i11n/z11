import { createMap } from "../util";

/**
 * The opacity variants map.
 */
const opacity = {
  /**
   * The `0` variant of the opacity variants.
   */
  0: 0,
  /**
   * The `1` variant of the opacity variants.
   */
  1: 0.1,
  /**
   * The `2` variant of the opacity variants.
   */
  2: 0.2,
  /**
   * The `3` variant of the opacity variants.
   */
  3: 0.3,
  /**
   * The `4` variant of the opacity variants.
   */
  4: 0.4,
  /**
   * The `5` variant of the opacity variants.
   */
  5: 0.5,
  /**
   * The `6` variant of the opacity variants.
   */
  6: 0.6,
  /**
   * The `7` variant of the opacity variants.
   */
  7: 0.7,
  /**
   * The `8` variant of the opacity variants.
   */
  8: 0.8,
  /**
   * The `9` variant of the opacity variants.
   */
  9: 0.9,
  /**
   * The `10` variant of the opacity variants.
   */
  10: 1,
};

/**
 * The `IMap` of the opacity variants.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `Opacity` export of this file instead.
 */
const __map = createMap('opacity', opacity);

/**
 * A readonly copy of the opacity variants.
 */
export const Opacity: Readonly<typeof opacity> = Object.assign({}, opacity);

//  export individual styles

/**
 * The `0` variant of the opacity variants.
 */
export const opacity0 = Opacity[0];

/**
 * The `1` variant of the opacity variants.
 */
export const opacity1 = Opacity[1];

/**
 * The `2` variant of the opacity variants.
 */
export const opacity2 = Opacity[2];

/**
 * The `3` variant of the opacity variants.
 */
export const opacity3 = Opacity[3];

/**
 * The `4` variant of the opacity variants.
 */
export const opacity4 = Opacity[4];

/**
 * The `5` variant of the opacity variants.
 */
export const opacity5 = Opacity[5];

/**
 * The `6` variant of the opacity variants.
 */
export const opacity6 = Opacity[6];

/**
 * The `7` variant of the opacity variants.
 */
export const opacity7 = Opacity[7];

/**
 * The `8` variant of the opacity variants.
 */
export const opacity8 = Opacity[8];

/**
 * The `9` variant of the opacity variants.
 */
export const opacity9 = Opacity[9];

/**
 * The `10` variant of the opacity variants.
 */
export const opacity10 = Opacity[10];

//  export the map so SASS generators can use it.
export default __map;
