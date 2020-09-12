const { join } = require('path');

const SASS_DIR = join('./dist', 'sass');
const SASS_VAR_DIR = join(SASS_DIR, 'var');
const SASS_REF_FILE = join(SASS_DIR, '_reference.scss');

module.exports = {
  SASS_DIR,
  SASS_VAR_DIR,
  SASS_REF_FILE,
};
