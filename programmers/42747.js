function solution(citations) {
  citations.sort((a, b) => a - b);

  for (let i = citations.length; i >= 0; i--) {
    if (i <= citations.filter((c) => c >= i).length) return i;
  }

  return 0;
}
