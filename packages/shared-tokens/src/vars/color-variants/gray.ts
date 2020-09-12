import { createMap } from "../../util";

/**
 * The simple `gray` color variant's map.
 */
const variants = {
  10: "#f4f4f4",
  20: "#e0e0e0",
  30: "#c6c6c6",
  40: "#a8a8a8",
  50: "#8d8d8d",
  60: "#6f6f6f",
  70: "#525252",
  80: "#393939",
  90: "#262626",
  100: "#161616",
};

/**
 * The mapped `gray` color variants.
 */
const __map = createMap('gray', variants);

/**
 * A readonly copy of the `gray` color variant's map.
 * 
 * **Properties**
 * * `10` - `#f4f4f4`
 * * `20` - `#e0e0e0`
 * * `30` - `#c6c6c6`
 * * `40` - `#a8a8a8`
 * * `50` - `#8d8d8d`
 * * `60` - `#6f6f6f`
 * * `70` - `#525252`
 * * `80` - `#393939`
 * * `90` - `#262626`
 * * `100` - `#161616`
 */
export const gray: Readonly<typeof variants> = Object.assign({}, variants);

//  export individual colors

/**
 * The level `10` of the `gray` color variants.
 */
export const gray10 = gray[10];

/**
 * The level `20` of the `gray` color variants.
 */
export const gray20 = gray[20];

/**
 * The level `30` of the `gray` color variants.
 */
export const gray30 = gray[30];

/**
 * The level `40` of the `gray` color variants.
 */
export const gray40 = gray[40];

/**
 * The level `50` of the `gray` color variants.
 */
export const gray50 = gray[50];

/**
 * The level `60` of the `gray` color variants.
 */
export const gray60 = gray[60];

/**
 * The level `70` of the `gray` color variants.
 */
export const gray70 = gray[70];

/**
 * The level `80` of the `gray` color variants.
 */
export const gray80 = gray[80];

/**
 * The level `90` of the `gray` color variants.
 */
export const gray90 = gray[90];

/**
 * The level `100` of the `gray` color variants.
 */
export const gray100 = gray[100];

//  export the map so SASS generators can use it.
export default __map;
