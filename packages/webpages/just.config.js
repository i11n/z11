const { convertStylus } = require('@z11/build');
const { series, task, cleanTask } = require('just-scripts');

task('build', series(cleanTask({paths: ['dist/css']}), convertStylus('./src/z11-webpages.styl', './dist/css/z11-webpages.css')));
