// 双端队列
class MyCircularDeque {
  /** 头指针 */
  head: number;
  /** 尾指针 */
  tail: number;
  /** 连续的储存区 */
  arr: number[];
  /** 元素总数 */
  count: number;
  constructor(k: number) {
    this.arr = new Array(k);
    this.head = 0;
    this.tail = 0;
    this.count = 0;
  }

  insertFront(value: number): boolean {
    if (this.isFull()) return false;
    // head指针往后走一步
    this.head = (this.head - 1 + this.arr.length) % this.arr.length;
    this.arr[this.head] = value;
    this.count++;
    return true;
  }

  insertLast(value: number): boolean {
    if (this.isFull()) return false;
    // 先插入再往后移动tail指针
    this.arr[this.tail] = value;
    this.tail = (this.tail + 1 + this.arr.length) % this.arr.length;
    this.count++;
    return true;
  }

  deleteFront(): boolean {
    if (this.isEmpty()) return false;
    this.head = (this.head + 1 + this.arr.length) % this.arr.length
    this.count--;
    return true;
  }

  deleteLast(): boolean {
    if (this.isEmpty()) return false;
    this.tail = (this.tail - 1 + this.arr.length) % this.arr.length;
    this.count--;
    return true;
  }

  getFront(): number {
    if (this.isEmpty()) return -1;
    return this.arr[this.head]
  }

  getRear(): number {
    if (this.isEmpty()) return -1;
    return this.arr[(this.tail - 1 + this.arr.length) % this.arr.length];
  }

  isEmpty(): boolean {
    return this.count === 0
  }

  isFull(): boolean {
    return this.arr.length === this.count
  }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */