function makeMultiSet(str) {
  const multiSet = [];

  for (let i = 0; i < str.length - 1; i++) {
    const token = str.slice(i, i + 2).toLowerCase();

    if (token.length === 2 && new RegExp(/^[a-z]*$/).test(token)) {
      multiSet.push(token);
    }
  }

  return multiSet;
}

function getInterOrUnionElementCount(arr1, arr2) {
  let interCount = 0;
  let unionCount = 0;

  const map1 = new Map();
  const map2 = new Map();

  for (let element of arr1) {
    map1.set(element, (map1.get(element) || 0) + 1);
  }

  for (let element of arr2) {
    map2.set(element, (map2.get(element) || 0) + 1);
  }

  for (let [key, count] of map1) {
    if (map1.has(key) && map2.has(key)) {
      interCount += Math.min(map1.get(key), map2.get(key));
    }
  }

  unionCount = arr1.length + arr2.length - interCount;

  return [interCount, unionCount];
}

function solution(str1, str2) {
  if (str1.length === 0 && str2.length === 0) return 65536;
  if (str1.length === 0 || str2.length === 0) return 0;

  const multiSet1 = makeMultiSet(str1);
  const multiSet2 = makeMultiSet(str2);

  let [inter, union] = getInterOrUnionElementCount(multiSet1, multiSet2);

  let jaccard = union === 0 ? 1 : inter / union;

  return parseInt(jaccard * 65536);
}
