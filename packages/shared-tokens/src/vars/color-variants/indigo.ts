import { createMap } from "../../util";

/**
 * The simple `indigo` color variant's map.
 */
const variants = {
  10: "#e8f6ff",
  20: "#cde5f4",
  30: "#a6c9f4",
  40: "#81a8f4",
  50: "#7187e8",
  60: "#566bbf",
  70: "#3b519b",
  80: "#2e4075",
  90: "#1f2f54",
  100: "#0e1628",
};

/**
 * The mapped `indigo` color variants.
 */
const __map = createMap('indigo', variants);

/**
 * A readonly copy of the `indigo` color variant's map.
 * 
 * **Properties**
 * * `10` - `#e8f6ff`
 * * `20` - `#cde5f4`
 * * `30` - `#a6c9f4`
 * * `40` - `#81a8f4`
 * * `50` - `#7187e8`
 * * `60` - `#566bbf`
 * * `70` - `#3b519b`
 * * `80` - `#2e4075`
 * * `90` - `#1f2f54`
 * * `100` - `#0e1628`
 */
export const indigo: Readonly<typeof variants> = Object.assign({}, variants);

//  export individual colors

/**
 * The level `10` of the `indigo` color variants.
 * 
 * **Default:** `#e5f6ff`
 */
export const indigo10 = indigo[10];

/**
 * The level `20` of the `indigo` color variants.
 * 
 * **Default:** `#bae6ff`
 */
export const indigo20 = indigo[20];

/**
 * The level `30` of the `indigo` color variants.
 * 
 * **Default:** `#82cfff`
 */
export const indigo30 = indigo[30];

/**
 * The level `40` of the `indigo` color variants.
 * 
 * **Default:** `#33b1ff`
 */
export const indigo40 = indigo[40];

/**
 * The level `50` of the `indigo` color variants.
 * 
 * **Default:** `#1192e8`
 */
export const indigo50 = indigo[50];

/**
 * The level `60` of the `indigo` color variants.
 * 
 * **Default:** `#0072c3`
 */
export const indigo60 = indigo[60];

/**
 * The level `70` of the `indigo` color variants.
 * 
 * **Default:** `#00539a`
 */
export const indigo70 = indigo[70];

/**
 * The level `80` of the `indigo` color variants.
 * 
 * **Default:** `#003a6d`
 */
export const indigo80 = indigo[80];

/**
 * The level `90` of the `indigo` color variants.
 * 
 * **Default:** `#012749`
 */
export const indigo90 = indigo[90];

/**
 * The level `100` of the `indigo` color variants.
 * 
 * **Default:** `#061727`
 */
export const indigo100 = indigo[100];

//  export the map so SASS generators can use it.
export default __map;
