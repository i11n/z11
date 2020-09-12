import { createMap } from "../../util";

/**
 * The simple `teal` color variant's map.
 */
const variants = {
  10: "#d9fbfb",
  20: "#9ef0f0",
  30: "#3ddbd9",
  40: "#08bdba",
  50: "#009d9a",
  60: "#007d79",
  70: "#005d5d",
  80: "#004144",
  90: "#022b30",
  100: "#081a1c",
};

/**
 * The mapped `teal` color variants.
 */
const __map = createMap('teal', variants);

/**
 * A readonly copy of the `teal` color variant's map.
 * 
 * **Properties**
 * * `10` - `#d9fbfb`
 * * `20` - `#9ef0f0`
 * * `30` - `#3ddbd9`
 * * `40` - `#08bdba`
 * * `50` - `#009d9a`
 * * `60` - `#007d79`
 * * `70` - `#005d5d`
 * * `80` - `#004144`
 * * `90` - `#022b30`
 * * `100` - `#081a1c`
 */
export const teal: Readonly<typeof variants> = Object.assign({}, variants);

//  export individual colors

/**
 * The level `10` of the `teal` color variants.
 * 
 * **Default:** `#e5f6ff`
 */
export const teal10 = teal[10];

/**
 * The level `20` of the `teal` color variants.
 * 
 * **Default:** `#bae6ff`
 */
export const teal20 = teal[20];

/**
 * The level `30` of the `teal` color variants.
 * 
 * **Default:** `#82cfff`
 */
export const teal30 = teal[30];

/**
 * The level `40` of the `teal` color variants.
 * 
 * **Default:** `#33b1ff`
 */
export const teal40 = teal[40];

/**
 * The level `50` of the `teal` color variants.
 * 
 * **Default:** `#1192e8`
 */
export const teal50 = teal[50];

/**
 * The level `60` of the `teal` color variants.
 * 
 * **Default:** `#0072c3`
 */
export const teal60 = teal[60];

/**
 * The level `70` of the `teal` color variants.
 * 
 * **Default:** `#00539a`
 */
export const teal70 = teal[70];

/**
 * The level `80` of the `teal` color variants.
 * 
 * **Default:** `#003a6d`
 */
export const teal80 = teal[80];

/**
 * The level `90` of the `teal` color variants.
 * 
 * **Default:** `#012749`
 */
export const teal90 = teal[90];

/**
 * The level `100` of the `teal` color variants.
 * 
 * **Default:** `#061727`
 */
export const teal100 = teal[100];

//  export the map so SASS generators can use it.
export default __map;
