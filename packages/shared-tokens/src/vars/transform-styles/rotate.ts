import { createMap } from "../../util";

const calcRotation = (index: number): string => `${index * 45}deg` ;

/**
 * The simple `tranform` rotate variants.
 */
const rotation = {
  /**
   * The `0` variant of the `transform` rotate variants.
   */
  0: calcRotation(0),
  /**
   * The `1` variant of the `transform` rotate variants.
   */
  1: calcRotation(1),
  /**
   * The `2` variant of the `transform` rotate variants.
   */
  2: calcRotation(2),
  /**
   * The `3` variant of the `transform` rotate variants.
   */
  3: calcRotation(3),
  /**
   * The `4` variant of the `transform` rotate variants.
   */
  4: calcRotation(4),
  /**
   * The `5` variant of the `transform` rotate variants.
   */
  5: calcRotation(5),
  /**
   * The `6` variant of the `transform` rotate variants.
   */
  6: calcRotation(6),
  /**
   * The `7` variant of the `transform` rotate variants.
   */
  7: calcRotation(7),
  /**
   * The `8` variant of the `transform` rotate variants.
   */
  8: calcRotation(8),
};

/**
 * The `IMap` of the `tranform` rotate variants.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `rotate` export of this file instead.
 */
const __map = createMap('rotate', rotation);

/**
 * A readonly copy of the `tranform` rotate variants.
 */
export const rotate: Readonly<typeof rotation> = Object.assign({}, rotation);

//  export individual styles

/**
 * The `0` variant of the `transform` rotate variants.
 */
export const rotate0 = rotate[0];

/**
 * The `1` variant of the `transform` rotate variants.
 */
export const rotate1 = rotate[1];

/**
 * The `2` variant of the `transform` rotate variants.
 */
export const rotate2 = rotate[2];

/**
 * The `3` variant of the `transform` rotate variants.
 */
export const rotate3 = rotate[3];

/**
 * The `4` variant of the `transform` rotate variants.
 */
export const rotate4 = rotate[4];

/**
 * The `5` variant of the `transform` rotate variants.
 */
export const rotate5 = rotate[5];

/**
 * The `6` variant of the `transform` rotate variants.
 */
export const rotate6 = rotate[6];

/**
 * The `7` variant of the `transform` rotate variants.
 */
export const rotate7 = rotate[7];

/**
 * The `8` variant of the `transform` rotate variants.
 */
export const rotate8 = rotate[8];

//  export the map so SASS generators can use it.
export default __map;
