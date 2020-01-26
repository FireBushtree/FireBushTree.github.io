/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  const result = { next: null }
  let current = result

  while (head) {
    if (head.val !== val) {
      current.next = {}
      current.next.val = val
      current.next.next = null

      current = current.next
    }
  }

  return result.next
};