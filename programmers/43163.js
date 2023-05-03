function hasOneDiff(word1, word2) {
  const arr1 = word1.split('').sort();
  const arr2 = word2.split('').sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) !== -1) {
      arr2.splice(arr2.indexOf(arr1[i]), 1);
    }
  }

  return arr2.length === 1 ? true : false;
}

function solution(begin, target, words) {
  let res = Number.MAX_SAFE_INTEGER;
  const notUsed = Array.from({ length: words.length }, () => true);

  if (!words.includes(target)) return 0;

  function dfs(currentWord, count) {
    if (currentWord === target) {
      res = Math.min(res, count);
      return;
    }

    for (let i = 0; i < words.length; i++) {
      if (notUsed[i] && hasOneDiff(currentWord, words[i])) {
        notUsed[i] = false;
        dfs(words[i], count + 1);
        notUsed[i] = true;
      }
    }
  }

  dfs(begin, 0);
  return res;
}
