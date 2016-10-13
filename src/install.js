var _       = require('lodash');
var fs      = require('fs');
var path    = require('path');
var chalk   = require('chalk');
var profile = path.join(process.env.HOME, '.profile');


var check = '# CB_FUNCTION #';
var bash = `

# CB_FUNCTION #

function cb() {
  MODE="$(cb_process mode $@)"
  if [ "$MODE" = "ECHO" ]; then
    cb_process run $@
  else
    echo -e ""
    echo -e "  \\033[90mFROM ->\\033[0m $(pwd)"
    cd   "$(cb_process run $@)"
    echo -e "    \\033[32mTO ->\\033[0m $(pwd)"
    echo -e ""
  fi
}

# END_CB_FUNCTION #

`;





var output = function() {
  console.log('');
  console.log(chalk.gray('  CB TOOL INSTALLED!'));
  console.log(
    chalk.white('    Restart your terminal or run'),
    chalk.green('source ~/.profile'),
    chalk.white('to use the'),
    chalk.green('cb'),
    chalk.white('command.')
  );
  console.log(
    chalk.white('    For info check README at'),
    chalk.green('http://github.com/subhog/cbookmark'),
    chalk.white('')
  );
  console.log('');
};


module.exports = function() {
  var needsInstallation = !_.includes(
    fs.readFileSync(profile, 'utf8').split('\n'),
    check
  );

  if(!needsInstallation) return output();
  fs.writeFile(profile, bash, {flag: 'a'}, output);
};
