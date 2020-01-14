/**
 * 本题可以使用动态规划来解决
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const result = []

  if (numRows === 0) {
    return result
  }

  if (numRows === 1) {
    result.push([1])
    return result
  }

  const lastResult = generate(numRows - 1)
  const prev = lastResult[lastResult.length - 1]
  const current = [1]

  for (let i = 0; i < prev.length - 1; i++) {
    current.push(prev[i] + prev[i + 1])
  }

  current.push(1)
  lastResult.push(current)

  return lastResult
};