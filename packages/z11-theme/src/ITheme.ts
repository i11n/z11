
export interface IThemePalette {
  base: string;
  dark: string;
  darker: string;
  darkest: string;
  light: string;
  lighter: string;
  lightest: string;
}

export interface INeutralPalette extends IThemePalette{
  white: string;
  black: string;
}

export interface IPalette {
  primary: IThemePalette;
  accent: IThemePalette;
  neutral: INeutralPalette
}

export interface ISlotsPalette {
  /**
   * The default background color
   */
  bg: string;
  /**
   * The default text color
   */
  text: string;
  divider: string;
  subText: string;
  delBg: string;
  delText: string;
  markBg: string;
  insBg: string;
  insText: string;
  delNestedBg: string;
  delNestedText: string;
  insNestedBg: string;
  insNestedText: string;
  emText: string;
  linkText: string;
  linkHoverText: string;
  codeBg: string;
  codeText: string;
  kbdBg: string;
  kbdText: string;
  preBg: string;
  preText: string;
}

export type ISettings = ISetSettings | (ISetSettings & IResponsiveFontSettings);

export interface ISetSettings {
  left: string;
  /**
   * If set, overwrites the outline of :focus with a box-shadow.
   */
  focusBoxShadow?: string;
  /**
   * The base `font-size` for the `<small>` and monospace elements.
   */
  smallFontSize: string;
  /**
   * The base `font-size` for all normal text and `<h6>`.
   */
  baseFontSize: string;
  /**
   * The base `font-size` for leading text and `<h5>`.
   */
  lgFontSize: string;
  /**
   * The base `font-size` for `<h4>`.
   */
  xlFontSize: string;
  /**
   * The base `font-size` for `<h3>`.
   */
  xxlFontSize: string;
  /**
   * The base `font-size` for `<h2>`.
   */
  '3xlFontSize': string;
  /**
   * The base `font-size` for `<h1>`.
   */
  '4xlFontSize': string;
  /**
   * The base `font-size` for title headers.
   */
  '5xlFontSize': string;
  /**
   * The base font for text.
   */
  font: string;
  /**
   * The base line-height for text.
   */
  leading: number | string;
  /**
   * Font weight for `<b>` elements.
   */
  boldWeight: number | string;
  /**
   * Font weight for `<strong>` elements.
   */
  strongWeight: number | string;
  /**
   * The font for headings
   */
  headingFont: string;
  /**
   * The line height for headings
   */
  headingLeading: number | string;
  /**
   * The font weight for headings
   */
  headingWeight: number | string;
  /**
   * The vertical rhythm (top and bottom spacing) between text. Horizontal rhythm is automatically 2X this.
   */
  rhythm: string;

  dividerSize: string;

  listPadding: string;
  olCounterSeparator: string;
  olCounter1: string;
  olCounter2: string;
  olCounter3: string;
  ulBullet1: string;
  ulBullet2: string;
  ulBullet3: string;
  ulBulletSpacing: string;
  monoFont: string;
  roundedSm: string;
  roundedMd: string;
  roundedLg: string;
  monoBoldWeight: string | number;
}

export interface IResponsiveFontSettings {
  /**
   * Whether to use responsive text or not.
   */
  responsiveFont: true;
  /**
   * The breakpoint at which the text goes from normal to large.
   */
  responsiveFontBreakpoint: string;
  /**
   * The large `font-size` for the `<small>` and monospace elements.
   */
  smallFontSizeLg: string;
  /**
   * The large `font-size` for all normal text and `<h6>`.
   */
  baseFontSizeLg: string;
  /**
   * The large `font-size` for leading text and `<h5>`.
   */
  lgFontSizeLg: string;
  /**
   * The large `font-size` for `<h4>`.
   */
  xlFontSizeLg: string;
  /**
   * The large `font-size` for `<h3>`.
   */
  xxlFontSizeLg: string;
  /**
   * The large `font-size` for `<h2>`.
   */
  '3xlFontSizeLg': string;
  /**
   * The large `font-size` for `<h1>`.
   */
  '4xlFontSizeLg': string;
  /**
   * The large `font-size` for title headers.
   */
  '5xlFontSizeLg': string;
}

export interface ITheme {
  palette: IPalette;
  slots: ISlotsPalette;
  settings: ISettings;
}