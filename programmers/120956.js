function solution(babbling) {
  return babbling
    .map((word) => word.replace(/aya|ye|woo|ma/g, ''))
    .filter((str) => str.length === 0).length;
}
