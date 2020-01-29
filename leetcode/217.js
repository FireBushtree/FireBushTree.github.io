/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  if (nums.length === 0) {
    return false
  }

  const count = {}

  for (let i = 0; i < nums.length; i++) {
    const key = nums[i]

    if (count[key]) {
      return true
    }

    count[key] = 1
  }

  return false
};

var containsDuplicate = function(nums) {
  const newNums = [...new Set(nums)]
  return nums.length !== newNums.length
};

