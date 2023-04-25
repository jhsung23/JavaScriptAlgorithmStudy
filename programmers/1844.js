function solution(maps) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const q = [];
  const visited = Array.from({ length: maps.length }, () => new Array(maps[0].length).fill(false));
  const dist = Array.from({ length: maps.length }, () => new Array(maps[0].length).fill(0));

  q.push([0, 0]);
  visited[0][0] = true;
  dist[0][0] = 1;

  while (q.length) {
    const [curX, curY] = q.shift();

    for (let i = 0; i < 4; i++) {
      const x = curX + dx[i];
      const y = curY + dy[i];

      if (x >= 0 && x < maps.length && y >= 0 && y < maps[0].length) {
        if (maps[x][y] === 1 && !visited[x][y]) {
          q.push([x, y]);
          dist[x][y] = dist[curX][curY] + 1;
          visited[x][y] = true;
        }
      }
    }
  }

  return dist[maps.length - 1][maps[0].length - 1] ? dist[maps.length - 1][maps[0].length - 1] : -1;
}
