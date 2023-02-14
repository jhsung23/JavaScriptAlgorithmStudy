function solution(numbers) {
  const set = new Set();

  for (let i = 1; i <= numbers.length; i++) {
    permutation([...numbers], i).forEach((value) => {
      set.add(Number(value.join('')));
    });
  }

  return Array.from(set).filter(isPrimeNumber).length;
}

function permutation(arr, selectNum) {
  if (selectNum === 1) return arr.map((v) => [v]);

  const result = [];

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });

  return result;
}

function isPrimeNumber(value) {
  if (value < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(value); i++) {
    if (value % i === 0) {
      return false;
    }
  }

  return true;
}
