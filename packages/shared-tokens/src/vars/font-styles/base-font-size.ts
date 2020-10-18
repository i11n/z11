const calcBaseFontSize = (size: number) => {
  return `${parseFloat((size / 14).toFixed(4))}rem`;
};

export const baseFontSize = {
  xs: calcBaseFontSize(11),
  sm: calcBaseFontSize(12),
  md: calcBaseFontSize(14),
  lg: calcBaseFontSize(16),
  xl: calcBaseFontSize(20),
  '2xl': calcBaseFontSize(22),
  '3xl': calcBaseFontSize(25),
  '4xl': calcBaseFontSize(29),
  '5xl': calcBaseFontSize(32),
};
