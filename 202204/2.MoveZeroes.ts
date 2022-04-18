/** 移动0 */

function swap(nums: number[], left: number, right: number) {
  [nums[right], nums[left]] = [nums[left], nums[right]]
}

function moveZeroes(nums: number[]): void {
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    if (nums[right] !== 0) {
      swap(nums, right, left)
      left++
    }
    right++
  }
};