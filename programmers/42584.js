function solution(prices) {
  const stack = [[0, prices[0]]];
  const result = Array.from({ length: prices.length }, () => 0);

  for (let i = 1; i < prices.length; i++) {
    for (let [idx, num] of stack) {
      result[idx] += 1;
    }

    while (stack[stack.length - 1][1] > prices[i]) {
      stack.pop();

      if (stack.length === 0) break;
    }

    stack.push([i, prices[i]]);
  }

  return result;
}
