function solution(triangle) {
  const dp = Array.from({ length: triangle.length }, () => []);

  dp[0].push(triangle[0][0]);

  for (let depth = 1; depth < triangle.length; depth++) {
    for (let i = 0; i < triangle[depth].length; i++) {
      const maxVal = Math.max(dp[depth - 1][i - 1] || 0, dp[depth - 1][i] || 0);
      dp[depth].push(triangle[depth][i] + maxVal);
    }
  }

  return Math.max(...dp[dp.length - 1]);
}
