/** K 个一组翻转链表 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let x = new ListNode(0, head), p: ListNode | null = x, q = p.next;
  while ((p!.next = reverseN(q, k)) !== q) {
    p = q;
    q = p!.next;
  }
  return x.next;
};

function reverseN(head: ListNode | null, n: number): ListNode | null {
  const count = n;
  let p = head;
  while (--n && p) p = p.next;
  if (p === null) return head;
  return __reverseN(head, count)
};

function __reverseN(head: ListNode | null, n: number): ListNode | null {
  if (n === 1) return head;

  let tail = head!.next, p = __reverseN(head!.next, n - 1);

  head!.next = tail!.next;
  tail!.next = head;

  return p;
}

export { }
