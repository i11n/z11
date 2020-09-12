import { createMap } from "../../util";

/**
 * The simple `magenta` color variant's map.
 */
const variants = {
  10: "#fff0f7",
  20: "#ffd6e8",
  30: "#ffafd2",
  40: "#ff7eb6",
  50: "#ee5396",
  60: "#d12771",
  70: "#9f1853",
  80: "#740937",
  90: "#510224",
  100: "#2a0a18",
};

/**
 * The mapped `magenta` color variants.
 */
const __map = createMap('magenta', variants);

/**
 * A readonly copy of the `magenta` color variant's map.
 * 
 * **Properties**
 * * `10` - `#fff0f7`
 * * `20` - `#ffd6e8`
 * * `30` - `#ffafd2`
 * * `40` - `#ff7eb6`
 * * `50` - `#ee5396`
 * * `60` - `#d12771`
 * * `70` - `#9f1853`
 * * `80` - `#740937`
 * * `90` - `#510224`
 * * `100` - `#2a0a18`
 */
export const magenta: Readonly<typeof variants> = Object.assign({}, variants);

//  export individual colors

/**
 * The level `10` of the `magenta` color variants.
 * 
 * **Default:** `#e5f6ff`
 */
export const magenta10 = magenta[10];

/**
 * The level `20` of the `magenta` color variants.
 * 
 * **Default:** `#bae6ff`
 */
export const magenta20 = magenta[20];

/**
 * The level `30` of the `magenta` color variants.
 * 
 * **Default:** `#82cfff`
 */
export const magenta30 = magenta[30];

/**
 * The level `40` of the `magenta` color variants.
 * 
 * **Default:** `#33b1ff`
 */
export const magenta40 = magenta[40];

/**
 * The level `50` of the `magenta` color variants.
 * 
 * **Default:** `#1192e8`
 */
export const magenta50 = magenta[50];

/**
 * The level `60` of the `magenta` color variants.
 * 
 * **Default:** `#0072c3`
 */
export const magenta60 = magenta[60];

/**
 * The level `70` of the `magenta` color variants.
 * 
 * **Default:** `#00539a`
 */
export const magenta70 = magenta[70];

/**
 * The level `80` of the `magenta` color variants.
 * 
 * **Default:** `#003a6d`
 */
export const magenta80 = magenta[80];

/**
 * The level `90` of the `magenta` color variants.
 * 
 * **Default:** `#012749`
 */
export const magenta90 = magenta[90];

/**
 * The level `100` of the `magenta` color variants.
 * 
 * **Default:** `#061727`
 */
export const magenta100 = magenta[100];

//  export the map so SASS generators can use it.
export default __map;
