function solution(numbers) {
  const numArr = numbers.split('');
  const set = new Set();

  for (let i = 1; i <= numArr.length; i++) {
    [...getPermutation(numArr, i)].forEach((e) => {
      set.add(Number(e.join('')));
    });
  }

  return Array.from(set).filter(isPrime).length;
}
function getPermutation(arr, selectNum) {
  if (selectNum === 1) return arr.map((e) => [e]);

  const result = [];

  arr.forEach((num, idx, arr) => {
    const fix = num;
    const rest = arr.filter((e, i) => i !== idx);
    const permutationOfRest = getPermutation(rest, selectNum - 1);
    const combine = permutationOfRest.map((e) => [fix, ...e]);
    result.push(...combine);
  });

  return result;
}
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}
