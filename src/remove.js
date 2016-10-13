var chalk = require('chalk');

module.exports = function(bookmark) {

  if(!bookmark)
    return console.log(chalk.red('No bookmark name specified.'));

  var database = require('./databaseLoad')();
  delete database[bookmark];
  require('./databaseSave')(database);

  console.log('');
  console.log(
    chalk.gray('  Removed bookmark:'),
    chalk.green(bookmark)
  );
  console.log('');
  
};

