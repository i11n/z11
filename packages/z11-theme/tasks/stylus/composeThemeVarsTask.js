const { stylusVarsTask } = require('@z11/build');
const { join } = require('path');
const { STYL_DIR, THEME_DIR, STYL_VAR_DIR } = require('../constants');

module.exports = (themeName, file) => {
  return done => {
    const theme = require('../../lib')[themeName];
    const data = theme[file];
    
    stylusVarsTask(join(STYL_DIR, THEME_DIR, themeName, STYL_VAR_DIR, `${file}.styl`), 'z-theme', file, data, done);
  };
}