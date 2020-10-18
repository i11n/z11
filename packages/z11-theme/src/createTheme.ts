import { ITheme, IPalette } from "./ITheme";
import { boxShadow, font, spacing } from "@z11/shared-tokens";

export const createThemeFromPalette = (palette: IPalette): ITheme => {
  return {
    palette,
    settings: {
      font: font.family.sansGhost,
      smallFontSize: font.baseSize.sm,
      baseFontSize: font.baseSize.md,
      lgFontSize: font.baseSize.lg,
      xlFontSize: font.baseSize.xl,
      '2xlFontSize': font.baseSize['2xl'],
      '3xlFontSize': font.baseSize['3xl'],
      '4xlFontSize': font.baseSize['4xl'],
      '5xlFontSize': font.baseSize['5xl'],
      headingFont: 'inherit',
      boldWeight: 600,
      strongWeight: 700,
      headingWeight: 100,
      leading: font.leading.normal,
      headingLeading: font.leading.normal,
      rhythm: spacing[2],
      focusBoxShadow: boxShadow.outline,
      responsiveFont: true,
      responsiveFontBreakpoint: '1.25vw',
      smallFontSizeLg: font.largeSize.sm,
      baseFontSizeLg: font.largeSize.md,
      lgFontSizeLg: font.largeSize.lg,
      xlFontSizeLg: font.largeSize.xl,
      '2xlFontSizeLg': font.largeSize['2xl'],
      '3xlFontSizeLg': font.largeSize['3xl'],
      '4xlFontSizeLg': font.largeSize['4xl'],
      '5xlFontSizeLg': font.largeSize['5xl'],
    },
    slots: {
      bgColor: palette.neutral.white,
      textColor: palette.neutral.darker,
    }
  }
}