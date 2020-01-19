/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length <= 1) {
    return 0
  }

  let result = 0
  let max = 0
  let min = prices[0]

  for (let i = 1; i < prices.length; i++) {
    const value = prices[i] - min

    if (value < 0 || value < max) {
      result += max
      max = 0
      min = prices[i]
    } else {
      max = value
    }
  }

  result += max;

  return result
};
