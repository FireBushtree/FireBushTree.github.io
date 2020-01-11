# 使用setTimeout实现setInterval

```javascript
function customInterval (func, wait) {
  (function inner() {
    let timer = setTimeout(function () {
      clearTimeout(timer)
      func()
      inner()
    }, wait)
  })()
}
```
