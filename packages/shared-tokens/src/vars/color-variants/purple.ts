import { createMap } from "../../util";

/**
 * The simple `purple` color variant's map.
 */
const variants = {
  10: "#f6f2ff",
  20: "#e8daff",
  30: "#d4bbff",
  40: "#be95ff",
  50: "#a56eff",
  60: "#8a3ffc",
  70: "#6929c4",
  80: "#491d8b",
  90: "#31135e",
  100: "#1c0f30",
};

/**
 * The mapped `purple` color variants.
 */
const __map = createMap('purple', variants);

/**
 * A readonly copy of the `purple` color variant's map.
 * 
 * **Properties**
 * * `10` - `#f6f2ff`
 * * `20` - `#e8daff`
 * * `30` - `#d4bbff`
 * * `40` - `#be95ff`
 * * `50` - `#a56eff`
 * * `60` - `#8a3ffc`
 * * `70` - `#6929c4`
 * * `80` - `#491d8b`
 * * `90` - `#31135e`
 * * `100` - `#1c0f30`
 */
export const purple: Readonly<typeof variants> = Object.assign({}, variants);

//  export individual colors

/**
 * The level `10` of the `purple` color variants.
 * 
 * **Default:** `#e5f6ff`
 */
export const purple10 = purple[10];

/**
 * The level `20` of the `purple` color variants.
 * 
 * **Default:** `#bae6ff`
 */
export const purple20 = purple[20];

/**
 * The level `30` of the `purple` color variants.
 * 
 * **Default:** `#82cfff`
 */
export const purple30 = purple[30];

/**
 * The level `40` of the `purple` color variants.
 * 
 * **Default:** `#33b1ff`
 */
export const purple40 = purple[40];

/**
 * The level `50` of the `purple` color variants.
 * 
 * **Default:** `#1192e8`
 */
export const purple50 = purple[50];

/**
 * The level `60` of the `purple` color variants.
 * 
 * **Default:** `#0072c3`
 */
export const purple60 = purple[60];

/**
 * The level `70` of the `purple` color variants.
 * 
 * **Default:** `#00539a`
 */
export const purple70 = purple[70];

/**
 * The level `80` of the `purple` color variants.
 * 
 * **Default:** `#003a6d`
 */
export const purple80 = purple[80];

/**
 * The level `90` of the `purple` color variants.
 * 
 * **Default:** `#012749`
 */
export const purple90 = purple[90];

/**
 * The level `100` of the `purple` color variants.
 * 
 * **Default:** `#061727`
 */
export const purple100 = purple[100];

//  export the map so SASS generators can use it.
export default __map;
