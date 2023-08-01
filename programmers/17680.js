function solution(cacheSize, cities) {
  let execTime = 0;
  let cacheSet = new Set();

  if (cacheSize === 0) return 5 * cities.length;

  for (let city of cities) {
    city = city.toLowerCase();
    if (cacheSet.has(city)) {
      cacheSet.delete(city);
      cacheSet.add(city);
      execTime += 1;
    } else {
      if (cacheSet.size >= cacheSize) {
        const tmpArr = [...cacheSet];
        tmpArr.shift();
        cacheSet = new Set(tmpArr);
      }
      cacheSet.add(city);
      execTime += 5;
    }
  }

  return execTime;
}
