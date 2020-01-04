/**
 * 我采用贪心算法解决此问题， 但是解决此问题的最佳算法为贪心算法
 * 
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = -Infinity
  let and = 0

  for (let i = 0; i < nums.length; i++) {
    and += nums[i]

    if (and > max) {
      max = and
    }

    if (and < 0) {
      and = 0
    }
  }

  return max
};
