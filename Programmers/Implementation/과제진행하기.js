function calcMinute(prev, next) {
  let prevHour = parseInt(prev.slice(0, 2));
  let prevMin = parseInt(prev.slice(3));
  let nextHour = parseInt(next.slice(0, 2));
  let nextMin = parseInt(next.slice(3));

  if (prevHour === nextHour) {
    return nextMin - prevMin;
  }

  return (nextHour - prevHour - 1) * 60 + (60 - prevMin) + nextMin;
}

function solution(plans) {
  let answer = [];

  // 시간 순으로 정렬
  plans.sort((a, b) => {
    let aHour = a[1].slice(0, 2);
    let aMin = a[1].slice(3);
    let bHour = b[1].slice(0, 2);
    let bMin = b[1].slice(3);

    if (aHour !== bHour) {
      return aHour - bHour;
    } else {
      return aMin - bMin;
    }
  });
  plans.push(["temp", "23:59", "-1"]);

  let haltStack = [];
  plans.slice(1).reduce((prev, next) => {
    let workingTime = parseInt(prev[2]);
    let interval = calcMinute(prev[1], next[1]);
    let rest = next[2] === "-1" ? 1000000000 : interval - workingTime;

    if (rest < 0) {
      haltStack.push([prev[0], -1 * rest]);
    } else {
      answer.push(prev[0]);
      while (true) {
        if (haltStack.length === 0) break;
        let [haltName, haltTime] = haltStack.pop();
        let haltRest = haltTime - rest;

        if (haltRest > 0) {
          haltStack.push([haltName, haltRest]);
          break;
        } else {
          answer.push(haltName);
          rest = -1 * haltRest;
        }
      }
    }
    return next;
  }, plans[0]);

  return answer;
}
