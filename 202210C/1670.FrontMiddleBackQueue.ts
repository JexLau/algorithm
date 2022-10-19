/** 设计前中后队列 */

/** 用双向链表思想实现队列结构 */
class MyListNode {
  val: number
  next: MyListNode | null
  pre: MyListNode | null
  constructor(val?: number, next?: MyListNode | null, pre?: MyListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.pre = (pre === undefined ? null : pre)
    this.next = (next === undefined ? null : next)
  }

  /** 在当前节点前面插入一个节点 */
  insert_pre(p: MyListNode) {
    // this代表的是当前节点
    p.pre = this.pre;
    p.next = this;
    if (this.pre) this.pre.next = p;
    this.pre = p;
  }

  /** 在当前节点后面插入一个节点 */
  insert_next(p: MyListNode) {
    p.pre = this;
    p.next = this.next;
    if (this.next) this.next.pre = p;
    this.next = p;
  }

  /** 在当前节点前面删除一个节点 */
  delete_pre() {
    if (this.pre) {
      this.pre = this.pre?.pre;
      this.pre && (this.pre.next = this);
    }
  }

  /** 在当前节点后面删除一个节点 */
  delete_next() {
    if (this.next) {
      this.next = this.next.next;
      this.next && (this.next.pre = this);
    }
  }
}

class MyQueue {
  /** 虚拟头节点 */
  head: MyListNode;
  /** 虚拟尾节点 */
  tail: MyListNode;
  /** 元素数量 */
  count: number;
  constructor() {
    this.head = new MyListNode();
    this.tail = new MyListNode();
    /** 初始值时互相指向 head->next->tail, tail->prev->head */
    this.head.pre = null;
    this.head.next = this.tail;
    this.tail.pre = this.head;
    this.tail.next = null;
    this.count = 0;
  }

  push_front(val: number) {
    this.head.insert_next(new MyListNode(val))
    this.count++;
  }

  push_back(val: number) {
    this.tail.insert_pre(new MyListNode(val))
    this.count++;
  }

  pop_front() {
    if (this.isEmpty()) return -1;
    const ret = this.head.next?.val;
    this.head.delete_next();
    this.count--;
    return ret;
  }

  pop_back() {
    if (this.isEmpty()) return -1;
    const ret = this.tail.pre?.val;
    this.tail.delete_pre();
    this.count--;
    return ret;
  }

  /** 如果头指针的下一个节点指向的是tail，说明队列空了 */
  isEmpty() {
    return this.head.next === this.tail
  }

  /** 元素数量 */
  size() {
    return this.count;
  }

  front() {
    return this.head.next?.val;
  }

  back() {
    return this.tail.pre?.val;
  }
}

class FrontMiddleBackQueue {
  q1: MyQueue;
  q2: MyQueue;

  constructor() {
    this.q1 = new MyQueue();
    this.q2 = new MyQueue();
  }

  pushFront(val: number): void {
    this.q1.push_front(val)
    this.update()
  }

  pushMiddle(val: number): void {
    if (this.q1.size() > this.q2.size()) {
      const end = this.q1.back();
      if (end) {
        this.q2.push_front(end)
        this.q1.pop_back()
      }
    }
    this.q1.push_back(val)
  }

  pushBack(val: number): void {
    this.q2.push_back(val)
    this.update()
  }

  popFront(): number {
    if (this.isEmpty()) return -1;
    const ret = this.q1.pop_front();
    this.update();
    return ret || -1;
  }

  popMiddle(): number {
    if (this.isEmpty()) return -1;
    const ret = this.q1.pop_back() || -1;
    this.update()
    return ret;
  }

  popBack(): number {
    if (this.isEmpty()) return -1;
    let ret;
    if (this.q2.isEmpty()) {
      ret = this.q1.pop_back()
    } else {
      ret = this.q2.pop_back();
    }
    this.update();
    return ret || -1;
  }

  isEmpty(): boolean {
    return this.q1.size() + this.q2.size() === 0
  }

  update() {
    if (this.q1.size() < this.q2.size()) {
      const q2Front = this.q2.front()
      if (q2Front) {
        this.q1.push_back(q2Front)
        this.q2.pop_front()
      }
    } else if (this.q1.size() === this.q2.size() + 2) {
      const q1Back = this.q1.back()
      if (q1Back) {
        this.q2.push_front(q1Back)
        this.q1.pop_back()
      }
    }
  }
}