/** 分隔链表 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

// 设置两条链表，一条存比目标值大的，一条存小的，遍历一遍之后得到两条链表，拼接起来
export function partition(head: ListNode | null, x: number): ListNode | null {
  let small = new ListNode(), big = new ListNode();
  // s指向于small链表的末尾
  let s = small, b = big;
  let p = head;
  let q;

  while (p) {
    // 将原链表next储存起来
    q = p.next;
    if (p.val < x) {
      // s.next其实为null，去掉原链表的引用
      p.next = s.next;
      // 把链表连接起来
      s.next = p;
      // 往下走
      s = p;
    } else {
      p.next = b.next;
      b.next = p;
      b = p;
    }
    p = q;
  }
  s.next = big.next;
  return small.next;
};