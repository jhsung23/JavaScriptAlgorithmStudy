function solution(arr) {
  const queue = [];

  for (const num of arr) {
    if (queue[queue.length - 1] === num) continue;
    queue.push(num);
  }

  return queue;
}
