import {
  _rotateMap,
  _scaleMap,
  _skewMap,
  _translateMap,
  rotate as rotateMap,
  scale as scaleMap,
  skew as skewMap,
  translate as translateMap, 
} from './transform-styles';

import { createCollection } from '../util';

/** 
 * The simple `transform` styles collection.
*/
const transform = {
  /**
   * The `transform` rotate variants.
   */
  rotate: _rotateMap,
  /**
   * The `transform` scale variants.
   */
  scale: _scaleMap,
  /**
   * The `transform` skew variants.
   */
  skew: _skewMap,
  /**
   * The `transform` translate variants.
   */
  translate: _translateMap,
};

const transformMap = {
  rotate: rotateMap,
  scale: scaleMap,
  skew: skewMap,
  translate: translateMap, 
};

/**
 * The collected `transform` styles.
 */
const __collection = createCollection('transform', transform);

/**
 * A readonly copy of the `transform` styles.
 */
export const Transform: Readonly<typeof transformMap> = Object.assign({}, transformMap);

/**
 * The `transform` rotate variants.
 */
export const rotate = rotateMap;

/**
 * The `transform` scale variants.
 */
export const scale = scaleMap;

/**
 * The `transform` skew variants.
 */
export const skew = skewMap;

/**
 * The `transform` translate variants.
 */
export const translate = translateMap;

//  export the collection so SASS generators can use it.
export default __collection;
