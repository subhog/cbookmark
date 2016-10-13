var path = require('path');

module.exports = function() {
  return path.join(process.env.HOME, '.node_modules/config/cbookmark/data');
};
