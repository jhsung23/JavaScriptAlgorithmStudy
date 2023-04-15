function solution(n, a, b) {
  let count = 1;

  while (Math.abs(a - b) !== 1 || Math.max(a, b) % 2 !== 0) {
    a = Number.parseInt(a / 2) + (a % 2);
    b = Number.parseInt(b / 2) + (b % 2);

    count += 1;
  }

  return count;
}
