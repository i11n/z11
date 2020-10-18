import { fontFamily as _fontFamily } from './font-family';
import { lineHeight as _lineHeight } from './line-height';
import { baseFontSize as _baseFontSize } from './base-font-size';
import { largeFontSize as _largeFontSize } from './large-font-size';
import { letterSpacing as _letterSpacing } from './letter-spacing';

export const fontFamily = _fontFamily;
export const lineHeight = _lineHeight;
export const baseFontSize = _baseFontSize;
export const largeFontSize = _largeFontSize;
export const letterSpacing = _letterSpacing;

export const font = {
  family: fontFamily,
  leading: lineHeight,
  baseSize: baseFontSize,
  largeSize: largeFontSize,
  tracking: letterSpacing,
};
