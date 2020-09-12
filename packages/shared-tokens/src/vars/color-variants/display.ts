import { createMap } from "../../util";

/**
 * The simple `display` color variant's map.
 */
const variants = {
  black: "#000000",
  white: "#ffffff",
};

/**
 * The mapped `display` color variants.
 */
const __map = createMap('display', variants);

/**
 * A readonly copy of the `display` color variant's map.
 * 
 * **Properties**
 * * `black`: `#000000`
 * * `white`: `#ffffff`
 */
export const display: Readonly<typeof variants> = Object.assign({}, variants);

//  export individual colors

/**
 * The `black` level of the `display` variants.
 */
export const black = display.black;

/**
 * The `white` level of the `display` variants.
 */
export const white = display.white;

//  export the map so SASS generators can use it.
export default __map;

