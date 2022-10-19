function getKthMagicNumber(k: number): number {
  const queue = [1];
  let p3 = 0, p5 = 0, p7 = 0;
  while (queue.length < k) {
    const ans = Math.min(3 * queue[p3], 5 * queue[p5], 7 * queue[p7]);
    if (ans === 3 * queue[p3]) p3++;
    if (ans === 5 * queue[p5]) p5++;
    if (ans === 7 * queue[p7]) p7++;
    queue.push(ans);
  }
  return queue[k - 1];
};