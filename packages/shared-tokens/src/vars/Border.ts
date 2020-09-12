import {
  _radiusMap,
  _widthMap,
  width as widthMap,
  radius as radiusMap,
  
} from './border-styles';

import { createCollection } from '../util';

/** 
 * The simple border style collection.
*/
const border = {
  /**
   * The `border-width` variants.
   */
  width: _widthMap,
  /**
   * The `border-radius` variants.
   */
  radius: _radiusMap,
};

const borderMap = {
  width: widthMap,
  radius: radiusMap,
};

/**
 * The collected border styles.
 */
const __collection = createCollection('border', border);

/**
 * A readonly copy of the border styles.
 */
export const Border: Readonly<typeof borderMap> = Object.assign({}, borderMap);

/**
 * The `border-width` variants.
 */
export const width = widthMap;

/**
 * The `border-radius` variants.
 */
export const radius = radiusMap;

//  export the collection so SASS generators can use it.
export default __collection;
