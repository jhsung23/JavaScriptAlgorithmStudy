function solution(k, dungeons) {
  let i = 0,
    result = -1;
  const dungeonsCode = Array.from({ length: dungeons.length }, () => i++);
  const explorationSequence = getPermutation(dungeonsCode, dungeons.length);

  for (const sequence of explorationSequence) {
    let count = 0,
      energy = k;
    for (const code of sequence) {
      const [need, consume] = dungeons[code];

      if (energy >= need) {
        energy -= consume;
        count += 1;
      }
    }
    result = Math.max(result, count);
  }

  return result;
}
function getPermutation(arr, selectNum) {
  if (selectNum === 1) return arr.map((e) => [e]);

  const result = [];

  arr.forEach((e, i, arr) => {
    const fix = e;
    const rest = arr.filter((e, idx) => idx !== i);
    const perOfRest = getPermutation(rest, selectNum - 1);
    const combine = perOfRest.map((e) => [fix, ...e]);
    result.push(...combine);
  });

  return result;
}
