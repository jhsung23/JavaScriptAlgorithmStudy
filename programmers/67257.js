const priorities = [
  ['+', '-', '*'],
  ['+', '*', '-'],
  ['-', '+', '*'],
  ['-', '*', '+'],
  ['*', '+', '-'],
  ['*', '-', '+'],
];

function calculate(num1, operator, num2) {
  num1 = Number(num1);
  num2 = Number(num2);

  if (operator === '+') return num1 + num2;
  if (operator === '-') return num1 - num2;
  if (operator === '*') return num1 * num2;
}

function solution(expression) {
  let result = 0;

  for (let priority of priorities) {
    const splittedExpression = expression.match(/\d+|[\-\+\*]/g);

    for (let operator of priority) {
      while (splittedExpression.indexOf(operator) !== -1) {
        const index = splittedExpression.indexOf(operator);
        splittedExpression.splice(
          index - 1,
          3,
          calculate(splittedExpression[index - 1], operator, splittedExpression[index + 1])
        );
      }
    }

    result = Math.max(result, Math.abs(splittedExpression[0]));
  }

  return result;
}
