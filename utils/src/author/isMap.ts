import { IMap, ICollection } from "../types";

export function isMap<T extends IMap | ICollection<any>>(object: T) {
  const prop = Object.keys(object)[0];
  const test = object[prop as keyof T];
  const hasOwn = (key: string) => Object.prototype.hasOwnProperty.call(test, key);
  
  return  hasOwn('label') && hasOwn('value');
}
