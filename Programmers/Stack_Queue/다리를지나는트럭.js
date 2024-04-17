function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let curWeight = 0;
  let curIdx = 0;
  let bridge = Array.from({ length: bridge_length }, () => 0);

  while (true) {
    let passed = bridge.shift();
    curWeight -= passed;

    if (curIdx < truck_weights.length) {
      let newTruck = truck_weights[curIdx];
      if (curWeight + newTruck > weight) {
        bridge.push(0);
      } else {
        bridge.push(newTruck);
        curWeight += newTruck;
        curIdx++;
      }
    }

    answer++;
    if (curWeight === 0) break;
  }

  return answer;
}
