var fs      = require('fs');
var _       = require('lodash');
var path    = require('./databasePath')();


module.exports = function(database) {

  var lines = [];

  _.forEach(
    database,
    function(path, bookmark) {
      lines.push(bookmark + ' ' + path);
    }
  );

  fs.writeFileSync(path, lines.join('\n'));

};

