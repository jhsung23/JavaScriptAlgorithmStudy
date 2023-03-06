function solution(people, limit) {
  let p = 0,
    q = people.length - 1;
  let count = 0;

  people.sort((a, b) => b - a);

  while (p <= q) {
    if (p === q) {
      count += 1;
      break;
    }

    if (people[p] + people[q] <= limit) {
      p++;
      q--;
    } else {
      p++;
    }

    count += 1;
  }

  return count;
}
