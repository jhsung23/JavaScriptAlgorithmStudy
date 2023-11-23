const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

function solution(board) {
  const cost = Array.from({ length: board.length }, () =>
    Array.from({ length: board.length }, () =>
      Array.from({ length: 4 }, () => Number.MAX_SAFE_INTEGER)
    )
  );

  for (let i = 0; i < 4; i++) {
    cost[0][0][i] = 0;
  }

  const queue = [[0, 0, undefined, 0]];
  while (queue.length !== 0) {
    const [curX, curY, direction, curCost] = queue.shift();

    for (let nextDirection = 0; nextDirection < 4; nextDirection++) {
      const [nextX, nextY] = [curX + dx[nextDirection], curY + dy[nextDirection]];

      if (!inRange(nextX, nextY, board.length) || board[nextX][nextY] === 1) continue;

      const nextCost =
        curCost + (direction === undefined || direction === nextDirection ? 100 : 600);
      if (nextCost < cost[nextX][nextY][nextDirection]) {
        cost[nextX][nextY][nextDirection] = nextCost;
        queue.push([nextX, nextY, nextDirection, nextCost]);
      }
    }
  }

  return Math.min(...cost[board.length - 1][board.length - 1]);
}
function inRange(x, y, n) {
  if (x >= 0 && x < n && y >= 0 && y < n) return true;
  return false;
}
