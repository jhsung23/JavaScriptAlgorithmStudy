function solution(elements) {
  const set = new Set(elements);

  for (let p = 0; p < elements.length; p++) {
    let sum = elements[p];

    for (let q = p + 1; p !== q % elements.length; q++) {
      sum += elements[q % elements.length];
      set.add(sum);
    }
  }

  return set.size;
}
