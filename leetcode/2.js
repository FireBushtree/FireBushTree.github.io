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
  const result = { val: 0, next: null }
  let prev = result
  let carryNumber = 0

  while (l1 !== null || l2 !== null || carryNumber !== 0) {
    const val = (l1 === null ? 0 : l1.val) +
                (l2 === null ? 0 : l2.val) +
                carryNumber
    
    carryNumber = parseInt(val / 10)
    prev.next = { val: val % 10, next: null }
    prev = prev.next
    l1 = l1 === null ? l1 : l1.next
    l2 = l2 === null ? l2 : l2.next
  }

  return result.next;
};
