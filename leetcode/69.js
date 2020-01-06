/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0
  let right = x

  while (left < right) {
    const mid = parseInt((left + right + 1) / 2)
    const val = mid * mid

    if (val > x) {
      right = mid - 1
    } else {
      left = mid
    }
  }

  return left
};