const makeLetterSpacing = (level: number) => {
  return level > 0 
    ? `${(.001 * 12) * (2 ** level)}`
    : level < 0 
      ? `-${(.001 * 12) * (2 ** Math.abs(level))}`
      : level;
};

export const letterSpacing = {
  loosest: makeLetterSpacing(3),
  looser: makeLetterSpacing(2),
  loose: makeLetterSpacing(1),
  normal: makeLetterSpacing(0),
  tight: makeLetterSpacing(-1),
  tighter: makeLetterSpacing(-2),
  tightest: makeLetterSpacing(-3),
};
