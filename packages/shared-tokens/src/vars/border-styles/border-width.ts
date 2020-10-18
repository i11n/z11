const calcBorderWidth = (value: number | string): string | number => {
  return typeof value === 'string' 
    ? value
    : !!value 
      ? `${value}px`
      : value;
};

export const borderWidth = {
  px: calcBorderWidth('1px'),
  0: calcBorderWidth(0),
  1: calcBorderWidth(1),
  2: calcBorderWidth(2),
  3: calcBorderWidth(3),
  4: calcBorderWidth(4),
  5: calcBorderWidth(5),
};
