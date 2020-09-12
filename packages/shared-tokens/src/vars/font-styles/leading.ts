import { createMap } from "../../util";
/**
 * The base `line-height` that variants are calculated on.
 */
const NORMAL = parseFloat(Math.sqrt(2).toFixed(4));

/**
 * The simple `line-height` variants map.
 */
const variants = {
  /**
   * The `loosest` variant of the `line-height` variants.
   */
  loosest: 1 * 1.12,
  /**
   * The `double` variant of the `line-height` variants.
   */
  double: 2,
  /**
   * The `looser` variant of the `line-height` variants.
   */
  looser: ((NORMAL * 1.12) * 1.12).toFixed(4),
  /**
   * The `loose` variant of the `line-height` variants.
   */
  loose: (NORMAL * 1.12).toFixed(4),
  /**
   * The `normal` variant of the `line-height` variants.
   */
  normal: NORMAL,
  /**
   * The `tight` variant of the `line-height` variants.
   */
  tight: (NORMAL * 0.88).toFixed(4),
  /**
   * The `tighter` variant of the `line-height` variants.
   */
  tighter: ((NORMAL * 0.88) * 0.88).toFixed(4),
  /**
   * The `none` variant of the `line-height` variants.
   */
  none: 1,
  /**
   * The `tightest` variant of the `line-height` variants.
   */
  tightest: 0.88,
};

/**
 * The `IMap` of the `line-height` variants.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `leading` export of this file instead.
 */
const __map = createMap('leading', variants);

/**
 * A readonly copy of the `font-family` styles.
 */
export const leading: Readonly<typeof variants> = Object.assign({}, variants);

//  export individual styles

/**
 * The `loosest` variant of the `line-height` variants.
 */
export const loosest = leading.loosest;
/**
 * The `double` variant of the `line-height` variants.
 */
export const double = leading.double;
/**
 * The `looser` variant of the `line-height` variants.
 */
export const looser = leading.looser;
/**
 * The `loose` variant of the `line-height` variants.
 */
export const loose = leading.loose;
/**
 * The `normal` variant of the `line-height` variants.
 */
export const normal = leading.normal;
/**
 * The `tight` variant of the `line-height` variants.
 */
export const tight = leading.tight;
/**
 * The `tighter` variant of the `line-height` variants.
 */
export const tighter = leading.tighter;
/**
 * The `none` variant of the `line-height` variants.
 */
export const none = leading.none;
/**
 * The `tightest` variant of the `line-height` variants.
 */
export const tightest = leading.tightest;

//  export the map so SASS generators can use it.
export default __map;
