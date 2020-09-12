import { createMap } from "../util";

/**
 * The `z-index` variants map.
 */
const zindex = {
  /**
   * The `0` variant of the `z-index` variants.
   */
  0: 0,
  /**
   * The `1` variant of the `z-index` variants.
   */
  1: 10,
  /**
   * The `2` variant of the `z-index` variants.
   */
  2: 20,
  /**
   * The `3` variant of the `z-index` variants.
   */
  3: 30,
  /**
   * The `4` variant of the `z-index` variants.
   */
  4: 40,
  /**
   * The `5` variant of the `z-index` variants.
   */
  5: 50,
  /**
   * The `6` variant of the `z-index` variants.
   */
  6: 60,
  /**
   * The `7` variant of the `z-index` variants.
   */
  7: 70,
  /**
   * The `8` variant of the `z-index` variants.
   */
  8: 80,
  /**
   * The `9` variant of the `z-index` variants.
   */
  9: 90,
  /**
   * The `10` variant of the `z-index` variants.
   */
  10: 100,
  /**
   * The `auto` variant of the `z-index` variants.
   */
  auto: 'auto',
};

/**
 * The `IMap` of the `z-index` variants.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `ZIndex` export of this file instead.
 */
const __map = createMap('zindex', zindex);

/**
 * A readonly copy of the `z-index` variants.
 */
export const ZIndex: Readonly<typeof zindex> = Object.assign({}, zindex);

//  export individual styles

/**
 * The `0` variant of the `z-index` variants.
 */
export const zIndex0 = ZIndex[0];

/**
 * The `1` variant of the `z-index` variants.
 */
export const zIndex1 = ZIndex[1];

/**
 * The `2` variant of the `z-index` variants.
 */
export const zIndex2 = ZIndex[2];

/**
 * The `3` variant of the `z-index` variants.
 */
export const zIndex3 = ZIndex[3];

/**
 * The `4` variant of the `z-index` variants.
 */
export const zIndex4 = ZIndex[4];

/**
 * The `5` variant of the `z-index` variants.
 */
export const zIndex5 = ZIndex[5];

/**
 * The `6` variant of the `z-index` variants.
 */
export const zIndex6 = ZIndex[6];

/**
 * The `7` variant of the `z-index` variants.
 */
export const zIndex7 = ZIndex[7];

/**
 * The `8` variant of the `z-index` variants.
 */
export const zIndex8 = ZIndex[8];

/**
 * The `9` variant of the `z-index` variants.
 */
export const zIndex9 = ZIndex[9];

/**
 * The `10` variant of the `z-index` variants.
 */
export const zIndex10 = ZIndex[10];

/**
 * The `auto` variant of the `z-index` variants.
 */
export const zIndexAuto = ZIndex.auto;

//  export the map so SASS generators can use it.
export default __map;
