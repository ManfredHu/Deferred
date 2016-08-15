/*
 *定义一个事件对象，其下的handlers为多个类型的事件队列对象
 */
function event() {
    this.handlers = {};
}

/*重写event的原型*/
event.prototype = {
    constructor: event, //维护contructor属性

    /*监听函数*/
    on: function(type, handler) {
        /*如果没有这个类型的事件队列则创建一个*/
        if (typeof this.handlers[type] == "undefined") {
            this.handlers[type] = [];
        }
        /*添加事件到对应类型的事件队列里面*/
        this.handlers[type].push(handler);
    },

    /*触发函数*/
    emit: function(type) {
        /*当handlers对象下面已经建立起对应类型的队列的时候*/
        if (this.handlers[type] instanceof Array) {
            var eventList = this.handlers[type];
            var args = Array.prototype.slice.call(arguments,1);
            /*执行所有已经添加到事件队列的函数*/
            for (var i = 0, len = eventList.length; i < len; i++) {
                eventList[i](args);
            }
        }
    },

    //只触发一次
    once: function(type){
        if (this.handlers[type] instanceof Array) {
            var eventList = this.handlers[type];
            var args = Array.prototype.slice.call(arguments,1);
            /*执行所有已经添加到事件队列的函数*/
            eventList[0](args);
            delete this.handlers[type]; //也可以考虑直接删除这个属性
        }
    },

    /*删除事件的函数*/
    removeOne: function(type, handler) {
        if (this.handlers[type] instanceof Array) {
            var handlers = this.handlers[type];
            for (var i = 0, len = handlers.length; i < len; i++) {
                if (handlers[i] === handler) {
                    break;
                }
            }
            //删除第i个元素起的后面的1项
            handlers.splice(i, 1);
        }
    },
    
    removeAll: function(type){
        if (this.handlers[type] instanceof Array) {
            this.handlers[type] = undefined;
        }
    }
};

module.exports = event;
