function solution(numbers) {
  numbers
    .sort((a, b) => {
      if (a.toString() + b.toString() < b.toString() + a.toString()) {
        return -1;
      }
    })
    .reverse();

  return numbers[0] === 0 ? '0' : numbers.join('');
}
