import { createMap } from "../../util";

/**
 * The simple `yellow` color variant's map.
 */
const variants = {
  10: "#FFFFF0",
  20: "#FEFCBF",
  30: "#FAF089",
  40: "#F6E05E",
  50: "#ECC94B",
  60: "#D69E2E",
  70: "#B87A1F",
  80: "#975A16",
  90: "#744210",
  100: "#53310F",
};

/**
 * The mapped `yellow` color variants.
 */
const __map = createMap('yellow', variants);

/**
 * A readonly copy of the `yellow` color variant's map.
 * 
 * **Properties**
 * * `10` - `#FFFFF0`
 * * `20` - `#FEFCBF`
 * * `30` - `#FAF089`
 * * `40` - `#F6E05E`
 * * `50` - `#ECC94B`
 * * `60` - `#D69E2E`
 * * `70` - `#B87A1F`
 * * `80` - `#975A16`
 * * `90` - `#744210`
 * * `100` - `#53310F`
 */
export const yellow: Readonly<typeof variants> = Object.assign({}, variants);

//  export individual colors

/**
 * The level `10` of the `yellow` color variants.
 * 
 * **Default:** `#e5f6ff`
 */
export const yellow10 = yellow[10];

/**
 * The level `20` of the `yellow` color variants.
 * 
 * **Default:** `#bae6ff`
 */
export const yellow20 = yellow[20];

/**
 * The level `30` of the `yellow` color variants.
 * 
 * **Default:** `#82cfff`
 */
export const yellow30 = yellow[30];

/**
 * The level `40` of the `yellow` color variants.
 * 
 * **Default:** `#33b1ff`
 */
export const yellow40 = yellow[40];

/**
 * The level `50` of the `yellow` color variants.
 * 
 * **Default:** `#1192e8`
 */
export const yellow50 = yellow[50];

/**
 * The level `60` of the `yellow` color variants.
 * 
 * **Default:** `#0072c3`
 */
export const yellow60 = yellow[60];

/**
 * The level `70` of the `yellow` color variants.
 * 
 * **Default:** `#00539a`
 */
export const yellow70 = yellow[70];

/**
 * The level `80` of the `yellow` color variants.
 * 
 * **Default:** `#003a6d`
 */
export const yellow80 = yellow[80];

/**
 * The level `90` of the `yellow` color variants.
 * 
 * **Default:** `#012749`
 */
export const yellow90 = yellow[90];

/**
 * The level `100` of the `yellow` color variants.
 * 
 * **Default:** `#061727`
 */
export const yellow100 = yellow[100];

//  export the map so SASS generators can use it.
export default __map;
