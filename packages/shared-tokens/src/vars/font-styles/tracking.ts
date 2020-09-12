import { createMap } from "../../util";

/**
 * The simple `letter-spacing` variants map.
 */
const variants = {
  /**
   * The `loosest` variant of the `letter-spacing` variants.
   */
  loosest: `${(.001 * 12) * 2 * 2 * 2}rem`,
  /**
   * The `looser` variant of the `letter-spacing` variants.
   */
  looser: `${(.001 * 12) * 2 * 2}rem`,
  /**
   * The `loose` variant of the `letter-spacing` variants.
   */
  loose: `${(.001 * 12) * 2}rem`,
  /**
   * The `normal` variant of the `letter-spacing` variants.
   */
  normal: 0,
  /**
   * The `tight` variant of the `letter-spacing` variants.
   */
  tight: `-${(.001 * 12) * 2}rem`,
  /**
   * The `tighter` variant of the `letter-spacing` variants.
   */
  tighter: `-${(.001 * 12) * 2 * 2}rem`,
  /**
   * The `tightest` variant of the `letter-spacing` variants.
   */
  tightest: `-${(.001 * 12) * 2 * 2 * 2}rem`,
};

/**
 * The `IMap` of the `letter-spacing` variants.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `tracking` export of this file instead.
 */
const __map = createMap('tracking', variants);

/**
 * A readonly copy of the `letter-spacing` styles.
 */
export const tracking: Readonly<typeof variants> = Object.assign({}, variants);

//  export individual styles

/**
 * The `loosest` variant of the `letter-spacing` variants.
 */
export const loosest = tracking.loosest;

/**
 * The `looser` variant of the `letter-spacing` variants.
 */
export const looser = tracking.looser;

/**
 * The `loose` variant of the `letter-spacing` variants.
 */
export const loose = tracking.loose;

/**
 * The `normal` variant of the `letter-spacing` variants.
 */
export const normal = tracking.normal;

/**
 * The `tight` variant of the `letter-spacing` variants.
 */
export const tight = tracking.tight;

/**
 * The `tighter` variant of the `letter-spacing` variants.
 */
export const tighter = tracking.tighter;

/**
 * The `tightest` variant of the `letter-spacing` variants.
 */
export const tightest = tracking.tightest;

//  export the map so SASS generators can use it.
export default __map;
