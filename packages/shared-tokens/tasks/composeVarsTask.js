const { join } = require('path');
const { sassVarsTask } = require('@z11/build')
const { SASS_VAR_DIR } = require('./constants');

module.exports = (vars) => {
  return done => {
    const shared = require('../lib').default;
    const data = shared[vars];
    
    sassVarsTask(join(SASS_VAR_DIR, `_${vars}.scss`), data, done);
  };
};
