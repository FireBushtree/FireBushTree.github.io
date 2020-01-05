# BFC (Block Formatting Context)

## BFC是什么

BFC是块格式上下文， 是 W3C CSS2.1中提出的概念。
它决定了**元素如何对其内容进行定位以及与其他元素的关系以及相互作用**
BFC会提供一个环境， HTML元素在该环境中按照一定的规则进行布局。一个BFC中的内部元素不会影响其他
的元素布局。可以把BFC理解为一个独立的容器，并且该容器中box的布局与容器外的box的布局没有关系。

## 如何创建BFC

* 根元素或其它包含它的元素
* 浮动元素 (`float` 不为 `none` 的元素)
* 绝对定位元素 (`position` 为 `absolute` 或者 `fixed`)
* 行内-块级元素 (`display` 为 `inline-block`)
* 表格单元格 (`display` 为 `table-cell`)
* 表格标题 (`display` 为 `table-caption`)
* `overflow` 不为 `visible`的元素
* 弹性盒子 (`display` 为 `flex` 或者 `inline-flex`)
* `display` 为 `flow-root`的元素
* `column-span` 为 `all`的元素

## BFC的效果

1. 内部的盒会在垂直方向一个接一个排列（可以看作BFC中有一个的常规流）
2. 处于同一个BFC中的元素相互影响，可能会发生外边距合并(margin collapse)
3. 每个元素的margin box的左边，与容器块border box的左边相接触(对于从左往右的格式化，否则相反)，
即使存在浮动也是如此
4. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然
5. 计算BFC的高度时，考虑BFC所包含的所有元素，连浮动元素也参与计算
6. 浮动盒区域不叠加到BFC上

## BFC有什么应用

1. 闭合浮动(防止浮动元素发生高度塌陷)
2. 防止与浮动的元素重叠
3. 防止发生外边距合并
