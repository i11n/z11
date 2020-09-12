import { createMap } from "../../util";

/**
 * The simple `orange` color variant's map.
 */
const variants = {
  10: "#fff2dd",
  20: "#f4dea6",
  30: "#eac179",
  40: "#e59737",
  50: "#dd6b20",
  60: "#c6480d",
  70: "#9e2d04",
  80: "#7c2102",
  90: "#4c2400",
  100: "#331000",
};

/**
 * The mapped `orange` color variants.
 */
const __map = createMap('orange', variants);

/**
 * A readonly copy of the `orange` color variant's map.
 * 
 * **Properties**
 * * `10` - `#fff2dd`
 * * `20` - `#f4dea6`
 * * `30` - `#eac179`
 * * `40` - `#e59737`
 * * `50` - `#dd6b20`
 * * `60` - `#c6480d`
 * * `70` - `#9e2d04`
 * * `80` - `#7c2102`
 * * `90` - `#4c2400`
 * * `100` - `#331000`
 */
export const orange: Readonly<typeof variants> = Object.assign({}, variants);

//  export individual colors

/**
 * The level `10` of the `orange` color variants.
 * 
 * **Default:** `#e5f6ff`
 */
export const orange10 = orange[10];

/**
 * The level `20` of the `orange` color variants.
 * 
 * **Default:** `#bae6ff`
 */
export const orange20 = orange[20];

/**
 * The level `30` of the `orange` color variants.
 * 
 * **Default:** `#82cfff`
 */
export const orange30 = orange[30];

/**
 * The level `40` of the `orange` color variants.
 * 
 * **Default:** `#33b1ff`
 */
export const orange40 = orange[40];

/**
 * The level `50` of the `orange` color variants.
 * 
 * **Default:** `#1192e8`
 */
export const orange50 = orange[50];

/**
 * The level `60` of the `orange` color variants.
 * 
 * **Default:** `#0072c3`
 */
export const orange60 = orange[60];

/**
 * The level `70` of the `orange` color variants.
 * 
 * **Default:** `#00539a`
 */
export const orange70 = orange[70];

/**
 * The level `80` of the `orange` color variants.
 * 
 * **Default:** `#003a6d`
 */
export const orange80 = orange[80];

/**
 * The level `90` of the `orange` color variants.
 * 
 * **Default:** `#012749`
 */
export const orange90 = orange[90];

/**
 * The level `100` of the `orange` color variants.
 * 
 * **Default:** `#061727`
 */
export const orange100 = orange[100];

//  export the map so SASS generators can use it.
export default __map;
