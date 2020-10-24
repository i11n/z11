import { defaultSettings } from "./defaultSettings";
import { color } from "@z11/shared-tokens";
import { ITheme, IPalette } from "./ITheme";

export const createThemeFromPalette = (palette: IPalette): ITheme => {
  return {
    palette,
    settings: defaultSettings,
    slots: {
      bg: palette.neutral.white,
      text: palette.neutral.darker,
      divider: palette.neutral.lightest,
      subText: palette.neutral.light,
      delBg: color.red[25],
      delNestedBg: color.red[50],
      delText: color.red[500],
      delNestedText: color.red[600],
      insBg: color.green[25],
      insNestedBg: color.green[50],
      insText: color.green[500],
      insNestedText: color.green[600],
      markBg: color.yellow[25],
      emText: palette.accent.base,
      linkText: color.cyan[400],
      linkHoverText: color.cyan[500],
      codeBg: palette.accent.lightest,
      codeText: palette.accent.base,
      kbdBg: palette.neutral.darker,
      kbdText: palette.neutral.white,
      preBg: palette.neutral.lightest,
      preText: palette.neutral.base,
    },
  };
};