function solution(orders, courses) {
  const menuCountMap = new Map();
  const maxCountMap = new Map();

  function makeMenuAndCount(combi, lv, order, course) {
    if (combi.length === course) {
      menuCountMap.set(combi, (menuCountMap.get(combi) || 0) + 1);
      maxCountMap.set(
        combi.length,
        Math.max(maxCountMap.get(combi.length) || 0, menuCountMap.get(combi))
      );
    } else {
      for (let i = lv; i < order.length; i++) {
        makeMenuAndCount(combi + order[i], i + 1, order, course);
      }
    }
  }

  for (let order of orders) {
    order = order.split('').sort();

    for (let course of courses) {
      for (let i = 0; i < order.length; i++) {
        makeMenuAndCount(order[i], i + 1, order, course);
      }
    }
  }

  return [...menuCountMap]
    .filter(([menu, count]) => count >= 2 && count >= maxCountMap.get(menu.length))
    .map(([menu, count]) => menu)
    .sort();
}
