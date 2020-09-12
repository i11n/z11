import { createMap } from "../util";

const createSpacing = (index: number) => `${parseFloat((index ** 2 /25).toFixed(2))}rem`;

/**
 * The spacing (`margin`, `padding`, etc...) variants map.
 */
const spacing = {
  /**
   * The `0` variant of the spacing variants.
   */
  0: createSpacing(0),
  /**
   * The `1` variant of the spacing variants.
   */
  1: createSpacing(1),
  /**
   * The `px` variant of the spacing variants.
   */
  px: '1px',
  /**
   * The `2` variant of the spacing variants.
   */
  2: createSpacing(2),
  /**
   * The `3` variant of the spacing variants.
   */
  3: createSpacing(3),
  /**
   * The `4` variant of the spacing variants.
   */
  4: createSpacing(4),
  /**
   * The `5` variant of the spacing variants.
   */
  5: createSpacing(5),
  /**
   * The `6` variant of the spacing variants.
   */
  6: createSpacing(6),
  /**
   * The `7` variant of the spacing variants.
   */
  7: createSpacing(7),
  /**
   * The `8` variant of the spacing variants.
   */
  8: createSpacing(8),
  /**
   * The `9` variant of the spacing variants.
   */
  9: createSpacing(9),
  /**
   * The `10` variant of the spacing variants.
   */
  10: createSpacing(10),
  /**
   * The `11` variant of the spacing variants.
   */
  11: createSpacing(11),
  /**
   * The `12` variant of the spacing variants.
   */
  12: createSpacing(12),
  /**
   * The `13` variant of the spacing variants.
   */
  13: createSpacing(13),
  /**
   * The `14` variant of the spacing variants.
   */
  14: createSpacing(14),
  /**
   * The `15` variant of the spacing variants.
   */
  15: createSpacing(15),
  /**
   * The `16` variant of the spacing variants.
   */
  16: createSpacing(16),
  /**
   * The `17` variant of the spacing variants.
   */
  17: createSpacing(17),
  /**
   * The `18` variant of the spacing variants.
   */
  18: createSpacing(18),
  /**
   * The `19` variant of the spacing variants.
   */
  19: createSpacing(19),
  /**
   * The `20` variant of the spacing variants.
   */
  20: createSpacing(20),
  /**
   * The `21` variant of the spacing variants.
   */
  21: createSpacing(21),
  /**
   * The `22` variant of the spacing variants.
   */
  22: createSpacing(22),
  /**
   * The `23` variant of the spacing variants.
   */
  23: createSpacing(23),
  /**
   * The `24` variant of the spacing variants.
   */
  24: createSpacing(24),
  /**
   * The `25` variant of the spacing variants.
   */
  25: createSpacing(25)
};

/**
 * The `IMap` of the spacing variants.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `Spacing` export of this file instead.
 */
const __map = createMap('spacing', spacing);

/**
 * A readonly copy of the spacing variants.
 */
export const Spacing: Readonly<typeof spacing> = Object.assign({}, spacing);

//  export individual styles

/**
 * The `0` variant of the spacing variants.
 */
export const spacing0 = Spacing[0];

/**
 * The `1` variant of the spacing variants.
 */
export const spacing1 = Spacing[1];

/**
 * The `px` variant of the spacing variants.
 */
export const spacingpx = Spacing.px;

/**
 * The `2` variant of the spacing variants.
 */
export const spacing2 = Spacing[2];

/**
 * The `3` variant of the spacing variants.
 */
export const spacing3 = Spacing[3];

/**
 * The `4` variant of the spacing variants.
 */
export const spacing4 = Spacing[4];

/**
 * The `5` variant of the spacing variants.
 */
export const spacing5 = Spacing[5];

/**
 * The `6` variant of the spacing variants.
 */
export const spacing6 = Spacing[6];

/**
 * The `7` variant of the spacing variants.
 */
export const spacing7 = Spacing[7];

/**
 * The `8` variant of the spacing variants.
 */
export const spacing8 = Spacing[8];

/**
 * The `9` variant of the spacing variants.
 */
export const spacing9 = Spacing[9];

/**
 * The `10` variant of the spacing variants.
 */
export const spacing10 = Spacing[10];

/**
 * The `11` variant of the spacing variants.
 */
export const spacing11 = Spacing[11];

/**
 * The `12` variant of the spacing variants.
 */
export const spacing12 = Spacing[12];

/**
 * The `13` variant of the spacing variants.
 */
export const spacing13 = Spacing[13];

/**
 * The `14` variant of the spacing variants.
 */
export const spacing14 = Spacing[14];

/**
 * The `15` variant of the spacing variants.
 */
export const spacing15 = Spacing[15];

/**
 * The `16` variant of the spacing variants.
 */
export const spacing16 = Spacing[16];

/**
 * The `17` variant of the spacing variants.
 */
export const spacing17 = Spacing[17];

/**
 * The `18` variant of the spacing variants.
 */
export const spacing18 = Spacing[18];

/**
 * The `19` variant of the spacing variants.
 */
export const spacing19 = Spacing[19];

/**
 * The `20` variant of the spacing variants.
 */
export const spacing20 = Spacing[20];

/**
 * The `21` variant of the spacing variants.
 */
export const spacing21 = Spacing[21];

/**
 * The `22` variant of the spacing variants.
 */
export const spacing22 = Spacing[22];

/**
 * The `23` variant of the spacing variants.
 */
export const spacing23 = Spacing[23];

/**
 * The `24` variant of the spacing variants.
 */
export const spacing24 = Spacing[24];

/**
 * The `25` variant of the spacing variants.
 */
export const spacing25 = Spacing[25];

//  export the map so SASS generators can use it.
export default __map;
