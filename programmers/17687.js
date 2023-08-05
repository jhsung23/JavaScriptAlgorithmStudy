function solution(n, t, m, p) {
  let numbers = '';
  let result = '';

  let start = 0;
  while (numbers.length < t * m) {
    numbers += Number(start).toString(n).toUpperCase();
    start += 1;
  }

  for (let i = 0; i < numbers.length; i++) {
    if (i + 1 === result.length * m + p) result += numbers[i];
    if (result.length === t) return result;
  }
}
