import { createMap } from "../../util";

/**
 * The simple `grid-row[-[start|end]]` variants map.
 */
const gridRow = {
  /**
   * The `auto` variant of the `grid-row[-[start|end]]`.
   */
  auto: 'auto',
  /**
   * The `1` variant of the `grid-row[-[start|end]]`.
   */
  1: 'span 1 / span 1',
  /**
   * The `2` variant of the `grid-row[-[start|end]]`.
   */
  2: 'span 2 / span 2',
  /**
   * The `3` variant of the `grid-row[-[start|end]]`.
   */
  3: 'span 3 / span 3',
  /**
   * The `4` variant of the `grid-row[-[start|end]]`.
   */
  4: 'span 4 / span 4',
  /**
   * The `5` variant of the `grid-row[-[start|end]]`.
   */
  5: 'span 5 / span 5',
  /**
   * The `6` variant of the `grid-row[-[start|end]]`.
   */
  6: 'span 6 / span 6',
  /**
   * The `span1` variant of the `grid-row[-[start|end]]`.
   */
  span1: 1,
  /**
   * The `span2` variant of the `grid-row[-[start|end]]`.
   */
  span2: 2,
  /**
   * The `span3` variant of the `grid-row[-[start|end]]`.
   */
  span3: 3,
  /**
   * The `span4` variant of the `grid-row[-[start|end]]`.
   */
  span4: 4,
  /**
   * The `span5` variant of the `grid-row[-[start|end]]`.
   */
  span5: 5,
  /**
   * The `span6` variant of the `grid-row[-[start|end]]`.
   */
  span6: 6,
  /**
   * The `span7` variant of the `grid-row[-[start|end]]`.
   */
  span7: 7,
};

/**
 * The `IMap` of the `grid-row[-[start|end]]` variants.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `rowSpan` export of this file instead.
 */
const __map = createMap('colSpan', gridRow);

/**
 * A readonly copy of the `grid-row[-[start|end]]` variants.
 */
export const rowSpan: Readonly<typeof gridRow> = Object.assign({}, gridRow);

//  export individual styles

/**
 * The `auto` variant of the `grid-row[-[start|end]]`.
 */
export const rowAuto = rowSpan.auto;

/**
 * The `1` variant of the `grid-row[-[start|end]]`.
 */
export const row1 = rowSpan[1];

/**
 * The `2` variant of the `grid-row[-[start|end]]`.
 */
export const row2 = rowSpan[2];

/**
 * The `3` variant of the `grid-row[-[start|end]]`.
 */
export const row3 = rowSpan[3];

/**
 * The `4` variant of the `grid-row[-[start|end]]`.
 */
export const row4 = rowSpan[4];

/**
 * The `5` variant of the `grid-row[-[start|end]]`.
 */
export const row5 = rowSpan[5];

/**
 * The `6` variant of the `grid-row[-[start|end]]`.
 */
export const row6 = rowSpan[6];

/**
 * The `span1` variant of the `grid-row[-[start|end]]`.
 */
export const rowSpan1 = rowSpan.span1;

/**
 * The `span2` variant of the `grid-row[-[start|end]]`.
 */
export const rowSpan2 = rowSpan.span2;

/**
 * The `span3` variant of the `grid-row[-[start|end]]`.
 */
export const rowSpan3 = rowSpan.span3;

/**
 * The `span4` variant of the `grid-row[-[start|end]]`.
 */
export const rowSpan4 = rowSpan.span4;
/**
 * The `span5` variant of the `grid-row[-[start|end]]`.
 */
export const rowSpan5 = rowSpan.span5;

/**
 * The `span6` variant of the `grid-row[-[start|end]]`.
 */
export const rowSpan6 = rowSpan.span6;

/**
 * The `span7` variant of the `grid-row[-[start|end]]`.
 */
export const rowSpan7 = rowSpan.span7;

//  export the map so SASS generators can use it.
export default __map;
