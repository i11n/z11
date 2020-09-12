import {
  _columnSpanMap,
  _columnsMap,
  _rowSpanMap,
  _rowsMap,
  columnSpan as columnSpanMap,
  columns as columnsMap,
  rowSpan as rowSpanMap,
  rows as rowsMap,
  
} from './grid-styles';

import { createCollection } from '../util';

/** 
 * The simple grid style collection.
*/
const grid = {
  /**
   * The `grid-column[-[start|end]]` variants.
   */
  columnSpan: _columnSpanMap,
  /**
   * The `grid-template-columns` variants.
   */
  columns: _columnsMap,
  /**
   * The `grid-row[-[start|end]]` variants.
   */
  rowSpan: _rowSpanMap,
  /**
   * The `grid-template-rows` variants.
   */
  rows: _rowsMap,
};

const gridMap = {
  columnSpan: columnSpanMap,
  columns: columnsMap,
  rowSpan: rowSpanMap,
  rows: rowsMap,
}

/**
 * The collected grid styles.
 */
const __collection = createCollection('grid', grid);

/**
 * A readonly copy of the grid styles.
 */
export const Grid: Readonly<typeof gridMap> = Object.assign({}, gridMap);

/**
 * The `grid-column[-[start|end]]` variants.
 */
export const columnSpan = columnSpanMap;

/**
 * The `grid-template-columns` variants.
 */
export const columns = columnsMap;

/**
 * The `grid-row[-[start|end]]` variants.
 */
export const rowSpan = rowSpanMap;

/**
 * The `grid-template-rows` variants.
 */
export const rows = rowsMap;

//  export the collection so SASS generators can use it.
export default __collection;
