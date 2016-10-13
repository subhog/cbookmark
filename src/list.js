var _ = require('lodash');
var chalk = require('chalk');


module.exports = function() {

  var database = require('./databaseLoad')();
  console.log('');
  console.log(chalk.gray('  BOOKMARKS:'));
  _.forEach(
    database,
    function(path, bookmark) {
      var str = bookmark;
      while(str.length < 20) str = str + ' ';
      console.log(
        '   ',
        chalk.green(str),
        chalk.yellow('->'),
        chalk.white(path)
      );
    }
  );
  console.log('');

};

