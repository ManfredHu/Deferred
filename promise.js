//依赖自定义事件event.js（可替换）

// EventEmitter = event;
var event = require('events');
var util=require('util');

var Promise = function() {
    event.call(this); //继承
}
util.inherits(Promise,event);
/**
 * [then方法]
 * @param  {[Function]} fulfilledHandler [完成]
 * @param  {[Function]} errorHandler     [失败]
 * @param  {[Function]} progressHandler  [回调]
 * @return {[Promise]}                   [Promise对象，可以链式调用]
 */
Promise.prototype.then = function(fulfilledHandler, errorHandler, progressHandler){
    if(typeof fulfilledHandler === 'function') {
        this.once('success', fulfilledHandler);
    }
    if(typeof errorHandler === 'function') {
        this.once('error', errorHandler);
    }
    if(typeof progressHandler === 'function') {
        this.on('progress', progressHandler);
    }
    return this;
};

module.exports = Promise;