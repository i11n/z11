const composeThemeTask = require('./stylus/composeThemeTask');
const { parallel } = require('just-scripts');

const themes = [
  'DefaultTheme',
];

module.exports = parallel(
  ...themes.map(composeThemeTask)
);