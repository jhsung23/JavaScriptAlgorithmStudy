function solution(participants, completion) {
  const map = new Map();

  for (const p of participants) {
    if (!map.has(p)) map.set(p, 1);
    else map.set(p, map.get(p) + 1);
  }

  for (const name of completion) {
    if (!map.has(name)) continue;
    map.set(name, map.get(name) - 1);
  }

  return [...map].filter(([name, count]) => count !== 0)[0][0];
}
