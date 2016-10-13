var chalk = require('chalk');

module.exports = function(param) {
  console.log('');
  console.log(chalk.gray('  USAGE:'));
  console.log(chalk.yellow('    cb'), chalk.green('bookmarkName'));
  console.log(chalk.yellow('    cb'), chalk.white('go'), chalk.green('bookmarkName'));
  console.log(chalk.yellow('    cb'), chalk.white('add'), chalk.green('newBookmarkName'));
  console.log(chalk.yellow('    cb'), chalk.white('remove'), chalk.green('bookmarkName'));
  console.log(chalk.yellow('    cb'), chalk.white('list'));
  console.log(chalk.yellow('    cb'), chalk.white('help'));
  console.log('');
};

