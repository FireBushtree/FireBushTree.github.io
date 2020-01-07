/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const pNodes = [p]
  const qNodes = [q]

  while (pNodes.length > 0 && qNodes.length > 0) {
    const currentP = pNodes.shift();
    const currentQ = qNodes.shift();

    if (
      !currentP && currentQ ||
      !currentQ && currentP ||
      currentP && currentQ && currentP.val !== currentQ.val
    ) {
      return false
    }

    if (currentQ && currentP) {
      pNodes.push(currentP.left)
      pNodes.push(currentP.right)
      qNodes.push(currentQ.left)
      qNodes.push(currentQ.right)
    }
  }

  return pNodes.length === qNodes.length;
};