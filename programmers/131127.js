function solution(want, number, discount) {
  let result = 0;
  const canBuy = new Map();

  function isProperDay() {
    for (let i = 0; i < want.length; i++) {
      const product = want[i];
      const count = number[i];

      if (!canBuy.has(product)) return false;
      if (canBuy.get(product) < count) return false;
    }

    return true;
  }

  for (let i = 0; i < 10; i++) {
    canBuy.set(discount[i], (canBuy.get(discount[i]) || 0) + 1);
  }

  for (let day = 0; day < discount.length; day++) {
    const product = discount[day];

    if (isProperDay()) result += 1;

    if (day === discount.length - 1) break;

    if (canBuy.get(product) >= 2) {
      canBuy.set(product, canBuy.get(product) - 1);
    } else canBuy.delete(product);

    const nextProduct = discount[10 + day];
    canBuy.set(nextProduct, (canBuy.get(nextProduct) || 0) + 1);
  }

  return result;
}
