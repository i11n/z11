const { task, parallel, series, cleanTask } = require('just-scripts');
const { tscInternalTask } = require('@z11/build');
const varsTask = require('./tasks/vars.task');

task('styl', series(cleanTask({paths: ['dist/styl']}), varsTask));
task('ts', series(cleanTask({paths: ['lib']}), tscInternalTask()));
task('build', series('ts', 'styl'));
