/**  设计循环队列 */
class MyCircularQueue {
  head: number;
  tail: number;
  arr: any[];
  count: number;

  constructor(k: number) {
    this.arr = new Array(k);
    this.head = 0;
    this.tail = 0;
    this.count = 0;
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false;
    this.arr[this.tail] = value;
    this.tail = (this.tail + 1) % this.arr.length;
    this.count++;
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;
    // head指针往后移
    this.head = (this.head + 1) % this.arr.length;
    this.count--;
    return true;
  }

  Front(): number {
    if (this.isEmpty()) return -1;
    return this.arr[this.head];
  }

  Rear(): number {
    if (this.isEmpty()) return -1;
    // tail指针前一个才是队尾元素
    return this.arr[(this.tail - 1 + this.arr.length) % this.arr.length];
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  isFull(): boolean {
    return this.arr.length === this.count;
  }
}

/**
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/