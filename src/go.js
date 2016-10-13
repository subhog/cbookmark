var _ = require('lodash');
var chalk = require('chalk');

module.exports = function(bookmark, isModeDisplay) {

  var database = require('./databaseLoad')();

  var results = [];
  var equal = false;

  for(var key in database) {
    if(key.startsWith(bookmark)) {
      if(key === bookmark) {
        equal = true;
        break;
      }
      results.push({
        bookmark: key,
        path: database[key],
      });
    }
  }

  if(equal || results.length === 1) {
    if(isModeDisplay) return console.log("CD");

    var path;
    if(equal) path = database[bookmark];
    else path = results[0].path;

    return console.log(path);
  }

  if(results.length === 0) {
    if(isModeDisplay) return console.log("ECHO");
    console.log('');
    console.log(chalk.red('  Unknown bookmark or command:'), bookmark);
    console.log('');
    return;
  }
  if(isModeDisplay) return console.log("ECHO");

  console.log('');
  console.log(chalk.gray('  MULTIPLE MATCHES FOUND:'));
  _.each(
    results,  
    function(item) {
      var str = item.bookmark;
      while(str.length < 20) str = str + ' ';
      console.log(
        '   ',
        chalk.green(str),
        chalk.yellow('->'),
        chalk.white(item.path)
      );
    }
  );
  console.log('');


};

