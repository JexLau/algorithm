class Queue {
  /** 储存数据 */
  arr: any[];
  /** 头指针 */
  head: number;
  /** 尾指针 */
  tail: number;

  constructor(n: number = 10) {
    this.arr = new Array(n);
    this.head = 0;
    this.tail = 0;
  }

  /** 入队操作 */
  push(val) {
    if (this.full()) {
      console.log("queue full")
      return;
    }
    this.arr[this.tail] = val;
    this.tail++;
  }

  /** 出队操作 */
  pop() {
    if (this.empty()) return;
    this.arr[this.head] = undefined;
    this.head += 1;
  }

  /** 队列判空 */
  empty() {
    return this.head === this.tail
  }

  /** 队列判满 */
  full() {
    return this.tail === this.arr.length;
  }

  /** 查看队首操作 */
  front() {
    if (this.empty()) return;
    return this.arr[this.head];
  }

  /** 队列长度 */
  size() {
    return this.tail - this.head;
  }

  /** 队列所有元素 */
  output() {
    return this.arr;
  }
}

const queue = new Queue();

queue.push(1);
queue.push(2);
queue.push(3);
queue.pop()
queue.size();
queue.output();

export { Queue }