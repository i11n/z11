const { join } = require('path');
const { cssVarsTask } = require('@z11/build')
const { CSS_DIR, CSS_PROP_FILE } = require('./constants');
const themeToCollection = require('./themeToCollection');

module.exports = (themeName) => {
  return done => {
    const theme = require('../lib')[themeName];
    const data = themeToCollection(theme);
    
    cssVarsTask(join(CSS_DIR, themeName, CSS_PROP_FILE), data, done);
  };
};
