function solution(n) {
  const res = [1, 2];

  for (let i = 2; i < n; i++) {
    res.push((res[i - 1] % 1234567) + (res[i - 2] % 1234567));
  }

  return res[n - 1] % 1234567;
}
