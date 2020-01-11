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
var isBalanced = function(root) {
  if (!root) {
    return true
  }

  let minDeep = 0
  let deep = 0
  let nodes = [root]

  while (nodes.length !== 0) {
    deep++

    if (minDeep !== 0 && deep - minDeep === 3) {
      return false
    }

    let newNodes = []

    for (let i = 0; i < nodes.length; i++) {


      const currenNode = nodes[i]

      if (currenNode) {
        newNodes.push(currenNode.left)
        newNodes.push(currenNode.right)
      } else {
        minDeep === 0 && (minDeep = deep)
      }
    }

    nodes = newNodes
  }

  return true
};

isBalanced({
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
})