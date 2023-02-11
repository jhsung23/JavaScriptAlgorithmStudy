function solution(answers) {
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const count = [0, 0, 0];

  for (const answer of answers) {
    let cur1 = p1.shift();
    let cur2 = p2.shift();
    let cur3 = p3.shift();

    if (answer === cur1) count[0] += 1;
    if (answer === cur2) count[1] += 1;
    if (answer === cur3) count[2] += 1;

    p1.push(cur1);
    p2.push(cur2);
    p3.push(cur3);
  }

  return count
    .reduce((acc, cur, idx) => {
      if (cur === Math.max(...count)) acc.push(idx + 1);
      return acc;
    }, [])
    .sort((a, b) => a - b);
}
