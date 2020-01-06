/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let table = [1, 2]

  for (let i = 2; i < n; i++) {
    table.push(table[i - 1] + table[i - 2])
  }

  return table[n - 1]
};