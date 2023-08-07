function statusToText(status) {
  if (status === 'Enter') return '님이 들어왔습니다.';
  if (status === 'Leave') return '님이 나갔습니다.';
}

function solution(records) {
  const names = new Map();
  const statuses = [];

  for (let record of records) {
    const [status, uid, name] = record.split(' ');

    if (status === 'Enter') {
      statuses.push([uid, status]);
      names.set(uid, name);
    } else if (status === 'Change') {
      names.set(uid, name);
    } else if (status === 'Leave') {
      statuses.push([uid, status]);
    }
  }

  return statuses.map(([uid, status]) => `${names.get(uid)}${statusToText(status)}`);
}
