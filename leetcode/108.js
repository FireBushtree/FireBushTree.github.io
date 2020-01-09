/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (!nums) {
    return null
  }

  const mid = parseInt(nums.length / 2)
  const val = nums.splice(mid, 1)

  const leftArray = nums.splice(0, mid)
  const rightArray = nums.splice(0, nums.length)

  return {
    val: val[0],
    left: leftArray.length > 0 ? sortedArrayToBST(leftArray) : null,
    right: rightArray.length > 0 ? sortedArrayToBST(rightArray) : null
  }
};