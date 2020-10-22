const { STYLE_BANNER, buildFile, createFile } = require('@z11/build');
const { parallel } = require('just-scripts');
const { join } = require('path');

const composeThemeVarsTask = require('./composeThemeVarsTask');
const { STYL_DIR, THEME_DIR, STYL_REF_FILE } = require('../constants');
const files = [
  'palette',
  'slots',
  'settings',
];

module.exports = (theme) => {
  const refFile = join(STYL_DIR, THEME_DIR, theme, STYL_REF_FILE);
  return parallel(
    ...files.map(file => composeThemeVarsTask(theme, file)),
    (done) => {
      createFile(refFile, buildFile(STYLE_BANNER, ({addLine}) => {
        files.forEach(file => addLine(`@import "./var/${file}"`));
        addLine(`@import "../../theme-map.styl"`);
        addLine(`@import "../../functions"`);
        addLine(`@import "../../mixins"`);
      }), done);
  });
}