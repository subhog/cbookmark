var fs      = require('fs');
var _       = require('lodash');
var path    = require('./databasePath')();


module.exports = function() {

  var database = {};
  _.forEach(
    fs.readFileSync(path, 'utf8').split('\n'),
    function(line) {
      var i = line.indexOf(' ');
      database[line.substr(0, i)] = line.substr(i+1);
    }
  );
  return database;

};

