import { createMap } from "../../util";

/**
 * The simple `grid-column[-[start|end]]` variants map.
 */
const gridColumn = {
  /**
   * The `auto` variant of the `grid-column[-[start|end]]`.
   */
  auto: 'auto',
  /**
   * The `1` variant of the `grid-column[-[start|end]]`.
   */
  1: 'span 1 / span 1',
  /**
   * The `2` variant of the `grid-column[-[start|end]]`.
   */
  2: 'span 2 / span 2',
  /**
   * The `3` variant of the `grid-column[-[start|end]]`.
   */
  3: 'span 3 / span 3',
  /**
   * The `4` variant of the `grid-column[-[start|end]]`.
   */
  4: 'span 4 / span 4',
  /**
   * The `5` variant of the `grid-column[-[start|end]]`.
   */
  5: 'span 5 / span 5',
  /**
   * The `6` variant of the `grid-column[-[start|end]]`.
   */
  6: 'span 6 / span 6',
  /**
   * The `7` variant of the `grid-column[-[start|end]]`.
   */
  7: 'span 7 / span 7',
  /**
   * The `8` variant of the `grid-column[-[start|end]]`.
   */
  8: 'span 8 / span 8',
  /**
   * The `9` variant of the `grid-column[-[start|end]]`.
   */
  9: 'span 9 / span 9',
  /**
   * The `10` variant of the `grid-column[-[start|end]]`.
   */
  10: 'span 10 / span 10',
  /**
   * The `11` variant of the `grid-column[-[start|end]]`.
   */
  11: 'span 11 / span 11',
  /**
   * The `12` variant of the `grid-column[-[start|end]]`.
   */
  12: 'span 12 / span 12',
  /**
   * The `span1` variant of the `grid-column[-[start|end]]`.
   */
  span1: 1,
  /**
   * The `span2` variant of the `grid-column[-[start|end]]`.
   */
  span2: 2,
  /**
   * The `span3` variant of the `grid-column[-[start|end]]`.
   */
  span3: 3,
  /**
   * The `span4` variant of the `grid-column[-[start|end]]`.
   */
  span4: 4,
  /**
   * The `span5` variant of the `grid-column[-[start|end]]`.
   */
  span5: 5,
  /**
   * The `span6` variant of the `grid-column[-[start|end]]`.
   */
  span6: 6,
  /**
   * The `span7` variant of the `grid-column[-[start|end]]`.
   */
  span7: 7,
  /**
   * The `span8` variant of the `grid-column[-[start|end]]`.
   */
  span8: 8,
  /**
   * The `span9` variant of the `grid-column[-[start|end]]`.
   */
  span9: 9,
  /**
   * The `span10` variant of the `grid-column[-[start|end]]`.
   */
  span10: 10,
  /**
   * The `span11` variant of the `grid-column[-[start|end]]`.
   */
  span11: 11,
  /**
   * The `span12` variant of the `grid-column[-[start|end]]`.
   */
  span12: 12,
  /**
   * The `span13` variant of the `grid-column[-[start|end]]`.
   */
  span13: 13,
};

/**
 * The `IMap` of the `grid-column[-[start|end]]` variants.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `columnSpan` export of this file instead.
 */
const __map = createMap('columnSpan', gridColumn);

/**
 * A readonly copy of the `grid-column[-[start|end]]` variants.
 */
export const columnSpan: Readonly<typeof gridColumn> = Object.assign({}, gridColumn);

//  export individual styles

/**
 * The `auto` variant of the `grid-column[-[start|end]]` variants.
 */
export const colAuto = columnSpan.auto;

/**
 * The `1` variant of the `grid-column[-[start|end]]` variants.
 */
export const col1 = columnSpan[1];

/**
 * The `2` variant of the `grid-column[-[start|end]]` variants.
 */
export const col2 = columnSpan[2];

/**
 * The `3` variant of the `grid-column[-[start|end]]` variants.
 */
export const col3 = columnSpan[3];

/**
 * The `4` variant of the `grid-column[-[start|end]]` variants.
 */
export const col4 = columnSpan[4];

/**
 * The `5` variant of the `grid-column[-[start|end]]` variants.
 */
export const col5 = columnSpan[5];

/**
 * The `6` variant of the `grid-column[-[start|end]]` variants.
 */
export const col6 = columnSpan[6];

/**
 * The `7` variant of the `grid-column[-[start|end]]` variants.
 */
export const col7 = columnSpan[7];

/**
 * The `8` variant of the `grid-column[-[start|end]]` variants.
 */
export const col8 = columnSpan[8];

/**
 * The `9` variant of the `grid-column[-[start|end]]` variants.
 */
export const col9 = columnSpan[9];

/**
 * The `10` variant of the `grid-column[-[start|end]]` variants.
 */
export const col10 = columnSpan[10];

/**
 * The `11` variant of the `grid-column[-[start|end]]` variants.
 */
export const col11 = columnSpan[11];

/**
 * The `12` variant of the `grid-column[-[start|end]]` variants.
 */
export const col12 = columnSpan[12];

/**
 * The `span1` variant of the `grid-column[-[start|end]]` variants.
 */
export const colSpan1 = columnSpan.span1;

/**
 * The `span2` variant of the `grid-column[-[start|end]]` variants.
 */
export const colSpan2 = columnSpan.span2;

/**
 * The `span3` variant of the `grid-column[-[start|end]]` variants.
 */
export const colSpan3 = columnSpan.span3;

/**
 * The `span4` variant of the `grid-column[-[start|end]]` variants.
 */
export const colSpan4 = columnSpan.span4;

/**
 * The `span5` variant of the `grid-column[-[start|end]]` variants.
 */
export const colSpan5 = columnSpan.span5;

/**
 * The `span6` variant of the `grid-column[-[start|end]]` variants.
 */
export const colSpan6 = columnSpan.span6;

/**
 * The `span7` variant of the `grid-column[-[start|end]]` variants.
 */
export const colSpan7 = columnSpan.span7;

/**
 * The `span8` variant of the `grid-column[-[start|end]]` variants.
 */
export const colSpan8 = columnSpan.span8;

/**
 * The `span9` variant of the `grid-column[-[start|end]]` variants.
 */
export const colSpan9 = columnSpan.span9;

/**
 * The `span10` variant of the `grid-column[-[start|end]]` variants.
 */
export const colSpan10 = columnSpan.span10;

/**
 * The `span11` variant of the `grid-column[-[start|end]]` variants.
 */
export const colSpan11 = columnSpan.span11;

/**
 * The `span12` variant of the `grid-column[-[start|end]]` variants.
 */
export const colSpan12 = columnSpan.span12;

/**
 * The `span13` variant of the `grid-column[-[start|end]]` variants.
 */
export const colSpan13 = columnSpan.span13;

//  export the map so SASS generators can use it.
export default __map;
