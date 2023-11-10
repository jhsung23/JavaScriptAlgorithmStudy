const move = { L: [-1, 0], R: [1, 0], D: [0, -1], U: [0, 1] };

function solution(dirs) {
  let result = 0;
  const visited = new Set();

  let [x, y] = [0, 0];
  for (let dir of dirs) {
    const [offsetX, offsetY] = move[dir];
    const nextX = x + offsetX;
    const nextY = y + offsetY;

    if (nextX < -5 || nextX > 5 || nextY < -5 || nextY > 5) continue;

    if (!visited.has(`${x}${y}${nextX}${nextY}` || `${nextX}${nextY}${x}${y}`)) {
      visited.add(`${x}${y}${nextX}${nextY}`);
      visited.add(`${nextX}${nextY}${x}${y}`);
      result += 1;
    }

    x = nextX;
    y = nextY;
  }

  return result;
}
