#! /usr/bin/env node
var fs      = require('fs');
var path    = require('path');
var mode    = process.argv[2];
var command = process.argv[3];
var param   = process.argv[4];



var commands = {
  add:    require('./src/add'),
  help:   require('./src/help'),
  list:   require('./src/list'),
  remove: require('./src/remove'),
  go:     require('./src/go'),
};



var ensureFile = function(f, isFolder, cb) {
  var file = path.join(process.env.HOME, f);
  fs.stat(file, function(err, stat) {
    if(stat) return cb();
    if(isFolder)
      fs.mkdir(folder, cb);
    else
      fs.writeFile(file, '', {flag: 'a'}, cb);
  });
};


if(mode === 'install') {
  ensureFile('.profile', false, function() {
    require('./src/install')();
  });
  return;
}

if(mode === 'run') {
  ensureFile('.node_modules', true, function() {
    ensureFile('.node_modules/config', true, function () {
      ensureFile('.node_modules/config/cbookmark', true, function () {
        ensureFile('.node_modules/config/cbookmark/data', false, function() {
          if(!command)
            return commands.help();
          if(commands[command])
            return commands[command](param);
          return commands.go(command);
        });
      });
    });
  });
  return;
}

if(mode === 'mode') {
  ensureFile('.node_modules', true, function() {
    ensureFile('.node_modules/config', true, function () {
      ensureFile('.node_modules/config/cbookmark', true, function () {
        ensureFile('.node_modules/config/cbookmark/data', false, function() {
          if(!command)
            return console.log("ECHO");
          if(commands[command]) {
            if(command === 'go')
              return commands.go(param, true);
            return console.log("ECHO");
          }
          return commands.go(command, true);
        });
      });
    });
  });
  return;
}




