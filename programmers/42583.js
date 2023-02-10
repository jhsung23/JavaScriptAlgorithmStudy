function solution(bridge_length, weight, truck_weights) {
  const bridge = Array.from({ length: bridge_length }, () => 0);

  bridge[bridge.length - 1] = truck_weights[0];
  let bridgeWeight = truck_weights.shift();
  let time = 1;

  while (bridgeWeight > 0) {
    time += 1;
    bridgeWeight -= bridge.shift();

    if (bridgeWeight + truck_weights[0] <= weight) {
      bridge.push(truck_weights[0]);
      bridgeWeight += truck_weights.shift();
    } else bridge.push(0);
  }

  return time;
}
