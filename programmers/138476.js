function solution(k, tangerine) {
  const map = new Map();
  let res = 0;

  for (let size of tangerine) {
    map.set(size, (map.get(size) || 0) + 1);
  }

  const arr = [...map].sort((a, b) => {
    if (a[1] >= b[1]) return -1;
    else return 1;
  });

  for (let [size, count] of arr) {
    k -= count;
    res += 1;

    if (k <= 0) return res;
  }
}
