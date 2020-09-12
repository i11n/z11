import { createMap } from "../util";

/**
 * The simple viewport `min-width` breakpoint map.
 */
const breakpoints = {
  /**
   * The `xs` viewport `min-width` breakpoint.
   */
  xs: '0px',
  /**
   * The `sm` viewport `min-width` breakpoint.
   */
  sm: '415px',
  /**
   * The `md` viewport `min-width` breakpoint.
   */
  md: '601px',
  /**
   * The `lg` viewport `min-width` breakpoint.
   */
  lg: '801px',
  /**
   * The `xl` viewport `min-width` breakpoint.
   */
  xl: '1025px',
  /**
   * The `xxl` viewport `min-width` breakpoint.
   */
  xxl: '1440px'
};

/**
 * The `IMap` of the viewport `min-width` breakpoints.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `breakpoint` export of this file instead.
 */
const __map = createMap('breakpoint', breakpoints);

/**
 * A readonly copy of the viewport `min-width` breakpoints.
 */
export const Breakpoint: Readonly<typeof breakpoints> = Object.assign({}, breakpoints);

//  export individual styles

/**
 * The `xs` viewport `min-width` breakpoint.
 */
export const xs = Breakpoint.xs;

/**
 * The `sm` viewport `min-width` breakpoint.
 */
export const sm = Breakpoint.sm;

/**
 * The `md` viewport `min-width` breakpoint.
 */
export const md = Breakpoint.md;

/**
 * The `lg` viewport `min-width` breakpoint.
 */
export const lg = Breakpoint.lg;

/**
 * The `xl` viewport `min-width` breakpoint.
 */
export const xl = Breakpoint.xl;

/**
 * The `xxl` viewport `min-width` breakpoint.
 */
export const xxl = Breakpoint.xxl;

//  export the map so SASS generators can use it.
export default __map;
