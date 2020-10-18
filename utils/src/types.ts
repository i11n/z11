export interface SimpleMap {
  [key: string]: string | number;
};

export interface SimpleCollection {
  [key: string]: SimpleMap
};
