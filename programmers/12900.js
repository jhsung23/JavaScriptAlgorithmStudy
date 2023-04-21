function solution(n) {
  const cases = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    cases.push((cases[i - 1] % 1000000007) + (cases[i - 2] % 1000000007));
  }

  return cases[n] % 1000000007;
}
