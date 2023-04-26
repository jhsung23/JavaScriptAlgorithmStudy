function solution(n, left, right) {
  const answer = [];
  const leftRow = n === 1 ? 0 : Number.parseInt(left / n);
  const leftCol = left - n * leftRow;
  const rightRow = n === 1 ? 0 : Number.parseInt(right / n);
  const rightCol = right - n * rightRow;

  for (let row = leftRow; row <= rightRow; row++) {
    let start = 0,
      end = n - 1;

    if (row === leftRow) {
      start = leftCol;
      end = leftRow === rightRow ? rightCol : end;
    } else if (row === rightRow) {
      end = rightCol;
    }

    for (let col = start; col <= end; col++) {
      answer.push(col <= row ? row + 1 : col + 1);
    }
  }

  return answer;
}
