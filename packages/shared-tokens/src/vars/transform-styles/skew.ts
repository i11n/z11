import { createMap } from "../../util";

/**
 * The simple `transform` skew variants map.
 */
const skews = {
  /**
   * The `0` variant of the `transform` skew variants.
   */
  0: '0deg',
  /**
   * The `1` variant of the `transform` skew variants.
   */
  1: '1deg',
  /**
   * The `2` variant of the `transform` skew variants.
   */
  2: '2deg',
  /**
   * The `3` variant of the `transform` skew variants.
   */
  3: '3deg',
  /**
   * The `4` variant of the `transform` skew variants.
   */
  4: '4deg',
  /**
   * The `5` variant of the `transform` skew variants.
   */
  5: '5deg',
  /**
   * The `6` variant of the `transform` skew variants.
   */
  6: '6deg',
  /**
   * The `7` variant of the `transform` skew variants.
   */
  7: '7deg',
  /**
   * The `8` variant of the `transform` skew variants.
   */
  8: '8deg',
  /**
   * The `9` variant of the `transform` skew variants.
   */
  9: '9deg',
  /**
   * The `1` variant of the `transform` skew variants.
   */
  10: '10deg',
  /**
   * The `1` variant of the `transform` skew variants.
   */
  11: '11deg',
  /**
   * The `1` variant of the `transform` skew variants.
   */
  12: '12deg',
};

/**
 * The `IMap` of the `transform` skew variants.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `skew` export of this file instead.
 */
const __map = createMap('skew', skews);

/**
 * A readonly copy of the `transform` skew variants.
 */
export const skew: Readonly<typeof skews> = Object.assign({}, skews);

//  export individual styles

/**
 * The `0` variant of the `transform` skew variants.
 */
export const skew0 = skew[0];

/**
 * The `1` variant of the `transform` skew variants.
 */
export const skew1 = skew[1];

/**
 * The `2` variant of the `transform` skew variants.
 */
export const skew2 = skew[2];

/**
 * The `3` variant of the `transform` skew variants.
 */
export const skew3 = skew[3];

/**
 * The `4` variant of the `transform` skew variants.
 */
export const skew4 = skew[4];

/**
 * The `5` variant of the `transform` skew variants.
 */
export const skew5 = skew[5];

/**
 * The `6` variant of the `transform` skew variants.
 */
export const skew6 = skew[6];

/**
 * The `7` variant of the `transform` skew variants.
 */
export const skew7 = skew[7];

/**
 * The `8` variant of the `transform` skew variants.
 */
export const skew8 = skew[8];

/**
 * The `9` variant of the `transform` skew variants.
 */
export const skew9 = skew[9];

/**
 * The `1` variant of the `transform` skew variants.
 */
export const skew10 = skew[10];

/**
 * The `1` variant of the `transform` skew variants.
 */
export const skew11 = skew[11];

/**
 * The `1` variant of the `transform` skew variants.
 */
export const skew12 = skew[12];

//  export the map so SASS generators can use it.
export default __map;
