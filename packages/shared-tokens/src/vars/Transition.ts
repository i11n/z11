import {
  _lengthMap,
  _propertyMap,
  length as lengthMap,
  property as propertyMap,  
} from './transition-styles';

import { createCollection } from '../util';

/** 
 * The simple transition styles collection.
*/
const transition = {
  /**
   * The `transition length (`transition-duration`/`transition-delay`) variants.
   */
  length: _lengthMap,
  /**
   * The `transition-property` variants.
   */
  property: _propertyMap,
};

const transitionMap = {
  length: lengthMap,
  property: propertyMap,  
};

/**
 * The collected transition styles.
 */
const __collection = createCollection('transition', transition);

/**
 * A readonly copy of the transition styles.
 */
export const Transition: Readonly<typeof transitionMap> = Object.assign({}, transitionMap);

/**
 * The `transition length (`transition-duration`/`transition-delay`) variants.
 */
export const length = lengthMap;

/**
 * The `transition-property` variants.
 */
export const property = propertyMap;

//  export the collection so SASS generators can use it.
export default __collection;
