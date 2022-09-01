class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

/** 通过遍历拿到链表的长度和尾节点，然后定义指针E指向尾节点 */
function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head) return head;
  let n = 1;
  let p: ListNode | null = head;
  while (p.next !== null) {
    p = p.next
    n += 1
  }
  p.next = head;
  k %= n;
  k = n - k;
  while (k--) p = p!.next;
  head = p!.next;
  p!.next = null;
  return head;
};

export { }