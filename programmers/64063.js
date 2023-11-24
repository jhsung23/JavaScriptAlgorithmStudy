function solution(k, room_number) {
  const roomMap = new Map();

  for (let roomNumber of room_number) {
    let roomWillBeAssigned = roomNumber;
    const alreadyAssigned = [];
    while (roomMap.has(roomWillBeAssigned)) {
      alreadyAssigned.push(roomWillBeAssigned);
      roomWillBeAssigned = roomMap.get(roomWillBeAssigned);
    }
    roomMap.set(roomWillBeAssigned, roomWillBeAssigned + 1);
    for (let num of alreadyAssigned) {
      roomMap.set(num, roomWillBeAssigned + 1);
    }
  }

  return [...roomMap.keys()];
}
