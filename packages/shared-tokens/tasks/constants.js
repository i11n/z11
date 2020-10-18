const { join } = require('path');

const STYL_DIR = join('./dist', 'styl');
const STYL_VAR_DIR = join(STYL_DIR, 'var');
const STYL_REF_FILE = join(STYL_DIR, 'reference.styl');

module.exports = {
  STYL_DIR,
  STYL_VAR_DIR,
  STYL_REF_FILE,
};
