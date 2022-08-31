/** 环形链表 */
/**  Definition for singly-linked list. */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;

  let slow: ListNode | null = head, fast = head.next;
  while (fast && fast.next && slow !== fast) {
    fast = fast.next.next;
    slow = slow && slow.next;
  }

  return !!(fast && fast.next)
};

export { }