const { task, parallel, series, cleanTask } = require('just-scripts');
const { tscInternalTask } = require('@z11/build');
const varsTask = require('./tasks/vars.task');

task('sass', series(cleanTask({paths: ['dist/sass']}), varsTask));
task('ts', series(cleanTask({paths: ['lib']}), tscInternalTask()));
task('build', series('ts', 'sass'));