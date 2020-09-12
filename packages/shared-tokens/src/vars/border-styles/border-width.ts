import { createMap } from "../../util";

/**
 * The simple `border-width` variants map.
 */
const borderWidth = {
  /**
   * The `0` variant of the `border-width` variants.
   */
  0: '0px',
  /**
   * The `1` variant of the `border-width` variants.
   */
  1: '1px',
  /**
   * The `2` variant of the `border-width` variants.
   */
  2: '2px',
  /**
   * The `3` variant of the `border-width` variants.
   */
  3: '3px',
  /**
   * The `4` variant of the `border-width` variants.
   */
  4: '4px',
  /**
   * The `5` variant of the `border-width` variants.
   */
  5: '5px',
};

/**
 * The `IMap` of the `border-width` variants.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `width` export of this file instead.
 */
const __map = createMap('width', borderWidth);

/**
 * A readonly copy of the `border-width` variants.
 */
export const width: Readonly<typeof borderWidth> = Object.assign({}, borderWidth);

//  export individual styles

/**
 * The `0` variant of the `border-width` variants.
 */
export const width0 = width[0];

/**
 * The `1` variant of the `border-width` variants.
 */
export const width1 = width[1];

/**
 * The `2` variant of the `border-width` variants.
 */
export const width2 = width[2];

/**
 * The `3` variant of the `border-width` variants.
 */
export const width3 = width[3];

/**
 * The `4` variant of the `border-width` variants.
 */
export const width4 = width[4];

/**
 * The `5` variant of the `border-width` variants.
 */
export const width5 = width[5];

//  export the map so SASS generators can use it.
export default __map;
