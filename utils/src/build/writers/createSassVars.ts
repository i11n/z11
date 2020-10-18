import { convertToCssProp } from "../../util/convertToCssProp";
import { createVarWriter } from "./createVarWriter";

export const createSassVars = createVarWriter ((prefix: string, namespace: string, prop: string, value: string | number): string =>
  `$${prefix}-${namespace}-${convertToCssProp(prop)}: ${value} !default;`
);