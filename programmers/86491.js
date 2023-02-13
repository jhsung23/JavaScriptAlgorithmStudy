function solution(sizes) {
  for (let i = 0; i < sizes.length; i++) {
    const [a, b] = sizes[i];
    if (a > b) [sizes[i][0], sizes[i][1]] = [b, a];
  }

  const maxWidth = Math.max(...sizes.map(([a, b]) => a));
  const maxHeight = Math.max(...sizes.map(([a, b]) => b));

  return maxWidth * maxHeight;
}
