import { SimpleMap, SimpleCollection } from "../types";

export const isMap = (object: SimpleMap | SimpleCollection): boolean => {
  const prop = Object.keys(object)[0];
  const test = object[prop];
  
  return typeof test !== 'object';
};
