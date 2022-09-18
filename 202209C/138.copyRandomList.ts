/** 复制带随机指针的链表 */
class LiseNode {
  val: number
  next: LiseNode | null
  random: LiseNode | null
  constructor(val?: number, next?: LiseNode, random?: LiseNode) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
    this.random = (random === undefined ? null : random)
  }
}

// 先将原链表每个复制一遍，将复制节点的random指针指向对应的复制节点，即指向源地址的next；将链表拆成两个独立的链表。
function copyRandomList(head: LiseNode | null): LiseNode | null {
  if (!head) return head;
  let p: LiseNode | null = head, q, new_head;
  while (p) {
    q = new LiseNode(p.val);
    q.random = p.random;
    // 插入操作
    q.next = p.next;
    p.next = q;
    // 往后走
    p = q.next;
  }
  // 走回到链表首个复制节点
  p = head.next
  // 修正random指针域
  while (p) {
    // 将复制节点的random指针指向对应的复制节点
    if (p.random) p.random = p.random.next;
    // 这行代码等价于 p = p.next; if(p.next) p = p.next; 即先试探性走一步，如果下面还有，就再走一步
    (p = p.next) && (p = p.next)
  }
  // 拆成两个独立的子链表
  new_head = head.next;
  p = head; // 重置一下指针
  while (p) {
    q = p.next;
    p.next = q.next;
    // 可以画图理解
    if (p.next) q.next = p.next.next;
    // 往下走
    p = p.next;
  }
  return new_head;
};