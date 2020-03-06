# 前端存储

## 生命周期

* cookie： 可以设置过期时间， 浏览器关闭cookie自动失效
* localstorage: 除非手动删除， 否则永不过期
* sessionstroage: 浏览器窗口关系自动删除

## 存放数据大小

* cookie: 存储大小为4kb
* localstorage和sessionstorage： 存储大小为5MB

## http请求

* cookie: 每次请求都会自动带上
* localstorage和sessionstorage：仅在浏览器保存， 不会自动通信

## 应用场景

cookie参与每次请求， 如果设置的cookie过大会导致性能变差， 而且cookie需要指定作用域， 不能跨域
调用， 除登录场景外 尽量都使用storage
