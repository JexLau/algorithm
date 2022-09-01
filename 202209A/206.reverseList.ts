class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

/** 反转链表 */
function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;

  let tail = head.next, p = reverseList(head.next);

  head.next = tail.next;

  tail.next = head;

  return p;
};

export { }