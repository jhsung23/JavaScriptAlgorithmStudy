function isRight(target) {
  const openSet = new Set(['(', '{', '[']);
  const closeSet = new Set([')', '}', ']']);

  if (closeSet.has(target[0])) return false;

  const stack = [];
  for (const char of target) {
    if (openSet.has(char)) {
      stack.push(char);
    } else {
      if (
        (char === ')' && stack[stack.length - 1] === '(') ||
        (char === '}' && stack[stack.length - 1] === '{') ||
        (char === ']' && stack[stack.length - 1] === '[')
      ) {
        stack.pop();
      } else return false;
    }
  }

  return stack.length ? false : true;
}

function solution(s) {
  const q = s.split('');
  let result = isRight(q) ? 1 : 0;

  for (let i = 1; i < q.length; i++) {
    q.push(q.shift());

    if (isRight(q)) result += 1;
  }

  return result;
}
