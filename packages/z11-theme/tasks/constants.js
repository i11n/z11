const { join } = require('path');

const CSS_DIR = join('./dist', 'css');
const CSS_FILE = 'theme-properties.css';
const STYL_DIR = join('./dist', 'styl');
const THEME_DIR = 'themes';
const STYL_VAR_DIR = 'var';
const STYL_REF_FILE = 'reference.styl';
const STYL_THEME_MAP_FILE = 'theme-map.styl';

/**
 * dist/
 *  css/  //  CSS_DIR
 *    THEME_DIR/
 *      {THEME_NAME}/
 *        theme-properties.css
 *  styl/ //  STYL_DIR
 *    functions/
 *    mixins/
 *    theme-map.styl
 *    THEME_DIR/
 *      {THEME_NAME}/
 *        reference.styl  //  includes ./STYL_VAR_DIR/{file}.styl, ./theme-map.styl, ../../functions, and ../../mixins,
 *        STYL_VAR_DIR/
 *          {file}.styl
 */

module.exports = {
  CSS_DIR,
  CSS_FILE,
  STYL_DIR,
  THEME_DIR,
  STYL_VAR_DIR,
  STYL_REF_FILE,
  STYL_THEME_MAP_FILE,
};
