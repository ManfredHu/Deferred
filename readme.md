# Deffred异步模块简单实现

## event.js
订阅/发布模块的简单实现
实现接口如下:

- on: function(type, handler)
- emit: function(type)
- once: function(type)
- removeOne: function(type, handler)

type为事件类型，推荐使用.命名空间法，如个人中心模块`center`下的`showData`方法写为`center.showData`。

- on为订阅方法
- emit为广播方法
- once只调用一次
- removeOne删除对应监听的对应那个
- removeAll对应监听的全部

例子在`event测试文件夹里`

## 例子
Download 后 `node index.js`就可以，除了node以外不依赖任何其他模块
