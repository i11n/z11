const calcLineHeight = (index: number) => {
  return 1 + parseFloat((1 / 6 * index).toFixed(4));
};

export const lineHeight = {
  loosest: calcLineHeight(7),
  double: calcLineHeight(6),
  looser: calcLineHeight(5),
  loose: calcLineHeight(4),
  normal: calcLineHeight(3),
  tight: calcLineHeight(2),
  tighter: calcLineHeight(1),
  none: calcLineHeight(0),
  tightest: calcLineHeight(-1),
};
