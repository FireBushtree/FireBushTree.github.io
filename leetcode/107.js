/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) {
    return []
  }

  let result = [];
  let nodes = [root]

  while (nodes.length) {
    const resultItem = []
    const newNodes = []
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i]) {
        resultItem.push(nodes[i].val)
        newNodes.push(nodes[i].left)
        newNodes.push(nodes[i].right)
      }
    }

    result.length > 0 && result.unshift(resultItem)
    nodes = newNodes
  }

  return result
};

console.log(levelOrderBottom({
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}))