import { createMap } from "../util";
import { Spacing } from "./Spacing";

/**
 * The `height` variants map.
 */
const height = {
  ...Spacing,
  /**
   * The `auto` variant of the height variants.
   */
  auto: 'auto',
  /**
   * The `screen` variant of the height variants.
   */
  screen: '100vh',
};

/**
 * The `IMap` of the `height` variants.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `Height` export of this file instead.
 */
const __map = createMap('height', height);

/**
 * A readonly copy of the `height` variants.
 */
export const Height: Readonly<typeof height> = Object.assign({}, height);

//  export individual styles

/**
 * The `0` variant of the height variants.
 */
export const height0 = Height[0];

/**
 * The `1` variant of the height variants.
 */
export const height1 = Height[1];

/**
 * The `px` variant of the height variants.
 */
export const heightpx = Height.px;

/**
 * The `2` variant of the height variants.
 */
export const height2 = Height[2];

/**
 * The `3` variant of the height variants.
 */
export const height3 = Height[3];

/**
 * The `4` variant of the height variants.
 */
export const height4 = Height[4];

/**
 * The `5` variant of the height variants.
 */
export const height5 = Height[5];

/**
 * The `6` variant of the height variants.
 */
export const height6 = Height[6];

/**
 * The `7` variant of the height variants.
 */
export const height7 = Height[7];

/**
 * The `8` variant of the height variants.
 */
export const height8 = Height[8];

/**
 * The `9` variant of the height variants.
 */
export const height9 = Height[9];

/**
 * The `10` variant of the height variants.
 */
export const height10 = Height[10];

/**
 * The `11` variant of the height variants.
 */
export const height11 = Height[11];

/**
 * The `12` variant of the height variants.
 */
export const height12 = Height[12];

/**
 * The `13` variant of the height variants.
 */
export const height13 = Height[13];

/**
 * The `14` variant of the height variants.
 */
export const height14 = Height[14];

/**
 * The `15` variant of the height variants.
 */
export const height15 = Height[15];

/**
 * The `16` variant of the height variants.
 */
export const height16 = Height[16];

/**
 * The `17` variant of the height variants.
 */
export const height17 = Height[17];

/**
 * The `18` variant of the height variants.
 */
export const height18 = Height[18];

/**
 * The `19` variant of the height variants.
 */
export const height19 = Height[19];

/**
 * The `20` variant of the height variants.
 */
export const height20 = Height[20];

/**
 * The `21` variant of the height variants.
 */
export const height21 = Height[21];

/**
 * The `22` variant of the height variants.
 */
export const height22 = Height[22];

/**
 * The `23` variant of the height variants.
 */
export const height23 = Height[23];

/**
 * The `24` variant of the height variants.
 */
export const height24 = Height[24];

/**
 * The `25` variant of the height variants.
 */
export const height25 = Height[25];

/**
 * The `auto` variant of the height variants.
 */
export const heightAuto = Height.auto;

/**
 * The `screen` variant of the height variants.
 */
export const heightScreen = Height.screen;

//  export the map so SASS generators can use it.
export default __map;
