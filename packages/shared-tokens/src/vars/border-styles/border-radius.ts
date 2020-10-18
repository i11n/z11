const calcBorderRadius = (value: string | number): string => {
  return typeof value === 'string'
    ? value
    : `${value * .125}rem`;
};

export const borderRadius = {
  none: calcBorderRadius('none'),
  xs: calcBorderRadius(1),
  sm: calcBorderRadius(2),
  md: calcBorderRadius(3),
  lg: calcBorderRadius(4),
  xl: calcBorderRadius(5),
  full: calcBorderRadius('9999px'),
};
