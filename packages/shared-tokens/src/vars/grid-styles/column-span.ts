const calcGridColumnSpan = (value: number | string): string => {
  return typeof value === 'string'
    ? value
    : `span ${value} / span ${value}`;
};

export const gridColumnSpan = {
  auto: calcGridColumnSpan('auto'),
  1: calcGridColumnSpan(1),
  2: calcGridColumnSpan(2),
  3: calcGridColumnSpan(3),
  4: calcGridColumnSpan(4),
  5: calcGridColumnSpan(5),
  6: calcGridColumnSpan(6),
  7: calcGridColumnSpan(7),
  8: calcGridColumnSpan(8),
  9: calcGridColumnSpan(9),
  10: calcGridColumnSpan(10),
  11: calcGridColumnSpan(11),
  12: calcGridColumnSpan(12),
};
