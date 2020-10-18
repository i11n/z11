const calcGridTemplateRows = (value: number | string): string => {
  return typeof value === 'string'
    ? value
    : `repeat(${value}, minmax(0, 1fr))`;
};

export const gridTemplateRows = {
  0: calcGridTemplateRows(0),
  1: calcGridTemplateRows(1),
  2: calcGridTemplateRows(2),
  3: calcGridTemplateRows(3),
  4: calcGridTemplateRows(4),
  5: calcGridTemplateRows(5),
  6: calcGridTemplateRows(6),
};
