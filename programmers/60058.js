function separateToBalancedString(string) {
  let u = '';
  let leftCount = 0,
    rightCount = 0;

  for (let idx = 0; idx < string.length; idx++) {
    const char = string[idx];
    if (char === '(') leftCount += 1;
    if (char === ')') rightCount += 1;

    u += char;

    if (leftCount === rightCount) {
      return [u, string.slice(idx + 1)];
    }
  }
}
function isCorrectString(string) {
  const stack = [];

  for (const char of string) {
    if (char === '(') stack.push('(');
    else if (char === ')') {
      if (stack[stack.length - 1] === ')') return false;
      stack.pop();
    }
  }

  return stack.length ? false : true;
}
function convert(string) {
  let result = '';

  for (const char of string) {
    if (char === '(') result += ')';
    if (char === ')') result += '(';
  }

  return result;
}
function solution(p) {
  if (p === '') return '';

  let result = '';
  const [u, v] = separateToBalancedString(p);

  if (isCorrectString(u)) {
    result += u + solution(v);
  } else {
    result += '(' + solution(v) + ')' + convert(u.slice(1, u.length - 1));
  }

  return result;
}
