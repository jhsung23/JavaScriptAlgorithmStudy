const PERSON = 'P';
const DESK = 'O';
const PARTITION = 'X';

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const PLACE_LEN = 5;

function isBreakingTheRules(x, y, place) {
  const queue = [[x, y]];
  const room = Array.from({ length: PLACE_LEN }, () => new Array(PLACE_LEN).fill(0));
  const visited = Array.from({ length: PLACE_LEN }, () => new Array(PLACE_LEN).fill(false));

  while (queue.length) {
    const [x, y] = queue.shift();
    visited[x][y] = true;

    for (let k = 0; k < dx.length; k++) {
      const [nextX, nextY] = [x + dx[k], y + dy[k]];

      if (nextX < 0 || nextX >= PLACE_LEN || nextY < 0 || nextY >= PLACE_LEN) {
        continue;
      }

      if (place[nextX][nextY] === DESK && !visited[nextX][nextY]) {
        queue.push([nextX, nextY]);
        room[nextX][nextY] = room[x][y] + 1;
      } else if (place[nextX][nextY] === PERSON && !visited[nextX][nextY]) {
        if (room[x][y] < 2) {
          return true;
        }
      }
    }
  }

  return false;
}

function solution(places) {
  const result = [];

  for (let place of places) {
    const occupied = [];

    for (let i = 0; i < PLACE_LEN; i++) {
      for (let j = 0; j < PLACE_LEN; j++) {
        if (place[i][j] === PERSON) occupied.push([i, j]);
      }
    }

    let flag = false;
    for (let [x, y] of occupied) {
      if (isBreakingTheRules(x, y, place)) {
        flag = true;
        break;
      }
    }

    if (flag) result.push(0);
    else result.push(1);
  }

  return result;
}
