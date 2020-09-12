import { createMap } from "../../util";

/**
 * The simple `grid-template-columns` variants map.
 */
const templateColumns = {
  /**
   * The `0` variant of the `grid-template-columns` variants.
   */
  0: 'none',
  /**
   * The `1` variant of the `grid-template-columns` variants.
   */
  1: 'repeat(1, minmax(0, 1fr))',
  /**
   * The `2` variant of the `grid-template-columns` variants.
   */
  2: 'repeat(2, minmax(0, 1fr))',
  /**
   * The `3` variant of the `grid-template-columns` variants.
   */
  3: 'repeat(3, minmax(0, 1fr))',
  /**
   * The `4` variant of the `grid-template-columns` variants.
   */
  4: 'repeat(4, minmax(0, 1fr))',
  /**
   * The `5` variant of the `grid-template-columns` variants.
   */
  5: 'repeat(5, minmax(0, 1fr))',
  /**
   * The `6` variant of the `grid-template-columns` variants.
   */
  6: 'repeat(6, minmax(0, 1fr))',
  /**
   * The `7` variant of the `grid-template-columns` variants.
   */
  7: 'repeat(7, minmax(0, 1fr))',
  /**
   * The `8` variant of the `grid-template-columns` variants.
   */
  8: 'repeat(8, minmax(0, 1fr))',
  /**
   * The `9` variant of the `grid-template-columns` variants.
   */
  9: 'repeat(9, minmax(0, 1fr))',
  /**
   * The `10` variant of the `grid-template-columns` variants.
   */
  10: 'repeat(10, minmax(0, 1fr))',
  /**
   * The `11` variant of the `grid-template-columns` variants.
   */
  11: 'repeat(11, minmax(0, 1fr))',
  /**
   * The `12` variant of the `grid-template-columns` variants.
   */
  12: 'repeat(12, minmax(0, 1fr))',
};

/**
 * The `IMap` of the `grid-template-columns` variants.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `columns` export of this file instead.
 */
const __map = createMap('cols', templateColumns);

/**
 * A readonly copy of the `grid-template-columns` variants.
 */
export const columns: Readonly<typeof templateColumns> = Object.assign({}, templateColumns);

//  export individual styles

/**
 * The `0` variant of the `grid-template-columns` variants.
 */
export const columns0 = columns[0];

/**
 * The `1` variant of the `grid-template-columns` variants.
 */
export const columns1 = columns[1];

/**
 * The `2` variant of the `grid-template-columns` variants.
 */
export const columns2 = columns[2];

/**
 * The `3` variant of the `grid-template-columns` variants.
 */
export const columns3 = columns[3];

/**
 * The `4` variant of the `grid-template-columns` variants.
 */
export const columns4 = columns[4];

/**
 * The `5` variant of the `grid-template-columns` variants.
 */
export const columns5 = columns[5];

/**
 * The `6` variant of the `grid-template-columns` variants.
 */
export const columns6 = columns[6];

/**
 * The `7` variant of the `grid-template-columns` variants.
 */
export const columns7 = columns[7];

/**
 * The `8` variant of the `grid-template-columns` variants.
 */
export const columns8 = columns[8];

/**
 * The `9` variant of the `grid-template-columns` variants.
 */
export const columns9 = columns[9];

/**
 * The `10` variant of the `grid-template-columns` variants.
 */
export const columns10 = columns[10];

/**
 * The `11` variant of the `grid-template-columns` variants.
 */
export const columns11 = columns[11];

/**
 * The `12` variant of the `grid-template-columns` variants.
 */
export const columns12 = columns[12];

//  export the map so SASS generators can use it.
export default __map;
