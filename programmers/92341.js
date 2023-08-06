function getTimeDiff(inTime, outTime) {
  const [entryHour, entryMin] = inTime.split(':');
  const [exitHour, exitMin] = outTime.split(':');

  return (
    parseInt(exitHour) * 60 + parseInt(exitMin) - (parseInt(entryHour) * 60 + parseInt(entryMin))
  );
}

function solution(fees, records) {
  const [defaultTime, defaultCharge, unitTime, unitCharge] = fees;

  const parking = new Map();
  const totalTime = new Map();

  for (let record of records) {
    const [time, carNumber, status] = record.split(' ');

    if (status === 'IN') {
      parking.set(carNumber, time);
    } else if (status === 'OUT') {
      totalTime.set(
        carNumber,
        (totalTime.get(carNumber) || 0) + getTimeDiff(parking.get(carNumber), time)
      );
      parking.delete(carNumber);
    }
  }

  parking.forEach((inTime, carNumber) =>
    totalTime.set(carNumber, (totalTime.get(carNumber) || 0) + getTimeDiff(inTime, '23:59'))
  );

  return [...totalTime]
    .sort(([carNum1, _], [carNum2, __]) => {
      if (carNum1 < carNum2) return -1;
      else return 1;
    })
    .map(([carNum, minutes]) =>
      minutes < defaultTime
        ? defaultCharge
        : defaultCharge + Math.ceil((minutes - defaultTime) / unitTime) * unitCharge
    );
}
