function getBinary(num) {
  const binary = [];
  num = parseInt(num);
  while (num) {
    binary.push(num % 2);
    num = parseInt(num / 2);
  }
  return binary.reverse().join('');
}

function solution(s) {
  let removedZeroCount = 0;
  let convertCount = 0;

  while (s.length !== 1) {
    const removedZero = s.replace(/0/g, '');
    removedZeroCount += s.length - removedZero.length;
    s = getBinary(removedZero.length);
    convertCount += 1;
  }

  return [convertCount, removedZeroCount];
}
