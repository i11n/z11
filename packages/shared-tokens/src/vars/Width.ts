import { createMap } from "../util";
import { Spacing } from "./Spacing";

const createPctWidth = (span: number, columns: number) => `${parseFloat((span / columns).toFixed(4))}%`;

/**
 * The `width` variants map.
 */
const width = {
  ...Spacing,
  /**
   * The `auto` variant of the width variants.
   */
  auto: 'auto',
  /**
   * The `screen` variant of the width variants.
   */
  screen: '100vw',
  /**
   * The `full` variant of the width variants.
   */
  full: createPctWidth(1, 1),
  /**
   * The `1of2` variant of the width variants.
   */
  '1of2': createPctWidth(1, 2),
  /**
   * The `1of3` variant of the width variants.
   */
  '1of3': createPctWidth(1, 3),
  /**
   * The `1of4` variant of the width variants.
   */
  '1of4': createPctWidth(1, 4),
  /**
   * The `1of5` variant of the width variants.
   */
  '1of5': createPctWidth(1, 5),
  /**
   * The `1of6` variant of the width variants.
   */
  '1of6': createPctWidth(1, 6),
  /**
   * The `1of7` variant of the width variants.
   */
  '1of7': createPctWidth(1, 7),
  /**
   * The `1of8` variant of the width variants.
   */
  '1of8': createPctWidth(1, 8),
  /**
   * The `1of9` variant of the width variants.
   */
  '1of9': createPctWidth(1, 9),
  /**
   * The `1of10` variant of the width variants.
   */
  '1of10': createPctWidth(1, 10),
  /**
   * The `1of11` variant of the width variants.
   */
  '1of11': createPctWidth(1, 11),
  /**
   * The `1of12` variant of the width variants.
   */
  '1of12': createPctWidth(1, 12),
  /**
   * The `2of3` variant of the width variants.
   */
  '2of3': createPctWidth(2, 3),
  /**
   * The `2of5` variant of the width variants.
   */
  '2of5': createPctWidth(2, 5),
  /**
   * The `2of7` variant of the width variants.
   */
  '2of7': createPctWidth(2, 7),
  /**
   * The `2of9` variant of the width variants.
   */
  '2of9': createPctWidth(2, 9),
  /**
   * The `2of11` variant of the width variants.
   */
  '2of11': createPctWidth(2, 11),
  /**
   * The `3of4` variant of the width variants.
   */
  '3of4': createPctWidth(3, 4),
  /**
   * The `3of5` variant of the width variants.
   */
  '3of5': createPctWidth(3, 5),
  /**
   * The `3of7` variant of the width variants.
   */
  '3of7': createPctWidth(3, 7),
  /**
   * The `3of8` variant of the width variants.
   */
  '3of8': createPctWidth(3, 8),
  /**
   * The `3of10` variant of the width variants.
   */
  '3of10': createPctWidth(3, 10),
  /**
   * The `3of11` variant of the width variants.
   */
  '3of11': createPctWidth(3, 11),
  /**
   * The `4of5` variant of the width variants.
   */
  '4of5': createPctWidth(4, 5),
  /**
   * The `4of7` variant of the width variants.
   */
  '4of7': createPctWidth(4, 7),
  /**
   * The `4of9` variant of the width variants.
   */
  '4of9': createPctWidth(4, 9),
  /**
   * The `4of11` variant of the width variants.
   */
  '4of11': createPctWidth(4, 11),
  /**
   * The `5of6` variant of the width variants.
   */
  '5of6': createPctWidth(5, 6),
  /**
   * The `5of7` variant of the width variants.
   */
  '5of7': createPctWidth(5, 7),
  /**
   * The `5of8` variant of the width variants.
   */
  '5of8': createPctWidth(5, 8),
  /**
   * The `5of9` variant of the width variants.
   */
  '5of9': createPctWidth(5, 9),
  /**
   * The `5of11` variant of the width variants.
   */
  '5of11': createPctWidth(5, 11),
  /**
   * The `5of12` variant of the width variants.
   */
  '5of12': createPctWidth(5, 12),
  /**
   * The `6of7` variant of the width variants.
   */
  '6of7': createPctWidth(6, 7),
  /**
   * The `6of11` variant of the width variants.
   */
  '6of11': createPctWidth(6, 11),
  /**
   * The `7of8` variant of the width variants.
   */
  '7of8': createPctWidth(7, 8),
  /**
   * The `7of9` variant of the width variants.
   */
  '7of9': createPctWidth(7, 9),
  /**
   * The `7of10` variant of the width variants.
   */
  '7of10': createPctWidth(7, 10),
  /**
   * The `7of11` variant of the width variants.
   */
  '7of11': createPctWidth(7, 11),
  /**
   * The `7of12` variant of the width variants.
   */
  '7of12': createPctWidth(7, 12),
  /**
   * The `8of9` variant of the width variants.
   */
  '8of9': createPctWidth(8, 9),
  /**
   * The `8of11` variant of the width variants.
   */
  '8of11': createPctWidth(8, 11),
  /**
   * The `9of10` variant of the width variants.
   */
  '9of10': createPctWidth(9, 10),
  /**
   * The `9of11` variant of the width variants.
   */
  '9of11': createPctWidth(9, 11),
  /**
   * The `10of11` variant of the width variants.
   */
  '10of11': createPctWidth(10, 11),
  /**
   * The `11of12` variant of the width variants.
   */
  '11of12': createPctWidth(11, 12),
};

