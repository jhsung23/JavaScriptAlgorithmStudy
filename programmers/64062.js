function solution(stones, k) {
  let p = 1,
    q = 200000000;

  while (p <= q) {
    let mid = Math.ceil((p + q) / 2);

    let count = 0;
    for (let stone of stones) {
      if (stone - mid <= 0) count += 1;
      else count = 0;

      if (count === k) break;
    }

    if (count === k) q = mid - 1;
    else p = mid + 1;
  }

  return p;
}
