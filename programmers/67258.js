function solution(gems) {
  let result = [0, gems.length - 1];

  const numberOfGems = new Set(gems).size;
  const cart = new Map();

  let p = 0;
  for (let q = 0; q < gems.length; q++) {
    cart.set(gems[q], (cart.get(gems[q]) || 0) + 1);

    while (cart.size === numberOfGems) {
      if (Math.abs(result[1] - result[0]) > Math.abs(q - p)) result = [p, q];

      if (cart.get(gems[p]) >= 2) {
        cart.set(gems[p], cart.get(gems[p]) - 1);
        p += 1;
      } else break;
    }
  }

  return result.map((a) => a + 1);
}
