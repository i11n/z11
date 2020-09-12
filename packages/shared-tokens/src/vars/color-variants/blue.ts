import { createMap } from "../../util";

/**
 * The simple `blue` color variant's map.
 */
const variants = {
  /**
   * The level `10` of the `blue` color variants.
   */
  10: "#edf5ff",
  /**
   * The level `20` of the `blue` color variants.
   */
  20: "#d0e2ff",
  /**
   * The level `30` of the `blue` color variants.
   */
  30: "#a6c8ff",
  /**
   * The level `40` of the `blue` color variants.
   */
  40: "#78a9ff",
  /**
   * The level `50` of the `blue` color variants.
   */
  50: "#4589ff",
  /**
   * The level `60` of the `blue` color variants.
   */
  60: "#0f62fe",
  /**
   * The level `70` of the `blue` color variants.
   */
  70: "#0043ce",
  /**
   * The level `80` of the `blue` color variants.
   */
  80: "#002d9c",
  /**
   * The level `90` of the `blue` color variants.
   */
  90: "#001d6c",
  /**
   * The level `10` of the `blue` color variants.
   */
  100: "#001141",
};

/**
 * The `IMap` of the `blue` color variants.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `blue` export of this file instead.
 */
const __map = createMap('blue', variants);

/**
 * A readonly copy of the `blue` color variant's map.
 */
export const blue: Readonly<typeof variants> = Object.assign({}, variants);

//  export individual colors

/**
 * The level `10` variant of the `blue` color variants.
 */
export const blue10 = blue[10];

/**
 * The level `20` variant of the `blue` color variants.
 */
export const blue20 = blue[20];

/**
 * The level `30` variant of the `blue` color variants.
 */
export const blue30 = blue[30];

/**
 * The level `40` variant of the `blue` color variants.
 */
export const blue40 = blue[40];

/**
 * The level `50` variant of the `blue` color variants.
 */
export const blue50 = blue[50];

/**
 * The level `60` variant of the `blue` color variants.
 */
export const blue60 = blue[60];

/**
 * The level `70` variant of the `blue` color variants.
 */
export const blue70 = blue[70];

/**
 * The level `80` variant of the `blue` color variants.
 */
export const blue80 = blue[80];

/**
 * The level `90` variant of the `blue` color variants.
 */
export const blue90 = blue[90];

/**
 * The level `00` variant of the `blue` color variants.
 */
export const blue100 = blue[100];

//  export the map so SASS generators can use it.
export default __map;
