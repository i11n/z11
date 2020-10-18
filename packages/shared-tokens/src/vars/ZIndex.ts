const calcZIndex = (value: number | string): number | string => {
  return typeof value === 'string'
    ? value
    : value * 10;
};

export const zindex = {
  0: calcZIndex(0),
  1: calcZIndex(1),
  2: calcZIndex(2),
  3: calcZIndex(3),
  4: calcZIndex(4),
  5: calcZIndex(5),
  6: calcZIndex(6),
  7: calcZIndex(7),
  8: calcZIndex(8),
  9: calcZIndex(9),
  10: calcZIndex(10),
  auto: calcZIndex('auto'),
};
