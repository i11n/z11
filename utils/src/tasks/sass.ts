import { IMap, ICollection} from "../types";
import { createSassVars, createFile } from "../build";


/**
 * Iterates over a `IMap` or `ICollection` to generate SASS
 * variables of the values.
 * 
 * **Example**
 * ```ts
 * // just.config.js
 * const { task } = require('just-scripts');
 * 
 * task('sass:vars', done => {
 *  const data = require('some-collection);
 * 
 *  sassVarsTask('dist/sass/vars/_something.css', data, done);
 * });
 * ```
 * @param fileName The output filename.
 * @param data The data to output.
 * @param done The `done` callback from the `TaskFunction`
 */
export function sassVarsTask<T extends IMap | ICollection<any>>(
  fileName: string,
  data: T,
  done: (err?: any) => void
) {
  createFile(fileName, createSassVars(data), done);
}
