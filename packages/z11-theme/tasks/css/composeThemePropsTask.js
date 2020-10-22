const { join } = require('path');
const { createCssVars, createFile } = require('@z11/build');
const { CSS_DIR, CSS_FILE, THEME_DIR } = require('../constants');

const files = [
  'palette',
  'slots',
  'settings',
];

module.exports = (themeName) => {
  return done => {
    const fileName = join(CSS_DIR, THEME_DIR, themeName, CSS_FILE);
    const dataList = [':root {'];
    files.forEach(file => {
      const theme = require('../../lib')[themeName];
      const data = theme[file];
      const buffer = createCssVars('z-theme', file, data);
      dataList.push(buffer.toString());      
    });
    dataList.push('}');
    const dataBuffer = Buffer.from(dataList.join('\n'));
    createFile(fileName, dataBuffer, done);
  };
};
