class RecentCounter {
  queue: number[]
  constructor() {
    this.queue = []
  }

  ping(t: number): number {
    this.queue.push(t)
    let i = 0;
    while (t - this.queue[i] > 3000) {
      this.queue.splice(i, 1)
    }
    return this.queue.length;
  }
}