function solution(numbers) {
  let answer = Array.from({ length: numbers.length }, () => -1);
  let stack = [];

  numbers.map((n, i) => {
    while (stack.length !== 0) {
      let [p_i, p_n] = stack.pop();
      if (p_n < n) {
        answer[p_i] = n;
      } else {
        stack.push([p_i, p_n]);
        break;
      }
    }
    stack.push([i, n]);
  });

  return answer;
}
