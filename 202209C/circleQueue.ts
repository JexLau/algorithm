/** 循环队列 */
class CircleQueue {
  /** 储存数据 */
  arr: any[];
  /** 头指针 */
  head: number;
  /** 尾指针 */
  tail: number;
  /** 当前队列中储存元素总数量 */
  count: number;

  constructor(n: number = 10) {
    this.arr = new Array(n);
    this.head = 0;
    this.tail = 0;
    this.count = 0;
  }

  /** 入队操作 */
  push(val) {
    if (this.full()) { console.log("queue is full"); return; }
    this.arr[this.tail] = val;
    this.tail++;
    /** 如果当前尾指针等于数组长度，那么尾指针应该重新指向队首 */
    if (this.tail === this.arr.length) this.tail = 0;
    this.count++;
  }

  /** 出队操作 */
  pop() {
    if (this.empty()) return;
    this.arr[this.head] = undefined;
    this.head += 1;
    /** 如果当前头指针等于数组长度，那么头指针应该重新指向队首 */
    if (this.head === this.arr.length) this.head = 0;
    this.count--;
  }

  /** 队列判空 */
  empty() {
    return this.count === 0;
  }

  /** 队列判满 */
  full() {
    return this.count === this.arr.length;
  }

  /** 查看队首操作 */
  front() {
    if (this.empty()) return;
    return this.arr[this.head];
  }

  /** 队列长度 */
  size() {
    return this.count;
  }

  /** 队列所有元素 */
  output() {
    const result: any[] = [];
    for (let i = 0, j = this.head; i < this.count; i++) {
      result.push(this.arr[j])
      j++;
      if (j === this.arr.length) j = 0
    }
    return result;
  }
}

const circleQueue = new CircleQueue(4);

circleQueue.push(1);
circleQueue.push(2);
circleQueue.push(3);
circleQueue.pop()
circleQueue.output();
circleQueue.size();
circleQueue.push(4);
// 依然可以插入
circleQueue.push(5);
circleQueue.output();
// 队列满了
circleQueue.push(6);

export { CircleQueue }