const { join } = require('path');
const { sassVarsTask } = require('@z11/build')
const { SASS_VAR_DIR, SASS_DIR, SASS_REF_FILE } = require('./constants');
const themeToCollection = require('./themeToCollection');

module.exports = (themeName) => {
  return done => {
    const theme = require('../lib')[themeName];
    const data = themeToCollection(theme);
    
    sassVarsTask(join(SASS_DIR, themeName, SASS_REF_FILE), data, done);
  };
};
