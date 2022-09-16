class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) return head;
  let p = head;
  // 定义指针 p 指向头结点，比较下一个节点的值，如果相等就删除下一个节点，如果不相等 p 指针就往下走一步。
  while (p.next) {
    if (p.val !== p.next.val) {
      p = p.next;
    } else {
      p.next = p.next.next;
    }
  }
  return head;
};

export { deleteDuplicates }