const { join } = require('path');

const SASS_DIR = join('./dist', 'sass');
const SASS_REF_FILE = '_reference.scss';
const CSS_DIR = join('./dist', 'css');
const CSS_PROP_FILE = 'custom-properties.css';


module.exports = {
  SASS_DIR,
  SASS_REF_FILE,
  CSS_DIR,
  CSS_PROP_FILE,
};
