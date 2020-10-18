import { convertToCssProp } from "../../util";
import { createVarWriter } from "./createVarWriter";

export const createCssVars = createVarWriter((prefix: string, namespace: string, prop: string, value: string | number): string =>
  `  --${prefix}-${namespace}-${convertToCssProp(prop)}: ${value};`
);