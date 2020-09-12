const { task, cleanTask, series, parallel } = require('just-scripts');
const { tscInternalTask } = require('@z11/build');
const cssVarsTask = require('./tasks/cssVars.task');
const sassVarsTask = require('./tasks/sassVars.task');

task('css:default-theme', cssVarsTask('DefaultTheme'));
task('sass:default-theme', sassVarsTask('DefaultTheme'));

task('sass', series(cleanTask({paths: ['dist/sass']}), parallel('sass:default-theme')));
task('css', series(cleanTask({paths: ['dist/css']}), parallel('css:default-theme')));

task('ts', series(cleanTask({paths: ["lib"]}), tscInternalTask()));
task('build', series('ts', parallel('sass', 'css')));