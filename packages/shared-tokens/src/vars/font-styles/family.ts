import { createMap } from "../../util";

/**
 * The simple `font-family` styles map.
 */
const styles = {
  /**
   * The `sans` style of the `font-family` styles.
   */
  sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  /**
   * The `sans` style of the `font-family` styles.
   */
  serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
  /**
   * The `sans` style of the `font-family` styles.
   */
  mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
};

/**
 * The `IMap` of the `font-family` style variants.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `fontFamily` export of this file instead.
 */
const __map = createMap('family', styles);

/**
 * A readonly copy of the `font-family` styles.
 */
export const family: Readonly<typeof styles> = Object.assign({}, styles);

//  export individual styles

/**
 * The `sans` style of the `font-family` styles.
 */
export const sans = family.sans;

/**
 * The `serif` style of the `font-family` styles.
 */
export const serif = family.serif;

/**
 * The `mono` style of the `font-family` styles.
 */
export const mono = family.mono;

//  export the map so SASS generators can use it.
export default __map;
