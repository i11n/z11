const calcGridRowSpan = (value: number | string): string => {
  return typeof value === 'string'
    ? value
    : `span ${value} / span ${value}`;
};

export const gridRowSpan = {
  auto: calcGridRowSpan('auto'),
  1: calcGridRowSpan(1),
  2: calcGridRowSpan(2),
  3: calcGridRowSpan(3),
  4: calcGridRowSpan(4),
  5: calcGridRowSpan(5),
  6: calcGridRowSpan(6),
};
