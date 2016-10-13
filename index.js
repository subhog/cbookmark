#! /usr/bin/env node
var fs      = require('fs');
var path    = require('path');
var mode    = process.argv[2];
var param   = process.argv[3];



var modes = {
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



ensureFile('.node_modules', true, function() {
  ensureFile('.node_modules/config', true, function () {
    ensureFile('.node_modules/config/cbookmark', true, function () {
      ensureFile('.node_modules/config/cbookmark/data', false, function() {
        if(!mode)
          return modes.help();
        if(modes[mode])
          return modes[mode](param);
        return modes.go(mode);
      });
    });
  });
});



