import { createMap } from "../../util";

/**
 * The simple `grid-template-rows` variants map.
 */
const templateRows = {
  /**
   * The `0` variant of the grid-template-rows` variants.
   */
  0: 'repeat(0, minmax(0, 1fr))',
  /**
   * The `1` variant of the grid-template-rows` variants.
   */
  1: 'repeat(1, minmax(0, 1fr))',
  /**
   * The `2` variant of the grid-template-rows` variants.
   */
  2: 'repeat(2, minmax(0, 1fr))',
  /**
   * The `3` variant of the grid-template-rows` variants.
   */
  3: 'repeat(3, minmax(0, 1fr))',
  /**
   * The `4` variant of the grid-template-rows` variants.
   */
  4: 'repeat(4, minmax(0, 1fr))',
  /**
   * The `5` variant of the grid-template-rows` variants.
   */
  5: 'repeat(5, minmax(0, 1fr))',
  /**
   * The `6` variant of the grid-template-rows` variants.
   */
  6: 'repeat(6, minmax(0, 1fr))',
};

/**
 * The `IMap` of the `grid-template-rows` variants.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `rows` export of this file instead.
 */
const __map = createMap('rows', templateRows);

/**
 * A readonly copy of the `grid-template-rows` variants.
 */
export const rows: Readonly<typeof templateRows> = Object.assign({}, templateRows);

//  export individual styles

/**
 * The `0` variant of the grid-template-rows` variants.
 */
export const rows0 = rows[0];

/**
 * The `1` variant of the grid-template-rows` variants.
 */
export const rows1 = rows[1];

/**
 * The `2` variant of the grid-template-rows` variants.
 */
export const rows2 = rows[2];

/**
 * The `3` variant of the grid-template-rows` variants.
 */
export const rows3 = rows[3];

/**
 * The `4` variant of the grid-template-rows` variants.
 */
export const rows4 = rows[4];

/**
 * The `5` variant of the grid-template-rows` variants.
 */
export const rows5 = rows[5];

/**
 * The `6` variant of the grid-template-rows` variants.
 */
export const rows6 = rows[6];

//  export the map so SASS generators can use it.
export default __map;
