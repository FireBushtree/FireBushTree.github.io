/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.data = []
};

/**
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.data[this.data.length] = x
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.data.length = this.data.length - 1
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.data[this.data.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  let min = this.data[0]

  for (let i = 1; i < this.data.length; i++) {
    min = Math.min(min, this.data[i])
  }

  return min
};

var obj = new MinStack()
obj.push(2)
obj.pop()
var param_3 = obj.top()
var param_4 = obj.getMin()