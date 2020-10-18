import { transformScale as _transformScale } from './scale';
import { transformRotate as _transformRotate } from './rotate';
import { transformTranslate as _transformTranslate } from './translate';
import { transformSkew as _transformSkew } from './skew';

export const transformScale = _transformScale;
export const transformRotate = _transformRotate;
export const transformTranslate = _transformTranslate;
export const transformSkew = _transformSkew;

export const transform = {
  scale: transformScale,
  rotate: transformRotate,
  translate: transformTranslate,
  skew: transformSkew,
};
