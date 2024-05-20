function solution(x, y, n) {
  if (x === y) return 0;
  let answer = 1;
  let memo = new Set();
  let dp = [[x]];
  dp[0].map(num => memo.add(num));

  const checkValid = newNum => {
    if (newNum === y) {
      return true;
    }
    if (!memo.has(newNum) && newNum < y) {
      memo.add(newNum);
      dp[answer].push(newNum);
    }
    return false;
  };

  while (true) {
    let findLess = false;
    let thisTime = dp[answer - 1];
    dp.push([]);
    for (let i = 0; i < thisTime.length; i++) {
      let num = thisTime[i];
      if (num < y) {
        findLess = true;
      }

      if (checkValid(num + n) || checkValid(num * 2) || checkValid(num * 3)) {
        return answer;
      }
    }
    answer++;
    if (!findLess) break;
  }

  return -1;
}
