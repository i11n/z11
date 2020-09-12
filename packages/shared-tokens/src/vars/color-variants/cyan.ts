import { createMap } from "../../util";

/**
 * The simple `cyan` color variant's map.
 */
const variants = {
  /**
   * The level `10` variant of the `cyan` color variants.
   */
  10: "#e5f6ff",
  /**
   * The level `20` variant of the `cyan` color variants.
   */
  20: "#bae6ff",
  /**
   * The level `30` variant of the `cyan` color variants.
   */
  30: "#82cfff",
  /**
   * The level `40` variant of the `cyan` color variants.
   */
  40: "#33b1ff",
  /**
   * The level `50` variant of the `cyan` color variants.
   */
  50: "#1192e8",
  /**
   * The level `60` variant of the `cyan` color variants.
   */
  60: "#0072c3",
  /**
   * The level `70` variant of the `cyan` color variants.
   */
  70: "#00539a",
  /**
   * The level `80` variant of the `cyan` color variants.
   */
  80: "#003a6d",
  /**
   * The level `90` variant of the `cyan` color variants.
   */
  90: "#012749",
  /**
   * The level `100` variant of the `cyan` color variants.
   */
  100: "#061727",
};

/**
 * The `IMap` of the `cyan` color variants.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `cyan` export of this file instead.
 */
const __map = createMap('cyan', variants);

/**
 * A readonly copy of the `cyan` color variant's map.
 * 
 * **Properties**
 * * `[10]` - `#e5f6ff`
 * * `[20]` - `#bae6ff`
 * * `[30]` - `#82cfff`
 * * `[40]` - `#33b1ff`
 * * `[50]` - `#1192e8`
 * * `[60]` - `#0072c3`
 * * `[70]` - `#00539a`
 * * `[80]` - `#003a6d`
 * * `[90]` - `#012749`
 * * `[100]` - `#061727`
 */
export const cyan: Readonly<typeof variants> = Object.assign({}, variants);

//  export individual colors

/**
 * The level `10` of the `cyan` color variants.
 */
export const cyan10 = cyan[10];

/**
 * The level `20` of the `cyan` color variants.
 */
export const cyan20 = cyan[20];

/**
 * The level `30` of the `cyan` color variants.
 */
export const cyan30 = cyan[30];

/**
 * The level `40` of the `cyan` color variants.
 */
export const cyan40 = cyan[40];

/**
 * The level `50` of the `cyan` color variants.
 */
export const cyan50 = cyan[50];

/**
 * The level `60` of the `cyan` color variants.
 */
export const cyan60 = cyan[60];

/**
 * The level `70` of the `cyan` color variants.
 */
export const cyan70 = cyan[70];

/**
 * The level `80` of the `cyan` color variants.
 */
export const cyan80 = cyan[80];

/**
 * The level `90` of the `cyan` color variants.
 */
export const cyan90 = cyan[90];

/**
 * The level `100` of the `cyan` color variants.
 */
export const cyan100 = cyan[100];

//  export the map so SASS generators can use it.
export default __map;
