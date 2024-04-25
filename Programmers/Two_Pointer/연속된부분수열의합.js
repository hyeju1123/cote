function solution(sequence, k) {
  let answer = [];
  let seqLen = sequence.length;
  let minLen = Infinity;
  let intervalSum = 0;
  let end = 0;

  sequence.forEach((startValue, start) => {
    while (intervalSum < k && end < seqLen) {
      // console.log("start: ", start, " end: ", end);
      intervalSum += sequence[end];
      end++;
    }

    if (intervalSum === k) {
      let currentLen = end - 1 - start;
      if (currentLen < minLen) {
        minLen = currentLen;
        answer = [start, end - 1];
      }
    }

    intervalSum -= startValue;
  });

  return answer;
}
