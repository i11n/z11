import breakpoint, { Breakpoint as _Breakpoint } from "./Breakpoint";
import color, { Color as _Color } from './Color';
import depth, { Depth as _Depth } from './Depth';
import font, { Font as _Font } from './Font';
import height, { Height as _Height } from './Height';
import spacing, { Spacing as _Spacing } from "./Spacing";
import width, { Width as _Width } from "./Width";
import zindex, { ZIndex as _ZIndex } from "./ZIndex";
import grid, { Grid as _Grid } from "./Grid";
import border, { Border as _Border } from "./Border";
import opacity, { Opacity as _Opacity } from "./Opacity";
import transition, { Transition as _Transition } from "./Transition";
import transform, { Transform as _Transform } from "./Transform";

/** 
 * The complete collection of shared tokens.
*/
const shared = {
  /**
   * The collected viewport `min-width` breakpoints.
   */
  Breakpoint: _Breakpoint,
  /**
   * The collected color palette.
   */
  Color: _Color,
  /**
   * The collected font styles.
   */
  Font: _Font,
  /**
   * The collected spacing (`margin`, `padding`, etc...) variants.
   */
  Spacing: _Spacing,
  Height: _Height,
  Width: _Width,
  ZIndex: _ZIndex,
  Depth: _Depth,
  Grid: _Grid,
  Border: _Border,
  Opacity: _Opacity,
  Transition: _Transition,
  Transform: _Transform,
}

/**
 * The complete collection of shared tokens.
 * 
 * > **Note**: Exported for the purpose of creating SASS features, not for 
 * > use in libraries. Use the `Shared` export of this file instead.
 */
const __tokens = {
  breakpoint,
  color, 
  font,
  spacing,
  height,
  width,
  zindex,
  depth,
  grid,
  border,
  opacity,
  transition,
  transform,
};

/**
 * A readonly copy of complete collection of shared tokens.
 */
export const Shared: Readonly<typeof shared> = Object.assign({}, shared);

/**
 * The collected viewport `min-width` breakpoints.
 */
export const Breakpoint = Shared.Breakpoint;

/**
 * The collected color palette.
 */
export const Color = Shared.Color;

/**
 * The collected font styles.
 */
export const Font = Shared.Font;

/**
 * The collected spacing (`margin`, `padding`, etc...) variants.
 */
export const Spacing = Shared.Spacing;

export const Height = Shared.Height;

export const Width = Shared.Width;

export const ZIndex = Shared.ZIndex;

export const Depth = Shared.Depth;

export const Grid = Shared.Grid;

export const Border = Shared.Border;

export const Opacity = Shared.Opacity;

export const Transition = Shared.Transition;

export const Transform = Shared.Transform;

//  export the tokens so SASS generators can use it.
export default __tokens;
