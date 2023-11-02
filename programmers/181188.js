function solution(targets) {
  let result = 1;
  const sortedTargets = targets.sort(([x1, y1], [x2, y2]) => {
    if (y1 < y2) return -1;
    if (y1 === y2) return x1 - x2;
    if (y1 > y2) return 1;
  });

  let [curX, curY] = targets[0];

  for (let i = 1; i < targets.length; i++) {
    const [nextX, nextY] = targets[i];

    if (curY > nextX) continue;
    else {
      result += 1;
      curX = nextX;
      curY = nextY;
    }
  }

  return result;
}
