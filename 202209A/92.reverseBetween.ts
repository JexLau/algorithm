/** 反转链表2 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  const count = right - left + 1;
  // 虚拟头节点
  const x = new ListNode(0, head);
  // 指针指向虚拟头节点
  let p: ListNode | null = x;
  // 找寻目标翻转开始节点
  while (--left) p = p!.next;
  // 翻转left-right+1个节点, 并让p指针指向翻转后的链表
  p!.next = reverseN(p!.next, count);

  return x.next;
};

function reverseN(head: ListNode | null, n: number): ListNode | null {
  if (n === 1) return head;

  let tail = head!.next, p = reverseN(head!.next, n - 1);

  head!.next = tail!.next;

  tail!.next = head;

  return p;
};

export { }
