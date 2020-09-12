import { createMap } from "../../util";

export const calcScale = (index: number) => (index**2) * .055;

/**
 * The simple `transform` scale variants map.
 */
const scales = {
  /**
   * The `0` variant of the `transform` scale variants.
   */
  0: calcScale(0),
  /**
   * The `1` variant of the `transform` scale variants.
   */
  1: calcScale(1),
  /**
   * The `2` variant of the `transform` scale variants.
   */
  2: calcScale(2),
  /**
   * The `3` variant of the `transform` scale variants.
   */
  3: calcScale(3),
  /**
   * The `4` variant of the `transform` scale variants.
   */
  4: calcScale(4),
  /**
   * The `5` variant of the `transform` scale variants.
   */
  5: calcScale(5),
  /**
   * The `6` variant of the `transform` scale variants.
   */
  6: calcScale(6),
  /**
   * The `7` variant of the `transform` scale variants.
   */
  7: calcScale(7),
  /**
   * The `8` variant of the `transform` scale variants.
   */
  8: calcScale(8),
  /**
   * The `9` variant of the `transform` scale variants.
   */
  9: calcScale(9),
  /**
   * The `10` variant of the `transform` scale variants.
   */
  10: calcScale(10),
  /**
   * The `11` variant of the `transform` scale variants.
   */
  11: calcScale(11),
  /**
   * The `12` variant of the `transform` scale variants.
   */
  12: calcScale(12),
  /**
   * The `13` variant of the `transform` scale variants.
   */
  13: calcScale(13),
  /**
   * The `14` variant of the `transform` scale variants.
   */
  14: calcScale(14),
  /**
   * The `15` variant of the `transform` scale variants.
   */
  15: calcScale(15),
  /**
   * The `16` variant of the `transform` scale variants.
   */
  16: calcScale(16),
  /**
   * The `17` variant of the `transform` scale variants.
   */
  17: calcScale(17),
  /**
   * The `18` variant of the `transform` scale variants.
   */
  18: calcScale(18),
  /**
   * The `19` variant of the `transform` scale variants.
   */
  19: calcScale(19),
  /**
   * The `20` variant of the `transform` scale variants.
   */
  20: calcScale(20),
};

/**
 * The `IMap` of the `transform` scale variants.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `scale` export of this file instead.
 */
const __map = createMap('scale', scales);

/**
 * A readonly copy of the `transform` scale variants.
 */
export const scale: Readonly<typeof scales> = Object.assign({}, scales);

/**
 * The `0` variant of the `transform` scale variants.
 */
export const scale0 = scale[0];

/**
 * The `1` variant of the `transform` scale variants.
 */
export const scale1 = scale[1];

/**
 * The `2` variant of the `transform` scale variants.
 */
export const scale2 = scale[2];

/**
 * The `3` variant of the `transform` scale variants.
 */
export const scale3 = scale[3];

/**
 * The `4` variant of the `transform` scale variants.
 */
export const scale4 = scale[4];

/**
 * The `5` variant of the `transform` scale variants.
 */
export const scale5 = scale[5];

/**
 * The `6` variant of the `transform` scale variants.
 */
export const scale6 = scale[6];

/**
 * The `7` variant of the `transform` scale variants.
 */
export const scale7 = scale[7];

/**
 * The `8` variant of the `transform` scale variants.
 */
export const scale8 = scale[8];

/**
 * The `9` variant of the `transform` scale variants.
 */
export const scale9 = scale[9];

/**
 * The `10` variant of the `transform` scale variants.
 */
export const scale10 = scale[10];

/**
 * The `11` variant of the `transform` scale variants.
 */
export const scale11 = scale[11];

/**
 * The `12` variant of the `transform` scale variants.
 */
export const scale12 = scale[12];

/**
 * The `13` variant of the `transform` scale variants.
 */
export const scale13 = scale[13];

/**
 * The `14` variant of the `transform` scale variants.
 */
export const scale14 = scale[14];

/**
 * The `15` variant of the `transform` scale variants.
 */
export const scale15 = scale[15];

/**
 * The `16` variant of the `transform` scale variants.
 */
export const scale16 = scale[16];

/**
 * The `17` variant of the `transform` scale variants.
 */
export const scale17 = scale[17];

/**
 * The `18` variant of the `transform` scale variants.
 */
export const scale18 = scale[18];

/**
 * The `19` variant of the `transform` scale variants.
 */
export const scale19 = scale[19];

/**
 * The `20` variant of the `transform` scale variants.
 */
export const scale20 = scale[20];

//  export the map so SASS generators can use it.
export default __map;
