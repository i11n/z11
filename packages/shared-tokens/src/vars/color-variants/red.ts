import { createMap } from "../../util";

/**
 * The simple `red` color variant's map.
 */
const variants = {
  10: "#fff1f1",
  20: "#ffd7d9",
  30: "#ffb3b8",
  40: "#ff8389",
  50: "#fa4d56",
  60: "#da1e28",
  70: "#a2191f",
  80: "#750e13",
  90: "#520408",
  100: "#2d0709",
};

/**
 * The mapped `red` color variants.
 */
const __map = createMap('red', variants);

/**
 * A readonly copy of the `red` color variant's map.
 * 
 * **Properties**
 * * `10` - `#fff1f1`
 * * `20` - `#ffd7d9`
 * * `30` - `#ffb3b8`
 * * `40` - `#ff8389`
 * * `50` - `#fa4d56`
 * * `60` - `#da1e28`
 * * `70` - `#a2191f`
 * * `80` - `#750e13`
 * * `90` - `#520408`
 * * `100` - `#2d0709`
 */
export const red: Readonly<typeof variants> = Object.assign({}, variants);

//  export individual colors

/**
 * The level `10` of the `red` color variants.
 * 
 * **Default:** `#e5f6ff`
 */
export const red10 = red[10];

/**
 * The level `20` of the `red` color variants.
 * 
 * **Default:** `#bae6ff`
 */
export const red20 = red[20];

/**
 * The level `30` of the `red` color variants.
 * 
 * **Default:** `#82cfff`
 */
export const red30 = red[30];

/**
 * The level `40` of the `red` color variants.
 * 
 * **Default:** `#33b1ff`
 */
export const red40 = red[40];

/**
 * The level `50` of the `red` color variants.
 * 
 * **Default:** `#1192e8`
 */
export const red50 = red[50];

/**
 * The level `60` of the `red` color variants.
 * 
 * **Default:** `#0072c3`
 */
export const red60 = red[60];

/**
 * The level `70` of the `red` color variants.
 * 
 * **Default:** `#00539a`
 */
export const red70 = red[70];

/**
 * The level `80` of the `red` color variants.
 * 
 * **Default:** `#003a6d`
 */
export const red80 = red[80];

/**
 * The level `90` of the `red` color variants.
 * 
 * **Default:** `#012749`
 */
export const red90 = red[90];

/**
 * The level `100` of the `red` color variants.
 * 
 * **Default:** `#061727`
 */
export const red100 = red[100];

//  export the map so SASS generators can use it.
export default __map;
