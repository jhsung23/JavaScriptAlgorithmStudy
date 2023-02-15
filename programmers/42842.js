function solution(brown, yellow) {
  for (let i = Math.round(Math.sqrt(yellow)); i <= yellow; i++) {
    if (yellow % i) continue;
    const x = i + 2;
    const y = yellow / i + 2;

    if (x * y === brown + yellow) {
      return x > y ? [x, y] : [y, x];
    }
  }
}
