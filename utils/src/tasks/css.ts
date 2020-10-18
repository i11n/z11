import { createFile, createCssVars } from "../build";
import { SimpleMap, SimpleCollection} from "../types";

export const cssVarsTask = (
  fileName: string,
  prefix: string,
  namespace: string,
  data: SimpleMap | SimpleCollection,
  done: (err?: any) => void
): void =>
  createFile(fileName, createCssVars(prefix, namespace, data), done);
