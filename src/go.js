var _ = require('lodash');
var chalk = require('chalk');

module.exports = function(bookmark) {

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
    var path;
    if(equal) path = database[bookmark];
    else path = results[0].path;

    console.log('');
    console.log(chalk.green('  Bookmark found:'), path);
    console.log('');
    return;
  }

  if(results.length === 0) {
    console.log('');
    console.log(chalk.red('  Unknown bookmark or command:'), bookmark);
    console.log('');
    return;
  }

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

