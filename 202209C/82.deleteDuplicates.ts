class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let x = new ListNode(0, head), p = x;
  while (p.next) {
    // 有重复值
    if (p.next.next && p.next.val === p.next.next.val) {
      // 定义指针q指向p.next.next，去寻找非重复值
      let q: ListNode | null = p.next.next;
      // 都是重复值，q指针就一直往下走
      while (q && q.val === p.next.val) q = q.next;
      // 此时 q 指向了非重复值
      p.next = q;
    } else {
      p = p.next;
    }
  }
  return x.next;
};

export { deleteDuplicates }