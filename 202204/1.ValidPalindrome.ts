/** 验证回文串 */
function isPalindrome(s: string): boolean {
  // 1. 只保留字母和数字，并都转换为小写；
  // 2. 颠倒两个字符串比较；
  const filterStr = filterNotNumberAndStr(s);
  return filterStr === filterStr.split("").reverse().join("");
};

function filterNotNumberAndStr(s: string) {
  return s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
}
