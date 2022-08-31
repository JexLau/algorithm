class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let slow: ListNode | null = head, fast: ListNode | null = head;

  while (fast) {
    slow = slow && slow.next;
    // 没环
    if (fast.next === null) return null
    fast = fast.next.next;

    // 有环
    if (slow === fast) {
      let cur: ListNode | null = head;
      while (cur !== slow) {
        slow = slow && slow.next;
        cur = cur && cur.next
      }
      return cur;
    }
  }
  return null;
};

export { }
