import { createMap } from "../../util";

const calcTransition = (index: number): string => `${index * 200}ms` ;

/**
 * The simple transition length (`transition-duration`/`transition-delay`) map.
 */
const time = {
  /**
   * The `0` variant of the transition length (`transition-duration`/`transition-delay`) variants.
   */
  0: calcTransition(0),
  /**
   * The `1` variant of the transition length (`transition-duration`/`transition-delay`) variants.
   */
  1: calcTransition(1),
  /**
   * The `2` variant of the transition length (`transition-duration`/`transition-delay`) variants.
   */
  2: calcTransition(2),
  /**
   * The `3` variant of the transition length (`transition-duration`/`transition-delay`) variants.
   */
  3: calcTransition(3),
  /**
   * The `4` variant of the transition length (`transition-duration`/`transition-delay`) variants.
   */
  4: calcTransition(4),
  /**
   * The `5` variant of the transition length (`transition-duration`/`transition-delay`) variants.
   */
  5: calcTransition(5),
};

/**
 * The `IMap` of the transition length (`transition-duration`/`transition-delay`) variants.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `length` export of this file instead.
 */
const __map = createMap('length', time);

/**
 * A readonly copy of the `transition length (`transition-duration`/`transition-delay`) variants.
 */
export const length: Readonly<typeof time> = Object.assign({}, time);

//  export individual styles

/**
 * The `0` variant of the transition length (`transition-duration`/`transition-delay`) variants.
 */
export const length0 = length[0];

/**
 * The `1` variant of the transition length (`transition-duration`/`transition-delay`) variants.
 */
export const length1 = length[1];

/**
 * The `2` variant of the transition length (`transition-duration`/`transition-delay`) variants.
 */
export const length2 = length[2];

/**
 * The `3` variant of the transition length (`transition-duration`/`transition-delay`) variants.
 */
export const length3 = length[3];

/**
 * The `4` variant of the transition length (`transition-duration`/`transition-delay`) variants.
 */
export const length4 = length[4];

/**
 * The `5` variant of the transition length (`transition-duration`/`transition-delay`) variants.
 */
export const length5 = length[5];

//  export the map so SASS generators can use it.
export default __map;
