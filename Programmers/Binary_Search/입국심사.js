function solution(n, times) {
  let answer = 0;
  let counterNum = times.length;
  let maxTime = times[counterNum - 1] * n;

  let left = 1;
  let right = maxTime;
  while (left <= right) {
    let people = 0;
    let mid = Math.floor((left + right) / 2);
    for (let t of times) {
      people += Math.floor(mid / t);
      if (people >= n) {
        break;
      }
    }

    if (people >= n) {
      answer = mid;
      right = mid - 1;
    }
    if (people < n) {
      left = mid + 1;
    }
  }

  return answer;
}
