# new & instanceof

## new

```javascript
function customNew (constructor, ...args) {
  const obj = {}
  const result = constructor.call(obj, ...args)
  obj.__proto__ = constructor.prototype

  return typeof result === 'object' ? result : obj
}
```

## instance

```javascript
function customInstanceOf (obj, ctor) {
  const prototype = ctor.prototype
  obj = obj.__proto__

  while (true) {
    if (!obj) {
      return false
    }

    if (obj === prototype) {
      return true
    }

    obj = obj.__proto__
  }
}
```
