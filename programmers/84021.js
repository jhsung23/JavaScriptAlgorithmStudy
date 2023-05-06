function solution(game_board, table) {
  const blanks = [];
  let pieces = [];
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let result = 0;

  // game board에서 빈칸 구하기
  for (let i = 0; i < game_board.length; i++) {
    for (let j = 0; j < game_board[0].length; j++) {
      if (game_board[i][j]) continue;

      const q = [];
      const blank = [];
      q.push([i, j]);
      blank.push([i, j]);
      game_board[i][j] = 1;
      while (q.length) {
        const [curX, curY] = q.shift();

        for (let k = 0; k < 4; k++) {
          const nextX = curX + dx[k];
          const nextY = curY + dy[k];

          if (nextX < 0 || nextX >= game_board.length || nextY < 0 || nextY >= game_board[0].length)
            continue;

          if (game_board[nextX][nextY] === 0) {
            q.push([nextX, nextY]);
            blank.push([nextX, nextY]);
            game_board[nextX][nextY] = 1;
          }
        }
      }

      let minX = Number.MAX_SAFE_INTEGER,
        minY = Number.MAX_SAFE_INTEGER;

      blank.forEach(([x, y]) => {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
      });

      blanks.push(blank.map(([x, y]) => [x - minX, y - minY]).sort());
    }
  }

  // table에서 조각 구하기
  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table[0].length; j++) {
      if (!table[i][j]) continue;

      const q = [];
      const piece = [];
      q.push([i, j]);
      piece.push([i, j]);
      table[i][j] = 0;
      while (q.length) {
        const [curX, curY] = q.shift();

        for (let k = 0; k < 4; k++) {
          const nextX = curX + dx[k];
          const nextY = curY + dy[k];

          if (nextX < 0 || nextX >= table.length || nextY < 0 || nextY >= table[0].length) continue;

          if (table[nextX][nextY] === 1) {
            q.push([nextX, nextY]);
            piece.push([nextX, nextY]);
            table[nextX][nextY] = 0;
          }
        }
      }

      let minX = Number.MAX_SAFE_INTEGER,
        minY = Number.MAX_SAFE_INTEGER;

      piece.forEach(([x, y]) => {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
      });

      pieces.push(piece.map(([x, y]) => [x - minX, y - minY]));
    }
  }
  const jsonBlanks = blanks.map((blank) =>
    JSON.stringify(blank.sort((a, b) => a[0] + a[1] - (b[0] + b[1])))
  );

  for (let i = 0; i < 4; i++) {
    const isUsed = new Array(pieces.length).fill(false);
    pieces.forEach((piece, pieceIdx) => {
      const idx = jsonBlanks.indexOf(
        JSON.stringify(piece.sort((a, b) => a[0] + a[1] - (b[0] + b[1])))
      );

      if (idx !== -1) {
        jsonBlanks.splice(idx, 1);
        isUsed[pieceIdx] = true;
        result += piece.length;
      }
    });

    pieces = rotate(pieces.filter((_, idx) => !isUsed[idx]));
  }

  return result;
}

function rotate(pieces) {
  return pieces.map((piece) => {
    const maxIdx = Math.max(...piece.map(([x, _]) => x));
    return piece.map(([x, y]) => [y, maxIdx - x]).sort();
  });
}
