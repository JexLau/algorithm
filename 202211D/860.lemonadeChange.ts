function lemonadeChange(bills: number[]): boolean {
  if (bills[0] !== 5) return false;
  const map = new Map()
  map.set("5", 0);
  map.set("10", 0);
  map.set("20", 0);
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      map.set("5", map.get("5") + 1)
    } else if (bills[i] === 10) {
      if (map.get("5") === 0) return false;
      map.set("5", map.get("5") - 1)
      map.set("10", map.get("10") + 1)
    } else if (bills[i] === 20) {
      const c10 = map.get("10");
      const c5 = map.get("5");
      if ((c10 >= 1 && c5 >= 1)) {
        map.set("10", map.get("10") - 1)
        map.set("5", map.get("5") - 1)
        map.set("20", map.get("20") + 1)
      } else if (c5 >= 3) {
        map.set("5", map.get("5") - 3)
        map.set("20", map.get("20") + 1)
      } else {
        return false
      }
    }
  }
  return true;
};