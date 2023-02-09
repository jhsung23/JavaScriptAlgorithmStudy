function solution(clothes) {
  const map = new Map();

  for (const [name, type] of clothes) {
    map.set(type, (map.get(type) || 0) + 1);
  }

  return [...map].reduce((acc, [type, count]) => acc * (count + 1), 1) - 1;
}
