function solution(n, computers) {
  const q = [];
  const visited = new Array(n).fill(false);
  let count = 0;

  for (let i = 0; i < computers.length; i++) {
    if (visited[i]) continue;

    q.push(i);
    while (q.length) {
      const cur = q.shift();
      visited[cur] = true;

      for (let j = 0; j < n; j++) {
        if (!visited[j] && computers[cur][j]) {
          q.push(j);
        }
      }
    }
    count += 1;
  }

  return count;
}
