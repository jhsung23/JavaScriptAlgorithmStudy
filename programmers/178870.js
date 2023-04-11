function solution(sequence, k) {
  let q = 0;
  let sum = sequence[0];
  let gap = Number.MAX_SAFE_INTEGER;
  let res = [];

  for (let p = 0; p < sequence.length; p++) {
    while (sum < k) {
      sum += sequence[++q];
    }

    if (sum === k) {
      if (gap > q - p) {
        gap = q - p;
        res = [p, q];
      }
    }

    sum -= sequence[p];
  }

  return res;
}
