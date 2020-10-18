import { SimpleMap, SimpleCollection} from "../types";
import { createSassVars, createFile } from "../build";

export const sassVarsTask = (
  fileName: string,
  prefix: string,
  namespace: string,
  data: SimpleMap | SimpleCollection,
  done: (err?: any) => void
): void =>
  createFile(fileName, createSassVars(prefix, namespace, data), done);
