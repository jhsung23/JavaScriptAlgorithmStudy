function solution(numbers) {
  const result = Array.from({ length: numbers.length }, () => -1);
  const stack = [];

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length && stack[stack.length - 1].num < numbers[i]) {
      const { idx, num } = stack.pop();
      result[idx] = numbers[i];
    }

    stack.push({ idx: i, num: numbers[i] });
  }

  return result;
}
