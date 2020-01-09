/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let result = 0

  if (!root) {
    return result
  }

  let nodes = [root.left, root.right]

  while (nodes.length > 0) {
    const childrenNode = []
    for (let i = 0; i < nodes.length; i++) {
      const currentNode = nodes[i]
      currentNode && childrenNode.push(currentNode.left)
      currentNode && childrenNode.push(currentNode.right)
    }

    result++
    nodes = childrenNode
  }

  return result
};

// recursion way
var maxDepth = function (root) {
  if (!root) {
    return 0
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}