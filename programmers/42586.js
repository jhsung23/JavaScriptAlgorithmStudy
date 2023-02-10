function solution(progresses, speeds) {
  const answer = [];

  while (progresses.length != 0) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    let count = 0;

    while (progresses[0] >= 100) {
      count += 1;
      progresses.shift();
      speeds.shift();
    }

    if (count !== 0) answer.push(count);
  }

  return answer;
}
