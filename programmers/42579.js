function solution(genres, plays) {
  const genreMap = new Map();
  let answer = [];

  for (let i = 0; i < genres.length; i++) {
    genreMap.set(genres[i], (genreMap.get(genres[i]) || 0) + plays[i]);
  }

  const genreRank = [...genreMap]
    .sort(([_, play1], [__, play2]) => play2 - play1)
    .map(([genre, play]) => genre);

  for (const genre of genreRank) {
    const tmp = [];
    for (let i = 0; i < genres.length; i++) {
      if (genres[i] === genre) {
        tmp.push([plays[i], i]);
      }
    }

    answer = answer.concat(
      tmp
        .sort(([play1, _1], [play2, _2]) => play2 - play1)
        .slice(0, 2)
        .map(([_, songNumber]) => songNumber)
    );
  }

  return answer;
}
