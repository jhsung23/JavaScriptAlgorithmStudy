function solution(tickets) {
  let result;
  const course = ['ICN'];
  const isUsed = new Array(tickets.length).fill(false);

  function dfs(city, level) {
    if (level === tickets.length) {
      if (result) {
        result = JSON.stringify(result) < JSON.stringify(course) ? result : [...course];
      } else result = [...course];
      return;
    }

    for (let i = 0; i < tickets.length; i++) {
      const [dep, des] = tickets[i];

      if (!isUsed[i] && dep === city) {
        course.push(des);
        isUsed[i] = true;
        dfs(des, level + 1);
        isUsed[i] = false;
        course.pop();
      }
    }
  }

  dfs('ICN', 0);

  return result;
}
