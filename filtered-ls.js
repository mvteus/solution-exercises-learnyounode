module.exports = function (pathToDir, extension, callback) {

  var fs = require('fs');
  var path = require('path');
  this.pathToDir = pathToDir;
  this.extension = extension;
  var data = [];

  fs.readdir(this.pathToDir, function (err, files) {
    if (err) return callback(err);

    for (var key in files) {
      if (path.extname(files[key]).split('.').join('') === this.extension) {
        console.log(files[key]);
        data.push(files[key]);
      }
    }

    return callback(null, data);

  });
}
// Official solution
/*
var fs = require('fs')
var path = require('path')

  fs.readdir(process.argv[2], function (err, list) {
    list.forEach(function (file) {
      if (path.extname(file) === '.' + process.argv[3])
        console.log(file)
    })
  })
*/
