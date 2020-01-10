/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) {
    return null
  }

  function getDeep(root) {
    if (root === null) {
      return 0
    }

    return Math.max(getDeep(root.left), getDeep(root.right)) + 1
  }

  const leftDeep = getDeep(root.left)
  const rightDeep = getDeep(root.right)

  return Math.abs(rightDeep - leftDeep) <= 1
};