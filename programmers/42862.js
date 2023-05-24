function solution(n, lost, reserve) {
  let result = n - lost.length;

  const newLost = [];

  lost
    .sort((a, b) => a - b)
    .forEach((num) => {
      if (reserve.includes(num)) {
        result += 1;
        reserve.splice(reserve.indexOf(num), 1);
      } else {
        newLost.push(num);
      }
    });

  for (let i = 0; i < newLost.length; i++) {
    const borrowerNumber = newLost[i];
    const lenderNumberIdx1 = reserve.indexOf(borrowerNumber - 1);
    const lenderNumberIdx2 = reserve.indexOf(borrowerNumber + 1);

    if (lenderNumberIdx1 !== -1) {
      reserve.splice(lenderNumberIdx1, 1);
      result += 1;
      continue;
    }
    if (lenderNumberIdx2 !== -1) {
      reserve.splice(lenderNumberIdx2, 1);
      result += 1;
      continue;
    }
  }

  return result;
}
