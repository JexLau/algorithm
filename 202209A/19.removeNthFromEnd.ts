/** 删除链表的倒数第 N 个结点 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let x = new ListNode(0, head), p = x, q = head;
  while (n--) q = q!.next;
  while (q) {
    p = p.next!;
    q = q.next;
  }
  p.next = p.next?.next || null;

  return x.next;
};

export { }