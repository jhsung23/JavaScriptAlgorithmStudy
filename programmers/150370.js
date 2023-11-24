const DATE = 28;
function solution(today, terms, privacies) {
  const result = [];

  const [tYear, tMonth, tDate] = parseDate(today);
  const elapsedOfToday = getElapsedDate(tYear, tMonth, tDate);
  const termMap = new Map(terms.map((a) => [a.split(' ')[0], Number(a.split(' ')[1])]));

  privacies.forEach((privacy, idx) => {
    const [date, term] = privacy.split(' ');
    const expireUnit = termMap.get(term) * DATE;

    if (getElapsedDate(...parseDate(date)) + expireUnit <= elapsedOfToday) {
      result.push(idx + 1);
    }
  });

  return result;
}
function parseDate(date) {
  return date.split('.').map(Number);
}
function getElapsedDate(year, month, date) {
  return (year - 1) * 12 * 28 + (month - 1) * 28 + date;
}
