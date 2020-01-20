/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const saveObj = {}

  for (let i = 0; i < nums.length; i++) {
    const key = nums[i]
    saveObj[key] = saveObj[key] ? 2 : 1
  }

  return Object.keys(saveObj).find(key => saveObj[key] === 1)
};