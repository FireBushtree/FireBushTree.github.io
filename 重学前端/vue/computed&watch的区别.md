# computed&watch的区别

## computed

* 支持缓存（惰性的）， 只有当数据被使用且当数据变更， 更会更新数据
* 不支持异步操作
* computed可以是函数也可以是对象， 当是对象的时候， 需要设置get, set方法

## watch

* 不支持缓存， 监听的数据变动了， 他就会变
* 支持异步操作
* watch `immediate`, `deep`, `handler`, 回调函数中有两个参数(newvalue, oldvalue)


