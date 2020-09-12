import { createMap } from "../../util";


/**
 * Calculates a `border-radius` variant based on the variant index
 * , returning a `px` `border-radius` of `index ** 2` (index squared). e.g.
 * `border-radius` variant *2* would return `"4px"`.
 * 
 * @param index The index of the `border-radius` variant to calculate.
 */
const calcRadius = (index: number) => `${index ** 2}px`;

/**
 * The simple `border-radius` variants map.
 */
const borderRadius = {
  /**
   * The `0` variant of the `border-radius` variants.
   */
  0: calcRadius(0),
  /**
   * The `1` variant of the `border-radius` variants.
   */
  1: calcRadius(1),
  /**
   * The `2` variant of the `border-radius` variants.
   */
  2: calcRadius(2),
  /**
   * The `3` variant of the `border-radius` variants.
   */
  3: calcRadius(3),
  /**
   * The `4` variant of the `border-radius` variants.
   */
  4: calcRadius(4),
  /**
   * The `5` variant of the `border-radius` variants.
   */
  5: calcRadius(5),
  /**
   * The `100` variant of the `border-radius` variants.
   */
  100: calcRadius(100),
};

/**
 * The `IMap` of the `border-radius` variants.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `radius` export of this file instead.
 */
const __map = createMap('radius', borderRadius);

/**
 * A readonly copy of the `border-radius` variants.
 */
export const radius: Readonly<typeof borderRadius> = Object.assign({}, borderRadius);

//  export individual styles

/**
 * The `0` variant of the `border-radius` variants.
 */
export const radius0 = radius[0];

/**
 * The `1` variant of the `border-radius` variants.
 */
export const radius1 = radius[1];

/**
 * The `2` variant of the `border-radius` variants.
 */
export const radius2 = radius[2];

/**
 * The `3` variant of the `border-radius` variants.
 */
export const radius3 = radius[3];

/**
 * The `4` variant of the `border-radius` variants.
 */
export const radius4 = radius[4];

/**
 * The `5` variant of the `border-radius` variants.
 */
export const radius5 = radius[5];

/**
 * The `100` variant of the `border-radius` variants.
 */
export const radius100 = radius[100];

//  export the map so SASS generators can use it.
export default __map;
