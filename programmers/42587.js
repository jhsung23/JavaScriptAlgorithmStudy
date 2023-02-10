function solution(priorities, location) {
  let count = 0;
  const map = [];

  for (let i = 0; i < priorities.length; i++) {
    map.push([priorities[i], i]);
  }

  while (true) {
    const [curPrio, curloc] = map.shift();

    if (map.filter(([prio, loc]) => prio > curPrio).length) {
      map.push([curPrio, curloc]);
    } else {
      count += 1;
      if (curloc === location) return count;
    }
  }
}
