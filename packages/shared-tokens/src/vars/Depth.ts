import { createMap } from "../util/createMap";
import { display } from "./Color";

const hex2rgb = (hex: string): [number, number, number] => {
  const regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
  const result = regex.exec(hex);

  if (result) {
    const [,r, g, b] = result;

    return [r, g, b].map(v => parseInt(v, 16)) as [number, number, number];
  }
  
  return [0, 0, 0];
}
/**
 * Calculates a stacked depth variant based on the variant index and the max number of variants.
 * 
 * 1. Calculate the alpha value (`opacity`) as a 2-decimal float alpha of `(variantMax * 2) - index`.
 * 2. Calulate the numeric `depth` of `index * 5`.
 * 3. Calculate the first `y-offset` (`yOffset1`) as a 2-decimal float `y-offset` of `depth * 0.9`.
 * 4. Calculate the first `blur` (`blur1`) as a 2-decimal float `blur` of `yOffset1 * 3`.
 * 5. Calculate the second `y-offset` (`yOffset2`) as a 2-decimal float `y-offset` of `2 ** index`.
 * 6. Calculate the second `blur` (`blur2`) as a 2-decimal float `blur` of `yOffset1 * 10`.
 * 7. Apply the values above as followed:
 *  * `yOffset1` as the `y-offset` for `box-shadow` 1
 *  * `blur1` as the `blur` for `box-shadow` 1
 *  * `yOffset2` as the `y-offset` for `box-shadow` 2
 *  * `blur2` as the `blur` for `box-shadow` 2
 *  * `opacity` as the alpha value for the color black for both `box-shadow` shadow color.
 * 
 * > **Note:** index 0 is a special case that is NOT calculated,
 * > but instead is configured with no offset or blur and is transparent.
 * 
 * @param index The index of the spacing variant to calculate.
 */
const createDepth = (index: number): string => {
  index = index - 1;

  const variantMax = 5;
  const [r, g, b] = hex2rgb(display.black);
  const opacity = parseFloat((((variantMax * 2) - index) * .05).toFixed(2));
  const depth = (index) * 5;
  const offset1 = parseFloat((depth * .09).toFixed(2));
  const blur1 = parseFloat((offset1 * 3).toFixed(2));
  const offset2 = parseFloat((2 ** index).toFixed(2));
  const blur2 = parseFloat((offset1 * 10).toFixed(2));

  return [
    `0 ${offset1}px ${blur1}px 0 rgba(${r}, ${g}, ${b}, ${opacity})`,
    `0 ${offset2}px ${blur2}px 0 rgba(${r}, ${g}, ${b}, ${opacity})`,
  ].join(', ');
};


/**
 * The simple depth `box-shadow` map.
 */
const depth = {
  /**
   * The `0` variant of the depth `box-shadow` variants.
   */
  0: '0 0 0 0 transparent',
  /**
   * The `1` variant of the depth `box-shadow` variants.
   */
  1: createDepth(1),
  /**
   * The `2` variant of the depth `box-shadow` variants.
   */
  2: createDepth(2),
  /**
   * The `3` variant of the depth `box-shadow` variants.
   */
  3: createDepth(3),
  /**
   * The `4` variant of the depth `box-shadow` variants.
   */
  4: createDepth(4),
  /**
   * The `5` variant of the depth `box-shadow` variants.
   */
  5: createDepth(5),
};

/**
 * The `IMap` of the depth `box-shadow` variants.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `Depth` export of this file instead.
 */
const __map = createMap('depth', depth);

/**
 * A readonly copy of the depth `box-shadow` breakpoints.
 */
export const Depth: Readonly<typeof depth> = Object.assign({}, depth);

//  export individual styles

/**
 * The `0` variant of the depth `box-shadow` variants.
 */
export const depth0 = Depth[0];

/**
 * The `1` variant of the depth `box-shadow` variants.
 */
export const depth1 = Depth[1];

/**
 * The `2` variant of the depth `box-shadow` variants.
 */
export const depth2 = Depth[2];

/**
 * The `3` variant of the depth `box-shadow` variants.
 */
export const depth3 = Depth[3];

/**
 * The `4` variant of the depth `box-shadow` variants.
 */
export const depth4 = Depth[4];

/**
 * The `5` variant of the depth `box-shadow` variants.
 */
export const depth5 = Depth[5];

//  export the map so SASS generators can use it.
export default __map;
