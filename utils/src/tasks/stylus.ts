import { SimpleMap, SimpleCollection} from "../types";
import { createStylusVars, createFile } from "../build";

export const stylusVarsTask = (
  fileName: string,
  prefix: string,
  namespace: string,
  data: SimpleMap | SimpleCollection,
  done: (err?: any) => void
): void =>
  createFile(fileName, createStylusVars(prefix, namespace, data), done);
