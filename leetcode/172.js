/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let result = 0

  while (n >= 5) {
    const value = parseInt(n / 5);
    result +=  value
    n = value;
  }
  return result;
};