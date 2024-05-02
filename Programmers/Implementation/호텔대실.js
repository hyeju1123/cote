function solution(book_time) {
  let hourHs = new Map();

  book_time.map(time => {
    let startTime = time[0];
    let hour = startTime.slice(0, 2);

    if (hourHs.has(hour)) {
      let hourArr = hourHs.get(hour);
      hourArr.push(time);
    } else {
      hourHs.set(hour, [time]);
    }
  });

  for (let hour of hourHs.keys()) {
    let timeArr = hourHs.get(hour);
    timeArr.sort(function (a, b) {
      let aStartMin = a[0].slice(3);
      let bStartMin = b[0].slice(3);

      if (aStartMin > bStartMin) {
        return 1;
      }
      if (aStartMin < bStartMin) {
        return -1;
      }
      return 0;
    });
  }

  let roomNum = 0;
  let rooms = new Map();
  let hours = [...hourHs.keys()].sort();

  hours.map(hour => {
    let hourArr = hourHs.get(hour);
    hourArr.map(time => {
      let startHour = time[0].slice(0, 2);
      let startMin = time[0].slice(3);
      let fastStart = "23:59";
      let fastRoom = 0;

      for (let [roomId, lastTime] of rooms.entries()) {
        let lastHour = parseInt(lastTime.slice(0, 2));
        let lastMin = parseInt(lastTime.slice(3));

        // 청소시간 계산
        if (lastMin + 10 >= 60) {
          lastHour += 1;
          lastMin -= 50;
        } else {
          lastMin += 10;
        }

        if (
          lastHour < startHour ||
          (lastHour == startHour && lastMin <= startMin)
        ) {
          let fastStartHour = fastStart.slice(0, 2);
          let fastStartMin = fastStart.slice(3);

          if (
            lastHour < fastStartHour ||
            (lastHour == fastStartHour && lastMin <= fastStartMin)
          ) {
            fastRoom = roomId;
            fastStart = lastHour + ":" + lastMin;
          }
        }
      }

      if (fastRoom === 0) {
        roomNum += 1;
        rooms.set(roomNum, time[1]);
      } else {
        rooms.set(fastRoom, time[1]);
      }
    });
  });

  return roomNum;
}
