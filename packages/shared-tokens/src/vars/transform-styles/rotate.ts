
const calcRotation = (index: number): string => `${index * 45}deg` ;

export const transformRotate = {
  0: calcRotation(0),
  45: calcRotation(1),
  90: calcRotation(2),
  135: calcRotation(3),
  180: calcRotation(4),
  225: calcRotation(5),
  270: calcRotation(6),
  315: calcRotation(7),
};
