import { transitionLength as _transitionLength } from './length';
import { transitionProperties as _transitionProperties } from './property';

export const transitionLength = _transitionLength;
export const transitionProperties = _transitionProperties;

export const transition = {
  length: transitionLength,
  properties: transitionProperties,
};
