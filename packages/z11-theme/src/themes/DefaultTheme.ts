import { IPalette, ISlotsPalette } from "../ITheme";
import { color } from "@z11/shared-tokens";

const { cyan, magenta, gray } = color;

const palette: IPalette = {
  primary: {
    base: cyan[400],
    dark: cyan[500],
    darker: cyan[700],
    darkest: cyan[900],
    light: cyan[200],
    lighter: cyan[50],
    lightest: cyan[25],
  },
  accent: {
    base: magenta[400],
    dark: magenta[500],
    darker: magenta[700],
    darkest: magenta[900],
    light: magenta[200],
    lighter: magenta[50],
    lightest: magenta[25],
  },
  neutral: {
    white: gray[0],
    base: gray[400],
    dark: gray[500],
    darker: gray[700],
    darkest: gray[900],
    light: gray[200],
    lighter: gray[50],
    lightest: gray[25],
    black: gray[1000],
  },
};

