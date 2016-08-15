var Deferred = require('./Deferred.js');
var fs = require('fs');

var readFile = function(file, encoding) {
    console.log('--------readFile--------');
    var deferred = new Deferred();
    fs.readFile(file,encoding,deferred.makeNodeResolver());
    return deferred.promise;
};
readFile('./readme.md', {encoding: 'utf8'}).then(function(data){
    console.log(data);
}, function(err){
    console.log('err:' + err);
});

