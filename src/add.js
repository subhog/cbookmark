var chalk = require('chalk');


module.exports = function(bookmark) {
  
  if(!bookmark)
    return console.log(chalk.red('No bookmark name specified.'));

  var database = require('./databaseLoad')();
  database[bookmark] = process.cwd();
  require('./databaseSave')(database);

  console.log('');
  console.log(
    chalk.gray('  Added bookmark:'),
    chalk.green(bookmark)
  );
  console.log('');

};

