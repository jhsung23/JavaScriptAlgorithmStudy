function solution(queue1, queue2) {
  let result = 0;
  let maxTryTime = (queue1.length + queue2.length) * 2;

  let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
  let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);

  if ((sum1 + sum2) % 2 !== 0) return -1;

  let idx1 = 0,
    idx2 = 0;

  while (true) {
    if (result > maxTryTime) return -1;

    if (sum1 === sum2) return result;

    if (sum1 < sum2) {
      sum1 += queue2[idx2];
      sum2 -= queue2[idx2];
      queue1.push(queue2[idx2++]);
    } else if (sum1 > sum2) {
      sum2 += queue1[idx1];
      sum1 -= queue1[idx1];
      queue2.push(queue1[idx1++]);
    }
    result += 1;
  }
}
