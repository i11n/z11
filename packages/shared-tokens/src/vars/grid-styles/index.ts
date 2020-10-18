import { gridColumnSpan as _gridColumnSpan } from './column-span';
import { gridTemplateColumns as _gridTemplateColumns } from './template-columns';
import { gridRowSpan as _gridRowSpan } from './row-span';
import { gridTemplateRows as _gridTemplateRows } from './template-rows';
import { gridColumnPosition as _gridColumnPosition } from './column-position';
import { gridRowPosition as _gridRowPosition } from './row-position';

export const gridColSpan = _gridColumnSpan;
export const gridCols = _gridTemplateColumns;
export const gridRowSpan = _gridRowSpan;
export const gridRows = _gridTemplateRows;
export const gridColPos = _gridColumnPosition;
export const gridRowPos = _gridRowPosition;

export const grid = {
  colSpan: gridColSpan,
  cols: gridCols,
  rowSpan: gridRowSpan,
  rows: gridRows,
  colPos: gridColPos,
  rowPos: gridRowPos,
};
