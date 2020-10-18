const calcGridTemplateColumns = (value: number | string): string => {
  return typeof value === 'string'
    ? value
    : `repeat(${value}, minmax(0, 1fr))`;
};

export const gridTemplateColumns = {
  0: calcGridTemplateColumns('none'),
  1: calcGridTemplateColumns(1),
  2: calcGridTemplateColumns(2),
  3: calcGridTemplateColumns(3),
  4: calcGridTemplateColumns(4),
  5: calcGridTemplateColumns(5),
  6: calcGridTemplateColumns(6),
  7: calcGridTemplateColumns(7),
  8: calcGridTemplateColumns(8),
  9: calcGridTemplateColumns(9),
  10: calcGridTemplateColumns(10),
  11: calcGridTemplateColumns(11),
  12: calcGridTemplateColumns(12),
};
