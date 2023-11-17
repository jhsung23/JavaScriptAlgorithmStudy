function solution(alp, cop, problems) {
  let maxAlp = alp;
  let maxCop = cop;

  for (let [alp_req, cop_req] of problems) {
    maxAlp = Math.max(maxAlp, alp_req);
    maxCop = Math.max(maxCop, cop_req);
  }

  const dp = Array.from({ length: maxAlp + 1 }, () =>
    Array.from({ length: maxCop + 1 }, () => Number.MAX_SAFE_INTEGER)
  );

  dp[alp][cop] = 0;
  for (let a = alp; a <= maxAlp; a++) {
    for (let c = cop; c <= maxCop; c++) {
      if (a + 1 <= maxAlp) {
        dp[a + 1][c] = Math.min(dp[a + 1][c], dp[a][c] + 1);
      }
      if (c + 1 <= maxCop) {
        dp[a][c + 1] = Math.min(dp[a][c + 1], dp[a][c] + 1);
      }
      if (a === maxAlp && c === maxCop) break;
      for (let [alp_req, cop_req, alp_rwd, cop_rwd, cost] of problems) {
        if (a >= alp_req && c >= cop_req) {
          const newA = a + alp_rwd > maxAlp ? maxAlp : a + alp_rwd;
          const newC = c + cop_rwd > maxCop ? maxCop : c + cop_rwd;
          dp[newA][newC] = Math.min(dp[newA][newC], dp[a][c] + cost);
        }
      }
    }
  }

  return dp[maxAlp][maxCop];
}
