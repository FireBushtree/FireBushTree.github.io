/**
 * 更好的方法是每次都取出前两个元素， 并按
 * left.left, right.right, left.right, right.left的顺序再推送进数组。
 * 我这样做效率比较低下
 *
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
var isSymmetric = function(root) {
  if (!root) {
    return true
  }

  let nodes = [root.left, root.right]

  while (nodes.length !== 0) {
    let start = 0
    let end = nodes.length - 1

    while (start < end) {
      const startVal = nodes[start]
      const endVal = nodes[end]

      if (
        (!startVal && !endVal) ||
        (startVal && endVal && startVal.val === endVal.val)
      ) {
        start++
        end--
      } else {
        return false
      }
    }

    const newNodes = []
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i]) {
        newNodes.push(nodes[i].left)
        newNodes.push(nodes[i].right)
      }
    }

    nodes = newNodes
  }

  return true
};