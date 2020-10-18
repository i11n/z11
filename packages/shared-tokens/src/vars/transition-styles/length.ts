const calcTransitionLength = (index: number): string => `${index * 200}ms` ;

export const transitionLength = {
  0: calcTransitionLength(0),
  1: calcTransitionLength(1),
  2: calcTransitionLength(2),
  3: calcTransitionLength(3),
  4: calcTransitionLength(4),
  5: calcTransitionLength(5),
};
