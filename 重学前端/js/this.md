# this

关于`this`指向问题， 只要记住一句话**this永远指向最后一个调用它的对象！**

## 1. 函数直接调用
```javascript
var name = 'test'

function test () {
  console.log(this.name)
}

test() //严格模式下返回'undefined', 非严格模式返回'test'
```

这个例子中， `test`直接调用， 相当于`window.test()`

## 2. 调用对象中的方法
```javascript
var name = 'window'

const a = {
  name: 'test',
  sayName: function () {
    console.log(this.name)
  }
}

a.sayName() // 'test'

const fn = a.sayName

fn() // 'window'
```

## 3. 作为构造函数使用

此时的`this`指向新创建的对象

```javascript
function Animal () {
  this.name = 'test'
}
```

## 改变this指向

针对第一跟第二个特性， 有时候需要将函数调用的`this`指向改变。可以使用`call`, `apply`, `bind` 以及使用箭头函数

bind不是直接调用方法， 而是返回一个新的函数， 需要手动调用一下

* call   `func.call(targetThis, arg1, arg2, arg3...)`
* apply  `func.apply(targetThis, [arg1, arg2, arg3...])`
* bind   `func.bind(targetThis, arg1, arg2, arg3...)()`
* 箭头函数 自动绑定父级`this`指向， 也无法修改箭头函数的`this`指向

## 手动实现apply, call, bind

### call

```javascript
Function.prototype.customCall = function (targetThis, ...args) {
  targetThis = targetThis || window
  targetThis.func = this
  const result = targetThis.func(...args)
  delete targetThis.func

  return result
}
```

### apply

```javascript
Function.prototype.customApply = function (targetThis, argsArray) {
  targetThis = targetThis || window
  targetThis.func = this
  const result = targetThis.func(...argsArray)
  delete targetThis.func

  return result
}
```

