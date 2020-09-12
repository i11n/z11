import {
  _familyMap,
  _leadingMap,
  _lgSizeMap,
  _mdSizeMap,
  _sizeMap,
  _trackingMap,
  _xlSizeMap,
  family as familyMap,
  leading as leadingMap,
  lgSize as lgSizeMap,
  mdSize as mdSizeMap,
  size as sizeMap,
  tracking as trackingMap,
  xlSize as xlSizeMap,
} from './font-styles';
import { createCollection } from '../util';

/** 
 * The simple font styles collection.
*/
const font = {
  /**
   * The `font-family` styles of the font styles.
   */
  family: _familyMap,
  /**
   * The `line-height` variants of the font styles.
   */
  leading: _leadingMap,
  /**
   * The large screen `font-size` variants of the font styles.
   */
  lgSize: _lgSizeMap,
  /**
   * The medium screen `font-size` variants of the font styles.
   */
  mdSize: _mdSizeMap,
  /**
   * The base screen `font-size` variants of the font styles.
   */
  size: _sizeMap,
  /**
   * The `letter-spacing` variants of the font styles.
   */
  tracking: _trackingMap,
  /**
   * The extra-large screen `font-size` variants of the font styles.
   */
  xlSize: _xlSizeMap,
};

const fontMap = {
  family: familyMap,
  leading: leadingMap,
  lgSize: lgSizeMap,
  mdSize: mdSizeMap,
  size: sizeMap,
  tracking: trackingMap,
  xlSize: xlSizeMap,
};

/**
 * The collected font styles.
 */
const __collection = createCollection('font', font);

/**
 * A readonly copy of the font styles collection.
 */
export const Font: Readonly<typeof fontMap> = Object.assign({}, fontMap);

/**
 * The `font-family` styles of the font styles.
 */
export const family = familyMap;

/**
 * The `line-height` variants of the font styles.
 */
export const leading = leadingMap;

/**
 * The large screen `font-size` variants of the font styles.
 */
export const lgSize = lgSizeMap;

/**
 * The medium screen `font-size` variants of the font styles.
 */
export const mdSize = mdSizeMap;

/**
 * The base screen `font-size` variants of the font styles.
 */
export const size = sizeMap;

/**
 * The `letter-spacing` variants of the font styles.
 */
export const tracking = trackingMap;

/**
 * The extra-large screen `font-size` variants of the font styles.
 */
export const xlSize = xlSizeMap;

//  export the collection so SASS generators can use it.
export default __collection;
