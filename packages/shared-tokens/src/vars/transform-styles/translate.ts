import { createMap } from "../../util";
import { Spacing } from "../Spacing";

/**
 * The `transform` translate map.
 */
const translations = {
  ...Spacing,
};

/**
 * The `IMap` of the `transform` translate variants.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `translation` export of this file instead.
 */
const __map = createMap('translate', translations);

/**
 * A readonly copy of the `transform` translate variants.
 */
export const translate: Readonly<typeof translations> = Object.assign({}, translations);

//  export individual styles

/**
 * The `0` variant of the `transform` translate variants.
 */
export const translate0 = translate[0];

/**
 * The `1` variant of the `transform` translate variants.
 */
export const translate1 = translate[1];

/**
 * The `px` variant of the `transform` translate variants.
 */
export const translatepx = translate.px;

/**
 * The `2` variant of the `transform` translate variants.
 */
export const translate2 = translate[2];

/**
 * The `3` variant of the `transform` translate variants.
 */
export const translate3 = translate[3];

/**
 * The `4` variant of the `transform` translate variants.
 */
export const translate4 = translate[4];

/**
 * The `5` variant of the `transform` translate variants.
 */
export const translate5 = translate[5];

/**
 * The `6` variant of the `transform` translate variants.
 */
export const translate6 = translate[6];

/**
 * The `7` variant of the `transform` translate variants.
 */
export const translate7 = translate[7];

/**
 * The `8` variant of the `transform` translate variants.
 */
export const translate8 = translate[8];

/**
 * The `9` variant of the `transform` translate variants.
 */
export const translate9 = translate[9];

/**
 * The `10` variant of the `transform` translate variants.
 */
export const translate10 = translate[10];

/**
 * The `11` variant of the `transform` translate variants.
 */
export const translate11 = translate[11];

/**
 * The `12` variant of the `transform` translate variants.
 */
export const translate12 = translate[12];

/**
 * The `13` variant of the `transform` translate variants.
 */
export const translate13 = translate[13];

/**
 * The `14` variant of the `transform` translate variants.
 */
export const translate14 = translate[14];

/**
 * The `15` variant of the `transform` translate variants.
 */
export const translate15 = translate[15];

/**
 * The `16` variant of the `transform` translate variants.
 */
export const translate16 = translate[16];

/**
 * The `17` variant of the `transform` translate variants.
 */
export const translate17 = translate[17];

/**
 * The `18` variant of the `transform` translate variants.
 */
export const translate18 = translate[18];

/**
 * The `19` variant of the `transform` translate variants.
 */
export const translate19 = translate[19];

/**
 * The `20` variant of the `transform` translate variants.
 */
export const translate20 = translate[20];

/**
 * The `21` variant of the `transform` translate variants.
 */
export const translate21 = translate[21];

/**
 * The `22` variant of the `transform` translate variants.
 */
export const translate22 = translate[22];

/**
 * The `23` variant of the `transform` translate variants.
 */
export const translate23 = translate[23];

/**
 * The `24` variant of the `transform` translate variants.
 */
export const translate24 = translate[24];

/**
 * The `25` variant of the `transform` translate variants.
 */
export const translate25 = translate[25];

//  export the map so SASS generators can use it.
export default __map;
