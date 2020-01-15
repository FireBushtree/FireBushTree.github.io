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

``` javascript
// HTML
<div id="app" onclick="alert('inline-event')">test</div>

// JS
const app = document.querySelector('#app')
app.onclick = function () {
  alert('DOM 0')
}
```

## DOM2级事件

`DOM2`

## event对象
