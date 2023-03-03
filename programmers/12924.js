function solution(n) {
  let p = 1,
    q = 2,
    sum = 1,
    count = 1;

  if (n < 3) return count;

  while (q < n) {
    if (sum >= n) sum -= p++;
    else sum += q++;

    if (sum === n) count += 1;
  }

  return count;
}
