function solution(bandage, health, attacks) {
  const attackMap = new Map(attacks);
  const maxTime = Math.max(...attackMap.keys());
  const [techTime, heal, additional] = bandage;

  let currentHealth = health;
  let continuos = 0;
  for (let t = 1; t <= maxTime; t++) {
    if (attackMap.has(t)) {
      continuos = 0;
      currentHealth -= attackMap.get(t);
      if (currentHealth <= 0) return -1;
    } else {
      currentHealth = Math.min(health, currentHealth + heal);
      continuos += 1;
      if (techTime === continuos) {
        currentHealth = Math.min(health, currentHealth + additional);
        continuos = 0;
      }
    }
  }

  return currentHealth > 0 ? currentHealth : -1;
}
