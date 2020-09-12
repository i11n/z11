import { tscTask, TscTaskOptions, parallel } from "just-scripts";
import { resolve, relative } from 'path';

const cwd = process.cwd();
const src = resolve(cwd, 'src');
const lib = resolve(cwd, 'lib');
const libCommonJs = resolve(cwd, 'lib-commonjs');
const libAmd = resolve(cwd, 'lib-amd');

const commonOptions: TscTaskOptions = {
  inlineSources: true,
  sourceMap: true,
  target: 'es5',
  rootDir: './src',
};

const commonJsOptions: TscTaskOptions = {  
  outDir: 'lib-commonjs',
  module: 'commonjs',
  sourceRoot: relative(libCommonJs, src),
  ...commonOptions,
};

const esmOptions: TscTaskOptions = {
  outDir: 'lib',
  module: 'esnext',
  sourceRoot: relative(lib, src),
  ...commonOptions,
};

const amdOptions: TscTaskOptions = {
  outDir: 'lib-amd',
  module: 'amd',
  sourceRoot: relative(libAmd, src),
  ...commonOptions,
};

const internalOptions: TscTaskOptions = {
  outDir: 'lib',
  module: 'commonjs',
  sourceRoot: relative(libCommonJs, src),
  ...commonOptions,
};

/**
 * Composes a configurable TypeScript task with `defaultOptions`.
 * 
 * @param {TscTaskOptions} defaultOptions The default options.
 */
const composeTscTask = (defaultOptions: TscTaskOptions = {}) => 
  (options: TscTaskOptions = {}) => tscTask({...defaultOptions, ...options});

/**
 * Creates a task for compiling TypeScript into CommonJS modules.
 * 
 * Outputs into `lib-commonjs/` folder.
 * 
 * @param {TscTaskOptions} options The TscTaskOptions to merge with the task defaults.
 */
export const tscCommonJsTask = composeTscTask(commonJsOptions);

/**
 * Creates a task for compiling TypeScript into ES modules.
 * 
 * Outputs into `lib/` folder.
 * 
 * @param {TscTaskOptions} options The TscTaskOptions to merge with the task defaults.
 */
export const tscEsmTask = composeTscTask(esmOptions);

/**
 * Creates a task for compiling TypeScript into AMD modules.
 * 
 * Outputs into `lib-amd/` folder.
 * 
 * @param {TscTaskOptions} options The TscTaskOptions to merge with the task defaults.
 */
export const tscAmdTask = composeTscTask(amdOptions);

/**
 * Creates a task for compiling TypeScript into CommonJS modules.
 * 
 * Outputs into `lib/` folder.
 * 
 * > **Note:** Used internally for development or utility packages that are CommonJS only.
 * 
 * @param {TscTaskOptions} options The TscTaskOptions to merge with the task defaults.
 */
export const tscInternalTask = composeTscTask(internalOptions);


/**
 * Creates a parellel task of the `tscCommonJsTask`, `tscEsmTask`, and `tscAmdTask` task.
 * 
 * Outputs into the respective folders of those tasks. Used on most packages.
 * 
 * @param {TscTaskOptions} options The TscTaskOptions to merge with the task defaults.
 */
export const tscSharedTask = (options?: TscTaskOptions) => 
  parallel(tscCommonJsTask(options), tscEsmTask(options), tscAmdTask(options));
