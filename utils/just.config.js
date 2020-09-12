const { task, cleanTask, tscTask, series } = require('just-scripts');
const { relative, resolve } = require('path');

const cwd = process.cwd();
const src = resolve(cwd, 'src');
const lib = resolve(cwd, 'lib');

task('ts:build', tscTask({  
  outDir: 'lib',
  module: 'commonjs',
  sourceRoot: relative(lib, src),
  inlineSources: true,
  sourceMap: true,
  target: 'es5',
  rootDir: './src',
}))
task('ts:clean', cleanTask({paths: ['./lib']}));
task('ts', series('ts:clean', 'ts:build'));
task('build', 'ts');
