/** 链表结构写法 */
class LinkedNode {
  data: unknown;
  next: LinkedNode;
  constructor(data: unknown) {
    this.data = data;
  }
}

const head = new LinkedNode(1)
head.next = new LinkedNode(2)
head.next.next = new LinkedNode(3)
head.next.next.next = new LinkedNode(4)
head.next.next.next.next = new LinkedNode({ data: 1 })

let p = head;

while (p != null) {
  console.log(p.data)
  p = p.next
}

console.log("finish")

/** 通过数组够造链表 */
let data: any[] = [];
let next: any[] = [];
/** 添加链表节点的方法 */
const addNode = (index: number, p: number, value: unknown) => {
  next[index] = p;
  data[p] = value;
}

const head2 = 3;
data[3] = 0;
addNode(3, 4, 1);
addNode(4, 5, 2);
addNode(5, 6, 3);

let p2 = head2;

while (typeof p2 != "undefined") {
  console.log(data[p2])
  p2 = next[p2]
}

console.log("finish2");