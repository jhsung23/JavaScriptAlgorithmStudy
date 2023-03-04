function solution(n) {
  let numberOfOnes = Number(n).toString(2).match(/1/g).length;
  let bigNumber = n + 1;

  while (true) {
    if (Number(bigNumber).toString(2).match(/1/g).length !== numberOfOnes) bigNumber += 1;
    else return bigNumber;
  }
}
