function getNext(num: number): number {
  let sum = 0
  while (num) {
    sum = sum + (num % 10) * (num % 10)
    num = Math.floor(num / 10);
  }

  return sum;
}

function isHappy(n: number): boolean {
  let slow = n, fast = n;
  do {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  } while (slow != fast && fast !== 1)

  return fast === 1;
};

