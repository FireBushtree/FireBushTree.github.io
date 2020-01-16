# DOM事件流

## 事件的三个阶段

事件捕获 -> 处于事件 -> 事件冒泡

## HTML标签直接绑定

```HTML
<div onclick="alert('123')">test</div>
```

## DOM0级事件

简单而言, 绑定`DOM0级`事件就是首先获取需要绑定事件的`DOM元素`， 然后使用`on + 事件名`的方式
绑定事件， `DOM0级`事件会覆盖`html`内联的事件。

```javascript
// HTML
<div id="app" onclick="alert('inline-event')">test</div>

// JS
const app = document.querySelector('#app')
app.onclick = function () {
  alert('DOM 0')
}
```

## DOM2级事件

1. `DOM2级`事件说的通俗一点就是将绑定事件的方式更改为`addEventListener`, 同时也提供了新的
api`removeEventListener`解除绑定的事件。 与`DOM0级`事件不同的是它不会覆盖内联的事件。

2. `addEventListener`方法接受三个参数`(eventName, handler, useCapture)`, 分别是事件名
， 处理该事件的方法， 是否在捕获阶段处理。 `useCapture`默认值为`false`， 表示不在捕获阶段处理
事件（就是说在冒泡阶段处理事件）。

```javascript
// HTML
<div id="app" onclick="alert('inline-event')">test</div>

// JS
function print2() {
  alert('DOM 2')
}

const app = document.querySelector('#app')
app.addEventListener('click', print2)
// app.removeEventListener('click', print2) // 如果取消注释， 则事件被取消
```

## event对象

这里只会提及几个`event`中重要的属性

1. `stopPropagation` 阻止事件冒泡
2. `preventDefault` 取消默认行为
3. `target`, `currentTarget`, `relatedTarget`
`target`可能是`currentTarget`的子节点， 但是`currentTarget`永远指向自身, 具体参考下例
只有`mouseover`, `mouseout`两个事件具有`relatedTarget`, `mouseover`的`relatedTarget`
指向它刚刚**离开**的元素, `mouseout`的`relatedTarget`指向它刚刚**进入**的元素

```html
<style>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #div1 {
    width: 500px;
    height: 500px;
    border: 1px solid black;
  }

  #div1-1 {
    width: 300px;
    height: 300px;
    border: 1px solid black;
  }

  #div1-1-1 {
    width: 100px;
    height: 100px;
    border: 1px solid black;
  }
</style>

<div id="div1">
  div1
  <div id="div1-1">
    div1-1
    <div id="div1-1-1">div1-1-1</div>
  </div>
</div>
</div>

<script>
  // JS
  function print2(name, event) {
    debugger
    console.log(`i clicked ${name}`)
    console.log(`target:`, event.target, '-------', `currentTarget:`, event.currentTarget)
  }


  const app1 = document.querySelector('#div1')
  app1.addEventListener('click', event => print2('#div1', event))

  const app11 = document.querySelector('#div1-1')
  app11.addEventListener('click', event => print2('#div1-1', event))

  const app111 = document.querySelector('#div1-1-1')
  app111.addEventListener('click', event => print2('#div1-1-1', event))
</script>
```
