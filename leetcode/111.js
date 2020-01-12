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
var minDepth = function(root) {
  if (!root) {
    return 0
  }

  let level = 0
  let nodes = [root]

  while (nodes.length !== 0) {
    const newNodes = []
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i] && !nodes[i].left && !nodes[i].right) {
        return level
      }

      nodes[i] && newNodes.push(nodes[i].left)
      nodes[i] && newNodes.push(nodes[i].right)
    }

    nodes = newNodes
    level++
  }

  return level - 1
};