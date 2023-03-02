function solution(s) {
  return s
    .split(' ')
    .reduce((acc, cur) => {
      acc.push(
        cur
          .split('')
          .map((e, idx) => (idx === 0 ? e.toUpperCase() : e.toLowerCase()))
          .join('')
      );
      return acc;
    }, [])
    .join(' ');
}
