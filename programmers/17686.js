function sortFile(fileA, fileB) {
  const headA = RegExp(/[^0-9]+/)
    .exec(fileA)[0]
    .toLowerCase();
  const headB = RegExp(/[^0-9]+/)
    .exec(fileB)[0]
    .toLowerCase();

  if (headA < headB) return -1;
  if (headA > headB) return 1;

  const numberA = Number(RegExp(/[0-9]+/).exec(fileA));
  const numberB = Number(RegExp(/[0-9]+/).exec(fileB));

  if (numberA < numberB) return -1;
  if (numberA > numberB) return 1;

  return 0;
}

function solution(files) {
  return files.sort(sortFile);
}
