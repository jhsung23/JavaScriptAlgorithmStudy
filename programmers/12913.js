function solution(lands) {
  const dp = [[...lands[0]]];

  for (let i = 1; i < lands.length; i++) {
    const scores = [];
    for (let k = 0; k < 4; k++) {
      const maxScoreOfBeforeLand = Math.max(...dp[i - 1].filter((_, idx) => idx !== k));
      scores.push(lands[i][k] + maxScoreOfBeforeLand);
    }
    dp.push(scores);
  }
  return Math.max(...dp[dp.length - 1]);
}
