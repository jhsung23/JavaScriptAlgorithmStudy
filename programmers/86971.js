function solution(n, wires) {
  let res = Number.MAX_SAFE_INTEGER;

  for (let cut = 0; cut < wires.length; cut++) {
    const connection = Array.from({ length: n + 1 }, () => []);

    for (let i = 0; i < wires.length; i++) {
      if (cut === i) continue;

      const [v1, v2] = wires[i];

      connection[v1].push(v2);
      connection[v2].push(v1);
    }

    let count = 0;
    const queue = [1];
    const visited = Array.from({ length: n + 1 }, () => false);

    while (queue.length) {
      const togo = queue.shift();

      if (!visited[togo]) {
        count += 1;
        visited[togo] = true;
      } else continue;

      for (const connectedVertex of connection[togo]) {
        queue.push(connectedVertex);
      }
    }
    res = Math.min(res, Math.abs(n - 2 * count));
  }

  return res;
}
