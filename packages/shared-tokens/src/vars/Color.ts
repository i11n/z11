import {
  _blueMap,
  _cyanMap,
  _displayMap,
  _grayMap,
  _greenMap,
  _indigoMap,
  _magentaMap,
  _orangeMap,
  _purpleMap,
  _redMap,
  _tealMap,
  _translucentMap,
  _yellowMap,
  blue as blueMap,
  cyan as cyanMap,
  display as displayMap,
  gray as grayMap,
  green as greenMap,
  indigo as indigoMap,
  magenta as magentaMap,
  orange as orangeMap,
  purple as purpleMap,
  red as redMap,
  teal as tealMap,
  translucent as translucentMap,
  yellow as yellowMap,
} from './color-variants';
import { createCollection } from '../util';

/** 
 * The simple color palette collection.
*/
const colors = {  
  /**
   * The `blue` variants of the color palette.
   */
  blue: _blueMap,
  /**
   * The `cyan` variants of the color palette.
   */
  cyan: _cyanMap,
  /**
   * The `display` variants of the color palette.
   */
  display: _displayMap,
  /**
   * The `gray` variants of the color palette.
   */
  gray: _grayMap,
  /**
   * The `green` variants of the color palette.
   */
  green: _greenMap,
  /**
   * The `indigo` variants of the color palette.
   */
  indigo: _indigoMap,
  /**
   * The `magenta` variants of the color palette.
   */
  magenta: _magentaMap,
  /**
   * The `orange` variants of the color palette.
   */
  orange: _orangeMap,
  /**
   * The `purple` variants of the color palette.
   */
  purple: _purpleMap,
  /**
   * The `red` variants of the color palette.
   */
  red: _redMap,
  /**
   * The `teal` variants of the color palette.
   */
  teal: _tealMap,
  /**
   * The `translucent` variants of the color palette.
   */
  translucent: _translucentMap,
  /**
   * The `yellow` variants of the color palette.
   */
  yellow: _yellowMap,
};

/**
 * The collected color palette.
 */
const __collection = createCollection('color', colors);

const Colors = {
  blue: blueMap,
  cyan: cyanMap,
  display: displayMap,
  gray: grayMap,
  green: greenMap,
  indigo: indigoMap,
  magenta: magentaMap,
  orange: orangeMap,
  purple: purpleMap,
  red: redMap,
  teal: tealMap,
  translucent: translucentMap,
  yellow: yellowMap,
}
/**
 * A readonly copy of the color palette collection.
 */
export const Color: Readonly<typeof Colors> = Object.assign({}, Colors);

/**
 * The `blue` variants of the color palette.
 */
export const blue = blueMap;

/**
 * The `cyan` variants of the color palette.
 */
export const cyan = cyanMap;

/**
 * The `display` variants of the color palette.
 */
export const display = displayMap;

/**
 * The `gray` variants of the color palette.
 */
export const gray = grayMap;

/**
 * The `green` variants of the color palette.
 */
export const green = greenMap;

/**
 * The `indigo` variants of the color palette.
 */
export const indigo = indigoMap;

/**
 * The `magenta` variants of the color palette.
 */
export const magenta = magentaMap;

/**
 * The `orange` variants of the color palette.
 */
export const orange = orangeMap;

/**
 * The `purple` variants of the color palette.
 */
export const purple = purpleMap;

/**
 * The `red` variants of the color palette.
 */
export const red = redMap;

/**
 * The `teal` variants of the color palette.
 */
export const teal = tealMap;

/**
 * The `translucent` variants of the color palette.
 */
export const translucent = translucentMap;

/**
 * The `yellow` variants of the color palette.
 */
export const yellow = yellowMap;

//  export the collection so SASS generators can use it.
export default __collection;
