function solution(s) {
  const tuples = s
    .slice(2, s.length - 2)
    .split('},{')
    .sort((a, b) => a.length - b.length);
  const elements = new Set();

  for (const tuple of tuples) {
    const numbers = tuple.split(',');

    for (const number of numbers) {
      if (!elements.has(+number)) {
        elements.add(+number);
      }
    }
  }

  return [...elements];
}
