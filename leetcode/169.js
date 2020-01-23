/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const obj = {}

  for (let i = 0; i < nums.length; i++) {
    const key = nums[i]
    obj[key] = obj[key] ? obj[key] + 1 : 1
  }

  for (let key in obj) {
    if (obj[key] > nums.length / 2) {
      return key
    }
  }
};