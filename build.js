var browserify = require('browserify');
var es6ify = require('es6ify');
var fs = require('fs');

var bundlePath = 'bundle.js';

es6ify.traceurOverrides = { asyncFunctions: true };

browserify({debug: true})
  .add(es6ify.runtime)
  .transform(es6ify.configure(/^(?!.*node_modules)+.+\.js$/))
  .require(require.resolve('./index'), { entry: true })
  .bundle()
  .pipe(fs.createWriteStream(bundlePath));
