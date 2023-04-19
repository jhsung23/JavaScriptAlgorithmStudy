function solution(operations) {
  const pq = [];

  operations.forEach((operation) => {
    const [command, number] = operation.split(' ');

    if (command === 'I') {
      pq.push(+number);
    } else if (command === 'D' && number === '-1') {
      pq.splice(pq.indexOf(Math.min(...pq)), 1);
    } else if (command === 'D' && number === '1') {
      pq.splice(pq.indexOf(Math.max(...pq)), 1);
    }
  });

  return pq.length ? [Math.max(...pq), Math.min(...pq)] : [0, 0];
}