/**
 * The `IMap` of the `width variants.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `Width` export of this file instead.
 */
const __map = createMap('width', width);

/**
 * A readonly copy of the `width` variants.
 */
export const Width: Readonly<typeof width> = Object.assign({}, width);

//  export individual styles

/**
 * The `0` variant of the width variants.
 */
export const width0 = Width[0];

/**
 * The `1` variant of the width variants.
 */
export const width1 = Width[1];

/**
 * The `px` variant of the width variants.
 */
export const widthPx = Width.px;

/**
 * The `2` variant of the width variants.
 */
export const width2 = Width[2];

/**
 * The `3` variant of the width variants.
 */
export const width3 = Width[3];

/**
 * The `4` variant of the width variants.
 */
export const width4 = Width[4];

/**
 * The `5` variant of the width variants.
 */
export const width5 = Width[5];

/**
 * The `6` variant of the width variants.
 */
export const width6 = Width[6];

/**
 * The `7` variant of the width variants.
 */
export const width7 = Width[7];

/**
 * The `8` variant of the width variants.
 */
export const width8 = Width[8];

/**
 * The `9` variant of the width variants.
 */
export const width9 = Width[9];

/**
 * The `10` variant of the width variants.
 */
export const width10 = Width[10];

/**
 * The `11` variant of the width variants.
 */
export const width11 = Width[11];

/**
 * The `12` variant of the width variants.
 */
export const width12 = Width[12];

/**
 * The `13` variant of the width variants.
 */
export const width13 = Width[13];

/**
 * The `14` variant of the width variants.
 */
export const width14 = Width[14];

/**
 * The `15` variant of the width variants.
 */
export const width15 = Width[15];

/**
 * The `16` variant of the width variants.
 */
export const width16 = Width[16];

/**
 * The `17` variant of the width variants.
 */
export const width17 = Width[17];

/**
 * The `18` variant of the width variants.
 */
export const width18 = Width[18];

/**
 * The `19` variant of the width variants.
 */
export const width19 = Width[19];

/**
 * The `20` variant of the width variants.
 */
export const width20 = Width[20];

/**
 * The `21` variant of the width variants.
 */
export const width21 = Width[21];

/**
 * The `22` variant of the width variants.
 */
export const width22 = Width[22];

/**
 * The `23` variant of the width variants.
 */
export const width23 = Width[23];

/**
 * The `24` variant of the width variants.
 */
export const width24 = Width[24];

/**
 * The `25` variant of the width variants.
 */
export const width25 = Width[25];

/**
 * The `auto` variant of the width variants.
 */
export const widthAuto = Width.auto;

/**
 * The `screen` variant of the width variants.
 */
export const widthScreen = Width.screen;

/**
 * The `full` variant of the width variants.
 */
export const widthFull = Width.full;

/**
 * The `1of2` variant of the width variants.
 */
export const width1of2 = Width['1of2'];

/**
 * The `1of3` variant of the width variants.
 */
export const width1of3 = Width['1of3'];

/**
 * The `1of4` variant of the width variants.
 */
export const width1of4 = Width['1of4'];

