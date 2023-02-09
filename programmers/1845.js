function solution(nums) {
  const s = new Set();

  for (const num of nums) {
    s.add(num);
  }

  return Math.min(nums.length / 2, s.size);
}
