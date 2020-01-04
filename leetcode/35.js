/**
 * 解答此题的最好方法是二分查询法， 若使用时间复杂度为O(n)， 使用二分查询法时间复杂度降低为
 * O(log n)
 * 
 * 二分查询法通用模板
 * function bisectionMethod(nums, target) {
 *    let left = 0
 *    let right = nums.length
 *
 *    while (left < right) {
 *      const mid = parseInt((left + right) / 2)
 *      const value = nums[mid]
 *      
 *      if (value === target) {
 *        // TODO
 *      } else if (value < target) {
 *        left = mid + 1
 *      } else {
 *        right = mid
 *      }
 *    }
 *
 *    // TODO
 *    return something
 * }
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 常规遍历法
var searchInsert = function (nums, target) {
  const numsLength = nums.length

  for (let i = 0; i < numsLength; i++) {
    if (nums[i] >= target) {
      return i
    }
  }

  return numsLength
};

// 二分查询法
var searchInsert = function(nums, target) {
  let left = 0
  let right = nums.length

  while (left < right) {
    const mid = parseInt((left + right) / 2)
    const value = nums[mid]

    if (value === target) {
      return mid
    } else if (value < target) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return left
};