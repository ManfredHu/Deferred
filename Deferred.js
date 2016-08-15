var Promise = require('./promise.js');

var Deferred = function() {
    this.state = 'unfulfilled';
    this.promise = new Promise();
};

Deferred.prototype.resolve = function(obj) {
    this.state = 'fulfilled'; //完成
    this.promise.emit('success', obj);
};

Deferred.prototype.reject = function(obj) {
    this.state = 'failed'; //失败
    this.promise.emit('error', obj);
};

Deferred.prototype.progress = function(data) {
    this.promise.emit('progress', data);
};

//node的处理模块
Deferred.prototype.makeNodeResolver = function(){
    return function(error,value){
        if(error){
            //错误reject
            this.reject(error);
        }else if(arguments.length>2){
            this.resolve(Array.prototype.slice(arguments, 1));
        }else{
            this.resolve(value);
        }
    }.bind(this);
};

module.exports = Deferred;

