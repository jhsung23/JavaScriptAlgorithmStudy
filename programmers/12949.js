function solution(arr1, arr2) {
  if (arr1[0].length !== arr2.length) {
    [arr1, arr2] = [arr2, arr1];
  }

  const result = [];

  arr1.forEach((arr) => {
    const tmp = [];

    for (let i = 0; i < arr2[0].length; i++) {
      tmp.push(arr.reduce((acc, cur, idx) => acc + cur * arr2[idx][i], 0));
    }

    result.push(tmp);
  });

  return result;
}
