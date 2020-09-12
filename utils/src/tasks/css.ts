import { createFile, createCssVars } from "../build";
import { IMap, ICollection } from "../types";

/**
 * Iterates over a `IMap` or `ICollection` to generate CSS
 * custom properties of the values.
 * 
 * **Example**
 * ```ts
 * // just.config.js
 * const { task } = require('just-scripts');
 * 
 * task('css', done => {
 *  const data = require('some-collection);
 * 
 *  cssVarsTask('dist/css/main.css', data, done);
 * });
 * ```
 * @param fileName The output filename.
 * @param data The data to output.
 * @param done The `done` callback from the `TaskFunction`
 */
export function cssVarsTask<T extends  IMap | ICollection<any>>(
  fileName: string,
  data:T,
  done: (err?: any) => void
) {
  createFile(fileName, createCssVars(data), done);
}
