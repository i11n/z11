const composeTask = require('./composeVarsTask');
const { parallel } = require('just-scripts');
const { createFile, buildFile } = require('@z11/build');
const { SASS_REF_FILE } = require('./constants');

const files = [
  'border',
  'breakpoint',
  'color',
  'depth',
  'font',
  'grid',
  'height',
  'opacity',
  'spacing',
  'transform',
  'transition',
  'width',
  'zindex',
];

module.exports = parallel(
  ...files.map(composeTask),
  (done) => {
    createFile(SASS_REF_FILE, buildFile([], ({addLine}) => {
      files.forEach(file => addLine(`@import './vars/${file}.scss';`));
    }), done);
  }
);