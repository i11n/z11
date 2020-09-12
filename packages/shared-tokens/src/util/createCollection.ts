import { SimpleCollection, ICollection, SimpleMap, IMap } from "../types";

export function createCollection<T = {[key: string]: SimpleMap}>(label: string, collectionMap: SimpleCollection<T>): ICollection<T> {
  const innerCollection: Partial<ICollection<T>> = {};

  Object.keys(collectionMap).forEach(variantName => {
    const variants = collectionMap[variantName as keyof T];
    const innerVariant: IMap = {};

    Object.keys(variants).forEach(key => {
      const variant = variants[key as keyof typeof variants]
      const { label:vLabel, value } = variant;

      innerVariant[key] = {
        label: `${label}-${vLabel}`,
        value: `${value}`,
      };
    });

    innerCollection[variantName as keyof T] = innerVariant;
  });

  return innerCollection as ICollection<T>;
}
