function solution(users, emoticons) {
  const result = [0, 0];
  const discountInfo = [];
  const percents = [10, 20, 30, 40];

  dfs(0);

  function dfs(idx) {
    if (idx === emoticons.length) {
      let subscribe = 0;
      let revenue = 0;
      for (let [minPercent, maxPay] of users) {
        let toPay = 0;
        for (let [price, percent] of discountInfo) {
          const discountPrice = price * 0.01 * (100 - percent);

          if (percent >= minPercent) toPay += discountPrice;
        }

        if (toPay >= maxPay) subscribe += 1;
        else revenue += toPay;
      }

      if (result[0] < subscribe) {
        result[0] = subscribe;
        result[1] = revenue;
      } else if (result[0] === subscribe) {
        result[1] = Math.max(result[1], revenue);
      }
      return;
    } else {
      for (let i = 0; i < percents.length; i++) {
        discountInfo.push([emoticons[idx], percents[i]]);
        dfs(idx + 1);
        discountInfo.pop();
      }
    }
  }
  return result;
}
