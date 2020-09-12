import { SimpleMap, IMap, IVariant } from "../types";


export function createMap<T = SimpleMap>(label: string, variantMap: T): IMap<T> {
  let innerMap: Partial<IMap<T>> = {};

  Object.keys(variantMap).forEach(key => {
    (innerMap as {[key: string]: IVariant})[key] = {
      label: `${label}${key.charAt(0).toUpperCase()}${key.substr(1)}`,
      value: (variantMap as unknown as {[key: string]: string})[key],
    };
  });

  return innerMap as IMap<T>;
}
