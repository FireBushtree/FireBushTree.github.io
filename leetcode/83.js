/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  const result = head

  while (head) {
    if (head.next && head.val === head.next.val) {
      head.next = head.next.next
    } else {
      head = head.next
    }
  }

  return result
};