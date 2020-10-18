const composeTask = require('./composeVarsTask');
const { parallel } = require('just-scripts');
const { createFile, buildFile } = require('@z11/build');
const { STYL_REF_FILE } = require('./constants');

const files = [
  'border',
  'breakpoint',
  'color',
  'boxShadow',
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
    createFile(STYL_REF_FILE, buildFile([], ({addLine}) => {
      files.forEach(file => addLine(`@import "./vars/${file}"`));
    }), done);
  }
);