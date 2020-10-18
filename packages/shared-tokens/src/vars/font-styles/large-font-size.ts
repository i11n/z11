const calcLargeFontSize = (size: number) => {
  return `${parseFloat((size / 12).toFixed(4))}rem`;
};

export const largeFontSize = {
  xs: calcLargeFontSize(11),
  sm: calcLargeFontSize(12),
  md: calcLargeFontSize(14),
  lg: calcLargeFontSize(16),
  xl: calcLargeFontSize(20),
  '2xl': calcLargeFontSize(22),
  '3xl': calcLargeFontSize(25),
  '4xl': calcLargeFontSize(29),
  '5xl': calcLargeFontSize(32),
};
