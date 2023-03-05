function solution(n, words) {
  let turn = 1;
  let previousWord = words[0];
  const wordSet = new Set([words[0]]);

  for (let i = 1; i < words.length; i++) {
    if (wordSet.has(words[i])) {
      return [(i % n) + 1, turn];
    }
    if (previousWord[previousWord.length - 1] !== words[i][0]) {
      return [(i % n) + 1, turn];
    }

    wordSet.add(words[i]);
    previousWord = words[i];
    if ((i + 1) % n === 0) turn += 1;
  }

  return [0, 0];
}
