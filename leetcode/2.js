/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const result = l1
  const carryNumber = 0

  while (l2 !== null) {
    const val = l1.val + l2.val + carryNumber
    result.val = val % 10
    carryNumber = parseInt(val / 10)
  }
};
