/**
 * 暴力破解法
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let result = 0

  for (let i = 0; i < prices.length - 1; i++) {
    const currentDay = prices[i]

    for (let j = i + 1; j < prices.length; j++) {
      const nextDay = prices[j]
      const profit = nextDay - currentDay
      result = profit > result ? profit : result
    }
  }

  return result
};

/**
 * DP 动态规划问题
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length <= 1) {
    return 0
  }

  let result = 0
  let min = prices[0]

  for (let i = 1; i < prices.length; i++) {
    const currentDay = prices[i]
    result = Math.max(result, currentDay - min)
    min = Math.min(min, currentDay)
  }

  return result
};