/**
 * The `1of5` variant of the width variants.
 */
export const width1of5 = Width['1of5'];

/**
 * The `1of6` variant of the width variants.
 */
export const width1of6 = Width['1of6'];

/**
 * The `1of7` variant of the width variants.
 */
export const width1of7 = Width['1of7'];

/**
 * The `1of8` variant of the width variants.
 */
export const width1of8 = Width['1of8'];

/**
 * The `1of9` variant of the width variants.
 */
export const width1of9 = Width['1of9'];

/**
 * The `1of10` variant of the width variants.
 */
export const width1of10 = Width['1of10'];

/**
 * The `1of11` variant of the width variants.
 */
export const width1of11 = Width['1of11'];

/**
 * The `1of12` variant of the width variants.
 */
export const width1of12 = Width['1of12'];

/**
 * The `2of3` variant of the width variants.
 */
export const width2of3 = Width['2of3'];

/**
 * The `2of5` variant of the width variants.
 */
export const width2of5 = Width['2of5'];

/**
 * The `2of7` variant of the width variants.
 */
export const width2of7 = Width['2of7'];

/**
 * The `2of9` variant of the width variants.
 */
export const width2of9 = Width['2of9'];

/**
 * The `2of11` variant of the width variants.
 */
export const width2of11 = Width['2of11'];

/**
 * The `3of4` variant of the width variants.
 */
export const width3of4 = Width['3of4'];

/**
 * The `3of5` variant of the width variants.
 */
export const width3of5 = Width['3of5'];

/**
 * The `3of7` variant of the width variants.
 */
export const width3of7 = Width['3of7'];

/**
 * The `3of8` variant of the width variants.
 */
export const width3of8 = Width['3of8'];

/**
 * The `3of10` variant of the width variants.
 */
export const width3of10 = Width['3of10'];

/**
 * The `3of11` variant of the width variants.
 */
export const width3of11 = Width['3of11'];

/**
 * The `4of5` variant of the width variants.
 */
export const width4of5 = Width['4of5'];

/**
 * The `4of7` variant of the width variants.
 */
export const width4of7 = Width['4of7'];

/**
 * The `4of9` variant of the width variants.
 */
export const width4of9 = Width['4of9'];

/**
 * The `4of11` variant of the width variants.
 */
export const width4of11 = Width['4of11'];

/**
 * The `5of6` variant of the width variants.
 */
export const width5of6 = Width['5of6'];

/**
 * The `5of7` variant of the width variants.
 */
export const width5of7 = Width['5of7'];

/**
 * The `5of8` variant of the width variants.
 */
export const width5of8 = Width['5of8'];

/**
 * The `5of9` variant of the width variants.
 */
export const width5of9 = Width['5of9'];

/**
 * The `5of11` variant of the width variants.
 */
export const width5of11 = Width['5of11'];

/**
 * The `5of12` variant of the width variants.
 */
export const width5of12 = Width['5of12'];

/**
 * The `6of7` variant of the width variants.
 */
export const width6of7 = Width['6of7'];

/**
 * The `6of11` variant of the width variants.
 */
export const width6of11 = Width['6of11'];

/**
 * The `7of8` variant of the width variants.
 */
export const width7of8 = Width['7of8'];

/**
 * The `7of9` variant of the width variants.
 */
export const width7of9 = Width['7of9'];

/**
 * The `7of10` variant of the width variants.
 */
export const width7of10 = Width['7of10'];

/**
 * The `7of11` variant of the width variants.
 */
export const width7of11 = Width['7of11'];

/**
 * The `7of12` variant of the width variants.
 */
export const width7of12 = Width['7of12'];

/**
 * The `8of9` variant of the width variants.
 */
export const width8of9 = Width['8of9'];

/**
 * The `8of11` variant of the width variants.
 */
export const width8of11 = Width['8of11'];

/**
 * The `9of10` variant of the width variants.
 */
export const width9of10 = Width['9of10'];

/**
 * The `9of11` variant of the width variants.
 */
export const width9of11 = Width['9of11'];

/**
 * The `10of11` variant of the width variants.
 */
export const width10of11 = Width['10of11'];

/**
 * The `11of12` variant of the width variants.
 */
export const width11of12 = Width['11of12'];

//  export the map so SASS generators can use it.
export default __map;
