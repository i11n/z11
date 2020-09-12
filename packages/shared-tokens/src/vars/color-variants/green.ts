import { createMap } from "../../util";

/**
 * The simple `green` color variant's map.
 */
const variants = {
  10: "#defbe6",
  20: "#a7f0ba",
  30: "#6fdc8c",
  40: "#42be65",
  50: "#24a148",
  60: "#198038",
  70: "#0e6027",
  80: "#044317",
  90: "#022d0d",
  100: "#071908",
};

/**
 * The mapped `green` color variants.
 */
const __map = createMap('green', variants);

/**
 * A readonly copy of the `green` color variant's map.
 * 
 * **Properties**
 * * `10` - `#defbe6`
 * * `20` - `#a7f0ba`
 * * `30` - `#6fdc8c`
 * * `40` - `#42be65`
 * * `50` - `#24a148`
 * * `60` - `#198038`
 * * `70` - `#0e6027`
 * * `80` - `#044317`
 * * `90` - `#022d0d`
 * * `100` - `#071908`
 */
export const green: Readonly<typeof variants> = Object.assign({}, variants);

//  export individual colors

/**
 * The level `10` of the `green` color variants.
 * 
 * **Default:** `#e5f6ff`
 */
export const green10 = green[10];

/**
 * The level `20` of the `green` color variants.
 * 
 * **Default:** `#bae6ff`
 */
export const green20 = green[20];

/**
 * The level `30` of the `green` color variants.
 * 
 * **Default:** `#82cfff`
 */
export const green30 = green[30];

/**
 * The level `40` of the `green` color variants.
 * 
 * **Default:** `#33b1ff`
 */
export const green40 = green[40];

/**
 * The level `50` of the `green` color variants.
 * 
 * **Default:** `#1192e8`
 */
export const green50 = green[50];

/**
 * The level `60` of the `green` color variants.
 * 
 * **Default:** `#0072c3`
 */
export const green60 = green[60];

/**
 * The level `70` of the `green` color variants.
 * 
 * **Default:** `#00539a`
 */
export const green70 = green[70];

/**
 * The level `80` of the `green` color variants.
 * 
 * **Default:** `#003a6d`
 */
export const green80 = green[80];

/**
 * The level `90` of the `green` color variants.
 * 
 * **Default:** `#012749`
 */
export const green90 = green[90];

/**
 * The level `100` of the `green` color variants.
 * 
 * **Default:** `#061727`
 */
export const green100 = green[100];

//  export the map so SASS generators can use it.
export default __map;
