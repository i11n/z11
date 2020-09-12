import { IThemeEffects } from "./IThemeEffects";
import { IThemeFonts } from "./IThemeFonts";
import { IThemePalette } from "./IThemePalette";
import { IThemeSlots } from "./IThemeSlots";
import { IThemeSpacing } from "./IThemeSpacing";

export interface ITheme {
  effect: IThemeEffects;
  font: IThemeFonts;
  palette: IThemePalette;
  slot: IThemeSlots;
  spacing: IThemeSpacing;
}