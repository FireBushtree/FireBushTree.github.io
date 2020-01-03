# CSS权重

## 权重的等级

  | 选择器 | 权重 | 举例 |
  | :----: | :-----: | :----: |
  | !important | 1, 0, 0, 0, 0 | `!important` |
  | 内联样式 | 0, 1, 0, 0, 0 | `style="color: #ff0000"` |
  | ID选择器 | 0, 0, 1, 0, 0 | `#test` |
  | 类, 伪类, 属性选择器 | 0, 0, 0, 1, 0 | `.test` `:hover, :first-child`, `input[type="text"]` |
  | 标签, 伪元素选择器 | 0, 0, 0, 0, 1 | `div, li`; `:before, :after` |
  | 通用选择器 | 0, 0, 0, 0, 0 | `*(通用选择器), >(子选择器), +(相邻选择器), ~(同胞选择器)` |

## 权重的计算规则

1. 从最高位开始比较, 若最高位相等则比较下一位
2. 若权重一样, 则后者优先

## 举例子

* `(id)0, 0, 1, 0, 0` > `(class)0, 0, 0, 1, 0` 所以为红色

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <style>
      #red {
        color: red;
      }

      .blue {
        color: blue;
      }
    </style>
  </head>
  <body>
    <div id="red" class="blue">
      123 <!-- red -->
    </div>
  </body>
  </html>
  ```

* 权重一样, 后者优先

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <style>
      .red {
        color: red;
      }

      .blue {
        color: blue;
      }
    </style>
  </head>
  <body>
    <div class="red blue">
      123 <!-- blue -->
    </div>

    <div class="blue red">
      123 <!-- blue -->
    </div>
  </body>
  </html>
  ```
