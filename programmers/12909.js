function solution(s) {
  const stack = [];

  for (const rb of s) {
    if (rb === ')') {
      if (stack.length) stack.pop();
      else return false;
    } else {
      stack.push(rb);
    }
  }

  return stack.length === 0 ? true : false;
}
