import { defaultSettings } from "./defaultSettings";
import { ITheme, IPalette } from "./ITheme";

export const createThemeFromPalette = (palette: IPalette): ITheme => {
  return {
    palette,
    settings: defaultSettings,
    slots: {
      bgColor: palette.neutral.white,
      textColor: palette.neutral.darker,
    },
  };
};