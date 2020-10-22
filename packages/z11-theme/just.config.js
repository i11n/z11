const { tscInternalTask } = require('@z11/build');
const { task, cleanTask, series, copyTask, parallel } = require('just-scripts');
const propsTask = require('./tasks/props.task');
const varsTask = require('./tasks/vars.task');

//  css task to build the theme folders containing the CSS custom properties
//  styl task to build the theme folders containing both the styl variables and theme map
//  variables are written to files in the var folder
//  theme map contains the variables mapped to the name without the z11-theme
//  mixins are also included in each theme for the fallback
//    prop: ...styl-var
//    prop: ...var(--css-prop, styl-var)

task('css', series(cleanTask({paths: ['dist/css']}), propsTask));

task('styl:themes', varsTask);
task('styl:copy', copyTask({paths: ['src/styl'], dest: 'dist/styl'}));

task('styl', series(cleanTask({paths: ['dist/styl']}), parallel('styl:copy', 'styl:themes')));
task('ts', series(cleanTask({paths: ['lib']}), tscInternalTask()));

task('build', series('ts', 'styl', 'css'));