/** 亲密字符串 */
function buddyStrings(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false

  if (s === goal) return has_repeat(s);

  // 找第一个不相等的位置
  let i = 0;
  while (s[i] === goal[i]) ++i;
  let j = i + 1;
  // 找第二个不相同的位置
  while (j < s.length && s[j] === goal[j]) ++j;
  // 如果走到了s的最后一位，说明两个字符串完全相等
  if (j === s.length) return false;
  // 如果这两个位置不交叉相等，那么也不符合亲密字符串
  if (s[i] !== goal[j] || s[j] !== goal[i]) return false;
  // 找到两个交叉位置相等的字符后，判断剩余的是否相等
  j++;
  while (j < s.length) {
    if (s[j] !== goal[j]) return false;
    j++;
  }
  return true;
};
// 判断是否存在重复字符
function has_repeat(s: string) {
  const o = {}
  for (let i = 0; i < s.length; i++) {
    if (o[s[i]]) return true
    else o[s[i]] = true
  }
  return false;
}