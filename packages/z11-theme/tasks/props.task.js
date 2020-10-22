const composeThemePropsTask = require('./css/composeThemePropsTask');
const { parallel } = require('just-scripts');

const themes = [
  'DefaultTheme',
];

module.exports = parallel(
  ...themes.map(composeThemePropsTask)
);