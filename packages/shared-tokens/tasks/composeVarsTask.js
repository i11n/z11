const { join } = require('path');
const { stylusVarsTask } = require('@z11/build');
const { STYL_VAR_DIR } = require('./constants');

module.exports = (vars) => {
  return done => {
    const shared = require('../lib');
    const data = shared[vars];
    
    stylusVarsTask(join(STYL_VAR_DIR, `${vars}.styl`), 'z', vars, data, done);
  };
};
