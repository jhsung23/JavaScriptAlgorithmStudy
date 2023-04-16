function solution(n) {
  let res = 0;

  while (n) {
    if (n % 2 === 1) {
      n -= 1;
      res += 1;
    } else n /= 2;
  }

  return res;
}
