import { createMap } from "../../util";

/**
 * The simple `translucent` color variant's map.
 */
const variants = {
  white5: "rgba(255, 255, 255, 0.05)",
  white10: "rgba(255, 255, 255, 0.1)",
  white15: "rgba(255, 255, 255, 0.15)",
  white20: "rgba(255, 255, 255, 0.2)",
  white25: "rgba(255, 255, 255, 0.25)",
  black5: "rgba(0, 0, 0, 0.05)",
  black10: "rgba(0, 0, 0, 0.1)",
  black15: "rgba(0, 0, 0, 0.15)",
  black20: "rgba(0, 0, 0, 0.2)",
  black25: "rgba(0, 0, 0, 0.25)",
  transparent: "transparent",
};

/**
 * The mapped `translucent` color variants.
 */
const __map = createMap('translucent', variants);

/**
 * A readonly copy of the `translucent` color variant's map.
 * 
 * **Properties**
 * `white5` - `rgba(255, 255, 255, 0.05)`
 * `white10` - `rgba(255, 255, 255, 0.1)`
 * `white15` - `rgba(255, 255, 255, 0.15)`
 * `white20` - `rgba(255, 255, 255, 0.2)`
 * `white25` - `rgba(255, 255, 255, 0.25)`
 * `black5` - `rgba(0, 0, 0, 0.05)`
 * `black10` - `rgba(0, 0, 0, 0.1)`
 * `black15` - `rgba(0, 0, 0, 0.15)`
 * `black20` - `rgba(0, 0, 0, 0.2)`
 * `black25` - `rgba(0, 0, 0, 0.25)`
 * `transparent` - `transparent`
 */
export const translucent: Readonly<typeof variants> = Object.assign({}, variants);

//  export individual colors


/**
 * The level `white5` variant of the `translucent` variants.
 */
export const white5 = translucent.white5;

/**
 * The level `white10` variant of the `translucent` variants.
 */
export const white10 = translucent.white10;

/**
 * The level `white15` variant of the `translucent` variants.
 */
export const white15 = translucent.white15;

/**
 * The level `white20` variant of the `translucent` variants.
 */
export const white20 = translucent.white20;

/**
 * The level `white25` variant of the `translucent` variants.
 */
export const white25 = translucent.white25;

/**
 * The level `black5` variant of the `translucent` variants.
 */
export const black5 = translucent.black5;

/**
 * The level `black10` variant of the `translucent` variants.
 */
export const black10 = translucent.black10;

/**
 * The level `black15` variant of the `translucent` variants.
 */
export const black15 = translucent.black15;

/**
 * The level `black20` variant of the `translucent` variants.
 */
export const black20 = translucent.black20;

/**
 * The level `black25` variant of the `translucent` variants.
 */
export const black25 = translucent.black25;

/**
 * The level `transparent` variant of the `translucent` variants.
 */
export const transparent = translucent.transparent;

//  export the map so SASS generators can use it.
export default __map;
