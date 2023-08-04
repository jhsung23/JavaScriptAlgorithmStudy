function isPrime(number) {
  if (number === 1) return false;
  if (number === 2) return true;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }

  return true;
}

function solution(n, k) {
  let result = 0;
  const targets = Number(n).toString(k).split('0');

  for (let target of targets) {
    if (target !== '' && isPrime(+target)) {
      result += 1;
    }
  }

  return result;
}
